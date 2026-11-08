import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe, Sparkles } from 'lucide-react';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    // 1. Core Sphere (Futuristic Digital Planet)
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x07112c,
      roughness: 0.3,
      metalness: 0.8,
      wireframe: false,
      emissive: 0x051333,
      emissiveIntensity: 0.5,
    });
    const coreSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    planetGroup.add(coreSphere);

    // Digital Wireframe Overlay
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.02, 3);
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    planetGroup.add(wireframeMesh);

    // Neural Latent Nodes on Sphere
    const nodeCount = 180;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.04;
      nodePositions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      nodePositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      nodePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.06,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    planetGroup.add(nodePoints);

    // 2. Futuristic Orbital Rings
    const ringGroup = new THREE.Group();
    ringGroup.rotation.x = Math.PI / 3;
    ringGroup.rotation.y = Math.PI / 8;
    planetGroup.add(ringGroup);

    // Outer Ring 1
    const ring1Geo = new THREE.RingGeometry(2.7, 3.1, 80);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ringGroup.add(ring1);

    // Inner Glowing Ring 2
    const ring2Geo = new THREE.RingGeometry(3.3, 3.4, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ringGroup.add(ring2);

    // Satellites
    const satGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2,
    });
    const satellite = new THREE.Mesh(satGeo, satMat);
    ringGroup.add(satellite);

    const sat2Geo = new THREE.SphereGeometry(0.06, 16, 16);
    const sat2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 2,
    });
    const satellite2 = new THREE.Mesh(sat2Geo, sat2Mat);
    ringGroup.add(satellite2);

    // 3. Floating Cloud of Energy Particles
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    planetGroup.add(particles);

    // 4. Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0x0a192f, 1.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.DirectionalLight(0x00f0ff, 3.5);
    cyanLight.position.set(5, 4, 4);
    scene.add(cyanLight);

    const violetLight = new THREE.DirectionalLight(0x8b5cf6, 3.0);
    violetLight.position.set(-5, -3, -2);
    scene.add(violetLight);

    const fillLight = new THREE.PointLight(0x3b82f6, 2, 10);
    fillLight.position.set(0, -4, 3);
    scene.add(fillLight);

    // Mouse tracking for interactive tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;

      targetRotationY = (x / rect.width) * 0.9;
      targetRotationX = (y / rect.height) * 0.6;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetRotationY - mouseX) * 0.05;
      mouseY += (targetRotationX - mouseY) * 0.05;

      planetGroup.rotation.y = elapsedTime * 0.15 + mouseX;
      planetGroup.rotation.x = mouseY * 0.5;

      wireframeMesh.rotation.y = -elapsedTime * 0.08;
      nodePoints.rotation.y = elapsedTime * 0.1;

      ringGroup.rotation.z = elapsedTime * 0.05;
      particles.rotation.y = elapsedTime * 0.04;

      const satRadius1 = 3.35;
      satellite.position.x = Math.cos(elapsedTime * 1.2) * satRadius1;
      satellite.position.y = Math.sin(elapsedTime * 1.2) * satRadius1;

      const satRadius2 = 2.9;
      satellite2.position.x = Math.cos(-elapsedTime * 0.9 + 1.5) * satRadius2;
      satellite2.position.y = Math.sin(-elapsedTime * 0.9 + 1.5) * satRadius2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (container && renderer && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satGeo.dispose();
      satMat.dispose();
      sat2Geo.dispose();
      sat2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full min-h-[420px] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-48 h-48 rounded-full border-2 border-cyan-400/40 flex items-center justify-center bg-cyan-950/20 shadow-[0_0_30px_rgba(0,240,255,0.2)] animate-pulse">
          <Globe className="w-24 h-24 text-cyan-400" />
        </div>
        <p className="text-xs font-mono text-cyan-300">
          Digital Sphere Hologram (WebGL Fallback Mode)
        </p>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[480px] lg:min-h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing relative"
      aria-label="Interactive 3D Digital Planet"
    />
  );
};
