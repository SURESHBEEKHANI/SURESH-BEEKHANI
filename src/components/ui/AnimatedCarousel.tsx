import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useAnimations';

interface UseCase {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface AnimatedCarouselProps {
  useCases: UseCase[];
  title: string;
  subtitle: string;
  accentColor?: string;
  itemsPerView?: number;
  appearance?: 'velnix-dark';
}

const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
  useCases,
  title,
  subtitle,
  accentColor = 'green',
  itemsPerView = 3,
  appearance,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduce = useReducedMotion();
  const isVelnixDark = appearance === 'velnix-dark';
  const ease = [0.22, 1, 0.36, 1] as const;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === useCases.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className={`relative overflow-hidden py-10 sm:py-14 md:py-16 lg:py-20 ${
        isVelnixDark ? 'bg-[#050505] font-display text-white' : 'bg-white'
      }`}
      style={isVelnixDark ? {
        background: 'radial-gradient(ellipse 60% 70% at 96% 10%, rgba(182,255,0,0.09) 0%, rgba(125,204,0,0.025) 42%, transparent 76%), radial-gradient(ellipse 50% 60% at 5% 85%, rgba(125,204,0,0.12) 0%, rgba(125,204,0,0.04) 40%, transparent 76%), #050505',
      } : undefined}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isVelnixDark ? (
          <>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B6FF00]/15 to-transparent" />
            <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#7DCC00]/[0.04] blur-[100px]" />
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#ff0ea3]/5 to-transparent rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-ai-cyan/5 to-transparent rounded-full blur-[120px] opacity-40"></div>
          </>
        )}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header Row */}
        <motion.div 
          className="mb-12 lg:mb-16"
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={isVelnixDark ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {isVelnixDark ? (
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
              ) : (
                <div
                  className="w-2 sm:w-3 h-6 sm:h-8 rounded-none"
                  style={{
                    background: '#ff0ea3',
                    transform: 'skewX(-15deg)'
                  }}
                ></div>
              )}
              <span className={`font-bold uppercase ${
                isVelnixDark ? 'text-[0.65rem] tracking-[0.25em] text-[#B6FF00]' : 'text-[#ff0ea3] text-sm tracking-widest'
              }`}>Innovation Hub</span>
            </div>
            <h2 className={`text-3xl font-display leading-tight sm:text-4xl lg:text-5xl ${
              isVelnixDark ? 'font-black tracking-[-0.04em] text-white' : 'font-bold text-[#050729]'
            }`}>
              {title}
            </h2>
            <p className={`max-w-2xl text-base sm:text-lg ${
              isVelnixDark ? 'font-light leading-8 text-white/60' : 'text-gray-600 leading-relaxed'
            }`}>
              {subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Side: Interactive List */}
          <div className="space-y-2.5 flex flex-col">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => setCurrentIndex(index)}
                aria-pressed={currentIndex === index}
                className={`group relative flex w-full max-w-lg items-start gap-3 overflow-hidden rounded-none px-4 py-2.5 text-left transition-all duration-300 sm:gap-4 sm:py-3 ${
                  isVelnixDark
                    ? currentIndex === index
                      ? 'border border-[#B6FF00]/25 bg-white/[0.04] shadow-[0_0_30px_rgba(182,255,0,0.05)]'
                      : 'border border-transparent hover:border-white/10 hover:bg-white/[0.02]'
                    : currentIndex === index
                      ? 'bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] ring-1 ring-[#ff0ea3]/15 text-[#ff0ea3]'
                      : 'hover:bg-gray-50/60 hover:translate-x-1'
                }`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-none text-xs font-bold transition-all duration-300 sm:h-9 sm:w-9 ${
                  isVelnixDark
                    ? currentIndex === index
                      ? 'border border-[#B6FF00] bg-[#B6FF00] text-[#050505]'
                      : 'border border-white/10 bg-white/[0.04] text-white/45 group-hover:border-[#B6FF00]/40 group-hover:text-[#B6FF00]'
                    : currentIndex === index
                      ? 'bg-[#ff0ea3] text-white rotate-6 scale-105 shadow-md shadow-[#ff0ea3]/20'
                      : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                }`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className={`text-sm font-bold transition-colors duration-200 sm:text-base ${
                    isVelnixDark
                      ? currentIndex === index ? 'text-[#B6FF00]' : 'text-white group-hover:text-[#B6FF00]'
                      : currentIndex === index ? 'text-[#ff0ea3]' : 'text-[#050729]'
                  }`}>
                    {useCase.title}
                  </h3>
                  {currentIndex === index && (
                    <motion.p 
                      initial={shouldReduce ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={shouldReduce ? { duration: 0 } : { duration: 0.35, ease }}
                      className={`pr-2 text-xs font-normal leading-relaxed sm:text-sm ${
                        isVelnixDark ? 'text-white/55' : 'text-gray-500'
                      }`}
                    >
                      {useCase.description}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Showcase Carousel */}
          <div className="relative h-full min-h-[24rem] w-full sm:min-h-[31rem] lg:min-h-[28rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={shouldReduce ? false : { opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={shouldReduce ? undefined : { opacity: 0, scale: 0.99, y: -8 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
                className="absolute inset-0"
              >
                <div className={`group/card flex h-full w-full flex-col overflow-hidden rounded-none border ${
                  isVelnixDark
                    ? 'border-white/10 bg-[#111111] shadow-[0_24px_70px_-30px_rgba(182,255,0,0.16)]'
                    : 'border-slate-100 bg-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)]'
                }`}>
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={useCases[currentIndex].image}
                      alt={useCases[currentIndex].alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.03]"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      isVelnixDark ? 'from-[#050505]/90 via-[#050505]/10 to-transparent' : 'from-[#050729]/80 via-transparent to-transparent opacity-60'
                    }`} />
                    
                    {/* Navigation Overlays */}
                    <div className="absolute bottom-6 right-6 flex gap-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        aria-label="Previous use case"
                        className={`flex h-10 w-10 items-center justify-center rounded-none text-white backdrop-blur-md transition-all duration-300 ${
                          isVelnixDark ? 'border border-white/15 bg-black/35 hover:border-[#B6FF00] hover:bg-[#B6FF00] hover:text-[#050505]' : 'bg-white/20 hover:bg-[#ff0ea3]'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        aria-label="Next use case"
                        className={`flex h-10 w-10 items-center justify-center rounded-none text-white backdrop-blur-md transition-all duration-300 ${
                          isVelnixDark ? 'border border-white/15 bg-black/35 hover:border-[#B6FF00] hover:bg-[#B6FF00] hover:text-[#050505]' : 'bg-white/20 hover:bg-[#ff0ea3]'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className={`relative space-y-3 p-4 sm:p-6 ${
                    isVelnixDark ? 'bg-[#111111]' : 'bg-white'
                  }`}>
                     {/* Decorative Top Line */}
                    <div className={`absolute left-0 top-0 h-px w-16 ${
                      isVelnixDark ? 'bg-[#B6FF00]' : 'h-1 bg-[#ff0ea3]'
                    }`}></div>
                    
                    <h3 className={`text-lg font-bold sm:text-xl ${
                      isVelnixDark ? 'tracking-[-0.03em] text-white' : 'text-[#050729]'
                    }`}>
                      {useCases[currentIndex].title}
                    </h3>
                    <p className={`text-xs leading-relaxed sm:text-sm ${
                      isVelnixDark ? 'text-white/60' : 'text-gray-600'
                    }`}>
                      {useCases[currentIndex].description}
                    </p>
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

export default AnimatedCarousel; 