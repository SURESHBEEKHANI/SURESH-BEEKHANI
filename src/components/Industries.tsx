import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Utensils,
  Compass,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   VELNIX LOCKED COLOR SYSTEM
───────────────────────────────────────────────────────────── */
const C = {
  BLACK: '#050505',
  GRAPHITE: '#111111',
  WHITE: '#FFFFFF',
  LIME: '#B6FF00',
  DEEP_GREEN: '#7DCC00',
  WHITE_MUTED: 'rgba(255,255,255,0.64)',
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
  imageWidth: number;
  imageHeight: number;
  icon: LucideIcon;
  link: string;
}

const INDUSTRIES: Industry[] = [
  // ── Row 1 ──
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Advanced technology for healthcare excellence.', challenge: 'Reduce administrative load and disconnected care workflows.', outcome: 'More time for patients, with clearer operational control.', image: '/image/Industries-Img/Healthtech.avif',
    imageWidth: 634, imageHeight: 1024, icon: HeartPulse,
    link: '/healthcare',
  },
  {
    id: 'fintech',
    name: 'Fintech',
    description: 'Financial technology solutions for modern markets.', challenge: 'Move risk, onboarding, and support work without losing control.', outcome: 'Faster decisions with an audit-ready operating model.', image: '/image/Industries-Img/Fintech.avif',
    imageWidth: 634, imageHeight: 1024, icon: Landmark,
    link: '/fintech',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'We promote education through innovative technology.', challenge: 'Support learners and staff while repetitive work keeps growing.', outcome: 'More teaching time and clearer progress insight.', image: '/image/Industries-Img/eduction.avif',
    imageWidth: 634, imageHeight: 1024, icon: GraduationCap,
    link: '/education',
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce',
    description: 'We enhance online commerce with tailored solutions.', challenge: 'Turn customer intent into revenue while keeping operations lean.', outcome: 'Better discovery, stronger margin, and fewer costly exceptions.', image: '/image/Industries-Img/e-commerce.avif',
    imageWidth: 634, imageHeight: 1024, icon: ShoppingCart,
    link: '/e-commerce',
  },

  // ── Row 2 ──
  {
    id: 'food-groceries',
    name: 'Food & Groceries',
    description: 'Tech solutions revolutionizing food and grocery.', challenge: 'Balance perishable inventory, daily demand, and store execution.', outcome: 'Less waste, better availability, and faster daily operations.', image: '/image/Industries-Img/Food & Groceries.avif',
    imageWidth: 634, imageHeight: 1024, icon: Utensils,
    link: '/food-and-groceries',
  },
  {
    id: 'travel-tourism',
    name: 'Travel & Tourism',
    description: 'Digital solutions for travel and hospitality.', challenge: 'Keep guest journeys smooth across bookings and live operations.', outcome: 'Faster answers, stronger occupancy decisions, happier guests.', image: '/image/Industries-Img/Travel & Tourism.avif',
    imageWidth: 634, imageHeight: 1024, icon: Compass,
    link: '/travel-and-tourism',
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Innovative insurance technology solutions.', challenge: 'Handle claims and underwriting faster while preserving oversight.', outcome: 'Shorter cycle times and a clearer path through every case.', image: '/image/Industries-Img/Insurance.avif',
    imageWidth: 1024, imageHeight: 1024, icon: ShieldCheck,
    link: '/insurance',
  },
  {
    id: 'on-demand',
    name: 'On-Demand',
    description: 'Instant AI solutions tailored to marketplace platforms.', challenge: 'Keep dispatch, live matching, and support aligned in real time.', outcome: 'Faster fulfillment, higher provider utilization, and less chaos.', image: '/image/Industries-Img/On-Demand.avif',
    imageWidth: 634, imageHeight: 1024, icon: Zap,
    link: '/on-demand',
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN INDUSTRIES COMPONENT
───────────────────────────────────────────────────────────── */
const Industries: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.getBoundingClientRect().width || 0;
      const scrollPosition = activeIndex * (cardWidth + 16); // 16px is the gap
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const moveCarousel = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + INDUSTRIES.length) % INDUSTRIES.length);
  };

  return (
    <section id="industries" className="relative overflow-visible py-16 font-display sm:py-20 lg:py-24 scroll-mt-20" style={{ color: C.WHITE }} aria-labelledby="industries-heading">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between lg:mb-10">
          <div>
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.LIME }}>
              <span className="h-px w-8" style={{ background: C.LIME }} /> Industries
            </div>
            <h2 id="industries-heading" className="mb-4 max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">AI Built for <span style={{ color: C.LIME }}>Your Industry.</span></h2>
            <p className="max-w-2xl text-lg leading-8 sm:text-xl" style={{ color: C.WHITE_MUTED }}>Tailored solutions for your workflows, compliance needs, and operational challenges.</p>
          </div>
          
          {/* Navigation Buttons - Top Right */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous industries"
              onClick={() => moveCarousel(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B6FF00] text-[#050505] transition-all hover:bg-[#7DCC00] hover:scale-105"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Next industries"
              onClick={() => moveCarousel(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B6FF00] text-[#050505] transition-all hover:bg-[#7DCC00] hover:scale-105"
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
            style={{ scrollbarWidth: 'none', overscrollBehaviorX: 'contain', scrollBehavior: 'smooth' }}
          >
            {INDUSTRIES.map((industry, index) => {
              const isActive = activeIndex === index;
              return (
                <article key={industry.id} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} className="group relative min-w-[72vw] snap-start overflow-hidden rounded-2xl border sm:min-w-[340px] lg:min-w-[270px] xl:min-w-[290px]" style={{ background: C.GRAPHITE, borderColor: isActive ? C.LIME : C.WHITE_SUBTLE }}>
                  <Link to={industry.link} className="block h-full outline-none" aria-label={`${industry.name}: ${industry.description}`}>
                    <div className="relative h-[420px] overflow-hidden sm:h-[510px]">
                      <img src={industry.image} alt={`${industry.name} industry solution`} width={industry.imageWidth} height={industry.imageHeight} loading="lazy" decoding="async" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.28) 34%, rgba(8,42,8,0.42) 64%, rgba(45,105,0,0.88) 100%)' }} />
                      <div className="absolute left-4 right-4 top-4 px-4 py-3 sm:left-5 sm:right-5 sm:top-5">
                        <div className="text-lg font-bold" style={{ color: C.WHITE, textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>{industry.name}</div>
                        <p className="mt-2 max-w-[27ch] text-sm leading-6" style={{ color: 'rgba(255,255,255,0.55)', textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>{industry.challenge}</p>
                        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#B6FF00] px-6 py-3 text-sm font-bold text-[#050505] transition-colors group-hover:bg-[#7DCC00]">
                          Learn More <ArrowRight size={17} />
                        </span>
                      </div>
                      <ArrowUpRight className="absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-100" style={{ color: C.LIME }} size={20} />
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
