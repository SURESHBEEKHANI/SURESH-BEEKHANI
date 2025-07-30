import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Data constants for better organization
const USE_CASES_DATA = [
  {
    id: 1,
    title: "Telemedicine & Remote Monitoring",
    description: "AI-powered telemedicine platforms enable remote consultations, real-time health monitoring, and proactive care management for patients worldwide.",
    image: "/image/pages_img/Telemedicine-Remote-Monitoring.webp",
    alt: "AI Telemedicine and Remote Monitoring"
  },
  {
    id: 2,
    title: "Predictive Health Analytics",
    description: "Machine learning models analyze patient data to predict health risks, enabling preventive care and early intervention strategies.",
    image: "/image/pages_img/Predictive-Health-Analytics.jpg",
    alt: "AI Predictive Health Analytics"
  },
  {
    id: 3,
    title: "Drug Discovery & Development",
    description: "AI accelerates pharmaceutical research by identifying potential drug candidates, optimizing clinical trials, and reducing development timelines.",
    image: "/image/pages_img/DrugDiscover.jpg",
    alt: "AI Drug Discovery and Development"
  },
  {
    id: 4,
    title: "Personalized Medicine",
    description: "AI analyzes genetic and clinical data to create tailored treatment plans, improving outcomes and reducing adverse effects.",
    image: "/image/pages_img/Personalized-Medicine.png",
    alt: "AI Personalized Medicine"
  },
  {
    id: 5,
    title: "Medical Imaging Analysis",
    description: "Advanced AI algorithms enhance diagnostic accuracy in radiology, pathology, and other imaging-based medical specialties.",
    image: "/image/pages_img/medical-image-analysis.jpg",
    alt: "AI Medical Imaging Analysis"
  },
  {
    id: 6,
    title: "Healthcare Operations Optimization",
    description: "AI streamlines hospital operations, optimizes resource allocation, and improves patient flow and care coordination.",
    image: "/image/pages_img/Healthcare-Operations-Optimization.jpg",
    alt: "AI Healthcare Operations"
  },
  {
    id: 7,
    title: "Mental Health Support",
    description: "AI-powered mental health tools provide accessible support, early detection, and personalized therapeutic interventions.",
    image: "/image/pages_img/Mental-Health-Support.jpg",
    alt: "AI Mental Health Support"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is HealthTech?",
    answer: "HealthTech combines healthcare and technology to improve patient care, streamline medical processes, and enhance health outcomes through innovative digital solutions."
  },
  {
    id: 2,
    question: "How is AI used in HealthTech?",
    answer: "AI powers diagnostic tools, predictive analytics, personalized medicine, drug discovery, telemedicine, and operational optimization, transforming every aspect of healthcare delivery."
  },
  {
    id: 3,
    question: "What are the benefits of AI in healthcare?",
    answer: "AI improves diagnostic accuracy, enables personalized care, reduces costs, enhances patient outcomes, and makes healthcare more accessible and efficient."
  },
  {
    id: 4,
    question: "Are there challenges to using AI in HealthTech?",
    answer: "Key challenges include data privacy, regulatory compliance, integration with legacy systems, and ensuring equitable access to AI-powered healthcare solutions."
  },
  {
    id: 5,
    question: "Can AI replace healthcare professionals?",
    answer: "AI is designed to augment, not replace, healthcare professionals, providing decision support and automating routine tasks while preserving human expertise and empathy."
  }
];

const BENEFITS_DATA = [
  {
    icon: (
      <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Enhanced Patient Outcomes",
    description: "AI-driven diagnostics and personalized treatments improve accuracy, reduce errors, and deliver better health outcomes for patients.",
    bgColor: "bg-green-300/20",
    textColor: "text-green-300",
    borderColor: "hover:border-green-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
      </svg>
    ),
    title: "Operational Efficiency",
    description: "AI automates routine tasks, optimizes workflows, and reduces administrative burden, freeing healthcare professionals to focus on patient care.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
      </svg>
    ),
    title: "Cost Reduction",
    description: "AI-powered solutions reduce healthcare costs through preventive care, optimized resource allocation, and streamlined operations.",
    bgColor: "bg-green-300/20",
    textColor: "text-green-300",
    borderColor: "hover:border-green-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
      </svg>
    ),
    title: "Accessibility & Equity",
    description: "AI makes quality healthcare more accessible to underserved populations through telemedicine and remote monitoring solutions.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
      </svg>
    ),
    title: "Predictive Care",
    description: "AI enables proactive healthcare by predicting health risks and enabling early intervention before conditions worsen.",
    bgColor: "bg-green-300/20",
    textColor: "text-green-300",
    borderColor: "hover:border-green-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    title: "Innovation Acceleration",
    description: "AI accelerates medical research, drug discovery, and treatment development, bringing breakthrough solutions to patients faster.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  }
];

