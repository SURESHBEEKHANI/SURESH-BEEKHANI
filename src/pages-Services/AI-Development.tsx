import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// AI Development Services
const aiServices = [
	{
		id: 1,
		title: "AI Chatbot Development",
		description:
			"Intelligent conversational AI that enhances customer engagement, streamlines operations, and delivers personalized experiences across all touchpoints.",
		icon: (
			<svg
				className="w-7 h-7 text-blue-500"
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
		),
	},
	{
		id: 2,
		title: "Natural Language Processing",
		description:
			"Advanced NLP solutions that enable machines to understand, interpret, and generate human language for improved communication and decision-making.",
		icon: (
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
		),
	},
	{
		id: 3,
		title: "Predictive Analytics",
		description:
			"Data-driven forecasting solutions that leverage advanced algorithms to predict trends, identify patterns, and provide actionable business insights.",
		icon: (
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
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
	},
	{
		id: 4,
		title: "Machine Learning",
		description:
			"Custom ML models that analyze extensive datasets to recognize patterns, adapt to evolving circumstances, and provide competitive advantages across industries.",
		icon: (
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
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
				/>
			</svg>
		),
	},
	{
		id: 5,
		title: "Computer Vision",
		description:
			"Advanced image and video analysis solutions that enable precise object detection, recognition, and visual data interpretation for automation and quality control.",
		icon: (
			<svg
				className="w-7 h-7 text-yellow-500"
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
		),
	},
	{
		id: 6,
		title: "ChatGPT Integration",
		description:
			"Seamless integration of OpenAI's ChatGPT to automate responses, handle queries effectively, and create natural conversational experiences across platforms.",
		icon: (
			<svg
				className="w-7 h-7 text-red-500"
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
		),
	},
];

// Industries for AI Development
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
		description: "ChatGPT integrations for personalized learning, automated grading, and real-time student support.",
		page: "/EdTechAI",
	},
	{
		name: "FinTech",
		image: "/image/pages_img/fintech.jpg",
		description: "ChatGPT for banking, financial support, fraud detection, and customer engagement.",
		page: "/FinTechAI",
	},
	{
		name: "GreenTech",
		image: "/image/pages_img/greentech.jpg",
		description: "ChatGPT for sustainability, energy management, and green innovation.",
		page: "/GreenTechAI",
	},
	{
		name: "Retail",
		image: "/image/pages_img/retail.jpg",
		description: "ChatGPT for retail automation, customer engagement, and personalized shopping experiences.",
		page: "/RetailAI",
	},
	{
		name: "E-Commerce",
		image: "/image/pages_img/E-Commerce.jpg",
		description: "ChatGPT for e-commerce: automate inquiries, provide order tracking, and personalize shopping.",
		page: "/E-Commerce",
	},
	{
		name: "HIPAA Compliance",
		image: "/image/pages_img/HIPAA.avif",
		description: "ChatGPT for HIPAA-compliant healthcare communication and data security.",
		page: "/HIPAACompliance",
	},
	{
		name: "DiagnosticsAI",
		image: "/image/pages_img/Diagnostics.jpg",
		description: "ChatGPT for AI-driven diagnostics, predictive analytics, and workflow automation in healthcare and related fields.",
		page: "/DiagnosticsAI",
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
		question: "What is AI Development?",
		answer: "AI Development involves creating intelligent software systems that can learn, reason, and make decisions. It encompasses machine learning, deep learning, natural language processing, and other AI technologies to solve complex business problems.",
	},
	{
		question: "How can AI Development benefit my business?",
		answer: "AI Development can automate processes, improve decision-making, enhance customer experiences, reduce costs, and provide competitive advantages through data-driven insights and intelligent automation.",
	},
	{
		question: "What types of AI solutions do you develop?",
		answer: "We develop custom AI solutions including predictive analytics, computer vision, natural language processing, recommendation systems, anomaly detection, and process automation tailored to your specific needs.",
	},
	{
		question: "How long does it take to develop an AI solution?",
		answer: "Development time varies based on complexity, ranging from weeks for simple solutions to months for complex enterprise AI systems. We provide detailed timelines during the consultation phase.",
	},
	{
		question: "Do you provide ongoing support for AI solutions?",
		answer: "Yes, we offer comprehensive maintenance, monitoring, and optimization services to ensure your AI solutions perform optimally and adapt to changing business needs.",
	},
];

const onboardingSteps = [
	{
		icon: (
			<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"/><path d="M16 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
		),
		title: 'Contact Us',
		description: 'Reach out to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.',
	},
	{
		icon: (
			<svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
		),
		title: 'Consultation & Discovery',
		description: 'Schedule a professional consultation with our experts. We\'ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
	},
	{
		icon: (
			<svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
		),
		title: 'Receive a Detailed Proposal',
		description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate so you know exactly what to expect.',
	},
	{
		icon: (
			<svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
		),
		title: 'Project Kickoff & Delivery',
		description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring a smooth, successful delivery from start to finish.',
	},
];

