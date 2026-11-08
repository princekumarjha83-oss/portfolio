import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Download, Eye, ExternalLink, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Professional Resume
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Download or preview the full verified curriculum vitae detailing project achievements, technical competencies, and academic milestones.
          </p>
        </div>

        {/* Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.12)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Info */}
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified PDF Attached</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm font-medium text-cyan-400 font-mono">
                B.E. Computer Science & Engineering (2023–2027)
              </p>

              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                Includes verified coursework, project architectures (ScamShield AI, DocuMind AI, POPULATION•IQ, AgriVision AI, EduVerse AI), and credentials from Cisco, Google Cloud, and EY & Microsoft.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400 pt-2">
                <span>• File Format: PDF</span>
                <span>• Updated: 2026</span>
                <span>• Clean 1-Page Layout</span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto md:w-60 shrink-0">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Prince_Kumar_Jha_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-medium text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors text-center"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Preview in Browser</span>
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors pt-1"
              >
                <span>Direct Window Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

