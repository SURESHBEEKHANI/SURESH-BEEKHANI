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
    title: "Intelligent Patient Scheduling",
    description: "Optimize appointments, reduce no-shows by up to 40%, and maximize resource use.",
    image: "/image/pages_img/Intelligent Patient Scheduling.jpg",
    alt: "Patient Scheduling"
  },
  {
    id: 2,
    title: "Clinical Workflow Automation",
    description: "Streamline admin and clinical tasks to reduce errors and free up staff time.",
    image: "/image/pages_img/Clinical Workflow Automation.jpg",
    alt: "Workflow Automation"
  },
  {
    id: 3,
    title: "AI-Powered Virtual Assistants",
    description: "Provide 24/7 patient support for queries, bookings, and follow-ups.",
    image: "/image/pages_img/AI-Powered Virtual Assistants.jpg",
    alt: "Healthcare Virtual Assistants"
  },
  {
    id: 4,
    title: "Predictive Healthcare Analytics",
    description: "Analyze data to predict risks, enable early diagnosis, and guide decisions.",
    image: "/image/pages_img/Predictive Healthcare Analytics.jpg",
    alt: "Predictive Analytics"
  },
  {
    id: 5,
    title: "Medical Imaging & Diagnostics AI",
    description: "AI analyzes X-rays, MRIs, and CT scans for faster, accurate diagnoses.",
    image: "/image/pages_img/medical-imaging-ai.jpg",
    alt: "Medical Imaging AI"
  },
  {
    id: 6,
    title: "Remote Patient Monitoring (RPM)",
    description: "Track vital signs in real time, detect early issues, and reduce readmissions.",
    image: "/image/pages_img/remote-patient-monitoring.jpg",
    alt: "Remote Patient Monitoring"
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
  { id: 1, question: "How does AI improve healthcare delivery?", answer: "AI transforms healthcare through intelligent scheduling, workflow automation, predictive analytics, and AI chatbots. Facilities typically experience 30-40% efficiency gains and improved patient outcomes." },
  { id: 2, question: "Is patient data secure and HIPAA compliant?", answer: "Yes, we implement end-to-end encryption, HIPAA-compliant data handling, role-based access controls, and regular security audits." },
  { id: 3, question: "What is the typical implementation timeline?", answer: "Typically 3-6 months. We follow a phased approach: needs assessment, integration, training, pilot testing, and full deployment." },
  { id: 4, question: "What is the ROI of implementing AI in healthcare?", answer: "Healthcare facilities typically see 30-50% reduction in administrative costs, 40% improvement in patient scheduling efficiency, and 25-35% faster diagnosis times. Most implementations achieve ROI within 8-12 months through operational savings and improved patient throughput." },
  { id: 5, question: "Can AI integrate with existing EHR and hospital management systems?", answer: "Absolutely. Our AI solutions seamlessly integrate with major EHR systems (Epic, Cerner, Allscripts, etc.) and hospital management platforms through secure APIs. We ensure minimal disruption to existing workflows while enhancing system capabilities with intelligent automation." }
];

const HealthTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Improved Operational Efficiency",
      description: "AI and Machine Learning automate routine and time-consuming tasks, helping healthcare organizations streamline workflows and improve operational efficiency. This leads to higher productivity and reduced administrative workload.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Cost Savings",
      description: "Integrating AI and ML into digital healthcare solutions helps reduce operational costs by automating processes, optimizing workflows, and identifying more cost-effective treatment options.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Improved Clinical Outcomes",
      description: "AI-powered analytics support early disease detection and more accurate diagnoses. This enables healthcare professionals to deliver timely interventions, leading to better patient outcomes and lower long-term healthcare costs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      title: "Enhanced Revenue Streams",
      description: "AI and ML enable innovative healthcare services such as personalized treatment plans, telemedicine, and remote patient monitoring, opening new revenue opportunities for healthcare organizations.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Improved Resource Utilization",
      description: "By analyzing data and predicting service demand, AI and ML help healthcare providers allocate resources more efficiently. This improves patient care while minimizing operational waste.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: "Competitive Advantage",
      description: "Healthcare organizations that adopt AI-driven solutions gain a competitive edge by delivering smarter services, improving patient outcomes, and optimizing operational costs.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="HealthTech"
        description="Transform healthcare with AI-powered diagnostics, patient scheduling, workflow automation, and predictive analytics. Enhance patient outcomes and operational efficiency."
        bgImage="/image/pages_img/HealthTech.png"
      />
      <IndustryProfessional
        title="Innovative Healthcare"
        highlightedTitle="AI Software Solutions"
        description1="We are redefining healthcare software with the power of Artificial Intelligence. By combining machine learning, computer vision, and advanced analytics, we create intelligent healthcare solutions that support smarter diagnoses, personalized treatments, and data-driven decision-making."
        description2="Our mission is to help healthcare providers deliver faster, smarter, and more effective patient care through innovative digital tools and platforms."
        image="/image/pages_img/hospitals-clinics.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI and ML in HealthTech"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="HealthTech AI Solutions" subtitle="AI technology for modern healthcare delivery" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="AI Solutions"
        subtitle="Discover how our cutting-edge AI technology has transformed"
        highlightedSubtitle="healthcare delivery"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our"
        highlightedSubtitle="AI-powered healthcare"
      />
      <Footer />
    </div>
  );
};

export default HealthTech;
