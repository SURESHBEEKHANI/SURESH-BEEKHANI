import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Code, Zap, Target, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, MessageSquare, BarChart3, Eye, Bot, Mail, Phone, MapPin, Clock, Cpu, Network, Workflow, Plus, Minus, Cloud, Terminal, RefreshCw, Box, Activity, GitBranch } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AITechnologyStack from "../components/AITechnologyStack";
import AIOnboardingProcess from "../components/AIOnboardingProcess";
import LatestBlogs from "../components/LatestBlogs";
import { Badge } from "@/components/ui/badge";

const devopsServices = [
	{
		id: 1,
		title: "CI/CD Pipeline Automation",
		description: "Accelerate your release cycles with robust Continuous Integration and Continuous Deployment pipelines that automate testing, building, and deployment.",
		icon: <RefreshCw className="h-7 w-7" />,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 2,
		title: "Cloud Infrastructure Management",
		description: "Design, deploy, and manage scalable cloud architectures on AWS, Azure, or Google Cloud that ensure high availability and optimal resource utilization.",
		icon: <Cloud className="h-7 w-7" />,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 3,
		title: "Infrastructure as Code (IaC)",
		description: "Provision and manage your IT infrastructure automatically through machine-readable definition files using tools like Terraform and AWS CloudFormation.",
		icon: <Terminal className="h-7 w-7" />,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 4,
		title: "Containerization & Orchestration",
		description: "Modernize your applications using Docker and Kubernetes to ensure consistency across environments, isolate dependencies, and rapidly scale microservices.",
		icon: <Box className="h-7 w-7" />,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 5,
		title: "Continuous Monitoring & Alerting",
		description: "Implement proactive monitoring solutions using Prometheus, Grafana, or Datadog to gain deep observability into system health and performance metrics.",
		icon: <Activity className="h-7 w-7" />,
		color: "from-indigo-500 to-purple-500"
	},
	{
		id: 6,
		title: "DevSecOps Integration",
		description: "Embed automated security protocols directly into your software development lifecycle, identifying and resolving vulnerabilities before hitting production.",
		icon: <Shield className="h-7 w-7" />,
		color: "from-teal-500 to-cyan-500"
	},
];

