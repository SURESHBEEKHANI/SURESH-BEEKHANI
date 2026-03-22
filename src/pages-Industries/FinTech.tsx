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
  { id: 1, title: "AI-Powered Fraud Detection", description: "Real-time analysis of transaction patterns to identify and block fraudulent activities instantly.", image: "/image/pages_img/Fraud-Detection.jpg", alt: "Fraud Detection" },
  { id: 2, title: "Intelligent Credit Scoring", description: "Machine learning models analyze alternative data to provide more accurate credit risk assessments.", image: "/image/pages_img/Credit-Scoring.jpg", alt: "Credit Scoring" },
  { id: 3, title: "Automated Wealth Management", description: "AI-driven robo-advisors provide personalized investment strategies and automated portfolio rebalancing.", image: "/image/pages_img/Wealth-Management.jpg", alt: "Wealth Management" },
  { id: 4, title: "AI-Powered Customer Support", description: "Intelligent chatbots handle complex financial inquiries and provide 24/7 personalized assistance.", image: "/image/pages_img/Customer Support.jpg", alt: "Financial Chatbots" },
  { id: 5, title: "Algorithmic Trading Systems", description: "High-frequency trading models execute trades based on real-time market signals and sentiment analysis.", image: "/image/pages_img/Algorithmic-Trading.jpg", alt: "Algorithmic Trading" },
  { id: 6, title: "Regulatory Compliance (RegTech)", description: "AI automates KYC/AML processes and monitors transactions for regulatory compliance in real-time.", image: "/image/pages_img/RegTech.jpg", alt: "RegTech" }
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
  { id: 1, question: "How does AI improve financial operations?", answer: "AI transforms finance through fraud detection, credit scoring, process automation, and personalized customer experiences. Banks and financial institutions typically see 30-50% efficiency gains and reduced operational risk." },
  { id: 2, question: "Is AI in finance secure and compliant?", answer: "Yes, we implement bank-grade security, encryption, and regulatory compliance (PCI-DSS, GDPR, SOC 2) to protect sensitive financial data and ensure audit readiness." },
  { id: 3, question: "What is the implementation timeline for FinTech AI?", answer: "Typically 3-6 months depending on scope. We follow a phased approach: discovery, integration, testing, and deployment with full change management support." },
  { id: 4, question: "What is the ROI of implementing AI in finance?", answer: "Financial institutions typically see 40-60% reduction in fraud losses, 50% faster loan processing, and 30-45% improvement in customer satisfaction. Most implementations achieve ROI within 6-10 months through operational efficiency and risk reduction." },
  { id: 5, question: "Can AI integrate with existing banking and payment systems?", answer: "Absolutely. Our AI solutions seamlessly integrate with core banking systems, payment gateways, and financial platforms through secure APIs. We ensure compliance with banking standards and minimal disruption to existing operations." }
];

const FinTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Advanced Fraud Detection",
      description: "AI-powered systems analyze transaction patterns in real-time to detect and prevent fraudulent activities. This reduces fraud losses by 40-60% while minimizing false positives and improving customer trust.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "Automated Credit Scoring",
      description: "Machine learning models analyze thousands of data points to provide highly accurate credit risk assessments. This enables faster loan approvals, reduces default risks, and expands access to credit for underserved segments.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Cost Reduction",
      description: "AI automation drastically reduces operational costs across underwriting, customer service, and compliance. Financial institutions can automate repetitive tasks, leading to significant savings and resource reallocation.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Enhanced Revenue Streams",
      description: "AI-driven personalization and automated wealth management enable new product offerings and cross-selling opportunities. This improves customer lifetime value and opens new revenue channels in the digital economy.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: "Optimized Resource Allocation",
      description: "Predictive analytics help financial institutions optimize capital allocation, liquidity management, and staffing. This ensures that resources are deployed where they generate the highest impact and return.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Competitive Market Edge",
      description: "Adopting cutting-edge AI technology provides a significant advantage in the rapidly evolving FinTech landscape. Intelligent services improve customer retention and attract tech-savvy users.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col relative overflow-hidden">
      {/* Background Cover Image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "url('/image/pages_img/FinTech.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <IndustryHero
          title="FinTech"
          description="Empower your financial services with AI-driven fraud detection, credit scoring, automated wealth management, and personalized customer support. Drive efficiency and reduce risk."
          bgImage="/image/pages_img/FinTech.jpg"
        />
        <IndustryProfessional
          title="Innovative FinTech"
          highlightedTitle="AI Software Solutions"
          description1="We are revolutionizing the financial sector with the power of Artificial Intelligence. By combining machine learning, natural language processing, and advanced analytics, we build intelligent financial solutions that support smarter risk management, personalized wealth advice, and seamless automated operations."
          description2="Our mission is to help financial institutions and FinTech startups deliver faster, more secure, and highly personalized services through innovative digital tools and platforms."
          image="/image/pages_img/Fintech_img.jpg"
        />
        <IndustryCapabilities
          title="Capabilities and Benefits of"
          highlightedTitle="AI and ML in FinTech"
          capabilities={capabilities}
        />
        <AnimatedCarousel useCases={useCases} title="FinTech AI Solutions" subtitle="AI technology for modern financial services" />
        <IndustrySuccessStories
          portfolioData={portfolioData}
          title="Real-World"
          highlightedTitle="AI Solutions"
          subtitle="Discover how our cutting-edge AI technology has transformed"
          highlightedSubtitle="financial operations"
        />
        <IndustryFAQ
          faqData={faqData}
          title="Frequently Asked"
          highlightedTitle="Questions"
          subtitle="Everything you need to know about our"
          highlightedSubtitle="AI-powered FinTech"
        />
        <Footer />
      </div>
    </div>
  );
};

export default FinTech;
