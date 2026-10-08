import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/ui/CTA';
import { useReducedMotion } from '@/hooks/useAnimations';

const values = [
  {
    title: 'Built for People Who Build',
    description: 'We’re creating a culture for curious minds, practical thinkers, and people who take ownership.',
  },
  {
    title: 'We Think Bigger',
    description: 'We look beyond quick fixes. We challenge assumptions, explore better approaches, and build solutions designed to create lasting value.',
  },
  {
    title: 'We Keep Learning',
    description: 'AI and technology move fast. We experiment, share knowledge, learn from failure, and continuously sharpen our craft.',
  },
  {
    title: 'We Take Ownership',
    description: 'You won’t just complete tasks. You’ll own problems, make decisions, and see your work move from idea to real-world impact.',
  },
  {
    title: 'We Build With Purpose',
    description: 'Great technology should solve meaningful problems. We focus on outcomes, not complexity for its own sake.',
  },
  {
    title: 'We Grow Together',
    description: 'As Velnix grows, we want our people to grow with it. Take on bigger challenges, develop new skills, and shape the company you’re helping build.',
  },
];

const roles = [
  { title: 'Senior AI/ML Engineer', department: 'Engineering', location: 'Remote' },
  { title: 'Frontend Engineer — React', department: 'Engineering', location: 'Remote' },
  { title: 'AI Solutions Architect', department: 'Engineering', location: 'Hybrid' },
  { title: 'Product Designer', department: 'Design', location: 'Remote' },
  { title: 'Business Development Manager', department: 'Growth', location: 'Remote' },
  { title: 'Data Engineer', department: 'Data', location: 'Remote' },
];

const Careers = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen antialiased text-white" style={{ background: '#000000' }}>
      <Navbar />

      <main
        className="relative isolate min-h-screen overflow-hidden px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8"
        style={{ background: '#050505' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%)',
            filter: 'blur(10px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1040px]">
          <motion.header
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-2 sm:pt-4"
          >
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
              <span className="inline-block h-px w-9 bg-[#B6FF00]" aria-hidden="true" />
              <span className="font-['JetBrains_Mono',monospace]">Careers</span>
            </div>

            <h1 className="max-w-[760px] font-['Space_Grotesk','Inter',sans-serif] text-[2rem] font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-[2.8rem] lg:text-[3.5rem]">
              Build the Future.
              <span className="mt-2 block text-[#F2F2F7]">
                Solve What <span className="text-[#B6FF00]">Matters.</span>
              </span>
            </h1>

            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-white/65 sm:text-[16px]">
              At Velnix Solutions, we build AI-powered systems that help businesses work smarter. Join a team where ambitious ideas, strong engineering, and meaningful ownership come together to solve real problems.
            </p>
            <p className="mt-4 text-sm font-bold tracking-wide text-white sm:text-base">
              Build boldly. Learn constantly. Create impact.
            </p>
          </motion.header>

          <div className="relative mt-10 pt-8 before:absolute before:left-1/2 before:top-0 before:w-screen before:-translate-x-1/2 before:border-t before:border-white/10 before:content-[''] sm:mt-14 sm:pt-10">
            <section aria-labelledby="values-heading">
              <div className="mb-8 flex items-center gap-3">
                <span className="inline-block h-px w-9 bg-[#B6FF00]" aria-hidden="true" />
                <p className="font-['JetBrains_Mono',monospace] text-[10px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
                  Our culture
                </p>
              </div>

              <h2
                id="values-heading"
                className="mb-8 font-['Space_Grotesk','Inter',sans-serif] text-[2.2rem] font-black tracking-[-0.06em] text-white sm:text-[2.6rem]"
              >
                The Culture We’re <span className="text-[#B6FF00]">Building</span>
              </h2>

              <div className="grid max-w-[1040px] overflow-hidden border-l border-t border-white/10 bg-[#050505] sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex min-h-[160px] flex-col border-b border-r border-white/10 p-5 sm:p-6"
                  >
                    <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#B6FF00]/80 bg-[#B6FF00]/10 text-[#B6FF00] shadow-[0_0_0_1px_rgba(182,255,0,0.15)]">
                      <Check size={15} aria-hidden="true" />
                    </div>
                    <h3 className="font-['Space_Grotesk','Inter',sans-serif] text-xl font-bold leading-tight tracking-[-0.05em] text-white sm:text-2xl">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="relative mt-14 pt-8 before:absolute before:left-1/2 before:top-0 before:w-screen before:-translate-x-1/2 before:border-t before:border-white/10 before:content-[''] sm:mt-16 sm:pt-10">
            <section aria-labelledby="roles-heading" className="lg:pr-4">
              <div className="mb-6 flex items-center gap-3 pl-1">
                <span className="inline-block h-px w-12 bg-[#B6FF00]" aria-hidden="true" />
                <p className="font-['JetBrains_Mono',monospace] text-[10px] font-bold uppercase tracking-[0.24em] text-[#B6FF00]">
                  Open roles
                </p>
              </div>

              <h2
                id="roles-heading"
                className="mb-7 max-w-[760px] font-['Space_Grotesk','Inter',sans-serif] text-[2.1rem] font-black tracking-[-0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]"
              >
                Find Your Next <span className="text-[#B6FF00]">Challenge.</span>
              </h2>

              <div className="max-w-[980px] overflow-hidden border-t border-white/10">
                {roles.map((role, index) => (
                  <motion.a
                    key={role.title}
                    href={`mailto:info@velnixsolutions.com?subject=${encodeURIComponent(`Careers at Velnix — ${role.title}`)}`}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                    className="group grid grid-cols-[1.7fr_1fr_0.8fr_28px] items-center gap-4 border-b border-white/10 py-4 text-left text-white/80 transition-colors duration-200 hover:bg-white/[0.01] sm:gap-6"
                  >
                    <span className="font-['Space_Grotesk','Inter',sans-serif] text-[1.02rem] font-medium tracking-[-0.03em] text-white sm:text-[1.15rem]">
                      {role.title}
                    </span>
                    <span className="text-[14px] text-white/55">{role.department}</span>
                    <span className="text-[14px] text-white/55">{role.location}</span>
                    <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#B6FF00]/55 bg-[#B6FF00]/10 text-[#B6FF00] transition-transform group-hover:translate-x-0.5">
                      <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-16 -mx-4 sm:mt-20 sm:-mx-6 lg:-mx-8">
          <CTA
            eyebrow="Don't see your role?"
            title="Let's build what's next."
            description="We’re always interested in meeting people who think differently, learn quickly, and want to build meaningful technology."
            primaryLabel="Get touch"
            primaryHref="/contact"
            variant="centered"
            background="gradient"
            size="lg"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
