import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

// Healthcare AI Automation Services
const autonomousServices = [
	{
		id: 1,
		title: "Clinical Workflow Automation",
		description: "Deploy HIPAA-compliant AI agents that automate patient intake, appointment scheduling, insurance verification, and clinical documentation, reducing administrative burden and improving care delivery.",
		icon: <Workflow className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Multi-Agent Care Coordination",
		description: "Coordinate multiple AI agents across departments—from triage and diagnostics to treatment planning and follow-up—ensuring seamless patient care and communication between clinical teams.",
		icon: <Network className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Adaptive Clinical Intelligence",
		description: "Self-learning AI agents that continuously improve diagnostic accuracy, treatment recommendations, and patient engagement strategies based on clinical outcomes and medical literature.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Clinical Decision Support",
		description: "Autonomous AI systems that analyze patient data, medical history, and evidence-based guidelines to provide real-time clinical recommendations, reducing diagnostic errors and improving outcomes.",
		icon: <Target className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Healthcare Process Orchestration",
		description: "Intelligent agents that coordinate complex healthcare workflows—from patient admission to discharge—managing resources, optimizing bed allocation, and ensuring regulatory compliance.",
		icon: <Cpu className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "Patient Monitoring & Alerts",
		description: "24/7 AI-powered patient monitoring agents that track vital signs, detect clinical deterioration, predict adverse events, and automatically alert care teams for timely intervention.",
		icon: <Eye className="h-7 w-7" />,
		color: "from-teal-500 to-cyan-500"
	},
];

// Industries for AI Autonomous Agents
const industries = [
	{
		name: "HealthTech",
		image: "/image/pages_img/healthtechai.jpg",
		description: "Autonomous agents for patient monitoring, appointment scheduling, and healthcare workflow automation.",
		page: "/HealthTechAI",
		color: "from-blue-500 to-cyan-500"
	},
	{
		name: "EdTech",
		image: "/image/pages_img/EdTechAI.avif",
		description: "Intelligent tutoring agents, automated grading systems, and personalized learning path optimization.",
		page: "/EdTechAI",
		color: "from-green-500 to-emerald-500"
	},
	{
		name: "FinTech",
		image: "/image/pages_img/fintech.jpg",
		description: "Autonomous trading agents, fraud detection systems, and intelligent financial advisory services.",
		page: "/FinTechAI",
		color: "from-purple-500 to-pink-500"
	},
	{
		name: "GreenTech",
		image: "/image/pages_img/greentech.jpg",
		description: "Smart energy management agents, environmental monitoring, and sustainability optimization systems.",
		page: "/GreenTechAI",
		color: "from-emerald-500 to-teal-500"
	},
	{
		name: "Retail",
		image: "/image/pages_img/retail.jpg",
		description: "Autonomous inventory management, dynamic pricing agents, and intelligent customer service systems.",
		page: "/RetailAI",
		color: "from-orange-500 to-red-500"
	},
	{
		name: "E-Commerce",
		image: "/image/pages_img/E-Commerce.jpg",
		description: "Personalized shopping agents, automated order fulfillment, and intelligent recommendation systems.",
		page: "/E-Commerce",
		color: "from-indigo-500 to-purple-500"
	},
	{
		name: "Manufacturing",
		image: "/image/pages_img/HIPAA.avif",
		description: "Autonomous quality control, predictive maintenance agents, and production optimization systems.",
		page: "/HIPAACompliance",
		color: "from-rose-500 to-pink-500"
	},
	{
		name: "Logistics",
		image: "/image/pages_img/Diagnostics.jpg",
		description: "Route optimization agents, autonomous fleet management, and intelligent supply chain coordination.",
		page: "/DiagnosticsAI",
		color: "from-cyan-500 to-blue-500"
	},
];

const platforms = [
	{ name: "LangChain", image: "/image/skills_img/tensorflow.png" },
	{ name: "AutoGPT", image: "/image/skills_img/pytorch.png" },
	{ name: "CrewAI", image: "/image/skills_img/sikitlearn.png" },
	{ name: "OpenAI", image: "/image/skills_img/openai.jpg" },
	{ name: "Hugging Face", image: "/image/skills_img/huggingface.png" },
];

