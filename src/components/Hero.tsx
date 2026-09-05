import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
  const heroRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const traveled = Math.max(0, -bounds.top);
      const range = Math.max(1, bounds.height - window.innerHeight);
      setScrollProgress(Math.min(1, traveled / range));
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <>
      {/* Keyframe injections */}
      <style>{`
        @keyframes velnix-shimmer {
          from { background-position: -200% center; }
          to   { background-position:  200% center; }
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
      `}</style>

      <section
        id="hero"
        ref={heroRef}
        className="relative isolate w-full overflow-hidden"
        style={{
          minHeight: 'clamp(85vh, 90vh, 95vh)',
          background: C.black,
        }}
        aria-label="Velnix Solutions hero section"
      >

        <div className="pointer-events-none absolute left-0 top-0 z-20 h-px w-full overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-0 top-0 h-px w-1/5"
            style={{
              transform: `translateX(${scrollProgress * 500}%)`,
              background: `linear-gradient(90deg, transparent, ${C.limeAlpha(0.85)}, transparent)`,
              boxShadow: `0 0 12px ${C.limeAlpha(0.55)}`,
              transition: 'transform 120ms linear',
            }}
          />
        </div>

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
          className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16
                     grid items-center gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-4
                     pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-20"
        >

          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Messaging
          ═══════════════════════════════════════════ */}
          <div className="flex max-w-4xl flex-col items-start">

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.05, duration: 0.55, ease }}
              className="mb-4 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em]"
              style={{ color: C.limeAlpha(0.9) }}
            >
              <span style={{ width: 28, height: 1, background: C.lime }} aria-hidden="true" />
              AI Innovation · Product Engineering · Strategic Consulting
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
                marginBottom: '1.25rem',
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
                 Operations Into
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
                marginBottom: '2rem',
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
              className="flex flex-wrap items-center gap-4 mb-8"
            >

              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.5, ease }}
                className="pointer-events-none hidden flex-col items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white/40 sm:flex"
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

              {/* Primary CTA */}
              <PrimaryButton />

              {/* AI Audit CTA */}
              <a
                href="/ai-audit"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: C.white,
                  borderColor: C.whiteAlpha(0.25),
                  background: C.whiteAlpha(0.04),
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.lime;
                  e.currentTarget.style.color = C.lime;
                  e.currentTarget.style.background = C.limeAlpha(0.08);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.whiteAlpha(0.25);
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.background = C.whiteAlpha(0.04);
                }}
              >
                Get the AI Audit — $1,000
                <ArrowRight size={15} />
              </a>

            </motion.div>

            <motion.a
              href="/contact"
              {...fadeUp}
              transition={{ delay: 0.43, duration: 0.5, ease }}
              className="mb-6 inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-200"
              style={{ color: C.whiteAlpha(0.52), textDecoration: 'none', letterSpacing: '0.04em' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.lime; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.whiteAlpha(0.52); }}
            >
              Not sure where to start? Talk to our team <ArrowRight size={13} />
            </motion.a>

            {/* Metrics row */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.55, duration: 0.5, ease }}
              className="flex items-center gap-10 mt-0 pt-8"
              style={{ borderTop: `1px solid ${C.whiteAlpha(0.08)}` }}
            >
              <MetricChip value="70%" label="Admin work cut"  delay={0.58} />
              <div style={{ width: 1, height: 36, background: C.whiteAlpha(0.1) }} />
              <MetricChip value="10×"  label="Faster workflows" delay={0.62} />
              <div style={{ width: 1, height: 36, background: C.whiteAlpha(0.1) }} />
              <MetricChip value="SMBs" label="Focused solutions"  delay={0.66} />
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
const HERO_IMAGES = [
  '/image/Hero-section-image/hero-page-image-1.avif',
  '/image/Hero-section-image/hero-page-image-2.avif',
  '/image/Hero-section-image/hero-page-image-3.avif',
];

const HeroSystemVisual = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageRotation = window.setInterval(() => {
      setImageIndex(index => (index + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => window.clearInterval(imageRotation);
  }, []);

  return (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.22, duration: 0.8, ease }}
    className="relative min-h-[390px] overflow-visible sm:min-h-[520px] lg:-translate-x-12 lg:-translate-y-6"
    style={{
      background: 'transparent',
    }}
    aria-label="Agentic AI visual showing intelligent automation and business impact"
  >
    <div
      className="absolute left-[16%] top-1/2 h-px w-[68%]"
      style={{
        background: `linear-gradient(90deg, transparent, ${C.lime}, transparent)`,
        animation: 'velnix-system-scan 4s ease-in-out infinite',
      }}
    />
    <div className="absolute inset-1 overflow-hidden border sm:inset-3" style={{ borderColor: C.limeAlpha(0.42), boxShadow: `0 0 70px ${C.limeAlpha(0.12)}` }}>
      <img src={HERO_IMAGES[imageIndex]} alt="Velnix intelligent systems in action" className="h-full w-full object-cover" style={{ opacity: 0.78, filter: 'saturate(0.72) contrast(1.04)', transform: 'scale(1.04)', transition: 'opacity 700ms ease-in-out' }} />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.black}b8 0%, ${C.black}26 42%, ${C.black}c2 100%), linear-gradient(0deg, ${C.greenAlpha(0.2)}, transparent 48%), linear-gradient(115deg, ${C.limeAlpha(0.14)}, transparent 38%)`, mixBlendMode: 'screen', opacity: 0.82 }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: `linear-gradient(90deg, transparent 10%, ${C.greenAlpha(0.12)} 50%, transparent 90%)`, mixBlendMode: 'color', opacity: 0.9 }} />
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(${C.whiteAlpha(0.06)} 1px, transparent 1px), linear-gradient(90deg, ${C.whiteAlpha(0.06)} 1px, transparent 1px)`, backgroundSize: '44px 44px', opacity: 0.22 }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.lime}, transparent)`, boxShadow: `0 0 14px ${C.limeAlpha(0.75)}`, animation: 'velnix-image-scan 4.5s ease-in-out infinite' }} />
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
