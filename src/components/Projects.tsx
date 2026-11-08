import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { Earth3D } from './Earth3D';
import {
  ExternalLink,
  Github,
  Globe,
  Layers,
  Sparkles,
  Shield,
  FileSearch,
  Sprout,
  GraduationCap,
  Info,
  Server,
  FileCode,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'AI' | '3D_WEB'>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'AI') return p.technologies.some(t => ['Python', 'FastAPI', 'RAG', 'LLMs', 'Scikit-learn'].includes(t));
    if (activeFilter === '3D_WEB') return p.technologies.some(t => ['Three.js', 'React Three Fiber', 'Next.js'].includes(t));
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'population-iq':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'scamshield-ai':
        return <Shield className="w-5 h-5 text-blue-400" />;
      case 'documind-ai':
        return <FileSearch className="w-5 h-5 text-purple-400" />;
      case 'agrivision-ai':
        return <Sprout className="w-5 h-5 text-emerald-400" />;
      case 'eduverse-ai':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  // Flagship project: POPULATION•IQ
  const flagshipProject = PROJECTS.find((p) => p.id === 'population-iq')!;
  // Other projects
  const otherProjects = PROJECTS.filter((p) => p.id !== 'population-iq');

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Production & Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Projects & Prototypes
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real software systems demonstrating machine learning classification, conversational RAG, 3D data visualization, and full-stack development.
          </p>
        </div>

        {/* 1. FLAGSHIP PROJECT: POPULATION•IQ (VISUALLY PROMINENT 3D EARTH EXPERIENCE) */}
        <div className="mb-14">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.12)]">
            
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    FLAGSHIP 3D SHOWCASE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-mono">
                    {flagshipProject.badge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight flex items-center gap-3">
                    <span>{flagshipProject.title}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-cyan-400/90 font-medium mt-1">
                    {flagshipProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                    Core Capabilities & Features:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                    {flagshipProject.keyCapabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/20 text-cyan-200 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Honesty / Accuracy Note */}
                {flagshipProject.accuracyNote && (
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-[11px] text-slate-400 flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-300">Architectural Note:</strong> {flagshipProject.accuracyNote}
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {flagshipProject.liveDemoUrl && (
                    <a
                      href={flagshipProject.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch Live Demo</span>
                    </a>
                  )}

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-medium text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-cyan-400" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}

                  {flagshipProject.backendUrl && (
                    <a
                      href={flagshipProject.backendUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-200"
                    >
                      <Server className="w-3.5 h-3.5 text-emerald-400" />
                      <span>API Backend</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Right: Interactive 3D Earth Globe Canvas */}
              <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[400px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950/80 to-blue-950/30 border border-cyan-500/20 p-2 shadow-inner">
                <Earth3D />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-cyan-300/80 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-cyan-500/20 backdrop-blur-md pointer-events-none">
                  <span>Interactive 3D Earth Orbit</span>
                  <span>Three.js • Dynamic Points</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. REMAINING FOUR PROJECTS (ScamShield AI, DocuMind AI, AgriVision AI, EduVerse AI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center p-2"
                      style={{
                        backgroundColor: `${project.themeColor}15`,
                        border: `1px solid ${project.themeColor}35`,
                      }}
                    >
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-400">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Subtitle */}
                <p className="text-xs font-mono text-cyan-400/90 font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Features:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.keyCapabilities.slice(0, 4).map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accuracy note if any */}
                {project.accuracyNote && (
                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-white/5 text-[11px] text-slate-400 flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{project.accuracyNote}</span>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-6 mt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-display font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/30 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Code Repo</span>
                  </a>
                )}

                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-200"
                    title="Render Backend Service"
                  >
                    <Server className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Backend</span>
                  </a>
                )}

                {project.apiDocsUrl && (
                  <a
                    href={project.apiDocsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-200"
                    title="Interactive API Documentation"
                  >
                    <FileCode className="w-3.5 h-3.5 text-violet-400" />
                    <span>Swagger Docs</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

