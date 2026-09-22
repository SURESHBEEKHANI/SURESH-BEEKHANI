import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EngagementModels from "../components/EngagementModels";
import { IMPACT_STATS } from "../components/OriginStory";
import { useReducedMotion } from "@/hooks/useAnimations";
import { TechnologyStack } from "../components/TechnologyStack";
import Testimonials from "../components/Testimonials";
import LatestBlogs from "../components/LatestBlogs";

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
    title: "Ecommerce Build",
    description: "Conversion-focused platforms with AI search and personalization.",
  },
  {
    title: "Shopping Agents",
    description: "AI agents that guide customers from discovery to purchase.",
  },
  {
    title: "Automation",
    description: "Automate orders, support, inventory, and internal operations.",
  },
  {
    title: "Personalization",
    description: "Tailored recommendations, offers, and customer journeys.",
  },
  {
    title: "Support",
    description: "AI-powered help for questions, updates, and returns.",
  },
  {
    title: "Integrations",
    description: "Connect CRM, ERP, payments, and marketing data in one flow.",
  },
];

const developmentProcess = [
  {
    step: "STEP 01",
    num: "01",
    title: "Discovery",
    shortTitle: "DISCOVERY",
    description: "Define goals and AI opportunities.",
  },
  {
    step: "STEP 02",
    num: "02",
    title: "Architecture",
    shortTitle: "ARCHITECTURE",
    description: "Map systems, journeys, and data flow.",
  },
  {
    step: "STEP 03",
    num: "03",
    title: "UX Design",
    shortTitle: "UX DESIGN",
    description: "Design effective product journeys and storefronts.",
  },
  {
    step: "STEP 04",
    num: "04",
    title: "Build",
    shortTitle: "BUILD",
    description: "Develop the platform, AI, and workflows.",
  },
  {
    step: "STEP 05",
    num: "05",
    title: "Connect",
    shortTitle: "CONNECT",
    description: "Link CRM, ERP, and sales systems.",
  },
  {
    step: "STEP 06",
    num: "06",
    title: "Launch",
    shortTitle: "LAUNCH",
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
const Hero = () => (
  <section className="relative isolate w-full overflow-hidden text-white" style={{ background: footerBg }}>
    {/* Ambient background */}
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.25)}, transparent)` }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.1)} 0%, transparent 70%)`, filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: `radial-gradient(circle, ${C.ga(0.1)} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
    </div>

    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-20 pb-10 sm:px-10 sm:pt-24 sm:pb-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:gap-16 lg:px-16 lg:pt-24 lg:pb-14">
      {/* Left Content */}
      <div className="max-w-2xl">
        {/* Eyebrow */}
        <div className="mb-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.lime }}>
          <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
          AI Development Ecommerce Services
        </div>

        {/* Headline */}
        <h1
          className="mb-6 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Smarter Ecommerce, <br /><span style={{ color: C.lime }}>Built to Scale</span>
        </h1>

        {/* Supporting copy */}
        <p className="max-w-xl text-lg leading-8 sm:text-xl" style={{ color: C.wa(0.64) }}>
          AI solutions that streamline operations, improve customer journeys, and help ecommerce teams grow efficiently.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          {/* Primary CTA */}
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#B6FF00] px-7 py-3.5 text-sm font-extrabold text-[#050505] shadow-[0_0_30px_rgba(182,255,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(182,255,0,0.55)] hover:bg-[#c8ff33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00]"
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
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border-2 border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00] hover:text-[#B6FF00] hover:shadow-[0_0_30px_rgba(182,255,0,0.2)] hover:bg-[#B6FF00]/[0.08]"
          >
            <span className="uppercase tracking-wider">Talk to an Expert</span>
            <ArrowRight size={15} className="opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex items-center justify-center">
        {/* Soft backdrop framing disc for contrast */}
        <div
          className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full border border-white/10 bg-gradient-to-b from-white/[0.05] via-[#B6FF00]/[0.03] to-transparent shadow-[0_0_60px_rgba(182,255,0,0.12)]"
          aria-hidden="true"
        />

        {/* Ambient colored shadow glow behind image */}
        <div
          className="pointer-events-none absolute h-80 w-80 sm:h-[420px] sm:w-[420px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${C.la(0.42)} 0%, ${C.ga(0.22)} 42%, transparent 70%)`,
            filter: 'blur(55px)',
          }}
          aria-hidden="true"
        />

        <img
          src="/image/Industries-Img/Ecommerce-page-hero.png"
          alt="E-Commerce technology"
          className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain brightness-110 contrast-105 drop-shadow-[0_0_45px_rgba(182,255,0,0.45)] drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  </section>
);


