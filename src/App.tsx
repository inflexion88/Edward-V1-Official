
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveRouteHandler from "./components/ResponsiveRouteHandler";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import PositioningGlossary from "./pages/PositioningGlossary";
import PositioningFrameworkGuide from "./pages/PositioningFrameworkGuide";
import PositioningMistakes from "./pages/PositioningMistakes";
import BrowserCompatibilityCheck from "./components/BrowserCompatibilityCheck";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserCompatibilityCheck>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ResponsiveRouteHandler />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/positioning-glossary" element={<PositioningGlossary />} />
            <Route path="/positioning-framework-guide" element={<PositioningFrameworkGuide />} />
            <Route path="/positioning-mistakes" element={<PositioningMistakes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BrowserCompatibilityCheck>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
