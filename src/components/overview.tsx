import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useAnimations';
import { ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';



/* ─────────────────────────────────────────────────────────────
   KEY POINTS
───────────────────────────────────────────────────────────── */
const KEY_POINTS = [
  'Streamline daily operations & reduce manual work',
  'Improve decision-making with data-driven insights',
  'Boost productivity with intelligent automation',
  'Custom strategies aligned to your unique goals',
];



/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
const Overview = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [1.5, -1.5]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 scroll-mt-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f7f9fc 50%, #f0f4f8 100%)' }}
    >
      {/* ── Background dot grid ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Ambient lime glow — top left ────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(182,255,0,0.09) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── Ambient navy glow — bottom right ────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(5,7,41,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-24 items-center">

          {/* ── LEFT: Text Content ──────────────────────────── */}
          <motion.div
            className="space-y-8"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Heading */}
            <div className="space-y-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold leading-[1.18] tracking-tight whitespace-nowrap"
                style={{ color: '#050729' }}
              >
                Drive Unstoppable{' '}
                <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #050729 0%, #2D3280 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Business Growth
                </span>
                {' '}with AI
              </h2>

              {/* Body paragraphs */}
              <div
                className="space-y-3 text-[14px] sm:text-[15px] leading-[1.78]"
                style={{ color: '#4B5563' }}
              >
                <p>
                  We help businesses grow and operate efficiently through smart, results-driven solutions. 
                  From streamlining operations to improving decision-making, we develop tailored 
                  strategies focused on creating real value for your unique goals.
                </p>
              </div>
            </div>

            {/* Key points */}
            <ul className="space-y-2.5">
              {KEY_POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  className="flex items-start gap-3 text-[13.5px] font-medium"
                  style={{ color: '#374151' }}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CheckCircle
                    className="flex-shrink-0 mt-0.5 w-4 h-4"
                    style={{ color: '#7FB800' }}
                  />
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* Partner line */}
            <p className="text-[13.5px] leading-relaxed" style={{ color: '#6B7280' }}>
              Partner with{' '}
              <span className="font-bold" style={{ color: '#050729' }}>
                Velnix Solutions
              </span>{' '}
              to improve efficiency, unlock new opportunities, and build a stronger, more
              competitive business for the future.
            </p>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              <Button
                asChild
                className="inline-flex items-center gap-2.5 px-8 py-5 rounded-xl text-sm font-bold text-[#050729] hover:text-[#050729] transition-all duration-250 focus-visible:ring-2 focus-visible:ring-[#050729]/20 focus-visible:ring-offset-2"
                style={{
                  background: '#B6FF00',
                  boxShadow: '0 2px 8px rgba(182,255,0,0.3), 0 8px 24px rgba(182,255,0,0.2)',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 4px 16px rgba(182,255,0,0.4), 0 12px 32px rgba(182,255,0,0.28)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 2px 8px rgba(182,255,0,0.3), 0 8px 24px rgba(182,255,0,0.2)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <Link to="/contact" className="flex items-center gap-2 text-[#050729] hover:text-[#050729]">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: 3D Image + Stats ──────────────────────── */}
          <div className="relative flex flex-col gap-6 items-center lg:items-end">

            {/* Image section */}
            <div className="relative w-full max-w-[864px]">
              {/* Main image card */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/image/certificate-image/Business Growth with AI.png"
                  alt="Business Growth with AI — Velnix Solutions"
                  className="w-full h-auto object-contain block"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'brightness(1.04) saturate(1.08) contrast(1.03)',
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Floating badge — bottom right */}
              <div
                className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/70"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 16px rgba(5,7,41,0.12)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #050729 0%, #0D1254 100%)' }}
                >
                  <TrendingUp className="w-4 h-4" style={{ color: '#B6FF00' }} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#050729] leading-none">5x ROI</p>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-none">Average Growth</p>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/70"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 16px rgba(5,7,41,0.12)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#B6FF00' }}
                >
                  <Users className="w-4 h-4 text-[#050729]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#050729] leading-none">200+ Clients</p>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-none">Worldwide</p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
