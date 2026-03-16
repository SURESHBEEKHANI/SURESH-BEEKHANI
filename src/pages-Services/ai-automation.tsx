import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

// AI Automation Services across all industries
const autonomousServices = [
	{
		id: 1,
		title: "Workflow Automation",
		description: "Deploy intelligent AI agents that automate business processes, task management, data entry, and operational workflows, reducing manual effort and improving efficiency across your organization.",
		icon: <Workflow className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Multi-Agent Coordination",
		description: "Coordinate multiple AI agents across departments—from sales and marketing to operations and support—ensuring seamless collaboration and communication between teams.",
		icon: <Network className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Adaptive Intelligence",
		description: "Self-learning AI agents that continuously improve performance, optimize processes, and adapt to changing business conditions based on real-time data and outcomes.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Intelligent Decision Support",
		description: "Autonomous AI systems that analyze business data, market trends, and operational metrics to provide real-time recommendations, reducing errors and improving outcomes.",
		icon: <Target className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Process Orchestration",
		description: "Intelligent agents that coordinate complex business workflows—from order processing to fulfillment—managing resources, optimizing operations, and ensuring compliance.",
		icon: <Cpu className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "24/7 Monitoring & Alerts",
		description: "Round-the-clock AI-powered monitoring agents that track systems, detect anomalies, predict issues, and automatically alert teams for timely intervention.",
		icon: <Eye className="h-7 w-7" />,
		color: "from-teal-500 to-cyan-500"
	},
];

// Industries for AI Automation
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
	{ name: "OpenAI", image: "/image/skills_img/openai.jpg" },
	{ name: "Claude", image: "/image/skills_img/Claude.png" },
	{ name: "Gemini", image: "/image/skills_img/Gemini.png" },
	{ name: "DeepSeek", image: "/image/skills_img/deepseek.png" },
	{ name: "Groq", image: "/image/skills_img/groq.png" },
	{ name: "Llama", image: "/image/skills_img/llama.png" },
	{ name: "Mistral", image: "/image/skills_img/mistral.png" },
	{ name: "Hugging Face", image: "/image/skills_img/huggingface.png" },
	{ name: "Transformers", image: "/image/skills_img/transformers.png" },
	{ name: "LangChain", image: "/image/skills_img/langchain.png" },
	{ name: "LangGraph", image: "/image/skills_img/langgraph.png" },
	{ name: "LangSmith", image: "/image/skills_img/Langsimth.png" },
	{ name: "CrewAI", image: "/image/skills_img/crewai.png" },
	{ name: "AutoGen", image: "/image/skills_img/autogen.png" },
	{ name: "TensorFlow", image: "/image/skills_img/tensorflow.png" },
	{ name: "PyTorch", image: "/image/skills_img/pytorch.png" },
	{ name: "Scikit-learn", image: "/image/skills_img/sikitlearn.png" },
	{ name: "Pinecone", image: "/image/skills_img/pinecone.png" },
	{ name: "Qdrant", image: "/image/skills_img/quadrant.png" },
	{ name: "AWS", image: "/image/skills_img/aws.png" },
	{ name: "Docker", image: "/image/skills_img/docker.png" },
	{ name: "Linux", image: "/image/skills_img/liunx.png" },
	{ name: "Git", image: "/image/skills_img/git.png" },
	{ name: "GitHub", image: "/image/skills_img/GitHub.jpg" },
	{ name: "FastAPI", image: "/image/skills_img/fastapi.png" },
	{ name: "MLflow", image: "/image/skills_img/mlflow.svg" },
	{ name: "DVC", image: "/image/skills_img/dvc.png" },
	{ name: "NumPy", image: "/image/skills_img/numpy.png" },
	{ name: "Pandas", image: "/image/skills_img/pandas.png" },
	{ name: "Matplotlib", image: "/image/skills_img/matplot.png" },
	{ name: "Seaborn", image: "/image/skills_img/seaborn.svg" },
	{ name: "Plotly", image: "/image/skills_img/plotly.jpg" },
	{ name: "Power BI", image: "/image/skills_img/Powerbi.png" },
	{ name: "Tableau", image: "/image/skills_img/tableau.png" },
	{ name: "OpenCV", image: "/image/skills_img/opencv.png" },
	{ name: "YOLOv5", image: "/image/skills_img/yolov5.png" },
	{ name: "Ultralytics", image: "/image/skills_img/Ultratics.png" },
	{ name: "Detectron2", image: "/image/skills_img/detectron2.png" },
	{ name: "Roboflow", image: "/image/skills_img/roboflow.png" },
	{ name: "PaddleOCR", image: "/image/skills_img/paddleocr.png" },
	{ name: "Tesseract", image: "/image/skills_img/tesseract.png" },
	{ name: "BERT", image: "/image/skills_img/bert.png" },
	{ name: "NLTK", image: "/image/skills_img/nltk.png" },
	{ name: "spaCy", image: "/image/skills_img/spacy.png" },
	{ name: "Gensim", image: "/image/skills_img/gensim.jpg" },
	{ name: "TextBlob", image: "/image/skills_img/textblob.jpg" },
	{ name: "MCP", image: "/image/skills_img/mcp.png" },
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

