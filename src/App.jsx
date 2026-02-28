import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Sparkles, MessageSquare, Linkedin, Github,
  History, Award, Binary, Zap, CheckCircle2, Headphones, Layers, Workflow, BarChart3, Activity,
  Phone, Lock, ShieldAlert
} from 'lucide-react';
import {
  tabs, contactData, educationData, googleBadges, experienceData,
  skillsData, servicesData, industriesData, aiSolutionsData,
  cyberSecurityData, aiSecurityData
} from './data';

const App = () => {
  const [activeTab, setActiveTab] = useState('Contact');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleContact = () => {
    window.open("https://wa.me/923060824762", "_blank");
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  const currentTabColor = tabs.find(t => t.name === activeTab)?.color || 'blue';

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-blue-500/30 selection:text-white scroll-smooth cursor-none overflow-x-hidden">

      {/* Background Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-500 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.02}px, ${(mousePos.y - window.innerHeight / 2) * 0.02}px)`
          }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-10 transition-colors duration-1000 bg-${currentTabColor}-600`}
          style={{ transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.05}px, ${(mousePos.y - window.innerHeight / 2) * 0.05}px)` }}
        />
      </div>

      {/* Liquid Cursor (Desktop Only) */}
      <div
        className="fixed pointer-events-none z-[999] transition-transform duration-300 ease-out hidden md:flex items-center justify-center"
        style={{ transform: `translate3d(${mousePos.x - 20}px, ${mousePos.y - 20}px, 0)` }}
      >
        <div className={`w-10 h-10 rounded-full border-2 border-${currentTabColor}-500/50 transition-all duration-500 ${cursorType === 'pointer' ? 'scale-[2.5] bg-current/5 border-dashed rotate-90' : 'scale-100'}`} />
        <div className={`absolute w-1.5 h-1.5 bg-${currentTabColor}-400 rounded-full transition-transform duration-500 ${cursorType === 'pointer' ? 'scale-0' : 'scale-100'}`} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div onMouseEnter={() => setCursorType('pointer')} onMouseLeave={() => setCursorType('default')} className="flex items-center gap-4 cursor-pointer group" onClick={() => handleTabClick('Contact')}>
            <div className={`w-12 h-12 bg-gradient-to-br from-${currentTabColor}-600 to-slate-900 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl transition-all duration-1000 group-hover:rotate-[360deg]`}>M</div>
            <div>
              <h1 className="text-xl font-black text-white tracking-tighter">MURTUZA</h1>
              <span className="text-[9px] text-slate-500 tracking-[0.3em] uppercase font-bold opacity-80 block">Systems Architect</span>
            </div>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md max-w-[60%]">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                onClick={() => handleTabClick(tab.name)}
                className={`px-4 py-2 rounded-full text-[10px] sm:text-[9px] font-black transition-all flex items-center gap-1 uppercase tracking-widest relative overflow-hidden group ${activeTab === tab.name ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
              >
                {activeTab === tab.name && (
                  <div className={`absolute inset-0 bg-${tab.color}-600 shadow-lg animate-in zoom-in-75 duration-500 rounded-full`} />
                )}
                <span className="relative z-10 flex items-center gap-1.5">{tab.icon}<span className="hidden xl:inline">{tab.name}</span></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleContact}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="hidden md:flex bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Secure Hire <Sparkles size={12} className="ml-2 inline" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 gap-2 max-h-[70vh] overflow-y-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left font-black tracking-widest uppercase text-xs transition-all ${activeTab === tab.name
                      ? `bg-${tab.color}-600/20 text-${tab.color}-400 border border-${tab.color}-500/30`
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {tab.icon} {tab.name}
                </button>
              ))}
              <button
                onClick={handleContact}
                className="mt-4 bg-white text-black px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center"
              >
                Secure Hire
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-32 md:pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen">

        {/* CONTACT & ABOUT (Tab 1) */}
        {activeTab === 'Contact' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex px-6 py-2 bg-black border border-white/10 rounded-full text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase mb-10">
                  <Binary size={14} className="mr-2" /> established 2013
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                  WE BUILD <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">THE FUTURE.</span>
                </h1>

                <div className="flex flex-col gap-2 mb-8 text-sm font-bold tracking-wider text-emerald-400">
                  <span className="flex items-center gap-2"><Phone size={16} /> {contactData.phone} (WhatsApp Contact Only)</span>
                  <span className="flex items-center gap-2"><MessageSquare size={16} /> {contactData.email}</span>
                </div>

                <div className="text-[11px] md:text-xs font-black text-slate-300 uppercase tracking-widest leading-loose mb-8 bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                  {contactData.roles.split('\n').map((line, i) => <div key={i} className="mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{line}</div>)}
                </div>

                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-12 max-w-xl text-justify">
                  {contactData.bio}
                </p>
              </div>
              <div className="relative h-[400px] hidden lg:block">
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between hover:border-blue-500 transition-all rotate-3">
                  <Zap size={40} className="text-blue-500 animate-pulse" />
                  <div className="text-6xl font-black text-white italic leading-none">AGENTIC <br /> DESIGN.</div>
                  <div className="flex items-center gap-3 text-xs text-green-500 font-black tracking-widest"><div className="w-2 h-2 bg-green-500 rounded-full animate-ping" /> STATUS: MISSION READY</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION (Tab 2) */}
        {activeTab === 'Education' && (
          <div className="animate-in fade-in duration-700 space-y-16">
            <div className="bg-slate-900/30 border border-white/5 p-10 rounded-[3rem] text-center hover:border-yellow-500/30 transition-all">
              <Award size={48} className="mx-auto text-yellow-500 mb-6" />
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic">{educationData.degree}</h2>
              <p className="text-slate-400 mt-4 text-lg font-bold">{educationData.institution}</p>
              <span className="inline-block mt-4 px-6 py-2 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-black tracking-widest uppercase">{educationData.date}</span>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white italic uppercase mb-8 flex items-center gap-4"><Award className="text-blue-500" /> Google Badges & Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {googleBadges.map((b, i) => (
                  <div key={i} className="p-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem] hover:border-yellow-500/40 text-left group transition-all hover:bg-slate-900/80">
                    <span className="text-[9px] text-yellow-500 uppercase tracking-widest font-black mb-4 block">{b.date}</span>
                    <h4 className="text-lg font-black text-white leading-tight mb-4">{b.title}</h4>
                    <p className="text-sm text-slate-500 font-light">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE (Tab 3) */}
        {activeTab === 'Experience' && (
          <div className="grid gap-6">
            {experienceData.map((ex, i) => (
              <div key={i} className="group bg-slate-900/20 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-[2.5rem] hover:border-indigo-500/30 transition-all animate-in slide-in-from-right-12" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="min-w-[4rem] h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:rotate-6 transition-all"><History size={28} /></div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-black text-white uppercase italic leading-tight">{ex.role}</h3>
                      <p className="text-xs md:text-sm font-bold text-slate-400 mt-2">{ex.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="px-4 py-2 bg-indigo-500/10 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-widest whitespace-nowrap">{ex.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SKILLS (Tab 4) */}
        {activeTab === 'Skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-700">
            {skillsData.map((cat, i) => (
              <div key={i} className="p-8 md:p-10 bg-slate-900/30 border border-white/5 rounded-[3rem] hover:border-cyan-500/40 transition-all group">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic mb-6 border-b border-white/10 pb-4 group-hover:text-cyan-400 transition-colors">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.skills.map(s => (
                    <div key={s} className="flex items-start gap-3 text-sm text-slate-400 font-light leading-relaxed">
                      <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SERVICES (Tab 5) */}
        {activeTab === 'Services' && (
          <div className="grid md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8">
            {servicesData.map((srv, i) => (
              <div key={i} className="p-10 bg-slate-900/40 border border-white/5 rounded-[3rem] hover:bg-slate-900 hover:border-orange-500/50 transition-all">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8"><Layers size={32} /></div>
                <h3 className="text-2xl font-black text-white uppercase mb-6 leading-tight">{srv.title}</h3>
                <ul className="space-y-4">
                  {srv.points.map((p, j) => (
                    <li key={j} className="text-sm text-slate-400 font-light flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* INDUSTRIES (Tab 6) */}
        {activeTab === 'Industries' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in zoom-in-95">
            {industriesData.map((ind, i) => (
              <div key={i} className="p-8 md:p-12 bg-slate-900/30 border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group">
                <h3 className="text-3xl font-black text-white uppercase italic mb-4 group-hover:text-emerald-400">{ind.title}</h3>
                <p className="text-emerald-500 font-bold mb-8 text-sm uppercase tracking-widest">{ind.desc}</p>
                <div className="space-y-4">
                  {ind.details.map((d, j) => (
                    <div key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI SOLUTIONS (Tab 7) */}
        {activeTab === 'AI Solutions' && (
          <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in">
            {aiSolutionsData.map((ai, i) => (
              <div key={i} className="p-10 bg-slate-950 border border-white/5 rounded-[3rem] relative overflow-hidden group hover:border-purple-500 transition-all flex flex-col h-full">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[80px] group-hover:scale-150 transition-all" />
                <h3 className="text-4xl font-black text-white uppercase italic mb-2 relative z-10">{ai.title}</h3>
                <p className="text-[10px] text-purple-400 font-black tracking-widest uppercase mb-8 pb-4 border-b border-white/10 relative z-10">{ai.subtitle}</p>
                <div className="space-y-4 relative z-10 flex-grow">
                  {ai.points.map((p, j) => (
                    <div key={j} className="text-sm text-slate-400 font-light flex items-start gap-2">
                      <Zap size={14} className="text-purple-500 mt-1 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CYBER SECURITY (Tab 8) */}
        {activeTab === 'Cyber Security' && (
          <div className="space-y-12 animate-in slide-in-from-left-8">
            <div className="bg-red-950/20 border border-red-500/20 p-10 md:p-16 rounded-[3rem] text-center">
              <ShieldAlert size={64} className="mx-auto text-red-500 mb-8" />
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">{cyberSecurityData[0].title}</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{cyberSecurityData[0].desc}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-slate-900/30 border border-white/5 rounded-[3rem] hover:border-red-500/40">
                <h3 className="text-2xl font-black text-white uppercase italic mb-8 border-b border-white/10 pb-4">{cyberSecurityData[1].title}</h3>
                <ul className="space-y-6">
                  {cyberSecurityData[1].list.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-400">
                      <Lock size={20} className="text-red-500 shrink-0" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-slate-900/30 border border-white/5 rounded-[3rem] hover:border-red-500/40">
                <h3 className="text-2xl font-black text-white uppercase italic mb-8 border-b border-white/10 pb-4">{cyberSecurityData[2].title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{cyberSecurityData[2].desc}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Discover', 'Assess', 'Control', 'Report'].map(step => (
                    <span key={step} className="px-4 py-2 bg-red-500/10 text-red-400 rounded-lg text-xs font-black uppercase tracking-widest">{step}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI SECURITY (Tab 9) */}
        {activeTab === 'AI Security' && (
          <div className="space-y-12 animate-in slide-in-from-right-8">
            <div className="bg-rose-950/20 border border-rose-500/20 p-10 md:p-16 rounded-[3rem] text-center">
              <Lock size={64} className="mx-auto text-rose-500 mb-8" />
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">{aiSecurityData[0].title}</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{aiSecurityData[0].desc}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-slate-900/30 border border-white/5 rounded-[3rem] hover:border-rose-500/40">
                <h3 className="text-2xl font-black text-white uppercase italic mb-8 border-b border-white/10 pb-4">{aiSecurityData[1].title}</h3>
                <ul className="space-y-6">
                  {aiSecurityData[1].list.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-400">
                      <ShieldAlert size={20} className="text-rose-500 shrink-0" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-slate-900/30 border border-white/5 rounded-[3rem] hover:border-rose-500/40">
                <h3 className="text-2xl font-black text-white uppercase italic mb-8 border-b border-white/10 pb-4">{aiSecurityData[2].title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{aiSecurityData[2].desc}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl text-center"><span className="block text-2xl font-black text-white">73%</span><span className="text-[9px] text-slate-500 uppercase tracking-widest">Breached AI Systems</span></div>
                  <div className="p-4 bg-white/5 rounded-xl text-center"><span className="block text-2xl font-black text-white">82%</span><span className="text-[9px] text-slate-500 uppercase tracking-widest">Financial Prompt Injections</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="relative z-10 border-t border-white/5 bg-black pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">Murtuza.dev</h2>
            <p className="text-[9px] text-slate-600 uppercase tracking-[0.5em] font-black">PRECISION ENGINEERED SOLUTIONS</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleContact}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2"
            >
              Get in Touch <MessageSquare size={14} />
            </button>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all text-white"><Linkedin size={18} /></a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-slate-800 transition-all text-white"><Github size={18} /></a>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce-slow { 0%, 100% { transform: translateY(-8%); } 50% { transform: translateY(0); } }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        @media (min-width: 768px) { .cursor-none * { cursor: none !important; } }
      `}} />
    </div>
  );
};

export default App;
