"use client";

import { motion } from "framer-motion";
import { Landmark, MapPin } from "lucide-react";

export default function LegalSection() {
  return (
    <section id="infos" className="section-padding" style={{ background: "var(--gris)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--vert2)", display: "block", marginBottom: "1rem" }}>
            Transparence Institutionnelle
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--marine)", marginBottom: "1.5rem" }}>
            Informations <span style={{ fontStyle: "italic", color: "var(--vert2)" }}>légales</span> et administratives
          </h2>
          <div style={{ width: "60px", height: "4px", background: "var(--or)", margin: "0 auto" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
          }}
          className="legal-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: "white", padding: "3.5rem", borderRadius: "24px", borderTop: "6px solid var(--vert2)", boxShadow: "var(--shadow-premium)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <Landmark size={32} color="var(--vert2)" />
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, color: "var(--marine)" }}>Identité Juridique</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                { k: "Dénomination", v: "Association des Femmes de la Dignité et de l'Excellence", b: true },
                { k: "Sigle", v: "AFEDIE", b: true },
                { k: "N° Récépissé", v: "00001396/RDA/J06/SAAJP/BAPP" },
                { k: "Date enreg.", v: "8 octobre 2020" },
                { k: "Statut", v: "Association à but non lucratif" },
                { k: "Pays", v: "République du Cameroun" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", borderBottom: "1px solid #f0f0f0", paddingBottom: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#999", width: "140px", flexShrink: 0 }}>{item.k}</span>
                  <span style={{ fontSize: "1rem", color: "var(--texte)", fontWeight: item.b ? 700 : 400 }}>{item.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: "white", padding: "3.5rem", borderRadius: "24px", borderTop: "6px solid var(--or)", boxShadow: "var(--shadow-premium)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <MapPin size={32} color="var(--or)" />
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, color: "var(--marine)" }}>Siège & Mission</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                { k: "Siège social", v: "Yaoundé, Cameroun" },
                { k: "Arrondissement", v: "Yaoundé 3e" },
                { k: "Fondatrice", v: "Mme Ida Sandrine NGNOTUE FOTSO", b: true },
                { k: "Mission", v: "Autonomisation des femmes, solidarité, action humanitaire" },
                { k: "Vision", v: "Une femme africaine debout, digne et excellente", b: true },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", borderBottom: "1px solid #f0f0f0", paddingBottom: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#999", width: "140px", flexShrink: 0 }}>{item.k}</span>
                  <span style={{ fontSize: "1rem", color: "var(--texte)", fontWeight: item.b ? 700 : 400 }}>{item.v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .legal-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .legal-grid > div {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
