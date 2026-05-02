"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Globe, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ActivitiesSection() {
  const { t } = useLanguage();

  const activities = [
    {
      title: t("activities.act1.title"),
      desc: t("activities.act1.desc"),
      icon: <BookOpen size={32} />,
      color: "#D4AF37",
    },
    {
      title: t("activities.act2.title"),
      desc: t("activities.act2.desc"),
      icon: <Users size={32} />,
      color: "#1B5E20",
    },
    {
      title: t("activities.act3.title"),
      desc: t("activities.act3.desc"),
      icon: <Globe size={32} />,
      color: "#07151A",
    },
    {
      title: t("activities.act4.title"),
      desc: t("activities.act4.desc"),
      icon: <ShieldCheck size={32} />,
      color: "#B8860B",
    },
    {
      title: t("activities.act5.title"),
      desc: t("activities.act5.desc"),
      icon: <HeartHandshake size={32} />,
      color: "#2E7D32",
    },
    {
      title: t("activities.act6.title"),
      desc: t("activities.act6.desc"),
      icon: <Lightbulb size={32} />,
      color: "#D4AF37",
    },
  ];

  const colors = ["#D4AF37", "#1B5E20", "#07151A"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id="activites" className="section-padding" style={{ background: "white", position: "relative" }}>
      <div className="container">
        <div className="activities-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "flex-end", gap: "4rem", marginBottom: "6rem" }}>
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}
            >
              <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--or)" }}>
                {t("activities.badge")}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-balance" 
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", lineHeight: 1.1 }}
            >
              {t("activities.title").includes("faisons") ? (
                <>{t("activities.title").split("faisons")[0]}<span style={{ color: "var(--vert2)" }}>faisons</span> concrètement</>
              ) : t("activities.title").includes("do") ? (
                <>{t("activities.title").split("do")[0]}<span style={{ color: "var(--vert2)" }}>do</span> concretely</>
              ) : t("activities.title")}
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8, maxWidth: "500px" }}
          >
            {t("activities.subtitle")}
          </motion.p>
        </div>

        <motion.div 
          className="activities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {(t("activities.items") as any[]).map((act: { title: string; desc: string }, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="activity-card"
            >
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                style={{ width: "70px", height: "70px", borderRadius: "20px", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: colors[index % colors.length], marginBottom: "2rem" }}
              >
                {activities[index % activities.length]?.icon}
              </motion.div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--marine)", marginBottom: "1.2rem" }}>
                {act.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                {act.desc}
              </p>
              <div className="activity-more" style={{ display: "flex", alignItems: "center", gap: "10px", color: colors[index % colors.length], fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", transition: "transform 0.3s ease" }}>
                {t("activities.more")} <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .activities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .activity-card {
          padding: 3.5rem;
          background: var(--gris);
          border-radius: 32px;
          border: 1px solid transparent;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
        }
        .activity-card:hover {
          background: white;
          border-color: rgba(184, 134, 11, 0.2);
          box-shadow: 0 40px 80px rgba(0,0,0,0.08);
        }
        .activity-card:hover .activity-more {
          transform: translateX(10px);
        }
        @media (max-width: 1200px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 1024px) {
          .activities-header {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            margin-bottom: 4rem !important;
          }
        }
        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .activity-card {
            padding: 2.5rem 1.8rem !important;
            border-radius: 24px !important;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          .activity-card h3 {
            font-size: 1.3rem !important;
          }
          .activities-header h2 {
            text-align: center;
          }
          .activities-header p {
            text-align: center;
          }
        }
        @media (max-width: 480px) {
          .activity-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
