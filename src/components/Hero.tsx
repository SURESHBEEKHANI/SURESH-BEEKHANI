import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/hooks/useAnimations';
import {
  staggerContainer,
  staggerItem,
} from '@/lib/animations';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'AI Development',
    'Generative AI',
  ];

  // Cycle skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden section-padding ai-section text-white pt-20"
      aria-label="Hero Section"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* White glow transition from Navbar */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/10 to-transparent" />

        {/** Floating particles **/}
        {[{
          top: 'top-20 left-10', size: 'w-3 h-3', color: 'bg-[#f01eff]/40', y: [-20, 20, -20], opacity: [0.4, 0.8, 0.4], duration: 6
        }, {
          top: 'top-40 right-20', size: 'w-2 h-2', color: 'bg-[#ec4899]/50', y: [20, -20, 20], opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1], duration: 4, delay: 1
        }, {
          top: 'bottom-40 left-20', size: 'w-4 h-4', color: 'bg-[#f01eff]/30', y: [-15, 15, -15], x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3], duration: 5, delay: 2
        }, {
          top: 'top-60 left-1/3', size: 'w-3 h-3', color: 'bg-[#f755d7]/40', y: [15, -15, 15], opacity: [0.4, 0.7, 0.4], duration: 7, delay: 3
        }].map((p, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${p.top} ${p.size} ${p.color} rounded-full`}
            animate={prefersReducedMotion ? {} : { y: p.y, x: p.x || 0, opacity: p.opacity, scale: p.scale || 1 }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay || 0 }}
          />
        ))}

        {/** Large gradient orbs **/}
        {[{
          position: '-top-40 -right-40', size: 'w-96 h-96', gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10', duration: 8
        }, {
          position: '-bottom-40 -left-40', size: 'w-96 h-96', gradient: 'bg-gradient-to-tr from-accent/10 to-primary/10', duration: 10, delay: 2
        }].map((orb, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${orb.position} ${orb.size} ${orb.gradient} rounded-full blur-3xl`}
            animate={prefersReducedMotion ? {} : { scale: [1, idx === 0 ? 1.2 : 1.3, 1], opacity: [0.3, idx === 0 ? 0.5 : 0.6, 0.3] }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut', delay: orb.delay || 0 }}
          />
        ))}

        {/** Animated lines **/}
        <motion.div
          className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={prefersReducedMotion ? {} : { scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-secondary/30 to-transparent"
          animate={prefersReducedMotion ? {} : { scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Main content - Centered Layout */}
      <div className="z-10 max-w-5xl mx-auto container-padding pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-12 lg:pb-28">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="flex flex-col items-center gap-6"
            variants={staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? false : "visible"}
          >
            <motion.div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-[#ec4899]/30 backdrop-blur-md mb-2" variants={staggerItem}>
              <div className="w-2 h-2 rounded-full bg-[#f01eff] animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-white/90 uppercase">AI Business Solutions</span>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl" variants={staggerItem}>
              Your Trusted <span className="text-[#ff0ea3]">AI Partner</span> for Business Growth
            </motion.h1>

            <motion.p className="body-large text-white/80 max-w-3xl leading-relaxed" variants={staggerItem}>
              We build custom AI solutions that streamline operations, maximize revenue, and provide your business with a sustainable competitive advantage.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto" variants={staggerItem}>
              <ButtonWrapper href="https://calendar.app.google/F63aBoA5vxJdtihj7" icon={<FileText />} text="Book Appointment" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ButtonWrapper = ({ href, icon, text, outline }: { href: string; icon?: React.ReactNode; text: string; outline?: boolean }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }} whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}>
      <Button
        asChild
        variant={outline ? 'outline' : 'primary'}
        className={`w-full sm:w-auto group touch-button transition-colors duration-300 ${
          outline 
            ? 'border-[#ff0ea3]/40 hover:border-[#ff0ea3] text-white hover:bg-[#ff0ea3]/10' 
            : 'bg-[#ff0ea3] hover:bg-[#e60c92] text-white border-none'
        }`}
      >
        <a href={href} target={outline ? '_self' : '_blank'} rel="noopener noreferrer" aria-label={text}>
          {icon && <span className="mr-2">{icon}</span>}
          <span className="mobile-text">{text}</span>
        </a>
      </Button>
    </motion.div>
  );
};

export default Hero;
