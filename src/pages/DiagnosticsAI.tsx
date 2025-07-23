import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DiagnosticsAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = [
    {
      id: 0,
      title: "Medical Image Analysis",
      description:
        "AI algorithms analyze X-rays, MRIs, and CT scans to detect anomalies such as tumors, fractures, and infections with high accuracy.",
      image: "/image/pages_img/Medical-Image-Analysis.webp",
      alt: "Medical Image Analysis",
    },
    {
      id: 1,
      title: "Early Disease Detection",
      description:
        "Machine learning models identify early signs of diseases like cancer, diabetes, and cardiovascular conditions, enabling timely intervention.",
      image: "/image/pages_img/Early-Disease-Detection.jpg",
      alt: "Early Disease Detection",
    },
    {
      id: 2,
      title: "Predictive Diagnostics",
      description:
        "AI predicts patient risk factors and potential health issues by analyzing electronic health records and lifestyle data.",
      image: "/image/pages_img/Predictive-Diagnostics.avif",
      alt: "Predictive Diagnostics",
    },
    {
      id: 3,
      title: "Pathology Automation",
      description:
        "Automated analysis of pathology slides speeds up diagnosis and reduces human error in laboratory settings.",
      image: "/image/pages_img/Pathology-Automation.webp",
      alt: "Pathology Automation",
    },
    {
      id: 5,
      title: "Genomic Data Analysis",
      description:
        "AI analyzes genetic data to identify mutations and recommend personalized treatment plans.",
      image: "/image/pages_img/Genomic-Data-Analysis.jpg",
      alt: "Genomic Data Analysis",
    },
    {
      id: 6,
      title: "Clinical Decision Support",
      description:
        "AI systems assist doctors by providing evidence-based recommendations and diagnostic suggestions.",
      image: "/image/pages_img/Clinical-Decision-Support.jpg",
      alt: "Clinical Decision Support",
    },
    {
      id: 7,
      title: "Workflow Optimization",
      description:
        "AI streamlines diagnostic workflows, automates administrative tasks, and improves resource allocation in healthcare facilities.",
      image: "/image/pages_img/Workflow-Optimization.jpg",
      alt: "Workflow Optimization",
    },
    {
      id: 9,
      title: "Anomaly Detection in Lab Results",
      description:
        "AI flags abnormal lab results and trends, supporting early intervention and improved patient outcomes.",
      image: "/image/pages_img/Anomaly-Detection.jpg",
      alt: "Anomaly Detection in Lab Results",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is AI Diagnostics?",
      answer:
        "AI Diagnostics refers to the use of artificial intelligence and machine learning algorithms to assist in the detection, analysis, and prediction of diseases and medical conditions.",
    },
    {
      id: 2,
      question: "How does AI improve diagnostic accuracy?",
      answer:
        "AI can process vast amounts of medical data, recognize complex patterns, and reduce human error, leading to more accurate and timely diagnoses.",
    },
    {
      id: 3,
      question: "Is AI Diagnostics safe and reliable?",
      answer:
        "When properly validated and used alongside clinical expertise, AI diagnostics can be highly reliable and improve patient safety. However, oversight and continuous evaluation are essential.",
    },
    {
      id: 4,
      question: "Can AI replace doctors in diagnostics?",
      answer:
        "AI is designed to support—not replace—healthcare professionals. It provides decision support, but final diagnoses and treatment decisions remain with clinicians.",
    },
    {
      id: 5,
      question: "What are the challenges of AI in diagnostics?",
      answer:
        "Challenges include data privacy, integration with existing systems, algorithm transparency, and ensuring unbiased, equitable care.",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Diagnostics.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-8">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Diagnostics</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 w-full whitespace-pre-line mt-4">
                Transforming healthcare with rapid, accurate disease detection, automated image analysis, and actionable insights for professionals.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a
                  href="mailto:sureshbeekhani26@gmail.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
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

      {/* Main Content Section */}
      <section className="relative w-full flex items-center justify-center overflow-hidden bg-white/90 border-b border-blue-100">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
                <img
                  src="/image/pages_img/AI-Diagnostics-in.jpg"
                  alt="AI in Diagnostics Illustration"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                AI in <span className="text-green-700">Diagnostics</span>
              </h2>
              <p className="text-xl text-gray-800 max-w-2xl">
                <span className="font-semibold text-green-700">Deep learning</span> and <span className="font-semibold text-blue-700">predictive analytics</span> are revolutionizing diagnostics—enabling early disease detection, automating workflows, and supporting clinical decisions.
              </p>
              <p className="text-lg text-gray-700 max-w-2xl">
                From medical imaging to real-time patient monitoring, AI empowers providers to deliver faster, more accurate, and personalized care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities and Benefits Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/95 via-blue-900/95 to-blue-800/95">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-white">Capabilities & Benefits</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the key advantages of implementing AI and ML in diagnostics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Speed and Accuracy */}
            <BenefitCard
              iconBg="bg-green-300/20"
              iconColor="text-green-300"
              title="Speed & Accuracy"
              description="AI delivers rapid and highly accurate diagnostic results, reducing wait times and improving patient outcomes."
              svgPath={<>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
                <circle cx="12" cy="12" r="3" />
              </>}
            />
            {/* Cost Efficiency */}
            <BenefitCard
              iconBg="bg-blue-300/20"
              iconColor="text-blue-300"
              title="Cost Efficiency"
              description="AI reduces diagnostic costs by automating processes and optimizing resource use in healthcare settings."
              svgPath={<>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
              </>}
            />
            {/* Early Detection */}
            <BenefitCard
              iconBg="bg-green-300/20"
              iconColor="text-green-300"
              title="Early Detection"
              description="AI enables early detection of diseases, allowing for timely intervention and improved prognosis."
              svgPath={<>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
              </>}
            />
            {/* Scalability */}
            <BenefitCard
              iconBg="bg-blue-300/20"
              iconColor="text-blue-300"
              title="Scalability"
              description="AI-powered diagnostics can be deployed at scale, supporting large populations and remote areas."
              svgPath={<>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
              </>}
            />
            {/* Consistency */}
            <BenefitCard
              iconBg="bg-green-300/20"
              iconColor="text-green-300"
              title="Consistency"
              description="AI ensures consistent diagnostic quality, minimizing variability between practitioners and facilities."
              svgPath={<>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
              </>}
            />
            {/* Decision Support */}
            <BenefitCard
              iconBg="bg-blue-300/20"
              iconColor="text-blue-300"
              title="Decision Support"
              description="AI provides clinicians with evidence-based recommendations, supporting better diagnostic and treatment decisions."
              svgPath={<>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </>}
            />
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
            <h2 className="text-3xl font-bold text-blue-900">
              AI Diagnostics Use Cases
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Explore how AI is revolutionizing diagnostics across healthcare and industry
            </p>
          </div>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous use cases"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next use cases"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Content Carousel */}
            <div className="flex space-x-8 px-16 overflow-x-auto scrollbar-hide">
              {useCases.slice(currentIndex, currentIndex + 3).map((useCase) => (
                <div
                  key={useCase.id}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={useCase.image}
                      alt={useCase.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-blue-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/95 via-blue-900/95 to-blue-800/95">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-white">Why Choose Me</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Proven expertise and track record in AI Diagnostics development and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 3+ Years of Experience */}
            <StatCard
              value="3+"
              label="Years of Experience"
              description="Over 3 years of hands-on experience in AI Diagnostics, delivering impactful solutions for healthcare and industry."
              color="green"
            />
            {/* 20+ Diagnostics Projects */}
            <StatCard
              value="20+"
              label="Diagnostics Projects"
              description="Successfully delivered 20+ AI Diagnostics projects, each tailored to unique clinical and operational needs."
              color="green"
            />
            {/* 30+ AI Models Built */}
            <StatCard
              value="30+"
              label="AI Models Built"
              description="Developed 30+ custom AI models for medical imaging, predictive analytics, and workflow automation."
              color="green"
            />
            {/* 10+ Happy Clients */}
            <StatCard
              value="10+"
              label="Happy Clients"
              description="Partnered with 10+ healthcare organizations, delivering measurable improvements in diagnostic accuracy and efficiency."
              color="green"
            />
            {/* Global Reach */}
            <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
              <span className="text-3xl text-green-600">
                <svg className="w-8 h-8 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-blue-900">Global Reach</h3>
              <p className="text-gray-700 text-sm">
                Providing AI Diagnostics solutions to clients and organizations worldwide, supporting scalable and accessible healthcare.
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
              <h2 className="text-3xl font-bold text-blue-900">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-gray-600 transform transition-transform duration-200 ${openFAQ === faq.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`px-6 pb-4 text-gray-700 transition-all duration-300 ${openFAQ === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                  aria-hidden={openFAQ !== faq.id}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// BenefitCard component for Capabilities section
const BenefitCard = ({ iconBg, iconColor, title, description, svgPath }: any) => (
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className={`flex-shrink-0 w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center group-hover:bg-opacity-40 transition-colors`}>
        <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {svgPath}
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
        <p className="text-gray-200 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

// StatCard component for Why Choose Me section
const StatCard = ({ value, label, description, color }: any) => (
  <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center text-center space-y-3">
    <span className={`text-4xl font-extrabold text-${color}-600`}>{value}</span>
    <h3 className="text-lg font-bold text-blue-900">{label}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

export default DiagnosticsAI; 