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
  { id: 1, title: "Personalized Learning Paths", description: "AI adapts content to each learner's pace, style, and goals—increasing engagement and completion rates by 40%.", image: "/image/pages_img/Personalized-Learning-Paths.jpg", alt: "Personalized Learning" },
  { id: 2, title: "Intelligent Tutoring Systems", description: "AI tutors provide instant feedback, explain concepts, and offer 24/7 support to enhance student outcomes.", image: "/image/pages_img/Intelligent-Tutoring-Systems.jpg", alt: "AI Tutors" },
  { id: 3, title: "Automated Grading & Assessment", description: "Reduce grading time by 70% with AI that evaluates essays, assignments, and assessments with consistency.", image: "/image/pages_img/Automated-Grading-Assessment.jpg", alt: "Automated Grading" },
  { id: 4, title: "Predictive Analytics", description: "Identify at-risk students early, recommend interventions, and optimize curriculum with data-driven insights.", image: "/image/pages_img/Predictive-Analytics.jpg", alt: "Learning Analytics" },
  { id: 5, title: "Content Generation & Curation", description: "AI creates customized learning materials, quizzes, and study guides tailored to curriculum standards.", image: "/image/pages_img/Content-Generation.jpg", alt: "Content Generation" },
  { id: 6, title: "Virtual Learning Assistants", description: "24/7 AI assistants answer student questions, provide study tips, and guide learners through complex topics.", image: "/image/pages_img/Virtual-Learning-Assistants.jpg", alt: "Virtual Assistants" }
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
  { id: 1, question: "How does AI enhance education and learning?", answer: "AI enables personalized learning paths, intelligent tutoring, automated grading, and predictive analytics. Institutions typically see improved engagement, higher completion rates, and more efficient teaching workflows." },
  { id: 2, question: "Can EdTech AI integrate with LMS platforms?", answer: "Yes, we integrate with major Learning Management Systems (Canvas, Moodle, Blackboard, etc.) and custom platforms via APIs." },
  { id: 3, question: "How does AI ensure fairness in grading?", answer: "Our AI grading systems use rubrics, human-in-the-loop validation, and bias detection to ensure consistent, fair, and transparent assessment." },
  { id: 4, question: "What is the ROI of implementing AI in education?", answer: "Educational institutions typically see 40-70% reduction in administrative time, 30-50% improvement in student engagement, and significant cost savings through automation. Most implementations achieve ROI within 6-12 months." },
  { id: 5, question: "Is student data secure with AI-powered EdTech solutions?", answer: "Absolutely. We implement enterprise-grade security, FERPA compliance, end-to-end encryption, and strict data privacy protocols. Student data is never shared with third parties and remains fully under your institution's control." }
];

const EdTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Personalized Learning Experiences",
      description: "AI adapts content, pacing, and difficulty to each student's learning style and progress. This leads to higher engagement, better retention, and improved learning outcomes across diverse student populations.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      title: "Automated Assessment & Grading",
      description: "AI-powered grading systems reduce teacher workload by 60-70% while providing consistent, objective evaluation. Instant feedback helps students learn faster and allows educators to focus on teaching.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Intelligent Content Creation",
      description: "AI generates customized learning materials, quizzes, and study guides aligned with curriculum standards. This saves educators time while ensuring content meets individual student needs and learning objectives.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Predictive Analytics for Student Success",
      description: "AI identifies at-risk students early by analyzing engagement patterns, performance trends, and learning behaviors. Educators can intervene proactively, improving retention rates and student outcomes.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: "24/7 Learning Support",
      description: "AI-powered virtual tutors and assistants provide round-the-clock support, answering questions, explaining concepts, and guiding students through challenging material without human intervention.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Enhanced Learning Outcomes",
      description: "Educational institutions using AI-driven solutions see 30-50% improvement in student engagement, higher completion rates, and better academic performance through personalized, data-driven instruction.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="EdTech"
        description="Transform education with AI-powered personalized learning, intelligent tutoring, automated grading, and predictive analytics. Enhance student engagement and outcomes."
        bgImage="/image/pages_img/EdTech.jpg"
      />
      <IndustryProfessional
        title="Innovative EdTech"
        highlightedTitle="AI Software Solutions"
        description1="We are transforming education with the power of Artificial Intelligence. By combining machine learning, natural language processing, and advanced analytics, we create intelligent learning solutions that support personalized education, automated assessment, and data-driven teaching strategies."
        description2="Our mission is to help educational institutions deliver more engaging, effective, and accessible learning experiences through innovative digital tools and platforms."
        image="/image/pages_img/EdTech.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI and ML in EdTech"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="EdTech AI Solutions" subtitle="AI technology for modern education" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="AI Solutions"
        subtitle="Discover how our cutting-edge AI technology has transformed"
        highlightedSubtitle="educational institutions"
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our"
        highlightedSubtitle="AI-powered EdTech"
      />
      <Footer />
    </div>
  );
};

export default EdTech;
