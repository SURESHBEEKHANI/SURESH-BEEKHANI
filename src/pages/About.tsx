import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartHandshake, Users, Shield, CheckCircle2, Lightbulb, Globe2,
  TrendingUp, Brain, Clock3, Star, ArrowRight, Target, Zap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS (Velnix Locked Color System)
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

const values = [
  {
    icon: HeartHandshake,
    title: 'Client Value First',
    desc: 'We focus on tangible business outcomes, exceeding expectations through high-impact technical execution.',
  },
  {
    icon: Users,
    title: 'People-Centric Technology',
    desc: 'We build intuitive systems that empower operational teams rather than creating friction or complexity.',
  },
  {
    icon: Shield,
    title: 'Engineering Integrity',
    desc: 'Honesty, data privacy, and transparent communication form the foundation of every client partnership.',
  },
  {
    icon: CheckCircle2,
    title: 'Operational Accountability',
    desc: 'We take direct responsibility for product quality, timeline adherence, and system stability.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    desc: 'We adopt cutting-edge AI breakthroughs only when they deliver clear, measurable value to your business.',
  },
  {
    icon: Globe2,
    title: 'Collaborative Growth',
    desc: 'By combining domain expertise with system architecture, we solve complex business challenges together.',
  },
];

const whyUs = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: 'Consistently delivering software systems that automate manual overhead and accelerate growth.',
  },
  {
    icon: Brain,
    title: 'AI & Domain Expertise',
    desc: 'Deep knowledge of AI architectures, system integration standards, and SMB operational requirements.',
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Team',
    desc: 'Specialized engineers and architects committed to project speed, precision, and ongoing support.',
  },
  {
    icon: Globe2,
    title: 'Global Delivery Standard',
    desc: 'Serving businesses across North America, Europe, and the Middle East with agile precision.',
  },
  {
    icon: Clock3,
    title: 'Predictable Timelines',
    desc: 'Strict milestone commitments and transparent progress reporting from discovery to deployment.',
  },
  {
    icon: Star,
    title: 'Flexible Business Models',
    desc: 'Tailored engagement options—dedicated team or fixed-scope projects—designed around your ROI goals.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
      <Navbar />

      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/3 rounded-full blur-[140px]" style={{ width: 600, height: 600, background: C.la(0.04) }} />
      </div>

      <main className="flex-grow relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-24">
        
        {/* ══════════════════════════════════════════════════════
            1. HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20 sm:mb-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1"
                style={{
                  border: `1px solid ${C.la(0.3)}`,
                  background: C.la(0.06),
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.lime, boxShadow: `0 0 8px ${C.lime}` }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: C.lime, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  ABOUT VELNIX SOLUTIONS
                </span>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: C.white,
                marginBottom: '1.5rem',
              }}
            >
              Building The Operating Layer For{' '}
              <span style={{ color: C.lime }}>AI-Driven Businesses.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
                color: C.wa(0.72),
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              Velnix Solutions is an AI development company that helps growing businesses eliminate operational complexity. We turn repetitive manual processes into scalable, intelligent software systems.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. VISION & MISSION
        ══════════════════════════════════════════════════════ */}
        <section className="about-band about-band--graphite w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 flex flex-col justify-between"
              style={{
                background: C.graphite,
                border: `1px solid ${C.wa(0.1)}`,
              }}
            >
              <div>
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ background: C.la(0.1), border: `1px solid ${C.la(0.25)}` }}
                >
                  <Target size={22} color={C.lime} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  To build intelligent AI systems and custom software that eliminate administrative workloads, connect fragmented tools, and create measurable capacity for growing businesses.
                </p>
              </div>
              <div className="mt-8 pt-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase" style={{ borderTop: `1px solid ${C.wa(0.08)}`, color: C.lime }}>
                <span>Execution Focused</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-8 sm:p-10 flex flex-col justify-between"
              style={{
                background: C.graphite,
                border: `1px solid ${C.wa(0.1)}`,
              }}
            >
              <div>
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ background: C.la(0.1), border: `1px solid ${C.la(0.25)}` }}
                >
                  <Zap size={22} color={C.lime} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  To become the trusted AI development partner for SMBs globally—recognized for transforming operational chaos into streamlined, autonomous business operations.
                </p>
              </div>
              <div className="mt-8 pt-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase" style={{ borderTop: `1px solid ${C.wa(0.08)}`, color: C.lime }}>
                <span>Long-Term Scalability</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>

          </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. CORE VALUES
        ══════════════════════════════════════════════════════ */}
        <section className="about-band about-band--black w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span 
              className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-4 inline-block"
              style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
            >
              OUR FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Values That Drive Our Engineering
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-8 transition-all duration-300"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.08)}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.la(0.3);
                  e.currentTarget.style.background = C.la(0.03);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.wa(0.08);
                  e.currentTarget.style.background = C.graphite;
                }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: C.la(0.1), border: `1px solid ${C.la(0.2)}` }}
                >
                  <Icon size={22} color={C.lime} />
                </div>
                <h3 className="font-bold text-base text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
          5. THE VELNIX ADVANTAGE (WHY US)
        ══════════════════════════════════════════════════════ */}
        <section className="about-band about-band--graphite w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span 
              className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-4 inline-block"
              style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
            >
              THE VELNIX ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Decision-Makers Choose Velnix
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-8 transition-all duration-300"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.08)}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.la(0.3);
                  e.currentTarget.style.background = C.la(0.03);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.wa(0.08);
                  e.currentTarget.style.background = C.graphite;
                }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: C.la(0.1), border: `1px solid ${C.la(0.2)}` }}
                >
                  <Icon size={22} color={C.lime} />
                </div>
                <h3 className="font-bold text-base text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
