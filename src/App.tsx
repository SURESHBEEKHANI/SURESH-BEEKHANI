import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import NotFound from "./pages-Services/NotFound";
import HealthTechAI from "./pages-Industries/HealthTechAI";
import EdTechAI from "./pages-Industries/EdTechAI";
import FinTechAI from "./pages-Industries/FinTechAI";
import GreenTechAI from "./pages-Industries/GreenTechAI";
import DiagnosticsAI from "./pages-Industries/DiagnosticsAI";
import RetailAI from "./pages-Industries/RetailAI";
import ECommerceAI from "./pages-Industries/E-Commerce";
import HIPAACompliance from "./pages-Industries/HIPAACompliance";
import AIChatbotDevelopment from "./pages-Services/AIChatbotDevelopment";
import PredictiveModelling from "./pages-Services/PredictiveModelling";
import ChatGPTIntegrations from "./pages-Services/ChatGPTIntegrations";
import NaturalLanguageProcessing from "./pages-Services/NaturalLanguageProcessing";
import MachineLearning from "./pages-Services/MachineLearning";
import ComputerVisionPro from "./pages-Services/ComputerVisionPro";
import AIDevelopment from "./pages-Services/AI-Development";
import PortfolioPage from "./Pages-Portfolio/Portfolio";
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
          <Route path="/ai-development" element={<AIDevelopment />} />
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
