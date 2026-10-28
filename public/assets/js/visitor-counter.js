/**
 * Live Visitor Statistics System
 *
 * Implements live visitor telemetry for GitHub Pages:
 *  1. Total Visitors (deduplicated by persistent browser UUID)
 *  2. Today's Visitors (deduplicated by Pakistan Standard Time UTC+5 calendar day)
 *  3. Online Visitors (strict 10-second presence window with 5-second heartbeats)
 *  4. Total Page Views (visits to catalog/projects showcase)
 *
 * Architecture & Provider Details:
 *  - Mode 'countapi': Zero-setup, public serverless key-value counter API (https://countapi.mileshilliard.com/api/v1).
 *    Note on CountAPI limitation: CountAPI provides atomic hit/get key counters. It does not provide server-side
 *    TTL, ephemeral presence, or WebSocket channels. Therefore, in CountAPI mode, Online Visitors reflects the
 *    authenticated active local session (1 when active within 10s, 0 when idle), avoiding fake numbers.
 *  - Mode 'firebase': Optional full-featured Firebase Realtime Database integration supporting cross-device
 *    synchronized presence with `/.info/connected` and `onDisconnect()`, atomic transactions, and security rules.
 */

(function () {
    'use strict';

    // Prevent duplicate script execution
    if (window.__visitorCounterInitialized) {
        return;
    }
    window.__visitorCounterInitialized = true;

    // Load configuration or use safe defaults
    const config = window.VISITOR_COUNTER_CONFIG || {
        mode: 'countapi',
        countApi: {
            enabled: true,
            baseUrl: 'https://countapi.mileshilliard.com/api/v1',
            keyPrefix: 'murtuzadev_portfolio'
        },
        firebase: {
            enabled: false,
            config: {}
        },
        settings: {
            timezone: 'Asia/Karachi',
            onlineWindowSeconds: 10,
            heartbeatIntervalSeconds: 5,
            activityTimeoutSeconds: 10,
            storageKey: 'visitor_uuid',
            updateIntervalSeconds: 5
        }
    };

    // State storage
    const state = {
        uuid: null,
        tabId: 'tab_' + Math.random().toString(36).substring(2, 9),
        pktDate: '',
        lastActivity: Date.now(),
        isPageVisible: !document.hidden,
        stats: {
            totalVisitors: null,
            todayVisitors: null,
            onlineVisitors: null,
            pageViews: null,
            status: 'loading', // 'loading' | 'ready' | 'error'
            mode: config.mode,
            lastUpdated: null
        },
        intervals: [],
        listeners: [],
        broadcastChannel: null,
        firebaseApp: null,
        firebaseDb: null,
        firebasePresenceRef: null
    };

    /**
     * Safe LocalStorage Helper
     * Prevents exceptions in private browsing or when cookies/storage are disabled.
     */
    const safeStorage = {
        get(key) {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                return null;
            }
        },
        set(key, val) {
            try {
                localStorage.setItem(key, val);
                return true;
            } catch (e) {
                return false;
            }
        },
        getSession(key) {
            try {
                return sessionStorage.getItem(key);
            } catch (e) {
                return null;
            }
        },
        setSession(key, val) {
            try {
                sessionStorage.setItem(key, val);
                return true;
            } catch (e) {
                return false;
            }
        }
    };

    /**
     * Anonymous Unique Visitor UUID Management
     * Generates a persistent random UUID without personal data or fingerprinting.
     * Note: Clearing browser storage will result in a new UUID assignment.
     */
    function initVisitorUuid() {
        const storageKey = config.settings.storageKey || 'visitor_uuid';
        let uuid = safeStorage.get(storageKey);

        if (!uuid) {
            if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
                uuid = crypto.randomUUID();
            } else {
                // RFC4122 v4 compliant fallback
                uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    const r = (Math.random() * 16) | 0;
                    const v = c === 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                });
            }
            safeStorage.set(storageKey, uuid);
        }
        state.uuid = uuid;
        return uuid;
    }

    /**
     * Calculate Pakistan Standard Time (PKT, UTC+5) Date Key: YYYY-MM-DD
     * Does not rely on visitor's local system timezone.
     */
    function getPktDateString() {
        const tz = config.settings.timezone || 'Asia/Karachi';
        try {
            const formatter = new Intl.DateTimeFormat('en-CA', {
                timeZone: tz,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return formatter.format(new Date());
        } catch (e) {
            // Fallback: UTC+5 manual offset calculation
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const pkt = new Date(utc + (5 * 3600000));
            const y = pkt.getFullYear();
            const m = String(pkt.getMonth() + 1).padStart(2, '0');
            const d = String(pkt.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
        }
    }

    /**
     * UI Update Dispatcher
     * Updates DOM elements and dispatches CustomEvent for reactive framework integration.
     */
    function updateUI(stats) {
        state.stats = Object.assign({}, state.stats, stats, { lastUpdated: Date.now() });

        // Broadcast custom event for React components (e.g., App.jsx footer)
        window.dispatchEvent(new CustomEvent('visitor-stats:updated', {
            detail: state.stats
        }));

        // Update DOM elements by ID ONLY if present and NOT inside React's root.
        // Direct DOM manipulation of nodes managed by React causes Virtual DOM reconciliation
        // crashes (NotFoundError: Failed to execute 'removeChild' on 'Node') in React 18/19.
        const map = {
            'stat-total-visitors': state.stats.totalVisitors,
            'stat-today-visitors': state.stats.todayVisitors,
            'stat-online-visitors': state.stats.onlineVisitors,
            'stat-total-pageviews': state.stats.pageViews
        };

        Object.keys(map).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                // If element is inside React's #root, let React manage its DOM nodes to prevent virtual DOM crashes.
                let isInsideReact = false;
                if (typeof el.closest === 'function') {
                    isInsideReact = !!el.closest('#root');
                } else {
                    let cur = el;
                    while (cur) {
                        if (cur.id === 'root') { isInsideReact = true; break; }
                        cur = cur.parentElement;
                    }
                }

                if (!isInsideReact) {
                    const val = map[id];
                    if (state.stats.status === 'loading' && val === null) {
                        el.innerHTML = '<span class="opacity-60 text-sm">...</span>';
                    } else if (state.stats.status === 'error' && val === null) {
                        el.innerHTML = '<span class="text-xs text-red-400">Unavailable</span>';
                    } else if (val !== null && val !== undefined) {
                        el.textContent = Number(val).toLocaleString();
                    }
                }
            }
        });
    }

    /**
     * CountAPI Provider Implementation
     * Interacts with CountAPI endpoints (/hit/{key} and /get/{key})
     */
    const CountApiProvider = {
        async getKey(key) {
            const baseUrl = config.countApi.baseUrl || 'https://countapi.mileshilliard.com/api/v1';
            try {
                const res = await fetch(`${baseUrl}/get/${key}`);
                if (res.status === 404) {
                    // Key has not been created yet, initial value is 0
                    return 0;
                }
                if (!res.ok) {
                    throw new Error(`CountAPI returned HTTP ${res.status}`);
                }
                const data = await res.json();
                return typeof data.value === 'number' ? data.value : 0;
            } catch (err) {
                console.warn(`[VisitorCounter] Error getting key ${key}:`, err.message);
                throw err;
            }
        },

        async hitKey(key) {
            const baseUrl = config.countApi.baseUrl || 'https://countapi.mileshilliard.com/api/v1';
            try {
                const res = await fetch(`${baseUrl}/hit/${key}`);
                if (!res.ok) {
                    throw new Error(`CountAPI returned HTTP ${res.status}`);
                }
                const data = await res.json();
                return typeof data.value === 'number' ? data.value : 1;
            } catch (err) {
                console.warn(`[VisitorCounter] Error hitting key ${key}:`, err.message);
                throw err;
            }
        },

        async init() {
            const prefix = config.countApi.keyPrefix || 'murtuzadev_portfolio';
            state.pktDate = getPktDateString();

            const totalKey = `${prefix}_total_visitors`;
            const todayKey = `${prefix}_today_${state.pktDate}`;
            const catalogKey = `${prefix}_catalog_pageviews`;

            try {
                // 1. Total Visitors: deduplicate by checking if this browser UUID was already counted
                const totalCounted = safeStorage.get('visitor_counted_total');
                let total;
                if (!totalCounted) {
                    total = await this.hitKey(totalKey);
                    safeStorage.set('visitor_counted_total', 'true');
                } else {
                    total = await this.getKey(totalKey);
                }

                // 2. Today's Visitors: deduplicate by checking if counted on current PKT date
                const lastPktDate = safeStorage.get('visitor_last_counted_pkt_date');
                let today;
                if (lastPktDate !== state.pktDate) {
                    today = await this.hitKey(todayKey);
                    safeStorage.set('visitor_last_counted_pkt_date', state.pktDate);
                } else {
                    today = await this.getKey(todayKey);
                }

                // 3. Catalog Page Views
                const pageViews = await this.getKey(catalogKey);

                // 4. Online Visitors
                const online = computeLocalOnlineCount();

                updateUI({
                    totalVisitors: total,
                    todayVisitors: today,
                    onlineVisitors: online,
                    pageViews: pageViews,
                    status: 'ready'
                });
            } catch (err) {
                console.error('[VisitorCounter] CountAPI initialization failed:', err);
                updateUI({
                    status: 'error',
                    onlineVisitors: computeLocalOnlineCount()
                });
            }

            // Periodic polling of counters (without incrementing)
            const interval = setInterval(async () => {
                const currentPktDate = getPktDateString();
                const curTodayKey = `${prefix}_today_${currentPktDate}`;

                try {
                    const [total, today, pageViews] = await Promise.all([
                        this.getKey(totalKey),
                        this.getKey(curTodayKey),
                        this.getKey(catalogKey)
                    ]);

                    updateUI({
                        totalVisitors: total,
                        todayVisitors: today,
                        pageViews: pageViews,
                        onlineVisitors: computeLocalOnlineCount(),
                        status: 'ready'
                    });
                } catch (e) {
                    // Maintain current values, update online presence
                    updateUI({
                        onlineVisitors: computeLocalOnlineCount()
                    });
                }
            }, (config.settings.updateIntervalSeconds || 5) * 1000);

            state.intervals.push(interval);
        },

        async recordCatalogPageView() {
            // Guard: count once per browser session to prevent duplicate counting on re-renders
            const sessionKey = 'visitor_catalog_viewed_session';
            if (safeStorage.getSession(sessionKey)) {
                return;
            }
            safeStorage.setSession(sessionKey, 'true');

            const prefix = config.countApi.keyPrefix || 'murtuzadev_portfolio';
            const catalogKey = `${prefix}_catalog_pageviews`;

            try {
                const newCount = await this.hitKey(catalogKey);
                updateUI({ pageViews: newCount });
            } catch (e) {
                console.warn('[VisitorCounter] Failed to record catalog page view:', e.message);
            }
        }
    };

    /**
     * Local Online Presence Tracker (for Zero-Setup mode)
     * Coordinates multiple tabs of the same browser via BroadcastChannel/storage
     * Checks if current tab/browser had activity within strict 10-second window.
     */
    function computeLocalOnlineCount() {
        const windowMs = (config.settings.onlineWindowSeconds || 10) * 1000;
        const now = Date.now();
        const isRecent = (now - state.lastActivity) <= windowMs;

        // If active and page is visible, count = 1 for this browser.
        // Broadcast presence to peer tabs
        if (isRecent && state.isPageVisible) {
            safeStorage.set('visitor_last_online_ping', String(now));
            return 1;
        }

        // Check if another tab in this browser was active recently
        const lastPing = Number(safeStorage.get('visitor_last_online_ping') || 0);
        if ((now - lastPing) <= windowMs) {
            return 1;
        }

        return 0;
    }

    /**
     * Activity Listeners & Heartbeat
     * Updates presence timestamp on user interactions within strict 10s window.
     */
    function setupActivityListeners() {
        let lastLoggedActivity = Date.now();
        const onActivity = () => {
            const now = Date.now();
            // Throttle activity updates to at most once every 1 second
            if (now - lastLoggedActivity > 1000) {
                lastLoggedActivity = now;
                state.lastActivity = now;
                safeStorage.set('visitor_last_online_ping', String(now));

                if (config.mode === 'firebase' && state.firebasePresenceRef) {
                    state.firebasePresenceRef.update({
                        lastSeen: window.firebase.database.ServerValue.TIMESTAMP
                    }).catch(() => { });
                }
            }
        };

        const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
        events.forEach(evt => {
            window.addEventListener(evt, onActivity, { passive: true });
            state.listeners.push({ target: window, event: evt, handler: onActivity });
        });

        const onVisibilityChange = () => {
            state.isPageVisible = !document.hidden;
            if (state.isPageVisible) {
                onActivity();
            }
        };
        document.addEventListener('visibilitychange', onVisibilityChange);
        state.listeners.push({ target: document, event: 'visibilitychange', handler: onVisibilityChange });

        // Tab coordination via BroadcastChannel
        try {
            if (typeof BroadcastChannel !== 'undefined') {
                state.broadcastChannel = new BroadcastChannel('murtuza_visitor_presence');
                state.broadcastChannel.onmessage = (msg) => {
                    if (msg.data && msg.data.type === 'ping') {
                        state.lastActivity = Math.max(state.lastActivity, msg.data.timestamp);
                    }
                };
            }
        } catch (e) { }

        // Heartbeat timer (5 seconds)
        const heartbeatInterval = (config.settings.heartbeatIntervalSeconds || 5) * 1000;
        const heartbeatTimer = setInterval(() => {
            if (state.isPageVisible) {
                state.lastActivity = Date.now();
                safeStorage.set('visitor_last_online_ping', String(state.lastActivity));

                if (state.broadcastChannel) {
                    state.broadcastChannel.postMessage({ type: 'ping', timestamp: state.lastActivity });
                }

                if (config.mode === 'firebase' && state.firebasePresenceRef) {
                    state.firebasePresenceRef.update({
                        lastSeen: window.firebase.database.ServerValue.TIMESTAMP
                    }).catch(() => { });
                }
            }

            // In CountAPI mode, keep online display updated
            if (config.mode === 'countapi') {
                updateUI({ onlineVisitors: computeLocalOnlineCount() });
            }
        }, heartbeatInterval);

        state.intervals.push(heartbeatTimer);
    }

    /**
     * Firebase Realtime Database Provider (Optional Mode)
     * Provides cross-device synchronized presence and counters.
     */
    const FirebaseProvider = {
        async loadSdk() {
            if (window.firebase && window.firebase.database) {
                return;
            }

            const loadScript = (src) => new Promise((resolve, reject) => {
                const s = document.createElement('script');
                s.src = src;
                s.onload = resolve;
                s.onerror = reject;
                document.head.appendChild(s);
            });

            await loadScript('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
            await loadScript('https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js');
            await loadScript('https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js');
        },

        async init() {
            try {
                await this.loadSdk();

                if (!window.firebase.apps.length) {
                    window.firebase.initializeApp(config.firebase.config);
                }
                const db = window.firebase.database();
                state.firebaseDb = db;

                // Anonymous Auth for security rules
                try {
                    await window.firebase.auth().signInAnonymously();
                } catch (authErr) {
                    console.warn('[VisitorCounter] Firebase anonymous auth warning:', authErr.message);
                }

                state.pktDate = getPktDateString();

                // 1. Setup Presence with onDisconnect()
                const presenceKey = `${state.uuid}_${state.tabId}`;
                const myPresenceRef = db.ref(`/presence/${presenceKey}`);
                state.firebasePresenceRef = myPresenceRef;

                const connectedRef = db.ref('.info/connected');
                connectedRef.on('value', (snap) => {
                    if (snap.val() === true) {
                        myPresenceRef.onDisconnect().remove();
                        myPresenceRef.set({
                            uuid: state.uuid,
                            tabId: state.tabId,
                            lastSeen: window.firebase.database.ServerValue.TIMESTAMP
                        });
                    }
                });

                // Listen to presence list with strict 10s window filter & UUID deduplication
                const presenceRef = db.ref('/presence');
                presenceRef.on('value', (snap) => {
                    const data = snap.val() || {};
                    const now = Date.now();
                    const windowMs = (config.settings.onlineWindowSeconds || 10) * 1000;
                    const activeUuids = new Set();

                    Object.values(data).forEach(entry => {
                        if (entry && entry.uuid && (now - entry.lastSeen <= windowMs)) {
                            activeUuids.add(entry.uuid);
                        }
                    });

                    updateUI({ onlineVisitors: activeUuids.size });
                });

                // 2. Increment Total Visitors if new
                const visitorRef = db.ref(`/unique_visitors/${state.uuid}`);
                const visitorSnap = await visitorRef.get();
                if (!visitorSnap.exists()) {
                    await visitorRef.set({ firstSeen: window.firebase.database.ServerValue.TIMESTAMP });
                    db.ref('/counters/total_visitors').transaction((curr) => (curr || 0) + 1);
                }

                // 3. Increment Today's Visitors if new for this PKT date
                const dailyRef = db.ref(`/daily_visitors/${state.pktDate}/${state.uuid}`);
                const dailySnap = await dailyRef.get();
                if (!dailySnap.exists()) {
                    await dailyRef.set({ timestamp: window.firebase.database.ServerValue.TIMESTAMP });
                    db.ref(`/counters/today_${state.pktDate}`).transaction((curr) => (curr || 0) + 1);
                }

                // 4. Realtime listeners on counters
                db.ref('/counters/total_visitors').on('value', (snap) => {
                    updateUI({ totalVisitors: snap.val() || 0, status: 'ready' });
                });

                db.ref(`/counters/today_${state.pktDate}`).on('value', (snap) => {
                    updateUI({ todayVisitors: snap.val() || 0, status: 'ready' });
                });

                db.ref('/counters/catalog_pageviews').on('value', (snap) => {
                    updateUI({ pageViews: snap.val() || 0, status: 'ready' });
                });

            } catch (err) {
                console.error('[VisitorCounter] Firebase initialization failed:', err);
                updateUI({ status: 'error' });
            }
        },

        async recordCatalogPageView() {
            const sessionKey = 'visitor_catalog_viewed_session';
            if (safeStorage.getSession(sessionKey)) {
                return;
            }
            safeStorage.setSession(sessionKey, 'true');

            if (state.firebaseDb) {
                state.firebaseDb.ref('/counters/catalog_pageviews').transaction((curr) => (curr || 0) + 1);
            }
        }
    };

    /**
     * Initialization Runner
     */
    async function start() {
        initVisitorUuid();
        setupActivityListeners();

        // Handle window beforeunload for immediate presence removal
        window.addEventListener('beforeunload', () => {
            if (config.mode === 'firebase' && state.firebasePresenceRef) {
                state.firebasePresenceRef.remove();
            }
        });

        // Initialize selected mode
        if (config.mode === 'firebase' && config.firebase && config.firebase.enabled) {
            await FirebaseProvider.init();
        } else {
            await CountApiProvider.init();
        }
    }

    // Expose public API on window
    window.VisitorCounter = {
        getStats() {
            return Object.assign({}, state.stats);
        },
        recordCatalogPageView() {
            if (config.mode === 'firebase') {
                FirebaseProvider.recordCatalogPageView();
            } else {
                CountApiProvider.recordCatalogPageView();
            }
        },
        destroy() {
            state.intervals.forEach(i => clearInterval(i));
            state.intervals = [];
            state.listeners.forEach(l => l.target.removeEventListener(l.event, l.handler));
            state.listeners = [];
            if (state.broadcastChannel) {
                state.broadcastChannel.close();
            }
            if (state.firebasePresenceRef) {
                state.firebasePresenceRef.remove();
            }
            window.__visitorCounterInitialized = false;
        }
    };

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();

