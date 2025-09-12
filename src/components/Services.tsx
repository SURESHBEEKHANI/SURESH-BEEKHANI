import React, { useState, useEffect, useMemo } from 'react';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

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
};

const SERVICE_ROUTES = {
  'AI Development': '/ai-development',
  'AI Chatbot Development': '/ai-chatbot-development',
  'ChatGPT Integration': '/chat-gpt-integrations',
  'Machine & Deep Learning': '/machine-learning',
  'Computer Vision': '/computer-vision',
  'Predictive Modeling': '/predictive-modelling',
  'Natural Language Processing': '/natural-language-processing',
};

/* --------------------------
   Component
--------------------------- */
const Services = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden"
      aria-label="Our AI Services"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-indigo-100/30 to-pink-100/30 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary font-medium text-xs sm:text-sm rounded-full border-primary/20"
          >
            <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            Services We Offer
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 sm:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Services</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to transform your business and drive innovation across all industries.
          </p>
        </div>

        {/* Mobile Selector */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-lg"
          >
            <span className="font-medium">{selectedService}</span>
            <Menu className="h-5 w-5" />
          </button>
          {isMobileMenuOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-xl shadow-2xl border max-h-60 overflow-y-auto z-50">
              {SERVICES.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    setSelectedService(service);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 ${
                    selectedService === service
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Card Layout */}
        <Card className="glass-effect rounded-xl sm:rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-4">
            {/* Sidebar (Desktop) */}
            <div className="hidden lg:block bg-gradient-to-br from-primary via-blue-600 to-indigo-600 p-8">
              <h3 className="text-white text-xl font-semibold mb-8 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Our Services
              </h3>
              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      selectedService === service
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 p-6 lg:p-8">
              <div className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
                {/* Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center border border-primary/20">
                    {currentService.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentService.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8">{currentService.description}</p>

                {/* Benefits */}
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Business Benefits of Choosing Us
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {currentService.benefits.map((benefit, i) => (
                    <Card
                      key={i}
                      className="glass-effect rounded-xl p-6 border hover:shadow-lg transition-all"
                    >
                      <CardContent className="p-0">
                        <h5 className="font-semibold text-gray-900 mb-2">{benefit.title}</h5>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="flex justify-end">
                  <Button
                    onClick={handleReadMore}
                    className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;
