import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * BackgroundAnimation Component
 * 
 * Renders a cinematic 3D environment using Three.js.
 * Description: Abstract futuristic purple network with glowing nodes and connecting lines, 
 * smooth camera drifting forward through the mesh, soft neon lighting, depth of field, 
 * and subtle particles.
 */
const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2500);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 2. Atmosphere & Lighting
    // Cinematic fog for depth perception
    scene.fog = new THREE.FogExp2(0x0a051a, 0.001);
    
    // Ambient light for subtle visibility
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // 3. Asset Creation (Node Texture)
    const createNodeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');      // Center glow
      gradient.addColorStop(0.2, 'rgba(168, 85, 247, 0.9)');    // Violet
      gradient.addColorStop(0.5, 'rgba(109, 40, 217, 0.4)');    // Purple core
      gradient.addColorStop(1, 'rgba(109, 40, 217, 0)');        // Outer transparency

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      return texture;
    };

    const nodeTexture = createNodeTexture();

    // 4. Mesh (Plexus) System
    const particleCount = 380; // Denser mesh as per image
    const initialPositions = new Float32Array(particleCount * 3);
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const waveOffsets = new Float32Array(particleCount);

    // Initialize random positions and velocities in a large volume
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 1600;
      const y = (Math.random() - 0.5) * 1600;
      const z = (Math.random() - 0.5) * 2000;
      
      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities[i * 3] = (Math.random() - 0.5) * 0.12;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.12;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.12;
      
      waveOffsets[i] = Math.random() * Math.PI * 2;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 7.5, // Slightly larger for better glow
      map: nodeTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      opacity: 0.85
    });

    const nodeCloud = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodeCloud);

    // 5. Connecting Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9333ea, // Deeper purple (Purple-600)
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 6. Background Particles (Deep Space Dust)
    const dustCount = 1200; // More dust for atmosphere
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 2500;
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 2500;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 3500;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
        size: 1.5,
        color: 0x94a3b8, // Slate-400 for a more subtle blue-ish dust
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // 7. Initial State
    camera.position.z = 900;

    // 8. Animation & Drift Loop
    let requestRef: number;
    let time = 0;

    const animate = () => {
      time += 0.006;
      const positionAttr = nodeGeometry.attributes.position;
      
      // Update nodes (particles) with wave motion
      for (let i = 0; i < particleCount; i++) {
        // Base drift
        initialPositions[i * 3] += velocities[i * 3];
        initialPositions[i * 3 + 1] += velocities[i * 3 + 1];
        initialPositions[i * 3 + 2] += velocities[i * 3 + 2];

        // Wave displacement (Organic movement like the image)
        const waveX = Math.sin(time + waveOffsets[i]) * 15;
        const waveY = Math.cos(time * 0.8 + waveOffsets[i]) * 15;
        const waveZ = Math.sin(time * 0.5 + waveOffsets[i]) * 10;

        positionAttr.setX(i, initialPositions[i * 3] + waveX);
        positionAttr.setY(i, initialPositions[i * 3 + 1] + waveY);
        positionAttr.setZ(i, initialPositions[i * 3 + 2] + waveZ);

        // Wrap around boundaries for seamless loop feel
        const limit = 800;
        if (initialPositions[i * 3] > limit) initialPositions[i * 3] = -limit;
        if (initialPositions[i * 3] < -limit) initialPositions[i * 3] = limit;
        if (initialPositions[i * 3 + 1] > limit) initialPositions[i * 3 + 1] = -limit;
        if (initialPositions[i * 3 + 1] < -limit) initialPositions[i * 3 + 1] = limit;
        if (initialPositions[i * 3 + 2] > 1200) initialPositions[i * 3 + 2] = -1200;
        if (initialPositions[i * 3 + 2] < -1200) initialPositions[i * 3 + 2] = 1200;
      }
      positionAttr.needsUpdate = true;

      // Camera Drift Logic
      camera.position.z -= 1.4; // Slightly faster forward motion
      if (camera.position.z < -800) camera.position.z = 1200;
      
      // Cinematic sway
      camera.rotation.y = Math.sin(time * 0.15) * 0.05;
      camera.rotation.x = Math.cos(time * 0.1) * 0.04;

      // Update lines based on proximity
      const connections: number[] = [];
      const pos = positionAttr.array;
      const maxDist = 160; // Increased connection distance for denser mesh
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particleCount; i++) {
        let count = 0; // Limit connections per node for performance and clarity
        for (let j = i + 1; j < particleCount && count < 4; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistSq) { 
            connections.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
            connections.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
            count++;
          }
        }
      }
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connections, 3));

      // Drift background dust
      dust.position.z += 0.6;
      if (dust.position.z > 1200) dust.position.z = -2300;

      renderer.render(scene, camera);
      requestRef = requestAnimationFrame(animate);
    };

    requestRef = requestAnimationFrame(animate);

    // 9. Response Handling (Resize)
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 10. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Memory cleanup
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      if (nodeTexture) nodeTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" 
      style={{ 
        background: 'radial-gradient(circle at center, #0f0720 0%, #000000 100%)',
        opacity: 0.9 // Subtle transparency to blend with potential background colors
      }}
    />
  );
};

export default BackgroundAnimation;

