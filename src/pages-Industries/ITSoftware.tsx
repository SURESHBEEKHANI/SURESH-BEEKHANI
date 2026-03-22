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
  {
    id: 1,
    title: "AI-Powered Development Tools",
    description: "Code generation, automated testing, and intelligent debugging to accelerate development by 40%.",
    image: "/image/pages_img/ai-powered-development-tools.jpg",
    alt: "AI-Powered Development Tools"
  },
  {
    id: 2,
    title: "Intelligent IT Support",
    description: "AI chatbots for ticketing, incident resolution, and 24/7 IT helpdesk automation.",
    image: "/image/pages_img/intelligent-it-support.jpg",
    alt: "Intelligent IT Support"
  },
  {
    id: 3,
    title: "DevOps & Infrastructure",
    description: "Predictive monitoring, automated scaling, and anomaly detection for reliable operations.",
    image: "/image/pages_img/devops-infrastructure.jpg",
    alt: "DevOps & Infrastructure"
  },
  {
    id: 4,
    title: "Enterprise Software Solutions",
    description: "Custom AI integrations for ERP, CRM, and business systems—driving efficiency and insights.",
    image: "/image/pages_img/enterprise-software-solutions.jpg",
    alt: "Enterprise Software Solutions"
  },
  {
    id: 5,
    title: "Code Quality & Security",
    description: "AI-powered code review, vulnerability detection, and automated security testing for safer software.",
    image: "/image/pages_img/code-quality-security.jpg",
    alt: "Code Quality & Security"
  },
  {
    id: 6,
    title: "Intelligent Documentation",
    description: "Auto-generate technical documentation, API specs, and code comments with AI assistance.",
    image: "/image/pages_img/intelligent-documentation.jpg",
    alt: "Intelligent Documentation"
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
  { id: 1, question: "How does AI enhance IT and software development?", answer: "AI accelerates development with code assist, automated testing, and intelligent operations. IT teams see 30-50% productivity gains and improved system reliability." },
  { id: 2, question: "Can AI solutions integrate with existing tech stacks?", answer: "Yes, we build solutions that integrate with your current tools—cloud providers, CI/CD, ticketing systems, and enterprise software." },
  { id: 3, question: "What types of technology solutions do you build?", answer: "We build custom AI solutions: chatbots, automation, predictive analytics, computer vision, NLP, and integrations for ERP, CRM, and internal systems." },
  { id: 4, question: "What is the ROI of implementing AI in IT operations?", answer: "IT teams typically see 30-50% reduction in incident response time, 40-60% decrease in manual tasks, and significant cost savings through automation. Most implementations achieve ROI within 4-8 months." },
  { id: 5, question: "How do you ensure AI solutions are secure and compliant?", answer: "We implement enterprise-grade security, SOC 2 compliance, end-to-end encryption, and strict access controls. All solutions undergo security audits and penetration testing before deployment." }
];

const ITSoftware: React.FC = () => {
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  const capabilities = [
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "AI-Powered Development Tools",
      description: "Intelligent code completion, automated testing, and bug detection accelerate development by 40%. AI assists developers with code generation, refactoring suggestions, and real-time quality checks.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Intelligent IT Support Automation",
      description: "AI chatbots and virtual assistants handle 60-70% of IT tickets automatically, providing instant resolutions for common issues and routing complex problems to the right teams with context.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      title: "DevOps & Infrastructure Intelligence",
      description: "Predictive monitoring detects issues before they impact users. AI-powered anomaly detection, automated scaling, and intelligent alerting reduce downtime by 50% and improve system reliability.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Code Security & Quality Assurance",
      description: "AI-powered code review identifies vulnerabilities, security flaws, and quality issues in real-time. Automated security testing and compliance checks ensure safer, more reliable software releases.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      title: "Enterprise Integration Solutions",
      description: "AI seamlessly integrates with ERP, CRM, and business systems to automate workflows, extract insights, and enhance decision-making across the organization with minimal manual intervention.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Accelerated Development Cycles",
      description: "IT teams using AI-powered tools see 30-50% faster development cycles, 40% reduction in bugs, and 60% improvement in code quality through intelligent automation and predictive insights.",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      <IndustryHero
        title="IT & Software"
        description="Transform your technology stack with AI-powered development tools, intelligent IT support, DevOps automation, and enterprise software solutions. Scale smarter."
        bgImage="/image/pages_img/IT-Software.jpg"
      />
      <IndustryProfessional
        title="Innovative IT &"
        highlightedTitle="AI Software Solutions"
        description1="We are transforming IT operations and software development with the power of Artificial Intelligence. By combining machine learning, intelligent automation, and predictive analytics, we create smart solutions that support faster development cycles, automated operations, proactive monitoring, and enhanced security."
        description2="Our mission is to help technology teams deliver more reliable, efficient, and innovative software solutions through cutting-edge AI-powered tools and platforms."
        image="/image/pages_img/IT-Software.jpg"
      />
      <IndustryCapabilities
        title="Capabilities and Benefits of"
        highlightedTitle="AI and ML in IT & Software"
        capabilities={capabilities}
      />
      <AnimatedCarousel useCases={useCases} title="IT & Software AI Solutions" subtitle="AI technology for modern software and IT" />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title="Real-World"
        highlightedTitle="AI Solutions"
        subtitle="Discover how our cutting-edge AI technology has transformed"
        highlightedSubtitle="technology delivery"
      />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our"
        highlightedSubtitle="AI-powered IT"
      />
      <Footer />
    </div>
  );
};

export default ITSoftware;
