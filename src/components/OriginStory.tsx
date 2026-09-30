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

const PLATFORMS = ['PASHA', 'Clutch', 'GoodFirms', 'SoftwareWorld', 'P@SHA ICT Awards'] as const;
const PRACTICES = ['AI Development', 'Custom Software', 'Automation', 'Data Science'] as const;

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
          className="relative flex items-center justify-center rounded-2xl bg-[#050505] border border-white/10 p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.6)] group overflow-hidden lg:mt-4"
        >
          {/* Ambient subtle glow behind image */}
          <div
            className="absolute inset-0 bg-radial from-[#B6FF00]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            aria-hidden="true"
          />
          <img
            src="/image/Hero-section-image/The Origin Story.avif"
            alt="The Origin Story"
            className="relative z-10 w-full max-h-[440px] object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>

      <IndustryProof prefersReducedMotion={prefersReducedMotion} />
    </section>
  );
};

const IndustryProof = ({ prefersReducedMotion }: { prefersReducedMotion: boolean }) => {
  return (
    <div className="relative mt-16 border-t border-white/10 sm:mt-20 lg:mt-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.35)_0%,transparent_42%)]" aria-hidden="true" />

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      >
        <div className="mb-6 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
          <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
          Industry Platforms
          <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
          Recognized across leading industry platforms.
        </h3>

        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {PLATFORMS.map((platform) => (
            <li
              key={platform}
              className="flex min-h-16 items-center justify-center rounded-xl border border-white/10 bg-[#050505]/55 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/72 sm:min-h-[4.5rem] sm:text-xs"
            >
              {platform}
            </li>
          ))}
        </ul>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 sm:text-xs">
          {PRACTICES.map((practice, index) => (
            <span key={practice} className="inline-flex items-center gap-3">
              {index > 0 && <span className="text-[#B6FF00]" aria-hidden="true">·</span>}
              {practice}
            </span>
          ))}
        </p>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs">
          Trusted technology partner <span className="mx-2 text-[#B6FF00]">·</span> Global delivery <span className="mx-2 text-[#B6FF00]">·</span> Enterprise-ready engineering
        </p>
      </motion.div>

      <ImpactStatsBanner flush />
    </div>
  );
};

export const ImpactStatsBanner = ({ flush = false }: { flush?: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={flush ? 'relative w-full bg-[#B6FF00]' : 'relative mt-16 w-full bg-[#B6FF00] sm:mt-20 lg:mt-24'}
      aria-label="Company impact statistics"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#050505]/15 sm:grid-cols-4">
        {IMPACT_STATS.map(({ number, label }) => (
          <div key={label} className="bg-[#B6FF00] px-5 py-8 text-center sm:px-6 sm:py-10">
            <p className="text-4xl font-black leading-none tracking-[-0.06em] text-[#050505] sm:text-5xl">
              {number}
            </p>
            <p className="mx-auto mt-3 max-w-[16ch] text-[0.62rem] font-bold uppercase leading-5 tracking-[0.16em] text-[#050505]/68 sm:text-[0.7rem]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OriginStory;