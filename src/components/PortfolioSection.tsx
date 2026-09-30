import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ─── VELNIX COLOR SYSTEM — LOCKED ─────────────────────────────────────────
const C = {
  BLACK: '#050505',
  LIME: '#B6FF00',
  WHITE: '#FFFFFF',
  GRAPHITE: '#111111',
  DEEP_GREEN: '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
} as const;

// ─── PROJECTS ────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "insurance-fraud-detection",
    title: "Insurance Fraud Detection",
    category: "AI & Automation", industry: "Insurance",
    problem: "Claims teams could not surface suspicious patterns quickly enough through manual investigation.",
    tags: ["Machine Learning", "Fraud Detection", "Analytics", "Automation"],
    metrics: [{ stat: "60%", label: "Faster Detection" }, { stat: "3x", label: "Investigation Speed" }, { stat: "24/7", label: "Monitoring" }],
    link: "/portfolio/insurance-fraud-detection",
  },
  {
    id: "ai-workflow-automation",
    title: "Workflow Automation Platform",
    category: "AI & Automation", industry: "Operations",
    problem: "Administrative work was repeated across teams with no shared automation layer.",
    tags: ["AI Agents", "Automation", "n8n", "APIs", "Workflows"],
    metrics: [{ stat: "70%", label: "Admin Work Reduced" }, { stat: "10x", label: "Workflow Speed" }, { stat: "24/7", label: "Automation" }],
    link: "/portfolio/ai-workflow-automation",
  },
  {
    id: "clinical-decision-support",
    title: "Clinical Decision Support",
    category: "Healthcare AI", industry: "Healthcare",
    problem: "Charting and diagnostic retrieval slowed consultations and delayed clinical decisions.",
    tags: ["Healthcare AI", "Clinical NLP", "EHR", "Predictive Analytics"],
    metrics: [{ stat: "55%", label: "Faster Charting" }, { stat: "4x", label: "Diagnosis Retrieval" }, { stat: "HIPAA", label: "Compliant" }],
    link: "/portfolio/clinical-decision-support",
  },
  {
    id: "real-estate-ai-platform",
    title: "Real Estate Lead Intelligence",
    category: "Custom Software", industry: "Real Estate",
    problem: "Agents qualified leads by hand, without a reliable signal for buyer intent or close probability.",
    tags: ["Lead Scoring", "NLP", "CRM Integration", "Automation"],
    metrics: [{ stat: "2x", label: "Conversion Rate" }, { stat: "80%", label: "Less Manual Work" }, { stat: "<2min", label: "Lead Response" }],
    link: "/portfolio/real-estate-ai-platform",
  },
  {
    id: "ecommerce-ai-personalization",
    title: "E-Commerce Personalization",
    category: "AI & Automation", industry: "E-Commerce",
    problem: "Generic recommendations reduced engagement and increased cart abandonment.",
    tags: ["Recommendation Engine", "ML", "Real-Time AI", "E-Commerce"],
    metrics: [{ stat: "38%", label: "Revenue Per Visitor" }, { stat: "22%", label: "Cart Abandonment Drop" }, { stat: "5x", label: "Recommendation CTR" }],
    link: "/portfolio/ecommerce-ai-personalization",
  },
  {
    id: "fintech-risk-analytics",
    title: "Credit Risk Analytics",
    category: "AI & Automation", industry: "Financial Services",
    problem: "Legacy scoring missed non-traditional borrower signals and inflated default risk.",
    tags: ["FinTech", "Risk Modeling", "Machine Learning", "Real-Time"],
    metrics: [{ stat: "42%", label: "Default Rate Reduction" }, { stat: "200+", label: "Data Signals" }, { stat: "<3s", label: "Decision Time" }],
    link: "/portfolio/fintech-risk-analytics",
  },
  {
    id: "legal-document-ai",
    title: "Legal Document Intelligence",
    category: "Custom Software", industry: "Legal",
    problem: "Contract review consumed billable hours that should have gone to analysis and counsel.",
    tags: ["Legal AI", "NLP", "Document Processing", "Classification"],
    metrics: [{ stat: "94%", label: "Extraction Accuracy" }, { stat: "90%", label: "Time Saved" }, { stat: "10k+", label: "Docs Processed" }],
    link: "/portfolio/legal-document-ai",
  },
  {
    id: "edtech-adaptive-learning",
    title: "Adaptive Learning Platform",
    category: "Healthcare AI", industry: "Education",
    problem: "Uniform course pacing left learners behind and increased dropout.",
    tags: ["EdTech", "Adaptive AI", "Personalization", "LMS Integration"],
    metrics: [{ stat: "65%", label: "Completion Rate Up" }, { stat: "3x", label: "Engagement" }, { stat: "48h", label: "Onboarding Cut" }],
    link: "/portfolio/edtech-adaptive-learning",
  },
  {
    id: "supply-chain-ai-optimization",
    title: "Supply Chain Optimization",
    category: "AI & Automation", industry: "Logistics",
    problem: "Inaccurate demand forecasts produced excess inventory and missed delivery windows.",
    tags: ["Supply Chain", "Forecasting", "Optimization", "Logistics AI"],
    metrics: [{ stat: "30%", label: "Inventory Cost Cut" }, { stat: "98%", label: "On-Time Delivery" }, { stat: "15+", label: "Data Sources Unified" }],
    link: "/portfolio/supply-chain-ai-optimization",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const PortfolioSection: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden pb-8 pt-12 font-display md:pb-10 md:pt-16 lg:pb-12 lg:pt-20"
      style={{ background: C.BLACK }}
      aria-label="Selected Work"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col items-center text-center sm:mb-10"
        >
          <div className="mb-7 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
            <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
            Selected Work
            <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
          </div>

          <h2
            className="max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
            style={{ color: C.WHITE }}
          >
            Work{' '}
            <span style={{ color: C.LIME }}>We Have Shipped.</span>
          </h2>

          <p
            className="mt-3 max-w-xl text-center text-lg leading-8 sm:text-xl"
            style={{ color: 'rgba(255, 255, 255, 0.64)' }}
          >
            From intelligence to operations. Outcomes you can measure.
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
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#B6FF00] transition-colors duration-300 group-hover:text-[#B6FF00]">
                  CASE STUDY
                </div>

                <h3 className="mb-3.5 block text-lg font-black leading-tight tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-xl lg:text-2xl">
                  {project.title}
                </h3>

                <div
                  className="mb-4 h-px w-full"
                  style={{ background: `linear-gradient(90deg, ${C.la(0.35)}, ${C.wa(0.07)})` }}
                />

                <p
                  className="mb-6 flex-1 text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
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
                        color: C.LIME,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={project.link}
                  className="inline-flex w-full items-center justify-center px-5 py-3.5 text-center text-sm font-extrabold transition-all duration-200 active:scale-[0.99]"
                  style={{
                    background: C.LIME,
                    color: C.BLACK,
                    borderRadius: 12,
                    boxShadow: `0 4px 20px ${C.la(0.24)}`,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.DEEP_GREEN;
                    e.currentTarget.style.boxShadow = `0 6px 28px ${C.la(0.45)}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.LIME;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${C.la(0.24)}`;
                  }}
                >
                  View Case Study
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
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-extrabold text-black transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: C.LIME, boxShadow: '0 0 30px rgba(182,255,0,0.25)' }}
          >
            See More Work
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
