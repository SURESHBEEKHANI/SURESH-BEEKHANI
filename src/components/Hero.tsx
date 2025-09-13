import React, { useEffect, useState } from 'react';
import {
  ArrowDown, FileText, Github, Linkedin, Twitter,
  Brain, Cpu, Database, Network
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'AI Development',
    'Generative AI'
  ];

  useEffect(() => {
    setIsVisible(true);
    const skillInterval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(skillInterval);
  }, [skills.length]);

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/sureshbeekhani', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/sureshbeekhani', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/SureshBeekhan', label: 'Twitter' },
  ];

  const techIcons = [
    { icon: <Cpu className="w-6 h-6" />, color: 'text-blue-500' },
    { icon: <Database className="w-6 h-6" />, color: 'text-purple-500' },
    { icon: <Network className="w-6 h-6" />, color: 'text-green-500' },
    { icon: <Brain className="w-6 h-6" />, color: 'text-orange-500' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      aria-label="Hero Section"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-pulse floating"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/50 rounded-full animate-ping floating-delay-1"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-accent/30 rounded-full animate-bounce floating-delay-2"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-pulse floating-delay-3"></div>

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-secondary/30 to-transparent"></div>
      </div>

      <div className="z-10 max-w-7xl mx-auto container-padding py-8 sm:py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">

          {/* Avatar + Social Links (now always on left on desktop) */}
          <div className="relative mt-16 sm:mt-0 w-full lg:w-auto">
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/30 rounded-full blur-2xl opacity-60 animate-pulse pulse-glow"></div>
              <div className="relative">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 border-4 border-white/20 shadow-2xl relative z-10 bg-gradient-to-br from-white to-gray-50 modern-card">
                  <AvatarImage
                    src="/image/sureshbeekhani.png"
                    alt="Suresh Beekhani - Data Scientist and AI/ML Engineer"
                    className="object-cover w-full h-full"
                    loading="eager"
                  />
                  <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-primary">
                    SB
                  </AvatarFallback>
                </Avatar>
                {techIcons.map((tech, index) => (
                  <div
                    key={index}
                    className={`absolute ${tech.color} animate-pulse`}
                    style={{
                      top: `${20 + (index * 60)}%`,
                      left: index % 2 === 0 ? '-20px' : 'auto',
                      right: index % 2 === 1 ? '-20px' : 'auto',
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg group touch-button"
                  aria-label={`Visit ${social.label} profile`}
                >
                  <div className="text-white/70 group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Text Content (on right for desktop) */}
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <h1 className="heading-1 font-bold leading-tight">
              I'm <span className="gradient-text">Suresh Beekhani</span>
            </h1>

            <div className="h-6 sm:h-8 flex items-center justify-center lg:justify-start">
              <span className="body-medium text-white/70 mr-2 mobile-text">Specializing in</span>
              <span className="body-medium font-semibold gradient-text-primary min-w-[180px] sm:min-w-[200px] text-left mobile-text">
                {skills[currentSkill]}
              </span>
            </div>

            <p className="body-medium text-white/80 max-w-3xl leading-relaxed mobile-text">
              Dedicated to sharing knowledge and expertise in artificial intelligence and data science.
              Through engaging tutorials and innovative AI solutions, I help learners master Machine Learning,
              Deep Learning, Natural Language Processing, and Generative AI technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button asChild className="btn-primary w-full sm:w-auto touch-button">
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

              <Button asChild variant="outline" className="btn-outline w-full sm:w-auto group touch-button">
                <a href="#about" aria-label="Learn more about Suresh Beekhani">
                  <span className="mobile-text">Learn More</span>
                  <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-primary mobile-text">3+</div>
                <div className="text-xs sm:text-sm text-white/70 mobile-text">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-primary mobile-text">25+</div>
                <div className="text-xs sm:text-sm text-white/70 mobile-text">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-primary mobile-text">40+</div>
                <div className="text-xs sm:text-sm text-white/70 mobile-text">AI Models Built</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
