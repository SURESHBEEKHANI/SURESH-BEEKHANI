
import React, { useEffect, useRef, useState } from 'react';
import { Database, Laptop, Network, Terminal, Brain, Eye, MessageSquare, Code, Award, BookOpen, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Skill {
  category: string;
  icon: React.ReactNode;
  bgColor: string;
  items: {
    name: string;
    level: number;
  }[];
}

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!visibleSkills.includes(index)) {
              setVisibleSkills(prev => [...prev, index]);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    
    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-index', index.toString());
        observer.observe(ref);
      }
    });
    
    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSkills]);
  
  const skills: Skill[] = [
    {
      category: 'Deep Learning',
      icon: <Brain className="h-8 w-8" />,
      bgColor: 'bg-purple-100 dark:bg-purple-950/30',
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
      icon: <Code className="h-8 w-8" />,
      bgColor: 'bg-blue-100 dark:bg-blue-950/30',
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
      icon: <MessageSquare className="h-8 w-8" />,
      bgColor: 'bg-green-100 dark:bg-green-950/30',
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
      icon: <Brain className="h-8 w-8" />,
      bgColor: 'bg-indigo-100 dark:bg-indigo-950/30',
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
      icon: <Eye className="h-8 w-8" />,
      bgColor: 'bg-amber-100 dark:bg-amber-950/30',
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
      icon: <Terminal className="h-8 w-8" />,
      bgColor: 'bg-rose-100 dark:bg-rose-950/30',
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
  
  const getProgressColorClass = (level: number) => {
    if (level >= 90) return 'bg-primary';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-emerald-500';
    return 'bg-amber-500';
  };
  
  return (
    <section id="skills" className="py-20 relative z-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-3 font-medium text-sm px-5 py-1.5 bg-primary/10 text-primary">My Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Specialized in artificial intelligence and machine learning with expertise in various ML frameworks and technologies.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {skills.map((skillGroup, groupIndex) => {
            const isVisible = visibleSkills.includes(groupIndex);
            
            return (
              <div 
                key={groupIndex} 
                ref={el => skillRefs.current[groupIndex] = el}
                className={cn(
                  "transform transition-all duration-700 ease-out",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${groupIndex * 100}ms` }}
              >
                <Card className="h-full overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn("p-3 rounded-xl", skillGroup.bgColor)}>
                        <div className="text-primary">{skillGroup.icon}</div>
                      </div>
                      <h3 className="text-xl font-display font-semibold">{skillGroup.category}</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm font-medium text-primary">{skill.level}%</span>
                          </div>
                          <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out transform origin-left",
                                getProgressColorClass(skill.level)
                              )}
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${(groupIndex * 100) + (skillIndex * 100)}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-display font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { cert: 'AWS Certified Machine Learning Specialist', course: 'AWS Machine Learning Pathway', icon: <Database className="h-4 w-4" /> },
              { cert: 'TensorFlow Developer Certificate', course: 'TensorFlow for Deep Learning', icon: <BookOpen className="h-4 w-4" /> },
              { cert: 'Microsoft Certified: Azure Data Scientist Associate', course: 'Azure Data Science Track', icon: <Database className="h-4 w-4" /> },
              { cert: 'Google Professional Generative AI Engineer', course: 'Google Cloud', icon: <Laptop className="h-4 w-4" /> },
              { cert: 'IBM Data Science Professional', course: 'IBM Data Science Specialization', icon: <Star className="h-4 w-4" /> },
              { cert: 'Cloudera Certified Data Analyst', course: 'Cloudera Data Analysis Training', icon: <Network className="h-4 w-4" /> }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:translate-y-[-2px] group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {item.cert}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 pl-8">{item.course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
