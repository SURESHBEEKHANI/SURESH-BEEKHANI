import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const USE_CASES_DATA = [
  {
    id: 1,
    title: "Intelligent Patient Scheduling",
    description: "Advanced AI-powered scheduling systems optimize appointment booking, reduce no-show rates by up to 40%, and maximize resource utilization across departments.",
    image: "/image/pages_img/patient-scheduling.jpg",
    alt: "Intelligent Patient Scheduling System"
  },
  {
    id: 2,
    title: "Clinical Workflow Automation",
    description: "Streamline administrative tasks, automate documentation processes, and optimize clinical workflows to reduce staff burden and improve operational efficiency by 35%.",
    image: "/image/pages_img/workflow-automation.jpg",
    alt: "Clinical Workflow Automation"
  },
  {
    id: 3,
    title: "AI-Powered Virtual Assistants",
    description: "Deploy intelligent chatbots that handle patient inquiries, manage appointment scheduling, provide medication reminders, and deliver 24/7 multilingual support.",
    image: "/image/pages_img/ai-chatbots-hospital.jpg",
    alt: "AI-Powered Healthcare Virtual Assistants"
  },
  {
    id: 4,
    title: "Predictive Healthcare Analytics",
    description: "Leverage machine learning to predict patient outcomes, identify readmission risks, forecast resource demands, and enable proactive, data-driven care decisions.",
    image: "/image/pages_img/predictive-analytics-hospital.jpg",
    alt: "Predictive Healthcare Analytics"
  }
];

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Patient Diagnostic System",
    description: "AI chatbots assist in rapid disease diagnosis, reducing doctor workload and improving patient care.",
    image: "/image/pages_img/Patient-Diagnostic-System.webp",
    link: "/portfolio/patient-diagnostic-system"
  },
  {
    id: 2,
    title: "Early Disease Detection AI",
    description: "Predictive analytics and medical imaging for early detection of diseases like cancer, cardiovascular, or neurological disorders.",
    image: "/image/pages_img/Early-Disease-Detection.jpg",
    link: "/portfolio/early-disease-detection-ai"
  },
  {
    id: 3,
    title: "Radiology Report Generator",
    description: "Automatically analyzes X-rays, MRIs, or CT scans to generate accurate radiology reports.",
    image: "/image/pages_img/Medical-Image-Analysis.webp",
    link: "/portfolio/radiology-report-generator"
  },
  {
    id: 4,
    title: "Remote Patient Monitoring",
    description: "Wearables and sensors continuously track vital signs and alert healthcare providers to abnormalities.",
    image: "/image/pages_img/remote-patient-monitoring.jpg",
    link: "/portfolio/remote-patient-monitoring"
  },
  {
    id: 5,
    title: "Personalized Wellness AI",
    description: "AI-driven meditation, stress management, and wellness programs tailored to individual patient needs.",
    image: "/image/pages_img/wellness-personalized.jpg",
    link: "/portfolio/personalized-wellness-ai"
  },
  {
    id: 6,
    title: "CBT Therapy AI",
    description: "AI-powered Cognitive Behavioral Therapy applications guide users through mental health exercises and track progress.",
    image: "/image/pages_img/cbt-therapy.jpg",
    link: "/portfolio/cbt-therapy-ai"
  },
  {
    id: 7,
    title: "Genomic Risk Analysis",
    description: "AI analyzes genetic data to identify disease susceptibility and provide personalized preventive care.",
    image: "/image/pages_img/genomic-risk.jpg",
    link: "/Pages-Portfolio/genomic-risk-analysis"
  },
  {
    id: 8,
    title: "Precision Medicine Support",
    description: "AI predicts patient-specific treatment plans using genetic and molecular data.",
    image: "/image/pages_img/Personalized-Medicine.png",
    link: "/Pages-Portfolio/precision-medicine-support"
  },
  {
    id: 9,
    title: "Drug Discovery AI",
    description: "AI predicts molecular structures and identifies promising drug candidates faster for research labs.",
    image: "/image/pages_img/DrugDiscover.jpg",
    link: "/Pages-Portfolio/drug-discovery-ai"
  },
  {
    id: 10,
    title: "Healthcare IoT & Smart Devices",
    description: "AI processes IoT medical device data for actionable insights and real-time hospital decision-making.",
    image: "/image/pages_img/healthcare-iot.jpg",
    link: "/portfolio/healthcare-iot-smart-devices"
  },
  {
    id: 11,
    title: "Healthcare Workflow Automation",
    description: "AI automates administrative tasks, patient scheduling, and documentation to reduce staff burden.",
    image: "/image/pages_img/workflow-automation.jpg",
    link: "/portfolio/healthcare-workflow-automation"
  },
  {
    id: 12,
    title: "AI Chatbots for Patient Support",
    description: "Intelligent AI chatbots handle inquiries, schedule appointments, and provide 24/7 patient assistance.",
    image: "/image/pages_img/ai-chatbots-hospital.jpg",
    link: "/portfolio/ai-chatbots-patient-support"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "How does AI improve hospital operations and patient care?",
    answer: "AI transforms hospital operations by optimizing patient scheduling, automating administrative workflows, predicting patient needs, and reducing documentation burden. Healthcare facilities implementing AI solutions typically experience 30-40% efficiency gains, improved patient satisfaction scores, and enhanced clinical decision-making capabilities."
  },
  {
    id: 2,
    question: "Will AI chatbots replace our hospital staff?",
    answer: "No, AI chatbots are designed to augment and support your existing staff, not replace them. These intelligent assistants handle routine inquiries, appointment scheduling, and basic patient questions, freeing your healthcare professionals to focus on complex patient care, critical decision-making, and meaningful patient interactions that require human expertise and empathy."
  },
  {
    id: 3,
    question: "What is predictive analytics in healthcare, and how does it benefit our facility?",
    answer: "Predictive analytics leverages machine learning algorithms to analyze historical patient data and forecast future outcomes, including readmission risks, disease progression, and resource requirements. This enables proactive interventions, optimized bed management, improved patient outcomes, and more efficient allocation of clinical resources."
  },
  {
    id: 4,
    question: "How do you ensure patient data security and HIPAA compliance?",
    answer: "We implement enterprise-grade security measures including end-to-end encryption, HIPAA-compliant data handling protocols, role-based access controls, regular security audits, and compliance monitoring. All AI systems are designed with privacy-by-design principles and meet or exceed healthcare industry security standards."
  },
  {
    id: 5,
    question: "What is the typical implementation timeline for AI solutions in our hospital?",
    answer: "Implementation timelines vary based on system complexity and organizational readiness, typically ranging from 3-6 months. We follow a phased approach including needs assessment, system integration, staff training, pilot testing, and full deployment. Our team provides comprehensive support throughout the process to ensure minimal disruption and smooth adoption."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/hospitals-clinics.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          AI Solutions for Hospitals & Clinics
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          Transform healthcare delivery with enterprise-grade AI solutions. Optimize patient scheduling, automate clinical workflows, deploy intelligent virtual assistants, and leverage predictive analytics to enhance operational efficiency and patient outcomes.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Learn More
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const HospitalsClinics: React.FC = () => {
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

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;

    const autoScrollInterval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
        // Loop back to start
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll right
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <Navbar />
      <HeroSection />
      
      <AnimatedCarousel useCases={useCases} title="Comprehensive Healthcare AI Solutions" subtitle="Enterprise-grade AI technology designed for modern healthcare facilities" />

      {/* AI Portfolio Showcase Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              AI Portfolio Showcase
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge AI solutions transforming healthcare delivery
            </p>
          </div>
          
          {/* Horizontal Scrollable Container */}
          <div className="relative">
            {/* Left Navigation Button */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
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
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm"
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

export default HospitalsClinics;
