"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DonContent() {
  const [montant, setMontant] = useState("");
  const [montantCustom, setMontantCustom] = useState("");
  const [cause, setCause] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  const montants = ["5 000", "10 000", "25 000", "50 000", "100 000"];

  const causes = [
    { id: "general", label: "Soutien Général AFEDIE", icone: "🌟" },
    { id: "humanitaire", label: "Action Humanitaire", icone: "❤️" },
    { id: "education", label: "Soutien Scolaire", icone: "📚" },
    { id: "sante", label: "Caravane de Santé", icone: "🏥" },
    { id: "orphelinat", label: "Aide à l'Orphelinat", icone: "🏚️" },
  ];

  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #07151A 0%, #0d1f1a 50%, #07151A 100%)",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(22,101,52,0.1) 0%, transparent 70%)" }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{
              background: "rgba(22,101,52,0.2)",
              border: "1px solid rgba(22,101,52,0.5)",
              color: "#4ADE80",
              padding: "6px 18px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "1.5rem",
            }}>💚 Faire un Don</span>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1rem",
              fontFamily: "var(--font-playfair)",
            }}>
              Soutenez <span style={{ color: "#4ADE80" }}>notre mission</span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
              Chaque don, petit ou grand, contribue à l'autonomisation des femmes, à l'aide humanitaire et au développement communautaire au Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DON FORM */}
      <section style={{ background: "#07151A", padding: "5rem 0 7rem" }}>
        <div className="container">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "4rem 2rem" }}
            >
              <div style={{ fontSize: "5rem", marginBottom: "1.5rem" }}>🙏</div>
              <h2 style={{ color: "white", fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-playfair)" }}>
                Merci pour votre générosité !
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
                Votre soutien est précieux pour AFEDIE. Un membre de notre équipe vous contactera prochainement pour finaliser votre don.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: "2rem",
                  background: "var(--or)",
                  color: "white",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                Faire un autre don
              </button>
            </motion.div>
          ) : (
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              {/* Cause */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h3 style={{ color: "white", fontWeight: 700, marginBottom: "1rem", fontSize: "1rem" }}>
                  1. Choisissez une cause
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
                  {causes.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setCause(c.id)}
                      style={{
                        background: cause === c.id ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${cause === c.id ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.1)"}`,
                        borderRadius: "12px",
                        padding: "1rem",
                        cursor: "pointer",
                        textAlign: "center",
                        color: cause === c.id ? "#4ADE80" : "rgba(255,255,255,0.6)",
                        fontWeight: cause === c.id ? 700 : 400,
                        fontSize: "0.82rem",
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ fontSize: "1.8rem", marginBottom: "6px" }}>{c.icone}</div>
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Montant */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h3 style={{ color: "white", fontWeight: 700, marginBottom: "1rem", fontSize: "1rem" }}>
                  2. Choisissez un montant (FCFA)
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                  {montants.map(m => (
                    <button
                      key={m}
                      onClick={() => { setMontant(m); setMontantCustom(""); }}
                      style={{
                        background: montant === m ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${montant === m ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.1)"}`,
                        borderRadius: "10px",
                        padding: "10px 20px",
                        cursor: "pointer",
                        color: montant === m ? "#4ADE80" : "rgba(255,255,255,0.6)",
                        fontWeight: montant === m ? 700 : 400,
                        fontSize: "0.9rem",
                        transition: "all 0.2s",
                      }}
                    >
                      {m} FCFA
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Autre montant (FCFA)"
                  value={montantCustom}
                  onChange={e => { setMontantCustom(e.target.value); setMontant(""); }}
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    color: "white",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h3 style={{ color: "white", fontWeight: 700, marginBottom: "1rem", fontSize: "1rem" }}>
                  3. Vos coordonnées
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="don-form-grid">
                  <input type="text" placeholder="Prénom & Nom" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "14px 16px", color: "white", fontSize: "0.9rem", outline: "none" }} />
                  <input type="email" placeholder="Email" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "14px 16px", color: "white", fontSize: "0.9rem", outline: "none" }} />
                  <input type="tel" placeholder="Téléphone (ex: +237 6XX XXX XXX)" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "14px 16px", color: "white", fontSize: "0.9rem", outline: "none", gridColumn: "1 / -1" }} />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSubmitted(true)}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #166534, #15803D)",
                  color: "white",
                  border: "none",
                  padding: "18px",
                  borderRadius: "14px",
                  fontSize: "1rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 10px 40px rgba(22,101,52,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                💚 Confirmer mon Don {(montant || montantCustom) ? `de ${montantCustom || montant} FCFA` : ""}
              </motion.button>

              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", marginTop: "1.5rem", lineHeight: 1.6 }}>
                🔒 Vos informations sont sécurisées. Nous vous contacterons pour coordonner le paiement via Mobile Money (MTN/Orange) ou virement bancaire.
              </p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .don-form-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 600px) {
          .don-form-grid { grid-template-columns: 1fr !important; }
          .don-form-grid input { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </>
  );
}
