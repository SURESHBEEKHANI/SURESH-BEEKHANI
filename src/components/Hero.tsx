import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays, Check, Clock3, Code2, MessageCircle } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

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
const AGENTIC_CODE = [
  'const request = await agent.read();',
  'const result = await agent.route(request);',
  'await result.sync();',
  'return result.status;',
].join('\n');
const AGENTIC_CODE_TOKEN = /(\b(?:const|await|return)\b|\b(?:request|result|agent|approval)\b|\b(?:read|route|sync|status)\b|[=().;])/g;

const renderAgenticCodeLine = (line: string) => line.split(AGENTIC_CODE_TOKEN).map((token, index) => {
  let color = C.whiteAlpha(0.78);
  if (/^(const|await|return)$/.test(token)) color = '#C792EA';
  else if (/^(request|result|agent|approval)$/.test(token)) color = '#82AAFF';
  else if (/^(read|route|sync|status)$/.test(token)) color = C.lime;
  else if (/^[=().;]$/.test(token)) color = C.whiteAlpha(0.48);

  return <span key={index} style={{ color }}>{token}</span>;
});

// ─────────────────────────────────────────────────────────────────────────────
// METRIC CHIP
// ─────────────────────────────────────────────────────────────────────────────
const MetricChip = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const reducedMotion = useReducedMotion();
  const target = Number.parseInt(value, 10);
  const isNumeric = Number.isFinite(target);
  const suffix = isNumeric ? value.slice(String(target).length) : '';
  const count = useMotionValue(reducedMotion || !isNumeric ? target : 0);
  const display = useTransform(count, (current) => isNumeric ? `${Math.round(current)}${suffix}` : value);

  useEffect(() => {
    if (!isNumeric || reducedMotion) return;
    const controls = animate(count, target, { duration: 1.4, delay, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, delay, isNumeric, reducedMotion, target]);

  return (
    <motion.div
      {...fadeUp}
      transition={{ delay, duration: 0.55, ease }}
      className="flex flex-col items-start"
    >
      <motion.span className="text-4xl font-black leading-none tracking-[-0.04em]" style={{ color: C.lime }} aria-label={value}>
        {display}
      </motion.span>
      <span className="mt-2 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: C.whiteAlpha(0.42) }}>
        {label}
      </span>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN HERO
// ─────────────────────────────────────────────────────────────────────────────
const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateScrollProgress = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const traveled = Math.max(0, -bounds.top);
      const range = Math.max(1, bounds.height - window.innerHeight);
      scanRef.current?.style.setProperty('--hero-scan-progress', `${Math.min(1, traveled / range) * 500}%`);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollProgress();
      });
    };

    // Defer scroll listener initialization to avoid blocking initial render
    requestAnimationFrame(() => {
      updateScrollProgress();
      window.addEventListener('scroll', scheduleUpdate, { passive: true });
      window.addEventListener('resize', scheduleUpdate);
    });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <>
      {/* Keyframe injections */}
      <style>{`
        @keyframes velnix-shimmer {
          from { transform: translateX(-50%); }
          to   { transform: translateX(50%); }
        }
        @keyframes velnix-headline {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes velnix-scroll-line {
          from { transform: translateY(-120%); }
          to   { transform: translateY(420%); }
        }
        @keyframes velnix-system-scan {
          from { opacity: 0; transform: translateX(-18%); }
          50% { opacity: 1; }
          to { opacity: 0; transform: translateX(18%); }
        }
        @keyframes velnix-image-scan {
          from { opacity: 0; top: 0%; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          to { opacity: 0; top: 100%; }
        }
        @keyframes velnix-topic-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes velnix-orbit-spin {
          from { transform: rotateX(64deg) rotateZ(0deg); }
          to { transform: rotateX(64deg) rotateZ(360deg); }
        }
        @keyframes velnix-object-drift {
          0%, 100% { transform: translate(0, -8px); }
          25% { transform: translate(8px, 0); }
          50% { transform: translate(0, 8px); }
          75% { transform: translate(-8px, 0); }
        }
        @keyframes velnix-core-pulse {
          0%, 100% { opacity: .35; transform: scale(.92); }
          50% { opacity: .75; transform: scale(1); }
        }
        @keyframes workflow-status-pulse {
          0%, 100% { opacity: .65; }
          50% { opacity: 1; }
        }
        @keyframes workflow-card-enter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes workflow-code-cursor {
          0%, 48% { opacity: 1; }
          49%, 100% { opacity: 0; }
        }
        @keyframes workflow-code-scan {
          from { transform: translateY(0); opacity: 0; }
          12%, 82% { opacity: .8; }
          to { transform: translateY(46px); opacity: 0; }
        }
        .workflow-visual .workflow-live-dot {
          animation: workflow-status-pulse 2.8s ease-in-out infinite;
        }
        .workflow-visual .workflow-chat {
          animation: workflow-card-enter .7s ease-out both;
        }
        .workflow-visual .workflow-chat-reply {
          animation-delay: .18s;
        }
        .workflow-visual .workflow-code-cursor {
          animation: workflow-code-cursor .9s steps(1, end) infinite;
        }
        .workflow-visual .workflow-code-scan {
          animation: workflow-code-scan 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .workflow-visual .workflow-live-dot,
          .workflow-visual .workflow-chat,
          .workflow-visual .workflow-code-cursor {
            animation: none !important;
          }
          .workflow-visual .workflow-code-scan {
            display: none;
          }
        }
      `}</style>

      <section
        id="hero"
        ref={heroRef}
        className="relative isolate w-full overflow-hidden font-display"
        style={{
          background: C.black,
        }}
        aria-label="Velnix Solutions hero section"
      >
        <BackgroundAnimation />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 72% 55% at 50% -8%, rgba(182,255,0,0.16) 0%, rgba(125,204,0,0.07) 38%, transparent 74%), radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.17) 0%, rgba(125,204,0,0.05) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.1) 0%, rgba(125,204,0,0.03) 42%, transparent 76%)',
            filter: 'blur(10px)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 78%)',
            opacity: 0.32,
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

        {/* ── MAIN CONTENT ── */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid items-center gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-4 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-20"
        >

          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Messaging
          ═══════════════════════════════════════════ */}
          <div className="flex w-full flex-col items-start">

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.05, duration: 0.55, ease }}
              className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ color: C.lime }}
            >
              <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
              AI Innovation · Product Engineering · Strategic Consulting
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.65, ease }}
              className="mb-8 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              We Deploy AI-Native  Without  Costly Mistakes{' '}
              <span style={{ color: C.lime, display: 'inline' }}>
                Getting Burned.
              </span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.25, duration: 0.65, ease }}
              className="mb-8 max-w-xl text-lg leading-8 sm:text-xl"
              style={{ color: C.whiteAlpha(0.64) }}
            >
              Velnix helps SMBs identify where AI can create real business value, automate repetitive workflows,
              and build reliable systems—without wasting money on hype, unnecessary tools, or the wrong automation.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.35, duration: 0.55, ease }}
              className="mb-8 flex flex-wrap items-center gap-4"
            >

              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.5, ease }}
                className="pointer-events-none hidden flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/40 sm:flex"
                aria-hidden="true"
              >
                <span style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                <span className="relative h-8 w-px overflow-hidden" style={{ background: C.whiteAlpha(0.16) }}>
                  <span
                    className="absolute left-0 top-0 h-2.5 w-px"
                    style={{
                      background: C.lime,
                      boxShadow: `0 0 8px ${C.limeAlpha(0.8)}`,
                      animation: 'velnix-scroll-line 1.8s ease-in-out infinite alternate',
                    }}
                  />
                </span>
              </motion.div>

              <a
                href="/contact"
                className="group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full text-sm font-bold transition-transform duration-200"
                style={{
                  background: C.lime,
                  color: C.black,
                  padding: '1rem 1.5rem',
                  textDecoration: 'none',
                  border: `1px solid ${C.limeAlpha(0.5)}`,
                  boxShadow: `0 0 0 0 ${C.limeAlpha(0)}, 0 8px 28px ${C.limeAlpha(0.35)}`,
                  transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                  lineHeight: 1,
                }}
                aria-label="Find your AI opportunity with Velnix"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    width: '200%',
                    left: '-50%',
                    right: 'auto',
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)',
                    animation: 'velnix-shimmer 2.8s linear infinite',
                    willChange: 'transform',
                  }}
                />
                <span className="relative z-10">Find Your AI Opportunity</span>
                <ArrowRight size={17} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>

              <a
                href="/ai-audit"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border px-6 py-4 text-sm font-semibold transition-all duration-300"
                style={{
                  color: C.white,
                  borderColor: C.whiteAlpha(0.2),
                  background: C.whiteAlpha(0.04),
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.lime;
                  e.currentTarget.style.color = C.lime;
                  e.currentTarget.style.background = C.limeAlpha(0.08);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.whiteAlpha(0.2);
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.background = C.whiteAlpha(0.04);
                }}
              >
                Get the AI Audit — $1,000
                <ArrowRight size={16} />
              </a>

            </motion.div>

            <motion.a
              href="/contact"
              {...fadeUp}
              transition={{ delay: 0.43, duration: 0.5, ease }}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: C.whiteAlpha(0.52), textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.lime; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.whiteAlpha(0.52); }}
            >
              Not sure where AI fits in your business? Talk to our team <ArrowRight size={13} />
            </motion.a>

            {/* Metrics row */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.55, duration: 0.5, ease }}
              className="mt-0 flex items-center gap-10 pt-8"
              style={{ borderTop: `1px solid ${C.whiteAlpha(0.08)}` }}
            >
              <MetricChip value="70%" label="Less admin work" delay={0.58} />
              <div style={{ width: 1, height: 36, background: C.whiteAlpha(0.1) }} />
              <MetricChip value="10×" label="Faster workflows" delay={0.62} />
              <div style={{ width: 1, height: 36, background: C.whiteAlpha(0.1) }} />
              <MetricChip value="SMBs" label="Built around your operations" delay={0.66} />
            </motion.div>
          </div>

          <HeroSystemVisual />

        </div>

        {/* ── BOTTOM FEATURED IN STRIP ── */}
        <FeaturedInStrip />
      </section>
    </>
  );
};

