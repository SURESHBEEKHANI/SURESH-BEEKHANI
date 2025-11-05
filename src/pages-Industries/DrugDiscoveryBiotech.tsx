import React, { useState, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";



const USE_CASES_DATA = [
  {
    id: 1,
    title: "Molecule Prediction Models",
    description: "AI predicts molecular structures and properties to identify promising drug candidates faster.",
    image: "/image/pages_img/molecule-models.jpg",
    alt: "Molecule Prediction"
  },
  {
    id: 2,
    title: "Clinical Trial Analytics",
    description: "Machine learning optimizes trial design, patient selection, and predicts outcomes.",
    image: "/image/pages_img/clinical-analytics.jpg",
    alt: "Clinical Trial Analytics"
  },
  {
    id: 3,
    title: "Precision Medicine Support",
    description: "AI analyzes genetic and molecular data to develop targeted therapies for specific populations.",
    image: "/image/pages_img/precision-support.jpg",
    alt: "Precision Medicine"
  },
  {
    id: 4,
    title: "Drug Repurposing Intelligence",
    description: "AI identifies new therapeutic uses for existing drugs by analyzing molecular pathways and disease mechanisms.",
    image: "/image/pages_img/drug-repurposing.jpg",
    alt: "Drug Repurposing"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "How does AI accelerate drug discovery?",
    answer: "AI analyzes vast datasets to predict molecular interactions, identify drug candidates, and optimize trials, reducing development time by 30-50%."
  },
  {
    id: 2,
    question: "What is molecule prediction?",
    answer: "AI models predict how molecules will behave and interact, helping researchers identify promising drug candidates without extensive lab testing."
  },
  {
    id: 3,
    question: "Can AI reduce drug development costs?",
    answer: "Yes, AI can reduce costs by 30-50% through faster candidate identification, optimized trials, and reduced failure rates."
  },
  {
    id: 4,
    question: "What is drug repurposing and how does AI help?",
    answer: "Drug repurposing finds new uses for existing approved drugs. AI analyzes molecular pathways and disease mechanisms to identify these opportunities, significantly reducing development time and costs."
  },
  {
    id: 5,
    question: "How accurate are AI predictions in drug discovery?",
    answer: "AI models achieve 70-85% accuracy in predicting drug-target interactions and molecular properties, significantly higher than traditional computational methods."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/drug-biotech.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Drug Discovery & Biotech Labs AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          Molecule prediction models, clinical trial analytics, and precision medicine support to accelerate drug development.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-700 hover:from-orange-600 hover:to-red-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Discover More
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const DrugDiscoveryBiotech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="Drug Discovery Solutions" subtitle="AI-powered pharmaceutical research" />
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <details key={faq.id} className="bg-white rounded-xl shadow-xl border p-4">
                <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                <p className="pt-3 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DrugDiscoveryBiotech;
