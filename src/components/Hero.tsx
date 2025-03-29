
import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-0">
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="relative mt-16 sm:mt-0">
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-4 border-primary/20 shadow-xl relative z-10">
              <AvatarImage src="image/sureshbeekhani.png" alt="Suresh Beekhani" className="object-cover" />
              <AvatarFallback className="text-4xl">SB</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="animate-fade-up mt-6 sm:mt-0">
            <div className="inline-block mb-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold">
              Data Scientist & AI/ML Engineer
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 sm:mb-6">
              I'm <span className="text-primary">Suresh Beekhani</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mb-6 sm:mb-8">
              A Data Scientist and AI/ML Engineer dedicated to sharing my passion for artificial intelligence and data science. 
              Through engaging tutorials and content, I aim to help learners master Machine Learning, Deep Learning, 
              Natural Language Processing, and Generative AI.
            </p>
            <div className="flex flex-col xs:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <a href="https://drive.google.com/drive/folders/1nenB6s7mXNZllsPHh2-74QziMBLU-U6b?usp=drive_link" className="w-full xs:w-auto btn-primary text-sm sm:text-base inline-flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
              <a href="#about" className="w-full xs:w-auto group inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-foreground/5 text-foreground text-sm sm:text-base font-medium transition-all duration-300 hover:bg-foreground/10">
                Learn More 
                <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4 mt-5 sm:mt-6">
              <a href="https://github.com/sureshbeekhani" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://linkedin.com/in/suresh-beekhani" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
