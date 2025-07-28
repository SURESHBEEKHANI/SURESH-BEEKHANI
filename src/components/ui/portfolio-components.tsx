import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced Icon Component with better accessibility
export const PortfolioIcon = ({ 
  className = "w-8 h-8 mb-1", 
  color = "text-purple-500",
  children,
  ariaLabel = "Feature icon"
}: {
  className?: string;
  color?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) => (
  <div 
    className={`${className} ${color}`}
    role="img"
    aria-label={ariaLabel}
  >
    {children}
  </div>
);

// Enhanced Feature Card with better animations and accessibility
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  delay = 0,
  className = "",
  description = ""
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  delay?: number;
  className?: string;
  description?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ 
      y: -5, 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    transition={{ 
      duration: 0.6, 
      delay,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true, margin: "-50px" }}
    className={`group flex flex-col items-center text-center p-6 transition-all duration-300 ${className}`}
    role="article"
    aria-label={`Feature: ${title}`}
  >
         <motion.div
       whileHover={{ 
         rotateY: 15, 
         rotateX: 10,
         scale: 1.1,
         z: 20
       }}
       transition={{ duration: 0.3 }}
       className="transform-style-preserve-3d"
     >
       <div className="w-8 h-8 mb-4 text-gradient drop-shadow-lg transform-gpu" style={{ 
         filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
         transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)'
       }}>
         <Icon className="w-full h-full" />
       </div>
     </motion.div>
    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
      {title}
    </h3>
    {description && (
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

// Enhanced Result Card with better visual hierarchy
export const ResultCard = ({ 
  icon, 
  stat, 
  desc, 
  delay = 0,
  bgColor = "bg-gradient-to-br from-indigo-50 to-purple-50",
  textColor = "text-indigo-900",
  shadowColor = "hover:shadow-indigo-200/50",
  borderColor = "border-indigo-100"
}: {
  icon: string;
  stat: string;
  desc: string;
  delay?: number;
  bgColor?: string;
  textColor?: string;
  shadowColor?: string;
  borderColor?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ 
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 }
    }}
    transition={{ 
      duration: 0.5, 
      delay,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true, margin: "-30px" }}
    className={`flex flex-col items-center justify-center ${bgColor} rounded-2xl p-6 shadow-lg w-full transition-all duration-300 ${shadowColor} border ${borderColor} backdrop-blur-sm`}
    role="article"
    aria-label={`Result: ${stat} - ${desc}`}
  >
    <motion.div 
      className="text-3xl mb-3"
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }}
    >
      {icon}
    </motion.div>
    <div className={`text-2xl font-bold ${textColor} mb-2`}>{stat}</div>
    <div className="text-gray-700 text-sm text-center leading-relaxed font-medium">{desc}</div>
  </motion.div>
);

// Enhanced Section Component with better spacing and animations
export const PortfolioSection = ({ 
  children, 
  className = "",
  delay = 0,
  id = ""
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay,
      type: "spring",
      stiffness: 50
    }}
    viewport={{ once: true, margin: "-100px" }}
    className={`project-section py-16 ${className}`}
    id={id}
  >
    {children}
  </motion.section>
);

