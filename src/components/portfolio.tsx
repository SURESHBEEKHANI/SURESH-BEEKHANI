import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI-Driven Law GPT",
    description:
      "Law GPT uses to quickly accurately generate legal text, helping professionals manage complex legal tasks  ease.",
    image: "/image/pages_img/AI-Driven-Law-GPT.jpg",
    link: "/portfolio/ai-driven-law-gpt"
  },
  {
    title: "AI-Powered Image Generator",
    description:
      "AI Image Generator solves the need for custom graphics. Instantly create unique images for posts without a designer.",
    image: "/image/pages_img/AI-image-generator.png",
    link: "/portfolio/ai-powered-image-generator"
  },
  {
    title: "Social Media Content Creator",
    description:
      "Social Media Content Creator streamlines content creation and scheduling. Manage multiple platforms and engage audiences easily.",
    image: "/image/pages_img/Social-Media-Content-Creator.png",
    link: "/portfolio/social-media-content-creator"
  },
  {
    title: "Patient Diagnostic System",
    description:
      "Patient Diagnostic System uses AI chatbots for faster disease diagnosis. It reduces doctors' workload and improves patient care.",
    image: "/image/pages_img/Patient-Diagnostic-System.webp",
    link: "/portfolio/patient-diagnostic-system"
  },
  {
    title: "AI Legal Contract Analyzer",
    description:
      "Legal Contract Analyzer automates contract review with AI. Boosts accuracy, efficiency, compliance for legal teams.",
    image: "/image/pages_img/AI-Legal-Contract-Analyzer.png",
    link: "/portfolio/ai-legal-contract-analyzer"
  },
  {
    title: "Personalized Travel Assistant",
    description:
      "AI Trip Planner creates real-time, personalized itineraries. Plan smarter trips based on your preferences and live data.",
    image: "/image/pages_img/Personalized-Travel-Assistant.webp",
    link: "/portfolio/personalized-travel-assistant"
  },
  {
    title: "Early Disease Detection AI",
    description:
      "Advanced AI system for early disease detection using medical imaging and predictive analytics to improve patient outcomes.",
    image: "/image/pages_img/Early-Disease-Detection.jpg",
    link: "/portfolio/early-disease-detection-ai"
  },
  {
    title: "Real-Time Fraud Detection",
    description:
      "AI-powered platform that detects and prevents fraudulent activities in real-time, protecting businesses from financial losses.",
    image: "/image/pages_img/Real-Time-Threat-Detection.jpeg",
    link: "/portfolio/real-time-fraud-detection"
  },
  {
    title: "Personalized Learning AI",
    description:
      "Intelligent tutoring system that adapts to individual learning styles and progress levels for enhanced personalized education.",
    image: "/image/pages_img/Personalize-Learning.jpg",
    link: "/portfolio/personalized-learning-ai"
  },
  {
    title: "Solar Output Forecasting",
    description:
      "AI-driven renewable energy forecasting system that predicts solar power generation for optimal energy management.",
    image: "/image/pages_img/Renewable-Energy-Forecasting.jpg",
    link: "/portfolio/solar-output-forecasting"
  },
  {
    title: "Dynamic Shelf Restocking",
    description:
      "Smart inventory management system that uses AI to optimize shelf restocking and reduce retail waste efficiently.",
    image: "/image/pages_img/retail-Inventory-Optimization.jpg",
    link: "/portfolio/dynamic-shelf-restocking"
  },
  {
    title: "Product Recommendation AI",
    description:
      "Intelligent product recommendation system that adapts to user preferences and behavior for enhanced shopping experience.",
    image: "/image/pages_img/Personalized-Recommendations-retail.webp",
    link: "/portfolio/product-recommendation-ai"
  },
  {
    title: "Radiology Report Generator",
    description:
      "Advanced AI-powered platform that automatically analyzes medical images and generates comprehensive radiological reports accurately.",
    image: "/image/pages_img/Medical-Image-Analysis.webp",
    link: "/portfolio/radiology-report-generator"
  },
  {
    title: "Federated Privacy Compliance",
    description:
      "Revolutionary privacy-preserving AI platform that enables collaborative model training without data sharing securely and efficiently.",
    image: "/image/pages_img/Secure-Data-Sharing.jpg",
    link: "/portfolio/federated-privacy-compliance"
  }
];

const Portfolio: React.FC = () => {
  // Track which cards are visible for scroll-reveal animations
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    () => projects.map(() => false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setVisibleStates((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section - Styled like ChatbotDevelopment hero */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <h1 id="portfolio-heading" className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
              AI Portfolio
            </h1>
            <p className="body-large text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
              Explore how innovative AI solutions are transforming industries and driving measurable impact. From healthcare diagnostics to legal automation, discover cutting-edge AI projects that showcase the power of artificial intelligence in solving real-world challenges.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
              <a href="/#contact" className="btn-primary text-center min-h-[44px] flex items-center justify-center">
                Talk to an Expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end" aria-hidden="true" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-tr from-purple-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-8 justify-center">
            {projects.map((project, idx) => {
              const isVisible = visibleStates[idx];
              return (
                <div
                  key={idx}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  data-index={idx}
                  className={`group bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-[1px] rounded-2xl transition-all duration-700 ease-out will-change-transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className={`flex flex-col items-start text-left bg-white rounded-2xl h-full p-6 shadow-sm transition-colors duration-300 hover:shadow-xl`}>
                    <div className="relative w-full overflow-hidden rounded-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-80 w-full object-cover rounded-xl transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="mt-5 text-xl md:text-2xl font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-indigo-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mt-2 mb-6 text-base md:text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                      {project.description}
                    </p>
                    <Link
                      to={project.link}
                      className="btn-primary inline-flex items-center gap-2 px-6 py-3 min-h-[44px]"
                      aria-label={`View case study for ${project.title}`}
                    >
                      View Case Study
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                        aria-hidden="true"
                      >
                        <path d="M13.5 4.5a1 1 0 011 1V9a1 1 0 002 0V5.5a3 3 0 00-3-3H9a1 1 0 100 2h4.5z" />
                        <path d="M20 12a8 8 0 11-8-8 1 1 0 010 2 6 6 0 106 6 1 1 0 012 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />

      {/* Component-scoped styles for subtle animations */}
      <style>{`
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -12px) scale(1.05); }
          66% { transform: translate(-18px, 12px) scale(0.98); }
        }
      `}</style>
    </>
  );
};

export default Portfolio;

