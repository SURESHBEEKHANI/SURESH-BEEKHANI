import { useState, useEffect, useMemo } from 'react';
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Target,
  Users,
  TrendingUp,
  Menu,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useAnimations';
import {
  fadeInUp,
  serviceCardVariants,
  benefitVariants,
  staggerContainer,
  staggerItem,
  hoverLiftShadow,
} from '@/lib/animations';

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
];

const SERVICE_DETAILS = {
  'AI Development': {
    title: 'AI Development',
    description:
      'Transform your business with cutting-edge AI solutions. Our comprehensive AI development services empower organizations to automate processes, gain insights, and drive innovation across all industries.',
    icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />,
    benefits: [
      {
        title: 'Robust Performance',
        description:
          'Our AI solutions are engineered for reliability—adapting to diverse data sources, scaling effortlessly, and delivering consistent results in any environment.',
      },
      {
        title: 'Flexible Customization',
        description:
          'We tailor AI models to your unique needs, allowing you to refine and adapt solutions as your business evolves.',
      },
      {
        title: 'Accelerated Development',
        description:
          'Leverage pre-trained models and transfer learning to accelerate deployment and unlock value faster—no need to start from scratch.',
      },
      {
        title: 'Transparent Insights',
        description:
          'Gain full visibility into how AI decisions are made. Our interpretable models build trust and empower you to act with confidence.',
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
      className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section relative overflow-hidden"
      aria-label="Our AI Services"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-2xl sm:blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-2xl sm:blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={staggerItem}>
            <Badge
              variant="outline"
              className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-ai-purple/20 text-ai-purple font-medium text-xs sm:text-sm rounded-full border-ai-purple/30"
            >
              <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Services We Offer
            </Badge>
          </motion.div>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 sm:mb-6 text-white"
            variants={staggerItem}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-purple to-ai-cyan">Services</span>
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-6 sm:mb-8 rounded-full"
            variants={staggerItem}
          />
          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
            variants={staggerItem}
          >
            Comprehensive AI solutions tailored to transform your business and drive innovation across all industries.
          </motion.p>
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
            className="w-full bg-gradient-to-r from-ai-purple to-ai-cyan text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-lg"
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <span className="font-medium">{selectedService}</span>
            <motion.div
              animate={prefersReducedMotion ? {} : { rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="absolute mt-2 w-full bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-ai-purple/20 max-h-60 overflow-y-auto z-50"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {SERVICES.map((service, index) => (
                  <motion.button
                    key={service}
                    onClick={() => {
                      setSelectedService(service);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 transition-colors ${selectedService === service
                      ? 'bg-ai-purple/20 text-ai-purple font-medium'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={prefersReducedMotion ? {} : { x: 4 }}
                  >
                    {service}
                  </motion.button>
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
        >
          <Card className="ai-card-glow rounded-xl sm:rounded-2xl shadow-xl border border-ai-purple/20 backdrop-blur-sm overflow-hidden bg-gray-800/50">
            <div className="grid lg:grid-cols-4">
              {/* Sidebar (Desktop) */}
              <div className="hidden lg:block bg-gradient-to-br from-ai-purple via-ai-purple-light to-ai-cyan p-8">
                <motion.h3
                  className="text-white text-xl font-semibold mb-8 flex items-center gap-2"
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <Sparkles className="h-5 w-5" />
                  Our Services
                </motion.h3>
                <div className="space-y-3">
                  {SERVICES.map((service, index) => (
                    <motion.button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${selectedService === service
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={prefersReducedMotion ? {} : { x: 4, scale: 1.02 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    >
                      {service}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedService}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Title */}
                    <motion.div
                      className="flex items-center gap-4 mb-6"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.div
                        className="bg-gradient-to-br from-ai-purple/20 to-ai-cyan/10 rounded-full w-16 h-16 flex items-center justify-center border border-ai-purple/30 text-ai-purple"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {currentService.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{currentService.title}</h3>
                        <motion.div
                          className="w-12 h-1 bg-gradient-to-r from-ai-purple to-ai-cyan rounded-full mt-2"
                          initial={prefersReducedMotion ? false : { width: 0 }}
                          animate={{ width: 48 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        />
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 mb-8"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentService.description}
                    </motion.p>

                    {/* Benefits */}
                    <motion.h4
                      className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Target className="h-5 w-5 text-ai-purple" />
                      Business Benefits of Choosing Us
                    </motion.h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      {currentService.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={benefitVariants}
                          initial={prefersReducedMotion ? false : "hidden"}
                          animate="visible"
                        >
                          <motion.div
                            whileHover={prefersReducedMotion ? {} : hoverLiftShadow}
                          >
                            <Card className="ai-card rounded-xl p-6 border transition-all h-full bg-gray-800/30">
                              <CardContent className="p-0">
                                <h5 className="font-semibold text-white mb-2">{benefit.title}</h5>
                                <p className="text-gray-300 text-sm">{benefit.description}</p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <motion.div
                      className="flex justify-end"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                      >
                        <Button
                          onClick={handleReadMore}
                          className="btn-primary px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
