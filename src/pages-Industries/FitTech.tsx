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
  { id: 1, title: "Personalized Workout Plans", description: "AI creates custom routines based on goals, fitness level, and preferences—boosting adherence by 45%.", image: "/image/pages_img/wellness-personalized.jpg", alt: "Personalized Workouts" },
  { id: 2, title: "Wearable Data Analytics", description: "Process heart rate, steps, sleep, and activity data for actionable insights and progress tracking.", image: "/image/pages_img/remote-patient-monitoring.jpg", alt: "Wearable Analytics" },
  { id: 3, title: "AI Fitness Coaches", description: "Virtual coaches provide form correction, motivation, and 24/7 guidance via chatbots and voice assistants.", image: "/image/pages_img/ai-chatbots-hospital.jpg", alt: "AI Coaches" },
  { id: 4, title: "Nutrition & Recovery", description: "AI-powered meal plans, supplement recommendations, and recovery optimization for better outcomes.", image: "/image/pages_img/predictive-analytics-hospital.jpg", alt: "Nutrition AI" }
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
  { id: 1, question: "How does AI enhance fitness and wellness?", answer: "AI enables personalized workout plans, wearable analytics, virtual coaching, and nutrition optimization. Apps and platforms see 40%+ improvement in user engagement and retention." },
  { id: 2, question: "Can FitTech AI integrate with wearables?", answer: "Yes, we integrate with Apple Health, Google Fit, Fitbit, Garmin, and other wearables via APIs for comprehensive data insights." },
  { id: 3, question: "How is user health data protected?", answer: "We follow GDPR, HIPAA (where applicable), and industry best practices with encryption and user consent controls." },
  { id: 4, question: "What is the ROI of implementing AI in fitness apps?", answer: "Fitness platforms typically see 40-60% increase in user retention, 35-50% improvement in workout completion rates, and 45% boost in premium subscriptions. Most implementations achieve ROI within 4-8 months through increased engagement and reduced churn." },
  { id: 5, question: "Can AI fitness solutions scale for enterprise wellness programs?", answer: "Absolutely. Our AI solutions seamlessly scale from individual users to enterprise wellness programs with thousands of employees. We provide white-label options, custom branding, and integration with corporate health platforms." }
];

const FitTech: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      title: "Personalized Workout Programs",
      description: "AI analyzes fitness levels, goals, and preferences to create customized workout plans that adapt in real-time. This increases workout completion rates by 45% and improves user retention significantly.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Wearable Data Intelligence",
      description: "AI processes data from fitness trackers and smartwatches to provide actionable insights on heart rate, sleep quality, activity patterns, and recovery metrics for optimized performance.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "AI Form Correction & Coaching",
      description: "Computer vision analyzes exercise form in real-time, providing instant feedback and corrections. This reduces injury risk by 60% while improving exercise effectiveness and user confidence.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      title: "Nutrition & Meal Planning",
      description: "AI creates personalized meal plans based on fitness goals, dietary restrictions, and biometric data. Continuous optimization ensures users meet their nutritional targets while enjoying their meals.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: "24/7 Virtual Fitness Assistants",
      description: "AI-powered chatbots and voice assistants provide round-the-clock motivation, answer fitness questions, track progress, and adjust workout plans based on user feedback and performance data.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Enhanced User Engagement",
      description: "Fitness platforms using AI see 40-60% improvement in user retention, 50% increase in workout completion rates, and 45% boost in premium subscriptions through personalized, data-driven experiences.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero 
        title="FitTech"
        description="Transform fitness with AI-powered personalized workouts, wearable analytics, virtual coaches, and nutrition optimization. Enhance user engagement and outcomes."
        bgImage="/image/pages_img/wellness-personalized.jpg"
      />
      <IndustryProfessional 
        title="Innovative FitTech"
        highlightedTitle="AI Software Solutions"
        description1="We are revolutionizing fitness and wellness with the power of Artificial Intelligence. By combining machine learning, computer vision, and wearable data analytics, we create intelligent fitness solutions that support personalized workouts, real-time form correction, nutrition optimization, and progress tracking."
        description2="Our mission is to help fitness platforms and wellness apps deliver more engaging, effective, and personalized experiences that drive user retention and achieve better health outcomes."
        image="/image/pages_img/wellness-personalized.jpg"
      />
      <IndustryCapabilities 
        title="Capabilities and Benefits of"
        highlightedTitle="AI and ML in FitTech"
        subtitle="Delivering excellence in"
        highlightedSubtitle="well-being intelligence"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="FitTech AI Solutions" subtitle="AI technology for fitness and wellness" />
      <IndustrySuccessStories 
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="AI Solutions"
        subtitle="Discover how our cutting-edge AI technology has transformed"
        highlightedSubtitle="fitness platforms"
      />
      <IndustryFAQ 
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our"
        highlightedSubtitle="AI-powered fitness"
      />
      <Footer />
    </div>
  );
};

export default FitTech;
