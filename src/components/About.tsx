
import React, { useState, useEffect } from 'react';
import { Award, Brain, Code, Database, Lightbulb, Star, TrendingUp, Users, Clock, Zap, Target, Rocket, Shield, Globe } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
        }
      });
    });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targetStats = [5, 25, 40, 15];
    const duration = 2000;
    const steps = 60;
    const stepValue = targetStats.map(target => target / steps);
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setAnimatedStats(stepValue.map((step, index) => 
        Math.min(step * currentStep, targetStats[index])
      ));
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);
  };
const stats = [
    { 
      label: 'Years Experience', 
      value: animatedStats[0], 
      suffix: '+',
      icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
    },
    { 
      label: 'Projects Completed', 
      value: animatedStats[1], 
      suffix: '+',
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />
    },
    { 
      label: 'AI Models Built', 
      value: animatedStats[2], 
      suffix: '+',
      icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
    },
    { 
      label: 'Happy Clients', 
      value: animatedStats[3], 
      suffix: '+',
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />
    }
  ];

  const specializations = [
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Machine Learning',
      description: 'Developing and implementing advanced machine learning models for predictive analysis and decision-making systems.',
      features: ['Predictive Analytics', 'Model Optimization', 'Feature Engineering'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Deep Learning',
      description: 'Creating complex neural network architectures for computer vision, NLP, and other AI applications.',
      features: ['Neural Networks', 'Computer Vision', 'NLP Models'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />, 
      title: 'AI Agents',
      description: 'Developing intelligent AI agents that autonomously perceive, reason, and act to accomplish complex tasks.',
      features: ['Autonomous Systems', 'Multi-Agent Systems', 'Reinforcement Learning'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Generative AI',
      description: 'Developing state-of-the-art generative models for content creation and creative AI applications.',
      features: ['Text Generation', 'Image Generation', 'Creative AI'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI technology with cutting-edge solutions.'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Delivering high-quality, scalable AI solutions that exceed expectations.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Reliability',
      description: 'Building robust and trustworthy AI systems for critical applications.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Impact',
      description: 'Creating AI solutions that make a positive difference in the world.'
    }
  ];

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <Badge className="mb-4 px-4 py-2 glass text-white border-foreground/20">
            <Award className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="heading-2 mb-6">
            Transforming Ideas into{' '}
            <span className="gradient-text">Intelligent Solutions</span>
          </h2>
          <p className="body-large text-foreground/70 max-w-3xl mx-auto">
            I'm a passionate Data Scientist and AI/ML Engineer with over 5 years of experience in developing cutting-edge artificial intelligence solutions. 
            My expertise spans across machine learning, deep learning, natural language processing, and generative AI technologies.
          </p>
        </div>

        {/* Stats Section removed as requested */}

        {/* Specializations */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <Card 
                key={spec.title}
                className={`modern-card hover:scale-105 transition-all duration-500 ${isVisible ? 'slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${spec.color} text-white`}>
                      {spec.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-3 text-foreground">
                        {spec.title}
                      </h4>
                      <p className="text-foreground/70 mb-4 body-medium">
                        {spec.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {spec.features.map((feature) => (
                          <Badge 
                            key={feature} 
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border-primary/20"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values section removed as requested */}
      </div>
    </div>
  );
};

export default About;
