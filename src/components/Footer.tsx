import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#02050e] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center font-display font-bold text-xs text-cyan-400">
                PJ
              </div>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-white">
                PRINCE KUMAR JHA
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                The Oxford College of Engineering (2023–2027)
              </p>
            </div>
          </div>

          {/* Center Stack Note */}
          <div className="text-center">
            <p className="text-xs font-mono text-slate-400 flex items-center justify-center gap-1.5">
              <span>Engineered with</span>
              <span className="text-cyan-400">Three.js</span>
              <span>•</span>
              <span className="text-blue-400">React</span>
              <span>•</span>
              <span className="text-violet-400">Tailwind CSS</span>
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              &copy; {new Date().getFullYear()} Prince Kumar Jha. All verified rights reserved.
            </p>
          </div>

          {/* Right Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

