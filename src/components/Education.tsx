import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Foundations
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous engineering studies at The Oxford College of Engineering with strong foundations in computer systems and mathematics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-violet-600">
          
          {EDUCATION_DATA.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-semibold mb-1">
                      {idx === 0 ? 'Undergraduate Degree' : 'Secondary Education'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-0.5">
                      {item.degree}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 w-fit">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      {item.score}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Curriculum & Focus Areas:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

