import React, { useState, useEffect } from "react";

const platforms = [
	{ name: "OpenAI", image: "/image/skills_img/openai.jpg", category: "models" },
	{ name: "Claude", image: "/image/skills_img/Claude.png", category: "models" },
	{ name: "Gemini", image: "/image/skills_img/Gemini.png", category: "models" },
	{ name: "DeepSeek", image: "/image/skills_img/deepseek.png", category: "models" },
	{ name: "Groq", image: "/image/skills_img/groq.png", category: "models" },
	{ name: "Llama", image: "/image/skills_img/llama.png", category: "models" },
	{ name: "Mistral", image: "/image/skills_img/mistral.png", category: "models" },
	{ name: "Hugging Face", image: "/image/skills_img/huggingface.png", category: "models" },
	{ name: "Transformers", image: "/image/skills_img/transformers.png", category: "frameworks" },
	{ name: "LangChain", image: "/image/skills_img/langchain.png", category: "frameworks" },
	{ name: "LangGraph", image: "/image/skills_img/langgraph.png", category: "frameworks" },
	{ name: "LangSmith", image: "/image/skills_img/Langsimth.png", category: "frameworks" },
	{ name: "CrewAI", image: "/image/skills_img/crewai.png", category: "frameworks" },
	{ name: "AutoGen", image: "/image/skills_img/autogen.png", category: "frameworks" },
	{ name: "MCP", image: "/image/skills_img/mcp.png", category: "frameworks" },
	{ name: "TensorFlow", image: "/image/skills_img/tensorflow.png", category: "ml" },
	{ name: "PyTorch", image: "/image/skills_img/pytorch.png", category: "ml" },
	{ name: "Scikit-learn", image: "/image/skills_img/sikitlearn.png", category: "ml" },
	{ name: "MLflow", image: "/image/skills_img/mlflow.svg", category: "ml" },
	{ name: "DVC", image: "/image/skills_img/dvc.png", category: "ml" },
	{ name: "NumPy", image: "/image/skills_img/numpy.png", category: "data" },
	{ name: "Pandas", image: "/image/skills_img/pandas.png", category: "data" },
	{ name: "Matplotlib", image: "/image/skills_img/matplot.png", category: "data" },
	{ name: "Seaborn", image: "/image/skills_img/seaborn.svg", category: "data" },
	{ name: "Plotly", image: "/image/skills_img/plotly.jpg", category: "data" },
	{ name: "Power BI", image: "/image/skills_img/Powerbi.png", category: "data" },
	{ name: "Tableau", image: "/image/skills_img/tableau.png", category: "data" },
	{ name: "OpenCV", image: "/image/skills_img/opencv.png", category: "vision" },
	{ name: "YOLOv5", image: "/image/skills_img/yolov5.png", category: "vision" },
	{ name: "Ultralytics", image: "/image/skills_img/Ultratics.png", category: "vision" },
	{ name: "Detectron2", image: "/image/skills_img/detectron2.png", category: "vision" },
	{ name: "Roboflow", image: "/image/skills_img/roboflow.png", category: "vision" },
	{ name: "PaddleOCR", image: "/image/skills_img/paddleocr.png", category: "vision" },
	{ name: "Tesseract", image: "/image/skills_img/tesseract.png", category: "vision" },
	{ name: "BERT", image: "/image/skills_img/bert.png", category: "nlp" },
	{ name: "NLTK", image: "/image/skills_img/nltk.png", category: "nlp" },
	{ name: "spaCy", image: "/image/skills_img/spacy.png", category: "nlp" },
	{ name: "Gensim", image: "/image/skills_img/gensim.jpg", category: "nlp" },
	{ name: "TextBlob", image: "/image/skills_img/textblob.jpg", category: "nlp" },
	{ name: "Pinecone", image: "/image/skills_img/pinecone.png", category: "infra" },
	{ name: "Qdrant", image: "/image/skills_img/quadrant.png", category: "infra" },
	{ name: "AWS", image: "/image/skills_img/aws.png", category: "infra" },
	{ name: "Docker", image: "/image/skills_img/docker.png", category: "infra" },
	{ name: "Linux", image: "/image/skills_img/liunx.png", category: "infra" },
	{ name: "Git", image: "/image/skills_img/git.png", category: "infra" },
	{ name: "GitHub", image: "/image/skills_img/GitHub.jpg", category: "infra" },
	{ name: "FastAPI", image: "/image/skills_img/fastapi.png", category: "infra" },
];

const AITechnologyStack: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="py-10 sm:py-14 bg-white relative">
			<div className="max-w-7xl mx-auto container-padding">
				<div className={`text-center space-y-2 mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
					<h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
						AI Technology Stack
					</h2>
					<div className="flex justify-center">
						<div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
					</div>
					<p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto px-4">
						Industry-leading AI platforms optimized for business development and intelligent operations.
					</p>
				</div>

				<div className="flex flex-col gap-6 sm:gap-8 overflow-hidden py-4 -mx-4 sm:mx-0 relative">
					{/* Marquee Row 1 (Forward) */}
					<div className="relative w-full overflow-hidden">
						<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDuration: '60s' }}>
							{[...platforms.slice(0, Math.ceil(platforms.length / 2)), ...platforms.slice(0, Math.ceil(platforms.length / 2))].map((platform, index) => (
								<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row1-${platform.name}-${index}`}>
									<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
									<span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Marquee Row 2 (Reverse) */}
					<div className="relative w-full overflow-hidden">
						<div className="flex w-max animate-marquee gap-6 sm:gap-8 items-center" style={{ animationDirection: 'reverse', animationDuration: '70s' }}>
							{[...platforms.slice(Math.ceil(platforms.length / 2)), ...platforms.slice(Math.ceil(platforms.length / 2))].map((platform, index) => (
								<div className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 lg:w-32 group" key={`row2-${platform.name}-${index}`}>
									<img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg sm:rounded-xl shadow-md bg-white p-3 border border-gray-100 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
									<span className="mt-2 sm:mt-3 text-gray-800 font-semibold text-xs sm:text-sm text-center">{platform.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Gradient fades for edge smoothing */}
					<div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
					<div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
				</div>
			</div>
		</section>
	);
};

export default AITechnologyStack;
