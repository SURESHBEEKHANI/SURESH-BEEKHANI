import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Brain, Cpu, Cloud, Shield, GitBranch, Server, Code2, Zap, RefreshCw, Layers, MessageSquare, Mail, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import LatestBlogs from "../components/LatestBlogs";

const softwareModernizationServices = [
	{
		id: 1,
		title: "Legacy Modernization",
		description: "Refactor and modernize legacy monoliths into cloud-native microservices with zero downtime migration.",
		icon: <Layers className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 2,
		title: "Cloud Migration",
		description: "Seamlessly migrate your infrastructure to AWS, GCP, or Azure with automated deployment pipelines.",
		icon: <Cloud className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 3,
		title: "Microservices Architecture",
		description: "Decompose monolithic applications into scalable, independently deployable microservices.",
		icon: <GitBranch className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 4,
		title: "CI/CD Pipeline Setup",
		description: "Build automated CI/CD pipelines with GitHub Actions, Jenkins, or GitLab for rapid, reliable releases.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 5,
		title: "Database Modernization",
		description: "Migrate and optimize databases for performance, scalability, and cost efficiency on modern cloud engines.",
		icon: <Server className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 6,
		title: "DevSecOps Integration",
		description: "Embed security scans, compliance checks, and vulnerability testing directly into your delivery pipeline.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
];

const faqData = [
	{
		question: "What is software modernization and why does my business need it?",
		answer: "Software modernization transforms outdated legacy systems into scalable, cloud-native applications. It reduces maintenance costs, improves performance, accelerates delivery, and eliminates technical debt that slows innovation."
	},
	{
		question: "How long does a modernization project take?",
		answer: "Typical modernization spans 3–6 months depending on system complexity. We start with a phased audit, then prioritize high-impact modules for incremental migration with zero downtime."
	},
	{
		question: "Can you modernize systems built on older stacks?",
		answer: "Yes — we handle legacy stacks including COBOL, Java EE, .NET Framework, and on-premise databases. Our approach refactors or re-architects incrementally without full rewrites."
	},
	{
		question: "How do you ensure zero downtime during migration?",
		answer: "We use blue-green deployments, database replication, feature flags, and canary releases. Each phase is validated with automated smoke tests before traffic is switched."
	},
	{
		question: "What cloud platforms do you support?",
		answer: "AWS, Google Cloud Platform, Microsoft Azure, and hybrid/multi-cloud environments. We choose the right platform based on your workload requirements and cost profile."
	},
];

const SoftwareModernization: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="min-h-screen bg-white flex flex-col">
			<Navbar />

			{/* ─── Hero Section ─── */}
			<section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden">
				<div className="absolute inset-0 bg-[url('/image/pages_img/software-modernization.jpg')] bg-cover bg-center opacity-60 sm:opacity-70" />
				<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 sm:via-slate-950/55 to-transparent" />
				<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
				<div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-5 sm:space-y-7 text-left max-w-3xl">
						<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight text-white">
							Software Modernization
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
							Transform legacy systems into scalable, cloud-native applications — faster, safer, with zero downtime.
						</p>
					</div>
				</div>
			</section>

			{/* ─── Capabilities Section ─── */}
			<section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-slate-50/70 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className={`space-y-7 order-1 lg:order-1 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="text-left space-y-4 mb-2">
								<div className="flex flex-col items-start gap-3 sm:gap-4">
									<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
										Future-Proof Your Stack with{" "}
										<span className="text-slate-900">Modern Engineering</span>
									</h2>
								</div>
								<p className="text-base md:text-[17px] text-slate-700 max-w-xl font-medium leading-relaxed">
									Unlock faster delivery and lower maintenance costs with Velnix Solutions' AI-integrated software modernization.
								</p>
							</div>
							<div className="space-y-4 text-slate-800 text-base md:text-[17px] leading-relaxed text-left border-l-4 border-[#B6FF00] pl-6 font-medium">
								<p>
									We refactor monolithic codebases, migrate to cloud-native architectures, and embed automated pipelines that accelerate every release cycle.
								</p>
								<p>
									Our modernization framework reduces technical debt while preserving business logic — delivering measurable ROI within weeks, not months.
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
									<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
								</Link>
							</div>
						</div>
						<div className={`relative order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'} w-full`}>
							<div className="relative w-full md:w-[90%] ml-auto overflow-hidden rounded-2xl border-t-[6px] border-[#B6FF00] shadow-[0_20px_50px_rgba(0,0,0,0.15)] group/cover bg-transparent">
								<img
									src="/image/pages_img/software-modernization.jpg"
									alt="Software Modernization Engineering"
									className="w-full h-auto min-h-[300px] md:min-h-[400px] object-cover transition-transform duration-700 group-hover/cover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
								<div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#B6FF00]/60 rounded-br-lg" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ─── Services Section ─── */}
			<section className="py-10 sm:py-14 bg-[#01010c] relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[140px]" />
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px]" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Modernization <span className="text-white">Services</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							End-to-end engineering services to transform, migrate, and optimize your software stack.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{softwareModernizationServices.map((service, index) => (
							<div
								key={service.id}
								className={`p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] rounded-none bg-white/[0.03] border border-white/10 hover:border-[#B6FF00]/50 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(182,255,0,0.15)] ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.08}s` }}
							>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-none flex items-center justify-center mb-2 mx-auto text-black shadow-[0_4px_16px_rgba(182,255,0,0.25)]`}>
									{service.icon}
								</div>
								<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center tracking-wide">
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

			{/* ─── Strategic Benefits ─── */}
			<section className="relative overflow-hidden bg-white py-10 sm:py-14">
				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								Business <span className="text-slate-900">Impact</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Tangible outcomes from every layer of your modernized stack.
						</p>
					</div>
					<div className="relative px-4">
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0" />
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
							{[
								{
									title: "Lower Costs",
									desc: "Reduce infrastructure and maintenance spend by migrating to optimized cloud services.",
									icon: <Cpu className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above" as const
								},
								{
									title: "Faster Delivery",
									desc: "Automated pipelines cut release cycles from weeks to hours with zero manual effort.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above" as const
								},
								{
									title: "Scalable Architecture",
									desc: "Microservices and containers scale elastically to handle any traffic spike effortlessly.",
									icon: <Layers className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above" as const
								},
								{
									title: "Enhanced Security",
									desc: "Built-in DevSecOps scans and compliance checks protect every deployment automatically.",
									icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above" as const
								}
							].map((item: any, idx) => (
								<div key={idx} className="flex flex-col items-center">
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="text-center max-w-[220px]">
											<h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">{item.title}</h3>
											<p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
										</div>
										<div className="w-[1px] h-10 bg-slate-200 mt-4" />
										<div className="w-1.5 h-1.5 rounded-full mt-[-4px]" style={{ backgroundColor: item.color }} />
									</div>
									<div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-100 rounded-full" />
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border border-slate-100/50 rounded-full border-l-transparent border-r-transparent rotate-45" />
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border border-slate-100/50 rounded-full border-t-transparent border-b-transparent -rotate-12" />
										</div>
										<div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center z-20 hover:scale-110 transition-transform duration-500 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)]" style={{ border: `1.5px solid ${item.color}25` }}>
											<div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-black" style={{ backgroundColor: item.color }}>
												{React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 sm:w-10 sm:h-10' })}
											</div>
										</div>
									</div>
									<div className={`hidden lg:flex flex-col items-center h-[180px] mt-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'below' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="w-1.5 h-1.5 rounded-full mb-[-4px]" style={{ backgroundColor: item.color }} />
										<div className="w-[1px] h-10 bg-slate-200 mb-4" />
										<div className="text-center max-w-[220px]">
											<h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">{item.title}</h3>
											<p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
										</div>
									</div>
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

			{/* ─── Implementation Roadmap ─── */}
			<section className="bg-[#01010c] relative overflow-hidden py-10 sm:py-14">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[140px]" />
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px]" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Implementation <span className="text-white">Roadmap</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							Our systematic methodology for modernizing legacy systems with zero disruption.
						</p>
					</div>
					<div className={`mt-8 sm:mt-12 border border-white/[0.08] rounded-none overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
							{[
								{ id: "01", title: "System Audit", desc: "Deep analysis of your legacy stack, dependencies, and technical debt hotspots.", color: "#B6FF00", icon: <Brain className="w-8 h-8" /> },
								{ id: "02", title: "Modern Architecture", desc: "Design cloud-native microservices with containerized, decoupled components.", color: "#B6FF00", icon: <Layers className="w-8 h-8" /> },
								{ id: "03", title: "Incremental Migration", desc: "Refactor modules iteratively with feature flags and blue-green deployments.", color: "#B6FF00", icon: <GitBranch className="w-8 h-8" /> },
								{ id: "04", title: "CI/CD Pipeline", desc: "Automated build, test, and deploy pipelines with quality gates and rollbacks.", color: "#B6FF00", icon: <Zap className="w-8 h-8" /> },
								{ id: "05", title: "Security Hardening", desc: "DevSecOps scans, vulnerability testing, and compliance embedded in every release.", color: "#B6FF00", icon: <Shield className="w-8 h-8" /> },
								{ id: "06", title: "Monitor & Optimize", desc: "Observability with Datadog, Prometheus, and Grafana for continuous improvement.", color: "#B6FF00", icon: <Server className="w-8 h-8" /> }
							].map((step, index) => (
								<div
									key={step.id}
									className={`flex flex-col items-center justify-center p-6 sm:p-8 relative group transition-colors duration-300 hover:bg-white/[0.025]
										${index % 3 !== 2 ? 'lg:border-r border-white/[0.08]' : ''}
										${index < 3 ? 'lg:border-b border-white/[0.08]' : ''}
										${index % 2 === 0 ? 'md:max-lg:border-r border-white/[0.08]' : ''}
										${index < 4 ? 'md:max-lg:border-b border-white/[0.08]' : ''}
										${index < 5 ? 'max-md:border-b border-white/[0.08]' : ''}`}
								>
									<div className="text-xl sm:text-2xl font-black mb-4 tracking-tighter" style={{ color: step.color }}>
										{step.id}
									</div>
									<div className="flex items-center gap-3 w-full justify-center mb-4">
										<div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}35` }} />
										<div className="text-white group-hover:scale-110 transition-transform duration-300">
											{React.cloneElement(step.icon as React.ReactElement, { className: 'w-4 h-4', style: { color: step.color } })}
										</div>
										<div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}35` }} />
									</div>
									<h4 className="text-white font-bold text-base sm:text-lg mb-2 text-center tracking-tight transition-colors duration-300">{step.title}</h4>
									<p className="text-slate-200 text-xs sm:text-sm leading-relaxed text-center max-w-[220px] font-medium">{step.desc}</p>
									<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ─── Why Choose Us ─── */}
			<section className="py-10 sm:py-14 bg-white relative overflow-hidden">
				<div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-slate-50/60 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								Why Choose <span className="text-slate-900">Velnix Solutions?</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
							Decades of legacy modernization expertise with proven zero-downtime results.
						</p>
					</div>
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className={`relative ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative w-full md:w-[95%] mr-auto overflow-hidden rounded-2xl border-t-[6px] border-[#B6FF00] shadow-[0_20px_50px_rgba(0,0,0,0.15)] group/cover bg-transparent">
								<img
									src="/image/pages_img/WHY-CHOOSE-US.jpg"
									alt="Why Choose Us"
									className="w-full h-[350px] lg:h-[500px] object-cover transition-transform duration-700 group-hover/cover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
								<div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#B6FF00]/60 rounded-bl-lg" />
							</div>
						</div>
						<div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							{[
								{
									num: "01",
									title: "Legacy Expertise",
									desc: "We've modernized systems built on COBOL, Java EE, .NET Framework, and mainframes — preserving business logic while eliminating technical debt.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "02",
									title: "Incremental Approach",
									desc: "We refactor module by module with feature flags and canary releases — no big-bang cutovers or business disruption.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "03",
									title: "Cloud-Native Target",
									desc: "Microservices, containers, and serverless architectures that scale elastically and reduce infrastructure costs.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "04",
									title: "Zero Downtime Guarantee",
									desc: "Blue-green deployments, database replication, and automated rollback ensure continuous availability throughout.",
									color: "bg-[#B6FF00]"
								}
							].map((item, idx) => (
								<div key={idx} className="flex items-start gap-5 group" style={{ animationDelay: `${idx * 0.08}s` }}>
									<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-none flex items-center justify-center text-black font-black text-sm sm:text-base shadow-[0_4px_16px_rgba(182,255,0,0.25)] group-hover:shadow-[0_6px_24px_rgba(182,255,0,0.35)] group-hover:scale-105 transition-all duration-300`}>
										{item.num}
									</div>
									<div className="pt-0.5">
										<h3 className="font-bold text-[#0a0435] text-base sm:text-lg mb-1.5 tracking-tight group-hover:text-black transition-colors duration-300">{item.title}</h3>
										<p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ─── AI Onboarding ─── */}
			<section className="bg-[#01010c] relative overflow-hidden py-10 sm:py-14">
				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Start Your <span className="text-white">Modernization</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							Book a free architecture assessment and get a tailored modernization roadmap.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
						{[
							{ icon: <Mail className="h-8 w-8" />, title: "Contact Us", desc: "Share your legacy stack and challenges for a personalized assessment.", color: "from-[#B6FF00] to-[#B6FF00]/70" },
							{ icon: <Brain className="h-8 w-8" />, title: "Architecture Audit", desc: "Our engineers analyze your codebase, dependencies, and debt hotspots.", color: "from-[#B6FF00] to-[#B6FF00]/70" },
							{ icon: <Layers className="h-8 w-8" />, title: "Modernization Plan", desc: "A phased roadmap with milestones, timelines, and cost estimates.", color: "from-[#B6FF00] to-[#B6FF00]/70" },
							{ icon: <Zap className="h-8 w-8" />, title: "Launch & Iterate", desc: "We execute the plan and continuously optimize based on metrics.", color: "from-[#B6FF00] to-[#B6FF00]/70" }
						].map((step, index) => (
							<div key={index} className={`p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[180px] rounded-none bg-white/[0.03] border border-white/10 hover:border-[#B6FF00]/50 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(182,255,0,0.15)] ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.08}s` }}>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-lg sm:rounded-none flex items-center justify-center mb-2 mx-auto text-black shadow-[0_4px_16px_rgba(182,255,0,0.25)]`}>
									{step.icon}
								</div>
								<h3 className="font-bold text-sm sm:text-base text-white mb-2 text-center tracking-wide">{step.title}</h3>
								<p className="text-xs sm:text-sm font-medium text-slate-200 text-center leading-relaxed">{step.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<LatestBlogs />

			{/* ─── FAQ Section ─── */}
			<section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200/80" />
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								Frequently Asked <span className="text-black">Questions</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Common questions about software modernization, migration, and legacy refactoring.
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
											<CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: '#B6FF00' }} />
										) : (
											<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0 transition-colors duration-300 group-hover:text-[#B6FF00]" />
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

export default SoftwareModernization;
