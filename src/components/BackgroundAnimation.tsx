import { useEffect, useRef } from 'react';

const COLORS = {
  black: '#050505',
  graphite: '#111111',
  white: '255,255,255',
  lime: '182,255,0',
  green: '125,204,0',
};

const CONFIG = {
  // ============================================================
  // DENSITY
  // ============================================================
  desktopNodes: 300,
  tabletNodes: 190,
  mobileNodes: 100,

  // ============================================================
  // NETWORK
  // ============================================================
  connectionDistance: 0.21,
  maxRenderConnectionDistance: 0.085,
  maxConnectionsPerNode: 2,

  // ============================================================
  // VISUAL
  // ============================================================
  nodeOpacity: 0.56,
  lineOpacity: 0.12,

  nodeSize: 1.15,
  minNodeSize: 0.65,
  maxNodeSize: 1.75,

  // ============================================================
  // MOTION
  // ============================================================
  driftSpeed: 0.000052,
  clusterSpeed: 0.000016,
  depthStrength: 0.00013,

  // ============================================================
  // SIGNALS
  // ============================================================
  signalFrequency: 0.000095,
  signalSpeed: 0.00040,

  // ============================================================
  // CURSOR
  // ============================================================
  mouseInfluence: 0.00072,
  cursorRadius: 0.145,
  maxCursorConnections: 3,

  // ============================================================
  // SCROLL
  // ============================================================
  scrollInfluence: 0.00010,

  // ============================================================
  // CREATIVE DETAILS
  // ============================================================
  orbitChance: 0.08,
  pulseChance: 0.025,
};

type NodeShape =
  | 'sphere'
  | 'cube'
  | 'diamond'
  | 'hexagon'
  | 'pyramid'
  | 'ring';

type NetworkNode = {
  x: number;
  y: number;
  z: number;

  layer: 0 | 1 | 2;

  shape: NodeShape;

  phase: number;
  speed: number;

  size: number;

  rotation: number;
  rotationSpeed: number;

  orbit: boolean;
  orbitRadius: number;
  orbitSpeed: number;

  pulseOffset: number;
};

type NetworkEdge = {
  from: number;
  to: number;

  signalPhase: number;
  signalOffset: number;

  importance: number;
};

type Cluster = {
  x: number;
  y: number;

  width: number;
  height: number;

  phase: number;

  driftX: number;
  driftY: number;

  breathe: number;

  nodes: NetworkNode[];
  edges: NetworkEdge[];
};

const seededRandom = (seed: number) => {
  let value = seed % 2147483647;

  return () => {
    value = (value * 16807) % 2147483647;

    return (
      (value - 1) /
      2147483646
    );
  };
};

