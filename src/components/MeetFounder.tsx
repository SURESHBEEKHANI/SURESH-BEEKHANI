import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useReducedMotion } from '@/hooks/useAnimations';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const MeetFounder = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="founder" className="py-24 relative overflow-hidden bg-[#05050A]">
      {/* Subtle dark background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 sm:w-80 sm:h-80 bg-white/5 rounded-full blur-3xl opacity-[0.18]" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 sm:w-80 sm:h-80 bg-white/5 rounded-full blur-3xl opacity-[0.14]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? false : "visible"}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f01eff]" />
            <h2 className="text-[#f01eff] font-bold tracking-[0.3em] uppercase text-[10px]">Leadership</h2>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f01eff]" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f01eff] via-[#f755d7] to-[#ec4899]">Founder</span>
          </h3>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#f01eff] via-[#f755d7] to-[#ec4899] mx-auto rounded-full opacity-50" />
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
            className="relative order-2 lg:order-1"
            variants={fadeInUp}
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
              />
              <img 
                src="/image/sureshbeekhani.png" 
                alt="Suresh Beekhani - Founder of Velnix Solutions" 
                className="w-full h-full object-cover transition-all duration-1000 scale-[1.05] group-hover:scale-100 brightness-[1.08] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700" />
            </div>
            
            {/* Floating accent orb */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 blur-3xl rounded-full -z-10 animate-pulse" />
          </motion.div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-10">
            <motion.div variants={staggerItem} className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Suresh <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f01eff] via-[#f755d7] to-[#ec4899]">Beekhani</span>
              </h1>
              <p className="text-[#f01eff] font-bold tracking-widest uppercase text-xs">Founder & CEO, Velnix Solutions | AI Specialist with a CFO Mindset</p>
            </motion.div>

            {/* Expertise Tags in one line */}
            <motion.div className="flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar" variants={staggerItem}>
              {['Machine Learning', 'NLP', 'AI Strategy', 'Product Architecture'].map((tag) => (
                <motion.span 
                  key={tag} 
                  className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest hover:border-[#f01eff]/40 hover:text-white hover:bg-[#f01eff]/5 transition-all cursor-default whitespace-nowrap flex-shrink-0"
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="space-y-6 text-lg md:text-xl text-white/60 leading-relaxed font-light" variants={staggerItem}>
              <p>
                 design intelligent systems that deliver measurable results and reduce costs. At <span className="text-white font-medium">Velnix Solutions</span>, our mission is to transform complex AI technology into actionable business intelligence.
              </p>
              <p>
                With extensive experience in Machine Learning, NLP, AI Strategy, and Product Architecture, I build scalable AI systems and automated workflows that drive growth. I believe AI is more than a tool—it’s a strategic partner that empowers businesses to make smarter, faster decisions in the digital age.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetFounder;
