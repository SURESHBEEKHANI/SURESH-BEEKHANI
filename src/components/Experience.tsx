import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, Award, Star, TrendingUp, Zap, Target, Users, Globe, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('work');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workExperience = [
    {
      title: 'Machine Learning Engineer',
      company: 'Upwork Freelancer',
      period: '2021 - Present',
      description: 'Leading ML projects and building AI solutions for enterprise clients, with a focus on NLP and deep learning applications.',
      achievements: ['Delivered 25+ AI solutions', '99% client satisfaction', 'Expert in NLP & Deep Learning'],
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'AtliQ',
      period: 'December 2022 - December 2024',
      description: 'Developing and deploying AI-driven solutions using ML, DL, and NLP, focused on predictive analytics and automation.',
      achievements: ['Built 15+ production models', 'Improved accuracy by 40%', 'Led team of 5 engineers'],
      icon: <Zap className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Associate Machine Learning Engineer',
      company: 'Avanza Solutions',
      period: 'October 2020 - December 2021',
      description: 'Led advanced ML initiatives and contributed to the development of cutting-edge AI solutions.',
      achievements: ['Implemented 10+ ML models', 'Reduced processing time by 60%', 'Mentored junior developers'],
      icon: <Target className="h-5 w-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Intern Machine Learning Engineer',
      company: 'TechData Labs',
      period: '2019 - 2020',
      description: 'Implemented ML models for predictive analytics and developed data visualization tools.',
      achievements: ['Created 5 predictive models', 'Built data visualization dashboard', 'Learned production workflows'],
      icon: <Users className="h-5 w-5" />,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'Sir Syed University of Engineering & Technology (SSUET)',
      period: '2018 - 2022',
      description: 'Focused on algorithms, software engineering, and mathematics foundations.',
      highlights: ['Algorithms & Data Structures', 'Software Engineering', 'Mathematics & Statistics'],
      icon: <Award className="h-5 w-5" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      degree: 'Machine Learning Engineer',
      institution: 'IBM',
      period: '2022-06-12',
      description: 'Completed specialization in ML/AI through self-paced learning on YouTube, Coursera, edX.',
      highlights: ['ML Fundamentals', 'Deep Learning', 'AI Applications'],
      icon: <Brain className="h-5 w-5" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      degree: 'Generative AI Engineer',
      institution: 'NVIDIA',
      period: '2024',
      description: 'Self-trained on generative models and AI concepts using online platforms.',
      highlights: ['Generative Models', 'Neural Networks', 'Creative AI'],
      icon: <Star className="h-5 w-5" />,
      color: 'from-rose-500 to-pink-500'
    },
    {
      degree: 'Self-Learning in ML & AI',
      institution: 'Coursera, edX, YouTube & more',
      period: '2022 - 2025',
      description: 'Built strong expertise through independent online learning and real-world projects.',
      highlights: ['Continuous Learning', 'Real-world Projects', 'Industry Best Practices'],
      icon: <Globe className="h-5 w-5" />,
      color: 'from-amber-500 to-orange-500'
    },
  ];

  // Stats section removed as requested

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section relative overflow-hidden">
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-purple/5 to-ai-cyan/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <Badge 
            className="mb-4 px-4 py-2 border-[#00C2CB]/30"
            style={{ background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.2) 0%, rgba(0, 194, 203, 0.2) 50%, rgba(113, 239, 163, 0.2) 100%)', color: '#00C2CB' }}
          >
            <Award className="w-4 h-4 mr-2" />
            My Journey
          </Badge>
          <h2 className="heading-2 mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="body-large text-foreground/70 max-w-3xl mx-auto">
            My professional journey in machine learning and artificial intelligence, 
            from academic foundations to real-world applications.
          </p>
        </div>

        {/* Stats Section removed */}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex glass rounded-xl p-1">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Education
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {activeTab === 'work' && (
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative ${isVisible ? 'slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent"></div>
                  
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="relative z-10">
                      <div className={`p-4 rounded-xl bg-gradient-to-r text-white shadow-lg ${exp.color}`}>
                        {exp.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <Card className="modern-card hover:scale-105 transition-all duration-500">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                              <Calendar className="w-3 h-3 mr-1" />
                              {exp.period}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center mb-4 text-primary/80">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          
                          <p className="text-foreground/70 mb-4 body-medium">
                            {exp.description}
                          </p>
                          
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-foreground/60">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`relative ${isVisible ? 'slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent"></div>
                  
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="relative z-10">
                      <div className={`p-4 rounded-xl bg-gradient-to-r text-white shadow-lg ${edu.color}`}>
                        {edu.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <Card className="modern-card hover:scale-105 transition-all duration-500">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                              {edu.degree}
                            </h3>
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                              <Calendar className="w-3 h-3 mr-1" />
                              {edu.period}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center mb-4 text-primary/80">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          
                          <p className="text-foreground/70 mb-4 body-medium">
                            {edu.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary"
                                className="text-xs bg-primary/10 text-primary border-primary/20"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
