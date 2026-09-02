import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Layers, Zap, Database, BarChart3, ShieldCheck, Clock } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS (Velnix Locked Color System)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics?: { stat: string; label: string }[];
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "ehr-system",
    title: "AI-Powered Electronic Health Record (EHR)",
    category: "Healthcare AI",
    industry: "Clinics & Hospitals",
    problem: "Manual patient data entry caused physician burnout and delayed clinical documentation.",
    solution: "Built an intelligent EHR platform with ambient clinical note capture and structured data extraction.",
    outcome: "40% reduction in administrative overhead & instant chart accessibility.",
    metrics: [
      { stat: "40%", label: "Admin Time Saved" },
      { stat: "3x", label: "Faster Charting" },
      { stat: "100%", label: "HIPAA Compliant" },
    ],
    tags: ["Healthcare AI", "EHR Systems", "NLP", "Clinical Workflows"],
    image: "/image/Portfolio-img/ai-powered-ehr.png",
    link: "/portfolio/ai-powered-electronic-health-record",
    featured: true,
  },
  {
    id: "patient-management",
    title: "AI-Powered Patient Management System",
    category: "Custom Software",
    industry: "Health Systems",
    problem: "Fragmented patient communication and care tracking across multiple facilities.",
    solution: "Unified patient management hub with automated care coordination and risk stratification.",
    outcome: "Centralized operational visibility for multidisciplinary care teams.",
    metrics: [
      { stat: "2.5x", label: "Care Team Efficiency" },
      { stat: "98%", label: "Patient Record Accuracy" },
    ],
    tags: ["Care Coordination", "Patient Portals", "AI Analytics"],
    image: "/image/Portfolio-img/AI-Powered Patient Management System.png",
    link: "/portfolio/ai-powered-patient-management-system",
  },
  {
    id: "appointment-management",
    title: "AI Appointment Management Systems",
    category: "AI & Automation",
    industry: "Clinics & Medical Groups",
    problem: "High no-show rates and phone line congestion during peak booking hours.",
    solution: "Deployed predictive scheduling AI with multi-channel automated patient reminders.",
    outcome: "35% reduction in missed appointments and automated booking workflows.",
    metrics: [
      { stat: "35%", label: "Fewer No-Shows" },
      { stat: "24/7", label: "Automated Booking" },
    ],
    tags: ["Scheduling AI", "Automation", "Patient Reminders"],
    image: "/image/Portfolio-img/AI Appointment Management Systems.png",
    link: "/portfolio/ai-appointment-management-systems",
  },
  {
    id: "hospital-management",
    title: "AI-Powered Hospital Management System",
    category: "Custom Software",
    industry: "Hospital Operations",
    problem: "Manual bed allocation and supply chain delays during high-volume periods.",
    solution: "Integrated hospital operating platform with real-time bed tracking & resource forecasting.",
    outcome: "Optimized patient throughput and inventory turn rates across departments.",
    metrics: [
      { stat: "50%", label: "Faster Bed Turnaround" },
      { stat: "Real-time", label: "Resource Tracking" },
    ],
    tags: ["Hospital Ops", "Resource Forecasting", "Supply Chain"],
    image: "/image/Portfolio-img/AI-Powered Hospital Management System.png",
    link: "/portfolio/ai-powered-hospital-management-system",
  },
  {
    id: "telemedicine",
    title: "AI-Powered Telemedicine Platform",
    category: "AI & Automation",
    industry: "Virtual Care",
    problem: "Inability to scale virtual consultations while maintaining security & clinical quality.",
    solution: "Secure WebRTC virtual care engine with automated patient intake & triage AI.",
    outcome: "Instant virtual consultation launching with automated clinical summaries.",
    metrics: [
      { stat: "< 2 min", label: "Virtual Wait Time" },
      { stat: "100%", label: "Encrypted Stream" },
    ],
    tags: ["Telehealth", "Virtual Triage", "WebRTC", "Encrypted Data"],
    image: "/image/Portfolio-img/AI-Powered Telemedicine Systems.png",
    link: "/portfolio/ai-powered-telemedicine-systems",
  },
  {
    id: "clinical-documentation",
    title: "AI-Powered Clinical Documentation",
    category: "Healthcare AI",
    industry: "Medical Practice",
    problem: "Physicians spending up to 3 hours daily typing notes post-consultation.",
    solution: "Ambient AI scribe that transcribes doctor-patient dialogues into structured SOAP notes.",
    outcome: "Drastically reduced physician burnout and accelerated billing submissions.",
    metrics: [
      { stat: "2.5 hrs", label: "Daily Physician Time Saved" },
      { stat: "95%", label: "SOAP Note Accuracy" },
    ],
    tags: ["Ambient AI", "Speech-to-Text", "SOAP Notes"],
    image: "/image/Portfolio-img/AI-Powered-Clinical Documentation System.png",
    link: "/portfolio/ai-clinical-documentation-system",
  },
  {
    id: "diogenes-chatbot",
    title: "Diogenes Intelligent Conversational AI",
    category: "AI & Automation",
    industry: "Enterprise Knowledge",
    problem: "Internal teams struggling to retrieve policy and technical data from fragmented documents.",
    solution: "Context-aware RAG AI assistant trained on internal knowledge bases with strict permissions.",
    outcome: "Instant answers for operational teams with zero hallucination risk.",
    metrics: [
      { stat: "< 1 sec", label: "Query Response Time" },
      { stat: "100%", label: "Permission Governed" },
    ],
    tags: ["RAG Architecture", "Enterprise AI", "Knowledge Retrieval"],
    image: "/image/Portfolio-img/Diogenes AI ChatBot.png",
    link: "/portfolio/diogenes-ai-chatbot",
  },
  {
    id: "medical-imaging",
    title: "AI-Powered Medical Imaging System",
    category: "Healthcare AI",
    industry: "Radiology & Imaging",
    problem: "Radiologists overwhelmed by scan volumes leading to diagnostic bottlenecks.",
    solution: "Computer vision pipeline that pre-screens DICOM scans and highlights anomalies.",
    outcome: "Prioritized triage for urgent radiology cases and enhanced diagnostic speed.",
    metrics: [
      { stat: "4x", label: "Faster Triage Speed" },
      { stat: "DICOM", label: "Native Support" },
    ],
    tags: ["Computer Vision", "Radiology AI", "DICOM Pipeline"],
    image: "/image/Portfolio-img/AI-Powered Medical Imaging System.png",
    link: "/portfolio/ai-powered-medical-imaging-system",
  },
];

