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
  { id: 1, title: "Contract Analysis & Review", description: "AI extracts clauses, identifies risks, and compares contracts—reducing review time by 70%.", image: "/image/pages_img/contect-analyer.jpg", alt: "Contract Analysis" },
  { id: 2, title: "Legal Document Search", description: "Semantic search across case law, contracts, and precedents for faster, more accurate research.", image: "/image/pages_img/Legal Document Search.jpg", alt: "Legal Search" },
  { id: 3, title: "Compliance Monitoring", description: "Automate regulatory tracking, policy updates, and compliance reporting across jurisdictions.", image: "/image/pages_img/Compliance Monitoring.jpg", alt: "Compliance" },
  { id: 4, title: "AI Legal Assistants", description: "Chatbots for client intake, case triage, document drafting, and 24/7 legal support.", image: "/image/pages_img/AI Legal Assistants.jpg", alt: "Legal Chatbots" },
  { id: 5, title: "Due Diligence Automation", description: "AI-powered document review and analysis for M&A, real estate, and corporate transactions.", image: "/image/pages_img/Due Diligence Automation.jpg", alt: "Due Diligence" },
  { id: 6, title: "Legal Document Generation", description: "Auto-generate contracts, briefs, and legal documents with AI-powered templates and clause libraries.", image: "/image/pages_img/Legal Document Generation.jpg", alt: "Document Generation" }
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
  { id: 1, question: "How does AI support legal and compliance?", answer: "AI automates contract review, legal research, compliance monitoring, and document management. Firms typically see 60-70% time savings on repetitive tasks and improved accuracy." },
  { id: 2, question: "Is LegalTech AI secure for sensitive data?", answer: "Yes, we implement enterprise-grade security, encryption, and compliance with legal data requirements. All solutions are designed for confidentiality and audit trails." },
  { id: 3, question: "Can AI replace lawyers?", answer: "No. AI augments legal work by handling routine tasks, enabling lawyers to focus on strategy, client counsel, and complex analysis." },
  { id: 4, question: "What is the ROI of implementing AI in legal operations?", answer: "Law firms typically see 60-70% reduction in document review time, 40-50% decrease in research hours, and significant cost savings. Most implementations achieve ROI within 6-9 months." },
  { id: 5, question: "How do you ensure AI maintains attorney-client privilege?", answer: "We implement strict data isolation, end-to-end encryption, and access controls. All AI systems are designed with legal privilege protection and can be deployed on-premises or in private cloud environments." }
];

const LegalTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Intelligent Contract Analysis",
      description: "AI extracts key clauses, identifies risks, and compares contracts in minutes instead of hours. This reduces contract review time by 70% while improving accuracy and consistency across legal documents.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Advanced Legal Research",
      description: "Semantic search across case law, statutes, and precedents delivers relevant results instantly. AI-powered research reduces research time by 60% and surfaces insights human researchers might miss.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Automated Compliance Monitoring",
      description: "AI tracks regulatory changes, monitors policy updates, and automates compliance reporting across multiple jurisdictions. This reduces compliance costs by 50% while minimizing regulatory risk.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      title: "Due Diligence Automation",
      description: "AI-powered document review and analysis for M&A, real estate, and corporate transactions. Automated due diligence reduces review time by 80% and identifies critical issues faster.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
      title: "Legal Document Generation",
      description: "Auto-generate contracts, briefs, and legal documents with AI-powered templates and clause libraries. This accelerates document creation by 65% while maintaining quality and consistency.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Enhanced Legal Productivity",
      description: "Law firms using AI see 60-70% reduction in document review time, 40-50% decrease in research hours, and significant cost savings through automation, enabling focus on high-value legal work.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="LegalTech"
        description="Transform legal operations with AI-powered contract analysis, document search, compliance monitoring, and intelligent assistants. Enhance efficiency and accuracy."
        bgImage="/image/pages_img/AI-Driven-Law-GPT.jpg"
      />
      <IndustryProfessional
        title="Innovative Legal"
        highlightedTitle="AI Software Solutions"
        description1="We are transforming legal operations with the power of Artificial Intelligence. By combining natural language processing, machine learning, and intelligent automation, we create smart legal solutions that support contract analysis, legal research, compliance monitoring, and document management."
        description2="Our mission is to help law firms and legal departments deliver faster, more accurate, and cost-effective legal services through innovative AI-powered tools and platforms."
        image="/image/pages_img/AI-Driven-Law-GPT.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI and ML in LegalTech"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="LegalTech AI Solutions" subtitle="AI technology for legal and compliance" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="AI Solutions"
        subtitle="Discover how our cutting-edge AI technology has transformed"
        highlightedSubtitle="legal operations"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our"
        highlightedSubtitle="AI-powered LegalTech"
      />
      <Footer />
    </div>
  );
};

export default LegalTech;
