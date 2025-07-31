import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mlServices = [
  {
    id: 1,
    title: "Predictive Analytics",
    description: "Build models to forecast trends and make data-driven decisions.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Classification Models",
    description: "Automate categorization and decision-making processes.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Regression Analysis",
    description: "Predict continuous outcomes and numerical values.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Clustering & Segmentation",
    description: "Discover patterns and group similar data points.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Natural Language Processing",
    description: "Process and understand human language with AI.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Deep Learning",
    description: "Build neural networks for complex pattern recognition.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const industries = [
  {
    name: "Retail",
    image: "/image/pages_img/Customer-Segmentation.jpg",
    description: "Customer segmentation, demand forecasting, and personalized recommendations.",
    page: "/RetailAI",
  },
  {
    name: "HealthTech",
    image: "/image/pages_img/healthtechai.jpg",
    description: "Medical diagnosis, drug discovery, and patient outcome prediction.",
    page: "/HealthTechAI",
  },
  {
    name: "FinTech",
    image: "/image/pages_img/fintech.jpg",
    description: "Fraud detection, risk assessment, and algorithmic trading.",
    page: "/FinTechAI",
  },
  {
    name: "E-Commerce",
    image: "/image/pages_img/E-Commerce.jpg",
    description: "Product recommendations, inventory optimization, and customer behavior analysis.",
    page: "/E-Commerce",
  },
  {
    name: "GreenTech",
    image: "/image/pages_img/greentech.jpg",
    description: "Environmental monitoring, energy optimization, and sustainability analytics.",
    page: "/GreenTechAI",
  },
  {
    name: "EdTech",
    image: "/image/pages_img/EdTechAI.avif",
    description: "Personalized learning, student performance prediction, and adaptive assessments.",
    page: "/EdTechAI",
  },
  {
    name: "DiagnosticsAI",
    image: "/image/pages_img/Diagnostics.jpg",
    description: "Medical image analysis, disease prediction, and treatment optimization.",
    page: "/DiagnosticsAI",
  },
  {
    name: "HIPAA Compliance",
    image: "/image/pages_img/HIPAA.avif",
    description: "Secure healthcare data processing with compliance standards.",
    page: "/HIPAACompliance",
  },
];

const platforms = [
  { name: "TensorFlow", image: "/image/skills_img/tensorflow.png" },
  { name: "PyTorch", image: "/image/skills_img/pytorch.png" },
  { name: "Scikit-learn", image: "/image/skills_img/sikitlearn.png" },
  { name: "Pandas", image: "/image/skills_img/pandas.png" },
  { name: "NumPy", image: "/image/skills_img/numpy.png" },
];

const mlSolutions = [
  {
    key: "PredictAI",
    name: "PredictAI",
    description: (
      <>
        PredictAI delivers advanced predictive analytics, enabling businesses to forecast trends and make data-driven decisions with confidence.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Predictive-Analytics-Services.jpg",
  },
  {
    key: "ClassifyAI",
    name: "ClassifyAI",
    description: (
      <>
        ClassifyAI automates categorization and decision-making processes, streamlining workflows and improving accuracy.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Automated-Product-Tagging.jpg",
  },
  {
    key: "InsightAI",
    name: "InsightAI",
    description: (
      <>
        InsightAI uncovers hidden patterns in your data, providing actionable insights for strategic decision-making.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Customer-Segmentation.jpg",
  },
];

const faqData = [
  {
    question: "What is Machine Learning?",
    answer: "Machine learning is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed.",
  },
  {
    question: "How can machine learning benefit my business?",
    answer: "Machine learning can automate processes, predict outcomes, optimize operations, and provide insights that drive better business decisions.",
  },
  {
    question: "Can machine learning solutions be customized for my industry?",
    answer: "Yes, machine learning models can be tailored for healthcare, finance, retail, manufacturing, and more, ensuring industry-specific value.",
  },
  {
    question: "Is my data secure with machine learning integrations?",
    answer: "We implement robust security measures and comply with standards like GDPR and HIPAA to ensure your data is protected.",
  },
  {
    question: "How do I get started with machine learning integration?",
    answer: "Contact us for a consultation. We'll assess your needs, propose a solution, and guide you through seamless integration.",
  },
];

const onboardingSteps = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"/>
        <path d="M16 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Contact Us",
    description: "Reach out to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 15h8M8 11h8M8 7h8"/>
      </svg>
    ),
    title: 'Consultation & Discovery',
    description: 'Schedule a professional consultation with our experts. We\'ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="7" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: "Receive a Detailed Proposal",
    description: "Based on your requirements, we'll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate so you know exactly what to expect.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    title: "Project Kickoff & Delivery",
    description: "Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring a smooth, successful delivery from start to finish.",
  },
];

const MachineLearning: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("PredictAI");

  const solution = mlSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Machine-Learning.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Machine <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Learning</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                Transform your business with intelligent machine learning solutions that drive innovation in predictive analytics, automation, pattern recognition, and data-driven decision making for superior performance and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg text-center min-h-[44px] flex items-center justify-center"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Optionally, you can add an image or illustration here if needed */}
          </div>
        </div>
      </section>

      {/* Machine Learning Capabilities Section */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-green-50 to-blue-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: ML Image */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/Machine-Learning-power.jpg"
                  alt="The Power of Machine Learning"
                  className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                The Power of Machine Learning
              </h2>
              <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
                Unlock transformative opportunities with advanced machine learning. Our tailored solutions enable computers to learn from data, identify patterns, and make intelligent predictions fueling smarter automation and actionable insights.
              </p>
              <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
                Our dedicated experts seamlessly integrate and customize machine learning technologies to your unique needs, empowering data-driven decisions and operational excellence.
              </p>
              <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
                From healthcare and finance to retail and beyond, machine learning redefines how you serve customers and grow your business. Partner with us to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Advanced Machine Learning Services
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Intelligent automation solutions for today's dynamic business landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                         {mlServices.map((service, index) => (
               <div key={service.id} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-300 flex flex-col gap-4 items-center min-h-[200px] sm:min-h-[220px]">
                 <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto ${
                   index % 2 === 0 ? 'bg-blue-200' : 'bg-indigo-200'
                 }`}>
                   {service.icon}
                 </div>
                 <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">{service.title}</h3>
                 <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">{service.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Machine Learning Benefits
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Intelligent automation solutions for today's dynamic business landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                         {/* Accuracy */}
             <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-purple-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto">
                 <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <circle cx="12" cy="12" r="10"/>
                   <circle cx="12" cy="12" r="6"/>
                   <circle cx="12" cy="12" r="2"/>
                 </svg>
               </div>
               <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Accuracy</h3>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">High-precision predictions and classifications for reliable decision-making.</p>
             </div>
             {/* Scalability */}
             <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto">
                 <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <rect x="4" y="4" width="16" height="16" rx="4"/>
                   <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Scalability</h3>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Scale from pilot projects to enterprise-wide deployments seamlessly.</p>
             </div>
             {/* Flexibility */}
             <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-green-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-green-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto">
                 <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <circle cx="12" cy="12" r="3"/>
                   <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 3 12.9V12a2 2 0 1 1 0-4v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 12 3.6V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1.51 1c.26 0 .52-.09.74-.26l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09A1.65 1.65 0 0 0 21 12v.09a1.65 1.65 0 0 0-1 1.51z"/>
                 </svg>
               </div>
               <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Flexibility</h3>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Customize every aspect to perfectly align with your business objectives.</p>
             </div>
             {/* Automation */}
             <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-orange-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto">
                 <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                 </svg>
               </div>
               <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Automation</h3>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Automate complex processes and decision-making workflows.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Industries We Work With
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Tailored machine learning solutions across diverse industry verticals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-xl sm:rounded-2xl">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative border-b border-r border-white/30 min-h-[160px] sm:min-h-[180px] flex items-center justify-center cursor-pointer overflow-hidden"
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 sm:py-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'rgba(23, 37, 84, 0.9)'}}>
                  <div className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">{industry.name}</div>
                  <div className="text-white text-xs sm:text-base font-normal mb-3 sm:mb-4 leading-relaxed">{industry.description}</div>
                  <a href={industry.page} className="inline-flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform text-sm sm:text-base">Learn More <span aria-hidden="true">→</span></a>
                </div>
                {/* Default industry name (only visible when not hovered) */}
                <div className="relative z-20 text-base sm:text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300 px-2 text-center">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Machine Learning Integration Platforms
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Leverage industry-leading platforms for robust machine learning implementations.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
            {platforms.map((platform) => (
              <div className="flex flex-col items-center" key={platform.name}>
                <img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2" />
                <span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Machine Learning Development Process
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Streamlined approach to implementing machine learning solutions with proven methodology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                         {/* Define the use case */}
             <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-indigo-200 text-indigo-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <circle cx="12" cy="12" r="10"/>
                   <circle cx="12" cy="12" r="6"/>
                   <circle cx="12" cy="12" r="2"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Define Use Case</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Pinpoint your business challenge to maximize machine learning impact.</p>
             </div>
             {/* Data collection & preparation */}
             <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-teal-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-teal-200 text-teal-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <ellipse cx="12" cy="6" rx="8" ry="3"/>
                   <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/>
                   <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Data Collection</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Curate high-quality data for optimal model performance.</p>
             </div>
             {/* Development & integration */}
             <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-200 text-blue-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path d="M16 18l6-6-6-6"/>
                   <path d="M8 6l-6 6 6 6"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Development</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Build and train machine learning models for your applications.</p>
             </div>
             {/* Deployment & monitoring */}
             <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-200 text-amber-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <rect x="3" y="4" width="18" height="16" rx="2"/>
                   <path d="M9 10v4M15 8v8"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Deployment</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Deploy with confidence and monitor performance for improvement.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Trusted expertise and proven results for your machine learning implementation needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                         {/* Expertise */}
             <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-violet-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-violet-200 text-violet-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Expertise</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Work with seasoned professionals ensuring your project's success.</p>
             </div>
             {/* Custom Solutions */}
             <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-200 text-emerald-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Custom Solutions</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Bespoke machine learning integrations for your unique business goals.</p>
             </div>
             {/* End-to-End Support */}
             <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-sky-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-sky-200 text-sky-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">End-to-End Support</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Comprehensive support from strategy to deployment and optimization.</p>
             </div>
             {/* Proven Results */}
             <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-rose-300 flex flex-col items-center gap-4 min-h-[200px] sm:min-h-[220px]">
               <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-rose-200 text-rose-600 mb-2">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/>
                   <path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/>
                 </svg>
               </span>
               <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Proven Results</span>
               <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Join clients who have achieved measurable business impact.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Common questions about machine learning implementation and our services.
            </p>
          </div>
          <div className="space-y-3">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col transition-all duration-300 hover:scale-[1.01]"
              >
                <button
                  className="w-full flex items-center justify-between focus:outline-none group min-h-[44px]"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  aria-expanded={openFAQ === idx}
                >
                  <span className="font-semibold text-sm sm:text-base text-gray-900 text-left group-hover:text-blue-700 transition-colors duration-200 pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-blue-900 group-hover:text-cyan-700 transition-colors duration-200 flex-shrink-0">
                    {openFAQ === idx ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </button>
                {openFAQ === idx && (
                  <div className="pt-3 sm:pt-4 text-gray-800 animate-fade-in text-xs sm:text-sm leading-relaxed">
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
