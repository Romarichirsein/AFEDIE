"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, Heart, Star } from "lucide-react";

const values = [
  { 
    icon: <Shield size={32} />, 
    title: "Dignité", 
    desc: "Restaurer l'estime de soi et le respect de chaque femme dans son environnement.",
    color: "var(--or)"
  },
  { 
    icon: <Star size={32} />, 
    title: "Excellence", 
    desc: "Viser la qualité et la performance dans toutes nos initiatives et réalisations.",
    color: "var(--vert2)"
  },
  { 
    icon: <Users size={32} />, 
    title: "Solidarité", 
    desc: "Développer une entraide authentique et durable entre les membres de la communauté.",
    color: "var(--marine2)"
  },
  { 
    icon: <Target size={32} />, 
    title: "Engagement", 
    desc: "Agir avec détermination pour l'amélioration concrète des conditions de vie.",
    color: "var(--or)"
  },
  { 
    icon: <Heart size={32} />, 
    title: "Humanité", 
    desc: "Placer l'empathie et le soutien aux plus vulnérables au cœur de nos actions.",
    color: "var(--vert2)"
  },
  { 
    icon: <Zap size={32} />, 
    title: "Innovation", 
    desc: "Adapter nos méthodes pour répondre efficacement aux défis communautaires.",
    color: "var(--marine2)"
  },
];

export default function ValuesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="valeurs" className="section-padding" style={{ background: "var(--gris)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 5rem" }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--or)", display: "block", marginBottom: "1rem" }}
          >
            Nos Piliers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", marginBottom: "1.5rem" }}
          >
            Les valeurs qui guident <span style={{ color: "var(--or)" }}>notre mission</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            style={{ height: "4px", background: "var(--or)", margin: "0 auto 2rem" }} 
          />
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.7 }}>
            L&apos;AFEDIE s&apos;appuie sur des principes fondamentaux qui assurent la cohérence et l&apos;impact de ses interventions sociales et humanitaires.
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
            gap: "2rem",
          }}
        >
          {values.map((val, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                background: "white",
                padding: "3rem",
                borderRadius: "32px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                border: "1px solid rgba(0,0,0,0.02)",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
              }}
              className="value-card"
            >
              {/* Decorative background number */}
              <span style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '30px', 
                fontSize: '4rem', 
                fontWeight: 900, 
                color: 'rgba(0,0,0,0.03)',
                zIndex: 0
              }}>
                0{index + 1}
              </span>

              <div style={{ 
                width: "70px", 
                height: "70px", 
                background: `${val.color}10`, 
                borderRadius: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: val.color,
                marginBottom: "2rem",
                position: "relative",
                zIndex: 1
              }}>
                {val.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--marine)", marginBottom: "1rem", position: "relative", zIndex: 1 }}>
                {val.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.6, position: "relative", zIndex: 1 }}>
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .value-card:hover {
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          border-color: var(--or);
        }
      `}</style>
    </section>
  );
}
