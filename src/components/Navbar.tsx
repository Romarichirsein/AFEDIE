"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MenuIcon4 = ({ isOpen }: { isOpen: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.rect 
      animate={isOpen ? { rotate: 45, y: 7, x: 2 } : { rotate: 0, y: 4, x: 2 }}
      width="20" height="1.5" rx="0.75" fill="currentColor" 
    />
    <motion.rect 
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      width="20" height="1.5" rx="0.75" fill="currentColor" y="9" x="2"
    />
    <motion.rect 
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      width="20" height="1.5" rx="0.75" fill="currentColor" y="14" x="2"
    />
    <motion.rect 
      animate={isOpen ? { rotate: -45, y: -7, x: 2 } : { rotate: 0, y: 19, x: 2 }}
      width="20" height="1.5" rx="0.75" fill="currentColor" 
    />
  </svg>
);

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
          padding: isScrolled ? "0.3rem 0" : "0.5rem 0",
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
              className="nav-logo-wrap"
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img src="/images/Logo.png" alt="AFEDIE Logo" className="nav-logo-img" style={{ objectFit: "contain", display: "block" }} />
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
                borderRadius: "10px",
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
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              color: "white", 
              cursor: "pointer",
              background: "rgba(255,255,255,0.05)",
              padding: "8px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }} 
          >
            <MenuIcon4 isOpen={isMobileMenuOpen} />
          </motion.div>
        </div>
      </motion.nav>

      {/* Ultra Sleek Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: isScrolled ? "50px" : "70px", // Adjusted based on scroll state
              left: 0,
              right: 0,
              background: "var(--glass-dark)",
              backdropFilter: "blur(20px)",
              zIndex: 999,
              overflow: "hidden",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    color: activeSection === link.id ? "var(--or2)" : "white", 
                    fontSize: "1.1rem", 
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    display: "block"
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Integrated Language Switcher */}
              <div style={{ display: "flex", gap: "10px", marginTop: "0.5rem" }}>
                {["fr", "en"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang as "fr" | "en"); setIsMobileMenuOpen(false); }}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "8px",
                      background: language === lang ? "var(--or)" : "rgba(255,255,255,0.05)",
                      color: "white",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer"
                    }}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Primary CTA Button */}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  background: "var(--or)",
                  color: "white",
                  padding: "14px",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontWeight: 800,
                  boxShadow: "var(--shadow-gold)",
                  marginTop: "0.5rem",
                  display: "block",
                  fontSize: "0.9rem"
                }}
              >
                {t("nav.join")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <style>{`
        .nav-logo-wrap {
          width: 60px;
          height: 60px;
        }
        .nav-logo-img {
          width: 60px;
          height: 60px;
        }
        .nav-cta {
          padding: 10px 20px;
          font-size: 0.8rem;
        }
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
          .container {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 0 1.5rem !important;
          }
          .nav-logo-wrap {
            width: 50px;
            height: 50px;
          }
          .nav-logo-img {
            width: 50px;
            height: 50px;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 1rem !important;
          }
          .nav-logo-wrap {
            width: 45px;
            height: 45px;
          }
          .nav-logo-img {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </>
  );
}
