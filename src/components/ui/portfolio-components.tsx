import React from 'react';
import { motion } from 'framer-motion';

// Reusable Icon Component
export const PortfolioIcon = ({ 
  className = "w-8 h-8 mb-1", 
  color = "text-purple-500",
  children 
}: {
  className?: string;
  color?: string;
  children: React.ReactNode;
}) => (
  <div className={`${className} ${color}`}>
    {children}
  </div>
);

// Reusable Feature Card Component
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  delay = 0,
  className = ""
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 ${className}`}
  >
    <Icon className="w-10 h-10 mb-3" />
    <div className="font-semibold text-base text-gray-900 mb-1">{title}</div>
  </motion.div>
);

// Reusable Result Card Component
export const ResultCard = ({ 
  icon, 
  stat, 
  desc, 
  delay = 0,
  bgColor = "bg-indigo-50",
  textColor = "text-indigo-900",
  shadowColor = "hover:shadow-indigo-200"
}: {
  icon: string;
  stat: string;
  desc: string;
  delay?: number;
  bgColor?: string;
  textColor?: string;
  shadowColor?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`flex flex-col items-center justify-center ${bgColor} rounded-xl p-6 shadow-sm w-full transition-all duration-300 hover:scale-105 ${shadowColor}`}
  >
    <div className="text-2xl mb-2">{icon}</div>
    <div className={`text-xl font-bold ${textColor} mb-1`}>{stat}</div>
    <div className="text-gray-700 text-sm text-center leading-relaxed">{desc}</div>
  </motion.div>
);

// Reusable Section Component
export const PortfolioSection = ({ 
  children, 
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`project-section ${className}`}
  >
    {children}
  </motion.section>
);

// Reusable Hero Section Component
export const PortfolioHero = ({ 
  title, 
  description, 
  gradient = "from-indigo-900 via-blue-700 to-purple-200",
  className = ""
}: {
  title: string;
  description: string;
  gradient?: string;
  className?: string;
}) => (
  <section className={`relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} animate-fade-in mt-16 ${className}`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient.replace('to-', 'to-')}/60`}></div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 max-w-4xl mx-auto px-6 py-24 w-full text-left"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg text-left leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl font-normal text-gray-100 mb-6 max-w-3xl animate-fade-in text-left leading-relaxed">
        {description}
      </p>
    </motion.div>
  </section>
);

// Reusable Info Section Component
export const InfoSection = ({ 
  title, 
  children, 
  showFullInfo, 
  setShowFullInfo,
  className = ""
}: {
  title: string;
  children: React.ReactNode;
  showFullInfo: boolean;
  setShowFullInfo: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => (
  <div className={`max-w-6xl mx-auto px-4 mb-8 mt-16 ${className}`}>
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight"
    >
      {title}
    </motion.h2>
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-base md:text-lg text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-500 leading-relaxed ${showFullInfo ? '' : 'line-clamp-6'}`}
        style={!showFullInfo ? { 
          WebkitMaskImage: 'linear-gradient(180deg, #000 70%, transparent 100%)', 
          maskImage: 'linear-gradient(180deg, #000 70%, transparent 100%)' 
        } : {}}
      >
        {children}
      </motion.div>
      {!showFullInfo && (
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      )}
    </div>
         <motion.button
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       className="mt-6 text-blue-600 hover:text-blue-800 underline font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors duration-200"
       onClick={() => setShowFullInfo(!showFullInfo)}
     >
      {showFullInfo ? 'Show Less' : 'Read More'}
    </motion.button>
  </div>
);

// Reusable Image Component with Lazy Loading
export const PortfolioImage = ({ 
  src, 
  alt, 
  className = "",
  delay = 0
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="flex justify-center"
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 ${className}`}
    />
  </motion.div>
);

// Reusable Call to Action Component
export const CallToAction = ({ 
  title, 
  email = "surreshbeekhani26@gmail.com",
  gradient = "from-indigo-500 to-indigo-700",
  hoverGradient = "hover:from-indigo-600 hover:to-indigo-800",
  className = ""
}: {
  title: string;
  email?: string;
  gradient?: string;
  hoverGradient?: string;
  className?: string;
}) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-10 animate-bounce-slow ${className}`}
  >
    <div className="text-left">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>
      <motion.a
        href={`mailto:${email}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`inline-block bg-gradient-to-r ${gradient} ${hoverGradient} text-white font-semibold px-10 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300`}
      >
        Contact Us Today
      </motion.a>
    </div>
  </motion.section>
);

// Animation variants for consistent animations
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}; 