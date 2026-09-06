import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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

const getInitials = (name: string) => name
  .split(' ')
  .filter(Boolean)
  .map((part) => part[0])
  .slice(0, 2)
  .join('')
  .toUpperCase();

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
  {
    id: 7,
    name: "Dr. Michael Williams",
    role: "Chief Medical Officer",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "Velnix demonstrated a strong understanding of the realities of modern healthcare operations. Their AI approach helped us rethink how administrative workflows could be automated without disrupting clinical teams.",
    image: "",
    problem: "Administrative workflows slowed clinical operations.",
    solution: "Healthcare workflow automation strategy.",
    outcome: "More efficient administration without disrupting clinical teams.",
  },
  {
    id: 8,
    name: "Dr. Sarah Anderson",
    role: "Medical Director",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "The team understood both the clinical and operational requirements of our organization. Their intelligent automation approach created a more connected workflow for our staff and patients.",
    image: "",
    problem: "Disconnected workflows between staff and patients.",
    solution: "Connected intelligent automation workflows.",
    outcome: "A more coordinated operational experience.",
  },
  {
    id: 9,
    name: "Dr. Robert Khan",
    role: "Director of Clinical Informatics",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "What impressed us was Velnix's ability to translate complex healthcare workflows into practical AI systems. Their focus remained firmly on efficiency, usability, and measurable outcomes.",
    image: "",
    problem: "Complex healthcare workflows were difficult to optimize.",
    solution: "Practical AI systems for clinical informatics.",
    outcome: "Improved efficiency with measurable outcomes.",
  },
  {
    id: 10,
    name: "Dr. Emily Morgan",
    role: "VP of Healthcare Technology",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "Velnix combines strong AI engineering with a genuine understanding of healthcare technology. They approached our challenges strategically and delivered a solution designed for real-world clinical environments.",
    image: "",
    problem: "Healthcare technology needed to work in real clinical environments.",
    solution: "Strategic AI engineering for healthcare technology.",
    outcome: "A practical solution designed for clinical use.",
  },
  {
    id: 11,
    name: "Dr. James Lewis",
    role: "Healthcare Operations Director",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "Their team brought an impressive level of technical depth to healthcare automation. Velnix helped us identify opportunities where AI could reduce operational friction while supporting our teams.",
    image: "",
    problem: "Operational friction limited team productivity.",
    solution: "Technical healthcare automation assessment.",
    outcome: "Clearer opportunities to reduce operational friction.",
  },
  {
    id: 12,
    name: "Dr. Amanda Nelson",
    role: "Healthcare Innovation Director",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "Velnix understands that successful healthcare AI must work within existing clinical and operational processes. Their approach was thoughtful, scalable, and focused on practical implementation.",
    image: "",
    problem: "New AI initiatives needed to fit existing processes.",
    solution: "Scalable AI implementation within healthcare operations.",
    outcome: "Thoughtful automation aligned with existing workflows.",
  },
  {
    id: 13,
    name: "Dr. Daniel Thompson",
    role: "Hospital Operations Director",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "The combination of AI expertise and healthcare workflow knowledge made Velnix a valuable technology partner. They helped turn a complex operational challenge into an intelligent system.",
    image: "",
    problem: "A complex hospital operations challenge needed a clear solution.",
    solution: "Intelligent system design grounded in healthcare workflows.",
    outcome: "A complex challenge became a practical intelligent system.",
  },
  {
    id: 14,
    name: "Dr. Christopher Lee",
    role: "Director of Digital Health",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "Velnix showed a clear understanding of how technology can support healthcare organizations without adding unnecessary complexity. Their engineering and strategic execution were both impressive.",
    image: "",
    problem: "Healthcare technology risked adding unnecessary complexity.",
    solution: "Disciplined digital health engineering and strategy.",
    outcome: "Effective technology support without extra complexity.",
  },
  {
    id: 15,
    name: "Dr. Natalie Parker",
    role: "Chief Digital Health Officer",
    company: "Healthcare Organization",
    category: "Healthcare AI",
    quote: "From workflow automation to intelligent decision support, Velnix approached our requirements with strong technical discipline and a clear understanding of healthcare's unique demands.",
    image: "",
    problem: "Healthcare teams needed automation and decision support together.",
    solution: "Workflow automation and intelligent decision support.",
    outcome: "A disciplined approach aligned with healthcare demands.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduce = useReducedMotion();

  const featured = TESTIMONIALS[activeIndex];
  const visibleTestimonials = [
    TESTIMONIALS[(activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length],
    featured,
    TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length],
  ];

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
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden antialiased"
      style={{ background: 'radial-gradient(ellipse 58% 90% at 100% 0%, rgba(125,204,0,0.08) 0%, transparent 66%), #08080f', color: C.white }}
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-7 bg-[#B6FF00]" aria-hidden="true" />
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: C.lime, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                CLIENT TESTIMONIALS
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Built with Velnix. <span style={{ color: C.lime }}>Proven in the real world.</span>
            </h2>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════
            TESTIMONIAL CARDS (AUTO-PLAY 5s)
        ══════════════════════════════════════════════════════ */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={shouldReduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduce ? {} : { opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease }}
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              {visibleTestimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="flex min-h-[260px] flex-col p-6 sm:p-7"
                  style={{ background: 'rgba(8,8,14,0.98)', border: `1px solid ${C.wa(0.08)}`, boxShadow: '0 18px 40px rgba(0,0,0,0.3)' }}
                >
                  <div className="mt-7">
                    <div className="mb-5 flex gap-1" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={14} fill={C.lime} color={C.lime} strokeWidth={1.5} />)}
                    </div>
                    <blockquote className="text-sm font-medium leading-6 text-white/85 sm:text-base">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </div>
                  <div className="mt-auto flex items-center gap-3 pt-8">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#111111]"
                      style={{ background: `linear-gradient(135deg, ${C.lime} 0%, #B8C5FF 100%)` }}
                      aria-hidden="true"
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{testimonial.name}</h3>
                      <p className="text-xs text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mx-auto mt-7 flex items-center justify-center gap-4">
            <button onClick={handlePrev} className="flex h-9 w-9 items-center justify-center rounded-full transition-colors" style={{ background: C.wa(0.04), border: `1px solid ${C.wa(0.12)}`, color: C.white }} aria-label="Previous testimonial">
              <ChevronLeft size={16} />
            </button>
            <div className="flex w-40 flex-col items-center gap-2">
              <span className="min-w-16 text-center font-mono text-xs text-white/45">{activeIndex + 1} / {TESTIMONIALS.length}</span>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                <motion.div
                  className="h-full rounded-full bg-[#B6FF00]"
                  animate={{ width: `${((activeIndex + 1) / TESTIMONIALS.length) * 100}%` }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>
            </div>
            <button onClick={handleNext} className="flex h-9 w-9 items-center justify-center rounded-full transition-colors" style={{ background: C.wa(0.04), border: `1px solid ${C.wa(0.12)}`, color: C.white }} aria-label="Next testimonial">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mt-14 border-t border-white/10 pt-12 text-center sm:mt-16 sm:pt-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#B6FF00]">
            <span className="h-px w-7 bg-[#B6FF00]" aria-hidden="true" />
            Industry Platforms
            <span className="h-px w-7 bg-[#B6FF00]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            Recognized across leading industry platforms.
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/35 sm:gap-x-12">
            <span>PASHA</span>
            <span>Clutch</span>
            <span>GoodFirms</span>
            <span>SoftwareWorld</span>
            <span>P@SHA ICT Awards</span>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/35">
            <span>AI Development</span>
            <span className="text-[#B6FF00]">·</span>
            <span>Custom Software</span>
            <span className="text-[#B6FF00]">·</span>
            <span>Automation</span>
            <span className="text-[#B6FF00]">·</span>
            <span>Data Science</span>
          </div>
          <div className="mt-5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
            Trusted technology partner <span className="mx-2 text-[#B6FF00]">·</span> Global delivery <span className="mx-2 text-[#B6FF00]">·</span> Enterprise-ready engineering
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
