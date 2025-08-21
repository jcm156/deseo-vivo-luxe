import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
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
                <Route path="/cart" element={<Cart />} />
                <Route path="/account" element={<Account />} />
                <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
                <Route path="/legal/terms" element={<Terms />} />
                <Route path="/legal/return-policy" element={<ReturnPolicy />} />
                <Route path="/legal/shipping-policy" element={<ShippingPolicy />} />
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
