"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À Propos", href: "#apropos" },
    { name: "Valeurs", href: "#valeurs" },
    { name: "Activités", href: "#activites" },
    { name: "Plan 2026", href: "#plan2026" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? "15px 0" : "30px 0",
          background: isScrolled ? "var(--glass-dark)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ 
              width: "45px", 
              height: "45px", 
              background: "var(--or)", 
              borderRadius: "12px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: 900,
              color: "white"
            }}>
              A
            </div>
            <div style={{ color: "white", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "1px", lineHeight: 1 }}>AFEDIE</span>
              <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "2px", textTransform: "uppercase" }}>Dignité & Excellence</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "3rem" }} className="desktop-menu">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                style={{ 
                  color: "white", 
                  fontSize: "0.85rem", 
                  fontWeight: 600, 
                  textTransform: "uppercase", 
                  letterSpacing: "1px",
                  opacity: 0.8,
                  transition: "var(--transition-ultra)"
                }}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              style={{
                background: "var(--or)",
                color: "white",
                padding: "12px 28px",
                borderRadius: "10px",
                fontSize: "0.85rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "var(--shadow-gold)"
              }}
            >
              Rejoindre <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div 
            style={{ color: "white", cursor: "pointer" }} 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--marine)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              padding: "100px 2rem 2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: "white", fontSize: "2rem", fontWeight: 800 }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  background: "var(--or)",
                  color: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  textAlign: "center"
                }}
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-link:hover {
          opacity: 1 !important;
          color: var(--or) !important;
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
