import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import IndustryHero from "../components/IndustryHero";
import IndustryProfessional from "../components/IndustryProfessional";
import IndustryCapabilities from "../components/IndustryCapabilities";
import IndustrySuccessStories from "../components/IndustrySuccessStories";
import IndustryFAQ from "../components/IndustryFAQ";

const USE_CASES_DATA = [
  { id: 1, title: "Robo-Advisory & Portfolio Management", description: "AI-driven investment recommendations, rebalancing, and risk-adjusted portfolio optimization.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Robo-Advisory" },
  { id: 2, title: "Client Onboarding & KYC", description: "Automate identity verification, risk profiling, and compliance checks for faster onboarding.", image: "/image/pages_img/workflow-automation.jpg", alt: "Client Onboarding" },
  { id: 3, title: "Wealth Management Chatbots", description: "AI assistants for account inquiries, investment updates, and personalized financial guidance.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "Wealth Chatbots" },
  { id: 4, title: "Predictive Analytics", description: "Market sentiment analysis, risk modeling, and scenario planning for better investment decisions.", image: "/image/pages_img/Early-Disease-Detection.jpg", alt: "Wealth Analytics" },
  { id: 5, title: "Risk Assessment & Compliance", description: "AI-powered risk profiling, regulatory compliance monitoring, and automated reporting.", image: "/image/pages_img/Automated-Compliance-Monitoring.jpg", alt: "Risk Compliance" },
  { id: 6, title: "Market Intelligence", description: "Real-time market analysis, trend detection, and investment opportunity identification with AI.", image: "/image/pages_img/AIconten.jpg", alt: "Market Intelligence" }
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
  { id: 1, question: "How does AI enhance wealth management?", answer: "AI powers robo-advisory, client onboarding, risk analytics, and personalized advice. Advisors see 40%+ efficiency gains and improved client satisfaction." },
  { id: 2, question: "Is WealthTech AI compliant with financial regulations?", answer: "Yes, we design solutions with SEC, FINRA, and regulatory requirements in mind, including audit trails and transparency." },
  { id: 3, question: "Can AI integrate with existing wealth platforms?", answer: "Yes, we integrate with custodians, CRM, portfolio management systems, and market data providers via APIs." },
  { id: 4, question: "What is the ROI of implementing AI in wealth management?", answer: "Wealth management firms typically see 40-50% reduction in client onboarding time, 30-40% improvement in portfolio performance, and significant cost savings. Most implementations achieve ROI within 6-10 months." },
  { id: 5, question: "How do you ensure data security and regulatory compliance?", answer: "We implement bank-grade security, SEC/FINRA compliance, end-to-end encryption, and comprehensive audit trails. All solutions undergo rigorous security testing and regulatory review before deployment." }
];

const WealthTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Robo-Advisory & Portfolio Management",
      description: "AI-driven investment recommendations, automated rebalancing, and risk-adjusted portfolio optimization. Wealth managers see 40% improvement in portfolio performance and client satisfaction.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Client Onboarding & KYC",
      description: "Automate identity verification, risk profiling, and compliance checks for faster onboarding. Reduce onboarding time by 50% while maintaining regulatory compliance and security.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Predictive Analytics & Market Intelligence",
      description: "Market sentiment analysis, risk modeling, and scenario planning for better investment decisions. AI analyzes real-time market data to identify trends and opportunities.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      title: "Risk Assessment & Compliance",
      description: "AI-powered risk profiling, regulatory compliance monitoring, and automated reporting. Ensure SEC and FINRA compliance while reducing manual audit work by 60%.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: "Wealth Management Chatbots",
      description: "AI assistants provide 24/7 support for account inquiries, investment updates, and personalized financial guidance. Reduce support costs by 50% while improving client engagement.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Enhanced Client Experience",
      description: "Wealth management firms using AI see 40-50% reduction in client onboarding time, 30-40% improvement in portfolio performance, and significant increases in client satisfaction and retention.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero 
        title="WealthTech"
        description="Transform wealth management with AI-powered robo-advisory, client onboarding, predictive analytics, and intelligent chatbots. Enhance client experience and scalability."
        bgImage="/image/pages_img/workflow-automation.jpg"
      />
      <IndustryProfessional 
        title="AI-Driven Wealth"
        highlightedTitle="Management Innovation"
        description1="We are transforming wealth management with the power of Artificial Intelligence. By combining machine learning, predictive analytics, and natural language processing, we create intelligent wealth management solutions that support robo-advisory, risk assessment, portfolio optimization, and personalized client experiences."
        description2="Our mission is to help wealth management firms deliver smarter investment strategies, enhance client satisfaction, and scale operations efficiently through innovative AI-powered solutions."
        image="/image/pages_img/workflow-automation.jpg"
      />
      <IndustryCapabilities 
        title="Capabilities and Benefits of"
        highlightedTitle="AI and ML in WealthTech"
        subtitle="Driving innovation in"
        highlightedSubtitle="wealth management operations"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="WealthTech AI Solutions" subtitle="AI technology for wealth management" />
      <IndustrySuccessStories 
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="AI Solutions"
        subtitle="Discover how our cutting-edge AI technology has transformed"
        highlightedSubtitle="wealth management operations"
      />
      <IndustryFAQ 
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our"
        highlightedSubtitle="AI-powered WealthTech"
      />
      <Footer />
    </div>
  );
};

export default WealthTech;
