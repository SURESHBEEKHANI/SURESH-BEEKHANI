import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useAnimations';

const MeetFounder = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="founder" className="relative overflow-hidden border-b border-white/10 bg-[#050505] py-20 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(182,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,0,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(to bottom, transparent, black 24%, transparent 95%)' }} />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-5 border border-[#B6FF00]/25" aria-hidden="true" />
          <div className="relative overflow-hidden border border-white/10 bg-[#111111] px-8 pt-8">
            <div className="mb-4 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
              <BrainCircuit size={14} aria-hidden="true" />
              Technical leadership
            </div>
            <img src="/image/sureshbeekhani.png" alt="Suresh Beekhani, Founder and Lead AI Architect" className="relative z-10 mx-auto block w-full max-w-[280px] object-contain object-bottom" loading="lazy" />
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Strategy is stronger when it is grounded in <span className="text-[#B6FF00]">engineering.</span>
          </h2>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-white/45">CEO & Co-founder-Velnix Solutions</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Suresh founded Velnix Solutions to close the gap between what AI can do and what businesses can actually use. He leads every engagement with a practical question: which system will create the most meaningful capacity next?
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            That means clear decisions, disciplined architecture, and software that earns its place in the workflow.
          </p>
          <Link to="/contact" className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#050505] transition-transform hover:-translate-y-0.5">
            Start a conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetFounder;