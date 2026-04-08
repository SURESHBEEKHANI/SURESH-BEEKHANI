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
    title: "AI Molecular Docking",
    description: "Accelerate the discovery of new drug candidates by simulating how molecules bind to target proteins with high precision.",
    image: "/image/Industries-Img/Molecular Docking.jpg",
    alt: "Molecular Docking"
  },
  {
    id: 2,
    title: "Predictive ADMET Modeling",
    description: "Use deep learning to predict a drug's Absorption, Distribution, Metabolism, Excretion, and Toxicity before clinical trials.",
    image: "/image/Industries-Img/ADMET Modeling.jpg",
    alt: "ADMET Modeling"
  },
  {
    id: 3,
    title: "De Novo Molecule Design",
    description: "Generative AI models that design entirely new, stable molecules with specific therapeutic properties from scratch.",
    image: "/image/Industries-Img/Molecule Design.jpg",
    alt: "Molecule Design"
  },
  {
    id: 4,
    title: "Drug Repurposing AI",
    description: "Identify new therapeutic uses for existing drugs by analyzing massive biomedical datasets and genomic information.",
    image: "/image/Industries-Img/Drug Repurposing.jpg",
    alt: "Drug Repurposing"
  },
  {
    id: 5,
    title: "Biomarker Discovery",
    description: "AI-driven identification of biological markers that predict patient response to specific treatments and drug efficacy.",
    image: "/image/Industries-Img/Biomarker Discovery.jpg",
    alt: "Biomarker Discovery"
  },
  {
    id: 6,
    title: "Clinical Trial Optimization",
    description: "Optimize patient recruitment and trial protocol design using AI to increase the success rate of drug development.",
    image: "/image/Industries-Img/Trial Optimization.jpg",
    alt: "Trial Optimization"
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
  { id: 1, question: "How does AI speed up the drug discovery process?", answer: "AI can screen billions of molecular combinations in silico, identifying promising candidates in weeks rather than the years required by traditional lab-based methods." },
  { id: 2, question: "Can AI predict if a drug will be toxic to humans?", answer: "Yes, our ADMET models analyze structural and genomic data to highlight potential toxicity and side effects long before a drug ever enters clinical trials." },
  { id: 3, question: "Is AI molecular design reliable for clinical use?", answer: "AI design is a powerful starting point. All AI-generated candidates undergo rigorous wet-lab validation and clinical testing to ensure safety and clinical efficacy." },
  { id: 4, question: "What kind of data do I need to use your drug discovery AI?", answer: "Our models can utilize diverse data types including genomic data, known chemical structures, protein crystal structures, and existing clinical trial results." },
  { id: 5, question: "How does AI help in repurposing existing drugs?", answer: "AI identifies hidden biological links between existing treatments and new diseases, significantly reducing the cost and time of bringing a treatment to market." }
];

const DrugDiscovery: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Faster Time-to-Market",
      description: "Reduce the early-stage drug discovery timeline by up to 80% through high-speed virtual screening and AI modeling.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reduced R&D Costs",
      description: "Lower the multibillion-dollar cost of drug development by failing early in silico and focusing lab resources on high-probability candidates.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Unprecedented Precision",
      description: "Model molecular interactions at an atomic level with deep learning, identifying therapeutic potentials that traditional methods miss.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Optimized Clinical Trials",
      description: "Ensure trial success by using AI to select the right patient biomarkers and optimize experimental protocols.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Novel Therapeutic Insights",
      description: "Discover entirely new classes of drugs and treatment mechanisms through the power of generative AI and deep data analysis.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Ethical & Safe Discovery",
      description: "Prioritize safety by using predictive toxicology models to identify risks years before a drug ever reaches a human patient.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="Drug Discovery"
        description="Accelerate R&D with AI-driven molecular docking, predictive toxicology, and de novo molecule design. Bringing life-saving treatments to market faster."
        bgImage="/image/Industries-Img/Molecule Design.jpg"
      />
      <IndustryProfessional
        title="Revolutionizing Pharmaceutical R&D with"
        highlightedTitle="Predictive AI"
        description1="We specialize in integrating advanced deep learning models into the drug discovery pipeline. Our technology helps pharmaceutical companies screen candidates faster, predict toxicity with high accuracy, and design novel molecules that address unmet medical needs."
        description2="Our mission is to empower researchers with the digital tools they need to discover the next generation of life-saving medicines."
        image="/image/Industries-Img/Molecule Design.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI in Drug Discovery"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="Pharma AI Solutions" subtitle="Empowering research through intelligent discovery" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="R&D Impact"
        subtitle="Discover how our AI technology is accelerating"
        highlightedSubtitle="discovery and saving R&D costs"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about"
        highlightedSubtitle="AI in Drug Discovery"
      />
      <Footer />
    </div>
  );
};

export default DrugDiscovery;
