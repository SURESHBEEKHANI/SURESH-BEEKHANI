import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HealthTechAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const useCases = [
    {
      id: 1,
      title: "Drug Discovery",
      description: "AI accelerates drug discovery by evaluating extensive data, identifying potential medications, and developing innovative clinical software solutions.",
      image: "/image/pages_img/DrugDiscover.jpg",
      alt: "Drug Discovery"
    },
    {
      id: 2,
      title: "Virtual Health Assistants",
      description: "Virtual Health Assistants (VHAs), powered by machine learning, learn and adapt to patient needs. They offer personalized recommendations and medication management.",
      image: "/image/pages_img/VHA.webp",
      alt: "Virtual Health Assistants"
    },
    {
      id: 3,
      title: "Remote Patient Monitoring",
      description: "RPM technologies can help healthcare providers remotely track a patient's vital signs and other health metrics, allowing for early detection of potential issues and proactive interventions.",
      image:"/image/pages_img/remot-p-m.webp",
      alt: "Remote Patient Monitoring"
    },
    {
      id: 4,
      title: "Medical Image Analysis",
      description: "X-rays, MRIs, CT scans analysis with AI-powered diagnostic assistance for accurate and rapid medical imaging interpretation.",
      image: "/image/pages_img/medical-image-analysis.jpg",
      alt: "Medical Image Analysis"
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "Patient outcome prediction and risk assessment using advanced algorithms to improve treatment planning and preventive care.",
      image: "/image/pages_img/PredictiveAnalytics.jpg",
      alt: "Predictive Analytics"
    },
    {
      id: 6,
      title: "Administrative Tasks",
      description: "With AI technology, administrative tasks can be automated, making the process more efficient and accurate. Doing this lowers the possibility of mistakes and increases patient satisfaction.",
      image:  "/image/pages_img/Administrative Tasks.avif",
      alt: "Administrative Tasks"
    },
    {
      id: 7,
      title: "Mental Health",
      description: "AI systems are revolutionizing the field of mental health by improving diagnosis. Big data analytics can analyze vast amounts of data to identify patterns in patient behavior.",
      image: "/image/pages_img/MentalHealth.png",
      alt: "Mental Health"
    }
  ];

  const faqData = [
    {
      id: 1,
      question: "What is Healthcare Technology?",
      answer: "Healthcare Technology encompasses digital tools, software, and systems designed to improve patient care, streamline medical processes, and enhance healthcare delivery. This includes electronic health records (EHRs), telemedicine platforms, medical devices, AI-powered diagnostic tools, and patient management systems that work together to create more efficient and effective healthcare experiences."
    },
    {
      id: 2,
      question: "How is AI and ML used in healthcare?",
      answer: "AI and ML are revolutionizing healthcare through medical image analysis (X-rays, MRIs, CT scans), predictive analytics for patient outcomes, drug discovery acceleration, virtual health assistants, remote patient monitoring, administrative task automation, and personalized treatment recommendations. These technologies help doctors make more accurate diagnoses, predict patient risks, and provide better personalized care."
    },
    {
      id: 3,
      question: "Will AI and ML bring value to my health-tech business?",
      answer: "Absolutely! AI and ML can significantly enhance your health-tech business by improving operational efficiency, reducing costs, enhancing patient outcomes, creating new revenue streams, optimizing resource utilization, and providing a competitive advantage. These technologies can automate routine tasks, improve diagnostic accuracy, and enable data-driven decision making that leads to better business performance and patient satisfaction."
    },
    {
      id: 4,
      question: "What are some concerns about AI in healthcare?",
      answer: "Key concerns include data privacy and security, potential biases in AI algorithms, regulatory compliance (HIPAA, FDA), integration challenges with existing systems, the need for human oversight and validation, and ensuring AI decisions are explainable and transparent. It's crucial to address these concerns through proper data governance, bias testing, compliance frameworks, and maintaining human expertise alongside AI systems."
    },
    {
      id: 5,
      question: "What are the applications of AI in healthcare?",
      answer: "AI applications in healthcare include medical imaging and diagnostics, predictive analytics for disease prevention, drug discovery and development, virtual health assistants and chatbots, remote patient monitoring, administrative task automation, personalized medicine, clinical decision support systems, robotic surgery assistance, and mental health assessment and support. These applications improve accuracy, efficiency, and patient outcomes across the healthcare spectrum."
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
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/healthtechai.jpg')] bg-cover bg-center"></div>
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="flex-1 text-white space-y-8 w-full flex flex-col items-start text-left">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full text-left">
                AI In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Health Tech</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 w-full whitespace-pre-line mt-4 text-left">
                AI in healthcare provides clinical software solutions.nIt saves lives by predicting treatment responses\nand analyzing vast medical data.
              </p>
              <div className="flex space-x-4 pt-6 w-full justify-start">
                <a
                  href="mailto:sureshbeekhani@26gamil.com"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
              {/* Image intentionally removed as per last user edit */}
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
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
                <img
                  src="/image/pages_img/AI HealthSoft.webp"
                  alt="AI HealthSoft Healthcare Software"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                  AI in Healthcare <span className="text-teal-700">Software</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-teal-700">machine learning</span> and <span className="font-semibold text-blue-700">computer vision</span>, is transforming healthcare—enabling faster diagnoses, automating tasks, and personalizing care for better outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From analyzing complex medical images to predicting patient risks and streamlining hospital operations, AI technologies are making healthcare more efficient and effective. These advancements empower clinicians to make data-driven decisions, reduce errors, and deliver tailored treatments that improve patient experiences and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities and Benefits Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-teal-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Capabilities and Benefits
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the key advantages of implementing AI and ML in healthcare software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operational Efficiency */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-300/20 rounded-lg flex items-center justify-center group-hover:bg-teal-300/30 transition-colors">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Operational Efficiency</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML automate routine tasks and improve operational efficiency in healthcare organizations, resulting in increased productivity and reduced costs.</p>
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
                  <p className="text-gray-200 leading-relaxed">Implementing AI and ML in digital healthcare software leads to significant cost savings through process automation and cost-effective treatment identification.</p>
                </div>
              </div>
            </div>

            {/* Clinical Outcomes */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-300/20 rounded-lg flex items-center justify-center group-hover:bg-teal-300/30 transition-colors">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Clinical Outcomes</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML enhance clinical outcomes by enabling early detection and precise diagnosis, leading to better patient outcomes and lower healthcare costs.</p>
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
                  <p className="text-gray-200 leading-relaxed">AI and ML create new revenue streams through cutting-edge services like tailored treatment, telemedicine, and remote monitoring.</p>
                </div>
              </div>
            </div>

            {/* Resource Utilization */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-300/20 rounded-lg flex items-center justify-center group-hover:bg-teal-300/30 transition-colors">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Resource Utilization</h3>
                  <p className="text-gray-200 leading-relaxed">AI and ML optimize resource utilization by predicting service demand and allocating resources efficiently for improved patient care.</p>
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
                  <p className="text-gray-200 leading-relaxed">Healthcare firms gain competitive edge by using AI to offer better services, enhance patient outcomes, and cut costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-teal-50/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
              AI Health Tech Use Cases
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Discover how AI is revolutionizing healthcare across various applications
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-24 transform -translate-y-1/2 z-10 bg-teal-100 hover:bg-teal-200 text-teal-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-24 transform -translate-y-1/2 z-10 bg-teal-100 hover:bg-teal-200 text-teal-800 p-3 rounded-full shadow-lg transition-all duration-300"
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
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-teal-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Why Choose Me
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Proven expertise and track record in AI development and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 3+ Years of Experience */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-teal-600">3+</span>
              <h3 className="text-lg font-bold text-blue-900">Years of Experience</h3>
              <p className="text-gray-700 text-sm">
                With over 3 years of hands-on experience in AI development and deployment, I bring proven expertise to help your business unlock the full potential of artificial intelligence.
              </p>
            </div>

            {/* 25+ Projects Completed */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-teal-600">25+</span>
              <h3 className="text-lg font-bold text-blue-900">Projects Completed</h3>
              <p className="text-gray-700 text-sm">
                I've successfully delivered over 25 AI projects, each tailored to the unique needs of clients across various industries—ensuring real, measurable results.
              </p>
            </div>

            {/* 40+ AI Models Built */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-teal-600">40+</span>
              <h3 className="text-lg font-bold text-blue-900">AI Models Built</h3>
              <p className="text-gray-700 text-sm">
                From predictive analytics to natural language processing and computer vision, I've developed 40+ custom AI models that drive innovation and solve real-world problems.
              </p>
            </div>

            {/* 15+ Happy Clients */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-teal-600">15+</span>
              <h3 className="text-lg font-bold text-blue-900">Happy Clients</h3>
              <p className="text-gray-700 text-sm">
                Client satisfaction is my top priority. With 15+ happy clients, I build lasting partnerships based on trust, results, and continuous improvement.
              </p>
            </div>

            {/* Global Presence */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-teal-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-blue-900">Global Presence</h3>
              <p className="text-gray-700 text-sm">
                As a freelancer with a global footprint, I provide services to clients in the USA, UK, and UAE. This international reach allows me to deliver scalable AI solutions and support to businesses worldwide—no matter where you're located.
              </p>
            </div>
          </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-blue-50/90">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
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

export default HealthTechAI; 