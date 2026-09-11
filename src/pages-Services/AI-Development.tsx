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
import { useReducedMotion } from "@/hooks/useAnimations";

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
// 03 — CAPABILITIES DATA (6 Structured Modules)
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
    title: "AI Agent Development",
    category: "Autonomous Systems",
    description:"Intelligent agents that reason through tasks, use tools, interact with APIs, and execute multi-step workflows.",
    icon: Bot,
    keyOutputs: [
      "Autonomous ReAct reasoning loops",
      "Deterministic tool & API invocation",
      "Stateful memory & multi-agent coordination",
    ],
    specs: ["Tool Calling", "ReAct Framework", "Multi-Agent"],
  },
  {
    id: "gen-ai-llm",
    num: "02",
    title: "Generative AI & LLM Applications",
    category: "Intelligent Interfaces",
    description:
      "AI-powered products, copilots, content systems, summarization, classification, and intelligent interfaces.",
    icon: Sparkles,
    keyOutputs: [
      "Domain-adapted enterprise copilots",
      "Deterministic structured JSON outputs",
      "Streaming token user experiences",
    ],
    specs: ["Custom Copilots", "Prompt Systems", "Fine-Tuning"],
  },
  {
    id: "rag-knowledge",
    num: "03",
    title: "RAG & Knowledge Systems",
    category: "Grounded Intelligence",
    description:
      "Ground AI responses in your private documents, databases, knowledge bases, and business data.",
    icon: Database,
    keyOutputs: [
      "Hybrid vector + lexical semantic retrieval",
      "Multi-tenant document chunking & parsing",
      "Citations with zero-hallucination bounds",
    ],
    specs: ["Hybrid Search", "Vector Embeddings", "Zero Drift"],
  },
  {
    id: "workflow-automation",
    num: "04",
    title: "AI Workflow Automation",
    category: "Operational Efficiency",
    description:
      "Automate repetitive operational processes using AI, APIs, business logic, and workflow orchestration.",
    icon: Workflow,
    keyOutputs: [
      "Self-healing multi-system execution pipelines",
      "Human-in-the-loop review & approval gates",
      "Event-driven trigger & background worker sync",
    ],
    specs: ["Self-Healing", "Approval Gates", "Zero Bottlenecks"],
  },
  {
    id: "computer-vision",
    num: "05",
    title: "Computer Vision",
    category: "Visual Intelligence",
    description:
      "Build systems for image understanding, document processing, OCR, detection, classification, and visual inspection.",
    icon: Eye,
    keyOutputs: [
      "Dense document OCR & semantic parsing",
      "Industrial defect & anomaly detection",
      "Real-time video & visual inspection pipelines",
    ],
    specs: ["Dense OCR", "Visual QA", "Spatial Detection"],
  },
  {
    id: "custom-ai-software",
    num: "06",
    title: "Custom AI Software",
    category: "Purpose-Built Solutions",
    description:
      "Design and develop complete AI-powered applications around specific business requirements.",
    icon: Code2,
    keyOutputs: [
      "Proprietary model pipelines & private VPCs",
      "Secure backend architecture with low latency",
      "Full-stack web, mobile, and API integration",
    ],
    specs: ["Private VPC", "Custom Frontends", "SLA Performance"],
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
// 08 — TECHNOLOGY ECOSYSTEM DATA
// ─────────────────────────────────────────────────────────────────────────────
interface TechCategory {
  title: string;
  desc: string;
  icon: React.ElementType;
  items: { name: string; tag: string }[];
}

const techCategories: TechCategory[] = [
  {
    title: "AI / Models",
    desc: "Frontier and open-source models selected for specific task latency and capability profiles.",
    icon: Brain,
    items: [
      { name: "OpenAI", tag: "GPT-4o & Reasoning" },
      { name: "Anthropic", tag: "Claude 3.5 Sonnet" },
      { name: "Google Gemini", tag: "Multimodal 1.5 Pro" },
      { name: "Open-source models", tag: "Llama 3.3 / Mistral" },
    ],
  },
  {
    title: "AI Engineering",
    desc: "Robust frameworks for deterministic reasoning loops, orchestration, and interface development.",
    icon: Terminal,
    items: [
      { name: "Python", tag: "Core AI Engine" },
      { name: "TypeScript", tag: "Full-Stack & APIs" },
      { name: "FastAPI", tag: "Low-Latency Microservices" },
      { name: "LangChain", tag: "Tool Integrations" },
      { name: "LangGraph", tag: "Stateful Agent Graphs" },
    ],
  },
  {
    title: "Data & Retrieval",
    desc: "High-performance storage, indexing, and hybrid semantic retrieval systems.",
    icon: Database,
    items: [
      { name: "PostgreSQL", tag: "pgvector & Relational" },
      { name: "Vector Search", tag: "Pinecone / Qdrant" },
      { name: "Embeddings", tag: "Dense & Sparse Hybrid" },
      { name: "RAG", tag: "Context Assembly Pipelines" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Enterprise compute environments with secure network boundaries and scalable runtime containers.",
    icon: Server,
    items: [
      { name: "AWS", tag: "Bedrock & ECS / EKS" },
      { name: "Azure", tag: "Azure OpenAI & Cognitive" },
      { name: "Google Cloud", tag: "Vertex AI & Cloud Run" },
      { name: "Docker", tag: "Containerized Workloads" },
    ],
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
        background: `radial-gradient(ellipse 52% 74% at 4% 44%, ${C.ga(0.18)} 0%, ${C.ga(0.05)} 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, ${C.la(0.1)} 0%, ${C.ga(0.02)} 42%, transparent 76%), ${C.black}`,
        color: C.white,
      }}
    >
      <Navbar isDark={true} />

      {/* ─────────────────────────────────────────────────────
          BREADCRUMB NAVIGATION
      ───────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 pt-28 pb-10"
      >
        <ol
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm"
          style={{ color: C.wa(0.55) }}
        >
          {/* Home */}
          <li>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B6FF00]"
              aria-label="Go to Home"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </Link>
          </li>

          <li
            className="flex items-center gap-2 sm:gap-3"
            aria-hidden="true"
          >
            <span
              style={{ color: C.wa(0.3) }}
              className="text-base sm:text-lg leading-none"
            >
              /
            </span>
          </li>

          {/* Services */}
          <li>
            <Link
              to="/ai-development"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B6FF00]"
              aria-label="Go to Services"
            >
              Services
            </Link>
          </li>

          <li
            className="flex items-center gap-2 sm:gap-3"
            aria-hidden="true"
          >
            <span
              style={{ color: C.wa(0.3) }}
              className="text-base sm:text-lg leading-none"
            >
              /
            </span>
          </li>

          {/* Current Page */}
          <li
            className="inline-flex items-center gap-1.5 font-semibold"
            style={{ color: C.lime }}
            aria-current="page"
          >
            AI Development
          </li>
        </ol>
      </nav>

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
        {/* Dynamic laser scan line */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-px w-full overflow-hidden" aria-hidden="true">
          <div
            ref={scanRef}
            className="absolute left-0 top-0 h-px w-1/5"
            style={{
              transform: 'translateX(var(--hero-scan-progress, 0%))',
              background: `linear-gradient(90deg, transparent, ${C.la(0.85)}, transparent)`,
              boxShadow: `0 0 12px ${C.la(0.55)}`,
              transition: 'transform 120ms linear',
            }}
          />
        </div>

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
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
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
                <span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />
              </motion.div>

              {/* H1 Headline */}
              <motion.h1
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65, ease }}
                style={{
                  fontSize: 'clamp(2rem, 4.2vw, 3.5rem)',
                  fontWeight: 800,
                  color: C.white,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.25rem',
                }}
              >
                Build Intelligent Systems That Drive Real Business Outcomes.
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
                We design and build production-ready AI systems that automate complex workflows,
                unlock data, and help businesses operate smarter.
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
                  <span className="relative z-10">Start Your AI Project</span>
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
                  Explore Our Capabilities
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
                  <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Production SLA</span>
                </div>
                <div style={{ width: '1px', height: '36px', background: C.wa(0.1) }} />
                <div className="flex flex-col items-start">
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>Zero</span>
                  <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Vendor Lock-In</span>
                </div>
                <div style={{ width: '1px', height: '36px', background: C.wa(0.1) }} />
                <div className="flex flex-col items-start">
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>3–5 Wks</span>
                  <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Pilot to Prod</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side — CSS/React AI Network Visual */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease }}
              className="relative flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-full max-w-lg aspect-square">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                {/* Inner ring */}
                <div className="absolute inset-8 rounded-full border border-white/[0.04]" />
                {/* Core glow */}
                <div
                  className="absolute inset-16 rounded-full"
                  style={{ background: `radial-gradient(circle, ${C.la(0.08)} 0%, transparent 70%)` }}
                />

                {/* Animated signal dots — connected nodes */}
                {/* Node positions arranged in a network pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Connections */}
                  <line x1="200" y1="80" x2="120" y2="160" stroke={C.la(0.15)} strokeWidth="0.5" />
                  <line x1="200" y1="80" x2="280" y2="160" stroke={C.la(0.15)} strokeWidth="0.5" />
                  <line x1="120" y1="160" x2="200" y2="200" stroke={C.la(0.12)} strokeWidth="0.5" />
                  <line x1="280" y1="160" x2="200" y2="200" stroke={C.la(0.12)} strokeWidth="0.5" />
                  <line x1="200" y1="200" x2="100" y2="280" stroke={C.la(0.1)} strokeWidth="0.5" />
                  <line x1="200" y1="200" x2="300" y2="280" stroke={C.la(0.1)} strokeWidth="0.5" />
                  <line x1="100" y1="280" x2="200" y2="320" stroke={C.la(0.08)} strokeWidth="0.5" />
                  <line x1="300" y1="280" x2="200" y2="320" stroke={C.la(0.08)} strokeWidth="0.5" />
                  <line x1="120" y1="160" x2="100" y2="280" stroke={C.la(0.08)} strokeWidth="0.5" />
                  <line x1="280" y1="160" x2="300" y2="280" stroke={C.la(0.08)} strokeWidth="0.5" />

                  {/* Signal pulses along connections */}
                  <circle r="2" fill={C.lime}>
                    <animateMotion dur="4s" repeatCount="indefinite" path="M200,80 L120,160 L200,200 L100,280 L200,320" />
                  </circle>
                  <circle r="2" fill={C.green}>
                    <animateMotion dur="5s" repeatCount="indefinite" path="M200,80 L280,160 L300,280 L200,320" />
                  </circle>
                  <circle r="1.5" fill={C.lime}>
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M120,160 L200,200 L300,280" />
                  </circle>

                  {/* Nodes */}
                  <circle cx="200" cy="80" r="4" fill={C.lime} opacity="0.9" />
                  <circle cx="120" cy="160" r="3" fill={C.white} opacity="0.6" />
                  <circle cx="280" cy="160" r="3" fill={C.white} opacity="0.6" />
                  <circle cx="200" cy="200" r="5" fill={C.lime} opacity="0.7" />
                  <circle cx="100" cy="280" r="3" fill={C.white} opacity="0.5" />
                  <circle cx="300" cy="280" r="3" fill={C.white} opacity="0.5" />
                  <circle cx="200" cy="320" r="4" fill={C.green} opacity="0.7" />

                  {/* Core node */}
                  <circle cx="200" cy="200" r="8" fill={C.lime} opacity="0.15" />
                  <circle cx="200" cy="200" r="3.5" fill={C.lime} opacity="0.9" />
                </svg>

                {/* Rotating ring decoration */}
                <div
                  className="absolute inset-4 rounded-full border border-white/[0.03]"
                  style={{ animation: 'velnix-scroll-line 20s linear infinite' }}
                />
              </div>
            </motion.div>
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
        className="relative mx-auto w-full border-y border-[#050505]/20 bg-[#B6FF00] px-6 py-10 text-[#050505] sm:py-12 lg:px-16 lg:py-14"
      >
        <div className="relative w-full grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {[
            { number: '5+', label: 'Years of engineering experience' },
            { number: '23+', label: 'Enterprise and SMBs clients' },
            { number: '45+', label: 'Intelligent systems deployed' },
            { number: '95%', label: 'Client satisfaction rate' },
          ].map(({ number, label }) => (
            <div key={label} className="relative px-3 text-center sm:px-5">
              <div className="text-4xl font-extrabold leading-none tracking-[-0.04em] text-[#050505] sm:text-5xl">{number.replace('+', '')}<span className="text-[#050505]">{number.includes('+') ? '+' : ''}</span></div>
              <p className="mx-auto mt-4 max-w-[12ch] text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[#050505]/65 sm:max-w-[15ch] sm:text-[0.68rem]">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10 pt-16 pb-24 sm:pt-20 sm:pb-32">
        <div className="w-full px-5 sm:px-8 lg:px-12">

          {/* ══════════════════════════════════════════════════════
              02 — VALUE STATEMENT
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36 py-12 sm:py-16 border-y border-white/10 relative">
            <div className="w-full">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                FROM IDEA TO PRODUCTION
              </span>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-6">
                AI Should Improve the Way Your Business Operates.
              </h2>

              <p className="text-base sm:text-xl text-white/70 font-light leading-relaxed mb-8">
                We turn AI opportunities into reliable systems that integrate with the software,
                data, and workflows your organization already depends on.
              </p>

              {/* Differentiator Pillars with Vibrant Icon Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.lime, border: `1px solid ${C.lime}`, color: C.black }}>
                    <Workflow className="w-4 h-4" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono font-bold text-[#B6FF00]">01 // DEEP INTEGRATION</span>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      Built directly into your databases, CRMs, and operational software—not isolated chatbots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.lime, border: `1px solid ${C.lime}`, color: C.black }}>
                    <CheckCircle2 className="w-4 h-4" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono font-bold text-[#B6FF00]">02 // DETERMINISTIC EVALS</span>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      Benchmarked with automated regression tests to guarantee accuracy and eliminate hallucinations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.lime, border: `1px solid ${C.lime}`, color: C.black }}>
                    <ShieldCheck className="w-4 h-4" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono font-bold text-[#B6FF00]">03 // ENTERPRISE BOUNDARIES</span>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      Zero model training on proprietary data, complete tenant isolation, and auditable outputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              03 — AI DEVELOPMENT CAPABILITIES
          ══════════════════════════════════════════════════════ */}
          <section id="capabilities" className="mb-28 sm:mb-36 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10 gap-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                  WHAT WE BUILD
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight">
                  AI Systems Built Around Your Business.
                </h2>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mt-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <motion.div
                    key={cap.id}
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease }}
                    className={`group flex flex-col justify-between p-7 sm:p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                      isLeft ? 'border-white/[0.12]' : isCenter ? 'border-white/[0.12]' : 'border-white/[0.12]'
                    }`}
                    style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.03) 0%, ${C.graphite} 100%)` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.lime;
                      e.currentTarget.style.boxShadow = `0 8px 40px ${C.la(0.12)}, inset 0 1px 0 ${C.la(0.15)}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.wa(0.12);
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.la(0.06)} 0%, transparent 60%)` }} />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold tracking-widest" style={{ color: C.lime }}>
                          {cap.num}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: C.wa(0.4) }}>
                          {cap.category}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#B6FF00] transition-colors">
                        {cap.title}
                      </h3>

                      <p className="text-sm leading-relaxed font-light mb-5" style={{ color: C.wa(0.7) }}>
                        {cap.description}
                      </p>

                      {/* Key Deliverables */}
                      <ul className="space-y-2 mb-5">
                        {cap.keyOutputs.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-light" style={{ color: C.wa(0.6) }}>
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: C.lime }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Specs */}
                    <div className="pt-5 flex flex-wrap gap-1.5" style={{ borderTop: `1px solid ${C.wa(0.08)}` }}>
                      {cap.specs.map((spec, si) => (
                        <span key={si} className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border" style={{ background: C.la(0.08), color: C.lime, borderColor: C.la(0.2) }}>
                          {spec}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              04 — AI ARCHITECTURE
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36">
            <div className="w-full mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                SYSTEM TOPOLOGY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
                From Models to Intelligent Systems.
              </h2>
              {/* Signature Accent Line */}
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mb-6" />
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Raw models are not products. We engineer the complete operational scaffolding:
                grounding responses, enforcing guardrails, orchestrating tools, and verifying business state.
              </p>
            </div>

            {/* Visual Technical Architecture Board */}
            <div
              className="p-6 sm:p-12 rounded-2xl border border-white/15 relative overflow-hidden"
              style={{ background: C.graphite }}
            >
              {/* Background technical grid pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(${C.wa(0.1)} 1px, transparent 1px), linear-gradient(90deg, ${C.wa(0.1)} 1px, transparent 1px)`,
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10 w-full flex flex-col gap-3">
                
                {/* STAGE 1: USER / BUSINESS INPUT */}
                <div className="p-4 rounded-xl bg-[#080808] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 flex items-center justify-center">
                      <FileText className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        01. User / Business Input
                      </div>
                      <div className="text-[11px] text-white/50 font-light">
                        API Requests, Webhook Events, PDF Documents, Database CDC Streams
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full w-fit">
                    RAW INGESTION
                  </span>
                </div>

                {/* FLOW ARROW */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-[#B6FF00]/40" />
                </div>

                {/* STAGE 2: AI INTERFACE */}
                <div className="p-4 rounded-xl bg-[#080808] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 flex items-center justify-center">
                      <Terminal className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        02. AI Interface Layer
                      </div>
                      <div className="text-[11px] text-white/50 font-light">
                        Streaming Token UI, Copilot Ingestion, Slack/Teams Bot, REST/gRPC Endpoints
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full w-fit">
                    PROTOCOL ADAPTER
                  </span>
                </div>

                {/* FLOW ARROW */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-[#B6FF00]/40" />
                </div>

                {/* STAGE 3: AI MODEL */}
                <div className="p-4 rounded-xl bg-[#080808] border border-[#B6FF00]/40 shadow-[0_0_20px_rgba(182,255,0,0.06)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#B6FF00]/15 border border-[#B6FF00]/40 text-[#B6FF00] flex items-center justify-center shadow-[0_0_12px_rgba(182,255,0,0.2)]">
                      <Brain className="w-4 h-4 text-[#B6FF00]" fill="currentColor" fillOpacity={0.3} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-[#B6FF00] uppercase tracking-wider">
                        03. AI Model Layer
                      </div>
                      <div className="text-[11px] text-white/70 font-light">
                        Frontier Reasoning (OpenAI / Claude / Gemini) + Open-Source Local Weights (Llama / Mistral)
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#B6FF00] bg-[#B6FF00]/10 px-2.5 py-0.5 rounded-full border border-[#B6FF00]/30 w-fit">
                    COGNITIVE ROUTING
                  </span>
                </div>

                {/* BRANCHING LAYER: RAG / TOOLS / MEMORY */}
                <div className="relative my-2">
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-[#B6FF00]/50" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    {/* RAG */}
                    <div className="p-3.5 rounded-xl bg-[#050505] border border-white/15 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-white">RAG</span>
                        <div className="w-7 h-7 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center">
                          <Database className="w-3.5 h-3.5 text-[#B6FF00]" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-[10px] text-white/60 font-light">
                        Hybrid Vector Search + BM25 Lexical with Citation Bounds
                      </p>
                    </div>

                    {/* TOOLS */}
                    <div className="p-3.5 rounded-xl bg-[#050505] border border-white/15 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-white">TOOLS</span>
                        <div className="w-7 h-7 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center">
                          <Sliders className="w-3.5 h-3.5 text-[#B6FF00]" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-[10px] text-white/60 font-light">
                        Strict Function Calling & Deterministic Schema Handlers
                      </p>
                    </div>

                    {/* MEMORY */}
                    <div className="p-3.5 rounded-xl bg-[#050505] border border-white/15 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-white">MEMORY</span>
                        <div className="w-7 h-7 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center">
                          <Cpu className="w-3.5 h-3.5 text-[#B6FF00]" fill="currentColor" fillOpacity={0.3} strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-[10px] text-white/60 font-light">
                        Session Thread Cache & Long-Term Cross-Execution State
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center pt-2">
                    <div className="w-0.5 h-4 bg-[#B6FF00]/50" />
                  </div>
                </div>

                {/* STAGE 4: AGENT LOGIC */}
                <div className="p-4 rounded-xl bg-[#080808] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        04. Agent Logic & Guardrails
                      </div>
                      <div className="text-[11px] text-white/50 font-light">
                        Multi-Turn ReAct Loops, Self-Correction, Escalation Criteria & Human Verification
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full w-fit">
                    GOVERNANCE
                  </span>
                </div>

                {/* FLOW ARROW */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-[#B6FF00]/40" />
                </div>

                {/* STAGE 5: API / SYSTEMS */}
                <div className="p-4 rounded-xl bg-[#080808] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 flex items-center justify-center">
                      <Workflow className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        05. API & Business Systems
                      </div>
                      <div className="text-[11px] text-white/50 font-light">
                        Salesforce, SAP, PostgreSQL, Stripe, Slack, Internal Core Banking / ERPs
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full w-fit">
                    INTEGRATION
                  </span>
                </div>

                {/* FLOW ARROW */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-[#B6FF00]/40" />
                </div>

                {/* STAGE 6: ACTION */}
                <div className="p-4 rounded-xl bg-[#080808] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 flex items-center justify-center">
                      <Zap className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        06. Deterministic Action Execution
                      </div>
                      <div className="text-[11px] text-white/50 font-light">
                        Database Writes, Notification Dispatch, Invoice Settlement, Ticket Resolution
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full w-fit">
                    FULFILLMENT
                  </span>
                </div>

                {/* FLOW ARROW */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-[#B6FF00]" />
                </div>

                {/* STAGE 7: MONITORING */}
                <div className="p-4 rounded-xl bg-[#B6FF00]/10 border border-[#B6FF00]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#B6FF00]/20 border border-[#B6FF00]/40 text-[#B6FF00] flex items-center justify-center shadow-[0_0_12px_rgba(182,255,0,0.25)]">
                      <Activity className="w-4 h-4 text-[#B6FF00] animate-pulse" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-[#B6FF00] uppercase tracking-wider">
                        07. Continuous Monitoring & Telemetry
                      </div>
                      <div className="text-[11px] text-white/80 font-light">
                        Token Cost Profiling, Latency Traces, Output Eval Scoring, Model Drift Alerts
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#B6FF00] bg-black/60 px-3 py-0.5 rounded-full border border-[#B6FF00]/30 w-fit">
                    ACTIVE OBSERVED
                  </span>
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              05 — BUSINESS USE CASES
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36">
            <div className="w-full mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                OUTCOME-DRIVEN AI
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
                AI Applied Where It Matters.
              </h2>
              {/* Signature Accent Line */}
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mb-6" />
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                We design AI solutions around high-friction operational realities,
                connecting business problems directly to verifiable outcomes.
              </p>
            </div>

            {/* Interactive Tab Selector (8 Categories) with Rich Icon Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
              {businessUseCases.map((uc) => {
                const Icon = uc.icon;
                const isActive = activeUseCase === uc.id;
                return (
                  <button
                    key={uc.id}
                    onClick={() => setActiveUseCase(uc.id)}
                    className="p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between group"
                    style={{
                      background: isActive ? C.la(0.08) : C.graphite,
                      borderColor: isActive ? C.lime : C.wa(0.1),
                    }}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg mb-2.5 flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#B6FF00] text-black shadow-[0_0_15px_rgba(182,255,0,0.4)]"
                          : "bg-[#181818] text-white/50 border border-white/10 group-hover:border-[#B6FF00]/30 group-hover:text-white"
                      }`}
                    >
                      <Icon
                        className="w-4 h-4"
                        fill={isActive ? "currentColor" : "rgba(255,255,255,0.08)"}
                        fillOpacity={isActive ? 0.3 : 0.15}
                        strokeWidth={2}
                      />
                    </div>
                    <span
                      className={`text-[11px] font-mono font-bold tracking-tight block ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
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
                className="p-8 sm:p-12 rounded-2xl border border-white/15 relative overflow-hidden"
                style={{ background: C.graphite }}
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                  
                  {/* Problem */}
                  <div className="p-6 rounded-xl bg-[#080808] border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-3">
                        <Search className="w-4 h-4" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider block mb-2 font-bold">
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
                  <div className="p-6 rounded-xl bg-[#080808] border border-[#B6FF00]/30 shadow-[0_0_20px_rgba(182,255,0,0.05)] flex flex-col justify-between">
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
                  <div className="p-6 rounded-xl bg-[#080808] border border-white/10 flex flex-col justify-between">
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
              06 — DEVELOPMENT PROCESS (6 Steps)
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36 relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'url(/image/Servies/ai-development.avif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(8px)',
              }}
            />
            
            <div className="relative z-10">
              <div className="w-full mb-14">
                <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                  HOW WE BUILD
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
                  From AI Opportunity to Production System.
                </h2>
                {/* Signature Accent Line */}
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mb-6" />
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  A disciplined six-phase delivery framework that ensures model precision,
                  bulletproof security boundaries, and enterprise readiness.
                </p>
              </div>

              {/* 6-step responsive grid with Icon Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentSteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="p-7 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-[#B6FF00]/40 group"
                    style={{ background: C.graphite }}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <span className="text-xs font-mono font-bold text-[#B6FF00] tracking-widest">
                          {step.num}
                        </span>
                        
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-all duration-300" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
                          <StepIcon
                            className="w-5 h-5 text-[#B6FF00]"
                            fill="currentColor"
                            fillOpacity={0.25}
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#B6FF00] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-1">
                        Key Deliverables
                      </span>
                      {step.deliverables.map((item, di) => (
                        <div key={di} className="flex items-center gap-2 text-[11px] text-white/60 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
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
              07 — PRODUCTION AI (6 Technical Pillars)
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36">
            <div className="w-full mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                ENGINEERING STANDARDS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
                Built for Production. Not Just Prototypes.
              </h2>
              {/* Signature Accent Line */}
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mb-6" />
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Enterprise AI requires more than a prompt. We embed rigorous evaluation, guardrails,
                auditing, and security into every layer of the architecture.
              </p>
            </div>

            {/* 6 Technical Pillars Grid with Rich Filled Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productionPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-7 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-[#B6FF00]/40 group"
                    style={{ background: C.graphite }}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-all duration-300" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
                          <Icon
                            className="w-5 h-5 text-[#B6FF00]"
                            fill="currentColor"
                            fillOpacity={0.25}
                            strokeWidth={2}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-[#B6FF00] tracking-wider">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#B6FF00] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs font-mono text-white/50 mb-4">
                        {pillar.description}
                      </p>

                      <p className="text-xs text-white/70 leading-relaxed font-light">
                        {pillar.details}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>STANDARD: ENFORCED</span>
                      <CheckCircle2 className="w-4 h-4 text-[#B6FF00]" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              08 — TECHNOLOGY ECOSYSTEM
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36">
            <div className="w-full mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                ENGINEERING STACK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
                The Right AI Stack for the Right Problem.
              </h2>
              {/* Signature Accent Line */}
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mb-6" />
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                We select the optimal frameworks, storage engines, and model architectures based on
                your latency requirements, cost budgets, and security posture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-[#B6FF00]/40 transition-colors"
                    style={{ background: C.graphite }}
                  >
                    <div>
                      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
                          <Icon
                            className="w-5 h-5 text-[#B6FF00]"
                            fill="currentColor"
                            fillOpacity={0.25}
                            strokeWidth={2}
                          />
                        </div>
                        <h3 className="font-display text-base font-bold text-white tracking-tight">
                          {cat.title}
                        </h3>
                      </div>

                      <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                        {cat.desc}
                      </p>

                      <div className="space-y-3">
                        {cat.items.map((item, ii) => (
                          <div
                            key={ii}
                            className="p-2.5 rounded-lg bg-[#080808] border border-white/5 flex flex-col"
                          >
                            <span className="text-xs font-mono font-bold text-white">
                              {item.name}
                            </span>
                            <span className="text-[10px] font-mono text-white/45 mt-0.5">
                              {item.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              09 — WHY VELNIX (Visual Composition)
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36">
            <div className="w-full mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                THE VELNIX ADVANTAGE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
                Engineering AI Around Your Business.
              </h2>
              {/* Signature Accent Line */}
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mb-6" />
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Why forward-thinking enterprises partner with Velnix to move past proof-of-concepts
                into reliable production deployment.
              </p>
            </div>

            {/* Premium Visual Advantage Grid */}
            <div
              className="p-8 sm:p-14 rounded-2xl border border-white/15 relative overflow-hidden"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 100%), ${C.graphite}`,
                backdropFilter: 'blur(12px)'
              }}
            >
              {/* Subtle ambient corner glow */}
              <div
                className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${C.la(0.04)} 0%, transparent 70%)` }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">

                {/* 01: Business-First */}
                <div
                  className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#080808] to-[#0a0a0a] border border-white/10 hover:border-[#B6FF00]/50 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/0 to-[#B6FF00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00] group-hover:text-white transition-colors">01 // PURPOSE</span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#B6FF00]/30 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${C.lime}, ${C.green})`,
                        border: `1px solid ${C.lime}`,
                        color: C.black
                      }}
                    >
                      <TrendingUp className="w-5 h-5" fill="currentColor" fillOpacity={0.3} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#B6FF00] transition-colors">Business-First</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed group-hover:text-white/90 transition-colors">
                    Start with the problem, not the technology. We identify where AI delivers
                    verifiable economic leverage before writing code, ensuring projects drive real ROI.
                  </p>

                  {/* Subtle corner highlight */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#B6FF00]/10 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* 02: Production-Minded */}
                <div
                  className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#080808] to-[#0a0a0a] border border-white/10 hover:border-[#B6FF00]/50 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/0 to-[#B6FF00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00] group-hover:text-white transition-colors">02 // RELIABILITY</span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#B6FF00]/30 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${C.lime}, ${C.green})`,
                        border: `1px solid ${C.lime}`,
                        color: C.black
                      }}
                    >
                      <ShieldCheck className="w-5 h-5" fill="currentColor" fillOpacity={0.3} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#B6FF00] transition-colors">Production-Minded</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed group-hover:text-white/90 transition-colors">
                    Design for reliability beyond the prototype. We implement deterministic evaluation
                    harnesses, latency budgets, fallback models, and full-stack observability.
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/0 to-[#B6FF00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                {/* 03: Integration-Ready */}
                <div
                  className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#080808] to-[#0a0a0a] border border-white/10 hover:border-[#B6FF00]/50 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/0 to-[#B6FF00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00] group-hover:text-white transition-colors">03 // ADOPTION</span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#B6FF00]/30 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${C.lime}, ${C.green})`,
                        border: `1px solid ${C.lime}`,
                        color: C.black
                      }}
                    >
                      <Layers className="w-5 h-5" fill="currentColor" fillOpacity={0.3} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#B6FF00] transition-colors">Integration-Ready</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed group-hover:text-white/90 transition-colors">
                    Connect AI to existing products and workflows. Our solutions integrate smoothly
                    with legacy ERPs, internal databases, CRMs, and modern APIs without friction.
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/0 to-[#B6FF00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                {/* 04: Built to Evolve */}
                <div
                  className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#080808] to-[#0a0a0a] border border-white/10 hover:border-[#B6FF00]/50 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/0 to-[#B6FF00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00] group-hover:text-white transition-colors">04 // AGILITY</span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#B6FF00]/30 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${C.lime}, ${C.green})`,
                        border: `1px solid ${C.lime}`,
                        color: C.black
                      }}
                    >
                      <RefreshCw className="w-5 h-5" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#B6FF00] transition-colors">Built to Evolve</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed group-hover:text-white/90 transition-colors">
                    Architecture that can adapt as models and requirements change. Modular orchestration
                    means you can swap foundation models seamlessly without refactoring business logic.
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/0 to-[#B6FF00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              INSIGHTS & ARTICLES SECTION
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36">
            <div className="w-full mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.06), borderColor: C.la(0.3), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                INTELLIGENCE HUB
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
                Insights & Articles
              </h2>
              {/* Signature Accent Line */}
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mb-6" />
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Strategic intelligence, technical deep-dives, and practical guidance on AI development, automation, and enterprise systems.
              </p>
            </div>
            <LatestBlogs />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIDevelopment;
