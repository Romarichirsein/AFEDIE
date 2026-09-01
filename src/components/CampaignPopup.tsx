"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "237677589201";
const WHATSAPP_MESSAGE = encodeURIComponent(
`Bonjour AFEDIE 👋,

Je vous contacte suite à votre *Appel à Dons* pour la Caravane Humanitaire et les Arbres de Noël de Décembre 2026.

🎁 Cérémonies :
• 15 Décembre 2026 : Orphelinat International Œuvres Humanitaires de Mfou
• 18 Décembre 2026 : Orphelinat Sainte Famille d'Oveng

Je souhaite contribuer à cette noble cause. Merci de m'indiquer comment procéder.

✨ Votre générosité éclaire le sourire d'un enfant !`
);

const collectItems = [
  { icon: "👕", label: "Vêtements et chaussures" },
  { icon: "🛏️", label: "Literie et draps" },
  { icon: "🧼", label: "Trousses sanitaires, serviettes hygiéniques, brosses à dents & dentifrice" },
  { icon: "💻", label: "2 Ordinateurs pour l'initiation digitale" },
  { icon: "🌾", label: "Denrées alimentaires" },
  { icon: "🚲", label: "Vélos" },
  { icon: "⚽", label: "Ballons de basket et de football" },
  { icon: "🧹", label: "Produits d'entretien" },
  { icon: "💰", label: "Dons financiers / Sponsoring" },
];

export default function CampaignPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été fermé dans cette session
    const dismissed = sessionStorage.getItem("afedie_popup_dismissed");
    if (dismissed) {
      setHasBeenDismissed(true);
      return;
    }
    // Afficher le popup après 2 secondes
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenDismissed(true);
    sessionStorage.setItem("afedie_popup_dismissed", "true");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <>
      {/* Floating trigger button – visible when popup is closed */}
      {!isOpen && hasBeenDismissed && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir l'appel à dons"
          style={{
            position: "fixed",
            bottom: "6rem",
            left: "1.5rem",
            zIndex: 9998,
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(135deg, #b8860b, #daa520)",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(184,134,11,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🎓
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(6px)",
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "linear-gradient(145deg, #0a1e28 0%, #0d2a3a 50%, #07151A 100%)",
                borderRadius: "20px",
                border: "1px solid rgba(184,134,11,0.3)",
                maxWidth: "520px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 40px rgba(184,134,11,0.1)",
                position: "relative",
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Fermer"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                ✕
              </button>

              {/* Header Banner */}
              <div style={{
                background: "linear-gradient(135deg, rgba(184,134,11,0.2), rgba(218,165,32,0.1))",
                borderBottom: "1px solid rgba(184,134,11,0.2)",
                padding: "1.5rem 1.5rem 1.2rem",
                borderRadius: "20px 20px 0 0",
                textAlign: "center",
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}>
                  <span style={{ fontSize: "0.65rem", background: "rgba(184,134,11,0.25)", border: "1px solid rgba(184,134,11,0.4)", color: "#daa520", padding: "3px 10px", borderRadius: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                    AFEDIE × Caravane Humanitaire 2026
                  </span>
                </div>
                <h2 style={{
                  fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.2,
                  margin: 0,
                  fontFamily: "var(--font-poppins), sans-serif",
                }}>
                  🎄 Arbre de Noël & <span style={{ color: "#daa520" }}>Dons</span>
                </h2>
                <p style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.85rem",
                  marginTop: "0.4rem",
                  lineHeight: 1.4,
                }}>
                  Pour les orphelins de Mfou et d'Oveng
                </p>
              </div>

              {/* Body Content */}
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                {/* Event Info Card */}
                <div style={{
                  background: "rgba(184,134,11,0.08)",
                  border: "1px solid rgba(184,134,11,0.2)",
                  borderRadius: "12px",
                  padding: "1rem",
                  marginBottom: "1.25rem",
                }}>
                  <h3 style={{ color: "#daa520", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem" }}>
                    🎄 Cérémonies de l'Arbre de Noël
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span style={{ color: "#daa520", fontWeight: 700 }}>• 15 Déc. :</span>
                      <span style={{ color: "#fff", fontWeight: 600 }}>Orphelinat International Œuvres Humanitaires de Mfou</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span style={{ color: "#daa520", fontWeight: 700 }}>• 18 Déc. :</span>
                      <span style={{ color: "#fff", fontWeight: 600 }}>Orphelinat Sainte Famille d'Oveng</span>
                    </div>
                  </div>
                </div>

                {/* Collecte Items */}
                <h3 style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Nous collectons :
                </h3>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.4rem",
                  marginBottom: "1.25rem",
                }}>
                  {collectItems.map((item, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.8)",
                      padding: "0.35rem 0.5rem",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      gridColumn: i === collectItems.length - 1 ? "1 / -1" : undefined,
                    }}>
                      <span style={{ flexShrink: 0 }}>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div style={{
                  background: "linear-gradient(135deg, rgba(184,134,11,0.12), rgba(218,165,32,0.05))",
                  border: "1px solid rgba(184,134,11,0.25)",
                  borderRadius: "10px",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.25rem",
                  textAlign: "center",
                }}>
                  <p style={{
                    color: "#daa520",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                    &ldquo;À ces cérémonies, un arbre de Noël est organisé pour apporter la joie et le réconfort aux enfants.&rdquo; ❤️
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", marginTop: "0.3rem", marginBottom: 0 }}>
                    Votre générosité éclaire le sourire d&apos;un enfant pour les fêtes&nbsp;!
                  </p>
                </div>

                {/* CTA WhatsApp Button */}
                <button
                  onClick={handleWhatsApp}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1.5rem",
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)";
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Rejoindre la Campagne sur WhatsApp
                </button>

                {/* Contact Info */}
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                  marginTop: "1rem",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.45)",
                  flexWrap: "wrap",
                }}>
                  <span>📞 677 589 201 / 695 22 8083</span>
                  <span>✉️ Afediecam@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
