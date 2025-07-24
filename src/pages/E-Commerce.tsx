import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ECommerceAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = [
    {
      id: 0,
      title: "Abandoned Cart Recovery",
      description: "Leverage AI to identify shoppers who abandon their carts and automatically deliver tailored emails or incentives, driving higher conversion rates and recapturing lost revenue.",
      image: "/image/pages_img/Abandoned-Cart-Recovery.png",
      alt: "AI-Powered Abandoned Cart Recovery"
    },
    {
      id: 1,
      title: "Automated Product Tagging",
      description: "Automatically classify and tag products using AI-driven image and text analysis, enhancing product discoverability and boosting search performance.",
      image: "/image/pages_img/Automated-Product-Tagging.jpg",
      alt: "Automated Product Tagging with AI"
    },
    {
      id: 2,
      title: "Voice Commerce",
      description: "Enable seamless, hands-free shopping experiences by integrating AI-powered voice assistants and smart speaker capabilities into your storefront.",
      image: "/image/pages_img/Voice-Commerce.webp",
      alt: "Voice-Enabled Commerce Solutions"
    },
    {
      id: 3,
      title: "AI-Powered Product Descriptions",
      description: "Generate compelling, SEO-optimized product descriptions at scale, saving time and ensuring every listing stands out in search results.",
      image: "/image/pages_img/Product-Descriptions.jpg",
      alt: "Automated Product Description Generation"
    },
    {
      id: 4,
      title: "Return Prediction & Management",
      description: "Predict return likelihood and streamline reverse logistics with AI, reducing costs and improving customer satisfaction through proactive management.",
      image: "/image/pages_img/Return-Prediction-Management.jpg",
      alt: "AI-Driven Return Management"
    },
    {
      id: 5,
      title: "AI-Driven A/B Testing",
      description: "Continuously optimize your site’s layout, banners, and promotions with AI-powered experimentation for maximum engagement and sales uplift.",
      image: "/image/pages_img/AI-Driven-Testing.jpg",
      alt: "AI-Driven A/B Testing for E-Commerce"
    },
    {
      id: 6,
      title: "Personalized Email Campaigns",
      description: "Boost open and conversion rates by using AI to segment audiences and deliver highly relevant, personalized email content at scale.",
      image: "/image/pages_img/Customer-Segmentation.jpg",
      alt: "AI-Personalized Email Marketing"
    },
    {
      id: 7,
      title: "Customer Lifetime Value Prediction",
      description: "Identify and nurture your most valuable customers with AI-driven insights, enabling targeted retention and loyalty strategies that maximize long-term revenue.",
      image: "/image/pages_img/Customer-Lifetime-Value-Prediction.jpg",
      alt: "Customer Lifetime Value Analytics"
    },
    {
      id: 8,
      title: "Automated Review Moderation",
      description: "Ensure trust and compliance by automatically filtering and moderating product reviews, maintaining high-quality, authentic feedback on your platform.",
      image: "/image/pages_img/Automated-Review-Moderation.jpg",
      alt: "AI Review Moderation"
    },
    {
      id: 9,
      title: "Intelligent Sizing & Fit Recommendations",
      description: "Reduce returns and increase satisfaction by providing AI-powered, data-driven sizing and fit suggestions tailored to each shopper.",
      image: "/image/pages_img/Intelligent-Sizing-Fit-Recommendations.png",
      alt: "AI Sizing and Fit Recommendations"
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is E-Commerce AI?",
      answer: "E-Commerce AI harnesses artificial intelligence to transform online retail—enabling personalized shopping, automating operations, and delivering actionable insights that drive business growth."
    },
    {
      id: 2,
      question: "How does AI improve online shopping?",
      answer: "AI elevates the shopping experience by personalizing recommendations, automating support, optimizing pricing, detecting fraud, and streamlining logistics—resulting in higher sales and customer satisfaction."
    },
    {
      id: 3,
      question: "Is AI safe for handling customer data?",
      answer: "With robust security and privacy protocols, AI can securely process and analyze customer data, helping prevent fraud and safeguard sensitive information."
    },
    {
      id: 4,
      question: "Can AI help reduce cart abandonment?",
      answer: "Absolutely. AI pinpoints abandonment triggers and delivers timely, personalized reminders or offers, motivating customers to complete their purchases."
    },
    {
      id: 5,
      question: "What are the benefits of AI for e-commerce businesses?",
      answer: "AI empowers e-commerce brands to operate more efficiently, increase sales, delight customers, cut costs, and unlock data-driven strategies for sustainable growth."
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
      {/* Hero Section - Professional Layout */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800/90 via-green-700/90 to-blue-900/90">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/pages_img/E-Commerce.jpg" // Use your preferred image
            alt="E-Commerce Background"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }} // Adjust opacity as needed
          />
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 via-green-700/80 to-blue-900/80"></div>
          {/* Optional: Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bfae' fill-opacity='0.08'%3E%3Crect x='25' y='25' width='10' height='10' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  AI In <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">E-Commerce</span>
                </h1>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-100 max-w-2xl">
                AI is transforming e-commerce by personalizing shopping, optimizing operations, and delivering data-driven insights for retailers and customers alike.
              </p>
              <a
                href="mailto:sureshbeekhno26@gmail.com"
                className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200"
              >
                Talk to an Expert
              </a>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
                <img
                  src="/image/pages_img/AI-in-E-Commerce.png"
                  alt="AI in E-Commerce Illustration"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                  AI in <span className="text-green-700">E-Commerce</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-blue-700">predictive analytics</span>, is revolutionizing e-commerce enabling personalized shopping, automating tasks, and providing actionable insights for better business outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From dynamic pricing to intelligent customer service, AI technologies empower retailers to boost sales, improve efficiency, and deliver exceptional customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities and Benefits Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Capabilities and Benefits
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the key advantages of implementing AI and ML in E-Commerce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operational Efficiency */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Operational Efficiency</h3>
                <p className="text-gray-200 leading-relaxed">Automate routine workflows and streamline operations with AI, freeing your team to focus on strategic growth while reducing manual overhead.</p>
              </div>
            </div>
            {/* Cost Savings */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Cost Savings</h3>
                <p className="text-gray-200 leading-relaxed">Drive profitability by leveraging AI to cut operational costs, optimize resource allocation, and eliminate inefficiencies across your business.</p>
              </div>
            </div>
            {/* Enhanced Customer Experience */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Enhanced Customer Experience</h3>
                <p className="text-gray-200 leading-relaxed">Deliver hyper-personalized shopping, instant support, and proactive service—building loyalty and exceeding customer expectations at every touchpoint.</p>
              </div>
            </div>
            {/* Revenue Growth */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Revenue Growth</h3>
                <p className="text-gray-200 leading-relaxed">Accelerate sales with AI-powered recommendations, dynamic pricing, and precision marketing that convert browsers into loyal buyers.</p>
              </div>
            </div>
            {/* Inventory Optimization */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Inventory Optimization</h3>
                <p className="text-gray-200 leading-relaxed">Predict demand, optimize stock levels, and minimize waste with AI-driven inventory management—ensuring products are always available when customers need them.</p>
              </div>
            </div>
            {/* Competitive Advantage */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Competitive Advantage</h3>
                <p className="text-gray-200 leading-relaxed">Stay ahead of the curve by adopting AI for innovation, operational excellence, and superior customer engagement in a rapidly evolving market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
              AI E-Commerce Use Cases
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Explore how AI is revolutionizing e-commerce across various applications
            </p>
          </div>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-24 transform -translate-y-1/2 z-10 bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-24 transform -translate-y-1/2 z-10 bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Content Carousel */}
            <div className="flex space-x-8 px-16 overflow-hidden">
              {useCases.slice(currentIndex, currentIndex + 3).map((useCase) => (
                <div key={useCase.id} className="flex-shrink-0 w-80 space-y-4 flex flex-col items-center text-center">
                  <div className="relative h-48 w-full flex items-center justify-center">
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
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Why Choose Me
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Proven expertise and track record in E-Commerce AI development and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 3+ Years of Experience */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">3+</span>
              <h3 className="text-lg font-bold text-blue-900">Years of Experience</h3>
              <p className="text-gray-700 text-sm">
                Over 3 years of hands-on experience in E-Commerce AI development, delivering impactful solutions for online retailers.
              </p>
            </div>
            {/* 20+ E-Commerce Projects */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">20+</span>
              <h3 className="text-lg font-bold text-blue-900">E-Commerce Projects</h3>
              <p className="text-gray-700 text-sm">
                Successfully delivered 20+ E-Commerce AI projects, each tailored to unique business needs and challenges.
              </p>
            </div>
            {/* 30+ AI Models Built */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">30+</span>
              <h3 className="text-lg font-bold text-blue-900">AI Models Built</h3>
              <p className="text-gray-700 text-sm">
                Developed 30+ custom AI models for product recommendations, dynamic pricing, and customer analytics.
              </p>
            </div>
            {/* 10+ Happy Clients */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">10+</span>
              <h3 className="text-lg font-bold text-blue-900">Happy Clients</h3>
              <p className="text-gray-700 text-sm">
                Partnered with 10+ e-commerce businesses, delivering measurable improvements in sales and efficiency.
              </p>
            </div>
            {/* Global Reach */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-green-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-blue-900">Global Reach</h3>
              <p className="text-gray-700 text-sm">
                Providing E-Commerce AI solutions to clients and businesses worldwide, supporting scalable and innovative retail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-green-50/90">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
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

export default ECommerceAI; 