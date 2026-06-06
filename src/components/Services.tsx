import React, { useState, useMemo, useRef } from 'react';
import {
  Sparkles, Zap, Shield, Target, Users, TrendingUp,
  ChevronDown, Globe, Smartphone, Cloud, Server, Database, Bot, ArrowRight, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useAnimations';

/* ─────────────────────────────────────────────────────────────
   DATA
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
   BENEFIT CARD
───────────────────────────────────────────────────────────── */
const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: { title: string; description: string };
  index: number;
}) => (
  <motion.div
    key={benefit.title}
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.32, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    className="group flex gap-4 p-4 rounded-xl border border-transparent hover:border-[#B6FF00]/40 transition-all duration-300"
    style={{
      background: 'linear-gradient(135deg, rgba(182,255,0,0.04) 0%, rgba(5,7,41,0.02) 100%)',
    }}
  >
    {/* Icon bullet */}
    <div
      className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
      style={{ background: 'rgba(182,255,0,0.15)' }}
    >
      <CheckCircle2
        className="w-3.5 h-3.5"
        style={{ color: '#7FB800' }}
      />
    </div>

    <div>
      <p className="text-sm font-semibold text-[#050729] mb-0.5 leading-snug">
        {benefit.title}
      </p>
      <p className="text-[13px] leading-relaxed" style={{ color: '#6B7280' }}>
        {benefit.description}
      </p>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
const Services = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useScrollAnimation({ threshold: 0.08, triggerOnce: true });

  const currentService = useMemo(
    () => SERVICE_DETAILS[selectedService],
    [selectedService]
  );

  const handleReadMore = () => {
    const pagePath = SERVICE_ROUTES[selectedService];
    if (pagePath) navigate(pagePath);
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden scroll-mt-20"
      style={{ background: '#F4F6F9' }}
      aria-label="Our AI Services"
    >
      {/* ── Subtle dot grid texture ─────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(5,7,41,0.05) 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* ── Ambient accent blob ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #B6FF00 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* ── Section Header ─────────────────────────────────── */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-[1.14]"
            style={{ color: '#050729' }}
          >
            Services We Offer
          </h2>
          <p
            className="mt-3 text-base sm:text-[17px] max-w-2xl leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            From core AI to enterprise software — we craft solutions that move the needle.
          </p>
        </motion.div>

        {/* ── Mobile Service Selector ─────────────────────────── */}
        <motion.div
          className="lg:hidden mb-6 relative"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.42, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full px-5 py-4 flex items-center justify-between rounded-xl font-semibold text-sm text-white transition-all duration-200"
            style={{
              background: '#050729',
              boxShadow: '0 4px 16px rgba(5,7,41,0.22)',
            }}
            aria-expanded={isMobileMenuOpen}
          >
            <span>{selectedService}</span>
            <ChevronDown
              className="h-4 w-4 transition-transform duration-300"
              style={{ transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="absolute mt-2 w-full bg-white rounded-xl border border-gray-100 max-h-64 overflow-y-auto z-50"
                style={{ boxShadow: '0 12px 40px rgba(5,7,41,0.14)' }}
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {SERVICES.map((service) => (
                  <button
                    key={service}
                    onClick={() => { setSelectedService(service); setIsMobileMenuOpen(false); }}
                    className="w-full text-left px-5 py-3.5 border-b border-gray-50 last:border-0 text-sm transition-colors duration-150 flex items-center gap-3"
                    style={{
                      color: selectedService === service ? '#050729' : '#6B7280',
                      fontWeight: selectedService === service ? 700 : 400,
                      background: selectedService === service ? 'rgba(182,255,0,0.08)' : 'transparent',
                    }}
                  >
                    {selectedService === service && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#B6FF00' }}
                      />
                    )}
                    {service}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Main Panel ─────────────────────────────────────── */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 2px 4px rgba(5,7,41,0.04), 0 8px 24px rgba(5,7,41,0.07), 0 32px 64px rgba(5,7,41,0.10)',
          }}
        >
          <div className="grid lg:grid-cols-[300px_1fr] min-h-[620px]">

            {/* ── Sidebar ─────────────────────────────────────── */}
            <aside
              className="hidden lg:flex flex-col"
              style={{ background: '#050729' }}
              aria-label="Service navigation"
            >
              {/* Top accent bar */}
              <div
                className="h-[3px] w-full"
                style={{ background: 'linear-gradient(90deg, #B6FF00 0%, #85CC00 100%)' }}
              />

              <nav className="flex flex-col flex-1 pt-7 pb-6" aria-label="Services list">
                {SERVICES.map((service) => {
                  const isActive = selectedService === service;
                  const detail = SERVICE_DETAILS[service];
                  return (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className="group relative w-full text-left px-7 py-[11px] text-[13px] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00]"
                      style={{
                        color: isActive ? '#050729' : '#ffffff',
                        background: isActive
                          ? '#B6FF00'
                          : 'transparent',
                        fontWeight: isActive ? 700 : 400,
                      }}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {/* Hover fill */}
                      {!isActive && (
                        <span
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ background: 'rgba(182,255,0,0.06)' }}
                          aria-hidden="true"
                        />
                      )}

                      <span className="relative z-10 flex items-center gap-2.5">
                        {/* Dot indicator */}
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-200"
                          style={{
                            background: isActive ? '#050729' : 'rgba(182,255,0,0.3)',
                            transform: isActive ? 'scale(1.2)' : 'scale(1)',
                          }}
                        />
                        <span
                          className="leading-snug transition-colors duration-150"
                          style={{ color: isActive ? '#050729' : undefined }}
                        >
                          {service}
                        </span>
                      </span>

                      {/* Active right border */}
                      {isActive && (
                        <span
                          className="absolute right-0 top-1 bottom-1 w-[3px] rounded-l-full"
                          style={{ background: 'rgba(5,7,41,0.25)' }}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* ── Content Panel ───────────────────────────────── */}
            <div
              className="relative flex flex-col p-7 sm:p-10 lg:p-12"
              style={{ background: '#ffffff' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col flex-1 h-full"
                >
                  {/* ── Service Title Area ───────────────────── */}
                  <div className="mb-7 pb-7 border-b border-gray-100">


                    {/* Icon + Title */}
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #050729 0%, #0D1254 100%)',
                          color: '#B6FF00',
                          boxShadow: '0 4px 14px rgba(5,7,41,0.18)',
                        }}
                      >
                        {currentService.icon}
                      </div>

                      <div>
                        <h3
                          className="text-2xl sm:text-[1.85rem] font-bold tracking-tight leading-tight"
                          style={{ color: '#050729' }}
                        >
                          {currentService.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="mt-4 text-[15px] sm:text-base leading-relaxed"
                      style={{ color: '#4B5563', lineHeight: 1.78 }}
                    >
                      {currentService.description}
                    </p>
                  </div>

                  {/* ── Benefits ────────────────────────────── */}
                  <div className="flex-1">
                    <h4
                      className="text-[11px] font-bold tracking-[0.16em] uppercase mb-4"
                      style={{ color: '#9CA3AF' }}
                    >
                      Business Benefits
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {currentService.benefits.map((benefit, i) => (
                        <BenefitCard key={benefit.title} benefit={benefit} index={i} />
                      ))}
                    </div>
                  </div>

                  {/* ── CTA Row ─────────────────────────────── */}
                  <div
                    className="mt-8 pt-6 flex items-center justify-end"
                    style={{ borderTop: '1px solid rgba(5,7,41,0.06)' }}
                  >
                    <button
                      onClick={handleReadMore}
                      className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6FF00]"
                      style={{
                        background: '#B6FF00',
                        color: '#050729',
                        boxShadow: '0 2px 8px rgba(182,255,0,0.22), 0 6px 20px rgba(182,255,0,0.12)',
                        letterSpacing: '0.01em',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = '#A3E600';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                          '0 4px 16px rgba(182,255,0,0.28), 0 8px 28px rgba(182,255,0,0.16)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = '#B6FF00';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                          '0 2px 8px rgba(182,255,0,0.22), 0 6px 20px rgba(182,255,0,0.12)';
                      }}
                    >
                      Explore Service
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
