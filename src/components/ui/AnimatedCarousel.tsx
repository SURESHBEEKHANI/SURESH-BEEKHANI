import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
}

const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
  useCases,
  title,
  subtitle,
  accentColor = 'green',
  itemsPerView = 3
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const visibleItems = useCases.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#ff0ea3]/5 to-transparent rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-ai-cyan/5 to-transparent rounded-full blur-[120px] opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header Row */}
        <motion.div 
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-2 sm:w-3 h-6 sm:h-8 rounded-none"
                style={{
                  background: '#ff0ea3',
                  transform: 'skewX(-15deg)'
                }}
              ></div>
              <span className="text-[#ff0ea3] font-bold text-sm uppercase tracking-widest">Innovation Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#050729] leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: Interactive List */}
          <div className="space-y-2.5 flex flex-col">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => setCurrentIndex(index)}
                className={`group flex items-start gap-3 sm:gap-4 text-left px-4 py-2.5 sm:py-3 rounded-none transition-all duration-500 w-full max-w-lg relative overflow-hidden ${
                  currentIndex === index 
                    ? 'bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] ring-1 ring-[#ff0ea3]/15 text-[#ff0ea3]' 
                    : 'hover:bg-gray-50/60 hover:translate-x-1'
                }`}
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-none flex items-center justify-center flex-shrink-0 transition-all duration-500 transform ${
                  currentIndex === index ? 'bg-[#ff0ea3] text-white rotate-6 scale-105 shadow-md shadow-[#ff0ea3]/20' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                }`}>
                  <span className="text-xs sm:text-sm font-bold">{index + 1}</span>
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className={`font-bold text-sm sm:text-base transition-colors duration-300 ${
                    currentIndex === index ? 'text-[#ff0ea3]' : 'text-[#050729]'
                  }`}>
                    {useCase.title}
                  </h3>
                  {currentIndex === index && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-500 text-xs sm:text-sm leading-relaxed pr-2 font-normal"
                    >
                      {useCase.description}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Showcase Carousel */}
          <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="h-full w-full bg-white rounded-none overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col group/card">
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={useCases[currentIndex].image}
                      alt={useCases[currentIndex].alt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050729]/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Navigation Overlays */}
                    <div className="absolute bottom-6 right-6 flex gap-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="w-10 h-10 rounded-none bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#ff0ea3] transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="w-10 h-10 rounded-none bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#ff0ea3] transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 space-y-3 bg-white relative">
                     {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-16 h-1 bg-[#ff0ea3]"></div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-[#050729]">
                      {useCases[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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