import { useState } from "react";
import {
  ArrowRight,
  Banknote,
  Bot,
  BriefcaseBusiness,
  Database,
  Fingerprint,
  Landmark,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EngagementModels from "../components/EngagementModels";
import { useReducedMotion } from "@/hooks/useAnimations";
import { ImpactStatsBanner } from "../components/OriginStory";
import { TechnologyStack } from "../components/TechnologyStack";
import PortfolioSection from "../components/PortfolioSection";
import Testimonials from "../components/Testimonials";
import LatestBlogs from "../components/LatestBlogs";
import CTA from "../components/ui/CTA";

const C = {
  black: '#050505',
  white: '#FFFFFF',
  lime: '#B6FF00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

const fintechCapabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline onboarding, approvals, servicing, and exception handling with AI-driven automation across finance operations.",
  },
  {
    icon: MessageCircle,
    title: "Customer Support Assistants",
    description: "Handle routine customer questions, document requests, and account guidance without overwhelming support teams.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Fraud Intelligence",
    description: "Surface suspicious transaction patterns, unusual behaviors, and review paths with clearer operational signals.",
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Unify customer, operational, and transaction data to improve visibility and decision support across product teams.",
  },
  {
    icon: Fingerprint,
    title: "KYC & Identity Workflows",
    description: "Speed up review and verification tasks while keeping compliance review, audit trails, and human oversight in place.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Product Insights",
    description: "Use applied AI to find trends in customer behavior, conversion signals, and product opportunities with more clarity.",
  },
];

const fintechWorkflow = [
  {
    num: "01",
    title: "Assess",
    description: "Map the financial journeys, risk controls, and operational bottlenecks that matter most for the business.",
  },
  {
    num: "02",
    title: "Design",
    description: "Define secure user flows, decision points, compliance boundaries, and measurable success criteria.",
  },
  {
    num: "03",
    title: "Integrate",
    description: "Connect the right data sources, banking rails, and internal systems with safe and auditable interfaces.",
  },
  {
    num: "04",
    title: "Model",
    description: "Train or configure AI where it adds the most value, from fraud analytics to support and operations automation.",
  },
  {
    num: "05",
    title: "Deploy",
    description: "Pilot in a controlled environment, validate outcomes, and prepare the team for scale with governance in place.",
  },
  {
    num: "06",
    title: "Operate",
    description: "Monitor quality, exceptions, and risk signals to keep improving without losing trust or compliance control.",
  },
];

const fintechAIBenefits = [
  {
    icon: TrendingUp,
    title: "Faster Decisions",
    description: "Reduce the time it takes to review, route, and act on customer, payment, and operational signals.",
  },
  {
    icon: Bot,
    title: "Smarter Support",
    description: "Support customers with fast answers while routing edge cases to people when judgment, approval, or context is needed.",
  },
  {
    icon: ShieldCheck,
    title: "Better Risk Controls",
    description: "Improve the visibility of suspicious patterns and operational exceptions before they become larger issues.",
  },
  {
    icon: Banknote,
    title: "Operational Efficiency",
    description: "Automate repetitive finance work so teams can focus on service quality, product growth, and customer outcomes.",
  },
  {
    icon: LockKeyhole,
    title: "Trust and Governance",
    description: "Design AI around access limits, explainability, and clearly defined oversight so teams stay in control.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Scalable Growth",
    description: "Increase throughput across products and customer journeys without introducing extra friction in the operating model.",
  },
];

const faqData = [
  { id: 1, question: "Can AI help with fintech compliance and auditability?", answer: "Yes. We design systems with human review paths, auditable actions, and clear boundaries so AI supports operations without hiding decision logic." },
  { id: 2, question: "Do you work with banks, brokers, or startups?", answer: "Yes. We build for both regulated institutions and scaling fintech products, adapting the system to your processes, risk model, and customer expectations." },
  { id: 3, question: "Can this integrate with existing payment or core platforms?", answer: "Most projects connect through APIs, event-based integrations, or middleware so teams can keep stable systems while automating points of friction." },
  { id: 4, question: "How do you handle fraud and security reviews?", answer: "We start by clarifying your risk rules, operational thresholds, and review process so the system is practical for your team and your environment." },
  { id: 5, question: "How long does a first fintech engagement take?", answer: "A focused pilot can often be scoped in weeks, with production rollout happening after team feedback, monitoring, and policy checks." },
];

const footerBg = `radial-gradient(ellipse 52% 74% at 4% 44%, ${C.ga(0.22)} 0%, ${C.ga(0.07)} 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, ${C.la(0.12)} 0%, ${C.ga(0.035)} 42%, transparent 76%), ${C.black}`;

