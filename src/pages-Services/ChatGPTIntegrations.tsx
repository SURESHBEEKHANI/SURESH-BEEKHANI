
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const chatGPTServices = [
  {
    id: 1,
    title: "Chatbot Development",
    description:
      "For websites, applications, and messaging platforms, Chat GPT offers chatbot development services with natural language interactions that give users assistance and support.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 2,
    title: "Question Answering Module",
    description:
      "We integrate a powerful question-answering capability into your chatbot, enabling it to provide accurate and relevant answers to user queries.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 3,
    title: "Content Generation",
    description:
      "Our Chat GPT integration service offers content generation. It empowers your website with engaging and personalized written materials.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 4,
    title: "Language Translation",
    description:
      "We integrate natural language processing capabilities with Chat GPT to offer seamless translation services for users in different countries or regions.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 5,
    title: "Personalized Recommendations",
    description:
      "Experience the power of personalized recommendations with ChatGPT integrations. It is tailored to enhance user experiences and drive conversions.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 6,
    title: "Prompt Engineering",
    description:
      "This service involves creating compelling prompts. These prompts enable the language model to generate high-quality responses that meet user needs and expectation",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
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

const ChatGPTIntegrations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("SupportGPT");

  const solution = aiSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ChatGPT-Integrations.jpeg')] bg-cover bg-center" />
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="flex-1 text-white space-y-8 w-full">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Accelerate Your Business Growth with <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ChatGPT</span>
              </h1>
              <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
                Empower your business with ChatGPT for real-time automation, always-on support, and seamless customer engagement across every digital touchpoint.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a
                  href="mailto:sureshbeekhani26@gmail.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
                >
                  Talk to an Engineer
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
              
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: New Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/ChatGPT-Models-Integrations.png"
                  alt="ChatGPT Models Integrations"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-xl lg:text-2xl font-bold text-blue-900">
                ChatGPT Models & Seamless Integrations
              </h2>
              <p className="text-base text-blue-900 max-w-2xl">
                The capabilities of OpenAI ChatGPT and advanced language models to automate, support, and engage at scale. Integrate effortlessly with your platforms for maximum business impact.
              </p>
              <p className="text-base text-blue-900 max-w-2xl">
                From customer service to business process automation, ChatGPT integrations redefine how you connect, automate, and grow. Stay ahead with intelligent, scalable solutions tailored to your objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              ChatGPT Integration Services
            </h2>
            <p className="text-base text-blue-100 max-w-3xl mx-auto">
              Complete ChatGPT integration services to drive your business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatGPTServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-300/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-300/30 transition-colors mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat GPT Integration Services Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
              ChatGPT Integration Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advanced Language Understanding */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 hover:shadow-2xl hover:border-cyan-400 transition-all duration-300 flex flex-col items-center text-center gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-cyan-200 transition-colors">
                <svg className="w-8 h-8 text-cyan-500 group-hover:text-cyan-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4v16m0 0H3"/></svg>
              </div>
              <h3 className="font-semibold text-base text-blue-900 mb-2 group-hover:text-cyan-700 transition-colors">Advanced Language Understanding</h3>
              <p className="text-blue-900 text-sm">ChatGPT integrations deliver natural, intuitive conversations—enabling your business to respond intelligently and efficiently to every customer query.</p>
            </div>
            {/* Personalized Engagement */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl hover:border-green-400 transition-all duration-300 flex flex-col items-center text-center gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-green-200 transition-colors">
                <svg className="w-8 h-8 text-green-500 group-hover:text-green-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
              </div>
              <h3 className="font-semibold text-base text-blue-900 mb-2 group-hover:text-green-700 transition-colors">Personalized Engagement</h3>
              <p className="text-blue-900 text-sm">Leverage AI-driven personalization to deliver tailored recommendations, answers, and content—creating memorable, high-value experiences for every user.</p>
            </div>
            {/* Effortless Scalability */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col items-center text-center gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-500 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-base text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">Effortless Scalability</h3>
              <p className="text-blue-900 text-sm">Scale your customer interactions with ease. ChatGPT integrations handle high volumes seamlessly, supporting businesses of any size as you grow.</p>
            </div>
            {/* Time & Cost Efficiency */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 flex flex-col items-center text-center gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-yellow-200 transition-colors">
                <svg className="w-8 h-8 text-yellow-500 group-hover:text-yellow-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3 className="font-semibold text-base text-blue-900 mb-2 group-hover:text-yellow-700 transition-colors">Time & Cost Efficiency</h3>
              <p className="text-blue-900 text-sm">Automate content creation and customer service to reduce manual workload, optimize resources, and focus on strategic growth initiatives.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Industries We Empower
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Empowering organizations across sectors with ChatGPT solutions.
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
                  <a href={industry.page} className="inline-flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform">Learn More <span aria-hidden="true">→</span></a>
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
              ChatGPT Integration Platforms
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {platforms.map((platform) => (
              <div className="flex flex-col items-center" key={platform.name}>
                <img src={platform.image} alt={`Logo of ${platform.name}`} className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
                <span className="mt-3 text-blue-900 font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The development process of Chat GPT integration */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Our ChatGPT Integration Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Define the use case */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-2">
                {/* Target/Bullseye Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </span>
              <span className="font-semibold text-lg text-blue-900 text-center">Define Your Use Case</span>
              <p className="text-gray-700 text-sm text-center">Pinpoint the business challenge and audience to maximize the value of your ChatGPT integration.</p>
            </div>
            {/* Data collection & preparation */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-2">
                {/* Database Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
              </span>
              <span className="font-semibold text-lg text-blue-900 text-center">Data Collection & Preparation</span>
              <p className="text-gray-700 text-sm text-center">Curate and refine conversational data to ensure optimal model performance and relevance.</p>
            </div>
            {/* Development & integration */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-2">
                {/* Code/Development Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              </span>
              <span className="font-semibold text-lg text-blue-900 text-center">Development & Integration</span>
              <p className="text-gray-700 text-sm text-center">Design, build, and seamlessly embed your chatbot into your digital ecosystem.</p>
            </div>
            {/* Deployment & monitoring */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 mb-2">
                {/* Monitor/Analytics Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10v4M15 8v8"/></svg>
              </span>
              <span className="font-semibold text-lg text-blue-900 text-center">Deployment & Monitoring</span>
              <p className="text-gray-700 text-sm text-center">Launch your solution and track performance with actionable analytics for continuous improvement.</p>
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
            <h2 className="text-xl lg:text-2xl font-bold text-white">Why Partner With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Proven Expertise */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-2">
                {/* Star/Expertise Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <span className="font-semibold text-base text-blue-900 text-center">Proven Expertise</span>
              <p className="text-gray-700 text-sm text-center">Our team brings deep AI and ChatGPT integration experience to deliver results that matter.</p>
            </div>
            {/* Tailored Solutions */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-2">
                {/* Puzzle/Custom Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
              </span>
              <span className="font-semibold text-base text-blue-900 text-center">Tailored Solutions</span>
              <p className="text-gray-700 text-sm text-center">We craft ChatGPT integrations precisely aligned with your business objectives and industry needs.</p>
            </div>
            {/* End-to-End Partnership */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-2">
                {/* Support/Headset Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
              </span>
              <span className="font-semibold text-base text-blue-900 text-center">End-to-End Partnership</span>
              <p className="text-gray-700 text-sm text-center">From strategy to deployment and beyond, we provide comprehensive support at every stage.</p>
            </div>
            {/* Measurable Impact */}
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 mb-2">
                {/* Trophy/Results Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
              </span>
              <span className="font-semibold text-base text-blue-900 text-center">Measurable Impact</span>
              <p className="text-gray-700 text-sm text-center">We deliver solutions with a proven track record of driving business growth and operational excellence.</p>
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
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-4 group"
              >
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-base text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
                    {faq.question}
                    <span className="ml-2 text-blue-900 group-hover:text-green-700 group-open:hidden">+</span>
                    <span className="ml-2 text-blue-900 group-hover:text-green-700 hidden group-open:inline">-</span>
                  </summary>
                  <div className="pt-3 text-gray-800 text-sm">
                    {faq.question === "What is ChatGPT Integration?" && (
                      "ChatGPT Integration means embedding OpenAI's ChatGPT into your digital platforms, enabling intelligent, conversational AI for automation, support, and customer engagement."
                    )}
                    {faq.question === "How can ChatGPT benefit my business?" && (
                      "ChatGPT automates support, streamlines operations, delivers 24/7 assistance, and elevates user engagement—saving time and driving customer satisfaction."
                    )}
                    {faq.question === "Can ChatGPT be customized for my industry?" && (
                      "Absolutely. ChatGPT can be tailored for healthcare, education, finance, retail, and more—ensuring compliance and delivering industry-specific value."
                    )}
                    {faq.question === "Is my data secure with ChatGPT integrations?" && (
                      "We implement advanced security protocols and adhere to standards like HIPAA and GDPR to keep your data safe and confidential."
                    )}
                    {faq.question === "How do I get started with ChatGPT integration?" && (
                      "Contact us for a personalized consultation. We'll assess your needs, recommend the best solution, and guide you through a seamless integration process."
                    )}
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
