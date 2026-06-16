import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow, Plus, Minus, Cloud, Terminal, RefreshCw, Box, Activity, GitBranch, Layout, Settings, Server } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";
import LatestBlogs from "../components/LatestBlogs";

// DevOps Services
const devopsServices = [
	{
		id: 1,
		title: "Continuous Integration (CI)",
		description: "Accelerate your development cycle with automated code integration, efficient build processes, and comprehensive testing for faster code delivery.",
		icon: <RefreshCw className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 2,
		title: "Continuous Deployment (CD)",
		description: "Simplify and speed up your release pipeline with automated deployments, ensuring consistent, fast, and reliable delivery of new features.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 3,
		title: "Infrastructure as Code (IaC)",
		description: "Enhance scalability and consistency with code-driven infrastructure management using Terraform, CloudFormation, and Ansible.",
		icon: <Terminal className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 4,
		title: "Monitoring & Logging",
		description: "Gain real-time visibility with advanced monitoring and logging solutions using Datadog, Prometheus, and ELK stack.",
		icon: <Activity className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 5,
		title: "Collaboration Tools",
		description: "Strengthen teamwork with integrated platforms that improve communication across development and operations teams.",
		icon: <Users className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
	{
		id: 6,
		title: "DevSecOps Integration",
		description: "Embed security at every stage of development with automated vulnerability scans, compliance checks, and secure delivery.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-[#B6FF00] to-[#B6FF00]/70"
	},
];

const faqData = [
	{
		question: "What is DevOps and why does my business need it?",
		answer: "DevOps bridges the gap between software development and IT operations. It implements automated practices that streamline software delivery, resulting in faster time-to-market, higher software quality, and rapid recovery from infrastructure failures."
	},
	{
		question: "Which cloud platforms do you support?",
		answer: "Our DevOps engineers are highly experienced across all major cloud providers including Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure, as well as hybrid and multi-cloud environments."
	},
	{
		question: "How long does a DevOps transformation take?",
		answer: "A complete transformation typically spans several months. However, implementing targeted improvements like a CI/CD pipeline or basic containerization (Docker/K8s) can yield measurable benefits within weeks."
	},
	{
		question: "Can you help migrate our legacy applications to the cloud?",
		answer: "Yes, we specialize in cloud migrations. We analyze your monolithic systems and architect a phased migration strategy, often refactoring applications into cloud-native microservices along the way."
	},
	{
		question: "How do you handle security in DevOps?",
		answer: "We practice 'DevSecOps', embedding security checks natively into the CI/CD pipeline. This includes automated vulnerability scanning, secure container registries, IAM best practices, and infrastructure compliance testing."
	},
];

const DevOps: React.FC = () => {
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
			<section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 bg-[url('/image/pages_img/devops-infrastructure.jpg')] bg-cover bg-center opacity-60 sm:opacity-70" />

				{/* Layered gradient: deep slate on left fades to transparent — refined vignette */}
				<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 sm:via-slate-950/55 to-transparent" />

				{/* Subtle bottom scrim for clean section transition */}
				<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />

				<div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-5 sm:space-y-7 text-left max-w-3xl">
						<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight text-white">
							DevOps Engineering
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
							Accelerate delivery, ensure monumental scalability, and eliminate operational bottlenecks with modern DevOps tools and cloud-native infrastructure automation.
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
										Revolutionize Your Operations with{" "}
										<span className="text-slate-900">DevOps Mastery</span>
									</h2>
								</div>
								<p className="text-base md:text-[17px] text-slate-700 max-w-xl font-medium leading-relaxed">
									Unlock faster, smarter, and more reliable software delivery with Velnix Solutions’ AI-integrated DevOps consulting.
								</p>
							</div>

							<div className="space-y-4 text-slate-800 text-base md:text-[17px] leading-relaxed text-left border-l-4 border-[#B6FF00] pl-6 font-medium">
								<p>
									We leverage AI-powered automation, predictive analytics, and robust QA to enhance efficiency, reduce risks, and accelerate deployments. Our approach ensures your systems are fast, scalable, and resilient.
								</p>
								<p>
									Our expert consulting optimizes workflows and strengthens team collaboration. We deliver customized strategies and modern toolchains that drive continuous integration and high-performance software development.
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
									src="/image/pages_img/devops-infrastructure.jpg"
									alt="DevOps Infrastructure Engineering"
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
								Technical DevOps <span className="text-white">Excellence</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							Comprehensive engineering services designed for relentless deployment speed and infrastructure resilience.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{devopsServices.map((service, index) => (
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
								Operational <span className="text-slate-900">Impact</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							experience the tactical advantage of streamlined release cycles and rock-solid systems operations.
						</p>
					</div>

					<div className="relative px-4">
						{/* Horizontal Connecting Line (Desktop Only) */}
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0" />

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
							{[
								{
									title: "Faster Releases",
									desc: "Push new features and vital bug fixes to market significantly faster with automated CI/CD pipelines.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Higher Quality",
									desc: "Mandatory automated testing stages catch regressions before code ever reaches your production environment.",
									icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Scalable Uptime",
									desc: "Elastic, containerized architectures gracefully handle massive web traffic spikes with automated load balancing.",
									icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								},
								{
									title: "Security & Recovery",
									desc: "Isolated infrastructure as code and automated backups permit near-instantaneous disaster recovery.",
									icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#B6FF00",
									textSide: "above"
								}
							].map((item, idx) => (
								<div key={idx} className="flex flex-col items-center">
									{/* Label Above (Desktop) */}
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
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
									<div className={`hidden lg:flex flex-col items-center h-[180px] mt-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'below' ? 'opacity-100' : 'opacity-0 invisible'}`}>
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

			{/* ─── AI Implementation Process Section ─── */}
			<section className="bg-[#01010c] relative overflow-hidden py-10 sm:py-14">
				{/* High-Tech Background Layers */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
				{/* Ambient light — softened, no pulse */}
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/8 rounded-full blur-[140px]" />
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[160px]" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Implementation <span className="text-white">Roadmap</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
							Our systematic methodology for building high-speed, secure, and resilient infrastructure.
						</p>
					</div>
					<div className={`mt-8 sm:mt-12 border border-white/[0.08] rounded-none overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
							{[
								{ id: "01", title: "Infrastructure Audit", desc: "We dive deep into your codebase and server infrastructure to identify bottlenecks and operational silos.", color: "#B6FF00", icon: <Eye className="w-8 h-8" /> },
								{ id: "02", title: "Architecture Design", desc: "Architecting custom CI/CD pipelines (GitHub Actions, Jenkins, GitLab) mapping from commit to deployment.", color: "#B6FF00", icon: <Layout className="w-8 h-8" /> },
								{ id: "03", title: "IaC Implementation", desc: "Writing Terraform or CloudFormation code to dynamically spawn staging and production environment safely.", color: "#B6FF00", icon: <Code className="w-8 h-8" /> },
								{ id: "04", title: "Security Integration", desc: "Embedding automated scans and vulnerability checks (DevSecOps) within the automated deployment pipeline.", color: "#B6FF00", icon: <Shield className="w-8 h-8" /> },
								{ id: "05", title: "Scale Deployment", desc: "Executing the automated build/deploy cycle across multiple regions with zero-downtime and rollback safety.", color: "#B6FF00", icon: <Zap className="w-8 h-8" /> },
								{ id: "06", title: "Monitoring & Insight", desc: "Implementing Datadog, Prometheus, or Grafana for total real-time insight into performance and production scale.", color: "#B6FF00", icon: <Activity className="w-8 h-8" /> }
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

									{/* Corner accents */}
									<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ─── Why Choose Us Section ─── */}
			<section className="py-10 sm:py-14 bg-white relative overflow-hidden">
				{/* Refined ambient left wash */}
				<div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-slate-50/60 to-transparent pointer-events-none" />

				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-[1.2]">
								Why Choose <span className="text-black">Velnix Solutions?</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
							Mastery of cloud dynamics and systemic efficiency for world-class digital operations.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Workspace Image */}
						<div className={`relative ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative w-full md:w-[95%] mr-auto overflow-hidden rounded-2xl border-t-[6px] border-[#B6FF00] shadow-[0_20px_50px_rgba(0,0,0,0.15)] group/cover bg-transparent">
								<img
									src="/image/pages_img/WHY-CHOOSE-US.jpg"
									alt="Why Choose Us"
									className="w-full h-[350px] lg:h-[500px] object-cover transition-transform duration-700 group-hover/cover:scale-105"
								/>
								{/* Premium gradient overlay for depth */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
								
								{/* Decorative corner accent */}
								<div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#B6FF00]/60 rounded-bl-lg" />
							</div>
						</div>

						{/* Right: Numbered List */}
						<div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							{[
								{
									num: "01",
									title: "Comprehensive Architecture Audit",
									desc: "We dive deep into your existing environment to expose infrastructural bottlenecks and wasteful operational silos.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "02",
									title: "Toolchain Agnosticism",
									desc: "From Jenkins and GitHub actions to Kubernetes and Terraform, we use the best tools for your specific custom cloud environment.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "03",
									title: "High Availability Focus",
									desc: "Creating redundant subnets, automated load balancing, and failover strategies to guarantee 99.99% system uptime.",
									color: "bg-[#B6FF00]"
								},
								{
									num: "04",
									title: "Cloud Cost Optimization",
									desc: "We right-size cloud resources and terminate orphaned instances automatically to dramatically lower monthly AWS/GCP bills.",
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

			<AIOnboardingProcess
				serviceName="devops consulting"
				steps={[
					{
						icon: <Mail className="h-8 w-8" />,
						title: 'Contact Us',
						description: 'Reach out to start your DevOps transformation. Share your current infrastructure challenges so we can prepare a tailored strategy.',
						color: "from-[#B6FF00] to-[#B6FF00]/70"
					},
					{
						icon: <Brain className="h-8 w-8" />,
						title: 'Infrastructure Discovery',
						description: 'Schedule a session with our DevOps engineers. We\'ll audit your codebase, server setup, and CI/CD limitations.',
						color: "from-[#B6FF00] to-[#B6FF00]/70"
					},
					{
						icon: <Target className="h-8 w-8" />,
						title: 'Strategic Roadmap',
						description: 'Based on the audit, we deliver a comprehensive proposal outlining the toolchain, migration path, and automation scope.',
						color: "from-[#B6FF00] to-[#B6FF00]/70"
					},
					{
						icon: <Zap className="h-8 w-8" />,
						title: 'Launch & Automation',
						description: 'Once approved, we implement IaC, build automated pipelines, and handover a fully optimized, scalable infrastructure.',
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
								Frequently Asked <span className="text-black">Questions</span>
							</h2>
						</div>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
							Common questions about our DevOps lifecycle, cloud management, and infrastructure security.
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

export default DevOps;
