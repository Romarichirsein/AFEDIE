"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const years = ["2023", "2024", "2025"] as const;
type Year = typeof years[number];

const rapportData: Record<Year, {
  titre: string;
  sous_titre: string;
  contexte: string;
  faits: string[];
  enseignement: string;
  images: string[];
  couleur: string;
  icone: string;
}> = {
  "2023": {
    titre: "Consolidation des Fondations",
    sous_titre: "Une année de structuration interne",
    contexte: "L'année 2023 s'est inscrite dans une dynamique de consolidation interne. Le bureau en place, sous la conduite de la Présidente Fondatrice, a maintenu le rythme des réunions mensuelles et poursuivi les actions de terrain engagées depuis la création de l'association.",
    faits: [
      "12 réunions mensuelles tenues avec un taux de participation satisfaisant",
      "Actions d'accompagnement de femmes en situation de vulnérabilité",
      "Renforcement de la solidarité interne entre membres",
      "Réflexion engagée sur le dossier orphelinat (MINAS)",
      "Constitution d'une base documentaire et archivage des activités",
      "Pratique mensuelle : partage de savoir-faire entre membres",
      "Modèle de la Présidente de séance tournante — levier de leadership féminin"
    ],
    enseignement: "2023 a confirmé la vitalité de l'association et sa capacité à maintenir ses engagements dans un environnement exigeant. Le modèle de la présidente de séance tournante s'est révélé un puissant levier de développement du leadership féminin.",
    images: [
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.32.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.33.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.33 (1).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.34.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.34 (1).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.34 (2).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35 (1).jpeg",
    icone: "foundation",
  },
  "2024": {
    titre: "Ouverture Institutionnelle",
    sous_titre: "Un tournant stratégique pour AFEDIE",
    contexte: "L'année 2024 a marqué un tournant dans la stratégie institutionnelle d'AFEDIE, avec une volonté affirmée d'obtenir une reconnaissance officielle accrue et d'élargir le cercle des partenaires.",
    faits: [
      "12 réunions mensuelles tenues",
      "Dépôt du dossier de reconnaissance ONG auprès du MINAS",
      "Missions de solidarité envers les femmes en détresse",
      "Initiation de contacts formels avec la Mairie de Yaoundé III, le MINAS et LAFTA",
      "Formations thématiques organisées au bénéfice des membres",
      "Renforcement du cadre documentaire associatif",
      "Dons remis à LAFTA en soutien aux femmes et aux familles dans le besoin"
    ],
    enseignement: "2024 a démontré la montée en puissance d'AFEDIE sur le plan institutionnel. Le dépôt du dossier ONG constitue une étape significative vers une reconnaissance nationale qui ouvrira de nouvelles portes aux partenariats et aux financements.",
    images: [
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35 (2).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.35 (3).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.36.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.36 (1).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.36 (2).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.37.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.37 (1).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.37 (2).jpeg",
    ],
    couleur: "#B8860B",
    icone: "partnership",
  },
  "2025": {
    titre: "Résilience et Renouveau",
    sous_titre: "Une épreuve surmontée, une association renforcée",
    contexte: "L'année 2025 a été marquée par une crise interne majeure : une vague de démissions survenue en janvier a momentanément fragilisé la structure. Mais sous l'impulsion résolue de la Présidente Fondatrice, AFEDIE a su se relever, se réinventer et émerger plus forte.",
    faits: [
      "Assemblée Générale Extraordinaire tenue en septembre 2025 — restructuration complète du bureau",
      "Recrutement d'un community manager et lancement de la page Facebook officielle AFEDIE",
      "Refonte de l'identité visuelle : nouveau logo aux couleurs AFEDIE",
      "Relance du dossier ONG (contact des services régionaux fin 2025)",
      "Dons remis à LAFTA en soutien aux femmes et aux familles dans le besoin",
      "Dons remis à l'orphelinat — acte de solidarité et de fidélité à la vision de la Fondatrice",
      "Conventions de bénévolat signées avec un fiscaliste et un juriste",
      "Réalisation du livret institutionnel officiel et du site internet AFEDIE",
      "30 membres actives après restructuration"
    ],
    enseignement: "La crise de 2025 aurait pu briser une association moins enracinée dans ses valeurs. AFEDIE en est sortie transformée et déterminée. La refondation du bureau, la digitalisation de la communication, et le renforcement des partenariats institutionnels attestent d'une maturité associative incontestable.",
    images: [
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.38.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.38 (1).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.38 (2).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.39.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.39 (1).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.40.jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.40 (1).jpeg",
      "/images/gallery/WhatsApp Image 2026-05-01 at 08.13.41.jpeg",
    ],
    couleur: "#166534",
    icone: "resilience",mages/gallery/WhatsApp Image 2026-05-01 at 08.13.41.jpeg",
    ],
    couleur: "#166534",
    icone: "🌱",
  },
};

