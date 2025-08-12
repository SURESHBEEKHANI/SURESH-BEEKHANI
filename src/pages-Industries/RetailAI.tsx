import React, { useState, useMemo, useCallback } from "react";
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

// Data constants for better organization
const USE_CASES_DATA = [
  {
    id: 1,
    title: "Personalized Product Recommendations",
    description: "AI analyzes customer behavior and preferences to deliver highly targeted product suggestions, increasing conversion rates and customer satisfaction.",
    image: "/image/pages_img/Personalized-Recommendations-retail.webp",
    alt: "AI Personalized Product Recommendations"
  },
  {
    id: 2,
    title: "Inventory Management & Demand Forecasting",
    description: "Machine learning predicts demand patterns, optimizes stock levels, and reduces waste through intelligent inventory management.",
    image: "/image/pages_img/retail-Inventory-Optimization.jpg",
    alt: "AI Inventory Management"
  },
  {
    id: 3,
    title: "Dynamic Pricing Optimization",
    description: "AI-powered pricing strategies adjust prices in real-time based on demand, competition, and market conditions to maximize profitability.",
    image: "/image/pages_img/Dynamic-Pricing.jpg",
    alt: "AI Dynamic Pricing"
  },
  {
    id: 4,
    title: "Customer Service Automation",
    description: "Intelligent chatbots and virtual assistants provide 24/7 customer support, handling inquiries and resolving issues efficiently.",
    image: "/image/pages_img/Customer-Service-Chatbots.jpg",
    alt: "AI Customer Service"
  },
  {
    id: 5,
    title: "Visual Search & Image Recognition",
    description: "AI enables customers to search for products using images, improving discovery and creating seamless shopping experiences.",
    image: "/image/pages_img/Visual-Search.jpg",
    alt: "AI Visual Search"
  },
  {
    id: 6,
    title: "Fraud Detection & Security",
    description: "AI systems detect fraudulent transactions and suspicious activities, protecting both retailers and customers from financial losses.",
    image: "/image/pages_img/Fraud-Detection-reatils.webp",
    alt: "AI Fraud Detection"
  },
  {
    id: 7,
    title: "Store Layout Optimization",
    description: "AI analyzes customer movement patterns to optimize store layouts, product placement, and traffic flow for maximum sales.",
    image: "/image/pages_img/retail.jpg",
    alt: "AI Store Layout"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is Retail AI?",
    answer: "Retail AI leverages artificial intelligence to enhance shopping experiences, optimize operations, and drive business growth through personalized recommendations, inventory management, and intelligent automation."
  },
  {
    id: 2,
    question: "How does AI improve retail operations?",
    answer: "AI enhances retail by personalizing customer experiences, optimizing inventory, automating pricing, improving customer service, detecting fraud, and providing data-driven insights for better decision-making."
  },
  {
    id: 3,
    question: "What are the benefits of AI in retail?",
    answer: "AI increases sales, reduces costs, improves customer satisfaction, optimizes inventory, enhances security, and provides competitive advantages through data-driven insights and automation."
  },
  {
    id: 4,
    question: "Are there challenges to implementing AI in retail?",
    answer: "Challenges include data integration, privacy concerns, initial investment costs, staff training, and ensuring seamless customer experiences while maintaining human touch."
  },
  {
    id: 5,
    question: "Can AI replace human retail staff?",
    answer: "AI is designed to augment, not replace, human staff, automating routine tasks while enabling employees to focus on high-value customer interactions and complex problem-solving."
  }
];

const BENEFITS_DATA = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Enhanced Customer Experience",
    description: "AI delivers personalized shopping experiences, intelligent recommendations, and seamless interactions that increase customer satisfaction and loyalty.",
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
    description: "AI automates routine tasks, optimizes inventory management, and streamlines operations, reducing costs and improving productivity.",
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
    title: "Revenue Growth",
    description: "AI-driven insights and automation increase sales through better targeting, optimized pricing, and improved customer engagement.",
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
    title: "Cost Reduction",
    description: "AI reduces operational costs through automated processes, optimized inventory, and improved resource allocation.",
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
    title: "Data-Driven Insights",
    description: "AI analyzes customer behavior and market trends to provide actionable insights for strategic decision-making.",
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
    title: "Competitive Advantage",
    description: "AI provides retailers with innovative capabilities that differentiate their offerings and create sustainable competitive advantages.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  }
];

const STATS_DATA = [
  {
    value: "3+",
    label: "Years Experience",
    description: "Specialized AI solutions for retail transformation."
  },
  {
    value: "15+",
    label: "AI Projects",
    description: "Tailored solutions for unique business challenges."
  },
  {
    value: "25+",
    label: "AI Models",
    description: "Custom models for recommendations and analytics."
  },
  {
    value: "10+",
    label: "Retail Partners",
    description: "Organizations with improved sales and efficiency."
  },
  {
    value: "🌍",
    label: "Global Impact",
    description: "Scalable AI solutions worldwide."
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
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/retail.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
      <div className="flex-1 text-white space-y-6 sm:space-y-8">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
            AI in Retail
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
            Transform retail operations with AI-powered personalization, intelligent automation, and data-driven insights that drive growth and customer satisfaction.
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

const MainContentSection: React.FC = React.memo(() => (
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
          <div className="relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30"></div>
            <motion.img
              src="/image/pages_img/AI-Retail.jpg"
              alt="AI in Retail - Digital Transformation"
              className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/20"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              whileHover={{ scale: 1.02 }}
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
            AI in Retail Technology
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
            AI, including machine learning and predictive analytics, is revolutionizing retail, enabling personalized experiences, intelligent automation, and data-driven decision-making. From inventory optimization to customer service automation, AI empowers retailers to deliver exceptional experiences, increase sales, and stay competitive in the digital marketplace.
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Key Capabilities & Benefits</h2>
          <div className="flex justify-center mb-0">
            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Unlock AI-powered personalization, efficiency, and growth in retail
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl border flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px]`}>
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
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Why Choose Me?</h2>
          <div className="flex justify-center mb-0">
            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Trusted expertise in retail AI for forward-thinking organizations
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl border flex flex-col items-center gap-3 sm:gap-4 min-h-[140px] sm:min-h-[160px]`}>
                <span className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${iconColor} text-white mb-2`}>
                  <span className="text-lg sm:text-2xl">{stat.value}</span>
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg text-center leading-tight">{stat.label}</span>
                <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
});

WhyChooseMeSection.displayName = 'WhyChooseMeSection';

const RetailAI: React.FC = () => {
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
        title="AI Retail Use Cases"
        subtitle="See how AI reshapes retail for industry leaders"
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

export default RetailAI; 