const faqData = [
	{
		question: "What are Healthcare AI Automation Agents?",
		answer: "Healthcare AI Automation Agents are HIPAA-compliant intelligent systems that autonomously handle clinical workflows, patient monitoring, documentation, and care coordination—making decisions and taking actions to improve patient outcomes without constant human supervision.",
	},
	{
		question: "How do AI agents differ from traditional healthcare automation?",
		answer: "Unlike traditional rule-based automation, healthcare AI agents use machine learning to adapt to clinical scenarios, learn from patient outcomes, and make complex medical decisions based on real-time data, evidence-based guidelines, and changing patient conditions.",
	},
	{
		question: "What healthcare workflows can AI agents automate?",
		answer: "AI agents can automate patient triage, appointment scheduling, clinical documentation, medication management, lab result analysis, care plan coordination, patient monitoring, insurance verification, and post-discharge follow-up—all while maintaining HIPAA compliance.",
	},
	{
		question: "Are healthcare AI agents safe and HIPAA compliant?",
		answer: "Yes, our healthcare AI agents are built with patient safety as the top priority. They include clinical validation, human oversight mechanisms, audit trails, and full HIPAA compliance with encrypted data handling, access controls, and regulatory adherence.",
	},
	{
		question: "How long does it take to deploy healthcare AI automation?",
		answer: "Deployment timelines range from 8-12 weeks for focused solutions like patient intake automation to 4-6 months for comprehensive multi-agent clinical systems. We provide phased implementations with clinical validation at each stage to ensure safety and effectiveness.",
	},
];

const onboardingSteps = [
	{
		icon: <Mail className="h-8 w-8" />,
		title: 'Contact Us',
		description: 'Reach out to start the conversation. Share your clinical workflows and automation needs so we can understand how AI can transform your patient care delivery.',
		color: "from-green-500 to-emerald-500"
	},
	{
		icon: <Brain className="h-8 w-8" />,
		title: 'Clinical Consultation',
		description: 'Schedule a consultation with our healthcare AI experts. We\'ll assess your clinical workflows, discuss HIPAA compliance requirements, and provide strategic recommendations.',
		color: "from-blue-500 to-indigo-500"
	},
	{
		icon: <Target className="h-8 w-8" />,
		title: 'Receive Clinical Proposal',
		description: 'Based on your clinical requirements, we\'ll deliver a comprehensive proposal outlining the AI automation scope, implementation timeline, compliance measures, and transparent cost estimate.',
		color: "from-yellow-500 to-amber-500"
	},
	{
		icon: <Zap className="h-8 w-8" />,
		title: 'Clinical Deployment',
		description: 'Once approved, our healthcare AI specialists launch your project with clinical validation, staff training, and seamless EHR integration ensuring safe, successful deployment.',
		color: "from-purple-500 to-violet-500"
	},
];

