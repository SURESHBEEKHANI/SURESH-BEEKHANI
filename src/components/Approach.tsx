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
      'Reach out and share your vision. We listen to understand your goals, challenges, and what success looks like for your business.',
    icon: MessageSquare,
    cta: 'Start a Conversation',
    bullets: ['Share your idea', 'Describe your challenge', 'No commitment required'],
  },
  {
    num: '02',
    micro: 'DISCOVER',
    title: 'Consultation & Discovery',
    description:
      'Schedule a professional consultation. We assess feasibility, map your workflows, and identify the right AI or software approach.',
    icon: Search,
    cta: null,
    bullets: ['Technical feasibility', 'Workflow analysis', 'Strategic recommendations'],
  },
  {
    num: '03',
    micro: 'DEFINE',
    title: 'Detailed Proposal',
    description:
      'Receive a comprehensive proposal — project scope, timeline, deliverables, and a transparent cost estimate. No hidden surprises.',
    icon: FileText,
    cta: null,
    bullets: ['Clear project scope', 'Honest timeline', 'Transparent investment'],
  },
  {
    num: '04',
    micro: 'DELIVER',
    title: 'Kickoff & Delivery',
    description:
      'Once approved, our specialists launch with a clear plan. Open communication and structured milestones ensure smooth, successful delivery.',
    icon: Rocket,
    cta: 'Start Your Project',
    bullets: ['Dedicated team', 'Milestone reviews', 'Production deployment'],
  },
] as const;

