import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

// AI Development Services
const aiServices = [
	{
		id: 1,
		title: "AI Chatbot Development",
		description: "Intelligent conversational AI that enhances customer engagement, streamlines operations, and delivers personalized experiences across all touchpoints.",
		icon: <MessageSquare className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Natural Language Processing",
		description: "Advanced NLP solutions that enable machines to understand, interpret, and generate human language for improved communication and decision-making.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Predictive Analytics",
		description: "Data-driven forecasting solutions that leverage advanced algorithms to predict trends, identify patterns, and provide actionable business insights.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Machine Learning",
		description: "Custom ML models that analyze extensive datasets to recognize patterns, adapt to evolving circumstances, and provide competitive advantages across industries.",
		icon: <Code className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Computer Vision",
		description: "Advanced image and video analysis solutions that enable precise object detection, recognition, and visual data interpretation for automation and quality control.",
		icon: <Eye className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "ChatGPT Integration",
		description: "Seamless integration of OpenAI's ChatGPT to automate responses, handle queries effectively, and create natural conversational experiences across platforms.",
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
								Transform your business with AI solutions that automate processes, deliver insights, and spark innovation across industries.
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
								The Power of AI Development
							</h2>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Unlock transformative opportunities with advanced AI development. Our tailored solutions enable intelligent automation, predictive insights, and data-driven decision making that fuels business growth.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Our dedicated experts seamlessly integrate and customize AI technologies to your unique needs, empowering smarter operations and competitive advantages.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								From healthcare and finance to retail and beyond, AI development redefines how you serve customers and grow your business. Partner with us to stay ahead of the curve.
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
							Advanced AI Development Services
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							Intelligent automation solutions for today's dynamic business landscape.
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
							AI Development Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
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
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Streamline repetitive tasks and processes for increased efficiency and productivity.</p>
						</div>
						{/* Scalability */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<TrendingUp className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Scalability</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Scale from pilot projects to enterprise-wide deployments seamlessly.</p>
						</div>
						{/* Customization */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Target className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Customization</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Tailor every aspect to perfectly align with your business objectives.</p>
						</div>
						{/* Innovation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Brain className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Innovation</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Drive innovation and competitive advantage through cutting-edge AI solutions.</p>
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
							AI Development Integration Platforms
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Leverage industry-leading platforms for robust AI development implementations.
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
							AI Development Process
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
							Streamlined approach to implementing AI development solutions with proven methodology.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Define the use case */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Define Use Case</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Pinpoint your business challenge to maximize AI development impact.</p>
						</div>
						{/* Data collection & preparation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Data Collection</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Curate high-quality data for optimal AI model performance.</p>
						</div>
						{/* Development & integration */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Code className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Development</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Embed AI capabilities into your applications and systems.</p>
						</div>
						{/* Deployment & monitoring */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<Zap className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Deployment</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Deploy with confidence and monitor performance for improvement.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="section-padding">
				<div className="max-w-6xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us </h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Trusted expertise and proven results for your AI development implementation needs.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Expertise */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Expertise</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Work with seasoned professionals ensuring your project's success.</p>
						</div>
						{/* Custom Solutions */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Custom Solutions</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Bespoke AI development integrations for your unique business goals.</p>
						</div>
						{/* End-to-End Support */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Shield className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">End-to-End Support</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Comprehensive support from strategy to deployment and optimization.</p>
						</div>
						{/* Proven Results */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Results</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Join clients who have achieved measurable business impact.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Onboarding Process Section */}
			<section className="section-padding ai-section">
				<div className="max-w-6xl mx-auto container-padding">
					<div className={`text-center mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Our Onboarding Process</h2>
						<div className="flex justify-center mb-3 sm:mb-4">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">We guide you through the journey of AI development with our proven steps.</p>
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
							Common questions about AI development implementation and our services.
						</p>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-3 sm:space-y-4">
						{/* FAQ 1 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What is AI Development?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">AI Development involves creating intelligent software systems that can learn, reason, and make decisions. It encompasses machine learning, deep learning, natural language processing, and other AI technologies to solve complex business problems.</div>
						</details>
						{/* FAQ 2 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								How can AI Development benefit my business?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">AI Development can automate processes, improve decision-making, enhance customer experiences, reduce costs, and provide competitive advantages through data-driven insights and intelligent automation.</div>
						</details>
						{/* FAQ 3 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What types of AI solutions do you develop?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">We develop custom AI solutions including predictive analytics, computer vision, natural language processing, recommendation systems, anomaly detection, and process automation tailored to your specific needs.</div>
						</details>
						{/* FAQ 4 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								How long does it take to develop an AI solution?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Development time varies based on complexity, ranging from weeks for simple solutions to months for complex enterprise AI systems. We provide detailed timelines during the consultation phase.</div>
						</details>
						{/* FAQ 5 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								Do you provide ongoing support for AI solutions?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Yes, we offer comprehensive maintenance, monitoring, and optimization services to ensure your AI solutions perform optimally and adapt to changing business needs.</div>
						</details>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default AIDevelopment;