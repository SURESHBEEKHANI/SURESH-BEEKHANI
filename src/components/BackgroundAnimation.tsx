
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Gradient animation setup
    const gradientElement = document.getElementById('gradient-background');
    if (!gradientElement) return;

    // More vibrant colors for the gradient animation
    const colors = [
      { r: 41, g: 128, b: 240 },    // Blue
      { r: 138, g: 76, b: 210 },    // Purple
      { r: 225, g: 73, b: 152 },    // Pink
      { r: 255, g: 102, b: 102 },   // Coral
      { r: 255, g: 159, b: 64 },    // Orange
      { r: 241, g: 196, b: 15 },    // Yellow
      { r: 46, g: 204, b: 113 },    // Green
      { r: 52, g: 152, b: 219 },    // Light Blue
      { r: 41, g: 128, b: 240 }     // Back to Blue for smooth loop
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
      
      // Update the gradient with more dramatic angle and opacity
      gradientElement.style.background = `linear-gradient(135deg, rgba(${r},${g},${b},0.3) 0%, rgba(${b},${r},${g},0.15) 100%)`;
      
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
    
    // Particles settings - more particles and more colorful
    const particleCount = isMobile ? 40 : 80;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    
    // Track mouse movement for interactivity
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      // Reset the mouse movement flag after some time
      setTimeout(() => {
        isMouseMoving = false;
      }, 2000);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Enhanced particles with more variety
    const particles: {
      x: number;
      y: number;
      size: number;
      color: string;
      velocity: { x: number; y: number };
      opacity: number;
      rotationSpeed: number;
      rotation: number;
      shape: 'circle' | 'square' | 'triangle';
    }[] = [];
    
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * (isMobile ? 2 : 3) + (isMobile ? 0.5 : 1);
        
        // Create a wider range of colors
        const hue = Math.floor(Math.random() * 360); // Full color spectrum
        const saturation = 70 + Math.floor(Math.random() * 30); // 70-100%
        const lightness = 50 + Math.floor(Math.random() * 30); // 50-80%
        const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.6 + 0.2})`;
        
        const vx = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
        const vy = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
        
        // Randomly select a shape
        const shapes = ['circle', 'square', 'triangle'] as const;
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        particles.push({
          x,
          y,
          size,
          color,
          velocity: { x: vx, y: vy },
          opacity: Math.random() * 0.5 + 0.3,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          rotation: Math.random() * Math.PI * 2,
          shape
        });
      }
    };
    
    createParticles();
    
    // Draw different shapes based on particle.shape
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: typeof particles[0]) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      ctx.fillStyle = particle.color;
      
      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'square':
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          break;
          
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles with mouse interaction
      particles.forEach((particle) => {
        // Basic movement
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // Particles move slightly away from mouse
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (150 - distance) / 150;
            
            particle.velocity.x -= forceDirectionX * force * 0.03;
            particle.velocity.y -= forceDirectionY * force * 0.03;
          }
        }
        
        // Rotation update
        particle.rotation += particle.rotationSpeed;
        
        // Boundary check with wrap-around
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        
        // Draw particle with its shape
        drawParticle(ctx, particle);
      });
      
      // Draw connections between nearby particles
      const connectionDistance = isMobile ? 100 : 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Extract hue from each particle color for the connection color
            const hue1 = particles[i].color.match(/hsla\((\d+)/)?.[1] || '200';
            const hue2 = particles[j].color.match(/hsla\((\d+)/)?.[1] || '240';
            
            // Average the hues for connection color
            const avgHue = (parseInt(hue1) + parseInt(hue2)) / 2;
            
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${avgHue}, 70%, 60%, ${0.15 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.6;
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        id="gradient-background" 
        className="absolute inset-0 transition-colors duration-1000 ease-in-out"
        style={{ 
          background: 'linear-gradient(135deg, rgba(41,128,240,0.3) 0%, rgba(240,41,128,0.15) 100%)'
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
