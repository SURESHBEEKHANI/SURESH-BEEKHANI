import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Bot,
  Workflow,
  Code2,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  Activity,
  Cpu,
  CheckCircle2,
  Eye,
  Server,
  Zap,
  Lock,
  GitBranch,
  Terminal,
  FileText,
  Search,
  Users,
  LineChart,
  Headphones,
  Sliders,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import LatestBlogs from "../components/LatestBlogs";
import { IMPACT_STATS } from "../components/OriginStory";
import { useReducedMotion } from "@/hooks/useAnimations";
import { TechnologyStack } from "../components/TechnologyStack";
import EngagementModels from "../components/EngagementModels";
import Testimonials from "../components/Testimonials";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — Velnix Locked Color System (Consistent with src/components)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black: "#050505",
  graphite: "#111111",
  graphiteLight: "#181818",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",
  la: (o: number) => `rgba(182, 255, 0, ${o})`,
  wa: (o: number) => `rgba(255, 255, 255, ${o})`,
  ga: (o: number) => `rgba(125, 204, 0, ${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// 03 — CAPABILITIES DATA (9 Structured Modules)
// ─────────────────────────────────────────────────────────────────────────────
interface AICapability {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  keyOutputs: string[];
  specs: string[];
}

const aiCapabilities: AICapability[] = [
  {
    id: "ai-agents",
    num: "01",
    title: "Agentic AI Systems",
    category: "Autonomous Intelligence",
    description: "Production-grade agents that reason through complex work, use business tools, and execute multi-step operations.",
    icon: Bot,
    keyOutputs: [
      "Reliable tool and API execution",
      "Multi-agent orchestration",
      "Stateful reasoning and memory",
    ],
    specs: ["Tool Calling", "ReAct Framework", "Multi-Agent"],
  },
  {
    id: "gen-ai-llm",
    num: "02",
    title: "Generative AI & LLM Applications",
    category: "Intelligent Products",
    description:
      "High-value AI products, copilots, and content systems built around how your teams work.",
    icon: Sparkles,
    keyOutputs: [
      "Domain-specific copilots",
      "Production content systems",
      "Reliable structured outputs",
    ],
    specs: ["Custom Copilots", "Prompt Systems", "Fine-Tuning"],
  },
  {
    id: "rag-knowledge",
    num: "03",
    title: "RAG & Knowledge Systems",
    category: "Grounded Intelligence",
    description:
      "Grounded intelligence that turns private documents, databases, and business knowledge into trusted answers.",
    icon: Database,
    keyOutputs: [
      "Secure knowledge retrieval",
      "Document and data grounding",
      "Cited, auditable answers",
    ],
    specs: ["Hybrid Search", "Vector Embeddings", "Zero Drift"],
  },
  {
    id: "workflow-automation",
    num: "04",
    title: "AI Workflow Automation",
    category: "Operational Efficiency",
    description:
      "AI-powered workflows that connect systems, automate execution, and remove operational bottlenecks.",
    icon: Workflow,
    keyOutputs: [
      "Cross-system orchestration",
      "Human approval and control gates",
      "Event-driven automation",
    ],
    specs: ["Self-Healing", "Approval Gates", "Zero Bottlenecks"],
  },
  {
    id: "conversational-ai",
    num: "05",
    title: "Conversational AI",
    category: "Intelligent Interfaces",
    description:
      "Business-aware voice and chat experiences that resolve requests and trigger real workflow actions.",
    icon: Headphones,
    keyOutputs: [
      "Context-aware conversations",
      "Voice and text actions",
      "Intelligent human handoff",
    ],
    specs: ["Voice + Chat", "Context Memory", "System Actions"],
  },
  {
    id: "machine-learning",
    num: "06",
    title: "Machine Learning & Predictive AI",
    category: "Predictive Intelligence",
    description:
      "Predictive intelligence for forecasting, recommendations, classification, and higher-confidence decisions.",
    icon: Brain,
    keyOutputs: [
      "Forecasting and prediction models",
      "Recommendation and classification engines",
      "Decision intelligence pipelines",
    ],
    specs: ["Forecasting", "Prediction", "Decision Systems"],
  },
  {
    id: "computer-vision",
    num: "07",
    title: "Computer Vision",
    category: "Visual Intelligence",
    description:
      "Visual systems for document intelligence, OCR, detection, classification, and automated inspection.",
    icon: Eye,
    keyOutputs: [
      "Image understanding and OCR",
      "Detection and classification engines",
      "Automated visual inspection",
    ],
    specs: ["Dense OCR", "Visual QA", "Spatial Detection"],
  },
  {
    id: "custom-ai-software",
    num: "08",
    title: "Custom AI Software",
    category: "Purpose-Built Solutions",
    description:
      "End-to-end AI software tailored to your workflows, users, data, and business model.",
    icon: Code2,
    keyOutputs: [
      "Purpose-built product architecture",
      "Secure full-stack delivery",
      "Workflow-specific interfaces",
    ],
    specs: ["Private VPC", "Custom Frontends", "SLA Performance"],
  },
  {
    id: "ai-data-analytics",
    num: "09",
    title: "AI Data & Analytics",
    category: "Actionable Intelligence",
    description:
      "Turn fragmented business data into clear intelligence through pipelines, dashboards, and AI-powered insight.",
    icon: LineChart,
    keyOutputs: [
      "Reliable data foundations",
      "Operational dashboards and reporting",
      "AI-powered decision support",
    ],
    specs: ["Data Pipelines", "Dashboards", "AI Insights"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 05 — BUSINESS USE CASES DATA (8 Categories: Problem -> AI System -> Outcome)
// ─────────────────────────────────────────────────────────────────────────────
interface UseCase {
  id: string;
  category: string;
  icon: React.ElementType;
  metric: string;
  problem: string;
  aiSystem: string;
  outcome: string;
}

const businessUseCases: UseCase[] = [
  {
    id: "support",
    category: "Customer Support",
    icon: Headphones,
    metric: "74% First-Response Drop",
    problem:
      "High tier-1 ticket backlog, delayed escalations, and repetitive customer inquiries draining human support capacity.",
    aiSystem:
      "Autonomous support copilot combining live knowledge-base RAG with CRM integrations to answer and resolve requests.",
    outcome:
      "24/7 instant query resolution, accurate issue categorization, and sub-second escalation to senior personnel.",
  },
  {
    id: "sales",
    category: "Sales & CRM",
    icon: TrendingUp,
    metric: "3.2x Pipeline Velocity",
    problem:
      "Manual prospect qualification, incomplete CRM records, and delayed follow-ups resulting in lost revenue opportunities.",
    aiSystem:
      "Agentic lead enrichment and scoring engine analyzing incoming communications and drafting contextual follow-ups.",
    outcome:
      "Hyper-personalized engagement at scale, automated CRM hygiene, and sales reps focused exclusively on high-intent deals.",
  },
  {
    id: "operations",
    category: "Operations",
    icon: Workflow,
    metric: "91% Manual Effort Cut",
    problem:
      "Disjointed spreadsheets, manual handoffs between ERP and dispatch systems, and error-prone operational reconciliations.",
    aiSystem:
      "Adaptive automation orchestrator monitoring internal triggers, verifying payloads, and synchronizing state across legacy platforms.",
    outcome:
      "Continuous straight-through operational execution, immediate anomaly flags, and zero reliance on human data entry.",
  },
  {
    id: "finance",
    category: "Finance",
    icon: LineChart,
    metric: "85% Faster Month-End",
    problem:
      "Scattered invoice formats, manual GL coding, and slow reconciliation cycles delaying financial auditability.",
    aiSystem:
      "Multi-modal financial extraction pipeline matching purchase orders, invoices, and bank records with compliance guardrails.",
    outcome:
      "Touchless accounts payable processing, automated ledger entries, and audit-ready data verification.",
  },
  {
    id: "knowledge",
    category: "Knowledge Management",
    icon: Database,
    metric: "< 1.2s Retrieval Latency",
    problem:
      "Proprietary SOPs, technical documentation, and customer histories siloed across Notion, Google Drive, and Jira.",
    aiSystem:
      "Enterprise hybrid RAG index with fine-grained access controls, document version awareness, and exact citation tracking.",
    outcome:
      "Employees query company knowledge in natural language, receiving grounded answers backed by traceable source links.",
  },
  {
    id: "documents",
    category: "Document Processing",
    icon: FileText,
    metric: "10x Review Velocity",
    problem:
      "Legal contracts, policy disclosures, and compliance forms requiring hundreds of human review hours each month.",
    aiSystem:
      "Specialized vision-language pipeline performing clause extraction, deviation detection, and risk scoring.",
    outcome:
      "Instant clause-by-clause contract redlines, standardized compliance verification, and human review limited to flagged discrepancies.",
  },
  {
    id: "analytics",
    category: "Analytics",
    icon: Brain,
    metric: "Zero BI Queue Wait",
    problem:
      "Business stakeholders waiting days for custom SQL reports from overstretched data engineering teams.",
    aiSystem:
      "Text-to-SQL semantic engine with deterministic schema mapping, sandboxed query execution, and automated visualization.",
    outcome:
      "Executive decision-makers explore complex warehouse data conversationally with validated analytical integrity.",
  },
  {
    id: "productivity",
    category: "Internal Productivity",
    icon: Zap,
    metric: "4.5 Hrs Saved / Wk",
    problem:
      "Constant context switching across fragmented SaaS tools, meeting notes, project management boards, and email.",
    aiSystem:
      "Centralized workplace assistant embedded in Slack/Teams executing task creation, summary generation, and cross-tool actions.",
    outcome:
      "Streamlined employee workflows, automated action-item tracking, and higher organizational focus on high-leverage work.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 06 — DEVELOPMENT PROCESS (6 Stages)
// ─────────────────────────────────────────────────────────────────────────────
interface ProcessStep {
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

const developmentSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "Identify the highest-value use case, users, workflows, data, and success criteria.",
    icon: Search,
    deliverables: ["Use Case Viability Matrix", "Data Readiness Audit", "Target ROI Metrics"],
  },
  {
    num: "02",
    title: "Architect",
    description:
      "Design the AI architecture, model strategy, data flow, integrations, and security boundaries.",
    icon: GitBranch,
    deliverables: ["System Topology Blueprint", "Model Selection Strategy", "Security Boundaries"],
  },
  {
    num: "03",
    title: "Build",
    description:
      "Develop the AI application, prompts, agents, RAG pipelines, APIs, and interfaces.",
    icon: Code2,
    deliverables: ["Agentic Logic & Orchestration", "Hybrid Vector Store", "API & Interface Build"],
  },
  {
    num: "04",
    title: "Integrate",
    description:
      "Connect the system with existing products, CRMs, ERPs, databases, APIs, and workflows.",
    icon: Workflow,
    deliverables: ["Native API Webhooks", "Legacy DB Connections", "Two-Way Data Sync"],
  },
  {
    num: "05",
    title: "Evaluate",
    description:
      "Test accuracy, reliability, edge cases, latency, cost, permissions, and real-world behavior.",
    icon: ShieldCheck,
    deliverables: ["Automated Eval Benchmarks", "Adversarial Edge Testing", "Latency & Cost Budgets"],
  },
  {
    num: "06",
    title: "Deploy & Improve",
    description:
      "Launch to production, monitor performance, collect feedback, and continuously improve.",
    icon: Zap,
    deliverables: ["CI/CD Production Deployment", "Telemetry & Observability", "Continuous Drift Tuning"],
  },
];

const deliveryStages: ProcessStep[] = [
  {
    num: "01",
    title: "Assess",
    description: "Identify the highest-value use case, validate the data, and define the outcome worth building toward.",
    icon: Search,
    deliverables: ["Use Case Viability", "Data Readiness", "Success Metrics"],
  },
  {
    num: "02",
    title: "Prototype",
    description: "Build against real workflows and data, proving accuracy, usability, and technical feasibility early.",
    icon: Code2,
    deliverables: ["Working Prototype", "Model Strategy", "Evaluation Baseline"],
  },
  {
    num: "03",
    title: "Productionize",
    description: "Integrate the system with your stack, add security and guardrails, and prepare it for reliable adoption.",
    icon: ShieldCheck,
    deliverables: ["System Integration", "Security Controls", "Production Readiness"],
  },
  {
    num: "04",
    title: "Operate & Improve",
    description: "Launch with observability, measure business impact, and continuously improve the system as needs evolve.",
    icon: Zap,
    deliverables: ["Monitoring & Telemetry", "Outcome Reporting", "Continuous Improvement"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 07 — PRODUCTION AI PILLARS (6 Technical Pillars)
// ─────────────────────────────────────────────────────────────────────────────
interface ProductionPillar {
  title: string;
  tag: string;
  description: string;
  details: string;
  icon: React.ElementType;
}

const productionPillars: ProductionPillar[] = [
  {
    title: "Reliable Outputs",
    tag: "EVALUATION-DRIVEN",
    description: "Evaluation-driven AI behavior.",
    details:
      "Synthetic test suites, golden ground-truth benchmarks, deterministic schema validation, and guardrails to eradicate hallucination before deployment.",
    icon: CheckCircle2,
  },
  {
    title: "Secure Data",
    tag: "ZERO-LEAKAGE",
    description: "Controlled access and clear data boundaries.",
    details:
      "Private VPC hosting, end-to-end encryption in transit and at rest, granular role-based access controls, and strict zero-model-retention agreements.",
    icon: Lock,
  },
  {
    title: "Human Oversight",
    tag: "GUARDRAILED EXECUTION",
    description: "Approval workflows for sensitive actions.",
    details:
      "Configurable escalation thresholds, manual approval checkpoints for critical operations, and complete immutable audit trails for every automated step.",
    icon: Users,
  },
  {
    title: "Observability",
    tag: "TELEMETRY & LOGGING",
    description: "Monitor quality, cost, latency, and system behavior.",
    details:
      "Full-stack trace recording, token consumption analysis, latency profiling, error rate anomaly detection, and automated drift alerts.",
    icon: Activity,
  },
  {
    title: "Scalable Architecture",
    tag: "ENTERPRISE SCALE",
    description: "Infrastructure designed to evolve with usage.",
    details:
      "Asynchronous message queues, stateless microservice containers, automatic fallback model routing, and horizontal autoscaling designed for high concurrency.",
    icon: Server,
  },
  {
    title: "Deterministic Guardrails",
    tag: "POLICY & SAFETY",
    description: "Real-time safety bounds and input/output filters.",
    details:
      "Semantic firewalls, automated PII redaction, prompt injection defense, and strict schema validation that intercept anomalies before reaching production users.",
    icon: ShieldCheck,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA (8 Specified Questions)
// ─────────────────────────────────────────────────────────────────────────────
interface FaqItem {
  q: string;
  a: string;
}

const faqData: FaqItem[] = [
  {
    q: "What does custom AI development include?",
    a: "Our custom AI development spans the complete lifecycle: use-case validation, technical architecture, data pipeline engineering, model selection or fine-tuning, RAG setup, agentic workflows, API integration into your software, automated evaluation benches, and production monitoring with SLAs.",
  },
  {
    q: "Can you integrate AI into our existing software?",
    a: "Yes. We build AI systems as modular microservices that integrate directly with your current technology stack—including legacy relational databases, cloud ERPs, CRMs, internal APIs, web applications, and workplace communication tools—without requiring a rebuild of your existing software.",
  },
  {
    q: "Can you build AI agents and RAG systems?",
    a: "Yes. Autonomous agents and grounded RAG architectures are core specializations. We build agents capable of tool calling, deterministic multi-step reasoning, and state management, alongside hybrid RAG systems that query structured and unstructured data with strict citation boundaries.",
  },
  {
    q: "Can AI use our private business data?",
    a: "Yes, securely. We configure architectures where models access your private documents and databases through isolated vector search or direct queries without using your proprietary data to train public models. We enforce strict role-based access control, encryption, and zero-data-retention parameters.",
  },
  {
    q: "How long does AI development take?",
    a: "A focused production prototype or agentic workflow typically takes 3 to 5 weeks from architecture sign-off to pilot testing. Complex enterprise deployments involving multi-system integration, extensive data ingestion pipelines, and custom fine-tuning generally launch in 8 to 12 weeks.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export const AIDevelopment: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState<string>(businessUseCases[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const [showAllCapabilities, setShowAllCapabilities] = useState(false);
  const shouldReduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateScrollProgress = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const traveled = Math.max(0, -bounds.top);
      const range = Math.max(1, bounds.height - window.innerHeight);
      scanRef.current?.style.setProperty('--hero-scan-progress', `${Math.min(1, traveled / range) * 500}%`);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollProgress();
      });
    };

    updateScrollProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  const selectedUseCase =
    businessUseCases.find((u) => u.id === activeUseCase) || businessUseCases[0];
  const SelectedIcon = selectedUseCase.icon;

  return (
    <div
      className="min-h-screen flex flex-col antialiased font-sans selection:bg-[#B6FF00] selection:text-black"
      style={{
        background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505',
        color: C.white,
      }}
    >
      <Navbar isDark={true} />

      {/* Keyframe injections matching Hero.tsx */}
      <style>{`
        @keyframes velnix-shimmer {
          from { transform: translateX(-50%); }
          to   { transform: translateX(50%); }
        }
        @keyframes velnix-system-scan {
          from { opacity: 0; transform: translateX(-18%); }
          50% { opacity: 1; }
          to { opacity: 0; transform: translateX(18%); }
        }
        @keyframes velnix-image-scan {
          from { opacity: 0; top: 0%; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          to { opacity: 0; top: 100%; }
        }
        @keyframes velnix-scroll-line {
          from { transform: translateY(-120%); }
          to   { transform: translateY(420%); }
        }
        @keyframes velnix-node-pulse {
          0%, 100% { opacity: 0.7; r: 3; }
          50%      { opacity: 1;   r: 4; }
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────────────
          PAGE AMBIENT BACKGROUND GLOWS & GRID (from src/components)
      ───────────────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(${C.wa(0.16)} 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black 25%, transparent 95%)",
          }}
        />
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] sm:w-[760px] sm:h-[520px] rounded-full blur-[170px]"
          style={{
            background: `radial-gradient(circle, ${C.la(0.09)} 0%, ${C.ga(0.02)} 55%, transparent 75%)`,
          }}
        />
        {/* Subtle mid-page accent glow */}
        <div
          className="absolute top-[38%] right-[-100px] w-[400px] h-[400px] sm:w-[560px] sm:h-[560px] rounded-full blur-[190px]"
          style={{ background: `radial-gradient(circle, ${C.la(0.035)} 0%, transparent 70%)` }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          01 — HERO (Premium AI Network Visual)
      ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative isolate w-full overflow-hidden"
        style={{ background: C.black }}
        aria-label="Velnix AI Development hero section"
      >
        {/* Atmospheric glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute"
            style={{
              width: 600, height: 400, top: -100, left: '50%', marginLeft: -300,
              background: `radial-gradient(ellipse, ${C.la(0.12)} 0%, ${C.ga(0.04)} 40%, transparent 70%)`,
              filter: 'blur(120px)',
            }}
          />
          <div
            className="absolute"
            style={{
              width: 400, height: 400, bottom: -80, right: -100,
              background: `radial-gradient(ellipse, ${C.ga(0.1)} 0%, transparent 70%)`,
              filter: 'blur(100px)',
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="w-full flex flex-col items-start text-left">
              {/* Eyebrow */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease }}
                className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
                style={{ color: C.lime }}
              >
                <span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />
                AI Development
              </motion.div>

              {/* H1 Headline */}
              <motion.h1
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65, ease }}
                className="mb-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
              >
                Production AI Systems Built for{' '}
                <span style={{ color: C.lime }}>Business-Critical Work.</span>
              </motion.h1>

              {/* Supporting copy */}
              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.65, ease }}
                style={{
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                  color: C.wa(0.72),
                  lineHeight: 1.75,
                  maxWidth: '56ch',
                  marginBottom: '2.5rem',
                  fontWeight: 400,
                }}
              >
                We engineer secure AI systems that connect to your data, integrate with your operations,
                and turn complex workflows into measurable business advantage.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.55, ease }}
                className="flex flex-wrap items-center gap-4 mb-6"
              >
                {/* Primary CTA */}
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300"
                  style={{
                    background: C.lime,
                    color: C.black,
                    fontSize: '0.9rem',
                    letterSpacing: '0.01em',
                    padding: '0.85rem 1.75rem',
                    textDecoration: 'none',
                    border: `1px solid ${C.la(0.5)}`,
                    boxShadow: `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`,
                    lineHeight: 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.green;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${C.la(0.2)}, 0 12px 36px ${C.la(0.5)}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.lime;
                    e.currentTarget.style.boxShadow = `0 0 0 0 ${C.la(0)}, 0 8px 28px ${C.la(0.35)}`;
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      width: '200%',
                      left: '-50%',
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)',
                      animation: 'velnix-shimmer 2.8s linear infinite',
                      willChange: 'transform',
                    }}
                  />
                  <span className="relative z-10">Build Your AI System</span>
                  <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>

                {/* Secondary CTA */}
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 transition-all duration-300"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: C.white,
                    borderColor: C.wa(0.25),
                    background: C.wa(0.04),
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.lime;
                    e.currentTarget.style.color = C.lime;
                    e.currentTarget.style.background = C.la(0.08);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.wa(0.25);
                    e.currentTarget.style.color = C.white;
                    e.currentTarget.style.background = C.wa(0.04);
                  }}
                >
                  Explore AI Capabilities
                  <ArrowRight size={15} />
                </a>
              </motion.div>

              {/* Technical Trust Strip */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.55, ease }}
                className="w-full flex items-center gap-6 sm:gap-10 pt-6"
                style={{ borderTop: `1px solid ${C.wa(0.08)}` }}
              >
                <div className="flex flex-col items-start">
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>99.9%</span>
                  <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Production Reliability</span>
                </div>
                <div style={{ width: '1px', height: '36px', background: C.wa(0.1) }} />
                <div className="flex flex-col items-start">
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>Zero</span>
                  <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Vendor Lock-In</span>
                </div>
                <div style={{ width: '1px', height: '36px', background: C.wa(0.1) }} />
                <div className="flex flex-col items-start">
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>3–5 Wks</span>
                  <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Pilot to Production</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side — Hero Image */}
            <div className="relative flex items-center justify-center">
              <img
                src="/image/Servies/service-page image-hero.png"
                alt="AI Development Hero"
                className="relative z-10 w-full max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATISTICS SECTION (from OriginStory.tsx)
      ══════════════════════════════════════════════════════ */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full border-y border-[#050505]/20 bg-[#B6FF00] px-6 py-10 text-[#050505] sm:px-10 sm:py-12 lg:px-16"
      >
        <div className="relative w-full grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0 max-w-7xl mx-auto">
          {IMPACT_STATS.map(({ number, label }, i) => (
            <div key={label} className="relative flex flex-col items-center px-3 text-center sm:px-5">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-[#050505]/20 sm:block" />
              )}
              <div className="text-4xl font-black leading-none tracking-[-0.04em] text-[#050505] sm:text-5xl">
                {number.replace('+', '').replace('%', '')}
                <span>{number.includes('+') ? '+' : number.includes('%') ? '%' : ''}</span>
              </div>
              <p className="mx-auto mt-4 max-w-[15ch] text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#050505]/65">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10 pt-14 pb-24 sm:pt-18 sm:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ══════════════════════════════════════════════════════
              02 — VALUE STATEMENT
          ══════════════════════════════════════════════════════ */}
          <section className="mb-8 sm:mb-20 relative">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none"
              style={{ background: `radial-gradient(circle, ${C.la(0.12)} 0%, transparent 70%)` }}
              aria-hidden="true"
            />

            <div className="relative z-10 w-full py-4 sm:py-8 lg:py-10">
              <div className="relative z-10">
                <motion.div
                  initial={shouldReduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease }}
                  className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
                  style={{ color: C.lime }}
                >
                  <span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />
                  THE BUSINESS CASE FOR AI
                </motion.div>

                <div className="mb-10">
                  <motion.h2
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.1, ease }}
                    className="whitespace-nowrap font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight"
                  >
                    Turn Friction Into <span style={{ color: C.lime }}>Advantage.</span>
                  </motion.h2>
                  <motion.p
                    initial={shouldReduce ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease }}
                    className="mt-4 max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base"
                  >
                    We identify where work breaks down, then design AI systems that reduce friction, connect the right information, and help your teams make faster, more confident decisions.
                  </motion.p>
                </div>

                <div className="w-full">
                  <motion.div
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease }}
                    className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-0 sm:pt-2"
                  >
                    <div
                      className="absolute left-[4%] right-[4%] top-[2.75rem] hidden h-[2px] sm:block"
                      style={{ background: `linear-gradient(90deg, ${C.la(0.45)}, ${C.lime}, ${C.la(0.45)})` }}
                      aria-hidden="true"
                    />
                    <motion.div
                      initial={{ left: "0%" }}
                      animate={shouldReduce ? { left: "50%" } : { left: ["0%", "25%", "50%", "75%", "100%"] }}
                      transition={shouldReduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "linear", times: [0, 0.2, 0.4, 0.6, 1] }}
                      onUpdate={({ left }) => {
                        const progress = parseFloat(String(left)) / 100;
                        const nextStep = progress >= 0.75 ? 4 : progress >= 0.5 ? 3 : progress >= 0.25 ? 2 : 0;
                        setActiveTimelineStep((currentStep) => currentStep === nextStep ? currentStep : nextStep);
                      }}
                      className="pointer-events-none absolute top-[calc(2.75rem-4px)] z-10 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#B6FF00] shadow-[0_0_14px_rgba(182,255,0,0.85)] sm:block"
                      style={{ left: "4%" }}
                      aria-hidden="true"
                    />
                    {[
                      {
                        num: "01",
                        title: "Repetitive Work",
                        desc: "Teams spend valuable time on manual tasks that could be automated, streamlined, or handled by intelligent systems.",
                      },
                      {
                        num: "02",
                        title: "Disconnected Systems",
                        desc: "Business data, tools, and workflows operate in silos, creating unnecessary handoffs and operational friction.",
                      },
                      {
                        num: "03",
                        title: "Scattered Knowledge",
                        desc: "Critical information is buried across documents, databases, inboxes, and internal systems, making it difficult to find and use.",
                      },
                      {
                        num: "04",
                        title: "Slow Decisions",
                        desc: "Teams lack timely, actionable intelligence because extracting, analyzing, and interpreting business data takes too much effort.",
                      },
                      {
                        num: "05",
                        title: "AI Without Integration",
                        desc: "AI experiments remain isolated from real operations without the workflows, integrations, and controls required to create lasting business value.",
                      },
                    ].map(({ num, title, desc }, i) => (
                      <motion.div
                        key={num}
                        initial={shouldReduce ? false : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease }}
                        className="group relative z-10 flex min-h-[188px] flex-col items-center text-center sm:px-3"
                        onMouseEnter={(e) => {
                          const circle = e.currentTarget.querySelector('[data-step-circle]') as HTMLElement | null;
                          if (circle) {
                            circle.style.borderColor = C.lime;
                            circle.style.boxShadow = `0 0 24px ${C.la(0.3)}`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          const circle = e.currentTarget.querySelector('[data-step-circle]') as HTMLElement | null;
                          if (circle) {
                            const isActive = circle.dataset.active === "true";
                            circle.style.borderColor = isActive ? C.lime : C.la(0.5);
                            circle.style.boxShadow = isActive ? `0 0 20px ${C.la(0.22)}, inset 0 0 0 5px ${C.wa(0.025)}` : 'none';
                          }
                        }}
                      >
                        <div
                          data-step-circle
                          data-active={activeTimelineStep === i ? "true" : "false"}
                          className={`mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border font-mono text-xs font-bold tracking-[0.16em] transition-all duration-300 ${activeTimelineStep === i ? "text-[#050505]" : "text-[#B6FF00]"}`}
                          style={{ borderColor: activeTimelineStep === i ? C.lime : C.la(0.5), background: activeTimelineStep === i ? C.lime : C.black, boxShadow: activeTimelineStep === i ? `0 0 20px ${C.la(0.3)}, inset 0 0 0 5px ${C.wa(0.08)}` : `inset 0 0 0 5px ${C.wa(0.025)}` }}
                        >
                          {num}
                        </div>

                        <h3 className={`mb-3 text-xl font-bold tracking-tight transition-colors duration-300 ${activeTimelineStep === i ? "text-[#B6FF00]" : "text-white group-hover:text-[#B6FF00]"}`}>{title}</h3>
                        <p className="mx-auto max-w-[22ch] text-[13px] leading-6 font-light text-white/55">{desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              03 — AI DEVELOPMENT CAPABILITIES
          ══════════════════════════════════════════════════════ */}
          <section id="capabilities" className="mb-8 sm:mb-20 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
              <div>
                <div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}>
                  <span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />
                  WHAT WE BUILD
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">
                  AI Systems That Move the <span style={{ color: C.lime }}>Business Forward.</span>
                </h2>
                <p className="mt-4 max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">
                  We build secure, integrated AI capabilities that move beyond prototypes and create measurable leverage across the way your business operates.
                </p>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {aiCapabilities.slice(0, showAllCapabilities ? aiCapabilities.length : 3).map((cap, idx) => {
                const Icon = cap.icon;
                const isFeatured = idx === 1;
                return (
                  <motion.div
                    key={cap.id}
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease }}
                    className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.12] p-5 transition-[transform,box-shadow,border-color] duration-500 sm:p-6"
                    style={{
                      background: C.black,
                      borderColor: isFeatured ? C.lime : C.wa(0.12),
                      boxShadow: isFeatured ? `0 12px 34px ${C.la(0.1)}, inset 0 1px 0 ${C.la(0.16)}` : 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.lime;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = `0 16px 42px ${C.la(0.14)}, inset 0 1px 0 ${C.la(0.2)}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isFeatured ? C.lime : C.wa(0.12);
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = isFeatured ? `0 12px 34px ${C.la(0.1)}, inset 0 1px 0 ${C.la(0.16)}` : 'none';
                    }}
                  >
                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.la(0.06)} 0%, transparent 60%)` }} />
                    <div className="absolute left-6 right-6 top-0 h-px opacity-70" style={{ background: `linear-gradient(90deg, transparent, ${C.lime}, transparent)` }} aria-hidden="true" />

                    <div className="relative z-10 flex flex-1 flex-col">
                      {/* Header */}
                      <div className="mb-4 flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:brightness-110" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
                          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" fill="currentColor" fillOpacity={0.16} strokeWidth={1.8} />
                        </div>
                        <span className="rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.16em]" style={{ color: C.lime, borderColor: C.la(0.25), background: C.la(0.05) }}>
                          {cap.num}
                        </span>
                      </div>

                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px w-5" style={{ background: C.lime }} aria-hidden="true" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.16em]" style={{ color: C.wa(0.45) }}>
                          {cap.category}
                        </span>
                      </div>

                      <h3 className="mb-2 font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#B6FF00]">
                        {cap.title}
                      </h3>

                      <p className="mb-4 text-sm font-light leading-relaxed" style={{ color: C.wa(0.7) }}>
                        {cap.description}
                      </p>

                      {/* Key Deliverables */}
                      <ul className="mb-4 space-y-1.5">
                        {cap.keyOutputs.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-light" style={{ color: C.wa(0.6) }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllCapabilities((current) => !current)}
                aria-expanded={showAllCapabilities}
                className="group/service inline-flex items-center gap-3 rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#050505] transition-all duration-300"
                style={{
                  background: C.lime,
                  borderColor: C.la(0.5),
                  boxShadow: `0 8px 28px ${C.la(0.25)}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.green;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${C.la(0.2)}, 0 12px 36px ${C.la(0.4)}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.lime;
                  e.currentTarget.style.boxShadow = `0 8px 28px ${C.la(0.25)}`;
                }}
              >
                {showAllCapabilities ? "Hide services" : "Explore our capabilities"}
                <ChevronRight className={`h-4 w-4 transition-transform duration-300 group-hover/service:translate-x-1 ${showAllCapabilities ? "-rotate-90" : "rotate-90"}`} />
              </button>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              04 — INDUSTRIES
          ══════════════════════════════════════════════════════ */}
          <section className="mb-8 sm:mb-20">
            <Industries />
          </section>

          {/* ══════════════════════════════════════════════════════
              05 — ENGAGEMENT MODELS
          ══════════════════════════════════════════════════════ */}
          <section className="mb-8 sm:mb-20">
            <EngagementModels />
          </section>

          {/* ══════════════════════════════════════════════════════
              06 — DEVELOPMENT PROCESS (4 Steps)
          ══════════════════════════════════════════════════════ */}
          <section
            className="relative mb-20 overflow-hidden py-10 sm:mb-28 sm:py-12"
          >

            <div className="relative z-10">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <div className="mb-4 flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}>
                  <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
                  PROCESS
                </div>
                <h2 className="mb-4 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">
                  Our AI <span style={{ color: C.lime }}>Delivery Steps.</span>
                </h2>
                <p className="mx-auto max-w-[66ch] text-sm font-light leading-relaxed text-white/65 sm:text-base">
                  From the first use case to measurable production value, every stage is designed to reduce risk and increase adoption.
                </p>
              </div>

              {/* Compact process grid */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {deliveryStages.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="group relative flex min-h-[280px] flex-col justify-between rounded-xl border border-white/15 bg-[#111111]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/55"
                    >
                      <div className="absolute -top-2 left-5 h-4 w-4 rounded-full border-4 border-[#050505] bg-[#B6FF00] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(182,255,0,0.6)]" aria-hidden="true" />
                      <div>
                        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#B6FF00]">
                            {step.num}
                          </span>
                          <StepIcon className="h-4 w-4 text-[#7DCC00] transition-colors group-hover:text-[#B6FF00]" strokeWidth={1.8} />
                        </div>

                        <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#B6FF00]">
                          {step.title}
                        </h3>

                        <p className="text-xs font-light leading-6 text-white/65">
                          {step.description}
                        </p>
                      </div>

                      <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                        <span className="mb-1 block text-[9px] font-mono uppercase tracking-[0.16em] text-white/35">
                          Key Deliverables
                        </span>
                        {step.deliverables.map((item, di) => (
                          <div key={di} className="flex items-start gap-2 text-[10px] font-light leading-4 text-white/55">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#B6FF00]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              07 — CLIENT TESTIMONIALS
          ══════════════════════════════════════════════════════ */}
          <section className="mb-8 sm:mb-20">
            <Testimonials />
          </section>

          {/* ══════════════════════════════════════════════════════
              09 — TECHNOLOGY ECOSYSTEM
          ══════════════════════════════════════════════════════ */}
          <section className="mb-8 sm:mb-20">
            <TechnologyStack />
          </section>

          {/* ══════════════════════════════════════════════════════
              10 — BUSINESS USE CASES
          ══════════════════════════════════════════════════════ */}
          <section className="mb-8 sm:mb-20">
            <div className="mx-auto mb-10 w-full max-w-4xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}>
                <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
                AI THAT DELIVERS
              </div>
              <h2 className="mb-6 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">
                AI That Drives <span style={{ color: C.lime }}>Results.</span>
              </h2>
              <p className="mx-auto max-w-[62ch] text-sm font-light leading-7 text-white/65 sm:text-base">
                We connect AI to the work that matters—improving execution, decisions, and measurable outcomes.
              </p>
            </div>

            {/* Interactive domain selector */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
              {businessUseCases.map((uc) => {
                const Icon = uc.icon;
                const isActive = activeUseCase === uc.id;
                return (
                  <button
                    key={uc.id}
                    onClick={() => setActiveUseCase(uc.id)}
                    className="group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-left transition-all duration-200"
                    style={{
                      background: isActive ? C.lime : C.black,
                      borderColor: isActive ? C.lime : C.wa(0.1),
                      color: isActive ? C.black : C.wa(0.65),
                    }}
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full transition-all ${isActive ? "text-black" : "text-white/45 group-hover:text-[#B6FF00]"}`}
                    >
                      <Icon
                        className="h-3.5 w-3.5"
                        fill={isActive ? "currentColor" : "rgba(255,255,255,0.08)"}
                        fillOpacity={isActive ? 0.3 : 0.15}
                        strokeWidth={2}
                      />
                    </div>
                    <span
                      className="block text-[10px] font-mono font-bold uppercase tracking-[0.08em]"
                    >
                      {uc.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Use Case Structured Flow: Problem -> AI System -> Outcome */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedUseCase.id}
                initial={shouldReduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease }}
                className="relative mx-auto max-w-[1360px] overflow-hidden rounded-2xl border border-white/10 p-5 sm:p-8 lg:p-10"
                style={{ background: `linear-gradient(135deg, ${C.graphite} 0%, ${C.black} 62%, ${C.ga(0.08)} 100%)` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
                      <SelectedIcon
                        className="w-6 h-6"
                        fill="currentColor"
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#B6FF00] tracking-widest uppercase block mb-1">
                        SELECTED BUSINESS DOMAIN
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                        {selectedUseCase.category}
                      </h3>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-xs font-mono font-bold text-[#B6FF00] w-fit">
                    <Zap className="w-3.5 h-3.5" fill="currentColor" fillOpacity={0.3} /> IMPACT: {selectedUseCase.metric}
                  </div>
                </div>

                {/* Three-Box Flow: Problem -> AI System -> Outcome */}
                <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">

                  {/* Problem */}
                  <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#080808] p-5 transition-colors duration-300 hover:border-[#7DCC00]/50">
                    <div>
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[#7DCC00]/30 bg-[#7DCC00]/10 text-[#7DCC00]">
                        <Search className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                      </div>
                      <span className="mb-2 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#7DCC00]">
                        [01] Business Problem
                      </span>
                      <p className="text-sm text-white/75 leading-relaxed font-light">
                        {selectedUseCase.problem}
                      </p>
                    </div>
                    <div className="pt-4 mt-6 border-t border-white/5 text-[10px] font-mono text-white/40">
                      STATUS: HIGH FRICTION
                    </div>
                  </div>

                  {/* AI System */}
                  <div className="flex flex-col justify-between rounded-xl border border-[#B6FF00]/35 bg-[#080808] p-5 shadow-[0_0_24px_rgba(182,255,0,0.06)]">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#B6FF00]/15 border border-[#B6FF00]/40 text-[#B6FF00] flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(182,255,0,0.2)]">
                        <Cpu className="w-4 h-4" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-mono text-[#B6FF00] uppercase tracking-wider block mb-2 font-bold">
                        [02] Engineered AI System
                      </span>
                      <p className="text-sm text-white/80 leading-relaxed font-light">
                        {selectedUseCase.aiSystem}
                      </p>
                    </div>
                    <div className="pt-4 mt-6 border-t border-white/5 text-[10px] font-mono text-[#B6FF00]">
                      ENGINEERED BY VELNIX
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#080808] p-5 transition-colors duration-300 hover:border-[#B6FF00]/50">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#7DCC00]/15 border border-[#7DCC00]/40 text-[#7DCC00] flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(125,204,0,0.2)]">
                        <TrendingUp className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-mono text-[#7DCC00] uppercase tracking-wider block mb-2 font-bold">
                        [03] Measured Outcome
                      </span>
                      <p className="text-sm text-white/75 leading-relaxed font-light">
                        {selectedUseCase.outcome}
                      </p>
                    </div>
                    <div className="pt-4 mt-6 border-t border-white/5 text-[10px] font-mono text-white/40">
                      RESULT: VERIFIABLE
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          {/* ══════════════════════════════════════════════════════
              11 — PRODUCTION AI (6 Technical Pillars - Process Style)
          ══════════════════════════════════════════════════════ */}
          <section
            className="relative mb-20 overflow-hidden py-10 sm:mb-28 sm:py-12"
          >
            <div className="relative z-10">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <div className="mb-4 flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}>
                  <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
                  ENGINEERING STANDARDS
                </div>
                <h2 className="mb-4 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">
                  Built for Production. <span style={{ color: C.lime }}>Not Just Prototypes.</span>
                </h2>
                <p className="mx-auto max-w-[66ch] text-sm font-light leading-relaxed text-white/65 sm:text-base">
                  Enterprise AI requires more than a prompt. We embed rigorous evaluation, guardrails, auditing, and security into every layer of the architecture.
                </p>
              </div>

              {/* Process-style pillars grid */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {productionPillars.map((pillar, i) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={i}
                      className="group relative flex min-h-[280px] flex-col justify-between rounded-xl border border-white/15 bg-[#111111]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/55"
                    >
                      <div className="absolute -top-2 left-5 h-4 w-4 rounded-full border-4 border-[#050505] bg-[#B6FF00] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(182,255,0,0.6)]" aria-hidden="true" />
                      <div>
                        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#B6FF00]">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <PillarIcon className="h-4 w-4 text-[#7DCC00] transition-colors group-hover:text-[#B6FF00]" strokeWidth={1.8} />
                        </div>

                        <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#B6FF00]">
                          {pillar.title}
                        </h3>

                        <p className="text-xs font-light leading-6 text-white/65">
                          {pillar.details}
                        </p>
                      </div>

                      <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                        <span className="mb-1 block text-[9px] font-mono uppercase tracking-[0.16em] text-white/35">
                          {pillar.tag}
                        </span>
                        <div className="flex items-start gap-2 text-[10px] font-light leading-4 text-white/55">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#B6FF00]" />
                          <span>{pillar.description}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              09 — WHY VELNIX (Process-Style Grid)
          ══════════════════════════════════════════════════════ */}
          <section
            className="relative mb-20 overflow-hidden py-10 sm:mb-28 sm:py-12"
          >
            <div className="relative z-10">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <div className="mb-4 flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}>
                  <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
                  THE VELNIX ADVANTAGE
                </div>
                <h2 className="mb-4 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">
                  Engineering AI Around <span style={{ color: C.lime }}>Your Business.</span>
                </h2>
                <p className="mx-auto max-w-[66ch] text-sm font-light leading-relaxed text-white/65 sm:text-base">
                  Why forward-thinking enterprises partner with Velnix to move past proof-of-concepts into reliable production deployment.
                </p>
              </div>

              {/* Process-style advantage grid */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    num: "01",
                    title: "Business-First",
                    description: "Start with the problem, not the technology. We identify where AI delivers verifiable economic leverage before writing code.",
                    icon: TrendingUp,
                    deliverables: ["Use Case Validation", "ROI Modeling", "Success Metrics"]
                  },
                  {
                    num: "02", 
                    title: "Production-Minded",
                    description: "Design for reliability beyond the prototype. We implement deterministic evaluation harnesses, latency budgets, and full-stack observability.",
                    icon: ShieldCheck,
                    deliverables: ["Evaluation Benchmarks", "Performance Monitoring", "Fallback Systems"]
                  },
                  {
                    num: "03",
                    title: "Integration-Native", 
                    description: "Build AI that works with your existing operations. We connect models directly to your data, tools, and workflows.",
                    icon: Workflow,
                    deliverables: ["API Integrations", "Data Pipelines", "Workflow Automation"]
                  },
                  {
                    num: "04",
                    title: "Security-First",
                    description: "Enterprise AI requires enterprise security. We implement zero-trust architectures, role-based access, and audit trails.",
                    icon: Lock,
                    deliverables: ["Access Controls", "Encryption Standards", "Audit Logging"]
                  }
                ].map((advantage) => {
                  const AdvantageIcon = advantage.icon;
                  return (
                    <div
                      key={advantage.num}
                      className="group relative flex min-h-[280px] flex-col justify-between rounded-xl border border-white/15 bg-[#111111]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/55"
                    >
                      <div className="absolute -top-2 left-5 h-4 w-4 rounded-full border-4 border-[#050505] bg-[#B6FF00] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(182,255,0,0.6)]" aria-hidden="true" />
                      <div>
                        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#B6FF00]">
                            {advantage.num}
                          </span>
                          <AdvantageIcon className="h-4 w-4 text-[#7DCC00] transition-colors group-hover:text-[#B6FF00]" strokeWidth={1.8} />
                        </div>

                        <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#B6FF00]">
                          {advantage.title}
                        </h3>

                        <p className="text-xs font-light leading-6 text-white/65">
                          {advantage.description}
                        </p>
                      </div>

                      <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                        <span className="mb-1 block text-[9px] font-mono uppercase tracking-[0.16em] text-white/35">
                          Key Capabilities
                        </span>
                        {advantage.deliverables.map((item, di) => (
                          <div key={di} className="flex items-start gap-2 text-[10px] font-light leading-4 text-white/55">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#B6FF00]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="mb-8 sm:mb-20">
            <LatestBlogs />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIDevelopment;