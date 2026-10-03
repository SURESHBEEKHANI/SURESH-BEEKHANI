import { useState } from "react";
import {
  ArrowRight,
  Database,
  FileSearch,
  FileText,
  HeartPulse,
  LockKeyhole,
  MessageCircle,
  PlugZap,
  ScanText,
  ShieldCheck,
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

// â”€â”€â”€ Footer Color Palette â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const C = {
  black: '#050505',
  white: '#FFFFFF',
  lime: '#B6FF00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

const healthcareCapabilities = [
  {
    icon: Workflow,
    title: "Healthcare Workflow Automation",
    description: "Automate repetitive administrative workflows across teams, systems, scheduling, and operations.",
  },
  {
    icon: MessageCircle,
    title: "Conversational AI",
    description: "Help patients and staff handle routine questions, service navigation, scheduling, and information requests.",
  },
  {
    icon: FileText,
    title: "Clinical Documentation",
    description: "Reduce repetitive documentation work and organize clinical information for faster, more consistent workflows.",
  },
  {
    icon: Database,
    title: "Healthcare Data & Analytics",
    description: "Turn operational and clinical data into useful dashboards, insights, and decision-support views.",
  },
  {
    icon: PlugZap,
    title: "EHR / EMR & API Integration",
    description: "Connect electronic health records, scheduling, communication, and other healthcare systems through secure integrations.",
  },
  {
    icon: ScanText,
    title: "Intelligent Document Processing",
    description: "Extract, classify, and organize information from forms, referrals, reports, and other healthcare documents for human review.",
  },
];

const healthcareWorkflow = [
  {
    num: "01",
    title: "Discover",
    description: "Map patient journeys, administrative tasks, system boundaries, and the needs of each care team.",
  },
  {
    num: "02",
    title: "Design",
    description: "Shape accessible workflows with clear review points and practical human oversight.",
  },
  {
    num: "03",
    title: "Integrate",
    description: "Connect approved records, scheduling, and operational systems through suitable interfaces.",
  },
  {
    num: "04",
    title: "Automate",
    description: "Configure AI and automation around repetitive work while keeping people in control.",
  },
  {
    num: "05",
    title: "Deploy",
    description: "Test with stakeholders, prepare teams, and release in a controlled operational setting.",
  },
  {
    num: "06",
    title: "Improve",
    description: "Review usage, quality, and feedback to guide measured improvements over time.",
  },
];

const healthcareAIBenefits = [
  {
    icon: MessageCircle,
    title: "Faster Patient Communication",
    description: "Deliver timely reminders, enrollment guidance, and routine follow-up support without adding operational strain.",
  },
  {
    icon: FileText,
    title: "Reduced Documentation Burden",
    description: "Help summarize notes, organize intake information, and surface relevant context for review by care teams.",
  },
  {
    icon: Workflow,
    title: "Smarter Workflow Routing",
    description: "Prioritize tasks, route requests, and flag exceptions so staff spend less time on repetitive coordination.",
  },
  {
    icon: Database,
    title: "Better Data Visibility",
    description: "Bring operational signals together so teams can spot gaps, missed steps, and opportunities for action faster.",
  },
  {
    icon: ShieldCheck,
    title: "Safer Human-in-the-Loop Oversight",
    description: "Design AI to support decisions with reviewed outputs, permission boundaries, and clear accountability.",
  },
  {
    icon: HeartPulse,
    title: "More Focus on Care",
    description: "Free up clinician and staff time for patient interaction, clinical judgment, and higher-value work.",
  },
];

const faqData = [
  { id: 1, question: "Can healthcare software connect with our existing EHR or EMR?", answer: "We assess available APIs and integration options first, then design a connection that fits your systems, data requirements, and workflow." },
  { id: 2, question: "Can AI make clinical decisions for our team?", answer: "Solutions are designed to support workflows and information access, with appropriate human review. Clinical decisions remain with qualified healthcare professionals." },
  { id: 3, question: "How do you approach patient data privacy?", answer: "We work with your team to define data needs, access boundaries, safeguards, and review requirements for the specific operating environment." },
  { id: 4, question: "Do you work with smaller practices as well as hospitals?", answer: "Yes. We scope solutions around the organization's workflows, systems, team capacity, and priorities." },
  { id: 5, question: "Can we start with one workflow?", answer: "Yes. A focused starting point, such as appointment coordination, document handling, or patient communication, can help validate fit before expanding." },
  { id: 6, question: "Do you claim HIPAA or other compliance certification?", answer: "We do not claim certifications unless verified. Requirements and responsibilities should be reviewed with your compliance and legal teams for each project." },
];


// â”€â”€â”€ Shared footer-style background â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const footerBg = `radial-gradient(ellipse 52% 74% at 4% 44%, ${C.ga(0.22)} 0%, ${C.ga(0.07)} 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, ${C.la(0.12)} 0%, ${C.ga(0.035)} 42%, transparent 76%), ${C.black}`;

// â”€â”€â”€ Hero Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-[11.1rem] pb-[5.3rem] sm:px-6 sm:pt-[12.7rem] sm:pb-[6.6rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:gap-20 lg:px-8 lg:pt-[14.25rem] lg:pb-[9.25rem] xl:pb-[10.55rem]">
      {/* Left Content */}
      <div className="max-w-2xl">
        {/* Eyebrow */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
          style={{ color: C.lime }}
        >
          <span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />
          AI-Powered Healthcare Solutions
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease }}
          className="mb-5 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Transform Healthcare Operations with <span style={{ color: C.lime }}>Intelligent Technology</span>
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65, ease }}
          className="mb-10 max-w-xl text-base font-normal leading-8 text-white/70 sm:text-lg"
        >
          Velnix combines AI, automation, and custom software to simplify healthcare workflows, connect systems, and improve operational efficiency.
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
        className="relative flex items-center justify-center lg:[translate:0_-10%] lg:scale-[1.04]"
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease }}
      >
        <img
          src="/image/Industries-Img/Healthcare.png"
          alt="Healthcare tools including a stethoscope, thermometer, and syringe"
          className="relative z-10 h-auto w-full max-w-md object-contain brightness-110 contrast-105 drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.02] sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
      </motion.div>
    </div>
  </section>
  );
};


