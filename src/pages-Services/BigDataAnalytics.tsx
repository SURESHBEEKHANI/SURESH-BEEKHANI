import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe,
	ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot,
	Mail, Phone, MapPin, Clock, Cpu, Network, Workflow, Plus, Minus,
	Database, Layers, Search, PieChart, LineChart, FileText
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";
import LatestBlogs from "../components/LatestBlogs";

// Big Data Analytics Services
const analyticsServices = [
	{
		id: 1,
		title: "Data Integration",
		description: "Seamlessly consolidate structured and unstructured data from diverse sources into a unified, scalable architecture—enabling efficient data management, accessibility, and advanced analytics.",
		icon: <Layers className="h-7 w-7" />,
		color: "from-blue-600 to-indigo-600"
	},
	{
		id: 2,
		title: "Data Visualization",
		description: "Deliver rich, interactive dashboards and visual experiences that simplify complex datasets, uncover hidden patterns, and support executive-level decision-making.",
		icon: <PieChart className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 3,
		title: "Data-Driven Marketing",
		description: "Leverage deep analytical insights to understand customer behavior, predict trends, and execute highly targeted, personalized marketing strategies that maximize ROI.",
		icon: <Target className="h-7 w-7" />,
		color: "from-emerald-500 to-teal-500"
	},
	{
		id: 4,
		title: "Business Intelligence",
		description: "Empower your organization with predictive and prescriptive analytics that generate actionable insights, optimize performance, and support strategic planning.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-amber-500 to-orange-500"
	},
	{
		id: 5,
		title: "Real-Time Analytics",
		description: "Utilize cutting-edge stream processing and event-driven architectures to analyze high-velocity data in real time—enabling immediate insights and rapid response to changing conditions.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-cyan-500 to-blue-500"
	},
	{
		id: 6,
		title: "Healthcare Analytics",
		description: "Enhance patient care, operational efficiency, and clinical outcomes through data-driven insights, predictive modeling, and intelligent healthcare analytics solutions.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-slate-600 to-slate-800"
	},
];

const faqData = [
	{
		question: "What is Big Data Analytics?",
		answer: "Big Data Analytics is the process of examining large and varied data sets—or big data—to uncover hidden patterns, unknown correlations, market trends, customer preferences, and other useful information that can help organizations make more-informed business decisions.",
	},
	{
		question: "How can Big Data benefit my small or mid-sized business?",
		answer: "Big Data is no longer just for large enterprises. For SMBs, it provides critical insights into customer behavior, optimizes operational costs, improves marketing ROI, and helps identify new market opportunities before competitors do.",
	},
	{
		question: "What platforms do you use for Big Data solutions?",
		answer: "We work with a variety of modern platforms including AWS Redshift, Snowflake, Google BigQuery, Databricks, and Apache Spark, tailoring the tech stack to your specific volume, velocity, and business requirements.",
	},
	{
		question: "Is our data secure during the analytics process?",
		answer: "Security is built into our core framework. We implement end-to-end encryption, multi-factor authentication, role-based access controls, and ensure compliance with global standards like GDPR and HIPAA to protect your intellectual property.",
	},
	{
		question: "How long until we see measurable ROI?",
		answer: "While long-term data strategy is key, we focus on 'Quick Wins'—identifying high-impact use cases that can deliver measurable value within the first 8-12 weeks of implementation.",
	},
];

