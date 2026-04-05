import { useState, useEffect, useMemo } from 'react';
import { Check, ArrowRight, Sparkles, Zap, Shield, Target, Users, TrendingUp, Menu, ChevronDown, Globe, Smartphone, Cloud, Server, Database, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useAnimations';
import { fadeInUp, serviceCardVariants, benefitVariants, staggerContainer, staggerItem, hoverLiftShadow, } from '@/lib/animations';

/* --------------------------
   Static Services Data
--------------------------- */
const SERVICES = [
  'AI Development',
  'Chatbot Development',
  'ChatGPT Integration',
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



const SERVICE_DETAILS = {
  'AI Development': {
    title: 'AI Development',
    description:
      "Innovation meets intelligent execution. We leverage cutting-edge AI technologies to build tailored solutions that align perfectly with your business needs—transforming operations, enhancing efficiency, and driving measurable growth.",
    icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      {
        title: 'Cutting-Edge Expertise',
        description:
          'Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.',
      },
      {
        title: 'Seamless Integration',
        description:
          'We are dedicated to seamlessly integrating our AI solutions with your existing infrastructure, ensuring a smooth transition.',
      },
      {
        title: 'Comprehensive AI Development Services',
        description:
          'From machine learning to natural language processing, our AI Development Services elevate your organization\'s capabilities.',
      },
      {
        title: 'Empowering Organizational Capabilities',
        description:
          'Our mission is to empower organizations like yours to not only adapt but thrive in the dynamic landscape of AI technology.',
      },
    ],
  },
  'Chatbot Development': {
    title: 'Chatbot Development',
    description:
      'Transform customer interactions with intelligent chatbots that understand, learn, and respond naturally to user queries.',
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Natural Language Processing', description: 'Advanced NLP capabilities for human-like conversations and understanding.' },
      { title: '24/7 Availability', description: 'Round-the-clock customer support without human intervention.' },
      { title: 'Scalable Solutions', description: 'Chatbots that grow with your business needs and user base.' },
      { title: 'Multi-Platform Integration', description: 'Seamless integration across websites, mobile apps, and social media.' },
    ],
  },
  'ChatGPT Integration': {
    title: 'ChatGPT Integration',
    description:
      "Leverage the power of OpenAI's ChatGPT to enhance your applications with conversational AI capabilities.",
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Advanced Language Models', description: 'Integration with state-of-the-art language models for superior text generation.' },
      { title: 'Custom Training', description: 'Fine-tuned models tailored to your specific use case and industry.' },
      { title: 'API Integration', description: 'Seamless API integration for real-time conversational experiences.' },
      { title: 'Cost-Effective Solutions', description: 'Optimized usage patterns to maximize value and minimize costs.' },
    ],
  },
  'Machine & Deep Learning': {
    title: 'Machine & Deep Learning',
    description:
      'Build intelligent systems that learn from data and make predictions with unprecedented accuracy.',
    icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Custom Model Development', description: 'Tailored ML/DL models designed for your specific business requirements.' },
      { title: 'Data Processing', description: 'Comprehensive data preprocessing and feature engineering pipelines.' },
      { title: 'Model Optimization', description: 'Performance tuning and optimization for production-ready models.' },
      { title: 'Continuous Learning', description: 'Systems that improve over time with new data and feedback.' },
    ],
  },
  'Computer Vision': {
    title: 'Computer Vision',
    description:
      'Enable machines to see, understand, and interpret visual information like humans do.',
    icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Image Recognition', description: 'Advanced image classification and object detection capabilities.' },
      { title: 'Video Analysis', description: 'Real-time video processing and analysis for surveillance and automation.' },
      { title: 'Facial Recognition', description: 'Secure and accurate facial recognition systems for authentication.' },
      { title: 'Quality Control', description: 'Automated quality inspection and defect detection in manufacturing.' },
    ],
  },
  'Predictive Modeling': {
    title: 'Predictive Modeling',
    description:
      'Forecast future outcomes and trends using advanced statistical and machine learning techniques.',
    icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Statistical Analysis', description: 'Comprehensive statistical modeling for accurate predictions.' },
      { title: 'Risk Assessment', description: 'Identify and quantify potential risks in business operations.' },
      { title: 'Trend Forecasting', description: 'Predict market trends and customer behavior patterns.' },
      { title: 'Optimization', description: 'Optimize business processes based on predictive insights.' },
    ],
  },
  'Natural Language Processing': {
    title: 'Natural Language Processing',
    description:
      'Enable computers to understand, interpret, and generate human language naturally.',
    icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Text Analysis', description: 'Advanced text processing and sentiment analysis capabilities.' },
      { title: 'Language Translation', description: 'Accurate translation services for multiple languages.' },
      { title: 'Document Processing', description: 'Automated extraction and processing of information from documents.' },
      { title: 'Conversational AI', description: 'Natural language interfaces for chatbots and virtual assistants.' },
    ],
  },
  'AI Automation': {
    title: 'AI Automation',
    description:
      'Empower your business with intelligent autonomous agents that think, learn, and act independently to drive efficiency and innovation across all operations.',
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: '24/7 Operation', description: 'Continuous operation without breaks, ensuring consistent performance around the clock.' },
      { title: 'Adaptive Intelligence', description: 'Learn and improve from every interaction, becoming more effective over time.' },
      { title: 'Cost Efficiency', description: 'Reduce operational costs while increasing output and quality of work.' },
      { title: 'Scalability', description: 'Scale operations instantly without proportional increases in resources or costs.' },
    ],
  },
  'Web Development': {
    title: 'Web Development',
    description:
      'Crafting high-performance, dynamic, and visually stunning web experiences that captivate users, drive conversions, and elevate your digital brand.',
    icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Custom Website Development', description: 'Bespoke, high-performance websites tailored to your unique brand identity.' },
      { title: 'Web App Development', description: 'Robust, scalable, and secure web applications using cutting-edge frameworks.' },
      { title: 'E-Commerce Solutions', description: 'Seamless, conversion-optimized e-commerce platforms with secure payment gateways.' },
      { title: 'CMS Development', description: 'Highly customizable CMS that empower your team to effortlessly manage content.' },
    ],
  },
  'App Development': {
    title: 'App Development',
    description:
      'Engineer groundbreaking mobile applications that put your business directly into the hands of your audience, anytime, anywhere.',
    icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'iOS App Development', description: 'Seamless, intuitive, and highly secure iOS applications tailored to Apple’s ecosystem.' },
      { title: 'Android App Development', description: 'Robust and scalable Android applications that deliver consistent experiences.' },
      { title: 'Cross-Platform Development', description: 'Deploy feature-rich mobile applications efficiently on both iOS and Android.' },
      { title: 'Mobile UI/UX Design', description: 'Pixel-perfect, intuitive user interfaces specific to mobile gestures.' },
    ],
  },
  'DevOps Engineering': {
    title: 'DevOps Engineering',
    description:
      'Accelerate delivery, ensure monumental scalability, and eliminate operational bottlenecks with modern DevOps tools and cloud-native infrastructure automation.',
    icon: <Cloud className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'CI/CD Pipeline Automation', description: 'Accelerate release cycles with robust Continuous Integration and Deployment.' },
      { title: 'Cloud Infrastructure', description: 'Design and manage scalable cloud architectures on AWS, Azure, or Google Cloud.' },
      { title: 'Infrastructure as Code', description: 'Provision and manage IT infrastructure automatically through definition files.' },
      { title: 'Containerization', description: 'Modernize applications using Docker and Kubernetes for consistency.' },
    ],
  },
  'Custom Software Development': {
    title: 'Custom Software Development',
    description:
      'Engineer precision-crafted, scalable software solutions engineered from the ground up to solve your unique, mission-critical business challenges.',
    icon: <Server className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Enterprise Solutions', description: 'Robust, scalable systems designed to solve complex operational challenges.' },
      { title: 'SaaS Development', description: 'Architect secure, multi-tenant Software-as-a-Service products.' },
      { title: 'Legacy Modernization', description: 'Upgrade aging systems to modern cloud architectures without disruption.' },
      { title: 'API Integration', description: 'Create robust APIs to seamlessly connect disparate third-party applications.' },
    ],
  },
  'Big Data Analytics': {
    title: 'Big Data Analytics',
    description:
      'Unlock the hidden power of your data. We transform massive, complex datasets into actionable business intelligence that drives growth, optimizes operations, and creates sustainable competitive advantages.',
    icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Data Warehousing', description: 'Design and implement scalable data architectures that unify your disparate data sources.' },
      { title: 'Real-time Streaming', description: 'Process and analyze high-velocity data in real-time to gain instant insights.' },
      { title: 'Predictive Insights', description: 'Leverage machine learning to identify patterns and forecast future trends.' },
      { title: 'Actionable Dashboards', description: 'Transform complex datasets into intuitive, interactive visualizations for decision making.' },
    ],
  },
  'Agentic AI': {
    title: 'Agentic AI Solutions',
    description:
      'The next evolution of intelligence. We build autonomous AI agents that act, reason, and solve complex business missions independently to drive unprecedented efficiency.',
    icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      { title: 'Autonomous Reasoning', description: 'Agents that plan and execute multi-step workflows with minimal oversight.' },
      { title: 'Multi-Agent Systems', description: 'Coordinated ecosystems of specialized agents working together at scale.' },
      { title: 'Goal-Driven Performance', description: 'Agents that stay focused on high-level results, adapting plans in real-time.' },
      { title: '24/7 Digital Workforce', description: 'Scalable autonomous execution that never sleeps and continuously learns.' },
    ],
  },
};



