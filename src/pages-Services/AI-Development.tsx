import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
          01 — HERO (Exact Color Scheme & Atmospheric Visuals from Hero.tsx)
      ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative isolate w-full overflow-hidden"
        style={{
          background: C.black,
        }}
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


        {/* Radial Lighting from Hero.tsx */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 72% 55% at 50% -8%, rgba(182,255,0,0.16) 0%, rgba(125,204,0,0.07) 38%, transparent 74%), radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.17) 0%, rgba(125,204,0,0.05) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.1) 0%, rgba(125,204,0,0.03) 42%, transparent 76%)',
            filter: 'blur(10px)',
          }}
        />

        {/* 64px Grid Overlay with vertical mask from Hero.tsx */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 78%)',
            opacity: 0.32,
          }}
        />

        {/* Ambient Glow Orbs from Hero.tsx */}
        <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">
          {/* Lime glow top-left */}
          <div
            className="absolute"
            style={{
              width: 400,
              height: 400,
              top: -120,
              left: -80,
              background: `radial-gradient(circle, ${C.la(0.1)} 0%, ${C.ga(0.035)} 38%, transparent 72%)`,
              filter: 'blur(46px)',
            }}
          />

          {/* Green glow bottom-right */}
          <div
            className="absolute"
            style={{
              width: 350,
              height: 350,
              bottom: -60,
              right: -60,
              background: `radial-gradient(circle, ${C.ga(0.12)} 0%, ${C.ga(0.04)} 42%, transparent 74%)`,
              filter: 'blur(64px)',
            }}
          />

          {/* Bottom Divider Rule from Hero.tsx */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${C.la(0.2)}, transparent)` }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="w-full flex flex-col items-start text-left">
            {/* H1 Headline matching Hero.tsx colors and typography */}
            <motion.h1
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65, ease }}
              style={{
                fontSize: 'clamp(2.35rem, 4.5vw, 3.75rem)',
                fontWeight: 800,
                color: C.white,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Build AI That Works{' '}
              <span
                style={{
                  color: C.lime,
                  display: 'inline',
                }}
              >
                in the Real World.
              </span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65, ease }}
              style={{
                fontSize: 'clamp(0.975rem, 1.6vw, 1.125rem)',
                color: C.wa(0.72),
                lineHeight: 1.75,
                maxWidth: '56ch',
                marginBottom: '2rem',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}
            >
              We design, develop, integrate, and deploy production-ready AI systems that
              connect intelligence with your data, enterprise products, and operational workflows.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55, ease }}
              className="flex flex-wrap items-center gap-4 mb-4"
            >
              {/* Primary CTA (Magnetic/Shimmer Button from Hero.tsx) */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300"
                style={{
                  background: C.lime,
                  color: C.black,
                  fontSize: '0.9rem',
                  letterSpacing: '0.01em',
                  padding: '0.8rem 1.75rem',
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
                aria-label="Build Your AI Solution"
              >
                {/* Shimmer sweep */}
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
                <span className="relative z-10">Build Your AI Solution</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </Link>

              {/* Secondary CTA (Hero.tsx style) */}
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
                Explore Capabilities
                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Consultation helper link */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.5, ease }}
              className="mb-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-200"
                style={{ color: C.wa(0.52), textDecoration: 'none', letterSpacing: '0.04em' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = C.lime; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = C.wa(0.52); }}
              >
                Not sure where to start? Talk to our AI architects <ArrowRight size={13} />
              </Link>
            </motion.div>

            {/* Technical Trust Strip (exact MetricChip layout from Hero.tsx) */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease }}
              className="w-full flex items-center gap-6 sm:gap-10 pt-8"
              style={{ borderTop: `1px solid ${C.wa(0.08)}` }}
            >
              <div className="flex flex-col items-start">
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>
                  99.9%
                </span>
                <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Production SLA
                </span>
              </div>
              <div style={{ width: '1px', height: '36px', background: C.wa(0.1) }} />
              <div className="flex flex-col items-start">
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>
                  Zero
                </span>
                <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Vendor Lock-In
                </span>
              </div>
              <div style={{ width: '1px', height: '36px', background: C.wa(0.1) }} />
              <div className="flex flex-col items-start">
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: C.lime, lineHeight: 1, letterSpacing: '-0.03em' }}>
                  3–5 Wks
                </span>
                <span style={{ fontSize: '0.7rem', color: C.wa(0.55), marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Pilot to Prod
                </span>
              </div>
            </motion.div>
            </div>

            {/* Right Side - Professional Image (Background Integrated) */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.75, ease }}
              className="relative flex items-start justify-center z-20"
            >
              <div className="relative w-full max-w-md">
                {/* Image without card styling - blends into background */}
                <img
                  src="/image/Servies/ai-development.avif"
                  alt="AI Development Professional Illustration"
                  className="relative w-full h-auto object-cover rounded-full z-30"
                  style={{
                    opacity: 1,
                    maxHeight: '500px',
                  }}
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
                {/* Velnix Signature Gradient Accent Line */}
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mt-4" />
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-mono">
                Structured 3-column engineering modules designed for reliability, high accuracy, and enterprise scalability.
              </p>
            </div>

            {/* 3-column grid on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.id}
                    className="group flex flex-col justify-between p-7 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden"
                    style={{ 
                      background: C.graphite, 
                      borderColor: C.wa(0.1)
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.lime;
                      e.currentTarget.style.boxShadow = `0 8px 32px ${C.la(0.12)}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.wa(0.1);
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div>
                      {/* Header with Icon Badge & Num */}
                      <div className="flex items-center gap-4 mb-5">
                        {/* Icon Badge - Professional Velnix Style */}
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
                          <Icon size={24} strokeWidth={2} />
                        </div>
                        
                        <span className="text-xs font-mono font-bold tracking-widest" style={{ color: C.lime }}>
                          {cap.num}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-widest block mb-2" style={{ color: C.wa(0.4) }}>
                        {cap.category}
                      </span>

                      <h3 className="font-display text-xl font-bold text-white group-hover:transition-colors leading-snug mb-3" style={{ color: C.white }}>
                        {cap.title}
                      </h3>

                      <p className="text-xs sm:text-sm leading-relaxed font-light mb-6" style={{ color: C.wa(0.7) }}>
                        {cap.description}
                      </p>

                      {/* Key Engineering Deliverables */}
                      <div className="space-y-2 mb-6 pt-4" style={{ borderTop: `1px solid ${C.wa(0.05)}` }}>
                        {cap.keyOutputs.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[11px] font-light" style={{ color: C.wa(0.6) }}>
                            <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: C.lime }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Specs Badges */}
                    <div className="pt-4 flex flex-wrap gap-1.5" style={{ borderTop: `1px solid ${C.wa(0.1)}` }}>
                      {cap.specs.map((spec, si) => (
                        <span
                          key={si}
                          className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border"
                          style={{ 
                            background: C.la(0.08), 
                            color: C.lime,
                            borderColor: C.la(0.2)
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
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

            {/* Asymmetric Visual Composition Layout with Polished Icon Badges */}
            <div
              className="p-8 sm:p-14 rounded-2xl border border-white/15 relative overflow-hidden"
              style={{ background: C.graphite }}
            >
              {/* Subtle ambient corner glow */}
              <div
                className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
                style={{ background: C.la(0.04) }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                
                {/* 01: Business-First */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#080808] border border-white/10 hover:border-[#B6FF00]/40 transition-colors group">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00]">01 // PURPOSE</span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: C.lime, border: `1px solid ${C.lime}`, color: C.black }}>
                      <TrendingUp className="w-4 h-4" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#B6FF00] transition-colors">Business-First</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    Start with the problem, not the technology. We identify where AI delivers
                    verifiable economic leverage before writing code, ensuring projects drive real ROI.
                  </p>
                </div>

                {/* 02: Production-Minded */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#080808] border border-white/10 hover:border-[#B6FF00]/40 transition-colors group">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00]">02 // RELIABILITY</span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: C.lime, border: `1px solid ${C.lime}`, color: C.black }}>
                      <ShieldCheck className="w-4 h-4" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#B6FF00] transition-colors">Production-Minded</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    Design for reliability beyond the prototype. We implement deterministic evaluation
                    harnesses, latency budgets, fallback models, and full-stack observability.
                  </p>
                </div>

                {/* 03: Integration-Ready */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#080808] border border-white/10 hover:border-[#B6FF00]/40 transition-colors group">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00]">03 // ADOPTION</span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: C.lime, border: `1px solid ${C.lime}`, color: C.black }}>
                      <Layers className="w-4 h-4" fill="currentColor" fillOpacity={0.25} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#B6FF00] transition-colors">Integration-Ready</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    Connect AI to existing products and workflows. Our solutions integrate smoothly
                    with legacy ERPs, internal databases, CRMs, and modern APIs without friction.
                  </p>
                </div>

                {/* 04: Built to Evolve */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#080808] border border-white/10 hover:border-[#B6FF00]/40 transition-colors group">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#B6FF00]">04 // AGILITY</span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: C.lime, border: `1px solid ${C.lime}`, color: C.black }}>
                      <RefreshCw className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#B6FF00] transition-colors">Built to Evolve</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    Architecture that can adapt as models and requirements change. Modular orchestration
                    means you can swap foundation models seamlessly without refactoring business logic.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              CROSS-INDUSTRY REUSABLE COMPONENT EMBED
          ══════════════════════════════════════════════════════ */}
          <section className="mb-28 sm:mb-36">
            <Industries />
          </section>

          {/* ══════════════════════════════════════════════════════
              FAQ SECTION (8 Questions) - Premium Level
          ══════════════════════════════════════════════════════ */}
          <section className="mb-20 sm:mb-24 w-full">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border text-xs font-mono font-bold tracking-[0.2em] uppercase" style={{ background: C.la(0.08), borderColor: C.la(0.4), color: C.lime }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                INTELLIGENCE Q&A
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-3">
                Frequently Addressed Questions
              </h2>
              <p className="text-sm sm:text-base text-white/60 font-light">
                Common questions about our AI development process, integration capabilities, and production deployment.
              </p>
              {/* Signature Centered Line */}
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#7DCC00] to-[#B6FF00] rounded-full mx-auto mt-4" />
            </div>

            <div className="space-y-3">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      borderColor: isOpen ? C.lime : C.wa(0.1),
                      boxShadow: isOpen ? `0 8px 32px ${C.la(0.15)}` : 'none',
                    }}
                    transition={{ duration: 0.3, ease }}
                    className="rounded-xl border transition-all duration-300"
                    style={{
                      background: C.graphite,
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ 
                          background: isOpen ? C.lime : C.la(0.08),
                          border: isOpen ? `1px solid ${C.lime}` : `1px solid ${C.la(0.2)}`,
                          color: isOpen ? C.black : C.lime
                        }}>
                          <span className="text-xs font-mono font-bold">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <span className="font-display text-sm sm:text-base font-semibold text-white pr-4 leading-snug group-hover:text-[#B6FF00] transition-colors">
                          {faq.q}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300" style={{
                        background: isOpen ? C.lime : C.wa(0.05),
                        color: isOpen ? C.black : C.wa(0.4)
                      }}>
                        {isOpen ? (
                          <Minus size={18} strokeWidth={2.5} />
                        ) : (
                          <Plus size={18} strokeWidth={2.5} />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-2 text-sm leading-relaxed" style={{ color: C.wa(0.75), borderTop: `1px solid ${C.wa(0.08)}`, marginTop: '1px' }}>
                            <div className="flex gap-3">
                              <div className="w-7 shrink-0" />
                              <p className="font-light">{faq.a}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
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
