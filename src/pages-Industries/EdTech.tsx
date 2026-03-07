import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const USE_CASES_DATA = [
  { id: 1, title: "Personalized Learning Paths", description: "AI adapts content to each learner's pace, style, and goals—increasing engagement and completion rates by 40%.", image: "/image/pages_img/wellness-personalized.jpg", alt: "Personalized Learning" },
  { id: 2, title: "Intelligent Tutoring Systems", description: "AI tutors provide instant feedback, explain concepts, and offer 24/7 support to enhance student outcomes.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "AI Tutors" },
  { id: 3, title: "Automated Grading & Assessment", description: "Reduce grading time by 70% with AI that evaluates essays, assignments, and assessments with consistency.", image: "/image/pages_img/workflow-automation.jpg", alt: "Automated Grading" },
  { id: 4, title: "Predictive Analytics", description: "Identify at-risk students early, recommend interventions, and optimize curriculum with data-driven insights.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Learning Analytics" }
];

const PORTFOLIO_DATA = [
  { id: 1, title: "Patient Diagnostic System", description: "AI-powered assessment and feedback systems for educational outcomes.", image: "/image/pages_img/Patient-Diagnostic-System.webp", link: "/portfolio/patient-diagnostic-system" },
  { id: 2, title: "Personalized Wellness AI", description: "Adaptive learning and personalized content recommendations for education.", image: "/image/pages_img/wellness-personalized.jpg", link: "/portfolio/personalized-wellness-ai" },
  { id: 3, title: "AI Chatbots for Patient Support", description: "Intelligent tutoring and student support chatbots for 24/7 assistance.", image: "/image/pages_img/ai-chatbots-hospital.jpg", link: "/portfolio/ai-chatbots-patient-support" }
];

const FAQ_DATA = [
  { id: 1, question: "How does AI enhance education and learning?", answer: "AI enables personalized learning paths, intelligent tutoring, automated grading, and predictive analytics. Institutions typically see improved engagement, higher completion rates, and more efficient teaching workflows." },
  { id: 2, question: "Can EdTech AI integrate with LMS platforms?", answer: "Yes, we integrate with major Learning Management Systems (Canvas, Moodle, Blackboard, etc.) and custom platforms via APIs." },
  { id: 3, question: "How does AI ensure fairness in grading?", answer: "Our AI grading systems use rubrics, human-in-the-loop validation, and bias detection to ensure consistent, fair, and transparent assessment." }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-violet-900 via-purple-800 to-violet-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/wellness-personalized.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">EdTech</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">Transform education with AI-powered personalized learning, intelligent tutoring, automated grading, and predictive analytics. Enhance student engagement and outcomes.</p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-violet-500 to-purple-700 hover:from-violet-600 hover:to-purple-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">Talk to an Expert</a>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

const EdTech: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-violet-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="EdTech AI Solutions" subtitle="AI technology for modern education" />
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-violet-900 via-purple-800 to-violet-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">AI Portfolio Showcase</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">Explore our AI solutions for education technology</p>
          </div>
          <div className="relative">
            <button onClick={() => scroll('left')} disabled={!canScrollLeft} className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-violet-900 p-3 rounded-full shadow-2xl transition-all duration-300 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`} aria-label="Scroll left"><ChevronLeft className="w-6 h-6" /></button>
            <button onClick={() => scroll('right')} disabled={!canScrollRight} className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-violet-900 p-3 rounded-full shadow-2xl transition-all duration-300 ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`} aria-label="Scroll right"><ChevronRight className="w-6 h-6" /></button>
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
                      <Link to={project.link} className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm">View Case Study <ArrowRight className="w-4 h-4" /></Link>
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
            <div className="flex justify-center mb-2"><div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-violet-500 to-purple-700 rounded-full" /></div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">Common questions about AI in education.</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq) => (
              <details key={faq.id} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-violet-700 transition-colors duration-200">{faq.question}<span className="ml-2 text-gray-900 group-hover:text-violet-700 group-open:hidden">+</span><span className="ml-2 text-gray-900 group-hover:text-violet-700 hidden group-open:inline">-</span></summary>
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

export default EdTech;
