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
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Continuous Deployment (CD)",
		description: "Simplify and speed up your release pipeline with automated deployments, ensuring consistent, fast, and reliable delivery of new features.",
		icon: <Zap className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 3,
		title: "Infrastructure as Code (IaC)",
		description: "Enhance scalability and consistency with code-driven infrastructure management using Terraform, CloudFormation, and Ansible.",
		icon: <Terminal className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Monitoring & Logging",
		description: "Gain real-time visibility with advanced monitoring and logging solutions using Datadog, Prometheus, and ELK stack.",
		icon: <Activity className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 5,
		title: "Collaboration Tools",
		description: "Strengthen teamwork with integrated platforms that improve communication across development and operations teams.",
		icon: <Users className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "DevSecOps Integration",
		description: "Embed security at every stage of development with automated vulnerability scans, compliance checks, and secure delivery.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-teal-500 to-cyan-500"
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
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col">
			<Navbar />

			{/* Hero Section */}
			<section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/devops-infrastructure.jpg')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-6 sm:space-y-8">
						<h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
							DevOps Engineering
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
							Accelerate delivery, ensure monumental scalability, and eliminate operational bottlenecks <br /> 
							with modern DevOps tools and cloud-native infrastructure automation.
						</p>
					</div>
				</div>
			</section>

			{/* Capabilities Section */}
			<section className="py-8 sm:py-10 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Content */}
						<div className={`space-y-6 order-1 lg:order-1 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="text-left space-y-3 sm:space-y-4 mb-10">
								<div className="flex flex-col items-start gap-3 sm:gap-4">
									<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
										Revolutionize Your Operations with <span className="text-[#ff0ea3]">DevOps Mastery</span>
									</h2>
								</div>
								<p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl font-medium leading-relaxed">
									Unlock faster, smarter, and more reliable software delivery with Velnix Solutions’ AI-integrated DevOps consulting.
								</p>
							</div>

							<div className="space-y-4 text-slate-600 text-lg leading-relaxed text-left">
								<p>
									We leverage AI-powered automation, predictive analytics, and robust QA to enhance efficiency, reduce risks, and accelerate deployments. Our approach ensures your systems are fast, scalable, and resilient.
								</p>
								<p>
									Our expert consulting optimizes workflows and strengthens team collaboration. We deliver customized strategies and modern toolchains that drive continuous integration and high-performance software development.
								</p>
							</div>

							<div className="pt-4 sm:pt-6">
								<Link
									to="/contact"
									className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0ea3] rounded-none hover:bg-[#ff0ea3]/90 hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(255,14,163,0.4)]"
								>
									<span className="relative flex items-center gap-2">
										Optimize Infrastructure
										<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
									</span>
									<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								</Link>
							</div>
						</div>

						{/* Right: Image with floating effect */}
						<div className={`relative flex justify-center lg:justify-end order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
								<div className="relative overflow-hidden rounded-none shadow-2xl border border-slate-100">
									<img
										src="/image/pages_img/devops-infrastructure.jpg"
										alt="DevOps Infrastructure Engineering"
										className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-8 sm:py-10 ai-section">
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Technical DevOps <span className="text-[#ff0ea3]">Excellence</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
							Comprehensive engineering services designed for relentless deployment speed and infrastructure resilience.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{devopsServices.map((service, index) => (
							<div
								key={service.id}
								className={`modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-none flex items-center justify-center mb-2 mx-auto text-white`}>
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
			<section className="relative overflow-hidden bg-white py-8 sm:py-10">
				{/* Technical Grid Background */}
				<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								Operational <span className="text-[#ff0ea3]">Impact</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
							experience the tactical advantage of streamlined release cycles and rock-solid systems operations.
						</p>
					</div>

					<div className="relative px-4">
						{/* Horizontal Connecting Line (Desktop Only) */}
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
							{[
								{
									title: "Faster Releases",
									desc: "Push new features and vital bug fixes to market significantly faster with automated CI/CD pipelines.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#00b894",
									textSide: "above"
								},
								{
									title: "Higher Quality",
									desc: "Mandatory automated testing stages catch regressions before code ever reaches your production environment.",
									icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#ff7675",
									textSide: "above"
								},
								{
									title: "Scalable Uptime",
									desc: "Elastic, containerized architectures gracefully handle massive web traffic spikes with automated load balancing.",
									icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#fbc531",
									textSide: "above"
								},
								{
									title: "Security & Recovery",
									desc: "Isolated infrastructure as code and automated backups permit near-instantaneous disaster recovery.",
									icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
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

			<AITechnologyStack />

			{/* DevOps Implementation Process Section (Pill-Style Infographic) */}
			<section className="bg-[#01010c] relative overflow-hidden py-8 sm:py-10">
				{/* High-Tech Background Layers */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
				<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Implementation <span className="text-[#ff0ea3]">Roadmap</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
							Our systematic methodology for building high-speed, secure, and resilient infrastructure.
						</p>
					</div>

					<div className={`mt-8 sm:mt-12 border border-white/25 rounded-none overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
							{[
								{ id: "01", title: "Infrastructure Audit", desc: "We dive deep into your codebase and server infrastructure to identify bottlenecks and operational silos.", color: "#e23126", icon: <Eye className="w-8 h-8" /> },
								{ id: "02", title: "Architecture Design", desc: "Architecting custom CI/CD pipelines (GitHub Actions, Jenkins, GitLab) mapping from commit to deployment.", color: "#9068d4", icon: <Layout className="w-8 h-8" /> },
								{ id: "03", title: "IaC Implementation", desc: "Writing Terraform or CloudFormation code to dynamically spawn staging and production environment safely.", color: "#3eb37c", icon: <Code className="w-8 h-8" /> },
								{ id: "04", title: "Security Integration", desc: "Embedding automated scans and vulnerability checks (DevSecOps) within the automated deployment pipeline.", color: "#3b82f6", icon: <Shield className="w-8 h-8" /> },
								{ id: "05", title: "Scale Deployment", desc: "Executing the automated build/deploy cycle across multiple regions with zero-downtime and rollback safety.", color: "#f39c12", icon: <Zap className="w-8 h-8" /> },
								{ id: "06", title: "Monitoring & Insight", desc: "Implementing Datadog, Prometheus, or Grafana for total real-time insight into performance and production scale.", color: "#ff0ea3", icon: <Activity className="w-8 h-8" /> }
							].map((step, index) => (
								<div
									key={step.id}
									className={`flex flex-col items-center justify-center p-6 sm:p-8 relative group transition-all duration-300 hover:bg-white/[0.03]
									${index % 3 !== 2 ? 'lg:border-r border-white/25' : ''} 
									${index < 3 ? 'lg:border-b border-white/25' : ''}
									${index % 2 === 0 ? 'md:max-lg:border-r border-white/25' : ''}
									${index < 4 ? 'md:max-lg:border-b border-white/25' : ''}
									${index < 5 ? 'max-md:border-b border-white/25' : ''}`}
								>
									<div className="text-xl sm:text-2xl font-black mb-4 transition-transform duration-500 group-hover:scale-110 tracking-tighter" style={{ color: step.color }}>
										{step.id}
									</div>
									<div className="flex items-center gap-3 w-full justify-center mb-4">
										<div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}40` }}></div>
										<div className="text-white group-hover:scale-110 transition-transform duration-300">
											{React.cloneElement(step.icon as React.ReactElement, { className: 'w-4 h-4', style: { color: step.color } })}
										</div>
										<div className="w-5 sm:w-8 h-[1px]" style={{ backgroundColor: `${step.color}40` }}></div>
									</div>
									<h4 className="text-white font-bold text-sm sm:text-base mb-2 text-center group-hover:text-[#ff0ea3] transition-colors">{step.title}</h4>
									<p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed text-center max-w-[240px]">{step.desc}</p>
									<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
									<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section (Improved Side-by-Side Style) */}
			<section className="relative overflow-hidden bg-white py-8 sm:py-10">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								WHY CHOOSE <span className="text-[#ff0ea3]">Velnix Solutions?</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
							Mastery of cloud dynamics and systemic efficiency for world-class digital operations.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

						{/* Left Side: Workspace Brand Image */}
						<div className={`relative group ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100">
								<img
									src="/image/pages_img/WHY-CHOOSE-US.jpg"
									alt="Why Choose Us"
									className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								{/* Dark overlay with branding */}
								<div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity"></div>
								<div className="absolute bottom-10 left-10 text-white z-20">
									<div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-none border border-white/20">

										<p className="text-xl font-black tracking-tighter">CLOUD NATIVE.</p>
									</div>
								</div>
							</div>

							{/* Background Decorative Element */}
							<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
						</div>

						{/* Right Side: Numbered Vertical List */}
						<div className={`relative ${isVisible ? 'slide-right' : 'opacity-0'}`}>

							<div className="relative z-10 space-y-0">
								{[
									{
										id: "01",
										title: "Comprehensive Architecture Audit",
										desc: "We dive deep into your existing environment to expose infrastructural bottlenecks and wasteful operational silos.",
										bgColor: "bg-[#e23126]",
										textColor: "group-hover:text-[#e23126]"
									},
									{
										id: "02",
										title: "Toolchain Agnosticism",
										desc: "From Jenkins and GitHub actions to Kubernetes and Terraform, we use the best tools for your specific custom cloud environment.",
										bgColor: "bg-[#9068d4]",
										textColor: "group-hover:text-[#9068d4]"
									},
									{
										id: "03",
										title: "High Availability Focus",
										desc: "Creating redundant subnets, automated load balancing, and failover strategies to guarantee 99.99% system uptime.",
										bgColor: "bg-[#3eb37c]",
										textColor: "group-hover:text-[#3eb37c]"
									},
									{
										id: "04",
										title: "Cloud Cost Optimization",
										desc: "We right-size cloud resources and terminate orphaned instances automatically to dramatically lower monthly AWS/GCP bills.",
										bgColor: "bg-[#f59e0b]",
										textColor: "group-hover:text-[#f59e0b]"
									}
								].map((item, index) => (
									<div key={item.id} className={`group flex items-start gap-8 sm:gap-12 py-8 ${index !== 3 ? 'border-b border-dashed border-slate-200' : ''}`}>
										{/* Number Badge with individual background */}
										<div className="flex-shrink-0 w-16 sm:w-20 flex justify-center py-2 relative">
											<div className={`absolute inset-0 ${item.bgColor} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
											<div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${item.bgColor} flex items-center justify-center shadow-lg border border-white/10 z-10 transition-transform group-hover:scale-110 duration-300`}>
												<span className="text-white font-black text-xl sm:text-2xl tracking-tighter opacity-90 group-hover:opacity-100 transition-all duration-300">
													{item.id}
												</span>
											</div>
										</div>

										{/* Text Content */}
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


			<AIOnboardingProcess
				serviceName="devops consulting"
				steps={[
					{
						icon: <Mail className="h-8 w-8" />,
						title: 'Contact Us',
						description: 'Reach out to start your DevOps transformation. Share your current infrastructure challenges so we can prepare a tailored strategy.',
						color: "from-green-500 to-emerald-500"
					},
					{
						icon: <Brain className="h-8 w-8" />,
						title: 'Infrastructure Discovery',
						description: 'Schedule a session with our DevOps engineers. We\'ll audit your codebase, server setup, and CI/CD limitations.',
						color: "from-blue-500 to-indigo-500"
					},
					{
						icon: <Target className="h-8 w-8" />,
						title: 'Strategic Roadmap',
						description: 'Based on the audit, we deliver a comprehensive proposal outlining the toolchain, migration path, and automation scope.',
						color: "from-yellow-500 to-amber-500"
					},
					{
						icon: <Zap className="h-8 w-8" />,
						title: 'Launch & Automation',
						description: 'Once approved, we implement IaC, build automated pipelines, and handover a fully optimized, scalable infrastructure.',
						color: "from-purple-500 to-violet-500"
					},
				]}
			/>

			<LatestBlogs />

			{/* FAQ Section */}
			<section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2]">
								Frequently Asked <span className="text-[#ff0ea3]">Questions</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
							Common questions about our DevOps lifecycle, cloud management, and infrastructure security.
						</p>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-3">
						{faqData.map((faq, index) => (
							<div
								key={index}
								className="border border-gray-200 rounded-md overflow-hidden bg-gray-50 transition-all duration-300 hover:border-[#ff0ea3]/50 hover:shadow-lg group"
								style={openIndex === index ? {
									borderColor: 'rgba(255, 14, 163, 0.5)',
									boxShadow: '0 4px 20px rgba(255, 14, 163, 0.2), 0 0 15px rgba(255, 14, 163, 0.15)'
								} : {}}
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full h-auto p-4 sm:p-5 text-left transition-all duration-300 hover:bg-transparent"
									style={openIndex === index ? {
										background: 'linear-gradient(135deg, rgba(255, 14, 163, 0.15) 0%, rgba(255, 14, 163, 0.1) 50%, rgba(255, 14, 163, 0.05) 100%)'
									} : {}}
								>
									<div className="flex items-center justify-between w-full">
										<h3 className={`text-sm sm:text-base font-bold pr-3 transition-all duration-300 group-hover:text-[#ff0ea3] ${openIndex === index ? 'text-[#ff0ea3]' : 'text-[#050729]'}`}>
											{faq.question}
										</h3>
										{openIndex === index ? (
											<Minus className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: '#ff0ea3' }} />
										) : (
											<Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0 transition-colors duration-300 group-hover:text-[#ff0ea3]" />
										)}
									</div>
								</button>

								{openIndex === index && (
									<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-white">
										<div className="pt-4">{faq.answer}</div>
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
