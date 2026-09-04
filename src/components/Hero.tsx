import { useRef } from 'react';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Database, BarChart3, Settings, FileText } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS  (Velnix Locked Color System)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:     '#050505',
  graphite:  '#111111',
  white:     '#FFFFFF',
  lime:      '#B6FF00',
  green:     '#7DCC00',
  limeAlpha: (o: number) => `rgba(182,255,0,${o})`,
  greenAlpha: (o: number) => `rgba(125,204,0,${o})`,
  whiteAlpha: (o: number) => `rgba(255,255,255,${o})`,
};

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION PRESETS
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// WORKFLOW NODE DATA  (drives the visual)
// ─────────────────────────────────────────────────────────────────────────────
const NODES = [
  { id: 'input',    x: 18,  y: 38, label: 'Data Sources',       icon: Database,   pulse: false },
  { id: 'process',  x: 50,  y: 22, label: 'AI Engine',          icon: Zap,        pulse: true  },
  { id: 'automate', x: 82,  y: 38, label: 'Automation',         icon: Settings,   pulse: false },
  { id: 'crm',      x: 18,  y: 72, label: 'Spreadsheets',       icon: FileText,   pulse: false },
  { id: 'report',   x: 82,  y: 72, label: 'Business Outcomes',  icon: BarChart3,  pulse: false },
];

const EDGES = [
  { from: 'input',   to: 'process',  active: true  },
  { from: 'crm',     to: 'process',  active: true  },
  { from: 'process', to: 'automate', active: true  },
  { from: 'process', to: 'report',   active: true  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: map node id → coords
// ─────────────────────────────────────────────────────────────────────────────
const nodeMap = Object.fromEntries(NODES.map(n => [n.id, n]));

const WorkflowEdge = ({
  edge,
  index,
  scrollProgress,
  connectionOpacity,
  shouldReduce,
}: {
  edge: typeof EDGES[number];
  index: number;
  scrollProgress: MotionValue<number>;
  connectionOpacity: MotionValue<number>;
  shouldReduce: boolean;
}) => {
  const n1 = nodeMap[edge.from];
  const n2 = nodeMap[edge.to];
  const isVert = Math.abs(n1.x - n2.x) < Math.abs(n1.y - n2.y);
  const grad = isVert ? 'eg2' : 'eg1';
  const edgeProgress = useTransform(scrollProgress, [0.16 + index * 0.04, 0.48 + index * 0.04], [0, 1]);
  const dx = useTransform(edgeProgress, value => n1.x + (n2.x - n1.x) * value);
  const dy = useTransform(edgeProgress, value => n1.y + (n2.y - n1.y) * value);

  return (
    <g>
      <motion.line
        x1={n1.x}
        y1={n1.y}
        x2={n2.x}
        y2={n2.y}
        stroke={`url(#${grad})`}
        strokeWidth="0.35"
        strokeDasharray={edge.active ? '1.2 1.2' : '0.5 2'}
        strokeOpacity={edge.active ? connectionOpacity : 0.25}
      />
      {!shouldReduce && (
        <motion.circle cx={dx} cy={dy} r="0.8" fill={C.lime} opacity={connectionOpacity} />
      )}
    </g>
  );
};

const WorkflowNode = ({
  node,
  index,
  scrollProgress,
  shouldReduce,
}: {
  node: typeof NODES[number];
  index: number;
  scrollProgress: MotionValue<number>;
  shouldReduce: boolean;
}) => {
  const NodeIcon = node.icon;
  const isCentral = node.id === 'process';
  const nodeOpacity = useTransform(scrollProgress, [0.08 + index * 0.08, 0.3 + index * 0.08], [0.35, 1]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.12, duration: 0.5, ease }}
      className="absolute"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: 'translate(-50%, -50%)',
        opacity: shouldReduce ? 1 : nodeOpacity,
      }}
    >
      {isCentral && !shouldReduce && (
        <span
          className="absolute inset-0 rounded-none"
          style={{
            animation: 'velnix-ring 2.2s ease-out infinite',
            border: `1px solid ${C.limeAlpha(0.5)}`,
            borderRadius: 4,
            inset: -8,
          }}
        />
      )}
      <div
        className="relative flex flex-col items-center gap-1 px-3 py-2.5 rounded-none"
        style={{
          background: isCentral ? `linear-gradient(145deg, ${C.lime}18 0%, ${C.graphite} 100%)` : C.graphite,
          border: `1px solid ${isCentral ? C.limeAlpha(0.5) : C.whiteAlpha(0.1)}`,
          minWidth: isCentral ? 96 : 80,
          boxShadow: isCentral ? `0 0 24px ${C.limeAlpha(0.2)}` : `0 2px 12px rgba(0,0,0,0.4)`,
        }}
      >
        <NodeIcon size={isCentral ? 20 : 14} strokeWidth={1.5} color={isCentral ? C.lime : C.whiteAlpha(0.65)} />
        <span
          className="leading-tight text-center"
          style={{
            fontSize: isCentral ? 9.5 : 8,
            fontWeight: isCentral ? 700 : 500,
            color: isCentral ? C.lime : C.whiteAlpha(0.7),
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1.25,
          }}
        >
          {node.label}
        </span>
      </div>
    </motion.div>
  );
};

