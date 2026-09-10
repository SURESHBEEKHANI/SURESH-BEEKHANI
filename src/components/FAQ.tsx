import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    question:
      'Do I need to know exactly what technology I need before reaching out?',
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
      className="relative overflow-hidden py-12 antialiased sm:py-16 lg:py-20"
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
          className="absolute left-1/3 top-1/4 rounded-full blur-[140px]"
          style={{
            width: 500,
            height: 500,
            background: C.la(0.025),
          }}
        />

        <div
          className="absolute bottom-1/3 right-1/4 rounded-full blur-[140px]"
          style={{
            width: 450,
            height: 450,
            background: C.ga(0.018),
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        {/* ───────────────────────────────────────────────────────────────────
            SECTION HEADER
        ─────────────────────────────────────────────────────────────────── */}
        <div className="mb-8 w-full sm:mb-10">
          <motion.div
            initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              shouldReduce
                ? { duration: 0 }
                : { duration: 0.5, ease }
            }
            className="mb-4 flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]"
            style={{ color: C.lime }}
          >
            <span
              className="h-px w-7"
              style={{ background: C.lime }}
              aria-hidden="true"
            />

            Before We Build

            <span
              className="h-px w-7"
              style={{ background: C.lime }}
              aria-hidden="true"
            />
          </motion.div>

          <h2
            id="faq-heading"
            className="mb-4 text-center text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: C.white }}
          >
            Know Before{' '}
            <span style={{ color: C.lime }}>
              We Build Together
            </span>
          </h2>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            FAQ ACCORDION
        ─────────────────────────────────────────────────────────────────── */}
        <div
          className="mx-auto mb-16 max-w-4xl space-y-2"
          role="list"
          aria-label="Frequently asked questions"
        >
          {FAQ_DATA.map((item) => {
            const isOpen = expandedId === item.id;
            const answerId = `${item.id}-answer`;

            return (
              <div
                key={item.id}
                role="listitem"
                className="overflow-hidden rounded-2xl transition-all duration-200"
                style={{
                  background: C.graphite,
                  border: `1px solid ${
                    isOpen ? C.la(0.32) : C.wa(0.08)
                  }`,
                  boxShadow: isOpen
                    ? `0 18px 40px ${C.la(0.08)}`
                    : '0 4px 20px rgba(0,0,0,0.25)',
                }}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <h3
                    className="min-w-0 flex-1 text-sm font-bold leading-snug transition-colors sm:text-base"
                    style={{
                      color: isOpen ? C.lime : C.white,
                    }}
                  >
                    {item.question}
                  </h3>

                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isOpen
                        ? C.la(0.14)
                        : C.wa(0.04),
                      color: isOpen ? C.lime : C.white,
                      transform: isOpen
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <ChevronDown size={17} strokeWidth={2} />
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
                          : { duration: 0.25, ease }
                      }
                      className="overflow-hidden"
                    >
                      <div
                        className="border-t px-4 pb-5 pt-4 sm:px-5"
                        style={{
                          borderColor: C.wa(0.06),
                        }}
                      >
                        <p
                          className="text-sm leading-7"
                          style={{
                            color: C.wa(0.78),
                          }}
                        >
                          {item.answer}
                        </p>
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
