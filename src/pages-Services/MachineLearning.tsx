
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mlServices = [
  {
    id: 1,
    title: "Custom ML Model Development",
    description:
      "Design and deploy machine learning models tailored to your business challenges and data.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 2,
    title: "Model Training & Optimization",
    description:
      "Train, validate, and optimize ML models for maximum accuracy and performance.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 3,
    title: "ML Model Deployment",
    description:
      "Deploy machine learning models to cloud, edge, or on-premise environments.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 4,
    title: "Data Preparation & Feature Engineering",
    description:
      "Clean, transform, and engineer features from raw data for optimal model performance.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 5,
    title: "ML Model Monitoring & Maintenance",
    description:
      "Monitor deployed models and ensure ongoing accuracy and reliability.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 6,
    title: "Automated Machine Learning (AutoML)",
    description:
      "Accelerate model development with automated machine learning pipelines.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
];

const mlTabs = [
  {
    id: 1,
    title: "Predictive Analytics",
    description:
      "Use machine learning to forecast trends, demand, and outcomes for smarter business decisions.",
    image: "/image/pages_img/Predictive-Modelling.jpg",
  },
  {
    id: 2,
    title: "Recommendation Systems",
    description:
      "Deliver personalized recommendations to users with collaborative and content-based filtering.",
    image: "/image/pages_img/Content-Recommendation.jpg",
  },
  {
    id: 3,
    title: "Anomaly Detection",
    description:
      "Detect outliers and prevent fraud or failures with advanced anomaly detection models.",
    image: "/image/pages_img/Anomaly-Detection.jpg",
  },
];

const industries = [
  {
    name: "HealthTech",
    image: "/image/pages_img/healthtechai.jpg",
    description: "ML for healthcare automation, diagnostics, and patient engagement.",
    page: "/HealthTechAI",
  },
  {
    name: "EdTech",
    image: "/image/pages_img/EdTechAI.avif",
    description: "ML for personalized learning, automated grading, and student analytics.",
    page: "/EdTechAI",
  },
  {
    name: "FinTech",
    image: "/image/pages_img/fintech.jpg",
    description: "ML for banking, fraud detection, credit scoring, and compliance.",
    page: "/FinTechAI",
  },
  {
    name: "GreenTech",
    image: "/image/pages_img/greentech.jpg",
    description: "ML for sustainability, energy management, and green innovation.",
    page: "/GreenTechAI",
  },
  {
    name: "Retail",
    image: "/image/pages_img/retail.jpg",
    description: "ML for retail automation, demand forecasting, and personalized shopping.",
    page: "/RetailAI",
  },
  {
    name: "E-Commerce",
    image: "/image/pages_img/E-Commerce.jpg",
    description: "ML for e-commerce: automate recommendations, pricing, and inventory.",
    page: "/E-Commerce",
  },
  {
    name: "HIPAA Compliance",
    image: "/image/pages_img/HIPAA.avif",
    description: "ML for HIPAA-compliant healthcare data and automation.",
    page: "/HIPAACompliance",
  },
  {
    name: "DiagnosticsAI",
    image: "/image/pages_img/Diagnostics.jpg",
    description: "ML for AI-driven diagnostics, predictive analytics, and workflow automation.",
    page: "/DiagnosticsAI",
  },
];

const platforms = [
  { name: "scikit-learn", image: "/image/skills_img/sikitlearn.png" },
  { name: "TensorFlow", image: "/image/skills_img/tensorflow.png" },
  { name: "PyTorch", image: "/image/skills_img/pytorch.png" },
  { name: "HuggingFace", image: "/image/skills_img/huggingface.png" },
  { name: "MLflow", image: "/image/skills_img/mlflow.svg" },
];

const faqData = [
  {
    question: "What is Machine Learning?",
    answer: "Machine Learning (ML) is a branch of AI that enables systems to learn from data, identify patterns, and make decisions with minimal human intervention.",
  },
  {
    question: "How can ML benefit my business?",
    answer: "ML can automate processes, improve decision-making, personalize experiences, and uncover insights from your data, driving innovation and efficiency.",
  },
  {
    question: "Can ML solutions be customized for my industry?",
    answer: "Yes, ML can be tailored for healthcare, finance, retail, education, and more, ensuring industry-specific compliance and value.",
  },
  {
    question: "Is my data secure with ML integrations?",
    answer: "We implement robust security measures and comply with standards like HIPAA and GDPR to ensure your data is protected.",
  },
  {
    question: "How do I get started with ML integration?",
    answer: "Contact us for a consultation. We'll assess your needs, propose a solution, and guide you through seamless integration.",
  },
];

const onboardingSteps = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"/><path d="M16 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Contact Us',
    description: 'Reach out to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
    ),
    title: 'Consultation & Discovery',
    description: 'Schedule a professional consultation with our experts. We’ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
    title: 'Receive a Detailed Proposal',
    description: 'Based on your requirements, we’ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate—so you know exactly what to expect.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Project Kickoff & Delivery',
    description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication—ensuring a smooth, successful delivery from start to finish.',
  },
];

