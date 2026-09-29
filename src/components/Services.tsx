import React, { useState } from 'react';
import {
  Sparkles, Zap, Shield, Target, Users, TrendingUp,
  Globe, Smartphone, Cloud, Server, Database, Bot, ArrowRight, CheckCircle2,
  Brain, MessageSquare, Eye, FileText, Cpu, Workflow
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
   DATA — 12 CORE SERVICES WITH CAPABILITIES
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
    id: 'ai-audit',
    num: '01',
    title: 'AI Audit',
    tag: 'Assessment',
    description: 'Assess, audit, and improve your AI systems for safety and performance. Comprehensive evaluation of AI implementations with actionable recommendations.',
    icon: Shield,
    featured: true,
    capabilities: [
      { name: 'AI System Assessment', route: '/ai-audit' },
      { name: 'Performance Optimization' },
      { name: 'Safety & Compliance' },
      { name: 'Risk Analysis' },
      { name: 'Quality Assurance' },
    ],
  },
  {
    id: 'agentic-ai',
    num: '02',
    title: 'Agentic AI',
    tag: 'Autonomous',
    description: 'Deploy autonomous AI agents that plan, reason, and act. Build intelligent systems that operate independently and make decisions without constant supervision.',
    icon: Bot,
    capabilities: [
      { name: 'Autonomous AI Agents', route: '/agentic-ai' },
      { name: 'Decision Making Systems' },
      { name: 'Multi-Agent Systems' },
      { name: 'Task Automation' },
      { name: 'Intelligent Planning' },
    ],
  },
  {
    id: 'ai-automation',
    num: '03',
    title: 'AI Automation',
    tag: 'Efficiency',
    description: 'Turn repetitive workflows into automated systems. Build intelligent autonomous agents that think, learn, and act independently to drive efficiency and innovation.',
    icon: Zap,
    capabilities: [
      { name: 'Workflow Automation', route: '/ai-automation' },
      { name: 'Process Intelligence' },
      { name: 'Business Process Automation' },
      { name: 'AI-Powered Operations' },
      { name: 'System Integrations' },
    ],
  },
  {
    id: 'ai-development',
    num: '04',
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
    num: '05',
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
    num: '06',
    title: 'Machine Learning & Data',
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
    num: '07',
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
    num: '08',
    title: 'Custom Software',
    tag: 'Development',
    description: 'Build the software infrastructure your business needs. Engineer precision-crafted, scalable software solutions built from the ground up to solve your unique business challenges.',
    icon: Server,
    capabilities: [
      { name: 'Web Applications', route: '/web-development' },
      { name: 'Mobile Applications', route: '/app-development' },
      { name: 'Custom Software', route: '/custom-software-development' },
      { name: 'APIs & Backend Systems' },
      { name: 'System Integration' },
    ],
  },
  {
    id: 'cloud-devops',
    num: '09',
    title: 'Cloud DevOps',
    tag: 'Infrastructure',
    description: 'Accelerate delivery with CI/CD, IaC, and cloud-native automation. Build robust, scalable infrastructure that supports rapid development and deployment.',
    icon: Cloud,
    capabilities: [
      { name: 'DevOps Engineering', route: '/devops' },
      { name: 'CI/CD Pipelines' },
      { name: 'Infrastructure as Code' },
      { name: 'Cloud Migration' },
      { name: 'Container Orchestration' },
    ],
  },
  {
    id: 'web-mobile-development',
    num: '10',
    title: 'Web & Mobile Development',
    tag: 'Digital Platforms',
    description: 'Build fast, scalable web and mobile applications. Create responsive, user-friendly applications that deliver exceptional experiences across all devices.',
    icon: Smartphone,
    capabilities: [
      { name: 'Web Development', route: '/web-development' },
      { name: 'Mobile Apps', route: '/app-development' },
      { name: 'Progressive Web Apps' },
      { name: 'E-commerce Platforms' },
      { name: 'API Development' },
    ],
  },
  {
    id: 'ui-ux-design',
    num: '11',
    title: 'UI/UX & Product Design',
    tag: 'Design',
    description: 'Design intuitive interfaces and seamless user experiences. Create beautiful, functional designs that engage users and drive business results.',
    icon: Target,
    capabilities: [
      { name: 'UI/UX Design', route: '/ui-ux-design' },
      { name: 'Product Design' },
      { name: 'User Research' },
      { name: 'Prototyping' },
      { name: 'Design Systems' },
    ],
  },
  {
    id: 'software-modernization',
    num: '12',
    title: 'Software Modernization',
    tag: 'Transformation',
    description: 'Refactor legacy systems into scalable cloud-native microservices. Transform outdated systems into modern, efficient, and maintainable solutions.',
    icon: Workflow,
    capabilities: [
      { name: 'Legacy System Migration', route: '/software-modernization' },
      { name: 'Cloud Migration' },
      { name: 'Microservices Architecture' },
      { name: 'Performance Optimization' },
      { name: 'Code Refactoring' },
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
    /* Shield with checkmarks — AI Audit */
    case 'ai-audit':
      return (
        <svg {...commonProps}>
          <path d={`M${s * 0.5},${s * 0.15} L${s * 0.75},${s * 0.3} L${s * 0.7},${s * 0.7} L${s * 0.5},${s * 0.85} L${s * 0.3},${s * 0.7} L${s * 0.25},${s * 0.3} Z`} stroke={C.LIME} strokeWidth={stroke} opacity={0.7} fill={C.LIME} fillOpacity={0.1} />
          <path d={`M${s * 0.38},${s * 0.46} L${s * 0.44},${s * 0.52} L${s * 0.54},${s * 0.38}`} stroke={C.LIME} strokeWidth={stroke * 1.2} strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M${s * 0.38},${s * 0.58} L${s * 0.44},${s * 0.64} L${s * 0.54},${s * 0.5}`} stroke={C.DEEP_GREEN} strokeWidth={stroke * 1.2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    /* Robot head — Agentic AI */
    case 'agentic-ai':
      return (
        <svg {...commonProps}>
          <rect x={s * 0.25} y={s * 0.3} width={s * 0.5} height={s * 0.45} rx={s * 0.08} stroke={C.LIME} strokeWidth={stroke} opacity={0.7} fill={C.LIME} fillOpacity={0.08} />
          <circle cx={s * 0.38} cy={s * 0.45} r={nodeR * 1.2} fill={C.LIME} opacity={0.9} />
          <circle cx={s * 0.62} cy={s * 0.45} r={nodeR * 1.2} fill={C.LIME} opacity={0.9} />
          <line x1={s * 0.5} y1={s * 0.3} x2={s * 0.5} y2={s * 0.2} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.6} />
          <circle cx={s * 0.5} cy={s * 0.2} r={nodeR * 0.8} fill={C.DEEP_GREEN} opacity={0.8} />
        </svg>
      );

    /* Workflow chain — AI Automation */
    case 'ai-automation':
      return (
        <svg {...commonProps}>
          {[[0.15, 0.5], [0.4, 0.3], [0.4, 0.7], [0.65, 0.5], [0.88, 0.5]].map(([x, y], i) => (
            <React.Fragment key={`auto-${i}`}>
              <circle cx={s * x} cy={s * y} r={nodeR * 1.3} fill={i === 4 ? C.DEEP_GREEN : C.LIME} opacity={0.9} />
              {i < 4 && (
                <circle cx={s * x} cy={s * y} r={nodeR * 2.2} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.3} fill="none" />
              )}
            </React.Fragment>
          ))}
          <line x1={s * 0.15} y1={s * 0.5} x2={s * 0.4} y2={s * 0.3} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          <line x1={s * 0.15} y1={s * 0.5} x2={s * 0.4} y2={s * 0.7} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          <line x1={s * 0.4} y1={s * 0.3} x2={s * 0.65} y2={s * 0.5} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          <line x1={s * 0.4} y1={s * 0.7} x2={s * 0.65} y2={s * 0.5} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.5} />
          <line x1={s * 0.65} y1={s * 0.5} x2={s * 0.85} y2={s * 0.5} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.6} />
          <polygon points={`${s * 0.83},${s * 0.46} ${s * 0.9},${s * 0.5} ${s * 0.83},${s * 0.54}`} fill={C.DEEP_GREEN} opacity={0.6} />
        </svg>
      );

    /* Neural network — AI Development */
    case 'ai-development':
      return (
        <svg {...commonProps}>
          {[0.2, 0.4, 0.6, 0.8].map((y, i) => (
            <circle key={`l1-${i}`} cx={s * 0.2} cy={s * y} r={nodeR * 1.2} fill={C.LIME} opacity={0.9} />
          ))}
          {[0.25, 0.5, 0.75].map((y, i) => (
            <circle key={`l2-${i}`} cx={s * 0.5} cy={s * y} r={nodeR * 1.4} fill={C.LIME} />
          ))}
          {[0.35, 0.65].map((y, i) => (
            <circle key={`l3-${i}`} cx={s * 0.8} cy={s * y} r={nodeR * 1.2} fill={C.DEEP_GREEN} opacity={0.95} />
          ))}
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
   SERVICE ROW - Direct Navigation (No Expansion)
───────────────────────────────────────────────────────────── */
const ServiceRow: React.FC<{
  service: CoreService;
  index: number;
  prefersReducedMotion: boolean;
  isInView: boolean;
  onNavigate: (route: string) => void;
}> = ({ service, index, prefersReducedMotion, isInView, onNavigate }) => {
  const handleClick = () => {
    const firstCapabilityWithRoute = service.capabilities.find(cap => cap.route);
    if (firstCapabilityWithRoute) {
      onNavigate(firstCapabilityWithRoute.route!);
    }
  };

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.12 + index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="group w-full border-t last:border-b transition-all duration-300 hover:border-[#B6FF00]/40 hover:bg-[#B6FF00]/5 cursor-pointer"
      style={{
        borderColor: 'rgba(255, 255, 255, 0.14)',
      }}
      onClick={handleClick}
    >
      <div className="flex w-full items-center gap-4 px-4 py-6 text-left sm:gap-8 sm:px-6 sm:py-8 lg:gap-12 lg:px-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:py-9">
        <span className="w-8 shrink-0 font-mono text-xs tracking-[0.12em] transition-colors duration-300 group-hover:text-[#B6FF00] sm:w-10 sm:text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>
          {service.num}
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 group-hover:text-[#B6FF00]" style={{ color: 'rgba(255,255,255,0.38)' }}>
            {service.tag}
          </span>
          <span className="block text-lg font-black leading-tight tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-xl lg:text-2xl">
            {service.title}
          </span>
        </span>
        <span className="hidden md:block min-w-0 flex-1 max-w-md">
          <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {service.description}
          </p>
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[#B6FF00] group-hover:text-[#050505] sm:h-10 sm:w-10" style={{ borderColor: C.DEEP_GREEN, background: C.DEEP_GREEN, color: C.BLACK }}>
          <ArrowRight size={16} />
        </span>
      </div>
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
  const [showAll, setShowAll] = useState(false);

  const handleNavigate = (route: string) => {
    if (route) navigate(route);
  };

  const displayedServices = showAll ? CORE_SERVICES : CORE_SERVICES.slice(0, 5);
  const hasMore = CORE_SERVICES.length > 5;

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden pb-8 pt-12 font-display scroll-mt-20 md:pb-10 md:pt-16 lg:pb-12 lg:pt-20"
      style={{ background: C.BLACK }}
      aria-label="Services We Offer"
    >
      {/* Background textures */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)',
          filter: 'blur(10px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          className="mb-4 grid gap-x-8 gap-y-2 pb-0 sm:mb-6 sm:gap-y-3 sm:pb-0 lg:mb-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-x-16 lg:gap-y-3 lg:pb-0"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00] lg:col-span-2">
            <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
            Our Services
          </div>

          <h2
            className="max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
            style={{ color: C.WHITE }}
          >
            Services{' '}
            <span style={{ color: C.LIME }}>We Offer.</span>
          </h2>

          <div className="lg:col-start-1">
            <p
              className="max-w-xl text-left text-lg leading-8 sm:text-xl"
              style={{ color: 'rgba(255, 255, 255, 0.64)' }}
            >
              From intelligence to automation. Systems that scale.
            </p>
          </div>
        </motion.div>

        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <AnimatePresence initial={false}>
            {displayedServices.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
                isInView={isInView}
                onNavigate={handleNavigate}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-2.5 rounded-full border-2 px-7 py-3.5 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: showAll ? 'rgba(255,255,255,0.2)' : C.LIME,
                background: showAll ? 'rgba(255,255,255,0.04)' : C.LIME,
                color: showAll ? C.WHITE : C.BLACK,
                boxShadow: showAll ? 'none' : '0 0 30px rgba(182,255,0,0.25)',
              }}
              onMouseEnter={(e) => {
                if (!showAll) {
                  e.currentTarget.style.boxShadow = '0 0 45px rgba(182,255,0,0.45)';
                } else {
                  e.currentTarget.style.borderColor = C.LIME;
                  e.currentTarget.style.color = C.LIME;
                }
              }}
              onMouseLeave={(e) => {
                if (!showAll) {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(182,255,0,0.25)';
                } else {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = C.WHITE;
                }
              }}
            >
              {showAll ? 'Show Less' : 'See More Services'}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;