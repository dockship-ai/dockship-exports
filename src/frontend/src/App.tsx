import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ComplianceBadges from "./components/ComplianceBadges";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductShowcase from "./components/ProductShowcase";
import StartupEdgeSection from "./components/StartupEdgeSection";
import WhyUsSection from "./components/WhyUsSection";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.18 0.04 258)",
            color: "white",
            border: "1px solid oklch(0.63 0.19 47 / 30%)",
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <ComplianceBadges />
        <StartupEdgeSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
