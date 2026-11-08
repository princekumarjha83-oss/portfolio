import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3D } from './Hero3D';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Radial Glow highlights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="block text-slate-400 text-lg sm:text-xl font-mono uppercase tracking-widest mb-1 font-semibold">
                  Hello, I am
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  PRINCE KUMAR
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 drop-shadow-[0_0_35px_rgba(0,240,255,0.3)]">
                  JHA
                </span>
              </h1>

              {/* Roles Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PERSONAL_INFO.roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs sm:text-sm font-medium rounded-lg bg-slate-800/60 border border-white/10 text-slate-300 backdrop-blur-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl border-l-2 border-cyan-400/80 pl-4 py-1 bg-gradient-to-r from-cyan-500/5 to-transparent">
              &ldquo;{PERSONAL_INFO.headline}&rdquo;
            </p>

            {/* Brief Context Highlight */}
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              B.E. Computer Science Engineering student (2023–2027) building practical AI-powered architectures, 
              RAG pipelines, machine learning models, and modern interactive 3D web systems.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Explore My Work CTA */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Download / View Resume CTA */}
              <button
                onClick={onOpenResumeModal}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] w-full sm:w-auto text-center"
              >
                <Download className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500 mr-2">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 text-xs transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* LeetCode */}
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 text-xs transition-all duration-200"
              >
                <Code className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-violet-300 text-xs transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right 3D Cinematic Visual Column */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[520px] lg:h-[600px] flex items-center justify-center">
            {/* Background 3D subtle frame */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-500/10 p-[1px] pointer-events-none">
              <div className="w-full h-full rounded-3xl bg-slate-950/20 backdrop-blur-[2px]" />
            </div>

            {/* Interactive 3D Sphere Planet */}
            <Hero3D />

            {/* Floating Interactive Badge Indicator */}
            <div className="absolute bottom-4 right-4 glass-panel px-3.5 py-2 rounded-xl text-[11px] font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-2 shadow-lg shadow-black/50 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-very-slow" />
              <span>Interactive 3D Universe • Drag to Rotate</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

