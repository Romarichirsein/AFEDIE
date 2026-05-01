"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allImages = [
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.32.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.33.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.33 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.33 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.34.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.34 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.34 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35 (3).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.36.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.36 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.36 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.37.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.37 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.37 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.38.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.38 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.38 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.39.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.39 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.39 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.40.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.40 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.40 (2).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.41.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.41 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.43.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.52.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.52 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.53.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.53 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 09.25.33.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 09.25.34.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 09.25.34 (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 09.25.35.jpeg",
  "/images/gallery/WhatsApp Image 2026-05-01 at 09.25.35 (1).jpeg",
];

export default function GalerieContent() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = (src: string, idx: number) => {
    setLightboxImg(src);
    setLightboxIdx(idx);
  };

  const navigate = (dir: "prev" | "next") => {
    const newIdx = dir === "next"
      ? (lightboxIdx + 1) % allImages.length
      : (lightboxIdx - 1 + allImages.length) % allImages.length;
    setLightboxIdx(newIdx);
    setLightboxImg(allImages[newIdx]);
  };

  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #07151A 0%, #0d2233 50%, #07151A 100%)",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(184,134,11,0.08) 0%, transparent 70%)" }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{
              background: "rgba(184,134,11,0.15)",
              border: "1px solid rgba(184,134,11,0.4)",
              color: "var(--or2)",
              padding: "6px 18px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "1.5rem",
            }}>📸 Nos Moments</span>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1rem",
              fontFamily: "var(--font-playfair)",
            }}>
              Galerie <span style={{ color: "var(--or2)" }}>Photos</span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "550px", margin: "0 auto 1rem" }}>
              Découvrez en images les actions, rencontres et moments forts qui marquent la vie de notre association.
            </p>
            <div style={{ color: "var(--or2)", fontWeight: 700, fontSize: "0.9rem" }}>{allImages.length} photos</div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ background: "#07151A", padding: "4rem 0 6rem" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {allImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.07 }}
                onClick={() => openLightbox(src, i)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio: "4/3",
                  position: "relative",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(184,134,11,0.2)" }}
              >
                <img
                  src={src}
                  alt={`Photo AFEDIE ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1rem",
                  opacity: 0,
                  transition: "0.3s",
                }}
                  className="gallery-overlay"
                >
                  <span style={{ color: "white", fontSize: "0.75rem", fontWeight: 700 }}>🔍 Voir</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.94)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={e => { e.stopPropagation(); navigate("prev"); }}
              style={{ position: "fixed", left: "1rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", width: "50px", height: "50px", borderRadius: "50%", fontSize: "1.5rem", cursor: "pointer", zIndex: 2 }}
            >‹</button>

            <motion.img
              key={lightboxImg}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={lightboxImg}
              alt="Photo AFEDIE"
              style={{ maxWidth: "85vw", maxHeight: "85vh", objectFit: "contain", borderRadius: "12px", boxShadow: "0 20px 80px rgba(0,0,0,0.8)" }}
              onClick={e => e.stopPropagation()}
            />

            <button
              onClick={e => { e.stopPropagation(); navigate("next"); }}
              style={{ position: "fixed", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", width: "50px", height: "50px", borderRadius: "50%", fontSize: "1.5rem", cursor: "pointer", zIndex: 2 }}
            >›</button>

            <div style={{ position: "fixed", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              {lightboxIdx + 1} / {allImages.length}
            </div>

            <button
              onClick={() => setLightboxImg(null)}
              style={{ position: "fixed", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", width: "44px", height: "44px", borderRadius: "50%", fontSize: "1.3rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-overlay:hover { opacity: 1 !important; }
        @media (max-width: 480px) {
          div[style*="repeat(auto-fill, minmax(260px"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
