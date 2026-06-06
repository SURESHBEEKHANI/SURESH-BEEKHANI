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
          <p className="text-gray-600 leading-relaxed text-sm">
            I offer comprehensive AI development services including: {' '}
            <a href="/ai-development" className="transition-colors hover:text-[#050729] font-medium" style={{ color: '#B6FF00' }}>
              AI Development
            </a>

            , {' '}
            <a href="/ai-chatbot-development" className="transition-colors hover:text-[#050729] font-medium" style={{ color: '#B6FF00' }}>
              AI Chatbot Development
            </a>
            , {' '}
            <a href="/chat-gpt-integrations" className="transition-colors hover:text-[#050729] font-medium" style={{ color: '#B6FF00' }}>
              ChatGPT Integrations
            </a>
            , {' '}
            <a href="/computer-vision" className="transition-colors hover:text-[#050729] font-medium" style={{ color: '#B6FF00' }}>
              Computer Vision
            </a>
            , {' '}
            <a href="/machine-learning" className="transition-colors hover:text-[#050729] font-medium" style={{ color: '#B6FF00' }}>
              Machine Learning
            </a>
            , {' '}
            <a href="/natural-language-processing" className="transition-colors hover:text-[#050729] font-medium" style={{ color: '#B6FF00' }}>
              Natural Language Processing
            </a>
            , and {' '}
            <a href="/predictive-modelling" className="transition-colors hover:text-[#050729] font-medium" style={{ color: '#B6FF00' }}>
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">

      {/* Refined ambient colour wash — perceptible but not decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(182,255,0,0.06) 0%, rgba(0,212,255,0.04) 100%)' }}
        />
        <div
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(182,255,0,0.04) 100%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section heading — preserved hierarchy, tightened tracking */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#050729] leading-tight tracking-tight"
            style={{ letterSpacing: '-0.01em' }}
          >
            Frequently Asked{' '}
            <span
              style={{
                color: '#050729',
                letterSpacing: '-0.01em',
              }}
            >
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-md overflow-hidden transition-all duration-300 group"
                style={{
                  border: isOpen
                    ? '1px solid rgba(182, 255, 0, 0.38)'
                    : '1px solid rgba(229, 231, 235, 1)',
                  background: isOpen
                    ? 'linear-gradient(180deg, rgba(182,255,0,0.03) 0%, rgba(255,255,255,1) 60%)'
                    : '#fafafa',
                  boxShadow: isOpen
                    ? '0 2px 12px rgba(182,255,0,0.09), 0 1px 3px rgba(5,7,41,0.06)'
                    : '0 1px 2px rgba(5,7,41,0.04)',
                  transition: 'border-color 240ms ease, box-shadow 240ms ease, background 240ms ease',
                }}
                onMouseEnter={(e) => {
                  if (!isOpen) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(182,255,0,0.30)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(182,255,0,0.07), 0 1px 3px rgba(5,7,41,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(229,231,235,1)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 2px rgba(5,7,41,0.04)';
                  }
                }}
              >
                {/* Trigger row */}
                <Button
                  variant="ghost"
                  onClick={() => toggleFAQ(index)}
                  className="w-full h-auto p-4 text-left hover:bg-transparent focus-visible:ring-1 focus-visible:ring-[#B6FF00]/40 focus-visible:ring-offset-0"
                  style={{ background: 'transparent' }}
                >
                  <div className="flex items-center justify-between w-full gap-3">
                    <h3
                      className="text-base font-semibold pr-3 transition-colors duration-200"
                      style={{
                        color: isOpen ? '#B6FF00' : '#050729',
                        letterSpacing: '-0.005em',
                        lineHeight: '1.4',
                      }}
                    >
                      {faq.question}
                    </h3>

                    {/* Icon — clean, precise, no animation jitter */}
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded transition-colors duration-200"
                      style={{
                        width: '22px',
                        height: '22px',
                        color: isOpen ? '#B6FF00' : '#9ca3af',
                      }}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2} />
                      )}
                    </span>
                  </div>
                </Button>

                {/* Answer panel */}
                {isOpen && (
                  <div className="px-4 pb-4">
                    <div
                      className="pt-3"
                      style={{
                        borderTop: '1px solid rgba(229,231,235,0.7)',
                      }}
                    >
                      {typeof faq.answer === 'string' ? (
                        <p
                          className="leading-relaxed text-sm"
                          style={{
                            color: '#4b5563',
                            lineHeight: '1.65',
                            letterSpacing: '0.003em',
                          }}
                        >
                          {faq.answer}
                        </p>
                      ) : (
                        <div
                          className="leading-relaxed text-sm"
                          style={{
                            color: '#4b5563',
                            lineHeight: '1.65',
                            letterSpacing: '0.003em',
                          }}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
