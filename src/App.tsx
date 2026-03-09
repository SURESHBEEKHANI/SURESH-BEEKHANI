import { Suspense, lazy, Component, ReactNode, ErrorInfo, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Index from "./Index";
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
const FinTech = lazy(() => import("./pages-Industries/FinTech"));
const HealthTech = lazy(() => import("./pages-Industries/HealthTech"));
const RetailTech = lazy(() => import("./pages-Industries/RetailTech"));
const EdTech = lazy(() => import("./pages-Industries/EdTech"));
const FitTech = lazy(() => import("./pages-Industries/FitTech"));
const LegalTech = lazy(() => import("./pages-Industries/LegalTech"));
const WealthTech = lazy(() => import("./pages-Industries/WealthTech"));
const ITSoftware = lazy(() => import("./pages-Industries/ITSoftware"));

// Services
const AIChatbotDevelopment = lazy(() => import("./pages-Services/ChatbotDevelopment"));
const PredictiveModelling = lazy(() => import("./pages-Services/PredictiveModelling"));
const ChatGPTIntegrations = lazy(() => import("./pages-Services/ChatGPTIntegrations"));
const NaturalLanguageProcessing = lazy(() => import("./pages-Services/NaturalLanguageProcessing"));
const MachineLearning = lazy(() => import("./pages-Services/MachineLearning"));
const ComputerVisionPro = lazy(() => import("./pages-Services/ComputerVisionPro"));
const AIDevelopment = lazy(() => import("./pages-Services/AI-Development"));
const AIAutomation = lazy(() => import("./pages-Services/ai-automation"));

// Blogs
const Blogs = lazy(() => import("./pages-Blogs/Blogs"));
const BlogAdmin = lazy(() => import("./pages-Blogs/BlogAdmin"));

// Portfolio
const PortfolioPage = lazy(() => import("./components/portfolio"));
const AIFraudDetectionSystem = lazy(() => import("./Pages-Portfolio/ai-fraud-detection-system"));
const AIPersonalFinanceAdvisor = lazy(() => import("./Pages-Portfolio/ai-personal-finance-advisor"));
const AIPoweredElectronicHealthRecord = lazy(() => import("./Pages-Portfolio/AI-Powered-Electronic Health Record"));
const AIMedicalImagingAssistant = lazy(() => import("./Pages-Portfolio/ai-medical-imaging-assistant"));
const AIProductRecommendationEngine = lazy(() => import("./Pages-Portfolio/ai-product-recommendation-engine"));
const AIDemandForecastingSystem = lazy(() => import("./Pages-Portfolio/ai-demand-forecasting-system"));
const AIPersonalizedLearningPlatform = lazy(() => import("./Pages-Portfolio/ai-personalized-learning-platform"));
const AIAutomatedGradingSystem = lazy(() => import("./Pages-Portfolio/ai-automated-grading-system"));
const AIPersonalFitnessCoach = lazy(() => import("./Pages-Portfolio/ai-personal-fitness-coach"));
const AINutritionPlanner = lazy(() => import("./Pages-Portfolio/ai-nutrition-planner"));
const AIContractAnalysisSystem = lazy(() => import("./Pages-Portfolio/ai-contract-analysis-system"));
const AILegalResearchAssistant = lazy(() => import("./Pages-Portfolio/ai-legal-research-assistant"));
const AIRoboAdvisor = lazy(() => import("./Pages-Portfolio/ai-robo-advisor"));
const AIPortfolioRiskAnalyzer = lazy(() => import("./Pages-Portfolio/ai-portfolio-risk-analyzer"));
const AIDevOpsMonitoringAssistant = lazy(() => import("./Pages-Portfolio/ai-devops-monitoring-assistant"));
const AIITSupportChatbot = lazy(() => import("./Pages-Portfolio/ai-it-support-chatbot"));

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
        <Route path="/fintech" element={<FinTech />} />
        <Route path="/healthtech" element={<HealthTech />} />
        <Route path="/retailtech" element={<RetailTech />} />
        <Route path="/edtech" element={<EdTech />} />
        <Route path="/fittech" element={<FitTech />} />
        <Route path="/legaltech" element={<LegalTech />} />
        <Route path="/wealthtech" element={<WealthTech />} />
        <Route path="/it-software" element={<ITSoftware />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-admin" element={<BlogAdmin />} />

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
        <Route path="/portfolio/ai-fraud-detection-system" element={<AIFraudDetectionSystem />} />
        <Route path="/portfolio/ai-personal-finance-advisor" element={<AIPersonalFinanceAdvisor />} />
        <Route path="/portfolio/ai-powered-electronic-health-record" element={<AIPoweredElectronicHealthRecord />} />
        <Route path="/portfolio/ai-medical-imaging-assistant" element={<AIMedicalImagingAssistant />} />
        <Route path="/portfolio/ai-product-recommendation-engine" element={<AIProductRecommendationEngine />} />
        <Route path="/portfolio/ai-demand-forecasting-system" element={<AIDemandForecastingSystem />} />
        <Route path="/portfolio/ai-personalized-learning-platform" element={<AIPersonalizedLearningPlatform />} />
        <Route path="/portfolio/ai-automated-grading-system" element={<AIAutomatedGradingSystem />} />
        <Route path="/portfolio/ai-personal-fitness-coach" element={<AIPersonalFitnessCoach />} />
        <Route path="/portfolio/ai-nutrition-planner" element={<AINutritionPlanner />} />
        <Route path="/portfolio/ai-contract-analysis-system" element={<AIContractAnalysisSystem />} />
        <Route path="/portfolio/ai-legal-research-assistant" element={<AILegalResearchAssistant />} />
        <Route path="/portfolio/ai-robo-advisor" element={<AIRoboAdvisor />} />
        <Route path="/portfolio/ai-portfolio-risk-analyzer" element={<AIPortfolioRiskAnalyzer />} />
        <Route path="/portfolio/ai-devops-monitoring-assistant" element={<AIDevOpsMonitoringAssistant />} />
        <Route path="/portfolio/ai-it-support-chatbot" element={<AIITSupportChatbot />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
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
