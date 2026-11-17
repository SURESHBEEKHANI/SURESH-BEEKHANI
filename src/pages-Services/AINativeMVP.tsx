import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView, useMotionValue, useReducedMotion as useFramerReducedMotion, useTransform } from "framer-motion";
import { Activity, ArrowRight, BarChart3, Database, GitBranch, TrendingUp, Users } from "lucide-react";
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

const capabilities = [
  { id: "product-discovery", num: "01", title: "AI Product Discovery", description: "Turn a promising idea into a validated problem, clear user journey, and focused MVP scope.", icon: TrendingUp },
  { id: "product-experience", num: "02", title: "Product UX & Prototyping", description: "Shape the core experience and test important flows before investing in a full build.", icon: Users },
  { id: "ai-architecture", num: "03", title: "AI-Native Architecture", description: "Choose the right models, tools, data flows, and application architecture for the product.", icon: GitBranch },
  { id: "ai-features", num: "04", title: "Useful AI Features", description: "Build copilots, retrieval, automation, and AI workflows around a real customer need.", icon: Activity },
  { id: "product-data", num: "05", title: "Data & Integrations", description: "Connect product data and services with secure, dependable integrations and clear boundaries.", icon: Database },
  { id: "mvp-launch", num: "06", title: "Launch-Ready MVP", description: "Deliver a tested first version with essential analytics, monitoring, and a path to iterate.", icon: BarChart3 },
];

const valueStages = [
  { num: "01", title: "A Real User Problem", desc: "Start with a customer need worth solving, not a feature looking for a use case." },
  { num: "02", title: "A Focused First Release", desc: "Prioritize the smallest product journey that can deliver and demonstrate value." },
  { num: "03", title: "AI in the Right Places", desc: "Use AI where it improves the experience, and conventional software where it is more reliable." },
  { num: "04", title: "A Testable Product", desc: "Validate usability, quality, safety, and performance against clear acceptance criteria." },
  { num: "05", title: "A Measured MVP", desc: "Launch with feedback and product signals that guide what to build next." },
];

const deliveryStages = [
  { num: "01", title: "Discover & Define", description: "Align on users, problem, value hypothesis, constraints, and measurable MVP success criteria." },
  { num: "02", title: "Design & Prototype", description: "Map the key journey, validate the experience, and decide where AI creates meaningful value." },
  { num: "03", title: "Build the AI-Native Product", description: "Develop the product foundation, AI capabilities, integrations, and essential safeguards." },
  { num: "04", title: "Test, Launch & Learn", description: "Verify core flows, release the MVP, monitor real usage, and prioritize the next iteration." },
];

const benefits = [
  { num: "01", metric: "Focused", metricLabel: "first release", title: "Less Time to Value", description: "Build the core experience users need first, instead of delaying launch for an oversized feature set." },
  { num: "02", metric: "Purposeful", metricLabel: "AI features", title: "AI That Solves a Need", description: "Integrate AI into the product where it improves a customer task or outcome measurably." },
  { num: "03", metric: "Testable", metricLabel: "assumptions", title: "Earlier Validation", description: "Use a real product experience to learn whether the problem, solution, and AI approach are right." },
  { num: "04", metric: "Designed", metricLabel: "to evolve", title: "A Strong Product Foundation", description: "Make practical architecture choices that support iteration without overbuilding for scale too early." },
  { num: "05", metric: "Visible", metricLabel: "product signals", title: "Evidence for What’s Next", description: "Capture useful feedback and usage insights to inform the next product decisions." },
  { num: "06", metric: "Human-led", metricLabel: "AI behavior", title: "Trustworthy AI UX", description: "Set clear expectations, review points, and fallback behavior for important AI-powered interactions." },
];