const MachineLearning: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Machine-Learning.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-8">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Machine <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Learning</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 w-full whitespace-pre-line mt-4">
                Accelerate business growth with tailored machine learning solutions that drive results.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a
                  href="mailto:sureshbeekhani26@gmail.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
                >
                  Talk to in Expert
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Optionally, you can add an image or illustration here if needed */}
          </div>
        </div>
      </section>

      {/* Custom ML Services Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/image/pages_img/AI-MODEL-LEVERGED.jpg"
              alt="Custom ML Services"
              className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-white/20 object-cover"
            />
          </div>
          {/* Right: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Custom Machine Learning Solutions for Your Business</h2>
            <p className="text-lg text-gray-700">
              Unlock actionable insights and maximize efficiency with machine learning services designed for your unique business objectives. Our advanced AI and predictive analytics empower you to stay ahead in a competitive market.
            </p>
            <p className="text-lg text-gray-700">
              Our expert ML team partners with you to:
            </p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Develop and implement bespoke machine learning models</li>
              <li>Automate and optimize critical business operations</li>
              <li>Uncover valuable patterns and emerging opportunities</li>
              <li>Deliver data-driven strategies for confident decision-making</li>
            </ul>
            <p className="text-lg text-gray-700">
              Harness the power of your data to achieve measurable business impact with our proven ML expertise.
            </p>
          </div>
        </div>
      </section>

      {/* ML Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Transform Your Business with Our Machine Learning Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Predictive Analysis */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-300/20">
                {/* Chart/Trend Icon */}
                <svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Predictive Analysis</h3>
              <p className="text-gray-200 leading-relaxed">
                Leverage predictive analytics to anticipate trends, optimize operations, and make proactive business decisions with confidence.
              </p>
            </div>
            {/* Deep Learning */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-300/20">
                {/* Neural Network Icon */}
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="8" cy="12" r="1.5"/><circle cx="16" cy="12" r="1.5"/><circle cx="12" cy="8" r="1.5"/><circle cx="12" cy="16" r="1.5"/><path d="M8 12h8M12 8v8"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Deep Learning</h3>
              <p className="text-gray-200 leading-relaxed">
                Harness the power of deep learning to recognize complex patterns, automate processes, and unlock new opportunities for innovation.
              </p>
            </div>
            {/* Natural Language Processing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-300/20">
                {/* NLP/Text Icon */}
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Natural Language Processing</h3>
              <p className="text-gray-200 leading-relaxed">
                Enable seamless human-machine interaction and extract valuable insights from text data with advanced language understanding.
              </p>
            </div>
            {/* Computer Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-purple-300/20">
                {/* Eye/Camera Icon */}
                <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M2 7h4l2-3h8l2 3h4v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Computer Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                Transform visual data into actionable intelligence—empowering applications from image recognition to automated quality control.
              </p>
            </div>
            {/* Speech Recognition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-300/20">
                {/* Microphone Icon */}
                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2"/><path d="M12 22v-4"/><path d="M8 22h8"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Speech Recognition</h3>
              <p className="text-gray-200 leading-relaxed">
                Accurately transcribe and interpret spoken language to streamline workflows and enhance customer experiences.
              </p>
            </div>
            {/* Generative Models */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-pink-300/20">
                {/* Sparkle/Generate Icon */}
                <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3.5"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Generative Models</h3>
              <p className="text-gray-200 leading-relaxed">
                Unlock creativity and efficiency with generative AI—enabling content creation, data augmentation, and innovative business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Learning Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
              Machine Learning Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Open Source Libraries and Frameworks */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100">
                {/* Open Source/Code Icon */}
                <svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Open Source Libraries and Frameworks</h3>
              <p className="text-gray-700">
                Build on trusted, open-source ML libraries for scalable, reliable solutions in recommendation, language, and predictive analytics.
              </p>
            </div>
            {/* Cloud-Based Solutions */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                {/* Cloud Icon */}
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16a4 4 0 0 0-3-7.87A5 5 0 0 0 2 13a5 5 0 0 0 5 5h10a4 4 0 0 0 0-8z"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Cloud-Based Solutions</h3>
              <p className="text-gray-700">
                Deploy secure, scalable machine learning applications on leading cloud platforms, ensuring flexibility and robust performance.
              </p>
            </div>
            {/* Transformer-based Solutions */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                {/* Transformer/Model Icon */}
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8M12 8v8"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Transformer-based Solutions</h3>
              <p className="text-gray-700">
                Achieve superior results in natural language tasks with state-of-the-art transformer models like BERT and GPT.
              </p>
            </div>
            {/* Continual Learning */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-100">
                {/* Refresh/Loop Icon */}
                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v5h.582M20 20v-5h-.581M19.418 9A7.974 7.974 0 0 0 12 4a8 8 0 0 0-7.418 5M4.582 15A7.974 7.974 0 0 0 12 20a8 8 0 0 0 7.418-5"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Continual Learning</h3>
              <p className="text-gray-700">
                Ensure your models evolve with your business—adapting to new data and market changes for sustained performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Industries We Empower
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Delivering high-impact machine learning solutions tailored to your industry’s unique challenges and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-2xl">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative border-b border-r border-white/30 min-h-[180px] flex items-center justify-center cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndustry(industry.name)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-300 z-0"
                />
                {/* Default dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10 z-10 transition-all duration-300 group-hover:opacity-0"></div>
                {/* Hover overlay with content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'rgba(23, 37, 84, 0.9)'}}>
                  <div className="text-2xl font-bold text-white mb-4">{industry.name}</div>
                  <div className="text-white text-base font-normal mb-4">{industry.description}</div>
                  <a href={industry.page} className="inline-flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform">Read More <span aria-hidden="true">→</span></a>
                </div>
                {/* Default industry name (only visible when not hovered) */}
                <div className="relative z-20 text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
              ML Integration Platforms
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              We utilize industry-leading platforms and frameworks to deliver robust, scalable machine learning integrations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {platforms.map((platform) => (
              <div className="flex flex-col items-center" key={platform.name}>
                <img src={platform.image} alt={platform.name} className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
                <span className="mt-3 text-blue-900 font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The development process of ML integration */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Our Machine Learning Development Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Step 1: Data Preparation and Exploration */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-2 font-bold text-lg">1</span>
              <span className="font-bold text-blue-900 text-lg text-center">Data Preparation and Exploration</span>
              <p className="text-gray-700 text-center">We begin by gathering, cleaning, and transforming your data—ensuring accuracy and consistency for optimal model performance.</p>
            </div>
            {/* Step 2: Model Building and Training */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-2 font-bold text-lg">2</span>
              <span className="font-bold text-blue-900 text-lg text-center">Model Building and Training</span>
              <p className="text-gray-700 text-center">Our experts select the right algorithms and fine-tune hyperparameters to build high-performing, business-aligned models.</p>
            </div>
            {/* Step 3: Model Evaluation and Validation */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-2 font-bold text-lg">3</span>
              <span className="font-bold text-blue-900 text-lg text-center">Model Evaluation and Validation</span>
              <p className="text-gray-700 text-center">We rigorously test and validate models against benchmarks to ensure reliability and measurable results before deployment.</p>
            </div>
            {/* Step 4: Deployment and Maintenance */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 mb-2 font-bold text-lg">4</span>
              <span className="font-bold text-blue-900 text-lg text-center">Deployment and Maintenance</span>
              <p className="text-gray-700 text-center">Seamlessly integrate models into your systems and monitor performance for continuous improvement and business value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Why Partner with Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expertise */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-2">
                {/* Star/Expertise Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <span className="font-bold text-blue-900 text-lg text-center">Expertise</span>
              <p className="text-gray-700 text-center">Work with seasoned professionals who deliver proven AI and ML solutions that drive business growth.</p>
            </div>
            {/* Custom Solutions */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-2">
                {/* Puzzle/Custom Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
              </span>
              <span className="font-bold text-blue-900 text-lg text-center">Custom Solutions</span>
              <p className="text-gray-700 text-center">Receive machine learning integrations tailored to your business goals and operational needs.</p>
            </div>
            {/* End-to-End Support */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-2">
                {/* Support/Headset Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
              </span>
              <span className="font-bold text-blue-900 text-lg text-center">End-to-End Support</span>
              <p className="text-gray-700 text-center">Benefit from comprehensive guidance at every stage—from strategy to deployment and beyond.</p>
            </div>
            {/* Proven Results */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 mb-2">
                {/* Trophy/Results Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
              </span>
              <span className="font-bold text-blue-900 text-lg text-center">Proven Results</span>
              <p className="text-gray-700 text-center">See measurable impact with a track record of successful projects and tangible business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col transition-all duration-300 hover:scale-[1.02]"
              >
                <button
                  className="w-full flex items-center justify-between focus:outline-none group"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  aria-expanded={openFAQ === idx}
                >
                  <span className="font-semibold text-xl text-blue-900 text-left group-hover:text-cyan-700 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-7 h-7 text-blue-900 group-hover:text-cyan-700 transform transition-transform duration-200 ${openFAQ === idx ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFAQ === idx && (
                  <div className="pt-4 text-gray-800 animate-fade-in text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MachineLearning;
