import React, { useState } from 'react';
import {
  Sparkles, Zap, Shield, Target, Users, TrendingUp,
  Globe, Smartphone, Cloud, Server, Database, Bot, ArrowRight, CheckCircle2,
  Brain, MessageSquare, Eye, FileText, Cpu, Workflow
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useAnimations';

/* ─────────────────────────────────────────────────────────────
   VELNIX COLOR SYSTEM — LOCKED
───────────────────────────────────────────────────────────── */
const C = {
  BLACK: '#050505',
  LIME: '#B6FF00',
  WHITE: '#FFFFFF',
  GRAPHITE: '#111111',
  DEEP_GREEN: '#7DCC00',
} as const;

/* ─────────────────────────────────────────────────────────────
   DATA — 6 CORE SERVICES WITH CAPABILITIES
───────────────────────────────────────────────────────────── */
interface Capability {
  name: string;
  route?: string;
}

interface CoreService {
  id: string;
  num: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ElementType;
  capabilities: Capability[];
  featured?: boolean;
}

const CORE_SERVICES: CoreService[] = [
  {
    id: 'ai-automation',
    num: '01',
    title: 'AI Automation',
    tag: 'Featured',
    description: 'Turn repetitive workflows into automated systems. Build intelligent autonomous agents that think, learn, and act independently to drive efficiency and innovation.',
    icon: Zap,
    featured: true,
    capabilities: [
      { name: 'Workflow Automation', route: '/ai-automation' },
      { name: 'AI Agents', route: '/agentic-ai' },
      { name: 'Business Process Automation' },
      { name: 'AI-Powered Operations' },
      { name: 'System Integrations' },
    ],
  },
  {
    id: 'ai-development',
    num: '02',
    title: 'AI Development',
    tag: 'Core AI',
    description: 'Build intelligent software around your business. Leverage cutting-edge AI technologies to create tailored solutions that transform operations and drive measurable growth.',
    icon: Sparkles,
    capabilities: [
      { name: 'Generative AI', route: '/ai-development' },
      { name: 'LLM Applications' },
      { name: 'AI Integrations' },
      { name: 'RAG Systems' },
      { name: 'AI APIs' },
    ],
  },
  {
    id: 'conversational-ai',
    num: '03',
    title: 'Conversational AI',
    tag: 'Communication',
    description: 'Create AI systems that communicate with customers and teams. Transform interactions with intelligent systems that understand, learn, and respond naturally.',
    icon: MessageSquare,
    capabilities: [
      { name: 'AI Chatbots', route: '/ai-chatbot-development' },
      { name: 'AI Assistants' },
      { name: 'Voice AI' },
      { name: 'Customer Support AI' },
      { name: 'WhatsApp / Web AI' },
    ],
  },
  {
    id: 'ml-data-intelligence',
    num: '04',
    title: 'Machine Learning & Data Intelligence',
    tag: 'Data Science',
    description: 'Turn business data into predictions and decisions. Build intelligent systems that learn from data and make predictions with unprecedented accuracy and reliability.',
    icon: Brain,
    capabilities: [
      { name: 'Machine Learning', route: '/machine-learning' },
      { name: 'Deep Learning' },
      { name: 'Predictive Modeling', route: '/predictive-modelling' },
      { name: 'Big Data Analytics', route: '/big-data-analytics' },
      { name: 'Forecasting' },
    ],
  },
  {
    id: 'computer-vision-nlp',
    num: '05',
    title: 'Computer Vision & NLP',
    tag: 'Visual & Language',
    description: 'Make software understand documents, images, and language. Enable machines to see, understand, and interpret visual information and human language at enterprise scale.',
    icon: Eye,
    capabilities: [
      { name: 'Computer Vision', route: '/computer-vision' },
      { name: 'OCR / Document AI' },
      { name: 'Natural Language Processing', route: '/natural-language-processing' },
      { name: 'Text Classification' },
      { name: 'Information Extraction' },
    ],
  },
  {
    id: 'custom-software',
    num: '06',
    title: 'Custom Software',
    tag: 'Infrastructure',
    description: 'Build the software infrastructure your business needs. Engineer precision-crafted, scalable software solutions built from the ground up to solve your unique business challenges.',
    icon: Server,
    capabilities: [
      { name: 'Web Applications', route: '/web-development' },
      { name: 'Mobile Applications', route: '/app-development' },
      { name: 'Custom Software', route: '/custom-software-development' },
      { name: 'APIs & Backend Systems' },
      { name: 'DevOps & Cloud', route: '/devops' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   SERVICE SVG VISUALIZATIONS
   Each service gets a unique, purpose-built SVG using only
   Velnix colors. All decorative → aria-hidden.
───────────────────────────────────────────────────────────── */
const ServiceVisual: React.FC<{ serviceId: string; featured?: boolean }> = ({ serviceId, featured }) => {
  const s = featured ? 160 : 64;
  const stroke = featured ? 1.5 : 1;
  const nodeR = featured ? 4 : 2.5;

  const commonProps = {
    width: s,
    height: s,
    viewBox: `0 0 ${s} ${s}`,
    fill: 'none',
    'aria-hidden': true as const,
    className: 'flex-shrink-0',
  };

  switch (serviceId) {
    /* Workflow chain — AI Automation (Featured) */
    case 'ai-automation':
      return (
        <svg {...commonProps}>
          {/* Nodes */}
          {[[0.15, 0.5], [0.4, 0.3], [0.4, 0.7], [0.65, 0.5], [0.88, 0.5]].map(([x, y], i) => (
            <React.Fragment key={`auto-${i}`}>
              <circle cx={s * x} cy={s * y} r={nodeR * 1.3} fill={i === 4 ? C.DEEP_GREEN : C.LIME} opacity={0.9} />
              {i < 4 && (
                <circle cx={s * x} cy={s * y} r={nodeR * 2.2} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.3} fill="none" />
              )}
            </React.Fragment>
          ))}
          {/* Connections */}
          <line x1={s * 0.15} y1={s * 0.5} x2={s * 0.4} y2={s * 0.3} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          <line x1={s * 0.15} y1={s * 0.5} x2={s * 0.4} y2={s * 0.7} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          <line x1={s * 0.4} y1={s * 0.3} x2={s * 0.65} y2={s * 0.5} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          <line x1={s * 0.4} y1={s * 0.7} x2={s * 0.65} y2={s * 0.5} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          {/* Arrow to output */}
          <line x1={s * 0.65} y1={s * 0.5} x2={s * 0.85} y2={s * 0.5} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.6} />
          <polygon points={`${s * 0.83},${s * 0.46} ${s * 0.9},${s * 0.5} ${s * 0.83},${s * 0.54}`} fill={C.DEEP_GREEN} opacity={0.6} />
        </svg>
      );

    /* Neural network — AI Development */
    case 'ai-development':
      return (
        <svg {...commonProps}>
          {/* Layer 1 nodes */}
          {[0.2, 0.4, 0.6, 0.8].map((y, i) => (
            <circle key={`l1-${i}`} cx={s * 0.2} cy={s * y} r={nodeR * 1.2} fill={C.LIME} opacity={0.9} />
          ))}
          {/* Layer 2 nodes */}
          {[0.25, 0.5, 0.75].map((y, i) => (
            <circle key={`l2-${i}`} cx={s * 0.5} cy={s * y} r={nodeR * 1.4} fill={C.LIME} />
          ))}
          {/* Layer 3 nodes */}
          {[0.35, 0.65].map((y, i) => (
            <circle key={`l3-${i}`} cx={s * 0.8} cy={s * y} r={nodeR * 1.2} fill={C.DEEP_GREEN} opacity={0.95} />
          ))}
          {/* Connections L1→L2 */}
          {[0.2, 0.4, 0.6, 0.8].map((y1) =>
            [0.25, 0.5, 0.75].map((y2, j) => (
              <line key={`c1-${y1}-${j}`} x1={s * 0.2} y1={s * y1} x2={s * 0.5} y2={s * y2} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.35} />
            ))
          )}
          {/* Connections L2→L3 */}
          {[0.25, 0.5, 0.75].map((y1) =>
            [0.35, 0.65].map((y2, j) => (
              <line key={`c2-${y1}-${j}`} x1={s * 0.5} y1={s * y1} x2={s * 0.8} y2={s * y2} stroke={C.DEEP_GREEN} strokeWidth={stroke * 0.6} opacity={0.4} />
            ))
          )}
        </svg>
      );

    /* Chat bubbles — Conversational AI */
    case 'conversational-ai':
      return (
        <svg {...commonProps}>
          <rect x={s * 0.1} y={s * 0.15} width={s * 0.5} height={s * 0.3} rx={s * 0.06} stroke={C.LIME} strokeWidth={stroke} opacity={0.8} />
          <rect x={s * 0.35} y={s * 0.55} width={s * 0.55} height={s * 0.25} rx={s * 0.06} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.7} />
          {/* Dots inside bubbles */}
          {[0.22, 0.32, 0.42].map((x, i) => (
            <circle key={`d1-${i}`} cx={s * x} cy={s * 0.3} r={nodeR * 0.7} fill={C.LIME} opacity={0.7} />
          ))}
          {[0.47, 0.57, 0.67].map((x, i) => (
            <circle key={`d2-${i}`} cx={s * x} cy={s * 0.675} r={nodeR * 0.7} fill={C.DEEP_GREEN} opacity={0.6} />
          ))}
          {/* Connection line */}
          <line x1={s * 0.45} y1={s * 0.45} x2={s * 0.5} y2={s * 0.55} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.5} strokeDasharray="3 3" />
        </svg>
      );

    /* Brain network — Machine Learning & Data Intelligence */
    case 'ml-data-intelligence':
      return (
        <svg {...commonProps}>
          {/* Central brain node */}
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.12} stroke={C.LIME} strokeWidth={stroke * 1.2} opacity={0.7} fill={C.LIME} fillOpacity={0.1} />
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.05} fill={C.LIME} opacity={0.9} />
          {/* Data branches */}
          {[[0.2, 0.25], [0.8, 0.25], [0.15, 0.5], [0.85, 0.5], [0.2, 0.75], [0.8, 0.75]].map(([x, y], i) => (
            <React.Fragment key={`data-${i}`}>
              <line x1={s * 0.5} y1={s * 0.5} x2={s * x} y2={s * y} stroke={i > 2 ? C.DEEP_GREEN : C.LIME} strokeWidth={stroke * 0.6} opacity={0.4} />
              <circle cx={s * x} cy={s * y} r={nodeR} fill={i > 2 ? C.DEEP_GREEN : C.LIME} opacity={0.8} />
            </React.Fragment>
          ))}
          {/* Orbit ring */}
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.3} stroke={C.LIME} strokeWidth={stroke * 0.4} opacity={0.2} fill="none" strokeDasharray="6 4" />
        </svg>
      );

    /* Eye/lens — Computer Vision & NLP */
    case 'computer-vision-nlp':
      return (
        <svg {...commonProps}>
          <ellipse cx={s * 0.5} cy={s * 0.5} rx={s * 0.35} ry={s * 0.22} stroke={C.LIME} strokeWidth={stroke} opacity={0.7} fill="none" />
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.12} stroke={C.LIME} strokeWidth={stroke} opacity={0.8} fill="none" />
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.04} fill={C.LIME} opacity={0.95} />
          {/* Scan lines */}
          {[0.3, 0.5, 0.7].map((y, i) => (
            <line key={`scan-${i}`} x1={s * 0.15} y1={s * y} x2={s * 0.85} y2={s * y} stroke={C.DEEP_GREEN} strokeWidth={stroke * 0.4} opacity={0.4} strokeDasharray="4 4" />
          ))}
          {/* Corner brackets */}
          <path d={`M${s * 0.18},${s * 0.28} L${s * 0.18},${s * 0.22} L${s * 0.24},${s * 0.22}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.6} fill="none" />
          <path d={`M${s * 0.82},${s * 0.28} L${s * 0.82},${s * 0.22} L${s * 0.76},${s * 0.22}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.6} fill="none" />
          <path d={`M${s * 0.18},${s * 0.72} L${s * 0.18},${s * 0.78} L${s * 0.24},${s * 0.78}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.6} fill="none" />
          <path d={`M${s * 0.82},${s * 0.72} L${s * 0.82},${s * 0.78} L${s * 0.76},${s * 0.78}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.6} fill="none" />
        </svg>
      );

    /* Architecture blocks — Custom Software */
    case 'custom-software':
      return (
        <svg {...commonProps}>
          {/* Stacked blocks */}
          <rect x={s * 0.12} y={s * 0.6} width={s * 0.76} height={s * 0.16} rx={s * 0.03} stroke={C.LIME} strokeWidth={stroke} opacity={0.5} fill={C.LIME} fillOpacity={0.08} />
          <rect x={s * 0.18} y={s * 0.38} width={s * 0.3} height={s * 0.16} rx={s * 0.03} stroke={C.LIME} strokeWidth={stroke} opacity={0.55} fill={C.LIME} fillOpacity={0.12} />
          <rect x={s * 0.52} y={s * 0.38} width={s * 0.3} height={s * 0.16} rx={s * 0.03} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.5} fill={C.DEEP_GREEN} fillOpacity={0.1} />
          <rect x={s * 0.28} y={s * 0.16} width={s * 0.44} height={s * 0.16} rx={s * 0.03} stroke={C.LIME} strokeWidth={stroke} opacity={0.6} fill={C.LIME} fillOpacity={0.15} />
          {/* Connectors */}
          <line x1={s * 0.33} y1={s * 0.32} x2={s * 0.33} y2={s * 0.38} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.4} />
          <line x1={s * 0.67} y1={s * 0.32} x2={s * 0.67} y2={s * 0.38} stroke={C.DEEP_GREEN} strokeWidth={stroke * 0.5} opacity={0.35} />
          <line x1={s * 0.5} y1={s * 0.54} x2={s * 0.5} y2={s * 0.6} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.35} />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.2} stroke={C.LIME} strokeWidth={stroke} opacity={0.3} fill="none" />
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.06} fill={C.LIME} opacity={0.5} />
        </svg>
      );
  }
};

