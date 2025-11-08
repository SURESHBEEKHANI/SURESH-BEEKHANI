import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

// Healthcare AI Services
const aiServices = [
	{
		id: 1,
		title: "Clinical AI Assistants",
		description: "HIPAA-compliant conversational AI that supports patient triage, appointment scheduling, medication reminders, and 24/7 health inquiries with empathetic, accurate responses.",
		icon: <MessageSquare className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Medical NLP & Documentation",
		description: "Advanced natural language processing for clinical documentation, medical coding, EHR data extraction, and automated transcription of physician-patient interactions.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Predictive Health Analytics",
		description: "AI-powered risk stratification, readmission prediction, disease progression modeling, and population health insights that enable proactive, preventive care strategies.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Clinical Decision Support",
		description: "Machine learning models that analyze patient data, medical literature, and treatment outcomes to provide evidence-based recommendations and diagnostic assistance.",
		icon: <Code className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Medical Imaging AI",
		description: "Computer vision solutions for radiology, pathology, and diagnostic imaging that detect abnormalities, assist in diagnosis, and accelerate image analysis workflows.",
		icon: <Eye className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "Healthcare ChatGPT Integration",
		description: "Secure integration of advanced language models for patient education, symptom assessment, care coordination, and administrative automation in healthcare settings.",
		icon: <Bot className="h-7 w-7" />,
		color: "from-teal-500 to-cyan-500"
	},
];

// Industries for AI Development
const industries = [
	{
		name: "HealthTech",
		image: "/image/pages_img/healthtechai.jpg",
		description: "AI-powered solutions for healthcare automation, diagnostics, and patient engagement.",
		page: "/HealthTechAI",
		color: "from-blue-500 to-cyan-500"
	},
	{
		name: "EdTech",
		image: "/image/pages_img/EdTechAI.avif",
		description: "ChatGPT integrations for personalized learning, automated grading, and real-time student support.",
		page: "/EdTechAI",
		color: "from-green-500 to-emerald-500"
	},
	{
		name: "FinTech",
		image: "/image/pages_img/fintech.jpg",
		description: "ChatGPT for banking, financial support, fraud detection, and customer engagement.",
		page: "/FinTechAI",
		color: "from-purple-500 to-pink-500"
	},
	{
		name: "GreenTech",
		image: "/image/pages_img/greentech.jpg",
		description: "ChatGPT for sustainability, energy management, and green innovation.",
		page: "/GreenTechAI",
		color: "from-emerald-500 to-teal-500"
	},
	{
		name: "Retail",
		image: "/image/pages_img/retail.jpg",
		description: "ChatGPT for retail automation, customer engagement, and personalized shopping experiences.",
		page: "/RetailAI",
		color: "from-orange-500 to-red-500"
	},
	{
		name: "E-Commerce",
		image: "/image/pages_img/E-Commerce.jpg",
		description: "ChatGPT for e-commerce: automate inquiries, provide order tracking, and personalize shopping.",
		page: "/E-Commerce",
		color: "from-indigo-500 to-purple-500"
	},
	{
		name: "HIPAA Compliance",
		image: "/image/pages_img/HIPAA.avif",
		description: "ChatGPT for HIPAA-compliant healthcare communication and data security.",
		page: "/HIPAACompliance",
		color: "from-rose-500 to-pink-500"
	},
	{
		name: "DiagnosticsAI",
		image: "/image/pages_img/Diagnostics.jpg",
		description: "ChatGPT for AI-driven diagnostics, predictive analytics, and workflow automation in healthcare and related fields.",
		page: "/DiagnosticsAI",
		color: "from-cyan-500 to-blue-500"
	},
];

const platforms = [
	{ name: "TensorFlow", image: "/image/skills_img/tensorflow.png" },
	{ name: "PyTorch", image: "/image/skills_img/pytorch.png" },
	{ name: "Scikit-learn", image: "/image/skills_img/sikitlearn.png" },
	{ name: "OpenAI", image: "/image/skills_img/openai.jpg" },
	{ name: "Hugging Face", image: "/image/skills_img/huggingface.png" },
];

const faqData = [
	{
		question: "What is Healthcare AI Development?",
		answer: "Healthcare AI Development creates intelligent systems that enhance clinical decision-making, automate medical workflows, and improve patient outcomes. It includes medical imaging analysis, predictive diagnostics, clinical documentation, and patient engagement tools designed specifically for healthcare environments.",
	},
	{
		question: "How can Healthcare AI benefit my practice or hospital?",
		answer: "Healthcare AI reduces administrative burden, improves diagnostic accuracy, enables early disease detection, personalizes treatment plans, enhances patient engagement, and optimizes resource allocation—all while maintaining HIPAA compliance and patient safety standards.",
	},
	{
		question: "What types of Healthcare AI solutions do you develop?",
		answer: "We develop clinical decision support systems, medical imaging AI, predictive analytics for patient risk stratification, AI-powered documentation tools, virtual health assistants, and automated triage systems tailored to your clinical workflows.",
	},
	{
		question: "How long does it take to implement a Healthcare AI solution?",
		answer: "Implementation timelines vary from 8-12 weeks for focused solutions like chatbots to 4-6 months for comprehensive clinical AI systems. We work closely with your clinical team to ensure smooth integration and provide detailed project timelines during consultation.",
	},
	{
		question: "Is your Healthcare AI HIPAA compliant?",
		answer: "Yes, all our healthcare AI solutions are built with HIPAA compliance as a foundational requirement. We implement robust security measures, encryption, access controls, and audit trails to protect patient data and ensure regulatory compliance.",
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
		description: 'Schedule a professional consultation with our experts. We\'ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
		color: "from-blue-500 to-indigo-500"
	},
	{
		icon: <Target className="h-8 w-8" />,
		title: 'Receive a Detailed Proposal',
		description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate so you know exactly what to expect.',
		color: "from-yellow-500 to-amber-500"
	},
	{
		icon: <Zap className="h-8 w-8" />,
		title: 'Project Kickoff & Delivery',
		description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring a smooth, successful delivery from start to finish.',
		color: "from-purple-500 to-violet-500"
	},
];

