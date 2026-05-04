import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import OtoPage from "./pages/OtoPage";
import ThankuOto5 from "./pages/ThankuFb5Oto";
import IndexGa5 from "./pages/IndexGa5";
import OtoPageGa from "./pages/OtoPageGa";
import { ThankYouPageGa } from "./components/ga5/ThankuGa";
import ThankuGa5Oto from "./pages/ThankuGa5Oto";
import ThankuPageGa5 from "./pages/ThankuPageGa5";
import Indexfb6 from "./pages/indexFb6";
import Thanku6 from "./pages/TankuPageFb6";
import Thankupage7999 from "./pages/Thankupage7999";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexGa5/>} />


{/* Active Pages */}
          <Route path="/fb5" element={<Indexfb5 />} />
           <Route path="/fb6" element={<Indexfb6 />} />
          <Route path="/oto-fb5" element={<OtoPage />} />
          <Route path="/ty-er-fb5" element={<Thanku5 />} />
          <Route path="/ty-er-oto-fb5" element={<ThankuOto5 />} />
           <Route path="/ty-er-fb6" element={<Thanku6 />} />
           <Route path="/ty-7999" element={<Thankupage7999 />} />
          
          <Route path="/ga5" element={<IndexGa5 />} />
          <Route path="/oto-ga5" element={<OtoPageGa />} />
          <Route path="/ty-er-ga5" element={<ThankuPageGa5/>} />
          <Route path="/ty-er-oto-ga5" element={< ThankuGa5Oto />} />
         

{/* Active Pages */}



          <Route path="/fb1" element={<Indexfb5 />} />
          <Route path="/fb3" element={<Indexfb5 />} />
          <Route path="/ga1" element={<Indexfb5 />} />
          <Route path="/ga2" element={<Indexfb5 />} />
          <Route path="/ty-er-ga1" element={<Thanku5 />} />
          <Route path="/ty-er-fb1" element={<Thanku5 />} />
          <Route path="/ty-er-fb3" element={<Thanku5 />} />
          <Route path="/fb2" element={<Indexfb5 />} />
          <Route path="/fb4" element={<Indexfb5 />} />
          <Route path="/ty-er-fb2" element={<Thanku5 />} />
          <Route path="/ty-er-fb4" element={<Thanku5 />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact" element={<Contact />} />

           

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
