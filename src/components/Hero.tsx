import { useEffect, useState } from 'react';
import {
  ArrowDown, FileText, Github, Linkedin, Twitter,
  Brain, Cpu, Database, Network, Youtube, Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import { useReducedMotion } from '@/hooks/useAnimations';
import {
  heroVariants,
  avatarVariants,
  statsVariants,
  staggerContainer,
  staggerItem,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  hoverLift,
  hoverScale,
} from '@/lib/animations';

const Hero = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [statsCount, setStatsCount] = useState({ years: 0, projects: 0, models: 0 });

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

  // Animated counter for stats
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    const targets = { years: 4, projects: 25, models: 40 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStatsCount({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        models: Math.floor(targets.models * progress),
      });

      if (currentStep >= steps) {
        setStatsCount(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/sureshbeekhani', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/sureshbeekhani', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/SureshBeekhan', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@sureshbeekhani', label: 'YouTube' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/suresh_beekhani/', label: 'Instagram' },
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
        {/* Floating particles */}
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full"
          animate={prefersReducedMotion ? {} : {
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-secondary/50 rounded-full"
          animate={prefersReducedMotion ? {} : {
            y: [20, -20, 20],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-4 h-4 bg-accent/30 rounded-full"
          animate={prefersReducedMotion ? {} : {
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-60 left-1/3 w-3 h-3 bg-secondary/40 rounded-full"
          animate={prefersReducedMotion ? {} : {
            y: [15, -15, 15],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Large gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Animated lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={prefersReducedMotion ? {} : {
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-secondary/30 to-transparent"
          animate={prefersReducedMotion ? {} : {
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="z-10 max-w-7xl mx-auto container-padding py-8 sm:py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">

          {/* Avatar + Social Links (now always on left on desktop) */}
          <motion.div
            className="relative mt-16 sm:mt-0 w-full lg:w-auto"
            variants={fadeInLeft}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? false : "visible"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex justify-center lg:justify-start">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/30 rounded-full blur-2xl opacity-60"
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative"
                variants={avatarVariants}
                initial={prefersReducedMotion ? false : "hidden"}
                animate={prefersReducedMotion ? false : "visible"}
              >
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
                  <motion.div
                    key={index}
                    className={`absolute ${tech.color}`}
                    style={{
                      top: `${20 + (index * 60)}%`,
                      left: index % 2 === 0 ? '-20px' : 'auto',
                      right: index % 2 === 1 ? '-20px' : 'auto',
                    }}
                    initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
                    animate={prefersReducedMotion ? {} : {
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-6"
              variants={staggerContainer}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 glass rounded-full hover:bg-white/20 transition-all duration-300 group touch-button"
                  aria-label={`Visit ${social.label} profile`}
                  variants={staggerItem}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.15, y: -4 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <div className="text-white/70 group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Text Content (on right for desktop) */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left"
            variants={staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? false : "visible"}
          >
            <motion.h1
              className="heading-1 font-bold leading-tight"
              variants={staggerItem}
            >
              I'm <span className="gradient-text">Suresh Beekhani</span>
            </motion.h1>

            <motion.div
              className="h-6 sm:h-8 flex items-center justify-center lg:justify-start overflow-hidden"
              variants={staggerItem}
            >
              <span className="body-medium text-white/70 mr-2 mobile-text">Specializing in</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSkill}
                  className="body-medium font-semibold gradient-text-primary min-w-[180px] sm:min-w-[200px] text-left mobile-text"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {skills[currentSkill]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="body-medium text-white/80 max-w-3xl leading-relaxed mobile-text"
              variants={staggerItem}
            >
             Passionate about advancing artificial intelligence, I create intelligent solutions and share practical knowledge. Through hands-on tutorials, real-world projects, and innovative AI applications, I empower learners and businesses to leverage AI for growth, innovation, and transformation. Open to Remote Projects & Freelance Work – let’s collaborate! 
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              variants={staggerItem}
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <Button asChild className="btn-primary w-full sm:w-auto touch-button">
                  <a
                    href="https://drive.google.com/drive/folders/1nenB6s7mXNZllsPHh2-74QziMBLU-U6b?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Suresh Beekhani's resume"
                  >
                    <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="mobile-text">View Resume</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <Button asChild variant="outline" className="btn-outline w-full sm:w-auto group touch-button">
                  <a href="#about" aria-label="Learn more about Suresh Beekhani">
                    <span className="mobile-text">Learn More</span>
                    <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-y-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 w-full"
              variants={staggerItem}
            >
              <motion.div
                className="text-center"
                custom={0}
                variants={statsVariants}
                initial={prefersReducedMotion ? false : "hidden"}
                animate={prefersReducedMotion ? false : "visible"}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-primary mobile-text">
                  {statsCount.years}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mobile-text">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center"
                custom={1}
                variants={statsVariants}
                initial={prefersReducedMotion ? false : "hidden"}
                animate={prefersReducedMotion ? false : "visible"}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-primary mobile-text">
                  {statsCount.projects}+
                </div>
                <div className="text-xs sm:text-sm text-white/70 mobile-text">Projects Completed</div>
              </motion.div>
              <motion.div
                className="text-center"
                custom={2}
                variants={statsVariants}
                initial={prefersReducedMotion ? false : "hidden"}
                animate={prefersReducedMotion ? false : "visible"}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-primary mobile-text">
                  {statsCount.models}+
                </div>
                <div className="text-xs sm:text-sm text-white/70 mobile-text">AI Models Built</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
