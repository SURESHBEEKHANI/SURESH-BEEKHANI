import React, { useState, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";

const useFAQState = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = useCallback((id: number) => {
    setOpenFAQ(prev => prev === id ? null : id);
  }, []);
  return { openFAQ, toggleFAQ };
};

const USE_CASES_DATA = [
  {
    id: 1,
    title: "Genomic Risk Analysis",
    description: "AI analyzes genetic data to identify disease susceptibility and health risks with high accuracy.",
    image: "/image/pages_img/genomic-risk.jpg",
    alt: "Genomic Risk Analysis"
  },
  {
    id: 2,
    title: "Disease Prediction",
    description: "Machine learning predicts disease onset and progression based on genetic markers and patient data.",
    image: "/image/pages_img/disease-prediction.jpg",
    alt: "Disease Prediction"
  },
  {
    id: 3,
    title: "AI-Driven Treatment Recommendations",
    description: "Personalized treatment plans based on individual genetic profiles and AI-powered insights.",
    image: "/image/pages_img/treatment-recommendations.jpg",
    alt: "Treatment Recommendations"
  },
  {
    id: 4,
    title: "Pharmacogenomics Analysis",
    description: "AI-powered drug response prediction based on genetic variations to optimize medication selection and dosing.",
    image: "/image/pages_img/pharmacogenomics.jpg",
    alt: "Pharmacogenomics Analysis"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is genomics AI?",
    answer: "Genomics AI uses machine learning to analyze genetic data, predict disease risks, and enable precision medicine based on DNA profiles."
  },
  {
    id: 2,
    question: "How accurate is genetic risk prediction?",
    answer: "AI-powered genomic analysis can predict disease risks with 80-95% accuracy for many conditions."
  },
  {
    id: 3,
    question: "Is genomic data secure?",
    answer: "Yes, genomic AI platforms implement advanced encryption, strict access controls, and comply with genetic privacy regulations."
  },
  {
    id: 4,
    question: "How does pharmacogenomics improve treatment outcomes?",
    answer: "Pharmacogenomics uses genetic information to predict how patients will respond to medications, reducing adverse reactions by up to 30% and improving treatment efficacy."
  },
  {
    id: 5,
    question: "What types of diseases can genomic AI help predict?",
    answer: "Genomic AI can predict various conditions including cardiovascular disease, diabetes, cancer susceptibility, Alzheimer's disease, and rare genetic disorders."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/genomics-personalized.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Genomics & Personalized Medicine AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          Genomic risk analysis, disease prediction, and AI-driven treatment recommendations for precision healthcare.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-700 hover:from-emerald-600 hover:to-teal-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Discover More
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const GenomicsPersonalizedMedicine: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQState();
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="Genomics Solutions" subtitle="AI-powered precision medicine" />
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

export default GenomicsPersonalizedMedicine;
