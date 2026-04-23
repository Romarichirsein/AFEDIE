"use client";

// Triggering fresh build after justifyContent fix

import { motion } from "framer-motion";
import { MapPin, Shield, User, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding" style={{ background: "var(--marine)", color: "white" }}>
      <div className="container">
        <div style={{ marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--or)", display: "block", marginBottom: "1rem" }}>
            Nous Rejoindre
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", marginBottom: "1.5rem" }}>
            Contactez <span style={{ color: "var(--or)", fontStyle: "italic" }}>l&apos;AFEDIE</span>
          </h2>
          <div style={{ width: "60px", height: "4px", background: "var(--or)" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
          >
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "3rem" }}>
              Vous souhaitez rejoindre l&apos;AFEDIE, établir un partenariat, soutenir nos actions ou simplement en savoir davantage sur notre association ? Nous sommes à votre écoute.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { icon: <MapPin size={24} />, label: "Siège", val: "Yaoundé, Cameroun · Arrondissement Yaoundé 3e" },
                { icon: <Shield size={24} />, label: "Statut légal", val: "Association à but non lucratif\nN° 00001396/RDA/J06/SAAJP/BAPP" },
                { icon: <User size={24} />, label: "Présidente Fondatrice", val: "Mme Ida Sandrine NGNOTUE FOTSO" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ width: "50px", height: "50px", background: "rgba(201, 168, 76, 0.15)", borderRadius: "12px", border: "1px solid rgba(201, 168, 76, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--or)", marginBottom: "0.4rem" }}>{item.label}</span>
                    <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "4rem", padding: "2.5rem", background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.25)", borderRadius: "20px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--or)", marginBottom: "1rem" }}>
                Partenariats institutionnels
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                Nous travaillons avec des partenaires institutionnels (MINAS, MINPROFF, Mairie de Yaoundé 3e) et des partenaires privés engagés dans l&apos;autonomisation des femmes au Cameroun.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(201, 168, 76, 0.2)",
              padding: "4rem",
              borderRadius: "32px",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 700, color: "white", marginBottom: "2.5rem" }}>Envoyez-nous un message</h3>
            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre message. Nous vous contacterons prochainement.'); }}>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.8rem" }}>Votre nom complet</label>
                <input type="text" placeholder="Mme / M. Nom Prénom" className="form-input" suppressHydrationWarning />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.8rem" }}>Adresse e-mail</label>
                <input type="email" placeholder="votre@email.com" className="form-input" suppressHydrationWarning />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.8rem" }}>Objet du message</label>
                <select className="form-input">
                  <option value="">Sélectionnez un objet…</option>
                  <option>Demande d&apos;adhésion</option>
                  <option>Proposition de partenariat</option>
                  <option>Soutien / Don</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.8rem" }}>Votre message</label>
                <textarea placeholder="Écrivez votre message ici…" className="form-input" style={{ height: "150px", resize: "none" }}></textarea>
              </div>
              <button
                type="submit"
                style={{
                  background: "var(--or)",
                  color: "var(--marine)",
                  padding: "18px",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  marginTop: "1rem",
                  transition: "all 0.3s ease",
                }}
                className="btn-submit"
              >
                Envoyer le message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 16px;
          color: white;
          font-family: inherit;
          transition: all 0.3s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--or);
          background: rgba(255, 255, 255, 0.12);
        }
        .btn-submit:hover {
          background: var(--or2);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(201, 168, 76, 0.4);
        }
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
