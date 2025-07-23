import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RetailAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = [
    {
      id: 0,
      title: "Personalized Recommendations",
      description: "AI analyzes customer data to provide personalized product recommendations, increasing sales and customer satisfaction.",
      image: "/image/pages_img/Personalized-Recommendations-retail.webp",
      alt: "Personalized Recommendations"
    },
    {
      id: 1,
      title: "Inventory Optimization",
      description: "Machine learning predicts demand trends, helping retailers optimize inventory levels and reduce stockouts or overstock.",
      image: "/image/pages_img/retail-Inventory-Optimization.jpg",
      alt: "Inventory Optimization"
    },
    {
      id: 2,
      title: "Customer Service Chatbots",
      description: "AI-powered chatbots provide instant support, answer queries, and enhance the customer experience 24/7.",
      image: "/image/pages_img/Customer-Service-Chatbots.jpg",
      alt: "Customer Service Chatbots"
    },
    {
      id: 3,
      title: "Fraud Detection",
      description: "AI systems detect fraudulent transactions in real-time, protecting both retailers and customers.",
      image: "/image/pages_img/Fraud-Detection-reatils.webp",
      alt: "Fraud Detection"
    },
    {
      id: 4,
      title: "Dynamic Pricing",
      description: "AI algorithms adjust prices dynamically based on demand, competition, and other factors to maximize revenue.",
      image: "/image/pages_img/Dynamic-Pricing.jpg",
      alt: "Dynamic Pricing"
    },
    {
      id: 5,
      title: "Customer Segmentation",
      description: "AI segments customers based on behavior and preferences, enabling targeted marketing campaigns.",
      image: "/image/pages_img/Customer-Segmentation-reatlas.webp",
      alt: "Customer Segmentation"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      description: "AI optimizes supply chain operations, reducing costs and improving delivery times.",
      image: "/image/pages_img/Supply-Chain-Optimization.webp",
      alt: "Supply Chain Optimization"
    },
    {
      id: 7,
      title: "Visual Search",
      description: "Customers can search for products using images, making the shopping experience more intuitive.",
      image: "/image/pages_img/Visual-Search.jpg",
      alt: "Visual Search"
    },
    {
      id: 8,
      title: "Sentiment Analysis",
      description: "AI analyzes customer reviews and feedback to gauge sentiment and improve products and services.",
      image: "/image/pages_img/Sentiment-Analysis-reatils.jpg",
      alt: "Sentiment Analysis"
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is Retail AI?",
      answer: "Retail AI refers to the use of artificial intelligence technologies to optimize retail operations, enhance customer experience, and drive sales through data-driven insights."
    },
    {
      id: 2,
      question: "How is AI used in retail?",
      answer: "AI is used in retail for personalized recommendations, inventory management, customer service automation, fraud detection, dynamic pricing, and more."
    },
    {
      id: 3,
      question: "What are the benefits of AI in retail?",
      answer: "AI in retail increases efficiency, improves customer satisfaction, reduces costs, and enables data-driven decision-making."
    },
    {
      id: 4,
      question: "Can AI help with inventory management?",
      answer: "Yes, AI predicts demand and optimizes inventory levels, reducing stockouts and excess inventory."
    },
    {
      id: 5,
      question: "Is AI in retail secure?",
      answer: "AI enhances security by detecting fraud and protecting sensitive customer data, but it requires robust data governance and cybersecurity measures."
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
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-yellow-300 via-pink-300 to-yellow-300 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/retail.jpg')] bg-cover bg-center"></div>
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="flex-1 text-white space-y-8 w-full">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI In <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Retail</span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full my-4"></div>
              <p className="text-lg md:text-2xl text-white w-full whitespace-pre-line mt-4">
                Transform retail with AI-powered personalization, efficiency, and insights.Empower your business with next-gen solutions.Unlock growth and innovation.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a href="mailto:sureshbeekhani@26gamil.com">
                  <button className="bg-gradient-to-r from-yellow-300 to-pink-300 hover:from-yellow-400 hover:to-pink-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg">
                    Talk to an Expert
                  </button>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl blur-xl opacity-30"></div>
                <img
                  src="/image/pages_img/AI-in-Retail.jpg"
                  alt="AI in Retail - Digital Transformation"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-pink-900">
                  AI in <span className="text-yellow-700">Retail</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-yellow-700">machine learning</span> and <span className="font-semibold text-pink-700">computer vision</span>, is revolutionizing retail enabling personalized shopping, automating operations, and providing actionable insights for better business outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From dynamic pricing to predictive analytics, AI technologies empower retailers to enhance customer engagement, optimize supply chains, and boost profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities and Benefits Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-yellow-900/90 via-pink-900/90 to-pink-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Capabilities and Benefits
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the key advantages of implementing AI and ML in Retail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operational Efficiency */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-300/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/30 transition-colors">
                  <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Operational Efficiency</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML automate routine retail tasks, streamline operations, and reduce costs, resulting in increased productivity and profitability.</p>
                </div>
              </div>
            </div>
            {/* Cost Savings */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-300/20 rounded-lg flex items-center justify-center group-hover:bg-pink-300/30 transition-colors">
                  <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Cost Savings</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML in retail lead to significant cost savings through process automation, demand forecasting, and optimized resource allocation.</p>
                </div>
              </div>
            </div>
            {/* Enhanced Customer Experience */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-300/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/30 transition-colors">
                  <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Enhanced Customer Experience</h3>
                  <p className="text-gray-200 leading-relaxed">AI enables personalized shopping, faster service, and seamless omnichannel experiences, delighting customers and building loyalty.</p>
                </div>
              </div>
            </div>
            {/* Revenue Growth */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-300/20 rounded-lg flex items-center justify-center group-hover:bg-pink-300/30 transition-colors">
                  <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Revenue Growth</h3>
                  <p className="text-gray-200 leading-relaxed">AI creates new revenue streams through innovative retail services like dynamic pricing, visual search, and automated marketing.</p>
                </div>
              </div>
            </div>
            {/* Inventory Optimization */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-300/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/30 transition-colors">
                  <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Inventory Optimization</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML optimize inventory by predicting demand, reducing waste, and ensuring products are always available for customers.</p>
                </div>
              </div>
            </div>
            {/* Competitive Advantage */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-300/20 rounded-lg flex items-center justify-center group-hover:bg-pink-300/30 transition-colors">
                  <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Competitive Advantage</h3>
                  <p className="text-gray-200 leading-relaxed">Retailers gain a competitive edge by leveraging AI for better customer insights, faster operations, and innovative services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-pink-50/90 to-yellow-50/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-pink-900">
              AI Retail Use Cases
            </h2>
            <p className="text-xl text-pink-700 max-w-3xl mx-auto">
              Discover how AI is revolutionizing retail across various applications
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
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-yellow-900/90 via-pink-900/90 to-pink-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Why Choose Me
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Proven expertise and track record in Retail AI development and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 3+ Years of Experience */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-pink-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">3+</span>
              <h3 className="text-lg font-bold text-pink-900">Years of Experience</h3>
              <p className="text-gray-700 text-sm">
                Over 3 years of hands-on experience in Retail AI development, delivering impactful solutions for businesses and customers.
              </p>
            </div>
            {/* 20+ Retail Projects */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-pink-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">20+</span>
              <h3 className="text-lg font-bold text-pink-900">Retail Projects</h3>
              <p className="text-gray-700 text-sm">
                Successfully delivered 20+ Retail AI projects, each tailored to unique business needs and challenges.
              </p>
            </div>
            {/* 30+ AI Models Built */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-pink-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">30+</span>
              <h3 className="text-lg font-bold text-pink-900">AI Models Built</h3>
              <p className="text-gray-700 text-sm">
                Developed 30+ custom AI models for personalized recommendations, demand forecasting, and customer analytics.
              </p>
            </div>
            {/* 10+ Happy Clients */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-pink-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-yellow-600">10+</span>
              <h3 className="text-lg font-bold text-pink-900">Happy Clients</h3>
              <p className="text-gray-700 text-sm">
                Partnered with 10+ retail businesses, delivering measurable improvements in sales and efficiency.
              </p>
            </div>
            {/* Global Reach */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-pink-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-yellow-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-pink-900">Global Reach</h3>
              <p className="text-gray-700 text-sm">
                Providing Retail AI solutions to clients and businesses worldwide, supporting scalable and innovative commerce.
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
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-pink-900">
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

export default RetailAI; 