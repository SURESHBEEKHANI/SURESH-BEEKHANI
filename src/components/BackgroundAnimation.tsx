import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  green: '#7DCC00',
};

type NetworkNode = { x: number; y: number; z: number; r: number };

const NETWORK_NODES: NetworkNode[] = [
  { x: -10, y: 5, z: -1, r: 1.1 }, { x: -7, y: 2, z: 0, r: 0.7 },
  { x: -4, y: 4, z: 1, r: 0.8 }, { x: -1.2, y: 2.1, z: 0, r: 0.9 },
  { x: 1.5, y: 2.5, z: 0, r: 1.3 }, { x: 4.4, y: 3.8, z: 1, r: 0.8 },
  { x: 7.5, y: 5, z: -1, r: 1.1 }, { x: 10.5, y: 1.8, z: 0, r: 0.7 },
  { x: -10.5, y: -2.8, z: -1, r: 0.8 }, { x: -7.5, y: -0.5, z: 0, r: 0.7 },
  { x: -4.5, y: -2.4, z: 1, r: 1.1 }, { x: -1.5, y: -1, z: 0, r: 0.8 },
  { x: 1.5, y: -1.2, z: 0, r: 1.2 }, { x: 4.2, y: -2.8, z: 1, r: 0.8 },
  { x: 7.4, y: -0.4, z: -1, r: 1.0 }, { x: 10.4, y: -3, z: 0, r: 0.7 },
  { x: -2.2, y: 5.4, z: 2, r: 0.6 }, { x: 2.7, y: 5.5, z: 2, r: 0.7 },
  { x: -2.6, y: -4.6, z: 2, r: 0.7 }, { x: 2.8, y: -4.8, z: 2, r: 0.7 },
  { x: -12.8, y: 7.2, z: -2, r: 0.5 }, { x: 12.8, y: 6.6, z: -2, r: 0.5 },
  { x: -13.2, y: -6.4, z: -2, r: 0.5 }, { x: 13.1, y: -6.8, z: -2, r: 0.5 },
  { x: -8.8, y: 7.5, z: 1, r: 0.55 }, { x: 8.9, y: 7.2, z: 1, r: 0.55 },
  { x: -8.7, y: -7.1, z: 1, r: 0.55 }, { x: 8.8, y: -7.4, z: 1, r: 0.55 },
];

const NETWORK_EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
  [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14],
  [2, 16], [16, 17], [17, 5], [10, 18], [18, 19], [19, 13],
  [3, 4], [4, 12], [11, 12],
  [20, 0], [20, 16], [21, 6], [21, 7], [22, 8], [22, 18], [23, 15], [23, 19],
  [24, 2], [25, 5], [26, 10], [27, 13],
];

const SIGNAL_PATHS = [[0, 1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]];

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.WebGLRenderingContext) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 25;
    const isCompactViewport = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isCompactViewport ? 1 : 1.5));
    renderer.setClearColor(C.black, 0);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodeTextureCanvas = document.createElement('canvas');
    nodeTextureCanvas.width = 64;
    nodeTextureCanvas.height = 64;
    const textureContext = nodeTextureCanvas.getContext('2d');
    if (!textureContext) return;
    const nodeGradient = textureContext.createRadialGradient(32, 32, 1, 32, 32, 32);
    nodeGradient.addColorStop(0, 'rgba(255,255,255,1)');
    nodeGradient.addColorStop(0.25, 'rgba(182,255,0,0.9)');
    nodeGradient.addColorStop(1, 'rgba(182,255,0,0)');
    textureContext.fillStyle = nodeGradient;
    textureContext.fillRect(0, 0, 64, 64);
    const nodeTexture = new THREE.CanvasTexture(nodeTextureCanvas);

    const nodePositions = new Float32Array(NETWORK_NODES.flatMap(node => [node.x, node.y, node.z]));
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: C.white,
      size: 0.16,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    group.add(nodes);

    const linePositions = new Float32Array(NETWORK_EDGES.length * 6);
    NETWORK_EDGES.forEach(([from, to], index) => {
      const a = NETWORK_NODES[from];
      const b = NETWORK_NODES[to];
      linePositions.set([a.x, a.y, a.z, b.x, b.y, b.z], index * 6);
    });
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: C.green,
      transparent: true,
      opacity: isCompactViewport ? 0.07 : 0.12,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    const signalGeometry = new THREE.BufferGeometry();
    const signalPositions = new Float32Array(SIGNAL_PATHS.length * 3);
    signalGeometry.setAttribute('position', new THREE.BufferAttribute(signalPositions, 3));
    const signalMaterial = new THREE.PointsMaterial({
      color: C.lime,
      map: nodeTexture,
      size: 0.7,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const signals = new THREE.Points(signalGeometry, signalMaterial);
    group.add(signals);

    const resize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let time = 0;
    const animate = () => {
      time += shouldReduce ? 0 : 0.004;
      if (!shouldReduce) {
        group.position.x = Math.sin(time * 0.17) * 0.22;
        group.position.y = Math.cos(time * 0.13) * 0.14;
        group.position.z = Math.sin(time * 0.09) * 0.08;
        group.rotation.y = Math.sin(time * 0.35) * 0.035;
        group.rotation.x = Math.cos(time * 0.24) * 0.018;
        SIGNAL_PATHS.slice(0, isCompactViewport ? 1 : SIGNAL_PATHS.length).forEach((path, pathIndex) => {
          const progress = (time * (0.11 + pathIndex * 0.035) + pathIndex * 0.5) % 1;
          const segment = progress * (path.length - 1);
          const index = Math.floor(segment);
          const amount = segment - index;
          const from = NETWORK_NODES[path[index]];
          const to = NETWORK_NODES[path[Math.min(index + 1, path.length - 1)]];
          signalPositions.set([
            from.x + (to.x - from.x) * amount,
            from.y + (to.y - from.y) * amount,
            from.z + (to.z - from.z) * amount + 0.08,
          ], pathIndex * 3);
        });
        signalGeometry.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      signalGeometry.dispose();
      signalMaterial.dispose();
      nodeTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [shouldReduce]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        background: `radial-gradient(ellipse 55% 80% at 78% 46%, rgba(17,17,17,0.78), transparent 72%), ${C.black}`,
        opacity: 0.66,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="none" stroke={C.green} strokeOpacity="0.28" strokeWidth="0.12">
          {NETWORK_EDGES.map(([from, to]) => (
            <line
              key={`${from}-${to}`}
              x1={NETWORK_NODES[from].x + 50}
              y1={30 - NETWORK_NODES[from].y * 2.3}
              x2={NETWORK_NODES[to].x + 50}
              y2={30 - NETWORK_NODES[to].y * 2.3}
            />
          ))}
        </g>
        <g fill={C.white} fillOpacity="0.58">
          {NETWORK_NODES.map((node, index) => (
            <circle
              key={index}
              cx={node.x + 50}
              cy={30 - node.y * 2.3}
              r={Math.max(0.18, node.r * 0.12)}
            />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 42% 64% at 36% 46%, rgba(5,5,5,0.94), transparent 78%)' }} />
    </div>
  );
};

export default BackgroundAnimation;

