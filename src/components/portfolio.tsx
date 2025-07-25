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
  }
];

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section - Professional Layout */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-fuchsia-900/90">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="/image/pages_img/Protfilo.jpg" // Use the correct hero image
            alt="Portfolio Hero Background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.5)' }}
          />
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236C63FF' fill-opacity='0.08'%3E%3Crect x='25' y='25' width='10' height='10' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 mt-12 w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-left">AI Portfolio</h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-8 max-w-2xl text-left">
            Explore how innovative AI solutions are transforming industries and driving measurable impact.
          </p>
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

