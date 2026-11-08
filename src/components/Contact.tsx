import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Code,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#3b82f6', '#8b5cf6'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background glow cones */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-t from-cyan-600/15 via-blue-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring, collaborating on an AI/ML project, or discussing new opportunities? 
            Feel free to connect or drop an email.
          </p>
        </div>

        {/* Contact Container Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Email & Primary Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Computer Science Engineering Student • AI & Full Stack Developer
                </p>
              </div>

              {/* Email Address Highlight Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      Primary Contact
                    </span>
                    <span className="text-sm sm:text-base font-mono font-semibold text-white select-all break-all">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all active:scale-95"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-display font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>

              {/* Professional Closing Message */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-cyan-500/40 pl-4 py-1">
                Currently actively seeking <strong className="text-slate-200">Software Developer, Python Developer, and AI/ML opportunities</strong>. 
                Ready to contribute high technical velocity, structured problem solving, and modern generative AI architectures.
              </p>

            </div>

            {/* Right: Social Profiles Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              
              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub Profile
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      @princekumarjha83-oss
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-blue-300 transition-colors">
                      LinkedIn Network
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      princekumar-jha
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* LeetCode Card */}
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                      LeetCode Profile
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      @jha_kumar_123
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

