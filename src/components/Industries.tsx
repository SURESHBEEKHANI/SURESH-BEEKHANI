import React, { useState, useEffect } from 'react';
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
const CARDS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(INDUSTRIES.length / CARDS_PER_PAGE);

const Industries: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Auto-advance page every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const movePage = (direction: -1 | 1) => {
    setCurrentPage((prev) => (prev + direction + TOTAL_PAGES) % TOTAL_PAGES);
  };

  const currentIndustries = INDUSTRIES.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE,
  );

  return (
    <section id="industries" className="relative overflow-visible py-16 font-display sm:py-20 lg:py-24 scroll-mt-20" style={{ color: C.WHITE }} aria-labelledby="industries-heading">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between lg:mb-10">
          <div>
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.LIME }}>
              <span className="h-px w-8" style={{ background: C.LIME }} /> Industries
            </div>
            <h2 id="industries-heading" className="mb-4 max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">AI Built for <span style={{ color: C.LIME }}>Your Industry.</span></h2>
            <p className="max-w-2xl text-lg leading-8 sm:text-xl" style={{ color: C.WHITE_MUTED }}>Tailored solutions for your workflows, compliance needs, and operational challenges.</p>
          </div>
          
          {/* Navigation Buttons - Top Right */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous industries"
              onClick={() => movePage(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B6FF00] text-[#050505] transition-all hover:bg-[#7DCC00] hover:scale-105"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Next industries"
              onClick={() => movePage(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B6FF00] text-[#050505] transition-all hover:bg-[#7DCC00] hover:scale-105"
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentIndustries.map((industry) => (
              <article key={industry.id} className="group relative overflow-hidden rounded-2xl border border-[#B6FF00] bg-[#111111]">
                <Link to={industry.link} className="block h-full outline-none" aria-label={`${industry.name}: ${industry.description}`}>
                  <div className="relative h-[420px] overflow-hidden sm:h-[510px]">
                    <img src={industry.image} alt={`${industry.name} industry solution`} width={industry.imageWidth} height={industry.imageHeight} loading="lazy" decoding="async" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.28) 34%, rgba(8,42,8,0.42) 64%, rgba(45,105,0,0.88) 100%)' }} />
                    <div className="absolute left-4 right-4 top-4 px-4 py-3 sm:left-5 sm:top-5">
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
            ))}
          </div>

          {/* Page indicators */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setCurrentPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === currentPage ? 'bg-[#B6FF00] w-6' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
