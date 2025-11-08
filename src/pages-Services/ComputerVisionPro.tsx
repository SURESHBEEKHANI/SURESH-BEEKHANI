import React, { useState, useEffect } from "react";
import { Eye, Target, Users, Video, FileText, Brain, ArrowRight, CheckCircle, Shield, Globe, Zap, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

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

const industries = [
  {
    name: "Retail",
    image: "/image/pages_img/Customer-Segmentation.jpg",
    description: "Computer vision for retail analytics, shopper behavior, and inventory management.",
    page: "/RetailAI",
  },
  {
    name: "HealthTech",
    image: "/image/pages_img/healthtechai.jpg",
    description: "AI-powered medical image analysis for diagnostics and patient care.",
    page: "/HealthTechAI",
  },
  {
    name: "DiagnosticsAI",
    image: "/image/pages_img/Diagnostics.jpg",
    description: "AI-powered medical image analysis for diagnostics and patient care.",
    page: "/DiagnosticsAI",
  },
  {
    name: "E-Commerce",
    image: "/image/pages_img/E-Commerce.jpg",
    description: "Visual search, product tagging, and personalized shopping experiences.",
    page: "/E-Commerce",
  },
  {
    name: "FinTech",
    image: "/image/pages_img/fintech.jpg",
    description: "Fraud detection and document verification using computer vision.",
    page: "/FinTechAI",
  },
  {
    name: "GreenTech",
    image: "/image/pages_img/greentech.jpg",
    description: "Environmental monitoring and sustainability with vision-based solutions.",
    page: "/GreenTechAI",
  },
  {
    name: "EdTech",
    image: "/image/pages_img/EdTechAI.avif",
    description: "Automated grading and learning analytics using image and video analysis.",
    page: "/EdTechAI",
  },
  {
    name: "HIPAA Compliance",
    image: "/image/pages_img/HIPAA.avif",
    description: "Secure and compliant medical imaging solutions.",
    page: "/HIPAACompliance",
  },
];

const platforms = [
  { name: "OpenCV", image: "/image/skills_img/opencv.png" },
  { name: "YOLOv5", image: "/image/skills_img/yolov5.png" },
  { name: "Detectron2", image: "/image/skills_img/detectron2.png" },
  { name: "TensorFlow", image: "/image/skills_img/tensorflow.png" },
  { name: "PyTorch", image: "/image/skills_img/pytorch.png" },
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


const onboardingSteps = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"/><path d="M16 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Contact Us',
    description: 'Reach out to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
    ),
    title: 'Consultation & Discovery',
    description: 'Schedule a professional consultation with our experts. We’ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
    title: 'Receive a Detailed Proposal',
    description: 'Based on your requirements, we’ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate so you know exactly what to expect.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Project Kickoff & Delivery',
    description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring a smooth, successful delivery from start to finish.',
  },
];

const ComputerVisionPro: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("VisionAI");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solution = cvSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Computer-Vision.avif')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Computer Vision
              </h1>
              <p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
              HIPAA-compliant computer vision solutions for medical imaging, diagnostics, and patient care.
