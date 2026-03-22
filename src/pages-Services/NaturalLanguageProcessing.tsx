
import React, { useState, useEffect } from "react";
import { Brain, MessageSquare, FileText, Target, Globe, BarChart3, ArrowRight, CheckCircle, Shield, Users, TrendingUp, Code, Zap, Mail, Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";

const nlpServices = [
  {
    id: 1,
    title: "Text Analytics & Sentiment Analysis",
    description:
      "Extract insights from customer feedback, reviews, surveys, and social media to understand sentiment, trends, and improve business decisions.",
    icon: <BarChart3 className="h-7 w-7" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Conversational AI & Chatbots",
    description:
      "Intelligent conversational AI for customer support, lead generation, appointment scheduling, and 24/7 engagement with natural, context-aware responses.",
    icon: <MessageSquare className="h-7 w-7" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Document Classification & Processing",
    description:
      "Automatically categorize documents, contracts, invoices, and business records for efficient content management and workflow automation.",
    icon: <FileText className="h-7 w-7" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Named Entity Recognition (NER)",
    description:
      "Extract names, locations, organizations, dates, and key entities from unstructured text for accurate data extraction and analysis.",
    icon: <Target className="h-7 w-7" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Language Translation & Localization",
    description:
      "Break language barriers with accurate translation services for global business operations, multilingual customer support, and international expansion.",
    icon: <Globe className="h-7 w-7" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Text Summarization & Generation",
    description:
      "Automatically generate concise summaries from lengthy documents, reports, and articles, or create content for marketing and communications.",
    icon: <Brain className="h-7 w-7" />,
    color: "from-teal-500 to-cyan-500"
  },
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
    answer: "NLP is a field of AI that enables computers to understand, interpret, and generate human language from text and speech. It powers applications like chatbots, sentiment analysis, document processing, and language translation across industries.",
  },
  {
    question: "How can NLP benefit my business?",
    answer: "NLP automates text processing, extracts insights from customer feedback, streamlines document management, enhances customer engagement through intelligent chatbots, and improves decision-making—saving time and improving operational efficiency.",
  },
  {
    question: "Can NLP solutions be customized for my industry?",
    answer: "Yes, our NLP solutions can be tailored for specific industries like finance, retail, healthcare, legal, and more, ensuring industry-specific terminology, workflows, and compliance requirements are met.",
  },
  {
    question: "Is my data secure with NLP integrations?",
    answer: "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, secure data storage, access controls, and compliance with standards like GDPR and SOC 2 to protect your business data.",
  },
  {
    question: "How do I get started with NLP integration?",
    answer: "Contact us for a consultation with our NLP specialists. We'll assess your workflows, identify NLP opportunities, and propose a secure solution tailored to your business needs.",
  },
];

