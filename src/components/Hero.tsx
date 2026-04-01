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
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden section-padding bg-[#0a0435] text-white pt-20"
      aria-label="Hero Section"
    >
      {/* Ambient Blurs and Texture (Synced with Privacy Policy/Footer style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse" />





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
      <div className="z-10 max-w-5xl mx-auto container-padding pt-24 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32">
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

            <motion.h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl" variants={staggerItem}>
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
        className={`w-full sm:w-auto group touch-button transition-colors duration-300 ${outline
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
