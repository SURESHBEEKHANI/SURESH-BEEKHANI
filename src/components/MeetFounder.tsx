import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useReducedMotion } from '@/hooks/useAnimations';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const MeetFounder = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="founder" className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section relative overflow-hidden scroll-mt-20">
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-purple/5 to-ai-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-left mb-12 sm:mb-20"
          variants={fadeInUp}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? false : "visible"}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
              style={{
                background: '#ff0ea3',
                transform: 'skewX(-15deg)'
              }}
            ></div>
            <h2 className="heading-2 text-white leading-tight">
              Leadership: Meet Our <span style={{ color: '#ff0ea3' }}>Founder</span>
            </h2>
          </div>
          <p className="body-large text-white/50 max-w-3xl">
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
            className="relative order-2 lg:order-1 flex justify-center items-end pt-12 lg:pt-0"
            variants={fadeInUp}
          >
            {/* The Pink/Purple skewed shape behind the person */}
            <div className="absolute top-[25%] bottom-0 left-[10%] right-[10%] sm:left-[15%] sm:right-[15%] md:left-[20%] md:right-[20%] bg-gradient-to-br from-[#c059f0] to-[#ff0ea3] rounded-[2rem] transform -skew-x-[15deg] -z-10 shadow-[0_0_50px_rgba(255,14,163,0.3)]"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] mx-auto px-4 flex items-end justify-center">
              <img 
                src="/image/sureshbeekhani.png" 
                alt="Suresh Beekhani - Founder of Velnix Solutions" 
                className="w-full h-auto object-contain object-bottom transition-transform duration-700 hover:scale-[1.02] filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] brightness-110 contrast-105"
              />
            </div>
            
            {/* Floating accent orb */}
            <div className="absolute top-[20%] -left-10 w-40 h-40 bg-[#ff0ea3]/15 blur-3xl rounded-full -z-20 animate-pulse" />
          </motion.div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-10">
            <motion.div variants={staggerItem} className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Suresh <span className="text-[#ff0ea3]">Beekhani</span>
              </h1>
              <p className="text-[#ff0ea3] font-bold tracking-widest uppercase text-xs">Founder & CEO, Velnix Solutions | AI Specialist with a CFO Mindset</p>
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
