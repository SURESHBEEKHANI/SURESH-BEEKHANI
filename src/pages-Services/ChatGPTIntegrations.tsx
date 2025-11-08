
import { useState, useEffect } from "react";
import { Bot, MessageSquare, Brain, Globe, Target, Zap, ArrowRight, CheckCircle, Shield, TrendingUp, Code } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

const chatGPTServices = [
  {
    id: 1,
    title: "Patient Virtual Assistants",
    description:
      "HIPAA-compliant ChatGPT-powered virtual assistants for patient engagement, appointment scheduling, medication reminders, and 24/7 health inquiries with empathetic, accurate responses.",
    icon: <Bot className="h-7 w-7" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Clinical Q&A Systems",
    description:
      "Integrate intelligent question-answering capabilities that provide healthcare professionals and patients with accurate, evidence-based medical information and clinical guidance.",
    icon: <Brain className="h-7 w-7" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Medical Documentation",
    description:
      "Automate clinical documentation, patient summaries, and medical reports with ChatGPT integration, reducing administrative burden and improving accuracy for healthcare providers.",
    icon: <MessageSquare className="h-7 w-7" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    title: "Multilingual Patient Support",
    description:
      "Break language barriers with ChatGPT-powered translation services, enabling seamless communication between healthcare providers and patients across different languages and cultures.",
    icon: <Globe className="h-7 w-7" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Personalized Care Plans",
    description:
      "Leverage ChatGPT to generate personalized treatment recommendations, care plans, and patient education materials tailored to individual health conditions and medical histories.",
    icon: <Target className="h-7 w-7" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 6,
    title: "Clinical Prompt Engineering",
    description:
      "Develop specialized medical prompts that enable ChatGPT to generate clinically accurate, compliant responses meeting healthcare standards and patient safety requirements.",
    icon: <Code className="h-7 w-7" />,
    color: "from-indigo-500 to-purple-500"
  },
];



const platforms = [
  { name: "OpenAI", image: "/image/skills_img/openai.jpg" },
  { name: "LangChain", image: "/image/skills_img/langchain.png" },
  { name: "HuggingFace", image: "/image/skills_img/huggingface.png" },
  { name: "Gemini", image: "/image/skills_img/Gemini.png" },
];

