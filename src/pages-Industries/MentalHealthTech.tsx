import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import IndustryHero from "../components/IndustryHero";
import IndustryProfessional from "../components/IndustryProfessional";
import IndustryCapabilities from "../components/IndustryCapabilities";
import IndustrySuccessStories from "../components/IndustrySuccessStories";
import LatestBlogs from "../components/LatestBlogs";
import IndustryFAQ from "../components/IndustryFAQ";

const USE_CASES_DATA = [
  {
    id: 1,
    title: "AI-Powered Therapy Assistants",
    description: "Support therapists with AI that analyzes session transcripts to highlight emotional patterns and progress over time.",
    image: "/image/Industries-Img/Therapy Assistant.jpg",
    alt: "Therapy Assistant"
  },
  {
    id: 2,
    title: "Predictive Mood Analytics",
    description: "Use patient data to predict mood swings and mental health crises before they occur, allowing for proactive intervention.",
    image: "/image/Industries-Img/Mood Analytics.jpg",
    alt: "Mood Analytics"
  },
  {
    id: 3,
    title: "Personalized Wellness Plans",
    description: "AI-driven wellness recommendations based on a user's unique stress levels, sleep patterns, and biometrics.",
    image: "/image/Industries-Img/Wellness Plans.jpg",
    alt: "Wellness Plans"
  },
  {
    id: 4,
    title: "Crisis Detection & Alerts",
    description: "Real-time monitoring of communication patterns to detect signs of self-harm or severe distress and alert emergency contacts.",
    image: "/image/Industries-Img/Crisis Detection.jpg",
    alt: "Crisis Detection"
  },
  {
    id: 5,
    title: "Mental Health Resource Chatbots",
    description: "24/7 intelligent support bots that provide immediate evidence-based coping strategies and link users to professional help.",
    image: "/image/Industries-Img/Mental Health Bot.jpg",
    alt: "Mental Health Bot"
  },
  {
    id: 6,
    title: "Medication Adherence Monitoring",
    description: "AI that helps patients stay on track with their psychiatric treatments through smart reminders and side-effect tracking.",
    image: "/image/Industries-Img/Medication Adherence.jpg",
    alt: "Medication Adherence"
  }
];

const PORTFOLIO_DATA = [
  {
    title: "AI-Powered Electronic Health Record",
    description: "Streamline healthcare data management and improve patient outcomes with AI-powered EHR systems.",
    image: "/image/Portfolio-img/ai-powered-ehr.jpg",
    link: "/portfolio/ai-powered-electronic-health-record"
  },
  {
    title: "AI Medical Imaging Assistant",
    description: "Computer vision models analyze X‑rays, MRIs, and CT scans to highlight anomalies and support radiologist decision-making.",
    image: "/image/Portfolio-img/ai-medical-imaging-assistant.jpg",
    link: "/portfolio/ai-medical-imaging-assistant"
  },
  {
    title: "AI Contract Analysis System",
    description: "NLP-powered contract review that extracts key clauses, flags risky terms, and activates legal workflows.",
    image: "/image/Portfolio-img/ai-contract-analysis-system.jpg",
    link: "/portfolio/ai-contract-analysis-system"
  },
  {
    title: "AI Legal Research Assistant",
    description: "Retrieval-augmented generation surfaces relevant cases, statutes, and legal insights in natural language.",
    image: "/image/Portfolio-img/ai-legal-research-assistant.jpg",
    link: "/portfolio/ai-legal-research-assistant"
  },
  {
    title: "AI Product Recommendation Engine",
    description: "Personalized product recommendations powered by user behavior, purchase history, and real-time context for higher conversions.",
    image: "/image/Portfolio-img/ai-product-recommendation-engine.jpg",
    link: "/portfolio/ai-product-recommendation-engine"
  },
  {
    title: "AI Demand Forecasting System",
    description: "Predictive models forecast demand across SKUs, locations, and time to optimize inventory, pricing, and supply chain decisions.",
    image: "/image/Portfolio-img/ai-demand-forecasting-system.jpg",
    link: "/portfolio/ai-demand-forecasting-system"
  },
  {
    title: "AI Personalized Learning Platform",
    description: "Adaptive learning experiences that dynamically adjust content difficulty and pacing to each learner's performance.",
    image: "/image/Portfolio-img/ai-personalized-learning-platform.jpg",
    link: "/portfolio/ai-personalized-learning-platform"
  },
  {
    title: "AI Automated Grading System",
    description: "Automated evaluation of assignments, quizzes, and free‑text answers with explainable scoring and instant feedback.",
    image: "/image/Portfolio-img/ai-automated-grading-system.jpg",
    link: "/portfolio/ai-automated-grading-system"
  },
  {
    title: "AI Personal Fitness Coach",
    description: "Computer vision and analytics track workouts, posture, and progress to deliver personalized coaching and training plans.",
    image: "/image/Portfolio-img/ai-personal-fitness-coach.jpg",
    link: "/portfolio/ai-personal-fitness-coach"
  },
  {
    title: "AI Nutrition Planner",
    description: "Meal plans tailored to health goals, dietary restrictions, and biometrics, with continuous AI optimization.",
    image: "/image/Portfolio-img/ai-nutrition-planner.jpg",
    link: "/portfolio/ai-nutrition-planner"
  },
  {
    title: "AI Robo-Advisor",
    description: "Automated portfolio allocation and rebalancing driven by risk profiles, goals, and real-time market signals.",
    image: "/image/Portfolio-img/ai-robo-advisor.jpg",
    link: "/portfolio/ai-robo-advisor"
  },
  {
    title: "AI Portfolio Risk Analyzer",
    description: "Scenario analysis, stress testing, and VaR-style insights to quantify and manage portfolio risk.",
    image: "/image/Portfolio-img/ai-portfolio-risk-analyzer.jpg",
    link: "/portfolio/ai-portfolio-risk-analyzer"
  },
  {
    title: "AI Fraud Detection System",
    description: "Real-time AI models detect fraudulent transactions and unusual behavior across banking, fintech, and e‑commerce platforms.",
    image: "/image/Portfolio-img/ai-fraud-detection.jpg",
    link: "/portfolio/ai-fraud-detection-system"
  },
  {
    title: "AI Personal Finance Advisor",
    description: "Intelligent financial coaching that analyzes spending, goals, and risk appetite to provide personalized money management advice.",
    image: "/image/Portfolio-img/finance-advisor.jpg",
    link: "/portfolio/ai-personal-finance-advisor"
  },
  {
    title: "AI DevOps Monitoring Assistant",
    description: "Intelligent alerts and anomaly detection across logs, metrics, and traces to prevent outages and reduce MTTR.",
    image: "/image/Portfolio-img/ai-devops-monitoring-assistant.jpg",
    link: "/portfolio/ai-devops-monitoring-assistant"
  },
  {
    title: "AI IT Support Chatbot",
    description: "Self-service IT support that resolves tickets, answers questions, and integrates with enterprise ITSM tools.",
    image: "/image/Portfolio-img/ai-it-support-chatbot.jpg",
    link: "/portfolio/ai-it-support-chatbot"
  }
];

