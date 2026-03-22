import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        padding:        "0 2rem",
        position:       "relative",
        overflow:       "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        style={{
          position:        "absolute",
          inset:           0,
          backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize:  "48px 48px",
          pointerEvents:   "none",
        }}
      />
      {/* Glow blob */}
      <div
        aria-hidden
        style={{
          position:      "absolute",
          top:           "20%",
          left:          "-10%",
          width:         "600px",
          height:        "600px",
          background:    "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%", animation: "fadeUp 0.8s ease both" }}>
        {/* Status badge */}
        <div
          style={{
            display:       "inline-flex",
            alignItems:    "center",
            gap:           "8px",
            background:    "rgba(59,130,246,0.08)",
            border:        "1px solid rgba(59,130,246,0.25)",
            borderRadius:  "999px",
            padding:       "4px 14px",
            marginBottom:  "2rem",
          }}
        >
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#34d399", display: "inline-block", boxShadow: "0 0 8px #34d399" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize:      "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight:    700,
            lineHeight:    1.05,
            letterSpacing: "-0.03em",
            marginBottom:  "1rem",
            fontFamily:    "var(--font-display)",
            color:         "var(--text)",
          }}
        >
          Himaja Uppalapati
        </h1>

        {/* Role line */}
        <div
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "clamp(0.85rem, 2vw, 1.05rem)",
            color:         "var(--accent)",
            marginBottom:  "1.5rem",
            letterSpacing: "0.04em",
          }}
        >
          <span style={{ color: "var(--muted)" }}>$ </span>
          Software Developer
          <span style={{ color: "var(--muted)" }}> // </span>
          Full-Stack
          <span style={{ color: "var(--muted)" }}> // </span>
          AI Projects
          <span style={{ color: "var(--muted)" }}> // </span>
          IoT
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize:     "1.05rem",
            color:        "var(--muted)",
            maxWidth:     "560px",
            lineHeight:   1.75,
            marginBottom: "2.5rem",
          }}
        >
          I build things end-to-end — Spring Boot APIs, React frontends, LLM integrations, and embedded IoT systems. Previously at{" "}
          <span style={{ color: "var(--text)" }}>HAL</span> as an AI intern.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/projects"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              background:     "var(--accent)",
              color:          "#fff",
              padding:        "12px 26px",
              borderRadius:   "8px",
              fontFamily:     "var(--font-mono)",
              fontSize:       "0.82rem",
              letterSpacing:  "0.06em",
              textDecoration: "none",
              transition:     "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
          >
            VIEW_PROJECTS →
          </Link>
          <a
            href="/contact"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              background:     "transparent",
              color:          "var(--text)",
              padding:        "12px 26px",
              borderRadius:   "8px",
              fontFamily:     "var(--font-mono)",
              fontSize:       "0.82rem",
              letterSpacing:  "0.06em",
              textDecoration: "none",
              border:         "1px solid var(--border)",
              transition:     "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.transform = "translateY(0)"; }}
          >
            GET_IN_TOUCH
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position:       "absolute",
          bottom:         "2rem",
          left:           "50%",
          transform:      "translateX(-50%)",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          gap:            "6px",
          opacity:        0.35,
        }}
      >
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, var(--muted))", animation: "pulse 2s infinite" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--muted)" }}>SCROLL</span>
      </div>
    </section>
  );
}
