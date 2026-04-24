"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Premium Scroll Progress Bar (Top) */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "var(--or2)",
          transformOrigin: "0%",
          zIndex: 2000,
        }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              zIndex: 100,
              width: "60px",
              height: "60px",
              background: "var(--marine)",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Circular Progress (Visual only for back to top) */}
            <svg width="60" height="60" style={{ position: "absolute", transform: "rotate(-90deg)" }}>
              <circle
                cx="30"
                cy="30"
                r="28"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="none"
              />
            </motion.div>
            <ArrowUp size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