// Enhanced Hero Section with parallax effect
export const PortfolioHero = ({ 
  title, 
  description, 
  gradient = "from-indigo-900 via-blue-700 to-purple-200",
  className = "",
  backgroundImage = ""
}: {
  title: string;
  description: string;
  gradient?: string;
  className?: string;
  backgroundImage?: string;
}) => (
  <section className={`relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} animate-fade-in mt-16 ${className}`}>
    {backgroundImage && (
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    )}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient.replace('to-', 'to-')}/80 backdrop-blur-sm`}></div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        type: "spring",
        stiffness: 50
      }}
      className="relative z-20 max-w-5xl mx-auto px-6 py-32 w-full text-left"
    >
      <motion.h1 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl text-left leading-tight"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl font-normal text-gray-100 mb-8 max-w-4xl animate-fade-in text-left leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Enhanced Info Section with better typography and animations
export const InfoSection = ({ 
  title, 
  children, 
  showFullInfo, 
  setShowFullInfo,
  className = "",
  titleColor = "text-gray-900"
}: {
  title: string;
  children: React.ReactNode;
  showFullInfo: boolean;
  setShowFullInfo: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  titleColor?: string;
}) => (
  <div className={`max-w-6xl mx-auto px-6 mb-12 mt-20 ${className}`}>
    <motion.h2 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-2xl md:text-3xl lg:text-4xl font-bold ${titleColor} mb-10 leading-tight`}
    >
      {title}
    </motion.h2>
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div 
          key={showFullInfo ? 'full' : 'partial'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`text-lg md:text-xl text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-500 leading-relaxed ${showFullInfo ? '' : 'line-clamp-6'}`}
          style={!showFullInfo ? { 
            WebkitMaskImage: 'linear-gradient(180deg, #000 75%, transparent 100%)', 
            maskImage: 'linear-gradient(180deg, #000 75%, transparent 100%)' 
          } : {}}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {!showFullInfo && (
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      )}
    </div>
         <motion.button
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       className="mt-8 text-blue-600 hover:text-blue-800 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:ring-offset-2 rounded-lg transition-all duration-200 px-4 py-2"
       onClick={() => setShowFullInfo(!showFullInfo)}
       aria-expanded={showFullInfo}
       aria-controls="info-content"
     >
       {showFullInfo ? 'Show Less' : 'Read More'}
     </motion.button>
  </div>
);

// Enhanced Image Component with lazy loading and better animations
export const PortfolioImage = ({ 
  src, 
  alt, 
  className = "",
  delay = 0,
  priority = false,
  width,
  height
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  priority?: boolean;
  width?: string | number;
  height?: string | number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
    transition={{ 
      duration: 0.8, 
      delay,
      type: "spring",
      stiffness: 50
    }}
    viewport={{ once: true, margin: "-50px" }}
    className="flex justify-center group"
  >
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={`w-full h-auto rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 ${className}`}
      onLoad={(e) => {
        // Add a subtle animation when image loads
        const target = e.target as HTMLImageElement;
        target.style.opacity = '0';
        target.style.transform = 'scale(0.95)';
        setTimeout(() => {
          target.style.transition = 'all 0.5s ease';
          target.style.opacity = '1';
          target.style.transform = 'scale(1)';
        }, 100);
      }}
    />
  </motion.div>
);

// Enhanced Call to Action with better visual appeal
export const CallToAction = ({ 
  title, 
  email = "surreshbeekhani26@gmail.com",
  gradient = "from-indigo-500 to-indigo-700",
  hoverGradient = "hover:from-indigo-600 hover:to-indigo-800",
  className = "",
  subtitle = ""
}: {
  title: string;
  email?: string;
  gradient?: string;
  hoverGradient?: string;
  className?: string;
  subtitle?: string;
}) => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`bg-gradient-to-r from-gray-50 to-white rounded-3xl mx-4 md:mx-8 py-16 ${className}`}
  >
    <div className="max-w-4xl mx-auto text-center px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
             <motion.a
         href={`mailto:${email}`}
         whileHover={{ 
           scale: 1.05,
           y: -2,
           transition: { duration: 0.2 }
         }}
         whileTap={{ scale: 0.95 }}
         className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-2xl shadow-xl text-xl transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/50"
         aria-label={`Contact us via email: ${email}`}
       >
         Contact Us Today
       </motion.a>
    </div>
  </motion.section>
);

// Enhanced animation variants for consistent animations
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, type: "spring", stiffness: 50 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, type: "spring", stiffness: 100 }
};

// New component for better section headers
export const SectionHeader = ({ 
  title, 
  subtitle = "",
  className = "",
  delay = 0
}: {
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`text-center mb-12`}
  >
    <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-4 leading-tight ${className}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

// New component for better grid layouts
export const ResponsiveGrid = ({ 
  children, 
  className = "",
  cols = { sm: 1, md: 2, lg: 3 }
}: {
  children: React.ReactNode;
  className?: string;
  cols?: { sm?: number; md?: number; lg?: number };
}) => (
  <div className={`grid grid-cols-${cols.sm || 1} md:grid-cols-${cols.md || 2} lg:grid-cols-${cols.lg || 3} gap-6 md:gap-8 ${className}`}>
    {children}
  </div>
); 