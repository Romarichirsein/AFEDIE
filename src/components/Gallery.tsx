"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  const { t, language } = useLanguage();
  
  // Sample placeholder images - will be replaced by actual photos
  const images = [
    { id: 1, src: "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.32.jpeg", title: "Action Sociale" },
    { id: 2, src: "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.33 (1).jpeg", title: "Solidarité" },
    { id: 3, src: "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.34.jpeg", title: "Leadership" },
    { id: 4, src: "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35.jpeg", title: "Réunion Mensuelle" },
    { id: 5, src: "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.38.jpeg", title: "Formation" },
    { id: 6, src: "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.40.jpeg", title: "Excellence" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="gallery" className="section-padding" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--or)" }}>
              {t("gallery.badge") || "Nos Moments"}
            </span>
            <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            {t("gallery.title") || "Galerie Photos"}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.7 }}>
            {t("gallery.subtitle") || "Découvrez en images les actions, les rencontres et les moments forts qui marquent la vie de notre association."}
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="gallery-grid"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
            gap: "1rem" 
          }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{
                position: "relative",
                height: "300px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                cursor: "pointer",
                background: "var(--marine)"
              }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                className="gallery-img"
              />
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(to top, rgba(26, 46, 90, 0.8) 0%, transparent 60%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "2rem",
                opacity: 0,
                transition: "opacity 0.3s ease"
              }} className="gallery-overlay">
                <h4 style={{ color: "white", fontSize: "1.2rem", fontWeight: 700 }}>{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Link href="/galerie" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "1rem 2.5rem",
            background: "var(--or)",
            color: "white",
            borderRadius: "50px",
            fontWeight: 800,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(184, 134, 11, 0.3)",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 15px 35px rgba(184, 134, 11, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(184, 134, 11, 0.3)";
          }}>
            {language === "fr" ? "Voir toute la galerie" : "View full gallery"} <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gallery-img:hover {
          transform: scale(1.1);
        }
        div:hover > .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
