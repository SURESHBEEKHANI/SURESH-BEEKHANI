
import React from 'react';
import { Briefcase, GraduationCap, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: 'Senior Data Scientist',
      company: 'AI Solutions Inc.',
      period: '2021 - Present',
      description: 'Leading machine learning projects and developing AI solutions for enterprise clients. Specializing in natural language processing and deep learning applications.'
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
      institution: 'University of Data Sciences',
      period: '2016 - 2018',
      description: 'Specialized in machine learning and artificial intelligence applications.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      period: '2012 - 2016',
      description: 'Focused on algorithms, programming, and mathematics foundations.'
    }
  ];
  
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-secondary/60 to-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            My Journey
          </div>
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
                <div key={index} className="glass-effect rounded-lg p-6 relative border-l-4 border-primary hover:shadow-lg transition-all duration-300">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full absolute -top-3 right-6 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {exp.period}
                  </span>
                  <h4 className="text-xl font-display font-semibold mb-1">{exp.title}</h4>
                  <p className="text-primary/80 mb-3 flex items-center">
                    <Building className="w-4 h-4 mr-2" /> {exp.company}
                  </p>
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
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
                <div key={index} className="glass-effect rounded-lg p-6 relative border-l-4 border-primary hover:shadow-lg transition-all duration-300">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full absolute -top-3 right-6 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {edu.period}
                  </span>
                  <h4 className="text-xl font-display font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-primary/80 mb-3 flex items-center">
                    <Building className="w-4 h-4 mr-2" /> {edu.institution}
                  </p>
                  <p className="text-foreground/70">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