const aiSolutions = [
  {
    key: "SupportGPT",
    name: "SupportGPT",
    description: (
      <>
        SupportGPT is a ChatGPT-powered customer support solution that automates responses, resolves queries, and provides 24/7 assistance across channels. It integrates with your CRM and helpdesk for seamless support.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Customer-Service-Chatbots.jpg",
  },
  {
    key: "LegalGPT",
    name: "LegalGPT",
    description: (
      <>
        LegalGPT is an AI-powered legal assistant that drafts documents, answers legal questions, and streamlines research for law firms and legal departments. It ensures compliance and boosts productivity.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/law-gpt.jpg",
  },
  {
    key: "EduGPT",
    name: "EduGPT",
    description: (
      <>
        EduGPT is a ChatGPT-based education assistant for students and teachers. It personalizes learning, automates grading, and provides instant feedback, making education more accessible and engaging.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Intelligent-Tutoring-Systems.jpg",
  },
];

const faqData = [
  {
    question: "What is ChatGPT Integration?",
    answer: "ChatGPT Integration refers to embedding OpenAI's ChatGPT into your digital platforms, enabling conversational AI for automation, support, and engagement.",
  },
  {
    question: "How can ChatGPT benefit my business?",
    answer: "ChatGPT can automate customer support, streamline workflows, provide 24/7 assistance, and enhance user engagement, saving time and improving satisfaction.",
  },
  {
    question: "Can ChatGPT be customized for my industry?",
    answer: "Yes, ChatGPT can be tailored for healthcare, education, finance, retail, and more, ensuring industry-specific compliance and value.",
  },
  {
    question: "Is my data secure with ChatGPT integrations?",
    answer: "We implement robust security measures and comply with standards like HIPAA and GDPR to ensure your data is protected.",
  },
  {
    question: "How do I get started with ChatGPT integration?",
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
    description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate so you know exactly what to expect.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Project Kickoff & Delivery',
    description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring a smooth, successful delivery from start to finish.',
  },
];

const ChatGPTIntegrations: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen ai-section flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ChatGPT-Integrations.jpeg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-start gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                ChatGPT Integration
              </h1>
              <p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
              Transform patient care with HIPAA-compliant ChatGPT solutions that automate clinical workflows, enhance patient engagement, and improve healthcare outcomes through intelligent AI integration.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full justify-start">
                <a
                  href="/#contact"
                  className="btn-primary text-center min-h-[44px] flex items-center justify-center"
                >
                  Talk to an Expert
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
      

      {/* AI Capabilities Section */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: New Image */}
            <div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/ChatGPT-Models-Integrations.png"
                  alt="ChatGPT Models Integrations"
                  className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20 modern-card"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className={`space-y-4 sm:space-y-6 order-1 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Healthcare ChatGPT Solutions
              </h2>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Harness the power of OpenAI ChatGPT and advanced language models to transform healthcare delivery. Our HIPAA-compliant integrations automate clinical workflows, enhance patient engagement, and support medical decision-making at scale.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                From patient triage and virtual health assistants to clinical documentation and medical research, ChatGPT integrations revolutionize how healthcare organizations deliver care, reduce costs, and improve patient outcomes.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Our healthcare AI specialists seamlessly integrate and customize ChatGPT technologies to meet clinical requirements, regulatory standards, and patient safety protocols while empowering data-driven healthcare decisions.
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
              Healthcare ChatGPT Integration Services
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
              HIPAA-compliant ChatGPT solutions transforming patient care and clinical operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {chatGPTServices.map((service, index) => (
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

      {/* Chat GPT Integration Services Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Healthcare ChatGPT Features
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Intelligent healthcare automation for improved patient outcomes and clinical efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Advanced Language Understanding */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <Zap className="h-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Language Understanding</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">ChatGPT understands medical terminology and clinical context, enabling natural conversations between patients and healthcare providers with accurate, empathetic responses.</p>
            </div>
            {/* Personalized Engagement */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <TrendingUp className="h-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Personalized Patient Care</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Deliver personalized health recommendations, treatment plans, and patient education tailored to individual medical histories and health conditions.</p>
            </div>
            {/* Effortless Scalability */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <Shield className="h-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">HIPAA Compliance & Security</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Enterprise-grade security with HIPAA compliance, encryption, and access controls protecting sensitive patient data and ensuring regulatory adherence.</p>
            </div>
            {/* Time & Cost Efficiency */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                <Brain className="h-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Efficiency</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Automate clinical documentation, patient triage, and administrative tasks, reducing provider burnout and allowing more time for direct patient care.</p>
            </div>
          </div>
        </div>
      </section>
       <Industries />

      {/* Platforms Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Healthcare AI Technology Stack
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Industry-leading AI platforms optimized for healthcare applications and HIPAA compliance.
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

      {/* The development process of Chat GPT integration */}
      <section className="section-padding ai-section">
        <div className="max-w-5xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              Healthcare ChatGPT Implementation Process
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Proven methodology for deploying secure, compliant ChatGPT solutions in healthcare environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Define the use case */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Assessment</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Identify clinical workflows and patient care challenges where ChatGPT delivers maximum healthcare impact.</p>
            </div>
            {/* Data collection & preparation */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Secure Data Integration</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">HIPAA-compliant data preparation and EHR integration for training robust healthcare AI models.</p>
            </div>
            {/* Development & integration */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
                <Code className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Development</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Build and validate healthcare ChatGPT solutions with medical professionals and regulatory standards.</p>
            </div>
            {/* Deployment & monitoring */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Deployment</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Seamless integration into clinical workflows with ongoing monitoring and optimization for patient safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us for Healthcare ChatGPT</h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Healthcare-focused AI expertise with proven results in clinical environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Proven Expertise */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Healthcare AI Expertise</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of clinical workflows, healthcare regulations, and medical AI applications.</p>
            </div>
            {/* Tailored Solutions */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Clinical-Grade Solutions</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom ChatGPT solutions designed for healthcare environments with patient safety and clinical accuracy as priorities.</p>
            </div>
            {/* End-to-End Partnership */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Compliance & Security</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">HIPAA-compliant architecture with robust security measures protecting patient data and ensuring regulatory compliance.</p>
            </div>
            {/* Measurable Impact */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Clinical Impact</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare organizations achieving improved patient outcomes, reduced costs, and enhanced operational efficiency.</p>
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
              Common questions about ChatGPT implementation and our services.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                What is ChatGPT Integration?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">ChatGPT Integration refers to embedding OpenAI's ChatGPT into your digital platforms, enabling conversational AI for automation, support, and engagement.</div>
            </details>
            {/* FAQ 2 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How can ChatGPT benefit my business?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">ChatGPT can automate customer support, streamline workflows, provide 24/7 assistance, and enhance user engagement, saving time and improving satisfaction.</div>
            </details>
            {/* FAQ 3 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                Can ChatGPT be customized for my industry?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Yes, ChatGPT can be tailored for healthcare, education, finance, retail, and more, ensuring industry-specific compliance and value.</div>
            </details>
            {/* FAQ 4 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                Is my data secure with ChatGPT integrations?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">We implement robust security measures and comply with standards like HIPAA and GDPR to ensure your data is protected.</div>
            </details>
            {/* FAQ 5 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How do I get started with ChatGPT integration?
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

export default ChatGPTIntegrations;
