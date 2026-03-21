import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";

const chatbotServices = [
	{
		id: 1,
		title: "AI Chatbot Development",
		description: "End-to-end AI chatbot solutions for businesses across all industries. Our intelligent virtual assistants provide 24/7 customer support, automate inquiries, and enhance user engagement.",
		icon: <MessageSquare className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Customer Engagement Chatbots",
		description: "AI-powered chatbots designed to enhance customer engagement through personalized interactions, proactive support, automated follow-ups, and improved customer satisfaction.",
		icon: <Code className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Secure Chatbot Solutions",
		description: "Enterprise-grade secure chatbots that protect sensitive data while delivering seamless communication. Ensure privacy and regulatory compliance across all customer interactions.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Intelligent Support & Triage Chatbots",
		description: "AI chatbots that assist with customer inquiry assessment, intelligent routing, and automated support. Reduce response times and improve service efficiency.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "E-Commerce & Sales Chatbots",
		description: "Enable seamless online shopping with AI chatbots that facilitate product discovery, order tracking, personalized recommendations, and automated sales support.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "Multi-Channel Chatbots",
		description: "Omnichannel AI chatbots providing consistent support across websites, mobile apps, social media, and messaging platforms for unified customer experiences.",
		icon: <Globe className="h-7 w-7" />,
		color: "from-teal-500 to-cyan-500"
	},
];

const chatbotTypes = [
	{
		id: 1,
		title: "AI Chatbot Engineering",
		description:
			"We specialize in designing and developing advanced AI chatbots using machine learning, deep learning, and neural networks. Our AI chatbots automate tasks, enhance engagement, and drive business growth.",
		image: "/image/pages_img/AI-CHATBOT-DEVELOPMENT.jpg",
	},
	{
		id: 2,
		title: "AI Voice Assistant Chatbots",
		description:
			"Our virtual assistant development provides seamless and hands-free interactions. Our voice assistants can understand and converse with users just like humans, with the help of speech recognition, ML, and NLP.",
		image: "/image/pages_img/ChatGPT-Integrations.jpeg",
	},
	{
		id: 3,
		title: "Medical AI Chatbots",
		description:
			"We develop AI chatbots that provide personalized assistance to doctors and patients with clinical workflows and remote consultations. Our chatbots enhance patient engagement, improve health outcomes, and reduce costs.",
		image: "/image/pages_img/AI-HealthSoft.webp",
	},
	{
		id: 4,
		title: "Legal Chatbots",
		description:
			"Our legal chatbots help law firms and lawyers with client interactions, document review, legal research, and automate other tasks. Our chatbot provides accessible legal services and improves efficiency for both clients and lawyers.",
		image: "/image/pages_img/AI-Diagnostics-in.jpg",
	},
	{
		id: 5,
		title: "Social Media Chatbot Program",
		description:
			"We offer AI chatbots that engage customers and manage customer queries across all social media platforms. Enhance your brand presence, provide 24/7 support, and boost customer loyalty.",
		image: "/image/pages_img/Customer-Service-Chatbots.jpg",
	},
	{
		id: 6,
		title: "Vision-based Chatbots",
		description:
			"We develop next-generation AI-powered chatbots that use computer vision and analyze visual inputs for enhanced understanding. Our chatbots provide context-aware interactions and deliver personalized recommendations.",
		image: "/image/pages_img/Computer-Vision.avif",
	},
];




