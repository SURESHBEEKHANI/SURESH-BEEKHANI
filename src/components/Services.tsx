import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Sparkles, Zap, Shield, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState('AI Development');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    'AI Development',
    'AI Chatbot Development',
    'ChatGPT Integration',
    'Machine & Deep Learning',
    'Computer Vision',
    'Predictive Modeling',
    'Natural Language Processing'
  ];

  const serviceDetails = {
    'AI Development': {
      title: 'AI Development',
      description: 'Transform your business with cutting-edge AI solutions.\nOur comprehensive AI development services empower organizations to automate processes, gain insights, and drive innovation across all industries.',
      icon: <Sparkles className="h-8 w-8" />,
      benefits: [
        {
          title: 'Robust Performance',
          description: 'Our AI solutions are engineered for reliability—adapting to diverse data sources, scaling effortlessly, and delivering consistent results in any environment.'
        },
        {
          title: 'Flexible Customization',
          description: 'We tailor AI models to your unique needs, allowing you to refine and adapt solutions as your business evolves.'
        },
        {
          title: 'Accelerated Development',
          description: 'Leverage pre-trained models and transfer learning to accelerate deployment and unlock value faster—no need to start from scratch.'
        },
        {
          title: 'Transparent Insights',
          description: 'Gain full visibility into how AI decisions are made. Our interpretable models build trust and empower you to act with confidence.'
        }
      ]
    },
    'AI Chatbot Development': {
      title: 'AI Chatbot Development',
      description: 'Transform customer interactions with intelligent chatbots that understand, learn, and respond naturally to user queries.',
      icon: <Users className="h-8 w-8" />,
      benefits: [
        {
          title: 'Natural Language Processing',
          description: 'Advanced NLP capabilities for human-like conversations and understanding.'
        },
        {
          title: '24/7 Availability',
          description: 'Round-the-clock customer support without human intervention.'
        },
        {
          title: 'Scalable Solutions',
          description: 'Chatbots that grow with your business needs and user base.'
        },
        {
          title: 'Multi-Platform Integration',
          description: 'Seamless integration across websites, mobile apps, and social media.'
        }
      ]
    },
    'ChatGPT Integration': {
      title: 'ChatGPT Integration',
      description: 'Leverage the power of OpenAI\'s ChatGPT to enhance your applications with conversational AI capabilities.',
      icon: <Zap className="h-8 w-8" />,
      benefits: [
        {
          title: 'Advanced Language Models',
          description: 'Integration with state-of-the-art language models for superior text generation.'
        },
        {
          title: 'Custom Training',
          description: 'Fine-tuned models tailored to your specific use case and industry.'
        },
        {
          title: 'API Integration',
          description: 'Seamless API integration for real-time conversational experiences.'
        },
        {
          title: 'Cost-Effective Solutions',
          description: 'Optimized usage patterns to maximize value and minimize costs.'
        }
      ]
    },
    'Machine & Deep Learning': {
      title: 'Machine & Deep Learning',
      description: 'Build intelligent systems that learn from data and make predictions with unprecedented accuracy.',
      icon: <Target className="h-8 w-8" />,
      benefits: [
        {
          title: 'Custom Model Development',
          description: 'Tailored ML/DL models designed for your specific business requirements.'
        },
        {
          title: 'Data Processing',
          description: 'Comprehensive data preprocessing and feature engineering pipelines.'
        },
        {
          title: 'Model Optimization',
          description: 'Performance tuning and optimization for production-ready models.'
        },
        {
          title: 'Continuous Learning',
          description: 'Systems that improve over time with new data and feedback.'
        }
      ]
    },
    'Computer Vision': {
      title: 'Computer Vision',
      description: 'Enable machines to see, understand, and interpret visual information like humans do.',
      icon: <Shield className="h-8 w-8" />,
      benefits: [
        {
          title: 'Image Recognition',
          description: 'Advanced image classification and object detection capabilities.'
        },
        {
          title: 'Video Analysis',
          description: 'Real-time video processing and analysis for surveillance and automation.'
        },
        {
          title: 'Facial Recognition',
          description: 'Secure and accurate facial recognition systems for authentication.'
        },
        {
          title: 'Quality Control',
          description: 'Automated quality inspection and defect detection in manufacturing.'
        }
      ]
    },
    'Predictive Modeling': {
      title: 'Predictive Modeling',
      description: 'Forecast future outcomes and trends using advanced statistical and machine learning techniques.',
      icon: <TrendingUp className="h-8 w-8" />,
      benefits: [
        {
          title: 'Statistical Analysis',
          description: 'Comprehensive statistical modeling for accurate predictions.'
        },
        {
          title: 'Risk Assessment',
          description: 'Identify and quantify potential risks in business operations.'
        },
        {
          title: 'Trend Forecasting',
          description: 'Predict market trends and customer behavior patterns.'
        },
        {
          title: 'Optimization',
          description: 'Optimize business processes based on predictive insights.'
        }
      ]
    },
    'Natural Language Processing': {
      title: 'Natural Language Processing',
      description: 'Enable computers to understand, interpret, and generate human language naturally.',
      icon: <Sparkles className="h-8 w-8" />,
      benefits: [
        {
          title: 'Text Analysis',
          description: 'Advanced text processing and sentiment analysis capabilities.'
        },
        {
          title: 'Language Translation',
          description: 'Accurate translation services for multiple languages.'
        },
        {
          title: 'Document Processing',
          description: 'Automated extraction and processing of information from documents.'
        },
        {
          title: 'Conversational AI',
          description: 'Natural language interfaces for chatbots and virtual assistants.'
        }
      ]
    },
  };

  const currentService = serviceDetails[selectedService as keyof typeof serviceDetails];

  // Service page mapping
  const servicePageMap: { [key: string]: string } = {
    'AI Development': '/ai-development',
    'AI Chatbot Development': '/ai-chatbot-development',
    'ChatGPT Integration': '/chat-gpt-integrations',
    'Machine & Deep Learning': '/machine-learning',
    'Computer Vision': '/computer-vision',
    'Predictive Modeling': '/predictive-modelling',
    'Natural Language Processing': '/natural-language-processing'
  };

  const handleReadMore = () => {
    const pagePath = servicePageMap[selectedService];
    if (pagePath) {
      navigate(pagePath);
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden"
      aria-label="Services Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full border-primary/20 hover:bg-primary/15 transition-colors duration-300"
          >
            <Check className="h-4 w-4 mr-2" />
            Services We Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to transform your business and drive innovation across all industries.
          </p>
        </div>

        <Card className="glass-effect rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-4">
            {/* Left Sidebar - Navigation */}
            <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-600 p-6 lg:p-8">
              <h3 className="text-white text-xl font-semibold mb-8 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Our Services
              </h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                      selectedService === service
                        ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                    }`}
                    aria-label={`Select ${service} service`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{service}</span>
                      {selectedService === service && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3 p-6 lg:p-8">
              <div className={`max-w-4xl ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center border border-primary/20">
                    {currentService.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {currentService.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {currentService.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Business Benefits of Choosing Us
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentService.benefits.map((benefit, index) => (
                      <Card
                        key={index}
                        className="glass-effect rounded-xl p-6 border border-gray-200/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        <CardContent className="p-0">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2">
                                {benefit.title}
                              </h5>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button 
                    onClick={handleReadMore}
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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