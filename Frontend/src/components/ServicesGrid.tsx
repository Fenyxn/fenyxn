"use client";

import { GlowCard } from "@/components/ui/spotlight-card";

type GlowColor = "blue" | "purple" | "green" | "red" | "orange";

const services: {
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

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <GlowCard key={s.title} customSize glowColor={s.glow} className="w-full">
            <div className="flex flex-col gap-4 h-full">
              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${s.tag}`}>
                {s.title}
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              <ul className="mt-auto space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="text-slate-600">—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
