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
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary/60 to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <Badge variant="outline" className="mb-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary font-medium text-sm sm:text-base">
            My Journey
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4 px-2">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-primary mx-auto mb-6 sm:mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {workExperience.map((exp, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-none hover:shadow-lg transition duration-300 animate-fade-in-up touch-manipulation"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="absolute top-0 left-0 w-0.5 sm:w-1 h-full bg-primary" />
                  <CardContent className="p-4 sm:p-5 md:p-6 text-sm sm:text-base">
                    <div className="flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2 sm:gap-0">
                        <h4 className="text-lg sm:text-xl font-semibold leading-tight">{exp.title}</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary flex items-center gap-1 w-fit text-xs sm:text-sm px-2 sm:px-3 py-1">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="whitespace-nowrap">{exp.period}</span>
                        </Badge>
                      </div>
                      <p className="text-primary/80 flex items-center mb-2 text-sm sm:text-base">
                        <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                        <span className="break-words">{exp.company}</span>
                      </p>
                      <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-none hover:shadow-lg transition duration-300 animate-fade-in-up touch-manipulation"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="absolute top-0 left-0 w-0.5 sm:w-1 h-full bg-primary" />
                  <CardContent className="p-4 sm:p-5 md:p-6 text-sm sm:text-base">
                    <div className="flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2 sm:gap-0">
                        <h4 className="text-lg sm:text-xl font-semibold leading-tight">{edu.degree}</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary flex items-center gap-1 w-fit text-xs sm:text-sm px-2 sm:px-3 py-1">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="whitespace-nowrap">{edu.period}</span>
                        </Badge>
                      </div>
                      <p className="text-primary/80 flex items-start mb-2 text-sm sm:text-base">
                        <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{edu.institution}</span>
                      </p>
                      <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">{edu.description}</p>
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