Transform healthcare delivery with AI-powered visual intelligence and clinical decision support.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
                <a
                  href="/#contact"
                  className="btn-primary text-center min-h-[44px] flex items-center justify-center"
                >
                  Talk to AI Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Optionally, you can add an image or illustration here if needed */}
          </div>
        </div>
      </section>


      {/* Computer Vision Capabilities Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: CV Image */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/Power-Computer-Vision.avif"
                  alt="The Power of Computer Vision"
                  className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                The Power of Healthcare Computer Vision
              </h2>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Transform patient care with advanced medical computer vision. Our HIPAA-compliant solutions enable healthcare providers to analyze medical images, detect abnormalities, and support clinical decision-making with unprecedented accuracy and speed.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                Our healthcare AI specialists seamlessly integrate computer vision technologies into clinical workflows, empowering radiologists, pathologists, and clinicians with AI-assisted diagnostics and real-time insights that improve patient outcomes.
              </p>
              <p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
                From radiology and pathology to surgical assistance and patient monitoring, healthcare computer vision revolutionizes medical practice. Partner with us to deliver better care, reduce diagnostic errors, and save lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding ai-section">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">
              Healthcare Computer Vision Services
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
              HIPAA-compliant AI solutions transforming medical imaging and clinical diagnostics.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Medical Anomaly Detection */}
            <div 
              className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Target Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Medical Anomaly Detection</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Detect tumors, lesions, and abnormalities in medical images with clinical-grade AI accuracy for early diagnosis.</p>
            </div>
            {/* Radiology AI Assistant */}
            <div 
              className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Face Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9a3 3 0 0 1-6 0"/><path d="M9 15s1.5 2 3 2 3-2 3-2"/></svg>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Radiology AI Assistant</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">AI-powered analysis of X-rays, CT scans, and MRIs to assist radiologists in faster, more accurate diagnoses.</p>
            </div>
            {/* Pathology Image Analysis */}
            <div 
              className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Layers Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Pathology Image Analysis</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Automated analysis of tissue samples and biopsies for cancer detection and disease classification.</p>
            </div>
            {/* Medical Document Processing */}
            <div 
              className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Text Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Medical Document Processing</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Extract clinical data from medical records, prescriptions, and lab reports with HIPAA-compliant OCR.</p>
            </div>
            {/* Surgical Planning & Guidance */}
            <div 
              className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* 3D Cube Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 8v8M8 8v8M3 12h18"/></svg>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Surgical Planning & Guidance</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">3D reconstruction from medical scans for surgical planning, navigation, and minimally invasive procedures.</p>
            </div>
            {/* Patient Monitoring & Safety */}
            <div 
              className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Video Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="15" height="10" rx="2"/><polygon points="20 7 23 9.5 23 14.5 20 17 20 7"/></svg>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Patient Monitoring & Safety</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Real-time video analysis for patient fall detection, vital sign monitoring, and ICU surveillance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Vision Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Healthcare Computer Vision Benefits
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Transforming patient outcomes through AI-powered medical imaging and clinical intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Diagnostic Accuracy */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Target Icon */}
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Diagnostic Accuracy</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Clinical-grade precision in detecting abnormalities, reducing false positives and improving diagnostic confidence.</p>
            </div>
            {/* Faster Diagnoses */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Zap Icon */}
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Faster Diagnoses</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Accelerate image analysis and reporting, reducing turnaround time from hours to minutes for critical cases.</p>
            </div>
            {/* HIPAA Compliance */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Shield Icon */}
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">HIPAA Compliance</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Secure, compliant AI solutions protecting patient privacy with encryption and access controls.</p>
            </div>
            {/* Improved Patient Outcomes */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
                {/* Heart Icon */}
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Improved Patient Outcomes</h3>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Early disease detection and treatment planning that saves lives and reduces healthcare costs.</p>
            </div>
          </div>
        </div>
      </section>
      <Industries />

      {/* Platforms Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
               ML Technology Stack
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Industry-leading platforms optimized for healthcare imaging and HIPAA compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
            {platforms.map((platform) => (
              <div className="flex flex-col items-center" key={platform.name}>
                <img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2" />
                <span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm md:text-base text-center">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The development process of Computer Vision integration */}
      <section className="section-padding ai-section">
        <div className="max-w-5xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              Healthcare AI Implementation Process
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Proven methodology for deploying secure, compliant medical AI in clinical environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Clinical Assessment */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
                {/* Target/Bullseye Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Assessment</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Identify clinical workflows and diagnostic challenges where AI delivers maximum patient impact.</p>
            </div>
            {/* Medical Data Integration */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
                {/* Database Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Medical Data Integration</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">HIPAA-compliant integration with PACS, EHR systems, and medical imaging databases for model training.</p>
            </div>
            {/* AI Model Development */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
                {/* Code/Development Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">AI Model Development</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Build and validate clinical AI models with healthcare professionals and regulatory standards.</p>
            </div>
            {/* Clinical Deployment */}
            <div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
                {/* Monitor/Analytics Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10v4M15 8v8"/></svg>
              </span>
              <span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Deployment</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Seamless integration into clinical workflows with ongoing monitoring and performance optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Trusted expertise and proven results for your computer vision implementation needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Expertise */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white mb-2">
                {/* Star/Expertise Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Healthcare AI Expertise</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of medical imaging, clinical workflows, and healthcare regulations.</p>
            </div>
            {/* Custom Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-green-200 flex flex-col items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white mb-2">
                {/* Puzzle/Custom Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Clinical-Grade Solutions</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom medical AI solutions designed for healthcare environments with patient safety as priority.</p>
            </div>
            {/* End-to-End Support */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white mb-2">
                {/* Support/Headset Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Regulatory Compliance</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">HIPAA-compliant architecture with FDA guidance adherence and robust security protecting patient data.</p>
            </div>
            {/* Proven Results */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white mb-2">
                {/* Trophy/Results Icon */}
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-base sm:text-lg text-center">Proven Clinical Impact</span>
              <p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare organizations achieving improved diagnostic accuracy and better patient outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="flex justify-center mb-2">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Common questions about healthcare computer vision implementation and our medical AI services.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                What is Healthcare Computer Vision?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Healthcare computer vision is AI technology that analyzes medical images (X-rays, CT scans, MRIs, pathology slides) to assist clinicians in diagnosis, treatment planning, and patient monitoring while maintaining HIPAA compliance.</div>
            </details>
            {/* FAQ 2 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How can healthcare computer vision benefit my practice or hospital?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Healthcare computer vision accelerates diagnosis, improves accuracy in detecting abnormalities, reduces radiologist workload, enables early disease detection, and enhances patient outcomes—all while maintaining HIPAA compliance and patient safety standards.</div>
            </details>
            {/* FAQ 3 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                What types of medical imaging can your AI analyze?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Our healthcare computer vision solutions analyze X-rays, CT scans, MRIs, ultrasounds, mammograms, pathology slides, retinal images, and other DICOM-format medical images across radiology, pathology, cardiology, and ophthalmology specialties.</div>
            </details>
            {/* FAQ 4 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                Is your healthcare computer vision HIPAA compliant?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Yes, all our healthcare AI solutions are built with HIPAA compliance as a foundational requirement. We implement robust encryption, access controls, audit trails, and secure data handling to protect patient privacy and meet regulatory standards including FDA guidance for medical AI.</div>
            </details>
            {/* FAQ 5 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How do I get started with healthcare computer vision?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Contact us for a clinical consultation. We'll assess your imaging workflows, discuss your diagnostic challenges, evaluate integ your PACS/EHR systems, and provide a detailed proposal with timeline and compliance roadmap for seamless implementation.</div>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComputerVisionPro; 