import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Quote, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

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

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  category: string;
  quote: string;
  image: string;
  problem: string;
  solution: string;
  outcome: string;
  featured?: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kate Callahan",
    role: "Chief Executive Officer",
    company: "Healthcare Solutions",
    category: "Healthcare AI",
    quote: "The collaboration has been exceptional. Velnix was quick to understand our operational bottlenecks, accommodating scope adjustments effortlessly while delivering high-impact software ahead of deadline.",
    image: "/image/clinets-img/Jennifer Jones.jpg",
    problem: "Manual administrative bottlenecks and slow patient data flow.",
    solution: "Custom AI Workflow & EHR Automation Layer.",
    outcome: "40% reduction in processing overhead & instant chart access.",
    featured: true,
  },
  {
    id: 2,
    name: "Aram Saffarian",
    role: "VP of Engineering",
    company: "Enterprise Software Corp",
    category: "Custom Software",
    quote: "Velnix Solutions significantly upgraded our existing core application. Their team manages projects with strict discipline, clear documentation, and transparent technical communication.",
    image: "/image/clinets-img/Andrey Korablin.jpg",
    problem: "Outdated legacy codebase hindering rapid product scaling.",
    solution: "Modular System Architecture & Cloud Infrastructure.",
    outcome: "2.5x faster deployment cycles & improved platform stability.",
  },
  {
    id: 3,
    name: "Jeff Moye",
    role: "Director of Product",
    company: "NextGen Technologies",
    category: "AI & Automation",
    quote: "The Velnix team completed every milestone flawlessly. Their engineers solve complex problems fast, communicate daily via Slack, and consistently deliver clean code on time.",
    image: "/image/clinets-img/Andrew Osadca.jpg",
    problem: "Complex data extraction bottlenecks across remote teams.",
    solution: "Automated Data Pipeline & AI Integration.",
    outcome: "Real-time data synchronization & 12+ hours saved weekly.",
  },
  {
    id: 4,
    name: "Dominika Kowalska",
    role: "Lead Data Scientist",
    company: "BioAnalytics Hub",
    category: "Data & Analytics",
    quote: "Outstanding AI engineering capabilities that transformed our data processing. Their machine learning approach helped us achieve accurate predictive results in record time.",
    image: "/image/clinets-img/Dominika Kowalska.jpg",
    problem: "Slow predictive model training and unorganized datasets.",
    solution: "High-throughput Machine Learning Pipeline.",
    outcome: "3x faster predictive analytics turnaround.",
  },
  {
    id: 5,
    name: "Jamie Milnes",
    role: "Head of Technology",
    company: "CloudScale Systems",
    category: "Software Architecture",
    quote: "Exceptional technical depth combined with clear business alignment. They delivered our AI-powered platform ahead of schedule and exceeded all performance expectations.",
    image: "/image/clinets-img/Jamie Milnes.jpg",
    problem: "Inability to scale infrastructure during peak load.",
    solution: "Scalable Microservices Architecture.",
    outcome: "Zero downtime during peak operations.",
  },
  {
    id: 6,
    name: "Roma Kończak",
    role: "AI Solutions Architect",
    company: "Intelligenx",
    category: "Conversational AI",
    quote: "The team's deep understanding of AI agents and RAG systems translated complex requirements into an elegant product. Highly recommended for strategic AI development.",
    image: "/image/clinets-img/Roma-Kończak.jpg",
    problem: "Support team overwhelmed by repetitive policy inquiries.",
    solution: "Context-aware RAG Intelligent Chatbot.",
    outcome: "85% automated query resolution.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduce = useReducedMotion();

  const featured = TESTIMONIALS[activeIndex];

  // Auto-play effect: changes active testimonial every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section 
      className="py-16 sm:py-24 relative overflow-hidden antialiased"
      style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505', color: C.white }}
      aria-label="Client Proof & Testimonials"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 rounded-full blur-[140px]" style={{ width: 500, height: 500, background: C.la(0.03) }} />
        <div className="absolute bottom-1/4 right-1/4 rounded-full blur-[140px]" style={{ width: 450, height: 450, background: C.ga(0.02) }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* ══════════════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
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
                  CLIENT PROOF & VERIFIED FEEDBACK
                </span>
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Trusted To Turn Complex Problems Into{' '}
              <span style={{ color: C.lime }}>Better Systems.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/60 font-normal max-w-md leading-relaxed">
            Real feedback from business owners, VPs of Engineering, and Product Directors who partnered with Velnix to build intelligent software and automated workflows.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════
            SPOTLIGHT FEATURED TESTIMONIAL (AUTO-PLAY 5s)
        ══════════════════════════════════════════════════════ */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: C.graphite,
              border: `1px solid ${C.wa(0.12)}`,
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
            }}
          >
            {/* Top Badge & Controls */}
            <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} color={C.lime} />
                <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00]">
                  Verified Client Partner
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 transition-all duration-200"
                  style={{ background: C.wa(0.04), border: `1px solid ${C.wa(0.1)}`, color: C.white }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.la(0.1); e.currentTarget.style.borderColor = C.lime; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = C.wa(0.04); e.currentTarget.style.borderColor = C.wa(0.1); }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs text-white/40 font-mono px-2">
                  0{activeIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 transition-all duration-200"
                  style={{ background: C.wa(0.04), border: `1px solid ${C.wa(0.1)}`, color: C.white }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.la(0.1); e.currentTarget.style.borderColor = C.lime; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = C.wa(0.04); e.currentTarget.style.borderColor = C.wa(0.1); }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Testimonial Quote & Context */}
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduce ? false : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Quote & Attribution */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <Quote size={36} color={C.la(0.25)} className="mb-4" />
                    <blockquote className="text-base sm:text-xl font-medium text-white/95 leading-relaxed mb-8 italic">
                      "{featured.quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                      style={{ border: `2px solid ${C.lime}` }}
                    />
                    <div>
                      <h3 className="text-sm font-bold text-white">{featured.name}</h3>
                      <p className="text-xs text-white/60">{featured.role} • <strong className="text-white/80">{featured.company}</strong></p>
                    </div>
                  </div>
                </div>

                {/* Right: Problem -> Solution -> Outcome Summary */}
                <div 
                  className="lg:col-span-5 p-6 space-y-4"
                  style={{ background: C.wa(0.02), border: `1px solid ${C.wa(0.08)}` }}
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] border-b border-white/10 pb-2">
                    Operational Context
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <span className="text-white/50 block font-semibold uppercase text-[10px]">Business Challenge</span>
                      <span className="text-white/80 font-medium">{featured.problem}</span>
                    </div>

                    <div>
                      <span className="text-white/50 block font-semibold uppercase text-[10px]">Velnix Solution</span>
                      <span className="text-white/80 font-medium">{featured.solution}</span>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-[#B6FF00] block font-bold uppercase text-[10px]">Key Outcome</span>
                      <span className="text-white font-bold text-sm">{featured.outcome}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
