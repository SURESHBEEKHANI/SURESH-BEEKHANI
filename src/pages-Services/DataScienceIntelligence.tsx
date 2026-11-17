import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView, useMotionValue, useReducedMotion as useFramerReducedMotion, useTransform } from "framer-motion";
import { Activity, ArrowRight, Database, Eye, FileText, GitBranch, Layers } from "lucide-react";
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
    if (reduceMotion) { count.set(target); return; }
    const controls = animate(count, target, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [count, isInView, reduceMotion, target]);
  return <motion.span ref={ref} aria-label={number}>{display}</motion.span>;
};

const capabilities = [
  { id: "data-strategy", num: "01", title: "Data Strategy & Readiness", description: "Assess available data, define useful business questions, and establish clear metrics for analysis.", icon: Database },
  { id: "data-engineering", num: "02", title: "Data Engineering & Pipelines", description: "Connect, clean, and organize data from business systems into reliable analytical workflows.", icon: GitBranch },
  { id: "predictive-modeling", num: "03", title: "Predictive Modeling & Forecasting", description: "Use relevant historical patterns to forecast demand, identify risk, and inform planning.", icon: Activity },
  { id: "business-intelligence", num: "04", title: "Business Intelligence & Dashboards", description: "Bring trusted metrics and practical reporting into the tools teams use to monitor performance.", icon: Layers },
  { id: "document-intelligence", num: "05", title: "Document & Text Intelligence", description: "Extract, classify, and search information in documents and business content.", icon: FileText },
  { id: "visual-analytics", num: "06", title: "Computer Vision & Anomaly Detection", description: "Analyze images and visual data to surface patterns and exceptions for review.", icon: Eye },
];

const valueStages = [
  { num: "01", title: "Data in Silos", desc: "Business signals are spread across tools, databases, documents, and teams." },
  { num: "02", title: "Inconsistent Definitions", desc: "Different formats and metrics make it difficult to compare results with confidence." },
  { num: "03", title: "Manual Reporting", desc: "Teams spend time reconciling data and assembling reports instead of using the findings." },
  { num: "04", title: "Hidden Patterns", desc: "Trends, risks, and exceptions can be hard to identify through static reporting alone." },
  { num: "05", title: "Decision Intelligence", desc: "Prepared data, clear analytics, and validated models help turn signals into useful next steps." },
];

const deliveryStages = [
  { num: "01", title: "Define the Decision", description: "Clarify the business question, intended users, available data, constraints, and evaluation criteria." },
  { num: "02", title: "Prepare the Data", description: "Connect relevant sources, assess quality, and establish consistent definitions and access rules." },
  { num: "03", title: "Analyze & Validate", description: "Build analytics or models, test against representative data, and review limitations with stakeholders." },
  { num: "04", title: "Integrate & Improve", description: "Connect useful outputs to business workflows, monitor quality, and refine from operational feedback." },
];

const benefits = [
  { num: "01", metric: "Aligned", metricLabel: "business metrics", title: "Clearer Measurement", description: "Give teams shared definitions and reporting that supports consistent performance reviews." },
  { num: "02", metric: "Connected", metricLabel: "data workflows", title: "More Reliable Analysis", description: "Reduce fragmented preparation by organizing relevant sources into repeatable analytical workflows." },
  { num: "03", metric: "Predictive", metricLabel: "business signals", title: "Forward-Looking Insight", description: "Explore trends and forecasts to support planning, with assumptions made explicit." },
  { num: "04", metric: "Visible", metricLabel: "performance trends", title: "Useful Reporting", description: "Surface important measures and exceptions in dashboards designed around team decisions." },
  { num: "05", metric: "Validated", metricLabel: "analytical outputs", title: "Evidence-Based Decisions", description: "Evaluate analytics and models against representative data before relying on their outputs." },
  { num: "06", metric: "Governed", metricLabel: "data access", title: "Responsible Data Use", description: "Account for permissions, privacy, and review needs throughout the data lifecycle." },
];

