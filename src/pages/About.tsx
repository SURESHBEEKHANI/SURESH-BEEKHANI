import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartHandshake, Users, Shield, CheckCircle2, Lightbulb, Globe2,
  TrendingUp, Brain, Clock3, Star, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MeetFounder from '@/components/MeetFounder';
import AnimatedNumber from '@/components/AnimatedNumber';
import LatestBlogs from '@/components/LatestBlogs';
import CTA from '@/components/ui/CTA';

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

const impactStats = [
  { number: '7+', label: 'Years of engineering experience' },
  { number: '50+', label: 'Enterprise and SMBs clients' },
  { number: '45+', label: 'Intelligent systems deployed' },
  { number: '95%', label: 'Client satisfaction rate' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
      <Navbar />

      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/3 rounded-full blur-[140px]" style={{ background: C.la(0.04) }} />
      </div>

      <main className="flex-grow relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-24">
        
        {/* ══════════════════════════════════════════════════════
            1. HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="relative isolate mb-20 overflow-hidden font-display sm:mb-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(125,204,0,0.18),transparent_55%)]" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-5 pt-16 pb-8 text-center sm:min-h-[460px] sm:px-8 sm:pt-20 sm:pb-10 lg:min-h-[480px] lg:pt-24 lg:pb-12">
          <div className="mx-auto max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]"
            >
              <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
              About us
              <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mx-auto mb-6 max-w-[20ch] text-balance text-4xl font-black leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
            >
              Build smarter systems.
              <br className="hidden sm:block" />{' '}
              <span style={{ color: C.lime }}>Grow with confidence.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto max-w-2xl text-pretty text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
            >
              We partner with growing businesses to turn operational challenges into intelligent, scalable systems. With AI, automation, and modern engineering, we reduce manual work and make room for lasting growth.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#B6FF00] px-7 py-3 text-sm font-bold text-[#050505] shadow-[0_8px_32px_rgba(182,255,0,0.2)] transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-[#7DCC00] hover:shadow-[0_12px_36px_rgba(182,255,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00]"
            >
              Talk to our experts
              <ArrowRight size={16} aria-hidden="true" />
            </motion.a>
          </div>
          </div>
        </section>

        <MeetFounder />

        {/* ══════════════════════════════════════════════════════
            2. VISION & MISSION
        ══════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#111111] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl space-y-14 px-5 sm:px-8 lg:space-y-20 lg:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="w-full max-w-[32rem] overflow-hidden rounded-2xl shadow-[0_24px_60px_-32px_rgba(0,0,0,0.7)] ring-1 ring-inset ring-white/10"
              >
                <img
                  src="/image/Hero-section-image/hero-page-image-3.avif"
                  alt="Velnix team sharing a project roadmap and vision"
                  width={1264}
                  height={843}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1.55] w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="lg:pl-1"
              >
                <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                  Direction
                </p>
                <h3 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Our Inspiring <span className="text-[#B6FF00]">Vision</span>
                </h3>
                <p className="mt-5 max-w-xl text-pretty text-[0.95rem] leading-7 text-white/65 sm:text-base sm:leading-8">
                  To become the trusted AI and technology partner for SMBs worldwide—helping businesses move from manual, disconnected operations to intelligent systems that work together, scale efficiently, and continuously create more capacity for growth.
                </p>
              </motion.div>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="lg:pr-1"
              >
                <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                  Purpose
                </p>
                <h3 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Our Impactful <span className="text-[#B6FF00]">Mission</span>
                </h3>
                <p className="mt-5 max-w-xl text-pretty text-[0.95rem] leading-7 text-white/65 sm:text-base sm:leading-8">
                  To help growing businesses work smarter by building intelligent AI systems and custom software that eliminate repetitive administrative work, connect fragmented tools, and turn inefficient processes into streamlined workflows. We combine practical engineering with AI to create measurable capacity, reduce operational friction, and help teams focus on work that drives growth.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="w-full max-w-[32rem] overflow-hidden rounded-2xl shadow-[0_24px_60px_-32px_rgba(0,0,0,0.7)] ring-1 ring-inset ring-white/10 lg:ml-auto"
              >
                <img
                  src="/image/Hero-section-image/hero-page-image-1.avif"
                  alt="Velnix team collaborating to shape an impactful mission"
                  width={1537}
                  height={1023}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1.55] w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#B6FF00] text-[#050505]" aria-label="Velnix impact">
          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {impactStats.map(({ number, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className={`flex min-h-36 flex-col items-center justify-center px-4 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9 ${index % 2 === 1 ? 'border-l border-black/10' : ''} ${index >= 2 ? 'border-t border-black/10 lg:border-t-0' : ''} ${index === 2 ? 'lg:border-l' : ''}`}
              >
                <p className="text-4xl font-black leading-none tracking-tight text-[#050505] sm:text-5xl">
                  <AnimatedNumber number={number} />
                </p>
                <p className="mx-auto mt-4 max-w-[20ch] text-[0.65rem] font-bold uppercase leading-5 tracking-[0.18em] text-black/85 sm:text-xs sm:leading-6">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. CORE VALUES
        ══════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden bg-[#050505] py-12 font-display text-white sm:py-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)',
              filter: 'blur(10px)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
                Our Foundation
              </div>
              <h2 className="whitespace-nowrap text-[clamp(1rem,4.5vw,2.25rem)] font-black leading-tight tracking-[-0.05em] text-white">
                Values That Drive Our <span className="text-[#B6FF00]">Engineering</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-white/[0.14] sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative min-h-[250px] border-b border-r border-white/[0.14] bg-[#111111] p-6 transition-all duration-300 hover:border-[#B6FF00]/40 hover:bg-[#B6FF00]/5 sm:min-h-[270px] sm:p-7 lg:p-8"
              >
                <span className="absolute right-6 top-7 font-mono text-xs tracking-[0.12em] text-white/40 transition-colors duration-300 group-hover:text-[#B6FF00] sm:right-7 lg:right-8" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mb-7 flex h-[50px] w-[50px] items-center justify-center border border-[#B6FF00] text-[#B6FF00] transition-colors duration-300 group-hover:bg-[#B6FF00]/10">
                  <Icon size={22} color={C.lime} />
                </div>
                <h3 className="mb-3 pr-4 text-lg font-black leading-tight tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-xl lg:text-2xl">{title}</h3>
                <p className="max-w-[38ch] text-sm leading-relaxed text-white/65">{desc}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
          5. THE VELNIX ADVANTAGE (WHY US)
        ══════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden bg-[#050505] py-12 font-display text-white sm:py-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.16) 0%, rgba(125,204,0,0.05) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.1) 0%, rgba(125,204,0,0.025) 42%, transparent 76%)',
              filter: 'blur(10px)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
                The Velnix Advantage
              </div>
              <h2 className="whitespace-nowrap text-[clamp(0.875rem,4.2vw,2.25rem)] font-black leading-tight tracking-[-0.05em] text-white">
                Why Decision-Makers Choose <span className="text-[#B6FF00]">Velnix</span>
              </h2>
            </div>

            <div className="border-t border-white/[0.14]">
              {whyUs.map(({ title, desc }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group grid grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-center gap-x-4 gap-y-2 border-b border-white/[0.14] px-1 py-6 transition-colors duration-300 hover:bg-[#B6FF00]/[0.035] sm:grid-cols-[3rem_minmax(0,1fr)_2rem] sm:gap-x-6 sm:py-8 lg:grid-cols-[4rem_minmax(0,0.95fr)_minmax(0,1.2fr)_2rem] lg:gap-x-6 lg:py-9"
                >
                  <span className="row-span-2 font-mono text-xs tracking-[0.12em] text-[#B6FF00] lg:row-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="min-w-0 text-xl font-black leading-tight tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-2xl lg:text-[2rem]">
                    {title}
                  </h3>
                  <p className="col-start-2 row-start-2 max-w-[64ch] text-sm leading-relaxed text-white/60 sm:text-base sm:leading-7 lg:col-start-3 lg:row-start-1">
                    {desc}
                  </p>
                  <ArrowRight className="col-start-3 row-span-2 h-4 w-4 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B6FF00] lg:col-start-4 lg:row-span-1" aria-hidden="true" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <LatestBlogs />

        <CTA
          eyebrow="Ready to build what's next?"
          title="Turn your next big idea into a system that moves your business forward."
          description="Let’s talk about the challenges you’re solving and how AI, automation, and thoughtful engineering can help."
          primaryLabel="Start a Conversation"
          primaryHref="/contact"
          secondaryLabel="Explore Our Work"
          secondaryHref="/portfolio"
          variant="centered"
          background="gradient"
          size="md"
        />

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