const SERVICE_ROUTES = {
  'AI Development': '/ai-development',
  'Chatbot Development': '/ai-chatbot-development',
  'ChatGPT Integration': '/chat-gpt-integrations',
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



/* --------------------------
   Component
--------------------------- */
const Services = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

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
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden scroll-mt-20"
      aria-label="Our AI Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 flex items-center gap-3"
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
            style={{
              background: '#ff0ea3',
              transform: 'skewX(-15deg)'
            }}
          ></div>


          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#050729]">
            Services We Offer
          </h2>
        </motion.div>

        {/* Mobile Selector */}
        <motion.div
          className="lg:hidden mb-6"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-[#050729] text-white px-4 py-3 rounded-lg flex items-center justify-between shadow-lg"
          >
            <span className="font-medium">{selectedService}</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </motion.button>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="absolute mt-2 w-[calc(100%-2rem)] bg-white rounded-lg shadow-2xl border border-gray-100 max-h-60 overflow-y-auto z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {SERVICES.map((service) => (
                  <button
                    key={service}
                    onClick={() => {
                      setSelectedService(service);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 border-b border-gray-50 last:border-0 ${selectedService === service ? 'bg-gray-50 text-[#ff0ea3] font-semibold' : 'text-gray-700'

                      }`}
                  >
                    {service}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Card Layout */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden bg-white"
        >
          <div className="grid lg:grid-cols-4 min-h-[600px]">
            {/* Sidebar (Desktop) */}
            <div className="hidden lg:block bg-[#050729] py-8">
              <div className="flex flex-col">
                {SERVICES.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-8 py-4 text-sm font-medium transition-all duration-200 ${selectedService === service
                      ? 'bg-[#ff0ea3] text-white'

                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 p-8 lg:p-12 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-3xl font-bold text-[#050729] mb-4">
                    {currentService.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {currentService.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-[#050729] font-bold text-lg mb-6">
                      Business Benefits of Choosing Us
                    </h4>
                    <div className="space-y-6">
                      {currentService.benefits.map((benefit, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="mt-1.5 flex-shrink-0">
                            <div className="w-2.5 h-2.5 bg-[#050729] rounded-sm" />
                          </div>
                          <div>
                            <span className="font-bold text-[#050729]">
                              {benefit.title}:
                            </span>{' '}
                            <span className="text-gray-600">
                              {benefit.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-auto pt-8 flex justify-end">
                    <Button
                      onClick={handleReadMore}
                      className="bg-[#ff0ea3] hover:bg-[#d10b85] text-white px-8 py-6 rounded-sm text-sm font-semibold transition-all shadow-lg"
                    >
                      Read More
                    </Button>

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
