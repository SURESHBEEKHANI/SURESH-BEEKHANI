
import React from 'react';
import { Award, Brain, Code, Database } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '25+' },
    { label: 'AI Models Built', value: '40+' },
    { label: 'Happy Clients', value: '15+' }
  ];

  const specializations = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'Machine Learning',
      description: 'Developing and implementing advanced machine learning models for predictive analysis and decision-making systems.'
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Deep Learning',
      description: 'Creating complex neural network architectures for computer vision, NLP, and other AI applications.'
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Natural Language Processing',
      description: 'Building language models and text analysis systems that understand and generate human language.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Generative AI',
      description: 'Developing state-of-the-art generative models for content creation and creative AI applications.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Passionate About AI & Data Science
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-display font-semibold mb-6">
              Creating <span className="text-primary">Intelligent Solutions</span> Through AI
            </h3>
            <p className="text-foreground/80 mb-6">
              I am a dedicated Data Scientist and AI/ML Engineer with a passion for extracting meaningful insights from complex datasets. 
              With expertise in machine learning, deep learning, and natural language processing, I help organizations leverage the power of AI.
            </p>
            <p className="text-foreground/80 mb-8">
              My approach combines technical excellence with a deep understanding of business needs, ensuring that the solutions 
              I develop deliver real value. I also focus on sharing my knowledge through tutorials and content to help others 
              master the exciting field of artificial intelligence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {specializations.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-effect rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
