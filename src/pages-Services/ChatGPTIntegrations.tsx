
import React, { useState, useEffect } from "react";
import { Bot, MessageSquare, Brain, Globe, Target, Zap, ArrowRight, CheckCircle, Shield, Users, TrendingUp, Code } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const chatGPTServices = [
  {
    id: 1,
    title: "Chatbot Development",
    description:
      "For websites, applications, and messaging platforms, Chat GPT offers chatbot development services with natural language interactions that give users assistance and support.",
    icon: <Bot className="h-7 w-7" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Question Answering Module",
    description:
      "We integrate a powerful question-answering capability into your chatbot, enabling it to provide accurate and relevant answers to user queries.",
    icon: <Brain className="h-7 w-7" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Content Generation",
    description:
      "Our Chat GPT integration service offers content generation. It empowers your website with engaging and personalized written materials.",
    icon: <MessageSquare className="h-7 w-7" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    title: "Language Translation",
    description:
      "We integrate natural language processing capabilities with Chat GPT to offer seamless translation services for users in different countries or regions.",
    icon: <Globe className="h-7 w-7" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Personalized Recommendations",
    description:
      "Experience the power of personalized recommendations with ChatGPT integrations. It is tailored to enhance user experiences and drive conversions.",
    icon: <Target className="h-7 w-7" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 6,
    title: "Prompt Engineering",
    description:
      "This service involves creating compelling prompts. These prompts enable the language model to generate high-quality responses that meet user needs and expectation",
    icon: <Code className="h-7 w-7" />,
    color: "from-indigo-500 to-purple-500"
  },
];

const industries = [
  {
    name: "HealthTech",
    image: "/image/pages_img/healthtechai.jpg",
    description: "ChatGPT-powered solutions for healthcare automation, patient engagement, and virtual health assistants.",
    page: "/HealthTechAI",
  },
  {
    name: "EdTech",
    image: "/image/pages_img/EdTechAI.avif",
    description: "ChatGPT integrations for personalized learning, automated grading, and real-time student support.",
    page: "/EdTechAI",
  },
  {
    name: "FinTech",
    image: "/image/pages_img/fintech.jpg",
    description: "ChatGPT for banking, financial support, fraud detection, and customer engagement.",
    page: "/FinTechAI",
  },
  {
    name: "GreenTech",
    image: "/image/pages_img/greentech.jpg",
    description: "ChatGPT for sustainability, energy management, and green innovation.",
    page: "/GreenTechAI",
  },
  {
    name: "Retail",
    image: "/image/pages_img/retail.jpg",
    description: "ChatGPT for retail automation, customer engagement, and personalized shopping experiences.",
    page: "/RetailAI",
  },
  {
    name: "E-Commerce",
    image: "/image/pages_img/E-Commerce.jpg",
    description: "ChatGPT for e-commerce: automate inquiries, provide order tracking, and personalize shopping.",
    page: "/E-Commerce",
  },
  {
    name: "HIPAA Compliance",
    image: "/image/pages_img/HIPAA.avif",
    description: "ChatGPT for HIPAA-compliant healthcare communication and data security.",
    page: "/HIPAACompliance",
  },
  {
    name: "DiagnosticsAI",
    image: "/image/pages_img/Diagnostics.jpg",
    description: "ChatGPT for AI-driven diagnostics, predictive analytics, and workflow automation in healthcare and related fields.",
    page: "/DiagnosticsAI",
  },
];

