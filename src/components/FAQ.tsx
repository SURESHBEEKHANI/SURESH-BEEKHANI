import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
        <div className="space-y-3">
          <p className="text-foreground/80 leading-relaxed">
            I offer comprehensive AI development services including: {' '}
            <a href="/ai-development" className="text-primary hover:text-primary/80 transition-colors">
              AI Development
            </a>
            , {' '}
            <a href="/ai-chatbot-development" className="text-primary hover:text-primary/80 transition-colors">
              AI Chatbot Development
            </a>
            , {' '}
            <a href="/chat-gpt-integrations" className="text-primary hover:text-primary/80 transition-colors">
              ChatGPT Integrations
            </a>
            , {' '}
            <a href="/computer-vision" className="text-primary hover:text-primary/80 transition-colors">
              Computer Vision
            </a>
            , {' '}
            <a href="/machine-learning" className="text-primary hover:text-primary/80 transition-colors">
              Machine Learning
            </a>
            , {' '}
            <a href="/natural-language-processing" className="text-primary hover:text-primary/80 transition-colors">
              Natural Language Processing
            </a>
            , and {' '}
            <a href="/predictive-modelling" className="text-primary hover:text-primary/80 transition-colors">
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
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about my services, process, and what you can expect when working with me.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm"
            >
              <Button
                variant="ghost"
                onClick={() => toggleFAQ(index)}
                className="w-full h-auto p-6 text-left hover:bg-accent/50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </Button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-border/30">
                    <p className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Still have questions? I'm here to help!
          </p>
          <Button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 