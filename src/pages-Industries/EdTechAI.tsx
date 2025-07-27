import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EdTechAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = [
    {
      id: 0,
      title: "Intelligent Content Creation",
      description: "Students who may have hearing issues or prefer to read rather than listen to lectures may find it easier to access instructional content with customized AI transcription and text-to-speech technology.",
      image: "/image/pages_img/Intelligent-Content.webp",
      alt: "AI-Driven Content Creation"
    },
    {
      id: 1,
      title: "Personalized Learning",
      description: "AI tailors educational content and pace to individual student needs, improving engagement and outcomes.",
      image: "/image/pages_img/Personalize-Learning.jpg",
      alt: "Personalized Learning Pathways"
    },
    {
      id: 2,
      title: "Automated Grading",
      description: "Machine learning automates grading of assignments and assessments, saving educators time and providing instant feedback.",
      image: "/image/pages_img/automated-grading.jpg",
      alt: "Automated Assessment & Feedback"
    },
    {
      id: 3,
      title: "Intelligent Tutoring Systems",
      description: "AI-powered tutors provide real-time support, answer questions, and guide students through complex topics.",
      image: "/image/pages_img/Intelligent-Tutoring-Systems.jpg",
      alt: "Intelligent Tutoring Solutions"
    },
    {
      id: 4,
      title: "Content Recommendation",
      description: "AI recommends relevant learning resources and pathways based on student performance and interests.",
      image: "/image/pages_img/Content-Recommendation.jpg",
      alt: "Smart Content Recommendations"
    },
    {
      id: 5,
      title: "adaptive assessment",
      description: "Predictive models identify at-risk students and suggest interventions to improve retention and achievement.",
      image: "/image/pages_img/adaptive-assessment.jpg",
      alt: "Adaptive Student Assessment"
    },
    {
      id: 6,
      title: "Language Translation & Accessibility",
      description: "AI enables real-time translation and accessibility features, making education inclusive for diverse learners.",
      image: "/image/pages_img/Language-Translation.jpg",
      alt: "Real-Time Language & Accessibility"
    },
    {
      id: 7,
      title: "Administrative Automation",
      description: "AI streamlines administrative tasks such as scheduling, enrollment, and resource allocation in educational institutions.",
      image: "/image/pages_img/Administrative-Automation.jpg",
      alt: "Automated Administration"
    },
    {
      id: 8,
      title: "Intelligent Writing Assistants",
      description: "These tools use natural language processing (NLP) and machine learning algorithms to analyze the text and provide real-time feedback and suggestions to users.",
      image: "/image/pages_img/Intelligent-Content.webp", // Placeholder, update if you have a better image
      alt: "AI Writing Assistants"
    },
    {
      id: 9,
      title: "Predictive Analytics",
      description: "AI tools for teachers to analyze student data, including grades, attendance, and behavior, to find patterns and trends that can suggest a kid is having trouble and needs more help.",
      image: "/image/pages_img/PredictiveAnalytics.jpg", // Placeholder, update if you have a better image
      alt: "Predictive Student Analytics"
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is EdTech?",
      answer: "EdTech, or Educational Technology, leverages digital platforms and intelligent tools to enhance teaching, learning, and administration. It encompasses online learning, AI-powered tutoring, digital classrooms, and more."
    },
    {
      id: 2,
      question: "How is AI used in EdTech?",
      answer: "AI powers personalized learning, automates grading, enables intelligent tutoring, recommends content, delivers predictive analytics, supports real-time translation, and streamlines administration—driving better outcomes and efficiency."
    },
    {
      id: 3,
      question: "What are the benefits of AI in education?",
      answer: "AI enables tailored learning, saves educators time, provides instant feedback, identifies students needing support, and makes education more accessible and inclusive."
    },
    {
      id: 4,
      question: "Are there challenges to using AI in EdTech?",
      answer: "Challenges include ensuring data privacy, minimizing bias, integrating with legacy systems, and providing equitable access. Success requires robust governance and inclusive design."
    },
    {
      id: 5,
      question: "Can AI replace teachers?",
      answer: "AI is a powerful enabler, not a replacement for educators. It automates routine tasks and delivers insights, allowing teachers to focus on personalized instruction and student engagement."
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
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/pages_img/EdTechAI.avif" // Use your preferred hero background image
            alt="EdTech AI Hero Background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.5)' }}
          />
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bfae' fill-opacity='0.08'%3E%3Crect x='25' y='25' width='10' height='10' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  Empowering <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Education with AI</span>
                </h1>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-100 max-w-2xl">
                Transform learning experiences with AI-driven personalization, intelligent support, and actionable insights for educators and students alike.
              </p>
              <a
                href="mailto:sureshbeekhani@26gamil.com"
                className="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
              >
                Talk to in Expert
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
                  src="/image/pages_img/AIconten.jpg"
                  alt="AI in Education - Digital Transformation"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                  The Future of <span className="text-green-700">Education</span> with AI
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                Artificial intelligence—including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-blue-700">natural language processing</span>—is reshaping education by enabling adaptive learning, automating routine tasks, and delivering data-driven insights for superior outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From tailored lesson plans to predictive analytics, AI empowers educators and learners to achieve more, driving engagement, improving retention, and making quality education accessible to all.
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
              AI Capabilities & Business Impact
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore the strategic advantages of integrating AI and machine learning into EdTech solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operational Efficiency */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Operational Excellence</h3>
                <p className="text-gray-200 leading-relaxed">Leverage AI and ML to automate repetitive processes, boost productivity, and streamline operations for measurable efficiency gains.</p>
              </div>
            </div>
            {/* Cost Savings */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Cost Optimization</h3>
                <p className="text-gray-200 leading-relaxed">Reduce operational expenses and maximize ROI by automating workflows and delivering scalable, cost-effective learning solutions.</p>
              </div>
            </div>
            {/* Enhanced Learning Outcomes */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Superior Learning Outcomes</h3>
                <p className="text-gray-200 leading-relaxed">Drive student success with personalized learning, timely interventions, and precise assessments powered by AI and ML.</p>
              </div>
            </div>
            {/* Revenue Streams */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">New Revenue Opportunities</h3>
                <p className="text-gray-200 leading-relaxed">Unlock innovative business models with adaptive learning, virtual tutoring, and automated content creation services.</p>
              </div>
            </div>
            {/* Resource Utilization */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Optimized Resource Allocation</h3>
                <p className="text-gray-200 leading-relaxed">Predict demand and allocate resources efficiently, ensuring optimal outcomes for both learners and institutions.</p>
              </div>
            </div>
            {/* Competitive Advantage */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Sustainable Competitive Edge</h3>
                <p className="text-gray-200 leading-relaxed">Stay ahead with AI-driven solutions that enhance educational value, improve outcomes, and reduce costs for your organization.</p>
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
              Transformative AI Use Cases in EdTech
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              See how AI is redefining education through real-world applications and measurable impact.
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
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Why Partner With Me
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Trusted expertise and a proven record of delivering impactful EdTech AI solutions for forward-thinking organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 3+ Years of Experience */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">3+</span>
              <h3 className="text-lg font-bold text-blue-900">Years of Industry Experience</h3>
              <p className="text-gray-700 text-sm">
                Over three years of hands-on EdTech AI development, delivering measurable value for educators and learners.
              </p>
            </div>
            {/* 20+ EdTech Projects */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">20+</span>
              <h3 className="text-lg font-bold text-blue-900">Successful EdTech Projects</h3>
              <p className="text-gray-700 text-sm">
                Delivered 20+ custom AI solutions, each tailored to unique educational challenges and goals.
              </p>
            </div>
            {/* 30+ AI Models Built */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">30+</span>
              <h3 className="text-lg font-bold text-blue-900">AI Models Engineered</h3>
              <p className="text-gray-700 text-sm">
                Built 30+ advanced AI models for adaptive learning, content recommendations, and student analytics.
              </p>
            </div>
            {/* 10+ Happy Institutions */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">10+</span>
              <h3 className="text-lg font-bold text-blue-900">Institutional Partners</h3>
              <p className="text-gray-700 text-sm">
                Collaborated with 10+ educational institutions, driving measurable improvements in learning and efficiency.
              </p>
            </div>
            {/* Global Reach */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-green-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-blue-900">Global Clientele</h3>
              <p className="text-gray-700 text-sm">
                Delivering scalable, inclusive EdTech AI solutions to organizations worldwide.
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

export default EdTechAI; 