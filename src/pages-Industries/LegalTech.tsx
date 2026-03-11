import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const USE_CASES_DATA = [
  { id: 1, title: "Contract Analysis & Review", description: "AI extracts clauses, identifies risks, and compares contracts—reducing review time by 70%.", image: "/image/pages_img/workflow-automation.jpg", alt: "Contract Analysis" },
  { id: 2, title: "Legal Document Search", description: "Semantic search across case law, contracts, and precedents for faster, more accurate research.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Legal Search" },
  { id: 3, title: "Compliance Monitoring", description: "Automate regulatory tracking, policy updates, and compliance reporting across jurisdictions.", image: "/image/pages_img/patient-scheduling.jpg", alt: "Compliance" },
  { id: 4, title: "AI Legal Assistants", description: "Chatbots for client intake, case triage, document drafting, and 24/7 legal support.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "Legal Chatbots" },
  { id: 5, title: "Due Diligence Automation", description: "AI-powered document review and analysis for M&A, real estate, and corporate transactions.", image: "/image/pages_img/Automated-Compliance-Monitoring.jpg", alt: "Due Diligence" },
  { id: 6, title: "Legal Document Generation", description: "Auto-generate contracts, briefs, and legal documents with AI-powered templates and clause libraries.", image: "/image/pages_img/AIconten.jpg", alt: "Document Generation" }
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
  { id: 1, question: "How does AI support legal and compliance?", answer: "AI automates contract review, legal research, compliance monitoring, and document management. Firms typically see 60-70% time savings on repetitive tasks and improved accuracy." },
  { id: 2, question: "Is LegalTech AI secure for sensitive data?", answer: "Yes, we implement enterprise-grade security, encryption, and compliance with legal data requirements. All solutions are designed for confidentiality and audit trails." },
  { id: 3, question: "Can AI replace lawyers?", answer: "No. AI augments legal work by handling routine tasks, enabling lawyers to focus on strategy, client counsel, and complex analysis." },
  { id: 4, question: "What is the ROI of implementing AI in legal operations?", answer: "Law firms typically see 60-70% reduction in document review time, 40-50% decrease in research hours, and significant cost savings. Most implementations achieve ROI within 6-9 months." },
  { id: 5, question: "How do you ensure AI maintains attorney-client privilege?", answer: "We implement strict data isolation, end-to-end encryption, and access controls. All AI systems are designed with legal privilege protection and can be deployed on-premises or in private cloud environments." }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/workflow-automation.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">LegalTech</h1>
        <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">Transform legal operations with AI-powered contract analysis, document search, compliance monitoring, and intelligent assistants. Enhance efficiency and accuracy.</p>
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
              AI-Driven Legal Technology Innovation
            </h2>
          </div>
          
          <div className="space-y-5 text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            <p>
              We are transforming legal operations with the power of Artificial Intelligence. By combining natural language processing, machine learning, and intelligent automation, we create smart legal solutions that support contract analysis, legal research, compliance monitoring, and document management.
            </p>
            <p>
              Our mission is to help law firms and legal departments deliver faster, more accurate, and cost-effective legal services through innovative AI-powered tools and platforms.
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
                  alt="Legal professionals using AI technology" 
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
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Intelligent Contract Analysis",
      description: "AI extracts key clauses, identifies risks, and compares contracts in minutes instead of hours. This reduces contract review time by 70% while improving accuracy and consistency across legal documents.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Advanced Legal Research",
      description: "Semantic search across case law, statutes, and precedents delivers relevant results instantly. AI-powered research reduces research time by 60% and surfaces insights human researchers might miss.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Automated Compliance Monitoring",
      description: "AI tracks regulatory changes, monitors policy updates, and automates compliance reporting across multiple jurisdictions. This reduces compliance costs by 50% while minimizing regulatory risk.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      title: "Due Diligence Automation",
      description: "AI-powered document review and analysis for M&A, real estate, and corporate transactions. Automated due diligence reduces review time by 80% and identifies critical issues faster.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
      title: "Legal Document Generation",
      description: "Auto-generate contracts, briefs, and legal documents with AI-powered templates and clause libraries. This accelerates document creation by 65% while maintaining quality and consistency.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Enhanced Legal Productivity",
      description: "Law firms using AI see 60-70% reduction in document review time, 40-50% decrease in research hours, and significant cost savings through automation, enabling focus on high-value legal work.",
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
              Capabilities and Benefits of AI and ML in LegalTech
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

const LegalTech: React.FC = () => {
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
      <AnimatedCarousel useCases={useCases} title="LegalTech AI Solutions" subtitle="AI technology for legal and compliance" />
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
              Everything you need to know about AI-powered legal solutions
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

export default LegalTech;
