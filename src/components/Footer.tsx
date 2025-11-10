import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MapPin, Mail, Phone, Heart, Sparkles, Brain, Code, Rocket, Globe, Clock, Youtube, Instagram } from 'lucide-react';
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
      icon: <Github size={16} />, 
      url: 'https://github.com/sureshbeekhani',
      color: 'from-gray-600 to-gray-800'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={16} />, 
      url: 'https://linkedin.com/in/sureshbeekhani',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      name: 'X (Twitter)', 
      icon: <Twitter size={16} />, 
      url: 'https://x.com/SureshBeekhan',
      color: 'from-black to-gray-800'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={16} />,
      url: 'https://www.youtube.com/@sureshbeekhani',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={16} />,
      url: 'https://www.instagram.com/suresh_beekhani/',
      color: 'from-pink-500 to-purple-600'
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
    { name: 'AI Development', link: '/ai-development' },
    { name: 'Machine Learning', link: '/machine-learning' },
    { name: 'Deep Learning', link: '/machine-learning' }, // Deep Learning is part of Machine Learning page
    { name: 'NLP Solutions', link: '/natural-language-processing' },
    { name: 'Computer Vision', link: '/computer-vision' },
    { name: 'Predictive AI', link: '/predictive-modelling' },
    { name: 'Chatbot Development', link: '/ai-chatbot-development' },
    { name: 'AI Automation', link: '/ai-automation' }
  ];
  
  return (
    <footer className="ai-section text-white py-16 overflow-x-hidden w-full relative">
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-tech-blue/20 to-ai-aqua-cyan/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-aqua-cyan/15 to-ai-mint-green/20 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-tech-blue/5 to-ai-aqua-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex items-center gap-3">
              <div className="rounded-full w-12 h-12 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 50%, #71EFA3 100%)' }}>
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Suresh <span className="gradient-text">Beekhani</span>
                </h3>
                <p className="text-xs" style={{ color: '#00C2CB' }}>Data Scientist | AI Specialist</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed body-small">
              Transforming ideas into intelligent AI solutions. Specialized in machine learning, deep learning, generative AI, and intelligent agents to drive innovation, automation, and business growth.
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
              <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #1E5AFF, #00C2CB)' }}></div>
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
                    <div className="group-hover:scale-110 transition-transform" style={{ color: '#00C2CB' }}>
                      {item.icon}
                    </div>
                    <span className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00C2CB'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #1E5AFF, #00C2CB)' }}></div>
              Services
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.link}
                  className="inline-block"
                >
                  <Badge 
                    variant="secondary"
                    className="border text-xs transition-all duration-300 cursor-pointer"
                    style={{ 
                      background: 'rgba(0, 194, 203, 0.1)', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      borderColor: 'rgba(0, 194, 203, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 194, 203, 0.2)';
                      e.currentTarget.style.color = '#00C2CB';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 194, 203, 0.1)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }}
                  >
                    {service.name}
                  </Badge>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #1E5AFF, #00C2CB)' }}></div>
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center border" style={{ 
                    background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.2) 0%, rgba(0, 194, 203, 0.2) 100%)',
                    borderColor: 'rgba(0, 194, 203, 0.3)',
                    color: '#00C2CB'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'rgba(0, 194, 203, 0.7)' }}>{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="transition-colors font-medium text-sm"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#00C2CB'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                        aria-label={`Contact via ${info.label.toLowerCase()}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{info.value}</p>
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
              <Badge variant="outline" className="border" style={{ background: 'rgba(0, 194, 203, 0.1)', color: '#00C2CB', borderColor: 'rgba(0, 194, 203, 0.2)' }}>
                <Brain className="w-3 h-3 mr-1" />
                AI/ML Engineer
              </Badge>
              <Badge variant="outline" className="border" style={{ background: 'rgba(113, 239, 163, 0.1)', color: '#71EFA3', borderColor: 'rgba(113, 239, 163, 0.2)' }}>
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
