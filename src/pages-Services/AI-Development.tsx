import React, { useState, useEffect } from "react";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import { Badge } from "@/components/ui/badge";

// AI Services across all industries
const aiServices = [
	{
		id: 1,
		title: "Conversational AI & Chatbots",
		description: "Intelligent chatbots and virtual assistants that handle customer inquiries, automate support, and provide 24/7 engagement across multiple channels with natural, human-like interactions.",
		icon: <MessageSquare className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Natural Language Processing",
		description: "Advanced NLP solutions for document analysis, sentiment analysis, text classification, automated content generation, and intelligent data extraction from unstructured text.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Predictive Analytics & Forecasting",
		description: "Machine learning models that analyze historical data to predict trends, forecast demand, identify risks, and enable data-driven decision-making across your business.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Custom AI Model Development",
		description: "Tailored machine learning and deep learning models designed for your specific business challenges, from classification and regression to complex neural networks.",
		icon: <Code className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Computer Vision & Image Recognition",
		description: "AI-powered visual intelligence for object detection, image classification, facial recognition, quality inspection, and automated visual analysis in manufacturing, retail, and security.",
		icon: <Eye className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "AI Integration & Automation",
		description: "Seamless integration of AI capabilities into your existing systems, workflows, and applications to automate processes, enhance productivity, and drive innovation.",
		icon: <Bot className="h-7 w-7" />,
		color: "from-teal-500 to-cyan-500"
	},
];