/* ─────────────────────────────────────────────────────────────
   EDITORIAL SERVICE ROW (Old Display Style)
───────────────────────────────────────────────────────────── */
const ServiceRow: React.FC<{
  service: CoreService;
  index: number;
  isExpanded: boolean;
  prefersReducedMotion: boolean;
  isInView: boolean;
  onToggle: () => void;
  onNavigate: (route: string) => void;
}> = ({ service, index, isExpanded, prefersReducedMotion, isInView, onToggle, onNavigate }) => {
  const Icon = service.icon;
  const rowId = `service-row-${index}`;
  const panelId = `${rowId}-details`;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.12 + index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="group w-full border-t last:border-b"
      style={{
        borderColor: isExpanded ? 'rgba(182, 255, 0, 0.34)' : 'rgba(255, 255, 255, 0.14)',
        background: isExpanded ? 'rgba(182, 255, 0, 0.06)' : 'transparent',
        transition: 'background 300ms ease, border-color 300ms ease',
      }}
    >
      <button
        id={rowId}
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 px-4 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] focus-visible:ring-inset sm:gap-8 sm:px-6 sm:py-8 lg:gap-12 lg:px-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:py-9"
      >
        <span className="w-10 shrink-0 font-mono text-xs tracking-[0.12em] sm:w-14 sm:text-sm" style={{ color: isExpanded ? C.LIME : 'rgba(255,255,255,0.38)' }}>
          {service.num}
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: isExpanded ? C.LIME : 'rgba(255,255,255,0.38)' }}>
            {service.tag}
          </span>
          <span className="block text-xl font-bold leading-tight tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-2xl lg:text-4xl">
            {service.title}
          </span>
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:h-12 sm:w-12" style={{ borderColor: isExpanded ? C.LIME : C.DEEP_GREEN, background: isExpanded ? C.LIME : C.DEEP_GREEN, color: C.BLACK, transition: 'transform 300ms ease, background 300ms ease, border-color 300ms ease' }}>
          <span className="text-2xl font-light leading-none" style={{ transform: isExpanded ? 'rotate(45deg)' : 'none', transition: 'transform 300ms ease' }}>+</span>
        </span>
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={rowId}
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div className="grid gap-8 px-4 pb-8 pl-14 sm:grid-cols-[minmax(0,1fr)_220px] sm:px-6 sm:pb-10 sm:pl-[5.5rem] lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:pl-[max(7rem,calc((100vw-1320px)/2+7rem))] lg:pr-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]">
          <div>
            <p className="max-w-3xl text-sm leading-7 sm:text-base" style={{ color: 'rgba(255,255,255,0.64)' }}>{service.description}</p>
            
            {/* Capabilities */}
            <div className="mt-6">
              <span className="text-[10px] font-mono uppercase tracking-wider mb-3 block" style={{ color: 'rgba(255, 255, 255, 0.35)' }}>
                Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {service.capabilities.map((capability, capIndex) => (
                  <span
                    key={capIndex}
                    className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                    onClick={() => capability.route && onNavigate(capability.route)}
                  >
                    {capability.name}
                  </span>
                ))}
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => {
                const firstCapabilityWithRoute = service.capabilities.find(cap => cap.route);
                if (firstCapabilityWithRoute) {
                  onNavigate(firstCapabilityWithRoute.route!);
                }
              }} 
              className="mt-7 inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-[#B6FF00] px-5 py-3 text-sm font-bold text-[#050505] outline-none transition-colors hover:bg-[#7DCC00] focus-visible:ring-2 focus-visible:ring-[#B6FF00]" 
              aria-label={`Explore ${service.title} service`}
            >
              Explore Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden items-center justify-center border-l border-[#B6FF00]/10 sm:flex" aria-hidden="true">
            <div className="opacity-80 transition-transform duration-500 group-hover:scale-105"><ServiceVisual serviceId={service.id} featured /></div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

/* ─────────────────────────────────────────────────────────────
   MAIN SERVICES COMPONENT
───────────────────────────────────────────────────────────── */
const Services = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleNavigate = (route: string) => {
    if (route) navigate(route);
  };

  return (
    <section
      ref={ref}
      id="services"
      className="pb-8 pt-12 md:pb-10 md:pt-16 lg:pb-12 lg:pt-20 relative overflow-hidden scroll-mt-20"
      style={{ background: C.BLACK }}
      aria-label="Services We Offer"
    >
      {/* ── Background textures ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)',
          filter: 'blur(10px)',
        }}
      />

      {/* Dot grid */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <pattern id="services-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill={C.WHITE} opacity="0.03" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#services-dots)" />
      </svg>

      {/* Ambient lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.LIME} 0%, transparent 70%)`,
          opacity: 0.04,
          filter: 'blur(80px)',
        }}
      />

      {/* Secondary glow bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.DEEP_GREEN} 0%, transparent 70%)`,
          opacity: 0.03,
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* ── Section Header ───────────────────────────────────── */}
        <motion.div
          className="mb-4 grid gap-x-8 gap-y-2 pb-0 sm:mb-6 sm:gap-y-3 sm:pb-0 lg:mb-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-x-16 lg:gap-y-3 lg:pb-0"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="mb-4 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#B6FF00] lg:col-span-2">
            <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
            Our Services
          </div>

          {/* H2 */}
          <h2
            className="max-w-[18ch] text-3xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl"
            style={{ color: C.WHITE }}
          >
            Services{' '}
            <span style={{ color: C.LIME }}>We Offer.</span>
          </h2>

          <div className="lg:col-start-1">
            <p
              className="max-w-xl text-left text-base leading-7 sm:text-lg"
              style={{ color: 'rgba(255, 255, 255, 0.58)' }}
            >
              From intelligence to automation. Systems that scale.
            </p>
          </div>
        </motion.div>

        <div className="relative left-1/2 w-screen -translate-x-1/2">
          {CORE_SERVICES.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              isExpanded={expandedIndex === index}
              prefersReducedMotion={prefersReducedMotion}
              isInView={isInView}
              onToggle={() => setExpandedIndex(current => current === index ? null : index)}
              onNavigate={handleNavigate}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
