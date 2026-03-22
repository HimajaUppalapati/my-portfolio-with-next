interface SectionTitleProps {
  index: string;
  title: string;
  centered?: boolean;
}

export default function SectionTitle({ index, title, centered }: SectionTitleProps) {
  return (
    <div style={{ textAlign: centered ? "center" : "left" }}>
      <h2
        style={{
          fontFamily:    "var(--font-display)",
          fontSize:      "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight:    700,
          color:         "var(--text)",
          letterSpacing: "-0.02em",
          margin:        0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
