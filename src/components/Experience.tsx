
import React from 'react';
import { Briefcase, GraduationCap, Calendar, Building, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const workExperience = [
    {
      title: 'AI Engineer',
      company: 'Upwork Freelancer',
      period: '2021 - Present',
      description: 'Leading machine learning projects and developing AI solutions for enterprise clients. Specializing in natural language processing and deep learning applications.'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'AtliQ',
      period: 'December 2023 - December 2024',
      description: 'Working on Machine Learning, Deep Learning, and Natural Language Processing (NLP) to develop and optimize AI-driven solutions. Responsible for building, training, and deploying models for various applications, including text processing, predictive analytics, and automation. Collaborating with cross-functional teams to enhance AI capabilities and improve system performance.'
    },
    {
      title: 'Associate Machine Learning Engineer',
      company: 'Avanza Solutions',
      period: 'October 2022 - December 2023',
      description: 'As an Associate Machine Learning Engineer at Avanza Solutions, I spearheaded advanced machine learning initiatives, contributing to the development of cutting-edge AI solutions.'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'TechData Labs',
      period: '2019 - 2021',
      description: 'Developed and implemented machine learning models for predictive analytics and data visualization solutions.'
    },
    {
      title: 'Data Analyst',
      company: 'DataCorp Analytics',
      period: '2018 - 2019',
      description: 'Performed data analysis and developed statistical models to derive insights from large datasets.'
    }
  ];
  
  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Virtual University of Pakistan',
      period: '2022 - 2024',
      description: 'Specialized in machine learning and artificial intelligence applications.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Sir Syed University of Engineering & Technology (SSUET)',
      period: '2018 - 2022',
      description: 'Focused on algorithms, programming, and mathematics foundations.'
    }
  ];
  
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-secondary/60 to-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-2 px-4 py-1 bg-primary/10 text-primary font-medium">
            My Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <Card key={index} className="overflow-hidden border-none hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-display font-semibold">{exp.title}</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {exp.period}
                        </Badge>
                      </div>
                      
                      <p className="text-primary/80 mb-3 flex items-center">
                        <Building className="w-4 h-4 mr-2" /> {exp.company}
                      </p>
                      
                      <p className="text-foreground/70">{exp.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="overflow-hidden border-none hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-display font-semibold">{edu.degree}</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {edu.period}
                        </Badge>
                      </div>
                      
                      <p className="text-primary/80 mb-3 flex items-center">
                        <Building className="w-4 h-4 mr-2" /> {edu.institution}
                      </p>
                      
                      <p className="text-foreground/70">{edu.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
