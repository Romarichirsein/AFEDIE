"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import HumanitaireContent from "@/components/HumanitaireContent";

export default function HumanitairePage() {
  return (
    <main>
      <Navbar />
      <HumanitaireContent />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
