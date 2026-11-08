import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Earth3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // Earth Base Sphere
    const earthGeo = new THREE.SphereGeometry(1.6, 48, 48);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x051a33,
      roughness: 0.5,
      metalness: 0.7,
      wireframe: false,
      emissive: 0x021020,
      emissiveIntensity: 0.6,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // Continental / Lat-Long Grid Wireframe
    const gridGeo = new THREE.SphereGeometry(1.61, 24, 24);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    earthGroup.add(gridMesh);

    // Glowing Population Density Hotspots (Simulated demographic cluster pins)
    const pointsGeo = new THREE.BufferGeometry();
    const pinCount = 120;
    const positions = new Float32Array(pinCount * 3);
    for (let i = 0; i < pinCount; i++) {
      const lat = (Math.random() - 0.5) * Math.PI;
      const lon = Math.random() * Math.PI * 2;
      const r = 1.63;
      positions[i * 3] = r * Math.cos(lat) * Math.cos(lon);
      positions[i * 3 + 1] = r * Math.sin(lat);
      positions[i * 3 + 2] = r * Math.cos(lat) * Math.sin(lon);
    }
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.06,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    earthGroup.add(pointsMesh);

    // Atmospheric Glow Halo
    const haloGeo = new THREE.SphereGeometry(1.78, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    earthGroup.add(haloMesh);

    // Lighting
    const dirLight = new THREE.DirectionalLight(0x00f0ff, 3);
    dirLight.position.set(4, 3, 5);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x3b82f6, 1.5);
    backLight.position.set(-4, -2, -3);
    scene.add(backLight);

    const ambLight = new THREE.AmbientLight(0x040d1a, 1.5);
    scene.add(ambLight);

    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      earthGroup.rotation.y = t * 0.18;
      earthGroup.rotation.x = Math.sin(t * 0.1) * 0.08;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      earthGeo.dispose();
      earthMat.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
      aria-label="3D Earth demographic visualizer"
    />
  );
};

