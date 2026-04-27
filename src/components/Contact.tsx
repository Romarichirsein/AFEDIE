"use client";

import { motion } from "framer-motion";
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
    { icon: <Phone size={20} />, label: t("contact.info.phone.label"), val: "(+237) 692 000 000", sub: t("contact.info.phone.sub") },
    { icon: <Mail size={20} />, label: t("contact.info.email.label"), val: "contact@afedie.org", sub: t("contact.info.email.sub") },
    { icon: <MapPin size={20} />, label: t("contact.info.location.label"), val: t("contact.info.location.val"), sub: t("contact.info.location.sub") },
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "6rem" }} className="contact-grid">
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
                <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ width: "56px", height: "56px", background: "var(--gris)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--or)", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#aaa", letterSpacing: "1px", marginBottom: "0.3rem" }}>{item.label}</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--marine)", marginBottom: "0.2rem" }}>{item.val}</p>
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
              padding: "4rem", 
              borderRadius: "40px", 
              boxShadow: "0 40px 100px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.03)"
            }}
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
        <div style={{ marginTop: "10rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#aaa", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "3rem" }}>{t("contact.partners")}</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem", flexWrap: "wrap", opacity: 0.5, filter: "grayscale(100%)" }}>
            {["MINAS", "MINPROFF", "Yaoundé 3e", "UN Women"].map((partner) => (
              <span key={partner} style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--marine)" }}>{partner}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
