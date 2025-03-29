
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Gradient animation setup
    const gradientElement = document.getElementById('gradient-background');
    if (!gradientElement) return;

    // Different colors for the gradient animation
    const colors = [
      { r: 41, g: 128, b: 240 }, // Blue
      { r: 109, g: 90, b: 217 }, // Purple
      { r: 138, g: 76, b: 210 }, // Indigo
      { r: 182, g: 73, b: 195 }, // Pink
      { r: 41, g: 128, b: 240 }, // Back to Blue for smooth loop
    ];
    
    let step = 0;
    const colorCount = colors.length;
    
    const updateGradient = () => {
      if (!gradientElement) return;

      // Calculate current and next color indices
      const colorIndex = Math.floor(step);
      const nextColorIndex = (colorIndex + 1) % colorCount;
      
      // Calculate interpolation value between current and next color
      const percent = step - colorIndex;
      
      // Interpolate between colors
      const currentColor = colors[colorIndex];
      const nextColor = colors[nextColorIndex];
      
      const r = Math.round(currentColor.r + (nextColor.r - currentColor.r) * percent);
      const g = Math.round(currentColor.g + (nextColor.g - currentColor.g) * percent);
      const b = Math.round(currentColor.b + (nextColor.b - currentColor.b) * percent);
      
      // Update the gradient
      gradientElement.style.background = `linear-gradient(45deg, rgba(${r},${g},${b},0.2) 0%, rgba(${b},${r},${g},0.1) 100%)`;
      
      // Increment step with slow transition
      step += 0.002;
      if (step >= colorCount) step = 0;
      
      requestAnimationFrame(updateGradient);
    };
    
    updateGradient();
    
    // Particles animation setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match window
    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Fewer particles on mobile for better performance
    const particleCount = isMobile ? 30 : 60;
    
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
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * (isMobile ? 1.5 : 2) + (isMobile ? 0.5 : 1);
        
        // Use different colors for particles
        const hue = Math.floor(Math.random() * 60) + 200; // Blue to purple range
        const color = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.5 + 0.2})`;
        
        const vx = (Math.random() - 0.5) * (isMobile ? 0.08 : 0.15);
        const vy = (Math.random() - 0.5) * (isMobile ? 0.08 : 0.15);
        
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
        
        // Boundary check with wrap-around
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections (fewer on mobile)
      const connectionDistance = isMobile ? 100 : 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(92, 145, 229, ${0.15 * (1 - distance / connectionDistance)})`;
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
  }, [isMobile]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        id="gradient-background" 
        className="absolute inset-0 transition-colors duration-1000 ease-in-out"
        style={{ 
          background: 'linear-gradient(45deg, rgba(41,128,240,0.2) 0%, rgba(240,41,128,0.1) 100%)'
        }}
      ></div>
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
      />
    </div>
  );
};

export default BackgroundAnimation;
