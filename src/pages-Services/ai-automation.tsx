import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow, Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";
import LatestBlogs from "../components/LatestBlogs";
import { Badge } from "@/components/ui/badge";

// AI Automation Services across all industries
const autonomousServices = [
	{
		id: 1,
		title: "Workflow Automation",
		description: "Deploy intelligent AI agents that automate business processes, task management, data entry, and operational workflows, reducing manual effort and improving efficiency across your organization.",
		icon: <Workflow className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 2,
		title: "Multi-Agent Coordination",
		description: "Coordinate multiple AI agents across departments—from sales and marketing to operations and support—ensuring seamless collaboration and communication between teams.",
		icon: <Network className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 3,
		title: "Adaptive Intelligence",
		description: "Self-learning AI agents that continuously improve performance, optimize processes, and adapt to changing business conditions based on real-time data and outcomes.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 4,
		title: "Intelligent Decision Support",
		description: "Autonomous AI systems that analyze business data, market trends, and operational metrics to provide real-time recommendations, reducing errors and improving outcomes.",
		icon: <Target className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 5,
		title: "Process Orchestration",
		description: "Intelligent agents that coordinate complex business workflows—from order processing to fulfillment—managing resources, optimizing operations, and ensuring compliance.",
		icon: <Cpu className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 6,
		title: "24/7 Monitoring & Alerts",
		description: "Round-the-clock AI-powered monitoring agents that track systems, detect anomalies, predict issues, and automatically alert teams for timely intervention.",
		icon: <Eye className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
];

const faqData = [
	{
		question: "What are AI Automation Agents?",
		answer: "AI Automation Agents are intelligent systems that autonomously handle business workflows, processes, and tasks—making decisions and taking actions to improve efficiency and outcomes without constant human supervision.",
	},
	{
		question: "How do AI agents differ from traditional automation?",
		answer: "Unlike traditional rule-based automation, AI agents use machine learning to adapt to scenarios, learn from outcomes, and make complex decisions based on real-time data, changing conditions, and business context.",
	},
	{
		question: "What business workflows can AI agents automate?",
		answer: "AI agents can automate customer service, data entry, order processing, inventory management, scheduling, reporting, quality control, monitoring, and coordination across departments—all while continuously learning and improving.",
	},
	{
		question: "Are AI automation agents secure and compliant?",
		answer: "Yes, our AI agents are built with security as a top priority. They include access controls, audit trails, data encryption, and compliance with industry standards (GDPR, HIPAA where applicable) to protect your business data.",
	},
	{
		question: "How long does it take to deploy AI automation?",
		answer: "Deployment timelines range from 6-10 weeks for focused solutions like chatbot automation to 3-6 months for comprehensive multi-agent systems. We provide phased implementations with validation at each stage to ensure effectiveness.",
	},
];

const AIAutonomous: React.FC = () => {
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
							AI Automation
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
							Transform your business with intelligent AI agents that automate workflows, enhance operations, and drive efficiency through intelligent automation across all industries.
						</p>
					</div>
				</div>
			</section>

			{/* ─── AI Automation Capabilities Section ─── */}
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
										Redefining Operations with{" "}
										<span className="text-slate-900">AI Automation</span>
									</h2>
								</div>
								<p className="text-base md:text-[17px] text-slate-700 max-w-xl font-medium leading-relaxed">
									Revolutionize your business infrastructure with intelligent AI agents designed to handle complex workflows with unprecedented precision.
								</p>
							</div>

							<div className="space-y-4 text-slate-800 text-base md:text-[17px] leading-relaxed text-left border-l-4 border-[#B6FF00] pl-6 font-medium">
								<p>
									We move beyond simple rule-based automation to adaptive systems that learn and grow with your business. Our AI specialists design and deploy intelligent automation that seamlessly integrates with your existing infrastructure.
								</p>
								<p>
									Our orchestration layer leverages advanced Large Language Models and specialized agentic frameworks to coordinate complex cross-departmental tasks, ensuring seamless integration and 24/7 reliability.
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
						<div className={`relative order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'} w-full`}>
							<div className="relative w-full md:w-[90%] ml-auto overflow-hidden rounded-2xl border-t-[6px] border-[#B6FF00] shadow-[0_20px_50px_rgba(0,0,0,0.15)] group/cover bg-transparent">
								<img
									src="/image/pages_img/ai-automation.jpg"
									alt="The Power of AI Automation"
									className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover/cover:scale-105"
								/>
								{/* Premium gradient overlay for depth */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
								
								{/* Decorative corner accent */}
								<div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#B6FF00]/60 rounded-br-lg" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ─── Services Section ─── */}
			<section className="py-10 sm:py-14 bg-[#01010c] relative overflow-hidden">
				{/* High-Tech Background Layers */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
				{/* Ambient light */}
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/8 rounded-full blur-[140px]" />
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[160px]" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								AI Automation <span className="text-white">Solutions</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							Intelligent AI automation that transforms business workflows and operational efficiency.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{autonomousServices.map((service, index) => (
							<div
								key={service.id}
								className={`p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] rounded-none bg-white/[0.03] border border-white/10 hover:border-[#B6FF00]/50 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(182,255,0,0.15)] ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.08}s` }}
							>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-none flex items-center justify-center mb-2 mx-auto text-black shadow-[0_4px_16px_rgba(182,255,0,0.25)]`}>
									{service.icon}
								</div>
								<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full tracking-wide">
									{service.title}
								</h3>
								<p className="text-xs sm:text-sm font-medium text-slate-200 text-center leading-relaxed">
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

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								AI Automation <span className="text-slate-900">Benefits</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Deliver better business outcomes and operational excellence through intelligent automation.
						</p>
					</div>

					<div className="relative px-4">
						{/* Horizontal Connecting Line (Desktop Only) */}
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0" />

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
							{[
								{
									title: "Automation",
									desc: "Systematic elimination of manual repetitive workflows with 100% precision agents.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Scalability",
									desc: "Elastic resource allocation that grows instantly alongside your business volume.",
									icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Cost Efficiency",
									desc: "Significant reduction in operational overhead through optimized labor utilization.",
									icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Security",
									desc: "Enterprise-grade protection with built-in compliance and secure data orchestration.",
									icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								}
							].map((item, idx) => (
								<div key={idx} className="flex flex-col items-center">
									{/* Label Above (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="text-center max-w-[220px]">
											<h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">{item.title}</h3>
											<p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
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
										<div className="text-center max-w-[220px]">
											<h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">{item.title}</h3>
											<p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
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
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							Proven methodology for deploying secure, scalable, and intelligent AI automation.
						</p>
					</div>
					<div className={`mt-8 sm:mt-12 border border-white/[0.08] rounded-none overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
							{[
								{ id: "01", title: "Business Assessment", desc: "Analyze your current operations to identify high-impact opportunities where AI automation delivers measurable ROI.", color: "#B6FF00", icon: <Brain className="w-8 h-8" /> },
								{ id: "02", title: "Secure Design", desc: "Design robust, scalable AI architecture tailored to your needs with data security and compliance.", color: "#B6FF00", icon: <Shield className="w-8 h-8" /> },
								{ id: "03", title: "Validation & Testing", desc: "AI models trained and rigorously tested to ensure accuracy, reliability, and business alignment.", color: "#B6FF00", icon: <CheckCircle className="w-8 h-8" /> },
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

									<h4 className="text-white font-bold text-base sm:text-lg mb-2 text-center tracking-tight transition-colors duration-300">{step.title}</h4>
									<p className="text-slate-200 text-xs sm:text-sm leading-relaxed text-center max-w-[220px] font-medium">{step.desc}</p>

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
						<p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
							Strategic excellence and technical precision focused on delivering measurable enterprise value.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Workspace Image */}
						<div className={`relative ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative w-full md:w-[95%] mr-auto overflow-hidden rounded-2xl border-t-[6px] border-[#B6FF00] shadow-[0_20px_50px_rgba(0,0,0,0.15)] group/cover bg-transparent">
								<img
									src="/image/pages_img/WHY-CHOOSE-US.jpg"
									alt="Why Choose Us"
									className="w-full h-[350px] lg:h-[500px] object-cover transition-transform duration-700 group-hover/cover:scale-105"
								/>
								{/* Premium gradient overlay for depth */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
								
								{/* Decorative corner accent */}
								<div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#B6FF00]/60 rounded-bl-lg" />
							</div>
						</div>

						{/* Right: Numbered List */}
						<div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							{[
								{
									num: "01",
									title: "Automation Expertise",
									desc: "Our specialized team understands complex business workflows and automation strategies, ensuring reliable AI solutions built with best practices.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "02",
									title: "Enterprise Solutions",
									desc: "We design scalable AI automation systems tailored for enterprise environments, focusing on performance, reliability, and long-term efficiency.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "03",
									title: "Security & Compliance",
									desc: "Security is integrated into every solution. We follow strict security standards and compliance frameworks to protect sensitive business data.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "04",
									title: "Proven Business Impact",
									desc: "Our AI automation solutions help organizations reduce operational costs, improve productivity, and achieve measurable business outcomes.",
									color: "bg-[#B6FF00]"
								}
							].map((item, idx) => (
								<div key={idx} className="flex items-start gap-5 group" style={{ animationDelay: `${idx * 0.08}s` }}>
									<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-none flex items-center justify-center text-black font-black text-sm sm:text-base shadow-[0_4px_16px_rgba(182,255,0,0.25)] group-hover:shadow-[0_6px_24px_rgba(182,255,0,0.35)] group-hover:scale-105 transition-all duration-300`}>
										{item.num}
									</div>
									<div className="pt-0.5">
										<h3 className="font-bold text-[#0a0435] text-base sm:text-lg mb-1.5 tracking-tight group-hover:text-black transition-colors duration-300">{item.title}</h3>
										<p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>


			<AIOnboardingProcess serviceName="AI automation" />

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
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Common questions about AI automation implementation and our services.
						</p>
					</div>
					<div className="space-y-2.5">
						{faqData.map((faq, index) => (
							<div
								key={index}
								className={`border border-slate-200 overflow-hidden bg-white transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_4px_20px_rgba(182,255,0,0.2)] group ${openIndex === index ? 'shadow-lg border-[#B6FF00]/50' : ''}`}
								style={openIndex === index ? {
									boxShadow: '0 4px 20px rgba(182, 255, 0, 0.2), 0 0 15px rgba(182, 255, 0, 0.15)'
								} : {}}
							>
								<button
									onClick={() => toggleFAQ(index)}
									className={`w-full h-auto p-4 sm:p-5 text-left transition-all duration-300 ${openIndex === index ? 'bg-gradient-to-r from-[#B6FF00]/15 via-[#B6FF00]/10 to-[#B6FF00]/5' : 'hover:bg-[#B6FF00]/5'}`}
								>
									<div className="flex items-center justify-between w-full">
										<h3 className={`text-sm sm:text-[15px] font-semibold pr-3 transition-colors duration-300 group-hover:text-[#B6FF00] ${openIndex === index ? 'text-[#B6FF00]' : 'text-slate-900'}`}>
											{faq.question}
										</h3>
										{openIndex === index ? (
											<Minus className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: '#B6FF00' }} />
										) : (
											<Plus className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0 transition-colors duration-300 group-hover:text-[#B6FF00]" />
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

export default AIAutonomous;
