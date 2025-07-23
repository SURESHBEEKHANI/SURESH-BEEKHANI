import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HIPAACompliance: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const useCases = [
    {
      id: 0,
      title: "Automated PHI Redaction",
      description: "AI systems can automatically detect and redact Protected Health Information (PHI) in documents, ensuring compliance with HIPAA privacy rules.",
      image: "/image/pages_img/Automated-PHI-Redaction.jpg",
      alt: "Automated PHI Redaction"
    },
    {
      id: 1,
      title: "Anomaly Detection in Access Logs",
      description: "Machine learning models monitor access logs for unusual activity, helping prevent unauthorized access to sensitive health data.",
      image: "/image/pages_img/Anomaly-Detection-Access-Logs.jpg",
      alt: "Anomaly Detection"
    },
    {
      id: 2,
      title: "Secure Data Sharing",
      description: "AI enables secure, compliant data sharing between healthcare providers, improving care coordination while maintaining privacy.",
      image: "/image/pages_img/Secure-Data-Sharing.jpg",
      alt: "Secure Data Sharing"
    },
    {
      id: 3,
      title: "Automated Compliance Audits",
      description: "AI tools can automate HIPAA compliance audits, flagging potential violations and streamlining reporting.",
      image: "/image/pages_img/Automated-Compliance-Audits.webp",
      alt: "Automated Compliance Audits"
    },
    {
      id: 4,
      title: "Real-Time Threat Detection",
      description: "AI-driven security systems provide real-time alerts for potential data breaches or suspicious activity.",
      image: "/image/pages_img/Real-Time-Threat-Detection.jpeg",
      alt: "Real-Time Threat Detection"
    },
    {
      id: 5,
      title: "Patient Consent Management",
      description: "AI helps manage and verify patient consent for data use, ensuring all actions are logged and compliant.",
      image: "/image/pages_img/Patient-Consent-Management.png",
      alt: "Patient Consent Management"
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is HIPAA?",
      answer: "HIPAA (Health Insurance Portability and Accountability Act) is a US law designed to protect patients' medical records and other health information provided to health plans, doctors, hospitals, and other healthcare providers."
    },
    {
      id: 2,
      question: "How does AI help with HIPAA compliance?",
      answer: "AI can automate data protection, monitor for unauthorized access, assist with audits, and help ensure that healthcare data is handled in compliance with HIPAA regulations."
    },
    {
      id: 3,
      question: "What are the risks of using AI in healthcare?",
      answer: "Risks include data breaches, algorithmic bias, and improper handling of sensitive information. Proper safeguards and compliance checks are essential."
    },
    {
      id: 4,
      question: "Can AI replace manual HIPAA audits?",
      answer: "AI can automate many aspects of compliance monitoring and reporting, but human oversight is still necessary for full compliance."
    },
    {
      id: 5,
      question: "Is patient data safe with AI systems?",
      answer: "With proper security measures, encryption, and compliance protocols, AI systems can help keep patient data safe and private."
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
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800/90 via-green-700/90 to-blue-900/90">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/pages_img/HIPAA.avif"
            alt="HIPAA Compliance Background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.5)' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        {/* SVG pattern overlay (optional, can be removed if not needed) */}
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
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  AI & <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">HIPAA Compliance</span>
                </h1>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-100 max-w-2xl">
                Leveraging AI to enhance healthcare data security, automate compliance, and protect patient privacy under HIPAA regulations.
              </p>
              <div>
                <a
                  href="mailto:sureshbeekhani@gmail.com"
                  className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 text-lg"
                >
                  Talk to an Expert
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
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
                <img
                  src="/image/pages_img/AI-HIPAA-Compliance.png"
                  alt="AI HIPAA Compliance Illustration"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                  AI for <span className="text-green-700">HIPAA Compliance</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI and machine learning are transforming healthcare compliance by automating data protection, monitoring, and reporting—helping organizations meet HIPAA requirements efficiently.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From real-time threat detection to automated audits, AI-driven solutions reduce risk, improve accuracy, and free up resources for patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities and Benefits Section */}
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
              Key advantages of using AI for HIPAA compliance in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Automated Compliance</h3>
                  <p className="text-gray-200 leading-relaxed">AI automates compliance checks, reducing manual effort and minimizing human error in HIPAA processes.</p>
                </div>
              </div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Enhanced Security</h3>
                  <p className="text-gray-200 leading-relaxed">Machine learning detects threats and vulnerabilities in real time, improving the security of patient data.</p>
                </div>
              </div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Cost Reduction</h3>
                  <p className="text-gray-200 leading-relaxed">AI-driven automation reduces the cost of compliance and security operations for healthcare organizations.</p>
                </div>
              </div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Faster Audits</h3>
                  <p className="text-gray-200 leading-relaxed">Automated tools speed up compliance audits and reporting, making it easier to maintain HIPAA standards.</p>
                </div>
              </div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Improved Accuracy</h3>
                  <p className="text-gray-200 leading-relaxed">AI reduces human error in compliance processes, ensuring more accurate and reliable results.</p>
                </div>
              </div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Regulatory Confidence</h3>
                  <p className="text-gray-200 leading-relaxed">AI helps organizations stay up to date with changing HIPAA regulations and best practices.</p>
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
              AI & HIPAA Use Cases
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Explore how AI is used to support HIPAA compliance in healthcare
            </p>
          </div>
          <div className="relative">
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
              Experience in building secure, compliant AI solutions for healthcare
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">5+</span>
              <h3 className="text-lg font-bold text-blue-900">Years in Healthcare AI</h3>
              <p className="text-gray-700 text-sm">
                Over 5 years of experience developing AI solutions for healthcare compliance and security.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">15+</span>
              <h3 className="text-lg font-bold text-blue-900">HIPAA Projects</h3>
              <p className="text-gray-700 text-sm">
                Successfully delivered 15+ HIPAA-compliant AI projects for healthcare organizations.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">20+</span>
              <h3 className="text-lg font-bold text-blue-900">AI Models Deployed</h3>
              <p className="text-gray-700 text-sm">
                Built and deployed 20+ AI models focused on healthcare data privacy and compliance.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-4xl font-extrabold text-green-600">10+</span>
              <h3 className="text-lg font-bold text-blue-900">Healthcare Partners</h3>
              <p className="text-gray-700 text-sm">
                Partnered with 10+ healthcare providers to deliver secure, compliant AI solutions.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-green-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-blue-900">Global Reach</h3>
              <p className="text-gray-700 text-sm">
                Delivering HIPAA-compliant AI solutions to clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {/* Example FAQ item - repeat for each question/answer */}
            <div className="bg-white/90 rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">What is HIPAA?</h3>
              <p className="text-gray-700">
                HIPAA (Health Insurance Portability and Accountability Act) is a US law designed to protect patients' medical records and other health information provided to health plans, doctors, hospitals, and other healthcare providers.
              </p>
            </div>
            <div className="bg-white/90 rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">How does AI help with HIPAA compliance?</h3>
              <p className="text-gray-700">
                AI can automate data protection, monitor for unauthorized access, assist with audits, and help ensure that healthcare data is handled in compliance with HIPAA regulations.
              </p>
            </div>
            <div className="bg-white/90 rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">What are the risks of using AI in healthcare?</h3>
              <p className="text-gray-700">
                Risks include data breaches, algorithmic bias, and improper handling of sensitive information. Proper safeguards and compliance checks are essential.
              </p>
            </div>
            <div className="bg-white/90 rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Can AI replace manual HIPAA audits?</h3>
              <p className="text-gray-700">
                AI can automate many aspects of compliance monitoring and reporting, but human oversight is still necessary for full compliance.
              </p>
            </div>
            <div className="bg-white/90 rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Is patient data safe with AI systems?</h3>
              <p className="text-gray-700">
                With proper security measures, encryption, and compliance protocols, AI systems can help keep patient data safe and private.
              </p>
            </div>
            {/* ...repeat for all FAQ items... */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HIPAACompliance;