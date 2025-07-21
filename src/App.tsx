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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
