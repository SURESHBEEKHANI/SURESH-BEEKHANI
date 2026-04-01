import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, Target, Users, Video, FileText, Brain, ArrowRight, CheckCircle, Shield, Globe, Zap, MessageSquare, Mail, TrendingUp, Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";
import LatestBlogs from "../components/LatestBlogs";

const cvServices = [
  {
    id: 1,
    title: "Image Recognition & Classification",
    description:
      "Automatically identify and classify objects in images for a variety of business applications.",
    icon: <Eye className="h-7 w-7" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Object Detection",
    description:
      "Detect and locate multiple objects in images and video streams in real time.",
    icon: <Target className="h-7 w-7" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Facial Recognition",
    description:
      "Enable secure authentication and personalized experiences with facial recognition technology.",
    icon: <Users className="h-7 w-7" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Video Analytics",
    description:
      "Analyze video feeds for security, safety, and operational insights.",
    icon: <Video className="h-7 w-7" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Optical Character Recognition (OCR)",
    description:
      "Extract text from images and scanned documents with high accuracy.",
    icon: <FileText className="h-7 w-7" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Medical Image Analysis",
    description:
      "Leverage AI to analyze medical images for diagnostics and research.",
    icon: <Brain className="h-7 w-7" />,
    color: "from-teal-500 to-cyan-500"
  },
];





