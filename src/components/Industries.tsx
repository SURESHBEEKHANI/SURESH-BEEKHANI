import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Utensils,
  Compass,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useAnimations';

/* ─────────────────────────────────────────────────────────────
   VELNIX LOCKED COLOR SYSTEM
───────────────────────────────────────────────────────────── */
const C = {
  BLACK: '#050505',
  GRAPHITE: '#111111',
  WHITE: '#FFFFFF',
  LIME: '#B6FF00',
  DEEP_GREEN: '#7DCC00',
  MUTED: '#64748B',
} as const;

/* ─────────────────────────────────────────────────────────────
   LOCKED CONTENT — 8 INDUSTRIES (VERBATIM SOURCE OF TRUTH)
───────────────────────────────────────────────────────────── */
interface Industry {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  link: string;
}

const INDUSTRIES: Industry[] = [
  // ── Row 1 ──
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Advanced technology for healthcare excellence.',
    icon: HeartPulse,
    link: '/healthcare',
  },
  {
    id: 'fintech',
    name: 'Fintech',
    description: 'Financial technology solutions for modern markets.',
    icon: Landmark,
    link: '/fintech',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'We promote education through innovative technology.',
    icon: GraduationCap,
    link: '/education',
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce',
    description: 'We enhance online commerce with tailored solutions.',
    icon: ShoppingCart,
    link: '/e-commerce',
  },

  // ── Row 2 ──
  {
    id: 'food-groceries',
    name: 'Food & Groceries',
    description: 'Tech solutions revolutionizing food and grocery.',
    icon: Utensils,
    link: '/food-and-groceries',
  },
  {
    id: 'travel-tourism',
    name: 'Travel & Tourism',
    description: 'Digital solutions for travel and hospitality.',
    icon: Compass,
    link: '/travel-and-tourism',
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Innovative insurance technology solutions.',
    icon: ShieldCheck,
    link: '/insurance',
  },
  {
    id: 'on-demand',
    name: 'On-Demand',
    description: 'Instant solutions tailored to your needs.',
    icon: Zap,
    link: '/on-demand',
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN INDUSTRIES COMPONENT
───────────────────────────────────────────────────────────── */
const Industries: React.FC = () => {
  // Reference screenshot shows Education visually emphasized with the signature Velnix Lime
  const [activeId, setActiveId] = useState<string>('education');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="industries"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden scroll-mt-20"
      style={{ background: C.WHITE }}
      aria-labelledby="industries-heading"
    >
      {/* ── Atmospheric Ambient Lighting (Left Side Glow) ────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(182, 255, 0, 0.09) 0%, rgba(182, 255, 0, 0.025) 50%, transparent 70%)',
          filter: 'blur(75px)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* ── Section Heading (Upper-Left, Editorial) ──────────── */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight"
            style={{ color: C.BLACK }}
          >
            Industries
          </h2>
        </motion.div>

        {/* ── 4-Column × 2-Row Industry Grid ───────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-9 gap-y-10 sm:gap-y-12">
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = industry.icon;
            const isEmphasized = (hoveredId === industry.id) || (!hoveredId && activeId === industry.id);

            return (
              <motion.article
                key={industry.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.35),
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredId(industry.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveId(industry.id)}
                className="group relative flex items-start gap-4 sm:gap-4.5 cursor-pointer outline-none focus-within:ring-2 focus-within:ring-[#B6FF00] rounded-xl p-1 -m-1 transition-all"
              >
                <Link
                  to={industry.link}
                  className="flex items-start gap-4 sm:gap-4.5 w-full text-left outline-none"
                  aria-label={`${industry.name} industry: ${industry.description}`}
                >
                  {/* ── Dark Square Icon Container (~74px × 74px) ── */}
                  <div
                    className="w-[70px] h-[70px] sm:w-[76px] sm:h-[76px] rounded-lg flex items-center justify-center flex-shrink-0 relative transition-all duration-250"
                    style={{
                      background: C.GRAPHITE,
                      border: isEmphasized ? `1.5px solid ${C.LIME}` : '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: isEmphasized
                        ? '0 6px 20px rgba(182, 255, 0, 0.22), 0 2px 6px rgba(0,0,0,0.1)'
                        : '0 2px 8px rgba(0, 0, 0, 0.06)',
                      transform: isEmphasized && !prefersReducedMotion ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                  >
                    {/* Subtle corner indicator when active */}
                    {isEmphasized && (
                      <span
                        className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                        style={{ background: C.LIME }}
                        aria-hidden="true"
                      />
                    )}

                    <IconComponent
                      className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-250"
                      strokeWidth={1.7}
                      style={{
                        color: isEmphasized ? C.LIME : C.WHITE,
                      }}
                    />
                  </div>

                  {/* ── Content: Title & Description ───────────── */}
                  <div className="flex flex-col pt-1 min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h3
                        className="text-base sm:text-lg font-bold leading-tight tracking-tight transition-colors duration-200"
                        style={{
                          color: isEmphasized ? C.BLACK : C.BLACK,
                        }}
                      >
                        {industry.name}
                      </h3>

                      {/* Small subtle directional arrow on hover */}
                      <ArrowUpRight
                        className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0"
                        style={{
                          color: C.DEEP_GREEN,
                          transform: isEmphasized && !prefersReducedMotion ? 'translate(1px, -1px)' : 'none',
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    <p
                      className="text-[13px] sm:text-sm leading-relaxed"
                      style={{ color: C.MUTED, lineHeight: 1.55 }}
                    >
                      {industry.description}
                    </p>
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