// â”€â”€â”€ Healthcare Capabilities Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const HealthcareCapabilities = () => {
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
          Healthcare Technology
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
          Connected capabilities for patient experiences, clinical workflows, healthcare data, and the systems teams rely on.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {healthcareCapabilities.map((service, index) => {
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

const HealthcareTrust = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden px-4 font-display sm:px-6 lg:px-8"
      style={{ background: `radial-gradient(ellipse 62% 72% at 94% 12%, ${C.la(0.11)} 0%, ${C.ga(0.035)} 44%, transparent 76%), ${C.black}` }}
    >
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
            Designed with Responsibility
          </motion.div>
          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
            className="mb-4 max-w-none font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:whitespace-nowrap sm:text-4xl"
          >
            Trust Built into the <span style={{ color: C.lime }}>Workflow</span>
          </motion.h2>
          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
            className="max-w-3xl text-sm font-light leading-8 text-white/60 sm:text-base"
          >
            Privacy, security, and oversight are considered with your organization's requirements and systems. Specific controls are defined with your team; no regulatory certification is implied.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {healthcareTrust.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.title}
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
                  {principle.title}
                </h3>
                <p className="max-w-[42ch] flex-1 text-sm leading-6 text-white/60 sm:text-base">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};


// â”€â”€â”€ Healthcare Workflow Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
          From Opportunity to Ongoing Care
        </motion.div>

        <motion.h2
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
          className="mb-4 max-w-[18ch] font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
        >
          A Healthcare-First <span style={{ color: C.lime }}>Workflow</span>
        </motion.h2>

        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
          className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
        >
          A practical delivery path that considers patient needs, clinical review, existing systems, and the realities of day-to-day healthcare operations.
        </motion.p>
      </div>

      <ol className="border-t border-white/10">
        {healthcareWorkflow.map((item, index) => (
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

// â”€â”€â”€ AI Benefits for Healthcare Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const AIBenefitsHealthcare = () => {
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
          AI Benefits for <span style={{ color: C.lime }}>Healthcare</span>
        </motion.h2>

        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
          className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
        >
          Practical capabilities built to improve care delivery, operational efficiency, and patient experience.
        </motion.p>
      </div>

      <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 max-w-6xl">
        {healthcareAIBenefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
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
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div className="flex-1 min-w-0">
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

// â”€â”€â”€ Healthcare Outcomes Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
          Operational Outcomes
        </motion.div>

        <motion.h2
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.1, ease }}
          className="mb-4 max-w-[18ch] font-display text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
        >
          Make More Room for <span style={{ color: C.lime }}>Better Care</span>
        </motion.h2>

        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease }}
          className="max-w-2xl text-sm font-light leading-8 text-white/60 sm:text-base"
        >
          Well-designed healthcare technology can reduce friction for staff and patients without relying on unsupported performance promises.
        </motion.p>
      </div>

      <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 max-w-6xl">
        {healthcareOutcomes.map((cap, index) => (
          <motion.div
            key={cap.title}
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
                <h3 className="mb-3 text-lg font-bold tracking-[-0.04em] text-white transition-colors duration-200 group-hover:text-[#B6FF00] sm:text-xl">
                  {cap.title}
                </h3>

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



// â”€â”€â”€ FAQ Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
              Thoughtful Answers About{' '}
              <span style={{ color: C.lime }}>Healthcare Technology</span>
            </motion.h2>

            <motion.p
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-sm leading-7 sm:text-base"
              style={{ color: C.wa(0.64) }}
            >
              Learn how we approach healthcare workflows, data, integrations, and human oversight.
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

// â”€â”€â”€ Main Healthcare Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const Healthcare = () => {
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
      <HealthcareCapabilities />
      <DevelopmentProcess />
      <AIBenefitsHealthcare />
      <EngagementModels />
      <ImpactStatsBanner flush />
      <TechnologyStack
        eyebrow="Tech Stack"
        heading="Built for Healthcare Scale"
        subheading="The tools and platforms we use to design secure, connected care workflows and AI-driven systems."
      />
      <PortfolioSection />
      <Testimonials />
      <LatestBlogs />
      <FAQ />
      <CTA
        eyebrow="Build better healthcare workflows"
        title="Create more connected experiences for patients and care teams."
        description="Tell us where everyday healthcare work gets complicated. We'll explore practical ways to improve the workflow, systems, and patient experience."
        primaryLabel="Talk to Our Healthcare Team"
        primaryHref="/contact"
      />
      <Footer />
    </div>
  );
};

export default Healthcare;
