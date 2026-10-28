import React, { useState } from 'react';
import {
  Cpu, Workflow, BrainCircuit, Code2, CheckCircle2, ShieldAlert,
  ShieldCheck, Layers, Globe, Activity, Zap, Database, Server,
  Lock, MessageSquare, BarChart3, Terminal, ChevronRight,
  Search, ExternalLink, Sparkles, Filter, Eye, ArrowRight,
  Download, FileText, X, Maximize2, Phone, Headphones, UserCheck,
  AlertTriangle, Check, Shield, Radio, Target, TrendingUp, Users,
  Home, Building
} from 'lucide-react';
import { projectsData } from '../data';

// Map icon names to Lucide icons
const iconMap = {
  Bot: BrainCircuit,
  Workflow,
  Code2,
  CheckCircle2,
  Activity,
  ShieldAlert,
  ShieldCheck,
  Layers,
  Globe,
  BrainCircuit,
  MessageSquare,
  BarChart3,
  Database,
  Server,
  Lock,
  Zap,
  Terminal,
  Cpu,
  Phone,
  Headphones,
  UserCheck,
  AlertTriangle,
  Shield,
  Radio,
  Target,
  TrendingUp,
  Users,
  Home,
  Building
};

const getIcon = (iconName, size = 18, className = '') => {
  const IconComponent = iconMap[iconName] || Cpu;
  return <IconComponent size={size} className={className} />;
};

