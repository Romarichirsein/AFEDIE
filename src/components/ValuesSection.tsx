"use client";

import { motion } from "framer-motion";
import { Heart, Star, Shield, Users, Sprout, SearchCheck, Globe } from "lucide-react";

const values = [
  {
    icon: <Sprout size={32} />,
    title: "Dignité",
    desc: "Chaque femme mérite d'être traitée avec respect et considération. Nous défendons la dignité humaine comme socle de toute action.",
    color: "var(--vert2)",
  },
  {
    icon: <Star size={32} />,
    title: "Excellence",
    desc: "Nous aspirons à l'excellence dans nos projets, nos partenariats et notre gouvernance, faisant de chaque initiative un modèle.",
    color: "var(--or)",
  },
  {
    icon: <Users size={32} />,
    title: "Solidarité",
    desc: "La force de notre association repose sur l'entraide mutuelle, la cohésion entre membres et la mobilisation collective.",
    color: "var(--marine)",
  },
  {
    icon: <Heart size={32} />,
    title: "Bienveillance",
    desc: "Nous intervenons avec empathie et respect dans chacune de nos missions auprès des femmes et des familles vulnérables.",
    color: "var(--vert3)",
  },
  {
    icon: <SearchCheck size={32} />,
    title: "Transparence",
    desc: "Rigueur dans la gestion, clarté dans les rapports et honnêteté dans les partenariats sont au cœur de notre éthique.",
    color: "#666",
  },
  {
    icon: <Globe size={32} />,
    title: "Engagement",
    desc: "Nous agissons au plus près des réalités locales pour produire un impact durable et mesurable dans les communautés.",
    color: "var(--marine2)",
  },
];

export default function ValuesSection() {
  return (
    <section id="valeurs" className="section-padding" style={{ background: "var(--gris)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 4rem" }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--marine)", display: "block", marginBottom: "1rem" }}
          >
            Nos Fondements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--marine)" }}
          >
            Les valeurs qui guident chacune de nos <span style={{ fontStyle: "italic", color: "var(--or)" }}>actions</span>
          </motion.h2>
          <div style={{ width: "60px", height: "4px", background: "var(--or)", margin: "1.5rem auto" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
              }}
              style={{
                background: "white",
                padding: "3rem 2.5rem",
                borderRadius: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                borderTop: `4px solid ${value.color}`,
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              className="value-card"
            >
              <div
                style={{
                  color: value.color,
                  marginBottom: "1.5rem",
                  background: `rgba(${value.color.includes('var') ? '0,0,0' : '0,0,0'}, 0.05)`, // Simplified for variables
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {value.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--marine)",
                  marginBottom: "1rem",
                }}
              >
                {value.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.7 }}>
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
