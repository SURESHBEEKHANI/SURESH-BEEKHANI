import React, { useEffect, useState } from 'react';
import { ArrowDown, FileText, Github, Linkedin, Twitter, Sparkles, Code, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'AI Development','Generative AI'];
  
  useEffect(() => {
    setIsVisible(true);
    
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    
    return () => clearInterval(skillInterval);
  }, [skills.length]);

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/sureshbeekhani', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/sureshbeekhani', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/SureshBeekhan', label: 'Twitter' },
  ];
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-0"
      aria-label="Hero Section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse"></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Avatar Section */}
          <div className="relative mt-16 sm:mt-0 order-2 lg:order-1 w-full lg:w-auto">
            <div className="relative flex justify-center lg:justify-start">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-blue-400/30 to-purple-400/30 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              
              {/* Avatar container */}
              <div className="relative">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 border-4 border-white/20 shadow-2xl relative z-10 bg-gradient-to-br from-white to-gray-50">
                  <AvatarImage 
                    src="/image/sureshbeekhani.png" 
                    alt="Suresh Beekhani - Data Scientist and AI/ML Engineer" 
                    className="object-cover" 
                    loading="eager"
                  />
                  <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-blue-600 text-white">
                    SB
                  </AvatarFallback>
                </Avatar>
                
                {/* Decorative elements around avatar */}
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 sm:-right-6 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg group touch-button"
                  aria-label={`Visit ${social.label} profile`}
                >
                  <div className="text-gray-600 group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Content Section */}
          <div className={`order-1 lg:order-2 flex-1 space-y-4 sm:space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="space-y-3 sm:space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full text-primary text-xs sm:text-sm font-semibold border border-primary/20">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="mobile-text">Data Scientist & AI/ML Engineer</span>
              </div>
              
              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600">Suresh Beekhani</span>
              </h1>
              
              {/* Animated skill display */}
              <div className="h-6 sm:h-8 flex items-center justify-center lg:justify-start">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mr-2 mobile-text">Specializing in</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-primary min-w-[180px] sm:min-w-[200px] text-left mobile-text">
                  {skills[currentSkill]}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl leading-relaxed mobile-text">
                A passionate Data Scientist and AI/ML Engineer dedicated to sharing knowledge and expertise in artificial intelligence and data science. Through engaging tutorials and innovative AI solutions, I help learners master Machine Learning, Deep Learning, Natural Language Processing, and Generative AI technologies.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button 
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group touch-button"
              >
                <a 
                  href="https://drive.google.com/drive/folders/1nenB6s7mXNZllsPHh2-74QziMBLU-U6b?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Suresh Beekhani's resume"
                >
                  <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                  <span className="mobile-text">View Resume</span>
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="w-full sm:w-auto group border-2 border-gray-200 hover:border-primary/50 bg-white/50 backdrop-blur-sm hover:bg-white/80 px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 touch-button"
              >
                <a href="#about" aria-label="Learn more about Suresh Beekhani">
                  <span className="mobile-text">Learn More</span>
                  <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary mobile-text">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 mobile-text">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary mobile-text">25+</div>
                <div className="text-xs sm:text-sm text-gray-600 mobile-text">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary mobile-text">40+</div>
                <div className="text-xs sm:text-sm text-gray-600 mobile-text">AI Models Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors group touch-button"
        >
          <a href="#about" aria-label="Scroll to about section">
            <span className="text-xs mb-1 sm:mb-2 group-hover:text-primary transition-colors mobile-text">Scroll Down</span>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
