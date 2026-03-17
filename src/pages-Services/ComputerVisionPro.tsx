import React, { useState, useEffect } from "react";
import { Eye, Target, Users, Video, FileText, Brain, ArrowRight, CheckCircle, Shield, Globe, Zap, MessageSquare, Mail, TrendingUp } from "lucide-react";
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

const categorizedPlatforms = [
  { name: "OpenAI", image: "/image/skills_img/openai.jpg", category: "models" },
  { name: "Claude", image: "/image/skills_img/Claude.png", category: "models" },
  { name: "Gemini", image: "/image/skills_img/Gemini.png", category: "models" },
  { name: "DeepSeek", image: "/image/skills_img/deepseek.png", category: "models" },
  { name: "Groq", image: "/image/skills_img/groq.png", category: "models" },
  { name: "Llama", image: "/image/skills_img/llama.png", category: "models" },
  { name: "Mistral", image: "/image/skills_img/mistral.png", category: "models" },
  { name: "Hugging Face", image: "/image/skills_img/huggingface.png", category: "models" },
  { name: "Transformers", image: "/image/skills_img/transformers.png", category: "frameworks" },
  { name: "LangChain", image: "/image/skills_img/langchain.png", category: "frameworks" },
  { name: "LangGraph", image: "/image/skills_img/langgraph.png", category: "frameworks" },
  { name: "LangSmith", image: "/image/skills_img/Langsimth.png", category: "frameworks" },
  { name: "CrewAI", image: "/image/skills_img/crewai.png", category: "frameworks" },
  { name: "AutoGen", image: "/image/skills_img/autogen.png", category: "frameworks" },
  { name: "MCP", image: "/image/skills_img/mcp.png", category: "frameworks" },
  { name: "TensorFlow", image: "/image/skills_img/tensorflow.png", category: "ml" },
  { name: "PyTorch", image: "/image/skills_img/pytorch.png", category: "ml" },
  { name: "Scikit-learn", image: "/image/skills_img/sikitlearn.png", category: "ml" },
  { name: "MLflow", image: "/image/skills_img/mlflow.svg", category: "ml" },
  { name: "DVC", image: "/image/skills_img/dvc.png", category: "ml" },
  { name: "NumPy", image: "/image/skills_img/numpy.png", category: "data" },
  { name: "Pandas", image: "/image/skills_img/pandas.png", category: "data" },
  { name: "Matplotlib", image: "/image/skills_img/matplot.png", category: "data" },
  { name: "Seaborn", image: "/image/skills_img/seaborn.svg", category: "data" },
  { name: "Plotly", image: "/image/skills_img/plotly.jpg", category: "data" },
  { name: "Power BI", image: "/image/skills_img/Powerbi.png", category: "data" },
  { name: "Tableau", image: "/image/skills_img/tableau.png", category: "data" },
  { name: "OpenCV", image: "/image/skills_img/opencv.png", category: "vision" },
  { name: "YOLOv5", image: "/image/skills_img/yolov5.png", category: "vision" },
  { name: "Ultralytics", image: "/image/skills_img/Ultratics.png", category: "vision" },
  { name: "Detectron2", image: "/image/skills_img/detectron2.png", category: "vision" },
  { name: "Roboflow", image: "/image/skills_img/roboflow.png", category: "vision" },
  { name: "PaddleOCR", image: "/image/skills_img/paddleocr.png", category: "vision" },
  { name: "Tesseract", image: "/image/skills_img/tesseract.png", category: "vision" },
  { name: "BERT", image: "/image/skills_img/bert.png", category: "nlp" },
  { name: "NLTK", image: "/image/skills_img/nltk.png", category: "nlp" },
  { name: "spaCy", image: "/image/skills_img/spacy.png", category: "nlp" },
  { name: "Gensim", image: "/image/skills_img/gensim.jpg", category: "nlp" },
  { name: "TextBlob", image: "/image/skills_img/textblob.jpg", category: "nlp" },
  { name: "Pinecone", image: "/image/skills_img/pinecone.png", category: "infra" },
  { name: "Qdrant", image: "/image/skills_img/quadrant.png", category: "infra" },
  { name: "AWS", image: "/image/skills_img/aws.png", category: "infra" },
  { name: "Docker", image: "/image/skills_img/docker.png", category: "infra" },
  { name: "Linux", image: "/image/skills_img/liunx.png", category: "infra" },
  { name: "Git", image: "/image/skills_img/git.png", category: "infra" },
  { name: "GitHub", image: "/image/skills_img/GitHub.jpg", category: "infra" },
  { name: "FastAPI", image: "/image/skills_img/fastapi.png", category: "infra" },
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
    icon: <Mail className="h-8 w-8" />,
    title: 'Contact Us',
    description: 'Reach out to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.',
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Consultation & Discovery',
    description: 'Schedule a professional consultation with our experts. We\'ll discuss your project in detail, assess feasibility, and provide strategic recommendations.',
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Receive a Detailed Proposal',
    description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate.',
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Project Kickoff & Delivery',
    description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring smooth, successful delivery.',
    color: "from-purple-500 to-violet-500"
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
      <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: CV Image */}
            <div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                  <img
                    src="/image/pages_img/Power-Computer-Vision.avif"
                    alt="The Power of Computer Vision"
                    className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            {/* Right: Content */}
            <div className={`space-y-6 order-1 lg:order-2 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  The Power of <span className="gradient-text-ai">Computer Vision</span>
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-14 ai-section">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-white">
              Computer Vision Services
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
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
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white`}>
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
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Computer Vision <span className="gradient-text-ai">Benefits</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Transforming business operations through <span className="text-slate-900 font-bold">AI-powered visual intelligence</span> and automation.
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

      {/* Platforms Section */}
      <section className="py-10 sm:py-14 bg-white relative">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-2 mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
              Computer Vision Technology Stack
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
              Industry-leading platforms optimized for visual AI and intelligent automation.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 overflow-hidden py-4 -mx-4 sm:mx-0 relative">
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDuration: '60s' }}>
                {[...categorizedPlatforms.slice(0, Math.ceil(categorizedPlatforms.length / 2)), ...categorizedPlatforms.slice(0, Math.ceil(categorizedPlatforms.length / 2))].map((platform, index) => (
                  <div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row1-${platform.name}-${index}`}>
                    <img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                    <span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDirection: 'reverse', animationDuration: '70s' }}>
                {[...categorizedPlatforms.slice(Math.ceil(categorizedPlatforms.length / 2)), ...categorizedPlatforms.slice(Math.ceil(categorizedPlatforms.length / 2))].map((platform, index) => (
                  <div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row2-${platform.name}-${index}`}>
                    <img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                    <span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* AI Implementation Process (Pill-Style Infographic) */}
      <section className="bg-[#01010c] relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              AI Implementation <span className="gradient-text-ai">Process</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Proven methodology for deploying <span className="text-gray-100 font-bold">secure, intelligent computer vision solutions</span>.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-0">
            <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="connectorGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <style>{`
                    @keyframes flow-dash {
                      to { stroke-dashoffset: -10; }
                    }
                    .connector-path {
                      stroke-dasharray: 2 3;
                      animation: flow-dash 1.5s linear infinite;
                    }
                  `}</style>
                </defs>
                <path d="M 33 18 Q 41.5 18 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 33 50 L 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 33 82 Q 41.5 82 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 67 18 Q 58.5 18 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 67 50 L 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
                <path d="M 67 82 Q 58.5 82 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
              </svg>
              <div className="absolute top-[18%] left-[33.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[50%] left-[33.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[82%] left-[33.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[18%] left-[66.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[50%] left-[66.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <div className="absolute top-[82%] left-[66.5%] w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6] animate-pulse" />
            </div>
            {/* Left Cards */}
            <div className="flex flex-col gap-10 w-full lg:w-1/3 order-1 items-center lg:items-end">
              {[
                { id: "01", title: "Business Assessment", desc: "Identify workflows where computer vision delivers maximum operational impact.", color: "bg-[#e23126]" },
                { id: "02", title: "Secure Design", desc: "Design robust, scalable vision architecture ensuring data security and compliance.", color: "bg-[#9068d4]" },
                { id: "03", title: "Validation & Testing", desc: "Vision models trained and rigorously tested to ensure accuracy and alignment.", color: "bg-[#3eb37c]" }
              ].map((step, idx) => (
                <div key={step.id} className={`group relative flex items-center justify-end w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="flex w-full flex-row-reverse lg:flex-row items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="flex-grow py-4 sm:py-6 px-6 sm:px-8 text-left lg:text-right">
                      <h4 className="font-bold text-gray-100 text-sm sm:text-base leading-tight tracking-tight mb-1">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-tight line-clamp-2">{step.desc}</p>
                    </div>
                    <div className={`w-16 sm:w-20 h-[60px] sm:h-[80px] ${step.color} flex items-center justify-center rounded-r-[40px] lg:rounded-r-none lg:rounded-l-[40px] sm:rounded-r-[60px] sm:lg:rounded-r-none sm:lg:rounded-l-[60px] shadow-lg`}>
                      <span className="text-white font-black text-lg sm:text-xl tracking-tighter">{step.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Central Brain Hub */}
            <div className="relative w-full lg:w-1/3 flex justify-center order-2">
              <div className={`relative w-64 h-64 sm:w-[400px] sm:h-[400px] flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <div className="absolute inset-0 rounded-full border-[10px] sm:border-[16px] border-transparent border-t-[#e23126] border-r-[#9068d4] border-b-[#3eb37c] border-l-blue-500 animate-[spin_12s_linear_infinite] opacity-40"></div>
                <div className="absolute inset-6 sm:inset-10 rounded-full border-2 sm:border-4 border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]"></div>
                <div className="w-44 h-44 sm:w-64 sm:h-64 bg-slate-900 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-[6px] sm:border-[10px] border-white/5 flex items-center justify-center z-10 p-3 sm:p-5">
                  <div className="w-full h-full rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 shadow-inner">
                    <div className="relative">
                      <Eye className="w-20 h-20 sm:w-32 sm:h-32 text-white opacity-95" strokeWidth={1.2} />
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl scale-110 -z-10 opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 sm:w-5 h-10 sm:h-16 bg-[#e23126] rounded-full -translate-y-4 shadow-[0_0_20px_#e23126] opacity-80"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 sm:w-5 h-10 sm:h-16 bg-[#3eb37c] rounded-full translate-y-4 shadow-[0_0_20px_#3eb37c] opacity-80"></div>
              </div>
            </div>
            {/* Right Cards */}
            <div className="flex flex-col gap-10 w-full lg:w-1/3 order-3 items-center lg:items-start">
              {[
                { id: "04", title: "Deployment & Optimization", desc: "Seamless integration into workflows with ongoing monitoring and optimization.", color: "bg-[#3eb37c]" },
                { id: "05", title: "Change Management", desc: "Empower your team with training and support for smooth adoption of AI vision tools.", color: "bg-[#9068d4]" },
                { id: "06", title: "Governance & Improvement", desc: "Implement governance frameworks and continuously refine for long-term success.", color: "bg-[#e23126]" }
              ].map((step, idx) => (
                <div key={step.id} className={`group relative flex items-center justify-start w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: `${(idx + 3) * 0.1}s` }}>
                  <div className="flex w-full items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className={`w-16 sm:w-20 h-[60px] sm:h-[80px] ${step.color} flex items-center justify-center rounded-r-[40px] sm:rounded-r-[60px] shadow-lg`}>
                      <span className="text-white font-black text-lg sm:text-xl tracking-tighter">{step.id}</span>
                    </div>
                    <div className="flex-grow py-4 sm:py-6 px-6 sm:px-8 text-left">
                      <h4 className="font-bold text-gray-100 text-sm sm:text-base leading-tight tracking-tight mb-1">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-tight line-clamp-2">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Modern Side-by-Side Layout) */}
      <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center space-y-4 mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose <span className="gradient-text-ai">Us?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Industry expertise with proven results across multiple sectors and use cases.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`relative ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                  <img src="/image/pages_img/Power-Computer-Vision.avif" alt="Computer Vision Workspace" className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
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
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-xl flex items-center justify-center text-white font-black text-sm sm:text-base shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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

      {/* AI Onboarding Process Section */}
      <section className="bg-[#01010c] relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className={`text-center space-y-4 mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              AI Onboarding <span className="gradient-text-ai">Process</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Simple, transparent steps to <span className="text-gray-100 font-bold">launch your computer vision project</span>.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {onboardingSteps.map((step, idx) => (
              <div key={idx} className={`relative group transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 p-6 sm:p-8 text-center transition-all duration-300 h-full">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-600/30">
                  {idx + 1}
                </div>
              </div>
            ))}
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
              Common questions about computer vision implementation and our AI services.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                What is Computer Vision?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Computer vision is AI technology that enables machines to interpret and understand visual information from images and videos. It powers applications like object detection, facial recognition, quality inspection, and automated visual analysis across industries.</div>
            </details>
            {/* FAQ 2 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How can computer vision benefit my business?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Computer vision automates visual tasks, improves quality control, enhances security monitoring, enables real-time analytics, reduces manual labor, and provides actionable insights from visual data—driving efficiency and cost savings across operations.</div>
            </details>
            {/* FAQ 3 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                What types of applications can computer vision handle?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Our computer vision solutions handle object detection and tracking, facial recognition, image classification, OCR and document processing, quality inspection, defect detection, video analytics, security surveillance, and automated visual analysis across manufacturing, retail, security, and more.</div>
            </details>
            {/* FAQ 4 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                Is your computer vision solution secure?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Yes, all our computer vision solutions are built with enterprise-grade security. We implement robust encryption, access controls, secure data handling, and compliance with industry standards (GDPR, SOC 2) to protect your visual data and business information.</div>
            </details>
            {/* FAQ 5 */}
            <details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                How do I get started with computer vision?
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
              </summary>
              <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Contact us for a consultation. We'll assess your visual workflows, discuss your business challenges, evaluate integration with your existing systems, and provide a detailed proposal with timeline and implementation roadmap for seamless deployment.</div>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComputerVisionPro; 