"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      id="accueil"
      style={{ 
        position: "relative", 
        minHeight: "100svh", 
        width: "100%",
        display: "flex", 
        alignItems: "center", 
        paddingTop: "clamp(80px, 15vh, 140px)", 
        paddingBottom: "80px",
        background: "var(--marine)",
        overflow: "hidden"
      }}
    >
      {/* Background Image with Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.4 }}
        />
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          background: "linear-gradient(to bottom, rgba(7,21,26,0.8) 0%, var(--marine) 100%)" 
        }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "100%" }}
        >
          <motion.div
            variants={itemVariants}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "12px", 
              marginBottom: "1.5rem" 
            }}
          >
            <div style={{ width: "40px", height: "2px", background: "var(--or)" }} />
            <span style={{ 
              fontSize: "0.85rem", 
              fontWeight: 700, 
              color: "var(--or)", 
              textTransform: "uppercase", 
              letterSpacing: "4px" 
            }}>
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-balance hero-h1"
            style={{
              fontSize: "clamp(1.8rem, 8vw, 4.5rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              maxWidth: "900px",
            }}
          >
            {t("hero.title1")} <br />
            <span style={{ color: "var(--or2)" }}>{t("hero.title2")}</span> <br />
            {t("hero.title3")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              lineHeight: 1.6,
              marginBottom: "3rem",
            }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}
          >
            <button className="btn-primary hero-btn">
              {t("hero.cta_primary")} <ArrowRight size={20} />
            </button>
            <button className="btn-outline hero-btn" style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}>
              {t("hero.cta_secondary")}
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <div className="hero-stats-wrapper">
          <div className="hero-stats-container">
            {[
              { num: "2020", label: t("hero.stats.foundation"), icon: <Sparkles size={20} /> },
              { num: "7", label: t("hero.stats.actions"), icon: <Shield size={20} /> },
              { num: "Ydé", label: t("hero.stats.location"), icon: <Heart size={20} /> },
            ].map((stat, i) => (
              <div key={i} className="hero-stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-stats-wrapper {
          margin-top: 5rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          width: 100%;
        }
        .hero-stats-container {
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .hero-stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .stat-icon {
          color: var(--or2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-num {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }
        .hero-btn {
          min-width: 200px;
        }

        @media (max-width: 768px) {
          .hero-stats-container {
            gap: 2.5rem;
          }
          .hero-btn {
            min-width: 180px;
          }
        }
        @media (max-width: 640px) {
          .hero-h1 {
            font-size: 2.2rem !important;
          }
          .hero-stats-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .hero-btn {
            width: 100% !important;
            min-width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .hero-stats-container {
            grid-template-columns: 1fr;
            gap: 1.5rem !important;
          }
          .hero-h1 {
            font-size: 1.8rem !important;
          }
          section {
            padding-top: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}
