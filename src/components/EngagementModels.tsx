import { ArrowRight, Search, FileText, Clock, Target, Wrench } from 'lucide-react';

// ─── Brand Tokens ──────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const engagementModels = [
  {
    num: '01',
    icon: Search,
    label: 'Consulting & Discovery',
    description:
      'Define the right strategy, architecture, AI opportunities, and implementation roadmap before a single line of code is written.',
  },
  {
    num: '02',
    icon: FileText,
    label: 'Fixed Price',
    description:
      'A clearly scoped project with defined deliverables, timeline, and budget — suited for well-established requirements and predictable outcomes.',
  },
  {
    num: '03',
    icon: Clock,
    label: 'Time & Material',
    description:
      'Flexible development for evolving requirements, shifting priorities, and projects that require continuous iteration over a sustained period.',
  },
  {
    num: '04',
    icon: Target,
    label: 'Milestone-Based',
    description:
      'Break complex projects into measurable phases — each with defined deliverables, acceptance criteria, and a corresponding payment milestone.',
  },
  {
    num: '05',
    icon: Wrench,
    label: 'Maintenance & Support',
    description:
      'Keep your systems reliable and optimized with ongoing monitoring, technical maintenance, iterative improvements, and dedicated support coverage.',
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const EngagementModels = () => (
  <section
    className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    style={{ background: C.black }}
  >
    {/* Subtle ambient glow */}
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(ellipse, ${C.la(0.05)} 0%, transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">

      {/* ── Header ── */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <div
          className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] mb-5"
          style={{ color: C.lime }}
        >
          <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
          How We Engage
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
          Engagement <span style={{ color: C.lime }}>Models</span>
        </h2>

        <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.wa(0.55) }}>
          Flexible delivery options structured around your project scope, timeline, and business requirements.
        </p>
      </div>

      {/* ── Lime divider ── */}
      <div
        className="w-full h-px mb-10 sm:mb-12"
        style={{
          background: `linear-gradient(90deg, ${C.la(0.3)} 0%, transparent 60%)`,
        }}
      />

      {/* ── Cards grid (5 models + 1 CTA = 6 cells → 2×3) ── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">

        {/* Model cards */}
        {engagementModels.map((model, i) => (
          <div
            key={i}
            className="group relative flex flex-col gap-5 p-7 sm:p-8 bg-[#050505] transition-all duration-300 hover:bg-[#0d0d0d] overflow-hidden"
          >
            {/* Left lime bar — slides in on hover */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(180deg, ${C.lime} 0%, ${C.green} 100%)`,
              }}
            />

            {/* Number + icon row */}
            <div className="flex items-center justify-between">
              <span
                className="text-[11px] font-black uppercase tracking-[0.22em] tabular-nums"
                style={{ color: C.lime }}
              >
                {model.num}
              </span>
              <div
                className="w-10 h-10 flex items-center justify-center border transition-all duration-300"
                style={{ borderColor: C.wa(0.1), color: C.wa(0.45) }}
              >
                <model.icon
                  className="w-[18px] h-[18px] transition-colors duration-300 group-hover:text-[#B6FF00]"
                />
              </div>
            </div>

            {/* Label */}
            <h3
              className="text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors duration-200 group-hover:text-[#B6FF00]"
              style={{ color: C.white }}
            >
              {model.label}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed flex-1" style={{ color: C.wa(0.5) }}>
              {model.description}
            </p>

            {/* Arrow — slides in on hover */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
              <ArrowRight className="w-4 h-4" style={{ color: C.lime }} />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: C.lime }}
              >
                Learn more
              </span>
            </div>
          </div>
        ))}

        {/* ── CTA tile — fills the 6th cell ── */}
        <div className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 bg-[#050505] transition-all duration-300 hover:bg-[#0d0d0d] overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(180deg, ${C.lime} 0%, ${C.green} 100%)`,
            }}
          />

          <div>
            <p
              className="text-[11px] font-black uppercase tracking-[0.22em] mb-4"
              style={{ color: C.wa(0.28) }}
            >
              Not sure which fits?
            </p>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-3">
              Talk through your project with our team.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: C.wa(0.45) }}>
              We scope the engagement model after understanding your requirements — no commitment required.
            </p>
          </div>

          <a
            href="https://calendar.app.google/F63aBoA5vxJdtihj7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start px-5 py-2.5 text-sm font-bold uppercase tracking-wider border transition-all duration-300 hover:bg-[#B6FF00] hover:text-black hover:border-[#B6FF00]"
            style={{ color: C.lime, borderColor: C.la(0.35) }}
          >
            Schedule a Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  </section>
);

export default EngagementModels;