const Hero = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative isolate w-full overflow-hidden font-display text-white" style={{ background: footerBg }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.25)}, transparent)` }} />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.1)} 0%, transparent 70%)`, filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full" style={{ background: `radial-gradient(circle, ${C.ga(0.1)} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-[5.3rem] pt-[11.1rem] sm:px-6 sm:pb-[6.6rem] sm:pt-[12.7rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:gap-20 lg:px-8 lg:pb-[9.25rem] lg:pt-[14.25rem] xl:pb-[10.55rem]">
        <div className="max-w-2xl">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
            style={{ color: C.lime }}
          >
            <span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />
            AI Development Fintech Services
          </motion.div>

          <motion.h1
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease }}
            className="mb-5 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
            style={{ WebkitFontSmoothing: 'antialiased' }}
          >
            Smarter Finance Systems, <br /><span style={{ color: C.lime }}>Built for Trust</span>
          </motion.h1>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65, ease }}
            className="mb-10 max-w-xl text-base font-normal leading-8 text-white/70 sm:text-lg"
          >
            AI systems for lending, payments, onboarding, fraud operations, and customer experience — designed to move faster without losing control.
          </motion.p>

          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease }}
            className="mb-6 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B6FF00] bg-[#B6FF00] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#050505] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(182,255,0,0.25)]"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
            <a
              href="https://calendar.app.google/F63aBoA5vxJdtihj7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#B6FF00]/60 hover:text-[#B6FF00]"
            >
              Talk to an Expert
            </a>
          </motion.div>

        </div>

        <motion.div
          className="relative flex items-center justify-center lg:translate-y-2 lg:scale-[1.04]"
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease }}
        >
          <img
            src="/image/Industries-Img/fintech.png"
            alt="Fintech AI technology"
            className="relative z-10 h-auto w-full max-w-md object-contain brightness-110 contrast-105 drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.02] sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

const FintechCapabilities = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 font-display sm:px-6 lg:px-8" style={{ background: `radial-gradient(ellipse 60% 70% at 96% 10%, ${C.la(0.13)} 0%, ${C.ga(0.04)} 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, ${C.ga(0.2)} 0%, ${C.ga(0.07)} 40%, transparent 76%), ${C.black}` }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.15)}, transparent)` }} />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.06)} 0%, transparent 70%)`, filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full" style={{ background: `radial-gradient(circle, ${C.ga(0.05)} 0%, transparent 70%)`, filter: 'blur(90px)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
            className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
            style={{ color: C.lime }}
          >
            <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
            Built for Finance
          </motion.div>

          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
            className="mb-4 max-w-[18ch] font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
          >
            AI-Powered <span style={{ color: C.lime }}>Capabilities</span>
          </motion.h2>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
            className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
          >
            Connected capabilities for product teams, customer journeys, risk operations, and the systems financial organizations rely on.
          </motion.p>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {fintechCapabilities.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.06, ease }}
                className="group relative flex flex-col overflow-hidden border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B6FF00]/50 hover:shadow-[0_0_40px_rgba(182,255,0,0.1)] sm:p-7"
                style={{ background: `linear-gradient(135deg, ${C.wa(0.04)} 0%, ${C.wa(0.02)} 100%)` }}
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#B6FF00]/30 bg-[#B6FF00]/[0.04] text-[#B6FF00] transition-colors duration-300 group-hover:bg-[#B6FF00] group-hover:text-[#050505]">
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm font-bold tracking-[0.15em] text-white/35" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-bold tracking-[-0.04em] text-white transition-colors duration-200 group-hover:text-[#B6FF00] sm:text-lg">
                  {service.title}
                </h3>
                <p className="max-w-[42ch] flex-1 text-sm leading-6 text-white/60 sm:text-base">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DevelopmentProcess = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 font-display sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
            className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
            style={{ color: C.lime }}
          >
            <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
            Execution Roadmap
          </motion.div>

          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
            className="mb-4 max-w-[18ch] font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
          >
            Our AI <span style={{ color: C.lime }}>Process</span>
          </motion.h2>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
            className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
          >
            A focused path from strategy to launch for modern financial systems and AI workflows.
          </motion.p>
        </div>

        <ol className="border-t border-white/10">
          {fintechWorkflow.map((item, index) => (
            <motion.li
              key={item.num}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.05, ease }}
              className="group grid grid-cols-[40px_minmax(0,1fr)_24px] gap-x-4 gap-y-2 border-b border-white/10 py-5 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[64px_minmax(220px,1fr)_minmax(0,1.35fr)_24px] sm:items-center sm:gap-x-6 sm:py-6 lg:gap-x-8"
            >
              <span className="row-span-2 pt-1 font-mono text-lg font-bold tracking-tight text-[#B6FF00] sm:row-span-1 sm:pt-0">
                {item.num}
              </span>
              <h3 className="text-xl font-bold tracking-[-0.04em] text-white transition-colors duration-200 group-hover:text-[#B6FF00] sm:text-2xl">
                {item.title}
              </h3>
              <p className="col-start-2 row-start-2 max-w-2xl text-sm leading-6 text-white/65 sm:col-start-3 sm:row-start-1 sm:text-base">
                {item.description}
              </p>
              <ArrowRight
                className="col-start-3 row-start-1 self-center justify-self-end text-[#B6FF00] transition-transform duration-300 group-hover:translate-x-1 sm:col-start-4"
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const AIBenefitsFintech = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section id="ai-benefits" className="relative overflow-hidden px-4 font-display sm:px-6 lg:px-8" style={{ background: `radial-gradient(ellipse 60% 70% at 96% 10%, ${C.la(0.13)} 0%, ${C.ga(0.04)} 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, ${C.ga(0.2)} 0%, ${C.ga(0.07)} 40%, transparent 76%), ${C.black}` }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.15)}, transparent)` }} />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.06)} 0%, transparent 70%)`, filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full" style={{ background: `radial-gradient(circle, ${C.ga(0.05)} 0%, transparent 70%)`, filter: 'blur(90px)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
            className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
            style={{ color: C.lime }}
          >
            <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
            Why AI Changes Everything
          </motion.div>

          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
            className="mb-4 max-w-[18ch] font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
          >
            AI Benefits for <span style={{ color: C.lime }}>Fintech</span>
          </motion.h2>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
            className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
          >
            Practical capabilities built to improve trust, operational speed, and customer experience across financial products.
          </motion.p>
        </div>

        <div className="grid max-w-6xl gap-0 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
          {fintechAIBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.05, ease }}
                className="group relative border-t border-white/[0.08] py-5 transition-colors duration-300 hover:bg-white/[0.02] sm:py-6"
                style={{ borderTopColor: index === 0 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border text-lg font-black"
                    style={{
                      color: C.lime,
                      borderColor: 'rgba(182,255,0,0.22)',
                      background: 'rgba(182,255,0,0.04)',
                    }}
                  >
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <h3 className="text-lg font-bold tracking-[-0.04em] text-white transition-colors duration-200 group-hover:text-[#B6FF00] sm:text-xl">
                        {benefit.title}
                      </h3>
                      <span className="font-mono text-xs font-bold tracking-[0.2em] text-white/35" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden py-16 font-display antialiased sm:py-20 lg:py-24" style={{ background: `radial-gradient(ellipse 52% 74% at 4% 44%, ${C.ga(0.16)} 0%, ${C.ga(0.05)} 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, ${C.la(0.08)} 0%, ${C.ga(0.025)} 42%, transparent 76%), ${C.black}`, color: C.white }}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full blur-[160px]" style={{ background: C.la(0.035) }} />
        <div className="absolute left-1/4 top-1/2 rounded-full blur-[140px]" style={{ width: 480, height: 480, background: C.ga(0.02) }} />
        <div className="absolute bottom-0 right-1/5 rounded-full blur-[150px]" style={{ width: 420, height: 420, background: C.la(0.022) }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
              style={{ color: C.lime }}
            >
              <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
              Common Questions
            </motion.div>

            <motion.h2
              initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
            >
              Thoughtful Answers About <span style={{ color: C.lime }}>Fintech Technology</span>
            </motion.h2>

            <motion.p
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-sm leading-7 sm:text-base"
              style={{ color: C.wa(0.64) }}
            >
              Learn how we approach finance workflows, data protection, customer experience, and the operational controls behind AI-enabled systems.
            </motion.p>
          </div>

          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="overflow-hidden border-b border-white/[0.08] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left transition-colors duration-300 hover:text-[#B6FF00]"
                    aria-expanded={isOpen}
                    style={{ background: 'none', border: 'none' }}
                  >
                    <h3 className="text-base font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-lg">
                      {item.question}
                    </h3>

                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-white/60 transition-all duration-300 group-hover:text-[#B6FF00]"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={shouldReduce ? { duration: 0 } : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4">
                      <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Fintech = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased font-sans selection:bg-[#B6FF00] selection:text-black text-white [&>section:not(:first-of-type)]:!py-8 sm:[&>section:not(:first-of-type)]:!py-10 lg:[&>section:not(:first-of-type)]:!py-12" style={{ background: C.black, color: C.white }}>
      <Navbar />
      <Hero />
      <FintechCapabilities />
      <DevelopmentProcess />
      <AIBenefitsFintech />
      <EngagementModels />
      <ImpactStatsBanner flush />
      <TechnologyStack
        eyebrow="Tech Stack"
        heading="Built for Fintech Scale"
        subheading="The tools and platforms we use to design secure, connected financial systems and AI-driven workflows."
      />
      <PortfolioSection />
      <Testimonials />
      <LatestBlogs />
      <FAQ />
      <CTA
        eyebrow="Build better finance workflows"
        title="Create more connected systems for customers, operations, and risk teams."
        description="Tell us where financial workflows are slowing down, where risk or support work is repetitive, or where decision-making needs clearer signals. We’ll explore how AI fits into the right operating model."
        primaryLabel="Talk to Our Fintech Team"
        primaryHref="/contact"
      />
      <Footer />
    </div>
  );
};

export default Fintech;
