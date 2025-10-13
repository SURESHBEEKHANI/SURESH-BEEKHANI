import { Suspense, lazy, Component, ReactNode, ErrorInfo, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Index from "./Index";
import NotFound from "./pages-Services/NotFound";
import Chatbot from "@/components/Chatbot";
import ChatbotBoundary from "@/components/ChatbotBoundary";
import ReactGA from "react-ga4";

// ✅ Load Measurement ID from .env
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

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
      user_properties: {
        userAgent,
        screenWidth,
        screenHeight,
      },
    });
  }, [location]);
}

// 📦 Lazy-loaded pages
const HealthTechAI = lazy(() => import("./pages-Industries/HealthTechAI"));
const EdTechAI = lazy(() => import("./pages-Industries/EdTechAI"));
const FinTechAI = lazy(() => import("./pages-Industries/FinTechAI"));
const GreenTechAI = lazy(() => import("./pages-Industries/GreenTechAI"));
const DiagnosticsAI = lazy(() => import("./pages-Industries/DiagnosticsAI"));
const RetailAI = lazy(() => import("./pages-Industries/RetailAI"));
const ECommerceAI = lazy(() => import("./pages-Industries/E-Commerce"));
const HIPAACompliance = lazy(() => import("./pages-Industries/HIPAACompliance"));

// Services
const AIChatbotDevelopment = lazy(() => import("./pages-Services/ChatbotDevelopment"));
const PredictiveModelling = lazy(() => import("./pages-Services/PredictiveModelling"));
const ChatGPTIntegrations = lazy(() => import("./pages-Services/ChatGPTIntegrations"));
const NaturalLanguageProcessing = lazy(() => import("./pages-Services/NaturalLanguageProcessing"));
const MachineLearning = lazy(() => import("./pages-Services/MachineLearning"));
const ComputerVisionPro = lazy(() => import("./pages-Services/ComputerVisionPro"));
const AIDevelopment = lazy(() => import("./pages-Services/AI-Development"));
const AIAutomation = lazy(() => import("./pages-Services/ai-automation"));

// Portfolio
const PortfolioPage = lazy(() => import("./Pages-Portfolio/Portfolio"));
const AILaw = lazy(() => import("./Pages-Portfolio/ai-driven-law-gpt"));
const AIImageGen = lazy(() => import("./Pages-Portfolio/ai-powered-image-generator"));
const SoMeCreator = lazy(() => import("./Pages-Portfolio/social-media-content-creator"));
const PatDiag = lazy(() => import("./Pages-Portfolio/patient-diagnostic-system"));
const LegalAI = lazy(() => import("./Pages-Portfolio/ai-legal-contract-analyzer"));
const PersonalizedTravelAssistant = lazy(() => import("./Pages-Portfolio/personalized-travel-assistant"));
const EarlyDiseaseDetectionAI = lazy(() => import("./Pages-Portfolio/EarlyDiseaseDetectionAI"));
const RealTimeFraudDetection = lazy(() => import("./Pages-Portfolio/RealTimeFraudDetection"));
const PersonalizedLearningAI = lazy(() => import("./Pages-Portfolio/PersonalizedLearningAI"));
const SolarOutputForecasting = lazy(() => import("./Pages-Portfolio/SolarOutputForecasting"));
const DynamicShelfRestocking = lazy(() => import("./Pages-Portfolio/DynamicShelfRestocking"));
const ProductRecommendationAI = lazy(() => import("./Pages-Portfolio/ProductRecommendationAI"));
const RadiologyReportGenerator = lazy(() => import("./Pages-Portfolio/RadiologyReportGenerator"));
const FederatedPrivacyCompliance = lazy(() => import("./Pages-Portfolio/FederatedPrivacyCompliance"));

// ⚠️ Error Boundary
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <LoadingSpinner size="lg" text="Loading..." />
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
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Index />} />

        {/* Industries */}
        <Route path="/healthtechai" element={<HealthTechAI />} />
        <Route path="/edtechai" element={<EdTechAI />} />
        <Route path="/fintechai" element={<FinTechAI />} />
        <Route path="/greentechai" element={<GreenTechAI />} />
        <Route path="/diagnosticsai" element={<DiagnosticsAI />} />
        <Route path="/retailai" element={<RetailAI />} />
        <Route path="/e-commerce" element={<ECommerceAI />} />
        <Route path="/hipaacompliance" element={<HIPAACompliance />} />

        {/* Services */}
        <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
        <Route path="/predictive-modelling" element={<PredictiveModelling />} />
        <Route path="/chat-gpt-integrations" element={<ChatGPTIntegrations />} />
        <Route path="/natural-language-processing" element={<NaturalLanguageProcessing />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/computer-vision" element={<ComputerVisionPro />} />
        <Route path="/ai-development" element={<AIDevelopment />} />
        <Route path="/ai-automation" element={<AIAutomation />} />

        {/* Portfolio */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/ai-driven-law-gpt" element={<AILaw />} />
        <Route path="/portfolio/ai-powered-image-generator" element={<AIImageGen />} />
        <Route path="/portfolio/social-media-content-creator" element={<SoMeCreator />} />
        <Route path="/portfolio/patient-diagnostic-system" element={<PatDiag />} />
        <Route path="/portfolio/ai-legal-contract-analyzer" element={<LegalAI />} />
        <Route path="/portfolio/personalized-travel-assistant" element={<PersonalizedTravelAssistant />} />
        <Route path="/portfolio/early-disease-detection-ai" element={<EarlyDiseaseDetectionAI />} />
        <Route path="/portfolio/real-time-fraud-detection" element={<RealTimeFraudDetection />} />
        <Route path="/portfolio/personalized-learning-ai" element={<PersonalizedLearningAI />} />
        <Route path="/portfolio/solar-output-forecasting" element={<SolarOutputForecasting />} />
        <Route path="/portfolio/dynamic-shelf-restocking" element={<DynamicShelfRestocking />} />
        <Route path="/portfolio/product-recommendation-ai" element={<ProductRecommendationAI />} />
        <Route path="/portfolio/radiology-report-generator" element={<RadiologyReportGenerator />} />
        <Route path="/portfolio/federated-privacy-compliance" element={<FederatedPrivacyCompliance />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Chatbot */}
      <ChatbotBoundary>
        <Chatbot />
      </ChatbotBoundary>
    </Suspense>
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
