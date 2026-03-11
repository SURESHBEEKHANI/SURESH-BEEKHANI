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
      prevIndex === useCases.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - itemsPerView : prevIndex - 1
    );
  };

  const visibleItems = useCases.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-cyan-50/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center space-y-3 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-2">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-cyan-200">
              Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 items-center justify-center border border-cyan-300"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous use cases"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 items-center justify-center border border-cyan-300"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next use cases"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
          
          {/* Content Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <AnimatePresence mode="wait">
              {visibleItems.map((useCase, index) => (
                <motion.div
                  key={`${useCase.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-cyan-300 h-full flex flex-col">
                    <motion.div 
                      className="relative h-44 sm:h-48 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={useCase.image}
                        alt={useCase.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-base text-gray-900 mb-2 leading-snug group-hover:text-cyan-600 transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed flex-1">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(useCases.length / itemsPerView) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerView)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i * itemsPerView 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-6' 
                    : 'bg-gray-300 w-1.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCarousel; 