import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MapPin, Mail, Phone, Heart, Sparkles, Brain, Code, Rocket, Globe, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const socialLinks = [
    { 
      name: 'Github', 
      icon: <Github size={20} />, 
      url: 'https://github.com/sureshbeekhani',
      color: 'from-gray-600 to-gray-800'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/sureshbeekhani',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      name: 'X (Twitter)', 
      icon: <Twitter size={20} />, 
      url: 'https://x.com/SureshBeekhan',
      color: 'from-black to-gray-800'
    },
  ];

  const navigationLinks = [
    { name: 'About', id: 'about', icon: <Brain className="h-4 w-4" /> },
    { name: 'Services', id: 'services', icon: <Code className="h-4 w-4" /> },
    { name: 'Experience', id: 'experience', icon: <Rocket className="h-4 w-4" /> },
    { name: 'Contact', id: 'contact', icon: <Globe className="h-4 w-4" /> }
  ];

  const contactInfo = [
    {
      icon: <MapPin size={16} />,
      label: 'Location',
      value: 'Karachi, Pakistan'
    },
    {
      icon: <Mail size={16} />,
      label: 'Email',
      value: 'sureshbeekhani@gmail.com',
      href: 'mailto:sureshbeekhani@gmail.com'
    },
    {
      icon: <Phone size={16} />,
      label: 'Phone',
      value: '+923401213187',
      href: 'tel:+923401213187'
    },
  ];

  const services = [
    'AI Development',
    'Machine Learning',
    'Deep Learning',
    'NLP Solutions',
    'Computer Vision',
    'Predictive AI'
  ];
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-x-hidden w-full relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-12 h-12 flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Suresh <span className="gradient-text">Beekhani</span>
                </h3>
                <p className="text-xs text-white/60">ML Engineer & Data Scientist</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed body-small">
              Transforming ideas into intelligent AI solutions. Specializing in machine learning, 
              deep learning, and data science to drive innovation and business growth.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-gradient-to-r text-white hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`/#${item.id}`} 
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="group-hover:text-primary transition-colors">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Services
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <Badge 
                  key={service}
                  variant="secondary"
                  className="bg-white/10 text-white/70 border-white/20 text-xs"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Contact Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full w-8 h-8 flex items-center justify-center border border-primary/30">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-white/70 hover:text-white transition-colors font-medium text-sm"
                        aria-label={`Contact via ${info.label.toLowerCase()}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white/70 font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>© {new Date().getFullYear()} Suresh Beekhani. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-400 fill-current" /> and lots of ☕
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Brain className="w-3 h-3 mr-1" />
                AI/ML Engineer
              </Badge>
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                <Code className="w-3 h-3 mr-1" />
                Data Scientist
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 btn-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;
