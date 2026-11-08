import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Orbit, Sparkles, Filter, Code2, Database, Cpu, Brain, Layers, Wrench, Binary } from 'lucide-react';

export const SkillsUniverse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    'ARTIFICIAL INTELLIGENCE': <Brain className="w-4 h-4" />,
    'MACHINE LEARNING': <Cpu className="w-4 h-4" />,
    'PROGRAMMING': <Code2 className="w-4 h-4" />,
    'BACKEND': <Binary className="w-4 h-4" />,
    'FRONTEND': <Layers className="w-4 h-4" />,
    'DATABASES': <Database className="w-4 h-4" />,
    'TOOLS & LIBRARIES': <Wrench className="w-4 h-4" />,
    'CORE CONCEPTS': <Orbit className="w-4 h-4" />,
  };

  const filteredCategories =
    selectedCategory === 'ALL'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background glow & subtle orbital grid */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Orbit className="w-3.5 h-3.5" />
            <span>Interactive Constellation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Skills Universe
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Honest, verified technical competencies organized across AI, ML, full-stack development, and core computer science fundamentals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-medium font-mono uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === 'ALL'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/70 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Sectors ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium font-mono tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-slate-900/60 border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <span style={{ color: cat.color }}>
                  {categoryIcons[cat.category] || <Sparkles className="w-3.5 h-3.5" />}
                </span>
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Universe Grid / Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center p-1.5"
                      style={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                        border: `1px solid ${category.color}35`,
                      }}
                    >
                      {categoryIcons[category.category] || <Code2 className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-display font-bold text-white tracking-wide uppercase">
                      {category.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                    {category.skills.length}
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Nodes */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-default flex items-center gap-1.5 ${
                          isHovered
                            ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)] scale-105'
                            : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Orbital Bottom Accent */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-ping"
                    style={{ backgroundColor: category.color }}
                  />
                  Verified Knowledge
                </span>
                <span>Practical Applied</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Universe Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-white/5">
            <span className="text-cyan-400 font-bold">•</span>
            Skills are backed by hands-on implementations, live demos, and academic projects. No exaggerated proficiency meters.
          </p>
        </div>

      </div>
    </section>
  );
};

