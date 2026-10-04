import { useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarRange,
  Compass,
  Headset,
  Hotel,
  Map,
  Plane,
  Route,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    description: "Reduce friction across search, booking, and trip planning so travelers move faster.",
  },
  {
    title: "More Revenue Capture",
    metric: "",
    description: "Use pricing and inventory signals to improve offers, upsells, and package value.",
  },
  {
    title: "Better Traveler Experience",
    metric: "",
    description: "Deliver personalized suggestions, helpful guidance, and faster support throughout the journey.",
  },
  {
    title: "Clearer Insight",
    metric: "",
    description: "Turn booking, demand, and customer data into actionable operating signals.",
  },
  {
    title: "Leaner Ops",
    metric: "",
    description: "Automate repetitive tasks around reservations, service requests, and itinerary updates.",
  },
  {
    title: "Works With Your Stack",
    metric: "",
    description: "Connect PMS, booking engines, CRM, and distribution channels without disrupting teams.",
  },
];

const travelServices = [
  {
    icon: Plane,
    title: "Travel Build",
    description: "Digital travel experiences designed for bookings, trip discovery, and customer confidence.",
  },
  {
    icon: Bot,
    title: "Traveler Assistants",
    description: "AI assistants that answer questions, recommend options, and support trip planning in real time.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate confirmations, inquiries, pricing checks, and reservation follow-ups across teams.",
  },
  {
    icon: Sparkles,
    title: "Personalization",
    description: "Tailor recommendations based on traveler preferences, geography, and behavior patterns.",
  },
  {
    icon: Headset,
    title: "Support",
    description: "Handle routine traveler questions, itinerary updates, and service requests with faster response times.",
  },
  {
    icon: Route,
    title: "Integrations",
    description: "Link bookings, hotels, tours, payments, and CRM workflows through a connected operating layer.",
  },
];

const developmentProcess = [
  {
    num: "01",
    title: "Discovery",
    description: "Map traveler journeys, your operations, and where AI adds immediate value.",
  },
  {
    num: "02",
    title: "Architecture",
    description: "Define systems, booking flows, and data paths across reservations and guest touchpoints.",
  },
  {
    num: "03",
    title: "UX Design",
    description: "Design travel experiences that feel informative, effortless, and trustworthy.",
  },
  {
    num: "04",
    title: "Build",
    description: "Develop booking, support, and planning systems with AI workflows built in.",
  },
  {
    num: "05",
    title: "Connect",
    description: "Link distribution, hotel, tour, CRM, and payment systems into one operating flow.",
  },
  {
    num: "06",
    title: "Launch",
    description: "Pilot, monitor, and improve based on traveler demand and operating performance.",
  },
];

