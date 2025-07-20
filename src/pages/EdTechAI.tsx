import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EdTechAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = [
    {
      id: 1,
      title: "Personalized Learning",
      description: "AI tailors educational content and pace to individual student needs, improving engagement and outcomes.",
      image: "/image/pages_img/EdTechAI.jpg",
      alt: "Personalized Learning"
    },
    {
      id: 2,
      title: "Automated Grading",
      description: "Machine learning automates grading of assignments and assessments, saving educators time and providing instant feedback.",
      image: "/image/pages_img/AI-Content-Creation.png",
      alt: "Automated Grading"
    },
    {
      id: 3,
      title: "Intelligent Tutoring Systems",
      description: "AI-powered tutors provide real-time support, answer questions, and guide students through complex topics.",
      image: "/image/pages_img/AI-Research-Agent.png",
      alt: "Intelligent Tutoring Systems"
    },
    {
      id: 4,
      title: "Content Recommendation",
      description: "AI recommends relevant learning resources and pathways based on student performance and interests.",
      image: "/image/pages_img/Movie Recommender System.png",
      alt: "Content Recommendation"
    },
    {
      id: 5,
      title: "Predictive Analytics for Student Success",
      description: "Predictive models identify at-risk students and suggest interventions to improve retention and achievement.",
      image: "/image/pages_img/Student-Exam-Performance-Prediction.png",
      alt: "Predictive Analytics"
    },
    {
      id: 6,
      title: "Language Translation & Accessibility",
      description: "AI enables real-time translation and accessibility features, making education inclusive for diverse learners.",
      image: "/image/pages_img/Machine-Translation.png",
      alt: "Language Translation"
    },
    {
      id: 7,
      title: "Administrative Automation",
      description: "AI streamlines administrative tasks such as scheduling, enrollment, and resource allocation in educational institutions.",
      image: "/image/pages_img/Administrative Tasks.avif",
      alt: "Administrative Automation"
    }
  ];

  const faqData = [
    {
      id: 1,
      question: "What is EdTech?",
      answer: "EdTech, or Educational Technology, refers to the use of digital tools, software, and platforms to enhance teaching, learning, and educational administration. It includes online learning platforms, AI-powered tutoring, digital classrooms, and more."
    },
    {
      id: 2,
      question: "How is AI used in EdTech?",
      answer: "AI is used in EdTech for personalized learning, automated grading, intelligent tutoring, content recommendation, predictive analytics, language translation, and administrative automation. These applications improve learning outcomes and operational efficiency."
    },
    {
      id: 3,
      question: "What are the benefits of AI in education?",
      answer: "AI in education enables personalized learning, saves teachers time, provides instant feedback, identifies at-risk students, and makes education more accessible and inclusive."
    },
    {
      id: 4,
      question: "Are there challenges to using AI in EdTech?",
      answer: "Challenges include data privacy, algorithmic bias, integration with existing systems, and ensuring equitable access to technology. Addressing these requires robust data governance and inclusive design."
    },
    {
      id: 5,
      question: "Can AI replace teachers?",
      answer: "AI is a tool to support, not replace, teachers. It automates routine tasks and provides insights, allowing educators to focus on personalized instruction and student engagement."
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bfae' fill-opacity='0.08'%3E%3Crect x='25' y='25' width='10' height='10' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  AI In <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">EdTech</span>
                </h1>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-100 max-w-2xl">
                AI in education transforms learning with personalized content, intelligent tutoring, and data-driven insights for students and educators.
              </p>
            </div>
            {/* Right: Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
                <img
                  src="/image/pages_img/EdTechAI.avif"
                  alt="AI EdTech Hero"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
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
                  AI in <span className="text-green-700">Education</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-blue-700">natural language processing</span>, is revolutionizing education—enabling adaptive learning, automating tasks, and providing actionable insights for better outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From personalized lesson plans to predictive analytics for student success, AI technologies empower educators and learners to achieve more. These advancements foster engagement, improve retention, and make education accessible to all.
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
              Discover the key advantages of implementing AI and ML in EdTech software
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
                  <p className="text-gray-200 leading-relaxed">AI and ML automate routine tasks and improve operational efficiency in educational organizations, resulting in increased productivity and reduced costs.</p>
                </div>
              </div>
            </div>
            {/* Cost Savings */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Cost Savings</h3>
                  <p className="text-gray-200 leading-relaxed">Implementing AI and ML in EdTech software leads to significant cost savings through process automation and cost-effective learning solutions.</p>
                </div>
              </div>
            </div>
            {/* Enhanced Learning Outcomes */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Enhanced Learning Outcomes</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML enhance learning outcomes by enabling personalized learning, early intervention, and precise assessment, leading to better student success.</p>
                </div>
              </div>
            </div>
            {/* Revenue Streams */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Revenue Streams</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML create new revenue streams through innovative EdTech services like adaptive learning, virtual tutoring, and automated content creation.</p>
                </div>
              </div>
            </div>
            {/* Resource Utilization */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Resource Utilization</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML optimize resource utilization by predicting learning demand and allocating resources efficiently for improved educational outcomes.</p>
                </div>
              </div>
            </div>
            {/* Competitive Advantage */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Competitive Advantage</h3>
                  <p className="text-gray-200 leading-relaxed">EdTech firms gain competitive edge by using AI to offer better services, enhance student outcomes, and cut costs.</p>
                </div>
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
              AI EdTech Use Cases
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Discover how AI is revolutionizing education across various applications
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
              Why Choose Me
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Proven expertise and track record in EdTech AI development and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 3+ Years of Experience */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">3+</span>
              <h3 className="text-lg font-bold text-blue-900">Years of Experience</h3>
              <p className="text-gray-700 text-sm">
                Over 3 years of hands-on experience in EdTech AI development, delivering impactful solutions for learners and educators.
              </p>
            </div>
            {/* 20+ EdTech Projects */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">20+</span>
              <h3 className="text-lg font-bold text-blue-900">EdTech Projects</h3>
              <p className="text-gray-700 text-sm">
                Successfully delivered 20+ EdTech AI projects, each tailored to unique educational needs and challenges.
              </p>
            </div>
            {/* 30+ AI Models Built */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">30+</span>
              <h3 className="text-lg font-bold text-blue-900">AI Models Built</h3>
              <p className="text-gray-700 text-sm">
                Developed 30+ custom AI models for adaptive learning, content recommendation, and student analytics.
              </p>
            </div>
            {/* 10+ Happy Institutions */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">10+</span>
              <h3 className="text-lg font-bold text-blue-900">Happy Institutions</h3>
              <p className="text-gray-700 text-sm">
                Partnered with 10+ educational institutions, delivering measurable improvements in learning outcomes and efficiency.
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
                Providing EdTech AI solutions to clients and institutions worldwide, supporting scalable and inclusive education.
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