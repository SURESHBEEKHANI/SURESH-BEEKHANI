import { useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';

// ======================= HERO =========================
const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
    mouseY.set((e.clientY - window.innerHeight / 2) * 0.02);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#04021a] text-white"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">

        {/* Radial Spotlight */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#ff0ea3]/20 blur-[180px]"
        />

        {/* Gradient Glow Layers */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vh] bg-[#6a00ff]/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vh] bg-[#3b82f6]/20 blur-[140px]" />

        {/* Neural Network Particles */}
        <NeuralNetworkCanvas />

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex px-5 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white/60">
              AI Business Architect
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight font-space">
            Your Trusted{" "}
            <span className="block sm:inline bg-gradient-to-r from-[#ff0ea3] via-[#ff6ec7] to-[#ff0ea3] bg-[length:200%] animate-gradient-x bg-clip-text text-transparent">
              AI Partner
            </span>{" "}
            for Growth
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-3xl leading-relaxed font-light tracking-wide">
            We engineer high-performance AI solutions that accelerate growth, 
            optimize workflows, and solve complex business challenges through 
            cutting-edge neural architectures.
          </p>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <MagneticButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// ======================= MAGNETIC BUTTON =========================
const MagneticButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current!.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current!.style.transform = `translate(0px,0px)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="transition-transform duration-200"
    >
      <Button
        asChild
        className="px-8 py-4 text-lg rounded-xl bg-gradient-to-r from-[#ff0ea3] to-[#ff4dc4] shadow-[0_0_40px_rgba(255,14,163,0.7)] hover:shadow-[0_0_70px_rgba(255,14,163,1)]"
      >
        <a href="https://calendar.app.google/F63aBoA5vxJdtihj7" target="_blank">
          <FileText className="mr-2" />
          Book Appointment
        </a>
      </Button>
    </div>
  );
};

// ======================= NEURAL NETWORK PARTICLES =========================
const NeuralNetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    let particles: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      vx = (Math.random() - 0.5) * 0.6;
      vy = (Math.random() - 0.5) * 0.6;
      size = Math.random() * 1.5 + 1.5;

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0ea3';
        ctx.globalAlpha = 0.9;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.globalAlpha = 0.15;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 120; i++) {
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
          if (dist < 200) {
            ctx.beginPath();
            ctx.strokeStyle = '#ff0ea3';
            ctx.globalAlpha = 1 - dist / 200;
            ctx.lineWidth = 1.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />;
};