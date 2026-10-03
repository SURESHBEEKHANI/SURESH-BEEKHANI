import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import LatestBlogs from "../components/LatestBlogs";
import { useReducedMotion } from "@/hooks/useAnimations";

export interface IndustryUseCase {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface IndustryCapability {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface IndustryFAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface IndustryPageConfig {
  title: string;
  tagline?: string;
  heroDescription: string;
  bgImage: string;
  carouselTitle: string;
  carouselSubtitle: string;
  useCases: IndustryUseCase[];
  // Optional fields for compatibility with industriesContent
  professionalTitle?: string;
  professionalHighlight?: string;
  description1?: string;
  description2?: string;
  capabilitiesTitle?: string;
  capabilitiesHighlight?: string;
  storiesTitle?: string;
  storiesHighlight?: string;
  storiesSubtitle?: string;
  storiesSubtitleHighlight?: string;
  faqHighlight?: string;
  capabilities?: IndustryCapability[];
  faqData?: IndustryFAQItem[];
  visualTheme?: "velnix-dark";
}

const IndustryPage: React.FC<{ config: IndustryPageConfig }> = ({ config }) => {
  const useCases = useMemo(() => config.useCases, [config.useCases]);
  const isVelnixDark = config.visualTheme === "velnix-dark";
  const shouldReduce = useReducedMotion();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className={`flex min-h-screen flex-col ${isVelnixDark
      ? "antialiased font-sans bg-[#050505] text-white selection:bg-[#B6FF00] selection:text-[#050505] [&>section:not(:first-of-type)]:!py-8 sm:[&>section:not(:first-of-type)]:!py-10 lg:[&>section:not(:first-of-type)]:!py-12"
      : "bg-white"
    }`}>
      <Navbar />
      <section
        className={`relative isolate w-full overflow-hidden text-white ${
          isVelnixDark ? "font-display" : "bg-[#050505] py-24 sm:py-32"
        }`}
        style={isVelnixDark ? {
          background: "radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.16) 0%, rgba(125,204,0,0.05) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.08) 0%, rgba(125,204,0,0.025) 42%, transparent 76%), #050505",
        } : undefined}
      >
        {isVelnixDark && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B6FF00]/25 to-transparent" />
            <div className="absolute -right-40 -top-48 h-[32rem] w-[32rem] rounded-full bg-[#B6FF00]/[0.08] blur-[100px]" />
            <div className="absolute -bottom-48 -left-40 h-[26rem] w-[26rem] rounded-full bg-[#7DCC00]/[0.08] blur-[90px]" />
          </div>
        )}
        <div className={`relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isVelnixDark
            ? "grid items-center gap-10 pb-12 pt-24 sm:pb-16 sm:pt-28 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20 lg:pb-20 lg:pt-32"
            : ""
        }`}>
          <div className={isVelnixDark ? "max-w-2xl" : ""}>
            {isVelnixDark ? (
              <motion.span
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduce ? { duration: 0 } : { delay: 0.1, duration: 0.6, ease }}
                className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#B6FF00]"
              >
                <span className="h-px w-6 bg-[#B6FF00]" aria-hidden="true" />
                Industry Solution
              </motion.span>
            ) : (
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                Industry Solution
              </span>
            )}
            <motion.h1
              initial={isVelnixDark && !shouldReduce ? { opacity: 0, y: 24 } : false}
              animate={isVelnixDark ? { opacity: 1, y: 0 } : undefined}
              transition={shouldReduce ? { duration: 0 } : { delay: 0.2, duration: 0.65, ease }}
              className={`mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl ${
                isVelnixDark ? "mb-5 max-w-4xl font-display font-black leading-tight tracking-[-0.04em]" : ""
              }`}
            >
              {config.title}
            </motion.h1>
            <motion.p
              initial={isVelnixDark && !shouldReduce ? { opacity: 0, y: 20 } : false}
              animate={isVelnixDark ? { opacity: 1, y: 0 } : undefined}
              transition={shouldReduce ? { duration: 0 } : { delay: 0.3, duration: 0.65, ease }}
              className={`mt-6 text-lg leading-8 text-white/70 ${
                isVelnixDark ? "mb-0 mt-0 max-w-xl text-base font-normal leading-8 text-white/70 sm:text-lg" : ""
              }`}
            >
              {config.heroDescription}
            </motion.p>
          </div>
          {isVelnixDark && (
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduce ? { duration: 0 } : { delay: 0.4, duration: 0.8, ease }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-8 rounded-full bg-[#B6FF00]/[0.06] blur-[70px]" aria-hidden="true" />
              <img
                src={config.bgImage}
                alt="AI-powered hospital management system"
                className="relative z-10 h-auto w-full max-w-md object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)] transition-transform duration-700 hover:scale-[1.02] sm:max-w-lg lg:max-w-xl"
              />
            </motion.div>
          )}
        </div>
      </section>
      {isVelnixDark && config.professionalTitle && config.professionalHighlight && config.description1 && config.description2 && (
        <section className="relative isolate overflow-hidden bg-[#050505] px-4 font-display sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease }}
            >
              <div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#B6FF00]">
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
                {config.title}
              </div>
              <h2 className="max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                {config.professionalTitle}{" "}
                <span className="text-[#B6FF00]">{config.professionalHighlight}</span>
              </h2>
            </motion.div>
            <div className="grid content-center gap-5 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {[config.description1, config.description2].map((description, index) => (
                <motion.p
                  key={description}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={shouldReduce ? { duration: 0 } : { duration: 0.55, delay: index * 0.08, ease }}
                  className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
                >
                  {description}
                </motion.p>
              ))}
            </div>
          </div>
        </section>
      )}
      <AnimatedCarousel
        useCases={useCases}
        title={config.carouselTitle}
        subtitle={config.carouselSubtitle}
        appearance={config.visualTheme}
      />
      {isVelnixDark && config.capabilities?.length && config.capabilitiesTitle && config.capabilitiesHighlight && (
        <section className="relative isolate overflow-hidden bg-[#050505] px-4 font-display sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B6FF00]/15 to-transparent" />
            <div className="absolute -right-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#7DCC00]/[0.05] blur-[100px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl">
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease }}
              className="mb-8 sm:mb-10"
            >
              <div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#B6FF00]">
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
                Capabilities
              </div>
              <h2 className="mb-4 max-w-[22ch] text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                {config.capabilitiesTitle}{" "}
                <span className="text-[#B6FF00]">{config.capabilitiesHighlight}</span>
              </h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {config.capabilities.map((capability, index) => (
                <motion.article
                  key={capability.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.06, ease }}
                  className="group relative flex min-h-48 flex-col overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/40 hover:shadow-[0_0_36px_rgba(182,255,0,0.08)] sm:p-6"
                >
                  <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-[#B6FF00]/25 bg-[#B6FF00]/[0.04] text-[#B6FF00] transition-colors duration-300 group-hover:bg-[#B6FF00] group-hover:text-[#050505]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={capability.icon} />
                      </svg>
                    </span>
                    <span className="font-mono text-sm font-bold tracking-[0.15em] text-white/30" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-bold tracking-[-0.03em] text-white transition-colors duration-200 group-hover:text-[#B6FF00] sm:text-lg">
                    {capability.title}
                  </h3>
                  <p className="max-w-[42ch] flex-1 text-sm leading-6 text-white/60 sm:text-base">
                    {capability.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
      {isVelnixDark && config.faqData?.length && (
        <section className="relative isolate overflow-hidden bg-[#050505] px-4 font-display sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-[#7DCC00]/[0.04] blur-[100px]" />
          </div>
          <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
                className="mb-6 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#B6FF00]"
              >
                <span className="h-px w-8 bg-[#B6FF00]" aria-hidden="true" />
                Common Questions
              </motion.div>
              <motion.h2
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease }}
                className="max-w-[18ch] text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl"
              >
                Everything You Need to Know About{" "}
                <span className="text-[#B6FF00]">{config.faqHighlight || config.title}</span>
              </motion.h2>
            </div>
            <div className="space-y-1">
              {config.faqData.map((item, index) => {
                const isOpen = expandedFaq === item.id;
                const answerId = `industry-faq-answer-${item.id}`;

                return (
                  <motion.div
                    key={item.id}
                    initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.05, ease }}
                    className="border-b border-white/[0.08] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : item.id)}
                      className="group flex w-full items-center justify-between gap-4 py-4 text-left transition-colors duration-300"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span className="text-base font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#B6FF00] sm:text-lg">
                        {item.question}
                      </span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center text-white/55 transition-all duration-300 group-hover:text-[#B6FF00]"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                        aria-hidden="true"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={answerId}
                          initial={shouldReduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={shouldReduce ? undefined : { height: 0, opacity: 0 }}
                          transition={shouldReduce ? { duration: 0 } : { duration: 0.3, ease }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-4 text-sm leading-7 text-white/60 sm:text-base">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <LatestBlogs />
      <Footer />
    </div>
  );
};

export default IndustryPage;
