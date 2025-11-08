import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

const chatbotServices = [
	{
		id: 1,
		title: "AI Chatbot Development Solutions",
		description: "We offer end-to-end AI development services, including design, development, integration, and support. Our intelligent virtual assistants engage users in meaningful conversations 24/7.",
		icon: <MessageSquare className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Chatbot Design and Development",
		description: "We specialize in creating chatbots designed for business needs. Our team collaborates to understand the brand, goals, and challenges. We develop chatbots according to your brand personality alignment.",
		icon: <Code className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Multi-language Chatbot Development",
		description: "We can develop multilingual chatbots that can converse seamlessly in different languages. We provide localized support and enhance customer satisfaction across diverse markets.",
		icon: <Globe className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Chatbot Integration",
		description: "Our integration experts ensure smooth chatbot integration across websites, apps, and messaging platforms. Our chatbot integration services enhance workflow efficiency, providing a platform for effortless communication.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Natural Language Processing Chatbot Development",
		description: "With advanced NLP capabilities, we create AI chatbots that understand users' complex queries, provide accurate information, provide context-aware interactions, and resolve customer issues effectively.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "Chatbot Maintenance and Support",
		description: "Post-deployment, we ensure chatbots perform optimally through regular updates, upgrades, and issue resolution support. Our dedicated engineers perform monitoring and troubleshooting to optimize performance.",
		icon: <Shield className="h-7 w-7" />,
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

const industries = [
  {
	name: "HealthTech",
	image: "/image/pages_img/healthtechai.jpg",
	description: "AI-powered solutions for healthcare automation, diagnostics, and patient engagement.",
	page: "/HealthTechAI",
  },
  {
	name: "EdTech",
	image: "/image/pages_img/EdTechAI.avif",
	description: "AI chatbots that personalize learning, automate admin tasks, and provide real-time feedback for students and educators.",
	page: "/EdTechAI",
  },
  {
	name: "FinTech",
	image: "/image/pages_img/fintech.jpg",
	description: "AI chatbots for banking, financial support, fraud detection, and customer engagement.",
	page: "/FinTechAI",
  },
  {
	name: "GreenTech",
	image: "/image/pages_img/greentech.jpg",
	description: "AI for sustainability, energy management, carbon tracking, and green innovation.",
	page: "/GreenTechAI",
  },
  {
	name: "Retail",
	image: "/image/pages_img/retail.jpg",
	description: "AI chatbots for retail automation, customer engagement, and personalized shopping experiences.",
	page: "/RetailAI",
  },
  {
	name: "AI Diagnostics",
	image: "/image/pages_img/Diagnostics.jpg",
	description: "AI-driven diagnostics for healthcare, predictive analytics, and workflow automation.",
	page: "/DiagnosticsAI",
  },
  {
	name: "E-Commerce",
	image: "/image/pages_img/E-Commerce.jpg",
	description: "AI chatbots for e-commerce: automate inquiries, provide order tracking, and personalize shopping.",
	page: "/E-Commerce",
  },
  {
	name: "HIPAA Compliance",
	image: "/image/pages_img/HIPAA.avif",
	description: "AI chatbots for HIPAA-compliant healthcare communication and data security.",
	page: "/HIPAACompliance",
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
			<section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
					<div className="flex-1 text-white space-y-6 sm:space-y-8">
						<div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								Chatbot Development
							</h1>
							<p className="body-large text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
								Transform your business with AI chatbot solutions that automate interactions, deliver insights, and drive engagement across all touchpoints.
							</p>
							<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
								<a
									href="/#contact"
									className="btn-primary text-center min-h-[44px] flex items-center justify-center"
								>
									Talk to an Expert
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

			{/* AI Chatbot Capabilities Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
						{/* Left: AI Image */}
						<div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative">
								<div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/AI-MODEL-LEVERGED.jpg"
									alt="AI Models Powering Our Chatbot Solutions"
									className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20 modern-card"
								/>
							</div>
						</div>
						{/* Right: Content */}
						<div className={`space-y-4 sm:space-y-6 order-1 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
								AI Models Powering Our Chatbot Solutions
							</h2>
							<p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
								AI-driven chatbots automate operations and deliver exceptional customer experiences across all touchpoints.
							</p>
							<p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
								Our chatbots boost productivity, reduce costs, and provide personalized service at scale with advanced natural language processing.
							</p>
							<p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
								From e-commerce to customer service, our AI chatbots answer questions and automate workflows seamlessly.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="section-padding bg-gradient-to-tr from-muted/50 to-background">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							Advanced AI Chatbot Development Services
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
							Complete chatbot solutions for your business needs.
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
								<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">
									{service.title}
								</h3>
								<p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">
									{service.description}
								</p>
							</div>
						))}

					</div>
				</div>
			</section>
			 <Industries />

			{/* AI Chatbot Benefits Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							AI Chatbot Development Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
							Intelligent automation solutions for today's dynamic business landscape.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Automation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Zap className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Automation</h3>
							<p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Streamline repetitive tasks and processes for increased efficiency and productivity.</p>
						</div>
						{/* Scalability */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<TrendingUp className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Scalability</h3>
							<p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Scale from pilot projects to enterprise-wide deployments seamlessly.</p>
						</div>
						{/* Customization */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Target className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Customization</h3>
							<p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Tailor every aspect to perfectly align with your business objectives.</p>
						</div>
						{/* Innovation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Brain className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Innovation</h3>
							<p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">Drive innovation and competitive advantage through cutting-edge AI solutions.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries Section */}
			<section className="section-padding bg-gradient-to-tr from-muted/50 to-background">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							Industries We Work With
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
							Tailored chatbot solutions across diverse industry verticals.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{/* AI Chatbot Engineering */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-200">
							<div className="flex flex-col items-center text-center mb-4 sm:mb-6">
								<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
									<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
								</div>
								<h3 className="text-base sm:text-lg font-bold text-gray-900">AI Chatbot Engineering</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-xs sm:text-sm">
								Advanced AI chatbots using machine learning and neural networks to automate tasks and drive growth.
							</p>
						</div>

						{/* AI Voice Assistant Chatbots */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-green-200">
							<div className="flex flex-col items-center text-center mb-4 sm:mb-6">
								<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
									<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="10" />
										<path d="M8 15h8M8 11h8M8 7h8" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<h3 className="text-base sm:text-lg font-bold text-gray-900">AI Voice Assistant Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-xs sm:text-sm">
								Hands-free voice assistants with speech recognition, ML, and NLP for human-like interactions.
							</p>
						</div>

						{/* Medical AI Chatbots */}
						<div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-200">
							<div className="flex flex-col items-center text-center mb-4 sm:mb-6">
								<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
									<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
									</svg>
								</div>
								<h3 className="text-base sm:text-lg font-bold text-gray-900">Medical AI Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-xs sm:text-sm">
								AI chatbots for clinical workflows, remote consultations, and improved patient engagement.
							</p>
						</div>

						{/* Legal Chatbots */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-cyan-200">
							<div className="flex flex-col items-center text-center mb-4 sm:mb-6">
								<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
									<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
								<h3 className="text-base sm:text-lg font-bold text-gray-900">Legal Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-xs sm:text-sm">
								Legal chatbots for client interactions, document review, and automated legal services.
							</p>
						</div>

						{/* Social Media Chatbot Program */}
						<div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-yellow-200">
							<div className="flex flex-col items-center text-center mb-4 sm:mb-6">
								<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
									<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
									</svg>
								</div>
								<h3 className="text-base sm:text-lg font-bold text-gray-900">Social Media Chatbot Program</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-xs sm:text-sm">
								AI chatbots for social media engagement, 24/7 support, and enhanced brand presence.
							</p>
						</div>

						{/* Vision-based Chatbots */}
						<div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-pink-200">
							<div className="flex flex-col items-center text-center mb-4 sm:mb-6">
								<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
									<svg
										className="w-6 h-6 sm:w-8 sm:h-8 text-white"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 className="text-base sm:text-lg font-bold text-gray-900">Vision-based Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-xs sm:text-sm">
								Next-generation AI chatbots with computer vision for enhanced understanding and personalized recommendations.
							</p>
						</div>
					</div>
				</div>
			</section>



			{/* Integrate Our Chatbots into Different Platforms (New Section) */}
			<section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">AI Chatbot Development Platforms</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
							Leverage industry-leading platforms for robust chatbot implementations.
						</p>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/huggingface.png" alt="HuggingFace" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2" />
							<span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm">HuggingFace</span>
						</div>

						<div className="flex flex-col items-center">
							<img src="/image/skills_img/fastapi.png" alt="FastAPI" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2" />
							<span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm">FastAPI</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/openai.jpg" alt="OpenAI" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2" />
							<span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm">OpenAI</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/langchain.png" alt="LangChain" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2" />
							<span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm">LangChain</span>
						</div>
					</div>
				</div>
			</section>

		{/* Why Choose Us for Custom AI Chatbot Development Services? (New Section) */}
			<section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
	<div className="max-w-7xl mx-auto">
		<div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
			<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us?</h2>
			<div className="flex justify-center">
				<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
			</div>
			<p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
				Trusted expertise and proven results for your chatbot implementation needs.
			</p>
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
			{/* Card 1 */}
			<div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="10" />
						<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Proven Chatbot Expertise</h3>
				<p className="text-gray-800 text-xs sm:text-sm">Extensive experience in designing, developing, and deploying robust AI chatbots.</p>
			</div>
			{/* Card 2 */}
			<div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-green-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="4" y="4" width="16" height="16" rx="4" />
						<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Cross-Industry Solutions</h3>
				<p className="text-gray-800 text-xs sm:text-sm">AI chatbot solutions across customer service, e-commerce, healthcare, and diverse industries.</p>
			</div>
			{/* Card 3 */}
			<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Cutting-Edge AI & NLP</h3>
				<p className="text-gray-800 text-xs sm:text-sm">Advanced NLP and Machine Learning for seamless, human-like interactions.</p>
			</div>
			{/* Card 4 */}
			<div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
					</svg>
				</div>
				<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Tailored to Your Brand</h3>
				<p className="text-gray-800 text-xs sm:text-sm">Meticulously crafted solutions reflecting your brand identity and business goals.</p>
			</div>
			{/* Card 5 */}
			<div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="3" y="11" width="18" height="7" rx="2" />
						<path d="M7 11V7a5 5 0 0110 0v4" />
					</svg>
				</div>
				<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Scalable for Growth</h3>
				<p className="text-gray-800 text-xs sm:text-sm">Engineered for scalability with consistent performance and adaptability.</p>
			</div>
			{/* Card 6 */}
			<div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-pink-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 8v4l3 3" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Uncompromising Security & Compliance</h3>
				<p className="text-gray-800 text-xs sm:text-sm">Data privacy and security with industry standards including HIPAA compliance.</p>
			</div>
		</div>
	</div>
</section>

		{/* How Does a Premier AI Chatbot Development Company Benefit Your Business? (New Section) */}
			<section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
			  <div className="max-w-5xl mx-auto">
				<div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
				  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">How AI Chatbots Transform Your Business</h2>
				  <div className="flex justify-center">
					<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
				  </div>
				  <p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
					Intelligent automation solutions for today's dynamic business landscape.
				  </p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
  {/* Card 1: Operational Cost Reduction */}
  <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
    <div className="flex items-center justify-center mb-3 sm:mb-4 mt-1 sm:mt-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-bold text-base sm:text-xl text-gray-900 mb-2 sm:mb-3">Operational Cost Reduction</h3>
    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">Automate tasks and reduce costs.</p>
  </div>
  {/* Card 2: Enhanced Efficiency */}
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
    <div className="flex items-center justify-center mb-3 sm:mb-4 mt-1 sm:mt-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <h3 className="font-bold text-base sm:text-xl text-gray-900 mb-2 sm:mb-3">Enhanced Efficiency</h3>
    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">Provide 24/7 support and focus on high-value work.</p>
  </div>
  {/* Card 3: Actionable Insights */}
  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-green-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
    <div className="flex items-center justify-center mb-3 sm:mb-4 mt-1 sm:mt-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-bold text-base sm:text-xl text-gray-900 mb-2 sm:mb-3">Actionable Insights</h3>
    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">Gain insights on customer needs for smarter decisions.</p>
  </div>
  {/* Card 4: Sustainable Competitive Edge */}
  <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
    <div className="flex items-center justify-center mb-3 sm:mb-4 mt-1 sm:mt-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    </div>
    <h3 className="font-bold text-base sm:text-xl text-gray-900 mb-2 sm:mb-3">Sustainable Competitive Edge</h3>
    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">Show innovation and stand out from competitors.</p>
  </div>
  {/* Card 5: Superior User Engagement */}
  <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
    <div className="flex items-center justify-center mb-3 sm:mb-4 mt-1 sm:mt-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92"/></svg>
    </div>
    <h3 className="font-bold text-base sm:text-xl text-gray-900 mb-2 sm:mb-3">Superior User Engagement</h3>
    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">Deliver personalized experiences that boost engagement.</p>
  </div>
  {/* Card 6: Scalable & Future-Ready */}
  <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-pink-200 flex flex-col items-center text-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px]">
    <div className="flex items-center justify-center mb-3 sm:mb-4 mt-1 sm:mt-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-bold text-base sm:text-xl text-gray-900 mb-2 sm:mb-3">Scalable & Future-Ready</h3>
    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">Scale and adapt as your business grows.</p>
  </div>
</div>
			  </div>
			</section>


  {/* Personalized Digital AI Solutions (Modern Tabbed Section) */}
  {(() => {
	const aiSolutions = [
	  {
		key: "MedGPT",
		name: "🩺 MedGPT",
		description: (
		  <>
			MedGPT is a personalized health companion that helps users understand symptoms, track health, and manage appointments. Using advanced LLM and medical embeddings, it provides symptom analysis, personalized health and medication reminders, and seamless integration with wearable devices and telemedicine platforms.
			<br /><br />
			Designed for hospitals, digital clinics, and health apps, MedGPT delivers 24/7 AI-driven telehealth support and patient self-diagnosis tools, making healthcare more accessible and efficient.
		  </>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/MedGPT.jpg",
	  },
	  {
		key: "NeuroCareGPT",
		name: "🧠 NeuroCareGPT",
		description: (
		  <>
			NeuroCareGPT is a mental health and wellness assistant providing 24/7 emotional support and mood tracking. It offers conversational CBT-style therapy responses, emotion recognition via text tone analysis, and personalized journaling, self-help, and mindfulness prompts.
			<br /><br />
			Perfect for mental health startups, HR wellness programs, and individuals seeking accessible mental wellness support. NeuroCareGPT addresses the booming demand for AI-driven emotional support tools in today's fast-paced world.
		  </>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/NeuroCareGPT.jpg",
	  },
	  {
		key: "PharmaGPT",
		name: "💊 PharmaGPT",
		description: (
		  <>
			PharmaGPT provides instant access to pharmaceutical insights, drug data, interactions, and the latest research. With semantic search capabilities over drug and clinical data, it offers side-effect analysis, dosage comparison, and seamless integration for doctors, researchers, and pharmacists.
			<br /><br />
			Designed for pharma companies, healthcare researchers, and hospitals, PharmaGPT simplifies complex pharmaceutical data interpretation, reducing manual effort and improving decision-making in the pharmaceutical industry.
		  </>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/PharmaGPT.png",
	  },
	];
	const [activeTab, setActiveTab] = React.useState("MedGPT");
	const solution = aiSolutions.find((s) => s.key === activeTab);
	return (
	  <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
		<div className="max-w-6xl mx-auto">
		  <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
			<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Healthcare AI Chatbot Solutions</h2>
			<div className="flex justify-center">
			  <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
			</div>
			<p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
				Advanced AI-powered chatbots transforming healthcare delivery and patient care.
			</p>
		  </div>
		  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
			{aiSolutions.map((s) => (
			  <button
				key={s.key}
				onClick={() => setActiveTab(s.key)}
				className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow transition-all border-2 text-sm sm:text-base ${
				  activeTab === s.key
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
			  <div className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">{solution.description}</div>
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
  <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900">
	<div className="max-w-4xl mx-auto">
	  <div className="text-center mb-8 sm:mb-12">
		<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Get Started</h2>
		<div className="flex justify-center mb-3 sm:mb-4">
		  <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
		</div>
		<span className="text-white text-base sm:text-lg font-medium text-center">Simple process for success.</span>
	  </div>
  {/* Dynamic onboarding steps as cards */}
  {(() => {
  const steps = [
	{
	  icon: (
		<svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"/><path d="M16 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
	  ),
	  title: 'Contact',
	  description: 'Share your requirements.',
	},
	{
	  icon: (
		<svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
	  ),
	  title: 'Consultation',
	  description: 'Expert discussion and planning.',
	},
	{
	  icon: (
		<svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
	  ),
	  title: 'Proposal',
	  description: 'Detailed scope and cost estimate.',
	},
	{
	  icon: (
		<svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
	  ),
	  title: 'Delivery',
	  description: 'Smooth project execution.',
	},
  ];
	return (
	  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
		{steps.map((step, idx) => (
		  <div key={step.title} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 flex flex-col items-center text-center gap-3 sm:gap-4 h-full">
			<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gray-100 mb-2">
			  {step.icon}
			</div>
			<h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
			<p className="text-gray-800 text-sm sm:text-base">{step.description}</p>
		  </div>
		))}
	  </div>
	);
  })()}
	</div>
  </section>
  
  <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
	<div className="max-w-4xl mx-auto">
	  <div className="text-center mb-6 sm:mb-8">
		<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
		<div className="flex justify-center mb-2">
		  <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
		</div>
		<p className="text-base sm:text-xl text-gray-800 max-w-3xl mx-auto px-4">
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
			<div className="pt-2 sm:pt-3 text-gray-800 text-xs sm:text-sm leading-relaxed">AI chatbots are intelligent virtual assistants powered by artificial intelligence, natural language processing (NLP), and machine learning. They simulate human-like conversations, understand context, learn from interactions, and provide automated responses to user queries 24/7. Our chatbots can handle complex queries, integrate with multiple platforms, and continuously improve through data analysis.</div>
		</details>
		{/* FAQ 2 */}
		<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
			<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				How can AI chatbot development services benefit my business?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-2 sm:pt-3 text-gray-800 text-xs sm:text-sm leading-relaxed">Our AI chatbot solutions deliver significant business value by automating customer support, reducing operational costs by up to 30%, providing 24/7 availability, streamlining workflows, improving response times, enhancing customer satisfaction, and freeing your team to focus on high-value tasks. They also provide valuable insights through conversation analytics and help scale your operations efficiently.</div>
		</details>
		{/* FAQ 3 */}
		<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
			<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				Can AI chatbots be customized to suit my specific business needs?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-2 sm:pt-3 text-gray-800 text-xs sm:text-sm leading-relaxed">Absolutely! Our AI chatbots are fully customizable to align with your unique business goals, brand personality, industry requirements, and user expectations. We tailor conversation flows, integrate with your existing systems (CRM, databases, APIs), customize the UI/UX to match your branding, configure language preferences, and implement specific features that address your business challenges. Every chatbot is designed from the ground up to meet your exact specifications.</div>
		</details>
		{/* FAQ 4 */}
		<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
			<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				What data privacy and security measures are in place for your AI chatbots?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-2 sm:pt-3 text-gray-800 text-xs sm:text-sm leading-relaxed">Security and privacy are our top priorities. We implement end-to-end encryption, secure data storage with regular backups, role-based access controls, and full compliance with industry standards including HIPAA (healthcare), GDPR (data protection), and SOC 2. All data transmissions are encrypted, user information is anonymized where appropriate, and we conduct regular security audits. We also provide detailed audit trails and ensure your chatbot meets all regulatory requirements for your industry.</div>
		</details>
		{/* FAQ 5 */}
		<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
			<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				How long does it take to develop and deploy an AI chatbot?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-2 sm:pt-3 text-gray-800 text-xs sm:text-sm leading-relaxed">Development timelines vary based on complexity and requirements. A basic chatbot can be deployed in 2-4 weeks, while more sophisticated solutions with advanced NLP, multiple integrations, and custom features typically take 6-12 weeks. Our agile development process includes discovery and planning (1-2 weeks), design and development (3-8 weeks), testing and refinement (1-2 weeks), and deployment with training (1 week). We provide regular updates throughout the process and can expedite timelines for urgent projects.</div>
		</details>
	  </div>
	</div>
  </section>

			<Footer />
		</div>
	);
};

export default AIChatbotDevelopment;
