import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route , Navigate  } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Thanku from "./pages/ThankuPage";
import EnergyResetOffer from "./pages/HomeFb2";
import Thanku2 from "./pages/ThankuPage2";
import { Privacy } from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Contact from "./pages/Contact";
import IndexGa1 from "./pages/IndexGa1";
import IndexGa2 from "./pages/IndexGa2";
import ThankuGa1 from "./pages/ThankuPageGa1";
import Indexfb3 from "./pages/Indexfb3";
import EnergyResetOfferFb4 from "./pages/HomeFb4";
import Thanku4 from "./pages/ThankuPagefb4";
import Thanku3 from "./pages/ThankuPageFb3";
import Indexfb5 from "./pages/indexFb5";
import Thanku5 from "./pages/ThankuPageFb5";


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
          <Route path="/fb3" element={<Indexfb3 />} />
          <Route path="/fb5" element={<Indexfb5 />} />
          <Route path="/ga1" element={<IndexGa1 />} />
          <Route path="/ga2" element={<IndexGa2 />} />
          <Route path="/ty-er-ga1" element={<ThankuGa1/>} />
          <Route path="/ty-er-fb1" element={<Thanku/>} />
          <Route path="/ty-er-fb3" element={<Thanku3/>} />
          <Route path="/ty-er-fb5" element={<Thanku5/>} />
          <Route path="/fb2" element={<EnergyResetOffer/>} />
          <Route path="/fb4" element={<EnergyResetOfferFb4/>} />
          <Route path="/ty-er-fb2" element={<Thanku2/>} />
          <Route path="/ty-er-fb4" element={<Thanku4/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/refund" element={<RefundPolicy/>} />
          <Route path="/shipping-policy" element={<ShippingPolicy/>} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
