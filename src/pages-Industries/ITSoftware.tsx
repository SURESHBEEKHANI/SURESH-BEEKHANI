import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const USE_CASES_DATA = [
  { id: 1, title: "AI-Powered Development Tools", description: "Code generation, automated testing, and intelligent debugging to accelerate development by 40%.", image: "/image/pages_img/workflow-automation.jpg", alt: "Dev Tools" },
  { id: 2, title: "Intelligent IT Support", description: "AI chatbots for ticketing, incident resolution, and 24/7 IT helpdesk automation.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "IT Support" },
  { id: 3, title: "DevOps & Infrastructure", description: "Predictive monitoring, automated scaling, and anomaly detection for reliable operations.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "DevOps" },
  { id: 4, title: "Enterprise Software Solutions", description: "Custom AI integrations for ERP, CRM, and business systems—driving efficiency and insights.", image: "/image/pages_img/patient-scheduling.jpg", alt: "Enterprise Software" },
  { id: 5, title: "Code Quality & Security", description: "AI-powered code review, vulnerability detection, and automated security testing for safer software.", image: "/image/pages_img/Automated-Compliance-Monitoring.jpg", alt: "Code Security" },
  { id: 6, title: "Intelligent Documentation", description: "Auto-generate technical documentation, API specs, and code comments with AI assistance.", image: "/image/pages_img/AIconten.jpg", alt: "Documentation" }
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
  { id: 1, question: "How does AI enhance IT and software development?", answer: "AI accelerates development with code assist, automated testing, and intelligent operations. IT teams see 30-50% productivity gains and improved system reliability." },
  { id: 2, question: "Can AI solutions integrate with existing tech stacks?", answer: "Yes, we build solutions that integrate with your current tools—cloud providers, CI/CD, ticketing systems, and enterprise software." },
  { id: 3, question: "What types of technology solutions do you build?", answer: "We build custom AI solutions: chatbots, automation, predictive analytics, computer vision, NLP, and integrations for ERP, CRM, and internal systems." },
  { id: 4, question: "What is the ROI of implementing AI in IT operations?", answer: "IT teams typically see 30-50% reduction in incident response time, 40-60% decrease in manual tasks, and significant cost savings through automation. Most implementations achieve ROI within 4-8 months." },
  { id: 5, question: "How do you ensure AI solutions are secure and compliant?", answer: "We implement enterprise-grade security, SOC 2 compliance, end-to-end encryption, and strict access controls. All solutions undergo security audits and penetration testing before deployment." }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/workflow-automation.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
          IT & Software
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
          Transform your technology stack with AI-powered development tools, intelligent IT support, DevOps automation, and enterprise software solutions. Scale smarter.
        </p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              AI-Driven IT & <span style={{ color: '#a855f7' }}>Software Innovation</span>
            </h2>
          </div>
          
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              We are transforming IT operations and software development with the power of Artificial Intelligence. By combining machine learning, intelligent automation, and predictive analytics, we create smart solutions that support faster development cycles, automated operations, proactive monitoring, and enhanced security.
            </p>
            <p>
              Our mission is to help technology teams deliver more reliable, efficient, and innovative software solutions through cutting-edge AI-powered tools and platforms.
            </p>
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
                  alt="IT professionals using AI-powered development tools" 
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
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "AI-Powered Development Tools",
      description: "Intelligent code completion, automated testing, and bug detection accelerate development by 40%. AI assists developers with code generation, refactoring suggestions, and real-time quality checks.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Intelligent IT Support Automation",
      description: "AI chatbots and virtual assistants handle 60-70% of IT tickets automatically, providing instant resolutions for common issues and routing complex problems to the right teams with context.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      title: "DevOps & Infrastructure Intelligence",
      description: "Predictive monitoring detects issues before they impact users. AI-powered anomaly detection, automated scaling, and intelligent alerting reduce downtime by 50% and improve system reliability.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Code Security & Quality Assurance",
      description: "AI-powered code review identifies vulnerabilities, security flaws, and quality issues in real-time. Automated security testing and compliance checks ensure safer, more reliable software releases.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      title: "Enterprise Integration Solutions",
      description: "AI seamlessly integrates with ERP, CRM, and business systems to automate workflows, extract insights, and enhance decision-making across the organization with minimal manual intervention.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Accelerated Development Cycles",
      description: "IT teams using AI-powered tools see 30-50% faster development cycles, 40% reduction in bugs, and 60% improvement in code quality through intelligent automation and predictive insights.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#01010c] relative overflow-hidden">
    {/* High-Tech Background Layers */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center space-y-4 mb-20 animate-fade-in">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
          Capabilities and Benefits of <span style={{ color: '#a855f7' }}>AI and ML in IT & Software</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Driving innovation in <span className="text-gray-100 font-bold">technology operations</span> and automated software lifecycles.
        </p>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {capabilities.map((capability, index) => (
          <div 
            key={index}
            className="modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300"
          >
            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center mb-2 mx-auto text-white shadow-lg`}>
              <svg 
                className="w-7 h-7 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
              </svg>
            </div>

            {/* Content */}
            <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 text-center w-full">
              {capability.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">
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

const ITSoftware: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <HeroSection />
      <ProfessionalSection />
      <CapabilitiesSection />
      <AnimatedCarousel useCases={useCases} title="IT & Software AI Solutions" subtitle="AI technology for modern software and IT" />
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-200 shadow-sm">
                Success Stories
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Real-World <span style={{ color: '#a855f7' }}>AI Solutions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Discover how our cutting-edge AI technology has transformed <span className="text-slate-900 font-bold">technology delivery</span> and infrastructure worldwide.
            </p>
          </div>
          
          <div className="relative group">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll('left')} 
              disabled={!canScrollLeft} 
              className={`absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#6D28D9] via-[#a855f7] to-[#ec4899] hover:from-[#5b21b6] hover:via-[#9333ea] hover:to-[#db2777] text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button 
              onClick={() => scroll('right')} 
              disabled={!canScrollRight} 
              className={`absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#6D28D9] via-[#a855f7] to-[#ec4899] hover:from-[#5b21b6] hover:via-[#9333ea] hover:to-[#db2777] text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
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
                    className="flex-shrink-0 w-80 sm:w-[420px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-purple-200 group/card transform hover:-translate-y-2"
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
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight group-hover/card:text-[#a855f7] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
              <Link 
                to={project.link} 
                className="inline-flex items-center gap-1.5 text-[#a855f7] font-bold text-sm hover:translate-x-1 transition-transform"
              >
                Learn More 
                <ArrowRight className="w-4 h-4" />
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-200">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-5">
              Frequently Asked <span style={{ color: '#a855f7' }}>Questions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Everything you need to know about our <span className="text-slate-900 font-bold">AI-powered IT</span> solutions and technology infrastructure.
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

export default ITSoftware;

