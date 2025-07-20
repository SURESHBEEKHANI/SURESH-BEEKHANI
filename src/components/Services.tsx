import React from 'react';
import { ActivitySquare, BarChart, BrainCircuit, BookOpen, Database, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />, // Example icon
      title: 'Predictive Modelling',
      description: 'Build robust predictive models to forecast outcomes and drive business strategy.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />, // Example icon
      title: 'Chat GPT Integration',
      description: 'Integrate advanced conversational AI (ChatGPT) into your applications for enhanced user engagement.'
    },
    {
      icon: <ActivitySquare className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />, // Example icon
      title: 'Natural Language Processing',
      description: 'Extract insights from text data using NLP techniques for sentiment analysis, entity recognition, and more.'
    },
    {
      icon: <BrainCircuit className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />, // Example icon
      title: 'Machine Learning',
      description: 'End-to-end machine learning solutions from data preprocessing to model deployment.'
    },
    {
      icon: <ActivitySquare className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />, // Example icon
      title: 'Computer Vision',
      description: 'Leverage computer vision for image recognition, object detection, and video analytics.'
    },
    {
      icon: <Database className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'Data Analysis & Visualization',
      description: 'Comprehensive data analysis and insightful visualizations to help you understand your data better.'
    },
    {
      icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'Predictive Analytics',
      description: 'Forecasting and prediction services to help you make data-driven decisions for your business.'
    },
    {
      icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />, // Example icon
      title: 'Time Series Forecasting',
      description: 'Accurate time series forecasting for sales, demand, and financial cost prediction using advanced statistical and machine learning models.'
    },
    {
      icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'AI Education & Training',
      description: 'Customized workshops and training sessions to help your team understand and implement AI solutions.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI strategies and solutions for your organization.'
    },
    {
      icon: <BrainCircuit className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'Generative AI',
      description: 'Innovative generative AI models for content creation, image synthesis, and automation.'
    },
    {
      icon: <ActivitySquare className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'AI Agents',
      description: 'Development of autonomous AI agents capable of decision-making, task automation, and real-time problem-solving.'
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
        <p className="text-foreground/80 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
          I provide a range of data science and AI services to help businesses leverage the power of artificial intelligence 
          and data-driven decision making.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
        {services.map((service, index) => (
          <div 
            key={index}
            className="enhanced-card p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
          >
            <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-display font-semibold mb-1 sm:mb-2">{service.title}</h3>
            <p className="text-foreground/70 text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Removed "Our Server Infrastructure" section */}
      {/* Removed "Try our Generative AI Powered Knowledge Base" section */}
    </div>
  );
};

export default Services;
