import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import SizeGuide from "./pages/SizeGuide";
import FAQ from "./pages/FAQ";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import Terms from "./pages/legal/Terms";
import ReturnPolicy from "./pages/legal/ReturnPolicy";
import ShippingPolicy from "./pages/legal/ShippingPolicy";
import NotFound from "./pages/NotFound";
import AgeVerification from "./components/AgeVerification";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => {
  const [ageVerified, setAgeVerified] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AgeVerification onVerified={() => setAgeVerified(true)} />
          {ageVerified && (
            <>
              <Toaster />
              <Sonner />
              <CookieConsent />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/collections/:category" element={<Collections />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account" element={<Account />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
                <Route path="/legal/terms" element={<Terms />} />
                <Route path="/legal/return-policy" element={<ReturnPolicy />} />
                <Route path="/legal/shipping-policy" element={<ShippingPolicy />} />
                {/* Legacy route redirects */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/return-policy" element={<ReturnPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/shipping" element={<ShippingPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
