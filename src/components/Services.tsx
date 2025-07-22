import React from "react";
import { Link } from "react-router-dom";

const aiServices = [
	{
		image: "/image/pages_img/AI-CHATBOT-DEVELOPMENT.jpg",
		title: "AI Chatbot Development",
	},
	{
		image: "/image/pages_img/Predictive-Modelling.jpg",
		title: "Predictive Modelling",
	},
	{
		image: "/image/pages_img/ChatGPT-Integrations.jpeg",
		title: "Chat GPT Integrations",
	},
	{
		image: "/image/pages_img/Natural-Language-Processing.jpg",
		title: "Natural Language Processing",
	},
	{
		image: "/image/pages_img/Machine-Learning.jpg",
		title: "Machine Learning",
	},
	{
		image: "/image/pages_img/Computer-Vision.avif",
		title: "Computer Vision",
	},
];

const Services: React.FC = () => {
	return (
		<section id="services" className="py-24">
			<div className="max-w-7xl mx-auto px-6">
				{/* Header Section */}
				<div className="mb-16 text-center">
					<div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
						My Expertise
					</div>
					<h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
						Services
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
					<p className="text-foreground/80 max-w-2xl mx-auto">
						Delivering intelligent, data-driven AI solutions for your business
						needs.
					</p>
				</div>
				{/* Services Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{aiServices.map((service) => {
						const isChatbot = service.title === "AI Chatbot Development";
						const isNLP = service.title === "Natural Language Processing";
						const isML = service.title === "Machine Learning";
						const isCV = service.title === "Computer Vision";
						const isPredictive = service.title === "Predictive Modelling";
						const isChatGPT = service.title === "Chat GPT Integrations";
						const cardContent = (
							<div
								key={service.title}
								className="glass-effect rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl group flex flex-col items-center justify-center bg-white shadow border border-gray-100 text-center p-0"
								style={{ minHeight: "14rem" }}
							>
								<div className="relative group w-full h-56 flex items-center justify-center">
									<img
										src={service.image}
										alt={service.title}
										className="absolute inset-0 w-full h-full object-cover border border-gray-200 bg-gray-50 z-0"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
									<span className="relative z-20 text-xl font-semibold text-white drop-shadow-xl text-center group-hover:opacity-0 transition-opacity">
										{service.title}
									</span>
									{/* Hover overlay */}
									<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-30">
										<span className="text-white text-lg font-bold drop-shadow">
											{service.title}
										</span>
									</div>
								</div>
							</div>
						);
						if (isChatbot) {
							return (
								<Link
									to="/ai-chatbot-development"
									key={service.title}
									className="w-full h-full block focus:outline-none"
								>
									{cardContent}
								</Link>
							);
						} else if (isNLP) {
							return (
								<Link
									to="/natural-language-processing"
									key={service.title}
									className="w-full h-full block focus:outline-none"
								>
									{cardContent}
								</Link>
							);
						} else if (isML) {
							return (
								<Link
									to="/machine-learning"
									key={service.title}
									className="w-full h-full block focus:outline-none"
								>
									{cardContent}
								</Link>
							);
						} else if (isCV) {
							return (
								<Link
									to="/computer-vision"
									key={service.title}
									className="w-full h-full block focus:outline-none"
								>
									{cardContent}
								</Link>
							);
						} else if (isPredictive) {
							return (
								<Link
									to="/predictive-modelling"
									key={service.title}
									className="w-full h-full block focus:outline-none"
								>
									{cardContent}
								</Link>
							);
						} else if (isChatGPT) {
							return (
								<Link
									to="/chat-gpt-integrations"
									key={service.title}
									className="w-full h-full block focus:outline-none"
								>
									{cardContent}
								</Link>
							);
						} else {
							return cardContent;
						}
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
