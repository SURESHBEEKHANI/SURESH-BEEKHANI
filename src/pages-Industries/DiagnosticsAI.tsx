import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

// Custom hook for FAQ state management
const useFAQState = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = useCallback((id: number) => {
    setOpenFAQ(prev => prev === id ? null : id);
  }, []);
  
  return { openFAQ, toggleFAQ };
};

// Custom hook for carousel state management
const useCarouselState = (totalItems: number, itemsPerView: number = 3) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => prev === totalItems - itemsPerView ? 0 : prev + 1);
  }, [totalItems, itemsPerView]);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? totalItems - itemsPerView : prev - 1);
  }, [totalItems, itemsPerView]);
  
  return { currentIndex, nextSlide, prevSlide };
};

// Custom hook for mobile detection and optimization
const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTablet };
};

// Custom AI Diagnostics Icon Component
const AIDiagnosticsIcon: React.FC<{ className?: string }> = React.memo(({ className = "w-24 h-24 sm:w-32 sm:h-32" }) => (
  <motion.div 
    className={`${className} text-white/90`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      className="w-full h-full"
    >
      {/* Main Brain/Neural Network */}
      <path 
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" 
        stroke="currentColor" 
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Neural Network Nodes */}
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
      <circle cx="8" cy="16" r="1" fill="currentColor" />
      <circle cx="16" cy="16" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      
      {/* Connection Lines */}
      <path d="M8 8L12 12L16 8" stroke="currentColor" strokeWidth="1" />
      <path d="M8 16L12 12L16 16" stroke="currentColor" strokeWidth="1" />
      <path d="M8 8L12 12L8 16" stroke="currentColor" strokeWidth="1" />
      <path d="M16 8L12 12L16 16" stroke="currentColor" strokeWidth="1" />
      
      {/* Medical Cross */}
      <path d="M12 6v12" stroke="currentColor" strokeWidth="2" />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2" />
      
      {/* Pulse Lines */}
      <path d="M4 4L6 6L8 4L10 6L12 4" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M12 20L14 18L16 20L18 18L20 20" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  </motion.div>
));

AIDiagnosticsIcon.displayName = 'AIDiagnosticsIcon';

// Data constants for better organization
const USE_CASES_DATA = [
  {
    id: 0,
    title: "Medical Image Analysis",
    description: "AI analyzes X-rays, MRIs, and CT scans to detect tumors, fractures, and infections with high accuracy.",
    image: "/image/pages_img/Medical-Image-Analysis.webp",
    alt: "Medical Image Analysis",
  },
  {
    id: 1,
    title: "Early Disease Detection",
    description: "ML models identify early signs of cancer, diabetes, and cardiovascular conditions for timely intervention.",
    image: "/image/pages_img/Early-Disease-Detection.jpg",
    alt: "Early Disease Detection",
  },
  {
    id: 2,
    title: "Predictive Diagnostics",
    description: "AI predicts patient risk factors by analyzing health records and lifestyle data.",
    image: "/image/pages_img/Predictive-Diagnostics.avif",
    alt: "Predictive Diagnostics",
  },
  {
    id: 3,
    title: "Pathology Automation",
    description: "Automated pathology slide analysis speeds diagnosis and reduces human error.",
    image: "/image/pages_img/Pathology-Automation.webp",
    alt: "Pathology Automation",
  },
  {
    id: 5,
    title: "Genomic Data Analysis",
    description: "AI analyzes genetic data to identify mutations and recommend personalized treatments.",
    image: "/image/pages_img/Genomic-Data-Analysis.jpg",
    alt: "Genomic Data Analysis",
  },
  {
    id: 6,
    title: "Clinical Decision Support",
    description: "AI systems assist doctors with evidence-based recommendations and diagnostic suggestions.",
    image: "/image/pages_img/Clinical-Decision-Support.jpg",
    alt: "Clinical Decision Support",
  },
  {
    id: 7,
    title: "Workflow Optimization",
    description: "AI streamlines diagnostic workflows and automates administrative tasks in healthcare.",
    image: "/image/pages_img/Workflow-Optimization.jpg",
    alt: "Workflow Optimization",
  },
  {
    id: 9,
    title: "Anomaly Detection in Lab Results",
    description: "AI flags abnormal lab results and trends for early intervention and better outcomes.",
    image: "/image/pages_img/Anomaly-Detection.jpg",
    alt: "Anomaly Detection in Lab Results",
  },
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is AI Diagnostics?",
    answer: "AI Diagnostics uses artificial intelligence and machine learning to assist in disease detection, analysis, and prediction.",
  },
  {
    id: 2,
    question: "How does AI improve diagnostic accuracy?",
    answer: "AI processes vast medical data, recognizes complex patterns, and reduces human error for more accurate diagnoses.",
  },
  {
    id: 3,
    question: "Is AI Diagnostics safe and reliable?",
    answer: "When properly validated and used with clinical expertise, AI diagnostics are highly reliable and improve patient safety.",
  },
  {
    id: 4,
    question: "Can AI replace doctors in diagnostics?",
    answer: "AI supports healthcare professionals but doesn't replace them. Final diagnoses remain with clinicians.",
  },
  {
    id: 5,
    question: "What are the challenges of AI in diagnostics?",
    answer: "Challenges include data privacy, system integration, algorithm transparency, and ensuring unbiased care.",
  },
];

