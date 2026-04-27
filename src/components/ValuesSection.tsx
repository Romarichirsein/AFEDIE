"use client";

import { motion } from "framer-motion";
import { Shield, Star, Users, Target, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <Shield size={32} key="shield" />, 
  <Star size={32} key="star" />, 
  <Users size={32} key="users" />, 
  <Target size={32} key="target" />, 
  <Heart size={32} key="heart" />, 
  <Zap size={32} key="zap" />
];

const colors = [
  "var(--or)",
  "var(--vert2)",
  "var(--marine2)",
  "var(--or)",
  "var(--vert2)",
  "var(--marine2)"
];

export default function ValuesSection() {
  const { t } = useLanguage();
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
      transition: { duration: 0.6, ease: "easeOut" as const }
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
            {t("values.badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", marginBottom: "1.5rem" }}
          >
            {t("values.title").includes("notre mission") ? (
              <>{t("values.title").split("notre mission")[0]}<span style={{ color: "var(--or)" }}>notre mission</span></>
            ) : t("values.title").includes("our mission") ? (
              <>{t("values.title").split("our mission")[0]}<span style={{ color: "var(--or)" }}>our mission</span></>
            ) : t("values.title")}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            style={{ height: "4px", background: "var(--or)", margin: "0 auto 2rem" }} 
          />
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.7 }}>
            {t("values.subtitle")}
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
          {t("values.items").map((val: { title: string; desc: string }, index: number) => (
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
                background: `${colors[index % colors.length]}10`, 
                borderRadius: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: colors[index % colors.length],
                marginBottom: "2rem",
                position: "relative",
                zIndex: 1
              }}>
                {icons[index % icons.length]}
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
