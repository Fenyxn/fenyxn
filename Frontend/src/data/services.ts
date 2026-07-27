export type GlowColor = "blue" | "purple" | "green" | "red" | "orange";

export const services: {
  title: string;
  desc: string;
  features: string[];
  tag: string;
  glow: GlowColor;
}[] = [
  {
    title: "Algorithmic Trading & Fintech",
    desc: "High-performance trading platforms, signal engines, and fintech applications — backtesting, live execution, and real-time market data pipelines.",
    features: ["Backtesting Engines", "Live Order Execution", "Market Data Pipelines", "Strategy Automation"],
    tag: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    glow: "blue",
  },
  {
    title: "Enterprise Management Systems",
    desc: "Full-stack management platforms — laboratory systems, company management suites, invoicing, and multi-role enterprise dashboards.",
    features: ["Role-based Access Control", "Workflow Automation", "GST / PDF Invoicing", "Multi-module Architecture"],
    tag: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    glow: "purple",
  },
  {
    title: "Broker & Exchange Integrations",
    desc: "Deep integrations with trading exchanges and brokers — Delta Exchange, Zerodha Kite, and NSE / BSE connectivity.",
    features: ["Delta Exchange API", "Zerodha Kite Integration", "Real-time WebSocket Feeds", "Order Management Systems"],
    tag: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    glow: "blue",
  },
  {
    title: "Messaging & Automation Pipelines",
    desc: "End-to-end automation across WhatsApp, Telegram, and Gmail — triggered alerts, bots, scheduled broadcasts, and CRM-integrated workflows.",
    features: ["WhatsApp Automation", "Telegram Bot Integration", "Gmail Automation", "CRM-linked Workflows"],
    tag: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    glow: "green",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud-native infrastructure and CI/CD pipelines on GCP and AWS, containerized with Docker and deployed at scale.",
    features: ["GCP & AWS Deployments", "Docker & Nginx", "CI/CD Automation", "SSL & Reverse Proxy"],
    tag: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    glow: "orange",
  },
  {
    title: "Custom Software Development",
    desc: "Full-stack web applications built end-to-end — FastAPI backends, Next.js frontends, and production-grade deployments from day one.",
    features: ["FastAPI & Python Backends", "Next.js & React Frontends", "PostgreSQL & Redis", "REST & WebSocket APIs"],
    tag: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    glow: "purple",
  },
];
