import HeroSection from "@/components/HeroSection";
import USPStrip from "@/components/USPStrip";
import StockGrid from "@/components/StockGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <USPStrip />
      <StockGrid />
      <AboutSection />
      <ContactSection />
    </>
  );
}
