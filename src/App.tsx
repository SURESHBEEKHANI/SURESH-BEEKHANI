import { Suspense, lazy, Component, ReactNode, ErrorInfo, useEffect, useRef, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./Index";
import Contact from "./components/Contact";
import NotFound from "./pages-Services/NotFound";
import { SEO } from './components/SEO';

const GA_MEASUREMENT_ID = (import.meta as any).env.VITE_GA_MEASUREMENT_ID || 'G-HBZG5HGKQE';

type Gtag = (...args: [string, ...unknown[]]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
  }
}

// 🧭 Page tracking & scroll restoration hook
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
    window.gtag?.('event', 'visit', {
      event_category: 'User Info',
      event_label: location.pathname,
      non_interaction: true,
    });
  }, [location]);
}

// 📦 Lazy-loaded pages - Industries
const Healthcare = lazy(() => import("./pages-Industries/Healthcare"));
const Fintech = lazy(() => import("./pages-Industries/Fintech"));
const Education = lazy(() => import("./pages-Industries/Education"));
const Ecommerce = lazy(() => import("./pages-Industries/Ecommerce"));
const FoodGroceries = lazy(() => import("./pages-Industries/FoodGroceries"));
const TravelTourism = lazy(() => import("./pages-Industries/TravelTourism"));
const Insurance = lazy(() => import("./pages-Industries/Insurance"));
const OnDemand = lazy(() => import("./pages-Industries/OnDemand"));

// Services
const AIChatbotDevelopment = lazy(() => import("./pages-Services/ChatbotDevelopment"));
const PredictiveModelling = lazy(() => import("./pages-Services/PredictiveModelling"));
const NaturalLanguageProcessing = lazy(() => import("./pages-Services/NaturalLanguageProcessing"));
const MachineLearning = lazy(() => import("./pages-Services/MachineLearning"));
const ComputerVisionPro = lazy(() => import("./pages-Services/ComputerVisionPro"));
const AIDevelopment = lazy(() => import("./pages-Services/AI-Development"));
const AIAutomation = lazy(() => import("./pages-Services/ai-automation"));
const WebDevelopment = lazy(() => import("./pages-Services/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages-Services/AppDevelopment"));
const DevOps = lazy(() => import("./pages-Services/DevOps"));
const CustomSoftware = lazy(() => import("./pages-Services/CustomSoftware"));
const BigDataAnalytics = lazy(() => import("./pages-Services/BigDataAnalytics"));
const AgenticAI = lazy(() => import("./pages-Services/AgenticAI"));
const AIAudit = lazy(() => import("./pages-Services/AIAudit"));

// Blogs
const Blogs = lazy(() => import("./pages-Blogs/Blogs"));
const BlogAdmin = lazy(() => import("./pages-Blogs/BlogAdmin"));