// ─── AI Ecommerce Services Section ────────────────────────────────────
const EcommerceServices = () => (
  <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 60% 70% at 96% 10%, ${C.la(0.13)} 0%, ${C.ga(0.04)} 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, ${C.ga(0.18)} 0%, ${C.ga(0.06)} 40%, transparent 76%), ${C.black}` }}>
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
      <div className="mb-12 sm:mb-16">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.lime }}>
          <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
          End-to-End Capabilities
        </div>

        <h2 className="mb-4 max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
          AI Commerce <span style={{ color: C.lime }}>Growth</span>
        </h2>

        <p className="max-w-2xl text-base sm:text-lg leading-8" style={{ color: C.wa(0.64) }}>
          Smarter commerce systems that automate work and improve every customer touchpoint.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
        {ecommerceServices.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-7 sm:p-8 border border-white/10 transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_0_35px_rgba(182,255,0,0.12)] hover:-translate-y-1"
            style={{ background: `linear-gradient(135deg, ${C.wa(0.04)} 0%, ${C.wa(0.02)} 100%)`, borderRadius: 0 }}
          >
            {/* Number badge top-left */}
            <span
              className="absolute top-4 left-4 text-[11px] font-bold tracking-[0.15em] transition-colors duration-300"
              style={{ color: C.wa(0.35) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.lime)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.wa(0.35))}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Top edge glow line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="pt-5">
              <h3 className="text-base sm:text-lg font-bold tracking-[-0.03em] text-[#B6FF00] mb-2.5 transition-colors duration-200">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm leading-6" style={{ color: C.wa(0.6) }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// ─── AI Ecommerce Development Process Section ─────────────────────────
const DevelopmentProcess = () => (
  <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 52% 74% at 4% 44%, ${C.ga(0.18)} 0%, ${C.ga(0.06)} 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, ${C.la(0.1)} 0%, ${C.ga(0.03)} 42%, transparent 76%), ${C.black}` }}>
    {/* Ambient subtle glow */}
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.12)}, transparent)` }} />
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[450px] rounded-full"
        style={{ background: `radial-gradient(circle, ${C.ga(0.05)} 0%, transparent 70%)`, filter: 'blur(90px)' }}
      />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-14 sm:mb-18">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.lime }}>
          <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
          Execution Roadmap
        </div>

        <h2 className="mb-4 max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
          Our AI <span style={{ color: C.lime }}>Process</span>
        </h2>

        <p className="max-w-2xl text-base sm:text-lg leading-8" style={{ color: C.wa(0.64) }}>
          A focused path from strategy to launch for smarter ecommerce systems.
        </p>
      </div>

      {/* Horizontal Timeline - desktop */}
      <div className="hidden lg:block relative pb-8">
        {/* Connecting baseline */}
        <div className="absolute top-[30px] left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${C.wa(0.08)} 0%, ${C.lime} 50%, ${C.wa(0.08)} 100%)` }} />

        <div className="grid grid-cols-6 gap-4 relative">
          {developmentProcess.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* STEP label on top */}
              <div className="mb-6">
                <span
                  className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{ color: C.lime }}
                >
                  {item.step}
                </span>
              </div>

              {/* Dot node on the line */}
              <div className="absolute top-[22px] z-20">
                <div
                  className="w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                  style={{
                    background: C.lime,
                    borderColor: C.lime,
                    boxShadow: `0 0 15px ${C.la(0.5)}`,
                  }}
                />
                <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-0 group-hover:opacity-30" style={{ background: C.lime }} />
              </div>

              {/* Content below line */}
              <div className="pt-12 px-1">
                <h3
                  className="text-sm font-bold tracking-[-0.02em] text-white mb-2 transition-colors duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.lime)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.white)}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-5" style={{ color: C.wa(0.55) }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Timeline - mobile & tablet */}
      <div className="lg:hidden">
        <div className="relative pl-10 sm:pl-14">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 left-5 sm:left-7 w-px"
            style={{ background: `linear-gradient(180deg, ${C.wa(0.08)} 0%, ${C.lime} 50%, ${C.wa(0.08)} 100%)` }}
          />

          <div className="space-y-7">
            {developmentProcess.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot node on line */}
                <div className="absolute -left-[22px] sm:-left-[30px] top-1 z-20">
                  <div
                    className="w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{
                      background: C.lime,
                      borderColor: C.lime,
                      boxShadow: `0 0 15px ${C.la(0.5)}`,
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  {/* STEP label on top */}
                  <span className="block mb-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: C.lime }}>
                    {item.step}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-base sm:text-lg font-bold tracking-[-0.02em] text-white mb-1 transition-colors duration-300"
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.lime)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = C.white)}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-6" style={{ color: C.wa(0.55) }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


