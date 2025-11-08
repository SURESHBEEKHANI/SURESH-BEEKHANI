import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "AI Chatbots for Patient Support",
    description: "24/7 therapeutic conversation platform providing crisis intervention and emotional support.",
    image: "/image/pages_img/ai-chatbots-hospital.jpg",
    link: "/portfolio/ai-chatbots-patient-support"
  },
  {
    id: 2,
    title: "Patient Diagnostic System",
    description: "AI-powered sentiment analysis detecting mental health concerns through text and voice patterns.",
    image: "/image/pages_img/Patient-Diagnostic-System.webp",
    link: "/portfolio/patient-diagnostic-system"
  },
  {
    id: 3,
    title: "Personalized Wellness AI",
    description: "AI-driven meditation, stress management, and wellness programs tailored to individual patient needs.",
    image: "/image/pages_img/wellness-personalized.jpg",
    link: "/portfolio/personalized-wellness-ai"
  },
  {
    id: 4,
    title: "CBT Therapy AI",
    description: "AI-powered Cognitive Behavioral Therapy applications guide users through mental health exercises and track progress.",
    image: "/image/pages_img/cbt-therapy.jpg",
    link: "/portfolio/cbt-therapy-ai"
  }
];

const USE_CASES_DATA = [
  {
    id: 1,
    title: "AI Counseling Chatbots",
    description: "24/7 AI-powered mental health support providing therapeutic conversations and crisis intervention.",
    image: "/image/pages_img/counseling-chatbots.jpg",
    alt: "AI Counseling"
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    description: "AI analyzes text, voice, and behavior to detect mental health concerns and emotional states.",
    image: "/image/pages_img/sentiment-mental.jpg",
    alt: "Sentiment Analysis"
  },
  {
    id: 3,
    title: "Personalized Wellness Solutions",
    description: "AI-driven meditation, stress management, and wellness programs tailored to individual needs.",
    image: "/image/pages_img/wellness-personalized.jpg",
    alt: "Personalized Wellness"
  },
  {
    id: 4,
    title: "Cognitive Behavioral Therapy (CBT) Apps",
    description: "AI-powered CBT applications that guide users through therapeutic exercises and track progress over time.",
    image: "/image/pages_img/cbt-therapy.jpg",
    alt: "CBT Therapy"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "Can AI replace therapists?",
    answer: "No, AI complements therapists by providing accessible support and monitoring, but cannot replace human empathy and clinical expertise."
  },
  {
    id: 2,
    question: "How does sentiment analysis work?",
    answer: "AI analyzes language patterns, tone, and behavior to detect emotional states and mental health indicators with 85-95% accuracy."
  },
  {
    id: 3,
    question: "Is mental health AI confidential?",
    answer: "Yes, mental health AI platforms implement strict privacy measures, encryption, and HIPAA compliance to protect sensitive information."
  },
  {
    id: 4,
    question: "How effective are AI-powered CBT apps?",
    answer: "Studies show AI-powered CBT apps can reduce anxiety and depression symptoms by 30-50% when used consistently, making therapy more accessible."
  },
  {
    id: 5,
    question: "Can AI detect mental health crises?",
    answer: "Yes, AI can analyze communication patterns, behavioral changes, and risk factors to identify potential mental health crises and alert appropriate support systems."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/mental-wellness.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Mental Health & Wellness AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          AI counseling chatbots, sentiment analysis, and personalized wellness solutions for accessible mental health support.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-purple-500 to-pink-700 hover:from-purple-600 hover:to-pink-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Talk to an Expert
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const MentalHealthWellness: React.FC = () => {
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
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setIsAutoScrolling(false);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;

    const autoScrollInterval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({
          left: container.scrollLeft + 400,
          behavior: 'smooth'
        });
      }
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <Navbar />
      <HeroSection />
      
      <AnimatedCarousel useCases={useCases} title="Mental Health Solutions" subtitle="AI-powered wellness support" />

      {/* AI Portfolio Showcase Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              AI Portfolio Showcase
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge mental health AI solutions
            </p>
          </div>
          
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-purple-900 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-purple-900 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-8 scrollbar-hide" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
                {portfolioData.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 w-80 sm:w-96 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-base font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="flex justify-center mb-2">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Common questions about mental health and wellness AI solutions.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq) => (
              <details key={faq.id} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                  {faq.question}
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
                </summary>
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

export default MentalHealthWellness;
