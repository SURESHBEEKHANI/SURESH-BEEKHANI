import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const chatbotServices = [
	{
		id: 1,
		title: "AI Chatbot Development Solutions",
		description:
			"We offer end-to-end AI development services, including design, development, integration, and support. Our intelligent virtual assistants engage users in meaningful conversations 24/7.",
		icon: (
			<svg
				className="w-7 h-7 text-blue-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 20h9"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 4v16m0 0H3"
				/>
			</svg>
		),
	},
	{
		id: 2,
		title: "Chatbot Design and Development",
		description:
			"We specialize in creating chatbots designed for business needs. Our team collaborates to understand the brand, goals, and challenges. We develop chatbots according to your brand personality alignment.",
		icon: (
			<svg
				className="w-7 h-7 text-green-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" />
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 15h8M8 11h8M8 7h8"
				/>
			</svg>
		),
	},
	{
		id: 3,
		title: "Multi-language Chatbot Development",
		description:
			"We can develop multilingual chatbots that can converse seamlessly in different languages. We provide localized support and enhance customer satisfaction across diverse markets.",
		icon: (
			<svg
				className="w-7 h-7 text-blue-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 20h9M12 4v16m0 0H3"
				/>
			</svg>
		),
	},
	{
		id: 4,
		title: "Chatbot Integration",
		description:
			"Our integration experts ensure smooth chatbot integration across websites, apps, and messaging platforms. Our chatbot integration services enhance workflow efficiency, providing a platform for effortless communication.",
		icon: (
			<svg
				className="w-7 h-7 text-green-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" />
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 15h8M8 11h8M8 7h8"
				/>
			</svg>
		),
	},
	{
		id: 5,
		title: "Natural Language Processing Chatbot Development",
		description:
			"With advanced NLP capabilities, we create AI chatbots that understand users' complex queries, provide accurate information, provide context-aware interactions, and resolve customer issues effectively.",
		icon: (
			<svg
				className="w-7 h-7 text-blue-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 20h9M12 4v16m0 0H3"
				/>
			</svg>
		),
	},
	{
		id: 6,
		title: "Chatbot Maintenance and Support",
		description:
			"Post-deployment, we ensure chatbots perform optimally through regular updates, upgrades, and issue resolution support. Our dedicated engineers perform monitoring and troubleshooting to optimize performance.",
		icon: (
			<svg
				className="w-7 h-7 text-green-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" />
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 15h8M8 11h8M8 7h8"
				/>
			</svg>
		),
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
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
			<Navbar />
			{/* Hero Section */}
			<section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
				{/* Background image overlay */}
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center"></div>
				{/* Content Wrapper */}
				<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
					{/* Text Column */}
					<div className="flex-1 text-white space-y-8 w-full">
						<div className="w-full">
							<h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								AI{' '}
								<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
									Chatbot Development
								</span>
							</h1>
							<p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
								Transform your business with AI chatbot solutions that automate interactions, deliver insights, and drive engagement across all touchpoints.
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
					{/* Image Column */}
					<div className="relative flex-1 flex justify-center lg:justify-end">
						
					</div>
				</div>
			</section>

			{/* AI Models Leveraged by Our Specialists (Moved Up) */}
			<section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="relative flex justify-center lg:justify-start">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/AI-MODEL-LEVERGED.jpg"
									alt="AI Models Leveraged"
									className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
								/>
							</div>
						</div>
						<div className="space-y-6">
							<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
								AI Models Powering Our Chatbot Solutions
							</h2>
							<div className="text-gray-700 text-base space-y-4">
								<p>
									AI-driven chatbots automate operations and deliver exceptional customer experiences.
								</p>
								<p>
									Our chatbots boost productivity, reduce costs, and provide personalized service at scale.
								</p>
								<p>
									From e-commerce to customer service, our AI chatbots answer questions and automate workflows.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Comprehensive AI Chatbot Development Services */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							AI Chatbot Development Services
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Complete chatbot solutions for your business.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* AI Chatbot Development Solutions */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col gap-4 items-center">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-2">
									<svg
										className="w-7 h-7 text-cyan-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
										/>
									</svg>
								</div>
								<h3 className="font-semibold text-base text-gray-900 mb-2">
									AI Chatbot Development Solutions
								</h3>
								<p className="text-gray-800 leading-relaxed">
									End-to-end AI development services with intelligent virtual assistants for 24/7 engagement.
								</p>
							</div>
						</div>

						{/* Chatbot Design and Development */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col gap-4 items-center">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
									<svg
										className="w-7 h-7 text-blue-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8 15h8M8 11h8M8 7h8"
										/>
									</svg>
								</div>
								<h3 className="font-semibold text-base text-gray-900 mb-2">
									Chatbot Design and Development
								</h3>
								<p className="text-gray-800 leading-relaxed">
									Specialized chatbot creation aligned with your brand personality and business goals.
								</p>
							</div>
						</div>

						{/* Multi-language Chatbot Development */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col gap-4 items-center">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2">
									<svg
										className="w-7 h-7 text-green-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
										/>
									</svg>
								</div>
								<h3 className="font-semibold text-base text-gray-900 mb-2">
									Multi-language Chatbot Development
								</h3>
								<p className="text-gray-800 leading-relaxed">
									Multilingual chatbots for seamless conversations across diverse markets.
								</p>
							</div>
						</div>

						{/* Chatbot Integration */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col gap-4 items-center">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-2">
									<svg
										className="w-7 h-7 text-yellow-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8 15h8M8 11h8M8 7h8"
										/>
									</svg>
								</div>
								<h3 className="font-semibold text-base text-gray-900 mb-2">
									Chatbot Integration
								</h3>
								<p className="text-gray-800 leading-relaxed">
									Smooth integration across websites, apps, and messaging platforms for efficient communication.
								</p>
							</div>
						</div>

						{/* Natural Language Processing Chatbot Development */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-purple-200 flex flex-col gap-4 items-center">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
									<svg
										className="w-7 h-7 text-purple-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 className="font-semibold text-base text-gray-900 mb-2">
									Natural Language Processing Chatbot Development
								</h3>
								<p className="text-gray-800 leading-relaxed">
									Advanced NLP chatbots that understand complex queries and provide context-aware responses.
								</p>
							</div>
						</div>

						{/* Chatbot Maintenance and Support */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-pink-200 flex flex-col gap-4 items-center">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-2">
									<svg
										className="w-7 h-7 text-pink-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8 15h8M8 11h8M8 7h8"
										/>
									</svg>
								</div>
								<h3 className="font-semibold text-base text-gray-900 mb-2">
									Chatbot Maintenance and Support
								</h3>
								<p className="text-gray-800 leading-relaxed">
									Post-deployment optimization with regular updates, monitoring, and troubleshooting support.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* AI Chatbots We Develop (Moved Down) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							Custom AI Chatbots We Build
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Tailored chatbot solutions across diverse industry verticals.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* AI Chatbot Engineering */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-gray-900">AI Chatbot Engineering</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-sm">
								Advanced AI chatbots using machine learning and neural networks to automate tasks and drive growth.
							</p>
						</div>

						{/* AI Voice Assistant Chatbots */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="10" />
										<path d="M8 15h8M8 11h8M8 7h8" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-gray-900">AI Voice Assistant Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-sm">
								Hands-free voice assistants with speech recognition, ML, and NLP for human-like interactions.
							</p>
						</div>

						{/* Medical AI Chatbots */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-purple-200">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-gray-900">Medical AI Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-sm">
								AI chatbots for clinical workflows, remote consultations, and improved patient engagement.
							</p>
						</div>

						{/* Legal Chatbots */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-gray-900">Legal Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-sm">
								Legal chatbots for client interactions, document review, and automated legal services.
							</p>
						</div>

						{/* Social Media Chatbot Program */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-gray-900">Social Media Chatbot Program</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-sm">
								AI chatbots for social media engagement, 24/7 support, and enhanced brand presence.
							</p>
						</div>

						{/* Vision-based Chatbots */}
						<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-pink-200">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 text-pink-600"
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
								<h3 className="text-lg font-bold text-gray-900">Vision-based Chatbots</h3>
							</div>
							<p className="text-gray-800 leading-relaxed text-center text-sm">
								Next-generation AI chatbots with computer vision for enhanced understanding and personalized recommendations.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries We Work With (Grid Style, Unique List) */}
			<section
				className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white"
			>
				<div className="relative z-10 max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							Industries with AI Chatbot Development
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Tailored chatbot solutions across diverse industry verticals.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-2xl">
						{industries.map((industry) => (
							<div
								key={industry.name}
								className="group relative border-b border-r border-white/30 min-h-[180px] flex items-center justify-center cursor-pointer overflow-hidden"
							>
								<img
									src={industry.image}
									alt={industry.name}
									className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-300 z-0"
								/>
							   {/* Default dark overlay */}
							   <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10 z-10 transition-all duration-300 group-hover:opacity-0"></div>
							   {/* Hover overlay with content (90% transparent, matches card background) */}
							   <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'rgba(23, 37, 84, 0.9)'}}>
								   <div className="text-2xl font-bold text-white mb-4">{industry.name}</div>
								   <div className="text-white text-base font-normal mb-4">{industry.description}</div>
								   <a href={industry.page} className="inline-flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform">Read More <span aria-hidden="true">→</span></a>
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

			{/* Integrate Our Chatbots into Different Platforms (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">AI Chatbot Development Platforms</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Leverage industry-leading platforms for robust chatbot implementations.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/huggingface.png" alt="HuggingFace" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-blue-900 font-semibold">HuggingFace</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/pinecone.png" alt="Pinecone" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-blue-900 font-semibold">Pinecone</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/fastapi.png" alt="FastAPI" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-blue-900 font-semibold">FastAPI</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/openai.jpg" alt="OpenAI" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-blue-900 font-semibold">OpenAI</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/langchain.png" alt="LangChain" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-blue-900 font-semibold">LangChain</span>
						</div>
					</div>
				</div>
			</section>

		{/* Why Choose Us for Custom AI Chatbot Development Services? (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
	<div className="max-w-7xl mx-auto">
		<div className="text-center space-y-4 mb-12">
			<h2 className="text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us?</h2>
			<div className="flex justify-center">
				<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
			</div>
			<p className="text-xl text-gray-800 max-w-3xl mx-auto">
				Trusted expertise and proven results for your chatbot implementation needs.
			</p>
		</div>
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{/* Card 1 */}
			<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="10" />
						<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-semibold text-base text-gray-900 mb-2">Proven Chatbot Expertise</h3>
				<p className="text-gray-800">Extensive experience in designing, developing, and deploying robust AI chatbots.</p>
			</div>
			{/* Card 2 */}
			<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="4" y="4" width="16" height="16" rx="4" />
						<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-semibold text-base text-gray-900 mb-2">Cross-Industry Solutions</h3>
				<p className="text-gray-800">AI chatbot solutions across customer service, e-commerce, healthcare, and diverse industries.</p>
			</div>
			{/* Card 3 */}
			<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-semibold text-base text-gray-900 mb-2">Cutting-Edge AI & NLP</h3>
				<p className="text-gray-800">Advanced NLP and Machine Learning for seamless, human-like interactions.</p>
			</div>
			{/* Card 4 */}
			<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
					</svg>
				</div>
				<h3 className="font-semibold text-base text-gray-900 mb-2">Tailored to Your Brand</h3>
				<p className="text-gray-800">Meticulously crafted solutions reflecting your brand identity and business goals.</p>
			</div>
			{/* Card 5 */}
			<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-purple-200 flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="3" y="11" width="18" height="7" rx="2" />
						<path d="M7 11V7a5 5 0 0110 0v4" />
					</svg>
				</div>
				<h3 className="font-semibold text-base text-gray-900 mb-2">Scalable for Growth</h3>
				<p className="text-gray-800">Engineered for scalability with consistent performance and adaptability.</p>
			</div>
			{/* Card 6 */}
			<div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-pink-200 flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 8v4l3 3" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-semibold text-base text-gray-900 mb-2">Uncompromising Security & Compliance</h3>
				<p className="text-gray-800">Data privacy and security with industry standards including HIPAA compliance.</p>
			</div>
		</div>
	</div>
</section>

		{/* How Does a Premier AI Chatbot Development Company Benefit Your Business? (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
			  <div className="max-w-5xl mx-auto">
				<div className="text-center space-y-4 mb-12">
				  <h2 className="text-xl lg:text-2xl font-bold text-gray-900">How AI Chatbots Transform Your Business</h2>
				  <div className="flex justify-center">
					<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
				  </div>
				  <p className="text-xl text-gray-800 max-w-3xl mx-auto">
					Intelligent automation solutions for today's dynamic business landscape.
				  </p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Card 1: Operational Cost Reduction */}
  <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2 w-16 h-16 bg-cyan-100 rounded-full">
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-3">Operational Cost Reduction</h3>
    <p className="text-gray-800 text-base leading-relaxed">Automate tasks and reduce costs.</p>
  </div>
  {/* Card 2: Enhanced Efficiency */}
  <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2 w-16 h-16 bg-blue-100 rounded-full">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-3">Enhanced Efficiency</h3>
    <p className="text-gray-800 text-base leading-relaxed">Provide 24/7 support and focus on high-value work.</p>
  </div>
  {/* Card 3: Actionable Insights */}
  <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2 w-16 h-16 bg-green-100 rounded-full">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-3">Actionable Insights</h3>
    <p className="text-gray-800 text-base leading-relaxed">Gain insights on customer needs for smarter decisions.</p>
  </div>
  {/* Card 4: Sustainable Competitive Edge */}
  <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2 w-16 h-16 bg-yellow-100 rounded-full">
      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-3">Sustainable Competitive Edge</h3>
    <p className="text-gray-800 text-base leading-relaxed">Show innovation and stand out from competitors.</p>
  </div>
  {/* Card 5: Superior User Engagement */}
  <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-purple-200 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2 w-16 h-16 bg-purple-100 rounded-full">
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92"/></svg>
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-3">Superior User Engagement</h3>
    <p className="text-gray-800 text-base leading-relaxed">Deliver personalized experiences that boost engagement.</p>
  </div>
  {/* Card 6: Scalable & Future-Ready */}
  <div className="bg-white/95 rounded-2xl p-8 shadow-xl border border-pink-200 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2 w-16 h-16 bg-pink-100 rounded-full">
      <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-3">Scalable & Future-Ready</h3>
    <p className="text-gray-800 text-base leading-relaxed">Scale and adapt as your business grows.</p>
  </div>
</div>
			  </div>
			</section>


  {/* Personalized Digital AI Solutions (Modern Tabbed Section) */}
  {(() => {
	const aiSolutions = [
	  {
		key: "GP-Pod",
		name: "GP-Pod",
		description: (
		  <>
			The GP POD is a disease-diagnostic AI chatbot software that utilizes machine learning and NLP to analyze patient data and provide accurate diagnoses. It assists doctors in making informed treatment decisions and improves patient care. It is a hospital appointment chatbot that simplifies patient appointments, the diagnosis process, gathering patient information, and using AI to identify potential diseases.
			<br /><br />
			The GP POD system uses AI in healthcare that streamlines patient diagnosis, enhances patient care, saves resources, and prioritizes patient-centered care.
		  </>
		),
		cta: "Book a Demo",
	image: "/image/pages_img/GP-Pod.webp",
	  },
	  {
		key: "InfluencerGPT",
		name: "InfluencerGPT",
		description: (
		  <>
			Influencer GPT is a chatbot designed to help influencers, content creators, and speakers connect more effectively and informally with their followers. It enables followers to get direct answers from their favorite influencers, alleviating the burden of handling numerous questions and requests.
			<br /><br />
			Influencer GPT utilizes data preprocessing, embedding generation, vector store, and indexing to efficiently store and retrieve relevant information, fostering meaningful connections between creators and their audiences.
		  </>
		),
		cta: "Book a Demo",
	image: "/image/pages_img/InfluencerGPT.webp",
	  },
	  {
		key: "LawGPT",
		name: "Law GPT",
		description: (
		  <>
			Law Chat GPT is an AI-powered app that generates accurate legal content with natural precision. Initially focused on drafting essential documents, Law Chat GPT has demonstrated significant productivity and scalability gains.
			<br /><br />
			The platform also assists with legal research and analysis, expanding its potential to empower legal practitioners. With continuous learning, Law Chat GPT promises to transform the legal landscape and enable lawyers to handle a broader range of work more efficiently.
		  </>
		),
		cta: "Book a Demo",
	image: "/image/pages_img/law-gpt.jpg",
	  },
	];
	const [activeTab, setActiveTab] = React.useState("LawGPT");
	const solution = aiSolutions.find((s) => s.key === activeTab);
	return (
	  <section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
		<div className="max-w-6xl mx-auto">
		  <div className="text-center space-y-4 mb-12">
			<h2 className="text-xl lg:text-2xl font-bold text-gray-900">Personalized Digital AI Solutions</h2>
			<div className="flex justify-center">
			  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
			</div>
			<p className="text-xl text-gray-800 max-w-3xl mx-auto">
				Tailored chatbot solutions across diverse industry verticals.
			</p>
		  </div>
		  <div className="flex flex-wrap justify-center gap-4 mb-12">
			{aiSolutions.map((s) => (
			  <button
				key={s.key}
				onClick={() => setActiveTab(s.key)}
				className={`px-6 py-3 rounded-xl font-semibold shadow transition-all border-2 ${
				  activeTab === s.key
					? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-blue-500"
					: "bg-white text-gray-900 border-gray-200 hover:border-blue-500"
				}`}
			  >
				{s.name}
			  </button>
			))}
		  </div>
		  <div className="grid md:grid-cols-2 gap-12 items-center bg-white/80 rounded-3xl shadow-lg p-8">
			<div>
			  <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.name}</h3>
			  <div className="text-lg text-gray-700 mb-6">{solution.description}</div>
			</div>
			<div className="flex justify-center">
			  <img
				src={solution.image}
				alt={solution.name}
				className="max-w-full rounded-3xl shadow-xl border-4 border-blue-100"
				style={{ minHeight: 280, objectFit: "cover" }}
			  />
			</div>
		  </div>
		</div>
	  </section>
	);
  })()}
  <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900">
	<div className="max-w-4xl mx-auto">
	  <div className="text-center mb-12">
		<h2 className="text-xl lg:text-2xl font-bold text-white mb-2">Get Started</h2>
		<div className="flex justify-center mb-4">
		  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
		</div>
		<span className="text-white text-lg font-medium text-center">Simple process for success.</span>
	  </div>
  {/* Dynamic onboarding steps as cards */}
  {(() => {
  const steps = [
	{
	  icon: (
		<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"/><path d="M16 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
	  ),
	  title: 'Contact',
	  description: 'Share your requirements.',
	},
	{
	  icon: (
		<svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
	  ),
	  title: 'Consultation',
	  description: 'Expert discussion and planning.',
	},
	{
	  icon: (
		<svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
	  ),
	  title: 'Proposal',
	  description: 'Detailed scope and cost estimate.',
	},
	{
	  icon: (
		<svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
	  ),
	  title: 'Delivery',
	  description: 'Smooth project execution.',
	},
  ];
	return (
	  <div className="grid md:grid-cols-2 gap-8">
		{steps.map((step, idx) => (
		  <div key={step.title} className="bg-white/95 rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center gap-4 h-full">
			<div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 mb-2">
			  {step.icon}
			</div>
			<h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
			<p className="text-gray-800">{step.description}</p>
		  </div>
		))}
	  </div>
	);
  })()}
	</div>
  </section>
  
  <section className="py-20 px-6 lg:px-8 bg-white">
	<div className="max-w-4xl mx-auto">
	  <div className="text-center mb-8">
		<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
		<div className="flex justify-center mb-2">
		  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
		</div>
		<p className="text-xl text-gray-800 max-w-3xl mx-auto">
			Common questions about chatbot implementation and our services.
		</p>
	  </div>
	  {/* FAQ Accordion */}
	  <div className="space-y-4">
		{/* FAQ 1 */}
		<details className="bg-white/95 rounded-2xl shadow-xl border border-gray-200 p-4 group">
			<summary className="cursor-pointer font-semibold text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				What are AI chatbots?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-3 text-gray-800 text-sm">AI chatbots use artificial intelligence to simulate human-like conversations and automate tasks.</div>
		</details>
		{/* FAQ 2 */}
		<details className="bg-white/95 rounded-2xl shadow-xl border border-gray-200 p-4 group">
			<summary className="cursor-pointer font-semibold text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				How can your AI chatbot development services solutions help my business?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-3 text-gray-800 text-sm">Our AI chatbot solutions automate support, streamline workflows, and provide 24/7 assistance.</div>
		</details>
		{/* FAQ 3 */}
		<details className="bg-white/95 rounded-2xl shadow-xl border border-gray-200 p-4 group">
			<summary className="cursor-pointer font-semibold text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				What industries can benefit from AI chatbot solutions?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-3 text-gray-800 text-sm">Healthcare, education, finance, retail, e-commerce, and legal industries benefit from AI chatbots.</div>
		</details>
		{/* FAQ 4 */}
		<details className="bg-white/95 rounded-2xl shadow-xl border border-gray-200 p-4 group">
			<summary className="cursor-pointer font-semibold text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				Can AI chatbots be customized to suit my business needs?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-3 text-gray-800 text-sm">Yes, AI chatbots are fully customizable to align with your business goals and branding.</div>
		</details>
		{/* FAQ 5 */}
		<details className="bg-white/95 rounded-2xl shadow-xl border border-gray-200 p-4 group">
			<summary className="cursor-pointer font-semibold text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
				What data privacy and security measures are in place for your AI chatbots?
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
				<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
			</summary>
			<div className="pt-3 text-gray-800 text-sm">We implement encryption, secure data storage, and compliance with HIPAA and GDPR standards.</div>
		</details>
	  </div>
	</div>
  </section>

			<Footer />
		</div>
	);
};

export default AIChatbotDevelopment;
