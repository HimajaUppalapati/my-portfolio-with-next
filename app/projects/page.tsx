"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ALL_TAGS = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [leaving, setLeaving] = useState<string | null>(null);
  const router = useRouter();

  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  function handleCardClick(slug: string) {
    setLeaving(slug);
    // Let the fly-up animation play, then navigate
    setTimeout(() => router.push(`/projects/${slug}`), 420);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --bg:#09090B; --surface:#111113; --surface-alt:#0D0D0F;
          --border:rgba(255,255,255,0.07); --text:#E8E8EA; --muted:#6B6B75; --accent:#3B82F6;
          --font-display:'Syne',sans-serif; --font-body:'DM Sans',sans-serif; --font-mono:'JetBrains Mono',monospace;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); color: var(--text); font-family: var(--font-body); -webkit-font-smoothing: antialiased; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes flyUp {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(-36px) scale(0.97); }
        }

        ::selection { background: rgba(59,130,246,0.3); color: var(--text); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }
      `}</style>

      <Navbar />

      <main style={{ paddingTop: "60px", minHeight: "100vh" }}>

        {/* ── Page header ── */}
        <section
          style={{
            padding: "4rem 2rem 2.5rem",
            maxWidth: "960px",
            margin: "0 auto",
            animation: "fadeUp 0.6s ease both",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            All Projects
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            A collection of everything I ve built — across full-stack, AI, and embedded systems.
          </p>
        </section>

        {/* ── Filter tabs ── */}
        <section
          style={{
            padding: "0 2rem 2.5rem",
            maxWidth: "960px",
            margin: "0 auto",
            animation: "fadeUp 0.6s 0.1s ease both",
          }}
        >
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  padding: "6px 16px",
                  borderRadius: "999px",
                  border: `1px solid ${active === tag ? "var(--accent)" : "var(--border)"}`,
                  background: active === tag ? "rgba(59,130,246,0.12)" : "transparent",
                  color: active === tag ? "var(--accent)" : "var(--muted)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        </section>

        {/* ── Cards grid ── */}
        <section
          style={{
            padding: "0 2rem 5rem",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {filtered.map((p, i) => {
              const isLeaving = leaving === p.slug;
              return (
                <div
                  key={p.slug}
                  onClick={() => handleCardClick(p.slug)}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    animation: isLeaving
                      ? "flyUp 0.4s cubic-bezier(0.4,0,1,1) forwards"
                      : `fadeUp 0.5s ${i * 0.07}s ease both`,
                    transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    if (isLeaving) return;
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 16px 40px rgba(59,130,246,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Subtle top glow strip on hover */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    className="glow-strip"
                  />

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      background: "rgba(59,130,246,0.1)",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {p.tag}
                  </span>

                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {p.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--muted)",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                          padding: "2px 8px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      letterSpacing: "0.06em",
                      marginTop: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    VIEW_PROJECT
                    <span style={{ transition: "transform 0.2s", display: "inline-block" }}>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}