const kpiData = [
  { label: "Réunions tenues", "2023": "12", "2024": "12", "2025": "4 + 1 AG Extra." },
  { label: "Membres actives", "2023": "~20", "2024": "~25", "2025": "30" },
  { label: "Actions solidaires", "2023": "2", "2024": "3", "2025": "4" },
  { label: "Dossiers institutionnels", "2023": "En cours", "2024": "ONG déposé", "2025": "Relance ONG + Orphelinat" },
  { label: "Présence numérique", "2023": "Absente", "2024": "Naissante", "2025": "Site + Facebook + Livret" },
];

export default function RapportsContent() {
  const [activeYear, setActiveYear] = useState<Year>("2023");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const rapport = rapportData[activeYear];

  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #07151A 0%, #0d2233 50%, #07151A 100%)",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, rgba(184,134,11,0.08) 0%, transparent 70%)",
        }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{
              background: "rgba(184,134,11,0.15)",
              border: "1px solid rgba(184,134,11,0.4)",
              color: "var(--or2)",
              padding: "6px 18px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "1.5rem",
            }}>Rapports d'Activités</span>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1rem",
              fontFamily: "var(--font-poppins)",
            }}>
              Bilan & Perspectives<br />
              <span style={{ color: "var(--or2)" }}>AFEDIE 2023 – 2025</span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              Rapport de synthèse présenté lors de l'Assemblée Générale Ordinaire du 29 mai 2026.<br />
              Présenté par <strong style={{ color: "var(--or2)" }}>Mme IDA SANDRINE NGNOTUE FOTSO</strong>, Présidente Fondatrice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* YEAR TABS */}
      <section style={{ background: "#0d1f2d", position: "sticky", top: "70px", zIndex: 100, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "0", padding: "0" }}>
          {years.map((year) => {
            const isActive = activeYear === year;
            const data = rapportData[year];
            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                style={{
                  flex: 1,
                  maxWidth: "200px",
                  padding: "1.2rem 1rem",
                  background: isActive ? `${data.couleur}22` : "transparent",
                  color: isActive ? data.couleur : "rgba(255,255,255,0.5)",
                  border: "none",
                  borderBottom: isActive ? `3px solid ${data.couleur}` : "3px solid transparent",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 800 : 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "1.1rem", fontWeight: 900 }}>{year}</span>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.5px", opacity: 0.8 }}>{data.titre.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* RAPPORT CONTENT */}
      <section style={{ background: "linear-gradient(180deg, #07151A 0%, #0a1a28 100%)", padding: "4rem 0 6rem" }}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Year header */}
              <div style={{
                background: `linear-gradient(135deg, ${rapport.couleur}15, ${rapport.couleur}05)`,
                border: `1px solid ${rapport.couleur}30`,
                borderRadius: "20px",
                padding: "2.5rem",
                marginBottom: "3rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ color: rapport.couleur, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                      Bilan {activeYear}
                    </div>
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, color: "white", fontFamily: "var(--font-poppins)", margin: 0 }}>
                      {rapport.titre}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.5)", margin: "4px 0 0", fontSize: "0.9rem" }}>{rapport.sous_titre}</p>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }}>{rapport.contexte}</p>
              </div>

              {/* 2-column layout */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }} className="rapport-grid">

                {/* Faits marquants */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "2rem",
                }}>
                  <h3 style={{ color: rapport.couleur, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                    Faits Marquants
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {rapport.faits.map((fait, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
                      >
                        <span style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: `${rapport.couleur}20`,
                          border: `1px solid ${rapport.couleur}50`,
                          color: rapport.couleur,
                          fontSize: "0.6rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}>✓</span>
                        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", lineHeight: 1.6 }}>{fait}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Enseignement */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{
                    background: `${rapport.couleur}10`,
                    border: `1px solid ${rapport.couleur}25`,
                    borderRadius: "16px",
                    padding: "2rem",
                  }}>
                    <h3 style={{ color: rapport.couleur, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
                      Enseignements de l'Année
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontSize: "0.9rem", margin: 0, fontStyle: "italic" }}>
                      "{rapport.enseignement}"
                    </p>
                  </div>

                  {/* Quick KPIs for that year */}
                  <div style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                  }}>
                    <h3 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
                      Indicateurs Clés
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      {[
                        { label: "Réunions", val: activeYear === "2023" ? "12" : activeYear === "2024" ? "12" : "4 + 1 AG" },
                        { label: "Membres", val: activeYear === "2023" ? "~20" : activeYear === "2024" ? "~25" : "30" },
                        { label: "Actions solidaires", val: activeYear === "2023" ? "2" : activeYear === "2024" ? "3" : "4" },
                        { label: "Statut ONG", val: activeYear === "2023" ? "En réflexion" : activeYear === "2024" ? "Déposé" : "Relancé" },
                      ].map((kpi) => (
                        <div key={kpi.label} style={{ textAlign: "center" }}>
                          <div style={{ fontSize: "1.4rem", fontWeight: 900, color: rapport.couleur }}>{kpi.val}</div>
                          <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{kpi.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  <span style={{
                    width: "36px",
                    height: "3px",
                    background: rapport.couleur,
                    display: "inline-block",
                    borderRadius: "2px",
                  }} />
                  Photos — {activeYear}
                </h3>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "1rem",
                }}>
                  {rapport.images.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => setLightboxImg(src)}
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border: `1px solid ${rapport.couleur}20`,
                        aspectRatio: "4/3",
                        position: "relative",
                      }}
                      whileHover={{ scale: 1.02, boxShadow: `0 8px 30px ${rapport.couleur}30` }}
                    >
                      <img
                        src={src}
                        alt={`Photo activité AFEDIE ${activeYear} - ${i + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        loading="lazy"
                      />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                        opacity: 0,
                        transition: "0.3s",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "1rem",
                      }}
                        className="photo-overlay"
                      >
                        <span style={{ color: "white", fontSize: "0.75rem", fontWeight: 700 }}>
                          🔍 Agrandir
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* KPI Comparison Table */}
          <div style={{
            marginTop: "4rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "2rem",
            overflowX: "auto",
          }}>
            <h2 style={{
              color: "white",
              fontSize: "1.3rem",
              fontWeight: 800,
              marginBottom: "1.5rem",
              fontFamily: "var(--font-poppins)",
            }}>
              Tableau de Bord Comparatif 2023 – 2024 – 2025
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Indicateur
                  </th>
                  {years.map(year => (
                    <th key={year} style={{ textAlign: "center", padding: "12px 16px", color: rapportData[year].couleur, fontSize: "0.9rem", fontWeight: 900, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kpiData.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {row.label}
                    </td>
                    {years.map(year => (
                      <td key={year} style={{ textAlign: "center", padding: "12px 16px", color: activeYear === year ? rapportData[year].couleur : "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: activeYear === year ? 700 : 400, borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "0.3s" }}>
                        {row[year]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              cursor: "zoom-out",
            }}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImg}
              alt="Photo activité AFEDIE"
              style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: "12px", boxShadow: "0 20px 80px rgba(0,0,0,0.8)" }}
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: "fixed",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                fontSize: "1.3rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .rapport-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .rapport-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .photo-overlay:hover {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}