const faqData = [
  { q: "What does Data Science & Intelligence include?", a: "It can include data strategy, engineering, analytics, business intelligence, predictive modeling, and AI techniques such as document or visual analysis. The right mix depends on the business question and available data." },
  { q: "How can data science support better business decisions?", a: "Clear metrics and reliable reporting help teams understand current performance. Predictive analysis can add forecasts or risk signals, which should be evaluated against the decision and data they are intended to support." },
  { q: "How is predictive analytics different from business intelligence?", a: "Business intelligence typically explains and monitors what has happened or is happening. Predictive analytics uses historical data and modeling to estimate possible future outcomes; both depend on relevant, well-understood data." },
  { q: "Do we need clean data before starting?", a: "Not necessarily. An initial assessment can identify source availability, quality issues, access requirements, and preparation work before a solution is scoped." },
  { q: "Can you analyze documents, text, and images?", a: "Yes. Depending on the use case, document and visual intelligence can extract or classify content and make it available to analytical workflows, with review for uncertain or high-impact results." },
  { q: "How do you evaluate model quality and reliability?", a: "We define representative evaluation data and measure results against the task's requirements. Testing considers data limitations, edge cases, ongoing monitoring, and how outputs affect the downstream workflow." },
  { q: "Can analytics connect to our existing applications?", a: "Yes. Reports, data pipelines, and model outputs can be connected to existing applications through available APIs and services. The integration plan accounts for data access, permissions, failure handling, and operational monitoring." },
];

