
import { useState, useEffect } from 'react';
import { Award, Brain, Code, Database, Lightbulb, TrendingUp, Users, Clock } from 'lucide-react';
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
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Computer Vision',
      description: 'Developing intelligent systems that leverage computer vision to autonomously perceive, interpret visual data, and make decisions to accomplish complex tasks.',
      features: ['Object Detection', 'Image Segmentation', 'Image Classification'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Generative AI',
      description: 'Developing state-of-the-art generative models for content creation and creative AI applications.',
      features: ['Text Generation', 'Image Generation', 'Creative AI'],
      color: 'from-orange-500 to-red-500'
    }
  ];



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
            className="mb-4 px-4 py-2 font-medium border-[#00C2CB]/30"
            style={{ background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.2) 0%, rgba(0, 194, 203, 0.2) 50%, rgba(113, 239, 163, 0.2) 100%)', color: '#00C2CB' }}
          >
            <Award className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Transforming ideas into practical <span className="gradient-text">AI solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            I build production-ready AI systems across machine learning, deep learning, natural language processing, Computer Vision and generative AI—focused on real-world impact and scalable deployments.
          </p>
        </div>

        {/* Stats Section removed as requested */}

        {/* Specializations */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <Card 
                key={spec.title}
                className={`ai-card-glow hover:scale-105 transition-all duration-500 bg-gray-800/50 backdrop-blur-sm border border-ai-purple/20 ${isVisible ? 'slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${spec.color} text-white shadow-lg`}>
                      {spec.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-3 text-white">
                        {spec.title}
                      </h4>
                      <p className="text-white/80 mb-4 text-sm sm:text-base leading-relaxed">
                        {spec.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {spec.features.map((feature) => (
                          <Badge 
                            key={feature} 
                            variant="secondary"
                            className="text-xs bg-ai-purple/20 text-ai-cyan border-ai-purple/30"
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
    </section>
  );
};

export default About;
