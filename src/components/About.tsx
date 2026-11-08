import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GraduationCap, Brain, Cpu, Code2, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Mini 3D Neural / Geometric Core component
const AboutMini3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group
    const group = new THREE.Group();
    scene.add(group);

    // Inner Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x051333,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Outer Octahedron Ring
    const outerGeo = new THREE.OctahedronGeometry(1.7, 0);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // Nodes
    const pointsGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const pointsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.9,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    group.add(pointsMesh);

    // Lights
    const light1 = new THREE.PointLight(0x00f0ff, 3, 10);
    light1.position.set(3, 3, 3);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x8b5cf6, 3, 10);
    light2.position.set(-3, -3, 3);
    scene.add(light2);

    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      group.rotation.x = t * 0.25;
      group.rotation.y = t * 0.35;
      coreMesh.rotation.z = -t * 0.2;
      outerMesh.rotation.y = -t * 0.15;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[260px] flex items-center justify-center" />;
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Engineering Mindset,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              AI Driven Execution
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Focused on bridging modern frontend architectures, reliable backend systems, and state-of-the-art AI workflows.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                {PERSONAL_INFO.bioParagraphs[0]}
              </p>
              <p>
                {PERSONAL_INFO.bioParagraphs[1]}
              </p>
              <p className="text-slate-400">
                {PERSONAL_INFO.bioParagraphs[2]}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold font-mono">
                  <Brain className="w-4 h-4" />
                  <span>AI & ML</span>
                </div>
                <p className="text-[12px] text-slate-400">
                  RAG pipelines, LLM APIs, embeddings & Scikit-learn models.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold font-mono">
                  <Cpu className="w-4 h-4" />
                  <span>Backend</span>
                </div>
                <p className="text-[12px] text-slate-400">
                  FastAPI, Node.js REST endpoints, auth, and database schemas.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-semibold font-mono">
                  <Layers className="w-4 h-4" />
                  <span>Interactive Web</span>
                </div>
                <p className="text-[12px] text-slate-400">
                  React, Three.js, responsive layouts & smooth micro-interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visualization & Education Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Interactive 3D Holographic Core */}
            <div className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-3 left-4 text-[11px] font-mono text-cyan-400 tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                NEURAL CORE • REALTIME THREE.JS
              </div>
              <AboutMini3D />
              <div className="text-[11px] font-mono text-slate-400 text-center pb-2">
                Geometric computational core representing algorithmic logic & AI synthesis.
              </div>
            </div>

            {/* Quick Education Callout */}
            <div className="glass-card rounded-2xl p-5 border-l-4 border-l-cyan-400 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-display font-semibold text-sm">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>The Oxford College of Engineering</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  CGPA: 7.07 / 10
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Bachelor of Engineering in Computer Science & Engineering (2023–2027).
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 border-t border-white/5">
                <span>Class XII (CBSE): New S Public School</span>
                <span>•</span>
                <span className="text-slate-300 font-mono">67%</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