const BENEFITS_DATA = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Speed & Precision",
    description: "Deliver rapid, accurate diagnostic results minimizing delays and improving outcomes.",
    bgColor: "bg-green-300/20",
    textColor: "text-green-300",
    borderColor: "hover:border-green-300"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
      </svg>
    ),
    title: "Operational Efficiency",
    description: "Reduce costs by automating diagnostics and streamlining workflows.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
      </svg>
    ),
    title: "Early Detection",
    description: "Identify health risks sooner for timely intervention and better outcomes.",
    bgColor: "bg-green-300/20",
    textColor: "text-green-300",
    borderColor: "hover:border-green-300"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
      </svg>
    ),
    title: "Scalability",
    description: "Deploy AI diagnostics at scale supporting large populations and remote locations.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
      </svg>
    ),
    title: "Consistent Quality",
    description: "Ensure reliable, standardized diagnostic results across teams and sites.",
    bgColor: "bg-green-300/20",
    textColor: "text-green-300",
    borderColor: "hover:border-green-300"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    title: "Decision Support",
    description: "Empower clinicians with data-driven recommendations for confident decisions.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  }
];

const STATS_DATA = [
  {
    value: "3+",
    label: "Years of AI Experience",
    description: "Hands-on success building and deploying AI diagnostics."
  },
  {
    value: "20+",
    label: "Diagnostics Projects",
    description: "Tailored AI diagnostics solutions for unique business challenges."
  },
  {
    value: "30+",
    label: "Custom AI Models",
    description: "Advanced AI models for imaging, analytics, and workflow automation."
  },
  {
    value: "10+",
    label: "Satisfied Clients",
    description: "Organizations with improved accuracy, efficiency, and business value."
  },
  {
    value: "🌍",
    label: "Global Impact",
    description: "Scalable AI diagnostics solutions worldwide."
  }
];

// Color configuration for better maintainability
const CARD_COLORS = [
  "from-cyan-50 to-blue-100 border-cyan-200",
  "from-green-50 to-emerald-100 border-green-200", 
  "from-purple-50 to-violet-100 border-purple-200",
  "from-yellow-50 to-amber-100 border-yellow-200",
  "from-pink-50 to-rose-100 border-pink-200",
  "from-indigo-50 to-blue-100 border-indigo-200"
];

const ICON_COLORS = [
  "from-cyan-500 to-blue-600",
  "from-green-500 to-emerald-600",
  "from-purple-500 to-violet-600", 
  "from-yellow-500 to-amber-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600"
];

