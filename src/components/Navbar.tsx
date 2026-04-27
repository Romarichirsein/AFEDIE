"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll
      const sections = ["accueil", "apropos", "valeurs", "activites", "plan2026", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), id: "accueil" },
    { name: t("nav.about"), id: "apropos" },
    { name: t("nav.values"), id: "valeurs" },
    { name: t("nav.activities"), id: "activites" },
    { name: t("nav.plan"), id: "plan2026" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? "0.4rem 0" : "0.6rem 0",
          background: isScrolled ? "var(--glass-dark)" : "rgba(7, 21, 26, 0.4)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(5px)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0.05)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Sophisticated Logo Area */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }} className="logo-group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="logo-box"
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
              <img src="/images/Logo.png" alt="AFEDIE Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </motion.div>
          </Link>

          {/* Ultra Professional Desktop Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-menu">
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.id} 
                  href={`#${link.id}`}
                  style={{ 
                    color: activeSection === link.id ? "var(--or2)" : "white", 
                    fontSize: "0.75rem", 
                    fontWeight: 700, 
                    textTransform: "uppercase", 
                    letterSpacing: "1px",
                    opacity: activeSection === link.id ? 1 : 0.7,
                    position: "relative",
                    transition: "all 0.3s ease"
                  }}
                  className="nav-link"
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-underline"
                      style={{ 
                        position: "absolute", 
                        bottom: "-4px", 
                        left: "0", 
                        width: "100%", 
                        height: "2px", 
                        background: "var(--or2)",
                        borderRadius: "2px"
                      }} 
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Professional Language Switcher */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.05)", padding: "4px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <button 
                onClick={() => setLanguage("fr")}
                style={{ 
                  padding: "4px 8px", 
                  borderRadius: "6px", 
                  fontSize: "0.7rem", 
                  fontWeight: 800, 
                  background: language === "fr" ? "var(--or)" : "transparent",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
              >
                FR
              </button>
              <button 
                onClick={() => setLanguage("en")}
                style={{ 
                  padding: "4px 8px", 
                  borderRadius: "6px", 
                  fontSize: "0.7rem", 
                  fontWeight: 800, 
                  background: language === "en" ? "var(--or)" : "transparent",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
              >
                EN
              </button>
            </div>
            
            <Link
              href="#contact"
              style={{
                background: "var(--or)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                fontSize: "0.8rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "var(--shadow-gold)",
                transition: "all 0.3s ease"
              }}
              className="nav-cta"
            >
              {t("nav.join")} <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.div 
            whileTap={{ scale: 0.9 }}
            style={{ 
              color: "white", 
              cursor: "pointer",
              background: "rgba(255,255,255,0.05)",
              padding: "8px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)"
            }} 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </div>
      </motion.nav>

      {/* Ultra Sleek Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--glass-dark)",
              backdropFilter: "blur(40px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: "center" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`#${link.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ 
                      color: activeSection === link.id ? "var(--or2)" : "white", 
                      fontSize: "1.8rem", 
                      fontWeight: 800,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  gap: "10px", 
                  background: "rgba(255,255,255,0.05)", 
                  padding: "6px", 
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  margin: "1rem auto"
                }}
              >
                <button 
                  onClick={() => { setLanguage("fr"); setIsMobileMenuOpen(false); }}
                  style={{ 
                    padding: "8px 15px", 
                    borderRadius: "8px", 
                    fontSize: "0.8rem", 
                    fontWeight: 800, 
                    background: language === "fr" ? "var(--or)" : "transparent",
                    color: "white",
                    border: "none"
                  }}
                >
                  FRANÇAIS
                </button>
                <button 
                  onClick={() => { setLanguage("en"); setIsMobileMenuOpen(false); }}
                  style={{ 
                    padding: "8px 15px", 
                    borderRadius: "8px", 
                    fontSize: "0.8rem", 
                    fontWeight: 800, 
                    background: language === "en" ? "var(--or)" : "transparent",
                    color: "white",
                    border: "none"
                  }}
                >
                  ENGLISH
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: "0.5rem" }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: "var(--or)",
                    color: "white",
                    padding: "15px 40px",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    fontWeight: 800,
                    display: "inline-block",
                    boxShadow: "var(--shadow-gold)"
                  }}
                >
                  Contactez-nous
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .logo-box { width: 45px; height: 45px; }
        
        .nav-link:hover {
          opacity: 1 !important;
          color: var(--or2) !important;
        }
        .nav-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(184, 134, 11, 0.4);
          background: var(--or2) !important;
        }
        @media (min-width: 1025px) {
          .mobile-toggle { display: none; }
        }
        @media (max-width: 1024px) {
          .desktop-menu { display: none; }
        }
        @media (max-width: 640px) {
          .logo-box { width: 38px; height: 38px; }
        }
      `}</style>
    </>
  );
}
