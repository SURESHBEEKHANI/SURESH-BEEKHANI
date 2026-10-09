import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Clock3,
  Crosshair,
  Database,
  FileCheck2,
  Layers3,
  LineChart,
  Map,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useAnimations';
import { fadeInUp, heroVariants, scaleIn, scrollAnimationConfig, staggerContainer, staggerItem } from '@/lib/animations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '@/components/ui/CTA';

const lime = '#B6FF00';
const black = '#050505';
const graphite = '#111111';
const muted = 'rgba(255,255,255,0.64)';
const scrollViewport = { once: scrollAnimationConfig.triggerOnce, amount: scrollAnimationConfig.threshold };

const auditSteps = [
  { number: '01', title: 'Map', text: 'Document the workflows, systems, handoffs, and friction that shape your operation.', icon: Search },
  { number: '02', title: 'Analyze', text: 'Separate expensive bottlenecks from tasks that are simply inconvenient.', icon: BarChart3 },
  { number: '03', title: 'Score', text: 'Rate each opportunity by value, feasibility, data readiness, and delivery risk.', icon: Crosshair },
  { number: '04', title: 'Prioritize', text: 'Build a practical sequence around the first result worth funding.', icon: Layers3 },
  { number: '05', title: 'Build', text: 'Turn the strongest opportunity into a working AI system with Velnix.', icon: Workflow },
];

const opportunities = [
  { name: 'Claims intake', label: 'High value', score: 92 },
  { name: 'Client onboarding', label: 'Fast win', score: 84 },
  { name: 'Reporting workflow', label: 'Data ready', score: 77 },
  { name: 'Internal support', label: 'Explore', score: 61 },
];

const deliverables: [string, string, React.ElementType][] = [
  ['Workflow map', 'A clear view of where work, data, and decisions move through your business.', Map],
  ['Opportunity scorecard', 'A ranked list of AI and automation opportunities with an explainable scoring model.', Crosshair],
  ['Value estimate', 'A grounded view of time saved, capacity unlocked, and operational upside.', LineChart],
  ['Execution roadmap', 'The recommended first build, technical approach, risks, and next steps.', Workflow],
];

const faqs = [
  ['Do we need an AI strategy before starting?', 'No. The audit is designed for businesses that know there is opportunity but need clarity on where to begin. We start with your operating reality, not a preferred tool or model.'],
  ['How much does the AI Audit cost?', 'The fixed fee is $1,000–$1,500 depending on operational complexity and the number of workflows we assess. We confirm scope before work begins.'],
  ['What happens after the audit?', 'You receive a prioritized roadmap and can use it internally, with another partner, or with Velnix. When the fit is right, we can move directly into an AI Build from $3,000–$5,000+.'],
  ['Will this work with our existing systems?', 'That is one of the audit questions. We assess your current tools, data access, security requirements, and integration constraints before recommending a build.'],
];

