import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
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
  { x: -11.2, y: 3.8, z: -1, r: 0.3 }, { x: -8.4, y: 4.8, z: 0, r: 0.28 },
  { x: -5.8, y: 1.2, z: 1, r: 0.3 }, { x: -3.2, y: 3.1, z: 0, r: 0.26 },
  { x: 3.2, y: 2.9, z: 0, r: 0.28 }, { x: 5.9, y: 1.3, z: 1, r: 0.3 },
  { x: 8.6, y: 3.9, z: -1, r: 0.26 }, { x: 11.4, y: 0.2, z: 0, r: 0.3 },
  { x: -11.3, y: -1.2, z: -1, r: 0.28 }, { x: -8.5, y: -2.5, z: 0, r: 0.3 },
  { x: 5.8, y: -1.6, z: 0, r: 0.28 }, { x: 11.2, y: -1.4, z: 0, r: 0.26 },
  { x: -15.2, y: 6.2, z: -2, r: 0.22 }, { x: -16.8, y: 2.1, z: -1, r: 0.2 },
  { x: -15.6, y: -2.2, z: -2, r: 0.22 }, { x: -16.9, y: -6.1, z: -1, r: 0.2 },
  { x: 15.1, y: 6.4, z: -2, r: 0.22 }, { x: 16.8, y: 2.3, z: -1, r: 0.2 },
  { x: 15.7, y: -2.4, z: -2, r: 0.22 }, { x: 16.9, y: -6.3, z: -1, r: 0.2 },
  { x: -13.9, y: 0.4, z: 1, r: 0.18 }, { x: -14.4, y: -4.5, z: 1, r: 0.18 },
  { x: 13.8, y: 0.5, z: 1, r: 0.18 }, { x: 14.3, y: -4.6, z: 1, r: 0.18 },
];

const NETWORK_EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
  [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14],
  [2, 16], [16, 17], [17, 5], [10, 18], [18, 19], [19, 13],
  [3, 4], [4, 12], [11, 12],
  [20, 0], [20, 16], [21, 6], [21, 7], [22, 8], [22, 18], [23, 15], [23, 19],
  [24, 2], [25, 5], [26, 10], [27, 13],
  [28, 0], [28, 24], [29, 2], [29, 3], [30, 1], [30, 9],
  [31, 2], [31, 16], [32, 4], [32, 17], [33, 5], [33, 13],
  [34, 6], [34, 25], [35, 7], [35, 21], [36, 8], [36, 22],
  [37, 9], [37, 10], [38, 14], [38, 15], [39, 15], [39, 23],
];

const SIGNAL_PATHS = [[0, 1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]];
const PRIMARY_EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
];

const CENTER_NODE_INDICES = new Set([3, 4, 10, 11, 12, 13, 29, 31, 32, 33]);
const CENTER_MOLECULE: NetworkNode[] = [
  { x: -0.9, y: 0.1, z: 0.5, r: 0.35 },
  { x: 0, y: 0.8, z: 0.2, r: 0.35 },
  { x: 0.9, y: 0.1, z: 0.5, r: 0.35 },
];
const CENTER_MOLECULE_EDGES: [number, number][] = [[0, 1], [1, 2], [2, 0]];
const OUTER_NODE_INDICES = NETWORK_NODES
  .map((_, index) => index)
  .filter(index => !CENTER_NODE_INDICES.has(index));
