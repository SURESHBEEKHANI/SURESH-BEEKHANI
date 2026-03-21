import React from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
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
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-200">
              {badgeText}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
            {title} <span style={{ color: '#a855f7' }}>{highlightedTitle}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle} <span className="text-slate-900 font-bold">{highlightedSubtitle}</span>.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <details 
              key={faq.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 group hover:shadow-md hover:border-purple-300 transition-all duration-300 overflow-hidden"
            >
              <summary className="cursor-pointer font-bold text-sm sm:text-base lg:text-lg text-gray-900 flex items-center justify-between group-hover:text-[#a855f7] transition-colors duration-200 list-none">
                <span className="pr-4">{faq.question}</span>
                <span className="flex-shrink-0 ml-2 text-[#a855f7] group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
              </summary>
              <div className="pt-4 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50 mt-4 animate-fade-in">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
});

IndustryFAQ.displayName = 'IndustryFAQ';

export default IndustryFAQ;
