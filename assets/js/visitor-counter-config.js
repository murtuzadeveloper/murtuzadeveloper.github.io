/**
 * Live Visitor Statistics System - Configuration
 *
 * Centralized settings for visitor counter tracking modes, endpoints, and intervals.
 * Supported modes:
 *  - 'countapi': Zero-setup public counting API (default, no auth/keys needed)
 *  - 'firebase': Optional Firebase Realtime Database for cross-device synchronized presence and counters
 */

const VISITOR_COUNTER_CONFIG = {
    // Active tracking mode: 'countapi' | 'firebase'
    mode: 'countapi',

    // Zero-Setup Public CountAPI Configuration
    countApi: {
        enabled: true,
        baseUrl: 'https://countapi.mileshilliard.com/api/v1',
        keyPrefix: 'murtuzadev_portfolio'
    },

    // Optional Firebase Realtime Database Configuration
    firebase: {
        enabled: false,
        config: {
            apiKey: '',
            authDomain: '',
            databaseURL: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: '',
            appId: ''
        }
    },

    // Operational Settings
    settings: {
        timezone: 'Asia/Karachi',          // Pakistan Standard Time (PKT, UTC+5)
        onlineWindowSeconds: 10,           // Strict 10-second presence window
        heartbeatIntervalSeconds: 5,       // Heartbeat ping cadence
        activityTimeoutSeconds: 10,        // Activity timeout threshold
        storageKey: 'visitor_uuid',        // LocalStorage key for anonymous UUID
        updateIntervalSeconds: 5           // Poll/refresh cadence for counter values
    }
};

// Export for both browser global scope and module bundlers
if (typeof window !== 'undefined') {
    window.VISITOR_COUNTER_CONFIG = VISITOR_COUNTER_CONFIG;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VISITOR_COUNTER_CONFIG;
}

