import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// VELNIX BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  green: '#7DCC00',

  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ CONTENT
// ─────────────────────────────────────────────────────────────────────────────
const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does Velnix Solutions do?',
    answer:
      'Velnix helps businesses identify operational inefficiencies and turn repetitive workflows into intelligent, automated systems using AI, integrations, and custom software.',
  },
  {
    id: 'faq-2',
    question: 'Do we need an AI strategy before starting?',
    answer:
      'No. Start with the problem, not the technology. We assess your workflow and recommend the simplest solution that can deliver the desired business outcome.',
  },
  {
    id: 'faq-3',
    question: 'What types of business problems can Velnix solve?',
    answer:
      'We help automate repetitive tasks, streamline document and data workflows, connect disconnected systems, improve internal operations, and reduce manual work across business processes.',
  },
  {
    id: 'faq-4',
    question: 'Where can AI provide genuine ROI for my business?',
    answer:
      'AI can create measurable value when it reduces manual effort, accelerates processes, improves accuracy, increases capacity, or helps your team make better decisions.',
  },
  {
    id: 'faq-5',
    question: 'Does every business problem require AI?',
    answer:
      "No. We don't add AI just because it's trending. If automation, integration, or conventional software is the better solution, we'll recommend it. Our focus is business impact—not unnecessary technology.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const FAQ = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="relative overflow-hidden py-16 font-display antialiased sm:py-20 lg:py-24"
      style={{
        background: `
          radial-gradient(
            ellipse 52% 74% at 4% 44%,
            rgba(125,204,0,0.16) 0%,
            rgba(125,204,0,0.05) 40%,
            transparent 76%
          ),
          radial-gradient(
            ellipse 46% 60% at 94% 84%,
            rgba(182,255,0,0.08) 0%,
            rgba(125,204,0,0.025) 42%,
            transparent 76%
          ),
          ${C.black}
        `,
        color: C.white,
      }}
      aria-labelledby="faq-heading"
    >
      {/* ─────────────────────────────────────────────────────────────────────
          AMBIENT BACKGROUND
      ───────────────────────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-0 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full blur-[160px]"
          style={{ background: C.la(0.035) }}
        />

        <div
          className="absolute left-1/4 top-1/2 rounded-full blur-[140px]"
          style={{
            width: 480,
            height: 480,
            background: C.ga(0.02),
          }}
        />

        <div
          className="absolute bottom-0 right-1/5 rounded-full blur-[150px]"
          style={{
            width: 420,
            height: 420,
            background: C.la(0.022),
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ───────────────────────────────────────────────────────────────────
            TWO COLUMN LAYOUT
        ─────────────────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* LEFT COLUMN - HEADER CONTENT */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
              className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]"
            >
              <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
              Before We Build
            </motion.div>

            <motion.h2
              id="faq-heading"
              initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease }}
              className="max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl"
            >
              Know Before{' '}
              <span style={{ color: C.lime }}>We Build Together.</span>
            </motion.h2>
          </div>

          {/* RIGHT COLUMN - FAQ ACCORDION */}
          <div className="space-y-3">
            {FAQ_DATA.map((item, index) => {
              const isOpen = expandedId === item.id;
              const answerId = `${item.id}-answer`;

              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={
                    shouldReduce
                      ? { duration: 0 }
                      : { duration: 0.55, ease, delay: index * 0.05 }
                  }
                  className="overflow-hidden border-b border-white/[0.08] last:border-b-0"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left transition-colors duration-300 hover:text-[#B6FF00]"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#B6FF00] transition-colors duration-300">
                      {item.question}
                    </h3>

                    {/* Rotating chevron */}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-white/60 group-hover:text-[#B6FF00] transition-all duration-300"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                      aria-hidden="true"
                    >
                      <Plus size={16} strokeWidth={2} />
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={item.id}
                        initial={
                          shouldReduce
                            ? { opacity: 1 }
                            : { opacity: 0, height: 0 }
                        }
                        animate={
                          shouldReduce
                            ? { opacity: 1 }
                            : { opacity: 1, height: 'auto' }
                        }
                        exit={
                          shouldReduce
                            ? { opacity: 0 }
                            : { opacity: 0, height: 0 }
                        }
                        transition={
                          shouldReduce
                            ? { duration: 0 }
                            : { duration: 0.3, ease }
                        }
                        className="overflow-hidden"
                      >
                        <div className="pb-4">
                          <p className="max-w-2xl leading-7 text-white/55">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        </div>
    </section>
  );
};

export default FAQ;