const FAQ_DATA = [
  { id: 1, question: "How does AI help in mental health crisis prevention?", answer: "Our AI analyzes behavioral datasets to flag early warning signs of distress, allowing healthcare providers and family members to intervene before a situation escalates." },
  { id: 2, question: "Is data privacy guaranteed in mental health applications?", answer: "Yes, we treat mental health data with the highest level of sensitivity, utilizing end-to-end encryption and ensuring full compliance with HIPAA and global privacy laws." },
  { id: 3, question: "Can AI truly replace a human therapist?", answer: "No, AI is a tool meant to augment therapy by providing real-time data and self-support resources. It empowers therapists to make better-informed decisions and provides patients with between-session support." },
  { id: 4, question: "How accurate is AI-driven crisis detection?", answer: "Our models are trained on clinical datasets and achieve high sensitivity in detecting distress markers, prioritizing patient safety through immediate alert systems." },
  { id: 5, question: "Does the system offer resources for low-income populations?", answer: "Yes, one of the main goals of Mental Health Tech is to democratize access to high-quality mental health resources through affordable, AI-driven platforms." }
];

const MentalHealthTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Enhanced Crisis Response",
      description: "Detect severe distress through linguistic analysis and alert emergency responders in real-time.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Data-Driven Therapy",
      description: "Provide therapists with objective insights into patient emotions and progress, making every session more effective.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Personalized Support",
      description: "Deliver bespoke mental wellness advice that changes in real-time as the user's emotional state fluctuates.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Democratized Access",
      description: "Bring high-quality mental health support to millions of people through low-cost, AI-powered digital tools.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Objective Progress Tracking",
      description: "Measure mental health outcomes with data, not just anecdotes, giving hope and clarity to patients.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Continuous Care",
      description: "Ensure that patients have support between sessions, closing the gaps where most mental health issues arise.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Mental Health Tech"
        description="Empower therapists and patients with AI-driven mood analytics, crisis detection, and personalized wellness plans. Digital innovation for mental well-being."
        bgImage="/image/Industries-Img/Wellness Plans.jpg"
      />
      <IndustryProfessional
        title="Predictive AI for"
        highlightedTitle="Better Mental Wellness"
        description1="We specialize in integrating ethical AI into mental health care. Our technology helps organizations detect behavioral health crises early, support mental health patients between therapy sessions, and provide objective data insights to mental health experts."
        description2="Our mission is to increase access to mental healthcare and ensure and every patient receives proactive, data-driven support."
        image="/image/Industries-Img/Wellness Plans.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in Mental Health"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="Mental Health Technology" subtitle="Empowering people through digital well-being" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="Mental Wellness Success"
        subtitle="Discover how our AI technology is supporting"
        highlightedSubtitle="patients and saving lives"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about"
        highlightedSubtitle="AI in Mental Health Tech"
      />
      <Footer />
    </div>
  );
};

export default MentalHealthTech;