const onboardingSteps = [
	{
		icon: <Mail className="h-8 w-8" />,
		title: 'Contact Us',
		description: 'Reach out to start the conversation. Share your workflows and automation needs so we can understand how AI can transform your business operations.',
		color: "from-green-500 to-emerald-500"
	},
	{
		icon: <Brain className="h-8 w-8" />,
		title: 'Consultation & Discovery',
		description: 'Schedule a consultation with our AI automation experts. We\'ll assess your workflows, discuss requirements, and provide strategic recommendations.',
		color: "from-blue-500 to-indigo-500"
	},
	{
		icon: <Target className="h-8 w-8" />,
		title: 'Receive Detailed Proposal',
		description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the automation scope, implementation timeline, and transparent cost estimate.',
		color: "from-yellow-500 to-amber-500"
	},
	{
		icon: <Zap className="h-8 w-8" />,
		title: 'Deployment & Integration',
		description: 'Once approved, our AI specialists launch your project with validation, team training, and seamless system integration ensuring successful deployment.',
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
			<section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
					<div className="text-white space-y-6 sm:space-y-8">
						<h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
							AI Automation
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
							Transform your business with intelligent AI agents that automate workflows, enhance operations, and drive efficiency through intelligent automation across all industries.
						</p>
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
						<div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
							<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
								The Power of AI Automation
							</h2>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Revolutionize your business with intelligent AI agents that work tirelessly to automate workflows, enhance operational efficiency, and improve outcomes without constant human oversight.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Our AI agents leverage advanced machine learning, natural language processing, and intelligent decision-making algorithms to handle complex tasks, coordinate teams, and continuously improve based on real-world outcomes.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								From customer service and data processing to inventory management and quality control, AI automation transforms how you operate, enabling 24/7 productivity, reduced costs, and improved business efficiency.
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
							AI Automation Solutions
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							Intelligent AI automation that transforms business workflows and operational efficiency.
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
							AI Automation Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Deliver better business outcomes and operational excellence through intelligent automation.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* 24/7 Operation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Clock className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">24/7 Operations</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Continuous business operations and support without breaks, ensuring consistent quality around the clock.</p>
						</div>
						{/* Adaptive Intelligence */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Brain className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Adaptive Intelligence</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Learn from outcomes and data, continuously improving accuracy and performance over time.</p>
						</div>
						{/* Cost Efficiency */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<TrendingUp className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Operational Efficiency</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Reduce operational costs, minimize errors, and optimize resource allocation while improving quality.</p>
						</div>
						{/* Scalability */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<Zap className="h-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">Business Scalability</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Scale operations instantly without proportional increases in staff or infrastructure costs.</p>
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
							Industry-leading AI platforms optimized for business automation and intelligent operations.
						</p>
					</div>
					<div className="relative w-full overflow-hidden py-4">
						<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center">
							{[...platforms, ...platforms].map((platform, index) => (
								<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32" key={`${platform.name}-${index}`}>
									<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-2 modern-card" />
									<span className="mt-2 sm:mt-3 text-blue-900 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
								</div>
							))}
						</div>
						{/* Optional: Add gradient overlays for smooth fading edges */}
						<div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50/90 to-transparent pointer-events-none z-10" />
						<div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50/90 to-transparent pointer-events-none z-10" />
					</div>
				</div>
			</section>

			{/* AI Autonomous Process Section */}
			<section className="section-padding ai-section">
				<div className="max-w-5xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
							AI Implementation Process
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
							Proven methodology for deploying secure, intelligent AI automation in business environments.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Define objectives */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Business Assessment</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Identify workflows and business challenges where AI automation delivers maximum impact.</p>
						</div>
						{/* Design agent architecture */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Secure Design</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Design secure AI architecture with intelligent decision support and compliance measures.</p>
						</div>
						{/* Train & test */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Code className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Validation & Testing</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Train AI with business data and validate with stakeholders for accuracy and effectiveness.</p>
						</div>
						{/* Deploy & monitor */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<Zap className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Deployment & Optimization</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Seamless integration into workflows with ongoing monitoring and optimization.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="section-padding">
				<div className="max-w-6xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us for AI Automation</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Industry-focused AI expertise with proven results in business automation and operational efficiency.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Expertise */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Automation Expertise</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of business workflows and automation best practices.</p>
						</div>
						{/* Custom Solutions */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Enterprise-Grade Solutions</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom AI automation designed for business environments with efficiency as priority.</p>
						</div>
						{/* End-to-End Support */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Shield className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Security & Compliance</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Full compliance with robust security measures protecting business data and privacy.</p>
						</div>
						{/* Proven Results */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Business Impact</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Organizations achieving improved outcomes and operational efficiency.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Onboarding Process Section */}
			<section className="section-padding ai-section">
				<div className="max-w-6xl mx-auto container-padding">
					<div className={`text-center mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">AI Onboarding Process</h2>
						<div className="flex justify-center mb-3 sm:mb-4">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">Your journey to transforming your business with AI automation starts here.</p>
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
							Common questions about AI automation implementation and our services.
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
