"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const visionnaire = {
  name: "Mme Marie souzane Gamgne née Ngnotue fotso",
  image: "/images/responsables/visionnaire_new.jpeg",
  role_fr: "Visionnaire",
  role_en: "Visionary",
};

const membres = [
  {
    id: 1,
    name: "Ida Sandrine NGNOTUE FOTSO",
    image: "/images/responsables/responsable4.jpeg",
    role_fr: "Présidente Fondatrice",
    role_en: "Founding President",
    isPresident: true,
  },
  {
    id: 2,
    name: "Mme AROUNG Marylène",
    image: "/images/responsables/vice_presidente_new.jpeg",
    role_fr: "Vice-Présidente",
    role_en: "Vice President",
  },
  {
    id: 3,
    name: "Mme MAFFOUO Séverine",
    image: "/images/responsables/tresoriere_new.jpeg",
    role_fr: "Secrétaire Générale",
    role_en: "General Secretary",
  },
  {
    id: 4,
    name: "Mme MAKOUDJOU MARIE",
    image: "/images/responsables/secretaire_adjointe.jpeg",
    role_fr: "Secrétaire Générale Adjointe",
    role_en: "Assistant General Secretary",
  },
  {
    id: 5,
    name: "Mme NGONGANG Suzanne",
    image: "/images/responsables/tresoriere.jpeg",
    role_fr: "Secrétaire Financière / Trésorière",
    role_en: "Financial Secretary / Treasurer",
  },
  {
    id: 6,
    name: "Mme Marthe KOM",
    image: "/images/responsables/commissaire_comptes_new.jpeg",
    role_fr: "Contrôleur de Gestion",
    role_en: "Operations Controller",
  },
  {
    id: 7,
    name: "Mme Charlotte NANA",
    image: "/images/responsables/relations_publiques.jpeg",
    role_fr: "Chargée des Relations Publiques",
    role_en: "Public Relations Manager",
  },
  {
    id: 8,
    name: "Mme MBIAKOP Rosalie",
    image: "/images/responsables/censeur_new.jpeg",
    role_fr: "Censeur",
    role_en: "Censor",
  },
  {
    id: 9,
    name: "Mme NGUETGNA Marie",
    image: "/images/responsables/conseillere_marie.jpeg",
    role_fr: "Conseillère",
    role_en: "Advisor",
  },
];

