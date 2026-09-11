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
      className="relative overflow-hidden py-16 antialiased sm:py-20 lg:py-24"
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

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-16">
        {/* ───────────────────────────────────────────────────────────────────
            SECTION HEADER
        ─────────────────────────────────────────────────────────────────── */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <motion.div
            initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
            className="mb-4 flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#B6FF00]"
          >
            <span
              className="h-px w-7 bg-gradient-to-r from-transparent to-[#B6FF00]"
              aria-hidden="true"
            />

            Before We Build

            <span
              className="h-px w-7 bg-gradient-to-l from-transparent to-[#B6FF00]"
              aria-hidden="true"
            />
          </motion.div>

          <motion.h2
            id="faq-heading"
            initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease }}
            className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Know Before{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(100deg, ${C.lime} 0%, ${C.green} 100%)`,
              }}
            >
              We Build Together
            </span>
          </motion.h2>

        </div>

        {/* ───────────────────────────────────────────────────────────────────
            FAQ ACCORDION
        ─────────────────────────────────────────────────────────────────── */}
        <div
          className="mx-auto max-w-3xl space-y-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {FAQ_DATA.map((item, index) => {
            const isOpen = expandedId === item.id;
            const answerId = `${item.id}-answer`;
            const num = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={item.id}
                role="listitem"
                initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={
                  shouldReduce
                    ? { duration: 0 }
                    : { duration: 0.55, ease, delay: index * 0.05 }
                }
                className={[
                  'overflow-hidden rounded-2xl border transition-[box-shadow,border-color] duration-300',
                  isOpen
                    ? 'border-[#B6FF00]/25'
                    : 'border-white/[0.08] hover:border-white/[0.18]',
                ].join(' ')}
                style={{
                  background: isOpen
                    ? `linear-gradient(180deg, ${C.la(0.05)} 0%, ${C.wa(0.012)} 100%), ${C.graphite}`
                    : `linear-gradient(180deg, ${C.wa(0.035)} 0%, ${C.wa(0.008)} 100%), ${C.graphite}`,
                  boxShadow: isOpen
                    ? `inset 0 1px 0 ${C.la(0.18)}, 0 24px 70px -28px ${C.la(0.22)}, 0 2px 0 rgba(0,0,0,0.35)`
                    : `inset 0 1px 0 ${C.wa(0.05)}, 0 12px 40px -20px rgba(0,0,0,0.6)`,
                }}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className={[
                    'group flex w-full cursor-pointer items-center gap-4 px-4 py-2.5 text-left sm:gap-6 sm:px-6 sm:py-3',
                    'transition-colors duration-300',
                    isOpen ? '' : 'hover:bg-white/[0.02]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]',
                  ].join(' ')}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  {/* Editorial index */}
                  <span
                    className={[
                      'w-8 shrink-0 text-left font-mono text-[0.7rem] font-medium tracking-[0.18em] tabular-nums',
                      'transition-colors duration-300',
                      isOpen
                        ? 'text-[#B6FF00]'
                        : 'text-[#B6FF00]/35 group-hover:text-[#B6FF00]/60',
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {num}
                  </span>

                  <h3
                    className={[
                      'min-w-0 flex-1 text-[0.95rem] font-semibold leading-snug tracking-tight sm:text-lg',
                      'transition-colors duration-300',
                      isOpen
                        ? 'text-white'
                        : 'text-white/[0.88] group-hover:text-white',
                    ].join(' ')}
                  >
                    {item.question}
                  </h3>

                  {/* Rotating plus */}
                  <span
                    className={[
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border',
                      'transition-all duration-300',
                      isOpen
                        ? 'bg-[#B6FF00]/10 border-[#B6FF00]/30 text-[#B6FF00]'
                        : 'bg-white/[0.04] border-white/[0.08] text-white/60 group-hover:bg-white/[0.08] group-hover:text-white/85',
                    ].join(' ')}
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
                      <div
                        className="border-t pt-5 pb-6 pr-5 pl-[4.25rem] sm:pt-5 sm:pb-7 sm:pr-7 sm:pl-[5.25rem]"
                        style={{ borderColor: C.wa(0.06) }}
                      >
                        <p
                          className="max-w-2xl text-sm leading-7 sm:text-[0.95rem]"
                          style={{ color: C.wa(0.62) }}
                        >
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
    </section>
  );
};

export default FAQ;
