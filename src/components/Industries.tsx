import { useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const industries = [
  {
    id: 1,
    name: "Clinics & Small Hospitals",
    description: "AI triage, appointment scheduling, billing automation, and inventory management.",
    image: "/image/Industries-Img/hospitals-clinics.jpg",
    link: "/clinics-and-small-hospitals",
    features: ["AI Triage", "Smart Scheduling", "Billing Automation", "Staffing"],
    accent: "#B6FF00",
  },
  {
    id: 2,
    name: "Telemedicine",
    description: "Virtual consultations, symptom checkers, real-time diagnostics, and remote triage.",
    image: "/image/Industries-Img/Telemedicine.jpg",
    link: "/telemedicine",
    features: ["Virtual Consults", "Symptom Checkers", "Real-time AI", "Remote Triage"],
    accent: "#00CFFF",
  },
  {
    id: 3,
    name: "Drug Discovery",
    description: "Molecular docking, toxicity prediction, molecule design, and biomarker discovery.",
    image: "/image/Industries-Img/Molecule Design.jpg",
    link: "/drug-discovery",
    features: ["Molecular Docking", "ADMET Modeling", "Molecule Design", "Biomarkers"],
    accent: "#A855F7",
  },
  {
    id: 4,
    name: "Health Data Analytics",
    description: "Disease modeling, resource tracking, population health insights, and research analytics.",
    image: "/image/Industries-Img/Health Data Analytics..jpg",
    link: "/healthcare-data-analytics",
    features: ["Disease Prediction", "Resource Tracking", "Population Health", "Research"],
    accent: "#F97316",
  },
  {
    id: 5,
    name: "Hospital Operations",
    description: "Bed management, staff scheduling, supply chain optimization, and predictive maintenance.",
    image: "/image/Industries-Img/hospitals-clinics.jpg",
    link: "/hospital-operations-management",
    features: ["Bed Management", "Staff Scheduling", "Supply Chain", "Wait Time Reduction"],
    accent: "#22D3EE",
  },
  {
    id: 6,
    name: "Medical Imaging",
    description: "AI scan analysis, cardiovascular CT support, early cancer detection, and workflow automation.",
    image: "/image/Industries-Img/Medical Imaging.jpg",
    link: "/medical-imaging-radiology",
    features: ["Scan Support", "Cancer Detection", "Workflow AI", "Report Precision"],
    accent: "#F43F5E",
  },
  {
    id: 7,
    name: "Electronic Health Records",
    description: "AI medical scribing, case summaries, automated documentation, and risk scoring.",
    image: "/image/Industries-Img/Electronic Health Records.jpg",
    link: "/electronic-health-records",
    features: ["Medical Scribing", "Case Summaries", "Auto Documentation", "Risk Scoring"],
    accent: "#34D399",
  },
  {
    id: 8,
    name: "Mental Health Tech",
    description: "Mood analytics, crisis detection, personalized wellness plans, and therapy chatbots.",
    image: "/image/Industries-Img/Telehealth Sentiment Analysis.jpg",
    link: "/mental-health-tech",
    features: ["Mood Analytics", "Crisis Detection", "Wellness Plans", "Therapy Bots"],
    accent: "#FBBF24",
  },
];

/* ── 3-D tilt helpers ───────────────────────────────────────────────── */
function use3DTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;   // -0.5 → +0.5
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale3d(1.04,1.04,1.04)`;
    el.style.boxShadow = `
      ${-x * 24}px ${y * 24}px 60px rgba(0,0,0,0.45),
      0 0 40px rgba(182,255,0,0.18)
    `;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.22)';
  };

  return { ref, onMouseMove, onMouseLeave };
}

/* ── Single card ────────────────────────────────────────────────────── */
function IndustryCard({
  industry,
  isActive,
  onClick,
}: {
  industry: typeof industries[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const { ref, onMouseMove, onMouseLeave } = use3DTilt();

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transition: 'transform 420ms cubic-bezier(0.16,1,0.3,1), box-shadow 420ms cubic-bezier(0.16,1,0.3,1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        boxShadow: isActive
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${industry.accent}55`
          : '0 8px 32px rgba(0,0,0,0.22)',
        borderRadius: '16px',
      }}
      className={`
        group relative cursor-pointer overflow-hidden
        min-h-[260px] sm:min-h-[300px] md:min-h-[340px]
        border border-white/10
        ${isActive ? 'z-30' : 'z-10 hover:z-20'}
      `}
    >
      {/* ── HD background image ─────────────────────────────── */}
      <img
        src={industry.image}
        alt={industry.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: isActive ? 'brightness(1.15) saturate(1.3) contrast(1.05)' : 'brightness(0.82) saturate(1.1)',
          transform: isActive ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 700ms cubic-bezier(0.16,1,0.3,1), filter 600ms ease',
        }}
      />

      {/* ── Always-on depth gradient ─────────────────────────── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(5,7,41,0.08)  0%,
              rgba(5,7,41,0.45) 45%,
              rgba(5,7,41,0.92) 100%
            )
          `,
        }}
      />

      {/* ── 3-D inner "glass pane" — gloss highlight ─────────── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
          transform: 'translateZ(4px)',
        }}
      />

      {/* ── Accent glow ring on active ───────────────────────── */}
      {isActive && (
        <div
          className="absolute inset-0 z-10 rounded-[16px] pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 2.5px ${industry.accent}`,
            transition: 'opacity 400ms ease',
          }}
        />
      )}

      {/* ── Bottom default label ─────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-5 pt-10"
        style={{
          opacity: isActive ? 0 : 1,
          transition: 'opacity 350ms ease',
          background: 'linear-gradient(to top, rgba(5,7,41,0.7) 0%, transparent 100%)',
          transform: 'translateZ(8px)',
        }}
      >
        <p className="text-white font-bold text-base sm:text-lg leading-tight drop-shadow-lg tracking-tight">
          {industry.name}
        </p>
      </div>

      {/* ── Hover / active overlay ───────────────────────────── */}
      <div
        className="absolute inset-0 z-30 flex flex-col justify-end px-5 pb-6 pt-6"
        style={{
          background: `linear-gradient(
            160deg,
            ${industry.accent}CC 0%,
            ${industry.accent}88 55%,
            ${industry.accent}DD 100%
          )`,
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'translateZ(12px)' : 'translateZ(0px)',
          transition: 'opacity 420ms cubic-bezier(0.16,1,0.3,1), transform 420ms cubic-bezier(0.16,1,0.3,1)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {/* Sparkle icon */}
        <Sparkles
          className="mb-2 opacity-80"
          size={18}
          style={{ color: '#050729' }}
        />

        <h3
          className="font-extrabold text-lg sm:text-xl text-[#050729] leading-tight tracking-tight mb-2"
          style={{ textShadow: 'none' }}
        >
          {industry.name}
        </h3>

        <p className="text-[#050729]/80 text-xs sm:text-sm font-normal leading-relaxed mb-4 max-w-[240px]">
          {industry.description}
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {industry.features.map((f) => (
            <span
              key={f}
              className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-[#050729]/30 text-[#050729]"
              style={{ background: 'rgba(5,7,41,0.08)' }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={industry.link}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-[#050729] font-bold text-sm group/link"
          aria-label={`Learn more about ${industry.name}`}
        >
          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-[#050729] after:origin-right after:transition-transform after:duration-300 group-hover/link:after:scale-x-100 group-hover/link:after:origin-left">
            Learn More
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>

      {/* ── Group hover overlay (non-active) ────────────────── */}
      <div
        className="absolute inset-0 z-25 pointer-events-none"
        style={{
          background: `linear-gradient(
            160deg,
            ${industry.accent}55 0%,
            ${industry.accent}22 60%,
            transparent 100%
          )`,
          opacity: 0,
          transition: 'opacity 350ms ease',
        }}
        /* Activated by group hover via inline style — handled by JS tilt */
      />
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */
const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>("Clinics & Small Hospitals");

  return (
    <section
      id="industries"
      className="pt-2 sm:pt-4 md:pt-6 pb-16 bg-white w-full overflow-x-hidden scroll-mt-20"
    >
      <div className="w-full">
        <section className="pt-2 sm:pt-4 md:pt-6 pb-0 relative bg-white w-full">
          <div className="relative z-10 w-full">

            {/* Header */}
            <div className="text-left space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 px-[5%] sm:px-[10%]">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.15]">
                Industries We Transform with Innovative AI Software Solutions
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-500 font-normal leading-relaxed lg:whitespace-nowrap">
                We empower businesses across diverse industries with custom AI solutions,
                driving innovation, efficiency, and sustainable growth in the digital era.
              </p>
            </div>

            {/* 3-D card grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-[4%] sm:px-[6%] md:px-[8%]"
              style={{ perspective: '1200px' }}
            >
              {industries.map((industry) => (
                <IndustryCard
                  key={industry.id}
                  industry={industry}
                  isActive={activeIndustry === industry.name}
                  onClick={() => setActiveIndustry(industry.name)}
                />
              ))}
            </div>

          </div>
        </section>
      </div>
    </section>
  );
};

export default Industries;
