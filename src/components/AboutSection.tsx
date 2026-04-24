"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Award, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="apropos" className="section-padding" style={{ background: "var(--blanc)", position: "relative", overflow: "hidden" }}>
      {/* Background Pattern */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.03) 0%, transparent 100%)', zIndex: 0 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "6rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
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
                Notre Histoire
              </span>
            </div>
            
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                color: "var(--marine)",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Une association au service de la <span style={{ color: "var(--vert2)" }}>femme camerounaise</span>
            </h2>
            
            <p
              style={{
                fontSize: "1.2rem",
                color: "#444",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              L&apos;AFEDIE — Association des Femmes de la Dignité et de l&apos;Excellence — est une organisation
              à but non lucratif enregistrée au Cameroun, fondée en 2020 par
              <strong> Mme Ida Sandrine NGNOTUE FOTSO</strong>.
            </p>
            
            <p
              style={{
                fontSize: "1.05rem",
                color: "#666",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              Héritière de la vision de feue Mme Marie Souzane GAMGNE — &quot;la Visionnaire&quot; —
              fondatrice de l&apos;AMICA en 1998, l&apos;AFEDIE perpétue un idéal de dignité et d&apos;excellence 
              pour l&apos;autonomisation durable des femmes.
            </p>

            <div
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
                « Notre engagement va au-delà des mots : nous agissons pour que chaque femme
                accède à la dignité qu&apos;elle mérite et à l&apos;excellence qu&apos;elle peut atteindre. »
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "30px", height: "1px", background: "var(--or)" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--or)", textTransform: "uppercase" }}>
                  Mme Ida Sandrine NGNOTUE FOTSO
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                background: "var(--marine)",
                borderRadius: "32px",
                padding: "4rem",
                color: "white",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 40px 80px rgba(7, 21, 26, 0.2)",
                overflow: "hidden",
              }}
            >
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(184, 134, 11, 0.1)' }} />
              
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--or2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
                Certifications & Statuts
              </div>
              <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", marginBottom: "2rem" }}>AFEDIE</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                {[
                  { icon: <Award size={18} />, text: "N° 00001396/RDA/J06/SAAJP/BAPP" },
                  { icon: <CheckCircle2 size={18} />, text: "Association à but non lucratif" },
                  { icon: <CheckCircle2 size={18} />, text: "Gouvernance Transparente" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>
                    <div style={{ color: "var(--or2)" }}>{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                {["Solidarité", "Humanitaire", "Excellence"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "8px 20px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "100px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2.5rem" }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--or)' }}>
                    <Image src="/images/founder.png" alt="Founder" width={70} height={70} style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--or2)", marginBottom: "0.3rem" }}>
                      Présidente Fondatrice
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
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
              <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", color: "#888", letterSpacing: "2px" }}>Depuis</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
