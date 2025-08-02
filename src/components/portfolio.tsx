import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
  return (
    <>
      <Navbar />
      {/* Hero Section - Professional Layout */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Protfilo.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-8">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI Portfolio
              </h1>
              <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
                Explore how innovative AI solutions are transforming industries and driving measurable impact. From healthcare diagnostics to legal automation, discover cutting-edge AI projects that showcase the power of artificial intelligence in solving real-world challenges.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Optionally, you can add an image or illustration here if needed */}
          </div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-tr from-purple-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-8 justify-center">
            {projects.map((project, idx) => (
              <div key={idx} className={`flex flex-col bg-transparent px-6${idx === 0 ? ' items-start text-left' : ' items-start'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover mb-6 rounded-2xl"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 text-lg max-w-2xl">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-800 text-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  aria-label={`View case study for ${project.title}`}
                >
                  View Case Study
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;

