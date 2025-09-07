import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Devis from "./pages/Devis";
import Camions from "./pages/Camions";
import Vans from "./pages/Vans";
import VansAmenage from "./pages/VansAmenage";
import Financement from "./pages/Financement";
import APropos from "./pages/APropos";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import CGU from "./pages/CGU";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Devis />} />
            <Route path="/camions" element={<Camions />} />
            <Route path="/camions-equestres" element={<Camions />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans-equestres" element={<Vans />} />
            <Route path="/vans-amenage" element={<VansAmenage />} />
            <Route path="/van-amenage" element={<VansAmenage />} />
            <Route path="/financement" element={<Financement />} />
            <Route path="/financing" element={<Financement />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/about" element={<APropos />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