const CATEGORY_FILTERS = [
  { id: "all", label: "All Case Studies" },
  { id: "Healthcare AI", label: "Healthcare AI" },
  { id: "AI & Automation", label: "AI & Automation" },
  { id: "Custom Software", label: "Custom Software" },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const shouldReduce = useReducedMotion();

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
      <Navbar />

      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/3 rounded-full blur-[140px]" style={{ width: 600, height: 600, background: C.la(0.04) }} />
        <div className="absolute bottom-1/3 right-1/4 rounded-full blur-[140px]" style={{ width: 500, height: 500, background: C.ga(0.03) }} />
      </div>

      <main className="flex-grow relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* ══════════════════════════════════════════════════════
              1. HERO SECTION
          ══════════════════════════════════════════════════════ */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1"
                style={{
                  border: `1px solid ${C.la(0.3)}`,
                  background: C.la(0.06),
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.lime, boxShadow: `0 0 8px ${C.lime}` }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: C.lime, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  SELECTED WORK & PROOF OF EXECUTION
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: C.white,
                marginBottom: '1.25rem',
              }}
            >
              We Build Systems That Solve{' '}
              <span style={{ color: C.lime }}>Real Business Problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: C.wa(0.72),
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              Explore detailed case studies demonstrating how Velnix transforms operational complexity into intelligent software systems, automated workflows, and high-performance digital products.
            </motion.p>
          </div>

          {/* ══════════════════════════════════════════════════════
              2. FEATURED CASE STUDY (Spotlight Composition)
          ══════════════════════════════════════════════════════ */}
          {featuredProject && activeFilter === "all" && (
            <div className="mb-20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B6FF00] mb-4 block">
                Featured Case Study
              </span>

              <div 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 transition-all duration-300"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.12)}`,
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                }}
              >
                {/* Visual Preview */}
                <div className="lg:col-span-6 overflow-hidden bg-[#050505] border border-white/10 relative group">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-auto max-h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Case Study Details */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
                      >
                        {featuredProject.industry}
                      </span>
                      <span className="text-xs text-white/40 font-mono">{featuredProject.category}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                      {featuredProject.title}
                    </h2>

                    <div className="space-y-3 mb-6 text-xs sm:text-sm text-white/70 leading-relaxed">
                      <p><strong className="text-white">The Challenge:</strong> {featuredProject.problem}</p>
                      <p><strong className="text-white">Velnix Solution:</strong> {featuredProject.solution}</p>
                    </div>

                    {/* Key Verified Metrics */}
                    {featuredProject.metrics && (
                      <div className="grid grid-cols-3 gap-3 mb-8 p-4" style={{ background: C.wa(0.02), border: `1px solid ${C.wa(0.06)}` }}>
                        {featuredProject.metrics.map((m, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg sm:text-xl font-black" style={{ color: C.lime }}>{m.stat}</div>
                            <div className="text-[10px] text-white/50 uppercase font-semibold mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    to={featuredProject.link}
                    className="group/btn inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold text-black uppercase tracking-wider transition-all"
                    style={{ background: C.lime }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = C.green; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = C.lime; }}
                  >
                    View Full Case Study 
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              3. CATEGORY FILTERS & CASE STUDY GRID
          ══════════════════════════════════════════════════════ */}
          <div className="mb-12 flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{
                    background: activeFilter === cat.id ? C.lime : C.graphite,
                    color: activeFilter === cat.id ? C.black : C.wa(0.7),
                    border: `1px solid ${activeFilter === cat.id ? C.lime : C.wa(0.1)}`,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-white/40">
              Showing {filteredProjects.length} Verified Solutions
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between p-6 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.08)}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.la(0.35);
                  e.currentTarget.style.background = C.la(0.02);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.wa(0.08);
                  e.currentTarget.style.background = C.graphite;
                }}
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="overflow-hidden h-44 mb-5 bg-[#050505] border border-white/5 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span 
                      className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                      style={{ background: C.black, color: C.lime, border: `1px solid ${C.la(0.3)}` }}
                    >
                      {project.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#B6FF00] transition-colors leading-snug mb-3">
                    {project.title}
                  </h3>

                  {/* Business Problem */}
                  <p className="text-xs text-white/60 leading-relaxed mb-4 line-clamp-2">
                    <strong className="text-white/80">Problem:</strong> {project.problem}
                  </p>

                  {/* Solution Outcome */}
                  <div className="p-3 mb-6" style={{ background: C.wa(0.03), borderLeft: `2px solid ${C.lime}` }}>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5">Key Outcome</div>
                    <div className="text-xs font-semibold text-white/90">{project.outcome}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[9px] font-medium text-white/50"
                        style={{ background: C.wa(0.04), border: `1px solid ${C.wa(0.08)}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <Link
                  to={project.link}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-bold text-white hover:text-[#B6FF00] transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" color={C.lime} />
                </Link>
              </div>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════════
              4. THE VELNIX TRANSFORMATION FRAMEWORK (Before vs After)
          ══════════════════════════════════════════════════════ */}
          <div className="mb-24 p-8 sm:p-12" style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}` }}>
            <div className="max-w-3xl mb-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B6FF00] mb-2 block">
                SYSTEM TRANSFORMATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                How Velnix Redefines Operational Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* BEFORE */}
              <div className="p-6" style={{ background: C.wa(0.02), border: `1px solid ${C.wa(0.06)}` }}>
                <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  BEFORE VELNIX
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Repetitive manual data entry across disconnected software tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Administrative bottlenecks slowing customer and patient delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Fragmented data leading to delayed decision-making and blindspots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>High error rates and team burnout from mundane work</span>
                  </li>
                </ul>
              </div>

              {/* AFTER */}
              <div className="p-6" style={{ background: C.la(0.04), border: `1px solid ${C.la(0.25)}` }}>
                <div className="text-xs font-bold uppercase tracking-widest text-[#B6FF00] mb-4 flex items-center gap-2">
                  <CheckCircle2 size={14} color={C.lime} />
                  AFTER VELNIX INTELLIGENCE
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <span style={{ color: C.lime }} className="font-bold">✓</span>
                    <span>Automated AI workflows connecting core business systems seamlessly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: C.lime }} className="font-bold">✓</span>
                    <span>Substantial reduction in manual turnaround time and operational delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: C.lime }} className="font-bold">✓</span>
                    <span>Real-time operational dashboards providing complete system visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: C.lime }} className="font-bold">✓</span>
                    <span>Scalable architecture engineered for long-term business growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              5. BOTTOM STRATEGIC CONVERSION CTA BANNER
          ══════════════════════════════════════════════════════ */}
          <div 
            className="p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            style={{
              background: C.graphite,
              border: `1px solid ${C.la(0.3)}`,
              boxShadow: `0 16px 48px ${C.la(0.1)}`,
            }}
          >
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#B6FF00] mb-2 block">
                START YOUR TRANSFORMATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a complex business workflow worth automating?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Tell us about your operational bottlenecks. Our engineering leads will evaluate your requirements and outline a working system strategy.
              </p>
            </div>

            <a
              href="https://calendar.app.google/F63aBoA5vxJdtihj7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold text-black uppercase tracking-wider shrink-0 transition-all"
              style={{ background: C.lime, boxShadow: `0 6px 20px ${C.la(0.35)}` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.green; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.lime; }}
            >
              Book A Strategy Call <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
