"use client";

import { motion } from "framer-motion";
import { Landmark, MapPin, ShieldCheck, ClipboardCheck } from "lucide-react";

export default function LegalSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section id="infos" className="section-padding" style={{ background: "var(--gris)", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--or)", display: "block", marginBottom: "1rem" }}>
            Transparence
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", marginBottom: "1.5rem" }}>
            Informations <span style={{ color: "var(--or)" }}>légales</span> et administratives
          </h2>
          <div style={{ width: "60px", height: "4px", background: "var(--or)", margin: "0 auto" }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem",
          }}
          className="legal-grid"
        >
          <motion.div
            variants={itemVariants}
            style={{ 
              background: "white", 
              padding: "4rem", 
              borderRadius: "32px", 
              boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.03)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "3rem" }}>
              <div style={{ width: "56px", height: "56px", background: "rgba(10, 77, 16, 0.05)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--vert2)" }}>
                <Landmark size={28} />
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--marine)" }}>Identité Juridique</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { k: "Dénomination", v: "AFEDIE", b: true },
                { k: "N° Récépissé", v: "00001396/RDA/J06/SAAJP/BAPP" },
                { k: "Date enreg.", v: "8 octobre 2020" },
                { k: "Statut", v: "Organisation à but non lucratif" },
                { k: "Juridiction", v: "République du Cameroun" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", borderBottom: "1px solid #f8f8f8", paddingBottom: "1.2rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#999", width: "130px", flexShrink: 0, marginTop: "0.2rem" }}>{item.k}</span>
                  <span style={{ fontSize: "1rem", color: "var(--marine)", fontWeight: item.b ? 800 : 500 }}>{item.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{ 
              background: "white", 
              padding: "4rem", 
              borderRadius: "32px", 
              boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.03)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "3rem" }}>
              <div style={{ width: "56px", height: "56px", background: "rgba(184, 134, 11, 0.05)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--or)" }}>
                <MapPin size={28} />
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--marine)" }}>Siège & Impact</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { k: "Siège social", v: "Yaoundé, Cameroun", b: true },
                { k: "Localisation", v: "Yaoundé 3e, Efoulan" },
                { k: "Fondatrice", v: "Mme Ida Sandrine NGNOTUE FOTSO", b: true },
                { k: "Effectifs", v: "Plus de 50 membres actifs" },
                { k: "Périmètre", v: "National & International" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", borderBottom: "1px solid #f8f8f8", paddingBottom: "1.2rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#999", width: "130px", flexShrink: 0, marginTop: "0.2rem" }}>{item.k}</span>
                  <span style={{ fontSize: "1rem", color: "var(--marine)", fontWeight: item.b ? 800 : 500 }}>{item.v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: "6rem", 
            padding: "3rem", 
            background: "var(--marine)", 
            borderRadius: "24px", 
            color: "white", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            textAlign: "center"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ShieldCheck size={24} color="var(--or2)" />
            <span style={{ fontWeight: 700 }}>Gouvernance Approuvée</span>
          </div>
          <div style={{ width: "1px", height: "30px", background: "rgba(255,255,255,0.1)" }} className="hide-mobile" />
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ClipboardCheck size={24} color="var(--or2)" />
            <span style={{ fontWeight: 700 }}>Rapports Annuels Publics</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .legal-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .hide-mobile { display: none; }
          .legal-grid > div {
            padding: 2.5rem 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
