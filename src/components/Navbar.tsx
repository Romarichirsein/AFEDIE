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
          return rect.top <= 150 && rect.bottom >= 150;
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
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          // More space when not scrolled, soft transition
          padding: isScrolled ? "1.2rem 0" : "2.5rem 0",
          background: isScrolled ? "var(--glass-dark)" : "rgba(7, 21, 26, 0.2)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(5px)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0.05)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Sophisticated Logo Area */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "15px" }} className="logo-group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              style={{ 
                width: "50px", 
                height: "50px", 
                background: "linear-gradient(135deg, var(--or), var(--or2))", 
                borderRadius: "14px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: "1.4rem",
                fontWeight: 900,
                color: "white",
                boxShadow: "0 10px 20px rgba(184, 134, 11, 0.3)"
              }}
            >
              A
            </motion.div>
            <div style={{ color: "white", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "1.4rem", fontWeight: 900, letterSpacing: "2px", lineHeight: 1 }}>AFEDIE</span>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--or2)", letterSpacing: "3px", textTransform: "uppercase", marginTop: "4px" }}>Dignité & Excellence</span>
            </div>
          </Link>

          {/* Ultra Professional Desktop Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "3.5rem" }} className="desktop-menu">
            <div style={{ display: "flex", gap: "2.5rem" }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.id} 
                  href={`#${link.id}`}
                  style={{ 
                    color: activeSection === link.id ? "var(--or2)" : "white", 
                    fontSize: "0.85rem", 
                    fontWeight: 700, 
                    textTransform: "uppercase", 
                    letterSpacing: "1.5px",
                    opacity: activeSection === link.id ? 1 : 0.6,
                    position: "relative",
                    transition: "all 0.4s ease"
                  }}
                  className="nav-link"
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-underline"
                      style={{ 
                        position: "absolute", 
                        bottom: "-8px", 
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

            <Link
              href="#contact"
              style={{
                background: "var(--or)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "14px",
                fontSize: "0.9rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "var(--shadow-gold)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}
              className="nav-cta"
            >
              Nous Rejoindre <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.div 
            whileTap={{ scale: 0.9 }}
            style={{ 
              color: "white", 
              cursor: "pointer",
              background: "rgba(255,255,255,0.05)",
              padding: "10px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)"
            }} 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </div>
      </motion.nav>

      {/* Ultra Sleek Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", textAlign: "center" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`#${link.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ 
                      color: activeSection === link.id ? "var(--or2)" : "white", 
                      fontSize: "2.5rem", 
                      fontWeight: 800,
                      letterSpacing: "-1px"
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: "var(--or)",
                    color: "white",
                    padding: "20px 50px",
                    borderRadius: "20px",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    display: "inline-block",
                    marginTop: "2rem",
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
        .nav-link:hover {
          opacity: 1 !important;
          color: var(--or2) !important;
        }
        .nav-cta:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(184, 134, 11, 0.4);
          background: var(--or2) !important;
        }
        @media (min-width: 1025px) {
          .mobile-toggle { display: none; }
        }
        @media (max-width: 1024px) {
          .desktop-menu { display: none; }
        }
      `}</style>
    </>
  );
}
