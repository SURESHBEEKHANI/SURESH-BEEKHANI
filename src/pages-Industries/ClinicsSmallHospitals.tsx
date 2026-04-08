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
    title: "AI Patient Triage",
    description: "Automate initial patient assessments to prioritize urgent cases and improve clinic flow.",
    image: "/image/Industries-Img/hospitals-clinics.jpg",
    alt: "AI Patient Triage"
  },
  {
    id: 2,
    title: "Smart Appointment Scheduling",
    description: "Optimize clinic hours and reduce no-shows with AI-driven booking systems.",
    image: "/image/Industries-Img/Intelligent Patient Scheduling.jpg",
    alt: "Smart Appointment Scheduling"
  },
  {
    id: 3,
    title: "Clinical Workflow Automation",
    description: "Streamline routine tasks and data entry to free up medical staff for patient care.",
    image: "/image/Industries-Img/Clinical Workflow Automation.jpg",
    alt: "Workflow Automation"
  },
  {
    id: 4,
    title: "Automated Medical Billing",
    description: "Reduce coding errors and accelerate reimbursement cycles with intelligent billing software.",
    image: "/image/Industries-Img/hospitals-clinics.jpg",
    alt: "Automated Billing"
  },
  {
    id: 5,
    title: "Inventory Management AI",
    description: "Predict supply needs for small hospitals to prevent shortages of critical medical items.",
    image: "/image/Industries-Img/hospitals-clinics.jpg",
    alt: "Inventory Management"
  },
  {
    id: 6,
    title: "Digital Health Assistants",
    description: "24/7 AI chatbots to answer common patient questions and handle routine clinic queries.",
    image: "/image/Industries-Img/Intelligent Patient Scheduling.jpg",
    alt: "Health Assistants"
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
  { id: 1, question: "How can AI help small clinics with administrative tasks?", answer: "AI can automate appointment scheduling, medical billing, and patient follow-ups, reducing administrative workload by up to 50% for small clinic staff." },
  { id: 2, question: "Is your AI solution affordable for small hospitals?", answer: "Yes, we offer scalable solutions tailored specifically for clinics and small hospitals, focusing on the most high-impact automation to ensure a rapid ROI." },
  { id: 3, question: "How does AI improve patient triage in crowded clinics?", answer: "AI algorithms can analyze patient symptoms and history in real-time to prioritize urgent cases, ensuring that critical patients receive immediate attention." },
  { id: 4, question: "What is the security protocol for patient records?", answer: "We implement enterprise-grade encryption and are fully HIPAA compliant, ensuring that all patient data handled by our AI systems is secure and private." },
  { id: 5, question: "Can the AI system integrate with our existing EMR?", answer: "Absolutely. Our solutions are designed to integrate seamlessly with common EMR and Hospital Management Systems used by clinics and small hospitals." }
];

const ClinicsSmallHospitals: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Streamlined Clinic Operations",
      description: "Automate repetitive tasks to allow clinic staff to focus on patient care rather than paperwork.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Cost-Effective Hospital Management",
      description: "Optimize resource allocation and supply chains to reduce operational costs in small hospital settings.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Improved Patient Experience",
      description: "Faster triage and smoother scheduling lead to higher patient satisfaction and better health outcomes.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Revenue Cycle Optimization",
      description: "AI-driven billing and coding reduce claim denials and improve the financial health of clinics.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Data-Driven Staffing",
      description: "Ensure you always have the right amount of staff on hand based on predictive patient volume data.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Community Trust",
      description: "Provide modern, AI-enhanced care that builds trust and loyalty within the local community.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Clinics & Small Hospitals"
        description="Empower clinics and small hospitals with AI-driven operations, triage, and patient management. Optimize resources and enhance community care."
        bgImage="/image/Industries-Img/hospitals-clinics.jpg"
      />
      <IndustryProfessional
        title="Innovative Healthcare for"
        highlightedTitle="Clinics & Hospitals"
        description1="We specialize in providing high-impact AI solutions for clinics and small hospitals. Our technology streamlines administrative workflows, optimizes patient triage, and improves resource management, allowing healthcare providers to focus on what matters most: patient health."
        description2="Our mission is to bring enterprise-grade AI capabilities to local healthcare providers, making smarter medicine accessible to everyone."
        image="/image/Industries-Img/hospitals-clinics.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in Clinic Management"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="Clinic AI Solutions" subtitle="Smart technology for local healthcare providers" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="Healthcare Impact"
        subtitle="Discover how our AI technology has transformed"
        highlightedSubtitle="local healthcare delivery"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about AI for"
        highlightedSubtitle="Clinics & Small Hospitals"
      />
      <Footer />
    </div>
  );
};

export default ClinicsSmallHospitals;
