import React, { useState } from 'react';
import {
  Cpu, Workflow, BrainCircuit, Code2, CheckCircle2, ShieldAlert,
  ShieldCheck, Layers, Globe, Activity, Zap, Database, Server,
  Lock, MessageSquare, BarChart3, Terminal, ChevronRight,
  Search, ExternalLink, Sparkles, Filter, Eye, ArrowRight, CornerDownRight
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
  Cpu
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

  const categories = ['All', 'Agentic AI', 'Enterprise AI', 'AI Factory', 'Microservices', 'Real-Time Systems', 'Data & Analytics', 'Enterprise RAG', 'DevSecOps', 'QA & Testing', 'AIOps'];

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
      case 'cyan': return { border: 'border-cyan-500/40', text: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.2)]', badge: 'bg-cyan-950/80 border-cyan-500/30 text-cyan-400' };
      case 'purple': return { border: 'border-purple-500/40', text: 'text-purple-400', bg: 'bg-purple-500/10', glow: 'shadow-[0_0_30px_rgba(168,85,247,0.2)]', badge: 'bg-purple-950/80 border-purple-500/30 text-purple-400' };
      case 'emerald': return { border: 'border-emerald-500/40', text: 'text-emerald-400', bg: 'bg-emerald-500/10', glow: 'shadow-[0_0_30px_rgba(16,185,129,0.2)]', badge: 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400' };
      case 'blue': return { border: 'border-blue-500/40', text: 'text-blue-400', bg: 'bg-blue-500/10', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.2)]', badge: 'bg-blue-950/80 border-blue-500/30 text-blue-400' };
      case 'indigo': return { border: 'border-indigo-500/40', text: 'text-indigo-400', bg: 'bg-indigo-500/10', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.2)]', badge: 'bg-indigo-950/80 border-indigo-500/30 text-indigo-400' };
      case 'sky': return { border: 'border-sky-500/40', text: 'text-sky-400', bg: 'bg-sky-500/10', glow: 'shadow-[0_0_30px_rgba(14,165,233,0.2)]', badge: 'bg-sky-950/80 border-sky-500/30 text-sky-400' };
      case 'teal': return { border: 'border-teal-500/40', text: 'text-teal-400', bg: 'bg-teal-500/10', glow: 'shadow-[0_0_30px_rgba(20,184,166,0.2)]', badge: 'bg-teal-950/80 border-teal-500/30 text-teal-400' };
      case 'red': return { border: 'border-red-500/40', text: 'text-red-400', bg: 'bg-red-500/10', glow: 'shadow-[0_0_30px_rgba(239,68,68,0.2)]', badge: 'bg-red-950/80 border-red-500/30 text-red-400' };
      case 'yellow': return { border: 'border-yellow-500/40', text: 'text-yellow-400', bg: 'bg-yellow-500/10', glow: 'shadow-[0_0_30px_rgba(234,179,8,0.2)]', badge: 'bg-yellow-950/80 border-yellow-500/30 text-yellow-400' };
      case 'rose': return { border: 'border-rose-500/40', text: 'text-rose-400', bg: 'bg-rose-500/10', glow: 'shadow-[0_0_30px_rgba(244,63,94,0.2)]', badge: 'bg-rose-950/80 border-rose-500/30 text-rose-400' };
      default: return { border: 'border-cyan-500/40', text: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.2)]', badge: 'bg-cyan-950/80 border-cyan-500/30 text-cyan-400' };
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
            <span>SYS: 10_SYSTEM_ARCHITECTURES_ACTIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white italic tracking-tight uppercase mb-4 leading-tight">
            AUTONOMOUS AI & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              DISTRIBUTED SYSTEMS
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            10 production-grade system blueprints covering Autonomous Multi-Agent Swarms, Enterprise RAG Intelligence, Cloud-Native Microservices, DevSecOps Automated Remediation, and Real-Time AIOps Observability.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-cyan-400">10</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Full Architectures</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-purple-400">Multi-Agent</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Orchestration Loops</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">DevSecOps</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Shift-Left Security</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-mono font-black text-blue-400">RAG & AIOps</span>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Hybrid Intelligence</p>
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
            placeholder="Search projects by title, tech stack (e.g. LangGraph, Kafka, RAG, Playwright)..."
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
              <div className={`absolute top-0 right-0 w-80 h-80 ${accent.bg} rounded-full blur-[90px] pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

              {/* Top Header */}
              <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-sm font-mono font-black ${accent.text} px-3 py-1 rounded-lg ${accent.bg} border ${accent.border}`}>
                      #{project.number}
                    </span>
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${accent.badge}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white italic uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-mono font-bold ${accent.text} mt-1`}>
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
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

              {/* ASCII Schema Modal/Box (if active) */}
              {activeSchemaProject === project.id && (
                <div className="relative z-10 mb-8 p-6 rounded-2xl bg-black/90 border border-emerald-500/40 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[10px] uppercase tracking-widest">
                    <span>ARCH_BLUEPRINT_SCHEMA // {project.id}</span>
                    <span className="text-emerald-400">STATUS: VERIFIED</span>
                  </div>
                  <pre className="leading-relaxed whitespace-pre font-mono">{project.schema}</pre>
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
    </div>
  );
};

export default ProjectsTab;
