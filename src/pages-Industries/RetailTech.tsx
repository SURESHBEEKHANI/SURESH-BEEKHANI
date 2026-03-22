import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import IndustryHero from "../components/IndustryHero";
import IndustryProfessional from "../components/IndustryProfessional";
import IndustryCapabilities from "../components/IndustryCapabilities";
import IndustrySuccessStories from "../components/IndustrySuccessStories";
import IndustryFAQ from "../components/IndustryFAQ";

const USE_CASES_DATA = [
  { id: 1, title: "Personalized Recommendations", description: "AI-driven product recommendations boost conversions by 30% and increase average order value through intelligent cross-sell and upsell.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Recommendations" },
  { id: 2, title: "Inventory & Demand Forecasting", description: "Predict demand accurately, optimize stock levels, and reduce overstock/stockouts with machine learning.", image: "/image/pages_img/workflow-automation.jpg", alt: "Demand Forecasting" },
  { id: 3, title: "AI Shopping Assistants", description: "Intelligent chatbots guide customers, answer product questions, and provide 24/7 personalized shopping support.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "Shopping Assistants" },
  { id: 4, title: "Visual Search & Discovery", description: "Customers find products by image. AI-powered visual search improves discoverability and reduces returns.", image: "/image/pages_img/Medical-Image-Analysis.webp", alt: "Visual Search" },
  { id: 5, title: "Dynamic Pricing Optimization", description: "AI-powered pricing strategies that adjust in real-time based on demand, competition, and market conditions.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Dynamic Pricing" },
  { id: 6, title: "Customer Sentiment Analysis", description: "Analyze reviews, feedback, and social media to understand customer sentiment and improve products.", image: "/image/pages_img/AIconten.jpg", alt: "Sentiment Analysis" }
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
  { id: 1, question: "How does AI improve retail and e-commerce?", answer: "AI drives personalized recommendations, demand forecasting, inventory optimization, and intelligent customer service. Retailers typically see 20-35% improvement in conversion rates and operational efficiency." },
  { id: 2, question: "Can AI integrate with existing e-commerce platforms?", answer: "Yes, we integrate with major platforms (Shopify, WooCommerce, Magento, custom) and connect with your ERP, CRM, and inventory systems." },
  { id: 3, question: "What metrics improve with RetailTech AI?", answer: "Key improvements include conversion rate, average order value, customer lifetime value, inventory turnover, and customer satisfaction scores." },
  { id: 4, question: "What is the ROI of implementing AI in retail?", answer: "Retailers typically see 20-35% increase in conversion rates, 15-25% improvement in inventory efficiency, and 30-40% reduction in customer service costs. Most implementations achieve ROI within 4-6 months." },
  { id: 5, question: "How do you protect customer data and ensure privacy?", answer: "We implement GDPR and CCPA compliance, end-to-end encryption, secure data storage, and strict access controls. Customer data is anonymized for AI training and never shared with third parties." }
];

const RetailTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Personalized Product Recommendations",
      description: "AI analyzes browsing behavior, purchase history, and preferences to deliver personalized product recommendations. This increases conversion rates by 30% and boosts average order value significantly.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Intelligent Demand Forecasting",
      description: "Predictive models forecast demand across products, locations, and time periods. This optimizes inventory levels, reduces stockouts by 40%, and minimizes overstock waste.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
      title: "Visual Search & Discovery",
      description: "Computer vision enables customers to search products by image. AI-powered visual search improves product discoverability by 50% and reduces return rates through better matching.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Dynamic Pricing Optimization",
      description: "AI-powered pricing strategies adjust in real-time based on demand, competition, inventory levels, and market conditions. This maximizes revenue while maintaining competitiveness.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: "AI Shopping Assistants",
      description: "Intelligent chatbots provide 24/7 customer support, answer product questions, guide purchases, and handle returns. This reduces support costs by 60% while improving customer satisfaction.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Enhanced Retail Performance",
      description: "Retailers using AI see 20-35% increase in conversion rates, 15-25% improvement in inventory efficiency, and 30-40% reduction in customer service costs through intelligent automation.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero 
        title="RetailTech"
        description="Transform retail with AI-powered recommendations, demand forecasting, intelligent chatbots, and visual search. Boost sales and customer satisfaction."
        bgImage="/image/pages_img/RetailTech.jpg"
      />
      <IndustryProfessional 
        title="Innovative Retail"
        highlightedTitle="AI Software Solutions"
        description1="We are revolutionizing retail and e-commerce with the power of Artificial Intelligence. By combining machine learning, computer vision, and predictive analytics, we create intelligent retail solutions that support personalized recommendations, demand forecasting, inventory optimization, and enhanced customer experiences."
        description2="Our mission is to help retailers and e-commerce businesses deliver more engaging shopping experiences, optimize operations, and drive revenue growth through innovative AI-powered solutions."
        image="/image/pages_img/RetailTech.jpg"
      />
      <IndustryCapabilities 
        title="Capabilities and Benefits of"
        highlightedTitle="AI and ML in RetailTech"
        subtitle="Driving innovation in"
        highlightedSubtitle="retail operations"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="RetailTech AI Solutions" subtitle="AI technology for modern retail and e-commerce" />
      <IndustrySuccessStories 
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="AI Solutions"
        subtitle="Discover how our cutting-edge AI technology has transformed"
        highlightedSubtitle="retail operations"
      />
      <IndustryFAQ 
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our"
        highlightedSubtitle="AI-powered RetailTech"
      />
      <Footer />
    </div>
  );
};

export default RetailTech;
