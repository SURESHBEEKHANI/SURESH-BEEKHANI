import { useRef } from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// ======================= HERO =========================
const Hero = () => {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#04021a] text-white"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">

        {/* Radial Spotlight */}
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#FF4FA3]/20 blur-[180px]"
        />

        {/* Gradient Glow Layers */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vh] bg-[#6a00ff]/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vh] bg-[#3b82f6]/20 blur-[140px]" />

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
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight font-space">
            Your  {" "}
            <span className="block sm:inline text-[#FF4FA3]">
              Trusted
            </span>{" "}
            AI Development Agency
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-3xl leading-relaxed font-light tracking-wide">
            We empower healthcare organizations with AI to automate operations, improve efficiency, and drive better outcomes.

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
        className="px-8 py-4 text-lg rounded-none text-black hover:text-black border border-black/10 shadow-[0_0_40px_rgba(182,255,0,0.4)] hover:shadow-[0_0_70px_rgba(182,255,0,0.8)] transition-all duration-300"
        style={{ background: '#B6FF00' }}
      >
        <a href="https://calendar.app.google/F63aBoA5vxJdtihj7" target="_blank" className="text-black hover:text-black">
          <FileText className="mr-2 text-black" />
          Schedule an Appointment
        </a>
      </Button>
    </div>
  );
};

