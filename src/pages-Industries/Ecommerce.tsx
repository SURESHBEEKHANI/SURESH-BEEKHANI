import { useState } from "react";
import { ArrowRight, Bot, Headset, PlugZap, ShoppingBag, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EngagementModels from "../components/EngagementModels";
import { ImpactStatsBanner } from "../components/OriginStory";
import { useReducedMotion } from "@/hooks/useAnimations";
import { TechnologyStack } from "../components/TechnologyStack";
import PortfolioSection from "../components/PortfolioSection";
import Testimonials from "../components/Testimonials";
import LatestBlogs from "../components/LatestBlogs";
import CTA from "../components/ui/CTA";

// ─── Footer Color Palette ─────────────────────────────────────────────
const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  green: '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    title: "Higher Conversion",
    metric: "",
    description: "Reduce friction across discovery, search, and checkout.",
  },
  {
    title: "Better Margin",
    metric: "",
    description: "Cut waste with smarter demand forecasting and inventory control.",
  },
  {
    title: "Better Experience",
    metric: "",
    description: "Deliver helpful guidance and personalized storefront journeys.",
  },
  {
    title: "Clearer Insight",
    metric: "",
    description: "Turn data into clear merchandising and demand signals.",
  },
  {
    title: "Leaner Ops",
    metric: "",
    description: "Automate repetitive tasks and scale without added overhead.",
  },
  {
    title: "Works With Your Stack",
    metric: "",
    description: "Integrate with your current commerce ecosystem without disruption.",
  },
];

const ecommerceServices = [
  {
    icon: ShoppingBag,
    title: "Ecommerce Build",
    description: "Conversion-focused platforms with AI search and personalization.",
  },
  {
    icon: Bot,
    title: "Shopping Agents",
    description: "AI agents that guide customers from discovery to purchase.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Automate orders, support, inventory, and internal operations.",
  },
  {
    icon: Sparkles,
    title: "Personalization",
    description: "Tailored recommendations, offers, and customer journeys.",
  },
  {
    icon: Headset,
    title: "Support",
    description: "AI-powered help for questions, updates, and returns.",
  },
  {
    icon: PlugZap,
    title: "Integrations",
    description: "Connect CRM, ERP, payments, and marketing data in one flow.",
  },
];

const developmentProcess = [
  {
    num: "01",
    title: "Discovery",
    description: "Define goals and AI opportunities.",
  },
  {
    num: "02",
    title: "Architecture",
    description: "Map systems, journeys, and data flow.",
  },
  {
    num: "03",
    title: "UX Design",
    description: "Design effective product journeys and storefronts.",
  },
  {
    num: "04",
    title: "Build",
    description: "Develop the platform, AI, and workflows.",
  },
  {
    num: "05",
    title: "Connect",
    description: "Link CRM, ERP, and sales systems.",
  },
  {
    num: "06",
    title: "Launch",
    description: "Test, deploy, monitor, and improve.",
  },
];


const faqData = [
  { id: 1, question: "Do you only work with large marketplaces?", answer: "No. We work with growing D2C brands, retailers, and marketplaces. The first build is scoped to the highest-friction part of the funnel." },
  { id: 2, question: "Can this connect to Shopify or a custom storefront?", answer: "Yes. We integrate with common commerce platforms, PIMs, ERPs, and custom stacks." },
  { id: 3, question: "How soon can recommendations or search improve?", answer: "If catalog and event data are available, a first recommendation or search improvement can be launched as a controlled experiment quickly." },
  { id: 4, question: "Will this replace our current support team?", answer: "It reduces repetitive tickets. Complex orders, exceptions, and VIP cases still go to people." },
  { id: 5, question: "How do you measure success?", answer: "We agree on conversion, AOV, ticket volume, forecast error, or return rate before build — then instrument those outcomes." },
];


// ─── Shared footer-style background ──────────────────────────────────
const footerBg = `radial-gradient(ellipse 52% 74% at 4% 44%, ${C.ga(0.22)} 0%, ${C.ga(0.07)} 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, ${C.la(0.12)} 0%, ${C.ga(0.035)} 42%, transparent 76%), ${C.black}`;

