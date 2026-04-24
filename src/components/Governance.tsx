"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, FileText, Scale } from "lucide-react";

export default function Governance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="gouvernance" className="section-padding" style={{ background: "var(--blanc)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="gov-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--vert2)" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--vert2)" }}>
                Organisation
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", lineHeight: 1.1, marginBottom: "2rem" }}>
              Une gouvernance <span style={{ color: "var(--or)" }}>rigoureuse</span> et transparente
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8, marginBottom: "3rem" }}>
              L&apos;AFEDIE est structurée autour d&apos;un Bureau National engagé et d&apos;une organisation décentralisée pour une efficacité maximale sur le terrain.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {[
                { icon: <Users size={24} />, title: "Bureau National", desc: "Instance de pilotage stratégique." },
                { icon: <ShieldCheck size={24} />, title: "Commissions", desc: "Groupes de travail spécialisés." },
              ].map((box, i) => (
                <div key={i} style={{ padding: "2rem", background: "var(--gris)", borderRadius: "24px" }}>
                  <div style={{ color: "var(--or)", marginBottom: "1rem" }}>{box.icon}</div>
                  <h4 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{box.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#888" }}>{box.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              background: "var(--marine)", 
              padding: "4rem", 
              borderRadius: "32px", 
              color: "white",
              boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
            
            <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2.5rem" }}>Cadre Juridique</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { icon: <FileText size={20} />, title: "Enregistrement Officiel", desc: "Conformément à la loi N° 90/053 du 19 décembre 1990." },
                { icon: <Scale size={20} />, title: "Statuts & Règlement", desc: "Des textes clairs définissant les droits et devoirs des membres." },
                { icon: <ShieldCheck size={20} />, title: "Éthique & Intégrité", desc: "Un code de conduite strict pour tous nos bénévoles." },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--or2)", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .gov-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
