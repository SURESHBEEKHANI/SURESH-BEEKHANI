import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, ExternalLink, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { useReducedMotion } from '@/hooks/useAnimations';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const MeetFounder = () => {
  const prefersReducedMotion = useReducedMotion();

  const animStyles = `
    @keyframes ringColor1 {
      0%, 100% { border-color: rgba(182,255,0,0.8);  box-shadow: 0 0 30px rgba(182,255,0,0.5); }
      50%       { border-color: rgba(255,255,255,0.6); box-shadow: 0 0 40px rgba(255,255,255,0.3); }
    }
    @keyframes ringColor2 {
      0%, 100% { border-color: rgba(255,255,255,0.6); box-shadow: 0 0 25px rgba(255,255,255,0.3); }
      50%       { border-color: rgba(182,255,0,0.8);  box-shadow: 0 0 35px rgba(182,255,0,0.4); }
    }
    @keyframes glowCycle {
      0%, 100% { background-color: rgba(182,255,0,0.3); }
      50%       { background-color: rgba(255,255,255,0.15); }
    }
    @keyframes cornerGlow {
      0%, 100% { border-color: rgba(182,255,0,1); box-shadow: inset 0 0 10px rgba(182,255,0,0.5); }
      50%       { border-color: rgba(255,255,255,0.8); box-shadow: inset 0 0 10px rgba(255,255,255,0.3); }
    }
    @keyframes orbCycle {
      0%, 100% { background-color: rgba(182,255,0,0.25); }
      50%       { background-color: rgba(255,255,255,0.1); }
    }
    .ring-anim-1 { animation: ringColor1 4s ease-in-out infinite; }
    .ring-anim-2 { animation: ringColor2 4s ease-in-out infinite 1s; }
    .glow-anim   { animation: glowCycle  4s ease-in-out infinite 0.5s; }
    .corner-anim { animation: cornerGlow 4s ease-in-out infinite 1.5s; }
    .orb-anim    { animation: orbCycle   4s ease-in-out infinite 0.2s; }
    .perspective-3d { perspective: 1000px; }
    .transform-3d { transform-style: preserve-3d; }
  `;

  return (
    <section id="founder" className="py-12 sm:py-16 md:py-20 ai-section scroll-mt-20">
      <style>{animStyles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          variants={fadeInUp}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? false : "visible"}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-medium tracking-wide max-w-3xl mx-auto leading-[1.7]">
            The visionary strategies driving our enterprise.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? false : "visible"}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image Column */}
          <motion.div
            className="relative order-2 lg:order-1 flex justify-center items-end pt-12 lg:pt-0 group perspective-3d"
            variants={fadeInUp}
          >
            <div className="relative w-full flex justify-center items-end transform-3d transition-transform duration-700 ease-out group-hover:rotate-y-6 group-hover:-rotate-x-2">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 transform-3d translate-z-[-20px]">
                <div className="ring-anim-1 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-[#B6FF00]/50 transition-all duration-700" />
              </div>
              {/* Second inner ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 transform-3d translate-z-[-10px]">
                <div className="ring-anim-2 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border-2 border-white/40" />
              </div>

              {/* Dot grid pattern */}
              <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 transform-3d translate-z-[-30px]"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(182,255,0,0.4) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)',
                }}
              />

              {/* Radial glow base */}
              <div className="glow-anim absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] blur-[60px] rounded-full -z-10" />

              {/* Corner accent top-right */}
              <div className="corner-anim absolute top-[12%] right-[12%] w-8 h-8 border-t-2 border-r-2 rounded-tr-lg -z-10 shadow-[0_0_15px_rgba(182,255,0,0.6)]" />
              {/* Corner accent bottom-left */}
              <div className="absolute bottom-[12%] left-[12%] w-8 h-8 border-b-2 border-l-2 border-[#B6FF00]/60 rounded-bl-lg -z-10 shadow-[0_0_15px_rgba(182,255,0,0.6)]" />

              {/* High-Definition 3D Glass Shape behind the person */}
              <div className="absolute top-[25%] bottom-0 left-[10%] right-[10%] sm:left-[15%] sm:right-[15%] md:left-[20%] md:right-[20%] bg-gradient-to-br from-[#050729]/80 via-black/40 to-[#B6FF00]/20 rounded-[2rem] transform -skew-x-[10deg] -z-10 shadow-[0_30px_60px_rgba(182,255,0,0.15)] ring-1 ring-inset ring-[#B6FF00]/30 backdrop-blur-3xl transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(182,255,0,0.3)] group-hover:-translate-y-2 translate-z-[-5px]">
                {/* 3D Glass Highlights */}
                <div className="absolute inset-0 rounded-[2rem] border-t border-l border-white/20 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Main Image Container with 3D Pop */}
              <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] mx-auto px-4 flex items-end justify-center transform-3d translate-z-[30px]">
                <img
                  src="/image/sureshbeekhani.png"
                  alt="Suresh Beekhani - Founder of Velnix Solutions"
                  className="w-full h-auto object-contain object-bottom transition-all duration-700 ease-out group-hover:scale-[1.05] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_30px_60px_rgba(182,255,0,0.3)]"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>

              {/* Floating accent orb */}
              <div className="orb-anim absolute top-[20%] -left-10 w-64 h-64 blur-[80px] rounded-full -z-20 mix-blend-screen pointer-events-none transform-3d translate-z-[-40px]" />
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-10">
            <motion.div variants={staggerItem} className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tighter drop-shadow-sm">
                Suresh Beekhani
              </h1>
              <p className="text-white/80 font-semibold tracking-[0.2em] uppercase text-[11px]">CEO, Velnix Solutions | AI & ML Engineer</p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="https://www.linkedin.com/in/suresh-beekhani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white/50 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 ease-out hover:shadow-[0_4px_20px_rgba(0,119,181,0.4)] group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a 
                  href="https://www.facebook.com/sureshbeekhani143" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white/50 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] transition-all duration-300 ease-out hover:shadow-[0_4px_20px_rgba(24,119,242,0.4)] group"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a 
                  href="https://www.instagram.com/sureshbeekhani/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white/50 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 ease-out hover:shadow-[0_4px_20px_rgba(225,48,108,0.4)] group"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a 
                  href="https://x.com/SureshBeekhan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white/50 hover:text-black hover:bg-white hover:border-white transition-all duration-300 ease-out hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] group"
                  aria-label="X (Twitter) Profile"
                >
                  <Twitter className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </motion.div>



            <motion.div className="space-y-4 text-base md:text-lg text-white/75 leading-relaxed font-normal tracking-wide" variants={staggerItem}>
              <p>
                Suresh Beekhani leads <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(182,255,0,0.4)]">Velnix Solutions</span> to deliver practical, scalable AI solutions.
              </p>
              <p>
                With expertise in AI, ML, and Product Architecture, he builds intelligent systems that automate operations and drive business growth, making advanced AI accessible to organizations worldwide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetFounder;
