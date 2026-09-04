import { Suspense, lazy, Component, ReactNode, ErrorInfo, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Index from "./Index";
import Contact from "./components/Contact";
import NotFound from "./pages-Services/NotFound";
import ReactGA from "react-ga4";

// ✅ Load Measurement ID from .env
const GA_MEASUREMENT_ID = (import.meta as any).env.VITE_GA_MEASUREMENT_ID;

// ✅ Initialize Google Analytics once
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  console.log("✅ Google Analytics Initialized:", GA_MEASUREMENT_ID);
} else {
  console.warn("⚠️ Google Analytics Measurement ID not found!");
}

// 🧭 Page tracking hook
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Track a page view
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title,
    });

    // Capture user environment info
    const userAgent = navigator.userAgent;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Send custom event (optional for deeper analytics)
    ReactGA.event({
      category: "User Info",
      action: "Visit",
      label: location.pathname,
      nonInteraction: true,
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

import CookieBanner from "./components/CookieBanner";

// ⚠️ Error Boundary
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: '#0a0435' }}>
    <LoadingSpinner size="lg" text="Loading..." className="text-primary" />
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
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
