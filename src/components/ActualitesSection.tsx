"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, X, Newspaper, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Article {
  id: number;
  tag_fr: string;
  tag_en: string;
  date_fr: string;
  date_en: string;
  lieu_fr: string;
  lieu_en: string;
  titre_fr: string;
  titre_en: string;
  desc_fr: string;
  desc_en: string;
  texte_fr: string;
  texte_en: string;
}

const articles: Article[] = [
  {
    id: 1,
    tag_fr: "AGO & Élections",
    tag_en: "GA & Elections",
    date_fr: "29 mai 2026",
    date_en: "May 29, 2026",
    lieu_fr: "Soooo Good Place, Carrefour Intendance, Artisanat, Yaoundé",
    lieu_en: "Soooo Good Place, Carrefour Intendance, Artisanat, Yaoundé",
    titre_fr: "AFEDIE tient son Assemblée Générale Ordinaire 2026",
    titre_en: "AFEDIE holds its 2026 Ordinary General Assembly",
    desc_fr: "L'AFEDIE a tenu son AGO le 29 mai 2026 sous la présidence d'un représentant du MINAT, validant le Plan d'Action 2026 et intronisant ses nouveaux membres d'honneur et bienfaiteurs.",
    desc_en: "AFEDIE held its GA on May 29, 2026, under the presidency of a MINAT representative, validating the 2026 Action Plan and inducting new honorary and benefactor members.",
    texte_fr: "L'Association des Femmes de la Dignité et de l'Excellence (AFEDIE) a tenu, le 29 mai 2026, son Assemblée Générale Ordinaire au lieu-dit Soooo Good Place, à Carrefour Intendance, Artisanat, Yaoundé. La cérémonie s'est déroulée sous la présidence d'un représentant du Ministère de l'Administration Territoriale (MINAT), en présence des membres, partenaires et invités d'honneur de l'association.\n\nCette Assemblée Générale a été l'occasion de présenter le rapport moral, le rapport financier et le rapport d'activités 2023–2025, ainsi que de valider le Plan d'Action 2026 de l'association. Elle a également été marquée par l'intronisation de nouveaux Membres d'Honneur et Membres Bienfaiteurs, et par la remise des Awards AFEDIE récompensant l'engagement et l'excellence au sein de l'association.\n\nÀ cette occasion, l'Assemblée Générale a validé les perspectives stratégiques triennales de l'AFEDIE, parmi lesquelles l'ouverture d'un orphelinat, la création d'un centre de réinsertion sociale pour les femmes et les jeunes, l'extension nationale de l'association, ainsi que la transition vers le statut d'Organisation Non Gouvernementale (ONG).\n\nLa cérémonie s'est déroulée sous le parrainage de Madame Marie BRUGEAUX NGO BIKES, Marraine de l'événement.\n\nLe procès-verbal complet de l'Assemblée Générale, incluant l'ensemble des résolutions adoptées, est disponible sur demande auprès du Bureau Exécutif de l'AFEDIE.",
    texte_en: "The Association of Women of Dignity and Excellence (AFEDIE) held its Ordinary General Assembly on May 29, 2026, at Soooo Good Place, Carrefour Intendance, Artisanat, Yaoundé. The ceremony took place under the presidency of a representative of the Ministry of Territorial Administration (MINAT), in the presence of members, partners, and guests of honor of the association.\n\nThis General Assembly was the opportunity to present the moral report, the financial report, and the 2023–2025 activity reports, as well as to validate the association's 2026 Action Plan. It was also marked by the induction of new Honorary and Benefactor Members, and by the presentation of the AFEDIE Awards rewarding commitment and excellence within the association.\n\nOn this occasion, the General Assembly validated the three-year strategic perspectives of AFEDIE, including the opening of an orphanage, the creation of a social reintegration center for women and youth, the national expansion of the association, and the transition to the status of a Non-Governmental Organization (NGO).\n\nThe ceremony took place under the sponsorship of Mrs. Marie BRUGEAUX NGO BIKES, Sponsor of the event.\n\nThe full minutes of the General Assembly, including all resolutions adopted, are available upon request from the Executive Board of AFEDIE."
  },
  {
    id: 2,
    tag_fr: "Action Sociale",
    tag_en: "Social Action",
    date_fr: "6 juin 2026",
    date_en: "June 6, 2026",
    lieu_fr: "École Les Petits Mozart, Yaoundé",
    lieu_en: "Les Petits Mozart School, Yaoundé",
    titre_fr: "AFEDIE offre des dons aux enfants de l'École Les Petits Mozart",
    titre_en: "AFEDIE offers donations to the children of Les Petits Mozart School",
    desc_fr: "En partenariat avec les Établissements KBA et DACAM (marque ICRAFON), l'AFEDIE a organisé une opération de don au profit des enfants, renforçant sa mission de solidarité.",
    desc_en: "In partnership with KBA Establishments and DACAM (ICRAFON brand), AFEDIE organized a donation drive for the children, reinforcing its mission of solidarity.",
    texte_fr: "Le 6 juin 2026, l'AFEDIE a organisé une opération de don au profit des enfants de l'École Les Petits Mozart, à Yaoundé. Cette action humanitaire a été réalisée en partenariat avec les Établissements KBA et DACAM, représentant la marque ICRAFON.\n\nCette opération s'inscrit dans la continuité des actions sociales menées par l'AFEDIE en faveur de l'enfance, conformément à sa mission de dignité, d'excellence et de solidarité.",
    texte_en: "On June 6, 2026, AFEDIE organized a donation drive for the benefit of the children of Les Petits Mozart School in Yaoundé. This humanitarian action was carried out in partnership with KBA Establishments and DACAM, representing the ICRAFON brand.\n\nThis initiative is part of the ongoing social actions led by AFEDIE in support of childhood, in accordance with its mission of dignity, excellence, and solidarity."
  },
  {
    id: 3,
    tag_fr: "Formation",
    tag_en: "Training",
    date_fr: "25, 26 et 27 juin 2026",
    date_en: "June 25, 26 & 27, 2026",
    lieu_fr: "Siège de l'AFEDIE, École Les Petits Mozart, Yaoundé",
    lieu_en: "AFEDIE HQ, Les Petits Mozart School, Yaoundé",
    titre_fr: "Formation en renforcement des capacités : leadership, entrepreneuriat et digitalisation",
    titre_en: "Capacity Building: Leadership, Entrepreneurship and Digitalization Training",
    desc_fr: "L'AFEDIE organise trois jours de formation intensive animés par sa Marraine et son cabinet pour outiller les femmes dans leur autonomisation et leur digitalisation.",
    desc_en: "AFEDIE is organizing three days of intensive training led by its Sponsor and her cabinet to equip women for empowerment and digitalization.",
    texte_fr: "L'AFEDIE organise, du 25 au 27 juin 2026, une formation en renforcement des capacités portant sur le leadership féminin, l'entrepreneuriat féminin et la digitalisation. Cette formation se tiendra au siège de l'association, à l'École Les Petits Mozart, et sera animée par la Marraine de l'AFEDIE et son cabinet.\n\nCette initiative s'inscrit dans la mission de capacitation et d'autonomisation des femmes portée par l'AFEDIE depuis sa création.",
    texte_en: "AFEDIE is organizing, from June 25 to 27, 2026, a capacity building training session focusing on female leadership, female entrepreneurship, and digitalization. This training will be held at the association's headquarters, Les Petits Mozart School, and will be animated by the Sponsor of AFEDIE and her cabinet.\n\nThis initiative aligns with the mission of capacity building and empowerment of women carried by AFEDIE since its creation."
  },
  {
    id: 4,
    tag_fr: "Humanitaire",
    tag_en: "Humanitarian",
    date_fr: "Juin 2026",
    date_en: "June 2026",
    lieu_fr: "Mfou & Oveng (Ngoumou)",
    lieu_en: "Mfou & Oveng (Ngoumou)",
    titre_fr: "Caravane Humanitaire : visite préparatoire des orphelinats",
    titre_en: "Humanitarian Caravan: Preparatory Visit to Orphanages",
    desc_fr: "Visite de six orphelinats (cinq à Mfou et un à Oveng) par l'équipe AFEDIE afin de sélectionner trois structures partenaires pour le déploiement de la Caravane.",
    desc_en: "Visit of six orphanages (five in Mfou and one in Oveng) by the AFEDIE team to select three partner structures for the deployment of the Caravan.",
    texte_fr: "Dans le cadre de la préparation de sa Caravane Humanitaire, l'AFEDIE a effectué une visite de six orphelinats, dont cinq situés à Mfou et un à Oveng, par Ngoumou. À l'issue de cette tournée, l'association envisage de travailler avec trois de ces structures pour la mise en œuvre de cette action humanitaire.",
    texte_en: "As part of the preparation for its Humanitarian Caravan, AFEDIE carried out a visit to six orphanages, including five located in Mfou and one in Oveng, near Ngoumou. Following this tour, the association plans to work with three of these structures for the implementation of this humanitarian action."
  },
  {
    id: 5,
    tag_fr: "Vie Associative",
    tag_en: "Community Life",
    date_fr: "14 juin 2026",
    date_en: "June 14, 2026",
    lieu_fr: "Siège de l'AFEDIE, Yaoundé",
    lieu_en: "AFEDIE HQ, Yaoundé",
    titre_fr: "Réunion mensuelle de l'AFEDIE — Rapprochement terrain",
    titre_en: "AFEDIE Monthly Meeting — Implementation Focus",
    desc_fr: "Réunion mensuelle axée sur la mise en pratique des résolutions issues de l'AGO du 29 mai 2026 et le déploiement opérationnel du Plan d'Action 2026.",
    desc_en: "Monthly meeting focused on putting into practice the resolutions adopted during the GA of May 29, 2026, and the operational deployment of the 2026 Action Plan.",
    texte_fr: "L'AFEDIE tiendra sa réunion mensuelle le dimanche 14 juin 2026, au siège de l'association. Cette rencontre sera l'occasion de prendre de nombreuses résolutions visant la mise en pratique des résolutions issues de l'Assemblée Générale Ordinaire du 29 mai 2026 et le déploiement du Plan d'Action 2026.",
    texte_en: "AFEDIE will hold its monthly meeting on Sunday, June 14, 2026, at the association's headquarters. This meeting will be the opportunity to adopt numerous resolutions aiming at the practical implementation of the resolutions from the Ordinary General Assembly of May 29, 2026, and the deployment of the 2026 Action Plan."
  }
];

