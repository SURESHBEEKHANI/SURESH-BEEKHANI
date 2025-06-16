import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import App from '@/App';

// Project data
const projects = [
  {
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies.',
    image: '/image/project_img/customer-segmentation.png',
    category: 'machine-learning',
    technologies: ['Python', 'Scikit-Learn', 'TensorFlow', 'Pandas'],
    github: 'https://github.com/SURESHBEEKHANI/Customer-Churn-Prediction-With-ANN.git',
  },
  {
    title: "Movie Recommender System",
    description: "Developed a machine learning-based movie recommendation system that suggests personalized movies based on user preferences and viewing history.",
    image: "/image/project_img/Movie Recommender System.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Movie-Recommender-System.git"
  },
  {
    title: " Spam Detection System",
    description: "Built a machine learning-based spam detection system that accurately classifies emails and messages as spam or legitimate using NLP and deep learning techniques.",
    image: "/image/project_img/Spam-Detection.png",
    category: "machine-learning",
    technologies: ["Scikit-Learn", "TensorFlow", "Pandas", "NLP"],
    github: "https://github.com/SURESHBEEKHANI/spam-detection.git"
  }, 
  {
    title: "Heart Attack Prediction System",
    description: "Developed a machine learning-based system to predict heart attack risks using patient health data, enabling early detection and preventive healthcare measures.",
    image: "/image/project_img/Heart-Attack-Prediction.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Heart-Attack-Prediction.git"
  },
  {
    title: "Loan Eligibility Prediction System",
    description: "Built a machine learning-based system to predict loan eligibility by analyzing applicant financial history, credit score, and income, aiding financial institutions in decision-making.",
    image: "/image/project_img/Loan-Eligibility-Prediction.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Loan-Eligibility-Prediction.git"
  },
  {
    title: "Customer Segmentation",
    description: "Developed an interactive Streamlit application to segment customers using K-Means clustering. Users can upload datasets, select numerical features, and explore customer clusters via Elbow Method, scatter plots, and distribution charts.",
    image: "/image/project_img/customer-segmentation.png",
    category: "machine-learning",
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Matplotlib"],
    github: "https://github.com/SURESHBEEKHANI/Customer-Segmentation.git"
  },
  {
    title: "Gemstone Price Prediction System",
    description: "Developed a machine learning-based system to predict gemstone prices based on attributes such as color, clarity, cut, and carat weight, assisting jewelers and traders in accurate valuation.",
    image: "/image/project_img/Gemstone-Price-Prediction.png",
    category: "predictive-analytics",
    technologies: ["Python", "forecasting", "Scikit-Learn", "Time Series Analysis"],
    github: "https://github.com/SURESHBEEKHANI/gemstone-price-prediction.git"
  },    
  {
    title: "Student Exam Performance Prediction",
    description: "Developed a machine learning-based system to predict student exam performance based on study habits, attendance, and past scores, helping educators provide personalized support.",
    image: "/image/project_img/Student-Exam-Performance-Prediction.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Student-Exam-Performance-Prediction.git"
  }, 
  {
    title: "Climate Forecasting",
    description: "Developed a machine learning-driven system to predict climate patterns, using historical weather data, environmental factors, and time-based trends. This system helps businesses and governments plan for climate-related challenges more effectively.",
    image: "/image/project_img/Climate_Forecasting.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "Time Series Analysis", "Forecasting"],
    github: "https://github.com/SURESHBEEKHANI/Delhi-Climate-Forecasting.git"
  },
  {
    title: "Stock Market Forecasting",
    description: "Created an interactive web application for forecasting stock prices using historical data from Yahoo Finance. Employed ARIMA models to predict key metrics (Open, High, Low, Close), providing users with valuable insights to make informed financial decisions.",
    image: "/image/project_img/Stock-Market-Forecasting.png",
    category: "predictive-analytics",
    technologies: ["Python", "Streamlit", "ARIMA", "Pandas", "yfinance", "Matplotlib"],
    github: "https://github.com/SURESHBEEKHANI/stock-market-forecasting.git",
  },          
  {
    title: "Boston House Price Prediction",
    description: "ML-based system predicting house prices in Boston using real estate data and market trends.",
    image: "/image/project_img/Boston-House-Price-Prediction.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Predicting-Boston-House-Prices.git"
  }, 
  {
    title: "Visa Approval Prediction System",
    description: "Developed a machine learning-based system to predict visa approval probabilities based on applicant data, enhancing decision-making for immigration processes.",
    image: "/image/project_img/Visa-Approval-Prediction.png",
    category: "predictive-analytics",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    github: "https://github.com/SURESHBEEKHANI/Visa-Approval-Prediction.git"
  },
  {
    title: "Sentiment Analysis",
    description:"Developed an NLP pipeline for sentiment analysis and topic modeling using customer feedback data.",
    image:"/image/project_img/Sentiment-Analysis.png",
    category: "NLP",
    technologies: ["BERT", "NLTK", "spaCy", "Transformers"],
    github:"https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning/blob/main/Fine_Tune_BERT_for_Sentiment_Analysis.ipynb",
  },
  {
    title: "Text Summarizer",
    description: "Built an NLP pipeline for automatic text summarization, leveraging transformer models to generate concise summaries while preserving key information.",
    image: "/image/project_img/Text-Summarization.png",
    category: "NLP",
    technologies: ["BERT", "NLTK", "spaCy", "Transformers"],
    github: "https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning/blob/main/FineTuning_Mistral_7B__SFT_Summarize_GGUF.ipynb"
  },
  {
    title: "Speech-to-Text Recognition",
    description: "Developed a deep learning-based speech-to-text recognition system that converts spoken language into written text. The project leverages advanced ASR (Automatic Speech Recognition) models, incorporating data preprocessing, model training, and deployment as a Flask-based web application for real-time transcription.",
    image: "/image/project_img/Speech-to-Text.png",
    category: "NLP",
    technologies: ["Python", "DeepSpeech", "Wav2Vec2", "TensorFlow", "NLTK"],
    github: "https://github.com/SURESHBEEKHANI/Speech-to-Text-Recognition"
  },
  {
    title: "Machine Translation",
    description: "Developed a deep learning-based machine translation system that converts text from one language to another. The project leverages transformer models like MarianMT and T5 for accurate and fluent translations, incorporating data preprocessing, model training, and deployment as a Flask-based web application.",
    image: "/image/project_img/Machine-Translation.png",
    category: "NLP",
    technologies: ["Python", "Transformers", "MarianMT", "T5", "spaCy"],
    github: "https://github.com/SURESHBEEKHANI/Machine-Translation"
  },
  {
    title: "AI Content Creators",
    description: "Developed an AI-powered system that generates high-quality content using advanced NLP models. The project leverages deep learning techniques to create text, automate writing tasks, and enhance content generation efficiency.",
    image: "/image/project_img/AI-Content-Creation.png",
    category: "NLP",
    technologies: ["Python", "GPT", "Transformer Models", "NLTK", "spaCy"],
    github: "https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning/blob/main/Fine_tune_a_Mistral_7b_model_with_DPO.ipynb"
  },  
  {
    title: "Named Entity Recognition (NER)",
    description: "Developed a deep learning-based Named Entity Recognition (NER) system using transformer models and NLP techniques. The project focuses on extracting entities such as names, locations, organizations, and dates from unstructured text data. It includes data preprocessing, model training, and deployment as a Flask-based web application for real-time entity recognition.",
    image: "/image/project_img/NER-Model.png",
    category: "NLP",
    technologies: ["Python", "Transformer Models", "spaCy", "NLTK", "Hugging Face"],
    github: "https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning/blob/main/Finetune_Gemma_NRE.ipynb"
  },
  {
    title: 'PPE Detection System',
    description: 'Developed a high-accuracy, real-time object detection solution using the YOLO architecture, achieving a 95% mAP on specialized datasets.',
    image: '/image/project_img/PPE.png',
    category: 'computer-vision',
    technologies: ['CNN', 'OpenCV', 'YOLO', 'Object Detection'],
    github: 'https://github.com/SURESHBEEKHANI/PPE-Detect',
  },    
  {
    title: "License Plate Extraction",
    description: "Developed an automated system for extracting and recognizing license plates from vehicle images using computer vision and deep learning.",
    image: "/image/project_img/License_Plate_Extraction.png",
    category: "computer-vision",
    technologies: ["OpenCV", "YOLO", "PaddleOCR", "Deep Learning"],
    github: "https://github.com/SURESHBEEKHANI/License-Plate-Extraction-Save-Data-to-SQL-Database"
  },    
  {
    title: 'Lung_Cancer_Detection ',
    description: 'advanced system for detecting lung cancer using medical imaging techniques, aimed at early diagnosis and treatment',
    image: '/image/project_img/Lung_Cancer_Detection.png',
    category: 'computer-vision',
    technologies: ['TensorFlow', 'Yolo', 'OpenCV', 'CNN'],
    github: 'https://github.com/SURESHBEEKHANI/Lung_Cancer_Detection',
  },
  {
    title: "Brain Tumor Segmentation",
    description: "Brain Tumor Segmentation is a deep learning application that leverages YOLO-Seg to detect and segment brain tumors from MRI scans in real-time.",
    image: '/image/project_img/Brain-tumor-seg.JPEG',
    category: "computer-vision",
    technologies: ["Yolo", "OpenCV", "CNN", "Image Processing"],
    github: "https://github.com/SURESHBEEKHANI/Brain_Tumor_Segmentation"
  },
  {
    title: "Mistral-7B DPO Fine-Tuning for Healthcare",
    description: "Fine-tuned the Mistral-7B model using Direct Preference Optimization (DPO) to enhance medical text processing and AI-assisted healthcare insights.",
    image: "/image/project_img/Fine-Tuning.png",
    category: "generative-ai",
    technologies: ["Mistral-7B", "DPO", "LoRA", "Transformers", "PyTorch"],
    github: "https://github.com/SURESHBEEKHANI/Advanced-LLM-Fine-Tuning",
  },    
  {
    title: "Multi-Agent AI Financial Analyst",
    description: "Designed an AI-driven multi-agent system for financial analysis, leveraging advanced machine learning models to assess market trends and generate insights.",
    image: "/image/project_img/Financial-Analyst.png",
    category: "generative-ai",
    technologies: ["langchain" , "langgraph", "LLM", "Python"],
    github: "https://github.com/SURESHBEEKHANI/Financial-Analyst-AI-Multi-Agent-System"
  },    
  {
    title: "Medical Chatbot RAG System",
    description: "Developed a Retrieval-Augmented Generation (RAG)-based medical chatbot that provides accurate and context-aware responses to user queries in the healthcare domain.",
    image: "/image/project_img/Medical-Chatbot.png",
    category: "generative-ai",
    technologies: ["LangChain", "OpenAI API", "Retrieval-Augmented Generation", "Vector DB"],
    github: "https://github.com/SURESHBEEKHANI/Medical-Chatbot-RAG-System.git"
  }, 
  {
    title: "AI-Powered ATS",
    description: "Developed an AI-driven Applicant Tracking System (ATS) to streamline resume screening and candidate evaluation using LLM and natural language processing.",
    image: "/image/project_img/AI-Powered ATS.png",
    category: "generative-ai",
    technologies: ["LLM", "web scraping", "Python", "google-generativeai"],
    github: "https://github.com/SURESHBEEKHANI/Resume-Application-Tracking-System-ATS.git"
  },
  {
    title: "AI Research Agent",
    description: "Developed a multi-agent AI system for autonomous research and financial analysis, utilizing advanced machine learning models to extract insights from market trends and web data.",
    image: "/image/project_img/AI-Research-Agent.png",
    category: "generative-ai",
    technologies: ["Autogen", "LangGraph", "LLM", "Python", "Web Scraping"],
    github: "https://github.com/SURESHBEEKHANI/Financial-Analyst-AI-Multi-Agent-System"
  },
  {
    title: "AI-Powered Cold Email Automation",
    description: "Built an AI-driven cold email automation system leveraging LLMs and Retrieval-Augmented Generation (RAG) to craft personalized, high-conversion email campaigns.",
    image: "/image/project_img/Cold-Email-Automation.png",
    category: "generative-ai",
    technologies: ["LangChain", "OpenAI API", "LLM", "Vector DB"],
    github: "https://github.com/SURESHBEEKHANI/Cold-Email-Automations.git"
  },    
  {
    title: "Superstore Performance Dashboard",
    description: "Developed an interactive dashboard to analyze sales performance across segments, regions, and product categories using historical data from 2016 to 2019. Delivered key insights to drive data-driven decisions.",
    image: "/image/project_img/Superstore-Dashboard.png",
    category: "Data-Analysis",
    technologies: ["PowerBI", "SQL", "Data Analytics", "Business Intelligence"],
    github: "https://github.com/SURESHBEEKHANI/powerbi-projects/tree/main/retail-sales-dashboard"
  },
  {
    title: "Credit Card Financial Dashboard",
    description: "Designed a Power BI dashboard to track credit card revenue, interest earnings, and customer behavior. Leveraged SQL for data transformation and built dynamic visuals to uncover financial patterns across card types, demographics, and transaction methods.",
    image: "/image/project_img/Credit-Card-Dashboard.png",
    category: "Data-Analysis",
    technologies: ["Power BI", "SQL", "Data Modeling", "DAX", "Financial Analytics"],
    github: "https://github.com/SURESHBEEKHANI/powerbi-projects/tree/main/Credit_Card_Financial_Dashboard"
  },  
  {
    title: "WhatsApp Conversations Analysis",
    description: "Streamlit-based web application to analyze WhatsApp chat history with insights into user activity, word usage, emoji trends, and message timelines.",
    image: "/image/project_img/whatsapp-analysis.png",
    category: "Data-Analysis",
    technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/SURESHBEEKHANI/WhatsApp-Conversations-Analysis"
  },
  {
    title: "Exploratory Data Analysis",
    description: "This project aims to understand how heart disease is influenced by various medical and lifestyle factors such as age, sex, cholesterol levels, blood pressure, and heart rate. The primary goal is to predict the presence of heart disease based on these features.",
    image: "/image/project_img/EDA.png",
    category: "Data-Analysis",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    github: "https://shorturl.at/NhsFW"
  },
  {
    title: "Music Store Data Analysis SQL",
    description: "Analyzed an online music store database using SQL to extract insights about sales performance, customer behavior, and artist popularity. Designed complex queries to answer business questions and visualize data-driven outcomes.",
    image: "/image/project_img/Music-Store-Analysis.png",
    category: "Data-Analysis",
    technologies: ["PostgreSQL", "PgAdmin4", "Data Analysis", "SQL"],
    github: "https://github.com/SURESHBEEKHANI/Music-Store-Data-Analysis-Project-using-SQL"
  }
];

// Categories data"PgAdmin4", 
const categories = [
  { label: 'Machine Learning', value: 'machine-learning' },
  { label: 'Computer Vision', value: 'computer-vision' },
  { label: 'Generative AI', value: 'generative-ai' },
  { label: 'Predictive Analytics', value: 'predictive-analytics' },
  { label: 'NLP', value: 'NLP' },
  { label: ' Data Analysis', value: 'Data-Analysis' },
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
