
import React from 'react';
import { Award, Brain, Code, Database } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '6+' },
    { label: 'Projects Completed', value: '30+' },
    { label: 'Algorithms Developed', value: '50+' },
    { label: 'Happy Clients', value: '20+' }
  ];

  const specializations = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'Machine Learning',
      description: 'Expertise in developing and implementing machine learning models for various applications.'
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Data Engineering',
      description: 'Building robust data pipelines and infrastructure to support analytics and ML systems.'
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Predictive Analytics',
      description: 'Creating insightful forecasting models that drive business decision-making.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Deep Learning',
      description: 'Implementing neural networks for computer vision, NLP, and other complex challenges.'
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
            Passionate About Data & Machine Learning
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-display font-semibold mb-6">
              Creating <span className="text-primary">Intelligent Solutions</span> Through Data Science
            </h3>
            <p className="text-foreground/80 mb-6">
              I am a dedicated data scientist and machine learning engineer with a passion for extracting meaningful insights from complex datasets. With expertise in statistical analysis, predictive modeling, and algorithm development, I help organizations make data-driven decisions.
            </p>
            <p className="text-foreground/80 mb-8">
              My approach combines technical excellence with a deep understanding of business needs, ensuring that the solutions I develop deliver real value. I specialize in creating custom machine learning models that solve specific problems and drive innovation.
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