export default function ActualitesSection() {
  const { language } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section id="actualites" className="section-padding" style={{ background: "var(--gris)", position: "relative" }}>
      <div className="container">
        {/* Title Block */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}
          >
            <div style={{ width: "30px", height: "2px", background: "var(--vert2)" }} />
            <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--vert2)" }}>
              {language === "fr" ? "Actualités & Événements" : "News & Events"}
            </span>
            <div style={{ width: "30px", height: "2px", background: "var(--vert2)" }} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--marine)", marginBottom: "1rem", fontFamily: "var(--font-poppins)" }}
          >
            {language === "fr" ? (
              <>Dernières <span style={{ color: "var(--or)" }}>Nouvelles</span> & Actions</>
            ) : (
              <>Latest <span style={{ color: "var(--or)" }}>News</span> & Actions</>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "1.05rem", color: "#666", maxWidth: "600px", lineHeight: 1.7 }}
          >
            {language === "fr" 
              ? "Suivez en direct l'actualité de l'association : assemblées, projets sur le terrain et formations de renforcement des capacités."
              : "Follow our association's latest updates: assemblies, field projects, and capacity building training sessions."}
          </motion.p>
        </div>

        {/* Grid of news */}
        <motion.div 
          className="news-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {articles.map((article) => {
            const tag = language === "fr" ? article.tag_fr : article.tag_en;
            const date = language === "fr" ? article.date_fr : article.date_en;
            const titre = language === "fr" ? article.titre_fr : article.titre_en;
            const desc = language === "fr" ? article.desc_fr : article.desc_en;

            return (
              <motion.div
                key={article.id}
                variants={itemVariants}
                className="news-card"
                whileHover={{ y: -8, boxShadow: "0 20px 45px rgba(0,0,0,0.06)" }}
              >
                <div className="news-card-content">
                  <div className="news-meta">
                    <span className="news-tag">{tag}</span>
                    <span className="news-date">
                      <Calendar size={14} style={{ marginRight: "6px" }} />
                      {date}
                    </span>
                  </div>

                  <h3 className="news-title">{titre}</h3>
                  <p className="news-desc">{desc}</p>
                  
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="news-btn"
                  >
                    {language === "fr" ? "Lire l'article" : "Read article"}
                    <ArrowRight size={16} className="btn-icon" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal for full article reading */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="close-btn" onClick={() => setSelectedArticle(null)}>
                <X size={20} />
              </button>

              <div className="modal-header">
                <span className="news-tag">
                  {language === "fr" ? selectedArticle.tag_fr : selectedArticle.tag_en}
                </span>
                
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--marine)", marginTop: "1rem", lineHeight: 1.25, fontFamily: "var(--font-poppins)" }}>
                  {language === "fr" ? selectedArticle.titre_fr : selectedArticle.titre_en}
                </h3>

                <div className="modal-meta-row">
                  <span className="modal-meta-item">
                    <Calendar size={16} />
                    {language === "fr" ? selectedArticle.date_fr : selectedArticle.date_en}
                  </span>
                  <span className="modal-meta-item">
                    <MapPin size={16} />
                    {language === "fr" ? selectedArticle.lieu_fr : selectedArticle.lieu_en}
                  </span>
                </div>
              </div>

              <div className="modal-body">
                {(language === "fr" ? selectedArticle.texte_fr : selectedArticle.texte_en).split("\n\n").map((para, i) => (
                  <p key={i} className="modal-paragraph">{para}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .news-card {
          background: white;
          border-radius: 28px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .news-card-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }
        .news-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 8px;
        }
        .news-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--vert2);
          background: rgba(27, 94, 32, 0.08);
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid rgba(27, 94, 32, 0.15);
        }
        .news-date {
          font-size: 0.8rem;
          color: #888;
          display: flex;
          align-items: center;
          font-weight: 500;
        }
        .news-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--marine);
          line-height: 1.4;
          margin-bottom: 1rem;
          font-family: var(--font-poppins);
        }
        .news-desc {
          font-size: 0.92rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .news-btn {
          border: none;
          background: transparent;
          color: var(--or);
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 0;
          transition: 0.3s;
          width: fit-content;
        }
        .news-btn:hover {
          color: var(--marine);
        }
        .news-btn:hover .btn-icon {
          transform: translateX(6px);
        }
        .btn-icon {
          transition: transform 0.3s ease;
        }

        /* MODAL STYLES */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(7, 21, 26, 0.6);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-content {
          background: white;
          border-radius: 32px;
          width: 100%;
          max-width: 780px;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 35px 80px rgba(0,0,0,0.15);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
        }
        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gris);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--marine);
          transition: all 0.2s ease;
          z-index: 10;
        }
        .close-btn:hover {
          background: #e5e7eb;
          transform: rotate(90deg);
        }
        .modal-header {
          padding: 3rem 3rem 1.5rem;
          border-bottom: 1px solid #f0f0f0;
          background: linear-gradient(to bottom, rgba(184,134,11,0.03), transparent);
        }
        .modal-meta-row {
          display: flex;
          gap: 2rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }
        .modal-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #666;
          font-weight: 600;
        }
        .modal-meta-item :global(svg) {
          color: var(--or);
        }
        .modal-body {
          padding: 2.5rem 3rem 3rem;
          overflow-y: auto;
        }
        .modal-paragraph {
          font-size: 1.05rem;
          color: #444;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .modal-paragraph:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .modal-header {
            padding: 2.5rem 2rem 1.2rem;
          }
          .modal-body {
            padding: 2rem;
          }
          .modal-meta-row {
            gap: 1rem;
          }
        }
        @media (max-width: 640px) {
          .news-card-content {
            padding: 1.8rem;
          }
          .news-title {
            font-size: 1.15rem;
          }
          .news-desc {
            margin-bottom: 1.5rem;
          }
          .modal-content {
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  );
}