const BigDataAnalytics: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col font-sans">
			<Navbar />

			{/* Hero Section */}
			<section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/image/pages_img/big data analytics.jpg')" }} />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#01010c]/40" />
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-6 sm:space-y-8 animate-fade-in-up">
						<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
							Big Data <span className="text-[#ff0ea3]">Analytics</span>
						</h1>
						<p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-4xl drop-shadow-md">
							Unlock the hidden power of your data. We transform massive, complex datasets into actionable business intelligence that drives growth, optimizes operations, and creates sustainable competitive advantages.
						</p>
					</div>
				</div>
			</section>

			{/* Strategy Section */}
			<section className="py-8 sm:py-16 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(#ff0ea3_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Content */}
						<div className={`space-y-6 order-1 lg:order-1 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="text-left space-y-3 sm:space-y-4 mb-10">
								<div className="flex flex-col items-start gap-3 sm:gap-4">
									<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
										Data-Driven <span className="text-[#ff0ea3]">Transformation</span>
									</h2>
								</div>
								<p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl font-medium leading-relaxed">
									Move beyond raw numbers. Our analytics solutions provide the context, clarity, and direction needed to navigate today's complex business landscape.
								</p>
							</div>

							<div className="space-y-4 text-slate-600 text-lg leading-relaxed text-left">
								<p>
									In an era of information overload, the challenge isn't collecting data—it's extracting value. We help you build a robust data foundation that scales with your ambition.
								</p>
								<p>
									By integrating advanced AI with modern cloud paradigms, we enable your organization to move from descriptive insights (what happened) to prescriptive action (what to do next).
								</p>
							</div>

							<div className="pt-4 sm:pt-6">
								<Link
									to="/contact"
									className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0ea3] rounded-none hover:bg-[#ff0ea3]/90 hover:shadow-[0_8px_30px_rgba(255,14,163,0.4)] hover:-translate-y-1 active:scale-95"
								>
									<span className="relative flex items-center gap-2">
										Contact Expert
										<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
									</span>
									<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								</Link>
							</div>
						</div>

						{/* Right: Visualization Image */}
						<div className={`relative flex justify-center lg:justify-end order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
								<div className="relative overflow-hidden rounded-none shadow-2xl border border-slate-100 bg-white">
									<img
										src="/image/pages_img/big data analytics.jpg"
										alt="Advanced Data Analytics Visualization"
										className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#050729]/40 to-transparent" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Solutions Section */}
			<section className="py-8 sm:py-20 ai-section relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-5" />
				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white leading-[1.2]">
								Big Data Analytics Services: <span className="text-[#ff0ea3]">Unlocking Strategic Intelligence</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
							Transform your data into a powerful strategic asset with advanced big data analytics solutions designed to drive innovation, efficiency, and growth.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
						{analyticsServices.map((service, index) => (
							<div
								key={service.id}
								className={`modern-card p-8 flex flex-col gap-5 items-center relative overflow-hidden group hover:bg-[#ffffff05] transition-all duration-500 ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
								<div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${service.color} rounded-none flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
									{service.icon}
								</div>
								<h3 className="font-black text-sm sm:text-base text-white text-center w-full tracking-wider uppercase">
									{service.title}
								</h3>
								<p className="text-xs font-medium text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Infographic */}
			<section className="relative overflow-hidden bg-white py-8 sm:py-20">
				<div className="absolute inset-0 bg-[radial-gradient(#050729_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
							Strategic <span className="text-[#ff0ea3]">Impact</span>
						</h2>
						<p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
							How Big Data Analytics transforms your organizational DNA.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ title: "Precision", desc: "Eliminate guesswork with 100% data-verified operational insights.", icon: <Target className="w-10 h-10" />, color: "#3b82f6" },
							{ title: "Efficiency", desc: "Identify and eliminate bottlenecks in workflows instantly.", icon: <Cpu className="w-10 h-10" />, color: "#10b981" },
							{ title: "Profitability", desc: "Discover new revenue streams and optimize price elasticity.", icon: <LineChart className="w-10 h-10" />, color: "#f59e0b" },
							{ title: "Resilience", desc: "Forecast risks and market shifts before they impact your bottom line.", icon: <Shield className="w-10 h-10" />, color: "#ef4444" }
						].map((benefit, idx) => (
							<div key={idx} className="flex flex-col items-center p-8 bg-gray-50 border border-gray-100 hover:border-[#ff0ea3]/30 transition-all duration-300 group text-center">
								<div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-sm bg-white" style={{ color: benefit.color }}>
									{benefit.icon}
								</div>
								<h3 className="font-black text-slate-900 text-lg mb-3 uppercase tracking-tighter" style={{ color: benefit.color }}>{benefit.title}</h3>
								<p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<Industries />

			<AITechnologyStack />

			<AIOnboardingProcess
				serviceName="Big Data Analytics"
				steps={[
					{
						icon: <Mail className="h-8 w-8" />,
						title: 'Initial Concept',
						description: 'Connect with our data strategists to discuss your current data challenges and business objectives.',
						color: "from-blue-500 to-indigo-600"
					},
					{
						icon: <Layers className="h-8 w-8" />,
						title: 'Discovery & Audit',
						description: 'We perform a deep audit of your existing data infrastructure and identify gaps and opportunities.',
						color: "from-purple-500 to-violet-600"
					},
					{
						icon: <Code className="h-8 w-8" />,
						title: 'Architecting',
						description: 'We design a bespoke, scalable data architecture and implementation roadmap tailored to your needs.',
						color: "from-emerald-500 to-teal-600"
					},
					{
						icon: <LineChart className="h-8 w-8" />,
						title: 'Deployment',
						description: 'Launch your data solutions with hands-on support, training, and 24/7 technical monitoring.',
						color: "from-orange-500 to-amber-600"
					},
				]}
			/>

			<LatestBlogs />

			{/* FAQ Section */}
			<section className="py-8 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
				<div className="max-w-4xl mx-auto relative z-10">
					<div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-20">
						<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2]">
							Analytical <span className="text-[#ff0ea3]">Foundations</span>
						</h2>
						<p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto font-medium">
							Everything you need to know about starting your big data transformation.
						</p>
					</div>

					<div className="space-y-4">
						{faqData.map((faq, index) => (
							<div
								key={index}
								className={`border border-gray-200 bg-white transition-all duration-300 group ${openIndex === index ? 'shadow-xl border-[#ff0ea3]/20' : 'hover:border-gray-300'}`}
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full p-5 sm:p-6 text-left flex items-center justify-between"
								>
									<h3 className={`text-sm sm:text-base font-black transition-all uppercase tracking-tight ${openIndex === index ? 'text-[#ff0ea3]' : 'text-slate-900'}`}>
										{faq.question}
									</h3>
									{openIndex === index ? (
										<Minus className="h-5 w-5 text-[#ff0ea3] flex-shrink-0" />
									) : (
										<Plus className="h-5 w-5 text-gray-400 group-hover:text-slate-900 flex-shrink-0 transition-colors" />
									)}
								</button>

								{openIndex === index && (
									<div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50 animate-fade-in shadow-inner">
										<div className="pt-5 font-medium">{faq.answer}</div>
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

export default BigDataAnalytics;
