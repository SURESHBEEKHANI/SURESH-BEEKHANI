import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

// ─────────────────────────────────────────────────────────────────────────────
// VELNIX BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  black: "#050505",
  graphite: "#111111",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",

  la: (opacity: number) => `rgba(182,255,0,${opacity})`,
  wa: (opacity: number) => `rgba(255,255,255,${opacity})`,
  ga: (opacity: number) => `rgba(125,204,0,${opacity})`,
};

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics?: {
    stat: string;
    label: string;
  }[];
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// Add your remaining case studies here.
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: "insurance-fraud-detection",
    title: "Insurance Fraud Detection",
    category: "AI & Automation",
    industry: "Insurance",
    problem:
      "Claims teams could not surface suspicious patterns quickly enough through manual investigation.",
    solution:
      "An AI system that scores claims in real time and flags anomalous patterns for investigators.",
    outcome:
      "Faster investigation with continuous, automated risk detection.",
    metrics: [
      {
        stat: "60%",
        label: "Faster Detection",
      },
      {
        stat: "3×",
        label: "Investigation Speed",
      },
      {
        stat: "24/7",
        label: "Monitoring",
      },
    ],
    tags: ["Machine Learning", "Fraud Detection", "Analytics", "Automation"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
    link: "/portfolio/insurance-fraud-detection",
  },

  {
    id: "ai-workflow-automation",
    title: "Workflow Automation Platform",
    category: "AI & Automation",
    industry: "Operations",
    problem:
      "Administrative work was repeated across teams with no shared automation layer.",
    solution:
      "A platform that connects processes, data sources, and agents into one operational workflow.",
    outcome:
      "Less repetitive work and faster internal execution.",
    metrics: [
      {
        stat: "70%",
        label: "Admin Work Reduced",
      },
      {
        stat: "10×",
        label: "Workflow Speed",
      },
      {
        stat: "24/7",
        label: "Automation",
      },
    ],
    tags: ["AI Agents", "Automation", "n8n", "APIs", "Workflows"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
    link: "/portfolio/ai-workflow-automation",
  },

  {
    id: "clinical-decision-support",
    title: "Clinical Decision Support",
    category: "Healthcare AI",
    industry: "Healthcare",
    problem:
      "Charting and diagnostic retrieval slowed consultations and delayed clinical decisions.",
    solution:
      "An EHR-integrated copilot that summarizes records and retrieves diagnostic context on demand.",
    outcome:
      "Physicians spent 55% less time on charting, with faster access to diagnosis.",
    metrics: [
      {
        stat: "55%",
        label: "Faster Charting",
      },
      {
        stat: "4×",
        label: "Diagnosis Retrieval",
      },
      {
        stat: "HIPAA",
        label: "Compliant",
      },
    ],
    tags: ["Healthcare AI", "Clinical NLP", "EHR", "Predictive Analytics"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
    link: "/portfolio/clinical-decision-support",
  },
  {
    id: "real-estate-ai-platform",
    title: "Real Estate Lead Intelligence",
    category: "Custom Software",
    industry: "Real Estate",
    problem:
      "Agents qualified leads by hand, without a reliable signal for buyer intent or close probability.",
    solution:
      "A platform that scores, segments, and nurtures leads from behavioral data and language signals.",
    outcome:
      "Conversion doubled, with 80% less manual follow-up.",
    metrics: [
      { stat: "2×", label: "Conversion Rate" },
      { stat: "80%", label: "Less Manual Work" },
      { stat: "< 2min", label: "Lead Response" },
    ],
    tags: ["Lead Scoring", "NLP", "CRM Integration", "Automation"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
    link: "/portfolio/real-estate-ai-platform",
  },

  {
    id: "ecommerce-ai-personalization",
    title: "E-Commerce Personalization",
    category: "AI & Automation",
    industry: "E-Commerce",
    problem:
      "Generic recommendations reduced engagement and increased cart abandonment.",
    solution:
      "A real-time engine that personalizes merchandising from browse, purchase, and intent signals.",
    outcome:
      "Revenue per visitor rose 38% within 90 days of launch.",
    metrics: [
      { stat: "38%", label: "Revenue Per Visitor" },
      { stat: "22%", label: "Cart Abandonment Drop" },
      { stat: "5×", label: "Recommendation CTR" },
    ],
    tags: ["Recommendation Engine", "ML", "Real-Time AI", "E-Commerce"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
    link: "/portfolio/ecommerce-ai-personalization",
  },

  {
    id: "fintech-risk-analytics",
    title: "Credit Risk Analytics",
    category: "AI & Automation",
    industry: "Financial Services",
    problem:
      "Legacy scoring missed non-traditional borrower signals and inflated default risk.",
    solution:
      "An ML risk platform that scores 200+ alternative signals for real-time credit decisions.",
    outcome:
      "Defaults fell 42% while approvals rose for creditworthy underserved borrowers.",
    metrics: [
      { stat: "42%", label: "Default Rate Reduction" },
      { stat: "200+", label: "Data Signals" },
      { stat: "< 3s", label: "Decision Time" },
    ],
    tags: ["FinTech", "Risk Modeling", "ML"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
    link: "/portfolio/fintech-risk-analytics",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO
// ─────────────────────────────────────────────────────────────────────────────

const Portfolio: React.FC = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col font-display antialiased"
      style={{
        background: C.black,
        color: C.white,
      }}
    >
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* AMBIENT BACKGROUND */}
      {/* ─────────────────────────────────────────────────────────────────── */}

      <div
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/3 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-[140px]"
          style={{
            background: C.la(0.04),
          }}
        />

        <div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-[140px]"
          style={{
            background: C.ga(0.03),
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* MAIN */}
      {/* ─────────────────────────────────────────────────────────────────── */}

      <main className="flex-grow relative z-10">
        {/* HERO BANNER - PROFESSIONAL 3D CURVED EMERALD DESIGN */}
        <section
          className="relative w-full overflow-hidden border-b border-white/10 pt-32 pb-16 text-left sm:pt-40 sm:pb-24"
          aria-label="Portfolio"
        >
          {/* Deep dark green curved professional backdrop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
            {/* 1. Base Multi-Stop Lime Radial Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 95% 85% at 50% 25%, #1e3300 0%, #111d00 36%, #080f00 68%, #050505 100%)",
              }}
            />

            {/* 2. Volumetric Central Lime Light Cone */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full blur-[110px] pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(182,255,0,0.18) 0%, rgba(100,160,0,0.09) 60%, transparent 80%)",
              }}
            />

            {/* 3. Ultra-subtle Engineering Tech Grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />



            {/* 5. Edge Vignette & Bottom Seamless Fade to Black */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex flex-col items-center text-center sm:mb-10"
            >
              <div className="mb-7 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
                Portfolio
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
              </div>

              <h1
                className="max-w-[22ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
                style={{ color: C.white }}
              >
                Engineering AI Systems That{' '}
                <span style={{ color: C.lime }}>Drive Business Forward.</span>
              </h1>

              <p
                className="mt-3 max-w-2xl text-center text-lg leading-8 sm:text-xl"
                style={{ color: 'rgba(255, 255, 255, 0.64)' }}
              >
                Real-world AI systems, intelligent automation, and digital products built to solve complex business problems and create measurable operational impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-white/[0.08] bg-black/40 px-6 py-3 text-sm font-medium text-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-8">
                <span className="flex items-center gap-2">
                  <strong className="text-lg font-black tracking-[-0.04em] text-white">45+</strong>
                  <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>AI Systems Built</span>
                </span>
                <span className="hidden select-none sm:inline" style={{ color: 'rgba(182,255,0,0.4)' }}>|</span>
                <span className="flex items-center gap-2">
                  <strong className="text-lg font-black tracking-[-0.04em] text-white">23+</strong>
                  <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>Clients Served</span>
                </span>
                <span className="hidden select-none sm:inline" style={{ color: 'rgba(182,255,0,0.4)' }}>|</span>
                <span className="flex items-center gap-2">
                  <strong className="text-lg font-black tracking-[-0.04em] text-white">95%</strong>
                  <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>Client Satisfaction</span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">

          {/* CASE STUDY GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
            {PROJECTS.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative flex flex-col justify-between overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "linear-gradient(160deg, #141414 0%, #0d0d0d 100%)",
                  borderRadius: 22,
                  border: `1px solid ${C.wa(0.09)}`,
                  boxShadow: "0 10px 32px rgba(0, 0, 0, 0.45)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.la(0.35);
                  e.currentTarget.style.boxShadow = `0 16px 44px ${C.la(0.09)}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.wa(0.09);
                  e.currentTarget.style.boxShadow = "0 10px 32px rgba(0, 0, 0, 0.45)";
                }}
              >
                {/* LIME GLOW — Top-Right (matches hero light cone) */}
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[72px] pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(182,255,0,0.13) 0%, rgba(100,160,0,0.06) 60%, transparent 80%)",
                  }}
                />

                {/* ORGANIC CURVED PETAL WATERMARK (Top-Right in Brand Lime) */}
                <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden rounded-tr-[22px]">
                  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    {/* Outer soft petal */}
                    <path
                      d="M 50,0 C 70,85 125,140 200,150 L 200,0 Z"
                      fill={C.la(0.04)}
                    />
                    {/* Inner soft petal */}
                    <path
                      d="M 105,0 C 120,60 150,95 200,105 L 200,0 Z"
                      fill={C.la(0.08)}
                    />
                  </svg>
                </div>

                {/* ORGANIC SUBTLE CURVE (Bottom-Right) */}
                <div className="absolute bottom-0 right-0 w-36 h-36 pointer-events-none overflow-hidden rounded-br-[22px] opacity-40">
                  <svg viewBox="0 0 150 150" fill="none" className="w-full h-full">
                    <path
                      d="M 150,55 C 95,65 65,110 55,150 L 150,150 Z"
                      fill={C.ga(0.04)}
                    />
                  </svg>
                </div>

                {/* LIME GLOW — Bottom-Right (matches top-right) */}
                <div
                  className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-[72px] pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(182,255,0,0.13) 0%, rgba(100,160,0,0.06) 60%, transparent 80%)",
                  }}
                />

                {/* CARD CONTENT */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Top Label: CASE STUDY */}
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#B6FF00] transition-colors duration-300 group-hover:text-[#B6FF00]">
                    CASE STUDY
                  </div>

                  <h2 className="mb-3.5 block text-lg font-black leading-tight tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-xl lg:text-2xl">
                    {project.title}
                  </h2>

                  <div
                    className="mb-4 h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, ${C.la(0.35)}, ${C.wa(0.07)})`,
                    }}
                  />

                  <p
                    className="mb-6 flex-1 text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {project.problem}
                  </p>

                  {/* Tags / Pills */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.01em] rounded-full transition-colors duration-200"
                        style={{
                          background: C.la(0.06),
                          border: `1px solid ${C.la(0.22)}`,
                          color: C.lime,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Details Button */}
                  <Link
                    to={project.link}
                    className="inline-flex w-full items-center justify-center px-5 py-3.5 text-center text-sm font-extrabold transition-all duration-200 active:scale-[0.99]"
                    style={{
                      background: C.lime,
                      color: C.black,
                      borderRadius: 12,
                      boxShadow: `0 4px 20px ${C.la(0.24)}`,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.green;
                      e.currentTarget.style.boxShadow = `0 6px 28px ${C.la(0.45)}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = C.lime;
                      e.currentTarget.style.boxShadow = `0 4px 20px ${C.la(0.24)}`;
                    }}
                  >
                    View Case Study
                  </Link>
                </div>
              </motion.article>
            ))}
          </section>

          {/* EMPTY STATE */}
          {PROJECTS.length === 0 && (
            <div
              className="py-20 text-center"
              style={{
                border: `1px solid ${C.wa(0.08)}`,
                background: C.graphite,
              }}
            >
              <p className="text-base text-white/64 leading-[1.5rem]">
                No case studies available in this category yet.
              </p>
            </div>
          )}
        </div>

        {/* TESTIMONIALS SECTION */}
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;