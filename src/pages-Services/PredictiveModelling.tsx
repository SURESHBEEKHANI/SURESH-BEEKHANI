import React, { useState, useEffect } from "react";
import { Brain, BarChart3, Target, Users, TrendingUp, Code, ArrowRight, CheckCircle, Shield, Globe, Zap, MessageSquare, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";


// Predictive Modelling Services
const pmServices = [
	{
		id: 1,
		title: "Demand Forecasting",
		description:
			"Predict customer demand, sales trends, and market fluctuations using advanced time series analysis and regression models for optimal inventory and resource planning.",
		icon: <TrendingUp className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 2,
		title: "Customer Behavior Prediction",
		description:
			"Anticipate customer preferences, churn risks, and purchasing patterns by analyzing behavioral data for targeted marketing and retention strategies.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-emerald-500 to-teal-500"
	},
	{
		id: 3,
		title: "Risk Assessment & Classification",
		description:
			"Classify and assess business risks, credit scores, and investment opportunities using AI-powered classification models for informed decision-making.",
		icon: <Target className="h-7 w-7" />,
		color: "from-violet-500 to-purple-500"
	},
	{
		id: 4,
		title: "Anomaly & Fraud Detection",
		description:
			"Identify unusual patterns, fraudulent activities, and operational anomalies in real-time to protect your business and ensure compliance.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-rose-500 to-pink-500"
	},
	{
		id: 5,
		title: "Market Trend Analysis",
		description:
			"Analyze market trends, competitor movements, and industry shifts to forecast opportunities and threats for strategic business planning.",
		icon: <CheckCircle className="h-7 w-7" />,
		color: "from-amber-500 to-orange-500"
	},
	{
		id: 6,
		title: "Operational Optimization",
		description:
			"Predict resource requirements, staffing needs, and operational bottlenecks to optimize business processes and improve efficiency.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-cyan-500 to-blue-500"
	},
];



const pmSolutions = [
	{
		key: "PredictAI",
		name: "PredictAI",
		description: (
			<>
				PredictAI delivers advanced predictive analytics, enabling businesses to forecast trends, optimize operations, and make data-driven decisions with confidence.
			</>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/Predictive-Analytics-Services.jpg",
	},
	{
		key: "ForecastPro",
		name: "ForecastPro",
		description: (
			<>
				ForecastPro provides comprehensive time series forecasting and demand prediction capabilities for strategic planning and resource optimization.
			</>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/Predictive-Modelling.jpg",
	},
	{
		key: "RiskGuard",
		name: "RiskGuard",
		description: (
			<>
				RiskGuard offers sophisticated risk assessment and anomaly detection to protect your business from potential threats and operational disruptions.
			</>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/PredictiveAnalytics.jpg",
	},
];

const faqData = [
	{
		question: "What is predictive modeling and forecasting?",
		answer: "Predictive modeling and forecasting use historical data and advanced analytics to anticipate future outcomes. These methods empower organizations to stay ahead of trends, make informed decisions, and achieve better business results.",
	},
	{
		question: "Why is predictive analytics important?",
		answer: "Predictive analytics enables organizations to make smarter, data-driven decisions, anticipate opportunities and risks, optimize resources, and gain a sustainable competitive advantage.",
	},
	{
		question: "What is the difference between machine learning and predictive analytics?",
		answer: "Machine learning is a core component of predictive analytics. While predictive analytics leverages statistical methods and historical data to forecast outcomes, machine learning uses algorithms that continuously learn and improve from data, delivering even greater predictive accuracy.",
	},
	{
		question: "Will a predictive analytics tool bring value to my company?",
		answer: "Absolutely. Predictive analytics uncovers actionable insights, reveals trends, improves decision-making, streamlines operations, reduces risk, and enhances customer satisfaction, delivering measurable business value.",
	},
	{
		question: "What are predictive modeling techniques?",
		answer: "Key predictive modeling techniques include linear and logistic regression, decision trees, random forests, support vector machines, neural networks, time series analysis, and ensemble methods. Each technique is chosen to best address your unique business challenges and data landscape.",
	},
];

const PredictiveModelling: React.FC = () => {
	const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="min-h-screen ai-section flex flex-col">
			<Navbar />
			
			{/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Predictive-Modelling.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-white space-y-6 sm:space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
              Predictive Modeling
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
              Transform your business with AI-powered predictive analytics. Anticipate trends, optimize operations, <br /> and make data-driven decisions through intelligent forecasting.
            </p>
          </div>
        </div>
      </section>

      {/* Predictive Modeling Capabilities Section */}
      <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: PM Image */}
            <div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                  <img
                    src="/image/pages_img/Predictive-Analytics-Services.jpg"
                    alt="The Power of Predictive Modeling"
                    className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            {/* Right: Content */}
            <div className={`space-y-6 order-1 lg:order-2 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  The Power of <span className="gradient-text-ai">Predictive Analytics</span>
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Transform your business with AI-driven predictive modeling. Our industry-agnostic solutions enable organizations to forecast trends, identify opportunities, and optimize operations for better business results.
                </p>
                <p>
                  Our AI experts seamlessly integrate predictive analytics into business workflows, empowering decision-makers with actionable insights for strategic planning, resource allocation, and data-driven strategies.
                </p>
                <p>
                  From retail and finance to manufacturing and technology, our predictive modeling transforms how organizations operate and compete. Partner with us to advance the future of your business.
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
              Predictive Analytics Services
            </h2>
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
              Intelligent forecasting solutions for modern business operations and data-driven decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {pmServices.map((service, index) => (
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

      {/* Key Features Infographic Section (Linear Flow Style) */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Predictive Analytics <span className="gradient-text-ai">Features</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Intelligent forecasting features that enhance <span className="text-slate-900 font-bold">business operations</span> and decision-making.
            </p>
          </div>
          <div className="relative px-4">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10">
              {[
                { title: "Reliability", desc: "Our AI models are validated for business accuracy, delivering trustworthy predictions.", icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#00b894", textSide: "above" },
                { title: "Customization", desc: "Tailored models to your business workflows and unique industry needs.", icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#ff7675", textSide: "above" },
                { title: "Rapid Deployment", desc: "Accelerate implementation for faster time-to-value for operational improvements.", icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#fbc531", textSide: "above" },
                { title: "Explainable AI", desc: "Transparent models provide clear reasoning that decision-makers can trust.", icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />, color: "#0984e3", textSide: "above" }
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
      <section className="bg-[#01010c] relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Implementation <span className="gradient-text-ai">Process</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Proven methodology for deploying <span className="text-gray-100 font-bold">secure intelligent solutions</span> in business environments.
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
                { id: "01", title: "Data Integration", desc: "Securely integrate with your business systems and prepare datasets.", color: "bg-[#e23126]" },
                { id: "02", title: "Model Selection", desc: "Select the optimal architecture based on use case and industry.", color: "bg-[#9068d4]" },
                { id: "03", title: "Business Validation", desc: "Rigorously train and validate models to ensure predictive accuracy.", color: "bg-[#3eb37c]" }
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
                      <BarChart3 className="w-20 h-20 sm:w-32 sm:h-32 text-white opacity-95" strokeWidth={1.2} />
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
                { id: "04", title: "Deployment", desc: "Seamlessly deploy into workflows with real-time monitoring.", color: "bg-[#3eb37c]" },
                { id: "05", title: "Optimization", desc: "Continuous improvement based on real-world business outcomes.", color: "bg-[#9068d4]" },
                { id: "06", title: "Governance", desc: "Implement frameworks and continuously refine for long-term success.", color: "bg-[#e23126]" }
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
                  <img src="/image/pages_img/PredictiveAnalytics.jpg" alt="Predictive Analytics Workspace" className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
            <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              {[
                { num: "01", title: "Industry Expertise", desc: "Specialized team with deep understanding of business workflows and industry regulations.", color: "bg-[#e23126]" },
                { num: "02", title: "Enterprise-Grade Solutions", desc: "Custom AI solutions designed for business environments with operational excellence.", color: "bg-[#9068d4]" },
                { num: "03", title: "Compliance & Security", desc: "Enterprise-compliant architecture with robust security measures protecting business data.", color: "bg-[#3eb37c]" },
                { num: "04", title: "Proven Track Record", desc: "Organizations achieving improved outcomes and operational efficiency across industries.", color: "bg-[#f39c12]" }
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

      <AIOnboardingProcess serviceName="analytics" />

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="flex justify-center mb-2">
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
              Common questions about predictive analytics implementation.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, idx) => (
              <details key={idx} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
                  {faq.question}
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
                  <span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
                </summary>
                <div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
			
			<Footer />
		</div>
	);
};

export default PredictiveModelling;