const cvSolutions = [
  {
    key: "VisionAI",
    name: "VisionAI",
    description: (
      <>
        VisionAI delivers advanced image and video analytics, enabling businesses to extract actionable insights and automate visual tasks at scale.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/AI-Driven-Testing.jpg",
  },
  {
    key: "DocuVision",
    name: "DocuVision",
    description: (
      <>
        DocuVision automates document processing, OCR, and data extraction from scanned files, streamlining workflows and reducing manual effort.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Automated-Product-Tagging.jpg",
  },
  {
    key: "SecureVision",
    name: "SecureVision",
    description: (
      <>
        SecureVision powers real-time surveillance, anomaly detection, and security monitoring with AI-driven video analytics.
      </>
    ),
    cta: "Book a Demo",
    image: "/image/pages_img/Real-Time-Threat-Detection.jpeg",
  },
];


const ComputerVisionPro: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("VisionAI");
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Computer Vision?",
      answer: "Computer vision is AI technology that enables machines to interpret and understand visual information from images and videos. It powers applications like object detection, facial recognition, quality inspection, and automated visual analysis across industries."
    },
    {
      question: "How can computer vision benefit my business?",
      answer: "Computer vision automates visual tasks, improves quality control, enhances security monitoring, enables real-time analytics, reduces manual labor, and provides actionable insights from visual data—driving efficiency and cost savings across operations."
    },
    {
      question: "What types of applications can computer vision handle?",
      answer: "Our computer vision solutions handle object detection and tracking, facial recognition, image classification, OCR and document processing, quality inspection, defect detection, video analytics, security surveillance, and automated visual analysis across manufacturing, retail, security, and more."
    },
    {
      question: "Is your computer vision solution secure?",
      answer: "Yes, all our computer vision solutions are built with enterprise-grade security. We implement robust encryption, access controls, secure data handling, and compliance with industry standards (GDPR, SOC 2) to protect your visual data and business information."
    },
    {
      question: "How do I get started with computer vision?",
      answer: "Contact us for a consultation. We'll assess your visual workflows, discuss your business challenges, evaluate integration with your existing systems, and provide a detailed proposal with timeline and implementation roadmap for seamless deployment."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solution = cvSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen ai-section flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Computer-Vision.avif')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-white space-y-6 sm:space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
              Computer Vision
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
              Transform your business with intelligent computer vision solutions for automation, analytics, <br /> and visual intelligence across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Computer Vision Capabilities Section */}
      <section className="py-8 sm:py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className={`space-y-6 order-1 lg:order-1 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="text-left space-y-3 sm:space-y-4 mb-10">
                <div className="flex flex-col items-start gap-3 sm:gap-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                    The Power of <span className="text-[#ff0ea3]">Computer Vision</span>
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl font-medium leading-relaxed">
                  Transform your business operations with advanced computer vision technology.
                </p>
              </div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed text-left">
                <p>
                  Transform your business operations with advanced computer vision technology. Our AI-powered solutions enable organizations to analyze images and video, detect patterns, automate visual tasks, and extract actionable insights with unprecedented accuracy and speed.
                </p>
                <p>
                  Our AI specialists seamlessly integrate computer vision technologies into your workflows, empowering teams with automated visual inspection, real-time analytics, and intelligent decision support that drives efficiency and innovation.
                </p>
                <p>
                  From manufacturing quality control to retail analytics, security monitoring to document processing, computer vision revolutionizes how businesses operate. Partner with us to unlock visual intelligence and competitive advantage.
                </p>
              </div>

              <div className="pt-4 sm:pt-6">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0ea3] rounded-none hover:bg-[#ff0ea3]/90 hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(255,14,163,0.4)]"
                >
                  <span className="relative flex items-center gap-2">
                    Contact Expert
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>
              </div>
            </div>

            {/* Right: CV Image */}
            <div className={`relative flex justify-center lg:justify-end order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-none shadow-2xl border border-slate-100">
                  <img
                    src="/image/pages_img/Power-Computer-Vision.avif"
                    alt="The Power of Computer Vision"
                    className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
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
                Computer Vision <span className="text-[#ff0ea3]">Services</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Intelligent visual AI solutions transforming business operations across all industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {cvServices.map((service, index) => (
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
                Computer Vision <span className="text-[#ff0ea3]">Benefits</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Transforming business operations through AI-powered visual intelligence and automation.
            </p>
          </div>
          <div className="relative px-4">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10">
              {[
                { title: "Accuracy", desc: "AI-powered precision in visual analysis, reducing errors and improving quality control across operations.", icon: <Eye className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#00b894", textSide: "above" },
                { title: "Speed", desc: "Accelerate visual analysis and decision-making, processing thousands of images in seconds.", icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#ff7675", textSide: "above" },
                { title: "Security", desc: "Secure, compliant AI solutions protecting sensitive data with encryption and access controls.", icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#fbc531", textSide: "above" },
                { title: "Cost Savings", desc: "Automate visual tasks, reduce manual labor, and lower operational costs while improving quality.", icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#0984e3", textSide: "above" }
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
                AI Implementation <span className="text-[#ff0ea3]">Process</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Proven methodology for deploying secure, intelligent computer vision solutions.
            </p>
          </div>
          <div className={`mt-8 sm:mt-12 border border-white/25 rounded-none overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {[
                { id: "01", title: "Business Assessment", desc: "Identify workflows where computer vision delivers maximum operational impact.", color: "#e23126", icon: <Brain className="w-8 h-8" /> },
                { id: "02", title: "Secure Design", desc: "Design robust, scalable vision architecture ensuring data security and compliance.", color: "#9068d4", icon: <Shield className="w-8 h-8" /> },
                { id: "03", title: "Validation & Testing", desc: "Vision models trained and rigorously tested to ensure accuracy and alignment.", color: "#3eb37c", icon: <CheckCircle className="w-8 h-8" /> },
                { id: "04", title: "Deployment & Optimization", desc: "Seamless integration into workflows with ongoing monitoring and optimization.", color: "#3b82f6", icon: <Zap className="w-8 h-8" /> },
                { id: "05", title: "Change Management", desc: "Empower your team with training and support for smooth adoption of AI vision tools.", color: "#f39c12", icon: <Users className="w-8 h-8" /> },
                { id: "06", title: "Governance & Improvement", desc: "Implement governance frameworks and continuously refine for long-term success.", color: "#ff0ea3", icon: <Shield className="w-8 h-8" /> }
              ].map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center justify-center p-6 sm:p-8 relative group transition-all duration-300 hover:bg-white/[0.03]
                    ${index % 3 !== 2 ? 'lg:border-r border-white/25' : ''} 
                    ${index < 3 ? 'lg:border-b border-white/25' : ''}
                    ${index % 2 === 0 ? 'md:max-lg:border-r border-white/25' : ''}
                    ${index < 4 ? 'md:max-lg:border-b border-white/25' : ''}
                    ${index < 5 ? 'max-md:border-b border-white/25' : ''}`}
                >
                  <div className="text-xl sm:text-2xl font-black mb-4 transition-transform duration-500 group-hover:scale-110 tracking-tighter" style={{ color: step.color }}>
                    {step.id}
                  </div>

                  <div className="flex items-center gap-3 w-full justify-center mb-4">
                    <div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}40` }}></div>
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(step.icon as React.ReactElement, { className: 'w-4 h-4', style: { color: step.color } })}
                    </div>
                    <div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}40` }}></div>
                  </div>

                  <h4 className="text-white font-bold text-sm sm:text-base mb-2 text-center group-hover:text-[#ff0ea3] transition-colors">{step.title}</h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed text-center max-w-[240px]">{step.desc}</p>

                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                Why Choose <span className="text-[#ff0ea3]">Velnix Solutions?</span>
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
                  <img src="/image/pages_img/WHY-CHOOSE-US.jpg" alt="Why Choose Us" className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
            <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              {[
                { num: "01", title: "Computer Vision Expertise", desc: "Specialized team with deep understanding of visual AI, object detection, and image processing.", color: "bg-[#e23126]" },
                { num: "02", title: "Custom Solutions", desc: "Tailored computer vision solutions designed for your specific business challenges and requirements.", color: "bg-[#9068d4]" },
                { num: "03", title: "Enterprise Security", desc: "Robust security measures and compliance with industry standards protecting your business data.", color: "bg-[#3eb37c]" },
                { num: "04", title: "Proven Track Record", desc: "Organizations achieving improved accuracy, reduced costs, and enhanced operational efficiency.", color: "bg-[#f39c12]" }
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


      <AIOnboardingProcess serviceName="computer vision" />

      <LatestBlogs />

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2]">
                Frequently Asked <span className="text-[#ff0ea3]">Questions</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Common questions about computer vision implementation and our AI services.
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

export default ComputerVisionPro; 
