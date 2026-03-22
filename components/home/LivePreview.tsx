import Link from "next/link";
import { useState } from "react";

export default function LivePreview({ url, slug }: { url: string; slug: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "2.5rem",
      }}
    >
      {/* Browser chrome bar */}
      <div
        style={{
          background: "var(--surface-alt)",
          borderBottom: "1px solid var(--border)",
          padding: "0.65rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#FF5F57", display: "block" }} />
        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#FFBD2E", display: "block" }} />
        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28CA41", display: "block" }} />

        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border)",
            borderRadius: "5px",
            padding: "4px 12px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            color: "var(--muted)",
            letterSpacing: "0.04em",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {/* Status dot */}
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background:
                status === "loaded" ? "#28CA41" :
                status === "error"  ? "#FF5F57" :
                "var(--muted)",
              flexShrink: 0,
              transition: "background 0.3s",
            }}
          />
          {url}
        </div>

        {/* Open in new tab */}
        <Link
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: "var(--muted)",
            textDecoration: "none",
            letterSpacing: "0.08em",
            padding: "3px 8px",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            transition: "color 0.2s, border-color 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--muted)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          ↗ NEW TAB
        </Link>
      </div>

      {/* iframe container */}
      <div style={{ position: "relative", height: "480px" }}>

        {/* Loading skeleton */}
        {status === "loading" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              background: "var(--surface)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                border: "2px solid var(--border)",
                borderTop: "2px solid var(--accent)",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--muted)",
                letterSpacing: "0.1em",
              }}
            >
              LOADING_PREVIEW...
            </span>
          </div>
        )}

        {/* Error state */}
        {status === "error" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "var(--surface)",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.1em" }}>
              PREVIEW_UNAVAILABLE
            </span>
            
            <Link
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--accent)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                borderBottom: "1px solid rgba(59,130,246,0.4)",
                paddingBottom: "2px",
              }}
            >
              OPEN_DIRECTLY →
            </Link>
          </div>
        )}

        {/* The actual iframe */}
        <iframe
          src={url}
          title={`Preview of ${slug}`}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            opacity: status === "loaded" ? 1 : 0,
            transition: "opacity 0.4s ease",
            background:'white'
          }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  );
}