// Portfolio
const PortfolioPage = lazy(() => import("./components/portfolio"));
const AIPoweredElectronicHealthRecord = lazy(() => import("./Pages-Portfolio/AI-Powered-Electronic Health Record"));
const AIPoweredPatientManagementSystem = lazy(() => import("./Pages-Portfolio/ai-powered-patient-management-system"));
const AIPoweredTelemedicineSystems = lazy(() => import("./Pages-Portfolio/AI-Powered-Telemedicine-Systems"));
const AIClinicalDocumentationSystem = lazy(() => import("./Pages-Portfolio/ai-clinical-documentation-system"));
const DiogenesAIChatBot = lazy(() => import("./Pages-Portfolio/diogenes-ai-chatbot"));
const AIPoweredMedicalImagingSystem = lazy(() => import("./Pages-Portfolio/ai-powered-medical-imaging-system"));
const AIAppointmentManagementSystems = lazy(() => import("./Pages-Portfolio/ai-appointment-management-systems"));
const AIPoweredHospitalManagementSystem = lazy(() => import("./Pages-Portfolio/ai-powered-hospital-management-system"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const AboutPage = lazy(() => import("./pages/About"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Careers = lazy(() => import("./pages/Careers"));

import CookieBanner from "./components/CookieBanner";

// ⚠️ Error Boundary
import { ErrorBoundary } from '@/components/ErrorBoundary';

const SiteCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (!cursor || reduceMotion || coarsePointer) return;

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest('a, button, [role="button"], input, select, textarea');
      cursor.style.opacity = '1';
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.style.width = interactive ? '44px' : '22px';
      cursor.style.height = interactive ? '44px' : '22px';
      cursor.style.color = interactive ? '#B6FF00' : 'rgba(255,255,255,0.55)';
    };

    const hideCursor = () => { cursor.style.opacity = '0'; };
    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes velnix-cursor-pulse {
          0%, 100% { box-shadow: 0 0 0 rgba(182,255,0,0); }
          50% { box-shadow: 0 0 14px rgba(182,255,0,0.24); }
        }
      `}</style>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[110] hidden transition-[width,height,color,opacity] duration-200 md:block"
        aria-hidden="true"
        style={{
          width: 22,
          height: 22,
          opacity: 0,
          color: 'rgba(255,255,255,0.55)',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <span
          className="absolute inset-0"
          style={{
            border: '1px solid currentColor',
            animation: 'velnix-cursor-pulse 2.2s ease-in-out infinite',
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
        />
      </div>
    </>
  );
};

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.854L.057 23.882a.5.5 0 0 0 .61.61l6.102-1.458A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.376l-.36-.214-3.724.89.907-3.63-.235-.373A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
);

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '923351312852';
  const openWhatsApp = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2 sm:bottom-7 sm:right-7"
      aria-label="WhatsApp contact options"
    >
      {isOpen && (
        <div className="flex flex-col items-end gap-2">
          <a
            href={openWhatsApp('Hello, I would like to contact HR.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-5 py-3 text-base font-semibold text-black shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: '#25D366', boxShadow: '0 10px 24px rgba(0,0,0,0.24)' }}
          >
            <WhatsAppIcon size={18} />
            Contact HR
          </a>
          <a
            href={openWhatsApp('Hello, I would like to discuss a business project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-5 py-3 text-base font-semibold text-black shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: '#25D366', boxShadow: '0 10px 24px rgba(0,0,0,0.24)' }}
          >
            <WhatsAppIcon size={18} />
            For Business
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close WhatsApp contact options' : 'Open WhatsApp contact options'}
        className="inline-flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl transition-transform duration-200 hover:scale-105"
        style={{ background: '#25D366', boxShadow: '0 12px 28px rgba(37,211,102,0.32)' }}
      >
        <WhatsAppIcon size={32} />
      </button>
    </aside>
  );
};

// Loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: '#050505' }}>
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-t-[#B6FF00] border-r-transparent border-b-[#B6FF00]/30 border-l-transparent border-2.5 animate-spin" style={{ animationDuration: '1s' }} />
        <div className="absolute inset-0 rounded-full border-t-transparent border-r-[#B6FF00]/50 border-b-transparent border-l-[#B6FF00]/20 border-2.5 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#B6FF00] animate-pulse" />
        </div>
      </div>
      <span className="text-sm text-white/70 animate-pulse">Loading...</span>
    </div>
  </div>
);

// React Query setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// ✅ Main App
const AppContent = () => {
  usePageTracking();

  return (
    <>
      <SEO />
      <CookieBanner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Industries */}
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/fintech" element={<Fintech />} />
          <Route path="/education" element={<Education />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
          <Route path="/food-and-groceries" element={<FoodGroceries />} />
          <Route path="/travel-and-tourism" element={<TravelTourism />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/on-demand" element={<OnDemand />} />

          {/* Blogs */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-admin" element={<BlogAdmin />} />

          {/* Services */}
          <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
          <Route path="/predictive-modelling" element={<PredictiveModelling />} />
          <Route path="/natural-language-processing" element={<NaturalLanguageProcessing />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/computer-vision" element={<ComputerVisionPro />} />
          <Route path="/ai-development" element={<AIDevelopment />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/custom-software-development" element={<CustomSoftware />} />
          <Route path="/big-data-analytics" element={<BigDataAnalytics />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/ai-audit" element={<AIAudit />} />

          {/* Portfolio */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/ai-powered-electronic-health-record" element={<AIPoweredElectronicHealthRecord />} />
          <Route path="/portfolio/ai-powered-patient-management-system" element={<AIPoweredPatientManagementSystem />} />
          <Route path="/portfolio/ai-powered-telemedicine-systems" element={<AIPoweredTelemedicineSystems />} />
          <Route path="/portfolio/ai-clinical-documentation-system" element={<AIClinicalDocumentationSystem />} />
          <Route path="/portfolio/diogenes-ai-chatbot" element={<DiogenesAIChatBot />} />
          <Route path="/portfolio/ai-powered-medical-imaging-system" element={<AIPoweredMedicalImagingSystem />} />
          <Route path="/portfolio/ai-appointment-management-systems" element={<AIAppointmentManagementSystems />} />
          <Route path="/portfolio/ai-powered-hospital-management-system" element={<AIPoweredHospitalManagementSystem />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteCursor />
          <WhatsAppWidget />
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
