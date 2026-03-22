"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LivePreview from "@/components/home/LivePreview";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Props {
  params: Promise<{ slug: string }>;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProjectDetailPage({ params }: Props) {
  const slug = window.location.pathname;
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug.substring(slug.length - p.slug.length, slug.length));
  
  // Portal-open animation state
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Tiny delay so the browser paints before we trigger the animation
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  // 404 guard
  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#09090B", color: "#E8E8EA", fontFamily: "'JetBrains Mono', monospace" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.3 }}>404</div>
          <div style={{ color: "#6B6B75", marginBottom: "1.5rem" }}>Project not found.</div>
          <button onClick={() => router.push("/projects")} style={{ fontFamily: "inherit", fontSize: "0.78rem", color: "#3B82F6", background: "transparent", border: "1px solid rgba(59,130,246,0.4)", borderRadius: "6px", padding: "8px 18px", cursor: "pointer" }}>
            ← BACK TO PROJECTS
          </button>
        </div>
      </div>
    );
  }

  function handleBack() {
    setLeaving(true);
    setTimeout(() => router.push("/projects"), 480);
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

        /* ── Portal entrance: clip-path circle expands from bottom-center of the card ── */
        @keyframes portalOpen {
          0%   { clip-path: circle(0%   at 50% 60%); opacity: 0.6; }
          100% { clip-path: circle(150% at 50% 60%); opacity: 1;   }
        }
        @keyframes portalClose {
          0%   { clip-path: circle(150% at 50% 60%); opacity: 1;   }
          100% { clip-path: circle(0%   at 50% 60%); opacity: 0;   }
        }

        @keyframes fadeUp   { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeDown { from { opacity: 1; transform: translateY(0);    } to { opacity: 0; transform: translateY(22px); } }

        /* Grid bg */
        .grid-bg {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        ::selection { background: rgba(59,130,246,0.3); color: var(--text); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }

        /* ── Content blocks ── */
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 560px) { .info-grid { grid-template-columns: 1fr; } }

        .info-block {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.4rem;
        }
        .info-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.6rem;
        }
        .info-text {
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: var(--text);
          line-height: 1.72;
        }

        /* Screenshot mockup */
        .ss-wrap {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }
        .ss-bar {
          background: var(--surface-alt);
          border-bottom: 1px solid var(--border);
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ss-dot { width: 9px; height: 9px; border-radius: 50%; display: block; }
        .ss-url {
          flex: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 3px 12px;
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .ss-body {
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .ss-placeholder {
          text-align: center;
          opacity: 0.25;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.08em;
        }

        /* Feature list */
        .feature-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.65;
        }
        .feature-list li::before {
          content: "→";
          color: var(--accent);
          font-family: var(--font-mono);
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Divider */
        .divider { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }

        /* Section heading */
        .section-h {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.9rem;
          letter-spacing: -0.01em;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          padding: 11px 22px;
          border-radius: 8px;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, transform 0.2s;
        }
        .btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .btn-primary   { background: var(--accent); color: #fff; }
        .btn-secondary { background: transparent; color: var(--text); border: 1px solid var(--border); }
        .btn-secondary:hover { border-color: var(--accent); }
      `}</style>

      {/* Fixed grid background */}
      <div className="grid-bg" />

      {/* ── Glow blobs ── */}
      <div style={{ position: "fixed", top: "10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "10%", left: "-5%",  width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <Navbar />

      {/* ── Portal wrapper: THIS is what animates open/close ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          animation: leaving
            ? "portalClose 0.46s cubic-bezier(0.4,0,1,1) forwards"
            : mounted
            ? "portalOpen  0.65s cubic-bezier(0.22,1,0.36,1) forwards"
            : "none",
          opacity: mounted ? undefined : 0,
        }}
      >
        <main style={{ paddingTop: "60px", maxWidth: "820px", margin: "0 auto", padding: "100px 2rem 5rem" }}>

          {/* ── Back button ── */}
          <button
            onClick={handleBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              color: "var(--muted)",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "6px 14px",
              cursor: "pointer",
              marginBottom: "2.5rem",
              transition: "color 0.2s, border-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateX(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            ← BACK_TO_PROJECTS
          </button>

          {/* ── Hero ── */}
          <div style={{ marginBottom: "2rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                color: "var(--accent)",
                textTransform: "uppercase",
                background: "rgba(59,130,246,0.1)",
                padding: "4px 12px",
                borderRadius: "999px",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              {project.tag}
            </span>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: "580px",
              }}
            >
              {project.description}
            </p>
          </div>

          {/* ── CTA buttons ── */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                ↗ GITHUB
              </a>
            )}
          </div>

          {/* ── Live site iframe ── */}
          {project.live && (
            <LivePreview url={project.live} slug={project.slug} />
          )}

          <hr className="divider" />

          {/* ── Problem / Solution ── */}
          {(project.problem || project.solution) && (
            <>
              <div className="info-grid" style={{ marginBottom: "2rem" }}>
                {project.problem && (
                  <div className="info-block">
                    <div className="info-label">Problem</div>
                    <div className="info-text">{project.problem}</div>
                  </div>
                )}
                {project.solution && (
                  <div className="info-block">
                    <div className="info-label">Solution</div>
                    <div className="info-text">{project.solution}</div>
                  </div>
                )}
              </div>
              <hr className="divider" />
            </>
          )}

          {/* ── Tech stack ── */}
          <div style={{ marginBottom: "2rem" }}>
            <div className="section-h">Tech Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--accent)",
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    borderRadius: "6px",
                    padding: "5px 12px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* ── Features ── */}
          {project.features && project.features.length > 0 && (
            <>
              <div style={{ marginBottom: "2rem" }}>
                <div className="section-h">Key Features</div>
                <ul className="feature-list">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <hr className="divider" />
            </>
          )}

          {/* ── What I learned ── */}
          {project.learned && (
            <div className="info-block" style={{ marginBottom: "2rem" }}>
              <div className="info-label">What I Learned</div>
              <div className="info-text">{project.learned}</div>
            </div>
          )}

          {/* ── Bottom nav ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <button
              onClick={handleBack}
              className="btn btn-secondary"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
            >
              ← ALL_PROJECTS
            </button>

            {/* Prev / Next navigation */}
            <div style={{ display: "flex", gap: "8px" }}>
              {(() => {
                const idx = projects.findIndex((p) => p.slug === slug);
                const prev = projects[idx - 1];
                const next = projects[idx + 1];
                return (
                  <>
                    {prev && (
                      <a
                        href={`/projects/${prev.slug}`}
                        className="btn btn-secondary"
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}
                      >
                        ← PREV
                      </a>
                    )}
                    {next && (
                      <a
                        href={`/projects/${next.slug}`}
                        className="btn btn-primary"
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}
                      >
                        NEXT →
                      </a>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}