const createNetwork = (
  nodeCount: number,
): Cluster[] => {
  const random =
    seededRandom(82371);

  /*
   * Asymmetric spatial composition.
   *
   * Center is intentionally quieter.
   */
  const layouts = [
    [0.00, 0.02, 0.30, 0.22],
    [0.70, 0.01, 0.30, 0.23],

    [-0.07, 0.24, 0.30, 0.27],
    [0.77, 0.23, 0.30, 0.28],

    [-0.04, 0.53, 0.31, 0.26],
    [0.73, 0.52, 0.31, 0.27],

    [0.01, 0.80, 0.31, 0.20],
    [0.69, 0.79, 0.31, 0.21],

    [0.29, 0.04, 0.42, 0.17],
    [0.30, 0.30, 0.40, 0.33],
    [0.29, 0.76, 0.42, 0.19],
  ];

  const nodesPerCluster =
    Math.max(
      5,
      Math.round(
        nodeCount /
          layouts.length,
      ),
    );

  return layouts.map(
    (
      [
        x,
        y,
        width,
        height,
      ],
      clusterIndex,
    ) => {
      const nodes: NetworkNode[] =
        Array.from(
          {
            length:
              nodesPerCluster,
          },
          (_, index) => {
            const roll =
              random();

            const shape: NodeShape =
              roll < 0.43
                ? 'cube'
                : roll < 0.60
                  ? 'sphere'
                  : roll < 0.73
                    ? 'diamond'
                    : roll < 0.84
                      ? 'hexagon'
                      : roll < 0.93
                        ? 'pyramid'
                        : 'ring';

            return {
              x:
                0.07 +
                random() *
                  0.86,

              y:
                0.08 +
                random() *
                  0.84,

              z:
                random() *
                  2 -
                1,

              layer:
                (index +
                  clusterIndex) %
                  10 ===
                0
                  ? 2
                  : (index +
                        clusterIndex) %
                      3 ===
                    0
                    ? 0
                    : 1,

              shape,

              phase:
                random() *
                Math.PI *
                2,

              speed:
                0.55 +
                random() *
                  0.9,

              size:
                CONFIG.minNodeSize +
                random() *
                  (
                    CONFIG.maxNodeSize -
                    CONFIG.minNodeSize
                  ),

              rotation:
                random() *
                Math.PI *
                2,

              rotationSpeed:
                (
                  random() -
                  0.5
                ) *
                0.000075,

              orbit:
                random() <
                CONFIG.orbitChance,

              orbitRadius:
                0.002 +
                random() *
                  0.009,

              orbitSpeed:
                0.000012 +
                random() *
                  0.000018,

              pulseOffset:
                random(),
            };
          },
        );

      const edges: NetworkEdge[] =
        [];

      const connectionCount =
        new Array(
          nodes.length,
        ).fill(0);

      const addEdge = (
        from: number,
        to: number,
        importance: number,
      ) => {
        if (from === to) {
          return;
        }

        if (
          connectionCount[from] >=
          CONFIG.maxConnectionsPerNode
        ) {
          return;
        }

        if (
          connectionCount[to] >=
          CONFIG.maxConnectionsPerNode
        ) {
          return;
        }

        const exists =
          edges.some(
            (edge) =>
              (
                edge.from ===
                  from &&
                edge.to === to
              ) ||
              (
                edge.from === to &&
                edge.to === from
              ),
          );

        if (exists) {
          return;
        }

        edges.push({
          from,
          to,

          signalPhase:
            random(),

          signalOffset:
            random(),

          importance,
        });

        connectionCount[
          from
        ] += 1;

        connectionCount[
          to
        ] += 1;
      };

      /*
       * Build local topology.
       *
       * Nodes only connect to nearby nodes.
       */
      nodes.forEach(
        (node, from) => {
          const candidates: Array<{
            index: number;
            distance: number;
          }> = [];

          nodes.forEach(
            (
              candidate,
              to,
            ) => {
              if (
                from === to
              ) {
                return;
              }

              const distance =
                Math.hypot(
                  node.x -
                    candidate.x,

                  node.y -
                    candidate.y,

                  (
                    node.z -
                    candidate.z
                  ) *
                    0.35,
                );

              if (
                distance <=
                CONFIG.connectionDistance
              ) {
                candidates.push({
                  index: to,
                  distance,
                });
              }
            },
          );

          candidates.sort(
            (a, b) =>
              a.distance -
              b.distance,
          );

          /*
           * Only a few closest candidates.
           */
          candidates
            .slice(0, 3)
            .forEach(
              (
                candidate,
              ) => {
                /*
                 * Sparse random topology.
                 */
                if (
                  random() >
                  0.36
                ) {
                  const importance =
                    1 -
                    candidate.distance /
                      CONFIG.connectionDistance;

                  addEdge(
                    from,
                    candidate.index,
                    Math.max(
                      0.25,
                      importance,
                    ),
                  );
                }
              },
            );
        },
      );

      return {
        x,
        y,
        width,
        height,

        phase:
          random() *
          Math.PI *
          2,

        driftX:
          (
            random() -
            0.5
          ) *
          0.11,

        driftY:
          (
            random() -
            0.5
          ) *
          0.08,

        breathe:
          0.985 +
          random() *
            0.025,

        nodes,

        edges,
      };
    },
  );
};

