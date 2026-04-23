"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const planItems = [
  { num: "01", title: "Assemblée Générale Ordinaire", date: "29 Mai 2026", desc: "AGO annuelle — bilan moral, financier et renouvellement de l'engagement collectif." },
  { num: "02", title: "Cérémonie de l'Excellence", date: "Septembre 2026", desc: "Célébration des femmes et des jeunes filles exemplaires au sein de l'AFEDIE." },
  { num: "03", title: "Remise de Prix Scolaires", date: "Fin d'année scolaire", desc: "Valorisation des jeunes filles méritantes à travers des prix d'excellence." },
  { num: "04", title: "Soutien aux Jeunes Filles", date: "Courant 2026", desc: "Programme d'accompagnement et de mentorat pour les jeunes filles en difficulté." },
  { num: "05", title: "Accompagnement des Femmes Âgées", date: "Courant 2026", desc: "Orientation et appui pour l'accès aux services de santé via le dispositif LAFTA." },
  { num: "06", title: "Action de Solidarité Sociale", date: "Courant 2026", desc: "Intervention d'entraide en faveur des membres confrontés à des urgences." },
  { num: "07", title: "Caravane Humanitaire de Noël", date: "22 Décembre 2026", desc: "Mission rurale au profit des populations vulnérables avec soins gratuits." },
];

export default function Plan2026() {
  return (
    <section id="planaction" className="section-padding" style={{ background: "var(--marine)", color: "white" }}>
      <div className="container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--or)", display: "block", marginBottom: "1rem" }}
        >
          Programmation
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", marginBottom: "1.5rem" }}
        >
          Plan d&apos;Action <span style={{ color: "var(--or)", fontStyle: "italic" }}>2026</span>
        </motion.h2>
        <div style={{ width: "60px", height: "4px", background: "var(--or)", marginBottom: "2.5rem" }} />
        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", color: "rgba(255,255,255,0.75)", maxWidth: "800px", lineHeight: 1.7, marginBottom: "4rem" }}>
          Sept activités majeures jalonnent notre année 2026, témoignant de la vitalité et de l&apos;ambition renouvelée de l&apos;AFEDIE au service de la communauté.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {planItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: index * 0.1 
              }}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(201, 168, 76, 0.2)",
                padding: "2.5rem",
                borderRadius: "24px",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              className="plan-card"
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "var(--or)",
                    opacity: 0.5,
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </span>
                <Calendar size={20} color="var(--or)" />
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 700, color: "white", marginBottom: "0.8rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--or)", marginBottom: "1rem" }}>
                📅 {item.date}
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .plan-card:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: var(--or) !important;
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}
