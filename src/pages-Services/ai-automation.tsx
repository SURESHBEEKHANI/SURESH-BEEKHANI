import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView, useMotionValue, useReducedMotion as useFramerReducedMotion, useTransform } from "framer-motion";
import { ArrowRight, Brain, Bot, CheckCircle2, Code2, Database, FileText, GitBranch, Headphones, LineChart, Lock, Plus, Search, Server, ShieldCheck, Sparkles, Users, Workflow, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import LatestBlogs from "../components/LatestBlogs";
import CTAExamples from "../components/CTAExamples";
import FAQ from "../components/FAQ";
import { IMPACT_STATS } from "../components/OriginStory";
import { useReducedMotion } from "@/hooks/useAnimations";
import { TechnologyStack } from "../components/TechnologyStack";
import EngagementModels from "../components/EngagementModels";
import Testimonials from "../components/Testimonials";
import PortfolioSection from "../components/PortfolioSection";

const C = {
  black: "#050505",
  graphite: "#111111",
  graphiteLight: "#181818",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",
  la: (opacity: number) => `rgba(182, 255, 0, ${opacity})`,
  wa: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

const AnimatedImpactNumber = ({ number }: { number: string }) => {
  const reduceMotion = useFramerReducedMotion();
  const target = Number.parseInt(number, 10);
  const suffix = number.slice(String(target).length);
  const count = useMotionValue(reduceMotion ? target : 0);
  const display = useTransform(count, value => `${Math.round(value)}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [count, isInView, reduceMotion, target]);

  return <motion.span ref={ref} aria-label={number}>{display}</motion.span>;
};

const automationCapabilities = [
  { id: "workflow", num: "01", title: "AI Workflow Automation", description: "Connect tasks, decisions, and business systems into dependable workflows that reduce repetitive admin work.", icon: Workflow },
  { id: "agents", num: "02", title: "AI Agents in Workflows", description: "Add agents that classify requests, gather context, prepare actions, and escalate exceptions to people.", icon: Bot },
  { id: "integrations", num: "03", title: "API & App Integrations", description: "Orchestrate work across CRM, ERP, email, spreadsheets, forms, and the tools your team already uses.", icon: GitBranch },
  { id: "documents", num: "04", title: "Email & Document Processing", description: "Extract, validate, route, and summarize information from incoming messages and business documents.", icon: FileText },
  { id: "data", num: "05", title: "Data & Reporting Automation", description: "Transform, reconcile, and move business data into clean reports and operational dashboards.", icon: Database },
  { id: "oversight", num: "06", title: "Human Review & Monitoring", description: "Make approvals, exception queues, audit trails, and workflow health visible to the people responsible.", icon: ShieldCheck },
];

const valueStages = [
  { num: "01", title: "Manual Work", desc: "Repetitive admin tasks absorb hours that small teams need for customers and growth." },
  { num: "02", title: "Disconnected Tools", desc: "Rekeying information between email, spreadsheets, CRM, and ERP creates delays and mistakes." },
  { num: "03", title: "Unstructured Inputs", desc: "Documents, requests, and messages arrive in formats that are slow to process consistently." },
  { num: "04", title: "Hidden Exceptions", desc: "Work stalls when approvals, missing data, or unusual cases have no clear path or owner." },
  { num: "05", title: "Intelligent Workflows", desc: "AI handles routine steps, connects systems, and routes decisions to people when needed." },
];

const deliveryStages = [
  { num: "01", title: "Discover", description: "Map the current workflow, handoffs, repetitive work, exceptions, and the outcome that matters." },
  { num: "02", title: "Design", description: "Choose automation rules, AI tasks, system connections, approvals, and safe failure paths." },
  { num: "03", title: "Build & Integrate", description: "Connect business apps and data, then validate the workflow with real-world scenarios." },
  { num: "04", title: "Deploy & Improve", description: "Launch with monitoring, measure time and error reduction, and refine as operations evolve." },
];

const benefits = [
  { num: "01", metric: "Less", metricLabel: "repetitive admin", title: "More Employee Capacity", description: "Automate recurring data entry, follow-ups, routing, and coordination so teams can focus on higher-value work." },
  { num: "02", metric: "Faster", metricLabel: "process completion", title: "Quicker Operations", description: "Move information between people and systems without waiting on manual handoffs and rekeying." },
  { num: "03", metric: "Fewer", metricLabel: "manual errors", title: "Consistent Processing", description: "Validate inputs and apply repeatable steps to reduce avoidable mistakes in routine business processes." },
  { num: "04", metric: "Visible", metricLabel: "workflow status", title: "Clear Ownership", description: "Track progress, exceptions, approvals, and outcomes across automated processes in one traceable flow." },
  { num: "05", metric: "Connected", metricLabel: "business systems", title: "Joined-Up Operations", description: "Coordinate CRM, ERP, email, documents, and reporting tools while preserving the systems teams rely on." },
  { num: "06", metric: "Human-led", metricLabel: "critical decisions", title: "Practical AI Oversight", description: "Route uncertain or sensitive decisions for review, with clear checkpoints before consequential actions." },
];

const faqData = [
  { q: "What is AI automation?", a: "AI automation combines workflow logic, AI capabilities, and software integrations to handle repeatable business processes. It can interpret emails and documents, classify requests, move data between systems, and route exceptions for human review." },
  { q: "What workflows can Velnix automate for a small business?", a: "Common starting points include lead and customer intake, CRM updates, invoice and document handling, email triage, appointment or task routing, spreadsheet consolidation, reporting, and internal approvals. We prioritize workflows based on effort, volume, risk, and measurable value." },
  { q: "Can automation connect our CRM, ERP, email, and spreadsheets?", a: "Yes. We connect the systems your workflow depends on using available APIs and integration methods. We map the data flow, permissions, and error handling so updates are traceable and failures can be reviewed." },
  { q: "Where does AI fit, and when does a person approve the work?", a: "AI is useful for tasks such as extracting information, classifying requests, summarizing context, and preparing a recommended action. Approval gates can be added for uncertain cases, financial actions, customer commitments, or any step your team wants to control." },
  { q: "How do you monitor automation reliability?", a: "We build in run status, error logging, alerts, exception queues, and reviewable activity records. Workflows are tested against routine and edge cases, then monitored after launch so failures are visible and improvements can be made." },
  { q: "How long does AI automation implementation take?", a: "A focused workflow can often be mapped and prototyped within a few weeks. Delivery time depends on system access, data quality, workflow complexity, approval needs, and the number of integrations involved." },
];

const AIAutonomous: React.FC = () => {
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const shouldReduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateScrollProgress = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const traveled = Math.max(0, -bounds.top);
      const range = Math.max(1, bounds.height - window.innerHeight);
      hero.style.setProperty("--hero-scan-progress", `${Math.min(1, traveled / range) * 500}%`);
    };
    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollProgress();
      });
    };
    updateScrollProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased font-sans selection:bg-[#B6FF00] selection:text-black" style={{ background: C.black, color: C.white }}>
      <Navbar isDark={true} />
      <style>{`@keyframes velnix-shimmer { from { transform: translateX(-50%); } to { transform: translateX(50%); } }`}</style>

      <section id="hero" ref={heroRef} className="relative isolate w-full overflow-hidden" style={{ background: C.black }} aria-label="Velnix AI Automation hero section">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)", filter: "blur(10px)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="w-full flex flex-col items-start text-left">
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease }} className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />AI Automation for SMBs</motion.div>
              <motion.h1 initial={shouldReduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65, ease }} className="mb-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">Turn Manual Work Into <span style={{ color: C.lime }}>Intelligent Workflows.</span></motion.h1>
              <motion.p initial={shouldReduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.65, ease }} style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: C.wa(0.72), lineHeight: 1.75, maxWidth: "56ch", marginBottom: "2.5rem", fontWeight: 400 }}>Velnix helps small and midsize businesses automate internal workflows with AI, connecting everyday tools and reducing repetitive work without losing human oversight.</motion.p>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.55, ease }} className="flex flex-wrap items-center gap-4 mb-6">
                <Link to="/contact" className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300" style={{ background: C.lime, color: C.black, fontSize: "0.9rem", padding: "0.85rem 1.75rem", textDecoration: "none", border: `1px solid ${C.la(0.5)}`, boxShadow: `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`, lineHeight: 1 }} onMouseEnter={event => { event.currentTarget.style.background = C.green; event.currentTarget.style.boxShadow = `0 0 0 3px ${C.la(0.2)}, 0 12px 36px ${C.la(0.5)}`; }} onMouseLeave={event => { event.currentTarget.style.background = C.lime; event.currentTarget.style.boxShadow = `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`; }}>
                  <span aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ width: "200%", left: "-50%", background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)", animation: "velnix-shimmer 2.8s linear infinite", willChange: "transform" }} /><span className="relative z-10">Automate a Workflow</span><ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <a href="#capabilities" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300" style={{ fontSize: "0.9rem", fontWeight: 700, color: C.white, borderColor: C.wa(0.25), background: C.wa(0.04), textDecoration: "none" }} onMouseEnter={event => { event.currentTarget.style.borderColor = C.lime; event.currentTarget.style.color = C.lime; event.currentTarget.style.background = C.la(0.08); }} onMouseLeave={event => { event.currentTarget.style.borderColor = C.wa(0.25); event.currentTarget.style.color = C.white; event.currentTarget.style.background = C.wa(0.04); }}>Explore Automation<ArrowRight size={15} /></a>
              </motion.div>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.55, ease }} className="w-full flex items-center gap-6 sm:gap-10 pt-6" style={{ borderTop: `1px solid ${C.wa(0.08)}` }}>
                <div className="flex flex-col items-start"><span style={{ fontSize: "1.75rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Less</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>Repetitive Admin</span></div><div style={{ width: 1, height: 36, background: C.wa(0.1) }} /><div className="flex flex-col items-start"><span style={{ fontSize: "1.75rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Fewer</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>Manual Errors</span></div><div style={{ width: 1, height: 36, background: C.wa(0.1) }} /><div className="flex flex-col items-start"><span style={{ fontSize: "1.75rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>More</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>Team Capacity</span></div>
              </motion.div>
            </div>
            <motion.div className="relative flex items-center justify-center" initial={shouldReduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}><div className="relative"><img src="/image/Servies/service-page image-hero.png" alt="AI-powered workflow automation" className="w-full max-w-2xl" /></div></motion.div>
          </div>
        </div>
      </section>

      <motion.div initial={shouldReduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: 0.15, ease }} className="relative mx-auto w-full border-y border-[#050505]/20 bg-[#B6FF00] px-6 py-10 text-[#050505] sm:px-10 sm:py-12 lg:px-16">
        <div className="relative w-full grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0 max-w-7xl mx-auto">{IMPACT_STATS.map(({ number, label }, index) => <div key={label} className="relative flex flex-col items-center px-3 text-center sm:px-5">{index > 0 && <div className="absolute left-0 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-[#050505]/20 sm:block" />}<div className="text-3xl font-black leading-none tracking-[-0.04em] text-[#050505] sm:text-4xl"><AnimatedImpactNumber number={number} /></div><p className="mx-auto mt-4 max-w-[15ch] text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#050505]/65">{label}</p></div>)}</div>
      </motion.div>

      <main className="flex-grow relative z-10 pt-14 pb-0 sm:pt-18">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-8 sm:mb-20 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none" style={{ background: `radial-gradient(circle, ${C.la(0.12)} 0%, transparent 70%)` }} aria-hidden="true" />
            <div className="relative z-10 w-full py-4 sm:py-8 lg:py-10"><div className="relative z-10">
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }} className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />THE BUSINESS CASE FOR AUTOMATION</motion.div>
              <div className="mb-10"><motion.h2 initial={shouldReduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1, ease }} className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">Manual Work to <span style={{ color: C.lime }}>Intelligent Operations.</span></motion.h2><motion.p initial={shouldReduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="mt-4 max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">Start with a real operational bottleneck, then connect AI, people, and business software into a workflow that can be measured and improved.</motion.p></div>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease }} className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-0 sm:pt-2">
                <div className="absolute left-[4%] right-[4%] top-[2.75rem] hidden h-[2px] sm:block" style={{ background: `linear-gradient(90deg, ${C.la(0.45)}, ${C.lime}, ${C.la(0.45)})` }} aria-hidden="true" />
                <motion.div initial={{ left: "0%" }} animate={shouldReduce ? { left: "50%" } : { left: ["0%", "25%", "50%", "75%", "100%"] }} transition={shouldReduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "linear", times: [0, 0.2, 0.4, 0.6, 1] }} onUpdate={({ left }) => { const progress = Number.parseFloat(String(left)) / 100; const nextStep = progress >= 0.75 ? 4 : progress >= 0.5 ? 3 : progress >= 0.25 ? 2 : 0; setActiveTimelineStep(current => current === nextStep ? current : nextStep); }} className="pointer-events-none absolute top-[calc(2.75rem-4px)] z-10 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#B6FF00] shadow-[0_0_14px_rgba(182,255,0,0.85)] sm:block" style={{ left: "4%" }} aria-hidden="true" />
                {valueStages.map(({ num, title, desc }, index) => <motion.div key={num} initial={shouldReduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 + index * 0.08, ease }} className="group relative z-10 flex min-h-[188px] flex-col items-center text-center sm:px-3" onMouseEnter={event => { const circle = event.currentTarget.querySelector("[data-step-circle]") as HTMLElement | null; if (circle) { circle.style.borderColor = C.lime; circle.style.boxShadow = `0 0 24px ${C.la(0.3)}`; } }} onMouseLeave={event => { const circle = event.currentTarget.querySelector("[data-step-circle]") as HTMLElement | null; if (circle) { const active = circle.dataset.active === "true"; circle.style.borderColor = active ? C.lime : C.la(0.5); circle.style.boxShadow = active ? `0 0 20px ${C.la(0.22)}, inset 0 0 0 5px ${C.wa(0.025)}` : "none"; } }}><div data-step-circle data-active={activeTimelineStep === index ? "true" : "false"} className={`mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border font-mono text-xs font-bold tracking-[0.16em] transition-all duration-300 ${activeTimelineStep === index ? "text-[#050505]" : "text-[#B6FF00]"}`} style={{ borderColor: activeTimelineStep === index ? C.lime : C.la(0.5), background: activeTimelineStep === index ? C.lime : C.black, boxShadow: activeTimelineStep === index ? `0 0 20px ${C.la(0.3)}, inset 0 0 0 5px ${C.wa(0.08)}` : `inset 0 0 0 5px ${C.wa(0.025)}` }}>{num}</div><h3 className={`mb-3 text-xl font-bold tracking-tight transition-colors duration-300 ${activeTimelineStep === index ? "text-[#B6FF00]" : "text-white group-hover:text-[#B6FF00]"}`}>{title}</h3><p className="mx-auto max-w-[22ch] text-[13px] leading-6 font-light text-white/55">{desc}</p></motion.div>)}
              </motion.div>
            </div></div>
          </section>

          <section id="capabilities" className="mb-6 sm:mb-12 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6"><div><div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />WHAT WE AUTOMATE</div><h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight mb-4">Intelligent Workflows for <span style={{ color: C.lime }}>Everyday Operations.</span></h2><p className="max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">Practical AI automation for SMB teams: remove manual handoffs, connect core tools, and keep people in control of important decisions.</p></div></div>
            <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">{automationCapabilities.map((capability, index) => { const Icon = capability.icon; return <motion.div key={capability.id} initial={shouldReduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.08, ease }} className="group relative flex min-h-[230px] flex-col border-b border-r border-white/10 bg-[#111111]/80 p-5 transition-colors duration-300 hover:bg-[#181818] sm:min-h-[250px] sm:p-6"><div className="mb-5 flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#B6FF00] text-[#B6FF00] transition-colors group-hover:bg-[#B6FF00] group-hover:text-[#050505]"><Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></div><span className="font-mono text-xs font-semibold tracking-[0.16em] text-white/35">{capability.num}</span></div><h3 className="mb-2 font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{capability.title}</h3><p className="text-sm leading-6 text-white/60">{capability.description}</p></motion.div>; })}</div>
          </section>
          <section className="mb-8 sm:mb-20"><Industries /></section>
          <section className="mb-8 sm:mb-20"><EngagementModels /></section>

          <section className="relative mb-12 overflow-hidden bg-[#050505] py-12 font-display sm:mb-16 sm:py-16 lg:mb-20 lg:py-20"><div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="mb-6 text-left lg:mb-8"><div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]"><span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />PROCESS</div><h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">Our Automation <span className="text-[#B6FF00]">Delivery Steps.</span></h2><p className="mt-4 max-w-xl text-left text-lg leading-8 text-white/65 sm:text-xl">From workflow discovery to monitored operations, each stage targets a practical outcome and a reliable handoff.</p></div><div>{deliveryStages.map((step, index) => <motion.div key={step.num} initial={shouldReduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08, ease }} className="group border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:py-9"><div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_2rem] lg:items-center lg:gap-8"><span className="font-mono text-lg font-bold text-[#B6FF00]">{step.num}</span><h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{step.title}</h3><p className="max-w-2xl text-sm leading-6 text-white/65 sm:text-base lg:text-left">{step.description}</p><div className="hidden items-center justify-end lg:flex"><ArrowRight className="h-5 w-5 text-[#B6FF00] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} aria-hidden="true" /></div></div></motion.div>)}</div></div></section>
        </div>

        <PortfolioSection />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-8 sm:mb-20"><Testimonials /></section>
          <section className="mb-8 sm:mb-20"><TechnologyStack /></section>
          <section className="relative mb-20 overflow-hidden py-10 sm:mb-28 sm:py-12"><div className="relative z-10"><div className="mb-14 sm:mb-18"><div className="mb-4 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />AUTOMATION OUTCOMES</div><h2 className="mb-4 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">The Business Value of <span style={{ color: C.lime }}>Connected Automation</span></h2><p className="max-w-2xl text-sm sm:text-base leading-8" style={{ color: C.wa(0.64) }}>Automation should give small business teams measurable time back, reduce avoidable errors, and make work easier to follow.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl">{benefits.map(benefit => <div key={benefit.num} className="group relative flex flex-col p-7 sm:p-8 border border-white/10 transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_0_40px_rgba(182,255,0,0.1)] hover:-translate-y-1.5 overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.wa(0.04)} 0%, ${C.wa(0.02)} 100%)`, borderRadius: 0 }}><div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /><span className="absolute top-5 right-6 text-[2.8rem] font-black leading-none select-none pointer-events-none" style={{ color: C.wa(0.04) }} aria-hidden="true">{benefit.num}</span><h3 className="text-base sm:text-lg font-bold tracking-[-0.04em] text-white mb-2 group-hover:text-[#B6FF00] transition-colors duration-200">{benefit.title}</h3><p className="text-sm leading-6 mb-6 flex-1" style={{ color: C.wa(0.6) }}>{benefit.description}</p><div className="flex items-baseline gap-2 pt-4 border-t border-white/[0.07]"><span className="text-xl font-black tracking-tight" style={{ color: C.lime }}>{benefit.metric}</span><span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: C.wa(0.42) }}>{benefit.metricLabel}</span></div></div>)}</div></div></section>
          <section className="mb-8 sm:mb-20"><LatestBlogs /></section>
          <FAQ items={faqData.map(({ q, a }, index) => ({ id: `ai-automation-faq-${index + 1}`, question: q, answer: a }))} />
        </div>
        <CTAExamples className="!pb-8 sm:!pb-10" />
      </main>
      <Footer />
    </div>
  );
};

export default AIAutonomous;
