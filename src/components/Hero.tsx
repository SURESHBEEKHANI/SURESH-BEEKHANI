import { useRef, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// ── Premium brand tokens ─────────────────────────────────────────────────────
const BRAND_PINK = '#FF1A80';
const BRAND_PINK_GLOW = 'rgba(255,26,128,0.32)';
const BRAND_GREEN_SOFT = 'rgba(168,232,0,0.10)';

// ── Shared style helpers ─────────────────────────────────────────────────────
const sharpText: React.CSSProperties = {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
};

const slideTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

// ======================= HERO ===============================================
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playbackRate = 2.0;
    const play = () => { video.playbackRate = 2.0; video.play().catch(() => { }); };
    play();
    document.addEventListener('click', play, { once: true });
    return () => document.removeEventListener('click', play);
  }, []);

  return (
    <section className="relative isolate min-h-[100vh] flex items-center justify-center overflow-hidden antialiased text-white">

      {/* ================================================================
          BACKGROUND LAYER
      ================================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">

        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="/image/background-video/BACKGOUND.mp4"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={(e) => {
            const v = e.currentTarget;
            v.playbackRate = 2.0;
            v.play().catch(() => { });
          }}
        />

        {/* Dark transparent overlay */}
        <div className="absolute inset-0 bg-black/55" />

      </div>

      {/* ================================================================
          CONTENT LAYER
      ================================================================ */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={slideTransition}
          className="flex flex-col items-center"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight font-space text-white text-balance"
            style={{
              ...sharpText,
              letterSpacing: '-0.025em',
              textShadow: '0 2px 40px rgba(0,0,0,0.65)',
            }}
          >
            Your{' '}
            <span
              className="block sm:inline"
              style={{
                color: '#ffffff',
              }}
            >
              Trusted
            </span>
            {' AI Development Company '}
          </h1>

          <p
            className="mt-8 text-lg sm:text-xl max-w-3xl leading-relaxed font-light tracking-wide text-pretty"
            style={{
              ...sharpText,
              color: 'rgba(255,255,255,1)',
              letterSpacing: '0.015em',
            }}
          >
            We empower healthcare organizations with AI to automate operations, improve efficiency, and drive better outcomes.
          </p>

          <div className="mt-12 flex justify-center">
            <MagneticButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// ======================= MAGNETIC BUTTON ====================================
const MagneticButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  const SHADOW_REST = [
    '0 1px 0 rgba(255,255,255,0.50) inset',
    '0 -1px 0 rgba(0,0,0,0.12) inset',
    '0 2px 8px rgba(0,0,0,0.18)',
    '0 8px 28px rgba(168,232,0,0.42)',
  ].join(', ');

  const SHADOW_HOVER = [
    '0 1px 0 rgba(255,255,255,0.50) inset',
    '0 -1px 0 rgba(0,0,0,0.12) inset',
    '0 4px 14px rgba(0,0,0,0.22)',
    '0 14px 40px rgba(168,232,0,0.56)',
  ].join(', ');

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current!.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current!.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 ease-out"
    >
      <Button
        asChild
        className="px-8 py-4 text-lg rounded-none font-semibold tracking-wide text-[#080d1c] hover:text-[#080d1c] transition-all duration-300"
        style={{
          background: `linear-gradient(140deg, #AAEE00 0%, #c4f500 50%, #b0e000 100%)`,
          boxShadow: SHADOW_REST,
          border: '1px solid rgba(139, 232, 0, 0.4)',
          letterSpacing: '0.01em',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = SHADOW_HOVER;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = SHADOW_REST;
        }}
      >
        <a
          href="https://calendar.app.google/F63aBoA5vxJdtihj7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#080d1c] hover:text-[#080d1c]"
        >
          <FileText
            className="mr-2 h-[1.125rem] w-[1.125rem] shrink-0 text-[#080d1c]"
            strokeWidth={2}
          />
          Schedule an Appointment
        </a>
      </Button>
    </div>
  );
};
