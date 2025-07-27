import React from "react";
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

const AIDevelopment: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />

			{/* Section 1: AI Development (Hero Section) */}
			<section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
				{/* Background image overlay */}
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center"></div>
				{/* Content Wrapper */}
				<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
					{/* Text Column */}
					<div className="flex-1 text-white space-y-8 w-full">
						<div className="w-full">
							<h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								AI{' '}
								<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
									Development
								</span>
							</h1>
							<p className="text-lg md:text-2xl text-gray-100 w-full whitespace-pre-line mt-4">
								Transform your business with cutting-edge AI solutions. Our comprehensive AI development services empower organizations to automate processes, gain insights, and drive innovation across all industries.
							</p>
							<div className="flex space-x-4 pt-6 w-full">
								<a
									href="mailto:sureshbeekhani26@gmail.com"
									className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
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

			{/* Section 2: Get Accurate Insights with Our AI Development Services */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 flex justify-center mb-8 md:mb-0">
						<img
							src="/image/pages_img/Tech with Our AI Services.jpg"
							alt="Get Accurate Insights"
							className="w-full max-w-xl h-[420px] rounded-2xl shadow-2xl object-cover border-4 border-blue-100"
						/>
					</div>
					<div className="flex-1">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">
							Unlock Actionable Insights with AI Development
						</h2>
						<div className="text-blue-900 text-lg space-y-4">
							<p>
								Transform your data into a strategic asset. Our advanced AI development solutions reveal hidden opportunities, enabling you to make proactive, confident decisions.
							</p>
							<p>
								Custom-built AI models streamline your workflows, minimize risk, and maximize ROI—giving your business a decisive edge.
							</p>
							<p>
								Experience seamless integration, expert guidance, and measurable results that fuel sustainable growth.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: Key Features of Our AI Development Services */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<h3 className="text-3xl font-bold text-center text-blue-100 mb-4">
							Key Advantages of Our AI Development
						</h3>
						<p className="text-center text-blue-100 text-lg max-w-3xl mx-auto mb-8">
							Discover the features that set our AI development apart—delivering clarity, agility, and competitive advantage for your business.
						</p>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* Robustness */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
									<svg
										className="w-7 h-7 text-blue-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<rect x="4" y="4" width="16" height="16" rx="4" />
										<path
											d="M8 12h8"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Robust Performance
								</h4>
								<p className="text-blue-900">
									Our AI solutions are engineered for reliability—adapting to diverse data sources, scaling effortlessly, and delivering consistent results in any environment.
								</p>
							</div>
							{/* Flexibility */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
									<svg
										className="w-7 h-7 text-green-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 8v4l3 3" />
										<circle cx="12" cy="12" r="10" />
									</svg>
								</div>
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Flexible Customization
								</h4>
								<p className="text-blue-900">
									We tailor AI models to your unique needs, allowing you to refine and adapt solutions as your business evolves.
								</p>
							</div>
							{/* Transfer Learning */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
									<svg
										className="w-7 h-7 text-yellow-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 4v16m0 0H3m9 0h9" />
									</svg>
								</div>
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Accelerated Development
								</h4>
								<p className="text-blue-900">
									Leverage pre-trained models and transfer learning to accelerate deployment and unlock value faster—no need to start from scratch.
								</p>
							</div>
							{/* Interpretable Models */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
									<svg
										className="w-7 h-7 text-purple-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path d="M8 15h8M8 11h8M8 7h8" />
									</svg>
								</div>
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Transparent Insights
								</h4>
								<p className="text-blue-900">
									Gain full visibility into how AI decisions are made. Our interpretable models build trust and empower you to act with confidence.
								</p>
							</div>
							{/* Automated Feature Selection */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full">
									<svg
										className="w-7 h-7 text-pink-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
										<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
									</svg>
								</div>
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Automated Intelligence
								</h4>
								<p className="text-blue-900">
									Quickly identify the most impactful AI features—saving time, reducing complexity, and strengthening your AI outcomes.
								</p>
							</div>
							{/* Real-time Scoring */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
									<svg
										className="w-7 h-7 text-cyan-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<rect x="3" y="11" width="18" height="7" rx="2" />
										<path d="M7 11V7a5 5 0 0110 0v4" />
									</svg>
								</div>
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Real-Time Processing
								</h4>
								<p className="text-blue-900">
									Process new data instantly as it arrives, enabling you to make timely, informed decisions that keep you ahead of the curve.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: Experience the Future of Enterprise Solutions with Our AI Development Services */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
							Experience the Future of Enterprise Solutions with Our AI Development Services
						</h2>
						<p className="text-lg text-blue-700 max-w-3xl mx-auto">
							Discover comprehensive AI solutions designed to transform your business operations and drive innovation across all industries.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* AI Chatbot Development */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-blue-900">AI Chatbot Development</h3>
							</div>
							<p className="text-blue-800 leading-relaxed text-center">
								Step into the future of customer engagement with our AI Development Solutions. We specialize in developing intelligent chatbots that enhance customer engagement, streamline operations, and deliver personalized experiences, empowering your business for success in the digital era.
							</p>
						</div>

						{/* NLP */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-green-900">NLP</h3>
							</div>
							<p className="text-green-800 leading-relaxed text-center">
								NLP solutions help machines understand human language better, making communication and decision-making more efficient. By enhancing language understanding, NLP streamlines communication between humans and machines. It facilitates more efficient decision-making processes across various applications and industries.
							</p>
						</div>

						{/* Predictive Analytics */}
						<div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 shadow-lg border border-purple-100">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-purple-900">Predictive Analytics</h3>
							</div>
							<p className="text-purple-800 leading-relaxed text-center">
								Utilizing advanced statistical and machine learning algorithms, our predictive analysis solutions ensure accurate predictions of forthcoming events and outcomes. By examining past trends and data points, this service provides valuable insights to enable organizations to anticipate and plan for future scenarios.
							</p>
						</div>

						{/* Machine Learning */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-cyan-100">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-cyan-900">Machine Learning</h3>
							</div>
							<p className="text-cyan-800 leading-relaxed text-center">
								As a leading AI ML development company, our machine learning service use data-driven algorithms to unlock actionable insights and drive transformative solutions for your business. By analyzing extensive datasets, machine learning models can recognize patterns and adapt to evolving circumstances. It provides a competitive edge across industries, from finance and healthcare to e-commerce.
							</p>
						</div>

						{/* Computer Vision */}
						<div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-yellow-100">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
									<svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-yellow-900">Computer Vision</h3>
							</div>
							<p className="text-yellow-800 leading-relaxed text-center">
								Within our suite of AI software development services, we offer a comprehensive computer vision service that opens up new horizons in visual data interpretation. Our AI as a service specializes in precise image recognition and object detection. From improving diagnostics in healthcare to image recognition, our computer vision service is at the forefront of driving transformative change and progress.
							</p>
						</div>

						{/* Chat GPT Integration */}
						<div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-red-100">
							<div className="flex flex-col items-center text-center mb-6">
								<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
									<img 
										src="/image/skills_img/openai.jpg" 
										alt="OpenAI Logo" 
										className="w-8 h-8 object-contain"
									/>
								</div>
								<h3 className="text-xl font-bold text-red-900">Chat GPT Integration</h3>
							</div>
							<p className="text-red-800 leading-relaxed text-center">
								Enhance your digital interactions with our Chat GPT integration services. We empower your platform to automate responses, handle queries effectively, and engage users in natural and meaningful conversations. This saves time and resources and also sets you apart in the competitive landscape of AI-powered communication. The result is an enriched user experience where interactions become smarter and more intuitive.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries We Work With (Updated to match PredictiveModelling style) */}
			<section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900 relative">
				<div className="absolute inset-0 pointer-events-none">
					<div className="w-full h-full bg-gradient-to-tr from-cyan-400/10 via-blue-700/10 to-green-400/10 opacity-80"></div>
				</div>
				<div className="relative z-10 max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-20">
						<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
							Industries Transforming with AI Development
						</h2>
						<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
							Empowering organizations across sectors to make smarter, data-driven decisions with advanced AI and machine learning.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-2xl shadow-2xl">
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

			{/* AI Development Platforms (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900">
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<div className="flex justify-center">
							<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
						</div>
						<h2 className="text-2xl lg:text-3xl font-bold text-white">Leading AI Development Platforms</h2>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/tensorflow.png" alt="TensorFlow" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">TensorFlow</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/pytorch.png" alt="PyTorch" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">PyTorch</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/sikitlearn.png" alt="Scikit-learn" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">Scikit-learn</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/openai.jpg" alt="OpenAI" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">OpenAI</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/huggingface.png" alt="Hugging Face" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">Hugging Face</span>
						</div>
					</div>
				</div>
			</section>

			{/* AI Development Process (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
							Our AI Development Process
						</h2>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Data Preprocessing */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2v20m10-10H2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Data Preparation</h3>
							<p className="text-gray-700">We collect, cleanse, and transform raw data into a format ready for AI model training and analysis.</p>
						</div>
						{/* Model Selection */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
								<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Model Selection</h3>
							<p className="text-gray-700">We identify the optimal AI model architecture based on your data and business objectives.</p>
						</div>
						{/* Model Training */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Model Training</h3>
							<p className="text-gray-700">We train and validate your AI model using best-in-class techniques to ensure accuracy and reliability.</p>
						</div>
						{/* Model Deployment */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
								<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Model Deployment</h3>
							<p className="text-gray-700">We seamlessly integrate your AI model into your business systems for real-world impact.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us for AI Development? (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Why Partner with Us for AI Development?</h2>
						<p className="text-lg text-blue-800/80 max-w-2xl mx-auto">See why leading organizations trust us to deliver AI development solutions that drive measurable business outcomes.</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Expertise */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Proven Expertise</h3>
							<p className="text-gray-700">Our team combines deep industry knowledge with advanced AI experience to deliver results you can trust.</p>
						</div>
						{/* Custom Solutions */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
								<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Tailored Solutions</h3>
							<p className="text-gray-700">Every AI solution is custom-built to align with your business objectives and deliver maximum value.</p>
						</div>
						{/* Advanced Technology */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Cutting-Edge Technology</h3>
							<p className="text-gray-700">We utilize the latest AI tools and algorithms to ensure your solutions are accurate, scalable, and future-ready.</p>
						</div>
						{/* Proven Results */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
								<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Demonstrated Results</h3>
							<p className="text-gray-700">Our AI solutions consistently drive efficiency, smarter decisions, and business growth for our clients.</p>
						</div>
						{/* End-to-End Support */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
								<svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Comprehensive Support</h3>
							<p className="text-gray-700">From initial consultation to deployment and beyond, we provide end-to-end support for your success.</p>
						</div>
						{/* Data Security */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full">
								<svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
									<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Data Security First</h3>
							<p className="text-gray-700">We safeguard your data with industry-leading security practices and strict compliance standards.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Frequently Asked Questions (FAQ) Section) */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-6">
						{/* FAQ 1 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What is AI Development?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">AI Development involves creating intelligent software systems that can learn, reason, and make decisions. It encompasses machine learning, deep learning, natural language processing, and other AI technologies to solve complex business problems.</div>
						</details>
						{/* FAQ 2 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								How can AI Development benefit my business?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">AI Development can automate processes, improve decision-making, enhance customer experiences, reduce costs, and provide competitive advantages through data-driven insights and intelligent automation.</div>
						</details>
						{/* FAQ 3 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What types of AI solutions do you develop?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">We develop custom AI solutions including predictive analytics, computer vision, natural language processing, recommendation systems, anomaly detection, and process automation tailored to your specific needs.</div>
						</details>
						{/* FAQ 4 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								How long does it take to develop an AI solution?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">Development time varies based on complexity, ranging from weeks for simple solutions to months for complex enterprise AI systems. We provide detailed timelines during the consultation phase.</div>
						</details>
						{/* FAQ 5 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								Do you provide ongoing support for AI solutions?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">Yes, we offer comprehensive maintenance, monitoring, and optimization services to ensure your AI solutions perform optimally and adapt to changing business needs.</div>
						</details>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default AIDevelopment;
