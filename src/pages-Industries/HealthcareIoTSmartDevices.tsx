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
    title: "IoT Data Analytics",
    description: "AI analyzes data from connected medical devices to provide actionable health insights.",
    image: "/image/pages_img/iot-analytics.jpg",
    alt: "IoT Data Analytics"
  },
  {
    id: 2,
    title: "Edge AI for Hospitals",
    description: "Real-time AI processing at the edge for immediate insights and faster clinical decisions.",
    image: "/image/pages_img/edge-ai-hospitals.jpg",
    alt: "Edge AI"
  },
  {
    id: 3,
    title: "Home Care Device Integration",
    description: "Seamless integration of home care devices for continuous patient monitoring and support.",
    image: "/image/pages_img/home-care-integration.jpg",
    alt: "Home Care Integration"
  },
  {
    id: 4,
    title: "Remote Patient Monitoring",
    description: "AI-powered wearable devices and sensors for continuous vital sign monitoring and early health alerts.",
    image: "/image/pages_img/remote-patient-monitoring.jpg",
    alt: "Remote Patient Monitoring"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is Healthcare IoT?",
    answer: "Healthcare IoT connects medical devices and sensors to collect, analyze, and act on patient data in real-time."
  },
  {
    id: 2,
    question: "How does edge AI benefit healthcare?",
    answer: "Edge AI processes data locally on devices, enabling real-time insights, reduced latency, and enhanced privacy."
  },
  {
    id: 3,
    question: "Are IoT medical devices secure?",
    answer: "Modern IoT devices implement encryption, secure authentication, and regular security updates to protect patient data."
  },
  {
    id: 4,
    question: "What are the benefits of remote patient monitoring?",
    answer: "Remote monitoring enables early detection of health issues, reduces hospital readmissions, improves patient outcomes, and allows for proactive healthcare management from home."
  },
  {
    id: 5,
    question: "How do Healthcare IoT solutions ensure HIPAA compliance?",
    answer: "Healthcare IoT platforms implement end-to-end encryption, access controls, audit trails, and data anonymization to meet HIPAA requirements and protect patient privacy."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-violet-900 via-purple-800 to-violet-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/healthcare-iot.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Healthcare IoT & Smart Devices AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          IoT data analytics, edge AI for hospitals, and home care device integration for connected healthcare ecosystems.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-violet-500 to-purple-700 hover:from-violet-600 hover:to-purple-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Learn More
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const HealthcareIoTSmartDevices: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQState();
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-violet-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="Healthcare IoT Solutions" subtitle="AI-powered connected devices" />
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

export default HealthcareIoTSmartDevices;