const faqData = [
  { q: "What is an AI-native MVP?", a: "An AI-native MVP is a focused first version of a product designed around a real user need, with AI integrated into the experience where it adds value. It is built to test the product hypothesis with users, not to ship every planned feature." },
  { q: "What can you build into an AI-native MVP?", a: "Depending on the product, the MVP may include an AI assistant, document or knowledge search, recommendations, content generation, workflow automation, or prediction features—along with the application, integrations, and user experience around them." },
  { q: "Do we need a finalized idea or technical specification?", a: "No. We can help clarify the target user and problem, assess feasibility, define a focused scope, and map a practical first release before development begins." },
  { q: "How do you decide if AI belongs in the product?", a: "We compare the user need with what AI can reliably do, identify risks and alternatives, and define how the feature will be evaluated. If a simpler product feature is a better fit, we recommend that instead." },
  { q: "How do you keep AI features reliable and safe?", a: "We define expected behavior, test representative scenarios, protect data, make limitations clear, and add review, fallback, or escalation paths appropriate to the feature's risk." },
  { q: "What happens after the MVP launches?", a: "We can help monitor usage and quality, learn from user feedback, prioritize improvements, and plan the next product stage based on evidence rather than assumptions." },
];

const AINativeMVP: React.FC = () => {
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

      <section id="hero" ref={heroRef} className="relative isolate w-full overflow-hidden" style={{ background: C.black }} aria-label="Velnix AI-native MVP development hero section">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)", filter: "blur(10px)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="w-full flex flex-col items-start text-left">
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease }} className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />AI-Native MVP Development</motion.div>
              <motion.h1 initial={shouldReduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65, ease }} className="mb-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">Turn Your AI Idea Into a <span style={{ color: C.lime }}>Product-Ready MVP.</span></motion.h1>
              <motion.p initial={shouldReduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.65, ease }} style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: C.wa(0.72), lineHeight: 1.75, maxWidth: "56ch", marginBottom: "2.5rem", fontWeight: 400 }}>We help you validate the product opportunity, build a focused AI-native experience, and launch a working MVP that real users can test.</motion.p>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.55, ease }} className="flex flex-wrap items-center gap-4 mb-6">
                <Link to="/contact" className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300" style={{ background: C.lime, color: C.black, fontSize: "0.9rem", padding: "0.85rem 1.75rem", textDecoration: "none", border: `1px solid ${C.la(0.5)}`, boxShadow: `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`, lineHeight: 1 }} onMouseEnter={event => { event.currentTarget.style.background = C.green; event.currentTarget.style.boxShadow = `0 0 0 3px ${C.la(0.2)}, 0 12px 36px ${C.la(0.5)}`; }} onMouseLeave={event => { event.currentTarget.style.background = C.lime; event.currentTarget.style.boxShadow = `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`; }}>
                  <span aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ width: "200%", left: "-50%", background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)", animation: "velnix-shimmer 2.8s linear infinite", willChange: "transform" }} /><span className="relative z-10">Build Your AI MVP</span><ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <a href="#capabilities" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300" style={{ fontSize: "0.9rem", fontWeight: 700, color: C.white, borderColor: C.wa(0.25), background: C.wa(0.04), textDecoration: "none" }} onMouseEnter={event => { event.currentTarget.style.borderColor = C.lime; event.currentTarget.style.color = C.lime; event.currentTarget.style.background = C.la(0.08); }} onMouseLeave={event => { event.currentTarget.style.borderColor = C.wa(0.25); event.currentTarget.style.color = C.white; event.currentTarget.style.background = C.wa(0.04); }}>Explore MVP Capabilities<ArrowRight size={15} /></a>
              </motion.div>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.55, ease }} className="w-full flex items-center gap-6 sm:gap-10 pt-6" style={{ borderTop: `1px solid ${C.wa(0.08)}` }}>
                <div className="flex flex-col items-start"><span style={{ fontSize: "1.75rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Validate</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>The Problem</span></div><div style={{ width: 1, height: 36, background: C.wa(0.1) }} /><div className="flex flex-col items-start"><span style={{ fontSize: "1.75rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Build</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>What Matters</span></div><div style={{ width: 1, height: 36, background: C.wa(0.1) }} /><div className="flex flex-col items-start"><span style={{ fontSize: "1.75rem", fontWeight: 800, color: C.lime, lineHeight: 1 }}>Launch</span><span style={{ fontSize: "0.7rem", color: C.wa(0.55), marginTop: 4, textTransform: "uppercase", fontWeight: 500 }}>Learn &amp; Iterate</span></div>
              </motion.div>
            </div>
            <motion.div className="relative flex items-center justify-center" initial={shouldReduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}><div className="relative"><img src="/image/Servies/service-page image-hero.png" alt="AI-native product MVP strategy, design, and engineering" className="w-full max-w-2xl" /></div></motion.div>
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
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }} className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />THE AI-NATIVE MVP ADVANTAGE</motion.div>
              <div className="mb-10"><motion.h2 initial={shouldReduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1, ease }} className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">From Product Idea to <span style={{ color: C.lime }}>Useful First Release.</span></motion.h2><motion.p initial={shouldReduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="mt-4 max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">An AI-native MVP connects a real customer problem to a focused product experience, with AI applied where it improves the outcome.</motion.p></div>
              <motion.div initial={shouldReduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease }} className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-0 sm:pt-2">
                <div className="absolute left-[4%] right-[4%] top-[2.75rem] hidden h-[2px] sm:block" style={{ background: `linear-gradient(90deg, ${C.la(0.45)}, ${C.lime}, ${C.la(0.45)})` }} aria-hidden="true" />
                <motion.div initial={{ left: "0%" }} animate={shouldReduce ? { left: "50%" } : { left: ["0%", "25%", "50%", "75%", "100%"] }} transition={shouldReduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "linear", times: [0, 0.2, 0.4, 0.6, 1] }} onUpdate={({ left }) => { const progress = Number.parseFloat(String(left)) / 100; const nextStep = progress >= 0.75 ? 4 : progress >= 0.5 ? 3 : progress >= 0.25 ? 2 : 0; setActiveTimelineStep(current => current === nextStep ? current : nextStep); }} className="pointer-events-none absolute top-[calc(2.75rem-4px)] z-10 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#B6FF00] shadow-[0_0_14px_rgba(182,255,0,0.85)] sm:block" style={{ left: "4%" }} aria-hidden="true" />
                {valueStages.map(({ num, title, desc }, index) => <motion.div key={num} initial={shouldReduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 + index * 0.08, ease }} className="group relative z-10 flex min-h-[188px] flex-col items-center text-center sm:px-3" onMouseEnter={event => { const circle = event.currentTarget.querySelector("[data-step-circle]") as HTMLElement | null; if (circle) { circle.style.borderColor = C.lime; circle.style.boxShadow = `0 0 24px ${C.la(0.3)}`; } }} onMouseLeave={event => { const circle = event.currentTarget.querySelector("[data-step-circle]") as HTMLElement | null; if (circle) { const active = circle.dataset.active === "true"; circle.style.borderColor = active ? C.lime : C.la(0.5); circle.style.boxShadow = active ? `0 0 20px ${C.la(0.22)}, inset 0 0 0 5px ${C.wa(0.025)}` : "none"; } }}><div data-step-circle data-active={activeTimelineStep === index ? "true" : "false"} className={`mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border font-mono text-xs font-bold tracking-[0.16em] transition-all duration-300 ${activeTimelineStep === index ? "text-[#050505]" : "text-[#B6FF00]"}`} style={{ borderColor: activeTimelineStep === index ? C.lime : C.la(0.5), background: activeTimelineStep === index ? C.lime : C.black, boxShadow: activeTimelineStep === index ? `0 0 20px ${C.la(0.3)}, inset 0 0 0 5px ${C.wa(0.08)}` : `inset 0 0 0 5px ${C.wa(0.025)}` }}>{num}</div><h3 className={`mb-3 text-xl font-bold tracking-tight transition-colors duration-300 ${activeTimelineStep === index ? "text-[#B6FF00]" : "text-white group-hover:text-[#B6FF00]"}`}>{title}</h3><p className="mx-auto max-w-[22ch] text-[13px] leading-6 font-light text-white/55">{desc}</p></motion.div>)}
              </motion.div>
            </div></div>
          </section>

          <section id="capabilities" className="mb-6 sm:mb-12 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6"><div><div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />WHAT WE BUILD</div><h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight mb-4">AI-Native MVP <span style={{ color: C.lime }}>From Idea to Launch.</span></h2><p className="max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">Strategy, product design, AI engineering, and launch support focused on the first version your users can put to work.</p></div></div>
            <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability, index) => { const Icon = capability.icon; return <motion.div key={capability.id} initial={shouldReduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.08, ease }} className="group relative flex min-h-[230px] flex-col border-b border-r border-white/10 bg-[#111111]/80 p-5 transition-colors duration-300 hover:bg-[#181818] sm:min-h-[250px] sm:p-6"><div className="mb-5 flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#B6FF00] text-[#B6FF00] transition-colors group-hover:bg-[#B6FF00] group-hover:text-[#050505]"><Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></div><span className="font-mono text-xs font-semibold tracking-[0.16em] text-white/35">{capability.num}</span></div><h3 className="mb-2 font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{capability.title}</h3><p className="text-sm leading-6 text-white/60">{capability.description}</p></motion.div>; })}</div>
          </section>
          <section className="mb-8 sm:mb-20"><Industries /></section>
          <section className="mb-8 sm:mb-20"><EngagementModels /></section>

          <section className="relative mb-12 overflow-hidden bg-[#050505] py-12 font-display sm:mb-16 sm:py-16 lg:mb-20 lg:py-20"><div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="mb-6 text-left lg:mb-8"><div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]"><span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />AI-NATIVE MVP DELIVERY</div><h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">A Clear Path from <span className="text-[#B6FF00]">Idea to MVP.</span></h2><p className="mt-4 max-w-xl text-left text-lg leading-8 text-white/65 sm:text-xl">A focused, collaborative process that turns an opportunity into a product users can try.</p></div><div>{deliveryStages.map((step, index) => <motion.div key={step.num} initial={shouldReduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08, ease }} className="group border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:py-9"><div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_2rem] lg:items-center lg:gap-8"><span className="font-mono text-lg font-bold text-[#B6FF00]">{step.num}</span><h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{step.title}</h3><p className="max-w-2xl text-sm leading-6 text-white/65 sm:text-base lg:text-left">{step.description}</p><div className="hidden items-center justify-end lg:flex"><ArrowRight className="h-5 w-5 text-[#B6FF00] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} aria-hidden="true" /></div></div></motion.div>)}</div></div></section>
        </div>

        <PortfolioSection />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-8 sm:mb-20"><Testimonials /></section>
          <section className="mb-8 sm:mb-20"><TechnologyStack /></section>
          <section className="relative mb-20 overflow-hidden py-10 sm:mb-28 sm:py-12"><div className="relative z-10"><div className="mb-14 sm:mb-18"><div className="mb-4 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}><span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />BUILT FOR PRODUCT LEARNING</div><h2 className="mb-4 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">Launch a Focused MVP. <span style={{ color: C.lime }}>Learn What to Build Next.</span></h2><p className="max-w-2xl text-sm sm:text-base leading-8" style={{ color: C.wa(0.64) }}>A successful MVP gives your team a usable product, meaningful user feedback, and a sound basis for the next product decision.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl">{benefits.map(benefit => <div key={benefit.num} className="group relative flex flex-col p-7 sm:p-8 border border-white/10 transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_0_40px_rgba(182,255,0,0.1)] hover:-translate-y-1.5 overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.wa(0.04)} 0%, ${C.wa(0.02)} 100%)`, borderRadius: 0 }}><div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /><span className="absolute top-5 right-6 text-[2.8rem] font-black leading-none select-none pointer-events-none" style={{ color: C.wa(0.04) }} aria-hidden="true">{benefit.num}</span><h3 className="text-base sm:text-lg font-bold tracking-[-0.04em] text-white mb-2 group-hover:text-[#B6FF00] transition-colors duration-200">{benefit.title}</h3><p className="text-sm leading-6 mb-6 flex-1" style={{ color: C.wa(0.6) }}>{benefit.description}</p><div className="flex items-baseline gap-2 pt-4 border-t border-white/[0.07]"><span className="text-xl font-black tracking-tight" style={{ color: C.lime }}>{benefit.metric}</span><span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: C.wa(0.42) }}>{benefit.metricLabel}</span></div></div>)}</div></div></section>
          <section className="mb-8 sm:mb-20"><LatestBlogs /></section>
          <FAQ items={faqData.map(({ q, a }, index) => ({ id: `ai-native-mvp-faq-${index + 1}`, question: q, answer: a }))} />
        </div>
        <CTAExamples className="!pb-8 sm:!pb-10" />
      </main>
      <Footer />
    </div>
  );
};

export default AINativeMVP;
