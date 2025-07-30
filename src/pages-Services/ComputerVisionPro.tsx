import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cvServices = [
  {
    id: 1,
    title: "Image Recognition & Classification",
    description:
      "Automatically identify and classify objects in images for a variety of business applications.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 2,
    title: "Object Detection",
    description:
      "Detect and locate multiple objects in images and video streams in real time.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 3,
    title: "Facial Recognition",
    description:
      "Enable secure authentication and personalized experiences with facial recognition technology.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 4,
    title: "Video Analytics",
    description:
      "Analyze video feeds for security, safety, and operational insights.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 5,
    title: "Optical Character Recognition (OCR)",
    description:
      "Extract text from images and scanned documents with high accuracy.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 6,
    title: "Medical Image Analysis",
    description:
      "Leverage AI to analyze medical images for diagnostics and research.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
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

const faqData = [
  {
    question: "What is Computer Vision?",
    answer: "Computer vision is a field of AI that enables computers to interpret and understand visual information from the world, such as images and videos.",
  },
  {
    question: "How can computer vision benefit my business?",
    answer: "Computer vision can automate visual inspection, enhance security, improve customer experiences, and provide actionable insights from images and videos.",
  },
  {
    question: "Can computer vision solutions be customized for my industry?",
    answer: "Yes, computer vision can be tailored for healthcare, retail, security, finance, and more, ensuring industry-specific value and compliance.",
  },
  {
    question: "Is my data secure with computer vision integrations?",
    answer: "We implement robust security measures and comply with standards like HIPAA and GDPR to ensure your data is protected.",
  },
  {
    question: "How do I get started with computer vision integration?",
    answer: "Contact us for a consultation. We'll assess your needs, propose a solution, and guide you through seamless integration.",
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("VisionAI");

  const solution = cvSolutions.find((s) => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Computer-Vision.avif')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-8">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Computer <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Vision</span>
              </h1>
              <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
              Empower your business with next-generation computer vision solutions driving innovation in security, automation, medical imaging, facial recognition, and quality assurance for superior accuracy and efficiency.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
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


      {/* Computer Vision Capabilities Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: CV Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
                <img
                  src="/image/pages_img/Power-Computer-Vision.avif"
                  alt="The Power of Computer Vision"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                The Power of Computer Vision
              </h2>
              <p className="text-base text-gray-700 max-w-2xl">
                Unlock transformative opportunities with advanced computer vision. Our tailored solutions enable computers to interpret, analyze, and act on visual data fueling smarter automation, enhanced security, and actionable insights.
              </p>
              <p className="text-base text-gray-700 max-w-2xl">
                Our dedicated experts seamlessly integrate and customize computer vision technologies to your unique needs, empowering data-driven decisions and operational excellence.
              </p>
              <p className="text-base text-gray-700 max-w-2xl">
                From healthcare and retail to security and beyond, computer vision redefines how you serve customers and grow your business. Partner with us to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Advanced Computer Vision Services
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Intelligent automation solutions for today's dynamic business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Object Detection */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Target Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Object Detection</h3>
              <p className="text-gray-800 text-center">Accurately identify and locate items in images and video with state-of-the-art detection technology.</p>
            </div>
            {/* Facial Recognition */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Face Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9a3 3 0 0 1-6 0"/><path d="M9 15s1.5 2 3 2 3-2 3-2"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Facial Recognition</h3>
              <p className="text-gray-800 text-center">Secure authentication and personalized experiences with advanced facial recognition technology.</p>
            </div>
            {/* Image Segmentation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Layers Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Image Segmentation</h3>
              <p className="text-gray-800 text-center">Segment images into meaningful regions for deeper analysis and actionable insights.</p>
            </div>
            {/* Optical Character Recognition (OCR) */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Text Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Optical Character Recognition (OCR)</h3>
              <p className="text-gray-800 text-center">Extract text from images and video with high-accuracy OCR powered by deep learning.</p>
            </div>
            {/* Scene Reconstruction */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 shadow-xl border border-purple-200 flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* 3D Cube Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 8v8M8 8v8M3 12h18"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Scene Reconstruction</h3>
              <p className="text-gray-800 text-center">Reconstruct detailed 3D models from visual input for immersive experiences and analytics.</p>
            </div>
            {/* Video Analysis */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 shadow-xl border border-pink-200 flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Video Icon */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="15" height="10" rx="2"/><polygon points="20 7 23 9.5 23 14.5 20 17 20 7"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Video Analysis</h3>
              <p className="text-gray-800 text-center">Gain real-time insights from video streams using AI-powered analysis and pattern detection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Vision Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Computer Vision Benefits
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Intelligent automation solutions for today's dynamic business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Accuracy */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Target Icon */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Accuracy</h3>
              <p className="text-gray-800 text-center">Exceptional precision in object detection and localization for reliable decisions.</p>
            </div>
            {/* Scalability */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Layers Icon */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Scalability</h3>
              <p className="text-gray-800 text-center">Scale from pilot projects to enterprise-wide deployments seamlessly.</p>
            </div>
            {/* Flexibility */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Settings Icon */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 3 12.9V12a2 2 0 1 1 0-4v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 12 3.6V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1.51 1c.26 0 .52-.09.74-.26l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09A1.65 1.65 0 0 0 21 12v.09a1.65 1.65 0 0 0-1 1.51z"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Flexibility</h3>
              <p className="text-gray-800 text-center">Customize every aspect to perfectly align with your business objectives.</p>
            </div>
            {/* Increase Civilian Safety */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-2 mx-auto">
                {/* Shield Icon */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Increase Civilian Safety</h3>
              <p className="text-gray-800 text-center">Monitor and analyze activities in real time for enhanced public safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Industries We Work With
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Tailored computer vision solutions across diverse industry verticals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-2xl">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative border-b border-r border-white/30 min-h-[180px] flex items-center justify-center cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndustry(industry.name)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-300 z-0"
                />
                {/* Default dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10 z-10 transition-all duration-300 group-hover:opacity-0"></div>
                {/* Hover overlay with content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'rgba(23, 37, 84, 0.9)'}}>
                  <div className="text-2xl font-bold text-white mb-4">{industry.name}</div>
                  <div className="text-white text-base font-normal mb-4">{industry.description}</div>
                  <a href={industry.page} className="inline-flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform">Learn More <span aria-hidden="true">→</span></a>
                </div>
                {/* Default industry name (only visible when not hovered) */}
                <div className="relative z-20 text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Computer Vision Integration Platforms
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Leverage industry-leading platforms for robust computer vision implementations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {platforms.map((platform) => (
              <div className="flex flex-col items-center" key={platform.name}>
                <img src={platform.image} alt={platform.name} className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
                <span className="mt-3 text-blue-900 font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The development process of Computer Vision integration */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Computer Vision Development Process
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Streamlined approach to implementing computer vision solutions with proven methodology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Define the use case */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white mb-2">
                {/* Target/Bullseye Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Define Use Case</span>
              <p className="text-gray-800 text-center">Pinpoint your business challenge to maximize computer vision impact.</p>
            </div>
            {/* Data collection & preparation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white mb-2">
                {/* Database Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Data Collection</span>
              <p className="text-gray-800 text-center">Curate high-quality image and video data for optimal performance.</p>
            </div>
            {/* Development & integration */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white mb-2">
                {/* Code/Development Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Development</span>
              <p className="text-gray-800 text-center">Embed computer vision capabilities into your applications.</p>
            </div>
            {/* Deployment & monitoring */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white mb-2">
                {/* Monitor/Analytics Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10v4M15 8v8"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Deployment</span>
              <p className="text-gray-800 text-center">Deploy with confidence and monitor performance for improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Trusted expertise and proven results for your computer vision implementation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expertise */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white mb-2">
                {/* Star/Expertise Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Expertise</span>
              <p className="text-gray-800 text-center">Work with seasoned professionals ensuring your project's success.</p>
            </div>
            {/* Custom Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white mb-2">
                {/* Puzzle/Custom Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Custom Solutions</span>
              <p className="text-gray-800 text-center">Bespoke computer vision integrations for your unique business goals.</p>
            </div>
            {/* End-to-End Support */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white mb-2">
                {/* Support/Headset Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">End-to-End Support</span>
              <p className="text-gray-800 text-center">Comprehensive support from strategy to deployment and optimization.</p>
            </div>
            {/* Proven Results */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white mb-2">
                {/* Trophy/Results Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
              </span>
              <span className="font-bold text-gray-900 text-lg text-center">Proven Results</span>
              <p className="text-gray-800 text-center">Join clients who have achieved measurable business impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Common questions about computer vision implementation and our services.
            </p>
          </div>
          <div className="space-y-3">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col transition-all duration-300 hover:scale-[1.01]"
              >
                <button
                  className="w-full flex items-center justify-between focus:outline-none group"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  aria-expanded={openFAQ === idx}
                >
                  <span className="font-semibold text-base text-gray-900 text-left group-hover:text-blue-700 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className="flex items-center justify-center w-5 h-5 text-blue-900 group-hover:text-cyan-700 transition-colors duration-200">
                    {openFAQ === idx ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </button>
                {openFAQ === idx && (
                  <div className="pt-2 text-gray-800 animate-fade-in text-sm">
                    {faq.answer}
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