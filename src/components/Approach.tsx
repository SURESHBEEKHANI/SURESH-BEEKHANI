import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Search, FileText, Rocket } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — Velnix Locked Color System
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

// ─────────────────────────────────────────────────────────────────────────────
// STEP DATA — 4-Step Onboarding
// ─────────────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    micro: 'CONNECT',
    title: 'Contact Us',
    description:
      'Share your vision — we listen to understand your goals.',
    icon: MessageSquare,
    cta: 'Start a Conversation',
    bullets: ['Share your idea', 'Describe your challenge', 'No commitment required'],
  },
  {
    num: '02',
    micro: 'DISCOVER',
    title: 'Consultation & Discovery',
    description:
      'Assess feasibility and map workflows with expert analysis.',
    icon: Search,
    cta: null,
    bullets: ['Technical feasibility', 'Workflow analysis', 'Strategic recommendations'],
  },
  {
    num: '03',
    micro: 'DEFINE',
    title: 'Detailed Proposal',
    description:
      'Clear scope, timeline, and transparent cost estimate.',
    icon: FileText,
    cta: null,
    bullets: ['Clear project scope', 'Honest timeline', 'Transparent investment'],
  },
  {
    num: '04',
    micro: 'DELIVER',
    title: 'Kickoff & Delivery',
    description:
      'Structured milestones for smooth, successful deployment.',
    icon: Rocket,
    cta: 'Start Your Project',
    bullets: ['Dedicated team', 'Milestone reviews', 'Production deployment'],
  },
] as const;

const TRUST_BADGES = [];

