import React from 'react';
import { Briefcase, GraduationCap, Calendar, Building } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const workExperience = [
    {
      title: 'Machine Learning Engineer',
      company: 'Upwork Freelancer',
      period: '2021 - Present',
      description:
        'Leading ML projects and building AI solutions for enterprise clients, with a focus on NLP and deep learning applications.',
    },
    {
      title: 'Machine Learning Engineer',
      company: 'AtliQ',
      period: 'December 2022 - December 2024',
      description:
        'Developing and deploying AI-driven solutions using ML, DL, and NLP, focused on predictive analytics and automation.',
    },
    {
      title: 'Associate Machine Learning Engineer',
      company: 'Avanza Solutions',
      period: 'October 2020 - December 2021',
      description:
        'Led advanced ML initiatives and contributed to the development of cutting-edge AI solutions.',
    },
    {
      title: 'Intern Machine Learning Engineer',
      company: 'TechData Labs',
      period: '2019 - 2020',
      description:
        'Implemented ML models for predictive analytics and developed data visualization tools.',
    },
  ];

  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'Sir Syed University of Engineering & Technology (SSUET)',
      period: '2018 - 2022',
      description:
        'Focused on algorithms, software engineering, and mathematics foundations.',
    },
    {
      degree: 'Machine Learning Engineer',
      institution: 'IBM',
      period: '2022-06-12',
      description:
        'Completed specialization in ML/AI through self-paced learning on YouTube, Coursera, edX.',
    },
    {
      degree: 'Generative AI Engineer',
      institution: 'NVIDIA',
      period: '2024',
      description:
        'Self-trained on generative models and AI concepts using online platforms.',
    },
    {
      degree: 'Self-Learning in ML & AI',
      institution: 'Coursera, edX, YouTube & more',
      period: '2022 - 2025',
      description:
        'Built strong expertise through independent online learning and real-world projects.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-secondary/60 to-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-2 px-4 py-1 bg-primary/10 text-primary font-medium text-base">
            My Journey
          </Badge>
          <h2 className="text-4xl font-display font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-none hover:shadow-lg transition duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6 text-base">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-primary/80 flex items-center mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </p>
                      <p className="text-foreground/70">{exp.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-none hover:shadow-lg transition duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6 text-base">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-primary/80 flex items-center mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {edu.institution}
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
