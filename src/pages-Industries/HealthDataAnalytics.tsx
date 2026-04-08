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
    title: "Predictive Disease Modeling",
    description: "Analyze vast healthcare datasets to predict future disease outbreaks and individual patient risks with high accuracy.",
    image: "/image/Industries-Img/Predictive Disease Modeling.jpg",
    alt: "Predictive Modeling"
  },
  {
    id: 2,
    title: "Real-time Hospital Resource Tracking",
    description: "Use AI to analyze real-time hospital occupancy, equipment usage, and staff availability to optimize clinic flow.",
    image: "/image/Industries-Img/Real-time Hospital Resource Tracking.jpg",
    alt: "Resource Tracking"
  },
  {
    id: 3,
    title: "Population Health Insights",
    description: "Gain deeper insights into community health trends to inform public health strategies and medical research.",
    image: "/image/Industries-Img/Population Health Insights.jpg",
    alt: "Population Health"
  },
  {
    id: 4,
    title: "Clinical Trials Optimization",
    description: "Use advanced analytics to identify the best candidates and monitor outcomes for large-scale clinical trials.",
    image: "/image/Industries-Img/Clinical Trials Optimization.jpg",
    alt: "Trials Optimization"
  },
  {
    id: 5,
    title: "Precision Medicine AI",
    description: "Tailor treatments based on genetic, environmental, and lifestyle data analyzed through machine learning.",
    image: "/image/Industries-Img/Precision Medicine AI.jpg",
    alt: "Precision Medicine"
  },
  {
    id: 6,
    title: "Healthcare Fraud Analytics",
    description: "Identify unusual billing patterns and fraudulent claims through sophisticated AI-driven data analysis.",
    image: "/image/Industries-Img/Healthcare Fraud Analytics.jpg",
    alt: "Fraud Analytics"
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
  { id: 1, question: "How does data analytics improve patient care?", answer: "By providing doctors with predictive insights and evidence-based treatment suggestions, analytics help ensure patients get the right care at the right time." },
  { id: 2, question: "Can your AI handle unstructured healthcare data like doctor's notes?", answer: "Yes, our advanced NLP models can process and extract valuable insights from handwritten notes, voice recordings, and text-based records." },
  { id: 3, question: "Is data privacy guaranteed when using analytics?", answer: "Absolutely. We strictly adhere to HIPAA and GDPR standards, using data anonymization and enterprise-level security to protect all information." },
  { id: 4, question: "What kind of ROI can we expect from healthcare analytics?", answer: "Organizations typically see significant reductions in readmission rates, optimized staffing costs, and better clinical results within the first year." },
  { id: 5, question: "Does the AI system require a lot of IT infrastructure?", answer: "Our solutions are mostly cloud-native and designed to be lightweight, integrating easily with your existing IT stack." }
];

const HealthDataAnalytics: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Evidence-Based Decisions",
      description: "Support your clinical and operational choices with hard data processed by intelligent algorithms.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Cost Reduction",
      description: "Identify inefficiencies in your hospital's operations and supply chain to reduce waste and save money.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Better Patient Outcomes",
      description: "Predict health risks early and provide personalized treatments to ensure better long-term health results.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Improved Fleet Management",
      description: "Optimize hospital logistics — from ambulance response times to internal patient transportation.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Enhanced Research Capabilities",
      description: "Accelerate medical research and drug development with AI-driven analysis of clinical trial results.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Real-time Monitoring",
      description: "Stay ahead of events with live dashboards that show everything from patient vitals to bed occupancy.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Healthcare Data Analytics"
        description="Turn complex healthcare data into actionable insights with AI. Optimize operations, improve clinical outcomes, and advance medical research."
        bgImage="/image/Industries-Img/Health Data Analytics..jpg"
      />
      <IndustryProfessional
        title="Predictive Intelligence for"
        highlightedTitle="Smarter Healthcare"
        description1="We specialize in building advanced analytics platforms that uncover hidden patterns in healthcare data. From predicting patient health risks to optimizing hospital resource allocation, our AI solutions empower healthcare leaders to make data-driven decisions that save lives and reduce costs."
        description2="Our mission is to unlock the power of medical data through state-of-the-art machine learning and clear, intuitive reporting."
        image="/image/Industries-Img/Health Data Analytics..jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in Healthcare Analytics"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="Analytics AI Solutions" subtitle="Empowering medical decisions through data" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="Data Impact"
        subtitle="Discover how our analytics technology is transforming"
        highlightedSubtitle="modern healthcare systems"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about"
        highlightedSubtitle="Healthcare Data Analytics"
      />
      <Footer />
    </div>
  );
};

export default HealthDataAnalytics;
