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

const techCategories = [
	{ id: "all", name: "All Technologies" },
	{ id: "models", name: "LLMs & Models" },
	{ id: "frameworks", name: "AI Frameworks" },
	{ id: "ml", name: "Machine Learning" },
	{ id: "data", name: "Data Science" },
	{ id: "vision", name: "Computer Vision" },
	{ id: "nlp", name: "NLP" },
	{ id: "infra", name: "Databases & Infra" },
];

const categorizedPlatforms = [
	{ name: "OpenAI", image: "/image/skills_img/openai.jpg", category: "models" },
	{ name: "Claude", image: "/image/skills_img/Claude.png", category: "models" },
	{ name: "Gemini", image: "/image/skills_img/Gemini.png", category: "models" },
	{ name: "DeepSeek", image: "/image/skills_img/deepseek.png", category: "models" },
	{ name: "Groq", image: "/image/skills_img/groq.png", category: "models" },
	{ name: "Llama", image: "/image/skills_img/llama.png", category: "models" },
	{ name: "Mistral", image: "/image/skills_img/mistral.png", category: "models" },
	{ name: "Hugging Face", image: "/image/skills_img/huggingface.png", category: "models" },
	{ name: "Transformers", image: "/image/skills_img/transformers.png", category: "frameworks" },
	{ name: "LangChain", image: "/image/skills_img/langchain.png", category: "frameworks" },
	{ name: "LangGraph", image: "/image/skills_img/langgraph.png", category: "frameworks" },
	{ name: "LangSmith", image: "/image/skills_img/Langsimth.png", category: "frameworks" },
	{ name: "CrewAI", image: "/image/skills_img/crewai.png", category: "frameworks" },
	{ name: "AutoGen", image: "/image/skills_img/autogen.png", category: "frameworks" },
	{ name: "MCP", image: "/image/skills_img/mcp.png", category: "frameworks" },
	{ name: "TensorFlow", image: "/image/skills_img/tensorflow.png", category: "ml" },
	{ name: "PyTorch", image: "/image/skills_img/pytorch.png", category: "ml" },
	{ name: "Scikit-learn", image: "/image/skills_img/sikitlearn.png", category: "ml" },
	{ name: "MLflow", image: "/image/skills_img/mlflow.svg", category: "ml" },
	{ name: "DVC", image: "/image/skills_img/dvc.png", category: "ml" },
	{ name: "NumPy", image: "/image/skills_img/numpy.png", category: "data" },
	{ name: "Pandas", image: "/image/skills_img/pandas.png", category: "data" },
	{ name: "Matplotlib", image: "/image/skills_img/matplot.png", category: "data" },
	{ name: "Seaborn", image: "/image/skills_img/seaborn.svg", category: "data" },
	{ name: "Plotly", image: "/image/skills_img/plotly.jpg", category: "data" },
	{ name: "Power BI", image: "/image/skills_img/Powerbi.png", category: "data" },
	{ name: "Tableau", image: "/image/skills_img/tableau.png", category: "data" },
	{ name: "OpenCV", image: "/image/skills_img/opencv.png", category: "vision" },
	{ name: "YOLOv5", image: "/image/skills_img/yolov5.png", category: "vision" },
	{ name: "Ultralytics", image: "/image/skills_img/Ultratics.png", category: "vision" },
	{ name: "Detectron2", image: "/image/skills_img/detectron2.png", category: "vision" },
	{ name: "Roboflow", image: "/image/skills_img/roboflow.png", category: "vision" },
	{ name: "PaddleOCR", image: "/image/skills_img/paddleocr.png", category: "vision" },
	{ name: "Tesseract", image: "/image/skills_img/tesseract.png", category: "vision" },
	{ name: "BERT", image: "/image/skills_img/bert.png", category: "nlp" },
	{ name: "NLTK", image: "/image/skills_img/nltk.png", category: "nlp" },
	{ name: "spaCy", image: "/image/skills_img/spacy.png", category: "nlp" },
	{ name: "Gensim", image: "/image/skills_img/gensim.jpg", category: "nlp" },
	{ name: "TextBlob", image: "/image/skills_img/textblob.jpg", category: "nlp" },
	{ name: "Pinecone", image: "/image/skills_img/pinecone.png", category: "infra" },
	{ name: "Qdrant", image: "/image/skills_img/quadrant.png", category: "infra" },
	{ name: "AWS", image: "/image/skills_img/aws.png", category: "infra" },
	{ name: "Docker", image: "/image/skills_img/docker.png", category: "infra" },
	{ name: "Linux", image: "/image/skills_img/liunx.png", category: "infra" },
	{ name: "Git", image: "/image/skills_img/git.png", category: "infra" },
	{ name: "GitHub", image: "/image/skills_img/GitHub.jpg", category: "infra" },
	{ name: "FastAPI", image: "/image/skills_img/fastapi.png", category: "infra" },
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
	const [activeCategory, setActiveCategory] = useState("all");
	const [hoveredStep, setHoveredStep] = useState<number | null>(0);

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
			<section className="section-padding relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-70 -z-10" />
				<div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob -z-10" />
				<div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 -z-10" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-10 sm:mb-14 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
							AI Automation Benefits
						</h2>
						<div className="flex justify-center">
							<div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 mt-4 font-medium">
							Deliver better business outcomes and operational excellence through intelligent automation.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
						{/* 24/7 Operation */}
						<div className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/50 shadow-lg shadow-blue-900/5 group relative overflow-hidden ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
							<div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-2 mx-auto text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
								<Clock className="w-8 h-8 sm:w-9 sm:h-9" />
							</div>
							<h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 text-center w-full">24/7 Operations</h3>
							<p className="text-sm text-gray-600 text-center leading-relaxed">Continuous business operations and support without breaks, ensuring consistent quality around the clock.</p>
						</div>
						{/* Adaptive Intelligence */}
						<div className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/50 shadow-lg shadow-emerald-900/5 group relative overflow-hidden ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
							<div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-2 mx-auto text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
								<Brain className="w-8 h-8 sm:w-9 sm:h-9" />
							</div>
							<h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 text-center w-full">Adaptive Intelligence</h3>
							<p className="text-sm text-gray-600 text-center leading-relaxed">Learn from outcomes and data, continuously improving accuracy and performance over time.</p>
						</div>
						{/* Cost Efficiency */}
						<div className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/50 shadow-lg shadow-violet-900/5 group relative overflow-hidden ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
							<div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl flex items-center justify-center mb-2 mx-auto text-white shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
								<TrendingUp className="w-8 h-8 sm:w-9 sm:h-9" />
							</div>
							<h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 text-center w-full">Operational Efficiency</h3>
							<p className="text-sm text-gray-600 text-center leading-relaxed">Reduce operational costs, minimize errors, and optimize resource allocation while improving quality.</p>
						</div>
						{/* Scalability */}
						<div className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/50 shadow-lg shadow-amber-900/5 group relative overflow-hidden ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
							<div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center mb-2 mx-auto text-white shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
								<Zap className="w-8 h-8 sm:w-9 sm:h-9" />
							</div>
							<h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 text-center w-full">Business Scalability</h3>
							<p className="text-sm text-gray-600 text-center leading-relaxed">Scale operations instantly without proportional increases in staff or infrastructure costs.</p>
						</div>
					</div>
				</div>
			</section>

			<Industries />



			{/* Platforms Section */}
			<section className="section-padding bg-white relative">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
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

					{/* Category Tabs */}
					<div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
						{techCategories.map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${
									activeCategory === category.id 
										? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105' 
										: 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
								}`}
							>
								{category.name}
							</button>
						))}
					</div>

					{/* 'All' View (Animated Marquees) */}
					{activeCategory === "all" ? (
						<div className="flex flex-col gap-6 sm:gap-8 overflow-hidden py-4 -mx-4 sm:mx-0 relative">
							{/* Marquee Row 1 (Forward) */}
							<div className="relative w-full overflow-hidden">
								<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center">
									{[...categorizedPlatforms.slice(0, 16), ...categorizedPlatforms.slice(0, 16)].map((platform, index) => (
										<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row1-${platform.name}-${index}`}>
											<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
											<span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
										</div>
									))}
								</div>
							</div>
							{/* Marquee Row 2 (Reverse - handled by inline style if utility class not present, standard marquee is okay) */}
							<div className="relative w-full overflow-hidden">
								<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
									{[...categorizedPlatforms.slice(16, 32), ...categorizedPlatforms.slice(16, 32)].map((platform, index) => (
										<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row2-${platform.name}-${index}`}>
											<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
											<span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
										</div>
									))}
								</div>
							</div>
							{/* Marquee Row 3 (Forward) */}
							<div className="relative w-full overflow-hidden">
								<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDuration: '30s' }}>
									{[...categorizedPlatforms.slice(32), ...categorizedPlatforms.slice(32)].map((platform, index) => (
										<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row3-${platform.name}-${index}`}>
											<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
											<span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
										</div>
									))}
								</div>
							</div>
							
							{/* Gradient fades for edge smoothing */}
							<div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
							<div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
						</div>
					) : (
						/* Category Grid View */
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mt-8 fade-in">
							{categorizedPlatforms
								.filter(platform => platform.category === activeCategory)
								.map((platform, index) => (
									<div 
										key={`${platform.name}-${index}`}
										className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 group"
										style={{ animationDelay: `${index * 0.05}s` }}
									>
										<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
										<span className="font-semibold text-xs sm:text-sm text-gray-800 text-center">{platform.name}</span>
									</div>
								))}
						</div>
					)}
				</div>
			</section>

			{/* AI Autonomous Process Section */}
			<section className="section-padding ai-section">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-10 sm:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
							AI Implementation Process
						</h2>
						<div className="flex justify-center">
							<div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4 font-medium">
							Proven methodology for deploying secure, intelligent AI automation in business environments.
						</p>
					</div>
					
					<div className="flex flex-col lg:flex-row gap-4 sm:gap-6 h-auto lg:h-[450px]">
						{[
							{
								id: 0,
								title: "Business Assessment",
								description: "We conduct a deep dive into your existing operations to identify workflows and business challenges where AI automation delivers maximum impact and verifiable ROI.",
								icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
								color: "from-cyan-500 to-blue-600",
								bgImage: "bg-[url('/image/pages_img/AI-Development-backgound.webp')]",
								number: "01"
							},
							{
								id: 1,
								title: "Secure Design",
								description: "Our experts design a secure, scalable AI architecture tailored to your needs, incorporating intelligent decision support, data privacy, and strict compliance measures.",
								icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />,
								color: "from-green-500 to-emerald-600",
								bgImage: "bg-[url('/image/pages_img/Power-AI-Development.jpg')]",
								number: "02"
							},
							{
								id: 2,
								title: "Validation & Testing",
								description: "We rigorously train AI models using your business data in isolated environments, validating outputs with stakeholders to ensure high accuracy, safety, and effectiveness.",
								icon: <Code className="w-8 h-8 sm:w-10 sm:h-10" />,
								color: "from-blue-500 to-indigo-600",
								bgImage: "bg-[url('/image/pages_img/healthtechai.jpg')]",
								number: "03"
							},
							{
								id: 3,
								title: "Deployment & Optimization",
								description: "Seamlessly integrate agents into your daily workflows. We provide ongoing monitoring, continuous learning updates, and performance optimization for lasting success.",
								icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
								color: "from-purple-500 to-pink-600",
								bgImage: "bg-[url('/image/pages_img/fintech.jpg')]",
								number: "04"
							}
						].map((step, index) => (
							<div
								key={step.id}
								onMouseEnter={() => setHoveredStep(step.id)}
								onMouseLeave={() => setHoveredStep(null)}
								className={`relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 ease-in-out cursor-pointer flex flex-col justify-end group ${
									hoveredStep === step.id ? 'lg:flex-[2] scale-[1.02] lg:scale-100 shadow-2xl shadow-blue-900/40' : 'lg:flex-[1] hover:shadow-xl opacity-90 hover:opacity-100'
								} min-h-[250px] lg:min-h-0 border border-white/10`}
								style={{ animationDelay: `${index * 0.15}s` }}
							>
								{/* Background Image with Overlay */}
								<div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${hoveredStep === step.id ? 'scale-110' : 'scale-100'} ${step.bgImage}`}>
									<div className={`absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-gray-900/40 transition-opacity duration-500`}></div>
									{/* Active glow effect */}
									<div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-20 transition-opacity duration-500 ${hoveredStep === step.id ? 'opacity-40' : ''}`}></div>
								</div>

								{/* Content */}
								<div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-end">
									<div className="flex items-center gap-4 mb-4">
										<div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${step.color} p-[1px] shadow-lg`}>
											<div className="w-full h-full bg-gray-900/50 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
												{step.icon}
											</div>
										</div>
										<h3 className={`font-bold text-white transition-all duration-300 ${hoveredStep === step.id ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl lg:hidden xl:block'}`}>
											{step.title}
										</h3>
										{/* Number Indicator */}
										<div className={`ml-auto font-black text-4xl sm:text-5xl opacity-10 transition-all duration-500 ${hoveredStep === step.id ? 'opacity-30 translate-x-0' : 'translate-x-4'} text-white`}>
											{step.number}
										</div>
									</div>
									
									<div 
										className={`overflow-hidden transition-all duration-500 ease-in-out ${
											hoveredStep === step.id ? 'max-h-40 opacity-100 translate-y-0' : 'lg:max-h-0 lg:opacity-0 lg:translate-y-4 max-h-40 opacity-100 translate-y-0'
										}`}
									>
										<p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
											{step.description}
										</p>
									</div>
									
									{/* Subtle progress line */}
									<div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
										<div className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ease-out w-0 ${hoveredStep === step.id ? 'w-full' : 'w-0'}`}></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="section-padding bg-gray-50 relative overflow-hidden">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-10 sm:mb-14 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">Why Choose Us for AI Automation</h2>
						<div className="flex justify-center">
							<div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 mt-4 font-medium">
							Industry-focused AI expertise with proven results in business automation and operational efficiency.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						{/* Expertise */}
						<div className={`bg-white rounded-2xl p-6 flex items-start gap-4 sm:gap-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${isVisible ? 'slide-up' : 'opacity-0'}`}>
							<div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
								<Brain className="w-7 h-7" />
							</div>
							<div>
								<h3 className="font-bold text-lg text-gray-900 mb-2">Automation Expertise</h3>
								<p className="text-gray-600 text-sm sm:text-base leading-relaxed">Our specialized team possesses a deep understanding of complex business workflows and automation best practices, ensuring your solutions are built correctly from the ground up.</p>
							</div>
						</div>
						{/* Custom Solutions */}
						<div className={`bg-white rounded-2xl p-6 flex items-start gap-4 sm:gap-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
								<Target className="w-7 h-7" />
							</div>
							<div>
								<h3 className="font-bold text-lg text-gray-900 mb-2">Enterprise-Grade Solutions</h3>
								<p className="text-gray-600 text-sm sm:text-base leading-relaxed">We develop custom AI automation specifically designed for demanding business environments, prioritizing operational efficiency, robustness, and long-term scalability.</p>
							</div>
						</div>
						{/* End-to-End Support */}
						<div className={`bg-white rounded-2xl p-6 flex items-start gap-4 sm:gap-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
								<Shield className="w-7 h-7" />
							</div>
							<div>
								<h3 className="font-bold text-lg text-gray-900 mb-2">Security & Compliance</h3>
								<p className="text-gray-600 text-sm sm:text-base leading-relaxed">Security is never an afterthought. We ensure full compliance with robust security measures, protecting your critical business data and consumer privacy at all times.</p>
							</div>
						</div>
						{/* Proven Results */}
						<div className={`bg-white rounded-2xl p-6 flex items-start gap-4 sm:gap-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
								<CheckCircle className="w-7 h-7" />
							</div>
							<div>
								<h3 className="font-bold text-lg text-gray-900 mb-2">Proven Business Impact</h3>
								<p className="text-gray-600 text-sm sm:text-base leading-relaxed">Join a portfolio of organizations that have significantly improved their outcomes, reduced overhead, and achieved verifiable operational efficiency through our solutions.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Onboarding Process Section */}
			<section className="section-padding relative overflow-hidden bg-gray-900">
				<div className="absolute inset-0 bg-[url('/image/pages_img/AI-Development-backgound.webp')] opacity-5 bg-cover bg-center"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 -z-10" />
				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center mb-10 sm:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-4">AI Onboarding Process</h2>
						<div className="flex justify-center mb-4">
							<div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 font-medium">Your journey to transforming your business with AI automation starts here.</p>
					</div>
					<div className="relative">
						{/* Connecting Line (Desktop only) */}
						<div className="hidden lg:block absolute top-[110px] left-0 w-full h-[2px] bg-gradient-to-r from-gray-800 via-blue-500 to-gray-800 opacity-50 z-0"></div>
						
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
							{onboardingSteps.map((step, index) => (
								<div
									key={index}
									className={`bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300 group flex flex-col items-center text-center ${isVisible ? 'slide-up' : 'opacity-0'}`}
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-900 rounded-2xl mb-6 shadow-xl text-white group-hover:-translate-y-2 transition-transform duration-300 relative`}>
										{/* Inner gradient glowing border */}
										<div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} p-[2px]`}>
											<div className="w-full h-full bg-gray-900 rounded-[14px] flex items-center justify-center">
												{step.icon}
											</div>
										</div>
										{/* Step number badge */}
										<div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-sm shadow-lg border-2 border-gray-900`}>
											{index + 1}
										</div>
									</div>
									<h3 className="font-bold text-lg text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">{step.title}</h3>
									<p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-10 sm:mb-14">
						<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Frequently Asked Questions</h2>
						<div className="flex justify-center mb-4">
							<div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-medium">
							Common questions about AI automation implementation and our services.
						</p>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-4 sm:space-y-5">
						{faqData.map((faq, index) => (
							<details key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md border border-gray-200 transition-shadow duration-300 group overflow-hidden">
								<summary className="cursor-pointer font-bold text-base sm:text-lg text-gray-900 flex items-center justify-between p-5 sm:p-6 group-open:bg-blue-50/50 transition-colors duration-200">
									<span className="pr-4">{faq.question}</span>
									<span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-open:bg-blue-600 group-open:text-white transition-all duration-300">
										<span className="group-open:hidden text-xl leading-none">+</span>
										<span className="hidden group-open:block text-xl leading-none mb-1">-</span>
									</span>
								</summary>
								<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-white">
									<div className="pt-4">{faq.answer}</div>
								</div>
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
