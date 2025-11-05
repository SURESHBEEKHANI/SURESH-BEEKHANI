import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
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
    title: "Patient Scheduling",
    description: "AI-powered scheduling systems optimize appointment booking, reduce no-shows, and maximize resource utilization.",
    image: "/image/pages_img/patient-scheduling.jpg",
    alt: "Patient Scheduling"
  },
  {
    id: 2,
    title: "Workflow Automation",
    description: "Automate administrative tasks, documentation, and clinical workflows to improve efficiency and reduce staff burden.",
    image: "/image/pages_img/workflow-automation.jpg",
    alt: "Workflow Automation"
  },
  {
    id: 3,
    title: "AI Chatbots",
    description: "Intelligent chatbots handle patient inquiries, appointment scheduling, and provide 24/7 support.",
    image: "/image/pages_img/ai-chatbots-hospital.jpg",
    alt: "AI Chatbots"
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description: "Machine learning predicts patient outcomes, readmission risks, and resource needs for proactive care.",
    image: "/image/pages_img/predictive-analytics-hospital.jpg",
    alt: "Predictive Analytics"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "How does AI improve hospital operations?",
    answer: "AI optimizes scheduling, automates workflows, predicts patient needs, and reduces administrative burden, leading to 30-40% efficiency gains."
  },
  {
    id: 2,
    question: "Can AI chatbots replace hospital staff?",
    answer: "No, AI chatbots complement staff by handling routine inquiries and scheduling, allowing staff to focus on complex patient care."
  },
  {
    id: 3,
    question: "What is predictive analytics in healthcare?",
    answer: "Predictive analytics uses AI to forecast patient outcomes, readmission risks, and resource needs, enabling proactive interventions."
  },
  {
    id: 4,
    question: "Is patient data secure with AI systems?",
    answer: "Yes, modern AI systems implement HIPAA-compliant security measures, encryption, and strict access controls to protect patient data."
  },
  {
    id: 5,
    question: "How long does it take to implement AI solutions in hospitals?",
    answer: "Implementation typically takes 3-6 months depending on system complexity. We provide phased rollouts with training and support to ensure smooth transitions."
  },
  {
    id: 6,
    question: "What ROI can hospitals expect from AI implementation?",
    answer: "Hospitals typically see 20-35% cost reduction within the first year through improved efficiency, reduced errors, and optimized resource allocation."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/hospitals-clinics.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Hospitals & Clinics AI Solutions
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          Transform hospital operations with AI-powered patient scheduling, workflow automation, intelligent chatbots, and predictive analytics.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const HospitalsClinics: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQState();
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <Navbar />
      <HeroSection />
      
      <AnimatedCarousel
        useCases={useCases}
        title="Hospital & Clinic Solutions"
        subtitle="AI-powered efficiency for modern healthcare facilities"
      />

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

export default HospitalsClinics;
