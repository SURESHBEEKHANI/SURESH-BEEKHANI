import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const USE_CASES_DATA = [
  { id: 1, title: "Fraud Detection & Risk Assessment", description: "AI-powered fraud detection systems analyze transactions in real-time, reducing false positives by 40% and protecting customer assets.", image: "/image/pages_img/workflow-automation.jpg", alt: "Fraud Detection" },
  { id: 2, title: "Loan & Credit Decisioning", description: "Machine learning models assess creditworthiness, automate loan approvals, and personalize lending offers with greater accuracy.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Credit Decisioning" },
  { id: 3, title: "AI-Powered Chatbots", description: "Intelligent virtual assistants handle customer inquiries, account management, and 24/7 support for banking and finance operations.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "Finance Chatbots" },
  { id: 4, title: "Regulatory Compliance (AML/KYC)", description: "Automate KYC verification, transaction monitoring, and regulatory reporting to stay compliant and reduce operational costs.", image: "/image/pages_img/patient-scheduling.jpg", alt: "Compliance Automation" }
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
  { id: 1, question: "How does AI improve financial operations?", answer: "AI transforms finance through fraud detection, credit scoring, process automation, and personalized customer experiences. Banks and financial institutions typically see 30-50% efficiency gains and reduced operational risk." },
  { id: 2, question: "Is AI in finance secure and compliant?", answer: "Yes, we implement bank-grade security, encryption, and regulatory compliance (PCI-DSS, GDPR, SOC 2) to protect sensitive financial data and ensure audit readiness." },
  { id: 3, question: "What is the implementation timeline for FinTech AI?", answer: "Typically 3-6 months depending on scope. We follow a phased approach: discovery, integration, testing, and deployment with full change management support." },
  { id: 4, question: "What is the ROI of implementing AI in finance?", answer: "Financial institutions typically see 40-60% reduction in fraud losses, 50% faster loan processing, and 30-45% improvement in customer satisfaction. Most implementations achieve ROI within 6-10 months through operational efficiency and risk reduction." },
  { id: 5, question: "Can AI integrate with existing banking and payment systems?", answer: "Absolutely. Our AI solutions seamlessly integrate with core banking systems, payment gateways, and financial platforms through secure APIs. We ensure compliance with banking standards and minimal disruption to existing operations." }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/workflow-automation.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">FinTech</h1>
        <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">Transform finance and banking with AI-powered fraud detection, automated compliance, intelligent chatbots, and predictive analytics. Enhance customer experience and operational efficiency.</p>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

const ProfessionalSection: React.FC = React.memo(() => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              AI-Driven Financial Technology Innovation
            </h2>
          </div>
          
          <div className="space-y-5 text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            <p>
              We are revolutionizing financial services with the power of Artificial Intelligence. By combining machine learning, predictive analytics, and advanced automation, we create intelligent financial solutions that support fraud detection, risk assessment, automated compliance, and personalized customer experiences.
            </p>
            <p>
              Our mission is to help financial institutions deliver more secure, efficient, and customer-centric services through innovative digital solutions.
            </p>
          </div>
          
          <div className="pt-4">
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 hover:from-blue-600 hover:via-cyan-600 hover:to-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Right Image with Modern Design */}
        <div className="relative max-w-xl mx-auto lg:mx-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-12 z-0 opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-emerald-400 rounded-3xl transform -rotate-12 z-0 opacity-80" />
            
            {/* Main Image Container */}
            <div className="relative z-10 bg-white p-2 rounded-3xl">
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
                <img 
                  src="/image/pages_img/workflow-automation.jpg" 
                  alt="Financial professionals using AI technology" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));
ProfessionalSection.displayName = 'ProfessionalSection';

const CapabilitiesSection: React.FC = React.memo(() => {
  const capabilities = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Advanced Fraud Detection",
      description: "AI-powered systems analyze transaction patterns in real-time to detect and prevent fraudulent activities. This reduces fraud losses by 40-60% while minimizing false positives and improving customer trust.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "Automated Compliance & KYC",
      description: "Machine learning automates regulatory compliance, KYC verification, and AML monitoring. This reduces compliance costs by 50-70% while ensuring adherence to financial regulations and reducing risk exposure.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Intelligent Credit Scoring",
      description: "AI models assess creditworthiness using alternative data sources and behavioral patterns. This enables faster loan approvals, reduces default rates by 30%, and expands access to credit for underserved populations.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Personalized Financial Services",
      description: "AI delivers tailored product recommendations, investment advice, and financial planning based on individual customer profiles, behaviors, and goals, increasing customer satisfaction and revenue per customer.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: "24/7 AI-Powered Support",
      description: "Intelligent chatbots and virtual assistants handle customer inquiries, account management, and transaction support around the clock, reducing support costs by 60% while improving response times.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Predictive Risk Management",
      description: "AI analyzes market trends, portfolio performance, and risk factors to provide real-time insights and recommendations. This helps financial institutions optimize risk-return profiles and make data-driven investment decisions.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 hero-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-2 h-10 bg-gradient-to-b from-blue-400 via-cyan-400 to-emerald-400 rounded-full shadow-lg" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-lg">
              Capabilities and Benefits of AI and ML in FinTech
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <svg 
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-100 leading-relaxed font-medium">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
CapabilitiesSection.displayName = 'CapabilitiesSection';

const FinTech: React.FC = () => {
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
      <ProfessionalSection />
      <CapabilitiesSection />
      <AnimatedCarousel useCases={useCases} title="FinTech AI Solutions" subtitle="AI technology for modern finance and banking" />
      <section className="py-16 sm:py-24 px-4 sm:px-6 hero-bg relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-400/30 shadow-lg">
                Portfolio
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 drop-shadow-lg">
              Real-World AI Solutions
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Discover how we've transformed businesses across healthcare, finance, education, and more with cutting-edge AI technology
            </p>
          </div>
          
          <div className="relative group">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll('left')} 
              disabled={!canScrollLeft} 
              className={`absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button 
              onClick={() => scroll('right')} 
              disabled={!canScrollRight} 
              className={`absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
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
                    className="flex-shrink-0 w-80 sm:w-[420px] bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 border border-white/20 hover:border-cyan-400/50 group/card transform hover:-translate-y-2"
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
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight group-hover/card:text-cyan-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-100 font-medium leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <Link 
                        to={project.link} 
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 hover:from-blue-600 hover:via-cyan-600 hover:to-emerald-500 text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-xs sm:text-sm group/btn transform hover:scale-105"
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
                  className="h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300"
                  style={{ width: idx === 0 ? '32px' : '8px' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-200">
                FAQ
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium max-w-2xl mx-auto">
              Everything you need to know about AI-powered finance solutions
            </p>
          </div>
          <div className="space-y-3">
            {faqData.map((faq) => (
              <details key={faq.id} className="bg-white rounded-xl shadow-md border border-gray-200 p-3 sm:p-4 group hover:shadow-lg hover:border-cyan-300 transition-all duration-300">
                <summary className="cursor-pointer font-bold text-sm sm:text-base lg:text-lg text-gray-900 flex items-center justify-between group-hover:text-cyan-600 transition-colors duration-200">
                  <span className="pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 ml-2 text-blue-600 group-hover:text-cyan-600 group-open:rotate-45 transition-transform duration-300 text-xl font-light">+</span>
                </summary>
                <div className="pt-3 text-gray-800 text-xs sm:text-sm lg:text-base font-medium leading-relaxed border-t border-gray-100 mt-3">
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

export default FinTech;