const faqData = [
	{
		question: "What is DevOps and why does my business need it?",
		answer: "DevOps bridges the gap between software development and IT operations. It implements automated practices that streamline software delivery, resulting in faster time-to-market, higher software quality, and rapid recovery from failures.",
	},
	{
		question: "Which cloud platforms do you support?",
		answer: "Our DevOps engineers are highly experienced across all major cloud providers including Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure, as well as hybrid environments.",
	},
	{
		question: "How long does a DevOps transformation take?",
		answer: "A complete cultural and technical transformation takes time, typically spanning several months. However, implementing targeted improvements like a CI/CD pipeline or basic containerization can yield measurable benefits within weeks.",
	},
	{
		question: "Can you help migrate our legacy applications to the cloud?",
		answer: "Yes, we specialize in cloud migrations. We analyze your monolithic systems and architect a phased migration strategy, often refactoring applications into cloud-native microservices along the way.",
	},
	{
		question: "How do you handle security in DevOps?",
		answer: "We practice 'DevSecOps', embedding security checks natively into the CI/CD pipeline. This includes automated vulnerability scanning, secure container registries, IAM best practices, and infrastructure compliance testing.",
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
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
					<div className="text-white space-y-6 sm:space-y-8">
						<h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
							DevOps Engineering
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
							Accelerate delivery, ensure monumental scalability, and eliminate operational bottlenecks <br /> with modern DevOps tools and cloud-native infrastructure automation.
						</p>
					</div>
				</div>
			</section>

			{/* Capabilities Section */}
			<section className="py-8 sm:py-10 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto container-padding">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className={`space-y-6 order-1 lg:order-1 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
							<div className="text-left space-y-3 sm:space-y-4 mb-10">
								<div className="flex flex-col items-start gap-3 sm:gap-4">
									<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
										Unify Development & <span className="text-[#ff0ea3]">Operations</span>
									</h2>
								</div>
								<p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl font-medium leading-relaxed">
									Bridge the gap between code integration and successful software deployment through highly efficient automated workflows.
								</p>
							</div>

							<div className="space-y-4 text-slate-600 text-lg leading-relaxed text-left">
								<p>
									Modern software demands velocity without sacrificing reliability. Our DevOps engineering services transform sluggish IT processes into agile, automated pipelines capable of delivering updates continuously.
								</p>
								<p>
									By adopting Infrastructure as Code (IaC) and containerization, our architects abolish the "it works on my machine" problem—empowering your teams to push code faster, scale effortlessly, and monitor software performance dynamically.
								</p>
							</div>

							<div className="pt-4 sm:pt-6">
								<Link
									to="/contact"
									className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0ea3] rounded-none hover:bg-[#ff0ea3]/90 hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(255,14,163,0.4)]"
								>
									<span className="relative flex items-center gap-2">
										Optimize Your Infrastructure
										<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
									</span>
									<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								</Link>
							</div>
						</div>

						<div className={`relative flex justify-center lg:justify-end order-2 lg:order-2 ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
								<div className="relative overflow-hidden rounded-none shadow-2xl border border-slate-100">
									<img
										src="/image/pages_img/devops-infrastructure.jpg"
										alt="DevOps Infrastructure"
										className="w-full max-w-md h-auto lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-8 sm:py-10 ai-section" style={{ background: '#0a0435' }}>
				<div className="max-w-7xl mx-auto container-padding">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
								Enterprise <span className="text-[#ff0ea3]">DevOps Solutions</span>
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

			{/* Strategic Benefits Infographic Section */}
			<section className="relative overflow-hidden bg-white py-8 sm:py-10">
				<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								The Power of <span className="text-[#ff0ea3]">Continuous Integration</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
							Experience the tactical advantage of streamlined release cycles and rock-solid systems operations.
						</p>
					</div>

					<div className="relative px-4">
						<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
							{[
								{
									title: "Faster Releases",
									desc: "Push new features and vital bug fixes to market significantly faster without breaking changes.",
									icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#00b894",
									textSide: "above"
								},
								{
									title: "Higher Quality",
									desc: "Mandatory automated testing stages catch regressions before code ever reaches production.",
									icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#ff7675",
									textSide: "above"
								},
								{
									title: "Scalable Uptime",
									desc: "Elastic, containerized architectures gracefully handle staggering web traffic spikes reliably.",
									icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#fbc531",
									textSide: "above"
								},
								{
									title: "Security & Recovery",
									desc: "Isolated infrastructure backups permit near-instantaneous disaster recovery when failures happen.",
									icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
									color: "#0984e3",
									textSide: "above"
								}
							].map((item, idx) => (
								<div key={idx} className="flex flex-col items-center">
									<div className={`hidden lg:flex flex-col items-center h-[180px] justify-end mb-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'above' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="text-center max-w-[200px]">
											<h3 className="font-extrabold text-slate-900 text-lg mb-2" style={{ color: item.textSide === 'above' ? item.color : '' }}>{item.title}</h3>
											<p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
										</div>
										<div className="w-[1px] h-10 bg-slate-200 mt-4"></div>
										<div className="w-1.5 h-1.5 rounded-full mt-[-4px]" style={{ backgroundColor: item.color }}></div>
									</div>

									<div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-100 rounded-full"></div>
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-l-transparent border-r-transparent rotate-45"></div>
											<div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[1.5px] border-slate-100/60 rounded-full border-t-transparent border-b-transparent -rotate-12"></div>
										</div>

										<div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl z-20 transition-transform hover:scale-110 duration-500 bg-white" style={{ border: `2px solid ${item.color}20` }}>
											<div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: item.color }}>
												{React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 sm:w-10 sm:h-10' })}
											</div>
											<div className="absolute -inset-2 rounded-full blur-xl opacity-20" style={{ backgroundColor: item.color }}></div>
										</div>
									</div>

									<div className={`hidden lg:flex flex-col items-center h-[180px] mt-10 transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'} ${item.textSide === 'below' ? 'opacity-100' : 'opacity-0 invisible'}`}>
										<div className="w-1.5 h-1.5 rounded-full mb-[-4px]" style={{ backgroundColor: item.color }}></div>
										<div className="w-[1px] h-10 bg-slate-200 mb-4"></div>
										<div className="text-center max-w-[200px]">
											<h3 className="font-extrabold text-slate-900 text-lg mb-2" style={{ color: item.textSide === 'below' ? item.color : '' }}>{item.title}</h3>
											<p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
										</div>
									</div>

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

			{/* Why Choose Us Section */}
			<section className="relative overflow-hidden bg-gray-50 py-8 sm:py-10">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

				<div className="max-w-7xl mx-auto container-padding relative z-10">
					<div className={`text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
								WHY <span className="text-[#ff0ea3]">Velnix Solutions??</span>
							</h2>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
							Mastery of cloud dynamics and systemic efficiency.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className={`relative group ${isVisible ? 'slide-left' : 'opacity-0'}`}>
							<div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100">
								<img
									src="/image/pages_img/WHY-CHOOSE-US.jpg"
									alt="Why Choose Us"
									className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity"></div>
								<div className="absolute bottom-10 left-10 text-white z-20">
									<div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-none border border-white/20">
										<p className="text-xl font-black tracking-tighter">CLOUD NATIVE.</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
						</div>

						<div className={`relative ${isVisible ? 'slide-right' : 'opacity-0'}`}>
							<div className="relative z-10 space-y-0">
								{[
									{
										id: "01",
										title: "Comprehensive Audit",
										desc: "We dive deep into your existing architecture to expose infrastructural bottlenecks and wasteful operational silos.",
										bgColor: "bg-[#e23126]",
										textColor: "group-hover:text-[#e23126]"
									},
									{
										id: "02",
										title: "Toolchain Agnosticism",
										desc: "From Jenkins and GitHub actions to Kubernetes and Terraform, we use the best tools for your custom environment.",
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
										title: "Cost Optimization",
										desc: "We right-size cloud resources and terminate orphaned instances automatically to dramatically lower monthly AWS/GCP bills.",
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

			<AIOnboardingProcess
				serviceName="DevOps integration"
				steps={[
					{
						icon: <Globe className="h-8 w-8" />,
						title: 'Infrastructure Audit',
						description: 'We audit your present codebase, server infrastructure, and CI/CD limitations to prepare an action plan.',
						color: "from-green-500 to-emerald-500"
					},
					{
						icon: <Network className="h-8 w-8" />,
						title: 'Pipeline Architecture',
						description: 'Architecting custom Jenkins, GitLab CI, or GitHub Actions pipelines mapping from commit to deployment.',
						color: "from-blue-500 to-indigo-500"
					},
					{
						icon: <Code className="h-8 w-8" />,
						title: 'Implementation & IaC',
						description: 'Writing Terraform/CloudFormation code to dynamically spawn staging environments safely and efficiently.',
						color: "from-yellow-500 to-amber-500"
					},
					{
						icon: <Activity className="h-8 w-8" />,
						title: 'Monitoring Handover',
						description: 'Implementing New Relic, Datadog, or Grafana alerts so you have total insight running into production scale.',
						color: "from-purple-500 to-violet-500"
					},
				]}
			/>

			<LatestBlogs />

			{/* FAQ Section */}
			<section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white relative">
				<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2]">
								Frequently Asked <span className="text-[#ff0ea3]">Questions</span>
							</h2>
						</div>
					</div>
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
