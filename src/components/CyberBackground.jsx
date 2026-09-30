import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

// Theme Palette Configuration for each Tab
export const TAB_COLOR_PALETTES = {
  blue: {
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    glow: 'rgba(59, 130, 246, 0.4)',
    rgb: [59, 130, 246],
    accent: '#60a5fa',
    label: 'SEC_NET // BLUEPRINT ACTIVE'
  },
  cyan: {
    primary: '#06b6d4',
    secondary: '#0891b2',
    glow: 'rgba(6, 182, 212, 0.4)',
    rgb: [6, 182, 212],
    accent: '#22d3ee',
    label: 'ARCH // QUANTUM MESH'
  },
  yellow: {
    primary: '#eab308',
    secondary: '#ca8a04',
    glow: 'rgba(234, 179, 8, 0.4)',
    rgb: [234, 179, 8],
    accent: '#facc15',
    label: 'KNOWLEDGE // CERT_VERIFIED'
  },
  indigo: {
    primary: '#6366f1',
    secondary: '#4f46e5',
    glow: 'rgba(99, 102, 241, 0.4)',
    rgb: [99, 102, 241],
    accent: '#818cf8',
    label: 'ENTERPRISE // DEPLOY_STREAM'
  },
  orange: {
    primary: '#f97316',
    secondary: '#ea580c',
    glow: 'rgba(249, 115, 22, 0.4)',
    rgb: [249, 115, 22],
    accent: '#fb923c',
    label: 'SERVICES // HIGH_AVAILABILITY'
  },
  emerald: {
    primary: '#10b981',
    secondary: '#059669',
    glow: 'rgba(16, 185, 129, 0.4)',
    rgb: [16, 185, 129],
    accent: '#34d399',
    label: 'INDUSTRY // SYNERGY_ONLINE'
  },
  purple: {
    primary: '#a855f7',
    secondary: '#9333ea',
    glow: 'rgba(168, 85, 247, 0.4)',
    rgb: [168, 85, 247],
    accent: '#c084fc',
    label: 'NEURAL // AGENTIC_SWARM'
  },
  red: {
    primary: '#ef4444',
    secondary: '#dc2626',
    glow: 'rgba(239, 68, 68, 0.4)',
    rgb: [239, 68, 68],
    accent: '#f87171',
    label: 'OFFENSIVE // ZERO_TRUST_L9'
  },
  rose: {
    primary: '#f43f5e',
    secondary: '#e11d48',
    glow: 'rgba(244, 63, 94, 0.4)',
    rgb: [244, 63, 94],
    accent: '#fb7185',
    label: 'AI_SHIELD // RED_TEAMING'
  },
  teal: {
    primary: '#14b8a6',
    secondary: '#0d9488',
    glow: 'rgba(20, 184, 166, 0.4)',
    rgb: [20, 184, 166],
    accent: '#2dd4bf',
    label: 'AUTONOMOUS // AGI_TACTICAL'
  }
};

const TELEMETRY_NODES = [
  { text: 'λ_NET::ONLINE', top: '15%', left: '8%', depth: 0.03 },
  { text: 'SWARM_AGENTS://SYNCED', top: '22%', right: '10%', depth: 0.05 },
  { text: 'gRPC::0.2ms_RTT', top: '65%', left: '6%', depth: 0.04 },
  { text: 'ZERO_TRUST::ACTIVE', top: '78%', right: '8%', depth: 0.06 },
  { text: 'VECTOR_DB::FAISS_HNSW', top: '48%', right: '4%', depth: 0.03 },
  { text: 'K8S_PODS::HEALTHY', top: '88%', left: '14%', depth: 0.05 },
];

/**
 * CyberBackground Component
 * Provides an interactive, ultra-smooth, responsive neural constellation & ambient grid
 * reacting dynamically to mouse movement, clicks, and active tab color shifts.
 */
