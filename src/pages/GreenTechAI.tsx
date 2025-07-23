import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GreenTechAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = [
    {
      id: 0,
      title: "Smart Energy Management",
      description: "AI optimizes energy consumption in buildings and grids, reducing waste and lowering costs.",
      image: "/image/pages_img/Smart-Energy-Management.jpg",
      alt: "Smart Energy Management"
    },
    {
      id: 1,
      title: "Climate Forecasting",
      description: "Machine learning models predict weather patterns and climate change impacts for better planning.",
      image: "/image/pages_img/Climate-Forecasting.jpg",
      alt: "Climate Forecasting"
    },
    {
      id: 2,
      title: "Waste Reduction",
      description: "AI-driven analytics identify inefficiencies in supply chains and manufacturing, minimizing waste.",
      image: "/image/pages_img/Waste-Reduction.png",
      alt: "Waste Reduction"
    },
    {
      id: 3,
      title: "Environmental Monitoring",
      description: "Sensors and AI track air, water, and soil quality, enabling rapid response to pollution events.",
      image: "/image/pages_img/Environmental-Monitoring.webp",
      alt: "Environmental Monitoring"
    },
    {
      id: 4,
      title: "Renewable Energy Forecasting",
      description: "AI predicts solar and wind energy output, improving grid stability and renewable integration.",
      image: "/image/pages_img/Renewable-Energy-Forecasting.jpg",
      alt: "Renewable Energy Forecasting"
    },
    {
      id: 5,
      title: "Smart Agriculture",
      description: "AI analyzes crop data to optimize irrigation, fertilization, and pest control for sustainable farming.",
      image: "/image/pages_img/Smart-Agriculture.jpg",
      alt: "Smart Agriculture"
    },
    {
      id: 6,
      title: "Carbon Footprint Tracking",
      description: "AI tools help organizations monitor and reduce their carbon emissions.",
      image: "/image/pages_img/Carbon-Footprint-Tracking.webp",
      alt: "Carbon Footprint Tracking"
    },
    {
      id: 8,
      title: "Sustainable Urban Planning",
      description: "AI models simulate urban growth and resource needs for greener cities.",
      image: "/image/pages_img/Sustainable-Urban-Planning.jpg",
      alt: "Sustainable Urban Planning"
    },
    {
      id: 9,
      title: "Water Resource Management",
      description: "AI optimizes water distribution and detects leaks for efficient usage.",
      image: "/image/pages_img/Water-Resource-Management.avif",
      alt: "Water Resource Management"
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is GreenTech?",
      answer: "GreenTech, or Green Technology, refers to environmentally friendly technologies that reduce negative impacts on the planet. It includes renewable energy, smart grids, sustainable agriculture, and more."
    },
    {
      id: 2,
      question: "How is AI used in GreenTech?",
      answer: "AI is used in GreenTech for energy optimization, climate forecasting, waste reduction, environmental monitoring, and more. These applications drive sustainability and efficiency."
    },
    {
      id: 3,
      question: "What are the benefits of AI in GreenTech?",
      answer: "AI in GreenTech enables smarter resource use, reduces emissions, improves forecasting, and supports environmental protection."
    },
    {
      id: 4,
      question: "Are there challenges to using AI in GreenTech?",
      answer: "Challenges include data quality, integration with legacy systems, and ensuring solutions are scalable and accessible. Addressing these requires robust data management and collaboration."
    },
    {
      id: 5,
      question: "Can AI make a real impact on sustainability?",
      answer: "Yes, AI can significantly improve sustainability by optimizing processes, reducing waste, and enabling data-driven environmental decisions."
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
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-900 overflow-hidden">
        {/* Top green bar accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-green-400 to-green-500 z-20" />
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/greentech.jpg')] bg-cover bg-center" />
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="flex-1 text-white space-y-8">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI In <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">GreenTech</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 w-full whitespace-pre-line mt-4">
                AI in GreenTech drives sustainability with smart energy, climate analytics, and resource optimization for a greener planet.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a
                  href="mailto:sureshbeekhani26@gmail.com"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
          {/* Optionally, you can add an image or illustration here if needed */}
          <div className="flex-1 flex justify-center md:justify-end"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white/90">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-500 rounded-3xl blur-xl opacity-30"></div>
                <img
                  src="/image/pages_img/AI-Green-Technology.webp"
                  alt="AI in Green Technology"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-green-900">
                  AI in <span className="text-green-700">Green Technology</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-green-900">data analytics</span>, is revolutionizing sustainability enabling smart energy, climate forecasting, and resource optimization for a cleaner future.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From predictive maintenance to carbon tracking, AI technologies empower organizations and communities to achieve environmental goals. These advancements foster efficiency, reduce emissions, and make sustainability actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities and Benefits Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-green-800/90 to-green-700/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Capabilities and Benefits
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the key advantages of implementing AI and ML in GreenTech solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operational Efficiency */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Operational Efficiency</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML automate resource management and improve operational efficiency in green initiatives, resulting in increased productivity and reduced environmental impact.</p>
                </div>
              </div>
            </div>
            {/* Cost Savings */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Cost Savings</h3>
                  <p className="text-gray-200 leading-relaxed">Implementing AI and ML in GreenTech leads to significant cost savings through process optimization and efficient resource allocation.</p>
                </div>
              </div>
            </div>
            {/* Enhanced Sustainability */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Enhanced Sustainability</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML enhance sustainability by enabling predictive analytics, early intervention, and precise monitoring, leading to better environmental outcomes.</p>
                </div>
              </div>
            </div>
            {/* New Green Revenue Streams */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">New Green Revenue Streams</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML create new revenue streams through innovative GreenTech services like smart grids, carbon tracking, and environmental analytics.</p>
                </div>
              </div>
            </div>
            {/* Resource Optimization */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Resource Optimization</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML optimize resource utilization by predicting demand and allocating resources efficiently for improved sustainability.</p>
                </div>
              </div>
            </div>
            {/* Competitive Advantage */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Competitive Advantage</h3>
                  <p className="text-gray-200 leading-relaxed">GreenTech firms gain competitive edge by using AI to offer better services, enhance sustainability, and cut costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-50/90 to-green-100/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-green-900">
              AI GreenTech Use Cases
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Discover how AI is revolutionizing sustainability across various applications
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
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-green-800/90 to-green-700/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Why Choose Me
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Proven expertise and track record in GreenTech AI development and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 3+ Years of Experience */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-green-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">3+</span>
              <h3 className="text-lg font-bold text-green-900">Years of Experience</h3>
              <p className="text-gray-700 text-sm">
                Over 3 years of hands-on experience in GreenTech AI development, delivering impactful solutions for sustainability and efficiency.
              </p>
            </div>
            {/* 15+ GreenTech Projects */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-green-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">15+</span>
              <h3 className="text-lg font-bold text-green-900">GreenTech Projects</h3>
              <p className="text-gray-700 text-sm">
                Successfully delivered 15+ GreenTech AI projects, each tailored to unique environmental needs and challenges.
              </p>
            </div>
            {/* 25+ AI Models Built */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-green-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">25+</span>
              <h3 className="text-lg font-bold text-green-900">AI Models Built</h3>
              <p className="text-gray-700 text-sm">
                Developed 25+ custom AI models for energy management, climate analytics, and resource optimization.
              </p>
            </div>
            {/* 8+ Happy Organizations */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-green-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">8+</span>
              <h3 className="text-lg font-bold text-green-900">Happy Organizations</h3>
              <p className="text-gray-700 text-sm">
                Partnered with 8+ organizations, delivering measurable improvements in sustainability and efficiency.
              </p>
            </div>
            {/* Global Reach */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-green-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-green-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-green-900">Global Reach</h3>
              <p className="text-gray-700 text-sm">
                Providing GreenTech AI solutions to clients and organizations worldwide, supporting scalable and sustainable development.
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
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-green-900">
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

export default GreenTechAI; 