import SectionTitle from "@/components/ui/SectionTitle";
import { skills, CAT_COLOR } from "@/data/skills";

export default function Skills() {
  return (
    <section style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionTitle index="01" title="Tech Stack" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "2rem" }}>
          {skills.map((s) => (
            <span
              key={s.label}
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.78rem",
                padding:       "6px 14px",
                borderRadius:  "6px",
                background:    "var(--surface)",
                border:        `1px solid ${CAT_COLOR[s.cat]}33`,
                color:         CAT_COLOR[s.cat],
                letterSpacing: "0.04em",
                transition:    "background 0.2s, transform 0.15s",
                cursor:        "default",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${CAT_COLOR[s.cat]}18`; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--surface)";         e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
