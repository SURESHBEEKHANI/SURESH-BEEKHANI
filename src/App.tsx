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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
