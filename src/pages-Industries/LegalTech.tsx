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
  { id: 4, title: "AI Legal Assistants", description: "Chatbots for client intake, case triage, document drafting, and 24/7 legal support.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "Legal Chatbots" }
];

const PORTFOLIO_DATA = [
  { id: 1, title: "Healthcare Workflow Automation", description: "Automate legal document workflows, contract routing, and compliance processes.", image: "/image/pages_img/workflow-automation.jpg", link: "/portfolio/healthcare-workflow-automation" },
  { id: 2, title: "Federated Privacy Compliance", description: "Secure, compliant AI for sensitive legal and regulatory data.", image: "/image/pages_img/Patient-Diagnostic-System.webp", link: "/portfolio/federated-privacy-compliance" },
  { id: 3, title: "AI Chatbots for Patient Support", description: "Intelligent chatbots for client intake, case inquiries, and legal assistance.", image: "/image/pages_img/ai-chatbots-hospital.jpg", link: "/portfolio/ai-chatbots-patient-support" }
];

const FAQ_DATA = [
  { id: 1, question: "How does AI support legal and compliance?", answer: "AI automates contract review, legal research, compliance monitoring, and document management. Firms typically see 60-70% time savings on repetitive tasks and improved accuracy." },
  { id: 2, question: "Is LegalTech AI secure for sensitive data?", answer: "Yes, we implement enterprise-grade security, encryption, and compliance with legal data requirements. All solutions are designed for confidentiality and audit trails." },
  { id: 3, question: "Can AI replace lawyers?", answer: "No. AI augments legal work by handling routine tasks, enabling lawyers to focus on strategy, client counsel, and complex analysis." }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/workflow-automation.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">LegalTech – Legal & Compliance</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">Transform legal operations with AI-powered contract analysis, document search, compliance monitoring, and intelligent assistants. Enhance efficiency and accuracy.</p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-slate-600 to-gray-800 hover:from-slate-500 hover:to-gray-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">Talk to an Expert</a>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

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
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      const targetScroll = direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      setIsAutoScrolling(false);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;
    const autoScrollInterval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) container.scrollTo({ left: 0, behavior: 'smooth' });
      else container.scrollTo({ left: container.scrollLeft + 400, behavior: 'smooth' });
    }, 3000);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="LegalTech AI Solutions" subtitle="AI technology for legal and compliance" />
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">AI Portfolio Showcase</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">Explore our AI solutions for legal and compliance</p>
          </div>
          <div className="relative">
            <button onClick={() => scroll('left')} disabled={!canScrollLeft} className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-2xl transition-all duration-300 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`} aria-label="Scroll left"><ChevronLeft className="w-6 h-6" /></button>
            <button onClick={() => scroll('right')} disabled={!canScrollRight} className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-2xl transition-all duration-300 ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`} aria-label="Scroll right"><ChevronRight className="w-6 h-6" /></button>
            <div ref={scrollContainerRef} className="overflow-x-auto pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} onMouseEnter={() => setIsAutoScrolling(false)} onMouseLeave={() => setIsAutoScrolling(true)}>
              <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
                {portfolioData.map((project) => (
                  <div key={project.id} className="flex-shrink-0 w-80 sm:w-96 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-base font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{project.description}</p>
                      <Link to={project.link} className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm">View Case Study <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="flex justify-center mb-2"><div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-slate-500 to-gray-700 rounded-full" /></div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">Common questions about AI in legal and compliance.</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq) => (
              <details key={faq.id} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-slate-700 transition-colors duration-200">{faq.question}<span className="ml-2 text-gray-900 group-hover:text-slate-700 group-open:hidden">+</span><span className="ml-2 text-gray-900 group-hover:text-slate-700 hidden group-open:inline">-</span></summary>
                <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">{faq.answer}</div>
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
