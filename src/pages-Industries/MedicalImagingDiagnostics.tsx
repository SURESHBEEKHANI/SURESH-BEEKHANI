import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Radiology Report Generator",
    description: "Automatically analyzes X-rays, MRIs, or CT scans to generate accurate radiology reports.",
    image: "/image/pages_img/Medical-Image-Analysis.webp",
    link: "/portfolio/radiology-report-generator"
  },
  {
    id: 2,
    title: "Early Disease Detection AI",
    description: "Deep learning models analyze medical images to detect abnormalities with radiologist-level accuracy.",
    image: "/image/pages_img/xray-mri-ct.jpg",
    link: "/portfolio/early-disease-detection-ai"
  },
  {
    id: 3,
    title: "Medical Anomaly Detection",
    description: "AI-powered microscopic image analysis for cancer detection and tissue classification.",
    image: "/image/pages_img/pathology-analysis.jpg",
    link: "/portfolio/medical-anomaly-detection"
  },
  {
    id: 4,
    title: "Patient Diagnostic System",
    description: "AI identifies subtle anomalies in medical images that may be missed by human review.",
    image: "/image/pages_img/anomaly-detection-imaging.jpg",
    link: "/portfolio/patient-diagnostic-system"
  }
];

const USE_CASES_DATA = [
  {
    id: 1,
    title: "X-ray/MRI/CT Analysis",
    description: "Deep learning models analyze medical images to detect abnormalities with radiologist-level accuracy.",
    image: "/image/pages_img/xray-mri-ct.jpg",
    alt: "Medical Image Analysis"
  },
  {
    id: 2,
    title: "Anomaly Detection",
    description: "AI identifies subtle anomalies in medical images that may be missed by human review.",
    image: "/image/pages_img/anomaly-detection-imaging.jpg",
    alt: "Anomaly Detection"
  },
  {
    id: 3,
    title: "Radiologist Workflow Integration",
    description: "Seamless integration with PACS systems to enhance radiologist productivity and accuracy.",
    image: "/image/pages_img/radiologist-workflow.jpg",
    alt: "Workflow Integration"
  },
  {
    id: 4,
    title: "Pathology Image Analysis",
    description: "AI-powered microscopic image analysis for cancer detection and tissue classification in pathology specimens.",
    image: "/image/pages_img/pathology-analysis.jpg",
    alt: "Pathology Analysis"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "How accurate is AI in medical imaging?",
    answer: "AI achieves 90-95% accuracy in detecting many conditions, often matching or exceeding human radiologist performance."
  },
  {
    id: 2,
    question: "Does AI replace radiologists?",
    answer: "No, AI assists radiologists by highlighting potential issues and reducing workload, allowing them to focus on complex cases."
  },
  {
    id: 3,
    question: "What imaging types can AI analyze?",
    answer: "AI can analyze X-rays, CT scans, MRIs, ultrasounds, mammograms, and other medical imaging modalities."
  },
  {
    id: 4,
    question: "How long does AI analysis take?",
    answer: "AI analysis typically takes seconds to minutes, significantly faster than traditional manual review which can take 30-60 minutes per case."
  },
  {
    id: 5,
    question: "Is patient data secure with AI imaging systems?",
    answer: "Yes, AI imaging systems comply with HIPAA and other healthcare regulations, using encrypted data transmission and secure cloud infrastructure."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-teal-900 via-green-800 to-teal-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/medical-diagnostics.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Medical Imaging & Diagnostics AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          AI-assisted X-ray/MRI/CT analysis, anomaly detection, and radiologist workflow integration for faster, more accurate diagnostics.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-teal-500 to-green-700 hover:from-teal-600 hover:to-green-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          See Solutions
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const MedicalImagingDiagnostics: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-teal-100">
      <Navbar />
      <HeroSection />
      
      <AnimatedCarousel useCases={useCases} title="Medical Imaging Solutions" subtitle="AI-powered diagnostic imaging" />

      {/* AI Portfolio Showcase Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-teal-900 via-green-800 to-teal-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              AI Portfolio Showcase
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge medical imaging AI solutions
            </p>
          </div>
          
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-teal-900 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-teal-900 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
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
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm"
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

      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <details 
                key={faq.id} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-blue-100/50 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <summary className="cursor-pointer font-bold text-lg text-gray-900 flex items-start justify-between gap-4 list-none hover:text-blue-700 transition-colors duration-300">
                  <span className="flex-1">{faq.question}</span>
                  <svg 
                    className="w-6 h-6 text-blue-600 flex-shrink-0 transform group-open:rotate-180 transition-all duration-500 ease-in-out mt-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="pt-5 text-base text-gray-700 leading-relaxed border-t border-blue-200/50 mt-4 animate-fade-in">
                    {faq.answer}
                  </p>
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

export default MedicalImagingDiagnostics;
