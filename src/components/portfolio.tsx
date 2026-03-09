import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Fraud Detection System",
    description:
      "Real-time AI models detect fraudulent transactions and unusual behavior across banking, fintech, and e‑commerce platforms.",
    image: "/image/Portfolio-img/ai-fraud-detection.jpg",
    link: "/portfolio/ai-fraud-detection-system",
    heroBackground: "bg-[url('/image/pages_img/ai-fraud-detection.jpg')] bg-cover bg-center"
  },
  {
    title: "AI Personal Finance Advisor",
    description:
      "Intelligent financial coaching that analyzes spending, goals, and risk appetite to provide personalized money management advice.",
    image: "/image/Portfolio-img/ai-personal-finance-advisor.jpg",
    link: "/portfolio/ai-personal-finance-advisor"
  },
  {
    title: "AI-Powered Electronic Health Record",
    description:
      "Streamline healthcare data management and improve patient outcomes with AI-powered EHR systems.",
    image: "/image/Portfolio-img/ai-powered-ehr.jpg",
    link: "/portfolio/ai-powered-electronic-health-record",
    heroBackground: "bg-[url('/image/pages_img/ai-fraud-detection.jpg')] bg-cover bg-center"
  },
  {
    title: "AI Medical Imaging Assistant",
    description:
      "Computer vision models analyze X‑rays, MRIs, and CT scans to highlight anomalies and support radiologist decision-making.",
    image: "/image/Portfolio-img/ai-medical-imaging-assistant.jpg",
    link: "/portfolio/ai-medical-imaging-assistant"
  },
  {
    title: "AI Product Recommendation Engine",
    description:
      "Personalized product recommendations powered by user behavior, purchase history, and real-time context for higher conversions.",
    image: "/image/Portfolio-img/ai-product-recommendation-engine.jpg",
    link: "/portfolio/ai-product-recommendation-engine"
  },
  {
    title: "AI Demand Forecasting System",
    description:
      "Predictive models forecast demand across SKUs, locations, and time to optimize inventory, pricing, and supply chain decisions.",
    image: "/image/Portfolio-img/ai-demand-forecasting-system.jpg",
    link: "/portfolio/ai-demand-forecasting-system"
  },
  {
    title: "AI Personalized Learning Platform",
    description:
      "Adaptive learning experiences that dynamically adjust content difficulty and pacing to each learner’s performance.",
    image: "/image/Portfolio-img/ai-personalized-learning-platform.jpg",
    link: "/portfolio/ai-personalized-learning-platform"
  },
  {
    title: "AI Automated Grading System",
    description:
      "Automated evaluation of assignments, quizzes, and free‑text answers with explainable scoring and instant feedback.",
    image: "/image/Portfolio-img/ai-automated-grading-system.jpg",
    link: "/portfolio/ai-automated-grading-system"
  },
  {
    title: "AI Personal Fitness Coach",
    description:
      "Computer vision and analytics track workouts, posture, and progress to deliver personalized coaching and training plans.",
    image: "/image/Portfolio-img/ai-personal-fitness-coach.jpg",
    link: "/portfolio/ai-personal-fitness-coach"
  },
  {
    title: "AI Nutrition Planner",
    description:
      "Meal plans tailored to health goals, dietary restrictions, and biometrics, with continuous AI optimization.",
    image: "/image/Portfolio-img/ai-nutrition-planner.jpg",
    link: "/portfolio/ai-nutrition-planner"
  },
  {
    title: "AI Contract Analysis System",
    description:
      "NLP-powered contract review that extracts key clauses, flags risky terms, and accelerates legal workflows.",
    image: "/image/Portfolio-img/ai-contract-analysis-system.jpg",
    link: "/portfolio/ai-contract-analysis-system"
  },
  {
    title: "AI Legal Research Assistant",
    description:
      "Retrieval-augmented generation surfaces relevant cases, statutes, and legal insights in natural language.",
    image: "/image/Portfolio-img/ai-legal-research-assistant.jpg",
    link: "/portfolio/ai-legal-research-assistant"
  },
  {
    title: "AI Robo-Advisor",
    description:
      "Automated portfolio allocation and rebalancing driven by risk profiles, goals, and real-time market signals.",
    image: "/image/Portfolio-img/ai-robo-advisor.jpg",
    link: "/portfolio/ai-robo-advisor"
  },
  {
    title: "AI Portfolio Risk Analyzer",
    description:
      "Scenario analysis, stress testing, and VaR-style insights to quantify and manage portfolio risk.",
    image: "/image/Portfolio-img/ai-portfolio-risk-analyzer.jpg",
    link: "/portfolio/ai-portfolio-risk-analyzer"
  },
  {
    title: "AI DevOps Monitoring Assistant",
    description:
      "Intelligent alerts and anomaly detection across logs, metrics, and traces to prevent outages and reduce MTTR.",
    image: "/image/Portfolio-img/ai-devops-monitoring-assistant.jpg",
    link: "/portfolio/ai-devops-monitoring-assistant"
  },
  {
    title: "AI IT Support Chatbot",
    description:
      "Self-service IT support that resolves tickets, answers questions, and integrates with enterprise ITSM tools.",
    image: "/image/Portfolio-img/ai-it-support-chatbot.jpg",
    link: "/portfolio/ai-it-support-chatbot"
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
      {/* Hero Section - gradient overlay with portfolio background image */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/image/Portfolio-img/ai-fraud-detection.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95" />
        </div>
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

      {/* Main Content Section - white background, cards keep gradient accents */}
      <section className="py-16 bg-white min-h-screen relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-4 font-semibold text-gray-900">
              Real-world AI case studies
            </h2>
            <p className="body text-gray-700 mt-3">
              Browse a curated selection of AI products we can help you build—from concept to production-ready systems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 justify-center">
            {projects.map((project, idx) => {
              const isVisible = visibleStates[idx];
              return (
                <div
                  key={project.link}
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

                    <h3 className="mt-5 text-base md:text-lg font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-indigo-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mt-2 mb-6 text-xs md:text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
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
        /* Reserved for optional, component-scoped micro-animations */
      `}</style>
    </>
  );
};

export default Portfolio;