// ─── Hero Section ─────────────────────────────────────────────────────
const Hero = () => {
  const shouldReduce = useReducedMotion();

  return (
  <section className="relative isolate w-full overflow-hidden font-display text-white" style={{ background: footerBg }}>
    {/* Ambient background */}
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.25)}, transparent)` }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.1)} 0%, transparent 70%)`, filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: `radial-gradient(circle, ${C.ga(0.1)} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
    </div>

    <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-8 px-4 pb-[4.5rem] pt-[7.5rem] sm:px-6 sm:pb-[5.4rem] sm:pt-[8.8rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,1.1fr)] lg:gap-10 lg:px-8 lg:pb-[8.1rem] lg:pt-[7.3rem] xl:pb-[9.1rem]">
      {/* Left Content */}
      <div className="max-w-[620px]">
        {/* Eyebrow */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          className="mb-5 flex items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.26em]"
          style={{ color: C.lime }}
        >
          <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
          AI Development Ecommerce Services
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease }}
          className="mb-5 max-w-[540px] text-[2.9rem] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[4.2rem] lg:text-[4.6rem]"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Smarter Ecommerce,
          <br />
          <span style={{ color: C.lime }}>Built to Scale</span>
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65, ease }}
          className="mb-9 max-w-[540px] text-[1.02rem] font-normal leading-[1.7] text-white/70 lg:text-[1.15rem]"
        >
          AI solutions that streamline operations, improve customer journeys, and help ecommerce teams grow efficiently.
        </motion.p>
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55, ease }}
          className="mb-6 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA */}
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#B6FF00] px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-[#050505] shadow-[0_8px_28px_rgba(182,255,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(182,255,0,0.5)] hover:bg-[#7DCC00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00]"
          >
            {/* Shimmer */}
            <span className="pointer-events-none absolute inset-0 -skew-x-12 translate-x-[-200%] bg-white/25 transition-transform duration-700 group-hover:translate-x-[200%]" aria-hidden="true" />
            <span className="relative z-10 uppercase tracking-wider">Get Free Quote</span>
            <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          {/* Secondary CTA */}
          <a
            href="https://calendar.app.google/F63aBoA5vxJdtihj7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/25 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#B6FF00] hover:bg-[#B6FF00]/[0.08] hover:text-[#B6FF00]"
          >
            <span className="uppercase tracking-wider">Talk to an Expert</span>
            <ArrowRight size={15} className="opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        className="relative flex items-center justify-center lg:translate-y-2 lg:scale-[1.04]"
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease }}
      >
        <img
          src="/image/Industries-Img/Ecommerce-page-hero.png"
          alt="E-Commerce technology"
          className="relative z-10 h-auto w-full max-w-md object-contain brightness-110 contrast-105 drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.02] sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
      </motion.div>
    </div>
  </section>
  );
};


// ─── AI Ecommerce Services Section ────────────────────────────────────
const EcommerceServices = () => {
  const shouldReduce = useReducedMotion();

  return (
  <section className="relative overflow-hidden px-4 font-display sm:px-6 lg:px-8" style={{ background: `radial-gradient(ellipse 60% 70% at 96% 10%, ${C.la(0.13)} 0%, ${C.ga(0.04)} 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, ${C.ga(0.18)} 0%, ${C.ga(0.06)} 40%, transparent 76%), ${C.black}` }}>
    {/* Ambient subtle glow */}
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.15)}, transparent)` }} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, ${C.la(0.05)} 0%, transparent 70%)`, filter: 'blur(90px)' }}
      />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
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
          End-to-End Capabilities
        </motion.div>

        <motion.h2
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
          className="mb-4 max-w-[18ch] font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
        >
          AI Commerce <span style={{ color: C.lime }}>Growth</span>
        </motion.h2>

        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
          className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
        >
          Smarter commerce systems that automate work and improve every customer touchpoint.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {ecommerceServices.map((service, index) => {
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


// ─── AI Ecommerce Development Process Section ─────────────────────────
const DevelopmentProcess = () => {
  const shouldReduce = useReducedMotion();

  return (
  <section className="relative overflow-hidden bg-[#050505] px-4 font-display sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
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
          A focused path from strategy to launch for smarter ecommerce systems.
        </motion.p>
      </div>

      <ol className="border-t border-white/10">
        {developmentProcess.map((item, index) => (
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


// ─── Capabilities Section ─────────────────────────────────────────────
const Capabilities = () => {
  const shouldReduce = useReducedMotion();

  return (
  <section
    className="relative overflow-hidden px-4 font-display sm:px-6 lg:px-8"
    style={{ background: `radial-gradient(ellipse 60% 70% at 96% 10%, ${C.la(0.13)} 0%, ${C.ga(0.04)} 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, ${C.ga(0.2)} 0%, ${C.ga(0.07)} 40%, transparent 76%), ${C.black}` }}
  >
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.15)}, transparent)` }} />
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, ${C.la(0.06)} 0%, transparent 70%)`, filter: 'blur(100px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full"
        style={{ background: `radial-gradient(circle, ${C.ga(0.05)} 0%, transparent 70%)`, filter: 'blur(90px)' }}
      />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
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
          AI Benefits for <span style={{ color: C.lime }}>Commerce</span>
        </motion.h2>

        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
          className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
        >
          Practical capabilities built to improve growth, efficiency, and customer experience.
        </motion.p>
      </div>

      <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 max-w-6xl">
        {capabilities.map((cap, index) => (
          <motion.div
            key={index}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.05, ease }}
            className="group relative border-t border-white/[0.08] py-5 transition-colors duration-300 hover:bg-white/[0.02] sm:py-6"
            style={{
              borderTopColor: index === 0 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)',
            }}
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
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-lg font-bold tracking-[-0.04em] text-white transition-colors duration-200 group-hover:text-[#B6FF00] sm:text-xl">
                    {cap.title}
                  </h3>

                  {cap.metric ? (
                    <div className="flex items-baseline">
                      <span className="text-2xl font-black tracking-[-0.05em]" style={{ color: C.lime }}>
                        {cap.metric}
                      </span>
                    </div>
                  ) : null}
                </div>

                <p className="max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                  {cap.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};



// ─── FAQ Section ──────────────────────────────────────────────────────
const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      className="relative overflow-hidden py-16 font-display antialiased sm:py-20 lg:py-24" 
      style={{ 
        background: `radial-gradient(ellipse 52% 74% at 4% 44%, ${C.ga(0.16)} 0%, ${C.ga(0.05)} 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, ${C.la(0.08)} 0%, ${C.ga(0.025)} 42%, transparent 76%), ${C.black}`,
        color: C.white,
      }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full blur-[160px]" style={{ background: C.la(0.035) }} />
        <div className="absolute left-1/4 top-1/2 rounded-full blur-[140px]" style={{ width: 480, height: 480, background: C.ga(0.02) }} />
        <div className="absolute bottom-0 right-1/5 rounded-full blur-[150px]" style={{ width: 420, height: 420, background: C.la(0.022) }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column - Header Content */}
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
              Everything You Need to Know About{' '}
              <span style={{ color: C.lime }}>AI for E-Commerce</span>
            </motion.h2>

            <motion.p
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-sm leading-7 sm:text-base"
              style={{ color: C.wa(0.64) }}
            >
              Clear answers to help you understand how AI can transform your ecommerce operations and drive measurable results.
            </motion.p>
          </div>

          {/* Right Column - FAQ Accordion */}
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
                  {/* Question */}
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

                    {/* Rotating plus icon */}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-white/60 group-hover:text-[#B6FF00] transition-all duration-300"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0 
                    }}
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

// ─── Main Ecommerce Page ──────────────────────────────────────────────
const Ecommerce = () => {
  return (
    <div
      className="min-h-screen flex flex-col antialiased font-sans selection:bg-[#B6FF00] selection:text-black text-white [&>section:not(:first-of-type)]:!py-8 sm:[&>section:not(:first-of-type)]:!py-10 lg:[&>section:not(:first-of-type)]:!py-12"
      style={{
        background: C.black,
        color: C.white,
      }}
    >
      <Navbar />
      <Hero />
      <EcommerceServices />
      <DevelopmentProcess />
      <Capabilities />
      <EngagementModels />
      <ImpactStatsBanner flush />
      <TechnologyStack
        eyebrow="Tech Stack"
        heading="Built for Ecommerce Scale"
        subheading="The tools and platforms we use to build fast, intelligent commerce systems."
      />
      <PortfolioSection />
      <Testimonials />
      <LatestBlogs />
      <FAQ />
      <CTA
        eyebrow="Ready to grow?"
        title="Build an ecommerce experience that converts and scales."
        description="Let's create a smarter commerce journey tailored to your customers and business goals."
        primaryLabel="Start a Project"
        primaryHref="/contact"
      />
      <Footer />
    </div>
  );
};

export default Ecommerce;