const AIChatbotDevelopment: React.FC = () => {
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const faqData = [
		{
			question: "What are AI chatbots?",
			answer: "AI chatbots use artificial intelligence to simulate human-like conversations and automate tasks.",
		},
		{
			question: "What is conversational AI?",
			answer: "Conversational AI uses NLP and machine learning for natural, human-like dialogue.",
		},
		{
			question: "How can your AI chatbot development services solutions help my business?",
			answer: "Our AI chatbot solutions automate support, streamline workflows, and provide 24/7 assistance.",
		},
		{
			question: "What industries can benefit from AI chatbot solutions?",
			answer: "Healthcare, education, finance, retail, e-commerce, and legal industries benefit from AI chatbots.",
		},
		{
			question: "How do your AI chatbots work?",
			answer: "Our AI chatbots use NLP and machine learning to understand queries and deliver context-aware responses.",
		},
		{
			question: "What features do your AI chatbots offer?",
			answer: "Multi-language support, platform integration, analytics, personalized responses, and scalability.",
		},
		{
			question: "Can AI chatbots be customized to suit my business needs?",
			answer: "Yes, AI chatbots are fully customizable to align with your business goals and branding.",
		},
		{
			question: "How do your AI chatbots enhance customer engagement and support?",
			answer: "Our chatbots provide instant, personalized responses and are available 24/7 for improved engagement.",
		},
		{
			question: "Are your AI chatbots capable of handling complex queries?",
			answer: "Yes, our AI chatbots leverage NLP and machine learning to handle complex queries accurately.",
		},
		{
			question: "What data privacy and security measures are in place for your AI chatbots?",
			answer: "We implement encryption, secure data storage, and compliance with HIPAA and GDPR standards.",
		},
		{
			question: "How Can I Integrate Your AI Chatbot Into My Existing Systems Or Platforms?",
			answer: "Our AI chatbots integrate seamlessly with websites, mobile apps, social media, and enterprise systems.",
		},
		{
			question: "Do your Chatbots support multiple languages?",
			answer: "Yes, our AI chatbots support multiple languages for global audience reach.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
			<Navbar />

			{/* Hero Section */}
			<section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-6 sm:space-y-8">
						<h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
							Chatbot Development
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
							Transform customer engagement with enterprise-grade AI chatbots that enhance user experiences, <br />automate support, and provide 24/7 assistance across all business touchpoints.
						</p>
					</div>
				</div>
			</section>

			{/* AI Chatbot Capabilities Section */}
			<section className="py-10 sm:py-14 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: AI Image with floating effect */}
						<div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
								<div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
									<img
										src="/image/pages_img/AI-CHATBOT-DEVELOPMENT.jpg"
										alt="AI Models Powering Our Chatbot Solutions"
										className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						{/* Right: Content */}
						<div className={`space-y-6 order-1 lg:order-2 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="space-y-2">
								<h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
									AI Models Powering Our <span className="gradient-text-ai">Chatbot Solutions</span>
								</h2>
							</div>

							<div className="space-y-4 text-slate-600 text-lg leading-relaxed">
								<p>
									AI chatbots revolutionize customer engagement by automating support workflows, providing instant responses, and delivering personalized experiences across all business touchpoints.
								</p>
								<p>
									Our intelligent chatbots enhance customer satisfaction, reduce operational costs, and enable 24/7 availability with advanced NLP and conversational AI capabilities.
								</p>
								<p>
									From e-commerce to customer service, our AI chatbots improve engagement, streamline operations, and transform how businesses interact with customers.
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
							AI Chatbot Development Services
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							Comprehensive chatbot solutions for businesses across all industries.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{chatbotServices.map((service, index) => (
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
				{/* Technical Grid Background */}
				<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
							AI Chatbot <span className="gradient-text-ai">Benefits</span>
						</h2>
						<p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Deliver <span className="text-slate-900 font-bold">better business</span> outcomes and exceptional customer experiences through intelligent automation.
						</p>
					</div>

					<div className="relative px-4">
						{/* Horizontal Connecting Line (Desktop Only) */}
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10">
							{[
								{
									title: "Automation",
									desc: "Automate inquiries and routine tasks to reduce workload and improve efficiency.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#00b894",
									textSide: "above"
								},
								{
									title: "Scalability",
									desc: "Provide 24/7 round-the-clock assistance and instant responses without staff limitations.",
									icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#ff7675",
									textSide: "above"
								},
								{
									title: "Security",
									desc: "Ensure customer data security and compliance with enterprise-grade solutions.",
									icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#fbc531",
									textSide: "above"
								},
								{
									title: "Experience",
									desc: "Improve satisfaction through personalized interactions and seamless support.",
									icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#0984e3",
									textSide: "above"
								}
							].map((item, idx) => (
								<div key={idx} className="flex flex-col items-center">
									{/* Label Above (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="text-center max-w-[200px]">
											<h3 className="font-extrabold text-slate-900 text-lg mb-2" style={{ color: item.textSide === 'above' ? item.color : '' }}>{item.title}</h3>
											<p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
										</div>
										<div className="w-[1px] h-10 bg-slate-200 mt-4"></div>
										<div className="w-1.5 h-1.5 rounded-full mt-[-4px]" style={{ backgroundColor: item.color }}></div>
									</div>

									{/* The Circular Node */}
									<div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
										{/* Concentric Rings */}
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-100 rounded-full"></div>
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-l-transparent border-r-transparent rotate-45"></div>
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-t-transparent border-b-transparent -rotate-12"></div>
										</div>

										{/* Inner Circle Node */}
										<div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl z-20 transition-transform hover:scale-110 duration-500 bg-white" style={{ border: `2px solid ${item.color}20` }}>
											<div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: item.color }}>
												{React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 sm:w-10 sm:h-10' })}
											</div>
											{/* Subtle glow */}
											<div className="absolute -inset-2 rounded-full blur-xl opacity-20" style={{ backgroundColor: item.color }}></div>
										</div>
									</div>

									{/* Label Below (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] mt-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'below' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="w-1.5 h-1.5 rounded-full mb-[-4px]" style={{ backgroundColor: item.color }}></div>
										<div className="w-[1px] h-10 bg-slate-200 mb-4"></div>
										<div className="text-center max-w-[200px]">
											<h3 className="font-extrabold text-slate-900 text-lg mb-2" style={{ color: item.textSide === 'below' ? item.color : '' }}>{item.title}</h3>
											<p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
										</div>
									</div>

									{/* Mobile Label (Visible only on mobile) */}
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

			{/* AI Implementation Process Section (Pill-Style Infographic) */}
			<section className="bg-[#01010c] relative overflow-hidden py-12 sm:py-16">
				{/* High-Tech Background Layers */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
							AI Implementation <span className="gradient-text-ai"> Process</span>
						</h2>
						<p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
							Proven methodology for deploying <span className="text-gray-100 font-bold">secure, scalable, and intelligent AI chatbots</span>.
						</p>
						<div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
					</div>

					<div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-0">
						{/* SVG Connector Lines (Desktop Only) */}
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

								{/* Left Side Connectors */}
								<path d="M 33 18 Q 41.5 18 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
								<path d="M 33 50 L 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />
								<path d="M 33 82 Q 41.5 82 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" className="connector-path" fill="none" />

								{/* Right Side Connectors */}
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

						{/* Left Cards Stack (Steps 01, 02, 03) */}
						<div className="flex flex-col gap-10 w-full lg:w-1/3 order-1 lg:order-1 items-center lg:items-end">
							{[
								{
									id: "01",
									title: "Business Assessment",
									desc: "We analyze your customer service workflows to identify high-impact opportunities where AI can deliver measurable ROI.",
									color: "bg-[#e23126]"
								},
								{
									id: "02",
									title: "Secure Design",
									desc: "We design a robust, scalable chatbot architecture tailored to your needs, ensuring data security and compliance.",
									color: "bg-[#9068d4]"
								},
								{
									id: "03",
									title: "Validation & Testing",
									desc: "AI models are trained and rigorously tested to ensure accuracy, reliability, and alignment with business objectives.",
									color: "bg-[#3eb37c]"
								}
							].map((step, idx) => (
								<div key={step.id}
									className={`group relative flex items-center justify-end w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`}
									style={{ transitionDelay: `${idx * 0.1}s` }}>
									<div className={`flex w-full flex-row-reverse lg:flex-row items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden`}>
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
						<div className="relative w-full lg:w-1/3 flex justify-center order-2 lg:order-2">
							<div className={`relative w-64 h-64 sm:w-[400px] sm:h-[400px] flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
								<div className="absolute inset-0 rounded-full border-[10px] sm:border-[16px] border-transparent border-t-[#e23126] border-r-[#9068d4] border-b-[#3eb37c] border-l-blue-500 animate-[spin_12s_linear_infinite] opacity-40"></div>
								<div className="absolute inset-6 sm:inset-10 rounded-full border-2 sm:border-4 border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]"></div>

								{/* Core Hub */}
								<div className="w-44 h-44 sm:w-64 sm:h-64 bg-slate-900 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-[6px] sm:border-[10px] border-white/5 flex items-center justify-center z-10 p-3 sm:p-5">
									<div className="w-full h-full rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 shadow-inner">
										<div className="relative">
											<Brain className="w-20 h-20 sm:w-32 sm:h-32 text-white opacity-95" strokeWidth={1.2} />
											<div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl scale-110 -z-10 opacity-30 animate-pulse"></div>
										</div>
									</div>
								</div>

								{/* Radial Color Accents */}
								<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 sm:w-5 h-10 sm:h-16 bg-[#e23126] rounded-full -translate-y-4 shadow-[0_0_20px_#e23126] opacity-80"></div>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 sm:w-5 h-10 sm:h-16 bg-[#3eb37c] rounded-full translate-y-4 shadow-[0_0_20px_#3eb37c] opacity-80"></div>
							</div>
						</div>

						{/* Right Cards Stack (Steps 06, 05, 04) */}
						<div className="flex flex-col gap-10 w-full lg:w-1/3 order-3 items-center lg:items-start">
							{[
								{
									id: "04",
									title: "Deployment & Optimization",
									desc: "We seamlessly integrate the chatbot into your platforms, followed by continuous monitoring and optimization.",
									color: "bg-[#3eb37c]"
								},
								{
									id: "05",
									title: "Change Management & Training",
									desc: "We empower your team with training and support to ensure smooth adoption and effective use of the AI system.",
									color: "bg-[#9068d4]"
								},
								{
									id: "06",
									title: "Governance & Continuous Improvement",
									desc: "We implement governance frameworks and continuously refine models to ensure long-term success and scalability.",
									color: "bg-[#e23126]"
								}
							].map((step, idx) => (
								<div key={step.id}
									className={`group relative flex items-center justify-start w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`}
									style={{ transitionDelay: `${(idx + 3) * 0.1}s` }}>
									<div className={`flex w-full items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden`}>
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

			{/* Personalized Digital AI Solutions (Modern Tabbed Section) */}
			{(() => {
				const aiSolutions = [
					{
						key: "CustomerSupport",
						name: "💬 Customer Support Bot",
						description: (
							<>
								Our Customer Support Bot provides instant, intelligent responses to customer inquiries 24/7. Using advanced NLP and machine learning, it handles FAQs, troubleshooting, order tracking, and seamlessly escalates complex issues to human agents.
								<br /><br />
								Perfect for e-commerce, SaaS companies, and service businesses seeking to reduce support costs while improving customer satisfaction and response times.
							</>
						),
						cta: "Book a Demo",
						image: "/image/pages_img/MedGPT.jpg",
					},
					{
						key: "SalesAssistant",
						name: "🛍️ Sales Assistant Bot",
						description: (
							<>
								Our Sales Assistant Bot engages visitors, qualifies leads, and guides customers through the sales funnel. It offers personalized product recommendations, answers pricing questions, and schedules demos with your sales team.
								<br /><br />
								Designed for B2B and B2C businesses, this bot increases conversion rates, captures more leads, and provides valuable insights into customer preferences and buying behavior.
							</>
						),
						cta: "Book a Demo",
						image: "/image/pages_img/NeuroCareGPT.jpg",
					},
					{
						key: "InternalAssistant",
						name: "🏢 Internal Operations Bot",
						description: (
							<>
								Our Internal Operations Bot streamlines employee workflows by automating HR inquiries, IT support tickets, policy questions, and internal knowledge base searches. It integrates with your existing tools and systems for seamless operations.
								<br /><br />
								Ideal for enterprises and growing companies looking to improve employee productivity, reduce internal support burden, and provide instant access to company information and resources.
							</>
						),
						cta: "Book a Demo",
						image: "/image/pages_img/PharmaGPT.png",
					},
				];
				const [activeTab, setActiveTab] = React.useState("CustomerSupport");
				const solution = aiSolutions.find((s) => s.key === activeTab);
				return (
					<section className="section-padding">
						<div className="max-w-6xl mx-auto container-padding">
							<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
								<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">AI Chatbot Solutions</h2>
								<div className="flex justify-center">
									<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
								</div>
								<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
									Advanced AI-powered chatbots transforming customer engagement and business operations.
								</p>
							</div>
							<div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
								{aiSolutions.map((s) => (
									<button
										key={s.key}
										onClick={() => setActiveTab(s.key)}
										className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow transition-all border-2 text-sm sm:text-base ${activeTab === s.key
												? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-blue-500"
												: "bg-white text-gray-900 border-gray-200 hover:border-blue-500"
											}`}
									>
										{s.name}
									</button>
								))}
							</div>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center bg-white/80 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8">
								<div>
									<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{solution.name}</h3>
									<div className="text-sm sm:text-base lg:text-lg text-gray-900 mb-4 sm:mb-6 leading-relaxed">{solution.description}</div>
								</div>
								<div className="flex justify-center">
									<img
										src={solution.image}
										alt={solution.name}
										className="max-w-full rounded-2xl sm:rounded-3xl shadow-xl border-4 border-blue-100"
										style={{ minHeight: 200, objectFit: "cover" }}
									/>
								</div>
							</div>
						</div>
					</section>
				);
			})()}

			{/* Why Choose Us Section (Modern Side-by-Side Layout) */}
			<section className="py-10 sm:py-14 bg-white relative overflow-hidden">
				<div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-4 mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
							Why Choose <span className="gradient-text-ai">Us?</span>
						</h2>
						<p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Trusted AI expertise and proven results for transforming customer engagement.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Workspace Image */}
						<div className={`relative ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
								<div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
									<img
										src="/image/services-img/AI-MODEL-LEVERGED.jpg"
										alt="AI Chatbot Development Workspace"
										className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						{/* Right: Numbered List */}
						<div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							{[
								{
									num: "01",
									title: "AI Chatbot Expertise",
									desc: "Extensive experience in conversational AI, NLP, and intelligent chatbot development across multiple industries.",
									color: "bg-[#e23126]"
								},
								{
									num: "02",
									title: "Industry Specialization",
									desc: "Specialized chatbots for e-commerce, customer service, sales, support, and internal operations.",
									color: "bg-[#9068d4]"
								},
								{
									num: "03",
									title: "Advanced NLP & AI",
									desc: "Advanced natural language processing and machine learning for accurate, context-aware interactions.",
									color: "bg-[#3eb37c]"
								},
								{
									num: "04",
									title: "User-Centric Design",
									desc: "Intuitive, user-friendly chatbots designed for accessibility, engagement, and optimal user experiences.",
									color: "bg-[#f39c12]"
								},
								{
									num: "05",
									title: "Enterprise Scale & Security",
									desc: "Scalable solutions with end-to-end encryption and enterprise-grade security protecting sensitive customer data.",
									color: "bg-[#3498db]"
								}
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
			<AIOnboardingProcess 
        serviceName="chatbot" 
        steps={[
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
            title: 'Deployment & Integration',
            description: 'Once approved, our AI specialists launch your project with validation, team training, and seamless system integration ensuring successful deployment.',
            color: "from-purple-500 to-violet-500"
          },
        ]}
      />

			<section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-6 sm:mb-8">
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
						<div className="flex justify-center mb-2">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Common questions about chatbot implementation and our services.
						</p>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-3 sm:space-y-4">
						{/* FAQ 1 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What are AI chatbots and how do they work?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm leading-relaxed">AI chatbots are intelligent virtual assistants powered by artificial intelligence, natural language processing (NLP), and machine learning. They simulate human-like conversations, understand context, learn from interactions, and provide automated responses to user queries 24/7. Our chatbots can handle complex queries, integrate with multiple platforms, and continuously improve through data analysis.</div>
						</details>
						{/* FAQ 2 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								How can AI chatbot development services benefit my business?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm leading-relaxed">Our AI chatbot solutions deliver significant business value by automating customer support, reducing operational costs by up to 30%, providing 24/7 availability, streamlining workflows, improving response times, enhancing customer satisfaction, and freeing your team to focus on high-value tasks. They also provide valuable insights through conversation analytics and help scale your operations efficiently.</div>
						</details>
						{/* FAQ 3 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								Can AI chatbots be customized to suit my specific business needs?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm leading-relaxed">Absolutely! Our AI chatbots are fully customizable to align with your unique business goals, brand personality, industry requirements, and user expectations. We tailor conversation flows, integrate with your existing systems (CRM, databases, APIs), customize the UI/UX to match your branding, configure language preferences, and implement specific features that address your business challenges. Every chatbot is designed from the ground up to meet your exact specifications.</div>
						</details>
						{/* FAQ 4 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What data privacy and security measures are in place for your AI chatbots?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm leading-relaxed">Security and privacy are our top priorities. We implement end-to-end encryption, secure data storage with regular backups, role-based access controls, and full compliance with industry standards including HIPAA (healthcare), GDPR (data protection), and SOC 2. All data transmissions are encrypted, user information is anonymized where appropriate, and we conduct regular security audits. We also provide detailed audit trails and ensure your chatbot meets all regulatory requirements for your industry.</div>
						</details>
						{/* FAQ 5 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								How long does it take to develop and deploy an AI chatbot?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm leading-relaxed">Development timelines vary based on complexity and requirements. A basic chatbot can be deployed in 2-4 weeks, while more sophisticated solutions with advanced NLP, multiple integrations, and custom features typically take 6-12 weeks. Our agile development process includes discovery and planning (1-2 weeks), design and development (3-8 weeks), testing and refinement (1-2 weeks), and deployment with training (1 week). We provide regular updates throughout the process and can expedite timelines for urgent projects.</div>
						</details>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default AIChatbotDevelopment;
