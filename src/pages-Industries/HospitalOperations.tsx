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
    title: "Real-time Bed Management",
    description: "Optimize patient intake and discharge with AI that predicts bed availability and reduces wait times.",
    image: "/image/Industries-Img/Bed Management.jpg",
    alt: "Bed Management"
  },
  {
    id: 2,
    title: "AI Staff Scheduling",
    description: "Automatically generate optimal nurse and doctor schedules based on predicted patient volume and acuity.",
    image: "/image/Industries-Img/Staff Scheduling.jpg",
    alt: "Staff Scheduling"
  },
  {
    id: 3,
    title: "Supply Chain Optimization",
    description: "Predictive analytics for medical supplies and pharmaceutical inventory to prevent shortages and reduce waste.",
    image: "/image/Industries-Img/Supply Chain.jpg",
    alt: "Supply Chain"
  },
  {
    id: 4,
    title: "Operational Bottleneck AI",
    description: "Identify and resolve hidden delays in hospital workflows, from ER admissions to surgical suite transitions.",
    image: "/image/Industries-Img/Bottleneck AI.jpg",
    alt: "Bottleneck AI"
  },
  {
    id: 5,
    title: "Predictive Maintenance",
    description: "Monitor critical medical equipment like MRIs and ventilators to predict and prevent technical failures before they occur.",
    image: "/image/Industries-Img/Predictive Maintenance.jpg",
    alt: "Predictive Maintenance"
  },
  {
    id: 6,
    title: "Financial Revenue Cycle AI",
    description: "Optimize hospital billing and coding in real-time to ensure faster reimbursements and lower administrative costs.",
    image: "/image/Industries-Img/Revenue Cycle.jpg",
    alt: "Revenue Cycle"
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
  { id: 1, question: "How does AI improve hospital bed management?", answer: "AI analyzes current patient data and historical trends to predict discharges and suggest optimal bed assignments, reducing ER 'boarding' times and increasing hospital throughput." },
  { id: 2, question: "Can AI really create better staff schedules than humans?", answer: "Yes, our AI accounts for thousands of variables including staff preferences, historical patient volumes, and labor laws to create balanced, cost-effective schedules that reduce burnout." },
  { id: 3, question: "What is the ROI for operational AI in healthcare?", answer: "Hospitals typically see a 15-25% reduction in supply chain waste and a significant boost in revenue through optimized billing and higher patient throughput within the first year." },
  { id: 4, question: "Is hospital data secure when using your operations AI?", answer: "Absolutely. We strictly follow HIPAA and SOC 2 standards, ensuring that all operational and patient data is encrypted and handled with the highest security protocols." },
  { id: 5, question: "Does the system integrate with existing ERP and HR software?", answer: "Yes, our AI is designed to integrate seamlessly with major hospital ERPs (like Oracle or SAP) and HR systems to ensure smooth synchronization of data." }
];

const HospitalOperations: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Optimized Patient Flow",
      description: "Ensure patients move through different departments without delays, from the ER to a bed and finally home.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Cost Reduction",
      description: "Identify and eliminate waste across your hospital's supply chain and administrative workflows through predictive intelligence.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Data-Driven Staffing",
      description: "Anticipate patient volume surges and ensure you always have the right number of qualified staff on hand.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Enhanced Revenue Cycle",
      description: "Streamline hospital billing and prevent claim denials using AI that catches coding errors in real-time.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "High-level Asset Tracking",
      description: "Keep track of critical hospital equipment and prevent loss or inefficient use with AI-powered monitoring.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Clinical Efficiency",
      description: "By managing the backend operations with AI, you free up your medical staff to focus entirely on patient health.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Hospital Operations Management"
        description="Streamline hospital workflows with AI-powered bed management, staff scheduling, and supply chain optimization. Drive efficiency and improve patient throughput."
        bgImage="/image/Industries-Img/hospitals-clinics.jpg"
      />
      <IndustryProfessional
        title="Smarter Operations for"
        highlightedTitle="Better Care Delivery"
        description1="We specialize in integrating AI into the heart of hospital backend operations. Our technology helps hospital leaders manage beds, staff, and supplies with predictive precision, ensuring that the facility runs smoothly even during peak volumes."
        description2="Our mission is to eliminate operational complexity and waste in healthcare, making facilities more efficient for everyone."
        image="/image/Industries-Img/hospitals-clinics.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in Hospital Operations"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="Hospital AI Solutions" subtitle="Empowering facility leaders through smart technology" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="Operational Success"
        subtitle="Discover how our AI technology is improving"
        highlightedSubtitle="hospital flow and reducing costs"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about"
        highlightedSubtitle="AI-powered Hospital Operations"
      />
      <Footer />
    </div>
  );
};

export default HospitalOperations;
