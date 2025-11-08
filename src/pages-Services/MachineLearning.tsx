import React, { useState, useEffect } from "react";
import { Brain, BarChart3, Target, Users, TrendingUp, Code, ArrowRight, CheckCircle, Shield, Globe, Zap, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

const mlServices = [
  {
    id: 1,
    title: "Patient Risk Prediction",
    description: "Forecast patient outcomes, readmission risks, and disease progression with advanced predictive models.",
    icon: <BarChart3 className="h-7 w-7" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Medical Diagnosis Classification",
    description: "Automate disease classification, symptom analysis, and diagnostic decision support systems.",
    icon: <Target className="h-7 w-7" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Treatment Outcome Analysis",
    description: "Predict treatment effectiveness, recovery timelines, and personalized care recommendations.",
    icon: <TrendingUp className="h-7 w-7" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Patient Segmentation",
    description: "Group patients by risk factors, conditions, and care needs for targeted interventions.",
    icon: <Users className="h-7 w-7" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Clinical NLP",
    description: "Extract insights from medical records, clinical notes, and patient communications with AI.",
    icon: <MessageSquare className="h-7 w-7" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Medical Imaging AI",
    description: "Analyze X-rays, MRIs, and CT scans with deep learning for accurate diagnostic support.",
    icon: <Brain className="h-7 w-7" />,
    color: "from-teal-500 to-cyan-500"
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
    question: "What is Healthcare Machine Learning?",
    answer: "Healthcare machine learning uses AI algorithms to analyze medical data, predict patient outcomes, support clinical decisions, and automate healthcare workflows while maintaining HIPAA compliance and patient safety standards.",
  },
  {
    question: "How can machine learning benefit my healthcare practice?",
    answer: "Healthcare ML reduces administrative burden, improves diagnostic accuracy, enables early disease detection, predicts patient risks, personalizes treatment plans, and optimizes resource allocation—all while maintaining compliance.",
  },
  {
    question: "Can ML solutions be customized for my medical specialty?",
    answer: "Yes, machine learning models can be tailored for cardiology, oncology, radiology, primary care, and any medical specialty, ensuring clinical relevance and specialty-specific value.",
  },
  {
    question: "Is patient data secure with ML integrations?",
    answer: "Absolutely. We implement HIPAA-compliant architecture with robust encryption, access controls, audit trails, and security measures to protect patient data and ensure regulatory compliance.",
  },
  {
    question: "How do I get started with healthcare ML integration?",
    answer: "Contact us for a clinical consultation. We'll assess your workflows, identify ML opportunities, propose HIPAA-compliant solutions, and guide you through seamless integration into your practice.",
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
  const [activeTab, setActiveTab] = useState("PredictAI");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solution = mlSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Machine-Learning.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Machine Learning
              </h1>
              <p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
              Transform patient care with intelligent ML solutions for clinical predictions, diagnostic support, and data-driven healthcare decisions.
              Improve outcomes with HIPAA-compliant machine learning technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
                <a
                  href="/#contact"
                  className="btn-primary text-center min-h-[44px] flex items-center justify-center"
                >
                  Talk to AI Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: ML Image */}
            <div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/Machine-Learning-power.jpg"
                  alt="The Power of Machine Learning"
                  className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20 modern-card"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className={`space-y-4 sm:space-y-6 order-1 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                The Power of Healthcare Machine Learning
              </h2>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Revolutionize patient care with advanced machine learning designed for healthcare. Our HIPAA-compliant solutions analyze medical data, identify clinical patterns, and generate intelligent predictions that enhance diagnostic accuracy and treatment outcomes.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Our healthcare AI specialists seamlessly integrate machine learning into clinical workflows, empowering providers with predictive analytics, automated risk assessment, and personalized treatment recommendations that improve patient outcomes.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                From hospitals and clinics to telehealth platforms and medical research, healthcare machine learning transforms how you deliver care, reduce costs, and save lives. Partner with us to lead the future of medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding ai-section">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">
              Healthcare Machine Learning Solutions
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
              HIPAA-compliant ML solutions transforming clinical decision-making and patient care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {mlServices.map((service, index) => (
              <div 
                key={service.id}
                className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Healthcare ML Benefits
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Delivering better patient outcomes and clinical excellence through healthcare ML innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Accuracy */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Accuracy</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">High-precision diagnostic predictions and risk assessments for reliable clinical decisions.</p>
            </div>
            {/* Scalability */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4"/>
                  <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Healthcare Scalability</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Scale from single departments to hospital-wide and multi-facility deployments seamlessly.</p>
            </div>
            {/* Flexibility */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 3 12.9V12a2 2 0 1 1 0-4v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 12 3.6V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1.51 1c.26 0 .52-.09.74-.26l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09A1.65 1.65 0 0 0 21 12v.09a1.65 1.65 0 0 0-1 1.51z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Flexibility</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Customize models to align with your clinical workflows and specialty-specific requirements.</p>
            </div>
            {/* Automation */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Automation</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Automate patient triage, risk assessment, and clinical documentation workflows.</p>
            </div>
          </div>
        </div>
      </section>
      <Industries />



      {/* Platforms Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Healtne re ML Technology Stack
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Industry-leading platforms optimized for HIPAA-compliant healthcare ML applications.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
            {platforms.map((platform, index) => (
              <div className={`flex flex-col items-center ${isVisible ? 'scale-in' : 'opacity-0'}`} key={platform.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2 modern-card" />
                <span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="section-padding ai-section">
        <div className="max-w-5xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              Healthcare ML Implementation Process
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Proven methodology for deploying HIPAA-compliant ML solutions in healthcare environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Define the use case */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Assessment</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Identify clinical workflows and patient care challenges where ML delivers maximum impact.</p>
            </div>
            {/* Data collection & preparation */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Secure Data Integration</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">HIPAA-compliant medical data preparation and EHR integration for training robust models.</p>
            </div>
            {/* Development & integration */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
                <Code className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">ML Model Development</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Build and validate clinical ML models with healthcare professionals and regulatory standards.</p>
            </div>
            {/* Deployment & monitoring */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Deployment</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Seamless integration into clinical workflows with ongoing monitoring and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us for Healthcare ML</h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Healthcare-focused ML expertise with proven results in clinical environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Expertise */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Healthcare Expertise</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of clinical workflows and healthcare regulations.</p>
            </div>
            {/* Custom Solutions */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Clinical-Grade Solutions</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom ML solutions designed for healthcare environments with patient safety as priority.</p>
            </div>
            {/* End-to-End Support */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">HIPAA Compliance</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">HIPAA-compliant architecture with robust security measures protecting patient data.</p>
            </div>
            {/* Proven Results */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Clinical Impact</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare organizations achieving improved patient outcomes and operational efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="flex justify-center mb-2">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Common questions about healthcare ML implementation and our clinical AI services.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                What is Machine Learning?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Machine learning is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed.</div>
            </details>
            {/* FAQ 2 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How can machine learning benefit my business?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Machine learning can automate processes, predict outcomes, optimize operations, and provide insights that drive better business decisions.</div>
            </details>
            {/* FAQ 3 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                Can machine learning solutions be customized for my industry?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Yes, machine learning models can be tailored for healthcare, finance, retail, manufacturing, and more, ensuring industry-specific value.</div>
            </details>
            {/* FAQ 4 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                Is my data secure with machine learning integrations?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">We implement robust security measures and comply with standards like GDPR and HIPAA to ensure your data is protected.</div>
            </details>
            {/* FAQ 5 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How do I get started with machine learning integration?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Contact us for a consultation. We'll assess your needs, propose a solution, and guide you through seamless integration.</div>
            </details>
          </div>
        </div>
      </section>
      
      
      <Footer />
    </div>
  );
};

export default MachineLearning;
