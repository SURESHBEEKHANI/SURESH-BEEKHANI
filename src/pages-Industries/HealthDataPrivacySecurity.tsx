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
    title: "Federated Learning",
    description: "Train AI models across multiple institutions without sharing sensitive patient data.",
    image: "/image/pages_img/federated-learning-health.jpg",
    alt: "Federated Learning"
  },
  {
    id: 2,
    title: "Anomaly Detection",
    description: "AI detects security threats, data breaches, and unauthorized access in real-time.",
    image: "/image/pages_img/anomaly-security.jpg",
    alt: "Anomaly Detection"
  },
  {
    id: 3,
    title: "HIPAA-Compliant AI Platforms",
    description: "AI systems designed with built-in HIPAA compliance, encryption, and privacy protection.",
    image: "/image/pages_img/hipaa-platforms.jpg",
    alt: "HIPAA Compliance"
  },
  {
    id: 4,
    title: "Zero-Trust Data Architecture",
    description: "Implement zero-trust security models with AI-driven access controls and continuous verification.",
    image: "/image/pages_img/zero-trust-architecture.jpg",
    alt: "Zero-Trust Architecture"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is federated learning?",
    answer: "Federated learning trains AI models across multiple institutions without centralizing data, preserving privacy while enabling collaboration."
  },
  {
    id: 2,
    question: "How does AI maintain HIPAA compliance?",
    answer: "AI systems implement encryption, access controls, audit logging, and data minimization to meet HIPAA requirements."
  },
  {
    id: 3,
    question: "Can AI detect security threats?",
    answer: "Yes, AI analyzes patterns to detect anomalies, unauthorized access, and potential security breaches in real-time."
  },
  {
    id: 4,
    question: "What is zero-trust architecture in healthcare?",
    answer: "Zero-trust architecture assumes no implicit trust and continuously validates every transaction, ensuring secure access to healthcare data through AI-driven verification."
  },
  {
    id: 5,
    question: "How does AI protect patient data during transmission?",
    answer: "AI implements end-to-end encryption, secure protocols, and real-time monitoring to protect patient data during transmission between healthcare systems."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/health-privacy-security.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Health Data Privacy & Security AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          Federated learning, anomaly detection, and HIPAA-compliant AI platforms for secure healthcare data management.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-slate-500 to-gray-700 hover:from-slate-600 hover:to-gray-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Secure Your Data
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const HealthDataPrivacySecurity: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQState();
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="Privacy & Security Solutions" subtitle="AI-powered data protection" />
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

export default HealthDataPrivacySecurity;
