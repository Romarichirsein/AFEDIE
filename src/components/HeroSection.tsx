"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background with Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(180deg, rgba(7, 15, 26, 0.8) 0%, rgba(13, 43, 78, 0.6) 40%, rgba(13, 43, 78, 0.95) 100%), url('/images/hero.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Animated Patterns */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(201, 168, 76, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.12) 0%, transparent 50%)`,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 2rem 4rem",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "inline-block",
            border: "1px solid var(--or)",
            color: "var(--or)",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "4px",
            textTransform: "uppercase",
            padding: "8px 24px",
            borderRadius: "20px",
            marginBottom: "2.5rem",
            background: "rgba(201, 168, 76, 0.05)",
          }}
        >
          Fondée en 2020 · Yaoundé, Cameroun
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            type: "spring",
            stiffness: 50,
            delay: 0.2 
          }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1,
            marginBottom: "2rem",
            textShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}
        >
          Association des Femmes <br />
          <span style={{ 
            color: "var(--or)", 
            fontStyle: "italic",
            display: "inline-block",
            position: "relative"
          }}>
            de la Dignité
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ position: 'absolute', bottom: '10px', left: 0, height: '4px', background: 'var(--or)', opacity: 0.5 }}
            />
          </span> <br className="mobile-hide" />
          et de l&apos;<span style={{ color: "var(--or)", fontStyle: "italic" }}>Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "rgba(255, 255, 255, 0.85)",
            fontWeight: 300,
            letterSpacing: "1px",
            marginBottom: "3.5rem",
            maxWidth: "800px",
          }}
        >
          Unir, élever et autonomiser les femmes à travers la solidarité, l&apos;engagement humanitaire et le développement communautaire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Link
            href="#activites"
            className="btn-hero-primary hover-float"
            style={{
              background: "var(--or)",
              color: "var(--marine)",
              padding: "20px 50px",
              fontSize: "0.95rem",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderRadius: "50px",
              boxShadow: "0 15px 35px rgba(201, 168, 76, 0.4)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }}
          >
            Nos Actions
          </Link>
          <Link
            href="#contact"
            className="btn-hero-outline hover-float"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              color: "white",
              padding: "20px 50px",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderRadius: "50px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.4s ease"
            }}
          >
            Rejoindre l&apos;AFEDIE
          </Link>
        </motion.div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(5px)",
          borderTop: "1px solid rgba(201, 168, 76, 0.2)",
          padding: "2rem",
        }}
      >
        {[
          { num: "2020", label: "Année de fondation" },
          { num: "7", label: "Actions prévues 2026" },
          { num: "6 ans", label: "Au service des femmes" },
          { num: "Ydé", label: "Basée à Yaoundé" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "1rem",
              borderRight: i < 3 ? "1px solid rgba(201, 168, 76, 0.1)" : "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "var(--or)",
                display: "block",
              }}
            >
              {stat.num}
            </span>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .btn-hero-primary:hover {
          background: var(--or2) !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(201, 168, 76, 0.5);
        }
        .btn-hero-outline:hover {
          border-color: white !important;
          background: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }
        .hover-float:hover {
          transform: translateY(-10px) !important;
        }
        @media (max-width: 768px) {
          .mobile-hide { display: none; }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr 1fr !important;
          }
          div[style*="borderRight"] {
            border-right: none !important;
            border-bottom: 1px solid rgba(201, 168, 76, 0.1);
          }
        }
      `}</style>
    </section>
  );
}
