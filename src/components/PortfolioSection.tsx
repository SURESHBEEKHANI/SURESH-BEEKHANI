import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ─── BRAND TOKENS ───────────────────────────────────────────────────────────
const C = {
  black: "#050505",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

// ─── PROJECTS ────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "insurance-fraud-detection",
    title: "AI-Powered Fraud Detection for Insurance",
    category: "AI & Automation", industry: "Insurance",
    problem: "Manual claims investigation made it difficult to identify suspicious patterns quickly.",
    tags: ["Machine Learning", "Fraud Detection", "Analytics", "Automation"],
    metrics: [{ stat: "60%", label: "Faster Detection" }, { stat: "3x", label: "Investigation Speed" }, { stat: "24/7", label: "Monitoring" }],
    link: "/portfolio/insurance-fraud-detection",
  },
  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation Platform",
    category: "AI & Automation", industry: "Business Operations",
    problem: "Repetitive administrative workflows required significant manual effort across teams.",
    tags: ["AI Agents", "Automation", "n8n", "APIs", "Workflows"],
    metrics: [{ stat: "70%", label: "Admin Work Reduced" }, { stat: "10x", label: "Workflow Speed" }, { stat: "24/7", label: "Automation" }],
    link: "/portfolio/ai-workflow-automation",
  },
  {
    id: "clinical-decision-support",
    title: "Clinical Decision Support AI",
    category: "Healthcare AI", industry: "Healthcare",
    problem: "Diagnostic data retrieval and medical charting was slowing clinical consultations and patient diagnosis.",
    tags: ["Healthcare AI", "Clinical NLP", "EHR", "Predictive Analytics"],
    metrics: [{ stat: "55%", label: "Faster Charting" }, { stat: "4x", label: "Diagnosis Retrieval" }, { stat: "HIPAA", label: "Compliant" }],
    link: "/portfolio/clinical-decision-support",
  },
  {
    id: "real-estate-ai-platform",
    title: "Real Estate AI Lead Intelligence",
    category: "Custom Software", industry: "Real Estate",
    problem: "Agents spent hours manually qualifying leads with no predictive insight into buyer intent or closing probability.",
    tags: ["Lead Scoring", "NLP", "CRM Integration", "Automation"],
    metrics: [{ stat: "2x", label: "Conversion Rate" }, { stat: "80%", label: "Less Manual Work" }, { stat: "<2min", label: "Lead Response" }],
    link: "/portfolio/real-estate-ai-platform",
  },
  {
    id: "ecommerce-ai-personalization",
    title: "E-Commerce AI Personalization Engine",
    category: "AI & Automation", industry: "E-Commerce",
    problem: "Generic product recommendations resulted in low engagement and high cart abandonment rates.",
    tags: ["Recommendation Engine", "ML", "Real-Time AI", "E-Commerce"],
    metrics: [{ stat: "38%", label: "Revenue Per Visitor" }, { stat: "22%", label: "Cart Abandonment Drop" }, { stat: "5x", label: "Recommendation CTR" }],
    link: "/portfolio/ecommerce-ai-personalization",
  },
  {
    id: "fintech-risk-analytics",
    title: "FinTech Credit Risk Analytics Platform",
    category: "AI & Automation", industry: "Financial Services",
    problem: "Traditional credit scoring models failed to capture non-traditional borrower signals, causing high default rates.",
    tags: ["FinTech", "Risk Modeling", "Machine Learning", "Real-Time"],
    metrics: [{ stat: "42%", label: "Default Rate Reduction" }, { stat: "200+", label: "Data Signals" }, { stat: "<3s", label: "Decision Time" }],
    link: "/portfolio/fintech-risk-analytics",
  },
  {
    id: "legal-document-ai",
    title: "Legal Document Intelligence System",
    category: "Custom Software", industry: "Legal Tech",
    problem: "Law firms were spending thousands of billable hours manually reviewing contracts and extracting key clauses.",
    tags: ["Legal AI", "NLP", "Document Processing", "Classification"],
    metrics: [{ stat: "94%", label: "Extraction Accuracy" }, { stat: "90%", label: "Time Saved" }, { stat: "10k+", label: "Docs Processed" }],
    link: "/portfolio/legal-document-ai",
  },
  {
    id: "edtech-adaptive-learning",
    title: "Adaptive Learning AI for EdTech",
    category: "Healthcare AI", industry: "Education",
    problem: "One-size-fits-all course content failed students who learned at different paces, leading to high dropout rates.",
    tags: ["EdTech", "Adaptive AI", "Personalization", "LMS Integration"],
    metrics: [{ stat: "65%", label: "Completion Rate Up" }, { stat: "3x", label: "Engagement" }, { stat: "48h", label: "Onboarding Cut" }],
    link: "/portfolio/edtech-adaptive-learning",
  },
  {
    id: "supply-chain-ai-optimization",
    title: "AI-Driven Supply Chain Optimization",
    category: "AI & Automation", industry: "Logistics & Supply Chain",
    problem: "Supply chain disruptions and inaccurate demand forecasting led to excess inventory and missed delivery windows.",
    tags: ["Supply Chain", "Forecasting", "Optimization", "Logistics AI"],
    metrics: [{ stat: "30%", label: "Inventory Cost Cut" }, { stat: "98%", label: "On-Time Delivery" }, { stat: "15+", label: "Data Sources Unified" }],
    link: "/portfolio/supply-chain-ai-optimization",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const PortfolioSection: React.FC = () => {
  return (
    <section
      className="w-full py-20 sm:py-28"
      style={{ background: C.black }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-16"
        >
          <div
            className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: C.lime }}
          >
            Selected Work
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ color: C.white }}
          >
            Proof of Execution
          </h2>
          <p
            className="max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: C.wa(0.55) }}
          >
            AI systems and software products we have built across industries — from healthcare to logistics.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {PROJECTS.slice(0, 6).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
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
              {/* LIME GLOW — Top-Right */}
              <div
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[72px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(182,255,0,0.13) 0%, rgba(100,160,0,0.06) 60%, transparent 80%)" }}
              />

              {/* ORGANIC CURVED PETAL WATERMARK */}
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden rounded-tr-[22px]">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <path d="M 50,0 C 70,85 125,140 200,150 L 200,0 Z" fill={C.la(0.04)} />
                  <path d="M 105,0 C 120,60 150,95 200,105 L 200,0 Z" fill={C.la(0.08)} />
                </svg>
              </div>

              {/* ORGANIC SUBTLE CURVE — Bottom-Right */}
              <div className="absolute bottom-0 right-0 w-36 h-36 pointer-events-none overflow-hidden rounded-br-[22px] opacity-40">
                <svg viewBox="0 0 150 150" fill="none" className="w-full h-full">
                  <path d="M 150,55 C 95,65 65,110 55,150 L 150,150 Z" fill={C.ga(0.04)} />
                </svg>
              </div>

              {/* LIME GLOW — Bottom-Right */}
              <div
                className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-[72px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(182,255,0,0.13) 0%, rgba(100,160,0,0.06) 60%, transparent 80%)" }}
              />

              {/* CARD CONTENT */}
              <div className="relative z-10 flex flex-col flex-1">
                {/* Top Label */}
                <div className="text-[11px] font-bold uppercase tracking-[0.24em] mb-3" style={{ color: C.lime }}>
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
                  style={{ background: `linear-gradient(90deg, ${C.la(0.35)}, ${C.wa(0.07)})` }}
                />

                {/* Problem */}
                <p className="text-[14px] leading-[1.65] mb-6 flex-1 font-normal" style={{ color: C.wa(0.68) }}>
                  {project.problem}
                </p>

                {/* Tags */}
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

                {/* CTA Button */}
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
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black transition-opacity hover:opacity-90"
            style={{ background: C.lime }}
          >
            View All Case Studies
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