const platforms = [
  { name: "OpenAI", image: "/image/skills_img/openai.jpg" },
  { name: "LangChain", image: "/image/skills_img/langchain.png" },
  { name: "HuggingFace", image: "/image/skills_img/huggingface.png" },
  { name: "Pinecone", image: "/image/skills_img/pinecone.png" },
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("SupportGPT");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solution = aiSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ChatGPT-Integrations.jpeg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-start gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full text-left">
                ChatGPT Integration
              </h1>
              <p className="body-large text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 text-left leading-relaxed">
                Boost your business with ChatGPT automation.
              
                Enhance customer engagement and streamline operations.
            
                Leverage AI to scale efficiently and drive growth.
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
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/ChatGPT-Models-Integrations.png"
                  alt="ChatGPT Models Integrations"
                  className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900">
                  ChatGPT Models & Seamless Integrations
                </h2>
              </div>
              <p className="text-sm sm:text-base text-blue-900 max-w-2xl leading-relaxed">
                The capabilities of OpenAI ChatGPT and advanced language models to automate, support, and engage at scale. Integrate effortlessly with your platforms for maximum business impact.
              </p>
              <p className="text-sm sm:text-base text-blue-900 max-w-2xl leading-relaxed">
                From customer service to business process automation, ChatGPT integrations redefine how you connect, automate, and grow. Stay ahead with intelligent, scalable solutions tailored to your objectives.
              </p>
              <p className="text-sm sm:text-base text-blue-900 max-w-2xl leading-relaxed">
                Our dedicated experts seamlessly integrate and customize ChatGPT technologies to your unique needs, empowering data-driven decisions and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-2 mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              ChatGPT Integration Services
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Seamless ChatGPT integration solutions for enhanced user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {chatGPTServices.map((service, idx) => (
              <div
                key={service.id}
                className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  idx === 0 ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400' :
                  idx === 1 ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 hover:border-emerald-400' :
                  idx === 2 ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400' :
                  idx === 3 ? 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 hover:border-orange-400' :
                  idx === 4 ? 'bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 hover:border-pink-400' :
                  'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 hover:border-indigo-400'
                } flex flex-col gap-4 items-center`}
              >
                <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg ${
                  idx === 0 ? 'bg-gradient-to-br from-purple-100 to-pink-100' :
                  idx === 1 ? 'bg-gradient-to-br from-emerald-100 to-green-100' :
                  idx === 2 ? 'bg-gradient-to-br from-blue-100 to-cyan-100' :
                  idx === 3 ? 'bg-gradient-to-br from-orange-100 to-yellow-100' :
                  idx === 4 ? 'bg-gradient-to-br from-pink-100 to-rose-100' :
                  'bg-gradient-to-br from-indigo-100 to-purple-100'
                }`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 text-center w-full">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat GPT Integration Services Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-900">
                ChatGPT Integration Features
              </h2>
              <div className="flex justify-center">
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-xl text-blue-900 max-w-3xl mx-auto px-4">
              Intelligent automation solutions for today's dynamic business landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Advanced Language Understanding */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-cyan-200 hover:shadow-2xl hover:border-cyan-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gradient-to-br group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-700 group-hover:text-cyan-900 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4v16m0 0H3"/></svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 group-hover:text-cyan-800 transition-colors">Advanced Language Understanding</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">ChatGPT integrations deliver natural, intuitive conversations enabling your business to respond intelligently and efficiently to every customer query.</p>
            </div>
            {/* Personalized Engagement */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-emerald-200 hover:shadow-2xl hover:border-emerald-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gradient-to-br group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-700 group-hover:text-emerald-900 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 group-hover:text-emerald-800 transition-colors">Personalized Engagement</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">Leverage AI-driven personalization to deliver tailored recommendations, answers, and content creating memorable, high-value experiences for every user.</p>
            </div>
            {/* Effortless Scalability */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:border-blue-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-800 transition-colors">Effortless Scalability</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">Scale your customer interactions with ease. ChatGPT integrations handle high volumes seamlessly, supporting businesses of any size as you grow.</p>
            </div>
            {/* Time & Cost Efficiency */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-yellow-200 hover:shadow-2xl hover:border-yellow-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gradient-to-br group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-700 group-hover:text-yellow-900 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 group-hover:text-yellow-800 transition-colors">Time & Cost Efficiency</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">Automate content creation and customer service to reduce manual workload, optimize resources, and focus on strategic growth initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Industries We Work With
              </h2>
              <div className="flex justify-center">
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Tailored ChatGPT solutions across diverse industry verticals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-xl sm:rounded-2xl">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative border-b border-r border-white/30 min-h-[140px] sm:min-h-[180px] flex items-center justify-center cursor-pointer overflow-hidden"
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
                  <div className="text-white text-sm sm:text-base font-normal mb-3 sm:mb-4 leading-relaxed">{industry.description}</div>
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
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                ChatGPT Integration Platforms
              </h2>
              <div className="flex justify-center">
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Leverage industry-leading platforms for robust ChatGPT implementations.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
            {platforms.map((platform) => (
              <div className="flex flex-col items-center" key={platform.name}>
                <img src={platform.image} alt={`Logo of ${platform.name}`} className="w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2" />
                <span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-sm sm:text-base text-center">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The development process of Chat GPT integration */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                ChatGPT Integration Development Process
              </h2>
              <div className="flex justify-center">
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Streamlined approach to implementing ChatGPT solutions with proven methodology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Define the use case */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-cyan-200 hover:shadow-2xl hover:border-cyan-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 mb-3 sm:mb-4 shadow-lg">
                {/* Target/Bullseye Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">Define Use Case</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">Identify business challenges and target audience for optimal ChatGPT integration.</p>
            </div>
            {/* Data collection & preparation */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-emerald-200 hover:shadow-2xl hover:border-emerald-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700 mb-3 sm:mb-4 shadow-lg">
                {/* Database Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">Data Preparation</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">Curate and refine conversational data for optimal model performance.</p>
            </div>
            {/* Development & integration */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:border-blue-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 mb-3 sm:mb-4 shadow-lg">
                {/* Code/Development Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">Development</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">Design and build your chatbot for seamless digital integration.</p>
            </div>
            {/* Deployment & monitoring */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-yellow-200 hover:shadow-2xl hover:border-yellow-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700 mb-3 sm:mb-4 shadow-lg">
                {/* Monitor/Analytics Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10v4M15 8v8"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">Deployment</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">Launch and monitor performance with actionable analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us</h2>
              <div className="flex justify-center">
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Trusted expertise and proven results for your ChatGPT implementation needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Proven Expertise */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl hover:border-purple-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700 mb-3 sm:mb-4 shadow-lg">
                {/* Star/Expertise Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">Proven Expertise</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">Our team brings deep AI and ChatGPT integration experience to deliver results that matter.</p>
            </div>
            {/* Tailored Solutions */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-emerald-200 hover:shadow-2xl hover:border-emerald-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700 mb-3 sm:mb-4 shadow-lg">
                {/* Puzzle/Custom Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">Tailored Solutions</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">We craft ChatGPT integrations precisely aligned with your business objectives and industry needs.</p>
            </div>
            {/* End-to-End Partnership */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:border-blue-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700 mb-3 sm:mb-4 shadow-lg">
                {/* Support/Headset Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">End-to-End Partnership</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">From strategy to deployment and beyond, we provide comprehensive support at every stage.</p>
            </div>
            {/* Measurable Impact */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-yellow-200 hover:shadow-2xl hover:border-yellow-400 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700 mb-3 sm:mb-4 shadow-lg">
                {/* Trophy/Results Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
              </span>
              <span className="font-bold text-base sm:text-lg text-gray-900 text-center">Measurable Impact</span>
              <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">We deliver solutions with a proven track record of driving business growth and operational excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="flex justify-center">
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Common questions about ChatGPT implementation and our services.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 group hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-sm sm:text-base text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200 min-h-[44px]">
                    <span className="font-bold text-base sm:text-lg text-gray-900 text-left group-hover:text-blue-700 transition-colors duration-200 pr-4">
                      {faq.question}
                    </span>
                    <span className="ml-2 text-blue-900 group-hover:text-green-700 group-open:hidden text-lg sm:text-xl flex-shrink-0">+</span>
                    <span className="ml-2 text-blue-900 group-hover:text-green-700 hidden group-open:inline text-lg sm:text-xl flex-shrink-0">-</span>
                  </summary>
                  <div className="pt-3 sm:pt-4 text-gray-700 animate-fade-in text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChatGPTIntegrations;
