"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    },
  };

  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "var(--marine)",
        width: "100%",
      }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(to bottom, rgba(7, 21, 26, 0.7), rgba(7, 21, 26, 0.9)), url('/images/hero.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: y1,
          width: "100%",
        }}
      />
      
      {/* Dynamic Glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 30%, rgba(184, 134, 11, 0.15) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(27, 94, 32, 0.1) 0%, transparent 50%)`,
          filter: "blur(60px)",
          width: "100%",
        }}
      />

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          opacity,
          paddingTop: "120px", 
          paddingBottom: "60px",
          width: "100%",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            borderRadius: "100px",
            background: "rgba(184, 134, 11, 0.1)",
            border: "1px solid rgba(184, 134, 11, 0.2)",
            color: "var(--or2)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          <Sparkles size={14} />
          {t("hero.badge")}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.2rem, 10vw, 5rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {t("hero.title1")} <br />
          <span style={{ 
            color: "var(--or2)", 
            display: "inline-block",
            position: "relative"
          }}>
            {t("hero.title2")}
          </span> <br />
          {t("hero.title3").includes("et de l'") ? (
            <>et de l&apos;<span style={{ fontStyle: "italic", fontWeight: 400 }}>Excellence</span></>
          ) : (
            <>{t("hero.title3").split("Excellence")[0]}<span style={{ fontStyle: "italic", fontWeight: 400 }}>Excellence</span></>
          )}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: 400,
            marginBottom: "3rem",
            maxWidth: "100%",
            lineHeight: 1.6,
          }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-buttons"
        >
          <Link
            href="#activites"
            className="btn-premium hero-btn"
            style={{
              background: "var(--or)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 700,
              borderRadius: "12px",
              boxShadow: "var(--shadow-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              minWidth: "200px",
              flex: "1",
            }}
          >
            {t("hero.cta_primary")} <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="btn-premium hero-btn"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 600,
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "200px",
              flex: "1",
            }}
          >
            {t("hero.cta_secondary")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: "relative",
          zIndex: 20,
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "2rem 0",
          width: "100%",
        }}
      >
        <div className="container hero-stats-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", 
          gap: "1rem" 
        }}>
          {[
            { num: "2020", label: t("hero.stats.foundation"), icon: <Sparkles size={18} /> },
            { num: "7", label: t("hero.stats.actions"), icon: <Shield size={18} /> },
            { num: "Ydé", label: t("hero.stats.location"), icon: <Heart size={18} /> },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ color: "var(--or2)", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>{stat.icon}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>{stat.num}</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <style jsx>{`
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        }
        .hero-btn {
          min-width: 240px;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-btn {
            min-width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .hero-stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          section {
            min-height: auto !important;
            padding-bottom: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
