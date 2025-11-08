import React, { useState, useEffect } from "react";
import { Brain, BarChart3, Target, Users, TrendingUp, Code, ArrowRight, CheckCircle, Shield, Globe, Zap, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

// Industries for Predictive Modelling
const industries = [
	{
		name: "HealthTech",
		image: "/image/pages_img/healthtechai.jpg",
		description:
			"Predictive analytics for patient outcomes, resource allocation, and diagnostics.",
		page: "/HealthTechAI",
	},
	{
		name: "EdTech",
		image: "/image/pages_img/EdTechAI.avif",
		description:
			"Predictive analytics for personalized learning, student performance, and administrative efficiency.",
		page: "/EdTechAI",
	},
	{
		name: "FinTech",
		image: "/image/pages_img/AI-Financial.jpg",
		description:
			"Fraud detection, risk modeling, and customer value prediction for financial services.",
		page: "/FinTechAI",
	},
	{
		name: "GreenTech",
		image: "/image/pages_img/greentech.jpg",
		description:
			"Energy demand forecasting, carbon tracking, and sustainability analytics.",
		page: "/GreenTechAI",
	},
	{
		name: "Retail",
		image: "/image/pages_img/retail.jpg",
		description:
			"Demand forecasting, inventory optimization, and personalized marketing.",
		page: "/RetailAI",
	},
	{
		name: "AI Diagnostics",
		image: "/image/pages_img/Diagnostics.jpg",
		description:
			"Predictive analytics for healthcare diagnostics and workflow automation.",
		page: "/DiagnosticsAI",
	},
	{
		name: "E-Commerce",
		image: "/image/pages_img/E-Commerce.jpg",
		description:
			"Churn prediction, recommendation engines, and sales forecasting for e-commerce.",
		page: "/E-Commerce",
	},
	{
		name: "HIPAA Compliance",
		image: "/image/pages_img/HIPAA.avif",
		description:
			"Predictive analytics for HIPAA-compliant healthcare communication and data security.",
		page: "/HIPAACompliance",
	},
];

// Predictive Modelling Services
const pmServices = [
	{
		id: 1,
		title: "Patient Outcome Prediction",
		description:
			"Forecast patient recovery trajectories, readmission risks, and treatment responses using advanced regression models tailored to clinical data.",
		icon: <TrendingUp className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 2,
		title: "Disease Progression Forecasting",
		description:
			"Anticipate disease progression patterns and seasonal health trends by analyzing longitudinal patient data for proactive care planning.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-emerald-500 to-teal-500"
	},
	{
		id: 3,
		title: "Diagnostic Classification",
		description:
			"Enhance diagnostic accuracy by categorizing medical images, lab results, and patient symptoms using AI-powered classification models.",
		icon: <Target className="h-7 w-7" />,
		color: "from-violet-500 to-purple-500"
	},
	{
		id: 4,
		title: "Clinical Anomaly Detection",
		description:
			"Identify critical health anomalies, adverse events, and unusual patient vitals in real-time to enable rapid clinical intervention.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-rose-500 to-pink-500"
	},
	{
		id: 5,
		title: "Patient Risk Stratification",
		description:
			"Assess and stratify patient risk levels for chronic conditions, complications, and adverse outcomes using predictive healthcare models.",
		icon: <CheckCircle className="h-7 w-7" />,
		color: "from-amber-500 to-orange-500"
	},
	{
		id: 6,
		title: "Healthcare Resource Forecasting",
		description:
			"Predict patient admission volumes, staffing needs, and medical supply requirements to optimize hospital operations and care delivery.",
		icon: <Brain className="h-7 w-7" />,
		color: "from-cyan-500 to-blue-500"
	},
];

const platforms = [
	{ name: "Scikit-learn", image: "/image/skills_img/sikitlearn.png" },
	{ name: "TensorFlow", image: "/image/skills_img/tensorflow.png" },
	{ name: "PyTorch", image: "/image/skills_img/pytorch.png" },
	{ name: "Seaborn", image: "/image/skills_img/seaborn.svg" },
	{ name: "Pandas", image: "/image/skills_img/pandas.png" },
];

const pmSolutions = [
	{
		key: "PredictAI",
		name: "PredictAI",
		description: (
			<>
				PredictAI delivers advanced predictive analytics, enabling businesses to forecast trends, optimize operations, and make data-driven decisions with confidence.
			</>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/Predictive-Analytics-Services.jpg",
	},
	{
		key: "ForecastPro",
		name: "ForecastPro",
		description: (
			<>
				ForecastPro provides comprehensive time series forecasting and demand prediction capabilities for strategic planning and resource optimization.
			</>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/Predictive-Modelling.jpg",
	},
	{
		key: "RiskGuard",
		name: "RiskGuard",
		description: (
			<>
				RiskGuard offers sophisticated risk assessment and anomaly detection to protect your business from potential threats and operational disruptions.
			</>
		),
		cta: "Book a Demo",
		image: "/image/pages_img/PredictiveAnalytics.jpg",
	},
];

const faqData = [
	{
		question: "What is healthcare predictive modeling?",
		answer: "Healthcare predictive modeling uses patient data, clinical history, and advanced AI algorithms to forecast health outcomes, disease progression, and treatment responses. These methods empower healthcare providers to deliver proactive, personalized care and improve patient outcomes.",
	},
	{
		question: "Why is predictive analytics important in healthcare?",
		answer: "Predictive analytics enables healthcare organizations to identify at-risk patients early, optimize treatment plans, reduce hospital readmissions, improve resource allocation, and ultimately deliver better patient care while reducing costs.",
	},
	{
		question: "What is the difference between machine learning and predictive analytics in healthcare?",
		answer: "Machine learning is a core component of healthcare predictive analytics. While predictive analytics uses statistical methods and patient history to forecast outcomes, machine learning algorithms continuously learn from new clinical data, improving diagnostic accuracy and treatment recommendations over time.",
	},
	{
		question: "Will predictive analytics bring value to my healthcare organization?",
		answer: "Absolutely. Healthcare predictive analytics identifies high-risk patients, predicts disease progression, optimizes clinical workflows, reduces adverse events, improves care quality, and delivers measurable improvements in patient outcomes and operational efficiency.",
	},
	{
		question: "What are healthcare predictive modeling techniques?",
		answer: "Key healthcare predictive modeling techniques include clinical risk scoring, survival analysis, disease classification models, patient readmission prediction, treatment response forecasting, and population health analytics. Each technique is tailored to address specific clinical challenges and patient populations.",
	},
];

const onboardingSteps = [
	{
		icon: "📞",
		title: 'Contact Us',
		description: 'Reach out to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.',
	},
	{
		icon: "💼",
		title: 'Consultation & Discovery',
		description: 'Schedule a professional consultation with our experts. We\'ll discuss your project in detail, assess feasibility, and provide strategic recommendations tailored to your needs.',
	},
	{
		icon: "📋",
		title: 'Receive a Detailed Proposal',
		description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate so you know exactly what to expect.',
	},
	{
		icon: "🚀",
		title: 'Project Kickoff & Delivery',
		description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring a smooth, successful delivery from start to finish.',
	},
];

const PredictiveModelling: React.FC = () => {
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
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Predictive-Modelling.jpg')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
					<div className="flex-1 text-white space-y-6 sm:space-y-8">
						<div className={`w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<h1 className="heading-2 font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								 Predictive Modeling
							</h1>
							<p className="body-large text-white w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
								Transform patient care with AI-powered predictive analytics. Anticipate health outcomes, 
								optimize clinical workflows, and improve patient outcomes through data-driven healthcare intelligence.
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

			{/* Predictive Modeling Capabilities Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
						{/* Left: PM Image */}
						<div className={`relative flex justify-center lg:justify-start order-2 lg:order-1 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative">
								<div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/Predictive-Analytics-Services.jpg"
									alt="The Power of Predictive Modeling"
									className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-4 border-white/20 modern-card"
								/>
							</div>
						</div>
						{/* Right: Content */}
						<div className={`space-y-4 sm:space-y-6 order-1 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
								The Power of Healthcare Predictive AI
							</h2>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Revolutionize patient care with AI-driven predictive modeling. Our healthcare-focused solutions enable medical professionals to forecast patient outcomes, identify at-risk populations, and optimize treatment plans for better clinical results.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								Our healthcare AI experts seamlessly integrate predictive analytics into clinical workflows, empowering providers with actionable insights for early intervention, resource allocation, and personalized patient care strategies.
							</p>
							<p className="text-sm sm:text-base text-gray-900 max-w-2xl leading-relaxed">
								From hospital systems and diagnostic centers to telehealth platforms and research institutions, our predictive modeling transforms how healthcare organizations deliver care and improve patient outcomes. Partner with us to advance the future of medicine.
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
							Healthcare AI Predictive Services
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl font-semibold text-gray-300 max-w-3xl mx-auto px-4">
							Clinical intelligence solutions for modern healthcare delivery and patient outcomes.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{pmServices.map((service, index) => (
							<div 
								key={service.id}
								className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white`}>
									{service.icon}
								</div>
								<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full">{service.title}</h3>
								<p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Key Features Section */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
							Healthcare AI Key Features
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Clinical intelligence features that enhance patient care and operational efficiency.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{/* Clinical-Grade Reliability */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">
								Clinical-Grade Reliability
							</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">
								Our healthcare AI models are validated for clinical accuracy, integrating seamlessly with EHR systems and delivering consistent, trustworthy predictions across diverse patient populations.
							</p>
						</div>
						{/* HIPAA-Compliant Customization */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">
								HIPAA-Compliant Customization
							</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">
								We tailor predictive models to your clinical workflows and specialty needs while maintaining strict HIPAA compliance and patient data security standards.
							</p>
						</div>
						{/* Rapid Clinical Deployment */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 4v16m0 0H3m9 0h9" />
								</svg>
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">
								Rapid Clinical Deployment
							</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">
								Leverage pre-trained medical AI models and transfer learning to accelerate implementation, enabling faster time-to-value for patient care improvements.
							</p>
						</div>
						{/* Explainable Clinical AI */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" />
								</svg>
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">
								Explainable Clinical AI
							</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">
								Understand exactly how clinical predictions are generated. Our transparent models provide clear reasoning that clinicians can trust and validate.
							</p>
						</div>
						{/* Automated Clinical Feature Engineering */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
									<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
								</svg>
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">
								Automated Clinical Feature Engineering
							</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">
								Automatically identify the most predictive clinical indicators from lab values, vitals, and patient history to enhance diagnostic accuracy.
							</p>
						</div>
						{/* Real-Time Clinical Alerts */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
							<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto text-white">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 text-center w-full">
								Real-Time Clinical Alerts
							</h3>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">
								Receive instant predictions on patient data as it's captured, enabling timely interventions and proactive care management for better outcomes.
							</p>
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
							Industry-leading AI platforms optimized for healthcare applications and compliance.
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

			{/* Predictive Modelling Development Process (New Section) */}
			<section className="section-padding ai-section">
				<div className="max-w-5xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
							Healthcare AI Implementation Process
						</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
							Proven methodology for deploying secure, compliant AI solutions in healthcare environments.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Clinical Data Integration */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2v20m10-10H2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Data Integration</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Securely integrate with your EHR systems, cleanse patient data, and prepare clinical datasets for AI analysis.</p>
						</div>
						{/* Clinical Model Selection */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Model Selection</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Select the optimal AI model architecture based on your clinical use case, patient population, and care objectives.</p>
						</div>
						{/* Clinical Validation */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Validation</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Rigorously train and validate models with clinical experts to ensure diagnostic accuracy and patient safety.</p>
						</div>
						{/* Clinical Deployment */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</span>
							<span className="font-bold text-white text-sm sm:text-lg text-center">Clinical Deployment</span>
							<p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">Seamlessly deploy AI models into your clinical workflows with real-time monitoring and continuous improvement.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us for Predictive Modelling? (New Section) */}
			<section className="section-padding">
				<div className="max-w-6xl mx-auto container-padding">
					<div className={`text-center space-y-2 mb-8 sm:mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Why Choose Us for Healthcare AI</h2>
						<div className="flex justify-center">
							<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
							Healthcare-focused AI expertise with proven results in clinical environments.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{/* Clinical AI Expertise */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-2">
								<Brain className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Healthcare Expertise</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Specialized team with deep understanding of clinical workflows and healthcare regulations.</p>
						</div>
						{/* Custom Clinical Solutions */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-2">
								<Target className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Clinical-Grade Solutions</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Custom AI solutions designed for healthcare environments with patient safety as priority.</p>
						</div>
						{/* Compliance & Security */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-2">
								<Shield className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Compliance & Security</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">HIPAA-compliant architecture with robust security measures protecting patient data.</p>
						</div>
						{/* Proven Clinical Impact */}
						<div className={`modern-card p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 min-h-[180px] sm:min-h-[200px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
							<span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white mb-2">
								<CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
							</span>
							<span className="font-bold text-gray-900 text-sm sm:text-lg text-center">Proven Clinical Impact</span>
							<p className="text-xs sm:text-sm text-gray-900 text-center leading-relaxed">Healthcare organizations achieving improved outcomes and operational efficiency.</p>
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
							Common questions about Healthcare AI implementation and our services.
						</p>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-3 sm:space-y-4">
						{/* FAQ 1 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What is predictive modeling and forecasting?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Predictive modeling and forecasting use historical data and advanced analytics to anticipate future outcomes. These methods empower organizations to stay ahead of trends, make informed decisions, and achieve better business results.</div>
						</details>
						{/* FAQ 2 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								Why is predictive analytics important?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Predictive analytics enables organizations to make smarter, data-driven decisions, anticipate opportunities and risks, optimize resources, and gain a sustainable competitive advantage.</div>
						</details>
						{/* FAQ 3 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What is the difference between machine learning and predictive analytics?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Machine learning is a core component of predictive analytics. While predictive analytics leverages statistical methods and historical data to forecast outcomes, machine learning uses algorithms that continuously learn and improve from data, delivering even greater predictive accuracy.</div>
						</details>
						{/* FAQ 4 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								Will a predictive analytics tool bring value to my company?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Absolutely. Predictive analytics uncovers actionable insights, reveals trends, improves decision-making, streamlines operations, reduces risk, and enhances customer satisfaction, delivering measurable business value.</div>
						</details>
						{/* FAQ 5 */}
						<details className="bg-white/95 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 group">
							<summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between group-hover:text-blue-700 transition-colors duration-200">
								What are predictive modeling techniques?
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 group-open:hidden">+</span>
								<span className="ml-2 text-gray-900 group-hover:text-blue-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-2 sm:pt-3 text-gray-900 text-xs sm:text-sm">Key predictive modeling techniques include linear and logistic regression, decision trees, random forests, support vector machines, neural networks, time series analysis, and ensemble methods. Each technique is chosen to best address your unique business challenges and data landscape.</div>
						</details>
					</div>
				</div>
			</section>

			
			<Footer />
		</div>
	);
};

export default PredictiveModelling;