const CyberBackground = ({ activeTabColor = 'blue', mousePos = { x: 0, y: 0 } }) => {
  const canvasRef = useRef(null);
  const targetRgbRef = useRef([59, 130, 246]);
  const currentRgbRef = useRef([59, 130, 246]);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, isHovered: false });
  const ripplesRef = useRef([]);
  const [fpsLabel, setFpsLabel] = useState('60');

  const currentTheme = TAB_COLOR_PALETTES[activeTabColor] || TAB_COLOR_PALETTES.blue;

  // Update target RGB when tab changes
  useEffect(() => {
    if (currentTheme?.rgb) {
      targetRgbRef.current = currentTheme.rgb;
    }
  }, [currentTheme]);

  // Update mouse position with smoothing
  useEffect(() => {
    mouseRef.current.targetX = mousePos.x;
    mouseRef.current.targetY = mousePos.y;
    mouseRef.current.isHovered = true;
  }, [mousePos]);

  // Handle global click ripple effect
  useEffect(() => {
    const handleGlobalClick = (e) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: Math.min(window.innerWidth, window.innerHeight) * 0.35,
        alpha: 0.8,
        speed: 4.5
      });
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Main Canvas Particle & Neural Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let lastTime = performance.now();
    let frameCount = 0;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle setup
    const isMobile = width < 768;
    const particleCount = isMobile ? 36 : Math.min(85, Math.floor((width * height) / 20000));
    const connectionDist = isMobile ? 95 : 135;
    const mouseConnectionDist = isMobile ? 130 : 180;

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.65),
        vy: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.65),
        radius: Math.random() * 1.8 + 1.0,
        baseAlpha: Math.random() * 0.45 + 0.35,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        isHub: Math.random() > 0.82 // 18% of nodes are major neural hubs
      });
    }

    // Data pulses traveling along connections
    const dataPulses = [];
    const maxPulses = isMobile ? 6 : 14;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Main animation render loop
    const render = (time) => {
      // FPS counter (every 30 frames)
      frameCount++;
      if (time - lastTime >= 1000) {
        setFpsLabel(Math.round((frameCount * 1000) / (time - lastTime)).toString());
        frameCount = 0;
        lastTime = time;
      }

      // Smooth color transition (LERP)
      const cur = currentRgbRef.current;
      const tar = targetRgbRef.current;
      cur[0] += (tar[0] - cur[0]) * 0.04;
      cur[1] += (tar[1] - cur[1]) * 0.04;
      cur[2] += (tar[2] - cur[2]) * 0.04;

      const r = Math.round(cur[0]);
      const g = Math.round(cur[1]);
      const b = Math.round(cur[2]);

      // Mouse smoothing
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.12;
      m.y += (m.targetY - m.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // 1. Process & Draw Shockwave Ripples
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += rip.speed;
        rip.alpha *= 0.96;

        if (rip.alpha < 0.01 || rip.radius > rip.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${rip.alpha * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 6]);
        ctx.stroke();

        // Inner glowing echo
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 12), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${rip.alpha * 0.25})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.stroke();
        ctx.restore();
      }

      // 2. Spawn Random Data Pulses between connected nodes
      if (dataPulses.length < maxPulses && Math.random() < 0.08 && particles.length > 2) {
        const idxA = Math.floor(Math.random() * particles.length);
        const pA = particles[idxA];
        // find close neighbor
        for (let j = 0; j < particles.length; j++) {
          if (idxA === j) continue;
          const pB = particles[j];
          const dist = Math.hypot(pA.x - pB.x, pA.y - pB.y);
          if (dist < connectionDist) {
            dataPulses.push({
              x1: pA.x,
              y1: pA.y,
              x2: pB.x,
              y2: pB.y,
              progress: 0,
              speed: 0.015 + Math.random() * 0.02,
              size: Math.random() * 2 + 1.8
            });
            break;
          }
        }
      }

      // 3. Render and Update Data Pulses
      for (let i = dataPulses.length - 1; i >= 0; i--) {
        const pulse = dataPulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          dataPulses.splice(i, 1);
          continue;
        }

        const px = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
        const py = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();
        ctx.restore();
      }

      // 4. Update Particle Positions & Draw Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce on boundaries smoothly
        if (p1.x < 0) { p1.x = 0; p1.vx *= -1; }
        else if (p1.x > width) { p1.x = width; p1.vx *= -1; }
        if (p1.y < 0) { p1.y = 0; p1.vy *= -1; }
        else if (p1.y > height) { p1.y = height; p1.vy *= -1; }

        // Mouse interaction (gentle repulsion / magnetic orbit)
        if (m.x > 0 && m.y > 0) {
          const dx = p1.x - m.x;
          const dy = p1.y - m.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseConnectionDist && dist > 1) {
            // Draw interactive laser thread to cursor
            const mouseAlpha = (1 - dist / mouseConnectionDist) * 0.55;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${mouseAlpha})`;
            ctx.lineWidth = (1 - dist / mouseConnectionDist) * 1.6 + 0.4;
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
            ctx.stroke();
            ctx.restore();

            // Subtle interactive push away from cursor to keep canvas alive
            const force = (1 - dist / mouseConnectionDist) * 0.35;
            p1.x += (dx / dist) * force;
            p1.y += (dy / dist) * force;
          }
        }

        // Ripple repulsion
        for (let rIdx = 0; rIdx < ripples.length; rIdx++) {
          const rip = ripples[rIdx];
          const rdx = p1.x - rip.x;
          const rdy = p1.y - rip.y;
          const rdist = Math.hypot(rdx, rdy);
          if (Math.abs(rdist - rip.radius) < 30) {
            p1.x += (rdx / (rdist || 1)) * 1.5;
            p1.y += (rdy / (rdist || 1)) * 1.5;
          }
        }

        // Draw connections to neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.lineWidth = p1.isHub || p2.isHub ? 1.0 : 0.6;
            ctx.stroke();
          }
        }
      }

      // 5. Draw Particle Nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.3 + 0.7;
        const currentAlpha = p.baseAlpha * pulse;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.isHub ? p.radius * 1.6 : p.radius, 0, Math.PI * 2);

        if (p.isHub) {
          // Hub Node with Outer Halo
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha + 0.2})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.35})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Deep Space Vignette Base */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/60 to-black pointer-events-none" />

      {/* 2. Interactive Ambient Light Field following Cursor */}
      <div
        className="absolute top-0 left-0 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${currentTheme.primary} 0%, ${currentTheme.secondary} 50%, transparent 80%)`,
          transform: `translate3d(${mousePos.x - 325}px, ${mousePos.y - 325}px, 0)`,
        }}
      />

      {/* 3. Secondary Slow Breathing Core Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[180px] opacity-15 transition-colors duration-1000 animate-pulse pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${currentTheme.primary} 0%, transparent 70%)`,
        }}
      />

      {/* 4. Tactical Matrix Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.14] transition-transform duration-500 ease-out pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.015}px, ${(mousePos.y - window.innerHeight / 2) * 0.015}px)`
        }}
      />

      {/* 5. 3D Perspective Cyber Horizon Grid at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45vh] opacity-25 pointer-events-none overflow-hidden"
        style={{
          perspective: '600px',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${currentTheme.primary}40 1px, transparent 1px),
              linear-gradient(to bottom, ${currentTheme.primary}40 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'rotateX(72deg) translateY(-10%) scale(1.6)',
            transformOrigin: 'bottom center',
          }}
        />
      </div>

      {/* 6. Active Neural Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 7. Floating Telemetry & Code Nodes in Deep Parallax */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {TELEMETRY_NODES.map((node, index) => (
          <div
            key={index}
            className="absolute font-mono text-[9px] tracking-widest uppercase transition-transform duration-300 ease-out border border-white/5 bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-lg"
            style={{
              top: node.top,
              left: node.left,
              right: node.right,
              color: currentTheme.accent,
              borderColor: `${currentTheme.primary}30`,
              transform: `translate(${(mousePos.x - window.innerWidth / 2) * node.depth}px, ${(mousePos.y - window.innerHeight / 2) * node.depth}px)`,
              opacity: 0.45
            }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 animate-ping" style={{ backgroundColor: currentTheme.primary }} />
            {node.text}
          </div>
        ))}
      </div>

      {/* 8. Tactical HUD Corner Accents */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 opacity-30 transition-colors duration-500 pointer-events-none" style={{ borderColor: currentTheme.primary }} />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 opacity-30 transition-colors duration-500 pointer-events-none" style={{ borderColor: currentTheme.primary }} />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 opacity-30 transition-colors duration-500 pointer-events-none" style={{ borderColor: currentTheme.primary }} />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 opacity-30 transition-colors duration-500 pointer-events-none" style={{ borderColor: currentTheme.primary }} />

      {/* 9. Minimalist System Status Bar at Viewport Top/Bottom Edge */}
      <div className="hidden md:flex absolute bottom-3 left-8 right-8 justify-between items-center text-[9px] font-mono tracking-[0.25em] text-slate-600 opacity-60 uppercase pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.primary }} />
          <span>{currentTheme.label}</span>
        </div>
        <div className="flex items-center gap-6">
          <span>LATENCY: &lt;1ms</span>
          <span>FPS: {fpsLabel}</span>
          <span className="text-slate-500">SYS_BUILD: 2026.09.PRO</span>
        </div>
      </div>
    </div>
  );
};

export default CyberBackground;
