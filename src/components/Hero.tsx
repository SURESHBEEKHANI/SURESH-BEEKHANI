import { useEffect, useState, useRef } from 'react';
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
      {/* Modern Abstract Animated Background - Neural Network / AI Inspired */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#0a0435]">
        {/* Underlying Matte Gradients */}
        <div className="absolute top-0 -left-1/4 w-[70vw] h-[70vh] bg-gradient-to-br from-[#6a00ff]/15 to-transparent blur-[150px] opacity-70" />
        <div className="absolute bottom-0 -right-1/4 w-[70vw] h-[70vh] bg-gradient-to-tl from-[#3b82f6]/15 to-transparent blur-[150px] opacity-70" />

        {/* Neural Network Canvas */}
        <NeuralNetworkCanvas />

        {/* Matte Overlay & Grain for non-reflective finish */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />

        {/* Darkening Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0435]/60 via-transparent to-[#0a0435]/80" />






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

      {/* Services Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-white/5 border-t border-white/10 backdrop-blur-sm shadow-2xl z-20">
        <div className="max-w-[1700px] mx-auto px-4 overflow-hidden relative">
          {/* Subtle Side Glows */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0435] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0435] to-transparent z-10" />

          <motion.div
            className="flex whitespace-nowrap gap-12 items-center"
            animate={prefersReducedMotion ? {} : { x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {[...SERVICES_TICKER, ...SERVICES_TICKER].map((service, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="text-sm font-semibold tracking-wider text-white/70 uppercase hover:text-[#ff0ea3] transition-colors cursor-default">
                  {service}
                </span>
                <div className="h-4 w-px bg-white/20" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SERVICES_TICKER = [
  'AI Development',
  'Chatbot Development',
  'ChatGPT Integration',
  'Machine & Deep Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Predictive Modeling',
  'AI Automation',
  'Web Development',
  'App Development',
  'DevOps Engineering',
  'Custom Software Development'
];

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2.5 + 2;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        const rand = Math.random();
        this.color = rand > 0.6 ? '#ff0492ff' : rand > 0.3 ? '#ff0e7eff' : '#ff0ea3ff';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            this.x += dx * 0.01;
            this.y += dy * 0.01;
          }
        }
      }

      draw() {
        ctx!.beginPath();
        const pulse = Math.sin(Date.now() * 0.002 + this.x) * 0.5 + 1;

        // Draw main solid core
        ctx!.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = 0.9; // Solid presence
        ctx!.fill();

        // Add a secondary soft glow for "clear visibility" as requested
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * pulse * 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = 0.15; // Soft surrounding aura
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const density = Math.floor((canvas.width * canvas.height) / 6000); // Improved density for clear coverage
      const particleCount = density + 40; // Reliable baseline for professional coverage
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 300) { // Massive 300px connection radius for total web coverage
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1.5; // Bold line weight
            ctx.globalAlpha = (1 - dist / 300) * 0.9; // Smooth fade over the wider distance
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
      style={{ filter: 'blur(0.5px)' }}
    />
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
