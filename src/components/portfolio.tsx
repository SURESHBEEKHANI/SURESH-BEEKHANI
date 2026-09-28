import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─────────────────────────────────────────────────────────────────────────────
// VELNIX BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  black: "#050505",
  graphite: "#111111",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",

  la: (opacity: number) => `rgba(182,255,0,${opacity})`,
  wa: (opacity: number) => `rgba(255,255,255,${opacity})`,
  ga: (opacity: number) => `rgba(125,204,0,${opacity})`,
};

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics?: {
    stat: string;
    label: string;
  }[];
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// Add your remaining case studies here.
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: "insurance-fraud-detection",
    title: "AI-Powered Fraud Detection for Insurance",
    category: "AI & Automation",
    industry: "Insurance",
    problem:
      "Manual claims investigation made it difficult to identify suspicious patterns quickly.",
    solution:
      "Developed an AI-driven fraud detection system that analyzes claims data and identifies anomalous patterns.",
    outcome:
      "Faster claim investigation with automated risk detection.",
    metrics: [
      {
        stat: "60%",
        label: "Faster Detection",
      },
      {
        stat: "3×",
        label: "Investigation Speed",
      },
      {
        stat: "24/7",
        label: "Monitoring",
      },
    ],
    tags: ["Machine Learning", "Fraud Detection", "Analytics", "Automation"],
    image: "/image/Portfolio-img/ai-powered-fraud-detection.png",
    link: "/portfolio/insurance-fraud-detection",
  },

  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation Platform",
    category: "AI & Automation",
    industry: "Business Operations",
    problem:
      "Repetitive administrative workflows required significant manual effort across teams.",
    solution:
      "Designed an AI automation platform connecting business processes, data sources, and intelligent agents.",
    outcome:
      "Reduced repetitive work and accelerated internal workflows.",
    metrics: [
      {
        stat: "70%",
        label: "Admin Work Reduced",
      },
      {
        stat: "10×",
        label: "Workflow Speed",
      },
      {
        stat: "24/7",
        label: "Automation",
      },
    ],
    tags: ["AI Agents", "Automation", "n8n", "APIs", "Workflows"],
    image: "/image/Portfolio-img/ai-workflow-automation.png",
    link: "/portfolio/ai-workflow-automation",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FILTERS
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_FILTERS = [
  {
    id: "all",
    label: "All Case Studies",
  },
  {
    id: "Healthcare AI",
    label: "Healthcare AI",
  },
  {
    id: "AI & Automation",
    label: "AI & Automation",
  },
  {
    id: "Custom Software",
    label: "Custom Software",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO
// ─────────────────────────────────────────────────────────────────────────────

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") {
      return true;
    }

    return project.category === activeFilter;
  });

  const featuredProject =
    PROJECTS.find((project) => project.featured) || PROJECTS[0];

  return (
    <div
      className="min-h-screen flex flex-col antialiased"
      style={{
        background: C.black,
        color: C.white,
      }}
    >
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* AMBIENT BACKGROUND */}
      {/* ─────────────────────────────────────────────────────────────────── */}

      <div
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/3 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-[140px]"
          style={{
            background: C.la(0.04),
          }}
        />

        <div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-[140px]"
          style={{
            background: C.ga(0.03),
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* MAIN */}
      {/* ─────────────────────────────────────────────────────────────────── */}

      <main className="flex-grow relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* HERO */}
          <section className="w-full mb-16 sm:mb-20">
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1"
                style={{
                  border: `1px solid ${C.la(0.3)}`,
                  background: C.la(0.06),
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: C.lime,
                    boxShadow: `0 0 8px ${C.lime}`,
                  }}
                />

                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: C.lime,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  Selected Work & Proof of Execution
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              style={{
                fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                color: C.white,
                marginBottom: "2rem",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Engineering AI Systems That{" "}
              <span style={{ color: C.lime }}>
                Move Businesses Forward.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                color: C.wa(0.64),
                lineHeight: "1.5rem",
                fontWeight: 400,
                maxWidth: "850px",
              }}
            >
              Explore detailed case studies demonstrating how Velnix
              transforms operational complexity into intelligent software
              systems, automated workflows, and high-performance digital
              products.
            </motion.p>
          </section>

          {/* STATS */}
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-20">
            {[
              {
                number: "45+",
                label: "AI Systems Built",
              },
              {
                number: "23+",
                label: "Clients Served",
              },
              {
                number: "95%",
                label: "Client Satisfaction",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                className="relative p-8"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.08)}`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="text-4xl font-black leading-none tracking-[-0.04em]"
                  style={{
                    color: C.lime,
                  }}
                >
                  {stat.number}
                </div>

                <div
                  className="mt-2 text-xs font-semibold uppercase tracking-[0.14em]"
                  style={{
                    color: C.wa(0.42),
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </section>

          {/* FEATURED CASE STUDY */}
          {featuredProject && activeFilter === "all" && (
            <section className="mb-20">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#B6FF00] mb-4 block">
                Featured Case Study
              </span>

              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.12)}`,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                }}
              >
                {/* IMAGE */}
                <div className="lg:col-span-6 overflow-hidden bg-[#050505] border border-white/10 relative group">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-auto max-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div className="lg:col-span-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.24em]"
                      style={{
                        background: C.la(0.08),
                        color: C.lime,
                        border: `1px solid ${C.la(0.2)}`,
                      }}
                    >
                      {featuredProject.industry}
                    </span>

                    <span className="text-[11px] text-white/50 font-mono">
                      {featuredProject.category}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-[-0.04em] mb-4">
                    {featuredProject.title}
                  </h2>

                  <div className="space-y-3 mb-6 text-base sm:text-lg text-white/64 leading-[1.5rem]">
                    <p>
                      <strong className="text-white">
                        The Challenge:
                      </strong>{" "}
                      {featuredProject.problem}
                    </p>

                    <p>
                      <strong className="text-white">
                        Velnix Solution:
                      </strong>{" "}
                      {featuredProject.solution}
                    </p>
                  </div>

                  {/* METRICS */}
                  {featuredProject.metrics &&
                    featuredProject.metrics.length > 0 && (
                      <div
                        className="grid grid-cols-3 gap-3 mb-8 p-4"
                        style={{
                          background: C.wa(0.02),
                          border: `1px solid ${C.wa(0.06)}`,
                        }}
                      >
                        {featuredProject.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="text-center"
                          >
                            <div
                              className="text-2xl sm:text-3xl font-black leading-none tracking-[-0.04em]"
                              style={{
                                color: C.lime,
                              }}
                            >
                              {metric.stat}
                            </div>

                            <div className="text-[11px] text-white/42 uppercase font-semibold tracking-[0.14em] mt-0.5">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  <Link
                    to={featuredProject.link}
                    className="group/btn inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-black uppercase tracking-[0.24em] transition-all"
                    style={{
                      background: C.lime,
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.background = C.green;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.background = C.lime;
                    }}
                  >
                    View Full Case Study

                    <ArrowRight
                      size={15}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* FILTERS */}
          <section className="mb-12 flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {CATEGORY_FILTERS.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveFilter(category.id)}
                  className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] transition-all duration-200"
                  style={{
                    background:
                      activeFilter === category.id
                        ? C.lime
                        : C.graphite,

                    color:
                      activeFilter === category.id
                        ? C.black
                        : C.wa(0.7),

                    border: `1px solid ${activeFilter === category.id
                        ? C.lime
                        : C.wa(0.1)
                      }`,
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/42">
              Showing {filteredProjects.length} Verified Solutions
            </div>
          </section>

          {/* CASE STUDY GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between p-6 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.08)}`,
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor =
                    C.la(0.35);

                  event.currentTarget.style.background =
                    C.la(0.02);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor =
                    C.wa(0.08);

                  event.currentTarget.style.background =
                    C.graphite;
                }}
              >
                <div>
                  {/* THUMBNAIL */}
                  <div className="overflow-hidden h-36 sm:h-44 mb-5 bg-[#050505] border border-white/5 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <span
                      className="absolute top-3 left-3 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.24em]"
                      style={{
                        background: C.black,
                        color: C.lime,
                        border: `1px solid ${C.la(0.3)}`,
                      }}
                    >
                      {project.industry}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#B6FF00] transition-colors leading-tight tracking-[-0.04em] mb-3">
                    {project.title}
                  </h3>

                  {/* PROBLEM */}
                  <p className="text-sm sm:text-base text-white/64 leading-[1.5rem] mb-4 line-clamp-2">
                    <strong className="text-white/80">
                      Problem:
                    </strong>{" "}
                    {project.problem}
                  </p>

                  {/* OUTCOME */}
                  <div
                    className="p-3 mb-6"
                    style={{
                      background: C.wa(0.03),
                      borderLeft: `2px solid ${C.lime}`,
                    }}
                  >
                    <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/42 mb-0.5">
                      Key Outcome
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-white/90 leading-[1.5rem]">
                      {project.outcome}
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-semibold text-white/64 tracking-[0.08em]"
                        style={{
                          background: C.wa(0.04),
                          border: `1px solid ${C.wa(0.08)}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINK */}
                <Link
                  to={project.link}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-[11px] font-bold uppercase tracking-[0.24em] text-white hover:text-[#B6FF00] transition-colors"
                >
                  <span>View Case Study</span>

                  <ArrowRight
                    size={14}
                    color={C.lime}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </article>
            ))}
          </section>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div
              className="py-20 text-center"
              style={{
                border: `1px solid ${C.wa(0.08)}`,
                background: C.graphite,
              }}
            >
              <p className="text-base text-white/64 leading-[1.5rem]">
                No case studies available in this category yet.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;