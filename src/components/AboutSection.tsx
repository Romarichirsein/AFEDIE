"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, Award, CheckCircle2, Music, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const [showHymn, setShowHymn] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section id="apropos" className="section-padding" style={{ background: "var(--blanc)", position: "relative", overflow: "hidden" }}>
      {/* Background Pattern */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.03) 0%, transparent 100%)', zIndex: 0 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="about-grid"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--or)",
                }}
              >
                {t("about.badge")}
              </span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-balance"
              style={{
                fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
                fontWeight: 800,
                color: "var(--marine)",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              {t("about.title").includes("femme camerounaise") ? (
                <>{t("about.title").split("femme camerounaise")[0]}<span style={{ color: "var(--vert2)" }}>femme camerounaise</span></>
              ) : t("about.title").includes("Cameroonian women") ? (
                <>{t("about.title").split("Cameroonian women")[0]}<span style={{ color: "var(--vert2)" }}>Cameroonian women</span></>
              ) : t("about.title")}
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.2rem",
                color: "#444",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              {t("about.desc1")}
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.05rem",
                color: "#666",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              {t("about.desc2")}
            </motion.p>

            <motion.div
              variants={quoteVariants}
              style={{
                padding: "2.5rem",
                background: "var(--gris)",
                borderRadius: "24px",
                position: "relative",
                borderLeft: "6px solid var(--or)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.03)",
              }}
            >
              <Quote size={40} style={{ position: "absolute", top: "-20px", right: "20px", color: "var(--or)", opacity: 0.2 }} />
              <p
                style={{
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  color: "var(--marine)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  fontWeight: 500,
                }}
              >
                {t("about.quote")}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "30px", height: "1px", background: "var(--or)" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--or)", textTransform: "uppercase" }}>
                  {t("about.quoteAuthor")}
                </span>
              </div>
            </motion.div>

            {/* Hymne Officiel Accordion */}
            <motion.div 
              variants={itemVariants}
              style={{
                marginTop: "2rem",
                background: "white",
                borderRadius: "24px",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                overflow: "hidden"
              }}
            >
              <button 
                onClick={() => setShowHymn(!showHymn)}
                style={{
                  width: "100%",
                  padding: "1.5rem 2rem",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  color: "var(--marine)",
                  textAlign: "left"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ color: "var(--or2)", width: "36px", height: "36px", borderRadius: "10px", background: "rgba(184,134,11,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Music size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: "1rem", margin: 0 }}>
                      {useLanguage().language === "fr" ? "Hymne Officiel AFEDIE" : "Official AFEDIE Hymn"}
                    </h4>
                    <span style={{ fontSize: "0.78rem", color: "#888", fontWeight: 500 }}>
                      {useLanguage().language === "fr" ? "« Debout, Femmes de Dignité »" : "“Arise, Women of Dignity”"}
                    </span>
                  </div>
                </div>
                <div style={{ color: "var(--or)" }}>
                  {showHymn ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {showHymn && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderTop: "1px solid #f0f0f0", background: "#fcfcfc" }}
                  >
                    <div style={{ padding: "2rem", maxHeight: "400px", overflowY: "auto" }}>
                      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "#666", margin: 0 }}>
                          {useLanguage().language === "fr" 
                            ? "Composé pour incarner les valeurs de dignité, d'excellence et de solidarité."
                            : "Composed to embody the values of dignity, excellence, and solidarity."}
                        </p>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "0.92rem", color: "#444", lineHeight: 1.6, textAlign: "center" }}>
                        <div>
                          <strong style={{ color: "var(--vert2)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1px", display: "block", marginBottom: "0.5rem" }}>Couplet 1</strong>
                          <p style={{ margin: 0 }}>Debout pour servir la vie, Debout pour la dignité,<br />Pour l'enfant, la jeunesse, la femme,<br />Et toutes les couches vulnérables.<br />Au cœur des peines et des larmes, Nous faisons renaître l'espoir,<br />Aimer et servir ce monde C'est bâtir un vrai futur.</p>
                        </div>

                        <div style={{ background: "rgba(184,134,11,0.04)", padding: "1rem", borderRadius: "16px", border: "1px dashed rgba(184,134,11,0.2)" }}>
                          <strong style={{ color: "var(--or2)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1px", display: "block", marginBottom: "0.5rem" }}>Refrain</strong>
                          <p style={{ margin: 0, fontWeight: 600 }}>AFEDIE, lumière et flambeau, Force de solidarité,<br />Pour l'éducation et le bien-être,<br />Des enfants, des femmes et des couches défavorisées.<br />AFEDIE, espoir des cœurs, Main dans la main pour toujours,<br />Pour les peuples et les frères, Pour toutes les vies oubliées.</p>
                        </div>

                        <div>
                          <strong style={{ color: "var(--vert2)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1px", display: "block", marginBottom: "0.5rem" }}>Couplet 2 — Invocation universelle</strong>
                          <p style={{ margin: 0 }}>Que Dieu accompagne nos pas, Et bénisse chaque action,<br />Que Sa paix repose sur nous, Dans toutes nos missions.<br />Par Sa grâce nous avançons, Au service de l'humanité,<br />Pour que l'espoir refleurisse Chez les enfants, la jeunesse, la femme<br />Et toutes les couches vulnérables.</p>
                        </div>

                        <div>
                          <strong style={{ color: "var(--vert2)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1px", display: "block", marginBottom: "0.5rem" }}>Pont</strong>
                          <p style={{ margin: 0 }}>Et même quand la nuit est sombre,<br />Ensemble eh ! nous chantons,<br />Car la lumière qui nous inonde...</p>
                        </div>

                        <div style={{ borderTop: "1px solid #eee", paddingTop: "1rem" }}>
                          <p style={{ fontSize: "0.8rem", color: "#888", margin: 0 }}>
                            © AFEDIE 2026 — Tous droits réservés.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                background: "var(--marine)",
                borderRadius: "32px",
                padding: "2.5rem",
                color: "white",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 40px 80px rgba(7, 21, 26, 0.2)",
                overflow: "hidden",
              }}
            >
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(184, 134, 11, 0.1)' }} />
              
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--or2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
                {t("about.certTitle")}
              </div>
              <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", marginBottom: "2rem" }}>AFEDIE</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                {t("about.certItems").map((item: string, i: number) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    viewport={{ once: true }}
                    style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}
                  >
                    <div style={{ color: "var(--or2)" }}>{i === 0 ? <Award size={18} /> : <CheckCircle2 size={18} />}</div>
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="about-tags" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                {t("about.tags").map((tag: string, i: number) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, background: "rgba(184, 134, 11, 0.2)", borderColor: "var(--or)" }}
                    style={{
                      padding: "8px 20px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "100px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "default",
                      transition: "background 0.3s, border-color 0.3s"
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2.5rem" }}>
                <div className="founder-block" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--or)' }}>
                    <Image src="/images/founder.png" alt="Founder" width={70} height={70} style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--or2)", marginBottom: "0.3rem" }}>
                      {t("about.founderRole")}
                    </p>
                    <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "white" }}>
                      Ida Sandrine NGNOTUE FOTSO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <motion.div
              className="floating-badge"
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "40px",
                background: "white",
                padding: "2rem",
                borderRadius: "24px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                zIndex: 2,
                textAlign: "center",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <span style={{ display: "block", fontSize: "2.2rem", fontWeight: 900, color: "var(--marine)", lineHeight: 1 }}>2020</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", color: "#888", letterSpacing: "2px" }}>{t("about.since")}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
        @media (max-width: 640px) {
          .floating-badge {
            position: absolute !important;
            bottom: -10px !important;
            right: 5px !important;
            padding: 1rem !important;
            transform: scale(0.65) !important;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
            z-index: 5 !important;
          }
          .about-grid > div:last-child > div:first-child {
            padding: 2.5rem 1.5rem !important;
            border-radius: 32px !important;
          }
          .about-tags {
            justify-content: flex-start;
          }
          .founder-block {
            gap: 1rem !important;
          }
          .founder-block img {
            width: 55px !important;
            height: 55px !important;
          }
        }
        @media (max-width: 480px) {
          .founder-block {
            flex-direction: row !important;
            text-align: left !important;
            align-items: center !important;
          }
          .floating-badge {
            right: 5px !important;
          }
        }
      `}</style>
    </section>
  );
}
