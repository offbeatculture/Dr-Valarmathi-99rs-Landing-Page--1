import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route , Navigate  } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Thanku from "./pages/ThankuPage";
import EnergyResetOffer from "./pages/homeFb2";
import Thanku2 from "./pages/ThankuPage2";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<NotFound />} />
          <Route path="/fb1" element={<Index />} />
          <Route path="/ty-er-fb1" element={<Thanku/>} />
          <Route path="/fb2" element={<EnergyResetOffer/>} />
          <Route path="/ty-er-fb2" element={<Thanku2/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
