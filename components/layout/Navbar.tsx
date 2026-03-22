"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position:     "fixed",
        top:          0,
        left:         0,
        right:        0,
        zIndex:       100,
        padding:      "0 2rem",
        height:       "60px",
        display:      "flex",
        alignItems:   "center",
        justifyContent: "space-between",
        background:   scrolled ? "rgba(9,9,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition:   "all 0.3s ease",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent)", letterSpacing: "0.05em" }}>
        Himaja Uppalapati 
     </span>

      <div style={{ display: "flex", gap: "2rem" }}>
        {["Projects", "Experience", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "0.78rem",
              color:         "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition:    "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
