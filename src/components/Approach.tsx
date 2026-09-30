import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
  },
  {
    num: '02',
    micro: 'DISCOVER',
    title: 'Consultation & Discovery',
    description:
      'Assess feasibility, analyze system architecture, and map workflows with expert deep-dives.',
  },
  {
    num: '03',
    micro: 'DEFINE',
    title: 'Detailed Proposal',
    description:
      'Clear scope, timeline milestones, and fixed, transparent investment estimates.',
  },
  {
    num: '04',
    micro: 'DELIVER',
    title: 'Kickoff & Delivery',
    description:
      'Structured sprint execution, continuous feedback loops, and production-grade deployment.',
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Approach: React.FC = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden pb-8 pt-12 font-display scroll-mt-20 md:pb-10 md:pt-16 lg:pb-12 lg:pt-20"
      style={{
        background: C.black,
        color: C.white,
      }}
    >
      {/* Background textures */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)',
          filter: 'blur(10px)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ───────────────────────────────────────────────────────────────────
            HEADER
        ─────────────────────────────────────────────────────────────────── */}
        <div className="mb-4 text-left sm:mb-6 lg:mb-8">

          <motion.div
            className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]"
            initial={shouldReduce ? false : { opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span
              className="h-px w-8 bg-[#B6FF00]"
              aria-hidden="true"
            />
            HOW WE WORK
          </motion.div>
          <motion.h2
            id="approach-heading"
            className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
            style={{ color: C.white }}
            initial={shouldReduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From Strategy to Systems. <span style={{ color: C.lime }}>Built for Results.</span>
          </motion.h2>

          <motion.p
            className="mt-4 max-w-xl text-left text-lg leading-8 sm:text-xl"
            style={{ color: 'rgba(255, 255, 255, 0.64)' }}
            initial={shouldReduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            No confusion or delays. Just clear, transparent, and reliable execution.
          </motion.p>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            STEPS GRID
        ─────────────────────────────────────────────────────────────────── */}
        <div className="space-y-0">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.num}
              className="group border-b border-white/10 py-8 sm:py-12 transition-all duration-300 hover:bg-white/[0.02]"
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Step Number */}
                <div className="lg:col-span-1">
                  <div
                    className="text-lg font-bold"
                    style={{ color: C.lime }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Step Title */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Step Description */}
                <div className="lg:col-span-5">
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: C.wa(0.7) }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex justify-start lg:justify-end">
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight 
                      size={24} 
                      style={{ color: C.lime }}
                      className="transition-colors duration-300"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;