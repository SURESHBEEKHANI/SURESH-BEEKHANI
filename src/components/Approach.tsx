import React, { useState } from 'react';
import {
  MessageSquare,
  Search,
  FileText,
  Rocket,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — Velnix Locked Color System
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  la: (opacity: number) => `rgba(182,255,0,${opacity})`,
  wa: (opacity: number) => `rgba(255,255,255,${opacity})`,
};

// ─────────────────────────────────────────────────────────────────────────────
// STEP DATA
// ─────────────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    micro: 'CONNECT',
    title: 'Contact Us',
    description:
      'Share your vision — we listen to understand your unique business goals and technical challenges.',
    icon: MessageSquare,
  },
  {
    num: '02',
    micro: 'DISCOVER',
    title: 'Consultation & Discovery',
    description:
      'Assess feasibility, analyze system architecture, and map workflows with expert deep-dives.',
    icon: Search,
  },
  {
    num: '03',
    micro: 'DEFINE',
    title: 'Detailed Proposal',
    description:
      'Clear scope, timeline milestones, and fixed, transparent investment estimates.',
    icon: FileText,
  },
  {
    num: '04',
    micro: 'DELIVER',
    title: 'Kickoff & Delivery',
    description:
      'Structured sprint execution, continuous feedback loops, and production-grade deployment.',
    icon: Rocket,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden py-20 sm:py-28 font-display antialiased scroll-mt-20"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(182,255,0,0.05) 0%, transparent 70%), #050505',
        color: C.white,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────────────
          SUBTLE BACKGROUND GRID
      ───────────────────────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${C.wa(0.02)} 1px, transparent 1px),
              linear-gradient(90deg, ${C.wa(0.02)} 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ───────────────────────────────────────────────────────────────────
            HEADER
        ─────────────────────────────────────────────────────────────────── */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">

          <motion.div
            className="mb-3 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] sm:text-sm"
            style={{ color: C.lime }}
            initial={shouldReduce ? false : { opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span
              className="h-px w-8"
              style={{ backgroundColor: C.lime }}
              aria-hidden="true"
            />

            Simple Steps

            <span
              className="h-px w-8"
              style={{ backgroundColor: C.lime }}
              aria-hidden="true"
            />
          </motion.div>

          <motion.h2
            id="approach-heading"
            className="text-2xl font-black leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl"
            initial={shouldReduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From Strategy to Solution{' '}
            <span style={{ color: C.lime }}>Process</span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            initial={shouldReduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            No confusion or delays. Just clear, transparent, and reliable
            execution.
          </motion.p>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            MAIN 2-COLUMN LAYOUT
        ─────────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">

          {/* ───────────────────────────────────────────────────────────────
              LEFT — IMAGE
          ─────────────────────────────────────────────────────────────── */}
          <motion.div
            className="relative lg:col-span-6"
            initial={shouldReduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl sm:aspect-[14/11]">

              {/* Correct Vite /public image path */}
              <img
                src="/image/Hero-section-image/approach_process_dev.avif"
                alt="Software consultant working at laptop"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />

              {/* Image Overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)',
                }}
              />

              {/* Active Step Indicator */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <motion.div
                  key={activeStep}
                  initial={
                    shouldReduce
                      ? false
                      : { opacity: 0, y: 10 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-md sm:p-5"
                >
                  <div
                    className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: C.lime }}
                  >
                    Step {STEPS[activeStep].num} — {STEPS[activeStep].micro}
                  </div>

                  <div className="text-base font-bold text-white sm:text-lg">
                    {STEPS[activeStep].title}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ───────────────────────────────────────────────────────────────
              RIGHT — TIMELINE
          ─────────────────────────────────────────────────────────────── */}
          <motion.div
            className="relative space-y-8 py-4 pl-6 sm:pl-8 lg:col-span-6"
            initial={shouldReduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Timeline Line */}
            <div
              className="absolute bottom-4 left-2.5 top-4 w-0.5 rounded-full sm:left-3.5"
              style={{ backgroundColor: C.wa(0.1) }}
              aria-hidden="true"
            />

            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.num}
                  className="group relative flex cursor-pointer items-start gap-4 sm:gap-5"
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  initial={
                    shouldReduce
                      ? false
                      : { opacity: 0, y: 10 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                >

                  {/* Step Icon */}
                  <motion.div
                    className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12"
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: isActive
                        ? C.lime
                        : C.wa(0.05),
                      color: isActive
                        ? C.black
                        : C.wa(0.7),
                      border: `1.5px solid ${isActive ? C.lime : C.wa(0.12)
                        }`,
                      boxShadow: isActive
                        ? `0 0 24px ${C.la(0.35)}`
                        : 'none',
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={isActive ? 2.2 : 1.75}
                    />
                  </motion.div>

                  {/* Step Content */}
                  <div className="flex-1 pt-0.5">

                    {/* Micro Label */}
                    <div
                      className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                      style={{
                        color: isActive
                          ? C.lime
                          : C.wa(0.35),
                      }}
                    >
                      {step.num} / {step.micro}
                    </div>

                    {/* Title */}
                    <h3
                      className="flex items-center gap-2 text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl"
                      style={{
                        color: isActive
                          ? C.lime
                          : C.white,
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="mt-1 max-w-xl text-sm leading-relaxed transition-colors duration-300"
                      style={{
                        color: isActive
                          ? C.wa(0.85)
                          : C.wa(0.55),
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;