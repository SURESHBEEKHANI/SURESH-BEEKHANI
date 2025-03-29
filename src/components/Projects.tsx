
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
  const [activeFilter, setActiveFilter] = useState('all');
  
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
      title: 'Object Detection System',
      description: 'Implemented a real-time object detection system using YOLO architecture with 95% mAP on custom datasets.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500',
      category: 'computer-vision',
      technologies: ['PyTorch', 'OpenCV', 'YOLO', 'TensorRT'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Facial Recognition System',
      description: 'Developed a secure facial recognition system with liveness detection to prevent spoofing attacks.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500',
      category: 'computer-vision',
      technologies: ['TensorFlow', 'Dlib', 'OpenCV', 'FaceNet'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Brain Tumor Segmentation ',
      description: 'Brain Tumor Segmentation is a deep learning application that leverages YOLO-Seg to detect and segment brain tumors from MRI scans in real-time.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500',
      category: 'computer-vision',
      technologies: ['U-Net', 'PyTorch', 'MONAI', 'NumPy'],
      github: 'https://github.com/SURESHBEEKHANI/Brain_Tumor_Segmentation',
    },
    {
      title: 'Text-to-Image Generator',
      description: 'Built a text-to-image generation system using diffusion models to create high-quality images from text descriptions.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500',
      category: 'generative-ai',
      technologies: ['Stable Diffusion', 'PyTorch', 'CLIP', 'Transformers'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Music Composer',
      description: 'Developed a neural network that generates original music compositions in various styles and genres.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500',
      category: 'generative-ai',
      technologies: ['TensorFlow', 'RNN/LSTM', 'Magenta', 'Music21'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Conversational AI Assistant',
      description: 'Created a domain-specific conversational AI that can answer questions and assist users with technical support.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500',
      category: 'generative-ai',
      technologies: ['LangChain', 'OpenAI API', 'Retrieval Augmented Generation', 'Vector DB'],
      github: '#',
      demo: '#',
    },
  ];
  
  const categories = [
    { label: 'All Projects', value: 'all' },
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