const OUTER_EDGES = NETWORK_EDGES.filter(([from, to]) =>
  !CENTER_NODE_INDICES.has(from) && !CENTER_NODE_INDICES.has(to)
);

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
    group.scale.setScalar(0.78);
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

    const visibleNodeIndices = OUTER_NODE_INDICES;
    const visibleNodes = visibleNodeIndices.map(index => NETWORK_NODES[index]);
    const nodePositions = new Float32Array(visibleNodes.flatMap(node => [node.x, node.y, node.z]));
    const driftingLowerLeftNodes = [
      { sourceIndex: 42, amplitude: 0.55, speed: 0.42 },
      { sourceIndex: 43, amplitude: 0.45, speed: 0.34 },
      { sourceIndex: 49, amplitude: 0.36, speed: 0.5 },
    ];
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: C.white,
      size: 0.12,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    group.add(nodes);

    const centerPositions = new Float32Array(CENTER_MOLECULE.flatMap(node => [node.x, node.y, node.z]));
    const centerGeometry = new THREE.BufferGeometry();
    centerGeometry.setAttribute('position', new THREE.BufferAttribute(centerPositions, 3));
    const centerMaterial = new THREE.PointsMaterial({
      color: C.white,
      size: 0.09,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const centerNodes = new THREE.Points(centerGeometry, centerMaterial);
    group.add(centerNodes);

    const bondPositions = new Float32Array((OUTER_EDGES.length + CENTER_MOLECULE_EDGES.length) * 6);
    OUTER_EDGES.forEach(([from, to], index) => {
      const a = NETWORK_NODES[from];
      const b = NETWORK_NODES[to];
      bondPositions.set([a.x, a.y, a.z, b.x, b.y, b.z], index * 6);
    });
    CENTER_MOLECULE_EDGES.forEach(([from, to], index) => {
      const a = CENTER_MOLECULE[from];
      const b = CENTER_MOLECULE[to];
      bondPositions.set([a.x, a.y, a.z, b.x, b.y, b.z], (OUTER_EDGES.length + index) * 6);
    });
    const bondGeometry = new THREE.BufferGeometry();
    bondGeometry.setAttribute('position', new THREE.BufferAttribute(bondPositions, 3));
    const bondMaterial = new THREE.LineBasicMaterial({
      color: C.white,
      transparent: true,
      opacity: isCompactViewport ? 0.035 : 0.06,
    });
    const bonds = new THREE.LineSegments(bondGeometry, bondMaterial);
    group.add(bonds);

    const signalGeometry = new THREE.BufferGeometry();
    const signalPositions = new Float32Array(SIGNAL_PATHS.length * 3);
    signalGeometry.setAttribute('position', new THREE.BufferAttribute(signalPositions, 3));
    const signalMaterial = new THREE.PointsMaterial({
      color: C.lime,
      map: nodeTexture,
      size: 0.18,
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
        const nodePositionAttribute = nodeGeometry.attributes.position;
        driftingLowerLeftNodes.forEach(({ sourceIndex, amplitude, speed }) => {
          const visibleIndex = visibleNodeIndices.indexOf(sourceIndex);
          if (visibleIndex < 0) return;
          const baseY = NETWORK_NODES[sourceIndex].y;
          nodePositionAttribute.setY(visibleIndex, baseY + Math.sin(time * speed + sourceIndex) * amplitude);
        });
        nodePositionAttribute.needsUpdate = true;
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
      centerGeometry.dispose();
      centerMaterial.dispose();
      bondGeometry.dispose();
      bondMaterial.dispose();
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
        className="absolute inset-0 h-full w-full opacity-52"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="none" stroke={C.white} strokeOpacity="0.14" strokeWidth="0.1">
          {OUTER_EDGES.map(([from, to], index) => (
            <line
              key={`bond-${index}`}
              x1={NETWORK_NODES[from].x + 50}
              y1={30 - NETWORK_NODES[from].y * 2.3}
              x2={NETWORK_NODES[to].x + 50}
              y2={30 - NETWORK_NODES[to].y * 2.3}
            />
          ))}
        </g>
        <g fill="none" stroke={C.white} strokeOpacity="0.14" strokeWidth="0.1">
          {CENTER_MOLECULE_EDGES.map(([from, to], index) => (
            <line
              key={`center-bond-${index}`}
              x1={CENTER_MOLECULE[from].x + 50}
              y1={30 - CENTER_MOLECULE[from].y * 2.3}
              x2={CENTER_MOLECULE[to].x + 50}
              y2={30 - CENTER_MOLECULE[to].y * 2.3}
            />
          ))}
        </g>
        <g fill={C.white} fillOpacity="0.82">
          {OUTER_NODE_INDICES.map(index => {
            const node = NETWORK_NODES[index];
            return (
            <circle
              key={index}
              cx={node.x + 50}
              cy={30 - node.y * 2.3}
              r={Math.max(0.06, node.r * 0.045)}
            />
            );
          })}
        </g>
        <g fill={C.white} fillOpacity="0.82">
          {CENTER_MOLECULE.map((node, index) => (
            <circle
              key={`center-${index}`}
              cx={node.x + 50}
              cy={30 - node.y * 2.3}
              r="0.1"
            />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 42% 64% at 36% 46%, rgba(5,5,5,0.94), transparent 78%)' }} />
    </div>
  );
};

export default BackgroundAnimation;

