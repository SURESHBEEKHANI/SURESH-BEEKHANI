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

			{/* Section 1: Predictive Modelling */}
			<section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800/90 via-green-700/90 to-blue-900/90">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bfae' fill-opacity='0.08'%3E%3Crect x='25' y='25' width='10' height='10' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						}}
					></div>
				</div>
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="text-white space-y-8">
							<h1 className="text-4xl md:text-5xl font-bold font-display">
								Predictive Modelling
							</h1>
							<p className="text-lg text-white/80 max-w-2xl">
								Based on previous data, our predictive analytics services are
								helping in predicting future patterns and results. It is applied
								across several sectors to help decision-makers and strategists make
								the best choices.
							</p>
							<div>
								<a
									href="mailto:sureshbeekhani26@gmail.com"
									className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition mt-4"
								>
									Talk to our Engineer
								</a>
							</div>
						</div>
						<div className="relative flex justify-center lg:justify-end">
							<img
								src="/image/pages_img/Predictive-Modelling.jpg"
								alt="Predictive Modelling Hero"
								className="w-full max-w-md rounded-2xl shadow-lg object-cover border-4 border-white/20"
							/>
						</div>
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
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">
							Get Accurate Insights with Our Predictive Analytics Services
						</h2>
						<div className="text-blue-900 text-lg space-y-4">
							<p>
								Unlock the full potential of your data with our end-to-end predictive
								analytics solutions. We deliver actionable insights through advanced
								machine learning models and sophisticated algorithms, empowering your
								organization to anticipate trends and make data-driven decisions with
								confidence.
							</p>
							<p>
								Our experts partner closely with you to understand your unique business
								challenges and objectives. We design and implement tailored predictive
								models that streamline operations, reduce risk, and maximize resource
								allocation—helping you stay ahead in a rapidly evolving marketplace.
							</p>
							<p>
								Experience seamless integration and intuitive analytics platforms that
								transform complex data into clear, strategic guidance. With our
								predictive analytics services, you gain a decisive edge—enabling smarter
								decisions, improved performance, and sustainable growth in today’s
								competitive landscape.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: Key Features of Our Predictive Analytics Services */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<h3 className="text-3xl font-bold text-center text-blue-100 mb-4">
							Key Features of Our Predictive Analytics Services
						</h3>
						<p className="text-center text-blue-100 text-lg max-w-3xl mx-auto mb-8">
							Discover the capabilities that set our predictive analytics solutions apart, delivering actionable insights for business growth.
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
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Robustness
								</h4>
								<p className="text-blue-900">
									Robustness is a key feature of our predictive analytics services. We
									can handle diverse data types, adapt to different environments, and
									effortlessly scale to handle large datasets.
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
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Flexibility
								</h4>
								<p className="text-blue-900">
									We offer customized predictive analytics solutions. It allows users to
									define their models and adjust them as necessary.
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
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Transfer Learning
								</h4>
								<p className="text-blue-900">
									Leveraging pre-trained models and transferring knowledge from one domain
									to another allows for faster and more efficient model development.
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
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Interpretable Models
								</h4>
								<p className="text-blue-900">
									The capacity to describe how a model generates its predictions enables
									users to comprehend the elements that go into a forecast and develop
									faith in the model's results.
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
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Automated Feature Selection
								</h4>
								<p className="text-blue-900">
									This is the potential to determine a dataset's essential features
									swiftly. It saves time and effort while facilitating the development of
									robust models.
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
								<h4 className="font-semibold text-lg text-blue-800 mb-2">
									Real-time Scoring
								</h4>
								<p className="text-blue-900">
									The capability to swiftly score new data as it becomes available,
									enabling in-the-moment judgments based on the most recent data.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: Improve Business Decision-Making with Predictive Modeling Services */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
							Improve Business Decision-Making with Predictive Modeling Services
						</h2>
						<p className="text-lg text-blue-800/80 max-w-2xl mx-auto">
							Explore our advanced analytics modules designed to empower your business with actionable insights and smarter strategies.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Regression Analysis Card */}
						<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center text-center">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2v20m10-10H2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-lg text-blue-800 mb-2">
								Regression Analysis
							</h4>
							<p className="text-blue-900 text-base">
								With the use of powerful predictive analytics tools, we offer regression
								analysis.
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
							<h4 className="font-semibold text-lg text-blue-800 mb-2">
								Time Series Forecasting
							</h4>
							<p className="text-blue-900 text-base">
								Time series forecasting involves examining time-stamped data to forecast
								future patterns.
							</p>
						</div>
						{/* Classification Analysis Card */}
						<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center text-center">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 4v16m0 0H3m9 0h9" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-lg text-blue-800 mb-2">
								Classification Analysis
							</h4>
							<p className="text-blue-900 text-base">
								Industries such as health tech can use classification analysis to make
								sense of their data.
							</p>
						</div>
						{/* Anomaly Detection Card */}
						<div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full items-center text-center">
							<div className="mb-3 w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
								<svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h4 className="font-semibold text-lg text-blue-800 mb-2">
								Anomaly Detection
							</h4>
							<p className="text-blue-900 text-base">
								Advanced Anomaly Detection helps identify and flag unexpected or unusual
								data points.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries We Work With */}
			<section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900 relative">
				<div className="absolute inset-0 pointer-events-none">
					<div className="w-full h-full bg-gradient-to-tr from-cyan-400/10 via-blue-700/10 to-green-400/10 opacity-80"></div>
				</div>
				<div className="relative z-10 max-w-7xl mx-auto">
					<div className="text-center space-y-6 mb-20">
						<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
							Industries Leveraging Predictive Modelling
						</h2>
						<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
							Empowering organizations across diverse sectors to make smarter, data-driven decisions with advanced analytics and AI.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/30 overflow-hidden rounded-2xl shadow-2xl">
						{industries.map((industry) => (
							<a
								key={industry.name}
								href={industry.page}
								className="group relative flex items-center justify-center border-b border-r border-white/30 bg-cover bg-center transition min-h-[220px] hover:scale-[1.03] hover:z-20 focus:z-20 focus:outline-none"
								style={{ backgroundImage: `url(${industry.image})` }}
							>
								<div className="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-br group-hover:from-green-500/60 group-hover:via-cyan-500/60 group-hover:to-blue-700/60 backdrop-blur-sm transition-colors duration-300"></div>
								<div className="relative z-10 text-center px-4 py-6">
									<h3 className="text-2xl font-bold mb-2 drop-shadow transition-colors duration-300 text-white group-hover:text-yellow-200">
										{industry.name}
									</h3>
									<p className="text-white/90 text-base font-medium drop-shadow transition-colors duration-300 group-hover:text-yellow-100">
										{industry.description}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Predictive Modelling Development Process (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
							Predictive Modelling Development Process
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
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Data Preprocessing</h3>
							<p className="text-gray-700">Collecting, purifying, and converting unprocessed data into an analysis-ready format.</p>
						</div>
						{/* Model Selection */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
								<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Model Selection</h3>
							<p className="text-gray-700">Selecting the appropriate predictive model based on the type of data and the business problem.</p>
						</div>
						{/* Model Training */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Model Training</h3>
							<p className="text-gray-700">Using preprocessed data to train the chosen model, often splitting the data into training and testing sets to assess performance and accuracy.</p>
						</div>
						{/* Model Deployment */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
								<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-blue-900 mb-2">Model Deployment</h3>
							<p className="text-gray-700">Deploying the trained model in the real world by integrating it into a larger system, such as a web application or business process.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Predictive Modelling Platforms (New Section) */}
			<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-green-900 to-cyan-900">
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-6 mb-16">
						<div className="flex justify-center">
							<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
						</div>
						<h2 className="text-2xl lg:text-3xl font-bold text-white">Predictive Modelling Platforms</h2>
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
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Why Choose Us for Predictive Modelling?</h2>
						<p className="text-lg text-blue-800/80 max-w-2xl mx-auto">Discover what sets our predictive modelling services apart and why organizations trust us to deliver actionable insights and measurable results.</p>
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
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Expertise</h3>
							<p className="text-gray-700">Our team brings years of experience in predictive analytics, machine learning, and data science across diverse industries.</p>
						</div>
						{/* Custom Solutions */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
								<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="4" y="4" width="16" height="16" rx="4" />
									<path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Custom Solutions</h3>
							<p className="text-gray-700">We tailor every predictive modelling solution to your unique business needs and objectives for maximum impact.</p>
						</div>
						{/* Advanced Technology */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
								<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3" />
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Advanced Technology</h3>
							<p className="text-gray-700">We leverage the latest tools and algorithms to deliver accurate, scalable, and future-ready predictive models.</p>
						</div>
						{/* Proven Results */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
								<svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="3" y="11" width="18" height="7" rx="2" />
									<path d="M7 11V7a5 5 0 0110 0v4" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Proven Results</h3>
							<p className="text-gray-700">Our solutions drive measurable improvements in efficiency, decision-making, and business growth for our clients.</p>
						</div>
						{/* End-to-End Support */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
								<svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M8 15h8M8 11h8M8 7h8" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">End-to-End Support</h3>
							<p className="text-gray-700">From consultation to deployment and beyond, we provide comprehensive support at every stage of your project.</p>
						</div>
						{/* Data Security */}
						<div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
							<div className="mb-4 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full">
								<svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
									<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">Data Security</h3>
							<p className="text-gray-700">We prioritize the confidentiality and security of your data, adhering to industry best practices and compliance standards.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Frequently Asked Questions (FAQ) Section) */}
			<section className="py-20 px-6 lg:px-8 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
					</div>
					{/* FAQ Accordion */}
					<div className="space-y-6">
						{/* FAQ 1 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What is predictive modelling and forecasting?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">Predictive modelling and forecasting use historical data and statistical techniques to predict future events or outcomes. These approaches help organizations anticipate trends, make informed decisions, and optimize strategies for better results.</div>
						</details>
						{/* FAQ 2 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								Why is predictive analytics important?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">Predictive analytics empowers organizations to make data-driven decisions, anticipate future events, identify patterns, mitigate risks, optimize resources, and gain a competitive edge across industries.</div>
						</details>
						{/* FAQ 3 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What is the difference between machine learning and predictive analytics?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">Machine learning is a subset of predictive analytics. Predictive analytics uses statistical methods and historical data to make predictions, while machine learning uses algorithms that automatically learn from data to make predictions without explicit programming.</div>
						</details>
						{/* FAQ 4 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								Will a predictive analytics tool bring value to my company?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">Yes, predictive analytics tools can add significant value by uncovering hidden patterns, identifying trends, improving decision-making, optimizing processes, reducing risks, and enhancing customer satisfaction through actionable, data-driven insights.</div>
						</details>
						{/* FAQ 5 */}
						<details className="bg-white rounded-3xl shadow-lg p-6 group">
							<summary className="cursor-pointer font-semibold text-xl text-blue-900 flex items-center justify-between group-hover:text-green-700 transition-colors duration-200">
								What are predictive modelling techniques?
								<span className="ml-2 text-blue-900 group-hover:text-green-700">▼</span>
							</summary>
							<div className="pt-4 text-gray-800 text-lg">Predictive modelling techniques include linear regression, logistic regression, decision trees, random forests, support vector machines, neural networks, time series analysis, and ensemble methods. These methods help predict outcomes and support informed decision-making based on historical data.</div>
						</details>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default PredictiveModelling;
