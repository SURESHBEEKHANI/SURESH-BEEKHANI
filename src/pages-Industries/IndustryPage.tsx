import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import LatestBlogs from "../components/LatestBlogs";

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
}

const IndustryPage: React.FC<{ config: IndustryPageConfig }> = ({ config }) => {
  const useCases = useMemo(() => config.useCases, [config.useCases]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="relative isolate w-full overflow-hidden bg-[#050505] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
              Industry Solution
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
              {config.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {config.heroDescription}
            </p>
          </div>
        </div>
      </section>
      <AnimatedCarousel
        useCases={useCases}
        title={config.carouselTitle}
        subtitle={config.carouselSubtitle}
      />
      <LatestBlogs />
      <Footer />
    </div>
  );
};

export default IndustryPage;