const platforms = [
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
		question: "What is AI Development?",
		answer: "AI Development creates intelligent systems that automate processes, analyze data, and make predictions to solve complex business challenges. It includes machine learning models, natural language processing, computer vision, and intelligent automation tailored to your specific needs.",
	},
	{
		question: "How can AI benefit my business?",
		answer: "AI reduces operational costs, improves decision-making through data insights, enhances customer experiences with personalization, automates repetitive tasks, predicts trends and risks, and creates competitive advantages through innovation and efficiency gains.",
	},
	{
		question: "What types of AI solutions do you develop?",
		answer: "We develop conversational AI chatbots, predictive analytics systems, computer vision applications, natural language processing tools, recommendation engines, fraud detection systems, and custom machine learning models for various industries and use cases.",
	},
	{
		question: "How long does it take to implement an AI solution?",
		answer: "Implementation timelines vary from 6-10 weeks for focused solutions like chatbots to 3-6 months for comprehensive AI systems. We work closely with your team to ensure smooth integration and provide detailed project timelines during consultation.",
	},
	{
		question: "Is my data secure with AI solutions?",
		answer: "Yes, we implement enterprise-grade security measures including encryption, access controls, secure data handling, and compliance with industry standards (GDPR, HIPAA where applicable) to protect your data throughout the AI development and deployment process.",
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
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-6 sm:space-y-8">
						<h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
							AI Development
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
							Transform your business with cutting-edge AI solutions that automate processes, <br /> enhance decision-making, and unlock new opportunities across all industries.
						</p>
					</div>
				</div>
			</section>

			{/* AI Development Capabilities Section */}
			<section className="py-10 sm:py-14 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: AI Image with floating effect */}
						<div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
								<div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
									<img
										src="/image/pages_img/Power-AI-Development.jpg"
										alt="The Power of AI Development"
										className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						{/* Right: Content */}
						<div className={`space-y-6 order-1 lg:order-2 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="space-y-2">
								<h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
									The Power of <span className="gradient-text-ai">AI Development</span>
								</h2>
							</div>

							<div className="space-y-4 text-slate-600 text-lg leading-relaxed">
								<p>
									Unlock the full potential of artificial intelligence to transform your business operations, enhance customer experiences, and drive innovation across all industries.
								</p>
								<p>
									Our AI specialists design and deploy custom machine learning models, intelligent automation systems, and data-driven solutions that seamlessly integrate with your existing infrastructure and workflows.
								</p>
								<p>
									From startups to enterprises, across healthcare, finance, retail, manufacturing, and beyond—AI empowers you to make smarter decisions, reduce costs, and stay ahead of the competition.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-10 sm:py-14 ai-section">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-white">
							AI Solutions for Industry
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							Intelligent AI technologies that drive innovation and efficiency across your business.
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
								<h3 className="font-bold text-xs sm:text-sm text-white mb-1.5 text-center w-full">
									{service.title}
								</h3>
								<p className="text-[10px] sm:text-xs font-medium text-gray-300 text-center leading-relaxed">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Strategic Benefits Infographic Section (Linear Flow Style) */}
			<section className="relative overflow-hidden bg-white py-12 sm:py-16">
				{/* Technical Grid Background */}
				<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
							AI Development <span className="gradient-text-ai">Benefits</span>
						</h2>
						<p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Deliver <span className="text-slate-900 font-bold">measurable business</span> value and competitive advantage through AI innovation.
						</p>
					</div>

					<div className="relative px-4">
						{/* Horizontal Connecting Line (Desktop Only) */}
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10">
							{[
								{
									title: "Operational Efficiency",
									desc: "Automate repetitive tasks, streamline workflows, and boost productivity across your organization.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#00b894",
									textSide: "above"
								},
								{
									title: "Data-Driven Insights",
									desc: "Extract actionable insights from data to make smarter, faster business decisions.",
									icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#ff7675",
									textSide: "above"
								},
								{
									title: "Enhanced Experience",
									desc: "Deliver personalized experiences and 24/7 support that delight your customers.",
									icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#fbc531",
									textSide: "above"
								},
								{
									title: "Cost Reduction",
									desc: "Reduce operational costs and maximize ROI through intelligent automation and optimization.",
									icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#0984e3",
									textSide: "above"
								}
							].map((item, idx) => (
								<div key={idx} className="flex flex-col items-center">
									{/* Label Above (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="text-center max-w-[200px]">
											<h3 className="font-extrabold text-slate-900 text-lg mb-2" style={{ color: item.textSide === 'above' ? item.color : '' }}>{item.title}</h3>
											<p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
										</div>
										<div className="w-[1px] h-10 bg-slate-200 mt-4"></div>
										<div className="w-1.5 h-1.5 rounded-full mt-[-4px]" style={{ backgroundColor: item.color }}></div>
									</div>

									{/* The Circular Node */}
									<div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
										{/* Concentric Rings */}
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-100 rounded-full"></div>
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-l-transparent border-r-transparent rotate-45"></div>
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-t-transparent border-b-transparent -rotate-12"></div>
										</div>

										{/* Inner Circle Node */}
										<div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl z-20 transition-transform hover:scale-110 duration-500 bg-white" style={{ border: `2px solid ${item.color}20` }}>
											<div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: item.color }}>
												{React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 sm:w-10 sm:h-10' })}
											</div>
											{/* Subtle glow */}
											<div className="absolute -inset-2 rounded-full blur-xl opacity-20" style={{ backgroundColor: item.color }}></div>
										</div>
									</div>

									{/* Label Below (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] mt-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'below' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="w-1.5 h-1.5 rounded-full mb-[-4px]" style={{ backgroundColor: item.color }}></div>
										<div className="w-[1px] h-10 bg-slate-200 mb-4"></div>
										<div className="text-center max-w-[200px]">
											<h3 className="font-extrabold text-slate-900 text-lg mb-2" style={{ color: item.textSide === 'below' ? item.color : '' }}>{item.title}</h3>
											<p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
										</div>
									</div>

									{/* Mobile Label (Visible only on mobile) */}
									<div className="lg:hidden mt-8 text-center px-4">
										<h3 className="font-extrabold text-slate-900 text-xl mb-2" style={{ color: item.color }}>{item.title}</h3>
										<p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Industries />

			{/* Platforms Section */}
			<section className="py-10 sm:py-14 bg-white relative">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
							AI Technology Stack
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Industry-leading AI platforms optimized for business development and intelligent operations.
						</p>
					</div>

					<div className="flex flex-col gap-6 sm:gap-8 overflow-hidden py-4 -mx-4 sm:mx-0 relative">
						{/* Marquee Row 1 (Forward) */}
						<div className="relative w-full overflow-hidden">
							<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDuration: '60s' }}>
								{[...platforms.slice(0, Math.ceil(platforms.length / 2)), ...platforms.slice(0, Math.ceil(platforms.length / 2))].map((platform, index) => (
									<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row1-${platform.name}-${index}`}>
										<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
										<span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
									</div>
								))}
							</div>
						</div>

						{/* Marquee Row 2 (Reverse) */}
						<div className="relative w-full overflow-hidden">
							<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDirection: 'reverse', animationDuration: '70s' }}>
								{[...platforms.slice(Math.ceil(platforms.length / 2)), ...platforms.slice(Math.ceil(platforms.length / 2))].map((platform, index) => (
									<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row2-${platform.name}-${index}`}>
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
				</div>
			</section>

			{/* AI Implementation Process Section (Pill-Style Infographic) */}
			<section className="bg-[#01010c] relative overflow-hidden py-12 sm:py-16">
				{/* High-Tech Background Layers */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
							AI Implementation <span className="gradient-text-ai"> Process</span>
						</h2>
						<p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
							Proven methodology for deploying <span className="text-gray-100 font-bold">secure, scalable, and intelligent AI solutions</span>.
						</p>
						<div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
					</div>

					<div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-0">
						{/* SVG Connector Lines (Desktop Only) */}
						<div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
							<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
								<defs>
									<linearGradient id="connectorGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
										<stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
										<stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
									</linearGradient>
								</defs>
								<path d="M 33 25 Q 41.5 25 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" fill="none" />
								<path d="M 33 75 Q 41.5 75 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" fill="none" />
								<path d="M 67 25 Q 58.5 25 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" fill="none" />
								<path d="M 67 75 Q 58.5 75 50 50" stroke="url(#connectorGradientBlue)" strokeWidth="0.1" fill="none" />
							</svg>
						</div>

						{/* Left Cards Stack */}
						<div className="flex flex-col gap-10 w-full lg:w-1/3 order-1 lg:order-1 items-center lg:items-end">
							{[
								{
									id: "01",
									title: "Business Assessment",
									desc: "Identify key challenges and opportunities where AI delivers maximum impact for your business.",
									color: "bg-[#e23126]"
								},
								{
									id: "02",
									title: "Data Preparation",
									desc: "Secure data collection, cleaning, and integration to build robust AI models.",
									color: "bg-[#9068d4]"
								}
							].map((step, idx) => (
								<div key={step.id}
									className={`group relative flex items-center justify-end w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`}
									style={{ transitionDelay: `${idx * 0.1}s` }}>
									<div className={`flex w-full flex-row-reverse lg:flex-row items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden`}>
										<div className="flex-grow py-4 sm:py-6 px-6 sm:px-8 text-left lg:text-right">
											<h4 className="font-bold text-gray-100 text-sm sm:text-base leading-tight tracking-tight mb-1">{step.title}</h4>
											<p className="text-xs sm:text-sm text-slate-400 leading-tight line-clamp-2">{step.desc}</p>
										</div>
										<div className={`w-16 sm:w-20 h-[60px] sm:h-[80px] ${step.color} flex items-center justify-center rounded-r-[40px] lg:rounded-r-none lg:rounded-l-[40px] shadow-lg`}>
											<span className="text-white font-black text-lg sm:text-xl tracking-tighter">{step.id}</span>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Central Brain Hub */}
						<div className="relative w-full lg:w-1/3 flex justify-center order-2 lg:order-2">
							<div className={`relative w-64 h-64 sm:w-[400px] sm:h-[400px] flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
								<div className="absolute inset-0 rounded-full border-[10px] sm:border-[16px] border-transparent border-t-[#e23126] border-r-[#9068d4] border-b-[#3eb37c] border-l-blue-500 animate-[spin_12s_linear_infinite] opacity-40"></div>
								<div className="w-44 h-44 sm:w-64 sm:h-64 bg-slate-900 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-[6px] sm:border-[10px] border-white/5 flex items-center justify-center z-10 p-3 sm:p-5">
									<div className="w-full h-full rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 shadow-inner">
										<Brain className="w-20 h-20 sm:w-32 sm:h-32 text-white opacity-95" strokeWidth={1.2} />
									</div>
								</div>
							</div>
						</div>

						{/* Right Cards Stack */}
						<div className="flex flex-col gap-10 w-full lg:w-1/3 order-3 items-center lg:items-start">
							{[
								{
									id: "03",
									title: "AI Model Development",
									desc: "Build, train, and validate custom AI models tailored to your specific requirements.",
									color: "bg-[#3eb37c]"
								},
								{
									id: "04",
									title: "Deployment & Optimization",
									desc: "Seamless integration with ongoing monitoring, refinement, and performance optimization.",
									color: "bg-[#e23126]"
								}
							].map((step, idx) => (
								<div key={step.id}
									className={`group relative flex items-center justify-start w-full max-w-[420px] transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`}
									style={{ transitionDelay: `${(idx + 2) * 0.1}s` }}>
									<div className={`flex w-full items-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-2xl transition-all duration-300 overflow-hidden`}>
										<div className={`w-16 sm:w-20 h-[60px] sm:h-[80px] ${step.color} flex items-center justify-center rounded-r-[40px] sm:rounded-r-[60px] shadow-lg`}>
											<span className="text-white font-black text-lg sm:text-xl tracking-tighter">{step.id}</span>
										</div>
										<div className="flex-grow py-4 sm:py-6 px-6 sm:px-8 text-left">
											<h4 className="font-bold text-gray-100 text-sm sm:text-base leading-tight tracking-tight mb-1">{step.title}</h4>
											<p className="text-xs sm:text-sm text-slate-400 leading-tight line-clamp-2">{step.desc}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section (Improved Side-by-Side Style) */}
			<section className="relative overflow-hidden bg-white py-12 sm:py-16">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-4 mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
							WHY <span className="gradient-text-ai">CHOOSE US?</span>
						</h2>
						<p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
							Strategic excellence and technical precision focused on delivering <span className="text-blue-600 font-bold">measurable enterprise value</span>.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className={`relative group ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100">
								<img
									src="/image/pages_img/ai_workspace_do_more.png"
									alt="AI Development Workspace"
									className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute bottom-10 left-10 text-white z-20">
									<div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
										<p className="text-xl font-black tracking-tighter">DO MORE.</p>
									</div>
								</div>
							</div>
						</div>

						<div className={`relative ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<div className="relative z-10 space-y-0">
								{[
									{
										id: "01",
										title: "Deep AI Expertise",
										desc: "Specialized team with extensive experience in machine learning, NLP, and computer vision.",
										bgColor: "bg-[#e23126]",
										textColor: "group-hover:text-[#e23126]"
									},
									{
										id: "02",
										title: "Custom Solutions",
										desc: "Tailored AI solutions designed specifically for your business challenges and goals.",
										bgColor: "bg-[#9068d4]",
										textColor: "group-hover:text-[#9068d4]"
									},
									{
										id: "03",
										title: "Enterprise Security",
										desc: "Robust security measures and compliance with industry standards protecting your data.",
										bgColor: "bg-[#3eb37c]",
										textColor: "group-hover:text-[#3eb37c]"
									},
									{
										id: "04",
										title: "Proven Track Record",
										desc: "Organizations achieving measurable results and ROI with our AI solutions.",
										bgColor: "bg-[#f59e0b]",
										textColor: "group-hover:text-[#f59e0b]"
									}
								].map((item, index) => (
									<div key={item.id} className={`group flex items-start gap-8 sm:gap-12 py-8 ${index !== 3 ? 'border-b border-dashed border-slate-200' : ''}`}>
										<div className="flex-shrink-0 w-16 sm:w-20 flex justify-center py-2 relative">
											<div className={`absolute inset-0 ${item.bgColor} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
											<div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${item.bgColor} flex items-center justify-center shadow-lg border border-white/10 z-10 transition-transform group-hover:scale-110 duration-300`}>
												<span className="text-white font-black text-xl sm:text-2xl tracking-tighter opacity-90 group-hover:opacity-100 transition-all duration-300">
													{item.id}
												</span>
											</div>
										</div>
										<div className="flex-grow pt-2">
											<h3 className={`font-bold text-base sm:text-lg text-slate-800 mb-2 ${item.textColor} transition-colors tracking-tight`}>
												{item.title}
											</h3>
											<p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-md">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Onboarding Process Section */}
			<section className="py-10 sm:py-14 relative overflow-hidden bg-gray-900">
				<div className="absolute inset-0 bg-[url('/image/pages_img/AI-Development-backgound.webp')] opacity-5 bg-cover bg-center"></div>
				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center mb-10 sm:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight mb-4">AI Onboarding Process</h2>
						<div className="flex justify-center mb-4">
							<div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 font-medium">Your journey to transforming your business with AI starts here.</p>
					</div>
					<div className="relative">
						<div className="hidden lg:block absolute top-[110px] left-0 w-full h-[2px] bg-gradient-to-r from-gray-800 via-blue-500 to-gray-800 opacity-50 z-0"></div>
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
							{onboardingSteps.map((step, index) => (
								<div
									key={index}
									className={`bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300 group flex flex-col items-center text-center ${isVisible ? 'slide-up' : 'opacity-0'}`}
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-900 rounded-2xl mb-4 shadow-xl text-white group-hover:-translate-y-2 transition-transform duration-300 relative`}>
										<div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} p-[2px]`}>
											<div className="w-full h-full bg-gray-900 rounded-[14px] flex items-center justify-center">
												{React.cloneElement(step.icon as React.ReactElement, { className: 'w-6 h-6' })}
											</div>
										</div>
										<div className={`absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-xs shadow-lg border-2 border-gray-900`}>
											{index + 1}
										</div>
									</div>
									<h3 className="font-black text-base text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">{step.title}</h3>
									<p className="text-xs text-gray-400 font-semibold leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>
								</div>
							))}
						</div>
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
							Common questions about AI development and our services.
						</p>
					</div>
					<div className="space-y-3 sm:space-y-4">
						{faqData.map((faq, idx) => (
							<details key={idx} className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
								<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
									{faq.question}
									<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
									<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
								</summary>
								<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">{faq.answer}</div>
							</details>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default AIDevelopment;