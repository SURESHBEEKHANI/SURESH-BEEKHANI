import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useAnimations';

export const IMPACT_STATS = [
  { number: '5+', label: 'Years of engineering experience' },
  { number: '23+', label: 'Enterprise and SMBs clients' },
  { number: '45+', label: 'Intelligent systems deployed' },
  { number: '95%', label: 'Client satisfaction rate' },
];

const OriginStory = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden border-y border-white/10 bg-[#111111] pb-0 pt-16 font-display text-white sm:pb-0 sm:pt-20 lg:pb-0 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(182,255,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,0,0.035) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(to bottom, black, transparent 82%)' }} />
      <div className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#7DCC00]/10 blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pt-4"
        >
          <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
            <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
            The Origin Story
          </div>
          <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:max-w-none">
            <span className="block">Built from a simple belief</span>
            <span className="block text-[#B6FF00]">technology should create capacity.</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-8 text-white/55 sm:text-xl">
            Velnix Solutions began at the intersection of ambitious businesses and the operational weight holding them back. We saw teams spending their best hours moving data between tools, repeating decisions, and managing work software should have handled.
          </p>
          <p className="mt-5 max-w-lg text-lg leading-8 text-white/55 sm:text-xl">
            So we built a different kind of AI partner: close to the business, rigorous about engineering, and focused on systems that make people faster without making their work feel less human.
          </p>
          <Link to="/about" className="group mt-9 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#B6FF00] bg-[#B6FF00] px-6 py-4 text-sm font-bold text-[#050505] transition-colors hover:bg-transparent hover:text-[#B6FF00]">
            Meet Velnix
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/10] bg-cover bg-[center_60%] bg-no-repeat lg:mt-16"
          style={{ backgroundImage: "url('/image/Hero-section-image/The Origin Story.avif')" }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
          aria-label="The Origin Story"
          role="img"
        >
        </motion.div>
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 w-full border-y border-[#050505]/20 bg-[#B6FF00] text-[#050505] sm:mt-20 sm:py-12 lg:mt-24"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {IMPACT_STATS.map(({ number, label }) => (
            <div key={label} className="relative px-3 text-center sm:px-5">
              <div className="text-4xl font-black leading-none tracking-[-0.04em] text-[#050505] sm:text-5xl">{number.replace('+', '')}<span className="text-[#050505]">{number.includes('+') ? '+' : ''}</span></div>
              <p className="mx-auto mt-4 max-w-[12ch] text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#050505]/65 sm:max-w-[15ch]">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OriginStory;