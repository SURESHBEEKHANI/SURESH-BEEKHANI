
import React, { useState, useEffect } from "react";
import { Brain, MessageSquare, FileText, Target, Globe, BarChart3, ArrowRight, CheckCircle, Shield, Users, TrendingUp, Code } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

const nlpServices = [
  {
    id: 1,
    title: "Clinical Text Analytics & Sentiment Analysis",
    description:
      "Extract insights from patient feedback, clinical notes, and healthcare surveys to improve care quality and patient satisfaction.",
    icon: <BarChart3 className="h-7 w-7" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Healthcare Chatbot NLP",
    description:
      "HIPAA-compliant conversational AI for patient triage, appointment scheduling, and 24/7 health inquiries with empathetic responses.",
    icon: <MessageSquare className="h-7 w-7" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Medical Document Classification",
    description:
      "Automatically categorize clinical documents, lab reports, discharge summaries, and medical records for efficient EHR management.",
    icon: <FileText className="h-7 w-7" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Medical Entity Recognition (NER)",
    description:
      "Extract medications, diagnoses, symptoms, and clinical entities from unstructured medical text for accurate documentation.",
    icon: <Target className="h-7 w-7" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Medical Language Translation",
    description:
      "Break language barriers in healthcare with accurate medical translation for multilingual patient care and global health initiatives.",
    icon: <Globe className="h-7 w-7" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Clinical Note Summarization",
    description:
      "Automatically generate concise summaries from lengthy clinical notes, research papers, and patient histories to save clinician time.",
    icon: <Brain className="h-7 w-7" />,
    color: "from-teal-500 to-cyan-500"
  },
];



const platforms = [
  { name: "spaCy", image: "/image/skills_img/spacy.png" },
  { name: "NLTK", image: "/image/skills_img/nltk.png" },
  { name: "HuggingFace", image: "/image/skills_img/huggingface.png" },
  { name: "OpenAI", image: "/image/skills_img/openai.jpg" },
  { name: "LangChain", image: "/image/skills_img/langchain.png" },
];

const nlpSolutions = [
  {
    key: "InsightNLP",
    name: "InsightNLP",
    description: (
      <>
        InsightNLP is a powerful text analytics solution that extracts actionable insights, trends, and sentiment from unstructured data, enabling data-driven decisions.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Sentiment-Analysis-reatils.jpg",
  },
  {
    key: "DocuNLP",
    name: "DocuNLP",
    description: (
      <>
        DocuNLP automates document classification, entity extraction, and summarization for legal, healthcare, and business documents, saving time and reducing errors.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Automated-Product-Tagging.jpg",
  },
  {
    key: "ChatNLP",
    name: "ChatNLP",
    description: (
      <>
        ChatNLP powers intelligent chatbots and virtual assistants with advanced language understanding, context awareness, and multilingual support.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/AI-CHATBOT-DEVELOPMENT.jpg",
  },
];

const faqData = [
  {
    question: "What is Healthcare NLP?",
    answer: "Healthcare NLP is a specialized field of AI that enables computers to understand, interpret, and generate medical language from clinical notes, patient records, and healthcare communications while maintaining HIPAA compliance and medical accuracy.",
  },
  {
    question: "How can Healthcare NLP benefit my practice or hospital?",
    answer: "Healthcare NLP automates clinical documentation, extracts insights from patient data, streamlines medical coding, enhances patient engagement through intelligent chatbots, and improves diagnostic accuracy—saving clinician time and improving patient outcomes.",
  },
  {
    question: "Can NLP solutions be customized for specific medical specialties?",
    answer: "Yes, our NLP solutions can be tailored for specific specialties like radiology, oncology, cardiology, mental health, and more, ensuring specialty-specific terminology, workflows, and compliance requirements are met.",
  },
  {
    question: "Is patient data secure with Healthcare NLP integrations?",
    answer: "Absolutely. We implement HIPAA-compliant security measures including end-to-end encryption, secure data storage, access controls, and audit trails to protect sensitive patient health information (PHI).",
  },
  {
    question: "How do I get started with Healthcare NLP integration?",
    answer: "Contact us for a consultation with our healthcare AI specialists. We'll assess your clinical workflows, identify NLP opportunities, and propose a HIPAA-compliant solution tailored to your practice or hospital needs.",
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
    description: 'Schedule a professional consultation with our experts. We\'ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
    title: 'Receive a Detailed Proposal',
    description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate—so you know exactly what to expect.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Project Kickoff & Delivery',
    description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication—ensuring a smooth, successful delivery from start to finish.',
  },
];

const NaturalLanguageProcessing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("InsightNLP");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solution = nlpSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
      <Navbar />
      {/* Hero Section - Mobile Optimized */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Natural-Language-Processing.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-12 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Natural Language Processing
              </h1>
              <p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                Transform patient care with HIPAA-compliant NLP solutions for clinical documentation, 
                medical insights, and intelligent patient engagement across your healthcare systems.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
                <a
                  href="/#contact"
                  className="btn-primary text-center min-h-[44px] flex items-center justify-center"
                >
                  Talk to  AI Expert
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

      {/* NLP Capabilities Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: NLP Image */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/NLP-power.jpeg"
                  alt="The Power of Natural Language Processing"
                  className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20 modern-card"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                The Power of Healthcare NLP
              </h2>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Revolutionize patient care with advanced Healthcare NLP solutions designed specifically for medical environments. Our HIPAA-compliant systems help clinicians better understand, analyze, and generate medical documentation, enabling intelligent clinical decision support, accurate medical coding, and enhanced patient communication.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Our healthcare NLP specialists seamlessly integrate these solutions into your EHR systems and clinical workflows. This empowers providers to make informed, evidence-based decisions, reduce documentation burden, and improve patient outcomes while maintaining the highest standards of data security.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                From hospitals and clinics to telehealth platforms and medical research institutions, Healthcare NLP transforms how you deliver care, streamline operations, and advance medical knowledge. Partner with us to lead the future of intelligent healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced NLP Services Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 ai-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">
              Healthcare NLP Solutions
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
              HIPAA-compliant intelligent language processing for modern healthcare delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {nlpServices.map((service, index) => (
              <div 
                key={service.id}
                className="modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300"
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

      {/* Healthcare NLP Benefits Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Healthcare NLP Benefits
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Delivering better patient outcomes and clinical excellence through intelligent NLP.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Clinical Language Understanding */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4v16m0 0H3"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Language Understanding</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare NLP interprets medical terminology, clinical notes, and patient queries for accurate, context-aware responses.</p>
            </div>
            {/* Personalized Patient Care */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Personalized Patient Care</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Deliver personalized treatment recommendations, health education, and care plans based on patient history and clinical context.</p>
            </div>
            {/* Healthcare Scalability */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Healthcare Scalability</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare NLP scales from small clinics to large hospital systems, handling millions of patient records and clinical interactions.</p>
            </div>
            {/* Clinical Efficiency */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Efficiency</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Automate clinical documentation, medical coding, and administrative tasks, reducing clinician burnout and operational costs.</p>
            </div>
          </div>
        </div>
      </section>

      <Industries />

      {/* Platforms Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
             NLP Technology Stack
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Industry-leading NLP platforms optimized for healthcare applications and HIPAA compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
            {platforms.map((platform) => (
              <div className="flex flex-col items-center" key={platform.name}>
                <img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2 modern-card" />
                <span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The development process of NLP integration */}
      <section className="section-padding ai-section">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              Healthcare NLP Implementation Process
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Proven methodology for deploying secure, HIPAA-compliant NLP in healthcare environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Define the use case */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
                {/* Target/Bullseye Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Assessment</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Identify clinical workflows and patient care challenges where NLP delivers maximum impact.</p>
            </div>
            {/* Data collection & preparation */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
                {/* Database Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Secure Data Integration</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">HIPAA-compliant data preparation and EHR integration for training robust medical NLP models.</p>
            </div>
            {/* Development & integration */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
                {/* Code/Development Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">NLP Model Development</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Build and validate healthcare NLP models with medical professionals and regulatory standards.</p>
            </div>
            {/* Deployment & monitoring */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
                {/* Monitor/Analytics Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10v4M15 8v8"/></svg>
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
          <div className="text-center space-y-2 mb-8 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us for Healthcare NLP</h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Healthcare-focused NLP expertise with proven results in clinical environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Expertise */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
                {/* Star/Expertise Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Healthcare Expertise</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of clinical workflows, medical terminology, and healthcare regulations.</p>
            </div>
            {/* Custom Solutions */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
                {/* Puzzle/Custom Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Clinical-Grade Solutions</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom healthcare NLP solutions designed for clinical environments with patient safety as priority.</p>
            </div>
            {/* End-to-End Support */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
                {/* Support/Headset Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">HIPAA Compliance & Security</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">HIPAA-compliant architecture with robust security measures protecting patient health information (PHI).</p>
            </div>
            {/* Proven Results */}
            <div className="modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
                {/* Trophy/Results Icon */}
                <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Clinical Impact</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare organizations achieving improved patient outcomes, reduced costs, and enhanced clinical efficiency.</p>
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
              Common questions about Healthcare NLP implementation and our services.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, idx) => (
              <details key={idx} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                  {faq.question}
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
                </summary>
                <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
   
      <Footer />
    </div>
  );
};

export default NaturalLanguageProcessing;