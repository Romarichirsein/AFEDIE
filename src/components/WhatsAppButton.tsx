"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  const whatsappNumber = "237677589201"; 
  const message = "Bonjour AFEDIE, je souhaite avoir plus d'informations.";

  return (
    <div 
      className="whatsapp-btn-wrap"
      style={{
        position: "fixed",
        bottom: "110px",
        right: "30px",
        zIndex: 100
      }}
    >
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block" }}
      >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="whatsapp-btn-inner"
      >
        <MessageCircle size={28} className="whatsapp-icon" />
      </motion.div>

      <style jsx>{`
        .whatsapp-btn-wrap {
          z-index: 100;
        }
        .whatsapp-btn-inner {
          width: 60px;
          height: 60px;
          background: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .whatsapp-btn-wrap {
            bottom: 100px;
            right: 20px;
          }
          .whatsapp-btn-inner {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
      </Link>
    </div>
  );
}