const DataScienceIntelligence: React.FC = () => {
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
      frame = window.requestAnimationFrame(() => { frame = 0; updateScrollProgress(); });
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

      <section id="hero" ref={heroRef} className="relative isolate w-full overflow-hidden" style={{ background: C.black }} aria-label="Velnix Data Science and Intelligence hero section">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)", filter: "blur(10px)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="w-full flex flex-col items-start text-left">
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease }} className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />Data Science & Intelligence</motion.div>
              <motion.h1 initial={shouldReduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65, ease }} className="mb-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">Turn Business Data Into <span style={{ color: C.lime }}>Clearer Decisions.</span></motion.h1>
              <motion.p initial={shouldReduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.65, ease }} style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: C.wa(0.72), lineHeight: 1.75, maxWidth: "56ch", marginBottom: "2.5rem", fontWeight: 400 }}>We help teams connect and analyze business data—combining data engineering, analytics, predictive models, and AI-powered intelligence to support better decisions and useful workflows.</motion.p>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.55, ease }} className="flex flex-wrap items-center gap-4 mb-6">
                <Link to="/contact" className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300" style={{ background: C.lime, color: C.black, fontSize: "0.9rem", padding: "0.85rem 1.75rem", textDecoration: "none", border: `1px solid ${C.la(0.5)}`, boxShadow: `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`, lineHeight: 1 }} onMouseEnter={event => { event.currentTarget.style.background = C.green; event.currentTarget.style.boxShadow = `0 0 0 3px ${C.la(0.2)}, 0 12px 36px ${C.la(0.5)}`; }} onMouseLeave={event => { event.currentTarget.style.background = C.lime; event.currentTarget.style.boxShadow = `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`; }}>
                  <span aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ width: "200%", left: "-50%", background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)", animation: "velnix-shimmer 2.8s linear infinite", willChange: "transform" }} /><span className="relative z-10">Discuss Your Data Needs</span><ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <a href="#capabilities" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300" style={{ fontSize: "0.9rem", fontWeight: 700, color: C.white, borderColor: C.wa(0.25), background: C.wa(0.04), textDecoration: "none" }} onMouseEnter={event => { event.currentTarget.style.borderColor = C.lime; event.currentTarget.style.color = C.lime; event.currentTarget.style.background = C.la(0.08); }} onMouseLeave={event => { event.currentTarget.style.borderColor = C.wa(0.25); event.currentTarget.style.color = C.white; event.currentTarget.style.background = C.wa(0.04); }}>Explore Capabilities<ArrowRight size={15} /></a>
              </motion.div>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.55, ease }} className="w-full flex items-center gap-3 sm:gap-10 pt-6" style={{ borderTop: `1px solid ${C.wa(0.08)}` }}>
                <div className="flex flex-col items-start"><span style={{ fontSize: "1.5rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Analyze</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>Find Patterns</span></div><div style={{ width: 1, height: 36, background: C.wa(0.1) }} /><div className="flex flex-col items-start"><span style={{ fontSize: "1.5rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Predict</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>Plan Ahead</span></div><div style={{ width: 1, height: 36, background: C.wa(0.1) }} /><div className="flex flex-col items-start"><span style={{ fontSize: "1.5rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Decide</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>Guide Actions</span></div>
              </motion.div>
            </div>
            <motion.div className="relative flex items-center justify-center" initial={shouldReduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}><div className="relative"><img src="/image/Servies/service-page image-hero.png" alt="Data science and business intelligence" className="w-full max-w-2xl" /></div></motion.div>
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
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }} className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />FROM BUSINESS DATA TO DECISIONS</motion.div>
              <div className="mb-10"><motion.h2 initial={shouldReduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1, ease }} className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">Move from Fragmented Data to <span style={{ color: C.lime }}>Clearer Decisions.</span></motion.h2><motion.p initial={shouldReduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="mt-4 max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">Operational data is spread across tools, databases, and documents. Reliable analysis starts by connecting relevant sources, defining useful measures, and understanding the limits of the data.</motion.p></div>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease }} className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-0 sm:pt-2">
                <div className="absolute left-[4%] right-[4%] top-[2.75rem] hidden h-[2px] sm:block" style={{ background: `linear-gradient(90deg, ${C.la(0.45)}, ${C.lime}, ${C.la(0.45)})` }} aria-hidden="true" />
                <motion.div initial={{ left: "0%" }} animate={shouldReduce ? { left: "50%" } : { left: ["0%", "25%", "50%", "75%", "100%"] }} transition={shouldReduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "linear", times: [0, 0.2, 0.4, 0.6, 1] }} onUpdate={({ left }) => { const progress = Number.parseFloat(String(left)) / 100; const nextStep = progress >= 0.75 ? 4 : progress >= 0.5 ? 3 : progress >= 0.25 ? 2 : 0; setActiveTimelineStep(current => current === nextStep ? current : nextStep); }} className="pointer-events-none absolute top-[calc(2.75rem-4px)] z-10 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#B6FF00] shadow-[0_0_14px_rgba(182,255,0,0.85)] sm:block" style={{ left: "4%" }} aria-hidden="true" />
                {valueStages.map(({ num, title, desc }, index) => <motion.div key={num} initial={shouldReduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 + index * 0.08, ease }} className="group relative z-10 flex min-h-[188px] flex-col items-center text-center sm:px-3" onMouseEnter={event => { const circle = event.currentTarget.querySelector("[data-step-circle]") as HTMLElement | null; if (circle) { circle.style.borderColor = C.lime; circle.style.boxShadow = `0 0 24px ${C.la(0.3)}`; } }} onMouseLeave={event => { const circle = event.currentTarget.querySelector("[data-step-circle]") as HTMLElement | null; if (circle) { const active = circle.dataset.active === "true"; circle.style.borderColor = active ? C.lime : C.la(0.5); circle.style.boxShadow = active ? `0 0 20px ${C.la(0.22)}, inset 0 0 0 5px ${C.wa(0.025)}` : "none"; } }}><div data-step-circle data-active={activeTimelineStep === index ? "true" : "false"} className={`mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border font-mono text-xs font-bold tracking-[0.16em] transition-all duration-300 ${activeTimelineStep === index ? "text-[#050505]" : "text-[#B6FF00]"}`} style={{ borderColor: activeTimelineStep === index ? C.lime : C.la(0.5), background: activeTimelineStep === index ? C.lime : C.black, boxShadow: activeTimelineStep === index ? `0 0 20px ${C.la(0.3)}, inset 0 0 0 5px ${C.wa(0.08)}` : `inset 0 0 0 5px ${C.wa(0.025)}` }}>{num}</div><h3 className={`mb-3 text-xl font-bold tracking-tight transition-colors duration-300 ${activeTimelineStep === index ? "text-[#B6FF00]" : "text-white group-hover:text-[#B6FF00]"}`}>{title}</h3><p className="mx-auto max-w-[22ch] text-[13px] leading-6 font-light text-white/55">{desc}</p></motion.div>)}
              </motion.div>
            </div></div>
          </section>

          <section id="capabilities" className="mb-6 sm:mb-12 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6"><div><div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />WHAT WE BUILD</div><h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight mb-4">Data Science & <span style={{ color: C.lime }}>Intelligence Capabilities.</span></h2><p className="max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">From connected data pipelines to predictive models and intelligent document analysis, we build practical capabilities around the decisions your teams need to make.</p></div></div>
            <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability, index) => { const Icon = capability.icon; return <motion.div key={capability.id} initial={shouldReduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.08, ease }} className="group relative flex min-h-[230px] flex-col border-b border-r border-white/10 bg-[#111111]/80 p-5 transition-colors duration-300 hover:bg-[#181818] sm:min-h-[250px] sm:p-6"><div className="mb-5 flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#B6FF00] text-[#B6FF00] transition-colors group-hover:bg-[#B6FF00] group-hover:text-[#050505]"><Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></div><span className="font-mono text-xs font-semibold tracking-[0.16em] text-white/35">{capability.num}</span></div><h3 className="mb-2 font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{capability.title}</h3><p className="text-sm leading-6 text-white/60">{capability.description}</p></motion.div>; })}</div>
          </section>
          <section className="mb-8 sm:mb-20"><Industries /></section>
          <section className="mb-8 sm:mb-20"><EngagementModels /></section>

          <section className="relative mb-12 overflow-hidden bg-[#050505] py-12 font-display sm:mb-16 sm:py-16 lg:mb-20 lg:py-20"><div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="mb-6 text-left lg:mb-8"><div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]"><span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />PROCESS</div><h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">Our Data Science & Intelligence <span className="text-[#B6FF00]">Delivery Steps.</span></h2><p className="mt-4 max-w-xl text-left text-lg leading-8 text-white/65 sm:text-xl">We begin with the decision and data, validate analysis against the use case, and connect useful outputs to the right workflows.</p></div><div>{deliveryStages.map((step, index) => <motion.div key={step.num} initial={shouldReduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08, ease }} className="group border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:py-9"><div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_2rem] lg:items-center lg:gap-8"><span className="font-mono text-lg font-bold text-[#B6FF00]">{step.num}</span><h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{step.title}</h3><p className="max-w-2xl text-sm leading-6 text-white/65 sm:text-base lg:text-left">{step.description}</p><div className="hidden items-center justify-end lg:flex"><ArrowRight className="h-5 w-5 text-[#B6FF00] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} aria-hidden="true" /></div></div></motion.div>)}</div></div></section>
        </div>

        <PortfolioSection />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-8 sm:mb-20"><Testimonials /></section>
          <section className="mb-8 sm:mb-20"><TechnologyStack /></section>
          <section className="relative mb-20 overflow-hidden py-10 sm:mb-28 sm:py-12"><div className="relative z-10"><div className="mb-14 sm:mb-18"><div className="mb-4 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />BUSINESS OUTCOMES</div><h2 className="mb-4 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">Make Your Business Data <span style={{ color: C.lime }}>Work Harder.</span></h2><p className="max-w-2xl text-sm sm:text-base leading-8" style={{ color: C.wa(0.64) }}>Connected data, useful analytics, and carefully evaluated models can help teams understand performance, explore what may happen next, and act with better context.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl">{benefits.map(benefit => <div key={benefit.num} className="group relative flex flex-col p-7 sm:p-8 border border-white/10 transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_0_40px_rgba(182,255,0,0.1)] hover:-translate-y-1.5 overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.wa(0.04)} 0%, ${C.wa(0.02)} 100%)`, borderRadius: 0 }}><div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /><span className="absolute top-5 right-6 text-[2.8rem] font-black leading-none select-none pointer-events-none" style={{ color: C.wa(0.04) }} aria-hidden="true">{benefit.num}</span><h3 className="text-base sm:text-lg font-bold tracking-[-0.04em] text-white mb-2 group-hover:text-[#B6FF00] transition-colors duration-200">{benefit.title}</h3><p className="text-sm leading-6 mb-6 flex-1" style={{ color: C.wa(0.6) }}>{benefit.description}</p><div className="flex items-baseline gap-2 pt-4 border-t border-white/[0.07]"><span className="text-xl font-black tracking-tight" style={{ color: C.lime }}>{benefit.metric}</span><span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: C.wa(0.42) }}>{benefit.metricLabel}</span></div></div>)}</div></div></section>
          <section className="mb-8 sm:mb-20"><LatestBlogs /></section>
          <FAQ items={faqData.map(({ q, a }, index) => ({ id: `data-science-intelligence-faq-${index + 1}`, question: q, answer: a }))} />
        </div>
        <CTAExamples className="!pb-8 sm:!pb-10" />
      </main>
      <Footer />
    </div>
  );
};

export default DataScienceIntelligence;
