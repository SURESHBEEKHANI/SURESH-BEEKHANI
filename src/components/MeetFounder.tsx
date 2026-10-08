import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useAnimations';

const founderSocialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/suresh-beekhani/', icon: Linkedin },
  { name: 'X / Twitter', href: 'https://x.com/SureshBeekhan', icon: Twitter },
  { name: 'Facebook', href: 'https://www.facebook.com/sureshbeekhani143', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/sureshbeekhani/', icon: Instagram },
];

const MeetFounder = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="founder" className="relative isolate overflow-hidden border-y border-white/10 bg-[#111111] py-16 font-display text-white sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(rgba(182,255,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,0,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, black, transparent 88%)',
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#7DCC00]/10 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
            <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
            Technical leadership
          </p>
          <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
            Message From <span className="text-[#B6FF00]">Leadership</span>
          </h2>
          <div className="mt-7 max-w-2xl space-y-4 text-[0.94rem] leading-7 text-white/65 sm:text-base">
            <p>
              <strong className="font-semibold text-white">Welcome to Velnix Solutions.</strong>
            </p>
            <p>
              I’m <strong className="font-semibold text-white">Suresh Beekhani, Founder &amp; CEO of Velnix Solutions.</strong>
            </p>
            <p>
              At Velnix, we believe technology should create <strong className="font-semibold text-white">real business value—not just more software.</strong> We combine AI, automation, and modern engineering to solve meaningful problems, simplify operations, and help businesses work smarter.
            </p>
            <p>
              Our foundation is built on <strong className="font-semibold text-white">innovation, trust, ownership, and continuous learning.</strong> We value people who think independently, take responsibility, stay curious, and build with purpose.
            </p>
            <p>
              As we grow, our goal remains simple: <strong className="font-semibold text-white">solve better problems, build better systems, and create lasting impact.</strong>
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-semibold text-[#B6FF00] underline decoration-[#B6FF00]/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00]"
            >
              <strong>Let’s build what’s next.</strong>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="font-semibold text-white">Suresh Beekhani</p>
              <p className="mt-0.5 text-sm text-white/45">Founder &amp; CEO | Velnix Solutions</p>
            </div>

            <div className="flex items-center gap-2.5">
              {founderSocialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#B6FF00]/35 bg-[#050505]/80 text-[#B6FF00] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B6FF00] hover:bg-[#B6FF00] hover:text-[#050505]"
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[26rem] p-3 lg:ml-auto lg:mr-0 lg:max-w-[28rem]"
        >
          <div className="absolute -bottom-3 -right-3 h-full w-full" aria-hidden="true" />
          <div className="relative overflow-hidden border border-[#B6FF00]/35 bg-transparent p-2">
            <img
              src="/image/sureshbeekhani.avif"
              alt="Suresh Beekhani, Founder and Lead AI Architect"
              width={1199}
              height={1312}
              className="relative block aspect-[4/5] w-full object-cover object-center grayscale contrast-[1.05] brightness-[0.92]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetFounder;