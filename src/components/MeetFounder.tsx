import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Facebook, Instagram, Cpu, Award } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useAnimations';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

const MeetFounder = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="founder" className="py-16 sm:py-24 scroll-mt-20 relative overflow-hidden" style={{ background: C.black }}>
      
      {/* Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: C.la(0.04) }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? false : "visible"}
          viewport={{ once: true }}
        >
          <span 
            className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-4 inline-block"
            style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
          >
            LEADERSHIP & VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-base text-white/60 font-normal tracking-wide max-w-2xl mx-auto leading-relaxed">
            Architecting intelligent systems and driving technical direction for Velnix Solutions.
          </p>
        </motion.div>

        {/* Founder Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? false : "visible"}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image Column */}
          <motion.div
            className="relative order-2 lg:order-1 flex justify-center items-end group"
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-md mx-auto flex justify-center items-end">
              
              {/* Backdrop Frame */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] h-[85%] -z-10 rounded-t-3xl overflow-hidden transition-all duration-500"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.1)}`,
                  borderBottom: 'none',
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${C.lime}, transparent)` }} />
              </div>

              {/* Floating Badge 1 - AI Architect */}
              <motion.div 
                className="absolute top-[12%] -left-2 sm:-left-6 bg-[#111111] border border-white/10 rounded-none p-3.5 shadow-2xl flex items-center gap-3 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: C.la(0.1), border: `1px solid ${C.la(0.25)}` }}>
                  <Cpu size={20} color={C.lime} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold tracking-wide">AI Architect</div>
                  <div className="text-white/50 text-[10px] uppercase font-semibold">Technical Lead</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Experience */}
              <motion.div 
                className="absolute bottom-[22%] -right-2 sm:-right-6 bg-[#111111] border border-white/10 rounded-none p-3.5 shadow-2xl items-center gap-3 z-20 hidden sm:flex"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: C.la(0.1), border: `1px solid ${C.la(0.25)}` }}>
                  <Award size={20} color={C.lime} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold tracking-wide">5+ Years</div>
                  <div className="text-white/50 text-[10px] uppercase font-semibold">System Design</div>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] mx-auto px-4 flex items-end justify-center">
                <img
                  src="/image/sureshbeekhani.png"
                  alt="Suresh Beekhani - Founder of Velnix Solutions"
                  className="w-full h-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div variants={staggerItem} className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Suresh Beekhani
              </h3>
              <p style={{ color: C.lime }} className="font-bold tracking-[0.15em] uppercase text-xs">
                CEO & Lead AI Architect | Velnix Solutions
              </p>
              
              {/* Social Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-3">
                {[
                  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/suresh-beekhani' },
                  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/sureshbeekhani143' },
                  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/sureshbeekhani/' },
                  { name: 'Twitter', icon: Twitter, url: 'https://x.com/SureshBeekhan' },
                ].map((s) => {
                  const IconComp = s.icon;
                  return (
                    <a 
                      key={s.name}
                      href={s.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2.5 transition-all duration-200"
                      style={{
                        background: C.graphite,
                        border: `1px solid ${C.wa(0.1)}`,
                        color: C.wa(0.6),
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = C.lime;
                        e.currentTarget.style.borderColor = C.la(0.4);
                        e.currentTarget.style.background = C.la(0.08);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = C.wa(0.6);
                        e.currentTarget.style.borderColor = C.wa(0.1);
                        e.currentTarget.style.background = C.graphite;
                      }}
                      aria-label={`${s.name} Profile`}
                    >
                      <IconComp size={16} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed" variants={staggerItem}>
              <p>
                Suresh Beekhani founded <strong className="text-white">Velnix Solutions</strong> to bridge the gap between technical AI capability and practical business execution.
              </p>
              <p>
                Specializing in AI architecture, software engineering, and operational automation, he leads the technical strategy behind Velnix's intelligent software systems, helping SMBs streamline operations and scale efficiently.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default MeetFounder;
