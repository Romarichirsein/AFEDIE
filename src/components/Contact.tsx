"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const contactInfo = [
    { icon: <Phone size={20} />, label: t("contact.info.phone.label"), val: "(+237) 677 58 92 01 / 695 22 80 83", sub: t("contact.info.phone.sub") },
    { icon: <Mail size={20} />, label: t("contact.info.email.label"), val: "afediecam@gmail.com", sub: t("contact.info.email.sub") },
    { icon: <MapPin size={20} />, label: t("contact.info.location.label"), val: t("contact.info.location.val"), sub: t("contact.info.location.sub") },
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--or)" }}>
                {t("contact.badge")}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--marine)", lineHeight: 1.1, marginBottom: "2rem" }}>
              {t("contact.title").includes("excellence") ? (
                <>{t("contact.title").split("excellence")[0]}<span style={{ color: "var(--vert2)" }}>excellence</span> ?</>
              ) : t("contact.title")}
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8, marginBottom: "3.5rem" }}>
              {t("contact.subtitle")}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {contactInfo.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem" }} className="contact-info-item">
                  <div style={{ width: "56px", height: "56px", background: "var(--gris)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--or)", flexShrink: 0 }} className="contact-info-icon">
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#aaa", letterSpacing: "1px", marginBottom: "0.3rem" }}>{item.label}</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--marine)", marginBottom: "0.2rem", wordBreak: "break-all" }}>{item.val}</p>
                    <p style={{ fontSize: "0.85rem", color: "#888" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            style={{ 
              background: "white", 
              borderRadius: "40px", 
              boxShadow: "0 40px 100px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.03)"
            }}
            className="contact-form-card"
          >
            <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--marine)" }}>{t("contact.form.name")}</label>
                  <input 
                    type="text" 
                    placeholder={t("contact.form.placeholder_name")}
                    style={{ padding: "1.2rem 1.5rem", borderRadius: "12px", border: "1px solid #eee", background: "#fcfcfc", fontSize: "0.95rem", outline: "none", transition: "all 0.3s ease" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--marine)" }}>{t("contact.form.email")}</label>
                  <input 
                    type="email" 
                    placeholder={t("contact.form.placeholder_email")}
                    style={{ padding: "1.2rem 1.5rem", borderRadius: "12px", border: "1px solid #eee", background: "#fcfcfc", fontSize: "0.95rem", outline: "none", transition: "all 0.3s ease" }}
                  />
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--marine)" }}>{t("contact.form.subject")}</label>
                <select style={{ padding: "1.2rem 1.5rem", borderRadius: "12px", border: "1px solid #eee", background: "#fcfcfc", fontSize: "0.95rem", outline: "none" }}>
                  {t("contact.form.options").map((opt: string) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--marine)" }}>{t("contact.form.message")}</label>
                <textarea 
                  rows={5}
                  placeholder={t("contact.form.placeholder_message")}
                  style={{ padding: "1.2rem 1.5rem", borderRadius: "12px", border: "1px solid #eee", background: "#fcfcfc", fontSize: "0.95rem", outline: "none", transition: "all 0.3s ease", resize: "none" }}
                />
              </div>

              <button
                type="submit"
                className="btn-premium"
                style={{
                  background: "var(--marine)",
                  color: "white",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  cursor: "pointer",
                  border: "none"
                }}
              >
                {t("contact.form.submit")} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Partners Section */}
        <div style={{ textAlign: "center" }} className="partners-section">
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#aaa", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "2rem" }}>{t("contact.partners")}</p>
          <p style={{ fontSize: "1.1rem", color: "var(--marine)", fontWeight: 600, fontStyle: "italic", maxWidth: "600px", margin: "0 auto" }}>
            "Plusieurs partenariats institutionnels sont en cours de signature et seront officialisés ultérieurement."
          </p>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 6rem;
        }
        .contact-form-card {
          padding: 4rem;
          background: white;
          border-radius: 40px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.03);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .partners-section {
          margin-top: 10rem;
        }
        .partners-row {
          gap: 5rem;
        }
        .partner-name {
          font-size: 1.5rem;
        }
        input:focus, textarea:focus {
          border-color: var(--or) !important;
          background: white !important;
          box-shadow: 0 10px 20px rgba(184, 134, 11, 0.05);
        }
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 768px) {
          .contact-form-card {
            padding: 2.5rem 1.8rem !important;
            border-radius: 32px !important;
          }
          .partners-section {
            margin-top: 6rem !important;
          }
        }
        @media (max-width: 640px) {
          .contact-form-card {
            padding: 2rem 1.2rem !important;
            border-radius: 28px !important;
          }
          .contact-info-item {
            gap: 1rem !important;
          }
          .contact-info-icon {
            width: 48px !important;
            height: 48px !important;
          }
          .partners-section {
            margin-top: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
