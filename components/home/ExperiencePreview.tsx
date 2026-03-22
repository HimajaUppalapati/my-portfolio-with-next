import SectionTitle from "@/components/ui/SectionTitle";
import { experience } from "@/data/experiences";

export default function ExperiencePreview() {
  const exp = experience[0]; // Show only the latest on the homepage

  return (
    <section style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionTitle index="03" title="Experience" />

        <div
          style={{
            marginTop:  "2rem",
            background: "var(--surface)",
            border:     "1px solid var(--border)",
            borderRadius: "12px",
            padding:    "2rem",
            display:    "flex",
            gap:        "2rem",
            flexWrap:   "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* Left: company + year */}
          <div style={{ minWidth: "160px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "6px" }}>
              {exp.year}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "var(--accent)" }}>
              {exp.company}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", marginTop: "4px" }}>
              {exp.companyFull}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", background: "var(--border)", alignSelf: "stretch", minHeight: "60px" }} />

          {/* Right: role + description */}
          <div style={{ flex: 1, minWidth: "220px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--text)", marginBottom: "8px" }}>
              {exp.role}
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, margin: "0 0 16px" }}>
              {exp.description}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {exp.tech.map((t) => (
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
          </div>
        </div>

        <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
          <a
            href="/experience"
            style={{
              fontFamily:     "var(--font-mono)",
              fontSize:       "0.78rem",
              color:          "var(--muted)",
              textDecoration: "none",
              letterSpacing:  "0.08em",
              borderBottom:   "1px solid var(--border)",
              paddingBottom:  "2px",
              transition:     "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderBottomColor = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)";  e.currentTarget.style.borderBottomColor = "var(--border)"; }}
          >
            FULL_EXPERIENCE →
          </a>
        </div>
      </div>
    </section>
  );
}