export const ProjectsTab = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSchemaProject, setActiveSchemaProject] = useState(null);
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [selectedImageModal, setSelectedImageModal] = useState(null);

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImageModal(null);
      }
    };
    if (selectedImageModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageModal]);

  const categories = [
    'All',
    'Real Estate AI',
    'AI Infrastructure',
    'Agentic AI',
    'Enterprise AI',
    'FinTech AI',
    'Voice & Omni-Channel AI',
    'AI Security',
    'AI Factory',
    'Enterprise RAG',
    'DevSecOps',
    'QA & Testing',
    'AIOps',
    'Microservices',
    'Real-Time Systems',
    'Data & Analytics'
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getAccentColor = (color) => {
    switch (color) {
      case 'cyan': return { border: 'border-cyan-500/40', text: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_35px_rgba(6,182,212,0.25)]', badge: 'bg-cyan-950/80 border-cyan-500/30 text-cyan-400', button: 'from-cyan-500 to-blue-600' };
      case 'purple': return { border: 'border-purple-500/40', text: 'text-purple-400', bg: 'bg-purple-500/10', glow: 'shadow-[0_0_35px_rgba(168,85,247,0.25)]', badge: 'bg-purple-950/80 border-purple-500/30 text-purple-400', button: 'from-purple-500 to-indigo-600' };
      case 'emerald': return { border: 'border-emerald-500/40', text: 'text-emerald-400', bg: 'bg-emerald-500/10', glow: 'shadow-[0_0_35px_rgba(16,185,129,0.25)]', badge: 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400', button: 'from-emerald-500 to-teal-600' };
      case 'blue': return { border: 'border-blue-500/40', text: 'text-blue-400', bg: 'bg-blue-500/10', glow: 'shadow-[0_0_35px_rgba(59,130,246,0.25)]', badge: 'bg-blue-950/80 border-blue-500/30 text-blue-400', button: 'from-blue-500 to-cyan-600' };
      case 'indigo': return { border: 'border-indigo-500/40', text: 'text-indigo-400', bg: 'bg-indigo-500/10', glow: 'shadow-[0_0_35px_rgba(99,102,241,0.25)]', badge: 'bg-indigo-950/80 border-indigo-500/30 text-indigo-400', button: 'from-indigo-500 to-purple-600' };
      case 'sky': return { border: 'border-sky-500/40', text: 'text-sky-400', bg: 'bg-sky-500/10', glow: 'shadow-[0_0_35px_rgba(14,165,233,0.25)]', badge: 'bg-sky-950/80 border-sky-500/30 text-sky-400', button: 'from-sky-500 to-blue-600' };
      case 'teal': return { border: 'border-teal-500/40', text: 'text-teal-400', bg: 'bg-teal-500/10', glow: 'shadow-[0_0_35px_rgba(20,184,166,0.25)]', badge: 'bg-teal-950/80 border-teal-500/30 text-teal-400', button: 'from-teal-500 to-emerald-600' };
      case 'red': return { border: 'border-red-500/40', text: 'text-red-400', bg: 'bg-red-500/10', glow: 'shadow-[0_0_35px_rgba(239,68,68,0.25)]', badge: 'bg-red-950/80 border-red-500/30 text-red-400', button: 'from-red-500 to-rose-600' };
      case 'yellow': return { border: 'border-yellow-500/40', text: 'text-yellow-400', bg: 'bg-yellow-500/10', glow: 'shadow-[0_0_35px_rgba(234,179,8,0.25)]', badge: 'bg-yellow-950/80 border-yellow-500/30 text-yellow-400', button: 'from-yellow-500 to-amber-600' };
      case 'rose': return { border: 'border-rose-500/40', text: 'text-rose-400', bg: 'bg-rose-500/10', glow: 'shadow-[0_0_35px_rgba(244,63,94,0.25)]', badge: 'bg-rose-950/80 border-rose-500/30 text-rose-400', button: 'from-rose-500 to-red-600' };
      default: return { border: 'border-cyan-500/40', text: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_35px_rgba(6,182,212,0.25)]', badge: 'bg-cyan-950/80 border-cyan-500/30 text-cyan-400', button: 'from-cyan-500 to-blue-600' };
    }
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-cyan-500/20 p-8 sm:p-12 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SYS: {projectsData.length}_SYSTEM_ARCHITECTURES_ACTIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white italic tracking-tight uppercase mb-4 leading-tight">
            AUTONOMOUS AI & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              HYPERSCALE ARCHITECTURES
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            {projectsData.length} production-grade system blueprints covering Autonomous Real Estate Sales & Property Discovery, Autonomous Payroll & Payment Infrastructure, Trillion-Dollar AI Infrastructure, LangGraph + MCP Swarms, Autonomous FinTech Platforms, Computer Vision Security, Omni-Channel Voice Call Centers, Enterprise RAG, and Cloud-Native Microservices.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-cyan-400">{projectsData.length}</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Full Architectures</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-blue-400">$1T Scale</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">AI Infrastructure</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-purple-400">MCP + Swarm</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Multi-Agent Systems</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">Voice & Vision</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Omni-Channel Ops</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls: Search & Category Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${projectsData.length} projects by title, tech stack (e.g. PropAgent AI, PayPilot, Payment Gateway, LangGraph)...`}
            className="w-full bg-slate-900/80 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 gap-12">
        {filteredProjects.map((project) => {
          const accent = getAccentColor(project.color);
          const isExpanded = expandedProjectId === project.id;

          return (
            <div
              key={project.id}
              className={`relative rounded-[2.5rem] bg-slate-900/40 backdrop-blur-2xl border ${accent.border} p-6 sm:p-10 transition-all duration-500 hover:${accent.glow} overflow-hidden group`}
            >
              {/* Background ambient glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 ${accent.bg} rounded-full blur-[100px] pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

              {/* Top Header */}
              <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`text-sm font-mono font-black ${accent.text} px-3 py-1 rounded-lg ${accent.bg} border ${accent.border}`}>
                      #{project.number}
                    </span>
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${accent.badge}`}>
                      {project.category}
                    </span>
                    {project.pdfUrl && (
                      <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40 flex items-center gap-1.5 animate-pulse">
                        <FileText size={12} /> ACTION & BUSINESS PLAN ATTACHED
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white italic uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-mono font-bold ${accent.text} mt-1`}>
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {project.image && (
                    <button
                      onClick={() => setSelectedImageModal({ url: project.image, title: project.title, number: project.number })}
                      className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-all shadow-md"
                    >
                      <Eye size={14} className={accent.text} />
                      <span>Inspect Diagram</span>
                    </button>
                  )}
                  <button
                    onClick={() => setActiveSchemaProject(activeSchemaProject === project.id ? null : project.id)}
                    className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-all shadow-md"
                  >
                    <Terminal size={14} className={accent.text} />
                    <span>{activeSchemaProject === project.id ? 'Hide Schema' : 'View ASCII Flow'}</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="relative z-10 text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
                {project.description}
              </p>

              {/* SPECIAL: Project 11 PDF Action Plan Download Banner */}
              {project.pdfUrl && (
                <div className="relative z-10 mb-8 p-6 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-indigo-950/80 border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/40 shrink-0">
                        <FileText size={28} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono tracking-widest uppercase bg-blue-500/30 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-400/40">
                            OFFICIAL DOCUMENTATION
                          </span>
                          <span className="text-xs font-mono text-slate-400">{project.pdfSize || '3.4 MB'} PDF</span>
                        </div>
                        <h4 className="text-lg font-black text-white uppercase tracking-tight">
                          {project.pdfTitle || '11. Action Plan Business_Plan.pdf'}
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 max-w-xl">
                          Executive investment thesis, 7 revenue monetization engines, AI model router control plane, 90-day execution milestones & $1T financial architecture blueprint.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.pdfUrl}
                        download={project.pdfName || '11. Action Plan Business_Plan.pdf'}
                        className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white text-xs font-mono font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95 transition-all"
                      >
                        <Download size={16} />
                        <span>Download Plan (PDF)</span>
                      </a>
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-slate-300 hover:text-white transition-all shadow-md"
                        title="Open PDF in new tab"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Blueprint Image Preview Thumbnail */}
              {project.image && (
                <div className="relative z-10 mb-8 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 group/img shadow-2xl">
                  <div
                    onClick={() => setSelectedImageModal({ url: project.image, title: project.title, number: project.number })}
                    className="relative cursor-pointer aspect-video max-h-[360px] sm:max-h-[420px] w-full overflow-hidden flex items-center justify-center bg-black/60"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover/img:scale-102 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
                    
                    {/* Hover Overlay Tag */}
                    <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono flex items-center gap-2 shadow-lg group-hover/img:scale-105 transition-transform">
                      <Maximize2 size={14} className={accent.text} />
                      <span>Click to Enlarge Architecture</span>
                    </div>

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                      BLUEPRINT_ID: #{project.number}
                    </div>
                  </div>
                </div>
              )}

              {/* ASCII Schema Box (if active) */}
              {activeSchemaProject === project.id && (
                <div className="relative z-10 mb-8 p-6 rounded-2xl bg-black/90 border border-emerald-500/40 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[10px] uppercase tracking-widest">
                    <span>ARCH_BLUEPRINT_SCHEMA // {project.id}</span>
                    <span className="text-emerald-400">STATUS: VERIFIED</span>
                  </div>
                  <pre className="leading-relaxed whitespace-pre font-mono">{project.schema}</pre>
                </div>
              )}

              {/* Special: Project 11 Commercial Surfaces */}
              {project.commercialSurfaces && (
                <div className="relative z-10 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                    <Cpu size={14} /> 5 Commercial Product Surfaces:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {project.commercialSurfaces.map((surf, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-blue-400 text-xs font-bold mb-1.5">
                            <span>{surf.name}</span>
                            {getIcon(surf.icon, 14)}
                          </div>
                          <p className="text-[11px] text-slate-300 leading-snug">{surf.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special: Project 11 Revenue Engines Table */}
              {project.revenueEngines && (
                <div className="relative z-10 mb-8 p-5 rounded-2xl bg-slate-950/80 border border-blue-500/20 overflow-x-auto">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                    <BarChart3 size={14} /> 7 Compounding Revenue Engines (Hardware + Software Moat)
                  </h4>
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead>
                      <tr className="border-b border-white/10 text-[10px] font-mono uppercase text-slate-500">
                        <th className="py-2 pr-4">Engine</th>
                        <th className="py-2 pl-4">Monetization & Commercial Model</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {project.revenueEngines.map((reng, idx) => (
                        <tr key={idx} className="hover:bg-blue-500/5 transition-colors">
                          <td className="py-2.5 pr-4 font-bold text-blue-300 font-mono">{reng.engine}</td>
                          <td className="py-2.5 pl-4 text-slate-300">{reng.model}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Special: Project 20 Discovery Checklist */}
              {project.discoveryDimensions && (
                <div className="relative z-10 mb-8 p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={14} /> 18-Dimension Enterprise Discovery & Architecture Scoping Framework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {project.discoveryDimensions.map((dim, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                          {dim.num}
                        </span>
                        <div>
                          <h5 className="text-xs font-bold text-white leading-tight">{dim.title}</h5>
                          <p className="text-[10px] text-slate-400 mt-0.5">{dim.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special: Project 23 Dual Customer Acquisition Engines */}
              {project.dualAcquisitionEngines && (
                <div className="relative z-10 mb-8 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-slate-950/90 to-teal-950/70 border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2 font-black">
                      <Radio size={16} className="text-emerald-400 animate-pulse" /> Dual-Engine Customer Acquisition Architecture
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-900/60 border border-emerald-500/40 px-3 py-1 rounded-full uppercase tracking-wider">
                      REVERSING REAL ESTATE SALES
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.dualAcquisitionEngines.map((eng, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-emerald-300 font-mono font-black">{eng.engine}</span>
                          </div>
                          <div className="mb-2.5">
                            <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider bg-slate-800/90 px-2.5 py-1 rounded-lg border border-white/10 inline-block">
                              Channels: <strong className="text-white">{eng.channels}</strong>
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">{eng.behavior}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special: Project 23 Command Center Telemetry Dashboard */}
              {project.commandCenterMetrics && (
                <div className="relative z-10 mb-8 p-6 rounded-3xl bg-slate-950/90 border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2 font-black">
                      <BarChart3 size={16} className="text-cyan-400" /> Real-Time AI Sales Command Center Telemetry
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> LIVE PRODUCTION TELEMETRY
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {project.commandCenterMetrics.map((met, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                          {met.label}
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-mono font-black text-white">{met.val}</div>
                          <div className="text-[10px] font-mono text-emerald-400 font-bold mt-1 flex items-center gap-1">
                            <span>{met.change}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Visual Workflow / Pipeline */}
              {project.workflowSteps && (
                <div className="relative z-10 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Workflow size={14} className={accent.text} />
                    <span>Orchestrated Execution Pipeline:</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {project.workflowSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="relative p-4 rounded-2xl bg-slate-950/70 border border-white/5 hover:border-cyan-500/40 transition-all group/step flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono text-slate-500 font-bold">
                              STEP {step.step}
                            </span>
                            <div className={`p-1.5 rounded-lg ${accent.bg} ${accent.text}`}>
                              {getIcon(step.icon, 14)}
                            </div>
                          </div>
                          <h5 className="text-xs font-bold text-white mb-1 group-hover/step:text-cyan-300 transition-colors">
                            {step.role}
                          </h5>
                          <p className="text-[11px] text-slate-400 leading-tight">
                            {step.action}
                          </p>
                        </div>

                        {/* Connection indicator */}
                        {idx < project.workflowSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-600 group-hover/step:text-cyan-400 transition-colors">
                            <ArrowRight size={14} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Generated Artifacts (For Project 3 AI SaaS Builder) */}
              {project.generatedArtifacts && (
                <div className="relative z-10 mb-8">
                  <div className="p-4 mb-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2">
                    <Sparkles size={16} className="text-emerald-400 shrink-0" />
                    <span>
                      Prompt Input: <strong className="text-white">"{project.examplePrompt}"</strong>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.generatedArtifacts.map((art, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                          {getIcon(art.icon, 14)}
                          <span>{art.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{art.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Vector DB Benchmark (For Project 7 RAG) */}
              {project.vectorDbComparison && (
                <div className="relative z-10 mb-8 p-5 rounded-2xl bg-slate-950/80 border border-teal-500/20 overflow-x-auto">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-2">
                    <Database size={14} /> Vector Retrieval Database Comparison
                  </h4>
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead>
                      <tr className="border-b border-white/10 text-[10px] font-mono uppercase text-slate-500">
                        <th className="py-2 pr-4">Database</th>
                        <th className="py-2 px-4">Architecture</th>
                        <th className="py-2 px-4">Search Latency</th>
                        <th className="py-2 pl-4">Target Scale & Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {project.vectorDbComparison.map((vdb, idx) => (
                        <tr key={idx} className="hover:bg-teal-500/5 transition-colors">
                          <td className="py-2.5 pr-4 font-bold text-teal-300">{vdb.name}</td>
                          <td className="py-2.5 px-4 text-slate-400">{vdb.type}</td>
                          <td className="py-2.5 px-4 font-mono text-emerald-400">{vdb.searchSpeed}</td>
                          <td className="py-2.5 pl-4 text-slate-400">{vdb.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Scanning Engines (For Project 8 DevSecOps) */}
              {project.scanningEngines && (
                <div className="relative z-10 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-3 flex items-center gap-2">
                    <ShieldAlert size={14} /> 6-Pillar Shift-Left Security Scanners
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {project.scanningEngines.map((eng, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20">
                        <div className="flex items-center gap-2 text-red-400 font-bold text-xs mb-1">
                          {getIcon(eng.icon, 14)}
                          <span>{eng.name}</span>
                        </div>
                        <p className="text-[10px] text-slate-400">{eng.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Telemetry Pillars & AI Ops (For Project 10) */}
              {project.telemetryPillars && (
                <div className="relative z-10 mb-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {project.telemetryPillars.map((tp, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-1">
                          {getIcon(tp.icon, 14)}
                          <span>{tp.name}</span>
                        </div>
                        <p className="text-[10px] text-slate-400">{tp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capabilities or Features Grid */}
              <div className="relative z-10 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={14} className={accent.text} /> Core Capabilities & Architecture Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {(isExpanded ? project.features : project.features.slice(0, 6)).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/40 border border-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${accent.text} bg-current mt-1.5 shrink-0`} />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {project.features.length > 6 && (
                  <button
                    onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                    className={`mt-3 text-xs font-mono font-bold ${accent.text} hover:underline flex items-center gap-1`}
                  >
                    <span>{isExpanded ? 'Show Less Features' : `+ View All ${project.features.length} Features`}</span>
                    <ChevronRight size={14} className={isExpanded ? 'rotate-90' : ''} />
                  </button>
                )}
              </div>

              {/* Footer Tech Stack Pills */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mr-2">
                    TECH STACK:
                  </span>
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 font-mono text-[11px] hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>ARCHITECTURE READY</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal for Full-Screen Blueprint Inspection */}
      {selectedImageModal && (
        <div
          onClick={() => setSelectedImageModal(null)}
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl flex flex-col p-4 sm:p-8 animate-in fade-in duration-300 cursor-pointer select-none"
        >
          {/* Floating High-Visibility Close Button (Top Right) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageModal(null);
            }}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[10002] px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_30px_rgba(239,68,68,0.9)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
          >
            <X size={18} />
            <span>CLOSE [ESC]</span>
          </button>

          {/* Modal Header */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between gap-4 pb-4 border-b border-white/10 pr-36 sm:pr-40 cursor-default"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-bold">
                #{selectedImageModal.number}
              </span>
              <h3 className="text-base sm:text-xl font-black text-white uppercase italic tracking-tight truncate max-w-md sm:max-w-xl">
                {selectedImageModal.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedImageModal.url}
                download
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-xs font-mono text-white flex items-center gap-2 transition-all shadow-md cursor-pointer hover:border-cyan-500/40"
              >
                <Download size={14} />
                <span className="hidden sm:inline">Save Image</span>
              </a>
            </div>
          </div>

          {/* Modal Image Container */}
          <div
            onClick={() => setSelectedImageModal(null)}
            className="flex-1 overflow-auto flex flex-col items-center justify-center p-2 sm:p-6 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[75vh] max-w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/15 bg-slate-950 cursor-default"
            >
              <img
                src={selectedImageModal.url}
                alt={selectedImageModal.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Bottom Quick-Dismiss Bar */}
            <div className="mt-4 flex items-center gap-3 text-slate-400 text-xs font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Click anywhere outside image or press <strong className="text-white bg-slate-800 px-2 py-0.5 rounded border border-white/10">ESC</strong> to exit</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsTab;
