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
    title: "AI Medical Scribing",
    description: "Automatically transcribe and summarize doctor-patient conversations into EHR-ready clinical notes.",
    image: "/image/Industries-Img/AI Medical Scribing.jpg",
    alt: "Medical Scribing"
  },
  {
    id: 2,
    title: "Intelligent Case Summaries",
    description: "Quickly digest years of patient history into a concise one-page summary for busy physicians.",
    image: "/image/Industries-Img/Intelligent Case Summaries.jpg",
    alt: "Case Summaries"
  },
  {
    id: 3,
    title: "Predictive Health Risk Scoring",
    description: "Use EHR data history to predict which patients are at high risk for readmission or specific complications.",
    image: "/image/Industries-Img/Predictive Health Risk Scoring.jpg",
    alt: "Risk Scoring"
  },
  {
    id: 4,
    title: "Automated Clinical Documentation",
    description: "AI that suggests ICD-10 and CPT codes based on clinical narratives, reducing clerical time.",
    image: "/image/Industries-Img/intelligent-documentation.jpg",
    alt: "Clinical Documentation"
  },
  {
    id: 5,
    title: "Interoperability AI",
    description: "Normalize data from multiple sources like labs, pharmacies, and external clinics into a single EHR view.",
    image: "/image/Industries-Img/Interoperability AI.jpg",
    alt: "Interoperability"
  },
  {
    id: 6,
    title: "Drug-Drug Interaction Checker",
    description: "Advanced AI that scans a patient's entire record to flag potential medication risks instantly.",
    image: "/image/Industries-Img/Drug-Drug Interaction Checker.jpg",
    alt: "Drug Checks"
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
    description: "NLP-powered contract review that extracts key clauses, flags risky terms, and accelerates legal workflows.",
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
  { id: 1, question: "What is an AI-powered EHR system?", answer: "An AI-powered EHR system uses machine learning and natural language processing to automate data entry, highlight patient risks, and simplify complex health records." },
  { id: 2, question: "Is medical scribing secure and private?", answer: "Yes, our scribing solutions use anonymized real-time processing and are fully HIPAA-compliant to protect patient confidentiality." },
  { id: 3, question: "Can AI help with medical coding?", answer: "Absolutely. Our AI can automatically suggest accurate medical codes from clinical notes, reducing billing errors and speeding up reimbursement." },
  { id: 4, question: "How does AI tackle EHR 'Burnout'?", answer: "By automating documentation and providing intelligent summaries, AI drastically reduces the time doctors spend clicking and typing into computers." },
  { id: 5, question: "Can the AI integrate with existing Epic or Cerner systems?", answer: "We build AI layers that integrate directly with major EHR platforms through secure modern APIs like FHIR." }
];

const ElectronicHealthRecords: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Faster Documentation",
      description: "Cut the hours spent on medical records by using AI that writes the notes for you.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reduced Administrative Cost",
      description: "Automate repetitive data entry and coding tasks to lower clinic overheads and human error.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Improved Patient Safety",
      description: "Identify high-risk drug interactions and patient health trends that might otherwise go unnoticed.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Better Interoperability",
      description: "Easily share and analyze data between different hospital systems with AI-driven normalization.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Data-Driven Insights",
      description: "Turn your static patient records into a powerful source of predictive clinical intelligence.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Empowered Physicians",
      description: "Give your doctors more time with patients and less time with screens through intelligent automation.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Electronic Health Records"
        description="Streamline clinic documentation with AI-powered medical scribing, automated coding, and intelligent history summaries. Healthcare documentation made effortless."
        bgImage="/image/Industries-Img/Electronic Health Records.jpg"
      />
      <IndustryProfessional
        title="Intelligent Record-keeping for"
        highlightedTitle="Modern Healthcare"
        description1="We build the future of electronic health records. By integrating advanced NLP and predictive modeling into your EHR, we help clinics eliminate manual documentation, improve medical coding accuracy, and highlight critical patient risks automatically."
        description2="Our mission is to end 'EHR burnout' through smart, user-centered AI integration."
        image="/image/Industries-Img/Electronic Health Records.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in EHR & Documentation"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="EHR AI Solutions" subtitle="Empowering clinics through intelligent data management" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="Documentation Success"
        subtitle="Discover how our AI technology is reducing paper work"
        highlightedSubtitle="and letting doctors focus on care"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about"
        highlightedSubtitle="AI-powered EHR & Documentation"
      />
      <Footer />
    </div>
  );
};

export default ElectronicHealthRecords;
