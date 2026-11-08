import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { About } from './components/About';
import { SkillsUniverse } from './components/SkillsUniverse';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { ResumeModal } from './components/ResumeModal';
import { Sparkles, Terminal } from 'lucide-react';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Short, polished cinematic loading intro
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 z-[60] transition-all duration-150 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Cinematic Ambient 3D Starfield Canvas */}
      <BackgroundCanvas />

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[100] bg-[#02050e] flex flex-col items-center justify-center space-y-4 transition-opacity duration-500">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400 to-violet-600 animate-spin-very-slow p-[2px]">
              <div className="w-full h-full bg-[#02050e] rounded-[14px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center font-display font-black text-xl text-cyan-400">
              PJ
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Initializing 3D Environment...</span>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

        <main className="flex-1">
          <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />
          <About />
          <SkillsUniverse />
          <Projects />
          <Certifications />
          <Education />
          <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;

