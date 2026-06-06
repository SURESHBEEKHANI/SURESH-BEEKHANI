import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow, Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import { Badge } from "@/components/ui/badge";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";
import LatestBlogs from "../components/LatestBlogs";

// AI Services across all industries
const aiServices = [
	{
		id: 1,
		title: "Conversational AI & Chatbots",
		description: "Intelligent chatbots and virtual assistants that handle customer inquiries, automate support, and provide 24/7 engagement across multiple channels with natural, human-like interactions.",
		icon: <MessageSquare className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 2,
		title: "Natural Language Processing",
		description: "Advanced NLP solutions for document analysis, sentiment analysis, text classification, automated content generation, and intelligent data extraction from unstructured text.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 3,
		title: "Predictive Analytics & Forecasting",
		description: "Machine learning models that analyze historical data to predict trends, forecast demand, identify risks, and enable data-driven decision-making across your business.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 4,
		title: "Custom AI Model Development",
		description: "Tailored machine learning and deep learning models designed for your specific business challenges, from classification and regression to complex neural networks.",
		icon: <Code className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 5,
		title: "Computer Vision & Image Recognition",
		description: "AI-powered visual intelligence for object detection, image classification, facial recognition, quality inspection, and automated visual analysis in manufacturing, retail, and security.",
		icon: <Eye className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 6,
		title: "AI Integration & Automation",
		description: "Seamless integration of AI capabilities into your existing systems, workflows, and applications to automate processes, enhance productivity, and drive innovation.",
		icon: <Bot className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
];

const faqData = [
	{
		question: "What is AI Development?",
		answer: "AI Development creates intelligent systems that automate processes, analyze data, and make predictions to solve complex business challenges. It includes machine learning models, natural language processing, computer vision, and intelligent automation tailored to your specific needs.",
	},
	{
		question: "How can AI benefit my business?",
		answer: "AI reduces operational costs, improves decision-making through data insights, enhances customer experiences with personalization, automates repetitive tasks, predicts trends and risks, and creates competitive advantages through innovation and efficiency gains.",
	},
	{
		question: "What types of AI solutions do you develop?",
		answer: "We develop conversational AI chatbots, predictive analytics systems, computer vision applications, natural language processing tools, recommendation engines, fraud detection systems, and custom machine learning models for various industries and use cases.",
	},
	{
		question: "How long does it take to implement an AI solution?",
		answer: "Implementation timelines vary from 6-10 weeks for focused solutions like chatbots to 3-6 months for comprehensive AI systems. We work closely with your team to ensure smooth integration and provide detailed project timelines during consultation.",
	},
	{
		question: "Is my data secure with AI solutions?",
		answer: "Yes, we implement enterprise-grade security measures including encryption, access controls, secure data handling, and compliance with industry standards (GDPR, HIPAA where applicable) to protect your data throughout the AI development and deployment process.",
	},
];

const AIDevelopment: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="min-h-screen bg-white flex flex-col">
			<Navbar />

			{/* ─── Hero Section ─── */}
			<section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center opacity-60 sm:opacity-70" />

				{/* Layered gradient: deep slate on left fades to transparent — refined vignette */}
				<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 sm:via-slate-950/55 to-transparent" />

				{/* Subtle bottom scrim for clean section transition */}
				<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />

				<div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-5 sm:space-y-7 text-left max-w-3xl">
						<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight text-white">
							AI Development
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
							Transform your business with advanced AI solutions that streamline operations, improve decision-making, and create new growth opportunities across every industry.
						</p>
					</div>
				</div>
			</section>

			{/* ─── AI Development Capabilities Section ─── */}
			<section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
				{/* Refined ambient wash — right side only, barely perceptible */}
				<div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-slate-50/70 to-transparent pointer-events-none" />

				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Content */}
						<div className={`space-y-7 order-1 lg:order-1 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="text-left space-y-4 mb-2">
								<div className="flex flex-col items-start gap-3 sm:gap-4">
									<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
										The Power of{" "}
										<span className="text-slate-900">AI Development</span>
									</h2>
								</div>
								<p className="text-sm md:text-[15px] text-slate-500 max-w-xl font-normal leading-relaxed">
									Unlock the full potential of artificial intelligence to transform your business operations, enhance customer experiences, and drive innovation across all industries.
								</p>
							</div>

							<div className="space-y-4 text-slate-600 text-[15px] leading-relaxed text-left border-l-2 border-slate-100 pl-5">
								<p>
									Our AI specialists design and deploy custom machine learning models, intelligent automation systems, and data-driven solutions that seamlessly integrate with your existing infrastructure and workflows.
								</p>
								<p>
									From startups to enterprises, across healthcare, finance, retail, manufacturing, and beyond — AI empowers you to make smarter decisions, reduce costs, and stay ahead of the competition.
								</p>
							</div>

							<div className="pt-2">
								<Link
									to="/contact"
									className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-bold text-black transition-all duration-300 bg-[#B6FF00] rounded-none hover:bg-[#a8ef00] hover:shadow-[0_6px_28px_rgba(182,255,0,0.35)] active:scale-95"
								>
									<span className="relative flex items-center gap-2 text-sm sm:text-base">
										Contact Expert
										<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
									</span>
									{/* Sheen sweep */}
									<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
								</Link>
							</div>
						</div>

						{/* Right: AI Image */}
						<div className={`relative flex justify-center lg:justify-end order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'} w-full overflow-visible`}>
							<img
								src="/image/pages_img/Power-AI-Development.png"
								alt="The Power of AI Development"
								className="w-[120%] max-w-[120%] h-auto object-contain scale-125 animate-float"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ─── Services Section ─── */}
			<section className="py-10 sm:py-14 ai-section">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								AI Solutions for <span className="text-white">Industry</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-[15px] text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
							Intelligent AI technologies that drive innovation and efficiency across your business.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{aiServices.map((service, index) => (
							<div
								key={service.id}
								className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-[1.025] hover:-translate-y-0.5 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.08}s` }}
							>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-none flex items-center justify-center mb-2 mx-auto text-black shadow-[0_4px_16px_rgba(182,255,0,0.25)]`}>
									{service.icon}
								</div>
								<h3 className="font-bold text-xs sm:text-sm text-white mb-1 text-center w-full tracking-wide">
									{service.title}
								</h3>
								<p className="text-[10px] sm:text-xs font-normal text-slate-400 text-center leading-relaxed">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ─── Strategic Benefits Infographic Section ─── */}
			<section className="relative overflow-hidden bg-white py-10 sm:py-14">
				{/* Refined technical dot grid — lighter, more breathable */}
				<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								AI Development <span className="text-slate-900">Benefits</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-[15px] text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
							Deliver better business outcomes and operational excellence through AI innovation.
						</p>
					</div>

					<div className="relative px-4">
						{/* Horizontal Connecting Line (Desktop Only) */}
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0" />

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
							{[
								{
									title: "Operational Efficiency",
									desc: "Automate repetitive tasks, streamline workflows, and boost productivity across your organization.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Data-Driven Insights",
									desc: "Extract actionable insights from data to make smarter, faster business decisions.",
									icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Enhanced Experience",
									desc: "Deliver personalized experiences and 24/7 support that delight your customers.",
									icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Cost Reduction",
									desc: "Reduce operational costs and maximize ROI through intelligent automation and optimization.",
									icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								}
							].map((item, idx) => (
								<div key={idx} className="flex flex-col items-center">
									{/* Label Above (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="text-center max-w-[200px]">
											<h3 className="font-bold text-slate-900 text-[15px] mb-1.5 tracking-tight">{item.title}</h3>
											<p className="text-[11px] text-slate-500 font-normal leading-relaxed">{item.desc}</p>
										</div>
										<div className="w-[1px] h-10 bg-slate-200 mt-4" />
										<div className="w-1.5 h-1.5 rounded-full mt-[-4px]" style={{ backgroundColor: item.color }} />
									</div>

									{/* The Circular Node */}
									<div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
										{/* Concentric Rings */}
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-100 rounded-full" />
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border border-slate-100/50 rounded-full border-l-transparent border-r-transparent rotate-45" />
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border border-slate-100/50 rounded-full border-t-transparent border-b-transparent -rotate-12" />
										</div>

										{/* Inner Circle Node */}
										<div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center z-20 hover:scale-110 transition-transform duration-500 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)]" style={{ border: `1.5px solid ${item.color}25` }}>
											<div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-black" style={{ backgroundColor: item.color }}>
												{React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 sm:w-10 sm:h-10' })}
											</div>
										</div>
									</div>

									{/* Label Below (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] mt-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'below' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="w-1.5 h-1.5 rounded-full mb-[-4px]" style={{ backgroundColor: item.color }} />
										<div className="w-[1px] h-10 bg-slate-200 mb-4" />
										<div className="text-center max-w-[200px]">
											<h3 className="font-bold text-slate-900 text-[15px] mb-1.5 tracking-tight">{item.title}</h3>
											<p className="text-[11px] text-slate-500 font-normal leading-relaxed">{item.desc}</p>
										</div>
									</div>

									{/* Mobile Label */}
									<div className="lg:hidden mt-8 text-center px-4">
										<h3 className="font-bold text-slate-900 text-lg mb-1.5 tracking-tight">{item.title}</h3>
										<p className="text-sm text-slate-500 font-normal leading-relaxed">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Industries />

			<AITechnologyStack />

			{/* ─── AI Implementation Process Section ─── */}
			<section className="bg-[#01010c] relative overflow-hidden py-10 sm:py-14">
				{/* High-Tech Background Layers */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
				{/* Ambient light — softened, no pulse */}
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/8 rounded-full blur-[140px]" />
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[160px]" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								AI Implementation <span className="text-white">Process</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-[15px] text-white max-w-2xl mx-auto font-normal leading-relaxed">
							Proven methodology for deploying secure, scalable, and intelligent AI solutions.
						</p>
					</div>
					<div className={`mt-8 sm:mt-12 border border-white/[0.08] rounded-none overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
							{[
								{ id: "01", title: "Business Assessment", desc: "Identify key challenges and opportunities where AI delivers maximum impact for your business.", color: "#B6FF00", icon: <Brain className="w-8 h-8" /> },
								{ id: "02", title: "Data Preparation", desc: "Secure data collection, cleaning, and integration to build robust AI models.", color: "#B6FF00", icon: <Zap className="w-8 h-8" /> },
								{ id: "03", title: "AI Model Development", desc: "Build, train, and validate custom AI models tailored to your specific requirements.", color: "#B6FF00", icon: <Cpu className="w-8 h-8" /> },
								{ id: "04", title: "Deployment & Optimization", desc: "Seamless integration with ongoing monitoring, refinement, and performance optimization.", color: "#B6FF00", icon: <Zap className="w-8 h-8" /> }
							].map((step, index) => (
								<div
									key={step.id}
									className={`flex flex-col items-center justify-center p-6 sm:p-8 relative group transition-colors duration-300 hover:bg-white/[0.025]
										${index % 4 !== 3 ? 'lg:border-r border-white/[0.08]' : ''} 
										${index % 2 === 0 ? 'md:max-lg:border-r border-white/[0.08]' : ''}
										${index < 2 ? 'md:max-lg:border-b border-white/[0.08]' : ''}
										${index < 3 ? 'max-md:border-b border-white/[0.08]' : ''}`}
								>
									<div className="text-xl sm:text-2xl font-black mb-4 tracking-tighter" style={{ color: step.color }}>
										{step.id}
									</div>

									<div className="flex items-center gap-3 w-full justify-center mb-4">
										<div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}35` }} />
										<div className="text-white group-hover:scale-110 transition-transform duration-300">
											{React.cloneElement(step.icon as React.ReactElement, { className: 'w-4 h-4', style: { color: step.color } })}
										</div>
										<div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}35` }} />
									</div>

									<h4 className="text-white font-semibold text-sm sm:text-[15px] mb-2 text-center tracking-tight transition-colors duration-300">{step.title}</h4>
									<p className="text-white text-[10px] sm:text-[11px] leading-relaxed text-center max-w-[200px] font-normal">{step.desc}</p>

									{/* Corner accents */}
									<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ─── Why Choose Us Section ─── */}
			<section className="py-10 sm:py-14 bg-white relative overflow-hidden">
				{/* Refined ambient left wash */}
				<div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-slate-50/60 to-transparent pointer-events-none" />

				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-[1.2]">
								Why Choose <span className="text-black">Velnix Solutions?</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-[15px] text-black max-w-2xl mx-auto font-normal leading-relaxed">
							Industry expertise with proven results across multiple sectors and use cases.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Workspace Image */}
						<div className={`relative ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative group">
								{/* Refined ambient shadow — not a glowing blob, just a soft photographic shadow */}
								<div className="absolute -inset-3 bg-gradient-to-br from-slate-200/60 to-slate-100/30 rounded-none blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
								<div className="relative overflow-hidden rounded-none shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-slate-100/80">
									<img
										src="/image/pages_img/WHY-CHOOSE-US.jpg"
										alt="Why Choose Us"
										className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
									/>
								</div>
							</div>
						</div>

						{/* Right: Numbered List */}
						<div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							{[
								{
									num: "01",
									title: "Deep AI Expertise",
									desc: "Specialized team with extensive experience in machine learning, NLP, and computer vision across multiple industries.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "02",
									title: "Custom Solutions",
									desc: "Tailored AI solutions designed specifically for your business challenges, workflows, and strategic goals.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "03",
									title: "Enterprise Security",
									desc: "Robust security measures and compliance with industry standards protecting your sensitive business data.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "04",
									title: "Proven Track Record",
									desc: "Organizations achieving measurable results, reduced costs, and enhanced ROI with our AI solutions.",
									color: "bg-[#B6FF00]"
								}
							].map((item, idx) => (
								<div key={idx} className="flex items-start gap-5 group" style={{ animationDelay: `${idx * 0.08}s` }}>
									<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-none flex items-center justify-center text-black font-black text-sm sm:text-base shadow-[0_4px_16px_rgba(182,255,0,0.25)] group-hover:shadow-[0_6px_24px_rgba(182,255,0,0.35)] group-hover:scale-105 transition-all duration-300`}>
										{item.num}
									</div>
									<div className="pt-0.5">
										<h3 className="font-semibold text-black text-sm sm:text-[15px] mb-1.5 tracking-tight group-hover:text-black transition-colors duration-300">{item.title}</h3>
										<p className="text-[12px] sm:text-sm text-black leading-relaxed font-normal">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>


			<AIOnboardingProcess serviceName="AI" />

			<LatestBlogs />

			{/* ─── FAQ Section ─── */}
			<section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
				{/* Top rule */}
				<div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200/80" />

				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								Frequently Asked <span className="text-black">Questions</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-[15px] text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
							Common questions about AI development and our services.
						</p>
					</div>
					<div className="space-y-2.5">
						{faqData.map((faq, index) => (
							<div
								key={index}
								className="border border-slate-200 overflow-hidden bg-white transition-all duration-300 hover:border-black/25 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] group"
								style={openIndex === index ? {
									borderColor: 'rgba(0, 0, 0, 0.35)',
									boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
								} : {}}
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full h-auto p-4 sm:p-5 text-left transition-all duration-300"
									style={openIndex === index ? {
										background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)'
									} : {}}
								>
									<div className="flex items-center justify-between w-full">
										<h3 className={`text-sm sm:text-[15px] font-semibold pr-3 transition-colors duration-300 group-hover:text-black ${openIndex === index ? 'text-black' : 'text-slate-900'}`}>
											{faq.question}
										</h3>
										{openIndex === index ? (
											<Minus className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-black" />
										) : (
											<Plus className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0 transition-colors duration-300 group-hover:text-black" />
										)}
									</div>
								</button>

								{openIndex === index && (
									<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 bg-white">
										<div className="pt-4 font-normal">{faq.answer}</div>
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

export default AIDevelopment;
