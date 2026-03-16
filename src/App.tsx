import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CivilWorkPage from "./pages/CivilWorkPage";
import MechanicalWorkPage from "./pages/MechanicalWorkPage";
import ElectricalWorkPage from "./pages/ElectricalWorkPage";
import WaterproofingPage from "./pages/WaterproofingPage";
import PipelineWorkPage from "./pages/PipelineWorkPage";
import PlumbingWorkPage from "./pages/PlumbingWorkPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/civil-work" element={<CivilWorkPage />} />
          <Route path="/mechanical-work" element={<MechanicalWorkPage />} />
          <Route path="/electrical-work" element={<ElectricalWorkPage />} />
          <Route path="/waterproofing" element={<WaterproofingPage />} />
          <Route path="/pipeline-work" element={<PipelineWorkPage />} />
          <Route path="/plumbing-work" element={<PlumbingWorkPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
