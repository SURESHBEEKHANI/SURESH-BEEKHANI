import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useAnimations';
import { TechIcon } from './TechIcon';
import {
  TECH_CATEGORIES,
  ALL_TECHNOLOGIES,
  type Technology,
  type TechCategory,
} from './techStackData';

export interface TechnologyStackProps {
  /** Array of category IDs to display (e.g. ECOMMERCE_STACK_CATEGORIES). If omitted, displays all categories. */
  categories?: string[];
  /** Optional custom section eyebrow text */
  eyebrow?: string;
  /** Optional custom section heading */
  heading?: string;
  /** Optional custom section subheading */
  subheading?: string;
  /** Optional extra className for outer container */
  className?: string;
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({
  categories,
  eyebrow = 'Engineered for Performance',
  heading = 'The Technologies Powering Velnix Systems',
  subheading = 'Production-grade frameworks, foundational AI models, cloud infrastructure, and enterprise integrations engineered for resilience and scale.',
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Filter available categories based on prop
  const activeCategories: TechCategory[] = useMemo(() => {
    if (!categories || categories.length === 0) {
      return TECH_CATEGORIES;
    }
    const catMap = new Map(TECH_CATEGORIES.map((c) => [c.id, c]));
    return categories
      .map((id) => catMap.get(id))
      .filter((c): c is TechCategory => Boolean(c));
  }, [categories]);

  // Active tab state (defaults to first available category)
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    activeCategories[0]?.id || 'frontend'
  );

  // Filtered technologies for active category (top 10 only)
  const filteredTechnologies: Technology[] = useMemo(() => {
    return ALL_TECHNOLOGIES.filter((t) => t.categoryId === activeCategoryId).slice(0, 10);
  }, [activeCategoryId]);

  // Current category info
  const currentCategory = activeCategories.find((c) => c.id === activeCategoryId);

  return (
    <section
      id="technology-stack"
      aria-label="Technology Stack"
      className={`font-display relative w-full text-white py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-white/10 ${className}`}
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" style={{ boxShadow: '0 0 8px #B6FF00' }} />
              {eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {heading.includes('Velnix Systems') ? (
                <>
                  {heading.split('Velnix Systems')[0]}
                  <span className="text-[#B6FF00]">Velnix Systems</span>
                  {heading.split('Velnix Systems')[1]}
                </>
              ) : (
                heading
              )}
            </h2>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
              {subheading}
            </p>
          </motion.div>
        </div>

        {/* Category Navigation Tabs */}
        {activeCategories.length > 1 && (
          <div className="mb-10">
            {/* Scrollable Container */}
            <div
              role="tablist"
              aria-label="Technology Stack Categories"
              className="flex flex-wrap items-center justify-center gap-2 px-1"
            >
              {activeCategories.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                const count = ALL_TECHNOLOGIES.filter((t) => t.categoryId === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    role="tab"
                    id={`tab-${cat.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${cat.id}`}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border select-none ${
                      isActive
                        ? 'bg-[#B6FF00] text-[#050505] border-[#B6FF00] font-semibold shadow-[0_0_20px_rgba(182,255,0,0.25)]'
                        : 'bg-[#111111] text-white/70 border-white/10 hover:border-white/30 hover:text-white hover:bg-[#181818]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Technology Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            id={`panel-${activeCategoryId}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategoryId}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4"
          >
            {filteredTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#0d0d0d] border border-white/10 transition-all duration-300 hover:border-[#B6FF00]/50 hover:bg-[#121212] hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(182,255,0,0.12)] cursor-default"
              >
                {/* Top: Icon + Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#B6FF00]/40 group-hover:bg-[#B6FF00]/10 transition-colors p-2 shrink-0">
                    <TechIcon technology={tech} size={24} className="w-full h-full" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/40 group-hover:text-[#B6FF00]/80 transition-colors truncate max-w-[90px] text-right">
                    {tech.label}
                  </span>
                </div>

                {/* Bottom: Name */}
                <div className="mt-1">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#B6FF00] transition-colors leading-snug truncate">
                    {tech.name}
                  </h3>
                </div>

                {/* Subtle Hover Corner Accent */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-bl from-[#B6FF00]/20 to-transparent"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
};

export default TechnologyStack;
