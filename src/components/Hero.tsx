import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Zap, ChevronRight, Database, BarChart3, Settings, FileText } from 'lucide-react';

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

// ─────────────────────────────────────────────────────────────────────────────
// WORKFLOW VISUAL
// ─────────────────────────────────────────────────────────────────────────────
const WorkflowVisual = () => {
  const shouldReduce = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (shouldReduce) return;
    const id = setInterval(() => setTick(t => (t + 1) % 100), 60);
    return () => clearInterval(id);
  }, [shouldReduce]);

  return (
    <div className="relative w-full h-full select-none" aria-hidden="true">

      {/* Outer container */}
      <div
        className="relative w-full h-full rounded-none overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${C.graphite} 0%, ${C.black} 100%)`,
          border: `1px solid ${C.whiteAlpha(0.07)}`,
        }}
      >
        {/* Subtle background grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="velnix-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={C.white} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#velnix-grid)" />
        </svg>

        {/* Deep-green ambient glow behind center node */}
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

        {/* SVG – edges + animated dots */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            {/* Lime gradient for active edges */}
            <linearGradient id="eg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={C.green} stopOpacity="0.3" />
              <stop offset="100%" stopColor={C.lime} stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="eg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={C.green} stopOpacity="0.3" />
              <stop offset="100%" stopColor={C.lime} stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {EDGES.map((e, i) => {
            const n1 = nodeMap[e.from];
            const n2 = nodeMap[e.to];
            const id = `grad-${i}`;
            const isVert = Math.abs(n1.x - n2.x) < Math.abs(n1.y - n2.y);
            const grad = isVert ? 'eg2' : 'eg1';

            // Animated travelling dot position
            const progress = ((tick * 1.2 + i * 28) % 100) / 100;
            const dx = n1.x + (n2.x - n1.x) * progress;
            const dy = n1.y + (n2.y - n1.y) * progress;

            return (
              <g key={id}>
                {/* Edge line */}
                <line
                  x1={n1.x}
                  y1={n1.y}
                  x2={n2.x}
                  y2={n2.y}
                  stroke={`url(#${grad})`}
                  strokeWidth="0.35"
                  strokeDasharray={e.active ? '1.2 1.2' : '0.5 2'}
                  strokeOpacity={e.active ? 0.8 : 0.25}
                />
                {/* Travelling pulse dot */}
                {!shouldReduce && (
                  <circle
                    cx={dx}
                    cy={dy}
                    r="0.8"
                    fill={C.lime}
                    opacity={0.95}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {NODES.map((node, i) => {
          const NodeIcon = node.icon;
          const isCentral = node.id === 'process';

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease }}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Pulse ring for central AI node */}
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

              {/* Node card */}
              <div
                className="relative flex flex-col items-center gap-1 px-3 py-2.5 rounded-none"
                style={{
                  background: isCentral
                    ? `linear-gradient(145deg, ${C.lime}18 0%, ${C.graphite} 100%)`
                    : C.graphite,
                  border: `1px solid ${isCentral ? C.limeAlpha(0.5) : C.whiteAlpha(0.1)}`,
                  minWidth: isCentral ? 96 : 80,
                  boxShadow: isCentral
                    ? `0 0 24px ${C.limeAlpha(0.2)}`
                    : `0 2px 12px rgba(0,0,0,0.4)`,
                }}
              >
                <NodeIcon
                  size={isCentral ? 20 : 14}
                  strokeWidth={1.5}
                  color={isCentral ? C.lime : C.whiteAlpha(0.65)}
                />
                <span
                  className="leading-tight text-center"
                  style={{
                    fontSize: isCentral ? 9.5 : 8,
                    fontWeight: isCentral ? 700 : 500,
                    color: isCentral ? C.lime : C.whiteAlpha(0.7),
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    lineHeight: 1.25,
                    maxWidth: 72,
                  }}
                >
                  {node.label}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2"
          style={{
            background: C.limeAlpha(0.06),
            borderTop: `1px solid ${C.limeAlpha(0.15)}`,
          }}
        >
          <span style={{ fontSize: 9, color: C.limeAlpha(0.8), letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            System Active
          </span>
          <div className="flex items-center gap-1.5">
            {!shouldReduce && (
              <span
                className="rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  background: C.lime,
                  animation: 'velnix-blink 1.4s ease-in-out infinite',
                  boxShadow: `0 0 8px ${C.lime}`,
                }}
              />
            )}
            <span style={{ fontSize: 9, color: C.whiteAlpha(0.5), letterSpacing: '0.08em' }}>
              VELNIX AI
            </span>
          </div>
        </motion.div>
      </div>
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
  const ctaRef = useRef<HTMLAnchorElement>(null);

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
      `}</style>

      <section
        id="hero"
        className="relative isolate w-full overflow-hidden"
        style={{
          minHeight: '100vh',
          background: C.black,
        }}
        aria-label="Velnix Solutions hero section"
      >

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
              background: `radial-gradient(circle, ${C.limeAlpha(0.04)} 0%, transparent 70%)`,
              filter: 'blur(60px)',
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
              background: `radial-gradient(circle, ${C.greenAlpha(0.04)} 0%, transparent 70%)`,
              filter: 'blur(80px)',
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

            {/* Eyebrow */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.05, duration: 0.5, ease }}
              className="flex items-center gap-2 mb-7"
            >
              <span
                className="inline-flex items-center gap-2 rounded-none px-3.5 py-1.5"
                style={{
                  border: `1px solid ${C.limeAlpha(0.35)}`,
                  background: C.limeAlpha(0.06),
                }}
              >
                <span
                  style={{
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: C.lime,
                    flexShrink: 0,
                    display: 'inline-block',
                    boxShadow: `0 0 8px ${C.lime}`,
                    animation: shouldReduce ? 'none' : 'velnix-blink 1.8s ease-in-out infinite',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: C.lime,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Intelligent Software Systems
                </span>
              </span>
            </motion.div>

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

              {/* Secondary CTA */}
              <a
                href="/services"
                className="group inline-flex items-center gap-2 transition-all duration-300"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: C.whiteAlpha(0.7),
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = C.white;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = C.whiteAlpha(0.7);
                }}
              >
                Explore Solutions
                <ChevronRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                  strokeWidth={2.5}
                />
              </a>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.45, duration: 0.55, ease }}
              className="flex items-center gap-3"
            >
              <div
                className="flex items-center gap-1.5 px-3 py-1.5"
                style={{
                  border: `1px solid ${C.whiteAlpha(0.1)}`,
                  background: C.whiteAlpha(0.02),
                }}
              >
                {['AI', 'Automation', 'Software Development'].map((tag, i) => (
                  <span key={tag} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <span style={{ color: C.limeAlpha(0.5), fontSize: '0.6rem', fontWeight: 700 }}>
                        •
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: C.whiteAlpha(0.5),
                        letterSpacing: '0.08em',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  </span>
                ))}
              </div>
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
            style={{ minHeight: 420 }}
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
              <WorkflowVisual />
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
      className="group inline-flex items-center gap-2.5 relative overflow-hidden transition-transform duration-200"
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

const FeaturedInStrip = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="relative z-10 w-full border-t"
    style={{ borderColor: C.whiteAlpha(0.07), background: C.black }}
    aria-label="As featured in"
  >
    <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10">
      {/* Badge */}
      <span
        className="shrink-0 px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase"
        style={{
          background: C.whiteAlpha(0.06),
          border: `1px solid ${C.whiteAlpha(0.1)}`,
          color: C.whiteAlpha(0.6),
        }}
      >
        Featured In
      </span>

      {/* Logos */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-10">
        {PUBLICATIONS.map(p => (
          <span
            key={p.name}
            style={{
              color: C.whiteAlpha(0.35),
              ...p.style,
              transition: 'color 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.whiteAlpha(0.7); }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.whiteAlpha(0.35); }}
          >
            {p.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);
