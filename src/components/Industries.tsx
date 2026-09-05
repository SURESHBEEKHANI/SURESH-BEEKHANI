import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Utensils,
  Compass,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useAnimations';

/* ─────────────────────────────────────────────────────────────
   VELNIX LOCKED COLOR SYSTEM
───────────────────────────────────────────────────────────── */
const C = {
  BLACK: '#050505',
  GRAPHITE: '#111111',
  WHITE: '#FFFFFF',
  LIME: '#B6FF00',
  DEEP_GREEN: '#7DCC00',
  WHITE_MUTED: 'rgba(255,255,255,0.62)',
  WHITE_SUBTLE: 'rgba(255,255,255,0.14)',
} as const;

/* ─────────────────────────────────────────────────────────────
   LOCKED CONTENT — 8 INDUSTRIES (VERBATIM SOURCE OF TRUTH)
───────────────────────────────────────────────────────────── */
interface Industry {
  id: string;
  name: string;
  description: string;
  challenge: string;
  outcome: string;
  image: string;
  icon: LucideIcon;
  link: string;
}

const INDUSTRIES: Industry[] = [
  // ── Row 1 ──
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Advanced technology for healthcare excellence.', challenge: 'Reduce administrative load and disconnected care workflows.', outcome: 'More time for patients, with clearer operational control.', image: '/image/Industries-Img/Healthtech.jpg',
    icon: HeartPulse,
    link: '/healthcare',
  },
  {
    id: 'fintech',
    name: 'Fintech',
    description: 'Financial technology solutions for modern markets.', challenge: 'Move risk, onboarding, and support work without losing control.', outcome: 'Faster decisions with an audit-ready operating model.', image: '/image/Industries-Img/Fintech.jpg',
    icon: Landmark,
    link: '/fintech',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'We promote education through innovative technology.', challenge: 'Support learners and staff while repetitive work keeps growing.', outcome: 'More teaching time and clearer progress insight.', image: '/image/Industries-Img/eduction.jpg',
    icon: GraduationCap,
    link: '/education',
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce',
    description: 'We enhance online commerce with tailored solutions.', challenge: 'Turn customer intent into revenue while keeping operations lean.', outcome: 'Better discovery, stronger margin, and fewer costly exceptions.', image: '/image/Industries-Img/e-commerce.jpg',
    icon: ShoppingCart,
    link: '/e-commerce',
  },

  // ── Row 2 ──
  {
    id: 'food-groceries',
    name: 'Food & Groceries',
    description: 'Tech solutions revolutionizing food and grocery.', challenge: 'Balance perishable inventory, daily demand, and store execution.', outcome: 'Less waste, better availability, and faster daily operations.', image: '/image/Industries-Img/Food & Groceries.jpg',
    icon: Utensils,
    link: '/food-and-groceries',
  },
  {
    id: 'travel-tourism',
    name: 'Travel & Tourism',
    description: 'Digital solutions for travel and hospitality.', challenge: 'Keep guest journeys smooth across bookings and live operations.', outcome: 'Faster answers, stronger occupancy decisions, happier guests.', image: '/image/Industries-Img/Travel & Tourism.jpg',
    icon: Compass,
    link: '/travel-and-tourism',
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Innovative insurance technology solutions.', challenge: 'Handle claims and underwriting faster while preserving oversight.', outcome: 'Shorter cycle times and a clearer path through every case.', image: '/image/Industries-Img/Insurance.jpg',
    icon: ShieldCheck,
    link: '/insurance',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Intelligent systems for modern property operations.', challenge: 'Connect listings, leads, viewings, and property workflows in one place.', outcome: 'Faster responses, clearer pipeline visibility, and smoother operations.', image: '/image/Industries-Img/real estate.jpg',
    icon: Building2,
    link: '/contact',
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN INDUSTRIES COMPONENT
───────────────────────────────────────────────────────────── */
const Industries: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const moveTo = (index: number) => {
    const nextIndex = (index + INDUSTRIES.length) % INDUSTRIES.length;
    setActiveIndex(nextIndex);
    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') moveTo(activeIndex + 1);
      if (event.key === 'ArrowLeft') moveTo(activeIndex - 1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, prefersReducedMotion]);

  return (
    <section id="industries" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 scroll-mt-20" style={{ background: C.BLACK, color: C.WHITE }} aria-labelledby="industries-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)', filter: 'blur(10px)' }} />
      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <motion.div className="mb-8 grid gap-8 lg:mb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3"><span style={{ width: 28, height: 2, background: C.LIME }} /><span style={{ color: C.LIME, fontSize: 11, fontWeight: 700, letterSpacing: '0.22em' }}>INDUSTRIES</span></div>
            <h2 id="industries-heading" className="max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Intelligent solutions for <span style={{ color: C.LIME }}>real-world industries.</span></h2>
          </div>
          <div className="flex flex-col gap-6 lg:pb-1">
            <div className="flex items-start justify-between gap-6">
              <p className="max-w-lg text-base leading-7" style={{ color: C.WHITE_MUTED }}>Velnix builds around the way your business actually operates, connecting AI, automation, data, and software to the workflows that matter.</p>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Previous industry" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#B6FF00] bg-[#B6FF00] text-[#050505] transition-colors hover:border-[#7DCC00] hover:bg-[#7DCC00] hover:text-[#050505]" style={{ borderColor: C.LIME, background: C.LIME, color: C.BLACK }}><ArrowLeft size={17} /></button>
                <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Next industry" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#B6FF00] bg-[#B6FF00] text-[#050505] transition-colors hover:border-[#7DCC00] hover:bg-[#7DCC00] hover:text-[#050505]" style={{ borderColor: C.LIME, background: C.LIME, color: C.BLACK }}><ArrowRight size={17} /></button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12" style={{ scrollbarWidth: 'none' }}>
          {INDUSTRIES.map((industry, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.article key={industry.id} ref={element => { cardRefs.current[index] = element; }} transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} className="group relative min-w-[86vw] snap-start overflow-hidden rounded-[4px] border sm:min-w-[48%] lg:min-w-[calc((100%-48px)/4)]" style={{ background: C.GRAPHITE, borderColor: isActive ? C.LIME : C.WHITE_SUBTLE }}>
                <Link to={industry.link} className="block h-full outline-none" aria-label={`${industry.name}: ${industry.description}`}>
                  <div className="relative h-[500px] overflow-hidden sm:h-[540px]">
                    <img src={industry.image} alt={`${industry.name} industry solution`} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,5,5,0.78) 0%, rgba(5,5,5,0.48) 28%, rgba(5,5,5,0.7) 64%, rgba(5,5,5,0.98) 100%)' }} />
                    <div className="absolute left-4 right-4 top-4 px-4 py-3 sm:left-5 sm:right-5 sm:top-5">
                      <div className="text-lg font-bold tracking-[-0.02em]" style={{ color: C.WHITE, textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>{industry.name}</div>
                      <p className="mt-2 max-w-[27ch] text-xs leading-5 sm:text-sm" style={{ color: C.WHITE_MUTED, textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>{industry.challenge}</p>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#B6FF00] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#050505] transition-colors group-hover:bg-[#7DCC00]">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                    <ArrowUpRight className="absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-100" style={{ color: C.LIME }} size={20} />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
