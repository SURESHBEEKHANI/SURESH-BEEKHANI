import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { animate, motion, AnimatePresence, useInView, useMotionValue, useReducedMotion as useFramerReducedMotion, useTransform } from "framer-motion";
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
import CTAExamples from "../components/CTAExamples";
import FAQ from "../components/FAQ";
import { IMPACT_STATS } from "../components/OriginStory";
import { useReducedMotion } from "@/hooks/useAnimations";
import { TechnologyStack } from "../components/TechnologyStack";
import EngagementModels from "../components/EngagementModels";
import Testimonials from "../components/Testimonials";
import PortfolioSection from "../components/PortfolioSection";

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

const AnimatedImpactNumber = ({ number }: { number: string }) => {
  const reduceMotion = useFramerReducedMotion();
  const target = Number.parseInt(number, 10);
  const suffix = number.slice(String(target).length);
  const count = useMotionValue(reduceMotion ? target : 0);
  const display = useTransform(count, (value) => `${Math.round(value)}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [count, isInView, reduceMotion, target]);

  return <motion.span ref={ref} aria-label={number}>{display}</motion.span>;
};

// ─────────────────────────────────────────────────────────────────────────────
// 03 — CAPABILITIES DATA (9 Structured Modules)
// ─────────────────────────────────────────────────────────────────────────────
interface AICapability {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const aiCapabilities: AICapability[] = [
  {
    id: "ai-agents",
    num: "01",
    title: "Agentic AI Systems",
    description: "AI agents that reason, use business tools, and execute multi-step work.",
    icon: Bot,
  },
  {
    id: "gen-ai-llm",
    num: "02",
    title: "Generative AI & LLM Applications",
    description: "AI products and copilots tailored to your teams and workflows.",
    icon: Sparkles,
  },
  {
    id: "rag-knowledge",
    num: "03",
    title: "RAG & Knowledge Systems",
    description: "Make private business knowledge searchable and trustworthy.",
    icon: Database,
  },
  {
    id: "workflow-automation",
    num: "04",
    title: "AI Workflow Automation",
    description: "Connect systems and automate repetitive workflows.",
    icon: Workflow,
  },
  {
    id: "predictive-visual-ai",
    num: "05",
    title: "Machine Learning, Computer Vision & NLP",
    description: "Build systems that predict, classify, recommend, and understand images and documents.",
    icon: Brain,
  },
  {
    id: "custom-ai-software-data",
    num: "06",
    title: "Custom AI Software & Data",
    description: "Custom AI software with data pipelines, analytics, and decision support.",
    icon: Code2,
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
    deliverables: [],
  },
  {
    num: "02",
    title: "Prototype",
    description: "Integrate the system with your stack, add security and guardrails, and prepare it for reliable adoption.",
    icon: Code2,
    deliverables: [],
  },
  {
    num: "03",
    title: "Productionize",
    description: "Integrate the system with your stack, add security and guardrails, and prepare it for reliable adoption.",
    icon: ShieldCheck,
    deliverables: [],
  },
  {
    num: "04",
    title: "Operate & Improve",
    description: "Launch with observability, measure business impact, and continuously improve the system as needs evolve.",
    icon: Zap,
    deliverables: [],
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
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
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

  return (
    <div
      className="min-h-screen flex flex-col antialiased font-sans selection:bg-[#B6FF00] selection:text-black"
      style={{
        background: C.black,
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
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)',
            filter: 'blur(10px)',
          }}
        />

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
            <motion.div 
              className="relative flex items-center justify-center"
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease }}
            >
              <div className="relative">
                <img
                  src="/image/Servies/service-page image-hero.png"
                  alt="AI Development Hero - Professional AI Systems"
                  className="w-full max-w-2xl"
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
        className="relative mx-auto w-full border-y border-[#050505]/20 bg-[#B6FF00] px-6 py-10 text-[#050505] sm:px-10 sm:py-12 lg:px-16"
      >
        <div className="relative w-full grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0 max-w-7xl mx-auto">
          {IMPACT_STATS.map(({ number, label }, i) => (
            <div key={label} className="relative flex flex-col items-center px-3 text-center sm:px-5">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-[#050505]/20 sm:block" />
              )}
              <div className="text-3xl font-black leading-none tracking-[-0.04em] text-[#050505] sm:text-4xl">
                <AnimatedImpactNumber number={number} />
              </div>
              <p className="mx-auto mt-4 max-w-[15ch] text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#050505]/65">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10 pt-14 pb-0 sm:pt-18">
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
                    We build integrated AI systems that remove friction and help teams work and decide faster.
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
                        desc: "Manual, repetitive tasks drain time and limit team capacity.",
                      },
                      {
                        num: "02",
                        title: "Disconnected Systems",
                        desc: "Siloed tools and data create costly operational handoffs.",
                      },
                      {
                        num: "03",
                        title: "Scattered Knowledge",
                        desc: "Critical knowledge is scattered across documents and systems.",
                      },
                      {
                        num: "04",
                        title: "Slow Decisions",
                        desc: "Delayed insights make timely, confident decisions harder.",
                      },
                      {
                        num: "05",
                        title: "AI Without Integration",
                        desc: "Disconnected AI pilots fail to deliver lasting business value.",
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
          <section id="capabilities" className="mb-6 sm:mb-12 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
              <div>
                <div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}>
                  <span className="h-px w-6" style={{ background: C.lime }} aria-hidden="true" />
                  WHAT WE BUILD
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight mb-4">
                  AI Systems That Move the <span style={{ color: C.lime }}>Business Forward.</span>
                </h2>
                <p className="max-w-[62ch] text-sm font-light leading-relaxed text-white/60 sm:text-base">
                  We build secure, integrated AI capabilities that move beyond prototypes and create measurable leverage across the way your business operates.
                </p>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {aiCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.id}
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease }}
                    className="group relative flex min-h-[230px] flex-col border-b border-r border-white/10 bg-[#111111]/80 p-5 transition-colors duration-300 hover:bg-[#181818] sm:min-h-[250px] sm:p-6"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#B6FF00] text-[#B6FF00] transition-colors group-hover:bg-[#B6FF00] group-hover:text-[#050505]">
                        <Plus className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-[0.16em] text-white/35">{cap.num}</span>
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{cap.title}</h3>
                    <p className="text-sm leading-6 text-white/60">{cap.description}</p>
                  </motion.div>
                );
              })}
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
          <section className="relative mb-12 overflow-hidden bg-[#050505] py-12 font-display sm:mb-16 sm:py-16 lg:mb-20 lg:py-20">
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6 text-left lg:mb-8">
                <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
                  <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
                  PROCESS
                </div>
                <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Our AI <span className="text-[#B6FF00]">Delivery Steps.</span>
                </h2>
                <p className="mt-4 max-w-xl text-left text-lg leading-8 text-white/65 sm:text-xl">
                  From discovery to production, each stage reduces risk and drives adoption.
                </p>
              </div>

              <div>
                {deliveryStages.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={step.num}
                      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08, ease }}
                      className="group border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:py-9"
                    >
                      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_2rem] lg:items-center lg:gap-8">
                        <span className="font-mono text-lg font-bold text-[#B6FF00]">{step.num}</span>

                        <div>
                          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#B6FF00] sm:text-2xl">{step.title}</h3>
                        </div>

                        <p className="max-w-2xl text-sm leading-6 text-white/65 sm:text-base lg:text-left">
                          {step.description}
                        </p>

                        <div className="hidden items-center justify-end lg:flex">
                          <ArrowRight className="h-5 w-5 text-[#B6FF00] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* ══════════════════════════════════════════════════════
            SELECTED WORK / PROOF OF EXECUTION (Full Width Dark)
        ══════════════════════════════════════════════════════ */}
        <PortfolioSection />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              09 — WHY AI CHANGES EVERYTHING (Professional Column Cards)
          ══════════════════════════════════════════════════════ */}
          <section
            className="relative mb-20 overflow-hidden py-10 sm:mb-28 sm:py-12"
          >
            <div className="relative z-10">
              <div className="mb-14 sm:mb-18">
                <div className="mb-4 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color: C.lime }}>
                  <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
                  Why AI Changes Everything
                </div>
                <h2 className="mb-4 font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-tight">
                  Capabilities &amp; Benefits of <span style={{ color: C.lime }}>Enterprise AI</span>
                </h2>
                <p className="max-w-2xl text-sm sm:text-base leading-8" style={{ color: C.wa(0.64) }}>
                  Every card below maps to a measurable outcome. We build the systems that deliver these numbers — not just the roadmap.
                </p>
              </div>

              {/* ── Professional Column Cards Grid ── */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl">
                {[
                  {
                    num: "01",
                    metric: "+34%",
                    metricLabel: "productivity gain",
                    title: "Automated Operations",
                    description: "AI systems handle repetitive workflows, document processing, and manual tasks — freeing teams to focus on high-value, revenue-driving work.",
                  },
                  {
                    num: "02",
                    metric: "−60%",
                    metricLabel: "decision latency",
                    title: "Faster Decisions",
                    description: "Real-time analytics, dashboards, and AI-generated insights deliver the right information to stakeholders at the moment they need it.",
                  },
                  {
                    num: "03",
                    metric: "99.9%",
                    metricLabel: "output reliability",
                    title: "Consistent Quality",
                    description: "Evaluation-driven AI, guardrails, and deterministic outputs ensure consistent, auditable results across every interaction and workflow.",
                  },
                  {
                    num: "04",
                    metric: "< 1.2s",
                    metricLabel: "avg. retrieval",
                    title: "Unified Knowledge",
                    description: "Ground AI answers in private documents, policies, and systems — every answer cited, auditable, and accessible across the organization.",
                  },
                  {
                    num: "05",
                    metric: "3.2x",
                    metricLabel: "throughput scale",
                    title: "Scalable Capacity",
                    description: "Handle 3x the volume without adding headcount. AI agents, automations, and workflows scale horizontally across business operations.",
                  },
                  {
                    num: "06",
                    metric: "Zero",
                    metricLabel: "vendor lock-in",
                    title: "Future-Proof Stack",
                    description: "Modular architectures, open standards, and clean integrations mean your systems adapt as your business and the AI landscape evolve.",
                  },
                ].map((cap, index) => (
                  <div
                    key={cap.num}
                    className="group relative flex flex-col p-7 sm:p-8 border border-white/10 transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_0_40px_rgba(182,255,0,0.1)] hover:-translate-y-1.5 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${C.wa(0.04)} 0%, ${C.wa(0.02)} 100%)`, borderRadius: 0 }}
                  >
                    {/* Top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Corner watermark number */}
                    <span
                      className="absolute top-5 right-6 text-[2.8rem] font-black leading-none select-none pointer-events-none transition-colors duration-300"
                      style={{ color: C.wa(0.04) }}
                      aria-hidden="true"
                    >
                      {cap.num}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold tracking-[-0.04em] text-white mb-2 group-hover:text-[#B6FF00] transition-colors duration-200">
                      {cap.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-6 mb-6 flex-1" style={{ color: C.wa(0.6) }}>
                      {cap.description}
                    </p>

                    {/* Metric pill at bottom */}
                    <div className="flex items-baseline gap-2 pt-4 border-t border-white/[0.07]">
                      <span className="text-xl font-black tracking-tight" style={{ color: C.lime }}>
                        {cap.metric}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: C.wa(0.42) }}>
                        {cap.metricLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8 sm:mb-20">
            <LatestBlogs />
          </section>

          <FAQ
            items={faqData.map(({ q, a }, index) => ({
              id: `ai-development-faq-${index + 1}`,
              question: q,
              answer: a,
            }))}
          />

        </div>

        <CTAExamples className="!pb-8 sm:!pb-10" />
      </main>

      <Footer />
    </div>
  );
};

export default AIDevelopment;