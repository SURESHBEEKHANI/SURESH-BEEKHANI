
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const nlpServices = [
  {
    id: 1,
    title: "Text Analytics & Sentiment Analysis",
    description:
      "Extract insights and measure sentiment from customer feedback, reviews, and social media.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Chatbot NLP Integration",
    description:
      "Empower chatbots with advanced NLP for natural, context-aware conversations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Document Classification",
    description:
      "Automatically categorize and organize documents, emails, and support tickets.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Named Entity Recognition (NER)",
    description:
      "Identify and extract key entities from unstructured text for deeper analysis.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 11h.01M7 15h.01M7 19h.01M11 7h.01M11 11h.01M11 15h.01M11 19h.01M15 7h.01M15 11h.01M15 15h.01M15 19h.01M19 7h.01M19 11h.01M19 15h.01M19 19h.01" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Language Translation",
    description:
      "Break language barriers with automated, accurate translation for global reach.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Text Summarization",
    description:
      "Automatically generate concise summaries from long documents and articles.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
];

const industries = [
  {
    name: "HealthTech",
    image: "/image/pages_img/healthtechai.jpg",
    description: "NLP for healthcare automation, patient engagement, and clinical documentation.",
    page: "/HealthTechAI",
  },
  {
    name: "EdTech",
    image: "/image/pages_img/EdTechAI.avif",
    description: "NLP for personalized learning, automated grading, and real-time student support.",
    page: "/EdTechAI",
  },
  {
    name: "FinTech",
    image: "/image/pages_img/fintech.jpg",
    description: "NLP for banking, financial support, fraud detection, and compliance.",
    page: "/FinTechAI",
  },
  {
    name: "GreenTech",
    image: "/image/pages_img/greentech.jpg",
    description: "NLP for sustainability, energy management, and green innovation.",
    page: "/GreenTechAI",
  },
  {
    name: "Retail",
    image: "/image/pages_img/retail.jpg",
    description: "NLP for retail automation, customer engagement, and personalized shopping experiences.",
    page: "/RetailAI",
  },
  {
    name: "E-Commerce",
    image: "/image/pages_img/E-Commerce.jpg",
    description: "NLP for e-commerce: automate inquiries, provide order tracking, and personalize shopping.",
    page: "/E-Commerce",
  },
  {
    name: "HIPAA Compliance",
    image: "/image/pages_img/HIPAA.avif",
    description: "NLP for HIPAA-compliant healthcare communication and data security.",
    page: "/HIPAACompliance",
  },
  {
    name: "DiagnosticsAI",
    image: "/image/pages_img/Diagnostics.jpg",
    description: "NLP for AI-driven diagnostics, predictive analytics, and workflow automation in healthcare and related fields.",
    page: "/DiagnosticsAI",
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
    question: "What is Natural Language Processing (NLP)?",
    answer: "NLP is a field of AI that enables computers to understand, interpret, and generate human language, powering applications like chatbots, sentiment analysis, and translation.",
  },
  {
    question: "How can NLP benefit my business?",
    answer: "NLP can automate customer support, extract insights from text data, streamline workflows, and enhance user engagement, saving time and improving satisfaction.",
  },
  {
    question: "Can NLP solutions be customized for my industry?",
    answer: "Yes, NLP can be tailored for healthcare, education, finance, retail, and more, ensuring industry-specific compliance and value.",
  },
  {
    question: "Is my data secure with NLP integrations?",
    answer: "We implement robust security measures and comply with standards like HIPAA and GDPR to ensure your data is protected.",
  },
  {
    question: "How do I get started with NLP integration?",
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
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("InsightNLP");

  const solution = nlpSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Natural-Language-Processing.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-8">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Natural Language <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Processing</span>
              </h1>
              <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
                Transform your business with advanced NLP solutions for automation, insights,
                and engagement across all your digital channels.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
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

      {/* NLP Capabilities Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: NLP Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/NLP-power.jpeg"
                  alt="The Power of Natural Language Processing"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                The Power of Natural Language Processing
              </h2>
              <p className="text-base text-gray-700 max-w-2xl">
                Unlock new possibilities for your business with advanced Natural Language Processing (NLP) solutions. Our services help computers better understand, analyze, and generate human language, enabling smarter chatbots, accurate language translation, and much more.
              </p>
              <p className="text-base text-gray-700 max-w-2xl">
                Our NLP specialists will seamlessly integrate and tailor these solutions to your unique needs. This empowers you to make informed, data-driven decisions and improve your organization's efficiency.
              </p>
              <p className="text-base text-gray-700 max-w-2xl">
                Whether in healthcare, finance, education, or beyond, NLP can transform how you work and serve your customers. Rely on our expertise to help your business grow and stay ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Advanced NLP Services
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Intelligent language processing solutions for today's dynamic business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nlpServices.map((service, index) => {
              const gradients = [
                { bg: 'bg-gradient-to-br from-cyan-50 to-blue-100', border: 'border-cyan-200', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' },
                { bg: 'bg-gradient-to-br from-blue-50 to-indigo-100', border: 'border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
                { bg: 'bg-gradient-to-br from-green-50 to-emerald-100', border: 'border-green-200', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
                { bg: 'bg-gradient-to-br from-yellow-50 to-orange-100', border: 'border-yellow-200', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
                { bg: 'bg-gradient-to-br from-purple-50 to-violet-100', border: 'border-purple-200', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
                { bg: 'bg-gradient-to-br from-pink-50 to-rose-100', border: 'border-pink-200', iconBg: 'bg-pink-100', iconColor: 'text-pink-600' }
              ];
              const gradientScheme = gradients[index % gradients.length];
              
              return (
                <div
                  key={service.id}
                  className={`${gradientScheme.bg} rounded-2xl p-8 shadow-xl border ${gradientScheme.border} flex flex-col gap-4 items-center hover:shadow-2xl transition-all duration-300`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${gradientScheme.iconBg} rounded-xl flex items-center justify-center mb-2 mx-auto`}>
                    <div className={gradientScheme.iconColor}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 text-center">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NLP Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              NLP Solution Features
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Intelligent language processing solutions for today's dynamic business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Text Understanding */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4v16m0 0H3"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Text Understanding</h3>
              <p className="text-gray-800 text-center">NLP enables systems to interpret and reply to queries, resulting in more effective and natural interactions.</p>
            </div>
            {/* Personalization */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Personalization</h3>
              <p className="text-gray-800 text-center">Deliver personalized recommendations, answers, and content based on user interests and context for a rewarding experience.</p>
            </div>
            {/* Scalability */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Scalability</h3>
              <p className="text-gray-800 text-center">NLP solutions scale to handle high volumes of requests and interactions, suitable for organizations of all sizes and industries.</p>
            </div>
            {/* Time and Cost Savings */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Time and Cost Savings</h3>
              <p className="text-gray-800 text-center">Automate processes like content creation and customer service, saving manual labor expenses and streamlining workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Industries We Work With
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Tailored NLP solutions across diverse industry verticals.
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
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              NLP Integration Platforms
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Leverage industry-leading platforms for robust NLP implementations.
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

      {/* The development process of NLP integration */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              NLP Development Process
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Streamlined approach to implementing NLP solutions with proven methodology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Define the use case */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-2">
                {/* Target/Bullseye Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Define Use Case</span>
              <p className="text-gray-800 text-center">Identify the business scenario and audience for NLP integration.</p>
            </div>
            {/* Data collection & preparation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-2">
                {/* Database Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Data Collection</span>
              <p className="text-gray-800 text-center">Gather and prepare conversational/text data for model training.</p>
            </div>
            {/* Development & integration */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-2">
                {/* Code/Development Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Development</span>
              <p className="text-gray-800 text-center">Build and integrate NLP solutions into your application.</p>
            </div>
            {/* Deployment & monitoring */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 mb-2">
                {/* Monitor/Analytics Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10v4M15 8v8"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Deployment</span>
              <p className="text-gray-800 text-center">Deploy the NLP solution and monitor performance with analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Trusted expertise and proven results for your NLP implementation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expertise */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-2">
                {/* Star/Expertise Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Expertise</span>
              <p className="text-gray-800 text-center">Seasoned professionals with deep experience in AI and NLP integrations.</p>
            </div>
            {/* Custom Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-2">
                {/* Puzzle/Custom Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Custom Solutions</span>
              <p className="text-gray-800 text-center">Tailored NLP integrations to fit your unique business needs and goals.</p>
            </div>
            {/* End-to-End Support */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-2">
                {/* Support/Headset Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">End-to-End Support</span>
              <p className="text-gray-800 text-center">Comprehensive guidance from planning to deployment and ongoing optimization.</p>
            </div>
            {/* Proven Results */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 mb-2">
                {/* Trophy/Results Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Proven Results</span>
              <p className="text-gray-800 text-center">A track record of successful projects and measurable business impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Common questions about NLP implementation and our services.
            </p>
          </div>
          <div className="space-y-3">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col transition-all duration-300 hover:scale-[1.01]"
              >
                <button
                  className="w-full flex items-center justify-between focus:outline-none group"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  aria-expanded={openFAQ === idx}
                >
                  <span className="font-semibold text-base text-gray-900 text-left group-hover:text-blue-700 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className="flex items-center justify-center w-5 h-5 text-blue-900 group-hover:text-cyan-700 transition-colors duration-200">
                    {openFAQ === idx ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </button>
                {openFAQ === idx && (
                  <div className="pt-2 text-gray-800 animate-fade-in text-sm">
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

export default NaturalLanguageProcessing;