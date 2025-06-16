import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  image: string;
}

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 220;
      }
    };

    const interval = setInterval(scroll, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills: Skill[] = [
    { name: 'NumPy', image: '/image/skills_img/numpy.png' },
    { name: 'Pandas', image: '/image/skills_img/pandas.png'},
    { name: 'Matplotlib', image: '/image/skills_img/matplot.png' },
    { name: 'Scikit-learn', image: '/image/skills_img/sikitlearn.png' },
    { name: 'TensorFlow', image: '/image/skills_img/tensorflow.png' },
    { name: 'PyTorch', image: '/image/skills_img/pytorch.png' },
    { name: 'Ultralytics', image: '/image/skills_img/Ultratics.png' },
    { name: 'OpenCV', image: '/image/skills_img/opencv.png'},
    { name: 'Langchain', image: '/image/skills_img/langchain.png' },
    { name: 'FastAPI', image: '/image/skills_img/fastapi.png' },
  ];

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
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex space-x-6 min-w-max px-4">
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white flex-shrink-0 w-[200px]"
                >
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 mb-4 flex items-center justify-center">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-center">{skill.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
