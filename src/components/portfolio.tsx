import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
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
    title: "AI-Powered Fraud Detection for Insurance",
    category: "AI & Automation",
    industry: "Insurance",
    problem:
      "Manual claims investigation made it difficult to identify suspicious patterns quickly.",
    solution:
      "Developed an AI-driven fraud detection system that analyzes claims data and identifies anomalous patterns.",
    outcome:
      "Faster claim investigation with automated risk detection.",
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
    title: "AI Workflow Automation Platform",
    category: "AI & Automation",
    industry: "Business Operations",
    problem:
      "Repetitive administrative workflows required significant manual effort across teams.",
    solution:
      "Designed an AI automation platform connecting business processes, data sources, and intelligent agents.",
    outcome:
      "Reduced repetitive work and accelerated internal workflows.",
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
    title: "Clinical Decision Support AI",
    category: "Healthcare AI",
    industry: "Healthcare",
    problem:
      "Diagnostic data retrieval and medical charting was slowing clinical consultations and patient diagnosis.",
    solution:
      "Developed an AI decision-support copilot integrated directly into EHR systems with automated clinical summarization.",
    outcome:
      "Reduced physician charting time by 55% with faster diagnostic accuracy.",
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
    title: "Real Estate AI Lead Intelligence",
    category: "Custom Software",
    industry: "Real Estate",
    problem:
      "Agents spent hours manually qualifying leads with no predictive insight into buyer intent or closing probability.",
    solution:
      "Built a custom AI platform that scores, segments, and nurtures leads automatically using behavioral data and NLP.",
    outcome:
      "Conversion rates doubled with 80% less manual follow-up effort.",
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
    title: "E-Commerce AI Personalization Engine",
    category: "AI & Automation",
    industry: "E-Commerce",
    problem:
      "Generic product recommendations resulted in low engagement and high cart abandonment rates.",
    solution:
      "Developed a real-time AI personalization engine analyzing browsing behavior, purchase history, and intent signals.",
    outcome:
      "Revenue per visitor increased by 38% within 90 days of deployment.",
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
    title: "FinTech Credit Risk Analytics Platform",
    category: "AI & Automation",
    industry: "Financial Services",
    problem:
      "Traditional credit scoring models failed to capture non-traditional borrower signals, causing high default rates.",
    solution:
      "Engineered an ML-driven risk analytics platform processing 200+ alternative data signals for real-time credit decisions.",
    outcome:
      "Default rates reduced by 42% while approvals increased for creditworthy underserved borrowers.",
    metrics: [
      { stat: "42%", label: "Default Rate Reduction" },
      { stat: "200+", label: "Data Signals" },
      { stat: "< 3s", label: "Decision Time" },
    ],
    tags: ["FinTech", "Risk Modeling", "Machine Learning", "Real-Time"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
    link: "/portfolio/fintech-risk-analytics",
  },

  {
    id: "legal-document-ai",
    title: "Legal Document Intelligence System",
    category: "Custom Software",
    industry: "Legal Tech",
    problem:
      "Law firms were spending thousands of billable hours manually reviewing contracts and extracting key clauses.",
    solution:
      "Built an AI-powered document intelligence platform that extracts, classifies, and risk-scores legal clauses instantly.",
    outcome:
      "Contract review time reduced from days to minutes with 94% extraction accuracy.",
    metrics: [
      { stat: "94%", label: "Extraction Accuracy" },
      { stat: "90%", label: "Time Saved" },
      { stat: "10k+", label: "Docs Processed" },
    ],
    tags: ["Legal AI", "NLP", "Document Processing", "Classification"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
    link: "/portfolio/legal-document-ai",
  },

  {
    id: "edtech-adaptive-learning",
    title: "Adaptive Learning AI for EdTech",
    category: "Healthcare AI",
    industry: "Education",
    problem:
      "One-size-fits-all course content failed students who learned at different paces, leading to high dropout rates.",
    solution:
      "Designed an adaptive AI engine that personalizes learning paths, pacing, and content difficulty per student in real time.",
    outcome:
      "Student completion rates improved by 65% with measurable learning outcome gains.",
    metrics: [
      { stat: "65%", label: "Completion Rate Up" },
      { stat: "3×", label: "Engagement" },
      { stat: "48h", label: "Avg. Onboarding Cut" },
    ],
    tags: ["EdTech", "Adaptive AI", "Personalization", "LMS Integration"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
    link: "/portfolio/edtech-adaptive-learning",
  },

  {
    id: "supply-chain-ai-optimization",
    title: "AI-Driven Supply Chain Optimization",
    category: "AI & Automation",
    industry: "Logistics & Supply Chain",
    problem:
      "Supply chain disruptions and inaccurate demand forecasting led to excess inventory and missed delivery windows.",
    solution:
      "Implemented an AI forecasting and optimization system integrating live supplier, logistics, and market demand data.",
    outcome:
      "Inventory costs cut by 30% with 98% on-time delivery performance achieved.",
    metrics: [
      { stat: "30%", label: "Inventory Cost Cut" },
      { stat: "98%", label: "On-Time Delivery" },
      { stat: "15+", label: "Data Sources Unified" },
    ],
    tags: ["Supply Chain", "Forecasting", "Optimization", "Logistics AI"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
    link: "/portfolio/supply-chain-ai-optimization",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO
// ─────────────────────────────────────────────────────────────────────────────

const Portfolio: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <div
      className="min-h-screen flex flex-col antialiased"
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
        <section className="relative w-full overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 text-center border-b border-white/10">
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
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 sm:mb-6 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.32em] text-white/80"
            >
              PORTFOLIO
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 max-w-4xl text-3xl sm:text-4xl font-black leading-tight tracking-[-0.04em]"
              style={{
                color: "#B6FF00",
                textShadow: "0 0 60px rgba(182,255,0,0.30)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Engineering AI Systems That<br className="hidden sm:inline" /> Move Businesses Forward.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-9 max-w-2xl text-sm sm:text-base lg:text-[17px] leading-relaxed text-white/75"
            >
              Explore detailed case studies demonstrating how Velnix transforms operational complexity into intelligent software systems, automated workflows, and high-performance digital products.
            </motion.p>

            {/* Inline Stats in Frosted Glass Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-3 px-6 sm:px-8 rounded-full bg-black/40 border border-white/[0.08] backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)] text-sm sm:text-base font-medium text-white/90"
            >
              <span className="flex items-center gap-2">
                <strong className="font-extrabold text-white text-base sm:text-lg tracking-tight">45+</strong>
                <span className="text-white/75 text-xs sm:text-sm">AI Systems Built</span>
              </span>
              <span className="hidden sm:inline text-[#74DF36]/40 select-none">|</span>
              <span className="flex items-center gap-2">
                <strong className="font-extrabold text-white text-base sm:text-lg tracking-tight">23+</strong>
                <span className="text-white/75 text-xs sm:text-sm">Clients Served</span>
              </span>
              <span className="hidden sm:inline text-[#74DF36]/40 select-none">|</span>
              <span className="flex items-center gap-2">
                <strong className="font-extrabold text-white text-base sm:text-lg tracking-tight">95%</strong>
                <span className="text-white/75 text-xs sm:text-sm">Client Satisfaction</span>
              </span>
            </motion.div>
          </div>
        </section>

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-24">

          {/* CASE STUDY GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
            {visibleProjects.map((project, i) => (
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
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.24em] mb-3"
                    style={{ color: C.lime }}
                  >
                    CASE STUDY
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[22px] font-extrabold tracking-[-0.025em] leading-snug mb-3.5 transition-colors duration-200 group-hover:text-[#B6FF00]"
                    style={{ color: C.white }}
                  >
                    {project.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="h-[1px] w-full mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${C.la(0.35)}, ${C.wa(0.07)})`,
                    }}
                  />

                  {/* Description / Summary */}
                  <p
                    className="text-[14px] leading-[1.65] mb-6 flex-1 font-normal"
                    style={{ color: C.wa(0.68) }}
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
                    className="inline-flex items-center justify-center w-full py-3.5 px-5 text-sm font-bold transition-all duration-200 active:scale-[0.99] text-center"
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
                    View Project Details
                  </Link>
                </div>
              </motion.article>
            ))}
          </section>

          {/* VIEW ALL CASE STUDIES BUTTON */}
          {!showAll && PROJECTS.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center -mt-10 mb-20"
            >
              <Link
                to="/portfolio"
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black transition-all hover:scale-[1.02] active:scale-[0.98] hover:opacity-90"
                style={{
                  background: C.lime,
                  boxShadow: `0 4px 24px ${C.la(0.3)}`,
                  textDecoration: "none",
                }}
              >
                View All Case Studies
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          )}

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
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;