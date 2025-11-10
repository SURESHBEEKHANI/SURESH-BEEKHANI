import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: (
        <div className="space-y-2">
          <p className="text-foreground/80 leading-relaxed text-sm">
            I offer comprehensive AI development services including: {' '}
            <a href="/ai-development" className="transition-colors" style={{ color: '#00C2CB' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E5AFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#00C2CB'}>
              AI Development
            </a>
            , {' '}
            <a href="/ai-chatbot-development" className="transition-colors" style={{ color: '#00C2CB' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E5AFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#00C2CB'}>
              AI Chatbot Development
            </a>
            , {' '}
            <a href="/chat-gpt-integrations" className="transition-colors" style={{ color: '#00C2CB' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E5AFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#00C2CB'}>
              ChatGPT Integrations
            </a>
            , {' '}
            <a href="/computer-vision" className="transition-colors" style={{ color: '#00C2CB' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E5AFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#00C2CB'}>
              Computer Vision
            </a>
            , {' '}
            <a href="/machine-learning" className="transition-colors" style={{ color: '#00C2CB' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E5AFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#00C2CB'}>
              Machine Learning
            </a>
            , {' '}
            <a href="/natural-language-processing" className="transition-colors" style={{ color: '#00C2CB' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E5AFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#00C2CB'}>
              Natural Language Processing
            </a>
            , and {' '}
            <a href="/predictive-modelling" className="transition-colors" style={{ color: '#00C2CB' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E5AFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#00C2CB'}>
              Predictive Modelling
            </a>
            . Each service is tailored to your specific business needs and industry requirements.
          </p>
        </div>
      )
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. I always provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, I offer various support packages including maintenance, updates, bug fixes, and feature additions. I believe in building long-term relationships with clients and ensuring your digital presence continues to perform optimally."
    },
    {
      question: "What is your development process?",
      answer: "My process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. I maintain clear communication throughout each phase and involve you in key decision points."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Absolutely! I work with clients worldwide and have experience collaborating across different time zones. I use modern communication tools to ensure smooth collaboration regardless of location."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in AI and machine learning technologies including Python, TensorFlow, PyTorch, scikit-learn, Natural Language Processing (NLP), Computer Vision, Deep Learning, and various AI frameworks. I also work with cloud platforms like AWS, Google Cloud, and Azure for AI deployment. I stay updated with the latest AI trends and best practices to deliver cutting-edge solutions."
    },
    {
      question: "How do you handle project revisions and changes?",
      answer: "I include a reasonable number of revisions in my project scope. For additional changes, I provide transparent pricing and timelines. I believe in flexibility while maintaining project quality and deadlines."
    },
    {
      question: "Can you help with existing projects or only new development?",
      answer: "I can help with both! Whether you need to improve an existing website, add new features, fix issues, or start from scratch, I have the expertise to assist with any stage of your project."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section relative overflow-hidden">
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-purple/5 to-ai-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-8 text-center">
          <div 
            className="inline-block mb-2 px-3 py-1 rounded-full text-sm font-medium border border-[#00C2CB]/30"
            style={{ background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.2) 0%, rgba(0, 194, 203, 0.2) 50%, rgba(113, 239, 163, 0.2) 100%)', color: '#00C2CB' }}
          >
            FAQ
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div 
            className="w-16 h-1 mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 50%, #71EFA3 100%)' }}
          ></div>
          <p className="text-foreground/80 max-w-2xl mx-auto text-sm">
            Find answers to common questions about my services, process, and what you can expect when working with me.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-md overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-ai-cyan/50 hover:shadow-lg"
              style={openIndex === index ? { 
                borderColor: 'rgba(0, 194, 203, 0.5)',
                boxShadow: '0 4px 20px rgba(30, 90, 255, 0.2), 0 0 15px rgba(0, 194, 203, 0.15)'
              } : {}}
            >
              <Button
                variant="ghost"
                onClick={() => toggleFAQ(index)}
                className="w-full h-auto p-4 text-left transition-all duration-300"
                style={openIndex === index ? {
                  background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.1) 0%, rgba(0, 194, 203, 0.1) 50%, rgba(113, 239, 163, 0.1) 100%)'
                } : {}}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30, 90, 255, 0.05) 0%, rgba(0, 194, 203, 0.05) 50%, rgba(113, 239, 163, 0.05) 100%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.background = '';
                  }
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-base font-semibold text-foreground pr-3">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 flex-shrink-0" style={{ color: '#00C2CB' }} />
                  ) : (
                    <Plus className="h-4 w-4 text-muted-foreground flex-shrink-0 transition-colors duration-300 hover:text-ai-cyan" />
                  )}
                </div>
              </Button>
              
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <div className="pt-2 border-t border-border/30">
                    {typeof faq.answer === 'string' ? (
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    ) : (
                      <div className="text-foreground/80 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-foreground/70 mb-3 text-sm">
            Still have questions? I'm here to help!
          </p>
          <Button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-white text-sm hover:shadow-xl transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 50%, #71EFA3 100%)' }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 