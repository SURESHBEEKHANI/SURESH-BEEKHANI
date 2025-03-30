import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
    category: 'machine-learning',
    technologies: ['Python', 'Scikit-Learn', 'TensorFlow', 'Pandas'],
    github: 'https://github.com/SURESHBEEKHANI/customer-churn-prediction.git',
  },
  {
    title: "Movie Recommender System",
    description: "Developed a machine learning-based movie recommendation system that suggests personalized movies based on user preferences and viewing history.",
    image: "image/Movie Recommender System.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Movie-Recommender-System.git"
  },
  {
    title: " Spam Detection System",
    description: "Built a machine learning-based spam detection system that accurately classifies emails and messages as spam or legitimate using NLP and deep learning techniques.",
    image: "image/Spam-Detection.png",
    category: "machine-learning",
    technologies: ["Scikit-Learn", "TensorFlow", "Pandas", "NLP"],
    github: "https://github.com/SURESHBEEKHANI/spam-detection.git"
  }, 
  {
    title: "Heart Attack Prediction System",
    description: "Developed a machine learning-based system to predict heart attack risks using patient health data, enabling early detection and preventive healthcare measures.",
    image: "image/Heart-Attack-Prediction.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Heart-Attack-Prediction.git"
  },
  {
    title: "Visa Approval Prediction System",
    description: "Developed a machine learning-based system to predict visa approval probabilities based on applicant data, enhancing decision-making for immigration processes.",
    image: "image/Visa-Approval-Prediction.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Visa-Approval-Prediction.git"
  },
  {
    title: "Loan Eligibility Prediction System",
    description: "Built a machine learning-based system to predict loan eligibility by analyzing applicant financial history, credit score, and income, aiding financial institutions in decision-making.",
    image: "image/Loan-Eligibility-Prediction.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Loan-Eligibility-Prediction.git"
  },
  {
    title: "Gemstone Price Prediction System",
    description: "Developed a machine learning-based system to predict gemstone prices based on attributes such as color, clarity, cut, and carat weight, assisting jewelers and traders in accurate valuation.",
    image: "image/Gemstone-Price-Prediction.png",
    category: "predictive-analytics",
    technologies: ["Python", "forecasting", "Scikit-Learn", "Time Series Analysis"],
    github: "https://github.com/SURESHBEEKHANI/gemstone-price-prediction.git"
  },    
  {
    title: "Student Exam Performance Prediction",
    description: "Developed a machine learning-based system to predict student exam performance based on study habits, attendance, and past scores, helping educators provide personalized support.",
    image: "image/Student-Exam-Performance-Prediction.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Student-Exam-Performance-Prediction.git"
  }, 
  {
    title: "Energy Consumption Forecasting",
    description: "Developed a machine learning-based system to predict energy consumption patterns using historical data, weather conditions, and time-based trends, helping businesses and households optimize energy usage.",
    image: "image/Energy-Consumption-Forecasting.png",
    category: "predictive-analytics",
    technologies: ["Python", "forecasting", "Scikit-Learn", "Time Series Analysis"],
    github: "https://github.com/SURESHBEEKHANI/energy-consumption-forecasting.git"
  }, 
  {
    title: "Demand Forecasting",
    description: "Developed a machine learning-based system to predict product demand using historical sales data, pricing trends, promotions, and market conditions, helping businesses optimize inventory and supply chain management.",
    image: "image/Demand-Forecasting.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/demand-forecasting.git"
  }, 
  {
    title: "Sales Forecasting System",
    description: "Built a machine learning-based system to predict future sales trends using historical data, enabling businesses to optimize inventory, marketing, and revenue strategies.",
    image: "image/Sales-Forecasting.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "Time Series Analysis", "Forecasting"],
    github: "https://github.com/SURESHBEEKHANI/Sales-Forecasting-System.git"
  },        
  {
    title: "Boston House Price Prediction",
    description: "ML-based system predicting house prices in Boston using real estate data and market trends.",
    image: "image/Boston-House-Price-Prediction.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Predicting-Boston-House-Prices.git"
  }, 
  {
    title: "Sentiment Analysis",
    description:"Developed an NLP pipeline for sentiment analysis and topic modeling using customer feedback data.",
    image:"image/Sentiment-Analysis.png",
    category: "NLP",
    technologies: ["BERT", "NLTK", "spaCy", "Transformers"],
    github:"https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning/blob/main/Fine_Tune_BERT_for_Sentiment_Analysis.ipynb",
  },
  {
    title: "Text Summarizer",
    description: "Built an NLP pipeline for automatic text summarization, leveraging transformer models to generate concise summaries while preserving key information.",
    image: "image/Text-Summarization.png",
    category: "NLP",
    technologies: ["BERT", "NLTK", "spaCy", "Transformers"],
    github: "https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning/blob/main/FineTuning_Mistral_7B__SFT_Summarize_GGUF.ipynb"
  }
  ,
  {
    title: "Hate Speech Detection",
    description: "Developed a deep learning model using LSTM to classify and detect hate speech in text data. The project includes data preprocessing, model training, and deployment as a Flask-based web application for real-time text classification.",
    image: "image/Hate-Speech-Detection.png",
    category: "NLP",
    technologies: ["Python", "LSTM", "TensorFlow", "NLTK", "spaCy"],
    github: "https://github.com/SURESHBEEKHANI/Hate-Speech-Classifier-LSTM"
  }, 
  {
    title: "Hate Speech Detection",
    description: "Developed a deep learning model using LSTM to classify and detect hate speech in text data. The project includes data preprocessing, model training, and deployment as a Flask-based web application for real-time text classification.",
    image: "image/Hate-Speech-Detection.png",
    category: "NLP",
    technologies: ["Python", "LSTM", "TensorFlow", "NLTK", "spaCy"],
    github: "https://github.com/SURESHBEEKHANI/Hate-Speech-Classifier-LSTM"
  },
  {
    title: "Content Creators",
    description: "Developed a deep learning model using LSTM to classify and detect hate speech in text data. The project includes data preprocessing, model training, and deployment as a Flask-based web application for real-time text classification.",
    image: "image/Hate-Speech-Detection.png",
    category: "NLP",
    technologies: ["Python", "LSTM", "TensorFlow", "NLTK", "spaCy"],
    github: "https://github.com/SURESHBEEKHANI/Hate-Speech-Classifier-LSTM"
  },
  {
    title: "Hate Speech Detection",
    description: "Developed a deep learning model using LSTM to classify and detect hate speech in text data. The project includes data preprocessing, model training, and deployment as a Flask-based web application for real-time text classification.",
    image: "image/Hate-Speech-Detection.png",
    category: "NLP",
    technologies: ["Python", "LSTM", "TensorFlow", "NLTK", "spaCy"],
    github: "https://github.com/SURESHBEEKHANI/Hate-Speech-Classifier-LSTM"
  },
  {
    title: 'PPE Detection System',
    description: 'Developed a high-accuracy, real-time object detection solution using the YOLO architecture, achieving a 95% mAP on specialized datasets.',
    image: 'image/PPE.png',
    category: 'computer-vision',
    technologies: ['CNN', 'OpenCV', 'YOLO', 'Object Detection'],
    github: 'https://github.com/SURESHBEEKHANI/PPE-Detect',
  },    
  {
    title: "License Plate Extraction",
    description: "Developed an automated system for extracting and recognizing license plates from vehicle images using computer vision and deep learning.",
    image: "image/License_Plate_Extraction.png",
    category: "computer-vision",
    technologies: ["OpenCV", "YOLO", "PaddleOCR", "Deep Learning"],
    github: "https://github.com/SURESHBEEKHANI/License-Plate-Extraction-Save-Data-to-SQL-Database"
  },    
  {
    title: 'Lung_Cancer_Detection ',
    description: 'advanced system for detecting lung cancer using medical imaging techniques, aimed at early diagnosis and treatment',
    image: 'image/Lung_Cancer_Detection.png',
    category: 'computer-vision',
    technologies: ['TensorFlow', 'Yolo', 'OpenCV', 'CNN'],
    github: 'https://github.com/SURESHBEEKHANI/Lung_Cancer_Detection',
  },
  {
    title: "Brain Tumor Segmentation",
    description: "Brain Tumor Segmentation is a deep learning application that leverages YOLO-Seg to detect and segment brain tumors from MRI scans in real-time.",
    image: 'image/Brain-tumor-seg.JPEG',
    category: "computer-vision",
    technologies: ["Yolo", "OpenCV", "CNN", "Image Processing"],
    github: "https://github.com/SURESHBEEKHANI/Brain_Tumor_Segmentation"
  },
  {
    title: "Mistral-7B DPO Fine-Tuning for Healthcare",
    description: "Fine-tuned the Mistral-7B model using Direct Preference Optimization (DPO) to enhance medical text processing and AI-assisted healthcare insights.",
    image: "image/Fine-Tuning.png",
    category: "generative-ai",
    technologies: ["Mistral-7B", "DPO", "LoRA", "Transformers", "PyTorch"],
    github: "https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning",
  },    
  {
    title: "Multi-Agent AI Financial Analyst",
    description: "Designed an AI-driven multi-agent system for financial analysis, leveraging advanced machine learning models to assess market trends and generate insights.",
    image: "image/Financial-Analyst.png",
    category: "generative-ai",
    technologies: ["langchain" , "langgraph", "LLM", "Python"],
    github: "https://github.com/SURESHBEEKHANI/Financial-Analyst-AI-Multi-Agent-System"
  },    
  {
    title: "Medical Chatbot RAG System",
    description: "Developed a Retrieval-Augmented Generation (RAG)-based medical chatbot that provides accurate and context-aware responses to user queries in the healthcare domain.",
    image: "image/Medical-Chatbot.png",
    category: "generative-ai",
    technologies: ["LangChain", "OpenAI API", "Retrieval-Augmented Generation", "Vector DB"],
    github: "https://github.com/SURESHBEEKHANI/Medical-Chatbot-RAG-System.git"
  }, 
  {
    title: "AI-Powered ATS",
    description: "Developed an AI-driven Applicant Tracking System (ATS) to streamline resume screening and candidate evaluation using LLM and natural language processing.",
    image: "image/AI-Powered ATS.png",
    category: "generative-ai",
    technologies: ["LLM", "web scraping", "Python", "google-generativeai"],
    github: "https://github.com/SURESHBEEKHANI/Resume-Application-Tracking-System-ATS.git"
  },
  {
    title: "AI Research Agent",
    description: "Developed a multi-agent AI system for autonomous research and financial analysis, utilizing advanced machine learning models to extract insights from market trends and web data.",
    image: "image/AI-Research-Agent.png",
    category: "generative-ai",
    technologies: ["Autogen", "LangGraph", "LLM", "Python", "Web Scraping"],
    github: "https://github.com/SURESHBEEKHANI/Financial-Analyst-AI-Multi-Agent-System"
  },
  {
    title: "AI-Powered Cold Email Automation",
    description: "Built an AI-driven cold email automation system leveraging LLMs and Retrieval-Augmented Generation (RAG) to craft personalized, high-conversion email campaigns.",
    image: "image/Cold-Email-Automation.png",
    category: "generative-ai",
    technologies: ["LangChain", "OpenAI API", "LLM", "Vector DB"],
    github: "https://github.com/SURESHBEEKHANI/Cold-Email-Automations.git"
  },    
];

// Categories data
const categories = [
  { label: 'Machine Learning', value: 'machine-learning' },
  { label: 'Computer Vision', value: 'computer-vision' },
  { label: 'Generative AI', value: 'generative-ai' },
  { label: 'Predictive Analytics', value: 'predictive-analytics' },
  { label: 'NLP', value: 'NLP' },
  //{ label: 'Data Visualization', value: 'data-visualization' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('machine-learning');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const renderCategoryButtons = () =>
    categories.map((category) => (
      <button
        key={category.value}
        onClick={() => setActiveFilter(category.value)}
        className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
          activeFilter === category.value
            ? 'bg-primary text-white'
            : 'bg-secondary hover:bg-primary/10'
        }`}
      >
        {category.label}
      </button>
    ));

  const renderProjects = () =>
    filteredProjects.map((project, index) => (
      <div 
        key={index}
        className="glass-effect rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl group"
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
          <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ));

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore my portfolio of data science and machine learning projects, showcasing real-world applications and innovative solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {renderCategoryButtons()}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProjects()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