const WorkflowVisual = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const shouldReduce = useReducedMotion();
  const connectionOpacity = useTransform(scrollProgress, [0.1, 0.42], [0.15, 1]);
  const systemOpacity = useTransform(scrollProgress, [0, 0.2, 0.8], [0.55, 1, 1]);

  return (
    <div className="relative w-full aspect-[1.6] min-h-[280px]">
      <div
        className="absolute rounded-full blur-[80px]"
        style={{
          width: '50%',
          height: '50%',
          top: '0%',
          left: '25%',
          background: C.greenAlpha(0.08),
          animation: shouldReduce ? 'none' : 'pulse 4s ease-in-out infinite',
        }}
      />
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: systemOpacity }}
      >
        <defs>
          <pattern id="velnix-grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke={C.whiteAlpha(0.06)} strokeWidth="0.25" />
          </pattern>
          <linearGradient id="eg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.green} stopOpacity="0.3" />
            <stop offset="100%" stopColor={C.lime} stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="eg2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C.green} stopOpacity="0.3" />
            <stop offset="100%" stopColor={C.lime} stopOpacity="0.9" />
          </linearGradient>
          <rect width="100%" height="100%" fill="url(#velnix-grid)" />
        </defs>
        {EDGES.map((edge, index) => (
          <WorkflowEdge
            key={`${edge.from}-${edge.to}`}
            edge={edge}
            index={index}
            scrollProgress={scrollProgress}
            connectionOpacity={connectionOpacity}
            shouldReduce={Boolean(shouldReduce)}
          />
        ))}
      </motion.svg>
      {NODES.map((node, index) => (
        <WorkflowNode
          key={node.id}
          node={node}
          index={index}
          scrollProgress={scrollProgress}
          shouldReduce={Boolean(shouldReduce)}
        />
      ))}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// METRIC CHIP