// ─────────────────────────────────────────────────────────────────────────────
// STEP VISUAL — minimal system diagram per step
// ─────────────────────────────────────────────────────────────────────────────
const StepVisual: React.FC<{ stepIndex: number; active: boolean }> = ({ stepIndex, active }) => {
  const limeC = active ? C.lime : C.wa(0.15);
  const dimC  = active ? C.la(0.4) : C.wa(0.06);
  const lineC = active ? C.la(0.5) : C.wa(0.08);

  const visuals = [
    // 01 — Contact: message node + connection
    <svg key="v1" width="80" height="56" viewBox="0 0 80 56" fill="none">
      <rect x="8" y="4" width="64" height="40" rx="2" stroke={lineC} strokeWidth="1.5"/>
      <rect x="16" y="14" width="32" height="2" rx="1" fill={dimC}/>
      <rect x="16" y="20" width="22" height="2" rx="1" fill={dimC}/>
      <rect x="16" y="26" width="28" height="2" rx="1" fill={dimC}/>
      <circle cx="62" cy="10" r="4.5" fill={limeC} fillOpacity="0.15" stroke={limeC} strokeWidth="1"/>
      <circle cx="62" cy="10" r="1.5" fill={limeC}/>
      <line x1="36" y1="44" x2="36" y2="52" stroke={lineC} strokeWidth="1.5"/>
      <circle cx="36" cy="52" r="2" fill={limeC}/>
    </svg>,
    // 02 — Discovery: node matrix
    <svg key="v2" width="80" height="56" viewBox="0 0 80 56" fill="none">
      {[12,36,60].map((x,i) => (
        <React.Fragment key={x}>
          <circle cx={x} cy="16" r="4" fill={i===1 ? limeC : dimC} fillOpacity={i===1 ? 0.2 : 1} stroke={i===1 ? limeC : lineC} strokeWidth="1.5"/>
          {i===1 && <circle cx={x} cy="16" r="2" fill={limeC}/>}
          {i<2 && <line x1={x+5} y1="16" x2={x+21} y2="16" stroke={lineC} strokeWidth="1" strokeDasharray="3 2"/>}
        </React.Fragment>
      ))}
      <line x1="12" y1="21" x2="12" y2="36" stroke={lineC} strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="36" y1="21" x2="36" y2="36" stroke={lineC} strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="60" y1="21" x2="60" y2="36" stroke={lineC} strokeWidth="1" strokeDasharray="3 2"/>
      {[12,36,60].map(x => (
        <rect key={x} x={x-10} y="36" width="20" height="12" rx="1" stroke={lineC} strokeWidth="1" fill={dimC} fillOpacity="0.3"/>
      ))}
    </svg>,
    // 03 — Proposal: structured document blocks
    <svg key="v3" width="80" height="56" viewBox="0 0 80 56" fill="none">
      <rect x="12" y="2" width="56" height="52" rx="1.5" stroke={lineC} strokeWidth="1.5" fill={dimC} fillOpacity="0.15"/>
      {['PROJECT SCOPE','TIMELINE','DELIVERABLES','ESTIMATE'].map((label,i) => (
        <React.Fragment key={label}>
          <rect x="18" y={8 + i*11} width={i===0 ? 30 : i===1 ? 20 : i===2 ? 36 : 16} height="1.5" rx="1" fill={i===0 ? limeC : dimC}/>
          {i<3 && <line x1="18" y1={11 + i*11} x2="60" y2={11 + i*11} stroke={lineC} strokeWidth="0.5" strokeDasharray="2 2"/>}
        </React.Fragment>
      ))}
    </svg>,
    // 04 — Delivery: progress milestone track
    <svg key="v4" width="80" height="56" viewBox="0 0 80 56" fill="none">
      <line x1="8" y1="28" x2="72" y2="28" stroke={lineC} strokeWidth="1"/>
      {[8,26,44,62,72].map((x,i) => (
        <React.Fragment key={x}>
          <circle cx={x} cy="28" r={i===4 ? 4.5 : 3.5}
            fill={i < 4 ? limeC : dimC}
            fillOpacity={i < 4 ? (i===3 ? 1 : 0.4) : 0.3}
            stroke={limeC}
            strokeWidth="1.5"
          />
          {i===4 && <circle cx={x} cy="28" r="2" fill={limeC}/>}
          {i<4 && i>0 && (
            <line x1={x} y1="32" x2={x} y2="44" stroke={lineC} strokeWidth="0.5"/>
          )}
        </React.Fragment>
      ))}
      <rect x="14" y="44" width="16" height="8" rx="1" stroke={lineC} strokeWidth="0.5" fill={dimC} fillOpacity="0.2"/>
      <rect x="32" y="44" width="16" height="8" rx="1" stroke={lineC} strokeWidth="0.5" fill={dimC} fillOpacity="0.2"/>
      <rect x="50" y="44" width="16" height="8" rx="1" stroke={limeC} strokeWidth="0.5" fill={limeC} fillOpacity="0.08"/>
    </svg>,
  ];

  return (
    <div
      className="flex items-center justify-center mb-4"
      style={{
        height: 64,
        opacity: active ? 1 : 0.45,
        transition: 'opacity 0.3s ease',
      }}
      aria-hidden="true"
    >
      {visuals[stepIndex]}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP STEP CARD
// ─────────────────────────────────────────────────────────────────────────────
const DesktopStepCard: React.FC<{
  step: (typeof STEPS)[number];
  index: number;
  active: boolean;
  isLast: boolean;
  onEnter: () => void;
  onLeave: () => void;
}> = ({ step, index, active, isLast, onEnter, onLeave }) => {
  const Icon = step.icon;
  const shouldReduce = useReducedMotion();

  return (
    <motion.li
      className="relative flex flex-col items-center"
      style={{ flex: 1 }}
      initial={shouldReduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduce ? undefined : { y: -4 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >



      {/* Card */}
      <div
        className="w-full mx-1 flex flex-col cursor-default"
        style={{
            background: active
              ? `linear-gradient(180deg, rgba(28,28,28,0.95) 0%, rgba(17,17,17,0.92) 100%)`
              : 'rgba(17,17,17,0.68)',
            border: `1px solid ${active ? C.la(0.45) : C.wa(0.14)}`,
            borderRadius: 16,
            padding: '24px 22px',
            transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
            transform: active ? 'translateY(-6px)' : 'translateY(0)',
            boxShadow: active
              ? `0 24px 60px ${C.la(0.12)}, inset 0 1px 0 ${C.wa(0.08)}`
              : `0 8px 24px rgba(0,0,0,0.25), inset 0 1px 0 ${C.wa(0.05)}`,
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {/* Subtle top highlight sheen */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${active ? C.la(0.6) : C.wa(0.12)}, transparent)`,
          }}
          aria-hidden="true"
        />
        {/* Micro label + number */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-bold uppercase tracking-[0.24em]"
            style={{ color: active ? C.lime : C.wa(0.25) }}
          >
            {step.micro}
          </span>
          <span
            className="font-mono text-xs"
            style={{
              color: active ? C.lime : C.wa(0.1),
              transition: 'color 0.3s',
            }}
          >
            {step.num}
          </span>
        </div>

        {/* Step visual */}
        <StepVisual stepIndex={index} active={active} />

        {/* Title */}
        <h3
          className="text-xl font-black mb-3"
            style={{ color: active ? C.white : C.wa(0.82), transition: 'color 0.35s ease' }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-6 mb-3"
          style={{ color: active ? C.wa(0.5) : C.wa(0.4), transition: 'color 0.3s' }}
        >
          {step.description}
        </p>

        {/* Bullets */}
        <ul className="space-y-1.5 mb-4">
          {step.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-sm"
              style={{ color: active ? C.wa(0.5) : C.wa(0.4), transition: 'color 0.3s' }}
            >
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: '50%',
                  background: active ? C.lime : C.wa(0.38),
                  flexShrink: 0,
                  transition: 'background 0.3s',
                }}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Animated lime bottom bar */}
        <div
          style={{
            height: 2,
            background: C.lime,
            transformOrigin: 'left',
            transform: active ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
          }}
          aria-hidden="true"
        />
      </div>
    </motion.li>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE STEP ROW
// ─────────────────────────────────────────────────────────────────────────────
const MobileStepRow: React.FC<{ step: (typeof STEPS)[number]; index: number; isLast: boolean }> = ({
  step,
  index,
  isLast,
}) => {
  const Icon = step.icon;

  return (
    <li className="flex gap-5">
      {/* Left: node + connector */}
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: `radial-gradient(circle at 35% 30%, ${C.la(0.2)} 0%, ${C.la(0.05)} 60%, transparent 80%), ${C.graphite}`,
            border: `1.5px solid ${C.la(0.4)}`,
            boxShadow: `0 0 16px ${C.la(0.25)}, inset 0 -2px 6px rgba(0,0,0,0.4)`,
          }}
        >
          <Icon size={15} color={C.lime} />
        </div>
        {!isLast && (
          <div
            className="flex-1 mt-1"
            style={{
              width: 1,
              background: `linear-gradient(to bottom, ${C.la(0.4)}, ${C.la(0.05)})`,
              minHeight: 40,
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right: content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs" style={{ color: C.lime }}>
            {step.num}
          </span>
          <span
            className="text-xs font-bold uppercase tracking-[0.24em] px-2 py-0.5"
            style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.25)}` }}
          >
            {step.micro}
          </span>
        </div>

        <h3 className="text-xl font-black mb-2" style={{ color: C.white }}>
          {step.title}
        </h3>
        <p className="text-sm leading-6 mb-3" style={{ color: C.wa(0.5) }}>
          {step.description}
        </p>
        <ul className="space-y-1.5">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm" style={{ color: C.wa(0.5) }}>
              <span
                style={{ width: 3, height: 3, borderRadius: '50%', background: C.lime, flexShrink: 0 }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      className="font-display py-16 sm:py-24 relative overflow-hidden antialiased scroll-mt-20"
      id="approach"
      style={{
        background:
          'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505',
        color: C.white,
      }}
      aria-labelledby="approach-heading"
    >


      {/* Ambient glow */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full blur-[220px]"
          style={{ width: 700, height: 260, background: C.la(0.03) }}
        />
        <div
          className="absolute bottom-0 right-0 rounded-full blur-[160px]"
          style={{ width: 300, height: 300, background: C.ga(0.015) }}
        />
        {/* Subtle grid texture for depth */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${C.wa(0.025)} 1px, transparent 1px), linear-gradient(90deg, ${C.wa(0.025)} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* ══════════════════════════════════════════════════════
            CENTERED TOP HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="mb-16 sm:mb-20 lg:mb-24 max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: C.lime }}>
            <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
            HOW WE WORK
          </div>

          <h2
            id="approach-heading"
            className="max-w-[20ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
          >
            From Strategy to Solution{' '}
            <span style={{ color: C.lime }}>Process</span>
          </h2>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-8" style={{ color: C.wa(0.55) }}>
            A simple, transparent process designed to turn your business goals into a clear technical roadmap and successful solution.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════
            HORIZONTAL PROCESS FLOW (Desktop + mobile grid)
        ══════════════════════════════════════════════════════ */}
        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-6 xl:gap-10 items-start">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === STEPS.length - 1;
              const active = activeStep === i;

              return (
                <motion.div
                  key={step.num}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(0)}
                >

                  {/* Step Number Badge (top-left of circle) */}
                  <div className="absolute left-0 sm:left-4 lg:left-0 -top-2 z-20">
                    <div
                      className="flex items-center justify-center font-mono text-xs font-bold"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        background: active ? C.lime : C.graphite,
                        color: C.black,
                        border: `2px solid ${active ? C.lime : C.wa(0.25)}`,
                        boxShadow: active
                          ? `0 0 16px ${C.la(0.5)}, 0 2px 8px rgba(0,0,0,0.2)`
                          : '0 2px 8px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {parseInt(step.num, 10)}
                    </div>
                  </div>

                  {/* Large Icon Circle */}
                  <div
                    className="group relative flex items-center justify-center"
                    style={{
                      width: 'clamp(92px, 13vw, 150px)',
                      height: 'clamp(92px, 13vw, 150px)',
                      borderRadius: '50%',
                      background: active
                        ? `radial-gradient(circle at 35% 30%, ${C.la(0.3)} 0%, ${C.la(0.08)} 45%, transparent 75%), radial-gradient(circle at 70% 70%, ${C.graphite} 0%, ${C.graphite} 100%)`
                        : `radial-gradient(circle at 35% 30%, ${C.wa(0.06)} 0%, ${C.wa(0.02)} 45%, transparent 75%), radial-gradient(circle at 70% 70%, ${C.graphite} 0%, ${C.graphite} 100%)`,
                      border: `1.5px solid ${active ? C.la(0.5) : C.wa(0.1)}`,
                      boxShadow: active
                        ? `0 20px 56px ${C.la(0.15)}, 0 0 0 8px ${C.la(0.06)}, inset 0 -4px 12px rgba(0,0,0,0.4)`
                        : `0 12px 36px rgba(0,0,0,0.35), inset 0 -2px 8px rgba(0,0,0,0.3)`,
                      transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                      transform: active ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
                    }}
                  >
                    {/* Inner glow ring (on active steps) */}
                    {active && (
                      <div
                        className="absolute inset-1 rounded-full"
                        style={{
                          border: `1px solid ${C.la(0.25)}`,
                          boxShadow: `0 0 20px ${C.la(0.1)}`,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    {/* Subtle inner sheen */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: active ? `linear-gradient(135deg, ${C.la(0.08)} 0%, transparent 50%)` : 'none',
                        pointerEvents: 'none',
                      }}
                      aria-hidden="true"
                    />
                    {/* Inner dashed ring (on inactive steps) */}
                    {!active && (
                      <div
                        className="absolute inset-2 rounded-full"
                        style={{
                          border: `1px dashed ${C.wa(0.12)}`,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <Icon
                      size="clamp(30px, 4.5vw, 52px)"
                      style={{
                        color: active ? C.lime : C.la(0.55),
                        filter: active ? `drop-shadow(0 0 14px ${C.la(0.45)})` : 'none',
                        transition: 'all 0.35s ease',
                        position: 'relative',
                        zIndex: 1,
                      }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Curved dashed connector (skip last) */}
                  {!isLast && (
                    <svg
                      className="hidden lg:block absolute top-[calc(clamp(92px,13vw,150px)/2)] left-full w-full h-16 -translate-y-1/2 z-0 pointer-events-none"
                      viewBox="0 0 100 80"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <path id={`conn-${i}`} d="M0,20 C25,60 75,0 100,40" fill="none" />
                      </defs>
                      <use
                        href={`#conn-${i}`}
                        stroke={active || activeStep === i + 1 ? C.lime : C.wa(0.2)}
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        opacity={active || activeStep === i + 1 ? 0.9 : 0.55}
                        style={{ transition: 'all 0.35s ease' }}
                      />
                    </svg>
                  )}

                  {/* Step Title */}
                  <h3
                    className="mt-6 sm:mt-8 text-xl sm:text-2xl font-black leading-tight tracking-tight"
                    style={{
                      color: active ? C.lime : C.white,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    className="mt-3 max-w-[22ch] text-sm leading-6"
                    style={{ color: active ? C.wa(0.62) : C.wa(0.45), transition: 'color 0.3s ease' }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            MOBILE — Vertical timeline (compact fallback)
        ══════════════════════════════════════════════════════ */}
        <ol className="lg:hidden mt-16 mb-12 space-y-8" aria-label="AI onboarding process steps">
          {STEPS.map((step, i) => (
            <MobileStepRow key={step.num} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </ol>

        {/* ══════════════════════════════════════════════════════
            TRUST BADGES
        ══════════════════════════════════════════════════════ */}
        {TRUST_BADGES.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="text-sm font-bold uppercase tracking-[0.14em] px-4 py-2"
                style={{
                  border: `1px solid ${C.wa(0.15)}`,
                  background: C.wa(0.02),
                  color: C.wa(0.42),
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Approach;