const drawNodeShape = (
  context: CanvasRenderingContext2D,
  shape: NodeShape,
  x: number,
  y: number,
  size: number,
  rotation: number,
  color: string,
) => {
  context.save();

  context.translate(
    x,
    y,
  );

  context.rotate(
    rotation,
  );

  context.fillStyle =
    color;

  context.strokeStyle =
    color;

  context.lineWidth =
    0.45;

  context.beginPath();

  if (
    shape ===
    'sphere'
  ) {
    context.arc(
      0,
      0,
      size,
      0,
      Math.PI * 2,
    );

    context.fill();
  }

  else if (
    shape ===
    'cube'
  ) {
    /*
     * Front face.
     */
    context.moveTo(
      -size,
      -size * 0.68,
    );

    context.lineTo(
      size * 0.55,
      -size,
    );

    context.lineTo(
      size,
      -size * 0.25,
    );

    context.lineTo(
      -size * 0.55,
      size * 0.04,
    );

    context.closePath();

    context.fill();

    /*
     * Secondary face.
     */
    context.globalAlpha *=
      0.38;

    context.beginPath();

    context.moveTo(
      -size * 0.55,
      size * 0.04,
    );

    context.lineTo(
      size,
      -size * 0.25,
    );

    context.lineTo(
      size * 0.55,
      size,
    );

    context.lineTo(
      -size,
      size * 0.68,
    );

    context.closePath();

    context.fill();
  }

  else if (
    shape ===
      'diamond' ||
    shape ===
      'pyramid'
  ) {
    context.moveTo(
      0,
      -size * 1.15,
    );

    context.lineTo(
      size,
      0,
    );

    context.lineTo(
      0,
      size * 1.15,
    );

    context.lineTo(
      -size,
      0,
    );

    context.closePath();

    if (
      shape ===
      'pyramid'
    ) {
      context.fill();
    } else {
      context.stroke();
    }
  }

  else if (
    shape ===
    'hexagon'
  ) {
    for (
      let index = 0;
      index < 6;
      index += 1
    ) {
      const angle =
        (
          Math.PI *
          2 *
          index
        ) /
        6;

      const pointX =
        Math.cos(angle) *
        size;

      const pointY =
        Math.sin(angle) *
        size;

      if (
        index === 0
      ) {
        context.moveTo(
          pointX,
          pointY,
        );
      } else {
        context.lineTo(
          pointX,
          pointY,
        );
      }
    }

    context.closePath();

    context.stroke();
  }

  else {
    /*
     * Ring node.
     */
    context.arc(
      0,
      0,
      size * 1.05,
      0,
      Math.PI * 2,
    );

    context.stroke();

    context.beginPath();

    context.arc(
      0,
      0,
      size * 0.30,
      0,
      Math.PI * 2,
    );

    context.fill();
  }

  context.restore();
};

