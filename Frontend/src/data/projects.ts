export type ProjectLink = {
  label: string;
  href: string;
  type: "live" | "github";
};

export type FeatureGroup = {
  title: string;
  items: string[];
};

export type Metric = {
  label: string;
  value: string;
};

export type Accent = {
  /** card background gradient */
  gradient: string;
  /** card border hover color */
  borderHover: string;
  /** tag pill colors */
  tagColor: string;
  /** accent dot color */
  dot: string;
  /** hover glow rgba */
  glowColor: string;
  /** solid text accent for the detail page */
  text: string;
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  /** short category/tag shown on the card and detail hero */
  tag: string;
  status: "Live" | "Completed";
  /** ambient background video for the detail-page hero */
  heroVideo: string;
  /** one-line description used on the homepage card */
  summary: string;
  /** headline metric shown on the card */
  metric: string;
  /** condensed stack chips shown on the card */
  stack: string[];
  accent: Accent;

  /* ── detail page fields ── */
  /** longer subtitle for the detail hero */
  subtitle: string;
  /** the problem this project solves */
  problem: string;
  /** how the project solves it */
  solution: string;
  /** grouped feature breakdown */
  featureGroups: FeatureGroup[];
  /** stat tiles on the detail page */
  metrics: Metric[];
  /** full tech stack on the detail page */
  techStack: string[];
  /** external links (optional) */
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "laboratory-management-system",
    num: "01",
    title: "Laboratory Management System",
    tag: "Enterprise Platform",
    status: "Live",
    heroVideo:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4",
    summary:
      "Full-stack clinical lab platform with patient tracking, automated WhatsApp report delivery, and Keycloak group-based RBAC — five Docker services deployed end-to-end on GCP.",
    metric: "5 Docker services · GCP",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Keycloak", "WhatsApp API", "Docker", "GCP"],
    accent: {
      gradient: "from-purple-600/10 to-purple-800/5",
      borderHover: "hover:border-purple-500/30",
      tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      dot: "bg-purple-400",
      glowColor: "rgba(168,139,250,0.18)",
      text: "text-purple-400",
    },
    subtitle:
      "Full-stack clinical lab platform with WhatsApp notifications, Keycloak RBAC, and automated patient report delivery.",
    problem:
      "Clinical labs struggle with manual test tracking, paper-based records, and no automated patient communication — causing delays, errors, and a poor patient experience.",
    solution:
      "A unified platform combining a FastAPI backend, Next.js frontend, and a dedicated Node.js WhatsApp microservice. Admins manage labs, patients, and test results centrally, while patients receive automated WhatsApp messages for appointments, reports, and billing — all secured through Keycloak group-based RBAC.",
    featureGroups: [
      {
        title: "Patient Management",
        items: [
          "Register and manage patient records with full history",
          "Track test orders and sample collection status",
          "Generate, store, and deliver lab reports digitally",
          "Per-patient billing and invoice management",
        ],
      },
      {
        title: "Lab Administration",
        items: [
          "Multi-lab support with owner-based access isolation",
          "Keycloak group-based role management per lab",
          "Admin dashboard for system-wide control and analytics",
          "Lab-level config — owner_username, keycloak_group_id",
        ],
      },
      {
        title: "WhatsApp Notifications",
        items: [
          "Dedicated Node.js WhatsApp microservice",
          "Automated alerts — report ready, appointments",
          "Real-time delivery status tracking",
          "Decoupled from the main API for fault tolerance",
        ],
      },
      {
        title: "Infrastructure & DevOps",
        items: [
          "5 Docker containers: FastAPI, Next.js, PostgreSQL, Keycloak, WhatsApp",
          "GitHub Actions CI/CD for automated deploys",
          "Nginx reverse proxy with SSL via Certbot",
          "Deployed and tested end-to-end on GCP",
        ],
      },
    ],
    metrics: [
      { label: "Deployment", value: "Live on GCP" },
      { label: "Services", value: "5 Docker containers" },
      { label: "Auth", value: "Keycloak RBAC" },
      { label: "Notifications", value: "WhatsApp API" },
    ],
    techStack: [
      "Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Keycloak",
      "WhatsApp API", "Node.js", "Docker", "Nginx", "GCP", "GitHub Actions",
    ],
    links: [
      { label: "Live Application", href: "https://lab.fenyxn.in", type: "live" },
      { label: "GitHub Repository", href: "https://github.com/Fenyxn/Laboratory-Management-System", type: "github" },
    ],
  },
  {
    slug: "trendedge",
    num: "02",
    title: "TrendEdge",
    tag: "Fintech · Trading Automation",
    status: "Completed",
    heroVideo:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4",
    summary:
      "Real-time Supertrend trading platform with automated daily Zerodha login, multi-symbol KiteTicker streaming, auto strike selection, and live order execution with a forward-test mode.",
    metric: "2+ req/sec · Zerodha Kite",
    stack: ["FastAPI", "Next.js", "Socket.IO", "Zerodha Kite", "StockStats", "PostgreSQL", "Keycloak"],
    accent: {
      gradient: "from-blue-600/10 to-blue-800/5",
      borderHover: "hover:border-blue-500/30",
      tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      dot: "bg-blue-400",
      glowColor: "rgba(96,165,250,0.18)",
      text: "text-blue-400",
    },
    subtitle:
      "Real-time Supertrend trading platform with automated Zerodha order execution, multi-symbol support, and forward testing.",
    problem:
      "Manual trading on Zerodha across multiple symbols demands constant monitoring, creates order-placement errors, and produces slow response times — especially problematic for options strategies that depend on rapid Supertrend signal reversals.",
    solution:
      "A FastAPI backend performs automated Zerodha login at 8:30 AM daily, stores access tokens in PostgreSQL for reuse, subscribes to KiteTicker WebSocket feeds, calculates Supertrend/ATR indicators via StockStats, and executes orders automatically. Socket.IO relays real-time data — trades, positions, and P&L — to the Next.js frontend.",
    featureGroups: [
      {
        title: "Data & Signals",
        items: [
          "Historical data retrieval at 2+ req/sec with rate limiting",
          "Live KiteTicker WebSocket streaming",
          "Multi-symbol concurrent subscription",
          "Supertrend and ATR computation via StockStats",
        ],
      },
      {
        title: "Execution",
        items: [
          "Automated daily login with token persistence",
          "Option chain integration with auto strike selection",
          "Live equity, FNO, and options order placement",
          "Forward-test mode with virtual capital",
        ],
      },
      {
        title: "Experience",
        items: [
          "Real-time responsive dashboard",
          "Socket.IO live trade / position / P&L relay",
          "Keycloak SSO authentication",
          "Dark / light theme support",
        ],
      },
    ],
    metrics: [
      { label: "Category", value: "Trading Automation" },
      { label: "Throughput", value: "2+ requests/sec" },
      { label: "Broker", value: "Zerodha Kite" },
      { label: "Auth", value: "Keycloak SSO" },
    ],
    techStack: [
      "Python", "FastAPI", "Next.js", "TypeScript", "Zerodha Kite",
      "KiteTicker", "Socket.IO", "PostgreSQL", "StockStats", "Keycloak", "Docker",
    ],
  },
  {
    slug: "spacetime",
    num: "03",
    title: "SpaceTime",
    tag: "Fintech · Market Data",
    status: "Live",
    heroVideo:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_080827_a9e5ad52-b6ee-4e79-b393-d936f179cfd7.mp4",
    summary:
      "High-throughput market data platform ingesting a DTN live feed via Redis Pub/Sub, computing Space-Time Reversal indicators with NumPy-vectorized windows, and fanning out to multi-chart frontends.",
    metric: "10,000+ ticks/sec",
    stack: ["FastAPI", "Redis Pub/Sub", "InfluxDB", "NumPy", "TradingView", "AWS", "Docker"],
    accent: {
      gradient: "from-cyan-600/10 to-cyan-800/5",
      borderHover: "hover:border-cyan-500/30",
      tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      dot: "bg-cyan-400",
      glowColor: "rgba(34,211,238,0.18)",
      text: "text-cyan-400",
    },
    subtitle:
      "High-throughput market data platform processing 10,000+ ticks/sec with real-time Space-Time Reversal indicators and multi-chart visualization.",
    problem:
      "A real-time market data system must handle over 10,000 ticks per second, compute complex technical indicators simultaneously, and distribute data to multiple chart instances — without performance loss or data gaps.",
    solution:
      "DTN feed → Live Service (NumPy processing) → Redis Pub/Sub → API Gateway → WebSocket → Next.js (event bus). A Historical Service writes to InfluxDB v3. Everything is containerized with Docker Compose and deployed to AWS via GitHub Actions.",
    featureGroups: [
      {
        title: "Real-Time Data Pipeline",
        items: [
          "DTN live market feed at 10,000+ ticks/sec",
          "Redis Pub/Sub for zero-latency messaging",
          "10,000-entry Redis buffer queue",
          "NumPy vectorized sliding windows (10× faster than pandas)",
          "InfluxDB v3 time-series + PostgreSQL OHLCV storage",
        ],
      },
      {
        title: "Space-Time Indicators",
        items: [
          "Intensity formula with SMA, EMA, and ZLMA smoothing",
          "Spike detection with historical bulk-load and live streaming",
          "Four reversal indicator versions tested in live markets",
          "Adaptive buffer with 80:20 ratio and 1000-tick window",
        ],
      },
      {
        title: "Multi-Chart Frontend",
        items: [
          "TradingView Lightweight Charts",
          "Event bus architecture — charts update independently",
          "Multi-timeframe OHLCV candles + ZLMA volume overlay",
          "Historical 10-minute bulk load on connect",
          "Responsive dark / light theme",
        ],
      },
      {
        title: "Production Infrastructure",
        items: [
          "Message batching at the API Gateway (grouped messages)",
          "WebSocket auto-reconnect with exponential backoff",
          "Keycloak JWT authentication",
          "Nginx reverse proxy with SSL",
          "GitHub Actions CI/CD to AWS",
        ],
      },
    ],
    metrics: [
      { label: "Throughput", value: "10,000+ ticks/sec" },
      { label: "Reversal versions", value: "v1 · v2 · v3 · v4" },
      { label: "Compute", value: "NumPy vectorized" },
      { label: "Status", value: "Production deployed" },
    ],
    techStack: [
      "Python", "FastAPI", "Next.js", "TypeScript", "Redis Pub/Sub", "InfluxDB",
      "PostgreSQL", "WebSocket", "NumPy", "TradingView Lightweight Charts",
      "Keycloak", "Docker", "Nginx", "AWS", "GitHub Actions",
    ],
  },
  {
    slug: "company-management-system",
    num: "04",
    title: "Company Management System",
    tag: "Enterprise Platform",
    status: "Completed",
    heroVideo:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4",
    summary:
      "Full-stack enterprise suite spanning project tracking, GST/LUT invoicing, salary slips, finance reports, and multi-role RBAC — shipped both as a web app and an Electron desktop build.",
    metric: "7 core modules · Electron",
    stack: ["FastAPI", "Next.js", "Electron", "PostgreSQL", "Keycloak", "Google OAuth", "FullCalendar"],
    accent: {
      gradient: "from-emerald-600/10 to-emerald-800/5",
      borderHover: "hover:border-emerald-500/30",
      tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      dot: "bg-emerald-400",
      glowColor: "rgba(52,211,153,0.18)",
      text: "text-emerald-400",
    },
    subtitle:
      "Full-stack enterprise platform with project tracking, invoicing, GST billing, salary slips, finance reports, and Keycloak RBAC with Google login.",
    problem:
      "Growing software companies juggle project tracking, client and developer invoicing, GST compliance, payroll, and finance reporting across disconnected tools — with no single role-aware source of truth.",
    solution:
      "A FastAPI backend with domain-separated routers, Keycloak SSO (Google + JWT) for permissions, a typed Next.js frontend, server-side PDF generation, a background email service, and a PostgreSQL store — all wrapped as an Electron desktop app with full feature parity to the web build.",
    featureGroups: [
      {
        title: "Project & Task Management",
        items: [
          "Project creation with developer assignment and profit-ratio tracking",
          "Task management with custom status colors and a 50-task completed tab",
          "Calendar scheduling via FullCalendar (today / this week / next week)",
          "Task assignment to Keycloak members with timestamped comments",
        ],
      },
      {
        title: "Invoicing & Billing",
        items: [
          "GST (CGST/SGST) invoices for Indian clients, LUT invoices for foreign clients",
          "Developer invoices validated against quotation limits",
          "Invoice preview + PDF generation (logo, signature, rupee symbol)",
          "Salary slips with PF/ESIC auto-calculation; Non-GST & TDS tracking",
        ],
      },
      {
        title: "Finance & Reports",
        items: [
          "Client and developer payment reports with filters",
          "GST sales report with total-sales summary",
          "TDS and Non-GST transaction tables",
          "Per-project company profit; developer ratios auto-summed to 100%",
        ],
      },
      {
        title: "HR, Desktop & Email",
        items: [
          "Employee, freelancer, and client management via Keycloak",
          "Role-based access — admin, manager, employee, freelancer",
          "Cross-platform Electron desktop app with full parity",
          "Automated emails on invoice creation, project and task updates",
        ],
      },
    ],
    metrics: [
      { label: "Core modules", value: "7 modules" },
      { label: "Auth", value: "Keycloak + Google" },
      { label: "Invoicing", value: "GST · LUT · PDF" },
      { label: "Delivery", value: "Web + Electron" },
    ],
    techStack: [
      "Python", "FastAPI", "Next.js", "TypeScript", "Electron", "PostgreSQL",
      "Keycloak", "JWT", "Google OAuth", "PDF Canvas", "FullCalendar", "REST API",
    ],
  },
  {
    slug: "delta-exchange-automation",
    num: "05",
    title: "Delta Exchange Automation",
    tag: "Fintech · Trading Automation",
    status: "Completed",
    heroVideo:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4",
    summary:
      "Multi-symbol automated crypto trading system on Delta Exchange — live WebSocket monitoring, per-symbol strategy evaluation, automated entry/exit/stop-loss, and real-time Telegram alerts.",
    metric: "Multi-symbol · Telegram alerts",
    stack: ["FastAPI", "WebSockets", "Delta Exchange API", "Telegram Bot"],
    accent: {
      gradient: "from-amber-600/10 to-amber-800/5",
      borderHover: "hover:border-amber-500/30",
      tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      dot: "bg-amber-400",
      glowColor: "rgba(251,191,36,0.18)",
      text: "text-amber-400",
    },
    subtitle:
      "Multi-symbol automated crypto trading system on Delta Exchange with real-time WebSocket monitoring and Telegram alerts.",
    problem:
      "Manual crypto derivatives trading across multiple instruments on Delta Exchange demands constant monitoring and quick responses, and risks losing opportunities to delayed actions.",
    solution:
      "A FastAPI backend with an async event loop subscribes to Delta Exchange WebSocket feeds for live pricing, processes strategy signals, and executes trades automatically. A Telegram bot notifies the operator of trades and system status in real time without interrupting core operations.",
    featureGroups: [
      {
        title: "Multi-Symbol Trading",
        items: [
          "Simultaneous execution across multiple instruments",
          "Independent strategy evaluation per symbol",
          "Concurrent position management without interference",
          "Configurable symbol list and strategy parameters",
        ],
      },
      {
        title: "Automated Execution",
        items: [
          "Signal-based order placement without manual intervention",
          "Delta Exchange REST API for order management",
          "Entry, exit, and stop-loss automation",
          "Real-time order status tracking and reconciliation",
        ],
      },
      {
        title: "WebSocket Monitoring",
        items: [
          "Live market data via Delta Exchange WebSocket",
          "Real-time price and order-book monitoring",
          "Signal processing on incoming tick data",
          "Low-latency async event loop for time-sensitive execution",
        ],
      },
      {
        title: "Telegram Integration",
        items: [
          "Instant trade-execution alerts via Telegram Bot API",
          "System health and connectivity notifications",
          "Daily P&L and position summary reports",
          "Error and exception alerts for operational awareness",
        ],
      },
    ],
    metrics: [
      { label: "Exchange", value: "Delta Exchange" },
      { label: "Symbols", value: "Multi-instrument" },
      { label: "Data source", value: "WebSocket feed" },
      { label: "Alerts", value: "Telegram Bot" },
    ],
    techStack: [
      "Python", "FastAPI", "WebSockets", "Delta Exchange API", "Telegram Bot API",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
