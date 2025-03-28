
import React from 'react';
import { ActivitySquare, BarChart, BrainCircuit, BookOpen, Database, MessageSquare, Search, Server } from 'lucide-react';
import GenerativeAI from './GenerativeAI';

const Services = () => {
  const services = [
    {
      icon: <BrainCircuit className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data challenges.'
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
      icon: <ActivitySquare className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: 'NLP & Text Analytics',
      description: 'Natural language processing solutions for text analysis, sentiment analysis, and more.'
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
    }
  ];
  
  // Add server names section
  const servers = [
    {
      name: "Main Production Server",
      status: "online",
      location: "US-East",
      type: "High Performance"
    },
    {
      name: "European Data Center",
      status: "online",
      location: "EU-Central",
      type: "Storage Optimized"
    },
    {
      name: "Asia-Pacific Server",
      status: "online",
      location: "Asia-Singapore",
      type: "General Purpose"
    },
    {
      name: "Backup Server",
      status: "standby",
      location: "US-West",
      type: "Disaster Recovery"
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
      
      {/* Server Names Section */}
      <div className="mt-16 px-4 sm:px-0">
        <div className="flex items-center justify-center mb-10">
          <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mr-4">
            <Server className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold">
            Our Server Infrastructure
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {servers.map((server, index) => (
            <div key={index} className="enhanced-card p-4 sm:p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold">{server.name}</h4>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  server.status === 'online' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {server.status}
                </div>
              </div>
              <div className="space-y-1 text-sm text-foreground/70">
                <p><span className="font-medium">Location:</span> {server.location}</p>
                <p><span className="font-medium">Type:</span> {server.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 px-4 sm:px-0">
        <div className="flex items-center justify-center mb-10">
          <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mr-4">
            <Search className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold">
            Try our Generative AI Powered Knowledge Base
          </h3>
        </div>
        
        <GenerativeAI />
      </div>
    </div>
  );
};

export default Services;
