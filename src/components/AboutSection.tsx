"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="apropos" className="section-padding" style={{ background: "var(--blanc)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--vert2)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Qui Sommes-Nous
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--marine)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Une association au service de la <span style={{ color: "var(--vert2)", fontStyle: "italic" }}>femme camerounaise</span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                background: "linear-gradient(90deg, var(--or), var(--or2))",
                borderRadius: "2px",
                marginBottom: "2.5rem",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.25rem",
                color: "#444",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              L&apos;AFEDIE — Association des Femmes de la Dignité et de l&apos;Excellence — est une organisation
              à but non lucratif légalement enregistrée au Cameroun, fondée en 2020 par
              Mme Ida Sandrine NGNOTUE FOTSO. Elle œuvre pour l&apos;autonomisation des femmes,
              la solidarité, l&apos;action humanitaire et le développement communautaire durable.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Héritière de la vision de <strong>feue Mme Marie Souzane GAMGNE</strong> — &quot;la Visionnaire&quot; —
              fondatrice de l&apos;AMICA en 1998, l&apos;AFEDIE perpétue un idéal de dignité, d&apos;entraide
              et d&apos;excellence au bénéfice des femmes et de leurs communautés.
            </p>

            <div
              style={{
                padding: "2rem",
                background: "var(--gris)",
                borderRadius: "16px",
                borderLeft: "5px solid var(--or)",
                boxShadow: "var(--shadow-premium)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  color: "var(--marine)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                « Notre engagement va au-delà des mots : nous agissons pour que chaque femme
                accède à la dignité qu&apos;elle mérite et à l&apos;excellence qu&apos;elle est capable d&apos;atteindre. »
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--vert2)",
                  letterSpacing: "1px",
                }}
              >
                — Mme Ida Sandrine NGNOTUE FOTSO, Présidente Fondatrice
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, var(--marine), var(--marine2))",
                borderRadius: "24px",
                padding: "3.5rem",
                color: "white",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                boxShadow: "0 30px 60px rgba(13, 43, 78, 0.2)",
              }}
            >
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(201, 168, 76, 0.1)' }} />
              <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(76, 175, 80, 0.08)' }} />

              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "4.5rem",
                  fontWeight: 900,
                  color: "var(--or)",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                  opacity: 0.9,
                }}
              >
                AFEDIE
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, 0.85)",
                  marginBottom: "2rem",
                }}
              >
                Association légalement enregistrée sous le N° <strong style={{ color: "var(--or)" }}>00001396/RDA/J06/SAAJP/BAPP</strong>.
                Une structure de gouvernance rigoureuse, des valeurs fondatrices solides et un engagement terrain authentique.
              </p>

              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                {["Solidarité", "Humanitaire", "Excellence", "Dignité"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "6px 16px",
                      border: "1px solid var(--or)",
                      borderRadius: "20px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--or)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(201, 168, 76, 0.3)", paddingTop: "2rem" }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--or)' }}>
                    <Image src="/images/founder.png" alt="Mme Ida Sandrine NGNOTUE FOTSO" width={60} height={60} style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.3rem" }}>
                      Présidente Fondatrice
                    </p>
                    <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 700, color: "var(--or)" }}>
                      Mme Ida Sandrine NGNOTUE FOTSO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "40px",
                background: "white",
                padding: "1.5rem",
                borderRadius: "16px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                zIndex: 2,
                textAlign: "center",
              }}
            >
              <span style={{ display: "block", fontSize: "1.8rem", fontWeight: 900, color: "var(--marine)", lineHeight: 1 }}>2020</span>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", color: "#888", letterSpacing: "1px" }}>Depuis</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 768px) {
          .about-grid {
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
