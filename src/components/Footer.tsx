"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#070F1A",
        padding: "80px 0 40px",
        borderTop: "1px solid rgba(201, 168, 76, 0.2)",
        color: "white",
      }}
      suppressHydrationWarning
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "4rem",
            marginBottom: "60px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "var(--or)",
                marginBottom: "1rem",
              }}
            >
              AFEDIE
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Association des Femmes de la Dignité et de l&apos;Excellence<br />
              N° 00001396/RDA/J06/SAAJP/BAPP · Yaoundé, Cameroun
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                borderLeft: "2px solid var(--or)",
                paddingLeft: "1.5rem",
              }}
            >
              &quot;Unies pour la dignité, engagées pour l&apos;excellence.&quot;<br />
              En mémoire de feue Mme Marie Souzane GAMGNE, la Visionnaire.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--or)",
                marginBottom: "1.5rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {["Accueil", "À Propos", "Valeurs", "Activités", "Plan 2026", "Gouvernance", "Infos Légales"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                      transition: "color 0.3s",
                    }}
                    className="footer-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--or)",
                marginBottom: "1.5rem",
              }}
            >
              L&apos;Association
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {["AG 29 Mai 2026", "Nous Rejoindre", "Partenariats", "Nous Soutenir", "Presse & Médias"].map((item) => (
                <li key={item}>
                  <Link
                    href="#contact"
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                    className="footer-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            © 2024–2026 AFEDIE — Association des Femmes de la Dignité et de l&apos;Excellence.<br />
            Tous droits réservés · Yaoundé, Cameroun.
          </p>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
              Enregistrée le 8 octobre 2020<br />
              N° 00001396/RDA/J06/SAAJP/BAPP
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: var(--or) !important;
        }
        @media (max-width: 768px) {
          footer {
            padding: 40px 0 30px !important;
          }
          footer > div > div:first-child {
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
