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
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const lime = '#B6FF00';
const black = '#050505';
const graphite = '#111111';
const muted = 'rgba(255,255,255,0.64)';

const auditSteps = [
  { number: '01', title: 'Map', text: 'Document the workflows, systems, handoffs, and friction that shape your operation.', icon: Search },
  { number: '02', title: 'Analyze', text: 'Separate expensive bottlenecks from tasks that are simply inconvenient.', icon: BarChart3 },
  { number: '03', title: 'Score', text: 'Rate each opportunity by value, feasibility, data readiness, and delivery risk.', icon: Crosshair },
  { number: '04', title: 'Prioritize', text: 'Build a practical sequence around the first result worth funding.', icon: Layers3 },
  { number: '05', title: 'Build', text: 'Turn the strongest opportunity into a working AI system with Velnix.', icon: Workflow },
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

const AIAudit: React.FC = () => (
  <div className="ai-audit-page min-h-screen bg-[#050505] text-white">
    <Navbar />

    <main>
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-[8%] scroll-mt-20 sm:px-8 sm:pb-28 lg:px-12 lg:pt-[8%]">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(182,255,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,0,0.07) 1px, transparent 1px)', backgroundSize: '72px 72px', maskImage: 'linear-gradient(to bottom, black, transparent 82%)' }} />
        <div className="pointer-events-none absolute -right-40 top-8 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #7DCC00, transparent 68%)' }} />
        <div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: lime }}>
              <span className="h-px w-8" style={{ background: lime }} /> AI Audit
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Find the work<br /><span style={{ color: lime }}>worth transforming.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 sm:text-xl" style={{ color: muted }}>A focused 7–14 day assessment that shows where AI can create measurable value in your business, what to build first, and why.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#B6FF00] px-6 py-4 text-sm font-bold text-[#050505] transition-transform hover:-translate-y-0.5">Book an AI Audit <ArrowRight size={17} /></Link>
              <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#B6FF00]">See the method <ChevronDown size={16} /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.42)' }}>
              <span className="flex items-center gap-2"><Clock3 size={14} style={{ color: lime }} /> 7–14 days</span>
              <span className="flex items-center gap-2"><FileCheck2 size={14} style={{ color: lime }} /> Fixed scope</span>
              <span className="flex items-center gap-2"><ShieldCheck size={14} style={{ color: lime }} /> Decision-ready</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#B6FF00]/10" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111111] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Opportunity map</span><span className="rounded-full bg-[#B6FF00]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#B6FF00]">Live model</span></div>
              <div className="mt-7 grid grid-cols-[1fr_auto] gap-3 text-sm">
                {[['Claims intake', 'High value', '92'], ['Client onboarding', 'Fast win', '84'], ['Reporting workflow', 'Data ready', '77'], ['Internal support', 'Explore', '61']].map(([name, label, score], index) => (
                  <React.Fragment key={name}>
                    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B6FF00]/10 text-[10px] font-bold text-[#B6FF00]">0{index + 1}</span><div><div className="font-semibold">{name}</div><div className="mt-1 text-xs text-white/40">{label}</div></div></div>
                    <div className="flex min-w-16 items-center justify-center rounded-lg border border-[#B6FF00]/20 bg-[#B6FF00]/[0.06] text-xl font-black text-[#B6FF00]">{score}</div>
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-7 rounded-lg border border-[#B6FF00]/25 bg-[#B6FF00]/[0.07] p-4"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#B6FF00]"><Sparkles size={14} /> Recommended first build</div><div className="mt-2 text-lg font-bold">Automated claims intake</div><div className="mt-1 text-sm leading-6 text-white/55">Highest value with existing data and a clear path to pilot.</div></div>
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
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>Why an audit</p><h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">The expensive question is not “Can AI do this?”</h2></div>
          <div className="grid gap-8 sm:grid-cols-2"><div className="border-l-2 border-[#B6FF00] pl-6"><p className="text-2xl font-bold leading-tight">It is “Should we transform this workflow first?”</p><p className="mt-4 leading-7 text-white/55">Most teams do not need more tools. They need a defensible decision about where change will improve throughput, margin, or customer experience.</p></div><div className="border-l border-white/15 pl-6"><p className="text-2xl font-bold leading-tight">We start with your business.</p><p className="mt-4 leading-7 text-white/55">Velnix maps the work, tests the opportunity, and connects the recommendation to the systems and people who will make it real.</p></div></div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>The method</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Map → Analyze → Score → Prioritize → Build.</h2></div><p className="max-w-sm leading-7 text-white/55">A short, structured engagement that converts operational complexity into a buildable point of view.</p></div><div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-5">{auditSteps.map(({ number, title, text, icon: Icon }) => <div key={number} className="bg-[#111111] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#B6FF00]">{number}</span><Icon size={19} style={{ color: lime }} /></div><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{text}</p></div>)}</div></div>
      </section>

      <section className="border-y border-white/10 bg-[#111111] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div><p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>What you leave with</p><h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Clarity you can take to the next meeting.</h2><p className="mt-6 max-w-md leading-7 text-white/55">No vague innovation report. You get the evidence, prioritization, and next action required to make a confident investment decision.</p></div><div className="grid gap-4 sm:grid-cols-2">{deliverables.map(([title, text, Icon]) => <div key={title} className="border border-white/10 bg-[#050505] p-6"><Icon size={20} style={{ color: lime }} /><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></div>)}</div></div></section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24"><div><p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>The value case</p><h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Make the upside visible before you fund the build.</h2><p className="mt-6 max-w-xl leading-7 text-white/55">We frame each opportunity around the business metric it can move. That means your roadmap is easier to prioritize, explain, and measure after launch.</p><div className="mt-9 flex flex-wrap gap-3">{['Hours recovered', 'Cycle time', 'Error reduction', 'Revenue capacity'].map(label => <span key={label} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">{label}</span>)}</div></div><div className="rounded-2xl border border-[#B6FF00]/20 bg-[#111111] p-7 sm:p-9"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-white/45"><span>Illustrative value model</span><LineChart size={17} style={{ color: lime }} /></div><div className="mt-8 flex items-end gap-3"><span className="text-6xl font-black text-[#B6FF00]">3.4x</span><span className="pb-2 text-sm text-white/50">capacity upside</span></div><div className="mt-8 space-y-5">{[['Manual handling', '100%', 'bg-white/20'], ['Assisted workflow', '62%', 'bg-[#7DCC00]'], ['Automated path', '29%', 'bg-[#B6FF00]']].map(([label, width, color]) => <div key={label}><div className="mb-2 flex justify-between text-xs text-white/55"><span>{label}</span><span>{width}</span></div><div className="h-2 rounded-full bg-white/10"><div className={`h-2 rounded-full ${color}`} style={{ width }} /></div></div>)}</div><p className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-white/40">The audit replaces assumptions with a model tied to your workflow data.</p></div></div></section>

      <section className="border-y border-white/10 bg-[#B6FF00] px-5 py-16 text-[#050505] sm:px-8 lg:px-12 lg:py-20"><div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#254832]">Two steps. One path forward.</p><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Audit the opportunity. Build the result.</h2></div><div className="flex shrink-0 flex-col gap-3 text-sm font-bold sm:flex-row"><span className="rounded-full bg-[#050505] px-5 py-3 text-white">AI Audit · $1,000–$1,500</span><span className="rounded-full border border-[#254832] px-5 py-3">AI Build · $3,000–$5,000+</span></div></div></section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: lime }}>Common questions</p><h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Enough detail to make the call.</h2></div><div className="divide-y divide-white/10 border-y border-white/10">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">{question}<ChevronDown size={18} className="shrink-0 text-[#B6FF00] transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pr-8 pt-4 leading-7 text-white/55">{answer}</p></details>)}</div></div></section>

    </main>

    <Footer />
  </div>
);

export default AIAudit;
