"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Plan2026() {
  const { t, language } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
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
            {t("plan2026.badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, marginBottom: "1.5rem" }}
          >
            {t("plan2026.title").includes("2026") ? (
              <>{t("plan2026.title").split("2026")[0]}<span style={{ color: "var(--or2)" }}>2026</span></>
            ) : t("plan2026.title")}
          </motion.h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
            {t("plan2026.subtitle")}
          </p>
        </div>

        {/* Three Axes and Strategic Perspectives */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", marginBottom: "5rem", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "32px", padding: "3rem" }} className="perspectives-grid">
          {/* Les 3 Axes */}
          <div>
            <h3 style={{ color: "var(--or2)", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1.5rem" }}>
              {language === "fr" ? "Les Trois Axes d'Action" : "The Three Pillars of Action"}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              {language === "fr"
                ? "Notre dynamique s'articule autour de trois axes temporels, traduisant l'action concrète et continue de l'association au service des femmes et de la communauté."
                : "Our dynamic is built around three temporal pillars, reflecting the concrete and continuous action of the association serving women and the community."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                { axe: language === "fr" ? "Ce qui est fait" : "What is done", desc: language === "fr" ? "L'évaluation et la consolidation des actions d'accompagnement passées." : "Evaluation and consolidation of past support actions." },
                { axe: language === "fr" ? "Ce qui est en cours" : "What is in progress", desc: language === "fr" ? "Le déploiement des formations régulières et le suivi des bénéficiaires." : "Deployment of regular training and follow-up of beneficiaries." },
                { axe: language === "fr" ? "Ce qui est à venir" : "What is to come", desc: language === "fr" ? "La concrétisation de nos projets d'envergure et l'expansion de notre réseau." : "The realization of our major projects and expansion of our network." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(184,134,11,0.15)", border: "1px solid var(--or2)", color: "var(--or2)", fontSize: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>
                    {idx + 1}
                  </span>
                  <div>
                    <h4 style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>{item.axe}</h4>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", margin: "2px 0 0" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Perspectives Stratégiques */}
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: "3rem" }} className="perspectives-right-col">
            <h3 style={{ color: "var(--vert2)", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1.5rem" }}>
              {language === "fr" ? "Perspectives Triennales" : "Three-Year Perspectives"}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              {language === "fr"
                ? "Validées lors de l'AGO du 29 mai 2026, ces quatre grands projets orientent nos efforts stratégiques à moyen terme."
                : "Validated during the General Assembly of May 29, 2026, these four major projects guide our mid-term strategic efforts."}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                language === "fr" ? "L'ouverture d'un orphelinat AFEDIE" : "The opening of an AFEDIE orphanage",
                language === "fr" ? "La création d'un centre de réinsertion sociale pour les femmes et les jeunes" : "Creation of a social reintegration center for women and youth",
                language === "fr" ? "L'extension nationale de l'association au Cameroun" : "National expansion of the association in Cameroon",
                language === "fr" ? "La transition vers le statut d'Organisation Non Gouvernementale (ONG)" : "Transition to the status of a Non-Governmental Organization (NGO)"
              ].map((proj, idx) => (
                <li key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--vert2)", marginTop: "2px", fontWeight: 700 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.92rem", lineHeight: 1.5 }}>{proj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="plan-grid"
        >
          {t("plan2026.items").map((item: { date: string; title: string; desc: string }, index: number) => (
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
                <CheckCircle2 size={16} /> {t("plan2026.priorityAction")}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: "4rem", textAlign: "center" }}
        >
          <a
            href="/documents/rapport_activite_AGO_2026.pptx"
            download
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "1rem 2.5rem",
              fontSize: "1rem",
              background: "var(--or)",
              color: "var(--marine)",
              borderRadius: "100px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            <FileText size={20} />
            {useLanguage().language === "fr" 
              ? "Télécharger le Rapport d'Activité Complet (PPTX)" 
              : "Download Full Activity Report (PPTX)"}
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .plan-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .plan-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }
        .plan-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--or2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        @media (max-width: 1024px) {
          .plan-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .plan-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .plan-card {
            padding: 2rem 1.5rem !important;
            border-radius: 20px !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
        @media (max-width: 900px) {
          .perspectives-grid {
            grid-template-columns: 1fr !important;
            padding: 2rem !important;
            gap: 2.5rem !important;
          }
          .perspectives-right-col {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255,255,255,0.08) !important;
            padding-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
