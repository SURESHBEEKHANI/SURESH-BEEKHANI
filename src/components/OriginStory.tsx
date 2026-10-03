import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Award, BadgeCheck, PanelsTopLeft, ShieldCheck, Star, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion, useScrollAnimation } from '@/hooks/useAnimations';

export const IMPACT_STATS = [
  { number: '7+', label: 'Years of engineering experience' },
  { number: '50+', label: 'Enterprise and SMBs clients' },
  { number: '45+', label: 'Intelligent systems deployed' },
  { number: '95%', label: 'Client satisfaction rate' },
];

const PLATFORMS = [
  { name: 'PASHA', Icon: BadgeCheck },
  { name: 'Clutch', Icon: Star },
  { name: 'GoodFirms', Icon: ShieldCheck },
  { name: 'SoftwareWorld', Icon: PanelsTopLeft },
  { name: 'P@SHA ICT Awards', Icon: Trophy },
] as const;
const PRACTICES = ['AI Development', 'Custom Software', 'Automation', 'Data Science'] as const;

const AnimatedNumber = ({ number, prefersReducedMotion }: { number: string; prefersReducedMotion: boolean }) => {
  const target = Number.parseInt(number, 10);
  const suffix = number.slice(String(target).length);
  const count = useMotionValue(prefersReducedMotion ? target : 0);
  const display = useTransform(count, (value) => `${Math.round(value)}${suffix}`);
  const { ref, isInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, { duration: 1.8, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, isInView, prefersReducedMotion, target]);

  return (
    <>
      <span className="sr-only">{number}</span>
      <motion.span ref={ref} aria-hidden="true">{display}</motion.span>
    </>
  );
};

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
          className="relative grid grid-cols-2 content-center gap-x-5 gap-y-8 sm:gap-x-8 lg:ml-auto lg:mt-4 lg:w-full lg:max-w-md lg:grid-cols-1 lg:gap-y-7"
          aria-label="Velnix company impact"
        >
          {IMPACT_STATS.map(({ number, label }) => (
            <div key={label} className="border-l-2 border-[#B6FF00]/40 pl-3 sm:pl-5">
              <p className="text-4xl font-black leading-none text-[#B6FF00] sm:text-5xl">
                <AnimatedNumber number={number} prefersReducedMotion={prefersReducedMotion} />
              </p>
              <p className="mt-2 max-w-[22ch] text-sm leading-6 text-white/60">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <IndustryProof prefersReducedMotion={prefersReducedMotion} />
    </section>
  );
};

const IndustryProof = ({ prefersReducedMotion }: { prefersReducedMotion: boolean }) => {
  return (
    <div className="relative mt-12 overflow-hidden border-t border-black/10 bg-[#B6FF00] text-[#050505] sm:mt-16 lg:mt-20">
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(5,5,5,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(5,5,5,0.08) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'linear-gradient(to bottom, black, transparent 82%)' }} />

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 sm:py-9 lg:px-8 lg:py-10"
      >
        <h3 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
          Recognized across leading industry platforms.
        </h3>

        <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {PLATFORMS.map(({ name, Icon }) => (
            <li
              key={name}
              className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-black/15 bg-black/[0.04] px-2 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-black/85 sm:min-h-14 sm:gap-2.5 sm:px-3 sm:text-xs"
            >
              <Icon className="h-4 w-4 shrink-0 text-black/70 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
              <span>{name}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-extrabold uppercase tracking-[0.1em] text-black/90 sm:text-sm">
          {PRACTICES.map((practice, index) => (
            <span key={practice} className="inline-flex items-center gap-3">
              {index > 0 && <span className="text-black/60" aria-hidden="true">·</span>}
              {practice}
            </span>
          ))}
        </p>
        <p className="mt-4 border-t border-black/20 pt-4 text-[11px] font-bold uppercase leading-6 tracking-[0.08em] text-black/80 sm:text-sm">
          Trusted technology partner <span className="mx-2 text-black/60">·</span> Global delivery <span className="mx-2 text-black/60">·</span> Enterprise-ready engineering
        </p>
      </motion.div>

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
            <p className="text-4xl font-black leading-none tracking-[-0.06em] text-black sm:text-5xl">
              {number}
            </p>
            <p className="mx-auto mt-3 max-w-[16ch] text-[0.62rem] font-bold uppercase leading-5 tracking-[0.16em] text-black sm:text-[0.7rem]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OriginStory;