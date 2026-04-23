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
        scrolled ? "glass-dark shadow-lg py-2" : "bg-transparent py-6"
      }`}
      style={{ 
        borderBottom: scrolled ? "1px solid var(--or)" : "1px solid rgba(255,255,255,0.05)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        background: scrolled ? "rgba(7, 15, 26, 0.95)" : "transparent"
      }}
      suppressHydrationWarning
    >
      <motion.div
        className="scroll-progress"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
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
              width: "44px",
              height: "44px",
              background: "linear-gradient(135deg, var(--vert), var(--or))",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
              fontSize: "18px",
              color: "white",
            }}
          >
            AF
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--or)",
                lineHeight: 1.1,
              }}
            >
              AFEDIE
            </div>
            <span
              style={{
                fontSize: "0.55rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              Dignité · Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul style={{ display: "flex", gap: "10px", listStyle: "none" }} className="desktop-menu">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                href={link.href}
                style={{
                  padding: "10px 18px",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "white",
                  borderRadius: "4px",
                  transition: "all 0.3s ease"
                }}
                className="nav-link"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
          <li>
            <Link
              href="#contact"
              style={{
                background: "var(--or)",
                color: "var(--marine)",
                padding: "10px 20px",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
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
            color: "white",
            cursor: "pointer",
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "var(--marine)",
              padding: "2rem",
              borderBottom: "2px solid var(--or)",
            }}
          >
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", listStyle: "none" }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "white",
                      display: "block",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "var(--or)",
                    color: "var(--marine)",
                    padding: "12px",
                    borderRadius: "6px",
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
        .nav-link {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .nav-link:hover {
          color: var(--or) !important;
          background: rgba(201, 168, 76, 0.1);
          text-shadow: none;
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
