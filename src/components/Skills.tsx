
import React, { useEffect, useRef } from 'react';
import { Database, Laptop, Network, Terminal, Brain, Eye, MessageSquare, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: {
    name: string;
    level: number;
  }[];
}

const Skills = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const width = target.getAttribute('data-width');
            
            if (width) {
              setTimeout(() => {
                target.style.width = `${width}%`;
              }, 100);
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const skills: Skill[] = [
    {
      category: 'Deep Learning',
      icon: <Brain className="h-6 w-6 text-primary" />,
      items: [
        { name: 'Neural Networks', level: 92 },
        { name: 'CNN', level: 88 },
        { name: 'RNN/LSTM', level: 85 },
        { name: 'GANs', level: 82 },
        { name: 'Transfer Learning', level: 90 },
      ],
    },
    {
      category: 'Machine Learning',
      icon: <Code className="h-6 w-6 text-primary" />,
      items: [
        { name: 'Scikit-Learn', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'NumPy', level: 85 },
        { name: 'pandas', level: 75 },
      ],
    },
    {
      category: 'NLP',
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      items: [
        { name: 'BERT', level: 88 },
        { name: 'Transformers', level: 85 },
        { name: 'Spacy', level: 90 },
        { name: 'NLTK', level: 92 },
        { name: 'Text Classification', level: 88 },
        { name: 'Sentiment Analysis', level: 85 },
      ],
    },
    {
      category: 'Generative AI',
      icon: <Brain className="h-6 w-6 text-primary" />,
      items: [
        { name: 'LLMs', level: 90 },
        { name: 'Stable Diffusion', level: 85 },
        { name: 'Hugging Face', level: 85 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'LangChain', level: 80 },
        { name: 'Vector Database', level: 70 },
      ],
    },
    {
      category: 'Computer Vision',
      icon: <Eye className="h-6 w-6 text-primary" />,
      items: [
        { name: 'OpenCV', level: 88 },
        { name: 'YOLO', level: 85 },
        { name: 'Image Segmentation', level: 82 },
        { name: 'CNN Architectures', level: 90 },
        { name: 'Object Detection', level: 87 },
        { name: 'Image Classification', level: 92 },
      ],
    },
    {
      category: 'Visualization',
      icon: <Terminal className="h-6 w-6 text-primary" />,
      items: [
        { name: 'Tableau', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'Matplotlib', level: 90 },
        { name: 'Plotly', level: 75 },
        { name: 'SeaBorn', level: 75 },
        { name: 'D3.js', level: 75 },
      ],
    },
  ];
  
  let currentProgressIndex = 0;
  
  return (
    <section id="skills" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-3 font-medium text-sm px-4 py-1">My Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <Card key={groupIndex} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-6 gap-3">
                  {skillGroup.icon}
                  <h3 className="text-xl font-display font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-5">
                  {skillGroup.items.map((skill, skillIndex) => {
                    const progressId = currentProgressIndex++;
                    
                    return (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm font-medium text-primary">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-white/90 to-secondary/60 backdrop-blur-sm shadow-lg">
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              'AWS Certified Machine Learning Specialist',
              'TensorFlow Developer Certificate',
              'Microsoft Certified: Azure Data Scientist Associate',
              'Google Professional Data Engineer',
              'IBM Data Science Professional',
              'Cloudera Certified Data Analyst'
            ].map((cert, index) => (
              <div 
                key={index} 
                className="bg-white/90 p-4 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              >
                <span className="text-foreground/80 text-sm font-medium flex items-center gap-2">
                  <Database className="h-4 w-4 text-primary" />
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
