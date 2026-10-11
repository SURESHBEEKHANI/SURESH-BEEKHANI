import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, type MotionValue } from "framer-motion";
import { Building2, CalendarDays, Check, Clock3, Download, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/ui/CTA";

const C = {
  black: "#050505",
  graphite: "#111111",
  white: "#FFFFFF",
  lime: "#B6FF00",
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

export interface CaseStudyMetric {
  stat: string;
  label: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  industry: string;
  introduction: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  approach?: string[];
  keyCapabilities?: string[];
  conclusion?: string;
}

interface CaseStudyPageProps {
  project: CaseStudy;
  heroDescription?: string;
  referenceStyle?: boolean;
  pdfDownloadHref?: string;
  heroPreview?: {
    ariaLabel: string;
    title: string;
    subtitle: string;
    status: string;
    conversationLabel: string;
    customerMessage: string;
    assistantMessage: string;
    supportingText: string;
    options: [string, string];
    cardIcon?: "appointment" | "property";
    cardLabel: string;
    cardTitle: string;
    cardDetail: string;
    footerText: string;
  };
  cta?: {
    title: string;
    description: string;
  };
}

const SectionHeading: React.FC<{
  id: string;
  title: string;
  eyebrow: string;
  referenceStyle: boolean;
  marginClass?: string;
}> = ({ id, title, eyebrow, referenceStyle, marginClass = "mb-6" }) => (
  <div className={marginClass}>
    {referenceStyle && (
      <p className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.lime }}>
        <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
        {eyebrow}
      </p>
    )}
    <h2 id={id} className="font-display text-2xl font-black leading-tight tracking-[-0.04em] sm:text-3xl">
      {title}
    </h2>
  </div>
);

