import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Patient Diagnostic System",
    description:
      "AI chatbots assist in rapid disease diagnosis, reducing doctor workload and improving patient care.",
    image: "/image/pages_img/Patient-Diagnostic-System.webp",
    link: "/portfolio/patient-diagnostic-system"
  },
  {
    title: "Early Disease Detection AI",
    description:
      "Predictive analytics and medical imaging for early detection of diseases like cancer, cardiovascular, or neurological disorders.",
    image: "/image/pages_img/Early-Disease-Detection.jpg",
    link: "/portfolio/early-disease-detection-ai"
  },
  {
    title: "Radiology Report Generator",
    description:
      "Automatically analyzes X-rays, MRIs, or CT scans to generate accurate radiology reports.",
    image: "/image/pages_img/Medical-Image-Analysis.webp",
    link: "/portfolio/radiology-report-generator"
  },
  {
    title: "Remote Patient Monitoring",
    description:
      "Wearables and sensors continuously track vital signs and alert healthcare providers to abnormalities.",
    image: "/image/pages_img/remote-patient-monitoring.jpg",
    link: "/portfolio/remote-patient-monitoring"
  },
  {
    title: "Personalized Wellness AI",
    description:
      "AI-driven meditation, stress management, and wellness programs tailored to individual patient needs.",
    image: "/image/pages_img/wellness-personalized.jpg",
    link: "/portfolio/personalized-wellness-ai"
  },
  {
    title: "CBT Therapy AI",
    description:
      "AI-powered Cognitive Behavioral Therapy applications guide users through mental health exercises and track progress.",
    image: "/image/pages_img/cbt-therapy.jpg",
    link: "/portfolio/cbt-therapy-ai"
  },
  {
    title: "Genomic Risk Analysis",
    description:
      "AI analyzes genetic data to identify disease susceptibility and provide personalized preventive care.",
    image: "/image/pages_img/genomic-risk.jpg",
    link: "/portfolio/genomic-risk-analysis"
  },
  {
    title: "Precision Medicine Support",
    description:
      "AI predicts patient-specific treatment plans using genetic and molecular data.",
    image: "/image/pages_img/Personalized-Medicine.png",
    link: "/portfolio/precision-medicine-support"
  },
  {
    title: "Drug Discovery & Molecule Prediction AI",
    description:
      "AI predicts molecular structures and identifies promising drug candidates faster for research labs.",
    image: "/image/pages_img/DrugDiscover.jpg",
    link: "/portfolio/drug-discovery-ai"
  },
  {
    title: "Healthcare IoT & Smart Devices",
    description:
      "AI processes IoT medical device data for actionable insights and real-time hospital decision-making.",
    image: "/image/pages_img/healthcare-iot.jpg",
    link: "/portfolio/healthcare-iot-smart-devices"
  },
  {
    title: "Healthcare Workflow Automation",
    description:
      "AI automates administrative tasks, patient scheduling, and documentation to reduce staff burden.",
    image: "/image/pages_img/workflow-automation.jpg",
    link: "/portfolio/healthcare-workflow-automation"
  },
  {
    title: "AI Chatbots for Patient Support",
    description:
      "Intelligent AI chatbots handle inquiries, schedule appointments, and provide 24/7 patient assistance.",
    image: "/image/pages_img/ai-chatbots-hospital.jpg",
    link: "/portfolio/ai-chatbots-patient-support"
  },
  {
    title: "Federated Privacy Compliance",
    description:
      "Privacy-preserving AI trains models across institutions securely without sharing sensitive patient data.",
    image: "/image/pages_img/Secure-Data-Sharing.jpg",
    link: "/portfolio/federated-privacy-compliance"
  },
  {
    title: "Medical Anomaly Detection",
    description:
      "AI identifies subtle anomalies in medical imaging or patient data that might be missed by human review.",
    image: "/image/pages_img/anomaly-detection-imaging.jpg",
    link: "/portfolio/medical-anomaly-detection"
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
      <section className="py-16 ai-section min-h-screen relative overflow-hidden">
        {/* AI Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-3xl animate-aurora"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-3xl animate-aurora"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-purple/5 to-ai-cyan/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
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

