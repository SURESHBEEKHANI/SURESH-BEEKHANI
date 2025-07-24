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
	const [currentIndex, setCurrentIndex] = useState(0);
	const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === chatbotTypes.length - 3 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? chatbotTypes.length - 3 : prevIndex - 1
		);
	};

	// Find the hovered industry object
	const hoveredIndustryObj = industries.find((ind) => ind.name === hoveredIndustry);

	const faqData = [
		{
			question: "What are AI chatbots?",
			answer: "AI chatbots are software programs that use artificial intelligence to simulate human-like conversations with users, providing instant responses and automating tasks across digital platforms.",
		},
		{
			question: "What is conversational AI?",
			answer: "Conversational AI refers to technologies, like chatbots and virtual assistants, that can engage in natural, human-like dialogue using natural language processing (NLP) and machine learning.",
		},
		{
			question: "How can your AI chatbot development services solutions help my business?",
			answer: "Our AI chatbot solutions automate customer support, streamline workflows, provide 24/7 assistance, and enhance user engagement, helping your business save time and improve customer satisfaction.",
		},
		{
			question: "What industries can benefit from AI chatbot solutions?",
			answer: "Industries such as healthcare, education, finance, retail, e-commerce, legal, and more can benefit from AI chatbot solutions by automating processes and improving customer interactions.",
		},
		{
			question: "How do your AI chatbots work?",
			answer: "Our AI chatbots use advanced NLP and machine learning algorithms to understand user queries, process information, and deliver accurate, context-aware responses in real time.",
		},
		{
			question: "What features do your AI chatbots offer?",
			answer: "Our chatbots offer features such as multi-language support, integration with various platforms, analytics, personalized responses, secure data handling, and scalability.",
		},
		{
			question: "Can AI chatbots be customized to suit my business needs?",
			answer: "Yes, AI chatbots are fully customizable to align with your business goals, branding, and specific requirements, ensuring a tailored solution for your organization.",
		},
		{
			question: "How do your AI chatbots enhance customer engagement and support?",
			answer: "Our chatbots provide instant, personalized responses, automate routine tasks, and are available 24/7, resulting in improved customer engagement and faster support resolution.",
		},
		{
			question: "Are your AI chatbots capable of handling complex queries?",
			answer: "Yes, our AI chatbots leverage advanced NLP and machine learning to understand and resolve complex queries, providing accurate and context-aware answers.",
		},
		{
			question: "What data privacy and security measures are in place for your AI chatbots?",
			answer: "We prioritize data privacy and security by implementing encryption, secure data storage, and compliance with industry standards such as HIPAA and GDPR.",
		},
		{
			question: "How Can I Integrate Your AI Chatbot Into My Existing Systems Or Platforms?",
			answer: "Our AI chatbots are designed for seamless integration with websites, mobile apps, social media, and enterprise systems using APIs and custom connectors.",
		},
		{
			question: "Do your Chatbots support multiple languages?",
			answer: "Yes, our AI chatbots support multiple languages, enabling you to serve a global audience and provide localized customer experiences.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
			<Navbar />
			{/* Hero Section */}
			<section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
				{/* Background image overlay */}
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-CHATBOT-DEVELOPMENT.jpg')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
					{/* Text Column */}
					<div className="flex-1 text-white space-y-8 w-full">
						<div className="w-full">
							<h1 className="text-3xl md:text-4xl font-extrabold leading-snug tracking-tight drop-shadow-lg w-full break-words whitespace-pre-line text-left">
								Empower Your Business with <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Chatbots Solutions</span>
							</h1>
							<p className="text-lg md:text-2xl text-gray-100 w-full whitespace-pre-line mt-4">
								Get instant, personalized support 24/7 with smart, cost-effective chatbots that streamline communication and boost satisfaction.
							</p>
							<div className="flex space-x-4 pt-6 w-full">
								<a
									href="mailto:sureshbeekhani26@gmail.com"
									className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
								>
									Talk to in Expert
								</a>
							</div>
						</div>
					</div>
					{/* Image Column */}
					<div className="flex-1 flex justify-center md:justify-end">
						<div className="relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
							
						</div>
					</div>
				</div>
			</section>

			{/* AI Models Leveraged by Our Specialists (Moved Up) */}
			<section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/90 to-green-50/90">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="relative flex justify-center lg:justify-start">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/AI-MODEL-LEVERGED.jpg"
									alt="AI Models Leveraged"
									className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
								/>
							</div>
						</div>
						<div className="space-y-6">
							<h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
								AI Models Leveraged by Our Specialists
							</h2>
							<p className="text-xl text-gray-700 max-w-2xl">
								As the chatbot market expands, more businesses are adopting AI chatbots to automate tasks and improve customer service. These solutions make operations more efficient and enhance customer experiences across industries.
							</p>
							<p className="text-lg text-gray-700 max-w-2xl">
								AI chatbots work around the clock, helping companies boost productivity, cut costs, and deliver fast, personalized support.
							</p>
							<p className="text-lg text-gray-700 max-w-2xl">
								Whether for e-commerce or customer service, our AI chatbots answer questions, automate processes, and provide instant assistance helping your business grow and stay competitive.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Customized AI Chatbot Development Services Offered (Moved Down) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<div className="flex justify-center">
							<div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
						</div>
						<h2 className="text-2xl lg:text-3xl font-bold text-white">
							Customized AI Chatbot Development Services Offered
						</h2>
						<p className="text-xl text-gray-200 max-w-3xl mx-auto">
							End-to-end chatbot design, development, integration, and support for
							your business.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{chatbotServices.map((service) => (
							<div
								key={service.id}
								className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300"
							>
								<div className="flex flex-col items-center text-center space-y-4">
									<div className="w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center group-hover:bg-green-300/30 transition-colors mb-2">
										{service.icon}
									</div>
									<h3 className="font-semibold text-lg text-white mb-2">
										{service.title}
									</h3>
									<p className="text-gray-200 leading-relaxed">
										{service.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* AI Chatbots We Develop (Moved Down) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
				<div className="max-w-6xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<div className="flex justify-center">
							<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
						</div>
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
							AI Chatbots We Develop
						</h2>
						<p className="text-xl text-blue-700 max-w-3xl mx-auto">
							AI virtual assistants customized for your business. We build
							conversational chatbots using advanced AI, NLP, and ML.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{chatbotTypes.map((type, idx) => (
							<div
								key={type.id}
								className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
							>
								<div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-200 to-blue-200 mb-4">
									{/* Unique professional icon for each card */}
									{idx === 0 && (
										<svg
											className="w-8 h-8 text-blue-700"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<circle cx="12" cy="12" r="10" />
											<path
												d="M9 12l2 2 4-4"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									)}
									{idx === 1 && (
										<svg
											className="w-8 h-8 text-green-700"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<rect x="4" y="4" width="16" height="16" rx="4" />
											<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									)}
									{idx === 2 && (
										<svg
											className="w-8 h-8 text-blue-700"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round" />
											<circle cx="12" cy="12" r="10" />
										</svg>
									)}
									{idx === 3 && (
										<svg
											className="w-8 h-8 text-green-700"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
											<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
										</svg>
									)}
									{idx === 4 && (
										<svg
											className="w-8 h-8 text-blue-700"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<rect x="3" y="11" width="18" height="7" rx="2" />
											<path d="M7 11V7a5 5 0 0110 0v4" />
										</svg>
									)}
									{idx === 5 && (
										<svg
											className="w-8 h-8 text-green-700"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<path d="M12 8v4l3 3" />
											<circle cx="12" cy="12" r="10" />
										</svg>
									)}
								</div>
								<h3 className="font-semibold text-lg text-blue-900 mb-2">
									{type.title}
								</h3>
								<p className="text-gray-700">{type.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Industries We Work With (Grid Style, Unique List) */}
			<section
				className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900 relative"
			>
				<div className="relative z-10 max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<div className="flex justify-center">
							<div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
						</div>
						<h2 className="text-2xl lg:text-3xl font-bold text-white">
							Industries We Work With
						</h2>
						<p className="text-xl text-green-100 max-w-3xl mx-auto">
				Delivering industry-leading AI chatbot solutions for targeted industries to achieve your goals and boost business.
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
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<div className="flex justify-center">
							<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
						</div>
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
							Integrate Our Chatbots into Different Platforms
						</h2>
						<p className="text-xl text-blue-700 max-w-3xl mx-auto">
							Our AI chatbots integrate seamlessly with all major platforms—reach your customers anywhere, anytime.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
							{/* Website Icon */}
							<svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/></svg>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Websites</h3>
							<p className="text-gray-700">Give your website visitors the help they need right when they need it. Our chatbot for websites can answer queries, provide product information, and help checkout.</p>
						</div>
						<div className="bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
							{/* Social Media Icon */}
							<svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Social Media</h3>
							<p className="text-gray-700">Keep your social media followers engaged with our AI-powered AI chatbot. It can answer questions, support customers, and even run contests and promotions.</p>
						</div>
						<div className="bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
							{/* E-commerce Icon */}
							<svg className="w-8 h-8 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M8 7V5a4 4 0 018 0v2"/></svg>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">E-commerce Portals</h3>
							<p className="text-gray-700">Make online shopping a breeze for your customers with our AI chatbot. It can help them find products, track orders, and answer return questions.</p>
						</div>
						<div className="bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
							{/* Android Icon */}
							<svg className="w-8 h-8 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="10" rx="2"/><path d="M8 17v2m8-2v2"/></svg>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Android Applications</h3>
							<p className="text-gray-700">Enhance your Android app with our AI chatbot. It can provide customer support, automate tasks, and personalize user experience.</p>
						</div>
						<div className="bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
							{/* iOS Icon */}
							<svg className="w-8 h-8 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="3"/></svg>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">iOS Applications</h3>
							<p className="text-gray-700">Our cutting-edge AI chatbot is the perfect addition to your iOS app. It can provide 24/7 customer support, answer questions, and onboard new users.</p>
						</div>
						<div className="bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
							{/* Web App Icon */}
							<svg className="w-8 h-8 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 5V3h8v2"/></svg>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Web-Based Applications</h3>
							<p className="text-gray-700">Post-deployment, we ensure chatbots perform optimally through regular updates, upgrades, and issue resolution support. Our dedicated engineers perform monitoring and troubleshooting to optimize performance.</p>
						</div>
					</div>
				</div>
			</section>

		{/* Why Choose Us for Custom AI Chatbot Development Services? (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900">
	<div className="max-w-7xl mx-auto">
		<div className="text-center space-y-6 mb-16">
			<div className="flex justify-center">
				<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
			</div>
<h2 className="text-2xl lg:text-3xl font-bold text-white">
Why Partner with a Leading AI Chatbot Development Expert?
</h2>
		</div>
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{/* Card 1 */}
			<div className="bg-white/90 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="10" />
						<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-semibold text-lg text-blue-900 mb-2">Proven Chatbot Expertise</h3>
				<p className="text-gray-700">Benefit from extensive experience in designing, developing, and deploying robust AI chatbots tailored to your organization’s unique objectives and operational needs.</p>
			</div>
			{/* Card 2 */}
			<div className="bg-white/90 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="4" y="4" width="16" height="16" rx="4" />
						<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h3 className="font-semibold text-lg text-blue-900 mb-2">Cross-Industry Solutions</h3>
				<p className="text-gray-700">Delivering AI chatbot solutions across customer service, e-commerce, healthcare, and more, with a proven record of meeting the demands of diverse industries.</p>
			</div>
			{/* Card 3 */}
			<div className="bg-white/90 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-semibold text-lg text-blue-900 mb-2">Cutting-Edge AI & NLP</h3>
				<p className="text-gray-700">Utilizing advanced Natural Language Processing and Machine Learning, our chatbots deliver seamless, human-like interactions and intelligent automation.</p>
			</div>
			{/* Card 4 */}
			<div className="bg-white/90 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
					</svg>
				</div>
				<h3 className="font-semibold text-lg text-blue-900 mb-2">Tailored to Your Brand</h3>
				<p className="text-gray-700">Every solution is meticulously crafted to reflect your brand identity, business goals, and audience expectations—whether for support, sales, or engagement.</p>
			</div>
			{/* Card 5 */}
			<div className="bg-white/90 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<rect x="3" y="11" width="18" height="7" rx="2" />
						<path d="M7 11V7a5 5 0 0110 0v4" />
					</svg>
				</div>
				<h3 className="font-semibold text-lg text-blue-900 mb-2">Scalable for Growth</h3>
				<p className="text-gray-700">Our AI chatbots are engineered for scalability, ensuring consistent performance and adaptability as your business evolves and expands.</p>
			</div>
			{/* Card 6 */}
			<div className="bg-white/90 rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-4">
				<div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
					<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path d="M12 8v4l3 3" />
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<h3 className="font-semibold text-lg text-blue-900 mb-2">Uncompromising Security & Compliance</h3>
				<p className="text-gray-700">Data privacy and security are paramount. Our solutions adhere to industry standards, including HIPAA, ensuring robust protection for all user data.</p>
			</div>
		</div>
	</div>
</section>

		{/* How Does a Premier AI Chatbot Development Company Benefit Your Business? (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-50/90 to-blue-50/90">
			  <div className="max-w-5xl mx-auto">
				<div className="text-center space-y-6 mb-16">
				  <div className="flex justify-center">
					<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
				  </div>
<h2 className="text-2xl lg:text-3xl font-bold text-blue-900">How Can Professional AI Chatbot Development Transform Your Business?</h2>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Card 1: Operational Cost Reduction */}
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2">
      <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-semibold text-lg text-blue-900 mb-2">Operational Cost Reduction</h3>
    <p className="text-gray-700">Automate routine tasks and reduce manual work to lower your business costs.</p>
  </div>
  {/* Card 2: Enhanced Efficiency */}
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2">
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <h3 className="font-semibold text-lg text-blue-900 mb-2">Enhanced Efficiency</h3>
    <p className="text-gray-700">Provide instant, 24/7 support and let your team focus on high-value work.</p>
  </div>
  {/* Card 3: Actionable Insights */}
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2">
      <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-semibold text-lg text-blue-900 mb-2">Actionable Insights</h3>
    <p className="text-gray-700">Gain valuable data on customer needs and behaviors for smarter decisions.</p>
  </div>
  {/* Card 4: Sustainable Competitive Edge */}
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2">
      <svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    </div>
    <h3 className="font-semibold text-lg text-blue-900 mb-2">Sustainable Competitive Edge</h3>
    <p className="text-gray-700">Show your commitment to innovation and stand out from competitors.</p>
  </div>
  {/* Card 5: Superior User Engagement */}
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2">
      <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92"/></svg>
    </div>
    <h3 className="font-semibold text-lg text-blue-900 mb-2">Superior User Engagement</h3>
    <p className="text-gray-700">Deliver interactive, personalized experiences that boost engagement.</p>
  </div>
  {/* Card 6: Scalable & Future-Ready */}
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4">
    <div className="flex items-center justify-center mb-4 mt-2">
      <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <h3 className="font-semibold text-lg text-blue-900 mb-2">Scalable & Future-Ready</h3>
    <p className="text-gray-700">Easily scale and adapt your chatbot as your business grows.</p>
  </div>
</div>
			  </div>
			</section>

			{/* AI Chatbot Development Platforms (New Section) */}
	  <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900">
			  <div className="max-w-4xl mx-auto">
				<div className="text-center space-y-6 mb-16">
				  <div className="flex justify-center">
					<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
				  </div>
			  <h2 className="text-2xl lg:text-3xl font-bold text-white">AI Chatbot Development Platforms</h2>
				</div>
		<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
		  <div className="flex flex-col items-center">
			<img src="/image/skills_img/huggingface.png" alt="HuggingFace" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
			<span className="mt-3 text-white font-semibold">HuggingFace</span>
		  </div>
		  <div className="flex flex-col items-center">
			<img src="/image/skills_img/pinecone.png" alt="Pinecone" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
			<span className="mt-3 text-white font-semibold">Pinecone</span>
		  </div>
		  <div className="flex flex-col items-center">
			<img src="/image/skills_img/fastapi.png" alt="FastAPI" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
			<span className="mt-3 text-white font-semibold">FastAPI</span>
		  </div>
		  <div className="flex flex-col items-center">
			<img src="/image/skills_img/openai.jpg" alt="OpenAI" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
			<span className="mt-3 text-white font-semibold">OpenAI</span>
		  </div>
		  <div className="flex flex-col items-center">
			<img src="/image/skills_img/langchain.png" alt="LangChain" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
			<span className="mt-3 text-white font-semibold">LangChain</span>
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
	  <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-100/80 to-green-100/80">
		<div className="max-w-6xl mx-auto">
		  <div className="text-center space-y-6 mb-16">
			<div className="flex justify-center">
			  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
			</div>
			<h2 className="text-2xl lg:text-3xl font-bold text-blue-900">Personalized Digital AI Solutions</h2>
		  </div>
		  <div className="flex flex-wrap justify-center gap-4 mb-12">
			{aiSolutions.map((s) => (
			  <button
				key={s.key}
				onClick={() => setActiveTab(s.key)}
				className={`px-6 py-3 rounded-xl font-semibold shadow transition-all border-2 ${
				  activeTab === s.key
					? "bg-gradient-to-r from-green-400 to-blue-400 text-white border-green-400"
					: "bg-white text-blue-900 border-blue-200 hover:border-green-400"
				}`}
			  >
				{s.name}
			  </button>
			))}
		  </div>
		  <div className="grid md:grid-cols-2 gap-12 items-center bg-white/80 rounded-3xl shadow-lg p-8">
			<div>
			  <h3 className="text-3xl font-bold text-blue-900 mb-4">{solution.name}</h3>
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
  <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900">
	<div className="max-w-4xl mx-auto">
	  <div className="text-center space-y-6 mb-16">
		<div className="flex justify-center">
		  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
		</div>
	<h2 className="text-2xl lg:text-3xl font-bold text-white">Get Started Today</h2>
	  </div>
	  <div className="flex justify-center mb-8">
	<span className="text-white text-lg font-medium text-center">Our professional, results-driven process ensures your project is delivered with clarity, efficiency, and excellence—every step of the way.</span>
	  </div>
  {/* Dynamic onboarding steps as cards */}
  {(() => {
  const steps = [
	{
	  icon: (
		<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"/><path d="M16 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
	  ),
	  title: 'Contact Us',
	  description: 'Reach out to us to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.',
	},
	{
	  icon: (
		<svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
	  ),
	  title: 'Consultation & Discovery',
	  description: 'Schedule a professional consultation with our experts. We’ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
	},
	{
	  icon: (
		<svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
	  ),
	  title: 'Receive a Detailed Proposal',
	  description: 'Based on your requirements, we’ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate—so you know exactly what to expect.',
	},
	{
	  icon: (
		<svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
	  ),
	  title: 'Project Kickoff & Delivery',
	  description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication—ensuring a smooth, successful delivery from start to finish.',
	},
  ];
	return (
	  <div className="grid md:grid-cols-2 gap-8">
		{steps.map((step, idx) => (
		  <div key={step.title} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center gap-4 h-full">
			<div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 mb-2">
			  {step.icon}
			</div>
			<h3 className="font-semibold text-lg text-blue-900 mb-2">{step.title}</h3>
			<p className="text-gray-700">{step.description}</p>
		  </div>
		))}
	  </div>
	);
  })()}
	</div>
  </section>
  
  <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/90 to-green-50/90">
	<div className="max-w-4xl mx-auto">
	  <div className="text-center space-y-6 mb-16">
		<div className="flex justify-center">
		  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
		</div>
		<h2 className="text-2xl lg:text-3xl font-bold text-blue-900">Frequently Asked Questions</h2>
	  </div>
	  <div className="space-y-6">
		{faqData.slice(0, 5).map((faq, idx) => (
		  <div
			key={idx}
			className="bg-white rounded-3xl shadow-lg p-8 flex flex-col transition-all duration-300 hover:scale-[1.02]"
		  >
			<button
			  className="w-full flex items-center justify-between focus:outline-none group"
			  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
			  aria-expanded={openFAQ === idx}
			>
			  <span className="font-semibold text-xl text-blue-900 text-left group-hover:text-green-700 transition-colors duration-200">
				{faq.question}
			  </span>
			  <svg
				className={`w-7 h-7 text-blue-900 group-hover:text-green-700 transform transition-transform duration-200 ${openFAQ === idx ? 'rotate-180' : 'rotate-0'}`}
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			  >
				<path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
			  </svg>
			</button>
			{openFAQ === idx && (
			  <div className="pt-4 text-gray-800 animate-fade-in text-lg">
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

export default AIChatbotDevelopment;
