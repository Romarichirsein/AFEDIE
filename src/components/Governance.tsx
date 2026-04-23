"use client";

import { motion } from "framer-motion";

const members = [
  { name: "Mme Ida Sandrine NGNOTUE FOTSO", role: "Présidente Fondatrice", initials: "IS" },
  { name: "Mme Aroung Marylène", role: "Vice-Présidente", initials: "AM" },
  { name: "Mme Anne-Marie Bonna", role: "Secrétaire Générale", initials: "AB" },
  { name: "M. EPEE LEON MARIE", role: "Membre d'Honneur", initials: "EL", color: "linear-gradient(135deg, var(--or), #8B6914)" },
  { name: "M. BIGAMBIA BITIMI CHARLES", role: "Invité d'Honneur", initials: "BB", color: "linear-gradient(135deg, var(--marine2), #0A1A30)" },
  { name: "M. Williams AROUNG", role: "Membre Bienfaiteur", initials: "WA", color: "linear-gradient(135deg, var(--vert3), var(--vert))" },
];

export default function Governance() {
  return (
    <section id="gouvernance" className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--vert2)", display: "block", marginBottom: "1rem" }}>
            Organisation
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--marine)", marginBottom: "1.5rem" }}>
            Notre <span style={{ fontStyle: "italic", color: "var(--vert2)" }}>Bureau Exécutif</span> 2026
          </h2>
          <div style={{ width: "60px", height: "4px", background: "var(--or)", margin: "0 auto 2rem" }} />
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", lineHeight: 1.7 }}>
            L&apos;AFEDIE est gouvernée par un bureau élu, garant du respect des statuts, de la bonne gestion associative et de la réalisation de la mission collective.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                delay: index * 0.1 
              }}
              style={{
                background: "white",
                padding: "3rem 2rem",
                borderRadius: "24px",
                textAlign: "center",
                border: "1px solid #f0f0f0",
                boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
                transition: "var(--transition-smooth)",
              }}
              className="bureau-card"
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  background: member.color || "linear-gradient(135deg, var(--vert), var(--marine))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem",
                  fontFamily: "var(--font-playfair)",
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "white",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
              >
                {member.initials}
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: "var(--marine)", marginBottom: "0.5rem" }}>
                {member.name}
              </h3>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--or)" }}>
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bureau-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          border-color: var(--or);
        }
      `}</style>
    </section>
  );
}
