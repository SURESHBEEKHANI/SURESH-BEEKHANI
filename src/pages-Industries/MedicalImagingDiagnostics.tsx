import React, { useState, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";



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

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-teal-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="Medical Imaging Solutions" subtitle="AI-powered diagnostic imaging" />
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

export default MedicalImagingDiagnostics;
