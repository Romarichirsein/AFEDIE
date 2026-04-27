"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <GraduationCap size={32} key="grad" />,
  <Stethoscope size={32} key="steth" />,
  <BookOpen size={32} key="book" />,
  <UserPlus size={32} key="user" />,
  <HeartHandshake size={32} key="heart" />,
  <Award size={32} key="award" />
];

const colors = [
  "var(--or)",
  "var(--vert2)",
  "var(--marine2)",
  "var(--or)",
  "var(--vert2)",
  "var(--marine2)"
];

export default function ActivitiesSection() {
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
      transition: { duration: 0.7, ease: "easeOut" as const }
    },
  };

  return (
    <section id="activites" className="section-padding" style={{ background: "white", position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "6rem" }} className="activities-header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--or)" }}>
                {t("activities.badge")}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", lineHeight: 1.1 }}>
              {t("activities.title").includes("faisons") ? (
                <>{t("activities.title").split("faisons")[0]}<span style={{ color: "var(--vert2)" }}>faisons</span> concrètement</>
              ) : t("activities.title").includes("do") ? (
                <>{t("activities.title").split("do")[0]}<span style={{ color: "var(--vert2)" }}>do</span> concretely</>
              ) : t("activities.title")}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
          >
            <p style={{ fontSize: "1.15rem", color: "#666", lineHeight: 1.8 }}>
              {t("activities.subtitle")}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {t("activities.items").map((act: { title: string; desc: string }, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              style={{
                background: "var(--gris)",
                padding: "3.5rem",
                borderRadius: "32px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
              className="activity-card"
            >
              <div style={{ 
                width: "70px", 
                height: "70px", 
                background: "white", 
                borderRadius: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: colors[index % colors.length],
                marginBottom: "2rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
              }}>
                {icons[index % icons.length]}
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--marine)", marginBottom: "1.2rem" }}>
                {act.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                {act.desc}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: colors[index % colors.length], fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>
                {t("activities.more")} <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .activity-card:hover {
          background: white;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
        }
        @media (max-width: 1024px) {
          .activities-header {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            margin-bottom: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
