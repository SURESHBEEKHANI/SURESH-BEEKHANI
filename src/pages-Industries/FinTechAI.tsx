import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const FinTechAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = [
    {
      id: 1,
      title: "Fraud Detection",
      description: "Leverage AI to instantly identify and prevent fraudulent transactions, safeguarding your business and customers with proactive, real-time protection.",
      image: "/image/pages_img/Fraud-Detection.jpg",
      alt: "AI-powered Fraud Detection in Finance"
    },
    {
      id: 2,
      title: "Credit Scoring",
      description: "Empower smarter lending with AI-driven credit scoring that analyzes diverse financial and behavioral data for faster, fairer, and more accurate decisions.",
      image: "/image/pages_img/Credit-Scoring.avif",
      alt: "AI Credit Scoring Solution"
    },
    {
      id: 3,
      title: "Algorithmic Trading",
      description: "Maximize returns with AI-powered trading systems that process market data at scale, executing trades at optimal moments for superior performance.",
      image: "/image/pages_img/Algorithmic-Trading.jpg",
      alt: "AI Algorithmic Trading Platform"
    },
    {
      id: 4,
      title: "Personalized Financial Advice",
      description: "Deliver tailored financial guidance at scale with AI chatbots and robo-advisors, enhancing client engagement and portfolio outcomes.",
      image: "/image/pages_img/Personalized-Financial.jpg",
      alt: "AI Personalized Financial Advisory"
    },
    {
      id: 5,
      title: "Risk Management",
      description: "Mitigate risk with AI models that anticipate threats and market shifts, enabling confident, data-driven decisions in dynamic environments.",
      image: "/image/pages_img/Risk-Management.webp",
      alt: "AI Risk Management in Finance"
    },
    {
      id: 6,
      title: "Customer Service Automation",
      description: "Transform support with AI chatbots that resolve inquiries instantly, streamline operations, and elevate customer satisfaction around the clock.",
      image: "/image/pages_img/Customer-Service",
      alt: "AI Customer Service Automation"
    },
    {
      id: 7,
      title: "Regulatory Compliance",
      description: "Ensure seamless compliance with AI systems that monitor transactions, flag anomalies, and automate reporting to reduce manual effort and risk.",
      image: "/image/pages_img/Regulatory-Compliance.jpeg",
      alt: "AI Regulatory Compliance Automation"
    }
  ];

  const faqData = [
    {
      id: 1,
      question: "What is FinTech?",
      answer: "FinTech—short for Financial Technology—refers to innovative digital solutions that streamline, automate, and enhance financial services such as banking, payments, investing, and insurance."
    },
    {
      id: 2,
      question: "How is AI used in FinTech?",
      answer: "AI powers fraud detection, credit scoring, algorithmic trading, personalized advice, risk management, automated customer service, and regulatory compliance—driving efficiency and smarter outcomes across the financial sector."
    },
    {
      id: 3,
      question: "What are the benefits of AI in FinTech?",
      answer: "AI accelerates decision-making, reduces fraud, enhances customer experiences, improves compliance, and unlocks new growth opportunities for financial organizations."
    },
    {
      id: 4,
      question: "Are there challenges to using AI in FinTech?",
      answer: "Key challenges include data privacy, algorithmic bias, integration with legacy systems, and evolving regulations. Addressing these requires robust governance and transparent, ethical AI practices."
    },
    {
      id: 5,
      question: "Can AI replace financial advisors?",
      answer: "AI automates routine advisory tasks and delivers actionable insights, but human expertise remains vital for complex strategies and building trusted client relationships."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === useCases.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 3 : prevIndex - 1
    );
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/fintech.jpg')] bg-cover bg-center"></div>
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="flex-1 text-white space-y-8 w-4/5 flex flex-col items-start">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full text-left">
                AI In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FinTech</span>
              </h1>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-100 max-w-2xl text-left">
                Unlock the future of finance with AI—driving intelligent automation, robust fraud prevention, and hyper-personalized customer experiences.
              </p>
              {/* Button */}
              <div className="flex space-x-4 pt-6 w-full justify-start">
                <a href="mailto:sureshbeekhani@26gmail.com">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg">
                  Talk to in Expert
                  </Button>
                </a>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Main Content Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white/90">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
                <img
                  src="/image/pages_img/AI-Financial.jpg"
                  alt="AI-Driven Financial Transformation"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                  AI in <span className="text-yellow-700">Financial Services</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-yellow-700">machine learning</span> and <span className="font-semibold text-blue-700">predictive analytics</span>, is redefining financial services—empowering smarter decisions, automating workflows, and strengthening security at every level.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From advanced fraud detection to bespoke banking, AI enables financial institutions to deliver exceptional service, minimize risk, and accelerate innovation in a rapidly changing market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Capabilities Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-yellow-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Capabilities & Strategic Advantages
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore how AI and machine learning elevate FinTech performance, resilience, and customer value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Improved Decision-Making */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-300/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/30 transition-colors mb-3">
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Improved Decision-Making</h3>
              <p className="text-gray-200 leading-relaxed">AI and ML deliver actionable insights from vast data sets in real time, empowering leaders to make faster, more accurate, and more confident decisions.</p>
            </div>
            {/* Enhanced Fraud Detection */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors mb-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Enhanced Fraud Detection</h3>
              <p className="text-gray-200 leading-relaxed">AI-driven fraud detection proactively identifies threats, reducing financial losses and protecting your brand and customers.</p>
            </div>
            {/* Increased Operational Efficiency */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-300/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/30 transition-colors mb-3">
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Increased Operational Efficiency</h3>
              <p className="text-gray-200 leading-relaxed">AI automates routine processes, streamlines operations, and drives productivity—delivering measurable cost savings and scalability.</p>
            </div>
            {/* Personalized Customer Experience */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors mb-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Personalized Customer Experience</h3>
              <p className="text-gray-200 leading-relaxed">AI-powered solutions analyze customer data to deliver tailored advice and seamless support, building loyalty and satisfaction at every touchpoint.</p>
            </div>
            {/* Enhanced Risk Management */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-300/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/30 transition-colors mb-3">
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Enhanced Risk Management</h3>
              <p className="text-gray-200 leading-relaxed">AI and ML provide real-time risk assessment, enabling proactive mitigation and confident navigation of complex financial landscapes.</p>
            </div>
            {/* Improved Financial Planning and Analysis */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors mb-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Improved Financial Planning and Analysis</h3>
              <p className="text-gray-200 leading-relaxed">AI-driven analytics deliver precise forecasts and deep insights, empowering smarter financial planning and strategic growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-yellow-50/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
              AI-Powered FinTech Use Cases
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              See how AI is reshaping finance—driving innovation, efficiency, and value across every application.
            </p>
          </div>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-24 transform -translate-y-1/2 z-10 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-24 transform -translate-y-1/2 z-10 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Content Carousel */}
            <div className="flex space-x-8 px-16 overflow-hidden">
              {useCases.slice(currentIndex, currentIndex + 3).map((useCase) => (
                <div key={useCase.id} className="flex-shrink-0 w-80 space-y-4">
                  <div className="relative h-48">
                    <img
                      src={useCase.image}
                      alt={useCase.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-yellow-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Why Partner With Me
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Trusted expertise and a proven record of delivering transformative AI solutions for the financial sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 4+ Years of Experience */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">4+</span>
              <h3 className="text-lg font-bold text-blue-900">Years of Experience</h3>
              <p className="text-gray-700 text-sm">
                4+ years of specialized experience delivering high-impact AI solutions for financial leaders and innovators.
              </p>
            </div>
            {/* 15+ FinTech Projects */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">15+</span>
              <h3 className="text-lg font-bold text-blue-900">FinTech Projects</h3>
              <p className="text-gray-700 text-sm">
                15+ successful FinTech AI projects, each tailored to unique business goals and industry challenges.
              </p>
            </div>
            {/* 25+ AI Models Built */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">25+</span>
              <h3 className="text-lg font-bold text-blue-900">AI Models Built</h3>
              <p className="text-gray-700 text-sm">
                25+ custom AI models engineered for fraud prevention, credit analysis, and intelligent trading.
              </p>
            </div>
            {/* 10+ Happy Clients */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">10+</span>
              <h3 className="text-lg font-bold text-blue-900">Happy Clients</h3>
              <p className="text-gray-700 text-sm">
                10+ financial organizations empowered with measurable gains in efficiency, security, and growth.
              </p>
            </div>
            {/* Global Reach */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-yellow-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-blue-900">Global Reach</h3>
              <p className="text-gray-700 text-sm">
                Delivering scalable, secure AI solutions to financial institutions worldwide—enabling global impact and local excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-yellow-50/90">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-gray-600 transform transition-transform duration-200 ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4 text-gray-700">
                    <p>{faq.answer}</p>
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

export default FinTechAI; 