"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const membres = [
  {
    id: 1,
    name: "Mme Aroung Marylène",
    image: "/images/responsables/vice_presidente.jpeg",
    role_fr: "1ère Vice-Présidente",
    role_en: "1st Vice President",
  },
  {
    id: 2,
    name: "Mme Maffouo Séverine",
    image: "/images/responsables/tresoriere.jpeg",
    role_fr: "Trésorière",
    role_en: "Treasurer",
  },
  {
    id: 3,
    name: "Mme kom Marthe",
    image: "/images/responsables/commissaire_comptes.jpeg",
    role_fr: "Commissaire aux Comptes",
    role_en: "Auditor",
  },
  {
    id: 4,
    name: "Ida Sandrine NGNOTUE FOTSO",
    image: "/images/responsables/responsable4.jpeg",
    role_fr: "Présidente Fondatrice",
    role_en: "Founding President",
    isPresident: true,
  },
  {
    id: 5,
    name: "Anne Marie Bonna",
    image: "/images/responsables/secretaire_generale.jpeg",
    role_fr: "Secrétaire Générale",
    role_en: "General Secretary",
  },
  {
    id: 6,
    name: "Mme Marie Souzane GAMGNE",
    image: "/images/responsables/visionnaire.jpeg",
    role_fr: "Visionnaire Fondatrice",
    role_en: "Founding Visionary",
    isVisionary: true,
  },
  {
    id: 7,
    name: "Mme makoudjou Marie",
    image: "/images/responsables/conseillere.jpeg",
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

  const sorted = [...membres].sort((a, b) => {
    if (a.isVisionary) return -1;
    if (b.isVisionary) return 1;
    if (a.isPresident) return -1;
    if (b.isPresident) return 1;
    return a.id - b.id;
  });

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

        {/* Top Leadership (Visionnaire & Président) */}
        <div className="top-leadership-wrap">
          {sorted
            .filter((m) => m.isVisionary || m.isPresident)
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
                <div className={`president-card ${membre.isVisionary ? 'visionary-card' : ''}`}>
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
                      {membre.name}
                    </p>
                    <div className="name-line" />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Autres membres */}
        <div className="equipe-grid">
          {sorted
            .filter((m) => !m.isVisionary && !m.isPresident)
            .map((membre, i) => (
              <motion.div
                key={membre.id}
                custom={i + 2}
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
                      {membre.name}
                    </p>
                    <div className="role-badge">
                      {language === "fr" ? membre.role_fr : membre.role_en}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
        .visionary-card {
          border-color: var(--vert2);
          background: rgba(25, 71, 48, 0.1);
        }
        .visionary-card .president-badge {
          background: var(--vert2);
          color: white;
        }
        .visionary-card .president-photo-wrap {
          border-color: var(--vert2);
        }
        .visionary-card .name-line {
          background: var(--vert2);
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
        }
      `}</style>
    </section>
  );
}
