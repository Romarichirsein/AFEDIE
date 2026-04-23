"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { name: "À Propos", href: "#apropos" },
  { name: "Valeurs", href: "#valeurs" },
  { name: "Activités", href: "#activites" },
  { name: "Plan 2026", href: "#planaction" },
  { name: "Gouvernance", href: "#gouvernance" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}
      style={{ 
        background: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
      suppressHydrationWarning
    >
      <motion.div
        className="scroll-progress"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          background: "var(--or)",
          scaleX,
          transformOrigin: "0%",
          zIndex: 1001,
        }}
      />
      <div className="container flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, var(--vert), var(--or))",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
              fontSize: "16px",
              color: "white",
            }}
          >
            AF
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "#070F1A",
                lineHeight: 1.1,
              }}
            >
              AFEDIE
            </div>
            <span
              style={{
                fontSize: "0.5rem",
                fontWeight: 600,
                color: "rgba(0,0,0,0.5)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              Dignité · Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul style={{ display: "flex", gap: "8px", listStyle: "none", alignItems: "center" }} className="desktop-menu">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                style={{
                  padding: "8px 16px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "none",
                  color: "#070F1A",
                  borderRadius: "8px",
                  transition: "all 0.3s ease"
                }}
                className="nav-link"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
          <li style={{ marginLeft: "10px" }}>
            <Link
              href="#contact"
              style={{
                background: "#070F1A",
                color: "white",
                padding: "10px 22px",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "0.8rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
              className="btn-join"
            >
              Rejoindre
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#070F1A",
            cursor: "pointer",
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "white",
              padding: "1.5rem",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              overflow: "hidden"
            }}
          >
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none" }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#070F1A",
                      display: "block",
                      padding: "8px 0"
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "10px" }}>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#070F1A",
                    color: "white",
                    padding: "14px",
                    borderRadius: "12px",
                    fontWeight: 700,
                  }}
                >
                  Nous Rejoindre
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-link:hover {
          color: var(--or) !important;
          background: rgba(0, 0, 0, 0.03);
        }
        .btn-join:hover {
          background: var(--or) !important;
          color: #070F1A !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.3);
        }
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
