import { useState, useEffect } from "react";
import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CredentialsSection from "./components/CredentialsSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PressSection from "./components/PressSection";
import TrustSection from "./components/TrustSection";
import LocationsSection from "./components/LocationsSection";
import TriageSection from "./components/TriageSection";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import CookieBanner from "./components/CookieBanner";
import SecurityOverlay from "./components/SecurityOverlay";
import WhatsAppIcon from "./components/WhatsAppIcon";

// Standalone dedicated pages
import AboutPage from "./pages/AboutPage";
import AreasPage from "./pages/AreasPage";
import PrerogativesPage from "./pages/PrerogativesPage";
import LocationsPage from "./pages/LocationsPage";
import SchedulingPage from "./pages/SchedulingPage";
import PressPage from "./pages/PressPage";

export default function App() {
  // Official, high-ticket lead channel link to WhatsApp of Dr. Carvalho
  const whatsappLink = "https://api.whatsapp.com/send?phone=556182773797";

  // Light-weight custom SPA router state
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || "/";
  });

  // Keep path state and browser history synchronized
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Safe and smooth navigation helper
  const navigateTo = (path: string) => {
    window.history.pushState(null, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Extract subRoute if path is like /areas-de-atuacao/[id]
  let subRoute: string | undefined;
  if (currentPath.startsWith("/areas-de-atuacao/")) {
    subRoute = currentPath.replace("/areas-de-atuacao/", "");
  }

  // Routing render logic
  const renderPageContent = () => {
    if (currentPath === "/sobre") {
      return <AboutPage onNavigate={navigateTo} whatsappLink={whatsappLink} />;
    }
    
    if (currentPath === "/areas-de-atuacao" || currentPath.startsWith("/areas-de-atuacao/")) {
      return (
        <AreasPage 
          onNavigate={navigateTo} 
          whatsappLink={whatsappLink} 
          subRoute={subRoute} 
        />
      );
    }

    if (currentPath === "/prerrogativas") {
      return <PrerogativesPage onNavigate={navigateTo} whatsappLink={whatsappLink} />;
    }

    if (currentPath === "/enderecos") {
      return <LocationsPage onNavigate={navigateTo} whatsappLink={whatsappLink} />;
    }

    if (currentPath === "/agendamento") {
      return <SchedulingPage onNavigate={navigateTo} whatsappLink={whatsappLink} />;
    }

    if (currentPath === "/imprensa" || currentPath.startsWith("/imprensa")) {
      return <PressPage onNavigate={navigateTo} whatsappLink={whatsappLink} />;
    }

    // Default: Página Inicial (Home) - "A página inicial permanecerá como está"
    return (
      <>
        {/* Hero Section */}
        <HeroSection 
          onExploreClick={() => navigateTo("/areas-de-atuacao")} 
          whatsappLink={whatsappLink} 
        />

        <main className="relative z-10 w-full bg-gradient-to-b from-transparent via-black/80 to-obsidian pb-32">
          {/* Credentials Section */}
          <div className="relative group cursor-pointer" onClick={() => navigateTo("/prerrogativas")}>
            <div className="absolute top-4 right-8 z-20 font-mono text-[9px] uppercase text-gold/40 hover:text-gold border border-gold/15 px-3 py-1 bg-black/40 rounded transition-all duration-300">
              Ver Prerrogativas Completas ➔
            </div>
            <CredentialsSection />
          </div>

          {/* Biography Profile Section */}
          <div className="relative group cursor-pointer border-t border-gold/5" onClick={() => navigateTo("/sobre")}>
            <div className="absolute top-4 right-8 z-20 font-mono text-[9px] uppercase text-gold/40 hover:text-gold border border-gold/15 px-3 py-1 bg-black/40 rounded transition-all duration-300">
              Ver Biografia Completa ➔
            </div>
            <AboutSection />
          </div>

          {/* Press / Media Highlight Section */}
          <div className="border-t border-gold/5 bg-black/40">
            <PressSection onNavigate={navigateTo} />
          </div>

          {/* Legal Services Section */}
          <div className="relative group border-t border-gold/5">
            <ServicesSection whatsappLink={whatsappLink} />
          </div>

          {/* Trust Ratings Segment */}
          <TrustSection />

          {/* Physical Office Addresses Grid */}
          <div className="relative group cursor-pointer border-t border-gold/5" onClick={() => navigateTo("/enderecos")}>
            <div className="absolute top-4 right-8 z-20 font-mono text-[9px] uppercase text-gold/40 hover:text-gold border border-gold/15 px-3 py-1 bg-black/40 rounded transition-all duration-300">
              Visualizar Rotas e Mapas ➔
            </div>
            <LocationsSection whatsappLink={whatsappLink} />
          </div>

          {/* Pre-consultation Triage Form */}
          <div className="border-t border-gold/5">
            <TriageSection whatsappLink={whatsappLink} />
          </div>

          {/* Footer Segment */}
          <Footer whatsappLink={whatsappLink} />
        </main>
      </>
    );
  };

  return (
    <div className="relative min-h-screen font-sans text-white bg-obsidian overflow-x-hidden selection:bg-gold selection:text-black">
      {/* 1. Interactive 3D WebGL Gold/Obsidian background */}
      <ThreeBackground />

      {/* 2. Silent custom security layer (Selection, click, key control) */}
      <SecurityOverlay />

      {/* Fixed Premium Navbar */}
      <Navbar 
        whatsappLink={whatsappLink} 
        currentPath={currentPath}
        onNavigate={navigateTo}
      />

      {/* Render matching page content */}
      {renderPageContent()}

      {/* 3. LGPD compliance cookie banner */}
      <CookieBanner />

      {/* 4. Final Sticky CTA Footer containing Brasilia dynamic clock and Whatsapp link */}
      <StickyFooter whatsappLink={whatsappLink} />
    </div>
  );
}
