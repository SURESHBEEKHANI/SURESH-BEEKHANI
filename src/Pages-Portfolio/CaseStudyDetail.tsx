import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const C = {
  black: "#050505",
  white: "#FFFFFF",
  lime: "#B6FF00",
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

interface Metric { stat: string; label: string; }
interface CaseStudy {
  id: string; title: string; category: string; industry: string;
  problem: string; solution: string; outcome: string;
  metrics: Metric[]; tags: string[]; image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "insurance-fraud-detection",
    title: "AI-Powered Fraud Detection for Insurance",
    category: "AI & Automation", industry: "Insurance",
    problem: "Manual claims investigation made it difficult to identify suspicious patterns quickly. Investigators were overwhelmed by case volume, and fraudulent claims slipped through at significant cost.",
    solution: "Developed an AI-driven fraud detection system that analyzes claims data and identifies anomalous patterns using machine learning models trained on historical fraud signals, network graphs, and behavioral analytics.",
    outcome: "Faster claim investigation with automated risk detection, dramatically reducing false positives and saving the client millions in fraudulent payouts.",
    metrics: [{ stat: "60%", label: "Faster Detection" }, { stat: "3x", label: "Investigation Speed" }, { stat: "24/7", label: "Monitoring" }],
    tags: ["Machine Learning", "Fraud Detection", "Analytics", "Automation"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
  },
  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation Platform",
    category: "AI & Automation", industry: "Business Operations",
    problem: "Repetitive administrative workflows required significant manual effort across teams, causing bottlenecks, delays, and high operational costs.",
    solution: "Designed an AI automation platform connecting business processes, data sources, and intelligent agents using n8n orchestration, custom APIs, and GPT-powered decision nodes.",
    outcome: "Reduced repetitive work and accelerated internal workflows, freeing teams to focus on higher-value strategic tasks.",
    metrics: [{ stat: "70%", label: "Admin Work Reduced" }, { stat: "10x", label: "Workflow Speed" }, { stat: "24/7", label: "Automation" }],
    tags: ["AI Agents", "Automation", "n8n", "APIs", "Workflows"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
  },
  {
    id: "clinical-decision-support",
    title: "Clinical Decision Support AI",
    category: "Healthcare AI", industry: "Healthcare",
    problem: "Diagnostic data retrieval and medical charting was slowing clinical consultations and patient diagnosis, leading to physician burnout and compromised care quality.",
    solution: "Developed an AI decision-support copilot integrated directly into EHR systems with automated clinical summarization, ICD code suggestions, and real-time diagnostic assistance.",
    outcome: "Reduced physician charting time by 55% with faster diagnostic accuracy and full HIPAA compliance.",
    metrics: [{ stat: "55%", label: "Faster Charting" }, { stat: "4x", label: "Diagnosis Retrieval" }, { stat: "HIPAA", label: "Compliant" }],
    tags: ["Healthcare AI", "Clinical NLP", "EHR", "Predictive Analytics"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
  },
  {
    id: "real-estate-ai-platform",
    title: "Real Estate AI Lead Intelligence",
    category: "Custom Software", industry: "Real Estate",
    problem: "Agents spent hours manually qualifying leads with no predictive insight into buyer intent or closing probability, wasting resources on low-quality prospects.",
    solution: "Built a custom AI platform that scores, segments, and nurtures leads automatically using behavioral data, NLP, and predictive intent modeling.",
    outcome: "Conversion rates doubled with 80% less manual follow-up effort and sub-2-minute lead response times.",
    metrics: [{ stat: "2x", label: "Conversion Rate" }, { stat: "80%", label: "Less Manual Work" }, { stat: "<2min", label: "Lead Response" }],
    tags: ["Lead Scoring", "NLP", "CRM Integration", "Automation"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
  },
  {
    id: "ecommerce-ai-personalization",
    title: "E-Commerce AI Personalization Engine",
    category: "AI & Automation", industry: "E-Commerce",
    problem: "Generic product recommendations resulted in low engagement and high cart abandonment rates, leaving significant revenue on the table.",
    solution: "Developed a real-time AI personalization engine analyzing browsing behavior, purchase history, and intent signals to surface hyper-relevant products for each shopper.",
    outcome: "Revenue per visitor increased by 38% within 90 days of deployment with a major reduction in cart abandonment.",
    metrics: [{ stat: "38%", label: "Revenue Per Visitor" }, { stat: "22%", label: "Cart Abandonment Drop" }, { stat: "5x", label: "Recommendation CTR" }],
    tags: ["Recommendation Engine", "ML", "Real-Time AI", "E-Commerce"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
  },
  {
    id: "fintech-risk-analytics",
    title: "FinTech Credit Risk Analytics Platform",
    category: "AI & Automation", industry: "Financial Services",
    problem: "Traditional credit scoring models failed to capture non-traditional borrower signals, causing high default rates and exclusion of creditworthy underserved populations.",
    solution: "Engineered an ML-driven risk analytics platform processing 200+ alternative data signals for real-time credit decisions, including social, behavioral, and transactional patterns.",
    outcome: "Default rates reduced by 42% while approvals increased for creditworthy underserved borrowers.",
    metrics: [{ stat: "42%", label: "Default Rate Reduction" }, { stat: "200+", label: "Data Signals" }, { stat: "<3s", label: "Decision Time" }],
    tags: ["FinTech", "Risk Modeling", "Machine Learning", "Real-Time"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
  },
  {
    id: "legal-document-ai",
    title: "Legal Document Intelligence System",
    category: "Custom Software", industry: "Legal Tech",
    problem: "Law firms were spending thousands of billable hours manually reviewing contracts and extracting key clauses, creating delays and increasing error risk.",
    solution: "Built an AI-powered document intelligence platform that extracts, classifies, and risk-scores legal clauses instantly using fine-tuned NLP models and a custom clause taxonomy.",
    outcome: "Contract review time reduced from days to minutes with 94% extraction accuracy across 10,000+ documents processed.",
    metrics: [{ stat: "94%", label: "Extraction Accuracy" }, { stat: "90%", label: "Time Saved" }, { stat: "10k+", label: "Docs Processed" }],
    tags: ["Legal AI", "NLP", "Document Processing", "Classification"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
  },
  {
    id: "edtech-adaptive-learning",
    title: "Adaptive Learning AI for EdTech",
    category: "Healthcare AI", industry: "Education",
    problem: "One-size-fits-all course content failed students who learned at different paces, leading to high dropout rates and poor learning outcomes.",
    solution: "Designed an adaptive AI engine that personalizes learning paths, pacing, and content difficulty per student in real time, integrating with existing LMS platforms.",
    outcome: "Student completion rates improved by 65% with measurable learning outcome gains and 3x engagement increase.",
    metrics: [{ stat: "65%", label: "Completion Rate Up" }, { stat: "3x", label: "Engagement" }, { stat: "48h", label: "Onboarding Cut" }],
    tags: ["EdTech", "Adaptive AI", "Personalization", "LMS Integration"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
  },
  {
    id: "supply-chain-ai-optimization",
    title: "AI-Driven Supply Chain Optimization",
    category: "AI & Automation", industry: "Logistics & Supply Chain",
    problem: "Supply chain disruptions and inaccurate demand forecasting led to excess inventory, missed delivery windows, and ballooning operational costs.",
    solution: "Implemented an AI forecasting and optimization system integrating live supplier, logistics, and market demand data across 15+ sources for real-time decision intelligence.",
    outcome: "Inventory costs cut by 30% with 98% on-time delivery performance achieved across all distribution nodes.",
    metrics: [{ stat: "30%", label: "Inventory Cost Cut" }, { stat: "98%", label: "On-Time Delivery" }, { stat: "15+", label: "Data Sources Unified" }],
    tags: ["Supply Chain", "Forecasting", "Optimization", "Logistics AI"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
  },
];

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = CASE_STUDIES.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
          <p className="text-6xl font-black mb-4" style={{ color: C.lime }}>404</p>
          <p className="mb-8 text-lg" style={{ color: C.wa(0.5) }}>Case study not found.</p>
          <Link to="/portfolio" className="px-6 py-3 rounded-full font-bold text-black text-sm" style={{ background: C.lime }}>
            Back to Portfolio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32" style={{ borderBottom: `1px solid ${C.wa(0.08)}` }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, #1e3300 0%, #111d00 35%, #080f00 65%, #050505 100%)" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(182,255,0,0.16) 0%, rgba(100,160,0,0.08) 60%, transparent 80%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-widest" style={{ color: C.wa(0.45) }}>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>/</span>
            <span style={{ color: C.lime }}>{project.industry}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.4 }} className="text-[11px] font-bold uppercase tracking-[0.28em] mb-4" style={{ color: C.lime }}>
            Case Study · {project.category}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-3xl sm:text-5xl lg:text-[56px] font-black tracking-[-0.03em] leading-[1.1] mb-8" style={{ color: C.white }}>
            {project.title}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.18)}` }}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section className="w-full py-10 sm:py-14" style={{ borderBottom: `1px solid ${C.wa(0.06)}` }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-3 gap-6 sm:gap-12">
            {project.metrics.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }} className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-5xl font-black tracking-tight mb-1" style={{ color: C.lime }}>{m.stat}</span>
                <span className="text-xs sm:text-sm font-medium" style={{ color: C.wa(0.5) }}>{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-14">
        {[
          { label: "The Challenge", text: project.problem },
          { label: "Our Solution", text: project.solution },
          { label: "Results & Outcome", text: project.outcome },
        ].map((block, i) => (
          <React.Fragment key={block.label}>
            {i > 0 && <div className="w-full h-px" style={{ background: C.wa(0.07) }} />}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}>
              <div className="text-[11px] font-bold uppercase tracking-[0.26em] mb-3" style={{ color: C.lime }}>{block.label}</div>
              <p className="text-lg sm:text-xl leading-relaxed" style={{ color: C.wa(0.75) }}>{block.text}</p>
            </motion.section>
          </React.Fragment>
        ))}

        <div className="w-full h-px" style={{ background: C.wa(0.07) }} />

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black transition-opacity hover:opacity-90" style={{ background: C.lime }}>
            Start a Similar Project <span aria-hidden="true">→</span>
          </Link>
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-colors" style={{ color: C.wa(0.7), border: `1px solid ${C.wa(0.12)}` }}>
            ← All Case Studies
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
