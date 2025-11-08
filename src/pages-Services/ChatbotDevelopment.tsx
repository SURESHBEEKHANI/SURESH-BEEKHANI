import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

const chatbotServices = [
	{
		id: 1,
		title: "Healthcare AI Chatbot Development",
		description: "End-to-end healthcare AI chatbot solutions for hospitals, clinics, and telehealth platforms. Our intelligent virtual assistants provide 24/7 patient support, appointment scheduling, and medical information.",
		icon: <MessageSquare className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Patient Engagement Chatbots",
		description: "AI-powered chatbots designed to enhance patient engagement through personalized health reminders, medication tracking, symptom assessment, and post-treatment follow-ups for improved health outcomes.",
		icon: <Code className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "HIPAA-Compliant Chatbot Solutions",
		description: "Secure, HIPAA-compliant healthcare chatbots that protect patient data while delivering seamless communication. Ensure privacy and regulatory compliance across all patient interactions.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Medical Diagnosis & Triage Chatbots",
		description: "AI chatbots that assist with preliminary symptom assessment, medical triage, and patient routing to appropriate care providers. Reduce wait times and improve emergency response efficiency.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Telemedicine & Virtual Care Chatbots",
		description: "Enable remote healthcare delivery with AI chatbots that facilitate virtual consultations, prescription refills, lab result notifications, and continuous patient monitoring for chronic conditions.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "Mental Health & Wellness Chatbots",
		description: "Compassionate AI chatbots providing mental health support, mood tracking, CBT-based therapy responses, crisis intervention, and wellness resources for accessible mental healthcare.",
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
						<div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								Chatbot Development
							</h1>
							<p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
								Transform healthcare delivery with AI-powered chatbots that enhance patient care, streamline clinical workflows, and provide 24/7 medical support across all healthcare touchpoints.
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
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Healthcare AI chatbots revolutionize patient care by automating clinical workflows, providing instant medical information, and delivering personalized health support across all healthcare touchpoints.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Our HIPAA-compliant chatbots enhance patient engagement, reduce administrative burden, and enable 24/7 healthcare access with advanced medical NLP and diagnostic capabilities.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								From telemedicine to hospital management, our healthcare AI chatbots improve patient outcomes, streamline operations, and transform healthcare delivery.
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
							Healthcare AI Chatbot Development Services
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							Comprehensive healthcare chatbot solutions for hospitals, clinics, and telehealth platforms.
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

			{/* AI Chatbot Benefits Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							Healthcare AI Chatbot Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Transform patient care and clinical operations with intelligent healthcare automation.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Automation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Zap className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Clinical Automation</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Automate patient intake, appointment scheduling, and administrative tasks to reduce staff workload and improve efficiency.</p>
						</div>
						{/* Scalability */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<TrendingUp className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">24/7 Patient Support</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Provide round-the-clock patient assistance, medical information, and emergency triage without staff limitations.</p>
						</div>
						{/* Customization */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Target className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">HIPAA Compliance</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Ensure patient data security and regulatory compliance with HIPAA-certified healthcare chatbot solutions.</p>
						</div>
						{/* Innovation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Brain className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Better Patient Outcomes</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Improve health outcomes through proactive care, medication adherence, and continuous patient monitoring.</p>
						</div>
					</div>
				</div>
			</section>

			<Industries />

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
	  <section className="section-padding">
		<div className="max-w-6xl mx-auto container-padding">
		  <div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
			<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Healthcare AI Chatbot Solutions</h2>
			<div className="flex justify-center">
			  <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
			</div>
			<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
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

		{/* Why Choose Us for Custom AI Chatbot Development Services? (New Section) */}
			<section className="section-padding ai-section">
	<div className="max-w-7xl mx-auto container-padding">
		<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
			<h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">Why Choose Us?</h2>
			<div className="flex justify-center">
				<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
			</div>
			<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
				Trusted healthcare AI expertise and proven results for transforming patient care delivery.
			</p>
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
			{/* Card 1 */}
			<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="10" />
						<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Healthcare AI Expertise</h3>
				<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Extensive experience in healthcare AI, medical NLP, and HIPAA-compliant chatbot development for hospitals and clinics.</p>
			</div>
			{/* Card 2 */}
			<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="4" y="4" width="16" height="16" rx="4" />
						<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Clinical Specialization</h3>
				<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Specialized healthcare chatbots for telemedicine, patient engagement, diagnostics, mental health, and hospital management.</p>
			</div>
			{/* Card 3 */}
			<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Medical NLP & AI</h3>
				<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Advanced medical NLP, clinical decision support, and diagnostic AI for accurate healthcare interactions.</p>
			</div>
			{/* Card 4 */}
			<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
					</svg>
				</div>
				<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Patient-Centric Design</h3>
				<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Compassionate, patient-friendly chatbots designed for accessibility, empathy, and optimal healthcare experiences.</p>
			</div>
			{/* Card 5 */}
			<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="3" y="11" width="18" height="7" rx="2" />
						<path d="M7 11V7a5 5 0 0110 0v4" />
					</svg>
				</div>
				<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">Enterprise Healthcare Scale</h3>
				<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">Scalable solutions from single clinics to multi-hospital networks with consistent performance and reliability.</p>
			</div>
			{/* Card 6 */}
			<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
					<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 8v4l3 3" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">HIPAA & Security First</h3>
				<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">End-to-end encryption, HIPAA compliance, and healthcare-grade security protecting sensitive patient data.</p>
			</div>
		</div>

		{/* Get Started Steps */}
		<div className={`text-center mt-12 sm:mt-16 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
			<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Get Started</h3>
			<div className="flex justify-center mb-3 sm:mb-4">
				<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
			</div>
			<p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">Simple process for success.</p>
		</div>

		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
			{/* Contact */}
			<div className={`modern-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] hover:scale-105 transition-all duration-300 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg text-white">
					<Mail className="w-6 h-6 sm:w-7 sm:h-7" />
				</div>
				<div className="flex-1">
					<h4 className="font-semibold text-sm sm:text-base text-white mb-2">Contact</h4>
					<p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Share your requirements.</p>
				</div>
			</div>

			{/* Consultation */}
			<div className={`modern-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] hover:scale-105 transition-all duration-300 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg text-white">
					<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
				</div>
				<div className="flex-1">
					<h4 className="font-semibold text-sm sm:text-base text-white mb-2">Consultation</h4>
					<p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Expert discussion and planning.</p>
				</div>
			</div>

			{/* Proposal */}
			<div className={`modern-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] hover:scale-105 transition-all duration-300 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-amber-600 shadow-lg text-white">
					<Target className="w-6 h-6 sm:w-7 sm:h-7" />
				</div>
				<div className="flex-1">
					<h4 className="font-semibold text-sm sm:text-base text-white mb-2">Proposal</h4>
					<p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Detailed scope and cost estimate.</p>
				</div>
			</div>

			{/* Delivery */}
			<div className={`modern-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] hover:scale-105 transition-all duration-300 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
				<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg text-white">
					<Zap className="w-6 h-6 sm:w-7 sm:h-7" />
				</div>
				<div className="flex-1">
					<h4 className="font-semibold text-sm sm:text-base text-white mb-2">Delivery</h4>
					<p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Smooth project execution.</p>
				</div>
			</div>
		</div>
	</div>
</section>

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
