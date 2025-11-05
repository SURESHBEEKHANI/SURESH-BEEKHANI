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
    title: "Symptom Triage",
    description: "AI-powered symptom checkers provide instant triage, guiding patients to appropriate care levels.",
    image: "/image/pages_img/symptom-triage.jpg",
    alt: "Symptom Triage"
  },
  {
    id: 2,
    title: "Remote Monitoring Dashboards",
    description: "Real-time patient monitoring dashboards track vital signs and alert providers to concerning changes.",
    image: "/image/pages_img/remote-dashboards.jpg",
    alt: "Remote Monitoring"
  },
  {
    id: 3,
    title: "Predictive Health Insights",
    description: "Machine learning analyzes patient data to predict health risks and enable preventive interventions.",
    image: "/image/pages_img/predictive-insights.jpg",
    alt: "Predictive Health"
  },
  {
    id: 4,
    title: "Virtual Consultation Platform",
    description: "Secure video conferencing with integrated EHR access, prescription management, and automated documentation.",
    image: "/image/pages_img/virtual-consultation.jpg",
    alt: "Virtual Consultation"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is telemedicine AI?",
    answer: "Telemedicine AI uses artificial intelligence to enhance virtual care through symptom triage, remote monitoring, and predictive health insights."
  },
  {
    id: 2,
    question: "How accurate is AI symptom triage?",
    answer: "AI symptom checkers achieve 85-90% accuracy in triaging patients to appropriate care levels, comparable to nurse triage."
  },
  {
    id: 3,
    question: "Can remote monitoring replace in-person visits?",
    answer: "Remote monitoring complements in-person care, enabling continuous tracking and early intervention while reducing unnecessary visits."
  },
  {
    id: 4,
    question: "Is telemedicine secure and HIPAA compliant?",
    answer: "Yes, modern telemedicine platforms use end-to-end encryption, secure data storage, and follow strict HIPAA compliance protocols to protect patient privacy."
  },
  {
    id: 5,
    question: "What equipment do patients need for telemedicine?",
    answer: "Patients typically need a smartphone, tablet, or computer with internet access, camera, and microphone. Some conditions may require additional devices like blood pressure monitors or pulse oximeters."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/telemedicine-digital.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Telemedicine & Digital Health
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          Symptom triage, remote monitoring dashboards, and predictive health insights for accessible, proactive healthcare.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-600 hover:to-blue-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Learn More
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const TelemedicineDigitalHealth: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQState();
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="Telemedicine Solutions" subtitle="AI-powered virtual care" />
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

export default TelemedicineDigitalHealth;
