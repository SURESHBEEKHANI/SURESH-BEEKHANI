import React, { useState } from 'react';
import {
  Sparkles, Zap, Shield, Target, Users, TrendingUp,
  Globe, Smartphone, Cloud, Server, Database, Bot, ArrowRight, CheckCircle2
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
   DATA — 13 SERVICES (SOURCE OF TRUTH — VERBATIM)
───────────────────────────────────────────────────────────── */
const SERVICES = [
  'AI Development',
  'Chatbot Development',
  'Agentic AI',
  'AI Automation',
  'Machine & Deep Learning',
  'Computer Vision',
  'Predictive Modeling',
  'Natural Language Processing',
  'Web Development',
  'App Development',
  'DevOps Engineering',
  'Custom Software Development',
  'Big Data Analytics',
];

const SERVICE_DETAILS: Record<string, {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  benefits: { title: string; description: string }[];
}> = {
  'AI Development': {
    title: 'AI Development',
    tag: 'Core AI',
    description:
      "Innovation meets intelligent execution. We leverage cutting-edge AI technologies to build tailored solutions that align perfectly with your business needs—transforming operations, enhancing efficiency, and driving measurable growth.",
    icon: <Sparkles className="h-5 w-5" />,
    benefits: [
      { title: 'Cutting-Edge Expertise', description: 'Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.' },
      { title: 'Seamless Integration', description: 'We seamlessly integrate our AI solutions with your existing infrastructure, ensuring a smooth transition.' },
      { title: 'Comprehensive AI Services', description: "From machine learning to NLP, our AI Development Services elevate your organization's capabilities." },
      { title: 'Empowering Organizations', description: 'Our mission is to empower organizations like yours to not only adapt but thrive in the dynamic landscape of AI technology.' },
    ],
  },
  'Chatbot Development': {
    title: 'Chatbot Development',
    tag: 'Conversational AI',
    description: 'Transform customer interactions with intelligent chatbots that understand, learn, and respond naturally to user queries.',
    icon: <Users className="h-5 w-5" />,
    benefits: [
      { title: 'Natural Language Processing', description: 'Advanced NLP capabilities for human-like conversations and understanding.' },
      { title: '24/7 Availability', description: 'Round-the-clock customer support without human intervention.' },
      { title: 'Scalable Solutions', description: 'Chatbots that grow with your business needs and user base.' },
      { title: 'Multi-Platform Integration', description: 'Seamless integration across websites, mobile apps, and social media.' },
    ],
  },
  'Machine & Deep Learning': {
    title: 'Machine & Deep Learning',
    tag: 'ML / DL',
    description: 'Build intelligent systems that learn from data and make predictions with unprecedented accuracy and reliability.',
    icon: <Target className="h-5 w-5" />,
    benefits: [
      { title: 'Custom Model Development', description: 'Tailored ML/DL models designed for your specific business requirements.' },
      { title: 'Data Processing', description: 'Comprehensive data preprocessing and feature engineering pipelines.' },
      { title: 'Model Optimization', description: 'Performance tuning and optimization for production-ready models.' },
      { title: 'Continuous Learning', description: 'Systems that improve over time with new data and feedback.' },
    ],
  },
  'Computer Vision': {
    title: 'Computer Vision',
    tag: 'Visual AI',
    description: 'Enable machines to see, understand, and interpret visual information like humans do — with stunning precision.',
    icon: <Shield className="h-5 w-5" />,
    benefits: [
      { title: 'Image Recognition', description: 'Advanced image classification and object detection capabilities.' },
      { title: 'Video Analysis', description: 'Real-time video processing and analysis for surveillance and automation.' },
      { title: 'Facial Recognition', description: 'Secure and accurate facial recognition systems for authentication.' },
      { title: 'Quality Control', description: 'Automated quality inspection and defect detection in manufacturing.' },
    ],
  },
  'Predictive Modeling': {
    title: 'Predictive Modeling',
    tag: 'Forecasting',
    description: 'Forecast future outcomes and trends using advanced statistical and machine learning techniques to stay ahead.',
    icon: <TrendingUp className="h-5 w-5" />,
    benefits: [
      { title: 'Statistical Analysis', description: 'Comprehensive statistical modeling for accurate predictions.' },
      { title: 'Risk Assessment', description: 'Identify and quantify potential risks in business operations.' },
      { title: 'Trend Forecasting', description: 'Predict market trends and customer behavior patterns.' },
      { title: 'Optimization', description: 'Optimize business processes based on predictive insights.' },
    ],
  },
  'Natural Language Processing': {
    title: 'Natural Language Processing',
    tag: 'NLP',
    description: 'Enable computers to understand, interpret, and generate human language naturally — at enterprise scale.',
    icon: <Sparkles className="h-5 w-5" />,
    benefits: [
      { title: 'Text Analysis', description: 'Advanced text processing and sentiment analysis capabilities.' },
      { title: 'Language Translation', description: 'Accurate translation services for multiple languages.' },
      { title: 'Document Processing', description: 'Automated extraction and processing of information from documents.' },
      { title: 'Conversational AI', description: 'Natural language interfaces for chatbots and virtual assistants.' },
    ],
  },
  'AI Automation': {
    title: 'AI Automation',
    tag: 'Process AI',
    description: 'Empower your business with intelligent autonomous agents that think, learn, and act independently to drive efficiency and innovation.',
    icon: <Zap className="h-5 w-5" />,
    benefits: [
      { title: '24/7 Operation', description: 'Continuous operation without breaks, ensuring consistent performance around the clock.' },
      { title: 'Adaptive Intelligence', description: 'Learn and improve from every interaction, becoming more effective over time.' },
      { title: 'Cost Efficiency', description: 'Reduce operational costs while increasing output and quality of work.' },
      { title: 'Scalability', description: 'Scale operations instantly without proportional increases in resources or costs.' },
    ],
  },
  'Web Development': {
    title: 'Web Development',
    tag: 'Digital Products',
    description: 'Crafting high-performance, dynamic, and visually stunning web experiences that captivate users and drive conversions.',
    icon: <Globe className="h-5 w-5" />,
    benefits: [
      { title: 'Custom Website Development', description: 'Bespoke, high-performance websites tailored to your unique brand identity.' },
      { title: 'Web App Development', description: 'Robust, scalable, and secure web applications using cutting-edge frameworks.' },
      { title: 'E-Commerce Solutions', description: 'Seamless, conversion-optimized e-commerce platforms with secure payment gateways.' },
      { title: 'CMS Development', description: 'Highly customizable CMS that empower your team to effortlessly manage content.' },
    ],
  },
  'App Development': {
    title: 'App Development',
    tag: 'Mobile',
    description: 'Engineer groundbreaking mobile applications that put your business directly into the hands of your audience, anytime, anywhere.',
    icon: <Smartphone className="h-5 w-5" />,
    benefits: [
      { title: 'iOS App Development', description: "Seamless, intuitive, and highly secure iOS applications tailored to Apple's ecosystem." },
      { title: 'Android App Development', description: 'Robust and scalable Android applications that deliver consistent experiences.' },
      { title: 'Cross-Platform Development', description: 'Deploy feature-rich mobile applications efficiently on both iOS and Android.' },
      { title: 'Mobile UI/UX Design', description: 'Pixel-perfect, intuitive user interfaces specific to mobile gestures.' },
    ],
  },
  'DevOps Engineering': {
    title: 'DevOps Engineering',
    tag: 'Infrastructure',
    description: 'Accelerate delivery, ensure monumental scalability, and eliminate operational bottlenecks with modern DevOps and cloud-native infrastructure.',
    icon: <Cloud className="h-5 w-5" />,
    benefits: [
      { title: 'CI/CD Pipeline Automation', description: 'Accelerate release cycles with robust Continuous Integration and Deployment.' },
      { title: 'Cloud Infrastructure', description: 'Design and manage scalable cloud architectures on AWS, Azure, or Google Cloud.' },
      { title: 'Infrastructure as Code', description: 'Provision and manage IT infrastructure automatically through definition files.' },
      { title: 'Containerization', description: 'Modernize applications using Docker and Kubernetes for consistency.' },
    ],
  },
  'Custom Software Development': {
    title: 'Custom Software Development',
    tag: 'Enterprise',
    description: 'Engineer precision-crafted, scalable software solutions built from the ground up to solve your unique, mission-critical business challenges.',
    icon: <Server className="h-5 w-5" />,
    benefits: [
      { title: 'Enterprise Solutions', description: 'Robust, scalable systems designed to solve complex operational challenges.' },
      { title: 'SaaS Development', description: 'Architect secure, multi-tenant Software-as-a-Service products.' },
      { title: 'Legacy Modernization', description: 'Upgrade aging systems to modern cloud architectures without disruption.' },
      { title: 'API Integration', description: 'Create robust APIs to seamlessly connect disparate third-party applications.' },
    ],
  },
  'Big Data Analytics': {
    title: 'Big Data Analytics',
    tag: 'Data Intelligence',
    description: 'Unlock the hidden power of your data. We transform massive, complex datasets into actionable business intelligence that drives growth.',
    icon: <Database className="h-5 w-5" />,
    benefits: [
      { title: 'Data Warehousing', description: 'Design and implement scalable data architectures that unify your disparate data sources.' },
      { title: 'Real-time Streaming', description: 'Process and analyze high-velocity data in real-time to gain instant insights.' },
      { title: 'Predictive Insights', description: 'Leverage machine learning to identify patterns and forecast future trends.' },
      { title: 'Actionable Dashboards', description: 'Transform complex datasets into intuitive, interactive visualizations for decision making.' },
    ],
  },
  'Agentic AI': {
    title: 'Agentic AI Solutions',
    tag: 'Next-Gen AI',
    description: 'The next evolution of intelligence. We build autonomous AI agents that act, reason, and solve complex business missions independently.',
    icon: <Bot className="h-5 w-5" />,
    benefits: [
      { title: 'Autonomous Reasoning', description: 'Agents that plan and execute multi-step workflows with minimal oversight.' },
      { title: 'Multi-Agent Systems', description: 'Coordinated ecosystems of specialized agents working together at scale.' },
      { title: 'Goal-Driven Performance', description: 'Agents that stay focused on high-level results, adapting plans in real-time.' },
      { title: '24/7 Digital Workforce', description: 'Scalable autonomous execution that never sleeps and continuously learns.' },
    ],
  },
};

const SERVICE_ROUTES: Record<string, string> = {
  'AI Development': '/ai-development',
  'Chatbot Development': '/ai-chatbot-development',
  'Machine & Deep Learning': '/machine-learning',
  'Computer Vision': '/computer-vision',
  'Predictive Modeling': '/predictive-modelling',
  'Natural Language Processing': '/natural-language-processing',
  'AI Automation': '/ai-automation',
  'Web Development': '/web-development',
  'App Development': '/app-development',
  'DevOps Engineering': '/devops',
  'Custom Software Development': '/custom-software-development',
  'Big Data Analytics': '/big-data-analytics',
  'Agentic AI': '/agentic-ai',
};

/* ─────────────────────────────────────────────────────────────
   SERVICE SVG VISUALIZATIONS
   Each service gets a unique, purpose-built SVG using only
   Velnix colors. All decorative → aria-hidden.
───────────────────────────────────────────────────────────── */
const ServiceVisual: React.FC<{ service: string; featured?: boolean }> = ({ service, featured }) => {
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

  switch (service) {
    /* Neural network — AI Development */
    case 'AI Development':
      return (
        <svg {...commonProps}>
          {/* Layer 1 nodes */}
          {[0.2, 0.4, 0.6, 0.8].map((y, i) => (
            <circle key={`l1-${i}`} cx={s * 0.2} cy={s * y} r={nodeR * 1.2} fill={C.LIME} opacity={0.8} />
          ))}
          {/* Layer 2 nodes */}
          {[0.25, 0.5, 0.75].map((y, i) => (
            <circle key={`l2-${i}`} cx={s * 0.5} cy={s * y} r={nodeR * 1.4} fill={C.LIME} />
          ))}
          {/* Layer 3 nodes */}
          {[0.35, 0.65].map((y, i) => (
            <circle key={`l3-${i}`} cx={s * 0.8} cy={s * y} r={nodeR * 1.2} fill={C.DEEP_GREEN} opacity={0.9} />
          ))}
          {/* Connections L1→L2 */}
          {[0.2, 0.4, 0.6, 0.8].map((y1) =>
            [0.25, 0.5, 0.75].map((y2, j) => (
              <line key={`c1-${y1}-${j}`} x1={s * 0.2} y1={s * y1} x2={s * 0.5} y2={s * y2} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.2} />
            ))
          )}
          {/* Connections L2→L3 */}
          {[0.25, 0.5, 0.75].map((y1) =>
            [0.35, 0.65].map((y2, j) => (
              <line key={`c2-${y1}-${j}`} x1={s * 0.5} y1={s * y1} x2={s * 0.8} y2={s * y2} stroke={C.DEEP_GREEN} strokeWidth={stroke * 0.6} opacity={0.25} />
            ))
          )}
        </svg>
      );

    /* Chat bubbles — Chatbot Development */
    case 'Chatbot Development':
      return (
        <svg {...commonProps}>
          <rect x={s * 0.1} y={s * 0.15} width={s * 0.5} height={s * 0.3} rx={s * 0.06} stroke={C.LIME} strokeWidth={stroke} opacity={0.6} />
          <rect x={s * 0.35} y={s * 0.55} width={s * 0.55} height={s * 0.25} rx={s * 0.06} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.5} />
          {/* Dots inside bubbles */}
          {[0.22, 0.32, 0.42].map((x, i) => (
            <circle key={`d1-${i}`} cx={s * x} cy={s * 0.3} r={nodeR * 0.7} fill={C.LIME} opacity={0.5} />
          ))}
          {[0.47, 0.57, 0.67].map((x, i) => (
            <circle key={`d2-${i}`} cx={s * x} cy={s * 0.675} r={nodeR * 0.7} fill={C.DEEP_GREEN} opacity={0.4} />
          ))}
          {/* Connection line */}
          <line x1={s * 0.45} y1={s * 0.45} x2={s * 0.5} y2={s * 0.55} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.3} strokeDasharray="3 3" />
        </svg>
      );

    /* Layered model — Machine & Deep Learning */
    case 'Machine & Deep Learning':
      return (
        <svg {...commonProps}>
          {[0.2, 0.4, 0.6, 0.8].map((y, i) => (
            <React.Fragment key={`layer-${i}`}>
              <rect x={s * 0.15} y={s * y - s * 0.04} width={s * 0.7} height={s * 0.08} rx={s * 0.02} fill={C.LIME} opacity={0.1 + i * 0.08} />
              <line x1={s * 0.15} y1={s * y} x2={s * 0.85} y2={s * y} stroke={C.LIME} strokeWidth={stroke} opacity={0.3 + i * 0.1} />
              {[0.25, 0.45, 0.65, 0.75].map((x, j) => (
                <circle key={`n-${i}-${j}`} cx={s * x} cy={s * y} r={nodeR * 0.8} fill={i === 3 ? C.DEEP_GREEN : C.LIME} opacity={0.5 + i * 0.1} />
              ))}
            </React.Fragment>
          ))}
        </svg>
      );

    /* Eye/lens — Computer Vision */
    case 'Computer Vision':
      return (
        <svg {...commonProps}>
          <ellipse cx={s * 0.5} cy={s * 0.5} rx={s * 0.35} ry={s * 0.22} stroke={C.LIME} strokeWidth={stroke} opacity={0.5} fill="none" />
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.12} stroke={C.LIME} strokeWidth={stroke} opacity={0.6} fill="none" />
          <circle cx={s * 0.5} cy={s * 0.5} r={s * 0.04} fill={C.LIME} opacity={0.8} />
          {/* Scan lines */}
          {[0.3, 0.5, 0.7].map((y, i) => (
            <line key={`scan-${i}`} x1={s * 0.15} y1={s * y} x2={s * 0.85} y2={s * y} stroke={C.DEEP_GREEN} strokeWidth={stroke * 0.4} opacity={0.2} strokeDasharray="4 4" />
          ))}
          {/* Corner brackets */}
          <path d={`M${s * 0.18},${s * 0.28} L${s * 0.18},${s * 0.22} L${s * 0.24},${s * 0.22}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.4} fill="none" />
          <path d={`M${s * 0.82},${s * 0.28} L${s * 0.82},${s * 0.22} L${s * 0.76},${s * 0.22}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.4} fill="none" />
          <path d={`M${s * 0.18},${s * 0.72} L${s * 0.18},${s * 0.78} L${s * 0.24},${s * 0.78}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.4} fill="none" />
          <path d={`M${s * 0.82},${s * 0.72} L${s * 0.82},${s * 0.78} L${s * 0.76},${s * 0.78}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.4} fill="none" />
        </svg>
      );

    /* Trend line — Predictive Modeling */
    case 'Predictive Modeling':
      return (
        <svg {...commonProps}>
          {/* Grid lines */}
          {[0.3, 0.5, 0.7].map((y, i) => (
            <line key={`g-${i}`} x1={s * 0.1} y1={s * y} x2={s * 0.9} y2={s * y} stroke={C.WHITE} strokeWidth={stroke * 0.3} opacity={0.08} />
          ))}
          {/* Trend line */}
          <polyline
            points={`${s * 0.1},${s * 0.75} ${s * 0.25},${s * 0.6} ${s * 0.4},${s * 0.5} ${s * 0.55},${s * 0.35} ${s * 0.7},${s * 0.3}`}
            stroke={C.LIME} strokeWidth={stroke * 1.2} fill="none" opacity={0.7} strokeLinejoin="round"
          />
          {/* Forecast */}
          <polyline
            points={`${s * 0.7},${s * 0.3} ${s * 0.85},${s * 0.2} ${s * 0.95},${s * 0.15}`}
            stroke={C.DEEP_GREEN} strokeWidth={stroke} fill="none" opacity={0.4} strokeDasharray="4 3"
          />
          {/* Data points */}
          {[[0.1, 0.75], [0.25, 0.6], [0.4, 0.5], [0.55, 0.35], [0.7, 0.3]].map(([x, y], i) => (
            <circle key={`p-${i}`} cx={s * x} cy={s * y} r={nodeR} fill={C.LIME} opacity={0.8} />
          ))}
          {/* Forecast dots */}
          {[[0.85, 0.2], [0.95, 0.15]].map(([x, y], i) => (
            <circle key={`fp-${i}`} cx={s * x} cy={s * y} r={nodeR * 0.8} fill={C.DEEP_GREEN} opacity={0.5} />
          ))}
        </svg>
      );

    /* Text doc — NLP */
    case 'Natural Language Processing':
      return (
        <svg {...commonProps}>
          {/* Document frame */}
          <rect x={s * 0.15} y={s * 0.1} width={s * 0.7} height={s * 0.8} rx={s * 0.03} stroke={C.WHITE} strokeWidth={stroke * 0.6} opacity={0.15} fill="none" />
          {/* Text lines */}
          {[0.22, 0.32, 0.42, 0.52, 0.62, 0.72].map((y, i) => (
            <rect
              key={`line-${i}`} x={s * 0.22} y={s * y}
              width={s * (i % 2 === 0 ? 0.56 : 0.4)} height={s * 0.025}
              rx={s * 0.01} fill={C.WHITE} opacity={0.12}
            />
          ))}
          {/* Highlight bars */}
          <rect x={s * 0.22} y={s * 0.30} width={s * 0.3} height={s * 0.06} rx={s * 0.01} fill={C.LIME} opacity={0.2} />
          <rect x={s * 0.22} y={s * 0.50} width={s * 0.45} height={s * 0.06} rx={s * 0.01} fill={C.DEEP_GREEN} opacity={0.15} />
        </svg>
      );

    /* Workflow chain — AI Automation */
    case 'AI Automation':
      return (
        <svg {...commonProps}>
          {/* Nodes */}
          {[[0.15, 0.5], [0.4, 0.3], [0.4, 0.7], [0.65, 0.5], [0.88, 0.5]].map(([x, y], i) => (
            <React.Fragment key={`auto-${i}`}>
              <circle cx={s * x} cy={s * y} r={nodeR * 1.3} fill={i === 4 ? C.DEEP_GREEN : C.LIME} opacity={0.7} />
              {i < 4 && (
                <circle cx={s * x} cy={s * y} r={nodeR * 2.2} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.15} fill="none" />
              )}
            </React.Fragment>
          ))}
          {/* Connections */}
          <line x1={s * 0.15} y1={s * 0.5} x2={s * 0.4} y2={s * 0.3} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.3} />
          <line x1={s * 0.15} y1={s * 0.5} x2={s * 0.4} y2={s * 0.7} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.3} />
          <line x1={s * 0.4} y1={s * 0.3} x2={s * 0.65} y2={s * 0.5} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.3} />
          <line x1={s * 0.4} y1={s * 0.7} x2={s * 0.65} y2={s * 0.5} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.3} />
          {/* Arrow to output */}
          <line x1={s * 0.65} y1={s * 0.5} x2={s * 0.85} y2={s * 0.5} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.4} />
          <polygon points={`${s * 0.83},${s * 0.46} ${s * 0.9},${s * 0.5} ${s * 0.83},${s * 0.54}`} fill={C.DEEP_GREEN} opacity={0.4} />
        </svg>
      );

    /* Browser frame — Web Development */
    case 'Web Development':
      return (
        <svg {...commonProps}>
          {/* Browser chrome */}
          <rect x={s * 0.1} y={s * 0.12} width={s * 0.8} height={s * 0.76} rx={s * 0.04} stroke={C.LIME} strokeWidth={stroke} opacity={0.35} fill="none" />
          <line x1={s * 0.1} y1={s * 0.24} x2={s * 0.9} y2={s * 0.24} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.25} />
          {/* Window dots */}
          {[0.17, 0.22, 0.27].map((x, i) => (
            <circle key={`dot-${i}`} cx={s * x} cy={s * 0.18} r={nodeR * 0.5} fill={C.LIME} opacity={0.35} />
          ))}
          {/* Code blocks */}
          <rect x={s * 0.16} y={s * 0.3} width={s * 0.35} height={s * 0.18} rx={s * 0.02} fill={C.LIME} opacity={0.08} />
          <rect x={s * 0.56} y={s * 0.3} width={s * 0.28} height={s * 0.5} rx={s * 0.02} fill={C.LIME} opacity={0.06} />
          {/* Code lines */}
          {[0.34, 0.38, 0.42].map((y, i) => (
            <rect key={`code-${i}`} x={s * 0.2} y={s * y} width={s * (0.2 - i * 0.04)} height={s * 0.015} rx={1} fill={C.LIME} opacity={0.3} />
          ))}
        </svg>
      );

    /* Phone frame — App Development */
    case 'App Development':
      return (
        <svg {...commonProps}>
          <rect x={s * 0.25} y={s * 0.08} width={s * 0.5} height={s * 0.84} rx={s * 0.06} stroke={C.LIME} strokeWidth={stroke} opacity={0.4} fill="none" />
          {/* Notch */}
          <rect x={s * 0.38} y={s * 0.11} width={s * 0.24} height={s * 0.025} rx={s * 0.01} fill={C.LIME} opacity={0.25} />
          {/* UI elements */}
          <rect x={s * 0.3} y={s * 0.2} width={s * 0.4} height={s * 0.08} rx={s * 0.02} fill={C.LIME} opacity={0.1} />
          <rect x={s * 0.3} y={s * 0.32} width={s * 0.18} height={s * 0.18} rx={s * 0.02} fill={C.LIME} opacity={0.12} />
          <rect x={s * 0.52} y={s * 0.32} width={s * 0.18} height={s * 0.18} rx={s * 0.02} fill={C.DEEP_GREEN} opacity={0.1} />
          <rect x={s * 0.3} y={s * 0.55} width={s * 0.4} height={s * 0.04} rx={s * 0.01} fill={C.LIME} opacity={0.08} />
          <rect x={s * 0.3} y={s * 0.62} width={s * 0.28} height={s * 0.04} rx={s * 0.01} fill={C.LIME} opacity={0.06} />
          {/* Home indicator */}
          <rect x={s * 0.38} y={s * 0.86} width={s * 0.24} height={s * 0.02} rx={s * 0.01} fill={C.LIME} opacity={0.2} />
        </svg>
      );

    /* Pipeline — DevOps Engineering */
    case 'DevOps Engineering':
      return (
        <svg {...commonProps}>
          {/* Pipeline stages */}
          {[[0.12, 0.5], [0.35, 0.5], [0.58, 0.5], [0.82, 0.5]].map(([x, y], i) => (
            <React.Fragment key={`stage-${i}`}>
              <rect x={s * x - s * 0.07} y={s * y - s * 0.07} width={s * 0.14} height={s * 0.14} rx={s * 0.03} stroke={i === 3 ? C.DEEP_GREEN : C.LIME} strokeWidth={stroke} opacity={0.4 + i * 0.1} fill={i === 3 ? C.DEEP_GREEN : C.LIME} fillOpacity={0.08} />
            </React.Fragment>
          ))}
          {/* Arrows between stages */}
          {[0.22, 0.45, 0.68].map((x, i) => (
            <React.Fragment key={`arrow-${i}`}>
              <line x1={s * x} y1={s * 0.5} x2={s * (x + 0.06)} y2={s * 0.5} stroke={C.LIME} strokeWidth={stroke * 0.6} opacity={0.3} />
              <polygon points={`${s * (x + 0.05)},${s * 0.47} ${s * (x + 0.08)},${s * 0.5} ${s * (x + 0.05)},${s * 0.53}`} fill={C.LIME} opacity={0.3} />
            </React.Fragment>
          ))}
          {/* Infinity loop hint */}
          <path d={`M${s * 0.3},${s * 0.25} Q${s * 0.5},${s * 0.12} ${s * 0.7},${s * 0.25}`} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.15} fill="none" />
          <path d={`M${s * 0.3},${s * 0.75} Q${s * 0.5},${s * 0.88} ${s * 0.7},${s * 0.75}`} stroke={C.DEEP_GREEN} strokeWidth={stroke * 0.5} opacity={0.12} fill="none" />
        </svg>
      );

    /* Architecture blocks — Custom Software */
    case 'Custom Software Development':
      return (
        <svg {...commonProps}>
          {/* Stacked blocks */}
          <rect x={s * 0.12} y={s * 0.6} width={s * 0.76} height={s * 0.16} rx={s * 0.03} stroke={C.LIME} strokeWidth={stroke} opacity={0.3} fill={C.LIME} fillOpacity={0.04} />
          <rect x={s * 0.18} y={s * 0.38} width={s * 0.3} height={s * 0.16} rx={s * 0.03} stroke={C.LIME} strokeWidth={stroke} opacity={0.35} fill={C.LIME} fillOpacity={0.06} />
          <rect x={s * 0.52} y={s * 0.38} width={s * 0.3} height={s * 0.16} rx={s * 0.03} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.3} fill={C.DEEP_GREEN} fillOpacity={0.05} />
          <rect x={s * 0.28} y={s * 0.16} width={s * 0.44} height={s * 0.16} rx={s * 0.03} stroke={C.LIME} strokeWidth={stroke} opacity={0.4} fill={C.LIME} fillOpacity={0.08} />
          {/* Connectors */}
          <line x1={s * 0.33} y1={s * 0.32} x2={s * 0.33} y2={s * 0.38} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.25} />
          <line x1={s * 0.67} y1={s * 0.32} x2={s * 0.67} y2={s * 0.38} stroke={C.DEEP_GREEN} strokeWidth={stroke * 0.5} opacity={0.2} />
          <line x1={s * 0.5} y1={s * 0.54} x2={s * 0.5} y2={s * 0.6} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.2} />
        </svg>
      );

    /* Data stream — Big Data Analytics */
    case 'Big Data Analytics':
      return (
        <svg {...commonProps}>
          {/* Data stream lines */}
          {[0.2, 0.35, 0.5, 0.65, 0.8].map((y, i) => (
            <React.Fragment key={`stream-${i}`}>
              <line x1={s * 0.05} y1={s * y} x2={s * 0.4} y2={s * y} stroke={C.LIME} strokeWidth={stroke * 0.5} opacity={0.15 + i * 0.05} />
              <circle cx={s * 0.08} cy={s * y} r={nodeR * 0.6} fill={C.LIME} opacity={0.4} />
            </React.Fragment>
          ))}
          {/* Funnel to dashboard */}
          <path d={`M${s * 0.4},${s * 0.15} L${s * 0.55},${s * 0.4} L${s * 0.55},${s * 0.6} L${s * 0.4},${s * 0.85}`} stroke={C.LIME} strokeWidth={stroke * 0.8} opacity={0.2} fill="none" />
          {/* Dashboard panel */}
          <rect x={s * 0.6} y={s * 0.2} width={s * 0.32} height={s * 0.6} rx={s * 0.03} stroke={C.DEEP_GREEN} strokeWidth={stroke} opacity={0.3} fill={C.DEEP_GREEN} fillOpacity={0.05} />
          {/* Chart bars */}
          {[0.65, 0.72, 0.79, 0.86].map((x, i) => (
            <rect key={`bar-${i}`} x={s * x} y={s * (0.55 - i * 0.06)} width={s * 0.04} height={s * (0.2 + i * 0.06)} rx={1} fill={C.LIME} opacity={0.3 + i * 0.1} />
          ))}
        </svg>
      );

    /* Agent brain — Agentic AI */
    case 'Agentic AI':
      return (
        <svg {...commonProps}>
          {/* Central brain node */}
          <circle cx={s * 0.5} cy={s * 0.45} r={s * 0.12} stroke={C.LIME} strokeWidth={stroke * 1.2} opacity={0.5} fill={C.LIME} fillOpacity={0.06} />
          <circle cx={s * 0.5} cy={s * 0.45} r={s * 0.05} fill={C.LIME} opacity={0.7} />
          {/* Decision branches */}
          {[[0.2, 0.25], [0.8, 0.25], [0.15, 0.7], [0.5, 0.85], [0.85, 0.7]].map(([x, y], i) => (
            <React.Fragment key={`agent-${i}`}>
              <line x1={s * 0.5} y1={s * 0.45} x2={s * x} y2={s * y} stroke={i > 2 ? C.DEEP_GREEN : C.LIME} strokeWidth={stroke * 0.6} opacity={0.2} />
              <circle cx={s * x} cy={s * y} r={nodeR} fill={i > 2 ? C.DEEP_GREEN : C.LIME} opacity={0.6} />
            </React.Fragment>
          ))}
          {/* Orbit ring */}
          <circle cx={s * 0.5} cy={s * 0.45} r={s * 0.3} stroke={C.LIME} strokeWidth={stroke * 0.4} opacity={0.1} fill="none" strokeDasharray="6 4" />
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
   EDITORIAL SERVICE ROW
───────────────────────────────────────────────────────────── */
const ServiceRow: React.FC<{
  service: string;
  index: number;
  isExpanded: boolean;
  prefersReducedMotion: boolean;
  isInView: boolean;
  onToggle: () => void;
  onNavigate: (service: string) => void;
}> = ({ service, index, isExpanded, prefersReducedMotion, isInView, onToggle, onNavigate }) => {
  const detail = SERVICE_DETAILS[service];
  const rowId = `service-row-${index}`;
  const panelId = `${rowId}-details`;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.12 + index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t last:border-b"
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
        className="flex w-full items-center gap-4 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] focus-visible:ring-inset sm:gap-8 sm:py-8 lg:gap-12 lg:py-9"
      >
        <span className="w-10 shrink-0 font-mono text-xs tracking-[0.12em] sm:w-14 sm:text-sm" style={{ color: isExpanded ? C.LIME : 'rgba(255,255,255,0.38)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: isExpanded ? C.LIME : 'rgba(255,255,255,0.38)' }}>
            {detail.tag}
          </span>
          <span className="block text-xl font-bold leading-tight tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-2xl lg:text-4xl">
            {detail.title}
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
        <div className="grid gap-8 pb-8 pl-14 sm:grid-cols-[1fr_220px] sm:pb-10 sm:pl-[5.5rem] lg:grid-cols-[1fr_280px] lg:gap-16 lg:pl-28">
          <div>
            <p className="max-w-2xl text-sm leading-7 sm:text-base" style={{ color: 'rgba(255,255,255,0.64)' }}>{detail.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {detail.benefits.slice(0, 4).map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-2 text-xs leading-5" style={{ color: 'rgba(255,255,255,0.58)' }}>
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: C.LIME }} aria-hidden="true" />
                  <span>{benefit.title}</span>
                </div>
              ))}
            </div>
            <button type="button" onClick={() => onNavigate(service)} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#B6FF00] px-5 py-3 text-sm font-bold text-[#050505] outline-none transition-colors hover:bg-[#7DCC00] focus-visible:ring-2 focus-visible:ring-[#B6FF00]" aria-label={`Explore ${detail.title} service`}>
              Explore Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden items-center justify-center border-l border-[#B6FF00]/10 sm:flex" aria-hidden="true">
            <div className="opacity-80 transition-transform duration-500 group-hover:scale-105"><ServiceVisual service={service} featured /></div>
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
  const [showAllServices, setShowAllServices] = useState(false);

  const handleNavigate = (service: string) => {
    const pagePath = SERVICE_ROUTES[service];
    if (pagePath) navigate(pagePath);
  };

  return (
    <section
      ref={ref}
      id="services"
      className="pb-8 pt-20 md:pb-10 md:pt-28 lg:pb-12 lg:pt-32 relative overflow-hidden scroll-mt-20"
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
          className="mb-12 grid gap-x-8 gap-y-2 pb-12 sm:mb-16 sm:gap-y-3 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-x-16 lg:gap-y-3 lg:pb-20"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >

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

        <div aria-label="Available services">
          {SERVICES.slice(0, showAllServices ? SERVICES.length : 5).map((service, index) => (
            <ServiceRow
              key={service}
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

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllServices(current => !current)}
            aria-expanded={showAllServices}
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#B6FF00] bg-[#B6FF00] px-6 py-3 text-sm font-bold text-[#050505] transition-colors hover:border-[#7DCC00] hover:bg-[#7DCC00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6FF00]"
          >
            {showAllServices ? 'Show Fewer Services' : 'View More Services'}
            <ArrowRight className="h-4 w-4" style={{ transform: showAllServices ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }} aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
