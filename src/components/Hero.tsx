
import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Particles
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      alpha: number;
    }[] = [];
    
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 + 1;
        const color = `hsla(221, 83%, 53%, ${Math.random() * 0.5})`;
        const vx = (Math.random() - 0.5) * 0.1;
        const vy = (Math.random() - 0.5) * 0.1;
        
        particles.push({
          x,
          y,
          radius,
          color,
          velocity: { x: vx, y: vy },
          alpha: Math.random() * 0.5 + 0.3
        });
      }
    };
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(221, 83%, 53%, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
            <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-xl relative z-10">
              <AvatarImage src="/lovable-uploads/028d2d88-6fe9-45b1-8640-efb0e9339fb5.png" alt="Suresh Beekhani" className="object-cover" />
              <AvatarFallback className="text-4xl">SB</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              Data Scientist & AI/ML Engineer
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              I'm <span className="text-primary">Suresh Beekhani</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">
              A Data Scientist and AI/ML Engineer dedicated to sharing my passion for artificial intelligence and data science. 
              Through engaging tutorials and content, I aim to help learners master Machine Learning, Deep Learning, 
              Natural Language Processing, and Generative AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="https://drive.google.com/drive/folders/1nenB6s7mXNZllsPHh2-74QziMBLU-U6b?usp=drive_link" className="btn-primary inline-flex items-center" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
              <a href="#about" className="group inline-flex items-center justify-center px-6 py-3 rounded-md bg-foreground/5 text-foreground font-medium transition-all duration-300 hover:bg-foreground/10">
                Learn More 
                <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
