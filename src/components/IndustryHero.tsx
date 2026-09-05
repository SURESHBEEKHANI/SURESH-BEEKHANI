import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface IndustryHeroProps {
  title: string;
  description: string;
  bgImage: string;
}

const IndustryHero: React.FC<IndustryHeroProps> = React.memo(({ title, description, bgImage }) => (
  <section className="hero-bg relative isolate w-full overflow-hidden text-white">
    <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.86)_42%,rgba(5,5,5,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(182,255,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(182,255,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
    </div>

    <div className="relative z-10 mx-auto grid min-h-[min(78vh,760px)] w-full max-w-7xl items-center gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:gap-20 lg:px-16 lg:py-32">
      <div className="max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-2 border border-[#B6FF00]/30 bg-[#B6FF00]/[0.07] px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
          <Sparkles size={13} aria-hidden="true" />
          Industry intelligence
        </div>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
          {description}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="group inline-flex min-h-12 items-center gap-2 bg-[#B6FF00] px-6 py-3 text-sm font-bold text-[#050505] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00]"
          >
            Build your advantage
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/45">AI systems, built around your work</span>
        </div>
      </div>

      <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden border border-white/15 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:min-h-[360px]">
        <img src={bgImage} alt={`${title} industry technology`} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,5,5,0.08),rgba(5,5,5,0.72))]" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#B6FF00]/30 bg-[#050505]/75 px-4 py-3 backdrop-blur-sm">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#B6FF00]">Velnix / Applied AI</span>
          <span className="h-2 w-2 rounded-full bg-[#B6FF00] shadow-[0_0_14px_#B6FF00]" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
));

IndustryHero.displayName = 'IndustryHero';

export default IndustryHero;
