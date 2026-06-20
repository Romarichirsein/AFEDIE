"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Clock, Laptop, Zap, Star, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AwardItem {
  icon: React.ReactNode;
  titre_fr: string;
  titre_en: string;
  laureat: string;
  desc_fr: string;
  desc_en: string;
  color: string;
}

export default function AwardsSection() {
  const { language } = useLanguage();

  const awards: AwardItem[] = [
    {
      icon: <Trophy size={32} />,
      titre_fr: "Prix de l'Excellence",
      titre_en: "Excellence Award",
      laureat: "Mme Ida Sandrine NGNOTUE FOTSO",
      desc_fr: "Décerné à la Présidente Fondatrice pour sa vision, son leadership et son dévouement exceptionnel à la cause de l'AFEDIE.",
      desc_en: "Awarded to the Founding President for her vision, leadership, and exceptional dedication to the cause of AFEDIE.",
      color: "#D4AF37", // Gold
    },
    {
      icon: <Laptop size={32} />,
      titre_fr: "Prix Digital Impactant",
      titre_en: "Impactful Digital Award",
      laureat: "Mme Anne-Marie BONNA",
      desc_fr: "En reconnaissance de son apport marquant dans la transition numérique et le rayonnement digital de l'association.",
      desc_en: "In recognition of her outstanding contribution to the digital transition and the association's online influence.",
      color: "#717D7E", // Silver/Steel
    },
    {
      icon: <Clock size={32} />,
      titre_fr: "Prix de la Ponctualité",
      titre_en: "Punctuality Award",
      laureat: "Mme AROUNG Marylène",
      desc_fr: "Salue la rigueur, le respect constant des horaires et l'exemplarité temporelle dans toutes les instances de l'association.",
      desc_en: "Salutes the rigor, constant respect for schedules, and temporal exemplarity in all instances of the association.",
      color: "#CD7F32", // Bronze
    },
    {
      icon: <Zap size={32} />,
      titre_fr: "Prix de l'Engagement Actif",
      titre_en: "Active Engagement Award",
      laureat: "Mme Charlotte NANA",
      desc_fr: "Récompense l'implication constante sur le terrain, le dynamisme et la mobilisation active pour les actions sociales.",
      desc_en: "Rewards ongoing involvement on the ground, dynamism, and active mobilization for social actions.",
      color: "#D4AF37",
    },
    {
      icon: <Star size={32} />,
      titre_fr: "Prix de la Meilleure Présidente de Séance",
      titre_en: "Best Session President Award",
      laureat: "Mme Sylvie KOUOKAM",
      desc_fr: "Distingue la maîtrise, l'animation constructive et la conduite remarquable des séances de travail mensuelles.",
      desc_en: "Distinguishes the mastery, constructive animation, and remarkable conduct of the monthly working sessions.",
      color: "#B8860B", // Dark Goldenrod
    },
    {
      icon: <ShieldCheck size={32} />,
      titre_fr: "Prix de l'Assiduité",
      titre_en: "Assiduity Award",
      laureat: "Mme Marthe KOM",
      desc_fr: "Témoigne de la régularité, de la présence ininterrompue et de la fidélité constante aux réunions et activités.",
      desc_en: "Testifies to the regularity, uninterrupted presence, and constant loyalty to meetings and activities.",
      color: "#1A5276", // Marine Blue Accent
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="awards" className="section-padding" style={{ background: "linear-gradient(135deg, #07151A 0%, #0d2233 50%, #07151A 100%)", color: "white", position: "relative", overflow: "hidden" }}>
      {/* Golden radial background overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(184,134,11,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 5rem" }}>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1rem" }}
          >
            <div style={{ width: "30px", height: "1px", background: "var(--or)" }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--or2)" }}>
              {language === "fr" ? "Distinctions" : "Distinctions"}
            </span>
            <div style={{ width: "30px", height: "1px", background: "var(--or)" }} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, marginBottom: "1.5rem", fontFamily: "var(--font-poppins)" }}
          >
            {language === "fr" ? (
              <>AFEDIE <span style={{ color: "var(--or2)" }}>Awards 2026</span></>
            ) : (
              <>AFEDIE <span style={{ color: "var(--or2)" }}>Awards 2026</span></>
            )}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
          >
            {language === "fr" 
              ? "Célébration de l'engagement, de la rigueur et de l'excellence de nos membres, décernés lors de l'Assemblée Générale Ordinaire du 29 mai 2026."
              : "Celebrating the commitment, rigor, and excellence of our members, presented during the Ordinary General Assembly on May 29, 2026."}
          </motion.p>
        </div>

        {/* Awards Cards Grid */}
        <motion.div 
          className="awards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {awards.map((award, index) => {
            const title = language === "fr" ? award.titre_fr : award.titre_en;
            const desc = language === "fr" ? award.desc_fr : award.desc_en;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="award-card"
                whileHover={{ y: -8, borderColor: "rgba(184, 134, 11, 0.4)", boxShadow: "0 15px 40px rgba(184, 134, 11, 0.15)" }}
              >
                {/* Shiny gold corner light */}
                <div style={{ position: "absolute", top: 0, right: 0, width: "60px", height: "60px", background: `radial-gradient(circle, ${award.color}15 0%, transparent 70%)`, borderRadius: "0 24px 0 0" }} />

                <div className="award-icon-wrap" style={{ color: award.color, background: `${award.color}10` }}>
                  {award.icon}
                </div>

                <div className="award-content">
                  <h3 className="award-title">{title}</h3>
                  <div className="award-divider" style={{ background: `linear-gradient(to right, ${award.color}, transparent)` }} />
                  <p className="award-recipient">{award.laureat.toUpperCase()}</p>
                  <p className="award-desc">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .award-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }
        .award-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .award-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .award-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.8rem;
          line-height: 1.35;
          font-family: var(--font-poppins);
        }
        .award-divider {
          height: 2px;
          width: 60px;
          margin-bottom: 1.2rem;
          border-radius: 2px;
        }
        .award-recipient {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--or2);
          letter-spacing: 0.5px;
          margin-bottom: 0.8rem;
        }
        .award-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .awards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .award-card {
            padding: 2rem;
          }
        }
        @media (max-width: 640px) {
          .awards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .award-card {
            max-width: 400px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
