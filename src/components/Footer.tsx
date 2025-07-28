import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MapPin, Mail, Phone, Heart, Sparkles } from 'lucide-react';
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
      color: 'hover:text-gray-400'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/sureshbeekhani',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'X (Twitter)', 
      icon: <Twitter size={20} />, 
      url: 'https://x.com/SureshBeekhan',
      color: 'hover:text-blue-300'
    },
  ];

  const navigationLinks = [
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
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
      value: 'sureshbeekhani26@gmail.com',
      href: 'mailto:sureshbeekhani26@gmail.com'
    }
  ];
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-x-hidden w-full relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold">
                Suresh<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Beekhani</span>
              </h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Data Scientist and AI/ML Engineer dedicated to helping others learn and apply artificial intelligence and data science. 
              Transforming complex data into actionable insights and building intelligent solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <div className={`text-white/70 group-hover:text-white transition-colors ${social.color}`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Section */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-blue-400 rounded-full"></div>
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`/#${item.id}`} 
                    className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    <span className="group-hover:text-primary transition-colors">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-blue-400 rounded-full"></div>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full w-8 h-8 flex items-center justify-center border border-primary/30">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-white/70 hover:text-white transition-colors font-medium"
                        aria-label={`Contact via ${info.label.toLowerCase()}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white/70 font-medium">{info.value}</p>
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
              <Badge variant="outline" className="bg-white/10 text-white/70 border-white/20">
                AI/ML Engineer
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white/70 border-white/20">
                Data Scientist
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
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
