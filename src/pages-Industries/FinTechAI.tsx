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

// Data constants for better organization
const USE_CASES_DATA = [
  {
    id: 1,
    title: "Fraud Detection",
    description: "Leverage AI to instantly identify and prevent fraudulent transactions, safeguarding your business and customers with proactive, real-time protection.",
    image: "/image/pages_img/Fraud-Detection.jpg",
    alt: "AI-powered Fraud Detection in Finance"
  },
  {
    id: 2,
    title: "Credit Scoring",
    description: "Empower smarter lending with AI-driven credit scoring that analyzes diverse financial and behavioral data for faster, fairer, and more accurate decisions.",
    image: "/image/pages_img/Credit-Scoring.avif",
    alt: "AI Credit Scoring Solution"
  },
  {
    id: 3,
    title: "Algorithmic Trading",
    description: "Maximize returns with AI-powered trading systems that process market data at scale, executing trades at optimal moments for superior performance.",
    image: "/image/pages_img/Algorithmic-Trading.jpg",
    alt: "AI Algorithmic Trading Platform"
  },
  {
    id: 4,
    title: "Personalized Financial Advice",
    description: "Deliver tailored financial guidance at scale with AI chatbots and robo-advisors, enhancing client engagement and portfolio outcomes.",
    image: "/image/pages_img/Personalized-Financial.jpg",
    alt: "AI Personalized Financial Advisory"
  },
  {
    id: 5,
    title: "Risk Management",
    description: "Mitigate risk with AI models that anticipate threats and market shifts, enabling confident, data-driven decisions in dynamic environments.",
    image: "/image/pages_img/Risk-Management.webp",
    alt: "AI Risk Management in Finance"
  },
  {
    id: 6,
    title: "Customer Service Automation",
    description: "Transform support with AI chatbots that resolve inquiries instantly, streamline operations, and elevate customer satisfaction around the clock.",
    image: "/image/pages_img/Customer-Service-Chatbots.jpg",
    alt: "AI Customer Service Automation"
  },
  {
    id: 7,
    title: "Regulatory Compliance",
    description: "Ensure seamless compliance with AI systems that monitor transactions, flag anomalies, and automate reporting to reduce manual effort and risk.",
    image: "/image/pages_img/Regulatory-Compliance.jpeg",
    alt: "AI Regulatory Compliance Automation"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is FinTech?",
    answer: "FinTech short for Financial Technology refers to innovative digital solutions that streamline, automate, and enhance financial services such as banking, payments, investing, and insurance."
  },
  {
    id: 2,
    question: "How is AI used in FinTech?",
    answer: "AI powers fraud detection, credit scoring, algorithmic trading, personalized advice, risk management, automated customer service, and regulatory compliance driving efficiency and smarter outcomes across the financial sector."
  },
  {
    id: 3,
    question: "What are the benefits of AI in FinTech?",
    answer: "AI accelerates decision-making, reduces fraud, enhances customer experiences, improves compliance, and unlocks new growth opportunities for financial organizations."
  },
  {
    id: 4,
    question: "Are there challenges to using AI in FinTech?",
    answer: "Key challenges include data privacy, algorithmic bias, integration with legacy systems, and evolving regulations. Addressing these requires robust governance and transparent, ethical AI practices."
  },
  {
    id: 5,
    question: "Can AI replace financial advisors?",
    answer: "AI automates routine advisory tasks and delivers actionable insights, but human expertise remains vital for complex strategies and building trusted client relationships."
  }
];

const BENEFITS_DATA = [
  {
    icon: (
      <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Improved Decision-Making",
    description: "AI and ML deliver actionable insights from vast data sets in real time, empowering leaders to make faster, more accurate, and more confident decisions.",
    bgColor: "bg-yellow-300/20",
    textColor: "text-yellow-300",
    borderColor: "hover:border-yellow-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
      </svg>
    ),
    title: "Enhanced Fraud Detection",
    description: "AI-driven fraud detection proactively identifies threats, reducing financial losses and protecting your brand and customers.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
      </svg>
    ),
    title: "Increased Operational Efficiency",
    description: "AI automates routine processes, streamlines operations, and drives productivity delivering measurable cost savings and scalability.",
    bgColor: "bg-yellow-300/20",
    textColor: "text-yellow-300",
    borderColor: "hover:border-yellow-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
      </svg>
    ),
    title: "Personalized Customer Experience",
    description: "AI-powered solutions analyze customer data to deliver tailored advice and seamless support, building loyalty and satisfaction at every touchpoint.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
      </svg>
    ),
    title: "Enhanced Risk Management",
    description: "AI and ML provide real-time risk assessment, enabling proactive mitigation and confident navigation of complex financial landscapes.",
    bgColor: "bg-yellow-300/20",
    textColor: "text-yellow-300",
    borderColor: "hover:border-yellow-300"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    title: "Improved Financial Planning and Analysis",
    description: "AI-driven analytics deliver precise forecasts and deep insights, empowering smarter financial planning and strategic growth.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  }
];

const STATS_DATA = [
  {
    value: "4+",
    label: "Years Experience",
    description: "Specialized AI solutions for financial leaders."
  },
  {
    value: "15+",
    label: "FinTech Projects",
    description: "Tailored AI solutions for unique business goals."
  },
  {
    value: "25+",
    label: "AI Models Built",
    description: "Custom models for fraud prevention and trading."
  },
  {
    value: "10+",
    label: "Happy Clients",
    description: "Financial organizations with measurable gains."
  },
  {
    value: "🌍",
    label: "Global Reach",
    description: "Scalable AI solutions worldwide."
  }
];

// Memoized components for better performance
const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/fintech.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
      <div className="flex-1 text-white space-y-6 sm:space-y-8">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
            AI In FinTech
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
            Unlock the future of finance with AI driving intelligent automation, robust fraud prevention, and hyper-personalized customer experiences.
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
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30"></div>
            <motion.img
              src="/image/pages_img/AI-Financial.jpg"
              alt="AI-Driven Financial Transformation"
              className="relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/20"
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
            AI in Financial Services
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
            AI, including machine learning and predictive analytics, is redefining financial services empowering smarter decisions, automating workflows, and strengthening security at every level. From advanced fraud detection to bespoke banking, AI enables financial institutions to deliver exceptional service, minimize risk, and accelerate innovation in a rapidly changing market.
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
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
            Unlock AI-powered speed, accuracy, and efficiency in financial services
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl border flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${iconColor} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto`}>
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full leading-tight">{benefit.title}</h3>
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
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
            Trusted expertise in AI FinTech for forward-thinking organizations
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const cardColor = CARD_COLORS[index % CARD_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl border flex flex-col items-center gap-3 sm:gap-4 min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
                <span className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${iconColor} text-white mb-2`}>
                  <span className="text-lg sm:text-xl lg:text-2xl">{stat.value}</span>
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

const FinTechAI: React.FC = () => {
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
        title="AI-Powered FinTech Use Cases"
        subtitle="See how AI is reshaping finance driving innovation, efficiency, and value across every application."
        accentColor="yellow"
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
              Common questions about AI FinTech implementation and our services.
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

export default FinTechAI; 