import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Cpu } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — Velnix Locked Color System
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

interface SolutionData {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  description: string;
  integration: string;
  capabilities: string[];
  outcomes: { num: string; label: string }[];
  image: string;
  route: string;
  badge: string;
}

const SOLUTIONS: SolutionData[] = [
  {
    id: 'MedImaging',
    tabLabel: 'Med Imaging',
    category: 'MEDICAL AI',
    title: 'AI Medical Imaging Assistant',
    description:
      'Pre-screens imaging studies, highlights suspicious regions with explainable heatmaps, and prioritizes high-risk cases to help radiologists manage rising volumes efficiently.',
    integration:
      'Seamlessly integrates with PACS and EHR infrastructure, providing non-invasive decision support for clinical review teams.',
    capabilities: [
      'Pre-Screening & Triage',
      'Explainable Heatmaps',
      'PACS / EHR Integration',
      'Risk Prioritization',
    ],
    outcomes: [
      { num: '01', label: 'Faster Report Turnaround Times' },
      { num: '02', label: 'Improved Anomaly Detection' },
      { num: '03', label: 'Higher Radiologist Satisfaction' },
    ],
    image: '/image/Delivered For Clients/AI Medical Imaging Assistant.jpg',
    route: '/portfolio/ai-powered-medical-imaging-system',
    badge: 'PACS & EHR COMPATIBLE',
  },
  {
    id: 'ClinDocAI',
    tabLabel: 'Clin Doc AI',
    category: 'HEALTHCARE AI & NLP',
    title: 'AI Clinical Documentation System',
    description:
      'Ambient natural language processing that transcribes patient-physician encounters in real time, drafting structured clinical notes and specialty-specific documentation.',
    integration:
      'Bi-directionally connects with hospital EHR systems, reducing cognitive burden without interrupting clinical bedside workflows.',
    capabilities: [
      'Ambient Dialogue Transcription',
      'Real-time EHR Note Generation',
      'Specialty-Specific Templates',
      'HIPAA-Compliant Architecture',
    ],
    outcomes: [
      { num: '01', label: 'Up to 70% Less Documentation Time' },
      { num: '02', label: 'Higher Clinical Note Accuracy' },
      { num: '03', label: 'Significant Reduction in Clinician Burnout' },
    ],
    image: '/image/Delivered For Clients/Clinical Documentation AI.jpg',
    route: '/portfolio/ai-clinical-documentation-system',
    badge: 'AMBIENT VOICE AI',
  },
  {
    id: 'DiogenesAIChatBot',
    tabLabel: 'Diogenes AI',
    category: 'CONVERSATIONAL AI',
    title: 'Diogenes Intelligent Agent & RAG System',
    description:
      'Enterprise-grade conversational AI powered by Retrieval-Augmented Generation (RAG) to synthesize internal knowledge bases and deliver context-aware, verifiable answers instantly.',
    integration:
      'Connects across cloud databases, document silos, and CRM pipelines with strict permission filtering and verifiable source citations.',
    capabilities: [
      'Context-Aware RAG Architecture',
      'Enterprise Source Citation',
      'Multi-System API Connectors',
      'Real-Time Ingestion Pipeline',
    ],
    outcomes: [
      { num: '01', label: 'Instant Knowledge Synthesis' },
      { num: '02', label: 'Zero Hallucination with Grounded Sources' },
      { num: '03', label: 'Automated Tier-1 Support Resolution' },
    ],
    image: '/image/Portfolio-img/Diogenes AI ChatBot.png',
    route: '/portfolio/diogenes-ai-chatbot',
    badge: 'ENTERPRISE RAG ARCHITECTURE',
  },
];

const TRUST_TAGS = [
  'AI PRODUCT DEVELOPMENT',
  'CUSTOM AI SYSTEM',
  'WORKFLOW INTEGRATION',
  'INDUSTRY-SPECIFIC SOLUTION',
];

const ClientSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('MedImaging');
  const [ctaHovered, setCtaHovered] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);
  const navigate = useNavigate();

  const current = SOLUTIONS.find((s) => s.id === activeTab) || SOLUTIONS[0];

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden antialiased"
      id="client-solutions"
      style={{ background: C.black, color: C.white }}
      aria-labelledby="client-solutions-heading"
    >
      {/* Background Grid & Ambient Lighting */}
      <div
        className="pointer-events-none select-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(${C.wa(0.02)} 1px, transparent 1px), linear-gradient(90deg, ${C.wa(0.02)} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/3 left-[-10%] rounded-full blur-[200px]"
          style={{ width: 500, height: 500, background: C.la(0.025) }}
        />
        <div
          className="absolute bottom-10 right-[-10%] rounded-full blur-[180px]"
          style={{ width: 450, height: 450, background: C.ga(0.02) }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ══════════════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1"
                style={{ border: `1px solid ${C.la(0.3)}`, background: C.la(0.06) }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: C.lime,
                    boxShadow: `0 0 8px ${C.lime}`,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: C.lime,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  AI SOLUTIONS DELIVERED FOR CLIENTS
                </span>
              </span>
            </div>

            {/* Headline */}
            <h2
              id="client-solutions-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3"
            >
              AI Built to Solve{' '}
              <span style={{ color: C.lime }}>Real-World Problems.</span>
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: C.wa(0.5) }}>
              Explore AI-powered solutions designed to address complex operational challenges across industries and turn emerging technology into practical business value.
            </p>
          </div>

          {/* Section Level CTA */}
          <Link
            to="/portfolio"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3 transition-all"
            style={{
              color: C.lime,
              border: `1px solid ${C.la(0.35)}`,
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.lime;
              e.currentTarget.style.color = C.black;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = C.lime;
            }}
          >
            Explore All Solutions
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ══════════════════════════════════════════════════════
            PROJECT SELECTOR TABS
        ══════════════════════════════════════════════════════ */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist">
          {SOLUTIONS.map((sol) => {
            const isActive = activeTab === sol.id;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                role="tab"
                aria-selected={isActive}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200"
                style={{
                  background: isActive ? C.lime : C.graphite,
                  color: isActive ? C.black : C.wa(0.6),
                  border: `1px solid ${isActive ? C.lime : C.wa(0.08)}`,
                  boxShadow: isActive ? `0 4px 16px ${C.la(0.25)}` : 'none',
                }}
              >
                {sol.tabLabel}
              </button>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════════
            FEATURED CASE STUDY CARD
        ══════════════════════════════════════════════════════ */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 mb-12"
          style={{
            background: C.graphite,
            border: `1px solid ${C.wa(0.09)}`,
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5)`,
          }}
        >
          {/* LEFT: Interactive Visual / Image Frame (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className="relative w-full overflow-hidden flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]"
              style={{
                border: `1px solid ${C.wa(0.08)}`,
                background: C.black,
              }}
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
            >
              {/* Image with zoom on hover */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                style={{
                  transform: imgHovered ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                  opacity: 0.88,
                }}
              />

              {/* High-tech Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.3) 50%, rgba(5,5,5,0.15) 100%)',
                }}
              />

              {/* Top Tech Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                <span
                  className="text-[0.6rem] font-bold uppercase tracking-widest px-2.5 py-1 inline-flex items-center gap-1.5"
                  style={{ background: C.lime, color: C.black }}
                >
                  <Cpu size={11} />
                  {current.badge}
                </span>
                <span
                  className="text-[0.58rem] font-mono font-semibold px-2 py-0.5 tracking-wider uppercase hidden sm:inline-block"
                  style={{
                    background: 'rgba(5,5,5,0.85)',
                    color: C.lime,
                    border: `1px solid ${C.la(0.3)}`,
                  }}
                >
                  LIVE SYSTEM ARCHITECTURE
                </span>
              </div>

              {/* Bottom Capabilities Tags inside visual */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 pointer-events-none">
                {current.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-[0.58rem] font-semibold tracking-wide px-2 py-0.5"
                    style={{
                      background: 'rgba(17,17,17,0.85)',
                      color: C.wa(0.8),
                      border: `1px solid ${C.wa(0.1)}`,
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Solution Narrative & Outcomes (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category */}
              <div className="flex items-center gap-2 mb-2">
                <Activity size={12} color={C.lime} />
                <span
                  className="text-[0.62rem] font-bold uppercase tracking-widest"
                  style={{ color: C.lime }}
                >
                  {current.category}
                </span>
              </div>

              {/* Solution Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-4 leading-snug">
                {current.title}
              </h3>

              {/* Descriptions */}
              <div className="space-y-3 mb-6">
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: C.wa(0.7) }}>
                  {current.description}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: C.wa(0.45) }}>
                  {current.integration}
                </p>
              </div>

              {/* OUTCOMES INDICATORS (01, 02, 03) */}
              <div className="space-y-2.5 mb-8">
                <span
                  className="text-[0.55rem] font-bold uppercase tracking-widest block"
                  style={{ color: C.wa(0.35) }}
                >
                  INTENDED SYSTEM OUTCOMES
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {current.outcomes.map((out) => (
                    <div
                      key={out.num}
                      className="flex items-center gap-3 p-2.5"
                      style={{
                        background: 'rgba(5,5,5,0.6)',
                        border: `1px solid ${C.wa(0.06)}`,
                      }}
                    >
                      <span
                        className="font-mono text-xs font-extrabold px-1.5 py-0.5"
                        style={{ background: C.la(0.12), color: C.lime }}
                      >
                        {out.num}
                      </span>
                      <span className="text-xs font-semibold text-white/90">
                        {out.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Read More CTA */}
            <div>
              <button
                onClick={() => navigate(current.route)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all"
                style={{
                  background: ctaHovered ? C.green : C.lime,
                  color: C.black,
                  boxShadow: ctaHovered ? `0 6px 20px ${C.la(0.4)}` : `0 4px 14px ${C.la(0.25)}`,
                }}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                aria-label={`Read more about ${current.title}`}
              >
                <span>Read More</span>
                <ArrowRight
                  size={14}
                  style={{
                    transform: ctaHovered ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'transform 0.25s ease',
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            TRUST SIGNALS STRIP
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {TRUST_TAGS.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] font-bold uppercase tracking-wider px-3 py-1.5"
              style={{
                border: `1px solid ${C.wa(0.08)}`,
                background: C.wa(0.02),
                color: C.wa(0.4),
              }}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientSolutions;