const BackgroundAnimation =
  () => {
    const canvasRef =
      useRef<HTMLCanvasElement>(
        null,
      );

    useEffect(() => {
      const canvas =
        canvasRef.current;

      const context =
        canvas?.getContext(
          '2d',
        );

      if (
        !canvas ||
        !context
      ) {
        return;
      }

      const reducedMotionQuery =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        );

      let reducedMotion =
        reducedMotionQuery.matches;

      let animationFrame = 0;

      let width = 0;
      let height = 0;
      let dpr = 1;

      let scrollProgress = 0;

      const pointer = {
        x: 0.5,
        y: 0.5,

        targetX: 0.5,
        targetY: 0.5,

        active: 0,
        targetActive: 0,

        velocity: 0,
      };

      let clusters =
        createNetwork(
          CONFIG.desktopNodes,
        );

      const resize = () => {
        const bounds =
          canvas.getBoundingClientRect();

        width =
          bounds.width;

        height =
          bounds.height;

        dpr =
          Math.min(
            window.devicePixelRatio ||
              1,
            width < 768
              ? 1.35
              : 1.8,
          );

        canvas.width =
          Math.max(
            1,
            Math.floor(
              width * dpr,
            ),
          );

        canvas.height =
          Math.max(
            1,
            Math.floor(
              height * dpr,
            ),
          );

        context.setTransform(
          dpr,
          0,
          0,
          dpr,
          0,
          0,
        );

        const nodeCount =
          width < 600
            ? CONFIG.mobileNodes
            : width < 1024
              ? CONFIG.tabletNodes
              : CONFIG.desktopNodes;

        clusters =
          createNetwork(
            nodeCount,
          );

        draw(0);
      };

      const updateScroll =
        () => {
          scrollProgress =
            Math.min(
              1,
              Math.max(
                0,
                -canvas.getBoundingClientRect()
                  .top /
                  Math.max(
                    1,
                    height,
                  ),
              ),
            );
        };

      const updatePointer = (
        event: PointerEvent,
      ) => {
        if (
          reducedMotion ||
          event.pointerType ===
            'touch' ||
          width < 768
        ) {
          return;
        }

        const bounds =
          canvas.getBoundingClientRect();

        const inside =
          event.clientX >=
            bounds.left &&
          event.clientX <=
            bounds.right &&
          event.clientY >=
            bounds.top &&
          event.clientY <=
            bounds.bottom;

        if (!inside) {
          pointer.targetActive =
            0;

          return;
        }

        const nextX =
          (
            event.clientX -
            bounds.left
          ) /
          Math.max(
            1,
            bounds.width,
          );

        const nextY =
          (
            event.clientY -
            bounds.top
          ) /
          Math.max(
            1,
            bounds.height,
          );

        pointer.velocity =
          Math.min(
            1,
            Math.hypot(
              nextX -
                pointer.targetX,
              nextY -
                pointer.targetY,
            ) * 18,
          );

        pointer.targetX =
          nextX;

        pointer.targetY =
          nextY;

        pointer.targetActive =
          1;
      };

      const clearPointer =
        () => {
          pointer.targetActive =
            0;

          pointer.velocity =
            0;
        };

      const draw = (
        time: number,
      ) => {
        if (
          !width ||
          !height
        ) {
          return;
        }

        const elapsed =
          reducedMotion
            ? 0
            : time;

        /*
         * Background.
         */
        context.clearRect(
          0,
          0,
          width,
          height,
        );

        context.fillStyle =
          COLORS.black;

        context.fillRect(
          0,
          0,
          width,
          height,
        );

        /*
         * Smooth pointer.
         */
        pointer.x +=
          (
            pointer.targetX -
            pointer.x
          ) *
          0.035;

        pointer.y +=
          (
            pointer.targetY -
            pointer.y
          ) *
          0.035;

        pointer.active +=
          (
            pointer.targetActive -
            pointer.active
          ) *
          0.08;

        pointer.velocity *=
          0.94;

        const interactionNodes: Array<{
          x: number;
          y: number;
          distance: number;
        }> = [];

        /*
         * 3D camera.
         */
        const cameraX =
          reducedMotion
            ? 0
            : (
                pointer.x -
                0.5
              ) *
                width *
                0.018;

        const cameraY =
          reducedMotion
            ? 0
            : (
                pointer.y -
                0.5
              ) *
                height *
                0.014 +
              scrollProgress *
                height *
                0.018;

        clusters.forEach(
          (
            cluster,
            clusterIndex,
          ) => {
            /*
             * Central area remains quieter.
             */
            const centerQuiet =
              clusterIndex >= 8
                ? 0.42
                : 1;

            /*
             * Slow breathing movement.
             */
            const breathing =
              reducedMotion
                ? 1
                : 1 +
                  Math.sin(
                    elapsed *
                      CONFIG.clusterSpeed *
                      cluster.breathe +
                      cluster.phase,
                  ) *
                    0.008;

            const clusterDriftX =
              reducedMotion
                ? 0
                : Math.sin(
                    elapsed *
                      CONFIG.clusterSpeed +
                      cluster.phase,
                  ) *
                  cluster.driftX;

            const clusterDriftY =
              reducedMotion
                ? 0
                : Math.cos(
                    elapsed *
                      CONFIG.clusterSpeed *
                      0.83 +
                      cluster.phase,
                  ) *
                  cluster.driftY;

            const parallax =
              clusterIndex %
                3 ===
              0
                ? 1
                : clusterIndex %
                      3 ===
                    1
                  ? 0.55
                  : 0.25;

            const originX =
              (
                cluster.x +
                clusterDriftX +
                (
                  pointer.x -
                  0.5
                ) *
                  CONFIG.mouseInfluence *
                  parallax -
                scrollProgress *
                  CONFIG.scrollInfluence
              ) *
              width;

            const originY =
              (
                cluster.y +
                clusterDriftY +
                (
                  pointer.y -
                  0.5
                ) *
                  CONFIG.mouseInfluence *
                  parallax +
                scrollProgress *
                  CONFIG.scrollInfluence
              ) *
              height;

            /*
             * Project nodes.
             */
            const points =
              cluster.nodes.map(
                (
                  node,
                ) => {
                  const depth =
                    node.layer ===
                    0
                      ? 0.35
                      : node.layer ===
                          1
                        ? 0.72
                        : 1.15;

                  const movementX =
                    reducedMotion
                      ? 0
                      : Math.sin(
                          elapsed *
                            CONFIG.driftSpeed *
                            node.speed +
                            node.phase,
                        ) *
                        0.015;

                  const movementY =
                    reducedMotion
                      ? 0
                      : Math.cos(
                          elapsed *
                            CONFIG.driftSpeed *
                            0.82 *
                            node.speed +
                            node.phase,
                        ) *
                        0.012;

                  /*
                   * Tiny orbital movement.
                   */
                  const orbitX =
                    node.orbit &&
                    !reducedMotion
                      ? Math.cos(
                          elapsed *
                            node.orbitSpeed +
                            node.phase,
                        ) *
                        node.orbitRadius
                      : 0;

                  const orbitY =
                    node.orbit &&
                    !reducedMotion
                      ? Math.sin(
                          elapsed *
                            node.orbitSpeed +
                            node.phase,
                        ) *
                        node.orbitRadius
                      : 0;

                  /*
                   * Z movement.
                   */
                  const depthMotionX =
                    reducedMotion
                      ? 0
                      : Math.sin(
                          elapsed *
                            CONFIG.clusterSpeed *
                            depth +
                            node.phase *
                              0.7,
                        ) *
                        0.012 *
                        depth;

                  const depthMotionY =
                    reducedMotion
                      ? 0
                      : Math.cos(
                          elapsed *
                            CONFIG.clusterSpeed *
                            0.76 *
                            depth +
                            node.phase,
                        ) *
                        0.009 *
                        depth;

                  const localX =
                    (
                      node.x +
                      movementX +
                      orbitX +
                      depthMotionX
                    ) *
                    breathing;

                  const localY =
                    (
                      node.y +
                      movementY +
                      orbitY +
                      depthMotionY
                    ) *
                    breathing;

                  const worldX =
                    originX +
                    localX *
                      cluster.width *
                      width;

                  const worldY =
                    originY +
                    localY *
                      cluster.height *
                      height;

                  const worldZ =
                    node.z +
                    (
                      reducedMotion
                        ? 0
                        : Math.sin(
                            elapsed *
                              CONFIG.depthStrength +
                              node.phase,
                          ) *
                          0.085
                    );

                  const perspective =
                    1 /
                    (
                      1 -
                      worldZ *
                        0.18
                    );

                  return {
                    x:
                      width / 2 +
                      (
                        worldX -
                        width / 2 -
                        cameraX *
                          worldZ
                      ) *
                        perspective,

                    y:
                      height / 2 +
                      (
                        worldY -
                        height / 2 -
                        cameraY *
                          worldZ
                      ) *
                        perspective,

                    depth,

                    perspective,
                  };
                },
              );

            /*
             * ==================================================
             * CLUSTER CONNECTIONS
             * ==================================================
             */
            cluster.edges.forEach(
              (edge) => {
                const from =
                  points[
                    edge.from
                  ];

                const to =
                  points[
                    edge.to
                  ];

                const distance =
                  Math.hypot(
                    from.x -
                      to.x,
                    from.y -
                      to.y,
                  );

                /*
                 * HARD SHORT-LINE LIMIT.
                 */
                const maxLineLength =
                  Math.min(
                    width,
                    height,
                  ) *
                  CONFIG.maxRenderConnectionDistance;

                if (
                  distance >
                  maxLineLength
                ) {
                  return;
                }

                /*
                 * Rare signal activation.
                 */
                const active =
                  !reducedMotion &&
                  Math.sin(
                    elapsed *
                      CONFIG.signalFrequency +
                      edge.signalPhase *
                        12 +
                      edge.signalOffset *
                        8,
                  ) >
                    0.91;

                /*
                 * Clear but still subtle.
                 */
                const baseOpacity =
                  CONFIG.lineOpacity *
                  edge.importance *
                  centerQuiet;

                const opacity =
                  active
                    ? 0.32 *
                      edge.importance *
                      centerQuiet
                    : baseOpacity *
                      0.80;

                context.strokeStyle =
                  active
                    ? `rgba(${COLORS.lime},${opacity})`
                    : `rgba(${COLORS.white},${opacity})`;

                /*
                 * Hairline.
                 * DO NOT increase.
                 */
                context.lineWidth =
                  active
                    ? 0.52
                    : 0.30;

                context.beginPath();

                context.moveTo(
                  from.x,
                  from.y,
                );

                context.lineTo(
                  to.x,
                  to.y,
                );

                context.stroke();

                /*
                 * Moving Lime signal.
                 */
                if (
                  active
                ) {
                  const signalPosition =
                    (
                      elapsed *
                        CONFIG.signalSpeed +
                      edge.signalOffset
                    ) % 1;

                  const signalX =
                    from.x +
                    (
                      to.x -
                      from.x
                    ) *
                      signalPosition;

                  const signalY =
                    from.y +
                    (
                      to.y -
                      from.y
                    ) *
                      signalPosition;

                  context.fillStyle =
                    `rgba(${COLORS.lime},0.82)`;

                  context.beginPath();

                  context.arc(
                    signalX,
                    signalY,
                    1.0,
                    0,
                    Math.PI * 2,
                  );

                  context.fill();
                }
              },
            );

            /*
             * ==================================================
             * NODES
             * ==================================================
             */
            cluster.nodes.forEach(
              (
                node,
                index,
              ) => {
                const point =
                  points[index];

                /*
                 * Cursor interaction.
                 */
                if (
                  pointer.active >
                  0.01
                ) {
                  const cursorX =
                    pointer.x *
                    width;

                  const cursorY =
                    pointer.y *
                    height;

                  const distance =
                    Math.hypot(
                      point.x -
                        cursorX,
                      point.y -
                        cursorY,
                    );

                  const interactionRadius =
                    Math.min(
                      width,
                      height,
                    ) *
                    CONFIG.cursorRadius;

                  if (
                    distance <
                    interactionRadius
                  ) {
                    interactionNodes.push({
                      x: point.x,
                      y: point.y,
                      distance,
                    });
                  }
                }

                /*
                 * Rare node pulse.
                 */
                const active =
                  !reducedMotion &&
                  Math.sin(
                    elapsed *
                      CONFIG.signalFrequency +
                      node.phase *
                        11 +
                      node.pulseOffset,
                  ) >
                    0.94;

                /*
                 * 3D size.
                 */
                const radius =
                  CONFIG.nodeSize *
                  node.size *
                  (
                    0.82 +
                    point.depth *
                      0.18
                  ) *
                  point.perspective;

                const nodeColor =
                  active
                    ? `rgba(${COLORS.lime},${
                        0.90 *
                        centerQuiet
                      })`
                    : node.layer ===
                        0
                      ? `rgba(${COLORS.green},${
                          0.32 *
                          centerQuiet
                        })`
                      : `rgba(${COLORS.white},${
                          CONFIG.nodeOpacity *
                          (
                            node.layer ===
                            2
                              ? 1.12
                              : 0.70
                          ) *
                          centerQuiet
                        })`;

                /*
                 * Tiny selective glow.
                 */
                if (
                  active
                ) {
                  context.shadowColor =
                    `rgba(${COLORS.lime},0.55)`;

                  context.shadowBlur =
                    5;
                }

                drawNodeShape(
                  context,
                  node.shape,
                  point.x,
                  point.y,
                  radius,
                  reducedMotion
                    ? node.rotation
                    : node.rotation +
                      elapsed *
                        node.rotationSpeed,
                  nodeColor,
                );

                context.shadowBlur =
                  0;
              },
            );
          },
        );

        /*
         * ========================================================
         * CURSOR INTELLIGENCE FIELD
         * ========================================================
         */
        if (
          pointer.active >
            0.01 &&
          interactionNodes.length >
            0
        ) {
          const cursorX =
            pointer.x *
            width;

          const cursorY =
            pointer.y *
            height;

          const connectionCount =
            Math.min(
              CONFIG.maxCursorConnections,
              2 +
                Math.round(
                  pointer.velocity,
                ),
            );

          interactionNodes.sort(
            (a, b) =>
              a.distance -
              b.distance,
          );

          const activeNodes =
            interactionNodes.slice(
              0,
              connectionCount,
            );

          const cursorMaxDistance =
            Math.min(
              width,
              height,
            ) *
            CONFIG.cursorRadius;

          activeNodes.forEach(
            (
              node,
              index,
            ) => {
              const strength =
                pointer.active *
                (
                  1 -
                  node.distance /
                    cursorMaxDistance
                );

              /*
               * Very small local response.
               */
              const displacement =
                Math.min(
                  3,
                  strength *
                    (
                      1.1 +
                      pointer.velocity *
                        1.4
                    ),
                );

              const directionX =
                (
                  cursorX -
                  node.x
                ) /
                Math.max(
                  1,
                  node.distance,
                );

              const directionY =
                (
                  cursorY -
                  node.y
                ) /
                Math.max(
                  1,
                  node.distance,
                );

              const nodeX =
                node.x +
                directionX *
                  displacement;

              const nodeY =
                node.y +
                directionY *
                  displacement;

              /*
               * Cursor lines are even shorter.
               */
              const cursorDistance =
                Math.hypot(
                  nodeX -
                    cursorX,
                  nodeY -
                    cursorY,
                );

              const maxCursorLine =
                Math.min(
                  width,
                  height,
                ) *
                0.07;

              if (
                cursorDistance >
                maxCursorLine
              ) {
                return;
              }

              context.strokeStyle =
                `rgba(${COLORS.lime},${
                  0.035 +
                  strength *
                    0.075
                })`;

              context.lineWidth =
                0.28 +
                strength *
                  0.15;

              context.beginPath();

              context.moveTo(
                cursorX,
                cursorY,
              );

              context.lineTo(
                nodeX,
                nodeY,
              );

              context.stroke();

              /*
               * Activated node.
               */
              context.fillStyle =
                `rgba(${COLORS.lime},${
                  0.18 +
                  strength *
                    0.30
                })`;

              context.beginPath();

              context.arc(
                nodeX,
                nodeY,
                0.8 +
                  strength *
                    0.55,
                0,
                Math.PI * 2,
              );

              context.fill();

              /*
               * Cursor signal.
               */
              if (
                index === 0 &&
                !reducedMotion
              ) {
                const signalPosition =
                  (
                    elapsed *
                      CONFIG.signalSpeed *
                      (
                        1.15 +
                        pointer.velocity
                      ) +
                    0.25
                  ) % 1;

                context.fillStyle =
                  `rgba(${COLORS.lime},${
                    0.48 +
                    strength *
                      0.25
                  })`;

                context.beginPath();

                context.arc(
                  cursorX +
                    (
                      nodeX -
                      cursorX
                    ) *
                      signalPosition,

                  cursorY +
                    (
                      nodeY -
                      cursorY
                    ) *
                      signalPosition,

                  0.9,

                  0,

                  Math.PI * 2,
                );

                context.fill();
              }
            },
          );

          /*
           * Cursor anchor.
           */
          context.fillStyle =
            `rgba(${COLORS.lime},${
              0.24 *
              pointer.active
            })`;

          context.beginPath();

          context.arc(
            cursorX,
            cursorY,
            1.2 +
              pointer.active *
                0.45,
            0,
            Math.PI * 2,
          );

          context.fill();
        }
      };

      const animate = (
        time: number,
      ) => {
        draw(time);

        animationFrame =
          window.requestAnimationFrame(
            animate,
          );
      };

      const handleMotionPreference =
        (
          event: MediaQueryListEvent,
        ) => {
          reducedMotion =
            event.matches;

          if (
            reducedMotion
          ) {
            pointer.targetActive =
              0;

            draw(0);
          }
        };

      resize();

      updateScroll();

      window.addEventListener(
        'resize',
        resize,
      );

      window.addEventListener(
        'scroll',
        updateScroll,
        {
          passive: true,
        },
      );

      window.addEventListener(
        'pointermove',
        updatePointer,
        {
          passive: true,
        },
      );

      window.addEventListener(
        'blur',
        clearPointer,
      );

      reducedMotionQuery.addEventListener(
        'change',
        handleMotionPreference,
      );

      animationFrame =
        window.requestAnimationFrame(
          animate,
        );

      return () => {
        window.cancelAnimationFrame(
          animationFrame,
        );

        window.removeEventListener(
          'resize',
          resize,
        );

        window.removeEventListener(
          'scroll',
          updateScroll,
        );

        window.removeEventListener(
          'pointermove',
          updatePointer,
        );

        window.removeEventListener(
          'blur',
          clearPointer,
        );

        reducedMotionQuery.removeEventListener(
          'change',
          handleMotionPreference,
        );
      };
    }, []);

    return (
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {/* Center readability / cinematic depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 55% at 50% 43%, rgba(5,5,5,0.46) 0%, rgba(5,5,5,0.16) 45%, transparent 82%), linear-gradient(180deg, rgba(5,5,5,0.06), rgba(5,5,5,0.40))',
          }}
        />

        {/* Very subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 45%, rgba(5,5,5,0.32) 100%)',
          }}
        />
      </div>
    );
  };

export default BackgroundAnimation;