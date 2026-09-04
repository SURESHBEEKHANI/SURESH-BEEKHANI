import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Check, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useAnimations';

const STORY_POINTS = [
  'A practical answer to operational complexity',
  'Systems designed around how teams actually work',
  'Intelligence measured by outcomes, not hype',
];

const IMPACT_STATS = [
  { number: '5+', label: 'Years of engineering experience' },
  { number: '23+', label: 'Enterprise and SMB clients' },
  { number: '45+', label: 'Intelligent systems deployed' },
  { number: '95%', label: 'Client satisfaction rate' },
];

const OriginStory = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden border-y border-white/10 bg-[#111111] pb-0 pt-20 text-white sm:pb-0 sm:pt-28 lg:pb-0 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(182,255,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,0,0.035) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(to bottom, black, transparent 82%)' }} />
      <div className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#7DCC00]/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#B6FF00]">
            <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
            The Origin Story
          </div>
          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Built from a simple belief: <span className="text-[#B6FF00]">technology should create capacity.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
            Velnix Solutions began at the intersection of ambitious businesses and the operational weight holding them back. We saw teams spending their best hours moving data between tools, repeating decisions, and managing work software should have handled.
          </p>
          <p className="mt-5 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
            So we built a different kind of AI partner: close to the business, rigorous about engineering, and focused on systems that make people faster without making their work feel less human.
          </p>
          <Link to="/about" className="group mt-9 inline-flex items-center gap-2 rounded-full border border-[#B6FF00]/40 px-5 py-3 text-sm font-bold text-[#B6FF00] transition-colors hover:bg-[#B6FF00] hover:text-[#050505]">
            Meet Velnix
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-[#B6FF00]/15" aria-hidden="true" />
          <div className="relative border border-white/10 bg-[#050505] p-7 sm:p-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white/55">
                <BrainCircuit size={20} className="text-[#B6FF00]" aria-hidden="true" />
                Our point of view
              </div>
              <Quote size={28} className="text-[#B6FF00]/40" aria-hidden="true" />
            </div>
            <blockquote className="mt-8 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
              “The best AI system is the one that makes the right work feel easier.”
            </blockquote>
            <ul className="mt-10 space-y-5 border-t border-white/10 pt-7">
              {STORY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-white/60 sm:text-base">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B6FF00]/10 text-[#B6FF00]">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6 text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              <span className="h-2 w-2 rounded-full bg-[#B6FF00] shadow-[0_0_12px_#B6FF00]" aria-hidden="true" />
              From complexity to capability
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 w-full border-y border-[#050505]/20 bg-[#B6FF00] px-6 py-10 text-[#050505] sm:mt-20 sm:px-10 sm:py-12 lg:mt-24 lg:px-16"
      >
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {IMPACT_STATS.map(({ number, label }) => (
            <div key={label} className="relative px-3 text-center sm:px-5">
              <div className="text-4xl font-extrabold leading-none tracking-[-0.04em] text-[#050505] sm:text-5xl">{number.replace('+', '')}<span className="text-[#050505]">{number.includes('+') ? '+' : ''}</span></div>
              <p className="mx-auto mt-4 max-w-[12ch] text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[#050505]/65 sm:max-w-[15ch] sm:text-[0.68rem]">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OriginStory;