export default function EquipeSection() {
  const { t, language } = useLanguage();

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
    }),
  };

  const sorted = [...membres];

  return (
    <section
      id="equipe"
      className="section-padding"
      style={{
        background: "linear-gradient(160deg, var(--marine) 0%, #0a1e28 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div className="team-badge-wrap">
            <div className="team-line" />
            <span className="team-badge">
              {language === "fr" ? "Notre Équipe" : "Our Team"}
            </span>
            <div className="team-line" />
          </div>

          <h2 className="team-title text-balance">
            {language === "fr" ? "Les Responsables" : "Leadership Team"}
          </h2>

          <p className="team-subtitle">
            {language === "fr"
              ? "Des femmes engagées qui portent la vision de l'AFEDIE."
              : "Committed women carrying the vision of AFEDIE."}
          </p>
        </motion.div>

        {/* Visionnaire Section (Publication toute seule) */}
        <div style={{ marginBottom: "5rem" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="visionnaire-publication"
          >
            <div className="visionnaire-content">
              <div className="visionnaire-photo-wrap">
                <Image
                  src={visionnaire.image}
                  alt={visionnaire.name}
                  width={280}
                  height={280}
                  className="visionnaire-img"
                />
              </div>
              <div className="visionnaire-text">
                <div className="visionnaire-badge">
                  {language === "fr" ? visionnaire.role_fr : visionnaire.role_en}
                </div>
                <h3 className="visionnaire-name">{visionnaire.name.toUpperCase()}</h3>
                <div className="visionnaire-line" />
                <p className="visionnaire-quote">
                  {language === "fr" 
                    ? "« La vision est l'art de voir les choses invisibles. Notre engagement pour la dignité des femmes est le moteur de chaque action de l'AFEDIE. »"
                    : "« Vision is the art of seeing invisible things. Our commitment to women's dignity is the driving force behind every action of AFEDIE. »"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Top Leadership (Présidente) */}
        <div className="top-leadership-wrap">
          {sorted
            .filter((m) => m.isPresident)
            .map((membre, i) => (
              <motion.div
                key={membre.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="president-card-wrap"
              >
                <div className="president-card">
                  <div className="president-badge">
                    {language === "fr" ? membre.role_fr : membre.role_en}
                  </div>
                  <div className="president-photo-wrap">
                    <Image
                      src={membre.image}
                      alt={membre.name || "Membre"}
                      width={160}
                      height={160}
                      className="team-img"
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p className="president-name">
                      {membre.name.toUpperCase()}
                    </p>
                    <div className="name-line" />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Autres membres du bureau */}
        <div className="equipe-grid">
          {sorted
            .filter((m) => !m.isPresident)
            .map((membre, i) => (
              <motion.div
                key={membre.id}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
              >
                <div className="membre-card">
                  <div className="membre-photo-wrap">
                    <Image
                      src={membre.image}
                      alt={membre.name || membre.role_fr}
                      width={110}
                      height={110}
                      className="team-img"
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                      {membre.name.toUpperCase()}
                    </p>
                    <div className="role-badge">
                      {language === "fr" ? membre.role_fr : membre.role_en}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Membres d'Honneur & Bienfaiteurs Section */}
        <div style={{ marginTop: "6rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h3 style={{ color: "white", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.8rem" }}>
              {language === "fr" ? "Membres d'Honneur & Bienfaiteurs" : "Honorary & Benefactor Members"}
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto" }}>
              {language === "fr" 
                ? "Personnalités intronisées lors de l'Assemblée Générale Ordinaire du 29 mai 2026 en reconnaissance de leur soutien exceptionnel." 
                : "Personalities inducted during the Ordinary General Assembly of May 29, 2026, in recognition of their exceptional support."}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="membres-special-grid">
            {/* Membres Bienfaiteurs */}
            <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "24px", padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.8rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--or)" }} />
                <h4 style={{ color: "var(--or2)", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                  {language === "fr" ? "Membres Bienfaiteurs" : "Benefactor Members"}
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {[
                  { name: "M. Cédric ATANGANA", desc: language === "fr" ? "Président, AC Shining Stars (Irlande)" : "Chairman, AC Shining Stars (Ireland)" },
                  { name: "M. William AROUNG", desc: "" },
                  { name: "M. Lucien NANA YOMBA", desc: "" }
                ].map((item, idx) => (
                  <li key={idx} style={{ borderBottom: idx < 2 ? "1px solid rgba(255, 255, 255, 0.04)" : "none", paddingBottom: idx < 2 ? "0.8rem" : "0" }}>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>{item.name}</p>
                    {item.desc && <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", margin: "2px 0 0" }}>{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Membres d'Honneur */}
            <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "24px", padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.8rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--vert2)" }} />
                <h4 style={{ color: "var(--vert2)", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                  {language === "fr" ? "Membres d'Honneur" : "Honorary Members"}
                </h4>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="membres-honneur-list">
                {[
                  { name: "M. Léon EPÉE LEON MARIE", title: language === "fr" ? "Ambassadeur Dignité & Excellence" : "Ambassador of Dignity & Excellence" },
                  { name: "Mme Yvonne FOALEM FOTSO" },
                  { name: "Mme Chandore FOTSO MBOBDA" },
                  { name: "M. Gabriel Léopold KOUOKAM" },
                  { name: "M. William TAGNE WAFO" },
                  { name: "Mme Mireille Georgette TAGNE DJODOM" },
                  { name: "M. Hugues Merlin KETCHIAMAIN" },
                  { name: "Mme Julienne TAGNE" },
                  { name: "M. Fulbert NGATSING TATSINKOU" },
                  { name: "M. James Wilfrid NDJEHOYA", title: language === "fr" ? "Adjoint au Maire de Bagneux — Intronisé le 19 juillet 2026" : "Deputy Mayor of Bagneux — Inducted July 19, 2026" },
                  { name: "M. Zacharie NGUETGNA" },
                  { name: "M. Adolphe NDASSA" }
                ].map((item, idx) => (
                  <div key={idx} style={{ padding: "0.4rem 0" }}>
                    <p style={{ color: "rgba(255, 255, 255, 0.95)", fontWeight: 600, fontSize: "0.88rem", margin: 0 }}>{item.name}</p>
                    {"title" in item && <p style={{ color: "var(--or2)", fontSize: "0.75rem", margin: "2px 0 0", fontWeight: 700 }}>{item.title}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-badge-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 1.2rem;
          width: 100%;
        }
        .team-line {
          width: 40px;
          height: 2px;
          background: var(--or);
          flex-shrink: 0;
        }
        .team-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--or);
          white-space: nowrap;
        }
        .team-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
          line-height: 1.15;
          margin-bottom: 1rem;
        }
        .team-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.6);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .top-leadership-wrap {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
          width: 100%;
        }
        .president-card-wrap {
          display: flex;
          justify-content: center;
          width: auto;
          min-width: 320px;
        }
        .president-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(184, 134, 11, 0.4);
          border-radius: 28px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 350px;
          width: 100%;
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }
        .visionnaire-publication {
          background: linear-gradient(135deg, rgba(25, 71, 48, 0.2) 0%, rgba(7, 21, 26, 0.4) 100%);
          border: 1px solid rgba(74, 222, 128, 0.2);
          border-radius: 40px;
          padding: 3rem;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
        }
        .visionnaire-content {
          display: flex;
          align-items: center;
          gap: 3.5rem;
        }
        .visionnaire-photo-wrap {
          width: 280px;
          height: 280px;
          border-radius: 30px;
          overflow: hidden;
          border: 4px solid var(--vert2);
          flex-shrink: 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .visionnaire-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .visionnaire-text {
          flex: 1;
        }
        .visionnaire-badge {
          display: inline-block;
          background: var(--vert2);
          color: white;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 1.2rem;
        }
        .visionnaire-name {
          font-size: 1.75rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.8rem;
          line-height: 1.2;
        }
        .visionnaire-line {
          width: 60px;
          height: 3px;
          background: var(--vert2);
          margin-bottom: 1.5rem;
        }
        .visionnaire-quote {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.8);
          font-style: italic;
          line-height: 1.6;
        }
        .president-badge {
          background: var(--or);
          color: var(--marine);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 100px;
        }
        .president-photo-wrap {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid var(--or);
          flex-shrink: 0;
        }
        .team-img {
          object-fit: cover;
          object-position: top;
        }
        .president-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.4rem;
          white-space: normal;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .mobile-only {
          display: none;
        }
        .name-line {
          width: 40px;
          height: 2px;
          background: var(--or);
          margin: 0 auto;
        }
        .equipe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.8rem;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }
        .membre-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          width: 100%;
        }
        .membre-photo-wrap {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(184, 134, 11, 0.5);
          flex-shrink: 0;
        }
        .role-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--or2);
          background: rgba(184, 134, 11, 0.12);
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid rgba(184, 134, 11, 0.25);
          text-align: center;
        }

        @media (max-width: 900px) {
          .visionnaire-content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
          .visionnaire-line {
            margin: 0 auto 1.5rem auto;
          }
          .membres-special-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .equipe-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .mobile-only {
            display: block;
          }
          .team-badge-wrap {
            gap: 8px;
          }
          .equipe-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .president-card {
            padding: 2rem 1.5rem !important;
            max-width: 100% !important;
          }
          .membre-card {
            max-width: 320px;
            margin: 0 auto;
          }
          .team-line {
            width: 20px;
          }
          .team-badge {
            font-size: 0.7rem;
            letter-spacing: 2px;
          }
        }
        @media (max-width: 480px) {
          .president-photo-wrap {
            width: 130px;
            height: 130px;
          }
          .president-name {
            font-size: 1.1rem;
          }
          .membres-honneur-list {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
