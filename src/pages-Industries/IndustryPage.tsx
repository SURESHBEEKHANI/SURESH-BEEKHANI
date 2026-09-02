import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import IndustryHero from "../components/IndustryHero";
import IndustryProfessional from "../components/IndustryProfessional";
import IndustryCapabilities from "../components/IndustryCapabilities";
import IndustrySuccessStories from "../components/IndustrySuccessStories";
import LatestBlogs from "../components/LatestBlogs";
import IndustryFAQ from "../components/IndustryFAQ";

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
  tagline: string;
  heroDescription: string;
  bgImage: string;
  professionalTitle: string;
  professionalHighlight: string;
  description1: string;
  description2: string;
  capabilitiesTitle: string;
  capabilitiesHighlight: string;
  carouselTitle: string;
  carouselSubtitle: string;
  storiesTitle: string;
  storiesHighlight: string;
  storiesSubtitle: string;
  storiesSubtitleHighlight: string;
  faqHighlight: string;
  useCases: IndustryUseCase[];
  capabilities: IndustryCapability[];
  faqData: IndustryFAQItem[];
}

const PORTFOLIO_DATA = [
  {
    title: "AI-Powered Electronic Health Record",
    description: "Streamline healthcare data management and improve patient outcomes with AI-powered EHR systems.",
    image: "/image/Portfolio-img/ai-powered-ehr.jpg",
    link: "/portfolio/ai-powered-electronic-health-record",
  },
  {
    title: "AI-Powered Patient Management System",
    description: "Unified patient records, intelligent care coordination, and predictive insights for proactive population health management.",
    image: "/image/Portfolio-img/AI-Powered Patient Management System.png",
    link: "/portfolio/ai-powered-patient-management-system",
  },
  {
    title: "AI Appointment Management Systems",
    description: "Intelligent scheduling that automates bookings, reduces no-shows, and optimizes appointment workflows.",
    image: "/image/Portfolio-img/AI Appointment Management Systems.png",
    link: "/portfolio/ai-appointment-management-systems",
  },
  {
    title: "AI-Powered Hospital Management System",
    description: "Unified operations platform with AI-driven scheduling, staffing, and supply chain optimization.",
    image: "/image/Portfolio-img/AI-Powered Hospital Management System.png",
    link: "/portfolio/ai-powered-hospital-management-system",
  },
  {
    title: "Diogenes AI ChatBot",
    description: "An intelligent AI chatbot that delivers real-time, context-aware conversations for support and operations.",
    image: "/image/Portfolio-img/Diogenes AI ChatBot.png",
    link: "/portfolio/diogenes-ai-chatbot",
  },
  {
    title: "AI-Powered Medical Imaging System",
    description: "AI that pre-screens imaging studies, highlights suspicious regions, and prioritizes high-risk cases.",
    image: "/image/Portfolio-img/AI-Powered Medical Imaging System.png",
    link: "/portfolio/ai-powered-medical-imaging-system",
  },
];

const IndustryPage: React.FC<{ config: IndustryPageConfig }> = ({ config }) => {
  const useCases = useMemo(() => config.useCases, [config.useCases]);
  const faqData = useMemo(() => config.faqData, [config.faqData]);
  const portfolioData = useMemo(() => PORTFOLIO_DATA, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <IndustryHero
        title={config.title}
        description={config.heroDescription}
        bgImage={config.bgImage}
      />
      <IndustryProfessional
        title={config.professionalTitle}
        highlightedTitle={config.professionalHighlight}
        description1={config.description1}
        description2={config.description2}
        image={config.bgImage}
      />
      <IndustryCapabilities
        title={config.capabilitiesTitle}
        highlightedTitle={config.capabilitiesHighlight}
        capabilities={config.capabilities}
      />
      <AnimatedCarousel
        useCases={useCases}
        title={config.carouselTitle}
        subtitle={config.carouselSubtitle}
      />
      <IndustrySuccessStories
        portfolioData={portfolioData}
        title={config.storiesTitle}
        highlightedTitle={config.storiesHighlight}
        subtitle={config.storiesSubtitle}
        highlightedSubtitle={config.storiesSubtitleHighlight}
      />
      <LatestBlogs />
      <IndustryFAQ
        faqData={faqData}
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about AI for"
        highlightedSubtitle={config.faqHighlight}
      />
      <Footer />
    </div>
  );
};

export default IndustryPage;
