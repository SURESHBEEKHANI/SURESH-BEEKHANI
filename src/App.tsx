import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HealthTechAI from "./pages/HealthTechAI";
import EdTechAI from "./pages/EdTechAI";
import FinTechAI from "./pages/FinTechAI";
import GreenTechAI from "./pages/GreenTechAI";
import DiagnosticsAI from "./pages/DiagnosticsAI";
import RetailAI from "./pages/RetailAI";
import ECommerceAI from "./pages/E-Commerce";
import HIPAACompliance from "./pages/HIPAACompliance";
import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
import PredictiveModelling from "./pages/PredictiveModelling";
import ChatGPTIntegrations from "./pages/ChatGPTIntegrations";
import NaturalLanguageProcessing from "./pages/NaturalLanguageProcessing";
import MachineLearning from "./pages/MachineLearning";
import ComputerVisionPro from "./pages/ComputerVisionPro";
import PortfolioPage from "./pages/Portfolio";
import AILaw from "./Pages-Portfolio/ai-driven-law-gpt";
import AIImageGen from "./Pages-Portfolio/ai-powered-image-generator";
import SoMeCreator from "./Pages-Portfolio/social-media-content-creator";
import PatDiag from "./Pages-Portfolio/patient-diagnostic-system";
import LegalAI from "./Pages-Portfolio/ai-legal-contract-analyzer";
import PersonalizedTravelAssistant from "./Pages-Portfolio/personalized-travel-assistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/healthtechai" element={<HealthTechAI />} />
          <Route path="/edtechai" element={<EdTechAI />} />
          <Route path="/fintechai" element={<FinTechAI />} />
          <Route path="/greentechai" element={<GreenTechAI />} />
          <Route path="/diagnosticsai" element={<DiagnosticsAI />} />
          <Route path="/retailai" element={<RetailAI />} />
          <Route path="/e-commerce" element={<ECommerceAI />} />
          <Route path="/hipaacompliance" element={<HIPAACompliance />} />
          <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
          <Route path="/predictive-modelling" element={<PredictiveModelling />} />
          <Route path="/chat-gpt-integrations" element={<ChatGPTIntegrations />} />
          <Route path="/natural-language-processing" element={<NaturalLanguageProcessing />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/computer-vision" element={<ComputerVisionPro />} />
          {/* Portfolio and Case Study Routes */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/ai-driven-law-gpt" element={<AILaw />} />
          <Route path="/portfolio/ai-powered-image-generator" element={<AIImageGen />} />
          <Route path="/portfolio/social-media-content-creator" element={<SoMeCreator />} />
          <Route path="/portfolio/patient-diagnostic-system" element={<PatDiag />} />
          <Route path="/portfolio/ai-legal-contract-analyzer" element={<LegalAI />} />
          <Route path="/portfolio/personalized-travel-assistant" element={<PersonalizedTravelAssistant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
