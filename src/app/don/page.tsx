"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import DonContent from "@/components/DonContent";

export default function DonPage() {
  return (
    <main>
      <Navbar />
      <DonContent />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
