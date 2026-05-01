"use client";

import { motion } from "framer-motion";

const actions = [
  {
    icone: "✦",
    titre: "Caravanes de Santé",
    desc: "Consultations médicales gratuites et dépistages au profit des populations vulnérables autour de Yaoundé.",
    couleur: "#DC2626",
  },
  {
    icone: "✦",
    titre: "Soutien aux Femmes en Détresse",
    desc: "Accompagnement psychologique, matériel et social des femmes en situation de vulnérabilité ou de précarité.",
    couleur: "#7C3AED",
  },
  {
    icone: "✦",
    titre: "Aide aux Orphelinats",
    desc: "Dons réguliers à l'orphelinat, en fidélité à la vision humanitaire de la Fondatrice Mme Marie Souzane GAMGNE.",
    couleur: "#B8860B",
  },
  {
    icone: "✦",
    titre: "Soutien aux Personnes Âgées (LAFTA)",
    desc: "Partenariat avec LAFTA pour accompagner les femmes âgées dans l'accès aux soins et à la dignité.",
    couleur: "#166534",
  },
  {
    icone: "✦",
    titre: "Rentrée Solidaire",
    desc: "Distribution de kits scolaires, bourses d'études et soutien aux orphelins pour une scolarité assurée.",
    couleur: "#0369A1",
  },
  {
    icone: "✦",
    titre: "Arbre de Noël & Caravane",
    desc: "Organisation d'un Noël solidaire avec repas et cadeaux pour les enfants défavorisés, dépistage gratuit pour les seniors.",
    couleur: "#166534",
  },
];

const partenaires = [
  { nom: "LAFTA", desc: "Lutte contre les Affections liées au Temps" },
  { nom: "MINAS", desc: "Ministère des Affaires Sociales du Cameroun" },
  { nom: "Mairie de Yaoundé III", desc: "Collectivité territoriale partenaire" },
  { nom: "MINPROFF", desc: "Ministère de la Promotion de la Femme et de la Famille" },
];

export default function HumanitaireContent() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #07151A 0%, #1a0d2e 50%, #07151A 100%)",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(220,38,38,0.08) 0%, transparent 70%)" }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{
              background: "rgba(220,38,38,0.15)",
              border: "1px solid rgba(220,38,38,0.4)",
              color: "#F87171",
              padding: "6px 18px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "1.5rem",
            }}>Action Humanitaire</span>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1rem",
              fontFamily: "var(--font-poppins)",
            }}>
              Solidarité & <br />
              <span style={{ color: "#F87171" }}>Aide Humanitaire</span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
              AFEDIE agit concrètement sur le terrain pour améliorer les conditions de vie des femmes, des enfants et des personnes âgées au Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ACTIONS */}
      <section style={{ background: "#07151A", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ color: "white", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, fontFamily: "var(--font-poppins)" }}>
              Nos Domaines d'Intervention
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
              Des actions concrètes, sur le terrain, pour celles qui en ont le plus besoin.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: `linear-gradient(135deg, ${action.couleur}12, ${action.couleur}05)`,
                  border: `1px solid ${action.couleur}30`,
                  borderRadius: "16px",
                  padding: "2rem",
                  transition: "transform 0.3s",
                }}
                whileHover={{ y: -5 }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</div>
                <h3 style={{ color: "white", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem" }}>{action.titre}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{action.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section style={{ background: "#0a1a28", padding: "4rem 0 6rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ color: "white", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, fontFamily: "var(--font-poppins)" }}>
              Nos Partenaires Institutionnels
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
            {partenaires.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✦</div>
                <div style={{ color: "var(--or2)", fontWeight: 800, fontSize: "1rem", marginBottom: "0.25rem" }}>{p.nom}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