const AIAutonomous: React.FC = () => {
	const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
			<Navbar />
			
			{/* Hero Section */}
			<section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
					<div className="flex-1 text-white space-y-6 sm:space-y-8">
						<div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								 AI Automation
							</h1>
							<p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
								Transform patient care with HIPAA-compliant AI agents that automate clinical workflows, enhance diagnostics, and improve health outcomes through intelligent automation.
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

			{/* AI Autonomous Capabilities Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
						{/* Left: AI Image */}
						<div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative">
								<div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/Power-AI-Development.jpg"
									alt="The Power of AI Autonomous Agents"
									className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20 modern-card"
								/>
							</div>
						</div>
						{/* Right: Content */}
						<div className={`space-y-4 sm:space-y-6 order-1 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
								The Power of Healthcare AI Automation
							</h2>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Revolutionize patient care with HIPAA-compliant AI agents that work tirelessly to automate clinical workflows, enhance diagnostic accuracy, and improve patient outcomes without constant human oversight.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Our healthcare AI agents leverage advanced machine learning, medical natural language processing, and clinical decision support algorithms to handle complex medical tasks, coordinate care teams, and continuously improve based on patient outcomes.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								From patient triage and clinical documentation to predictive diagnostics and care coordination, healthcare AI automation transforms how providers deliver care, enabling 24/7 patient monitoring, reduced administrative burden, and improved clinical efficiency.
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
							Healthcare AI Automation Solutions
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							HIPAA-compliant AI automation that transforms clinical workflows and patient care delivery.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{autonomousServices.map((service, index) => (
							<div 
								key={service.id}
								className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white`}>
									{service.icon}
							</div>
								<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">
									{service.title}
								</h3>
								<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* AI Autonomous Benefits Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							Healthcare AI Automation Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Deliver better patient outcomes and operational excellence through intelligent healthcare automation.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* 24/7 Operation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Clock className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">24/7 Patient Care</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Continuous patient monitoring and clinical support without breaks, ensuring consistent care quality around the clock.</p>
						</div>
						{/* Adaptive Intelligence */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Brain className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Intelligence</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Learn from patient outcomes and medical evidence, continuously improving diagnostic accuracy and treatment recommendations.</p>
						</div>
						{/* Cost Efficiency */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<TrendingUp className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Operational Efficiency</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Reduce administrative costs, minimize readmissions, and optimize resource allocation while improving care quality.</p>
						</div>
						{/* Scalability */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Zap className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Healthcare Scalability</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Scale patient care capacity instantly without proportional increases in clinical staff or infrastructure costs.</p>
						</div>
					</div>
				</div>
			</section>

			<Industries />

			

			{/* Platforms Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							 AI Technology Stack
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Industry-leading AI platforms optimized for HIPAA-compliant healthcare automation and clinical applications.
						</p>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
						{platforms.map((platform, index) => (
							<div className={`flex flex-col items-center ${isVisible ? 'scale-in' : 'opacity-0'}`} key={platform.name} style={{ animationDelay: `${index * 0.1}s` }}>
								<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2 modern-card" />
								<span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* AI Autonomous Process Section */}
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
							Proven methodology for deploying secure, HIPAA-compliant AI automation in healthcare environments.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Define objectives */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Assessment</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Identify clinical workflows and patient care challenges where AI automation delivers maximum impact.</p>
						</div>
						{/* Design agent architecture */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">HIPAA-Compliant Design</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Design secure AI architecture with clinical decision support and full HIPAA compliance.</p>
						</div>
						{/* Train & test */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Code className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Validation</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Train AI with clinical data and validate with healthcare professionals for safety and accuracy.</p>
						</div>
						{/* Deploy & monitor */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<Zap className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Deployment</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Seamless integration into clinical workflows with ongoing monitoring and optimization.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="section-padding">
				<div className="max-w-6xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us for Healthcare AI</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Healthcare-focused AI expertise with proven results in clinical environments and patient care.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Expertise */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Healthcare Expertise</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of clinical workflows and healthcare regulations.</p>
						</div>
						{/* Custom Solutions */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Clinical-Grade Solutions</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom AI automation designed for healthcare environments with patient safety as priority.</p>
						</div>
						{/* End-to-End Support */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Shield className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">HIPAA Compliance</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Full HIPAA compliance with robust security measures protecting patient data and privacy.</p>
						</div>
						{/* Proven Results */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Clinical Impact</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare organizations achieving improved patient outcomes and operational efficiency.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Onboarding Process Section */}
			<section className="section-padding ai-section">
				<div className="max-w-6xl mx-auto container-padding">
					<div className={`text-center mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Healthcare AI Onboarding Process</h2>
						<div className="flex justify-center mb-3 sm:mb-4">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">Your journey to transforming patient care with AI automation starts here.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
						{onboardingSteps.map((step, index) => (
							<div 
								key={index} 
								className={`modern-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] hover:scale-105 transition-all duration-300 ${isVisible ? 'slide-up' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br ${step.color} rounded-full shadow-lg text-white flex-shrink-0`}>
									{step.icon}
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-sm sm:text-base text-white mb-2">{step.title}</h3>
									<p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{step.description}</p>
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
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Common questions about healthcare AI automation implementation and our services.
						</p>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-3 sm:space-y-4">
						{faqData.map((faq, index) => (
							<details key={index} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
								<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
									{faq.question}
									<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
									<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
								</summary>
								<div className="pt-2 sm:pt-3 text-gray-800 text-xs sm:text-sm">{faq.answer}</div>
							</details>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default AIAutonomous;
