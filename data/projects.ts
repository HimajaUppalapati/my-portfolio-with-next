import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug:        "employee-management-system",
    title:       "Employee Management System",
    tag:         "Full-Stack",
    description: "Full-stack HRMS built with Spring Boot + React. Handles payroll, leave tracking, and role-based access for 500+ employees.",
    tech:        ["Spring Boot", "React", "MySQL", "JWT", "Docker", "Tailwind CSS"],
    github:      "https://github.com",
    live:        "https://employee-management-frontend-rho.vercel.app/",
    problem:     "HR teams were managing everything in scattered spreadsheets — no centralised tracking, no audit trail, no access control.",
    solution:    "Built a full CRUD HRMS with JWT-based RBAC, a React dashboard with real-time leave calendar, and a payroll engine that handles deductions and payslip generation.",
    learned:     "Deepened understanding of Spring Security filter chains, database indexing strategy for large employee tables, and optimistic UI updates in React.",
    features:    [
      "Role-based access control — Admin, Manager, Employee",
      "Payroll engine with deductions and payslip PDF export",
      "Leave approval workflow with email notifications",
      "Dashboard with attendance heatmap and analytics",
      "MySQL with Flyway migrations for schema versioning",
    ],
  },
  {
    slug:        "multi-tool-ai-chatbot",
    title:       "Multi-Tool AI Chatbot",
    tag:         "AI / LLM",
    description: "LLM-powered chatbot with tool-use, RAG pipeline, and memory. Built during HAL internship as an internal AI POC.",
    tech:        ["Python", "LangChain", "OpenAI", "FastAPI", "ChromaDB", "React"],
    github:      "https://github.com",
    live:        "https://my-multi-tool-chat-bot.netlify.app/",
    problem:     "Engineers at HAL repeatedly searched the same internal documentation — a 3,000-page PDF corpus — wasting hours per week.",
    solution:    "Designed a RAG pipeline that ingests PDFs into ChromaDB, pairs it with GPT-4 tool-calling for live lookups, and wraps everything in a FastAPI backend with a React chat UI.",
    learned:     "Chunking strategy matters enormously — naive 500-char splits lost context across section boundaries. Implemented overlapping sliding-window chunks with metadata tagging.",
    features:    [
      "RAG over 3,000+ page internal PDF corpus",
      "Tool-use: calculator, document search, date/time",
      "Conversation memory with automatic summarisation",
      "FastAPI streaming responses with SSE",
      "Admin panel for document ingestion and re-indexing",
    ],
  },
  // {
  //   slug:        "iot-temperature-sensor",
  //   title:       "IoT Temperature Monitor",
  //   tag:         "IoT",
  //   description: "Embedded sensor network with real-time dashboard. ESP32 nodes push data via MQTT to a Node.js backend.",
  //   tech:        ["ESP32", "Arduino C++", "MQTT", "Node.js", "Socket.io", "Chart.js"],
  //   github:      "https://github.com",
  //   live:        "https://himaja-uppalapati-portfolio.netlify.app/",
  //   problem:     "A lab needed continuous temperature monitoring across 8 zones — existing solutions were either expensive proprietary hardware or fragile single-node setups.",
  //   solution:    "Deployed an ESP32 mesh network publishing to a Mosquitto MQTT broker, with a Node.js server subscribing and pushing live data to a browser dashboard via Socket.io.",
  //   learned:     "MQTT QoS levels and retained message behaviour. Handling sensor drift and NaN values in firmware before they corrupt the downstream dashboard stream.",
  //   features:    [
  //     "8-node ESP32 mesh with deep-sleep power saving",
  //     "MQTT over TLS with QoS 1 guarantee",
  //     "Real-time Chart.js line graphs per zone",
  //     "Threshold breach alerts via email webhook",
  //     "Historical data export to CSV",
  //   ],
  // },
];

export const featuredProjects = projects.slice(0, 3);