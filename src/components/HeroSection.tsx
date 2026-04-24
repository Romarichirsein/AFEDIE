"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";

export default function HeroSection() {
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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "var(--marine)",
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
          Fondée en 2020 · Yaoundé, Cameroun
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1,
            marginBottom: "1.5rem",
            maxWidth: "1000px",
          }}
        >
          Association des Femmes <br />
          <span style={{ 
            color: "var(--or2)", 
            display: "inline-block",
            position: "relative"
          }}>
            de la Dignité
          </span> <br />
          et de l&apos;<span style={{ fontStyle: "italic", fontWeight: 400, fontFamily: "var(--font-playfair)" }}>Excellence</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: 400,
            marginBottom: "3rem",
            maxWidth: "750px",
            lineHeight: 1.6,
          }}
        >
          Unir, élever et autonomiser les femmes à travers la solidarité, l&apos;engagement humanitaire et le développement communautaire.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Link
            href="#activites"
            className="btn-premium"
            style={{
              background: "var(--or)",
              color: "white",
              padding: "20px 45px",
              fontSize: "0.9rem",
              fontWeight: 700,
              borderRadius: "12px",
              boxShadow: "var(--shadow-gold)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Découvrir nos Actions <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="btn-premium"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              color: "white",
              padding: "20px 45px",
              fontSize: "0.9rem",
              fontWeight: 600,
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            Rejoindre l&apos;AFEDIE
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
        }}
      >
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {[
            { num: "2020", label: "Année de fondation", icon: <Sparkles size={20} /> },
            { num: "7", label: "Actions prévues 2026", icon: <Shield size={20} /> },
            { num: "Ydé", label: "Basée à Yaoundé", icon: <Heart size={20} /> },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ color: "var(--or2)", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>{stat.icon}</div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>{stat.num}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184, 134, 11, 0.1) 0%, transparent 70%)",
          zIndex: 5,
        }}
      />
    </section>
  );
}