// ─── Capabilities Section ─────────────────────────────────────────────
const Capabilities = () => (
  <section
    className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
      <div className="mb-14 sm:mb-18">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.lime }}>
          <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
          Why AI Changes Everything
        </div>

        <h2 className="mb-4 max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
          AI Benefits for <span style={{ color: C.lime }}>Commerce</span>
        </h2>

        <p className="max-w-2xl text-base sm:text-lg leading-8" style={{ color: C.wa(0.64) }}>
          Practical capabilities built to improve growth, efficiency, and customer experience.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 max-w-6xl">
        {capabilities.map((cap, index) => (
          <div
            key={index}
            className="group relative border-t border-white/[0.08] py-7 sm:py-8"
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
                  <h3 className="text-xl font-bold tracking-[-0.04em] text-white transition-colors duration-200 group-hover:text-[#B6FF00]">
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

                <p className="max-w-xl text-sm sm:text-base leading-7" style={{ color: C.wa(0.62) }}>
                  {cap.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);



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
              className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]"
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
              className="mt-6 text-base leading-7"
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
                    <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#B6FF00] transition-colors duration-300">
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
                      <p className="max-w-2xl leading-7" style={{ color: C.wa(0.55) }}>
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

// ─── Impact Statistics Section ────────────────────────────────────────
const ImpactStats = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full border-y border-[#050505]/20 bg-[#B6FF00] px-6 py-10 text-[#050505] sm:px-10 sm:py-12 lg:px-16"
    >
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
        {IMPACT_STATS.map(({ number, label }, i) => (
          <div key={label} className="relative flex flex-col items-center px-3 text-center sm:px-5">
            {i > 0 && (
              <div className="absolute left-0 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-[#050505]/20 sm:block" />
            )}
            <div className="text-4xl font-black leading-none tracking-[-0.06em] text-[#050505] sm:text-5xl">
              {number.replace('+', '').replace('%', '')}
              <span>{number.includes('+') ? '+' : number.includes('%') ? '%' : ''}</span>
            </div>
            <p className="mx-auto mt-4 max-w-[15ch] text-[0.62rem] font-bold uppercase leading-5 tracking-[0.16em] text-[#050505]/70 sm:max-w-[18ch]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ─── Main Ecommerce Page ──────────────────────────────────────────────
const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ background: C.black }}>
      <Navbar />
      <Hero />
      <EcommerceServices />
      <DevelopmentProcess />
      <Capabilities />
      <EngagementModels />
      <ImpactStats />
      <TechnologyStack
        eyebrow="Tech Stack"
        heading="Built for Ecommerce Scale"
        subheading="The tools and platforms we use to build fast, intelligent commerce systems."
      />
      <Testimonials />
      <LatestBlogs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Ecommerce;
