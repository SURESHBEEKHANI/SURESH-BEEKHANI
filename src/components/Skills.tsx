import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  image: string;
  category: string;
}

const skillData: Skill[] = [
  // Machine Learning
  { name: 'NumPy', image: '/image/skills_img/numpy.png', category: 'machine-learning' },
  { name: 'Pandas', image: '/image/skills_img/pandas.png', category: 'machine-learning' },
  { name: 'Scikit-learn', image: '/image/skills_img/sikitlearn.png', category: 'machine-learning' },
  { name: 'TensorFlow', image: '/image/skills_img/tensorflow.png', category: 'machine-learning' },
  { name: 'PyTorch', image: '/image/skills_img/pytorch.png', category: 'machine-learning' },
  { name: 'HuggingFace', image: '/image/skills_img/Huggface.png', category: 'machine-learning' },

  // Computer Vision
  { name: 'OpenCV', image: '/image/skills_img/opencv.png', category: 'computer-vision' },
  { name: 'Ultralytics', image: '/image/skills_img/Ultratics.png', category: 'computer-vision' },
  { name: 'YOLO', image: '/image/skills_img/yolov5.png', category: 'computer-vision' },
  { name: 'Detectron2', image: '/image/skills_img/detectron2.png', category: 'computer-vision' },
  { name: 'Roboflow', image: '/image/skills_img/roboflow.png', category: 'computer-vision' },
  { name: 'PaddleOCR', image: '/image/skills_img/paddleocr.png', category: 'computer-vision' },
  { name: 'Tesseract', image: '/image/skills_img/tesseract.png', category: 'computer-vision' },

  // Generative AI
  { name: 'OpenAI', image: '/image/skills_img/openai.jpg', category: 'generative-ai' },
  { name: 'Mistral', image: '/image/skills_img/mistral.png', category: 'generative-ai' },
  { name: 'Gemini', image: '/image/skills_img/Gemini.png', category: 'generative-ai' },
  { name: 'Groq', image: '/image/skills_img/groq.png', category: 'generative-ai' },
  { name: 'Claude', image: '/image/skills_img/Claude.png', category: 'generative-ai' },
  { name: 'LLAMA', image: '/image/skills_img/llama.png', category: 'generative-ai' },
  {name: 'DeepSeek',image: '/image/skills_img/deepseek.png',category:'generative-ai'},
  

  // Agentic AI
  { name: 'LangGraph', image: '/image/skills_img/langgraph.png', category: 'agentic-ai' },
  { name: 'AutoGen', image: '/image/skills_img/autogen.png', category: 'agentic-ai' },
  { name: 'CrewAI', image: '/image/skills_img/crewai.png', category: 'agentic-ai' },
  { name: 'A2A', image: '/image/skills_img/a2a.png', category: 'agentic-ai' },
  { name: 'MCP Protocol', image: '/image/skills_img/mcp.png', category: 'agentic-ai' },
  { name: 'Langchain', image: '/image/skills_img/langchain.png', category: 'agentic-ai' },
  { name: 'Langsimth', image: '/image/skills_img/Langsimth.png', category: 'agentic-ai' },
  { name: 'Pinecone', image: '/image/skills_img/pinecone.png', category: 'agentic-ai' },
  { name: 'Quadrant', image: '/image/skills_img/quadrant.png', category: 'agentic-ai' },

  // NLP
  { name: 'SpaCy', image: '/image/skills_img/spacy.png', category: 'nlp' },
  { name: 'NLTK', image: '/image/skills_img/nltk.png', category: 'nlp' },
  { name: 'TextBlob', image: '/image/skills_img/textblob.jpg', category: 'nlp' },
  { name: 'Gensim', image: '/image/skills_img/gensim.jpg', category: 'nlp' },
  { name: 'Transformers', image: '/image/skills_img/transformers.png', category: 'nlp' },
  { name: 'BERT', image: '/image/skills_img/bert.png', category: 'nlp' },
  
 
  // Data Analysis
  { name: 'Matplotlib', image: '/image/skills_img/matplot.png', category: 'data-analysis' },
  { name: 'Seaborn', image: '/image/skills_img/seaborn.svg', category: 'data-analysis' },
  { name: 'Plotly', image: '/image/skills_img/plotly.jpg', category: 'data-analysis' },
  { name: 'PowerBI', image: '/image/skills_img/Powerbi.png', category: 'data-analysis' },
  { name: 'Tableau', image: '/image/skills_img/tableau.png', category: 'data-analysis' },

  // MLOps
  { name: 'FastAPI', image: '/image/skills_img/fastapi.png', category: 'mlops' },
  { name: 'Docker', image: '/image/skills_img/docker.png', category: 'mlops' },
  { name: 'AWS', image: '/image/skills_img/aws.png', category: 'mlops' },
  { name: 'Git', image: '/image/skills_img/git.png', category: 'mlops' },
  { name: 'GitHub', image: '/image/skills_img/GitHub.jpg', category: 'mlops' },
  { name: 'MLflow', image: '/image/skills_img/mlflow.svg', category: 'mlops' },
  { name: 'DVC', image: '/image/skills_img/dvc.png', category: 'mlops' },
];

const categories = [
  { label: 'Machine Learning', value: 'machine-learning' },
  { label: 'Computer Vision', value: 'computer-vision' },
  { label: 'Generative AI', value: 'generative-ai' },
  { label: 'Agentic AI', value: 'agentic-ai' },
  { label: 'NLP', value: 'nlp' },
  { label: 'Data Analysis', value: 'data-analysis' },
  { label: 'MLOps', value: 'mlops' },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('machine-learning');
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredSkills = skillData.filter(skill => skill.category === activeCategory);
  const duplicatedSkills = [...filteredSkills, ...filteredSkills];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft =
          container.scrollLeft >= container.scrollWidth - container.clientWidth
            ? 0
            : container.scrollLeft + 2;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-3 font-medium text-sm px-5 py-1.5 bg-primary/10 text-primary">
            My Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Specialized in artificial intelligence and machine learning with expertise in various ML frameworks and technologies.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === value
                  ? 'bg-primary text-white'
                  : 'bg-secondary hover:bg-primary/10'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-6 scroll-smooth whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex space-x-6 px-4">
              {duplicatedSkills.map((skill, index) => (
                <Card
                  key={`${skill.name}-${index}`}
                  className={`w-[200px] flex-shrink-0 overflow-hidden border transition-all duration-300 bg-white cursor-pointer ${
                    selectedSkill && selectedSkill.name === skill.name && selectedSkill.category === skill.category
                      ? 'border-primary ring-2 ring-primary shadow-xl'
                      : 'border-gray-100 shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 mb-4 flex items-center justify-center">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-center">{skill.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      {/* Optionally show selected skill info below */}
      {selectedSkill && (
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <img src={selectedSkill.image} alt={selectedSkill.name} className="w-16 h-16 object-contain rounded" />
            <span className="text-lg font-semibold">Selected: {selectedSkill.name}</span>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Skills;
