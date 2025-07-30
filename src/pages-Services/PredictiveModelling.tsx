import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    title: "Regression Analysis",
    description:
      "Unlock precise forecasting and trend analysis with robust regression tools tailored to your business objectives.",
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    iconColor: "text-indigo-600",
  },
  {
    id: 2,
    title: "Time Series Forecasting",
    description:
      "Anticipate future trends and seasonality by analyzing time-stamped data for accurate, forward-looking insights.",
    icon: (
      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    title: "Classification Analysis",
    description:
      "Empower your business to categorize and interpret complex data, driving smarter segmentation and decision-making.",
    icon: (
      <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
    iconColor: "text-violet-600",
  },
  {
    id: 4,
    title: "Anomaly Detection",
    description:
      "Proactively identify outliers and unusual patterns to mitigate risk and ensure operational integrity.",
    icon: (
      <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
    iconColor: "text-rose-600",
  },
  {
    id: 5,
    title: "Risk Assessment",
    description:
      "Evaluate and quantify potential risks using advanced statistical models and machine learning algorithms.",
    icon: (
      <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
  },
  {
    id: 6,
    title: "Demand Forecasting",
    description:
      "Predict customer demand patterns to optimize inventory, production, and resource allocation strategies.",
    icon: (
      <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
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
    question: "What is predictive modeling and forecasting?",
    answer: "Predictive modeling and forecasting use historical data and advanced analytics to anticipate future outcomes. These methods empower organizations to stay ahead of trends, make informed decisions, and achieve better business results.",
  },
  {
    question: "Why is predictive analytics important?",
    answer: "Predictive analytics enables organizations to make smarter, data-driven decisions, anticipate opportunities and risks, optimize resources, and gain a sustainable competitive advantage.",
  },
  {
    question: "What is the difference between machine learning and predictive analytics?",
    answer: "Machine learning is a core component of predictive analytics. While predictive analytics leverages statistical methods and historical data to forecast outcomes, machine learning uses algorithms that continuously learn and improve from data, delivering even greater predictive accuracy.",
  },
  {
    question: "Will a predictive analytics tool bring value to my company?",
    answer: "Absolutely. Predictive analytics uncovers actionable insights, reveals trends, improves decision-making, streamlines operations, reduces risk, and enhances customer satisfaction, delivering measurable business value.",
  },
  {
    question: "What are predictive modeling techniques?",
    answer: "Key predictive modeling techniques include linear and logistic regression, decision trees, random forests, support vector machines, neural networks, time series analysis, and ensemble methods. Each technique is chosen to best address your unique business challenges and data landscape.",
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
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex flex-col">
			<Navbar />
			{/* Hero Section */}
			<section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Predictive-Modelling.jpg')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 text-white space-y-8">
						<div className="w-full">
							<h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								Predictive <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Modeling</span>
							</h1>
							<p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
							The power of data-driven foresight. Our predictive analytics solutions empower organizations to anticipate trends, optimize operations, and drive strategic growth across industries.
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

			{/* Predictive Modeling Capabilities Section */}
			<section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Left: PM Image */}
						<div className="relative flex justify-center lg:justify-start">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
								<img
									src="/image/pages_img/Predictive-Analytics-Services.jpg"
									alt="The Power of Predictive Modeling"
									className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
								/>
							</div>
						</div>
						{/* Right: Content */}
						<div className="space-y-6">
							<h2 className="text-xl lg:text-2xl font-bold text-gray-900">
								The Power of Predictive Modeling
							</h2>
							<p className="text-base text-gray-700 max-w-2xl">
								Unlock transformative opportunities with advanced predictive modeling. Our tailored solutions enable businesses to forecast trends, anticipate outcomes, and make data-driven decisions that drive growth and competitive advantage.
							</p>
							<p className="text-base text-gray-700 max-w-2xl">
								Our dedicated experts seamlessly integrate and customize predictive modeling technologies to your unique needs, empowering proactive decision-making and operational excellence.
							</p>
							<p className="text-base text-gray-700 max-w-2xl">
								From healthcare and finance to retail and beyond, predictive modeling redefines how you understand your data and grow your business. Partner with us to stay ahead of the curve.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-2 mb-8">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
							Advanced Predictive Modeling Services
						</h2>
						<div className="flex justify-center mb-2">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Intelligent analytics solutions for today's dynamic business landscape.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{pmServices.map((service) => (
							<div key={service.id} className={`${service.bgColor} rounded-2xl p-8 shadow-xl border border-gray-200/50 flex flex-col gap-4 items-center backdrop-blur-sm`}>
								<div className={`flex-shrink-0 w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center mb-2 mx-auto shadow-lg`}>
									{service.icon}
								</div>
								<h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">{service.title}</h3>
								<p className="text-gray-800 text-center">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Key Features Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-2 mb-8">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
							Key Features
						</h2>
						<div className="flex justify-center mb-2">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Advanced analytics that deliver clarity and competitive advantage.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Robust Performance */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 flex flex-col h-full items-center border border-blue-200/30">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-gray-900 mb-2">
								Robust Performance
							</h4>
							<p className="text-gray-800 text-sm">
								Our solutions are engineered for reliability, adapting to diverse data sources, scaling effortlessly, and delivering consistent results in any environment.
							</p>
						</div>
						{/* Flexible Customization */}
						<div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-6 flex flex-col h-full items-center border border-emerald-200/30">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-gray-900 mb-2">
								Flexible Customization
							</h4>
							<p className="text-gray-800 text-sm">
								We tailor predictive models to your unique needs, allowing you to refine and adapt solutions as your business evolves.
							</p>
						</div>
						{/* Accelerated Model Development */}
						<div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-6 flex flex-col h-full items-center border border-amber-200/30">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 4v16m0 0H3m9 0h9" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-gray-900 mb-2">
								Accelerated Model Development
							</h4>
							<p className="text-gray-800 text-sm">
								Leverage pre-trained models and transfer learning to accelerate deployment and unlock value faster, no need to start from scratch.
							</p>
						</div>
						{/* Transparent Insights */}
						<div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl shadow-lg p-6 flex flex-col h-full items-center border border-violet-200/30">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-gray-900 mb-2">
								Transparent Insights
							</h4>
							<p className="text-gray-800 text-sm">
								Gain full visibility into how predictions are made. Our interpretable models build trust and empower you to act with confidence.
							</p>
						</div>
						{/* Automated Feature Discovery */}
						<div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-lg p-6 flex flex-col h-full items-center border border-rose-200/30">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
									<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-gray-900 mb-2">
								Automated Feature Discovery
							</h4>
							<p className="text-gray-800 text-sm">
								Quickly identify the most impactful data features, saving time, reducing complexity, and strengthening your predictive outcomes.
							</p>
						</div>
						{/* Real-Time Decisioning */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-6 flex flex-col h-full items-center border border-cyan-200/30">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-gray-900 mb-2">
								Real-Time Decisioning
							</h4>
							<p className="text-gray-800 text-sm">
								Score new data instantly as it arrives, enabling you to make timely, informed decisions that keep you ahead of the curve.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-2 mb-8">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
							Industries We Work With
						</h2>
						<div className="flex justify-center mb-2">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Tailored predictive modeling solutions across diverse industry verticals.
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

			{/* Predictive Modelling Development Process (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
							Our Predictive Modeling Process
						</h2>
						<div className="flex justify-center mb-2">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base text-gray-800 max-w-3xl mx-auto mb-6">
							Streamlined approach to implementing predictive modeling solutions with proven methodology and best practices.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Data Preprocessing */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border border-blue-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2v20m10-10H2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Data Preparation</h3>
							<p className="text-gray-700 text-sm">We collect, cleanse, and transform raw data into a format ready for insightful analysis.</p>
						</div>
						{/* Model Selection */}
						<div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-xl border border-emerald-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Model Selection</h3>
							<p className="text-gray-700 text-sm">We identify the optimal predictive model based on your data and business goals.</p>
						</div>
						{/* Model Training */}
						<div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border border-amber-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Model Training</h3>
							<p className="text-gray-700 text-sm">We train and validate your model using best-in-class techniques to ensure accuracy and reliability.</p>
						</div>
						{/* Model Deployment */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-cyan-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Model Deployment</h3>
							<p className="text-gray-700 text-sm">We seamlessly integrate your predictive model into your business systems for real-world impact.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Platforms Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-2 mb-8">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
							Predictive Modeling Integration Platforms
						</h2>
						<div className="flex justify-center mb-2">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Leverage industry-leading platforms for robust predictive modeling implementations.
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

			{/* Why Choose Us for Predictive Modelling? (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-8">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Why Choose Us?</h2>
						<div className="flex justify-center mb-2">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-base text-gray-800 max-w-2xl mx-auto">Trusted by leading organizations for predictive modeling solutions.</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Expertise */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border border-blue-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2">Proven Expertise</h3>
							<p className="text-gray-700 text-sm">Our team combines deep industry knowledge with advanced analytics experience to deliver results you can trust.</p>
						</div>
						{/* Custom Solutions */}
						<div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-xl border border-emerald-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2">Tailored Solutions</h3>
							<p className="text-gray-700 text-sm">Every solution is custom-built to align with your business objectives and deliver maximum value.</p>
						</div>
						{/* Advanced Technology */}
						<div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border border-amber-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2">Cutting-Edge Technology</h3>
							<p className="text-gray-700 text-sm">We utilize the latest tools and algorithms to ensure your predictive models are accurate, scalable, and future-ready.</p>
						</div>
						{/* Proven Results */}
						<div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-cyan-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2">Demonstrated Results</h3>
							<p className="text-gray-700 text-sm">Our solutions consistently drive efficiency, smarter decisions, and business growth for our clients.</p>
						</div>
						{/* End-to-End Support */}
						<div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-violet-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2">Comprehensive Support</h3>
							<p className="text-gray-700 text-sm">From initial consultation to deployment and beyond, we provide end-to-end support for your success.</p>
						</div>
						{/* Data Security */}
						<div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-xl border border-rose-200/50 flex flex-col items-center gap-4">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-md">
								<svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
									<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-gray-900 mb-2">Data Security First</h3>
							<p className="text-gray-700 text-sm">We safeguard your data with industry-leading security practices and strict compliance standards.</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-tr from-purple-50 to-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-2 mb-8">
						<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
						<div className="flex justify-center mb-2">
							<div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
						</div>
						<p className="text-xl text-gray-800 max-w-3xl mx-auto">
							Common questions about predictive modeling implementation and our services.
						</p>
					</div>
					<div className="space-y-3">
						{faqData.map((faq, idx) => (
							<div
								key={idx}
								className="bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg p-4 flex flex-col transition-all duration-300 hover:scale-[1.01] border border-gray-200/50"
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

export default PredictiveModelling;
