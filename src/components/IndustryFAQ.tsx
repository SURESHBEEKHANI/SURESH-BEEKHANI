import React, { useState } from "react";
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

interface IndustryFAQProps {
  faqData: FAQItem[];
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badgeText?: string;
}

const IndustryFAQ: React.FC<IndustryFAQProps> = React.memo(({
  faqData,
  title = "Frequently Asked",
  highlightedTitle = "Questions",
  subtitle = "Everything you need to know about our",
  highlightedSubtitle = "AI-powered solutions",
  badgeText = "Knowledge Base"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden border-t border-slate-100">
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-[#ff0ea3]/5 to-ai-cyan/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/5 to-[#ff0ea3]/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10 sm:mb-12 md:mb-16 text-left">
          <div className="flex items-start gap-4 mb-3">
            <div
              className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
              style={{
                background: '#ff0ea3',
                transform: 'skewX(-15deg)'
              }}
            ></div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#050729] leading-tight">
              {title} <span style={{ color: '#ff0ea3' }}>{highlightedTitle}</span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            {subtitle} <span className="font-semibold text-[#050729]">{highlightedSubtitle}</span>
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={faq.id || index}
              className="border border-gray-200 rounded-none overflow-hidden bg-gray-50 transition-all duration-300 hover:border-[#ff0ea3]/50 hover:shadow-lg group"
              style={openIndex === index ? { 
                borderColor: 'rgba(255, 14, 163, 0.5)',
                boxShadow: '0 4px 20px rgba(255, 14, 163, 0.2), 0 0 15px rgba(255, 14, 163, 0.15)'
              } : {}}
            >
              <Button
                variant="ghost"
                onClick={() => toggleFAQ(index)}
                className="w-full h-auto p-4 text-left transition-all duration-300 hover:bg-transparent"
                style={openIndex === index ? {
                  background: 'linear-gradient(135deg, rgba(255, 14, 163, 0.15) 0%, rgba(255, 14, 163, 0.1) 50%, rgba(255, 14, 163, 0.05) 100%)'
                } : {}}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className={`text-base font-semibold pr-3 transition-all duration-300 group-hover:text-[#ff0ea3] ${openIndex === index ? 'text-[#ff0ea3]' : 'text-[#050729]'}`}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 flex-shrink-0" style={{ color: '#ff0ea3' }} />
                  ) : (
                    <Plus className="h-4 w-4 text-gray-400 flex-shrink-0 transition-colors duration-300 group-hover:text-[#ff0ea3]" />
                  )}
                </div>
              </Button>
              
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <div className="pt-2 border-t border-gray-200/50">
                    <div className="text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

IndustryFAQ.displayName = 'IndustryFAQ';

export default IndustryFAQ;
