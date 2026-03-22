export interface Skill {
  label: string;
  cat: "backend" | "frontend" | "ai" | "iot" | "infra";
}

export const CAT_COLOR: Record<string, string> = {
  backend:  "var(--accent)",
  frontend: "#a78bfa",
  ai:       "#34d399",
  iot:      "#fb923c",
  infra:    "#94a3b8",
};

export const skills: Skill[] = [
  { label: "Spring Boot",    cat: "backend"  },
  { label: "Java",           cat: "backend"  },
  { label: "React",          cat: "frontend" },
  { label: "Next.js",        cat: "frontend" },
  { label: "TypeScript",     cat: "frontend" },
  { label: "LangChain",      cat: "ai"       },
  { label: "OpenAI API",     cat: "ai"       },
  { label: "Python",         cat: "ai"       },
  { label: "MySQL",          cat: "backend"  },
  { label: "IoT / Embedded", cat: "iot"      },
  { label: "REST APIs",      cat: "backend"  },
  { label: "Docker",         cat: "infra"    },
];