// Memoized components for better performance
const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Diagnostics-in.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
      <div className="flex-1 text-white space-y-6 sm:space-y-8">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
            AI in Diagnostics
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
            Empower your business with next-generation AI diagnostics solutions driving innovation in healthcare, medical imaging, predictive analytics, and automated diagnostics for superior accuracy and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
            <a
              href="/#contact"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 active:scale-[0.98] text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300 text-base sm:text-lg text-center min-h-[44px] flex items-center justify-center"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        {/* Optionally, you can add an image or illustration here if needed */}
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const MainContentSection: React.FC = React.memo(() => {
  const { isMobile } = useMobileOptimization();
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Image */}
          <motion.div 
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30"></div>
              <motion.img
                src="/image/pages_img/Transformin-Diagnostics-with-AI.jpg"
                alt="Illustration of AI transforming diagnostics"
                className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/20"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900">
              Transforming Diagnostics with AI
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
              Our AI-powered platform leverages deep learning and predictive analytics to enable earlier detection, faster diagnostics, and smarter clinical decisions. By analyzing medical data including imaging, lab results, and clinical notes our system delivers accurate, real-time insights. Continuous learning ensures it evolves with new discoveries, improving outcomes and reducing diagnostic errors.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
});

MainContentSection.displayName = 'MainContentSection';

const CapabilitiesSection: React.FC = React.memo(() => {
  const benefits = useMemo(() => BENEFITS_DATA, []);
  const { isMobile } = useMobileOptimization();
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Key Capabilities & Benefits</h2>
          <div className="flex justify-center mb-0">
            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Unlock AI-powered speed, accuracy, and efficiency in diagnostics
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl border flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] transition-transform duration-300 hover:scale-[1.02] touch-manipulation`}>
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${iconColor} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto`}>
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-800 text-center leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
});

CapabilitiesSection.displayName = 'CapabilitiesSection';

const WhyChooseMeSection: React.FC = React.memo(() => {
  const stats = useMemo(() => STATS_DATA, []);
  const { isMobile } = useMobileOptimization();
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Why Choose Me?</h2>
          <div className="flex justify-center mb-0">
            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Trusted expertise in AI diagnostics for forward-thinking organizations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl border flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] transition-transform duration-300 hover:scale-[1.02] touch-manipulation`}>
                <span className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${iconColor} text-white mb-2`}>
                  <span className="text-lg sm:text-2xl">{stat.value}</span>
                </span>
                <span className="font-bold text-gray-900 text-base sm:text-lg text-center leading-tight">{stat.label}</span>
                <p className="text-sm sm:text-base text-gray-800 text-center leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
});

WhyChooseMeSection.displayName = 'WhyChooseMeSection';

const DiagnosticsAI: React.FC = () => {
  // Custom hooks for state management
  const { openFAQ, toggleFAQ } = useFAQState();
  const { currentIndex, nextSlide, prevSlide } = useCarouselState(USE_CASES_DATA.length);
  const { isMobile } = useMobileOptimization();
  
  // Memoized data to prevent unnecessary re-renders
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  // Performance optimization for mobile
  useEffect(() => {
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--motion-reduce', '1');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 text-gray-900">
      <Navbar />
      
      <HeroSection />

      <MainContentSection />

      <CapabilitiesSection />

      {/* Use Cases Section */}
      <AnimatedCarousel
        useCases={useCases}
        title="AI Diagnostics Use Cases"
        subtitle="See how AI reshapes diagnostics for healthcare and industry leaders"
      />

      <WhyChooseMeSection />

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="flex justify-center mb-2">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Common questions about AI diagnostics implementation and our services.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <details key={faq.id} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                  {faq.question}
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
                </summary>
                <div className="pt-2 sm:pt-3 text-gray-800 text-xs sm:text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DiagnosticsAI; 