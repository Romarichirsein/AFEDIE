import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import Plan2026 from "@/components/Plan2026";
import Governance from "@/components/Governance";
import LegalSection from "@/components/LegalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ActivitiesSection />
      <Plan2026 />
      <Governance />
      <LegalSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
