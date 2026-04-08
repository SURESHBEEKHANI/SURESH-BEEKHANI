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
    title: "AI-Assisted X-ray Analysis",
    description: "Detect anomalies like fractures, pneumonia, and nodules in X-rays with 95%+ accuracy.",
    image: "/image/Industries-Img/AI-Assisted X-ray Analysis.jpg",
    alt: "X-ray Analysis"
  },
  {
    id: 2,
    title: "M-MRI Scan Support",
    description: "Enhance brain and soft-tissue MRI scans with AI that highlights potential tumors and lesions.",
    image: "/image/Industries-Img/M-MRI Scan Support.jpg",
    alt: "MRI Support"
  },
  {
    id: 3,
    title: "Cardiovascular CT Imaging",
    description: "Use computer vision to measure heart health markers and detect blockages in CT scans automatically.",
    image: "/image/Industries-Img/Cardiovascular CT Imaging.jpg",
    alt: "CT Imaging"
  },
  {
    id: 4,
    title: "Real-time Ultrasound AI",
    description: "Support technicians with live AI overlays that identify key organs and anomalies during ultrasound scans.",
    image: "/image/Industries-Img/Real-time Ultrasound AI.jpg",
    alt: "Ultrasound AI"
  },
  {
    id: 5,
    title: "Early Cancer Detection",
    description: "Screen thousands of mammographies and skin scans to flag early-stage cancers with AI precision.",
    image: "/image/Industries-Img/Early Cancer Detection.jpg",
    alt: "Cancer Detection"
  },
  {
    id: 6,
    title: "Radiology Workflow Automation",
    description: "Automatically prioritize urgent cases in the radiology worklist based on AI image findings.",
    image: "/image/Industries-Img/Radiology Workflow Automation.jpg",
    alt: "Radiology Workflow"
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
  { id: 1, question: "Can AI replace radiologists?", answer: "No, AI is a powerful tool designed to support radiologists by highlighting high-priority findings and reducing time spent on routine analysis." },
  { id: 2, question: "How accurate is medical imaging AI?", answer: "Modern AI models can achieve accuracy rates of 95-99% for specific tasks, often equaling or exceeding human benchmarks in controlled tests." },
  { id: 3, question: "Is the AI compatible with our current PACS system?", answer: "Yes, our AI solutions are built to integrate seamlessly with major Picture Archiving and Communication Systems (PACS)." },
  { id: 4, question: "How does AI improve radiology turnaround times?", answer: "By automating preliminary analysis and case prioritization, AI can cut radiology turnaround times by up to 50% for critical cases." },
  { id: 5, question: "Is your imaging software FDA/CE cleared?", answer: "We build AI models that meet the highest regulatory standards and follow clinical validation protocols for medical software." }
];

const MedicalImaging: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Faster Diagnosis Times",
      description: "Accelerate the reading of medical scans to ensure patients receive treatments as quickly as possible.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reduced Diagnostic Errors",
      description: "Provide an intelligent 'second pair of eyes' that catches subtle anomalies a human expert might miss.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Improved Workflow Management",
      description: "Automate case triage and reporting, freeing up radiologists to focus on complex medical cases.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "High-volume Screening",
      description: "Easily handle thousands of routine scans for things like tuberculosis or breast cancer with low human overhead.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Enhanced Reporting Precision",
      description: "Generate consistent, objective measurements and findings in every radiology report with AI assistance.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Clinical Consistency",
      description: "Ensure the same high standard of diagnostic imaging quality across different hospital locations.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Medical Imaging (Radiology)"
        description="Empower radiologists with AI-driven image analysis, automated detection, and workflow optimization. Faster, more accurate diagnoses for better patient care."
        bgImage="/image/Industries-Img/Medical Imaging.jpg"
      />
      <IndustryProfessional
        title="Precision AI for"
        highlightedTitle="Radiology & Diagnostics"
        description1="We specialize in integrating computer vision AI into medical imaging workflows. Our technology helps radiologists detect diseases earlier and more accurately, while automating the repetitive parts of image analysis and case prioritization."
        description2="Our mission is to support medical experts with intelligent tools that make scanning faster, safer, and more reliable."
        image="/image/Industries-Img/Medical Imaging.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in Radiology"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="Radiology AI Solutions" subtitle="Empowering clinical diagnostics through vision" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="Imaging Success"
        subtitle="Discover how our AI technology has improved"
        highlightedSubtitle="radiology accuracy and speed"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about"
        highlightedSubtitle="AI in Medical Imaging"
      />
      <Footer />
    </div>
  );
};

export default MedicalImaging;
