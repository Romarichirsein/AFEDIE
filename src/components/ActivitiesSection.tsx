"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, BookOpen, UserPlus, HeartHandshake, Award } from "lucide-react";

const activities = [
  {
    icon: <GraduationCap size={32} />,
    title: "Autonomisation & Formation",
    desc: "Programmes de formation professionnelle et de renforcement des capacités pour permettre aux femmes de développer leurs activités.",
  },
  {
    icon: <Stethoscope size={32} />,
    title: "Actions Humanitaires",
    desc: "Caravanes humanitaires, consultations médicales gratuites et distribution de kits aux populations vulnérables.",
    accent: "var(--marine)",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Soutien Scolaire",
    desc: "Remise de prix d'excellence, soutien aux jeunes filles méritantes et accompagnement éducatif ciblé.",
  },
  {
    icon: <UserPlus size={32} />,
    title: "Accompagnement des Aînées",
    desc: "Soutien aux femmes âgées pour l'accès aux soins, notamment via le dispositif LAFTA.",
    accent: "var(--marine)",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Solidarité & Entraide",
    desc: "Fonds de solidarité interne et mobilisation communautaire lors d'événements marquants.",
  },
  {
    icon: <Award size={32} />,
    title: "Cérémonie de l'Excellence",
    desc: "Valorisation des parcours exemplaires de femmes et de jeunes filles à travers des distinctions annuelles.",
    accent: "var(--marine)",
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activites" className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
            marginBottom: "5rem",
          }}
          className="activities-intro"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--vert2)", display: "block", marginBottom: "1rem" }}>
              Nos Domaines d&apos;Action
            </span>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--marine)", marginBottom: "1.5rem" }}>
              Ce que nous <span style={{ fontStyle: "italic", color: "var(--vert2)" }}>faisons</span> concrètement
            </h2>
            <div style={{ width: "60px", height: "4px", background: "var(--or)", marginBottom: "2rem" }} />
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", color: "#555", lineHeight: 1.7 }}>
              L&apos;AFEDIE déploie ses actions dans des domaines complémentaires qui visent l&apos;autonomisation globale de la femme : de la formation à l&apos;aide humanitaire.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ paddingTop: "1.5rem" }}
          >
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.8, marginBottom: "2rem" }}>
              Nos interventions touchent aussi bien le milieu urbain que rural, avec une attention particulière portée aux enfants orphelins, aux jeunes filles en difficulté et aux femmes précaires.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {["Autonomisation", "Humanitaire", "Formation"].map((item, i) => (
                <span
                  key={item}
                  style={{
                    background: i === 0 ? "var(--vert2)" : i === 1 ? "var(--marine)" : "var(--or)",
                    color: i === 2 ? "var(--marine)" : "white",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                delay: index * 0.1 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              style={{
                background: "var(--gris)",
                padding: "2.5rem",
                borderRadius: "24px",
                borderLeft: `6px solid ${activity.accent || "var(--vert2)"}`,
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
              }}
              className="activity-card"
            >
              <div style={{ color: activity.accent || "var(--vert2)", marginBottom: "1.5rem" }}>
                {activity.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 700, color: "var(--marine)", marginBottom: "0.8rem" }}>
                {activity.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.6 }}>
                {activity.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .activity-card:hover {
          background: white !important;
          box-shadow: var(--shadow-premium);
          border-left-color: var(--or) !important;
        }
        @media (max-width: 900px) {
          .activities-intro {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .activity-card {
            padding: 1.5rem !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
