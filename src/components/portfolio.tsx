import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [

  {
    title: "AI-Powered Electronic Health Record",
    description:
      "Streamline healthcare data management and improve patient outcomes with AI-powered EHR systems.",
    image: "/image/Portfolio-img/ai-powered-ehr.png",
    link: "/portfolio/ai-powered-electronic-health-record",
    heroBackground: "bg-[url('/image/pages_img/ai-fraud-detection.jpg')] bg-cover bg-center"
  },
  {
    title: "AI-Powered Patient Management System",
    description:
      "Unified patient records, intelligent care coordination, and predictive insights for proactive population health management.",
    image: "/image/Portfolio-img/AI-Powered Patient Management System.png",
    link: "/portfolio/ai-powered-patient-management-system"
  },
  {
    title: "AI Appointment Management Systems",
    description:
      "Intelligent scheduling that automates bookings, reduces no-shows, and optimizes appointment workflows for healthcare providers.",
    image: "/image/Portfolio-img/AI Appointment Management Systems.png",
    link: "/portfolio/ai-appointment-management-systems"
  },
  {
    title: "AI-Powered Hospital Management System",
    description:
      "Unified hospital operations platform with AI-driven bed management, staff scheduling, and supply chain optimization.",
    image: "/image/Portfolio-img/AI-Powered Hospital Management System.png",
    link: "/portfolio/ai-powered-hospital-management-system"
  },
  {
    title: "AI-Powered Telemedicine Systems",
    description:
      "AI-powered telemedicine systems enable secure virtual healthcare through intelligent automation, remote consultations, and real-time patient communication.",
    image: "/image/Portfolio-img/AI-Powered Telemedicine Systems.png",
    link: "/portfolio/ai-powered-telemedicine-systems"
  },
  {
    title: "AI-Powered Clinical Documentation System",
    description:
      "Ambient AI captures patient encounters and auto-generates structured clinical notes, medical coding suggestions, and EHR-ready documentation to reduce physician burnout.",
    image: "/image/Portfolio-img/AI-Powered-Clinical Documentation System.png",
    link: "/portfolio/ai-clinical-documentation-system"
  },
  {
    title: "AI Personalized Learning Platform",
    description:
      "Adaptive learning experiences that dynamically adjust content difficulty and pacing to each learner’s performance.",
    image: "/image/Portfolio-img/ai-personalized-learning-platform.jpg",
    link: "/portfolio/ai-personalized-learning-platform"
  },
  {
    title: "AI-Powered Medical Imaging System",
    description:
      "AI that pre-screens radiology studies, highlights suspicious regions, and prioritizes high-risk cases for faster, more accurate diagnoses.",
    image: "/image/Portfolio-img/AI-Powered Medical Imaging System.png",
    link: "/portfolio/ai-powered-medical-imaging-system"
  },

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
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/Portfolio-img/ia.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <p className="heading-3 font-extrabold text-gray-100 max-w-4xl mx-auto leading-relaxed tracking-tight drop-shadow-lg">
              Explore the success stories driven by our high-impact project implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - white background, cards keep gradient accents */}
      <section className="py-16 bg-white min-h-screen relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-center">
            {projects.map((project, idx) => {
              const isVisible = visibleStates[idx];
              return (
                <div
                  key={project.link}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  data-index={idx}
                  className={`group bg-white p-0 border border-gray-100 rounded-none transition-all duration-700 ease-out will-change-transform shadow-md hover:shadow-2xl hover:border-[#f01eff]/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                  <div className={`flex flex-col items-start text-left bg-white rounded-none h-full p-6 transition-colors duration-300`}>
                    <div className="relative w-full overflow-hidden rounded-none shadow-inner">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-80 w-full object-cover rounded-none transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="mt-5 text-base md:text-lg font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-indigo-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mt-2 mb-6 text-xs md:text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                      {project.description}
                    </p>
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 px-8 py-3.5 min-h-[44px] bg-gradient-to-r from-[#f01eff] via-[#f755d7] to-[#ec4899] text-white font-bold text-sm tracking-wide rounded-md hover:shadow-[0_10px_30px_rgba(255,14,163,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                      aria-label={`View case study for ${project.title}`}
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
        /* Reserved for optional, component-scoped micro-animations */
      `}</style>
    </>
  );
};

export default Portfolio;

