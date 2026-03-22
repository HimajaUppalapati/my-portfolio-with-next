"use client";

import { useEffect, useRef, useState } from "react";

import Navbar             from "@/components/layout/Navbar";
import Footer             from "@/components/layout/Footer";
import Hero               from "@/components/home/Hero";
import Skills             from "@/components/home/Skills";
import FeaturedProjects   from "@/components/home/FeaturedProjects";
import ExperiencePreview  from "@/components/home/ExperiencePreview";
import SectionTitle       from "@/components/ui/SectionTitle";

// ── Stats counter hook (lives here because it's only used on this page) ────────
function useCounter(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return val;
}

// ── Stats section (small enough to stay in page.tsx) ──────────────────────────
function Stats() {
  const projects = useCounter(10, 1400);
  const months   = useCounter(6,  1200);
  const techs    = useCounter(12, 1600);

  return (
    <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3rem 2rem" }}>
      <div
        style={{
          maxWidth:            "900px",
          margin:              "0 auto",
          display:             "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap:                 "2rem",
          textAlign:           "center",
        }}
      >
        {[
          { value: projects, suffix: "+",   label: "Projects Built"    },
          { value: months,   suffix: " mo", label: "Internship @ HAL"  },
          { value: techs,    suffix: "+",   label: "Technologies"       },
        ].map(({ value, suffix, label }) => (
          <div key={label}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>
              {value}{suffix}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", marginTop: "6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Contact CTA section ────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section
      style={{
        padding:    "6rem 2rem",
        background: "var(--surface-alt)",
        borderTop:  "1px solid var(--border)",
        textAlign:  "center",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      <div aria-hidden style={{ position: "absolute", bottom: "-40%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
        <SectionTitle index="04" title="Let's Work Together" centered />
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.75, margin: "1.5rem 0 2.5rem" }}>
          Looking for internship or full-time roles in full-stack, AI, or backend engineering. Open to interesting problems.
        </p>
        <a
          href="mailto:you@email.com"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--accent)", color: "#fff", padding: "14px 32px", borderRadius: "8px", fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.08em", textDecoration: "none", transition: "opacity 0.2s, transform 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
        >
          SEND_MESSAGE →
        </a>
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
          {[
            { label: "GitHub",   href: "https://github.com"   },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Resume",   href: "/resume.pdf"          },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Global CSS variables + keyframes — lives in globals.css in real project */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --bg:          #09090B;
          --surface:     #111113;
          --surface-alt: #0D0D0F;
          --border:      rgba(255,255,255,0.07);
          --text:        #E8E8EA;
          --muted:       #6B6B75;
          --accent:      #3B82F6;
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
          --font-mono:    'JetBrains Mono', monospace;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html  { scroll-behavior: smooth; }
        body  { background: var(--bg); color: var(--text); font-family: var(--font-body); -webkit-font-smoothing: antialiased; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse  { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.65; } }

        ::-webkit-scrollbar       { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--muted); }
        ::selection { background: rgba(59,130,246,0.3); color: var(--text); }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <FeaturedProjects />
        <ExperiencePreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
