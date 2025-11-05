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
    title: "AI Counseling Chatbots",
    description: "24/7 AI-powered mental health support providing therapeutic conversations and crisis intervention.",
    image: "/image/pages_img/counseling-chatbots.jpg",
    alt: "AI Counseling"
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    description: "AI analyzes text, voice, and behavior to detect mental health concerns and emotional states.",
    image: "/image/pages_img/sentiment-mental.jpg",
    alt: "Sentiment Analysis"
  },
  {
    id: 3,
    title: "Personalized Wellness Solutions",
    description: "AI-driven meditation, stress management, and wellness programs tailored to individual needs.",
    image: "/image/pages_img/wellness-personalized.jpg",
    alt: "Personalized Wellness"
  },
  {
    id: 4,
    title: "Cognitive Behavioral Therapy (CBT) Apps",
    description: "AI-powered CBT applications that guide users through therapeutic exercises and track progress over time.",
    image: "/image/pages_img/cbt-therapy.jpg",
    alt: "CBT Therapy"
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "Can AI replace therapists?",
    answer: "No, AI complements therapists by providing accessible support and monitoring, but cannot replace human empathy and clinical expertise."
  },
  {
    id: 2,
    question: "How does sentiment analysis work?",
    answer: "AI analyzes language patterns, tone, and behavior to detect emotional states and mental health indicators with 85-95% accuracy."
  },
  {
    id: 3,
    question: "Is mental health AI confidential?",
    answer: "Yes, mental health AI platforms implement strict privacy measures, encryption, and HIPAA compliance to protect sensitive information."
  },
  {
    id: 4,
    question: "How effective are AI-powered CBT apps?",
    answer: "Studies show AI-powered CBT apps can reduce anxiety and depression symptoms by 30-50% when used consistently, making therapy more accessible."
  },
  {
    id: 5,
    question: "Can AI detect mental health crises?",
    answer: "Yes, AI can analyze communication patterns, behavioral changes, and risk factors to identify potential mental health crises and alert appropriate support systems."
  }
];

const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/mental-wellness.jpg')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Mental Health & Wellness AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
          AI counseling chatbots, sentiment analysis, and personalized wellness solutions for accessible mental health support.
        </p>
        <a href="/#contact" className="inline-block bg-gradient-to-r from-purple-500 to-pink-700 hover:from-purple-600 hover:to-pink-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-transform duration-300">
          Explore Solutions
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

const MentalHealthWellness: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQState();
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <Navbar />
      <HeroSection />
      <AnimatedCarousel useCases={useCases} title="Mental Health Solutions" subtitle="AI-powered wellness support" />
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

export default MentalHealthWellness;
