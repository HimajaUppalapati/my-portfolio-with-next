import SectionTitle from "@/components/ui/SectionTitle";
import { featuredProjects } from "@/data/projects";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section style={{ padding: "5rem 2rem", background: "var(--surface-alt)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionTitle index="02" title="Featured Projects" />

        <div
          style={{
            display:               "grid",
            gridTemplateColumns:   "repeat(auto-fit, minmax(260px, 1fr))",
            gap:                   "1.25rem",
            marginTop:             "2rem",
          }}
        >
          {featuredProjects.map((p) => (
            <a key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background:     "var(--surface)",
                  border:         "1px solid var(--border)",
                  borderRadius:   "12px",
                  padding:        "1.5rem",
                  height:         "100%",
                  display:        "flex",
                  flexDirection:  "column",
                  gap:            "12px",
                  transition:     "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  cursor:         "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.transform   = "translateY(-4px)";
                  el.style.boxShadow   = "0 16px 40px rgba(59,130,246,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform   = "translateY(0)";
                  el.style.boxShadow   = "none";
                }}
              >
                {/* Tag */}
                <span
                  style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "0.65rem",
                    letterSpacing: "0.12em",
                    color:         "var(--accent)",
                    textTransform: "uppercase",
                    background:    "rgba(59,130,246,0.1)",
                    padding:       "3px 10px",
                    borderRadius:  "999px",
                    alignSelf:     "flex-start",
                  }}
                >
                  {p.tag}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize:   "1.1rem",
                    fontWeight: 600,
                    color:      "var(--text)",
                    margin:     0,
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize:   "0.85rem",
                    color:      "var(--muted)",
                    lineHeight: 1.65,
                    margin:     0,
                    flex:       1,
                  }}
                >
                  {p.description}
                </p>

                {/* Tech chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily:   "var(--font-mono)",
                        fontSize:     "0.68rem",
                        color:        "var(--muted)",
                        background:   "rgba(255,255,255,0.04)",
                        border:       "1px solid var(--border)",
                        borderRadius: "4px",
                        padding:      "2px 8px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.06em", marginTop: "4px" }}>
                  VIEW_PROJECT →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* See all link */}
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link
            href="/projects"
            style={{
              fontFamily:     "var(--font-mono)",
              fontSize:       "0.8rem",
              color:          "var(--muted)",
              textDecoration: "none",
              letterSpacing:  "0.08em",
              borderBottom:   "1px solid var(--border)",
              paddingBottom:  "2px",
              transition:     "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)";  e.currentTarget.style.borderBottomColor = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)";   e.currentTarget.style.borderBottomColor = "var(--border)"; }}
          >
            SEE_ALL_PROJECTS →
          </Link>
        </div>
      </div>
    </section>
  );
}
