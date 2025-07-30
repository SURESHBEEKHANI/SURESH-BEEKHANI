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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
            {title}
          </h2>
          <div className="flex justify-center mb-0">
            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
          <motion.button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-24 transform -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous use cases"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-24 transform -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next use cases"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-6 sm:hidden">
            {Array.from({ length: Math.ceil(useCases.length / itemsPerView) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i * itemsPerView ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          
          {/* Content Carousel */}
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <AnimatePresence mode="wait">
              {visibleItems.map((useCase, index) => (
                <motion.div
                  key={`${useCase.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full sm:w-80 space-y-3 sm:space-y-4"
                >
                  <motion.div 
                    className="relative h-32 sm:h-40 lg:h-48 overflow-hidden rounded-lg sm:rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={useCase.image}
                      alt={useCase.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="px-2 sm:px-0">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2 leading-tight">{useCase.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Mobile Swipe Instructions */}
          <div className="text-center mt-6 sm:hidden">
            <p className="text-sm text-gray-500">Swipe to see more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCarousel; 