export default Hero;

// ─────────────────────────────────────────────────────────────────────────────
// HERO SYSTEM VISUAL
// ─────────────────────────────────────────────────────────────────────────────
const HeroSystemVisual = () => {
  const shouldReduce = useReducedMotion();
  const [visibleCodeLength, setVisibleCodeLength] = useState(0);

  useEffect(() => {
    if (shouldReduce) return;

    let timer = 0;
    let characterIndex = 0;
    const streamNextCharacter = () => {
      if (characterIndex <= AGENTIC_CODE.length) {
        setVisibleCodeLength(++characterIndex);
        timer = window.setTimeout(streamNextCharacter, 34);
        return;
      }

      timer = window.setTimeout(() => {
        characterIndex = 0;
        setVisibleCodeLength(0);
        timer = window.setTimeout(streamNextCharacter, 400);
      }, 1200);
    };

    timer = window.setTimeout(streamNextCharacter, 350);
    return () => window.clearTimeout(timer);
  }, [shouldReduce]);

  const visibleCode = shouldReduce ? AGENTIC_CODE : AGENTIC_CODE.slice(0, visibleCodeLength);
  const visibleCodeLines = visibleCode.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.22, duration: 0.8, ease }}
      className="workflow-visual relative mx-auto flex min-h-[590px] w-full max-w-[610px] items-center justify-center overflow-hidden sm:min-h-[620px] lg:-translate-x-6 lg:-translate-y-4"
      role="img"
      aria-label="Workflow assistant handling a vendor request, routing it for approval, and tracking status"
    >
      <div className="pointer-events-none absolute bottom-0 left-[3%] top-0 w-px" style={{ background: `linear-gradient(transparent, ${C.whiteAlpha(0.12)} 12%, ${C.whiteAlpha(0.12)} 88%, transparent)` }} />

      <div
        className="relative w-[calc(100%-32px)] max-w-[516px] overflow-hidden rounded-[24px] border sm:w-[calc(100%-56px)]"
        style={{
          minHeight: 0,
          borderColor: C.whiteAlpha(0.12),
          background: 'linear-gradient(145deg, rgba(22,24,20,.96), rgba(7,9,8,.99) 72%)',
          boxShadow: '0 28px 80px rgba(0,0,0,.48), inset 0 1px 0 rgba(255,255,255,.035)',
        }}
      >
        <div className="flex h-[72px] items-center justify-between border-b px-5 sm:px-6" style={{ borderColor: C.whiteAlpha(0.08) }}>
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: C.limeAlpha(0.12), color: C.lime }}>
              <MessageCircle size={19} strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <div className="truncate text-[13px] font-bold text-white sm:text-sm">Agentic AI Assistant</div>
              <div className="mt-0.5 text-[10px] text-white/50 sm:text-[11px]">Code &amp; workflow orchestration</div>
            </div>
          </div>
        </div>

        <div className="px-5 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
          <div className="workflow-chat mb-3 ml-auto w-[86%] rounded-2xl rounded-tr-md border px-4 py-3 text-[13px] leading-[1.45] text-white/85 sm:text-sm" style={{ borderColor: C.whiteAlpha(0.06), background: 'rgba(255,255,255,.065)' }}>
            Can you process this new vendor request?
          </div>

          <div className="workflow-chat workflow-chat-reply mb-4 flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center" style={{ background: C.lime, color: C.black }}>
              <MessageCircle size={14} strokeWidth={2.2} />
            </span>
            <div className="w-[86%] rounded-2xl rounded-tl-md border px-4 py-3 text-[13px] leading-[1.45] text-white/80 sm:text-sm" style={{ borderColor: C.whiteAlpha(0.07), background: 'rgba(255,255,255,.045)' }}>
              I’ve checked the request and sent it to the right approver.
              <div className="mt-3 overflow-hidden rounded-lg border" style={{ borderColor: C.whiteAlpha(0.08), background: 'rgba(0,0,0,.28)' }}>
                <div className="flex items-center gap-1.5 border-b px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-white/45" style={{ borderColor: C.whiteAlpha(0.07) }}>
                  <Code2 size={10} color={C.lime} /> Agentic AI · writing code
                </div>
                <div className="relative overflow-hidden">
                  <span className="workflow-code-scan pointer-events-none absolute left-0 right-0 top-1 z-10 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.limeAlpha(0.8)}, transparent)`, boxShadow: `0 0 8px ${C.limeAlpha(0.5)}` }} />
                  <code className="block overflow-hidden px-2.5 py-2 font-mono text-[8px] leading-[1.65] text-white/65 sm:text-[9px]">
                    {visibleCodeLines.map((line, lineIndex) => (
                      <span key={lineIndex} className="block whitespace-nowrap">
                        {renderAgenticCodeLine(line)}
                        {lineIndex === visibleCodeLines.length - 1 && <span className="workflow-code-cursor ml-0.5" style={{ color: C.lime }}>▍</span>}
                      </span>
                    ))}
                  </code>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-4 pl-9 text-[10px] leading-relaxed text-white/45 sm:text-[11px]">
            Approval status and connected systems stay in sync.
          </p>

          <div className="mb-4 flex flex-wrap gap-2 pl-9">
            <span className="rounded-full border px-3 py-1.5 text-[9px] font-semibold sm:text-[10px]" style={{ borderColor: C.limeAlpha(0.25), background: C.limeAlpha(0.055), color: C.lime }}>Review request</span>
            <span className="rounded-full border px-3 py-1.5 text-[9px] font-semibold sm:text-[10px]" style={{ borderColor: C.limeAlpha(0.25), background: C.limeAlpha(0.055), color: C.lime }}>View activity</span>
          </div>

          <div className="rounded-xl border p-4 sm:p-[17px]" style={{ borderColor: C.limeAlpha(0.24), background: 'linear-gradient(110deg, rgba(182,255,0,.065), rgba(182,255,0,.025))' }}>
            <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em]" style={{ color: C.lime }}>
              <CalendarDays size={13} /> Approval status
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[13px] font-semibold text-white/90 sm:text-sm">Vendor request</div>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[9px] text-white/45 sm:text-[10px]">
                  <Clock3 size={11} /> Sent to Finance · Activity tracked
                </div>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: C.limeAlpha(0.12), color: C.lime }}>
                <Check size={15} strokeWidth={2.5} />
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t pt-3 text-[9px] leading-relaxed text-white/40 sm:text-[10px]" style={{ borderColor: C.whiteAlpha(0.08) }}>
            <Check size={13} className="shrink-0" color={C.lime} />
            Exceptions stay visible and can be handed to a team member.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
      className="group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full text-sm font-bold transition-transform duration-200"
      style={{
        background: C.lime,
        color: C.black,
        padding: '1rem 1.5rem',
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
          width: '200%',
          left: '-50%',
          right: 'auto',
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)',
          animation: 'velnix-shimmer 2.8s linear infinite',
          willChange: 'transform',
        }}
      />

      <span className="relative z-10">Identify What to Automate</span>
      <ArrowRight
        size={17}
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