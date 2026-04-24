"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--marine)", color: "white", padding: "100px 0 40px", position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 0.8fr 0.8fr 1.2fr", gap: "6rem", marginBottom: "8rem" }} className="footer-grid">
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2.5rem" }}>
              <div style={{ width: "40px", height: "40px", background: "var(--or)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>A</div>
              <span style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "1px" }}>AFEDIE</span>
            </Link>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "350px" }}>
              Unir, élever et autonomiser les femmes à travers la solidarité et l&apos;engagement humanitaire au Cameroun.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease" }} className="social-icon">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "2rem", color: "white" }}>Navigation</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {["Accueil", "À Propos", "Valeurs", "Activités"].map((item) => (
                <li key={item}><Link href={`#${item.toLowerCase().replace(" ", "")}`} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", transition: "0.3s" }} className="footer-link">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "2rem", color: "white" }}>Légal</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {["Confidentialité", "Conditions", "Statuts", "Contact"].map((item) => (
                <li key={item}><Link href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", transition: "0.3s" }} className="footer-link">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "2rem", color: "white" }}>Newsletter</h4>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>Restez informée de nos prochaines actions humanitaires.</p>
            <div style={{ position: "relative" }}>
              <input 
                type="email" 
                placeholder="Votre email" 
                style={{ width: "100%", padding: "1.2rem 1.5rem", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", outline: "none" }}
              />
              <button style={{ position: "absolute", right: "8px", top: "8px", bottom: "8px", background: "var(--or)", color: "white", border: "none", padding: "0 20px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>
                Ok
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
            © 2026 AFEDIE. Tous droits réservés. Design by Excellence.
          </p>
          <div style={{ display: "flex", gap: "3rem" }}>
            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Yaoundé, Cameroun</span>
            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Association N° 00001396</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.div
        whileHover={{ y: -5 }}
        onClick={scrollToTop}
        style={{
          position: "absolute",
          top: "-30px",
          right: "100px",
          width: "60px",
          height: "60px",
          background: "var(--or)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(184, 134, 11, 0.3)"
        }}
      >
        <ArrowUp size={24} />
      </motion.div>

      <style jsx>{`
        .social-icon:hover {
          background: var(--or) !important;
          transform: translateY(-5px);
        }
        .footer-link:hover {
          color: var(--or) !important;
          padding-left: 5px;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
