import React from "react";
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

const PredictiveModelling: React.FC = () => {
	// const [currentTab, setCurrentTab] = useState(0); // Removed unused state

	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />

			{/* Section 1: Predictive Modelling (Hero Section) */}
			<section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
				{/* Background image overlay */}
				<div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Predictive-Modelling.jpg')] bg-cover bg-center"></div>
				{/* Content Wrapper */}
				<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
					{/* Text Column */}
					<div className="flex-1 text-white space-y-8 w-full">
						<div className="w-full">
							<h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
								Predictive{' '}
								<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
									Modeling
								</span>
							</h1>
							<p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
								The power of data-driven foresight. Our predictive analytics solutions empower organizations to anticipate trends, optimize operations, and drive strategic growth across industries
							</p>
							<div className="flex space-x-4 pt-6 w-full">
								<a
									href="mailto:sureshbeekhani26@gmail.com"
									className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
								>
									Talk to an Expert
								</a>
							</div>
						</div>
					</div>
					{/* Image Column */}
					<div className="relative flex-1 flex justify-center lg:justify-end">
						
					</div>
				</div>
			</section>

			{/* Section 2: Get Accurate Insights with Our Predictive Analytics Services */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 flex justify-center mb-8 md:mb-0">
						<img
							src="/image/pages_img/Predictive-Analytics-Services.jpg"
							alt="Get Accurate Insights"
							className="w-full max-w-xl h-[420px] rounded-2xl shadow-2xl object-cover border-4 border-blue-100"
						/>
					</div>
					<div className="flex-1">
						<h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6">
							Unlock Actionable Insights with Predictive Analytics
						</h2>
						<div className="text-blue-900 text-base space-y-4">
							<p>
								Transform your data into a strategic asset. Our advanced predictive analytics solutions reveal hidden opportunities, enabling you to make proactive, confident decisions.
							</p>
							<p>
								Custom-built models streamline your workflows, minimize risk, and maximize ROI—giving your business a decisive edge.
							</p>
							<p>
								Experience seamless integration, expert guidance, and measurable results that fuel sustainable growth.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: Key Features of Our Predictive Analytics Services */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<h3 className="text-2xl font-bold text-center text-blue-100 mb-4">
							Key Features
						</h3>
						<p className="text-center text-blue-100 text-base max-w-3xl mx-auto mb-8">
							Advanced analytics that deliver clarity and competitive advantage.
						</p>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* Robustness */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
									<svg
										className="w-7 h-7 text-blue-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<rect x="4" y="4" width="16" height="16" rx="4" />
										<path
											d="M8 12h8"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h4 className="font-semibold text-base text-blue-800 mb-2">
									Robust Performance
								</h4>
								<p className="text-blue-900 text-sm">
									Our solutions are engineered for reliability—adapting to diverse data sources, scaling effortlessly, and delivering consistent results in any environment.
								</p>
							</div>
							{/* Flexibility */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
									<svg
										className="w-7 h-7 text-green-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 8v4l3 3" />
										<circle cx="12" cy="12" r="10" />
									</svg>
								</div>
								<h4 className="font-semibold text-base text-blue-800 mb-2">
									Flexible Customization
								</h4>
								<p className="text-blue-900 text-sm">
									We tailor predictive models to your unique needs, allowing you to refine and adapt solutions as your business evolves.
								</p>
							</div>
							{/* Transfer Learning */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
									<svg
										className="w-7 h-7 text-yellow-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 4v16m0 0H3m9 0h9" />
									</svg>
								</div>
								<h4 className="font-semibold text-base text-blue-800 mb-2">
									Accelerated Model Development
								</h4>
								<p className="text-blue-900 text-sm">
									Leverage pre-trained models and transfer learning to accelerate deployment and unlock value faster—no need to start from scratch.
								</p>
							</div>
							{/* Interpretable Models */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
									<svg
										className="w-7 h-7 text-purple-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path d="M8 15h8M8 11h8M8 7h8" />
									</svg>
								</div>
								<h4 className="font-semibold text-base text-blue-800 mb-2">
									Transparent Insights
								</h4>
								<p className="text-blue-900 text-sm">
									Gain full visibility into how predictions are made. Our interpretable models build trust and empower you to act with confidence.
								</p>
							</div>
							{/* Automated Feature Selection */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full">
									<svg
										className="w-7 h-7 text-pink-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
										<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
									</svg>
								</div>
								<h4 className="font-semibold text-base text-blue-800 mb-2">
									Automated Feature Discovery
								</h4>
								<p className="text-blue-900 text-sm">
									Quickly identify the most impactful data features—saving time, reducing complexity, and strengthening your predictive outcomes.
								</p>
							</div>
							{/* Real-time Scoring */}
							<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center">
								<div className="mb-3 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
									<svg
										className="w-7 h-7 text-cyan-500"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<rect x="3" y="11" width="18" height="7" rx="2" />
										<path d="M7 11V7a5 5 0 0110 0v4" />
									</svg>
								</div>
								<h4 className="font-semibold text-base text-blue-800 mb-2">
									Real-Time Decisioning
								</h4>
								<p className="text-blue-900 text-sm">
									Score new data instantly as it arrives, enabling you to make timely, informed decisions that keep you ahead of the curve.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: Improve Business Decision-Making with Predictive Modeling Services */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
							Predictive Modeling Solutions
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Regression Analysis Card */}
						<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center text-center">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2v20m10-10H2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-blue-800 mb-2">
								Regression Analysis
							</h4>
							<p className="text-blue-900 text-sm">
								Unlock precise forecasting and trend analysis with robust regression tools tailored to your business objectives.
							</p>
						</div>
						{/* Time Series Forecasting Card */}
						<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center text-center">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
								<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-blue-800 mb-2">
								Time Series Forecasting
							</h4>
							<p className="text-blue-900 text-sm">
								Anticipate future trends and seasonality by analyzing time-stamped data for accurate, forward-looking insights.
							</p>
						</div>
						{/* Classification Analysis Card */}
						<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center text-center">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 4v16m0 0H3m9 0h9" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-blue-800 mb-2">
								Classification Analysis
							</h4>
							<p className="text-blue-900 text-sm">
								Empower your business to categorize and interpret complex data, driving smarter segmentation and decision-making.
							</p>
						</div>
						{/* Anomaly Detection Card */}
						<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center text-center">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
								<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-base text-blue-800 mb-2">
								Anomaly Detection
							</h4>
							<p className="text-blue-900 text-sm">
								Proactively identify outliers and unusual patterns to mitigate risk and ensure operational integrity.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries We Work With (Updated to match AI-Development style) */}
			<section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900 relative">
				<div className="absolute inset-0 pointer-events-none">
					<div className="w-full h-full bg-gradient-to-tr from-cyan-400/10 via-blue-700/10 to-green-400/10 opacity-80"></div>
				</div>
				<div className="relative z-10 max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-20">
						<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
							Industries We Serve
						</h2>
						<p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium">
							Empowering organizations with data-driven decisions and AI.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-2xl shadow-2xl">
						{industries.map((industry) => (
							<div
								key={industry.name}
								className="group relative border-b border-r border-white/30 min-h-[180px] flex items-center justify-center cursor-pointer overflow-hidden"
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
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-4">
							Our Predictive Modeling Process
						</h2>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Data Preprocessing */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2v20m10-10H2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-blue-900 mb-2">Data Preparation</h3>
							<p className="text-gray-700 text-sm">We collect, cleanse, and transform raw data into a format ready for insightful analysis.</p>
						</div>
						{/* Model Selection */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
								<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-blue-900 mb-2">Model Selection</h3>
							<p className="text-gray-700 text-sm">We identify the optimal predictive model based on your data and business goals.</p>
						</div>
						{/* Model Training */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-blue-900 mb-2">Model Training</h3>
							<p className="text-gray-700 text-sm">We train and validate your model using best-in-class techniques to ensure accuracy and reliability.</p>
						</div>
						{/* Model Deployment */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
								<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-blue-900 mb-2">Model Deployment</h3>
							<p className="text-gray-700 text-sm">We seamlessly integrate your predictive model into your business systems for real-world impact.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Predictive Modelling Platforms (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900 relative">
				<div className="absolute inset-0 pointer-events-none">
					<div className="w-full h-full bg-gradient-to-tr from-cyan-400/10 via-blue-700/10 to-green-400/10 opacity-80"></div>
				</div>
				<div className="relative z-10 max-w-4xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<div className="flex justify-center">
							<div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
						</div>
						<h2 className="text-xl lg:text-2xl font-bold text-white">Leading Predictive Modeling Platforms</h2>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/sikitlearn.png" alt="Scikit-learn" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">Scikit-learn</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/tensorflow.png" alt="TensorFlow" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">TensorFlow</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/pytorch.png" alt="PyTorch" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">PyTorch</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/seaborn.svg" alt="Seaborn" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">Seaborn</span>
						</div>
						<div className="flex flex-col items-center">
							<img src="/image/skills_img/pandas.png" alt="Pandas" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2" />
							<span className="mt-3 text-white font-semibold">Pandas</span>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us for Predictive Modelling? (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900 relative">
				<div className="absolute inset-0 pointer-events-none">
					<div className="w-full h-full bg-gradient-to-tr from-cyan-400/10 via-blue-700/10 to-green-400/10 opacity-80"></div>
				</div>
				<div className="relative z-10 max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
						<p className="text-base text-white/80 max-w-2xl mx-auto">Trusted by leading organizations for predictive modeling solutions.</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Expertise */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-blue-900 mb-2">Proven Expertise</h3>
							<p className="text-gray-700 text-sm">Our team combines deep industry knowledge with advanced analytics experience to deliver results you can trust.</p>
						</div>
						{/* Custom Solutions */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
								<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-blue-900 mb-2">Tailored Solutions</h3>
							<p className="text-gray-700 text-sm">Every solution is custom-built to align with your business objectives and deliver maximum value.</p>
						</div>
						{/* Advanced Technology */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-blue-900 mb-2">Cutting-Edge Technology</h3>
							<p className="text-gray-700 text-sm">We utilize the latest tools and algorithms to ensure your predictive models are accurate, scalable, and future-ready.</p>
						</div>
						{/* Proven Results */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
								<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-blue-900 mb-2">Demonstrated Results</h3>
							<p className="text-gray-700 text-sm">Our solutions consistently drive efficiency, smarter decisions, and business growth for our clients.</p>
						</div>
						{/* End-to-End Support */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
								<svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-blue-900 mb-2">Comprehensive Support</h3>
							<p className="text-gray-700 text-sm">From initial consultation to deployment and beyond, we provide end-to-end support for your success.</p>
						</div>
						{/* Data Security */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full">
								<svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
									<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
								</svg>
							</div>
							<h3 className="font-semibold text-base text-blue-900 mb-2">Data Security First</h3>
							<p className="text-gray-700 text-sm">We safeguard your data with industry-leading security practices and strict compliance standards.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Frequently Asked Questions (FAQ) Section) */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-4">
						{/* FAQ 1 */}
						<details className="bg-white rounded-2xl shadow-lg p-4 group">
							<summary className="cursor-pointer font-semibold text-base text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What is predictive modeling and forecasting?
								<span className="ml-2 text-blue-900 group-hover:text-green-700 group-open:hidden">+</span>
								<span className="ml-2 text-blue-900 group-hover:text-green-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-3 text-gray-800 text-sm">Predictive modeling and forecasting use historical data and advanced analytics to anticipate future outcomes. These methods empower organizations to stay ahead of trends, make informed decisions, and achieve better business results.</div>
						</details>
						{/* FAQ 2 */}
						<details className="bg-white rounded-2xl shadow-lg p-4 group">
							<summary className="cursor-pointer font-semibold text-base text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								Why is predictive analytics important?
								<span className="ml-2 text-blue-900 group-hover:text-green-700 group-open:hidden">+</span>
								<span className="ml-2 text-blue-900 group-hover:text-green-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-3 text-gray-800 text-sm">Predictive analytics enables organizations to make smarter, data-driven decisions, anticipate opportunities and risks, optimize resources, and gain a sustainable competitive advantage.</div>
						</details>
						{/* FAQ 3 */}
						<details className="bg-white rounded-2xl shadow-lg p-4 group">
							<summary className="cursor-pointer font-semibold text-base text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What is the difference between machine learning and predictive analytics?
								<span className="ml-2 text-blue-900 group-hover:text-green-700 group-open:hidden">+</span>
								<span className="ml-2 text-blue-900 group-hover:text-green-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-3 text-gray-800 text-sm">Machine learning is a core component of predictive analytics. While predictive analytics leverages statistical methods and historical data to forecast outcomes, machine learning uses algorithms that continuously learn and improve from data, delivering even greater predictive accuracy.</div>
						</details>
						{/* FAQ 4 */}
						<details className="bg-white rounded-2xl shadow-lg p-4 group">
							<summary className="cursor-pointer font-semibold text-base text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								Will a predictive analytics tool bring value to my company?
								<span className="ml-2 text-blue-900 group-hover:text-green-700 group-open:hidden">+</span>
								<span className="ml-2 text-blue-900 group-hover:text-green-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-3 text-gray-800 text-sm">Absolutely. Predictive analytics uncovers actionable insights, reveals trends, improves decision-making, streamlines operations, reduces risk, and enhances customer satisfaction—delivering measurable business value.</div>
						</details>
						{/* FAQ 5 */}
						<details className="bg-white rounded-2xl shadow-lg p-4 group">
							<summary className="cursor-pointer font-semibold text-base text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What are predictive modeling techniques?
								<span className="ml-2 text-blue-900 group-hover:text-green-700 group-open:hidden">+</span>
								<span className="ml-2 text-blue-900 group-hover:text-green-700 hidden group-open:inline">-</span>
							</summary>
							<div className="pt-3 text-gray-800 text-sm">Key predictive modeling techniques include linear and logistic regression, decision trees, random forests, support vector machines, neural networks, time series analysis, and ensemble methods. Each technique is chosen to best address your unique business challenges and data landscape.</div>
						</details>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default PredictiveModelling;