const AIDevelopment: React.FC = () => {
	const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
			<Navbar />
			
			{/* Hero Section */}
			<section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 text-white space-y-8">
						<div className="w-full">
							<h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								AI <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Development</span>
							</h1>
							<p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
								Transform your business with AI solutions that automate processes, deliver insights, and spark innovation across industries.
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
					<div className="flex-1 flex justify-center md:justify-end">
						{/* Optionally, you can add an image or illustration here if needed */}
					</div>
				</div>
			</section>

			{/* AI Development Capabilities Section */}
			<section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Left: AI Image */}
						<div className="relative flex justify-center lg:justify-start">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/Power-AI-Development.jpg"
									alt="The Power of AI Development"
									className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
								/>
							</div>
						</div>
						{/* Right: Content */}
						<div className="space-y-6">
							<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
								The Power of AI Development
							</h2>
							<p className="text-base text-gray-700 max-w-2xl">
								Unlock transformative opportunities with advanced AI development. Our tailored solutions enable intelligent automation, predictive insights, and data-driven decision making that fuels business growth.
							</p>
							<p className="text-base text-gray-700 max-w-2xl">
								Our dedicated experts seamlessly integrate and customize AI technologies to your unique needs, empowering smarter operations and competitive advantages.
							</p>
							<p className="text-base text-gray-700 max-w-2xl">
								From healthcare and finance to retail and beyond, AI development redefines how you serve customers and grow your business. Partner with us to stay ahead of the curve.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							Advanced AI Development Services
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Intelligent automation solutions for today's dynamic business landscape.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* AI Chatbot Development */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col gap-4 items-center">
							<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">AI Chatbot Development</h3>
							<p className="text-gray-800 text-center">Intelligent conversational AI that enhances customer engagement and delivers personalized experiences.</p>
						</div>
						{/* Natural Language Processing */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col gap-4 items-center">
							<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Natural Language Processing</h3>
							<p className="text-gray-800 text-center">Advanced NLP solutions that enable machines to understand and interpret human language.</p>
						</div>
						{/* Predictive Analytics */}
						<div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 shadow-xl border border-purple-200 flex flex-col gap-4 items-center">
							<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Predictive Analytics</h3>
							<p className="text-gray-800 text-center">Data-driven forecasting solutions that predict trends and provide actionable insights.</p>
						</div>
						{/* Machine Learning */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col gap-4 items-center">
							<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Machine Learning</h3>
							<p className="text-gray-800 text-center">Custom ML models that analyze data to recognize patterns and provide competitive advantages.</p>
						</div>
						{/* Computer Vision */}
						<div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col gap-4 items-center">
							<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Computer Vision</h3>
							<p className="text-gray-800 text-center">Advanced image and video analysis for automation and quality control.</p>
						</div>
						{/* ChatGPT Integration */}
						<div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 shadow-xl border border-pink-200 flex flex-col gap-4 items-center">
							<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">ChatGPT Integration</h3>
							<p className="text-gray-800 text-center">Seamless integration of OpenAI's ChatGPT for natural conversational experiences.</p>
						</div>
					</div>
				</div>
			</section>

			{/* AI Development Benefits Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							AI Development Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Intelligent automation solutions for today's dynamic business landscape.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Automation */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
							<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Automation</h3>
							<p className="text-gray-800 text-center">Streamline repetitive tasks and processes for increased efficiency and productivity.</p>
						</div>
						{/* Scalability */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
							<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Scalability</h3>
							<p className="text-gray-800 text-center">Scale from pilot projects to enterprise-wide deployments seamlessly.</p>
						</div>
						{/* Customization */}
						<div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 shadow-xl border border-purple-200 flex flex-col items-center gap-4">
							<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 3 12.9V12a2 2 0 1 1 0-4v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 12 3.6V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1.51 1c.26 0 .52-.09.74-.26l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09A1.65 1.65 0 0 0 21 12v.09a1.65 1.65 0 0 0-1 1.51z"/></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Customization</h3>
							<p className="text-gray-800 text-center">Tailor every aspect to perfectly align with your business objectives.</p>
						</div>
						{/* Innovation */}
						<div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
							<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">Innovation</h3>
							<p className="text-gray-800 text-center">Drive innovation and competitive advantage through cutting-edge AI solutions.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							Industries We Work With
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Tailored AI development solutions across diverse industry verticals.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-2xl">
						{industries.map((industry) => (
							<div
								key={industry.name}
								className="group relative border-b border-r border-white/30 min-h-[180px] flex items-center justify-center cursor-pointer overflow-hidden"
								onMouseEnter={() => setHoveredIndustry(industry.name)}
								onMouseLeave={() => setHoveredIndustry(null)}
							>
								<img
									src={industry.image}
									alt={industry.name}
									className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-300 z-0"
								/>
								{/* Default dark overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10 z-10 transition-all duration-300 group-hover:opacity-0"></div>
								{/* Hover overlay with content */}
								<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'rgba(23, 37, 84, 0.9)'}}>
									<div className="text-2xl font-bold text-white mb-4">{industry.name}</div>
									<div className="text-white text-base font-normal mb-4">{industry.description}</div>
									<a href={industry.page} className="inline-flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform">Learn More <span aria-hidden="true">→</span></a>
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

			{/* Platforms Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							AI Development Integration Platforms
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Leverage industry-leading platforms for robust AI development implementations.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
						{platforms.map((platform) => (
							<div className="flex flex-col items-center" key={platform.name}>
								<img src={platform.image} alt={platform.name} className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
								<span className="mt-3 text-blue-900 font-semibold">{platform.name}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* AI Development Process Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-5xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
							AI Development Process
						</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Streamlined approach to implementing AI development solutions with proven methodology.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Define the use case */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">Define Use Case</span>
							<p className="text-gray-800 text-center">Pinpoint your business challenge to maximize AI development impact.</p>
						</div>
						{/* Data collection & preparation */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">Data Collection</span>
							<p className="text-gray-800 text-center">Curate high-quality data for optimal AI model performance.</p>
						</div>
						{/* Development & integration */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">Development</span>
							<p className="text-gray-800 text-center">Embed AI capabilities into your applications and systems.</p>
						</div>
						{/* Deployment & monitoring */}
						<div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10v4M15 8v8"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">Deployment</span>
							<p className="text-gray-800 text-center">Deploy with confidence and monitor performance for improvement.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Trusted expertise and proven results for your AI development implementation needs.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Expertise */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-cyan-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">Expertise</span>
							<p className="text-gray-800 text-center">Work with seasoned professionals ensuring your project's success.</p>
						</div>
						{/* Custom Solutions */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a2 2 0 0 1-3.49 0H5a2 2 0 0 0-2 2v6.255a2 2 0 0 1 0 3.49V19a2 2 0 0 0 2 2h6.255a2 2 0 0 1 3.49 0H19a2 2 0 0 0 2-2v-6.255a2 2 0 0 1 0-3.49z"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">Custom Solutions</span>
							<p className="text-gray-800 text-center">Bespoke AI development integrations for your unique business goals.</p>
						</div>
						{/* End-to-End Support */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1v-6H5v-2a7 7 0 0 1 14 0v2h-2v6h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">End-to-End Support</span>
							<p className="text-gray-800 text-center">Comprehensive support from strategy to deployment and optimization.</p>
						</div>
						{/* Proven Results */}
						<div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8 shadow-xl border border-yellow-200 flex flex-col items-center gap-4">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a5 5 0 0 0 10 0z"/><path d="M21 7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V5h5v2zM3 7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5H3v2z"/></svg>
							</span>
							<span className="font-bold text-gray-900 text-lg text-center">Proven Results</span>
							<p className="text-gray-800 text-center">Join clients who have achieved measurable business impact.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Onboarding Process Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Our Onboarding Process</h2>
						<div className="flex justify-center mb-4">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base text-gray-800 max-w-2xl mx-auto">We guide you through the journey of AI development with our proven steps.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{onboardingSteps.map((step, index) => {
							const gradients = [
								"from-green-500 to-emerald-600",
								"from-blue-500 to-indigo-600", 
								"from-yellow-500 to-amber-600",
								"from-purple-500 to-violet-600"
							];
							const bgGradients = [
								"from-green-50 to-emerald-100",
								"from-blue-50 to-indigo-100",
								"from-yellow-50 to-amber-100", 
								"from-purple-50 to-violet-100"
							];
							const borders = [
								"border-green-200",
								"border-blue-200",
								"border-yellow-200",
								"border-purple-200"
							];
							const iconColors = [
								"text-green-600",
								"text-blue-600",
								"text-yellow-600",
								"text-purple-600"
							];
							return (
								<div key={index} className={`bg-gradient-to-br ${bgGradients[index]} rounded-2xl p-6 shadow-md flex items-start gap-4 border ${borders[index]}`}>
									<div className={`w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border-2 ${borders[index]}`}>
										<div className={iconColors[index]}>
											{step.icon}
										</div>
									</div>
									<div>
										<h3 className="font-semibold text-base text-gray-900 mb-2">{step.title}</h3>
										<p className="text-gray-800 text-sm">{step.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
						<div className="flex justify-center">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Common questions about AI development implementation and our services.
						</p>
					</div>
					<div className="space-y-3">
						{faqData.map((faq, idx) => (
							<div
								key={idx}
								className="bg-white rounded-xl shadow-lg p-4 flex flex-col transition-all duration-300 hover:scale-[1.01]"
							>
								<button
									className="w-full flex items-center justify-between focus:outline-none group"
									onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
									aria-expanded={openFAQ === idx}
								>
									<span className="font-semibold text-base text-gray-900 text-left group-hover:text-blue-700 transition-colors duration-200">
										{faq.question}
									</span>
									<div className="flex items-center justify-center w-5 h-5 text-blue-900 group-hover:text-cyan-700 transition-colors duration-200">
										{openFAQ === idx ? (
											<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
												<path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										) : (
											<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
												<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										)}
									</div>
								</button>
								{openFAQ === idx && (
									<div className="pt-2 text-gray-800 animate-fade-in text-sm">
										{faq.answer}
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
