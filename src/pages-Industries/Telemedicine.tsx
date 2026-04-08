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
    title: "AI Virtual Consultations",
    description: "Support doctors with real-time AI tools that suggest diagnoses based on patient symptoms during video calls.",
    image: "/image/Industries-Img/AI Virtual Consultations.jpg",
    alt: "AI Virtual Consultations"
  },
  {
    id: 2,
    title: "Symptom Checker & Chatbots",
    description: "24/7 AI-driven symptom checkers that provide initial assessments and guide patients to the right telehealth service.",
    image: "/image/Industries-Img/Symptom Checker & Chatbots.jpg",
    alt: "AI Symptom Checker"
  },
  {
    id: 3,
    title: "Real-time AI Audio Analysis",
    description: "Analyze patient speech and cough patterns during remote calls to detect potential respiratory issues.",
    image: "/image/Industries-Img/Real-time AI Audio Analysis.jpg",
    alt: "Audio Analysis"
  },
  {
    id: 4,
    title: "Telehealth Sentiment Analysis",
    description: "Gauge patient mood and satisfaction in real-time during remote consultations for better care management.",
    image: "/image/Industries-Img/Telehealth Sentiment Analysis.jpg",
    alt: "Sentiment Analysis"
  },
  {
    id: 5,
    title: "Secure Remote Triage",
    description: "AI-driven triage that directs patients to telemedicine, urgent care, or primary care based on symptom severity.",
    image: "/image/Industries-Img/Secure Remote Triage.jpg",
    alt: "Remote Triage"
  },
  {
    id: 6,
    title: "Follow-up Automation",
    description: "Automate patient follow-ups after telehealth sessions to ensure medication adherence and monitor recovery.",
    image: "/image/Industries-Img/Follow-up Automation.jpg",
    alt: "Follow-up Automation"
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
  { id: 1, question: "How does AI enhance teleconsultations?", answer: "AI enhances teleconsultations by providing real-time data analysis, suggesting possible diagnoses, and improving audio/visual quality for better assessment." },
  { id: 2, question: "Is your platform secure for patient video calls?", answer: "Yes, we focus on building AI capabilities that integrate into HIPAA-compliant platforms with end-to-end encryption." },
  { id: 3, question: "Can AI-driven symptom checkers replace doctors?", answer: "No, AI is designed to support clinical workflows by performing initial assessments and directing patients to the appropriate level of professional care." },
  { id: 4, question: "What is the wait time for patients with AI triage?", answer: "Patients typically receive responses and are triaged within seconds, drastically reducing wait times compared to traditional intake methods." },
  { id: 5, question: "How do you handle patient data privacy in telehealth?", answer: "We prioritize patient privacy through rigorous encryption, strict access controls, and full adherence to global health data regulations." }
];

const Telemedicine: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Enhanced Diagnostic Accuracy",
      description: "Support remote doctors with AI that cross-references symptoms and history for more accurate diagnostic suggestions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reduced Provider Burnout",
      description: "Automate administrative intake and follow-up tasks to let remote physicians focus on their patients.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Increased Patient Access",
      description: "Expand healthcare reach with efficient, AI-assisted remote consultations that connect specialists with patients anywhere.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Better Patient Retention",
      description: "Smooth, tech-enhanced experiences and automated follow-ups lead to higher patient satisfaction and platform loyalty.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Data-Driven Triage",
      description: "Direct patients to the appropriate care level instantly, ensuring proper resource use and patient safety.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Cost Savings",
      description: "Scale telehealth platforms without linearly increasing staff costs through intelligent, automated clinic management.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Telemedicine"
        description="Redefine remote healthcare with AI-powered virtual consultations, triage, and automated follow-up. Make patient care accessible from anywhere."
        bgImage="/image/Industries-Img/Telemedicine.jpg"
      />
      <IndustryProfessional
        title="Innovative Telehealth"
        highlightedTitle="AI Software Solutions"
        description1="We empower telemedicine platforms with cutting-edge AI. By integrating intelligent assistants, audio diagnostics, and triage automation, we enable providers to deliver superior healthcare remotely while maintaining efficiency and patient satisfaction."
        description2="Our mission is to make telemedicine smarter, safer, and more scalable through powerful AI integration."
        image="/image/Industries-Img/Telemedicine.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in Telemedicine"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="Telemedicine AI Solutions" subtitle="Smart technology for remote healthcare delivery" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="Telemedicine Results"
        subtitle="Discover how our AI technology has transformed"
        highlightedSubtitle="remote care experiences"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about"
        highlightedSubtitle="AI in Telemedicine"
      />
      <Footer />
    </div>
  );
};

export default Telemedicine;
