
import React, { useEffect, useRef } from 'react';
import { Database, Laptop, Network, Terminal, Brain, Eye } from 'lucide-react';

interface Skill {
  category: string;
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
      category: 'Programming Languages',
      items: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Java', level: 75 },
      ],
    },
    {
      category: 'Machine Learning',
      items: [
        { name: 'Scikit-Learn', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Keras', level: 85 },
      ],
    },
    {
      category: 'GenAI',
      items: [
        { name: 'LLMs', level: 90 },
        { name: 'Stable Diffusion', level: 85 },
        { name: 'Hugging Face', level: 85 },
        { name: 'Prompt Engineering', level: 90 },
      ],
    },
    {
      category: 'Computer Vision',
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
      items: [
        { name: 'Tableau', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'Matplotlib', level: 90 },
        { name: 'D3.js', level: 75 },
      ],
    },
  ];
  
  let currentProgressIndex = 0;
  
  return (
    <section id="skills" className="pro-section bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pro-heading">
          <div className="pro-heading-badge">
            My Expertise
          </div>
          <h2 className="pro-heading-title">
            Technical Skills
          </h2>
          <div className="pro-heading-line"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-6">
                {groupIndex === 0 && <Terminal className="text-primary mr-3 h-5 w-5" />}
                {groupIndex === 1 && <Laptop className="text-primary mr-3 h-5 w-5" />}
                {groupIndex === 2 && <Brain className="text-primary mr-3 h-5 w-5" />}
                {groupIndex === 3 && <Eye className="text-primary mr-3 h-5 w-5" />}
                {groupIndex === 4 && <Network className="text-primary mr-3 h-5 w-5" />}
                <h3 className="text-xl font-display font-semibold">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => {
                  const progressId = currentProgressIndex++;
                  
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          ref={(el) => (progressRefs.current[progressId] = el)}
                          className="skill-progress w-0"
                          data-width={skill.level}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-effect rounded-lg p-8">
          <h3 className="text-2xl font-display font-semibold mb-6 text-center">Professional Certifications</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                className="pro-card p-4"
              >
                <span className="text-foreground/80 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
