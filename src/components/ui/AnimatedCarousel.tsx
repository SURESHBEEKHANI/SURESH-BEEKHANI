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
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
                 <motion.div 
           className="text-center space-y-6 mb-16"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
                       <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
              {title}
            </h2>
            <div className="flex justify-center mb-0">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {subtitle}
            </p>
        </motion.div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-24 transform -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-800 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous use cases"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-24 transform -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-800 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next use cases"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
          
          {/* Content Carousel */}
          <div className="flex space-x-8 px-16 overflow-hidden">
            <AnimatePresence mode="wait">
              {visibleItems.map((useCase, index) => (
                <motion.div
                  key={`${useCase.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 space-y-4"
                >
                  <motion.div 
                    className="relative h-48 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={useCase.image}
                      alt={useCase.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCarousel; 