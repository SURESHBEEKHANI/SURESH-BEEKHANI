import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  highlightText: string;
  backgroundImage?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  buttonText?: string;
  buttonLink?: string;
  children?: React.ReactNode;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title,
  subtitle,
  highlightText,
  backgroundImage,
  gradientFrom = 'from-blue-900',
  gradientVia = 'via-cyan-800',
  gradientTo = 'to-blue-900',
  buttonText = 'Talk to an Expert',
  buttonLink = 'mailto:sureshbeekhani26@gmail.com',
  children
}) => {
  return (
    <section className={`relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} overflow-hidden`}>
      {/* Background image overlay */}
      {backgroundImage && (
        <div className={`absolute inset-0 opacity-20 bg-[url('${backgroundImage}')] bg-cover bg-center`} />
      )}
      
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Column */}
        <motion.div 
          className="flex-1 text-white space-y-8 w-4/5 flex flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {title.split(highlightText).map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < title.split(highlightText).length - 1 && (
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {highlightText}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-2xl leading-relaxed text-gray-100 max-w-2xl text-left mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
            
            {/* Button */}
            <motion.div 
              className="flex space-x-4 pt-6 w-full justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a 
                href={buttonLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg inline-block"
              >
                {buttonText}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {children}
      </div>
    </section>
  );
};

export default AnimatedHero; 