const STATS_DATA = [
  {
    value: "3+",
    label: "HealthTech Experience",
    description: "Specialized AI solutions transforming healthcare delivery."
  },
  {
    value: "15+",
    label: "HealthTech Projects",
    description: "AI projects solving unique healthcare challenges."
  },
  {
    value: "25+",
    label: "AI Models",
    description: "Custom models for diagnostics and healthcare optimization."
  },
  {
    value: "10+",
    label: "Healthcare Partners",
    description: "Organizations with improved efficiency and outcomes."
  },
  {
    value: "🌍",
    label: "Global Impact",
    description: "Scalable solutions making healthcare accessible worldwide."
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
  <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/healthtechai.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-white space-y-8">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
            AI in HealthTech
          </h1>
          <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
            Transform healthcare delivery with AI-powered diagnostics, personalized medicine, and intelligent care management that improves outcomes and accessibility.
          </p>
          <div className="flex space-x-4 pt-6 w-full">
            <a
              href="/#contact"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
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

const MainContentSection: React.FC = React.memo(() => (
  <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div 
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
            <motion.img
              src="/image/pages_img/AI-HealthTech.webp"
              alt="AI in HealthTech - Digital Healthcare Transformation"
              className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        
        {/* Right: Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900">
            AI in Healthcare Technology
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            AI, including machine learning predictive analytics, is revolutionizing healthcare, enabling personalized medicine, intelligent diagnostics, and proactive care management. From telemedicine platforms to drug discovery, AI empowers healthcare providers to deliver better outcomes, reduce costs, and make quality care accessible to all.
          </p>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
));

MainContentSection.displayName = 'MainContentSection';

const CapabilitiesSection: React.FC = React.memo(() => {
  const benefits = useMemo(() => BENEFITS_DATA, []);
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Key Capabilities & Benefits</h2>
          <div className="flex justify-center mb-0">
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unlock AI-powered speed, accuracy, and efficiency in healthcare
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-2xl p-8 shadow-xl border flex flex-col gap-4 items-center`}>
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${iconColor} rounded-xl flex items-center justify-center mb-2 mx-auto`}>
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">{benefit.title}</h3>
                <p className="text-gray-800 text-center">{benefit.description}</p>
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
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Why Choose Me?</h2>
          <div className="flex justify-center mb-0">
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trusted expertise in AI HealthTech for forward-thinking healthcare organizations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-2xl p-8 shadow-xl border flex flex-col items-center gap-4`}>
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${iconColor} text-white mb-2`}>
                  <span className="text-2xl">{stat.value}</span>
                </span>
                <span className="font-bold text-gray-900 text-lg text-center">{stat.label}</span>
                <p className="text-gray-800 text-center">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
});

WhyChooseMeSection.displayName = 'WhyChooseMeSection';

const HealthTechAI: React.FC = () => {
  // Custom hooks for state management
  const { openFAQ, toggleFAQ } = useFAQState();
  const { currentIndex, nextSlide, prevSlide } = useCarouselState(USE_CASES_DATA.length);
  
  // Memoized data to prevent unnecessary re-renders
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 text-gray-900">
      <Navbar />
      
      <HeroSection />

      <MainContentSection />

      <CapabilitiesSection />

      {/* Use Cases Section */}
      <AnimatedCarousel
        useCases={useCases}
        title="AI HealthTech Use Cases"
        subtitle="See how AI reshapes healthcare through innovative applications and measurable impact"
      />

      <WhyChooseMeSection />

      {/* FAQ Section */}
      <AnimatedFAQ
        faqData={faqData}
        title="Frequently Asked Questions"
      />
      
      <Footer />
    </div>
  );
};

export default HealthTechAI; 