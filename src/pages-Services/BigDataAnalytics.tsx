import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe,
	ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot,
	Mail, Phone, MapPin, Clock, Cpu, Network, Workflow, Plus, Minus,
	Database, Layers, Search, PieChart, LineChart, FileText, RefreshCw
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
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 2,
		title: "Data Visualization",
		description: "Deliver rich, interactive dashboards and visual experiences that simplify complex datasets, uncover hidden patterns, and support executive-level decision-making.",
		icon: <PieChart className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 3,
		title: "Data-Driven Marketing",
		description: "Leverage deep analytical insights to understand customer behavior, predict trends, and execute highly targeted, personalized marketing strategies that maximize ROI.",
		icon: <Target className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 4,
		title: "Business Intelligence",
		description: "Empower your organization with predictive and prescriptive analytics that generate actionable insights, optimize performance, and support strategic planning.",
		icon: <BarChart3 className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 5,
		title: "Real-Time Analytics",
		description: "Utilize cutting-edge stream processing and event-driven architectures to analyze high-velocity data in real time—enabling immediate insights and rapid response to changing conditions.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 6,
		title: "Healthcare Analytics",
		description: "Enhance patient care, operational efficiency, and clinical outcomes through data-driven insights, predictive modeling, and intelligent healthcare analytics solutions.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
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
		<div className="min-h-screen bg-white flex flex-col font-sans">
			<Navbar />

			{/* ─── Hero Section ─── */}
			<section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 bg-[url('/image/pages_img/big-data-analytics.jpg')] bg-cover bg-center opacity-60 sm:opacity-70" style={{ backgroundImage: "url('/image/pages_img/big data analytics.jpg')" }} />

				{/* Layered gradient: deep slate on left fades to transparent — refined vignette */}
				<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 sm:via-slate-950/55 to-transparent" />

				{/* Subtle bottom scrim for clean section transition */}
				<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />

				<div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-5 sm:space-y-7 text-left max-w-3xl">
						<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight text-white">
							Big Data Analytics
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
							Unlock the hidden power of your data. We transform massive, complex datasets into actionable business intelligence that drives growth, optimizes operations, and creates sustainable competitive advantages.
						</p>
					</div>
				</div>
			</section>

			{/* ─── Capabilities Section ─── */}
			<section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
				{/* Refined ambient wash — right side only, barely perceptible */}
				<div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-slate-50/70 to-transparent pointer-events-none" />

				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Content */}
						<div className={`space-y-7 order-1 lg:order-1 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="text-left space-y-4 mb-2">
								<div className="flex flex-col items-start gap-3 sm:gap-4">
									<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
										Data-Driven{" "}
										<span className="text-slate-900">Transformation</span>
									</h2>
								</div>
								<p className="text-base md:text-[17px] text-slate-700 max-w-xl font-medium leading-relaxed">
									Move beyond raw numbers. Our analytics solutions provide the context, clarity, and direction needed to navigate today's complex business landscape.
								</p>
							</div>

							<div className="space-y-4 text-slate-800 text-base md:text-[17px] leading-relaxed text-left border-l-4 border-[#B6FF00] pl-6 font-medium">
								<p>
									In an era of information overload, the challenge isn't collecting data—it's extracting value. We help you build a robust data foundation that scales with your ambition.
								</p>
								<p>
									By integrating advanced AI with modern cloud paradigms, we enable your organization to move from descriptive insights (what happened) to prescriptive action (what to do next).
								</p>
							</div>

							<div className="pt-2">
								<Link
									to="/contact"
									className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-bold text-black transition-all duration-300 bg-[#B6FF00] rounded-none hover:bg-[#a8ef00] hover:shadow-[0_6px_28px_rgba(182,255,0,0.35)] active:scale-95"
								>
									<span className="relative flex items-center gap-2 text-sm sm:text-base">
										Contact Expert
										<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
									</span>
									{/* Sheen sweep */}
									<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
								</Link>
							</div>
						</div>

						{/* Right: Image */}
						<div className={`relative order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'} w-full`}>
							<div className="relative w-full md:w-[90%] ml-auto overflow-hidden rounded-2xl border-t-[6px] border-[#B6FF00] shadow-[0_20px_50px_rgba(0,0,0,0.15)] group/cover bg-transparent">
								<img
									src="/image/pages_img/big data analytics.jpg"
									alt="Advanced Data Analytics Visualization"
									className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover/cover:scale-105"
								/>
								{/* Premium gradient overlay for depth */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
								
								{/* Decorative corner accent */}
								<div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#B6FF00]/60 rounded-br-lg" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ─── Services Section ─── */}
			<section className="py-10 sm:py-14 bg-[#01010c] relative overflow-hidden">
				{/* High-Tech Background Layers */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
				{/* Ambient light */}
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/8 rounded-full blur-[140px]" />
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[160px]" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Big Data Analytics <span className="text-white">Services</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							Transform your data into a powerful strategic asset with advanced big data analytics solutions designed to drive innovation, efficiency, and growth.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{analyticsServices.map((service, index) => (
							<div
								key={service.id}
								className={`p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] rounded-none bg-white/[0.03] border border-white/10 hover:border-[#B6FF00]/50 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(182,255,0,0.15)] ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.08}s` }}
							>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-none flex items-center justify-center mb-2 mx-auto text-black shadow-[0_4px_16px_rgba(182,255,0,0.25)]`}>
									{service.icon}
								</div>
								<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center w-full tracking-wide">
									{service.title}
								</h3>
								<p className="text-xs sm:text-sm font-medium text-slate-200 text-center leading-relaxed">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ─── Strategic Benefits Infographic Section ─── */}
			<section className="relative overflow-hidden bg-white py-10 sm:py-14">
				{/* Refined technical dot grid — Lighter, more breathable */}

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								Strategic <span className="text-slate-900">Impact</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							How Big Data Analytics transforms your organizational DNA.
						</p>
					</div>

					<div className="relative px-4">
						{/* Horizontal Connecting Line (Desktop Only) */}
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0" />

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
							{[
								{
									title: "Precision",
									desc: "Eliminate guesswork with 100% data-verified operational insights.",
									icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Efficiency",
									desc: "Identify and eliminate bottlenecks in workflows instantly.",
									icon: <Cpu className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Profitability",
									desc: "Discover new revenue streams and optimize price elasticity.",
									icon: <LineChart className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Resilience",
									desc: "Forecast risks and market shifts before they impact your bottom line.",
									icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								}
							].map((item, idx) => (
								<div key={idx} className="flex flex-col items-center">
									{/* Label Above (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={item.textSide === 'above' ? { opacity: 1 } : { opacity: 0, visibility: 'hidden' }}>
										<div className="text-center max-w-[220px]">
											<h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">{item.title}</h3>
											<p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
										</div>
										<div className="w-[1px] h-10 bg-slate-200 mt-4" />
										<div className="w-1.5 h-1.5 rounded-full mt-[-4px]" style={{ backgroundColor: item.color }} />
									</div>

									{/* The Circular Node */}
									<div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
										{/* Concentric Rings */}
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-100 rounded-full" />
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border border-slate-100/50 rounded-full border-l-transparent border-r-transparent rotate-45" />
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border border-slate-100/50 rounded-full border-t-transparent border-b-transparent -rotate-12" />
										</div>

										{/* Inner Circle Node */}
										<div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center z-20 hover:scale-110 transition-transform duration-500 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)]" style={{ border: `1.5px solid ${item.color}25` }}>
											<div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-black" style={{ backgroundColor: item.color }}>
												{React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 sm:w-10 sm:h-10' })}
											</div>
										</div>
									</div>

									{/* Label Below (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] mt-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={item.textSide === 'below' ? { opacity: 1 } : { opacity: 0, visibility: 'hidden' }}>
										<div className="w-1.5 h-1.5 rounded-full mb-[-4px]" style={{ backgroundColor: item.color }} />
										<div className="w-[1px] h-10 bg-slate-200 mb-4" />
										<div className="text-center max-w-[220px]">
											<h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">{item.title}</h3>
											<p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
										</div>
									</div>

									{/* Mobile Label */}
									<div className="lg:hidden mt-8 text-center px-4">
										<h3 className="font-bold text-slate-900 text-lg mb-1.5 tracking-tight">{item.title}</h3>
										<p className="text-sm text-slate-500 font-normal leading-relaxed">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
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
						color: "from-[#B6FF00] to-[#B6FF00]/70"
					},
					{
						icon: <Layers className="h-8 w-8" />,
						title: 'Discovery & Audit',
						description: 'We perform a deep audit of your existing data infrastructure and identify gaps and opportunities.',
						color: "from-[#B6FF00] to-[#B6FF00]/70"
					},
					{
						icon: <Code className="h-8 w-8" />,
						title: 'Architecting',
						description: 'We design a bespoke, scalable data architecture and implementation roadmap tailored to your needs.',
						color: "from-[#B6FF00] to-[#B6FF00]/70"
					},
					{
						icon: <LineChart className="h-8 w-8" />,
						title: 'Deployment',
						description: 'Launch your data solutions with hands-on support, training, and 24/7 technical monitoring.',
						color: "from-[#B6FF00] to-[#B6FF00]/70"
					},
				]}
			/>

			<LatestBlogs />

			{/* ─── FAQ Section ─── */}
			<section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
				{/* Top rule */}
				<div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200/80" />

				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								Analytical <span className="text-black">Foundations</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Everything you need to know about starting your big data transformation.
						</p>
					</div>
					<div className="space-y-2.5">
						{faqData.map((faq, index) => (
							<div
								key={index}
								className={`border border-slate-200 overflow-hidden bg-white transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_4px_20px_rgba(182,255,0,0.2)] group ${openIndex === index ? 'shadow-lg border-[#B6FF00]/50' : ''}`}
								style={openIndex === index ? {
									boxShadow: '0 4px 20px rgba(182, 255, 0, 0.2), 0 0 15px rgba(182, 255, 0, 0.15)'
								} : {}}
							>
								<button
									onClick={() => toggleFAQ(index)}
									className={`w-full h-auto p-4 sm:p-5 text-left transition-all duration-300 ${openIndex === index ? 'bg-gradient-to-r from-[#B6FF00]/15 via-[#B6FF00]/10 to-[#B6FF00]/5' : 'hover:bg-[#B6FF00]/5'}`}
								>
									<div className="flex items-center justify-between w-full">
										<h3 className={`text-sm sm:text-[15px] font-semibold pr-3 transition-colors duration-300 group-hover:text-[#B6FF00] ${openIndex === index ? 'text-[#B6FF00]' : 'text-slate-900'}`}>
											{faq.question}
										</h3>
										{openIndex === index ? (
											<Minus className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: '#B6FF00' }} />
										) : (
											<Plus className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0 transition-colors duration-300 group-hover:text-[#B6FF00]" />
										)}
									</div>
								</button>

								{openIndex === index && (
									<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 bg-white">
										<div className="pt-4 font-normal">{faq.answer}</div>
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
