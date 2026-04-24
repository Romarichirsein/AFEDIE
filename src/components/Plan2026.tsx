"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight, CheckCircle2 } from "lucide-react";

const planItems = [
  { date: "Février 2026", title: "AGO & Élections", desc: "Assemblée Générale Ordinaire et renouvellement des membres du Bureau National." },
  { date: "Mai 2026", title: "Cérémonie de l'Excellence", desc: "Remise des prix aux meilleures élèves et femmes leaders de la communauté." },
  { date: "Juin 2026", title: "Séminaire de Formation", desc: "Renforcement des capacités en gestion de projets et leadership féminin." },
  { date: "Septembre 2026", title: "Rentrée Solidaire", desc: "Distribution de kits scolaires et bourses d'études pour les orphelins." },
  { date: "Octobre 2026", title: "Caravane Santé", desc: "Campagne de dépistage gratuit et sensibilisation sur l'hygiène maternelle." },
  { date: "Novembre 2026", title: "Foire de l'Autonomisation", desc: "Exposition-vente des produits artisanaux et agricoles des membres." },
  { date: "Décembre 2026", title: "Arbre de Noël", desc: "Célébration annuelle et distribution de cadeaux aux enfants démunis." },
];

export default function Plan2026() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="plan2026" className="section-padding" style={{ background: "var(--marine)", color: "white", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(184, 134, 11, 0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(27, 94, 32, 0.1) 0%, transparent 70%)', borderRadius: '50%' }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 5rem" }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--or2)", display: "block", marginBottom: "1rem" }}
          >
            Prospective
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, marginBottom: "1.5rem" }}
          >
            Plan d&apos;Action <span style={{ color: "var(--or2)" }}>2026</span>
          </motion.h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
            Une feuille de route ambitieuse pour intensifier notre impact et élargir notre réseau de solidarité au Cameroun.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {planItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                padding: "2.5rem",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              className="plan-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem", color: "var(--or2)" }}>
                <Calendar size={16} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{item.date}</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", color: "white" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "2rem" }}>
                {item.desc}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", color: "var(--or2)", fontWeight: 600 }}>
                <CheckCircle2 size={16} /> Action Prioritaire
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .plan-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--or2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}
