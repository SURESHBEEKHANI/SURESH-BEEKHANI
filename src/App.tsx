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

// 📦 Lazy-loaded pages - AI Healthcare Industries
const HospitalsClinics = lazy(() => import("./pages-Industries/HospitalsClinics"));
const TelemedicineDigitalHealth = lazy(() => import("./pages-Industries/TelemedicineDigitalHealth"));
const MentalHealthWellness = lazy(() => import("./pages-Industries/MentalHealthWellness"));
const MedicalImagingDiagnostics = lazy(() => import("./pages-Industries/MedicalImagingDiagnostics"));
const DrugDiscoveryBiotech = lazy(() => import("./pages-Industries/DrugDiscoveryBiotech"));
const GenomicsPersonalizedMedicine = lazy(() => import("./pages-Industries/GenomicsPersonalizedMedicine"));
const HealthcareIoTSmartDevicesIndustry = lazy(() => import("./pages-Industries/HealthcareIoTSmartDevices"));
const HealthDataPrivacySecurity = lazy(() => import("./pages-Industries/HealthDataPrivacySecurity"));

// Services
const AIChatbotDevelopment = lazy(() => import("./pages-Services/ChatbotDevelopment"));
const PredictiveModelling = lazy(() => import("./pages-Services/PredictiveModelling"));
const ChatGPTIntegrations = lazy(() => import("./pages-Services/ChatGPTIntegrations"));
const NaturalLanguageProcessing = lazy(() => import("./pages-Services/NaturalLanguageProcessing"));
const MachineLearning = lazy(() => import("./pages-Services/MachineLearning"));
const ComputerVisionPro = lazy(() => import("./pages-Services/ComputerVisionPro"));
const AIDevelopment = lazy(() => import("./pages-Services/AI-Development"));
const AIAutomation = lazy(() => import("./pages-Services/ai-automation"));

// Portfolio - Healthcare AI Solutions
const PortfolioPage = lazy(() => import("./components/portfolio"));
const PatientDiagnosticSystem = lazy(() => import("./Pages-Portfolio/patient-diagnostic-system.tsx"));
const EarlyDiseaseDetectionAI = lazy(() => import("./Pages-Portfolio/early-disease-detection-ai.tsx"));
const RadiologyReportGenerator = lazy(() => import("./Pages-Portfolio/radiology-report-generator.tsx"));
const RemotePatientMonitoring = lazy(() => import("./Pages-Portfolio/remote-patient-monitoring.tsx"));
const PersonalizedWellnessAI = lazy(() => import("./Pages-Portfolio/personalized-wellness-ai.tsx"));
const CBTTherapyAI = lazy(() => import("./Pages-Portfolio/cbt-therapy-ai.tsx"));
const GenomicRiskAnalysis = lazy(() => import("./Pages-Portfolio/genomic-risk-analysis.tsx"));
const PrecisionMedicineSupport = lazy(() => import("./Pages-Portfolio/precision-medicine-support.tsx"));
const DrugDiscoveryAI = lazy(() => import("./Pages-Portfolio/drug-discovery-ai.tsx"));
const HealthcareIoTSmartDevices = lazy(() => import("./Pages-Portfolio/healthcare-iot-smart-devices.tsx"));
const HealthcareWorkflowAutomation = lazy(() => import("./Pages-Portfolio/healthcare-workflow-automation.tsx"));
const AIChatbotsPatientSupport = lazy(() => import("./Pages-Portfolio/ai-chatbots-patient-support.tsx"));
const FederatedPrivacyCompliance = lazy(() => import("./Pages-Portfolio/federated-privacy-compliance.tsx"));
const MedicalAnomalyDetection = lazy(() => import("./Pages-Portfolio/medical-anomaly-detection.tsx"));

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

        {/* AI Healthcare Industries */}
        <Route path="/hospitalsclinics" element={<HospitalsClinics />} />
        <Route path="/telemedicinedigitalhealth" element={<TelemedicineDigitalHealth />} />
        <Route path="/mentalhealthwellness" element={<MentalHealthWellness />} />
        <Route path="/medicalimagingdiagnostics" element={<MedicalImagingDiagnostics />} />
        <Route path="/drugdiscoverybiotech" element={<DrugDiscoveryBiotech />} />
        <Route path="/genomicspersonalizedmedicine" element={<GenomicsPersonalizedMedicine />} />
        <Route path="/healthcareiotsmartdevices" element={<HealthcareIoTSmartDevicesIndustry />} />
        <Route path="/healthdataprivacysecurity" element={<HealthDataPrivacySecurity />} />

        {/* Services */}
        <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
        <Route path="/predictive-modelling" element={<PredictiveModelling />} />
        <Route path="/chat-gpt-integrations" element={<ChatGPTIntegrations />} />
        <Route path="/natural-language-processing" element={<NaturalLanguageProcessing />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/computer-vision" element={<ComputerVisionPro />} />
        <Route path="/ai-development" element={<AIDevelopment />} />
        <Route path="/ai-automation" element={<AIAutomation />} />

        {/* Portfolio - Healthcare AI Solutions */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/patient-diagnostic-system" element={<PatientDiagnosticSystem />} />
        <Route path="/portfolio/early-disease-detection-ai" element={<EarlyDiseaseDetectionAI />} />
        <Route path="/portfolio/radiology-report-generator" element={<RadiologyReportGenerator />} />
        <Route path="/portfolio/remote-patient-monitoring" element={<RemotePatientMonitoring />} />
        <Route path="/portfolio/personalized-wellness-ai" element={<PersonalizedWellnessAI />} />
        <Route path="/portfolio/cbt-therapy-ai" element={<CBTTherapyAI />} />
        <Route path="/portfolio/genomic-risk-analysis" element={<GenomicRiskAnalysis />} />
        <Route path="/portfolio/precision-medicine-support" element={<PrecisionMedicineSupport />} />
        <Route path="/portfolio/drug-discovery-ai" element={<DrugDiscoveryAI />} />
        <Route path="/portfolio/healthcare-iot-smart-devices" element={<HealthcareIoTSmartDevices />} />
        <Route path="/portfolio/healthcare-workflow-automation" element={<HealthcareWorkflowAutomation />} />
        <Route path="/portfolio/ai-chatbots-patient-support" element={<AIChatbotsPatientSupport />} />
        <Route path="/portfolio/federated-privacy-compliance" element={<FederatedPrivacyCompliance />} />
        <Route path="/portfolio/medical-anomaly-detection" element={<MedicalAnomalyDetection />} />

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
