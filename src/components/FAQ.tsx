import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS (Velnix Locked Color System)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string | React.ReactNode;
}



const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: '',
    question: 'What does Velnix Solutions do?',
    answer: 'Velnix Solutions is an AI development and custom software engineering company. We help SMBs and growing enterprises identify operational bottlenecks, redesign manual workflows, and build custom AI models, intelligent software, and automated data systems that improve efficiency and scalability.',
  },
  {
    id: 'faq-2',
    category: '',
    question: 'Do I need to know exactly what technology I need before reaching out?',
    answer: 'No. You only need to know the business problem or operational bottleneck you are experiencing. Velnix operates on a "Business Problem First, Technology Second" principle. During our discovery phase, we evaluate your workflows and determine whether custom software, workflow automation, data integration, or AI is the most effective solution.',
  },
  {
    id: 'faq-3',
    category: '',
    question: 'What types of business problems can Velnix solve?',
    answer: 'We solve repetitive manual tasks, slow document processing, fragmented internal data, disconnected software tools, high customer support inquiry volumes, operational bottlenecks in scheduling/ehr/billing, and legacy application scaling limitations.',
  },
  {
    id: 'faq-4',
    category: '',
    question: 'Where can AI provide genuine ROI for my business?',
    answer: 'AI creates the highest ROI in repetitive document extraction, automated customer support triage, internal data synthesis (RAG chatbots), predictive operational modeling, and automated data entry between legacy tools.',
  },
  {
    id: 'faq-5',
    category: '',
    question: 'Does every business problem require AI?',
    answer: 'No. We believe in practical engineering, not hype. Many operational bottlenecks are best solved with clean workflow automation, API integrations, or custom database interfaces. We only recommend AI when it provides clear accuracy, speed, or intelligence advantages.',
  },
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden antialiased"
      style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505', color: C.white }}
      aria-label="Frequently Asked Questions & Decision Support"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 rounded-full blur-[140px]" style={{ width: 500, height: 500, background: C.la(0.03) }} />
        <div className="absolute bottom-1/3 right-1/4 rounded-full blur-[140px]" style={{ width: 450, height: 450, background: C.ga(0.02) }} />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* ══════════════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="w-full mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1"
              style={{
                border: `1px solid ${C.la(0.3)}`,
                background: C.la(0.06),
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.lime, boxShadow: `0 0 8px ${C.lime}` }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: C.lime, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                DECISION SUPPORT & FAQ
              </span>
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Everything You Need To Know{' '}
            <span style={{ color: C.lime }}>Before We Build Together.</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/60 font-normal leading-relaxed">
            Clear, transparent answers on how Velnix approaches AI, custom software development, discovery scoping, pricing, data security, and ongoing support for business decision-makers.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════
            ACCORDION FAQ LIST
        ══════════════════════════════════════════════════════ */}
        <div className="space-y-4 mb-16">
          {FAQ_DATA.map((item) => {
              const isOpen = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="transition-all duration-200"
                  style={{
                    background: C.graphite,
                    border: `1px solid ${isOpen ? C.la(0.35) : C.wa(0.08)}`,
                  }}
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 tracking-wider uppercase" style={{ background: C.wa(0.04), color: C.lime, border: `1px solid ${C.la(0.2)}` }}>
                        {item.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#B6FF00] transition-colors leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div 
                      className="p-1.5 rounded-full shrink-0 transition-all duration-300"
                      style={{
                        background: isOpen ? C.la(0.15) : C.wa(0.04),
                        color: isOpen ? C.lime : C.white,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        initial={shouldReduce ? undefined : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={shouldReduce ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 mt-1">
                          <div className="pt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
        </div>


      </div>
    </section>
  );
};

export default FAQ;
