"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  const whatsappNumber = "237692000000"; 
  const message = "Bonjour AFEDIE, je souhaite avoir plus d'informations.";

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "110px", 
        right: "40px",
        zIndex: 100,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: "60px",
          height: "60px",
          background: "#25D366", // WhatsApp Green
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)",
          cursor: "pointer",
        }}
      >
        <MessageCircle size={32} />
      </motion.div>
    </Link>
  );
}
