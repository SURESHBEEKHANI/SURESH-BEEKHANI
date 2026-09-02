import React, { useMemo } from 'react';
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
  'Machine & Deep Learning',
  'Computer Vision',
  'Predictive Modeling',
  'Natural Language Processing',
  'AI Automation',
  'Web Development',
  'App Development',
  'DevOps Engineering',
  'Custom Software Development',
  'Big Data Analytics',
  'Agentic AI',
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
   SERVICE CARD COMPONENT
───────────────────────────────────────────────────────────── */
const ServiceCard: React.FC<{
  service: string;
  index: number;
  prefersReducedMotion: boolean;
  isInView: boolean;
  onNavigate: (service: string) => void;
}> = ({ service, index, prefersReducedMotion, isInView, onNavigate }) => {
  const detail = SERVICE_DETAILS[service];
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden outline-none focus-within:ring-2 focus-within:ring-[#B6FF00] focus-within:ring-offset-2 focus-within:ring-offset-[#050505]"
      style={{
        background: C.GRAPHITE,
        border: `1px solid rgba(182, 255, 0, 0.06)`,
        transition: 'border-color 300ms ease, transform 300ms ease, box-shadow 300ms ease',
      }}
      onMouseEnter={(e) => {
        if (!prefersReducedMotion) {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(182, 255, 0, 0.25)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(182, 255, 0, 0.06)';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(182, 255, 0, 0.06)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Lime top accent line */}
      <div
        className="h-[2px] w-full opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${C.LIME}, ${C.DEEP_GREEN})`, transition: 'opacity 300ms ease' }}
        aria-hidden="true"
      />

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Header — Visual + Number */}
        <div className="flex items-start justify-between mb-4">
          <div className="opacity-60 group-hover:opacity-90" style={{ transition: 'opacity 300ms ease' }}>
            <ServiceVisual service={service} />
          </div>
          <span
            className="text-xl sm:text-2xl font-bold leading-none select-none"
            style={{ color: C.LIME, opacity: 0.35, transition: 'opacity 200ms ease' }}
          >
            {num}
          </span>
        </div>

        {/* Tag */}
        <span
          className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 block"
          style={{ color: `rgba(255, 255, 255, 0.4)` }}
        >
          {detail.tag}
        </span>

        {/* Service Name (H3) */}
        <h3
          className="text-lg sm:text-xl font-bold leading-snug mb-3"
          style={{ color: C.WHITE }}
        >
          {detail.title}
        </h3>

        {/* Description */}
        <p
          className="text-[13px] sm:text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: 'rgba(255, 255, 255, 0.55)' }}
        >
          {detail.description}
        </p>

        {/* Top 2 Benefits */}
        <div className="flex flex-col gap-1.5 mb-5 flex-1">
          {detail.benefits.slice(0, 2).map((b) => (
            <div key={b.title} className="flex items-center gap-2">
              <CheckCircle2
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: C.DEEP_GREEN, opacity: 0.7 }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
              >
                {b.title}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onNavigate(service)}
          className="inline-flex items-center gap-2 text-sm font-semibold mt-auto outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] rounded-lg px-1 py-1"
          style={{ color: C.LIME, transition: 'gap 200ms ease' }}
          aria-label={`Explore ${detail.title} service`}
        >
          Explore Service
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1"
            style={{ transition: 'transform 200ms ease' }}
            aria-hidden="true"
          />
        </button>
      </div>
    </motion.article>
  );
};

/* ─────────────────────────────────────────────────────────────
   FEATURED SERVICE CARD (AI DEVELOPMENT)
───────────────────────────────────────────────────────────── */
const FeaturedServiceCard: React.FC<{
  service: string;
  prefersReducedMotion: boolean;
  isInView: boolean;
  onNavigate: (service: string) => void;
}> = ({ service, prefersReducedMotion, isInView, onNavigate }) => {
  const detail = SERVICE_DETAILS[service];

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden mb-8 sm:mb-10 lg:mb-12 outline-none focus-within:ring-2 focus-within:ring-[#B6FF00] focus-within:ring-offset-2 focus-within:ring-offset-[#050505]"
      style={{
        background: C.GRAPHITE,
        border: `1px solid rgba(182, 255, 0, 0.1)`,
        transition: 'border-color 300ms ease, box-shadow 300ms ease',
      }}
      onMouseEnter={(e) => {
        if (!prefersReducedMotion) {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(182, 255, 0, 0.3)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(182, 255, 0, 0.06)';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(182, 255, 0, 0.1)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Top lime accent */}
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${C.LIME} 0%, ${C.DEEP_GREEN} 60%, transparent 100%)` }}
        aria-hidden="true"
      />

      <div className="grid lg:grid-cols-[55%_45%] gap-0">
        {/* Content Side */}
        <div className="p-7 sm:p-10 lg:p-12 flex flex-col">
          {/* Number + Tag */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-4xl sm:text-5xl font-bold leading-none select-none"
              style={{ color: C.LIME, opacity: 0.5 }}
            >
              01
            </span>
            <span
              className="text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{
                color: C.LIME,
                background: 'rgba(182, 255, 0, 0.08)',
                border: '1px solid rgba(182, 255, 0, 0.15)',
              }}
            >
              {detail.tag}
            </span>
          </div>

          {/* Service Name (H3) */}
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: C.WHITE }}
          >
            {detail.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
            style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.75 }}
          >
            {detail.description}
          </p>

          {/* All 4 Benefits */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {detail.benefits.map((b, i) => (
              <div key={b.title} className="flex items-start gap-2.5">
                <div
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(182, 255, 0, 0.12)' }}
                >
                  <CheckCircle2 className="w-3 h-3" style={{ color: C.LIME }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    {b.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => onNavigate(service)}
            className="group/btn inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6FF00] self-start"
            style={{
              background: C.LIME,
              color: C.BLACK,
              boxShadow: '0 2px 12px rgba(182, 255, 0, 0.2), 0 6px 24px rgba(182, 255, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#A3E600';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(182, 255, 0, 0.28), 0 8px 32px rgba(182, 255, 0, 0.14)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = C.LIME;
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(182, 255, 0, 0.2), 0 6px 24px rgba(182, 255, 0, 0.1)';
            }}
            aria-label={`Explore ${detail.title} service`}
          >
            Explore Service
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Visual Side */}
        <div
          className="hidden lg:flex items-center justify-center p-12 relative"
          style={{ borderLeft: '1px solid rgba(182, 255, 0, 0.06)' }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(182, 255, 0, 0.04) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* Grid pattern */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <pattern id="featured-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.6" fill={C.LIME} opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#featured-grid)" />
          </svg>

          {/* Main visualization */}
          <div className="relative z-10 opacity-80 group-hover:opacity-100 group-hover:scale-105" style={{ transition: 'opacity 400ms ease, transform 400ms ease' }}>
            <ServiceVisual service={service} featured />
          </div>
        </div>
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

  const featuredService = SERVICES[0]; // AI Development
  const supportingServices = useMemo(() => SERVICES.slice(1), []);

  const handleNavigate = (service: string) => {
    const pagePath = SERVICE_ROUTES[service];
    if (pagePath) navigate(pagePath);
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden scroll-mt-20"
      style={{ background: C.BLACK }}
      aria-label="Services We Offer"
    >
      {/* ── Background textures ───────────────────────────────── */}
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
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="h-[1px] w-8"
              style={{ background: C.LIME }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: C.LIME }}
            >
              Services We Offer
            </span>
          </div>

          {/* H2 */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-4"
            style={{ color: C.WHITE }}
          >
            Technology Built Around{' '}
            <span style={{ color: C.LIME }}>Your Business.</span>
          </h2>

          {/* Supporting copy */}
          <p
            className="text-base sm:text-lg max-w-2xl leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            Explore our technology services designed to help businesses build, automate, modernize, and scale with confidence.
          </p>
        </motion.div>

        {/* ── Featured Service (AI Development) ────────────────── */}
        <FeaturedServiceCard
          service={featuredService}
          prefersReducedMotion={prefersReducedMotion}
          isInView={isInView}
          onNavigate={handleNavigate}
        />

        {/* ── Supporting Services Grid ─────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {supportingServices.map((service, i) => (
            <ServiceCard
              key={service}
              service={service}
              index={i + 1}
              prefersReducedMotion={prefersReducedMotion}
              isInView={isInView}
              onNavigate={handleNavigate}
            />
          ))}
        </div>

        {/* ── Section Footer CTA ───────────────────────────────── */}
        <motion.div
          className="mt-12 sm:mt-16 flex justify-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => navigate('/ai-development')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6FF00]"
            style={{
              color: C.LIME,
              background: 'transparent',
              border: `1px solid rgba(182, 255, 0, 0.25)`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(182, 255, 0, 0.08)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(182, 255, 0, 0.5)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(182, 255, 0, 0.25)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            View All Services
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