const AIAudit: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
  <div className="ai-audit-page min-h-screen bg-[#050505] text-white">
    <Navbar />

    <main>
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-[8%] scroll-mt-20 sm:px-8 sm:pb-28 lg:px-12 lg:pt-[8%]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)', filter: 'blur(10px)' }} />
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(182,255,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,0,0.07) 1px, transparent 1px)', backgroundSize: '72px 72px', maskImage: 'linear-gradient(to bottom, black, transparent 82%)' }} />
        <div className="pointer-events-none absolute -right-40 top-8 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #7DCC00, transparent 68%)' }} />
        <div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-20">
          <motion.div
            variants={heroVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={prefersReducedMotion ? undefined : 'visible'}
          >
            <div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: lime }}>
              <span className="h-px w-6" style={{ background: lime }} /> AI Audit
            </div>
            <h1 className="mb-5 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Find the work
              <span className="mt-2 block" style={{ color: lime }}>worth transforming.</span>
            </h1>
            <p className="mb-10 max-w-xl text-[clamp(0.95rem,1.4vw,1.1rem)] leading-[1.75] font-normal" style={{ color: 'rgba(255,255,255,0.72)' }}>
              A focused 7–14 day assessment that shows where AI can create measurable value in your business, what to build first, and why.
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300" style={{ background: lime, color: black, fontSize: '0.9rem', padding: '0.85rem 1.75rem', textDecoration: 'none', border: `1px solid ${lime}`, boxShadow: `0 0 0 0 ${lime}00, 0 8px 28px ${lime}59`, lineHeight: 1 }} onMouseEnter={event => { event.currentTarget.style.background = '#7DCC00'; event.currentTarget.style.boxShadow = `0 0 0 3px ${lime}33, 0 12px 36px ${lime}88`; }} onMouseLeave={event => { event.currentTarget.style.background = lime; event.currentTarget.style.boxShadow = `0 0 0 0 ${lime}00, 0 8px 28px ${lime}59`; }}>
                <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ width: '200%', left: '-50%', background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)', animation: 'velnix-shimmer 2.8s linear infinite', willChange: 'transform' }} />
                <span className="relative z-10">Book an AI Audit</span>
                <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.04)', textDecoration: 'none' }} onMouseEnter={event => { event.currentTarget.style.borderColor = lime; event.currentTarget.style.color = lime; event.currentTarget.style.background = 'rgba(182,255,0,0.08)'; }} onMouseLeave={event => { event.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; event.currentTarget.style.color = 'white'; event.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>See the method <ChevronDown size={15} /></a>
            </div>
            <div className="flex w-full items-center gap-6 pt-6 sm:gap-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex flex-col items-start"><span style={{ fontSize: '1.75rem', fontWeight: 800, color: lime, lineHeight: 1 }}>7–14</span><span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: 4, textTransform: 'uppercase', fontWeight: 500 }}>Days</span></div>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.1)' }} />
              <div className="flex flex-col items-start"><span style={{ fontSize: '1.75rem', fontWeight: 800, color: lime, lineHeight: 1 }}>Fixed</span><span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: 4, textTransform: 'uppercase', fontWeight: 500 }}>scope</span></div>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.1)' }} />
              <div className="flex flex-col items-start"><span style={{ fontSize: '1.75rem', fontWeight: 800, color: lime, lineHeight: 1 }}>Ready</span><span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: 4, textTransform: 'uppercase', fontWeight: 500 }}>for decisions</span></div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={scaleIn}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={prefersReducedMotion ? undefined : 'visible'}
          >
            <div className="absolute -inset-5 border border-[#B6FF00]/10" />
            <div className="relative overflow-hidden border border-white/15 bg-[#111111] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/55">Opportunity map</span>
                  <span className="mt-1.5 block text-sm text-white/40">4 workflows ranked</span>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#B6FF00]/20 bg-[#B6FF00]/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B6FF00]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B6FF00]" aria-hidden="true" />
                  Live model
                </span>
              </div>
              <ol className="mt-2 divide-y divide-white/[0.08]">
                {opportunities.map(({ name, label, score }, index) => (
                  <li key={name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 py-4 sm:gap-x-4">
                    <span className="font-mono text-xs text-white/35">0{index + 1}</span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-sm font-semibold text-white">{name}</span>
                        <span className="text-[11px] text-white/45">{label}</span>
                      </div>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                        <div className="h-full rounded-full bg-[#B6FF00]" style={{ width: `${score}%` }} />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold tabular-nums text-[#B6FF00]">{score}</span>
                      <span className="text-[10px] text-white/35">/100</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-2 border border-[#B6FF00]/25 bg-[#B6FF00]/[0.06] p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
                  <Sparkles size={14} aria-hidden="true" />
                  Recommended first build
                </div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-base font-bold text-white sm:text-lg">Automated claims intake</h2>
                    <p className="mt-1.5 max-w-sm text-sm leading-6 text-white/55">Highest value with existing data and a clear path to pilot.</p>
                  </div>
                  <span className="shrink-0 border border-[#B6FF00]/20 px-2.5 py-1.5 font-mono text-xs font-bold text-[#B6FF00]">01</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#B6FF00] bg-[#B6FF00] px-5 py-4 text-center text-[#050505] sm:px-8 sm:py-5 lg:px-12">
        <p className="mx-auto max-w-[1320px] text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em]">
        Supporting ambitious businesses across Australia, Europe, North America, and global markets.

        </p>
      </section>

      <section className="border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.div
          className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >
          <div>
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>
              <span className="h-px w-8" style={{ background: lime }} aria-hidden="true" />
              <span>Why an audit</span>
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">The expensive question is not “Can AI do <span style={{ color: lime }}>this?”</span></h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2"><div className="border-l-2 border-[#B6FF00] pl-6"><p className="text-2xl font-bold leading-tight">It is “Should we transform this workflow first?”</p><p className="mt-4 leading-7 text-white/55">Most teams do not need more tools. They need a defensible decision about where change will improve throughput, margin, or customer experience.</p></div><div className="border-l border-white/15 pl-6"><p className="text-2xl font-bold leading-tight">We start with your business.</p><p className="mt-4 leading-7 text-white/55">Velnix maps the work, tests the opportunity, and connects the recommendation to the systems and people who will make it real.</p></div></div>
        </motion.div>
      </section>

      <section id="how-it-works" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end"><div>
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>
            <span className="h-px w-8" style={{ background: lime }} aria-hidden="true" />
            <span>The method</span>
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] sm:text-3xl">Map → Analyze → Score → Prioritize → <span style={{ color: lime }}>Build.</span></h2>
        </div><p className="max-w-sm leading-7 text-white/55">A short, structured engagement that converts operational complexity into a buildable point of view.</p></div><motion.div
          className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-5"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >{auditSteps.map(({ number, title, text, icon: Icon }) => <motion.div key={number} variants={prefersReducedMotion ? undefined : staggerItem} className="bg-[#111111] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#B6FF00]">{number}</span><Icon size={19} style={{ color: lime }} /></div><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{text}</p></motion.div>)}</motion.div></div>
      </section>

      <section className="border-y border-white/10 bg-[#111111] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div>
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>
          <span className="h-px w-8" style={{ background: lime }} aria-hidden="true" />
          <span>What you leave with</span>
        </div>
        <h2 className="mt-5 text-2xl font-black tracking-[-0.04em] sm:text-3xl">Clarity you can take to the next meeting.</h2><p className="mt-6 max-w-md leading-7 text-white/55">No vague innovation report. You get the evidence, prioritization, and next action required to make a confident investment decision.</p></div><motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >{deliverables.map(([title, text, Icon]) => <motion.div key={title} variants={prefersReducedMotion ? undefined : staggerItem} className="border border-white/10 bg-[#050505] p-6"><Icon size={20} style={{ color: lime }} /><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></motion.div>)}</motion.div></div></section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><motion.div
        className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24"
        variants={prefersReducedMotion ? undefined : fadeInUp}
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={scrollViewport}
      ><div>
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>
          <span className="h-px w-8" style={{ background: lime }} aria-hidden="true" />
          <span>The value case</span>
        </div>
        <h2 className="mt-5 text-2xl font-black tracking-[-0.04em] sm:text-3xl">Make the upside visible before you fund the build.</h2><p className="mt-6 max-w-xl leading-7 text-white/55">We frame each opportunity around the business metric it can move. That means your roadmap is easier to prioritize, explain, and measure after launch.</p><div className="mt-9 flex flex-wrap gap-3">{['Hours recovered', 'Cycle time', 'Error reduction', 'Revenue capacity'].map(label => <span key={label} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">{label}</span>)}</div></div><div className="rounded-2xl border border-[#B6FF00]/20 bg-[#111111] p-7 sm:p-9"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-white/45"><span>Illustrative value model</span><LineChart size={17} style={{ color: lime }} /></div><div className="mt-8 flex items-end gap-3"><span className="text-6xl font-black text-[#B6FF00]">3.4x</span><span className="pb-2 text-sm text-white/50">capacity upside</span></div><div className="mt-8 space-y-5">{[['Manual handling', '100%', 'bg-white/20'], ['Assisted workflow', '62%', 'bg-[#7DCC00]'], ['Automated path', '29%', 'bg-[#B6FF00]']].map(([label, width, color]) => <div key={label}><div className="mb-2 flex justify-between text-xs text-white/55"><span>{label}</span><span>{width}</span></div><div className="h-2 rounded-full bg-white/10"><div className={`h-2 rounded-full ${color}`} style={{ width }} /></div></div>)}</div><p className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-white/40">The audit replaces assumptions with a model tied to your workflow data.</p></div></motion.div></section>

      <section className="border-y border-white/10 bg-[#B6FF00] px-5 py-16 text-[#050505] sm:px-8 lg:px-12 lg:py-20"><motion.div
        className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        variants={prefersReducedMotion ? undefined : fadeInUp}
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={scrollViewport}
      ><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#254832]">Two steps. One path forward.</p><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Audit the opportunity. Build the result.</h2></div><div className="flex shrink-0 flex-col gap-3 text-sm font-bold sm:flex-row"><span className="rounded-full bg-[#050505] px-5 py-3 text-white">AI Audit · $1,000–$1,500</span><span className="rounded-full border border-[#254832] px-5 py-3">AI Build · $3,000–$5,000+</span></div></motion.div></section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><motion.div
        variants={prefersReducedMotion ? undefined : fadeInUp}
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={scrollViewport}
      ><div>
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>
          <span className="h-px w-8" style={{ background: lime }} aria-hidden="true" />
          <span>Common questions</span>
        </div>
        <h2 className="mt-5 text-2xl font-black tracking-[-0.04em] sm:text-3xl">Enough detail to make the <span style={{ color: lime }}>call.</span></h2>
        <p className="mt-5 max-w-md leading-7 text-white/55">Clear answers on the audit process, pricing, and what to expect after your recommendations are ready.</p>
      </div></motion.div><motion.div
        className="divide-y divide-white/10 border-y border-white/10"
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={scrollViewport}
      >{faqs.map(([question, answer]) => <motion.div key={question} variants={prefersReducedMotion ? undefined : staggerItem}><details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">{question}<ChevronDown size={18} className="shrink-0 text-[#B6FF00] transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pr-8 pt-4 leading-7 text-white/55">{answer}</p></details></motion.div>)}</motion.div></div></section>

      <CTA
        eyebrow="Let’s talk"
        title="Ready to turn the opportunity into a build?"
        description="Book a conversation and we’ll identify the first workflow worth improving, the value behind it, and the safest way to move forward."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="See the method"
        secondaryHref="#how-it-works"
        variant="centered"
        background="gradient"
        size="lg"
      />

    </main>

    <Footer />
  </div>
);
};

export default AIAudit;
