"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import GalerieContent from "@/components/GalerieContent";

export default function GaleriePage() {
  return (
    <main>
      <Navbar />
      <GalerieContent />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