const AIDevelopment: React.FC = () => {
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
							AI Development
							</h1>
							<p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
								Transform patient care with AI solutions that enhance diagnostics, streamline clinical workflows, and improve health outcomes through intelligent automation.
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

			{/* AI Development Capabilities Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
						{/* Left: AI Image */}
						<div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative">
								<div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/Power-AI-Development.jpg"
									alt="The Power of AI Development"
									className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20 modern-card"
								/>
							</div>
						</div>
						{/* Right: Content */}
						<div className={`space-y-4 sm:space-y-6 order-1 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
								The Power of Healthcare AI
							</h2>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Revolutionize patient care with advanced AI solutions designed for healthcare. Our HIPAA-compliant systems enable intelligent diagnostics, predictive analytics, and clinical decision support that improve patient outcomes and operational efficiency.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Our healthcare AI specialists seamlessly integrate cutting-edge technologies into your clinical workflows, empowering providers with real-time insights, automated documentation, and enhanced patient engagement tools.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								From hospitals and clinics to telehealth platforms and medical research, healthcare AI transforms how you deliver care, reduce costs, and save lives. Partner with us to lead the future of medicine.
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
							Healthcare AI Solutions
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							Transforming patient care through intelligent, HIPAA-compliant AI technologies.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{aiServices.map((service, index) => (
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

			{/* AI Development Benefits Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							Healthcare AI Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Delivering better patient outcomes and operational excellence through AI innovation.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Clinical Efficiency */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Zap className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Efficiency</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Automate administrative tasks, reduce documentation burden, and free clinicians to focus on patient care.</p>
						</div>
						{/* Improved Outcomes */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<TrendingUp className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Improved Outcomes</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Enhance diagnostic accuracy, reduce medical errors, and deliver personalized treatment plans with AI insights.</p>
						</div>
						{/* HIPAA Compliance */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Shield className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">HIPAA Compliance</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Secure, compliant AI solutions that protect patient privacy and meet healthcare regulatory standards.</p>
						</div>
						{/* Cost Reduction */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Brain className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Cost Reduction</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Lower operational costs, reduce readmissions, and optimize resource allocation through predictive analytics.</p>
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
							Healthcare AI Technology Stack
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Industry-leading AI platforms optimized for healthcare applications and compliance.
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

			{/* AI Development Process Section */}
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
							Proven methodology for deploying secure, compliant AI solutions in healthcare environments.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Clinical Assessment */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Assessment</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Identify clinical workflows and patient care challenges where AI delivers maximum impact.</p>
						</div>
						{/* Secure Data Integration */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Shield className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Secure Data Integration</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">HIPAA-compliant data preparation and EHR integration for training robust AI models.</p>
						</div>
						{/* AI Model Development */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Code className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">AI Model Development</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Build and validate clinical AI models with healthcare professionals and regulatory standards.</p>
						</div>
						{/* Clinical Deployment */}
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
							Healthcare-focused AI expertise with proven results in clinical environments.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Healthcare Expertise */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Healthcare Expertise</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of clinical workflows and healthcare regulations.</p>
						</div>
						{/* Clinical-Grade Solutions */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Clinical-Grade Solutions</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom AI solutions designed for healthcare environments with patient safety as priority.</p>
						</div>
						{/* Compliance & Security */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Shield className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Compliance & Security</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">HIPAA-compliant architecture with robust security measures protecting patient data.</p>
						</div>
						{/* Proven Clinical Impact */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Clinical Impact</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare organizations achieving improved outcomes and operational efficiency.</p>
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
						<p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">Your journey to transforming patient care with AI starts here.</p>
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
							Common questions about Healthcare AI implementation and our services.
						</p>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-3 sm:space-y-4">
						{/* FAQ 1 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What is Healthcare AI Development?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Healthcare AI Development creates intelligent systems that enhance clinical decision-making, automate medical workflows, and improve patient outcomes. It includes medical imaging analysis, predictive diagnostics, clinical documentation, and patient engagement tools designed specifically for healthcare environments.</div>
						</details>
						{/* FAQ 2 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								How can Healthcare AI benefit my practice or hospital?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Healthcare AI reduces administrative burden, improves diagnostic accuracy, enables early disease detection, personalizes treatment plans, enhances patient engagement, and optimizes resource allocation—all while maintaining HIPAA compliance and patient safety standards.</div>
						</details>
						{/* FAQ 3 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What types of Healthcare AI solutions do you develop?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">We develop clinical decision support systems, medical imaging AI, predictive analytics for patient risk stratification, AI-powered documentation tools, virtual health assistants, and automated triage systems tailored to your clinical workflows.</div>
						</details>
						{/* FAQ 4 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								How long does it take to implement a Healthcare AI solution?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Implementation timelines vary from 8-12 weeks for focused solutions like chatbots to 4-6 months for comprehensive clinical AI systems. We work closely with your clinical team to ensure smooth integration and provide detailed project timelines during consultation.</div>
						</details>
						{/* FAQ 5 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								Is your Healthcare AI HIPAA compliant?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Yes, all our healthcare AI solutions are built with HIPAA compliance as a foundational requirement. We implement robust security measures, encryption, access controls, and audit trails to protect patient data and ensure regulatory compliance.</div>
						</details>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default AIDevelopment;