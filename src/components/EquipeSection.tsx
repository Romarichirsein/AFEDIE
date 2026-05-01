"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const membres = [
  {
    id: 1,
    image: "/images/responsables/responsable1.jpeg",
    role_fr: "1ère Vice-Présidente",
    role_en: "1st Vice President",
  },
  {
    id: 2,
    image: "/images/responsables/responsable2.jpeg",
    role_fr: "Trésorière",
    role_en: "Treasurer",
  },
  {
    id: 3,
    image: "/images/responsables/responsable3.jpeg",
    role_fr: "Commissaire aux Comptes",
    role_en: "Auditor",
  },
  {
    id: 4,
    image: "/images/responsables/responsable4.jpeg",
    role_fr: "Présidente Fondatrice",
    role_en: "Founding President",
    isPresident: true,
  },
  {
    id: 5,
    image: "/images/responsables/responsable5.jpeg",
    role_fr: "Secrétaire Générale",
    role_en: "General Secretary",
  },
];

export default function EquipeSection() {
  const { t, language } = useLanguage();

  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
    }),
  };

  // Trier : présidente en premier
  const sorted = [...membres].sort((a, b) =>
    a.isPresident ? -1 : b.isPresident ? 1 : 0
  );

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
      {/* Decorative background circles */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(184, 134, 11, 0.07)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(184, 134, 11, 0.05)",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "1.2rem",
            }}
          >
            <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--or)",
              }}
            >
              {language === "fr" ? "Notre Équipe" : "Our Team"}
            </span>
            <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            {language === "fr"
              ? "Les Responsables de l'Association"
              : "Association Leadership"}
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {language === "fr"
              ? "Des femmes engagées et déterminées qui portent chaque jour la vision et les valeurs de l'AFEDIE."
              : "Committed and determined women who carry the vision and values of AFEDIE every day."}
          </p>
        </motion.div>

        {/* Président card - highlighted */}
        {sorted
          .filter((m) => m.isPresident)
          .map((membre) => (
            <motion.div
              key={membre.id}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "3.5rem",
              }}
            >
              <div
                className="president-card"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(184, 134, 11, 0.4)",
                  borderRadius: "28px",
                  padding: "2.5rem 3rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.5rem",
                  maxWidth: "380px",
                  width: "100%",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(184,134,11,0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold shimmer top bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, transparent, var(--or), transparent)",
                  }}
                />

                {/* Badge présidente */}
                <div
                  style={{
                    background: "var(--or)",
                    color: "var(--marine)",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "6px 18px",
                    borderRadius: "100px",
                  }}
                >
                  {language === "fr" ? "Présidente Fondatrice" : "Founding President"}
                </div>

                {/* Photo */}
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "5px solid var(--or)",
                    boxShadow: "0 0 0 3px rgba(184,134,11,0.2), 0 20px 40px rgba(0,0,0,0.4)",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={membre.image}
                    alt={language === "fr" ? membre.role_fr : membre.role_en}
                    width={160}
                    height={160}
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>

                {/* Nom */}
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Ida Sandrine NGNOTUE FOTSO
                  </p>
                  <div
                    style={{
                      width: "40px",
                      height: "2px",
                      background: "var(--or)",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}

        {/* Autres membres */}
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
          className="equipe-grid"
        >
          {sorted
            .filter((m) => !m.isPresident)
            .map((membre, i) => (
              <motion.div
                key={membre.id}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={revealVariants}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    padding: "2rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.2rem",
                    transition: "all 0.35s ease",
                    cursor: "default",
                  }}
                  className="membre-card"
                >
                  {/* Photo */}
                  <div
                    style={{
                      width: "110px",
                      height: "110px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid rgba(184, 134, 11, 0.5)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={membre.image}
                      alt={language === "fr" ? membre.role_fr : membre.role_en}
                      width={110}
                      height={110}
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>

                  {/* Rôle */}
                  <div style={{ textAlign: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "var(--or2)",
                        background: "rgba(184, 134, 11, 0.12)",
                        padding: "5px 14px",
                        borderRadius: "100px",
                        border: "1px solid rgba(184, 134, 11, 0.25)",
                      }}
                    >
                      {language === "fr" ? membre.role_fr : membre.role_en}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <style jsx>{`
        .equipe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.8rem;
        }
        .membre-card:hover {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(184, 134, 11, 0.3) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        @media (max-width: 768px) {
          .equipe-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem !important;
          }
        }
        @media (max-width: 640px) {
          .president-card {
            padding: 2rem 1.5rem !important;
            border-radius: 24px !important;
          }
          .membre-card {
            padding: 1.5rem 1rem !important;
            border-radius: 20px !important;
          }
          .membre-card img {
            width: 90px !important;
            height: 90px !important;
          }
        }
        @media (max-width: 480px) {
          .equipe-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
