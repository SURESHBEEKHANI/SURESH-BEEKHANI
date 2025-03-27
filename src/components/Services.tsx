
import React from 'react';
import { ActivitySquare, BarChart, BrainCircuit, BookOpen, Database, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data challenges.'
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: 'Data Analysis & Visualization',
      description: 'Comprehensive data analysis and insightful visualizations to help you understand your data better.'
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: 'Predictive Analytics',
      description: 'Forecasting and prediction services to help you make data-driven decisions for your business.'
    },
    {
      icon: <ActivitySquare className="h-10 w-10 text-primary" />,
      title: 'NLP & Text Analytics',
      description: 'Natural language processing solutions for text analysis, sentiment analysis, and more.'
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'AI Education & Training',
      description: 'Customized workshops and training sessions to help your team understand and implement AI solutions.'
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI strategies and solutions for your organization.'
    }
  ];
  
  return (
    <div>
      <div className="pro-heading">
        <div className="pro-heading-badge">What I Offer</div>
        <h2 className="pro-heading-title">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="pro-heading-line"></div>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          I provide a range of data science and AI services to help businesses leverage the power of artificial intelligence 
          and data-driven decision making.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="enhanced-card p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
          >
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
            <p className="text-foreground/70">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
