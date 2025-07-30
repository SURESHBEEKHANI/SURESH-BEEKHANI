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

// Custom GreenTech AI Icon Component
const GreenTechAIIcon: React.FC<{ className?: string }> = React.memo(({ className = "w-32 h-32" }) => (
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
      {/* Earth/Globe */}
      <path 
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" 
        stroke="currentColor" 
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Leaf/Plant */}
      <path d="M8 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill="currentColor" opacity="0.8" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="2" />
      
      {/* Renewable Energy Symbol */}
      <path d="M12 4L14 8L18 8L15 11L16 15L12 13L8 15L9 11L6 8L10 8Z" fill="currentColor" opacity="0.7" />
      
      {/* Environmental Lines */}
      <path d="M4 4L6 6L8 4L10 6L12 4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M12 20L14 18L16 20L18 18L20 20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  </motion.div>
));

GreenTechAIIcon.displayName = 'GreenTechAIIcon';

// Data constants for better organization
const USE_CASES_DATA = [
  {
    id: 1,
    title: "Renewable Energy Optimization",
    description: "AI optimizes solar and wind energy production, predicts weather patterns, and maximizes efficiency of renewable energy systems.",
    image: "/image/pages_img/Renewable-Energy-Forecasting.jpg",
    alt: "AI Renewable Energy Optimization"
  },
  {
    id: 2,
    title: "Smart Grid Management",
    description: "Intelligent grid systems balance energy supply and demand, integrate renewable sources, and prevent power outages through predictive analytics.",
    image: "/image/pages_img/Smart-Energy-Management.jpg",
    alt: "AI Smart Grid Management"
  },
  {
    id: 3,
    title: "Carbon Footprint Tracking",
    description: "AI monitors and analyzes carbon emissions across operations, providing insights for sustainability improvements and compliance reporting.",
    image: "/image/pages_img/Carbon-Footprint-Tracking.webp",
    alt: "AI Carbon Footprint Tracking"
  },
  {
    id: 4,
    title: "Waste Management Optimization",
    description: "AI-powered systems optimize waste collection routes, improve recycling processes, and reduce environmental impact through intelligent sorting.",
    image: "/image/pages_img/Waste-Reduction.png",
    alt: "AI Waste Management"
  },
  {
    id: 5,
    title: "Precision Agriculture",
    description: "AI enables sustainable farming practices through soil monitoring, crop optimization, and resource-efficient irrigation systems.",
    image: "/image/pages_img/Smart-Agriculture.jpg",
    alt: "AI Precision Agriculture"
  },
  {
    id: 6,
    title: "Environmental Monitoring",
    description: "AI analyzes environmental data from sensors and satellites to track air quality, water pollution, and ecosystem health in real-time.",
    image: "/image/pages_img/Environmental-Monitoring.webp",
    alt: "AI Environmental Monitoring"
  },
  {
    id: 7,
    title: "Sustainable Supply Chains",
    description: "AI optimizes supply chain operations to reduce emissions, minimize waste, and ensure sustainable sourcing practices.",
    image: "/image/pages_img/Supply-Chain-Optimization.webp",
    alt: "AI Sustainable Supply Chains"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is GreenTech AI?",
    answer: "GreenTech AI combines artificial intelligence with environmental technology to create sustainable solutions that reduce carbon footprints, optimize resource usage, and promote environmental conservation."
  },
  {
    id: 2,
    question: "How does AI help with sustainability?",
    answer: "AI enhances sustainability by optimizing energy consumption, improving resource efficiency, predicting environmental impacts, and enabling data-driven decisions for greener operations."
  },
  {
    id: 3,
    question: "What are the benefits of AI in GreenTech?",
    answer: "AI reduces environmental impact, lowers costs, improves efficiency, enables predictive maintenance, and helps organizations meet sustainability goals and regulatory requirements."
  },
  {
    id: 4,
    question: "Are there challenges to implementing GreenTech AI?",
    answer: "Challenges include initial investment costs, data integration complexity, regulatory compliance, and ensuring accurate environmental impact measurements."
  },
  {
    id: 5,
    question: "Can AI help achieve net-zero goals?",
    answer: "Yes, AI provides the tools and insights needed to track emissions, optimize operations, and implement strategies that support net-zero and carbon reduction targets."
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
    title: "Environmental Impact Reduction",
    description: "AI optimizes operations to minimize carbon emissions, reduce waste, and improve resource efficiency across all business processes.",
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
    title: "Cost Savings",
    description: "AI-driven sustainability initiatives reduce energy costs, optimize resource usage, and create long-term financial benefits through efficiency gains.",
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
    title: "Regulatory Compliance",
    description: "AI ensures adherence to environmental regulations, automates reporting, and provides audit trails for sustainability certifications.",
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
    title: "Predictive Analytics",
    description: "AI predicts environmental risks, optimizes maintenance schedules, and enables proactive sustainability management.",
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
    title: "Resource Optimization",
    description: "AI maximizes the efficiency of renewable energy systems, water usage, and material consumption through intelligent monitoring and control.",
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
    title: "Competitive Advantage",
    description: "AI-powered sustainability provides market differentiation, attracts environmentally conscious customers, and enhances brand reputation.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  }
];

const STATS_DATA = [
  {
    value: "3+",
    label: "Years Experience",
    description: "Specialized AI solutions for environmental sustainability and operational efficiency."
  },
  {
    value: "15+",
    label: "GreenTech Projects",
    description: "AI projects designed to reduce environmental impact and improve sustainability outcomes."
  },
  {
    value: "25+",
    label: "AI Models",
    description: "Custom AI models for energy optimization, carbon tracking, and environmental monitoring."
  },
  {
    value: "10+",
    label: "Partners",
    description: "Organizations with improved environmental performance and sustainability metrics."
  },
  {
    value: "🌍",
    label: "Global Impact",
    description: "Scalable GreenTech AI solutions worldwide for a sustainable future."
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
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Green-Technology.webp')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-white space-y-8">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
            AI in GreenTech
          </h1>
          <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
            Transform environmental sustainability with AI-powered solutions that optimize energy usage, reduce carbon footprints, and create a greener future through intelligent resource management and predictive analytics.
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
              src="/image/pages_img/AI in Environmental Technology.jpg"
              alt="AI in GreenTech - Environmental Sustainability"
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
            AI in Environmental Technology</h2>
                      <p className="text-lg text-gray-700 max-w-2xl">
              AI, including machine learning and predictive analytics, is revolutionizing environmental sustainability enabling smarter resource management, carbon reduction, and climate action.
            </p>
          <p className="text-lg text-gray-700 max-w-2xl">
            From renewable energy optimization to waste management, AI empowers organizations to achieve sustainability goals, reduce environmental impact, and create a more sustainable future.
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
            Unlock AI-powered sustainability, efficiency, and environmental impact reduction
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
            Trusted expertise in GreenTech AI for forward-thinking organizations
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

const GreenTechAI: React.FC = () => {
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
        title="AI GreenTech Use Cases"
        subtitle="See how AI is reshaping environmental sustainability through innovative applications and measurable impact."
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

export default GreenTechAI; 