const NaturalLanguageProcessing: React.FC = () => {
  const [currentIndex, setCurrentIndex ] = useState(0);
  const [activeTab, setActiveTab] = useState("InsightNLP");
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solution = nlpSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen ai-section flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Natural-Language-Processing.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-white space-y-6 sm:space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
              Natural Language Processing
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
              Transform your business with intelligent NLP solutions for text analysis, automation, <br /> and customer engagement across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* NLP Capabilities Section */}
      <section className="py-8 sm:py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: NLP Image */}
            <div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-none shadow-2xl border border-slate-100">
                  <img
                    src="/image/pages_img/NLP-power.jpeg"
                    alt="The Power of Natural Language Processing"
                    className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            {/* Right: Content */}
            <div className={`space-y-6 order-1 lg:order-2 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="text-left space-y-3 sm:space-y-4 mb-10">
                <div className="flex flex-col items-start gap-3 sm:gap-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                    The Power of <span className="gradient-text-ai">Natural Language Processing</span>
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl font-medium leading-relaxed">
                  Transform your business operations with advanced NLP solutions.
                </p>
              </div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed text-left">
                <p>
                  Transform your business operations with advanced NLP solutions that understand, analyze, and generate human language. Our intelligent systems help organizations automate text processing, extract insights from documents, and enhance customer interactions with unprecedented accuracy and efficiency.
                </p>
                <p>
                  Our NLP specialists seamlessly integrate these solutions into your workflows and systems. This empowers teams to make informed, data-driven decisions, reduce manual processing, and improve customer experiences while maintaining the highest standards of data security.
                </p>
                <p>
                  From customer service and content analysis to document processing and sentiment monitoring, NLP transforms how you operate, communicate, and compete. Partner with us to unlock the power of language intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-14 ai-section">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
                NLP <span className="gradient-text-ai">Solutions</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Intelligent language processing for modern business operations across all industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {nlpServices.map((service, index) => (
              <div 
                key={service.id}
                className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-none flex items-center justify-center mb-2 mx-auto text-white`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white mb-1.5 text-center w-full">
                  {service.title}
                </h3>
                <p className="text-[10px] sm:text-xs font-medium text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Benefits Infographic Section (Linear Flow Style) */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                NLP <span className="gradient-text-ai">Benefits</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Delivering business value through intelligent language processing and competitive advantage.
            </p>
          </div>
          <div className="relative px-4">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10">
              {[
                { title: "Understanding", desc: "NLP interprets context, sentiment, and intent from text for accurate, intelligent responses and analysis.", icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#00b894", textSide: "above" },
                { title: "Personalization", desc: "Deliver personalized recommendations, content, and interactions tailored to individual user preferences.", icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#ff7675", textSide: "above" },
                { title: "Scalability", desc: "NLP scales from startups to enterprises, handling millions of documents and customer interactions.", icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#fbc531", textSide: "above" },
                { title: "Efficiency", desc: "Automate text processing, document analysis, and customer communication, reducing costs and improving speed.", icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#0984e3", textSide: "above" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
                    <div className="text-center max-w-[200px]">
                      <h3 className="font-extrabold text-slate-900 text-lg mb-2" style={{ color: item.textSide === 'above' ? item.color : '' }}>{item.title}</h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="w-[1px] h-10 bg-slate-200 mt-4"></div>
                    <div className="w-1.5 h-1.5 rounded-full mt-[-4px]" style={{ backgroundColor: item.color }}></div>
                  </div>
                  <div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-100 rounded-full"></div>
                      <div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-l-transparent border-r-transparent rotate-45"></div>
                      <div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-t-transparent border-b-transparent -rotate-12"></div>
                    </div>
                    <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl z-20 transition-transform hover:scale-110 duration-500 bg-white" style={{ border: `2px solid ${item.color}20` }}>
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: item.color }}>
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 sm:w-10 sm:h-10' })}
                      </div>
                      <div className="absolute -inset-2 rounded-full blur-xl opacity-20" style={{ backgroundColor: item.color }}></div>
                    </div>
                  </div>
                  <div className="lg:hidden mt-8 text-center px-4">
                    <h3 className="font-extrabold text-slate-900 text-xl mb-2" style={{ color: item.color }}>{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Industries />

      <AITechnologyStack />

      {/* AI Implementation Process (Pill-Style Infographic) */}
      <section className="bg-[#01010c] relative overflow-hidden py-8 sm:py-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
                NLP Implementation <span className="gradient-text-ai">Process</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Proven methodology for deploying secure, intelligent NLP solutions in business environments.
            </p>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-0">
            <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="connectorGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <style>{`
                    @keyframes flow-dash {
                      to { stroke-dashoffset: -10; }
                    }
                    .connector-path {
                      stroke-dasharray: 2 3;
                      animation: flow-dash 1.5s linear infinite;
                    }
                  `}</style>
                </defs>
                <path d="M 33 18 Q 41.5 18 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 33 50 L 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 33 82 Q 41.5 82 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 67 18 Q 58.5 18 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 67 50 L 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 67 82 Q 58.5 82 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
              </svg>
              <div className="absolute top-[18%] left-[33.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[50%] left-[33.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[82%] left-[33.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[18%] left-[66.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[50%] left-[66.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[82%] left-[66.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
            </div>
            {/* Left Cards */}
            <div className="flex flex-col gap-10 w-full lg:w-1/3 order-1 items-center lg:items-end">
              {[
                { id: "01", title: "Business Assessment", desc: "Identify workflows where NLP delivers maximum operational impact.", color: "bg-[#e23126]" },
                { id: "02", title: "Secure Data Integration", desc: "Secure data preparation and system integration for training robust NLP models.", color: "bg-[#9068d4]" },
                { id: "03", title: "Validation & Testing", desc: "NLP models trained and rigorously tested to ensure accuracy and alignment.", color: "bg-[#3eb37c]" }
              ].map((step, idx) => (
                <div key={step.id} className={`group relative flex items-center justify-end w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="flex w-full flex-row-reverse lg:flex-row items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="flex-grow py-4 sm:py-6 px-6 sm:px-8 text-left lg:text-right">
                      <h4 className="font-bold text-gray-100 text-sm sm:text-base leading-tight tracking-tight mb-1">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-tight line-clamp-2">{step.desc}</p>
                    </div>
                    <div className={`w-16 sm:w-20 h-[60px] sm:h-[80px] ${step.color} flex items-center justify-center rounded-r-[40px] lg:rounded-r-none lg:rounded-l-[40px] sm:rounded-r-[60px] sm:lg:rounded-r-none sm:lg:rounded-l-[60px] shadow-lg`}>
                      <span className="text-white font-black text-lg sm:text-xl tracking-tighter">{step.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Central Brain Hub */}
            <div className="relative w-full lg:w-1/3 flex justify-center order-2">
              <div className={`relative w-64 h-64 sm:w-[400px] sm:h-[400px] flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <div className="absolute inset-0 rounded-full border-[10px] sm:border-[16px] border-transparent border-t-[#e23126] border-r-[#9068d4] border-b-[#3eb37c] border-l-blue-500 animate-[spin_12s_linear_infinite] opacity-40"></div>
                <div className="absolute inset-6 sm:inset-10 rounded-full border-2 sm:border-4 border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]"></div>
                <div className="w-44 h-44 sm:w-64 sm:h-64 bg-slate-900 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-[6px] sm:border-[10px] border-white/5 flex items-center justify-center z-10 p-3 sm:p-5">
                  <div className="w-full h-full rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 shadow-inner">
                    <div className="relative">
                      <MessageSquare className="w-20 h-20 sm:w-32 sm:h-32 text-white opacity-95" strokeWidth={1.2} />
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl scale-110 -z-10 opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 sm:w-5 h-10 sm:h-16 bg-[#e23126] rounded-full -translate-y-4 shadow-[0_0_20px_#e23126] opacity-80"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 sm:w-5 h-10 sm:h-16 bg-[#3eb37c] rounded-full translate-y-4 shadow-[0_0_20px_#3eb37c] opacity-80"></div>
              </div>
            </div>
            {/* Right Cards */}
            <div className="flex flex-col gap-10 w-full lg:w-1/3 order-3 items-center lg:items-start">
              {[
                { id: "04", title: "NLP Model Development", desc: "Build and validate NLP models with stakeholders and industry standards.", color: "bg-[#3eb37c]" },
                { id: "05", title: "Deployment & Optimization", desc: "Seamless integration into workflows with ongoing monitoring and optimization.", color: "bg-[#9068d4]" },
                { id: "06", title: "Governance & Improvement", desc: "Implement governance frameworks and continuously refine for long-term success.", color: "bg-[#e23126]" }
              ].map((step, idx) => (
                <div key={step.id} className={`group relative flex items-center justify-start w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: `${(idx + 3) * 0.1}s` }}>
                  <div className="flex w-full items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className={`w-16 sm:w-20 h-[60px] sm:h-[80px] ${step.color} flex items-center justify-center rounded-r-[40px] sm:rounded-r-[60px] shadow-lg`}>
                      <span className="text-white font-black text-lg sm:text-xl tracking-tighter">{step.id}</span>
                    </div>
                    <div className="flex-grow py-4 sm:py-6 px-6 sm:px-8 text-left">
                      <h4 className="font-bold text-gray-100 text-sm sm:text-base leading-tight tracking-tight mb-1">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-tight line-clamp-2">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Modern Side-by-Side Layout) */}
      <section className="py-8 sm:py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                Why Choose <span className="gradient-text-ai">Us?</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              Industry expertise with proven results across multiple sectors and use cases.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`relative ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-none shadow-2xl border border-slate-100">
                  <img src="/image/services-img/WHY-CHOOSE-US.jpg" alt="Why Choose Us" className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
            <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              {[
                { num: "01", title: "Deep NLP Expertise", desc: "Specialized team with extensive experience in language processing, text analytics, and conversational AI.", color: "bg-[#e23126]" },
                { num: "02", title: "Custom Solutions", desc: "Tailored NLP solutions designed specifically for your business challenges, workflows, and industry requirements.", color: "bg-[#9068d4]" },
                { num: "03", title: "Enterprise Security", desc: "Robust security measures and compliance with industry standards (GDPR, SOC 2) protecting your business data.", color: "bg-[#3eb37c]" },
                { num: "04", title: "Proven Track Record", desc: "Organizations achieving improved efficiency, reduced costs, and enhanced customer engagement.", color: "bg-[#f39c12]" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 group" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-none flex items-center justify-center text-white font-black text-sm sm:text-base shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AIOnboardingProcess serviceName="NLP" />

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2]">
                Frequently Asked <span className="gradient-text-ai">Questions</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Common questions about NLP implementation and our AI services.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md overflow-hidden bg-gray-50 transition-all duration-300 hover:border-[#ff0ea3]/50 hover:shadow-lg group"
                style={openIndex === index ? {
                  borderColor: 'rgba(255, 14, 163, 0.5)',
                  boxShadow: '0 4px 20px rgba(255, 14, 163, 0.2), 0 0 15px rgba(255, 14, 163, 0.15)'
                } : {}}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full h-auto p-4 sm:p-5 text-left transition-all duration-300 hover:bg-transparent"
                  style={openIndex === index ? {
                    background: 'linear-gradient(135deg, rgba(255, 14, 163, 0.15) 0%, rgba(255, 14, 163, 0.1) 50%, rgba(255, 14, 163, 0.05) 100%)'
                  } : {}}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className={`text-sm sm:text-base font-bold pr-3 transition-all duration-300 group-hover:text-[#ff0ea3] ${openIndex === index ? 'text-[#ff0ea3]' : 'text-[#050729]'}`}>
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: '#ff0ea3' }} />
                    ) : (
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0 transition-colors duration-300 group-hover:text-[#ff0ea3]" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-white">
                    <div className="pt-4">{faq.answer}</div>
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