const ProjectDetailsCard: React.FC<{
  project: CaseStudy;
  scrollProgress: number;
  scrollYProgress: MotionValue<number>;
  referenceStyle: boolean;
}> = ({ project, scrollProgress, scrollYProgress, referenceStyle }) => (
  <aside
    aria-label={`${project.title} project details`}
    className={`w-full lg:sticky lg:top-28 ${referenceStyle ? "border-b pb-6 lg:border-0 lg:pb-0" : "rounded-2xl border p-5 sm:p-7"}`}
    style={{
      background: referenceStyle ? "transparent" : C.graphite,
      borderColor: C.wa(0.1),
      boxShadow: referenceStyle ? "none" : "0 16px 48px rgba(0,0,0,0.22)",
    }}
  >
    {referenceStyle && (
      <nav aria-label="On this page" className="mb-7">
        <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.wa(0.48) }}>
          On this page
        </h2>
        <ul className="space-y-2 border-l pl-4" style={{ borderColor: C.wa(0.14) }}>
          <li><a className="text-sm transition-colors hover:text-lime-300" style={{ color: C.wa(0.72) }} href="#case-study-overview">Overview</a></li>
          <li><a className="text-sm transition-colors hover:text-lime-300" style={{ color: C.wa(0.72) }} href="#case-study-challenges">Business Challenges</a></li>
          <li><a className="text-sm transition-colors hover:text-lime-300" style={{ color: C.wa(0.72) }} href="#case-study-solution">Solution</a></li>
          {project.keyCapabilities && project.keyCapabilities.length > 0 && <li><a className="text-sm transition-colors hover:text-lime-300" style={{ color: C.wa(0.72) }} href="#case-study-key-capabilities">Key Capabilities</a></li>}
          {project.approach && project.approach.length > 0 && <li><a className="text-sm transition-colors hover:text-lime-300" style={{ color: C.wa(0.72) }} href="#case-study-our-approach">Our Approach</a></li>}
          <li><a className="text-sm transition-colors hover:text-lime-300" style={{ color: C.wa(0.72) }} href="#case-study-end-results">Measurable Outcomes</a></li>
          {project.conclusion && <li><a className="text-sm transition-colors hover:text-lime-300" style={{ color: C.wa(0.72) }} href="#case-study-conclusion">Conclusion</a></li>}
        </ul>
      </nav>
    )}

    <div className="flex items-center gap-3 pb-5">
      <div
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-black tracking-[-0.04em]"
        style={{ background: C.lime, color: C.black }}
      >
        {project.title.charAt(0)}
      </div>
      <h2 className="font-display text-lg font-bold leading-tight tracking-[-0.04em] text-white sm:text-xl">
        {project.title}
      </h2>
    </div>

    <div className="grid gap-5 border-t pt-5" style={{ borderColor: C.wa(0.1) }}>
      <div>
        <p
          className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em]"
          style={{ color: C.wa(0.45) }}
        >
          Industry
        </p>
        <p className="font-display text-base leading-relaxed text-white/80 sm:text-lg">
          {project.industry}
        </p>
      </div>
      <div>
        <p
          className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em]"
          style={{ color: C.wa(0.45) }}
        >
          Project type
        </p>
        <p className="font-display text-base leading-relaxed text-white/80 sm:text-lg">
          {project.category}
        </p>
      </div>
    </div>

    <div className="mt-6 border-t pt-5" style={{ borderColor: C.wa(0.1) }}>
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.wa(0.45) }}>
          Case study progress
        </p>
        <p className="text-xs font-bold" style={{ color: C.lime }}>
          {scrollProgress}%
        </p>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full"
        style={{ background: C.wa(0.1) }}
        role="progressbar"
        aria-label="Case study reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={scrollProgress}
      >
        <motion.div
          className="h-full w-full origin-left rounded-full"
          style={{ background: C.lime, scaleX: scrollYProgress }}
        />
      </div>
    </div>

    <div className="mt-5 flex items-center gap-3">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: C.lime }} aria-hidden="true" />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.wa(0.45) }}>
          Solution partner
        </p>
        <p className="mt-1 text-sm font-semibold text-white/80">
          Built by Velnix
        </p>
      </div>
    </div>
  </aside>
);

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  project,
  heroDescription,
  referenceStyle = false,
  pdfDownloadHref,
  heroPreview,
  cta,
}) => {
  const mainRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setScrollProgress(Math.round(value * 100));
  });

  return (
  <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
    <Navbar />

    <section className={`relative w-full overflow-hidden ${referenceStyle ? "pt-36 pb-16 sm:pt-44 sm:pb-20" : "pt-36 pb-24 sm:pt-44 sm:pb-32"}`} style={{ borderBottom: `1px solid ${C.wa(0.08)}` }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: referenceStyle ? `radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.18) 0%, rgba(125,204,0,0.06) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.1) 0%, rgba(125,204,0,0.03) 42%, transparent 76%), linear-gradient(115deg, ${C.graphite} 0%, #090909 58%, ${C.graphite} 100%)` : "radial-gradient(ellipse 90% 80% at 50% 20%, #1e3300 0%, #111d00 35%, #080f00 65%, #050505 100%)" }} />
        {!referenceStyle && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(182,255,0,0.16) 0%, rgba(100,160,0,0.08) 60%, transparent 80%)" }} />}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
      <div className={`relative z-10 mx-auto px-6 sm:px-10 ${referenceStyle ? "max-w-7xl" : "max-w-4xl"}`}>
        <div className={referenceStyle ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.92fr)] lg:gap-14" : ""}>
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.4 }} className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] sm:text-[11px]" style={{ color: C.lime }}>
              <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
              Case Study <span style={{ color: C.wa(0.36) }}>/</span> {project.category}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className={`${referenceStyle ? "max-w-[13ch] font-display text-4xl leading-[1.02] tracking-[-0.055em] text-balance sm:text-5xl lg:text-[4.25rem]" : "text-3xl sm:text-5xl lg:text-[56px] tracking-[-0.04em] leading-tight"} font-black ${heroDescription ? "mb-6" : "mb-8"}`} style={{ color: C.white, WebkitFontSmoothing: "antialiased" }}>
              {project.title}
            </motion.h1>
            {heroDescription && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.55 }}
                className="mb-7 max-w-[46ch] text-base leading-7 sm:text-lg sm:leading-8"
                style={{ color: C.wa(0.7) }}
              >
                {heroDescription}
              </motion.p>
            )}
            {pdfDownloadHref && (
              <motion.a
                href={pdfDownloadHref}
                download
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.19, duration: 0.5 }}
                className="mb-7 inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 py-3 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00]"
                style={{ background: C.lime, color: C.black, boxShadow: "0 0 30px rgba(182,255,0,0.2)" }}
              >
                <Download size={16} aria-hidden="true" />
                Download case study PDF
              </motion.a>
            )}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex flex-wrap gap-2 border-t pt-5" style={{ borderColor: C.wa(0.12) }}>
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.18)}` }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
          {referenceStyle && (
            <div className="lg:border-l lg:pl-8" style={{ borderColor: C.wa(0.14) }}>
              <div
                aria-label={heroPreview?.ariaLabel ?? "Illustrative patient appointment chat preview"}
                className="overflow-hidden rounded-[1.35rem] border shadow-2xl shadow-black/40"
                style={{ background: "linear-gradient(145deg, rgba(22,24,20,0.98), rgba(9,10,9,0.98))", borderColor: C.wa(0.16), boxShadow: "0 28px 90px rgba(0,0,0,0.38), 0 0 0 1px rgba(182,255,0,0.025) inset" }}
              >
                <div className="flex items-center justify-between gap-3 border-b px-4 py-4 sm:px-5" style={{ borderColor: C.wa(0.1), background: "rgba(255,255,255,0.018)" }}>
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: C.la(0.12), color: C.lime }}>
                      <MessageCircle size={19} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white">{heroPreview?.title ?? "Patient Concierge"}</p>
                      <p className="mt-0.5 text-[11px]" style={{ color: C.wa(0.52) }}>{heroPreview?.subtitle ?? "Scheduling assistant"}</p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-semibold sm:text-[10px]" style={{ color: C.lime, borderColor: C.la(0.2), background: C.la(0.06) }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.lime }} aria-hidden="true" />
                    {heroPreview?.status ?? "24/7 access"}
                  </span>
                </div>

                <div className="space-y-4 px-4 py-5 sm:px-5 sm:py-6">
                  <p className="text-center text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: C.wa(0.36) }}>{heroPreview?.conversationLabel ?? "Sample patient conversation"}</p>
                  <div className="ml-auto max-w-[86%] rounded-2xl rounded-br-md border px-4 py-3 text-xs leading-relaxed sm:text-sm" style={{ background: "rgba(255,255,255,0.055)", borderColor: C.wa(0.06), color: C.wa(0.88) }}>
                    {heroPreview?.customerMessage ?? "Hi, I need to schedule a follow-up appointment."}
                  </div>
                  <div className="flex max-w-[92%] items-start gap-2.5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ background: C.lime, color: C.black }}>
                      <MessageCircle size={14} aria-hidden="true" />
                    </span>
                    <div className="rounded-2xl rounded-tl-md border px-4 py-3 text-xs leading-relaxed sm:text-sm" style={{ background: C.wa(0.04), borderColor: C.wa(0.1), color: C.wa(0.86) }}>
                      {heroPreview?.assistantMessage ?? "I can help with that. Which day works best for you?"}
                    </div>
                  </div>
                  <p className="ml-9 max-w-[82%] text-[10px] leading-relaxed sm:text-[11px]" style={{ color: C.wa(0.48) }}>
                    {heroPreview?.supportingText ?? "I found a few options that fit your clinic’s schedule."}
                  </p>
                  <div className="flex flex-wrap gap-2 pl-9">
                    {(heroPreview?.options ?? ["Tuesday · Morning", "Wednesday · Afternoon"]).map((option) => (
                      <span key={option} className="rounded-full border px-3 py-1.5 text-[9px] font-medium sm:text-[10px]" style={{ borderColor: C.la(0.24), color: C.lime, background: C.la(0.05) }}>
                        {option}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-xl border p-3.5 sm:p-4" style={{ borderColor: C.la(0.18), background: "linear-gradient(120deg, rgba(182,255,0,0.08), rgba(255,255,255,0.025))" }}>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: C.lime }}>
                      {heroPreview?.cardIcon === "property"
                        ? <Building2 size={14} aria-hidden="true" />
                        : <CalendarDays size={14} aria-hidden="true" />}
                      {heroPreview?.cardLabel ?? "Suggested appointment"}
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-white sm:text-sm">{heroPreview?.cardTitle ?? "Follow-up visit"}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-[10px] sm:text-[11px]" style={{ color: C.wa(0.54) }}>
                          <Clock3 size={12} aria-hidden="true" />
                          {heroPreview?.cardDetail ?? "Wednesday · 10:30 AM"}
                        </p>
                      </div>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ color: C.lime, background: C.la(0.12) }}>
                        <Check size={15} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border-t pt-3 text-[9px] leading-relaxed sm:text-[10px]" style={{ borderColor: C.wa(0.08), color: C.wa(0.42) }}>
                    <Check size={13} className="shrink-0" style={{ color: C.lime }} aria-hidden="true" />
                    {heroPreview?.footerText ?? "Complex requests can be routed to clinic staff."}
                  </div>
                </div>
              </div>

              {project.metrics.length > 0 && (
                <div className="mt-5">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="min-w-0 rounded-xl border px-3 py-3 sm:px-4" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))", borderColor: C.wa(0.1) }}>
                        <p className="font-display text-xl font-black tracking-[-0.045em] sm:text-2xl" style={{ color: C.lime }}>{metric.stat}</p>
                        <p className="mt-1.5 text-[9px] leading-snug sm:text-[10px]" style={{ color: C.wa(0.62) }}>{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>

    <main ref={mainRef} className="flex-grow w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(260px,0.34fr)_minmax(0,1fr)] lg:gap-16">
        <ProjectDetailsCard
          project={project}
          scrollProgress={scrollProgress}
          scrollYProgress={scrollYProgress}
          referenceStyle={referenceStyle}
        />
        <div className="min-w-0">
      <motion.section
        id="case-study-overview"
        aria-labelledby="case-study-introduction"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="pb-12 sm:pb-16"
      >
        <SectionHeading id="case-study-introduction" title={referenceStyle ? "Overview" : "Introduction"} eyebrow="Project Overview" referenceStyle={referenceStyle} marginClass="mb-4" />
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.wa(0.75) }}>
          {project.introduction}
        </p>
      </motion.section>

      <motion.section
        id="case-study-challenges"
        aria-labelledby="case-study-challenges-solutions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.23, duration: 0.6 }}
        className="border-t py-12 sm:py-16"
        style={{ borderColor: C.wa(0.08) }}
      >
        <SectionHeading id="case-study-challenges-solutions" title={referenceStyle ? "Business Challenges" : "Key Challenges and Solutions"} eyebrow="Operational Context" referenceStyle={referenceStyle} marginClass="mb-8" />
        <div className={referenceStyle ? "" : "grid gap-8 sm:grid-cols-2 sm:gap-12"}>
          <div>
            {!referenceStyle && (
              <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] mb-3" style={{ color: C.lime }}>
                The Challenge
              </h3>
            )}
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.wa(0.75) }}>
              {project.problem}
            </p>
          </div>
          {!referenceStyle && (
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] mb-3" style={{ color: C.lime }}>
                Our Solution
              </h3>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.wa(0.75) }}>
                {project.solution}
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {referenceStyle && <motion.section
        id="case-study-solution"
        aria-labelledby="case-study-solution-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.27, duration: 0.6 }}
        className="border-t py-12 sm:py-16"
        style={{ borderColor: C.wa(0.08) }}
      >
        <SectionHeading id="case-study-solution-heading" title={referenceStyle ? "Solution" : "Our Solution"} eyebrow="Platform Design" referenceStyle={referenceStyle} />
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.wa(0.75) }}>
          {project.solution}
        </p>
      </motion.section>
      }

      {project.keyCapabilities && project.keyCapabilities.length > 0 && (
        <motion.section
          aria-labelledby="case-study-key-capabilities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.31, duration: 0.6 }}
          className="border-t py-12 sm:py-16"
          style={{ borderColor: C.wa(0.08) }}
        >
          <SectionHeading id="case-study-key-capabilities" title="Key Capabilities" eyebrow="System Capabilities" referenceStyle={referenceStyle} />
          <p className="mb-8 text-base leading-relaxed sm:text-lg" style={{ color: C.wa(0.62) }}>
            Connected tools bring core workflows, data, and human expertise into one coordinated experience.
          </p>
          <div className="border-t" style={{ borderColor: C.wa(0.12) }}>
            {project.keyCapabilities.map((capability, index) => (
              <article
                key={`${capability}-${index}`}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-6"
                style={{ borderColor: C.wa(0.12) }}
              >
                <span
                  aria-hidden="true"
                  className="pt-1 text-xs font-bold tracking-[0.16em]"
                  style={{ color: C.lime }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed sm:text-lg" style={{ color: C.wa(0.82) }}>
                  {capability}
                </p>
              </article>
            ))}
          </div>
        </motion.section>
      )}

      {project.approach && project.approach.length > 0 && (
        <motion.section
          aria-labelledby="case-study-our-approach"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.31, duration: 0.6 }}
          className="border-t py-12 sm:py-16"
          style={{ borderColor: C.wa(0.08) }}
        >
          <SectionHeading id="case-study-our-approach" title="Our Approach" eyebrow="Delivery Framework" referenceStyle={referenceStyle} marginClass="mb-8" />
          <div
            className={referenceStyle ? "divide-y border-y" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}
            style={referenceStyle ? { borderColor: C.wa(0.12) } : undefined}
          >
            {project.approach.map((step, index) => (
              <div
                key={`${step}-${index}`}
                className={referenceStyle ? "grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-6" : "rounded-2xl border p-5 sm:p-6"}
                style={referenceStyle ? { borderColor: C.wa(0.12) } : { background: C.la(0.03), borderColor: C.wa(0.08) }}
              >
                <div
                  className={referenceStyle ? "pt-1 text-xs font-bold tracking-[0.16em]" : "mb-4 flex h-9 w-9 items-center justify-center rounded-full text-xs font-black"}
                  style={referenceStyle ? { color: C.lime } : { background: C.lime, color: C.black }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className={referenceStyle ? "text-base leading-relaxed sm:text-lg" : "text-base leading-relaxed"} style={{ color: C.wa(0.8) }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section
        id="case-study-end-results"
        aria-labelledby="case-study-end-results-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.39, duration: 0.6 }}
        className="border-t py-12 sm:py-16"
        style={{ borderColor: C.wa(0.08) }}
      >
        <SectionHeading id="case-study-end-results-heading" title={referenceStyle ? "Measurable Outcomes" : "End Results"} eyebrow="Expected Impact" referenceStyle={referenceStyle} marginClass="mb-4" />
        <p className="text-lg sm:text-xl leading-relaxed" style={{ color: C.wa(0.75) }}>
          {project.outcome}
        </p>
        {!referenceStyle && project.metrics.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3 sm:gap-8" style={{ borderColor: C.wa(0.08) }}>
            {project.metrics.map((metric) => (
              <div key={metric.label} className={referenceStyle ? "text-left" : "text-center"}>
                <p className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: C.lime }}>
                  {metric.stat}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium" style={{ color: C.wa(0.6) }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </motion.section>

      {project.conclusion && (
        <motion.section
          id="case-study-conclusion"
          aria-labelledby="case-study-conclusion-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.47, duration: 0.6 }}
          className="border-t py-12 sm:py-16"
          style={{ borderColor: C.wa(0.08) }}
        >
          <SectionHeading id="case-study-conclusion-heading" title="Conclusion" eyebrow="Looking Ahead" referenceStyle={referenceStyle} marginClass="mb-4" />
          <p className="text-lg sm:text-xl leading-relaxed" style={{ color: C.wa(0.75) }}>
            {project.conclusion}
          </p>
        </motion.section>
      )}
        </div>
      </div>

      <CTA
        eyebrow="Ready to build something similar?"
        title={cta?.title ?? "Bring smarter experiences to your operations."}
        description={cta?.description ?? "We help teams streamline workflows, improve response times, and keep people focused on high-value work."}
        primaryLabel="Start a Similar Project"
        primaryHref="/contact"
        primaryIcon="arrow-right"
        secondaryLabel="All Case Studies"
        secondaryHref="/portfolio"
        variant="centered"
        background="gradient"
        size="md"
        fullWidth
      />

    </main>

    <Footer />
  </div>
  );
};

export default CaseStudyPage;