// ─────────────────────────────────────────────────────────────────────────────
const MetricChip = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    {...fadeUp}
    transition={{ delay, duration: 0.55, ease }}
    className="flex flex-col items-start"
  >
    <span
      style={{
        fontSize: '1.75rem',
        fontWeight: 800,
        color: C.lime,
        lineHeight: 1,
        letterSpacing: '-0.03em',
      }}
    >
      {value}
    </span>
    <span
      style={{
        fontSize: '0.7rem',
        color: C.whiteAlpha(0.55),
        marginTop: 3,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN HERO
// ─────────────────────────────────────────────────────────────────────────────
const Hero = () => {
  const shouldReduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroVisualOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0.7]);
  const heroVisualScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.94]);

  return (
    <>
      {/* Keyframe injections */}
      <style>{`
        @keyframes velnix-ring {
          0%   { opacity: 0.7; transform: scale(1);    }
          80%  { opacity: 0;   transform: scale(1.35); }
          100% { opacity: 0;   transform: scale(1.35); }
        }
        @keyframes velnix-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes velnix-shimmer {
          from { background-position: -200% center; }
          to   { background-position:  200% center; }
        }
        @keyframes velnix-headline {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section
        ref={heroRef}
        id="hero"
        className="relative isolate w-full overflow-hidden"
        style={{
          minHeight: '100vh',
          background: C.black,
        }}
        aria-label="Velnix Solutions hero section"
      >

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)',
            filter: 'blur(10px)',
          }}
        />

        {/* ── BACKGROUND AMBIENT ── */}
        <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

          {/* Very subtle lime glow — top-left */}
          <div
            className="absolute"
            style={{
              width: 560,
              height: 560,
              top: -160,
              left: -120,
              background: `radial-gradient(circle, ${C.limeAlpha(0.1)} 0%, ${C.greenAlpha(0.035)} 38%, transparent 72%)`,
              filter: 'blur(46px)',
            }}
          />

          {/* Very subtle green glow — bottom-right */}
          <div
            className="absolute"
            style={{
              width: 480,
              height: 480,
              bottom: -80,
              right: -80,
              background: `radial-gradient(circle, ${C.greenAlpha(0.12)} 0%, ${C.greenAlpha(0.04)} 42%, transparent 74%)`,
              filter: 'blur(64px)',
            }}
          />

          {/* Thin horizontal rule */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: 1, background: `linear-gradient(90deg, transparent, ${C.limeAlpha(0.2)}, transparent)` }}
          />
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div
          className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 
                     grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16
                     items-center
                     pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32"
        >

          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Messaging
          ═══════════════════════════════════════════ */}
          <div className="flex flex-col items-start">

            {/* H1 */}
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.65, ease }}
              style={{
                fontSize: 'clamp(2.35rem, 4.5vw, 3.75rem)',
                fontWeight: 800,
                color: C.white,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Turn Repetitive{' '}
              <span
                style={{
                  color: C.lime,
                  display: 'inline',
                }}
              >
                Operations
              </span>{' '}
              Into Intelligent Systems.
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.25, duration: 0.65, ease }}
              style={{
                fontSize: 'clamp(0.975rem, 1.6vw, 1.125rem)',
                color: C.whiteAlpha(0.72),
                lineHeight: 1.75,
                maxWidth: '42ch',
                marginBottom: '2.5rem',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}
            >
              Velnix develops custom AI solutions that replace manual spreadsheets with automated workflows,
              helping your team focus on growth instead of administration.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.35, duration: 0.55, ease }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >

              {/* Primary CTA */}
              <PrimaryButton />

              {/* AI Audit CTA */}
              <a
                href="/ai-audit"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: C.black,
                  borderColor: C.lime,
                  background: C.lime,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.green;
                  e.currentTarget.style.color = C.black;
                  e.currentTarget.style.background = C.green;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.lime;
                  e.currentTarget.style.color = C.black;
                  e.currentTarget.style.background = C.lime;
                }}
              >
                Get the AI Audit — $1,000
                <ArrowRight size={15} />
              </a>

            </motion.div>

            {/* Metrics row */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.55, duration: 0.5, ease }}
              className="flex items-center gap-10 mt-10 pt-8"
              style={{ borderTop: `1px solid ${C.whiteAlpha(0.08)}` }}
            >
              <MetricChip value="60%" label="Admin work cut"  delay={0.58} />
              <div style={{ width: 1, height: 36, background: C.whiteAlpha(0.1) }} />
              <MetricChip value="3×"  label="Faster workflows" delay={0.62} />
              <div style={{ width: 1, height: 36, background: C.whiteAlpha(0.1) }} />
              <MetricChip value="SMB" label="Focused solutions"  delay={0.66} />
            </motion.div>
          </div>

          {/* ═══════════════════════════════════════════
              RIGHT COLUMN — Workflow Visual
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            className="relative w-full"
            style={{ minHeight: 420, opacity: shouldReduce ? 1 : heroVisualOpacity, scale: shouldReduce ? 1 : heroVisualScale }}
          >
            {/* Panel label */}
            <div
              className="absolute -top-px left-0 right-0 flex items-center justify-between px-4 py-2 z-10"
              style={{
                background: C.limeAlpha(0.07),
                borderBottom: `1px solid ${C.limeAlpha(0.15)}`,
                borderTop: `1px solid ${C.limeAlpha(0.15)}`,
              }}
            >
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: C.limeAlpha(0.85),
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Intelligent Workflow Engine
              </span>
              <div className="flex items-center gap-1.5">
                {[C.white, C.lime, C.green].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: c,
                      opacity: i === 0 ? 0.2 : 0.8,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* The visualization */}
            <div className="w-full" style={{ paddingTop: 36, minHeight: 420 }}>
              <WorkflowVisual scrollProgress={scrollYProgress} />
            </div>

            {/* Decorative corner marks */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <span
                key={i}
                className={`absolute ${pos}`}
                style={{
                  width: 16, height: 16,
                  borderTop:    i < 2 ? `2px solid ${C.limeAlpha(0.3)}` : 'none',
                  borderBottom: i >= 2 ? `2px solid ${C.limeAlpha(0.3)}` : 'none',
                  borderLeft:   i % 2 === 0 ? `2px solid ${C.limeAlpha(0.3)}` : 'none',
                  borderRight:  i % 2 === 1 ? `2px solid ${C.limeAlpha(0.3)}` : 'none',
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM FEATURED IN STRIP ── */}
        <FeaturedInStrip />
      </section>
    </>
  );
};

export default Hero;

// ─────────────────────────────────────────────────────────────────────────────
// PRIMARY BUTTON  (magnetic + shimmer)
// ─────────────────────────────────────────────────────────────────────────────
const PrimaryButton = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleEnter = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = C.green;
    el.style.boxShadow = `0 0 0 3px ${C.limeAlpha(0.2)}, 0 12px 36px ${C.limeAlpha(0.5)}`;
  };

  const handleLeave = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = 'translate(0,0)';
    el.style.background = C.lime;
    el.style.boxShadow = `0 0 0 0 ${C.limeAlpha(0)}, 0 8px 28px ${C.limeAlpha(0.35)}`;
  };

  return (
    <a
      ref={ref}
      href="https://calendar.app.google/F63aBoA5vxJdtihj7"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group inline-flex items-center gap-2.5 relative overflow-hidden rounded-full transition-transform duration-200"
      style={{
        background: C.lime,
        color: C.black,
        fontWeight: 700,
        fontSize: '0.9rem',
        letterSpacing: '0.01em',
        padding: '0.8rem 1.75rem',
        textDecoration: 'none',
        border: `1px solid ${C.limeAlpha(0.5)}`,
        boxShadow: `0 0 0 0 ${C.limeAlpha(0)}, 0 8px 28px ${C.limeAlpha(0.35)}`,
        transition: 'box-shadow 0.3s ease, transform 0.2s ease',
        lineHeight: 1,
      }}
      aria-label="Identify what to automate — Book a strategy call with Velnix"
    >
      {/* Shimmer sweep */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)',
          backgroundSize: '200% auto',
          animation: 'velnix-shimmer 2.8s linear infinite',
        }}
      />

      <span className="relative z-10">Identify What to Automate</span>
      <ArrowRight
        size={16}
        strokeWidth={2.5}
        className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200"
      />
    </a>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED IN STRIP
// ─────────────────────────────────────────────────────────────────────────────
const PUBLICATIONS = [
  { name: 'Business Insider', style: { fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const } },
  { name: 'Mashable',         style: { fontWeight: 900, fontSize: '1.05rem', letterSpacing: '-0.02em' } },
  { name: 'Khaleej Times',    style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 700, fontSize: '1rem' } },
  { name: 'yahoo! finance',   style: { fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.01em' } },
  { name: 'New York Weekly',  style: { fontFamily: 'Times New Roman, serif', fontSize: '0.85rem', letterSpacing: '0.06em' } },
];

const FeaturedInStrip = () => {
  const shouldReduce = useReducedMotion();
  const publicationTrack = [...PUBLICATIONS, ...PUBLICATIONS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative z-10 w-full overflow-hidden border-t"
      style={{ borderColor: C.lime, background: C.lime }}
      aria-label="As featured in"
    >
  
          <div
            className="flex w-max items-center gap-6 py-3 pr-6 sm:gap-10 sm:py-4 sm:pr-10"
            style={{
              animation: shouldReduce ? 'none' : 'velnix-headline 24s linear infinite',
            }}
          >
            {publicationTrack.map((publication, index) => (
              <span
                key={`${publication.name}-${index}`}
                aria-hidden={index >= PUBLICATIONS.length}
                style={{
                  color: C.black,
                  ...publication.style,
                  transition: 'color 0.3s',
                  cursor: 'default',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.black; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.black; }}
              >
                {publication.name}
              </span>
            ))}
          </div>
    </motion.div>
  );
};