const faqData = [
  { id: 1, question: "Do you work with travel agencies, hotspots, and hospitality brands?", answer: "Yes. We support travel agencies, tour operators, hospitality groups, and booking businesses that need better automation and customer experience." },
  { id: 2, question: "Can this connect to our booking, CRM, or property systems?", answer: "Yes. We integrate with booking platforms, hotel systems, tour management tools, and custom travel stacks to improve workflow continuity." },
  { id: 3, question: "How soon can recommendations or support automation improve the customer journey?", answer: "If traveler, booking, and inventory data are available, a first version can often launch in a focused pilot quickly." },
  { id: 4, question: "Will AI replace our travel advisors or hospitality teams?", answer: "It reduces repetitive inquiry handling and itinerary work, while human teams remain essential for complex requests, VIP experiences, and approvals." },
  { id: 5, question: "How do you measure success in travel operations?", answer: "We define the outcomes before build — booking conversion, response time, occupancy uplift, itinerary quality, or cost-to-serve." },
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

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-8 px-4 pb-[2.5rem] pt-[7.5rem] sm:px-6 sm:pb-[3rem] sm:pt-[8.8rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,1.1fr)] lg:gap-10 lg:px-8 lg:pb-[4.5rem] lg:pt-[7.3rem] xl:pb-[5.1rem]">
        <div className="max-w-[620px]">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="mb-5 flex items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.26em]"
            style={{ color: C.lime }}
          >
            <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
            AI Development Travel & Tourism Services
          </motion.div>

          <motion.h1
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease }}
            className="mb-5 max-w-[540px] text-[2.9rem] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[4.2rem] lg:text-[4.6rem]"
            style={{ WebkitFontSmoothing: 'antialiased' }}
          >
            Smarter Travel,
            <br />
            <span style={{ color: C.lime }}>Built for Better Journeys</span>
          </motion.h1>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65, ease }}
            className="mb-9 max-w-[540px] text-[1.02rem] font-normal leading-[1.7] text-white/70 lg:text-[1.15rem]"
          >
            AI systems that improve booking experiences, guest support, itinerary planning, and travel operations from first click to final destination.
          </motion.p>

          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#B6FF00] px-6 py-3.5 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[#050505] shadow-[0_0_30px_rgba(182,255,0,0.22)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Free Quote</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href="https://calendar.app.google/F63aBoA5vxJdtihj7"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/30 bg-white/[0.02] px-6 py-3.5 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#B6FF00] hover:bg-[#B6FF00]/[0.08] hover:text-[#B6FF00]"
            >
              <span>Talk to an Expert</span>
              <ArrowRight size={15} className="opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="absolute inset-8 rounded-full bg-[#B6FF00]/[0.1] blur-[90px]" aria-hidden="true" />
          <img
            src="/image/Industries-Img/travel-and-tourism.png"
            alt="Travel and tourism technology"
            className="relative z-10 h-auto w-full max-w-[560px] object-contain brightness-110 contrast-105 drop-shadow-[0_25px_55px_rgba(0,0,0,0.78)] transition-transform duration-700 hover:scale-[1.02] lg:max-w-[640px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

const TravelServices = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 font-display sm:px-6 lg:px-8" style={{ background: `radial-gradient(ellipse 60% 70% at 96% 10%, ${C.la(0.13)} 0%, ${C.ga(0.04)} 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, ${C.ga(0.18)} 0%, ${C.ga(0.06)} 40%, transparent 76%), ${C.black}` }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.15)}, transparent)` }} />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.05)} 0%, transparent 70%)`, filter: 'blur(90px)' }} />
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
            End-to-End Capabilities
          </motion.div>

          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
            className="mb-4 max-w-[18ch] font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
          >
            AI Travel <span style={{ color: C.lime }}>Growth</span>
          </motion.h2>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
            className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
          >
            Smarter travel systems that improve discovery, bookings, support, and operational performance without breaking the guest experience.
          </motion.p>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {travelServices.map((service, index) => {
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
            A focused path from discovery to launch for smarter travel operations.
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

const Capabilities = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 font-display sm:px-6 lg:px-8" style={{ background: `radial-gradient(ellipse 60% 70% at 96% 10%, ${C.la(0.13)} 0%, ${C.ga(0.04)} 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, ${C.ga(0.2)} 0%, ${C.ga(0.07)} 40%, transparent 76%), ${C.black}` }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.15)}, transparent)` }} />
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.06)} 0%, transparent 70%)`, filter: 'blur(100px)' }} />
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
            AI Benefits for <span style={{ color: C.lime }}>Travel & Tourism</span>
          </motion.h2>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
            className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
          >
            Practical capabilities built to improve conversion, planning, and the travel experience across digital and operational touchpoints.
          </motion.p>
        </div>

        <div className="grid max-w-6xl gap-0 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
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
                  style={{ color: C.lime, borderColor: 'rgba(182,255,0,0.22)', background: 'rgba(182,255,0,0.04)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="text-lg font-bold tracking-[-0.04em] text-white transition-colors duration-200 group-hover:text-[#B6FF00] sm:text-xl">
                      {cap.title}
                    </h3>

                    {cap.metric ? (
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B6FF00]">
                        {cap.metric}
                      </span>
                    ) : null}
                  </div>

                  <p className="text-sm leading-7 text-white/60 sm:text-base">
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
              Everything You Need to Know About{' '}
              <span style={{ color: C.lime }}>AI for Travel</span>
            </motion.h2>

            <motion.p
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-sm leading-7 sm:text-base"
              style={{ color: C.wa(0.64) }}
            >
              Clear answers to help you understand how AI can improve bookings, traveler support, and travel operations.
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

const TravelTourism = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased font-sans selection:bg-[#B6FF00] selection:text-black text-white [&>section:not(:first-of-type)]:!py-8 sm:[&>section:not(:first-of-type)]:!py-10 lg:[&>section:not(:first-of-type)]:!py-12" style={{ background: C.black, color: C.white }}>
      <Navbar />
      <Hero />
      <TravelServices />
      <DevelopmentProcess />
      <Capabilities />
      <EngagementModels />
      <ImpactStatsBanner flush />
      <TechnologyStack
        eyebrow="Tech Stack"
        heading="Built for Travel Scale"
        subheading="The tools and platforms we use to build responsive, intelligent travel systems."
      />
      <PortfolioSection />
      <Testimonials />
      <LatestBlogs />
      <FAQ />
      <CTA
        eyebrow="Ready to grow?"
        title="Build a more seamless, smarter travel experience."
        description="Let's create a more efficient, personalized, and high-converting travel operation tailored to your customers and business goals."
        primaryLabel="Start a Project"
        primaryHref="/contact"
      />
      <Footer />
    </div>
  );
};

export default TravelTourism;
