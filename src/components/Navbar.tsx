"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
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
    { name: "Accueil", id: "accueil" },
    { name: "À Propos", id: "apropos" },
    { name: "Valeurs", id: "valeurs" },
    { name: "Activités", id: "activites" },
    { name: "Plan 2026", id: "plan2026" },
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
          padding: isScrolled ? "0.6rem 0" : "1rem 0",
          background: isScrolled ? "var(--glass-dark)" : "rgba(7, 21, 26, 0.4)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(5px)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0.05)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Sophisticated Logo Area */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }} className="logo-group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="logo-box"
              style={{ 
                background: "linear-gradient(135deg, var(--or), var(--or2))", 
                borderRadius: "10px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontWeight: 900,
                color: "white",
                boxShadow: "0 8px 16px rgba(184, 134, 11, 0.3)"
              }}
            >
              A
            </motion.div>
            <div style={{ color: "white", display: "flex", flexDirection: "column" }}>
              <span className="logo-text">AFEDIE</span>
              <span className="logo-subtext">Dignité & Excellence</span>
            </div>
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

            <div id="google_translate_element" style={{ overflow: "hidden", borderRadius: "8px", transform: "scale(0.85)" }}></div>
            
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
              Rejoindre <ArrowUpRight size={14} />
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
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: "1rem" }}
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
        .logo-box { width: 40px; height: 40px; font-size: 1.2rem; }
        .logo-text { font-size: 1.2rem; font-weight: 900; letter-spacing: 1.5px; line-height: 1; }
        .logo-subtext { font-size: 0.55rem; font-weight: 700; color: var(--or2); letter-spacing: 2px; text-transform: uppercase; margin-top: 2px; }
        
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
          .logo-text { font-size: 1rem; }
          .logo-subtext { font-size: 0.45rem; letter-spacing: 1px; }
          .logo-box { width: 35px; height: 35px; font-size: 1rem; }
        }
      `}</style>
    </>
  );
}
