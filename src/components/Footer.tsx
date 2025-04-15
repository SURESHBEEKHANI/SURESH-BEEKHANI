
import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const socialLinks = [
    { name: 'Github', icon: <Github size={20} />, url: 'https://github.com/sureshbeekhani' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/sureshbeekhani' },
  ];
  
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Suresh<span className="text-primary">Beekhani</span></h3>
            <p className="text-white/70 mb-6">
              Data Scientist and AI/ML Engineer dedicated to helping others learn and apply artificial intelligence and data science.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 rounded-full p-2 hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Skills', 'Services', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>Pakistan</li>
              <li>sureshbeekhani26@gmail.com</li>
              <li>+92 340 1213187</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Suresh Beekhani. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-primary p-3 rounded-full hover:bg-primary/80 transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
