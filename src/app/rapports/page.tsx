"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import RapportsContent from "@/components/RapportsContent";

export default function RapportsPage() {
  return (
    <main>
      <Navbar />
      <RapportsContent />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
