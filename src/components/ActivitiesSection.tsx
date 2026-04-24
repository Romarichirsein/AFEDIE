"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, BookOpen, UserPlus, HeartHandshake, Award, ArrowRight } from "lucide-react";

const activities = [
  {
    icon: <GraduationCap size={32} />,
    title: "Autonomisation & Formation",
    desc: "Programmes de formation professionnelle et de renforcement des capacités pour permettre aux femmes de développer leurs activités.",
    color: "var(--or)"
  },
  {
    icon: <Stethoscope size={32} />,
    title: "Actions Humanitaires",
    desc: "Caravanes humanitaires, consultations médicales gratuites et distribution de kits aux populations vulnérables.",
    color: "var(--vert2)"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Soutien Scolaire",
    desc: "Remise de prix d'excellence, soutien aux jeunes filles méritantes et accompagnement éducatif ciblé.",
    color: "var(--marine2)"
  },
  {
    icon: <UserPlus size={32} />,
    title: "Accompagnement des Aînées",
    desc: "Soutien aux femmes âgées pour l'accès aux soins, notamment via le dispositif LAFTA (Lutte contre les Affections liées au Temps).",
    color: "var(--or)"
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Solidarité & Entraide",
    desc: "Fonds de solidarité interne et mobilisation communautaire lors d'événements marquants pour nos membres.",
    color: "var(--vert2)"
  },
  {
    icon: <Award size={32} />,
    title: "Cérémonie de l'Excellence",
    desc: "Valorisation des parcours exemplaires de femmes et de jeunes filles à travers des distinctions annuelles prestigieuses.",
    color: "var(--marine2)"
  },
];

export default function ActivitiesSection() {
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
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--or)" }}>
                Nos Domaines d&apos;Action
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", lineHeight: 1.1 }}>
              Ce que nous <span style={{ color: "var(--vert2)" }}>faisons</span> concrètement
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: "1.15rem", color: "#666", lineHeight: 1.8 }}>
              L&apos;AFEDIE déploie ses actions dans des domaines complémentaires qui visent l&apos;autonomisation globale de la femme : de la formation à l&apos;aide humanitaire d&apos;urgence.
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
          {activities.map((act, index) => (
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
                color: act.color,
                marginBottom: "2rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
              }}>
                {act.icon}
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--marine)", marginBottom: "1.2rem" }}>
                {act.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                {act.desc}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: act.color, fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>
                En savoir plus <ArrowRight size={20} />
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
