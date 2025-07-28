
import React, { useState, useEffect } from 'react';
import { Award, Brain, Code, Database, Lightbulb, Star, TrendingUp, Users, Clock, Zap } from 'lucide-react';
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
      icon: <Clock className="h-5 w-5 text-primary" />
    },
    { 
      label: 'Projects Completed', 
      value: animatedStats[1], 
      suffix: '+',
      icon: <Code className="h-5 w-5 text-primary" />
    },
    { 
      label: 'AI Models Built', 
      value: animatedStats[2], 
      suffix: '+',
      icon: <Brain className="h-5 w-5 text-primary" />
    },
    { 
      label: 'Happy Clients', 
      value: animatedStats[3], 
      suffix: '+',
      icon: <Users className="h-5 w-5 text-primary" />
    }
  ];

  const specializations = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'Machine Learning',
      description: 'Developing and implementing advanced machine learning models for predictive analysis and decision-making systems.',
      features: ['Predictive Analytics', 'Model Optimization', 'Feature Engineering']
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Deep Learning',
      description: 'Creating complex neural network architectures for computer vision, NLP, and other AI applications.',
      features: ['Neural Networks', 'Computer Vision', 'NLP Models']
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />, 
      title: 'AI Agents',
      description: 'Developing intelligent AI agents that autonomously perceive, reason, and act to accomplish complex tasks.',
      features: ['Autonomous Systems', 'Multi-Agent Systems', 'Reinforcement Learning']
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: 'Generative AI',
      description: 'Developing state-of-the-art generative models for content creation and creative AI applications.',
      features: ['Text Generation', 'Image Generation', 'Creative AI']
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-gradient-to-b from-secondary/30 via-blue-50/20 to-secondary/60 relative overflow-hidden"
      aria-label="About Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full border-primary/20 hover:bg-primary/15 transition-colors duration-300"
          >
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Passionate About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">AI & Data Science</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Transforming complex data into actionable insights and building intelligent solutions that drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-semibold">
                Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Intelligent Solutions</span> Through AI
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I am a dedicated Data Scientist and AI/ML Engineer with a passion for extracting meaningful insights from complex datasets. 
                  With expertise in machine learning, deep learning, and natural language processing, I help organizations leverage the power of AI.
                </p>
                <p>
                  My approach combines technical excellence with a deep understanding of business needs, ensuring that the solutions 
                  I develop deliver real value. I also focus on sharing my knowledge through tutorials and content to help others 
                  master the exciting field of artificial intelligence.
                </p>
              </div>
            </div>

            {/* Animated stats */}
            <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="glass-effect rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-white/20 backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-display font-bold text-primary mb-2">
                      {Math.round(stat.value)}{stat.suffix}
                    </div>
                    <div className="text-sm text-foreground/70 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {specializations.map((item, index) => (
                <Card
                  key={index}
                  className={`glass-effect rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] border-l-4 border-primary/50 backdrop-blur-sm ${
                    isVisible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 border border-primary/20">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-display font-semibold mb-3 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-xs text-foreground/60 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-20 text-center">
          <Card className="glass-effect rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-display font-semibold">
                  Why Choose My Expertise?
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto" />
                  <h4 className="font-semibold">Proven Results</h4>
                  <p className="text-sm text-foreground/70">
                    Delivered successful AI solutions that drive measurable business outcomes
                  </p>
                </div>
                <div className="space-y-3">
                  <Zap className="h-6 w-6 text-primary mx-auto" />
                  <h4 className="font-semibold">Cutting-Edge Tech</h4>
                  <p className="text-sm text-foreground/70">
                    Stay updated with the latest AI technologies and best practices
                  </p>
                </div>
                <div className="space-y-3">
                  <Users className="h-6 w-6 text-primary mx-auto" />
                  <h4 className="font-semibold">Client-Focused</h4>
                  <p className="text-sm text-foreground/70">
                    Understand your business needs and translate them into technical solutions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
