export default function Footer() {
  return (
    <footer
      style={{
        borderTop:      "1px solid var(--border)",
        padding:        "1.5rem 2rem",
        display:        "flex",
        justifyContent: "space-between",
        alignItems:     "center",
        flexWrap:       "wrap",
        gap:            "0.5rem",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
        &copy; {new Date().getFullYear()} Himaja Uppalapati — Built with Next.js
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
        Designed &amp; Developed by Himaja Uppalapati
      </span>
    </footer>
  );
}
