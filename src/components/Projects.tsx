import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('machine-learning'); // Default to 'machine-learning'
  
  const projects: Project[] = [
    {
      title: 'Customer Churn Prediction',
      description: 'Developed a machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
      category: 'machine-learning',
      technologies: ['Python', 'Scikit-Learn', 'TensorFlow', 'Pandas'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Predictive Maintenance System',
      description: 'Created a real-time monitoring system using IoT data to predict equipment failures before they occur.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=500',
      category: 'predictive-analytics',
      technologies: ['Python', 'PyTorch', 'AWS', 'Time Series Analysis'],
      github: '#',
    },
    {
      title: 'Natural Language Processing Tool',
      description: 'Built an NLP pipeline for sentiment analysis and topic modeling on customer feedback data.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500',
      category: 'nlp',
      technologies: ['BERT', 'NLTK', 'spaCy', 'Transformers'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Designed an interactive dashboard for visualizing complex business metrics and KPIs in real-time.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
      category: 'data-visualization',
      technologies: ['D3.js', 'React', 'Plotly', 'PostgreSQL'],
      demo: '#',
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
      "title": "License Plate Extraction",
      "description": "Developed an automated system for extracting and recognizing license plates from vehicle images using computer vision and deep learning.",
      "image": "image/License_Plate_Extraction.png",
      "category": "computer-vision",
      "technologies": ["OpenCV", "YOLO", "PaddleOCR", "Deep Learning"],
      "github": "https://github.com/SURESHBEEKHANI/License-Plate-Extraction-Save-Data-to-SQL-Database"
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
    }
    ,
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
    }
    ,
    {
      title: "AI Research Agent",
      description: "Developed a multi-agent AI system for autonomous research and financial analysis, utilizing advanced machine learning models to extract insights from market trends and web data.",
      image: "image/AI-Research-Agent.png",
      category: "generative-ai",
      technologies: ["Autogen", "LangGraph", "LLM", "Python", "Web Scraping"],
      github: "https://github.com/SURESHBEEKHANI/Financial-Analyst-AI-Multi-Agent-System"
    }
    ,
    {
      title: "AI-Powered Cold Email Automation",
      description: "Built an AI-driven cold email automation system leveraging LLMs and Retrieval-Augmented Generation (RAG) to craft personalized, high-conversion email campaigns.",
      image: "image/Cold-Email-Automation.png",
      category: "generative-ai",
      technologies: ["LangChain", "OpenAI API", "LLM", "Vector DB"],
      github: "https://github.com/SURESHBEEKHANI/Cold-Email-Automations.git"
    },    
  ];
  
  const categories = [
    { label: 'Machine Learning', value: 'machine-learning' },
    { label: 'Computer Vision', value: 'computer-vision' },
    { label: 'Generative AI', value: 'generative-ai' },
    { label: 'Predictive Analytics', value: 'predictive-analytics' },
    { label: 'NLP', value: 'nlp' },
    { label: 'Data Visualization', value: 'data-visualization' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
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
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
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
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
