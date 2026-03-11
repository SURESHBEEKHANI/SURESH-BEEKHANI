import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const USE_CASES_DATA = [
  { id: 1, title: "Personalized Recommendations", description: "AI-driven product recommendations boost conversions by 30% and increase average order value through intelligent cross-sell and upsell.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Recommendations" },
  { id: 2, title: "Inventory & Demand Forecasting", description: "Predict demand accurately, optimize stock levels, and reduce overstock/stockouts with machine learning.", image: "/image/pages_img/workflow-automation.jpg", alt: "Demand Forecasting" },
  { id: 3, title: "AI Shopping Assistants", description: "Intelligent chatbots guide customers, answer product questions, and provide 24/7 personalized shopping support.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "Shopping Assistants" },
  { id: 4, title: "Visual Search & Discovery", description: "Customers find products by image. AI-powered visual search improves discoverability and reduces returns.", image: "/image/pages_img/Medical-Image-Analysis.webp", alt: "Visual Search" },
  { id: 5, title: "Dynamic Pricing Optimization", description: "AI-powered pricing strategies that adjust in real-time based on demand, competition, and market conditions.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Dynamic Pricing" },
  { id: 6, title: "Customer Sentiment Analysis", description: "Analyze reviews, feedback, and social media to understand customer sentiment and improve products.", image: "/image/pages_img/AIconten.jpg", alt: "Sentiment Analysis" }
];

const PORTFOLIO_DATA = [
  {
    title: "AI-Powered Electronic Health Record",
    description: "Streamline healthcare data management and improve patient outcomes with AI-powered EHR systems.",
    image: "/image/Portfolio-img/ai-powered-ehr.jpg",
    link: "/portfolio/ai-powered-electronic-health-record"
  },
  {
    title: "AI Medical Imaging Assistant",
    description: "Computer vision models analyze X‑rays, MRIs, and CT scans to highlight anomalies and support radiologist decision-making.",
    image: "/image/Portfolio-img/ai-medical-imaging-assistant.jpg",
    link: "/portfolio/ai-medical-imaging-assistant"
  },
  {
    title: "AI Contract Analysis System",
    description: "NLP-powered contract review that extracts key clauses, flags risky terms, and accelerates legal workflows.",
    image: "/image/Portfolio-img/ai-contract-analysis-system.jpg",
    link: "/portfolio/ai-contract-analysis-system"
  },
  {
    title: "AI Legal Research Assistant",
    description: "Retrieval-augmented generation surfaces relevant cases, statutes, and legal insights in natural language.",
    image: "/image/Portfolio-img/ai-legal-research-assistant.jpg",
    link: "/portfolio/ai-legal-research-assistant"
  },
  {
    title: "AI Product Recommendation Engine",
    description: "Personalized product recommendations powered by user behavior, purchase history, and real-time context for higher conversions.",
    image: "/image/Portfolio-img/ai-product-recommendation-engine.jpg",
    link: "/portfolio/ai-product-recommendation-engine"
  },
  {
    title: "AI Demand Forecasting System",
    description: "Predictive models forecast demand across SKUs, locations, and time to optimize inventory, pricing, and supply chain decisions.",
    image: "/image/Portfolio-img/ai-demand-forecasting-system.jpg",
    link: "/portfolio/ai-demand-forecasting-system"
  },
  {
    title: "AI Personalized Learning Platform",
    description: "Adaptive learning experiences that dynamically adjust content difficulty and pacing to each learner's performance.",
    image: "/image/Portfolio-img/ai-personalized-learning-platform.jpg",
    link: "/portfolio/ai-personalized-learning-platform"
  },
  {
    title: "AI Automated Grading System",
    description: "Automated evaluation of assignments, quizzes, and free‑text answers with explainable scoring and instant feedback.",
    image: "/image/Portfolio-img/ai-automated-grading-system.jpg",
    link: "/portfolio/ai-automated-grading-system"
  },
  {
    title: "AI Personal Fitness Coach",
    description: "Computer vision and analytics track workouts, posture, and progress to deliver personalized coaching and training plans.",
    image: "/image/Portfolio-img/ai-personal-fitness-coach.jpg",
    link: "/portfolio/ai-personal-fitness-coach"
  },
  {
    title: "AI Nutrition Planner",
    description: "Meal plans tailored to health goals, dietary restrictions, and biometrics, with continuous AI optimization.",
    image: "/image/Portfolio-img/ai-nutrition-planner.jpg",
    link: "/portfolio/ai-nutrition-planner"
  },
  {
    title: "AI Robo-Advisor",
    description: "Automated portfolio allocation and rebalancing driven by risk profiles, goals, and real-time market signals.",
    image: "/image/Portfolio-img/ai-robo-advisor.jpg",
    link: "/portfolio/ai-robo-advisor"
  },
  {
    title: "AI Portfolio Risk Analyzer",
    description: "Scenario analysis, stress testing, and VaR-style insights to quantify and manage portfolio risk.",
    image: "/image/Portfolio-img/ai-portfolio-risk-analyzer.jpg",
    link: "/portfolio/ai-portfolio-risk-analyzer"
  },
  {
    title: "AI Fraud Detection System",
    description: "Real-time AI models detect fraudulent transactions and unusual behavior across banking, fintech, and e‑commerce platforms.",
    image: "/image/Portfolio-img/ai-fraud-detection.jpg",
    link: "/portfolio/ai-fraud-detection-system"
  },
  {
    title: "AI Personal Finance Advisor",
    description: "Intelligent financial coaching that analyzes spending, goals, and risk appetite to provide personalized money management advice.",
    image: "/image/Portfolio-img/ai-personal-finance-advisor.jpg",
    link: "/portfolio/ai-personal-finance-advisor"
  },
  {
    title: "AI DevOps Monitoring Assistant",
    description: "Intelligent alerts and anomaly detection across logs, metrics, and traces to prevent outages and reduce MTTR.",
    image: "/image/Portfolio-img/ai-devops-monitoring-assistant.jpg",
    link: "/portfolio/ai-devops-monitoring-assistant"
  },
  {
    title: "AI IT Support Chatbot",
    description: "Self-service IT support that resolves tickets, answers questions, and integrates with enterprise ITSM tools.",
    image: "/image/Portfolio-img/ai-it-support-chatbot.jpg",
    link: "/portfolio/ai-it-support-chatbot"
  }
];

const FAQ_DATA = [
  { id: 1, question: "How does AI improve retail and e-commerce?", answer: "AI drives personalized recommendations, demand forecasting, inventory optimization, and intelligent customer service. Retailers typically see 20-35% improvement in conversion rates and operational efficiency." },
  { id: 2, question: "Can AI integrate with existing e-commerce platforms?", answer: "Yes, we integrate with major platforms (Shopify, WooCommerce, Magento, custom) and connect with your ERP, CRM, and inventory systems." },
  { id: 3, question: "What metrics improve with RetailTech AI?", answer: "Key improvements include conversion rate, average order value, customer lifetime value, inventory turnover, and customer satisfaction scores." },
  { id: 4, question: "What is the ROI of implementing AI in retail?", answer: "Retailers typically see 20-35% increase in conversion rates, 15-25% improvement in inventory efficiency, and 30-40% reduction in customer service costs. Most implementations achieve ROI within 4-6 months." },
  { id: 5, question: "How do you protect customer data and ensure privacy?", answer: "We implement GDPR and CCPA compliance, end-to-end encryption, secure data storage, and strict access controls. Customer data is anonymized for AI training and never shared with third parties." }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/workflow-automation.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">RetailTech</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">Transform retail with AI-powered recommendations, demand forecasting, intelligent chatbots, and visual search. Boost sales and customer satisfaction.</p>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

const RetailTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const checkScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 400;
      const targetScroll = direction === 'left' 
        ? Math.max(0, container.scrollLeft - cardWidth)
        : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + cardWidth);
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 10000);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;
    
    const autoScrollInterval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      if (currentScroll >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: currentScroll + 400, behavior: 'smooth' });
      }
    }, 4000);
    
    return () => clearInterval(autoScrollInterval);
  }, [isAutoScrolling]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [checkScrollButtons]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-violet-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="RetailTech AI Solutions" subtitle="AI technology for modern retail and e-commerce" />
      <section className="py-16 sm:py-24 px-4 sm:px-6 hero-bg relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20 shadow-lg">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Real-World AI Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across healthcare, finance, education, and more with cutting-edge AI technology
            </p>
          </div>
          
          <div className="relative group">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll('left')} 
              disabled={!canScrollLeft} 
              className={`absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-violet-900 p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button 
              onClick={() => scroll('right')} 
              disabled={!canScrollRight} 
              className={`absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-violet-900 p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef} 
              className="overflow-x-auto pb-8 scrollbar-hide scroll-smooth" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
              onMouseEnter={() => setIsAutoScrolling(false)} 
              onMouseLeave={() => setIsAutoScrolling(true)}
              onTouchStart={() => setIsAutoScrolling(false)}
            >
              <div className="flex gap-6 sm:gap-8 px-4 sm:px-8" style={{ width: 'max-content' }}>
                {portfolioData.map((project, idx) => (
                  <div 
                    key={project.link} 
                    className="flex-shrink-0 w-80 sm:w-[420px] bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 border border-white/20 hover:border-white/40 group/card transform hover:-translate-y-2"
                  >
                    <div className="relative h-52 sm:h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    <div className="p-6 sm:p-7 space-y-4">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight group-hover/card:text-violet-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <Link 
                        to={project.link} 
                        className="inline-flex items-center gap-2 bg-white text-violet-900 hover:bg-violet-50 font-semibold px-5 py-2.5 rounded-lg shadow-lg transition-all duration-300 text-sm group/btn"
                      >
                        View Case Study 
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(portfolioData.length / 3) }).map((_, idx) => (
                <div 
                  key={idx} 
                  className="h-1.5 rounded-full bg-white/30 transition-all duration-300"
                  style={{ width: idx === 0 ? '32px' : '8px' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold border border-violet-200">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about AI-powered retail solutions
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <details key={faq.id} className="bg-white rounded-xl shadow-md border border-gray-200 p-5 sm:p-6 group hover:shadow-lg transition-all duration-300">
                <summary className="cursor-pointer font-semibold text-base sm:text-lg text-gray-900 flex items-center justify-between group-hover:text-violet-700 transition-colors duration-200">
                  <span className="pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 ml-2 text-violet-600 group-hover:text-violet-700 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
                </summary>
                <div className="pt-4 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RetailTech;
