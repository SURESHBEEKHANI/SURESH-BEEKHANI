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
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    // Initialize random positions and velocities in a large volume
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1200;     // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1200; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Z

      velocities[i * 3] = (Math.random() - 0.5) * 0.15;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 6,
      map: nodeTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const nodeCloud = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodeCloud);

    // 5. Connecting Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6, // Violet-600
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 6. Background Particles (Deep Space Dust)
    const dustCount = 800;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 2000;
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 3000;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
        size: 1.2,
        color: 0xffffff,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // 7. Initial State
    camera.position.z = 800;

    // 8. Animation & Drift Loop
    let requestRef: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      const positionAttr = nodeGeometry.attributes.position;
      
      // Update nodes (particles)
      for (let i = 0; i < particleCount; i++) {
        positionAttr.setX(i, positionAttr.getX(i) + velocities[i * 3]);
        positionAttr.setY(i, positionAttr.getY(i) + velocities[i * 3 + 1]);
        positionAttr.setZ(i, positionAttr.getZ(i) + velocities[i * 3 + 2]);

        // Wrap around boundaries for seamless loop feel
        const limit = 700;
        if (positionAttr.getX(i) > limit) positionAttr.setX(i, -limit);
        if (positionAttr.getX(i) < -limit) positionAttr.setX(i, limit);
        if (positionAttr.getY(i) > limit) positionAttr.setY(i, -limit);
        if (positionAttr.getY(i) < -limit) positionAttr.setY(i, limit);
        if (positionAttr.getZ(i) > 1000) positionAttr.setZ(i, -1000);
        if (positionAttr.getZ(i) < -1000) positionAttr.setZ(i, 1000);
      }
      positionAttr.needsUpdate = true;

      // Camera Drift Logic
      // Continuous forward motion
      camera.position.z -= 1.2;
      if (camera.position.z < -600) camera.position.z = 1000;
      
      // Subtle cinematic sway
      camera.rotation.y = Math.sin(time * 0.2) * 0.04;
      camera.rotation.x = Math.cos(time * 0.15) * 0.03;

      // Update lines based on proximity
      const connections: number[] = [];
      const pos = positionAttr.array;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          // Connect if within distance (approx 130 units)
          if (distSq < 18000) { 
            connections.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
            connections.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          }
        }
      }
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connections, 3));

      // Drift background dust
      dust.position.z += 0.4;
      if (dust.position.z > 1000) dust.position.z = -2000;

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