const TRUST_BADGES = [
  'Clear Scope',
  'Transparent Estimates',
  'Strategic Guidance',
  'Dedicated Specialists',
  'Open Communication',
  'Structured Delivery',
];

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
      <rect x="8" y="4" width="64" height="40" rx="2" stroke={lineC} strokeWidth="1"/>
      <rect x="16" y="14" width="32" height="2" rx="1" fill={dimC}/>
      <rect x="16" y="20" width="22" height="2" rx="1" fill={dimC}/>
      <rect x="16" y="26" width="28" height="2" rx="1" fill={dimC}/>
      <circle cx="62" cy="10" r="6" fill={limeC} fillOpacity="0.15" stroke={limeC} strokeWidth="1"/>
      <circle cx="62" cy="10" r="2" fill={limeC}/>
      <line x1="36" y1="44" x2="36" y2="52" stroke={lineC} strokeWidth="1"/>
      <circle cx="36" cy="52" r="2" fill={limeC}/>
    </svg>,
    // 02 — Discovery: node matrix
    <svg key="v2" width="80" height="56" viewBox="0 0 80 56" fill="none">
      {[12,36,60].map((x,i) => (
        <React.Fragment key={x}>
          <circle cx={x} cy="16" r="5" fill={i===1 ? limeC : dimC} fillOpacity={i===1 ? 0.2 : 1} stroke={i===1 ? limeC : lineC} strokeWidth="1"/>
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
      <rect x="12" y="2" width="56" height="52" rx="1" stroke={lineC} strokeWidth="1" fill={dimC} fillOpacity="0.15"/>
      {['PROJECT SCOPE','TIMELINE','DELIVERABLES','ESTIMATE'].map((label,i) => (
        <React.Fragment key={label}>
          <rect x="18" y={8 + i*11} width={i===0 ? 30 : i===1 ? 20 : i===2 ? 36 : 16} height="2" rx="1" fill={i===0 ? limeC : dimC}/>
          {i<3 && <line x1="18" y1={12 + i*11} x2="62" y2={12 + i*11} stroke={lineC} strokeWidth="0.5" strokeDasharray="2 2"/>}
        </React.Fragment>
      ))}
    </svg>,
    // 04 — Delivery: progress milestone track
    <svg key="v4" width="80" height="56" viewBox="0 0 80 56" fill="none">
      <line x1="8" y1="28" x2="72" y2="28" stroke={lineC} strokeWidth="1"/>
      {[8,26,44,62,72].map((x,i) => (
        <React.Fragment key={x}>
          <circle cx={x} cy="28" r={i===4 ? 6 : 4}
            fill={i < 4 ? limeC : dimC}
            fillOpacity={i < 4 ? (i===3 ? 1 : 0.4) : 0.3}
            stroke={limeC}
            strokeWidth="1"
          />
          {i===4 && <circle cx={x} cy="28" r="2.5" fill={limeC}/>}
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
    <motion.div
      className="relative flex flex-col items-center"
      style={{ flex: 1 }}
      initial={shouldReduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduce ? undefined : { y: -4 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* Timeline node + connector */}
      <div className="relative w-full flex items-center justify-center mb-6">
        {/* Left connector line */}
        {index > 0 && (
          <div
            className="absolute right-1/2 top-1/2 -translate-y-1/2"
            style={{
              left: 0,
              right: '50%',
              height: 1,
              background: active
                ? `linear-gradient(to right, ${C.la(0.2)}, ${C.lime})`
                : C.wa(0.1),
              transition: 'background 0.4s ease',
            }}
            aria-hidden="true"
          />
        )}

        {/* Node */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: active ? C.la(0.15) : C.wa(0.04),
            border: `1.5px solid ${active ? C.lime : C.wa(0.12)}`,
            boxShadow: active ? `0 0 20px ${C.la(0.35)}` : 'none',
            transition: 'all 0.35s ease',
            transform: active ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <Icon size={16} color={active ? C.lime : C.wa(0.35)} style={{ transition: 'color 0.3s' }} />
        </div>

        {/* Right connector line */}
        {!isLast && (
          <div
            className="absolute left-1/2 top-1/2 -translate-y-1/2"
            style={{
              left: '50%',
              right: 0,
              height: 1,
              background: active
                ? `linear-gradient(to right, ${C.lime}, ${C.la(0.2)})`
                : C.wa(0.1),
              transition: 'background 0.4s ease',
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Card */}
      <div
        className="w-full mx-1 flex flex-col cursor-default"
        style={{
            background: active
              ? `linear-gradient(160deg, ${C.graphite} 0%, rgba(17,17,17,0.88) 100%)`
              : 'rgba(17,17,17,0.72)',
            border: `1px solid ${active ? C.la(0.38) : C.wa(0.18)}`,
            padding: '22px 20px',
          transition: 'all 0.3s ease',
          transform: active ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: active ? `0 10px 36px ${C.la(0.1)}` : 'none',
          flex: 1,
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        role="article"
        aria-label={`Step ${step.num}: ${step.title}`}
      >
        {/* Micro label + number */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[0.55rem] font-bold uppercase tracking-[0.2em]"
            style={{ color: active ? C.lime : C.wa(0.25) }}
          >
            {step.micro}
          </span>
          <span
            className="font-mono font-black text-[1.4rem] leading-none"
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
          className="text-sm font-extrabold leading-snug mb-2"
            style={{ color: active ? C.white : C.wa(0.82), transition: 'color 0.3s' }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p
          className="text-[0.75rem] leading-relaxed mb-4"
          style={{ color: active ? C.wa(0.72) : C.wa(0.58), transition: 'color 0.3s' }}
        >
          {step.description}
        </p>

        {/* Bullets */}
        <ul className="space-y-1.5 mb-4">
          {step.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-[0.68rem]"
              style={{ color: active ? C.wa(0.68) : C.wa(0.5), transition: 'color 0.3s' }}
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
    </motion.div>
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
    <div className="flex gap-5">
      {/* Left: node + connector */}
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: C.la(0.12),
            border: `1.5px solid ${C.la(0.35)}`,
            boxShadow: `0 0 12px ${C.la(0.2)}`,
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
          <span className="font-mono font-black text-xs" style={{ color: C.lime }}>
            {step.num}
          </span>
          <span
            className="text-[0.5rem] font-bold uppercase tracking-widest px-2 py-0.5"
            style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.25)}` }}
          >
            {step.micro}
          </span>
        </div>

        <h3 className="text-sm font-extrabold mb-2" style={{ color: C.white }}>
          {step.title}
        </h3>
        <p className="text-[0.7rem] leading-relaxed mb-3" style={{ color: C.wa(0.5) }}>
          {step.description}
        </p>
        <ul className="space-y-1.5">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-[0.63rem]" style={{ color: C.wa(0.5) }}>
              <span
                style={{ width: 3, height: 3, borderRadius: '50%', background: C.lime, flexShrink: 0 }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden antialiased scroll-mt-20"
      id="approach"
      style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505', color: C.white }}
      aria-labelledby="approach-heading"
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none select-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(${C.wa(0.022)} 1px, transparent 1px), linear-gradient(90deg, ${C.wa(0.022)} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

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
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ══════════════════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#B6FF00]">
              <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
              HOW WE WORK
            </div>

            <h2
              id="approach-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4"
            >
              From First Conversation{' '}
              <span style={{ color: C.lime }}>to Project Delivery.</span>
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: C.wa(0.5) }}>
              A simple, transparent process designed to turn your business goals into a clear
              technical roadmap and successful solution.
            </p>
          </div>

          {/* Narrative chain */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {(['Contact', 'Discover', 'Define', 'Deliver'] as const).map((label, i, arr) => (
              <React.Fragment key={label}>
                <span
                  className="text-[0.58rem] font-bold uppercase tracking-wider"
                  style={{ color: activeStep === i ? C.lime : C.wa(0.25) }}
                >
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight size={10} color={C.wa(0.2)} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            DESKTOP — Horizontal 4-step timeline
        ══════════════════════════════════════════════════════ */}
        <div
          className="hidden lg:flex gap-3 mb-16"
          role="list"
          aria-label="AI onboarding process steps"
          onMouseLeave={() => setActiveStep(0)}
        >
          {STEPS.map((step, i) => (
            <DesktopStepCard
              key={step.num}
              step={step}
              index={i}
              active={activeStep === i}
              isLast={i === STEPS.length - 1}
              onEnter={() => setActiveStep(i)}
              onLeave={() => {}}
            />
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════
            MOBILE — Vertical timeline
        ══════════════════════════════════════════════════════ */}
        <div className="lg:hidden mb-12" role="list" aria-label="AI onboarding process steps">
          {STEPS.map((step, i) => (
            <MobileStepRow key={step.num} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════
            TRUST BADGES
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-[0.6rem] font-bold uppercase tracking-wider px-3 py-1.5"
              style={{
                border: `1px solid ${C.wa(0.08)}`,
                background: C.wa(0.02),
                color: C.wa(0.4),
              }}
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Approach;

