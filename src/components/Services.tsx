import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState('AI Development');
  const navigate = useNavigate();

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
    console.log('Selected Service:', selectedService);
    console.log('Page Path:', pagePath);
    if (pagePath) {
      navigate(pagePath);
    }
  };

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />
            Services We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {/* Left Sidebar - Navigation */}
            <div className="bg-gradient-to-b from-primary to-primary/80 p-6">
              <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedService === service
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="md:col-span-2 lg:col-span-3 p-8">
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentService.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Business Benefits of Choosing Us
                  </h4>
                  <div className="space-y-4">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-gray-900">
                            <span className="font-semibold">{benefit.title}:</span>{' '}
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button 
                    onClick={() => {
                      console.log('Button clicked for service:', selectedService);
                      handleReadMore();
                    }}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 