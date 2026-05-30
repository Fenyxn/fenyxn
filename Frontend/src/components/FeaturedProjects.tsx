"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  num: string;
  title: string;
  tag: string;
  status: "Live" | "Completed";
  desc: string;
  metric: string;
  stack: string[];
  gradient: string;
  borderHover: string;
  tagColor: string;
  dot: string;
  glowColor: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Laboratory Management System",
    tag: "Enterprise Platform",
    status: "Live",
    desc: "Full-stack clinical lab platform with patient tracking, automated WhatsApp report delivery, and Keycloak group-based RBAC — five Docker services deployed end-to-end on GCP.",
    metric: "5 Docker services · GCP",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Keycloak", "WhatsApp API", "Docker", "GCP"],
    gradient: "from-purple-600/10 to-purple-800/5",
    borderHover: "hover:border-purple-500/30",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
    glowColor: "rgba(168,139,250,0.18)",
  },
  {
    num: "02",
    title: "TrendEdge",
    tag: "Fintech · Trading Automation",
    status: "Completed",
    desc: "Real-time Supertrend trading platform with automated daily Zerodha login, multi-symbol KiteTicker streaming, auto strike selection, and live order execution with a forward-test mode.",
    metric: "2+ req/sec · Zerodha Kite",
    stack: ["FastAPI", "Next.js", "Socket.IO", "Zerodha Kite", "StockStats", "PostgreSQL", "Keycloak"],
    gradient: "from-blue-600/10 to-blue-800/5",
    borderHover: "hover:border-blue-500/30",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-400",
    glowColor: "rgba(96,165,250,0.18)",
  },
  {
    num: "03",
    title: "SpaceTime",
    tag: "Fintech · Market Data",
    status: "Live",
    desc: "High-throughput market data platform ingesting a DTN live feed via Redis Pub/Sub, computing Space-Time Reversal indicators with NumPy-vectorized windows, and fanning out to multi-chart frontends.",
    metric: "10,000+ ticks/sec",
    stack: ["FastAPI", "Redis Pub/Sub", "InfluxDB", "NumPy", "TradingView", "AWS", "Docker"],
    gradient: "from-cyan-600/10 to-cyan-800/5",
    borderHover: "hover:border-cyan-500/30",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    dot: "bg-cyan-400",
    glowColor: "rgba(34,211,238,0.18)",
  },
  {
    num: "04",
    title: "Company Management System",
    tag: "Enterprise Platform",
    status: "Completed",
    desc: "Full-stack enterprise suite spanning project tracking, GST/LUT invoicing, salary slips, finance reports, and multi-role RBAC — shipped both as a web app and an Electron desktop build.",
    metric: "7 core modules · Electron",
    stack: ["FastAPI", "Next.js", "Electron", "PostgreSQL", "Keycloak", "Google OAuth", "FullCalendar"],
    gradient: "from-emerald-600/10 to-emerald-800/5",
    borderHover: "hover:border-emerald-500/30",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
    glowColor: "rgba(52,211,153,0.18)",
  },
  {
    num: "05",
    title: "Delta Exchange Automation",
    tag: "Fintech · Trading Automation",
    status: "Completed",
    desc: "Multi-symbol automated crypto trading system on Delta Exchange — live WebSocket monitoring, per-symbol strategy evaluation, automated entry/exit/stop-loss, and real-time Telegram alerts.",
    metric: "Multi-symbol · Telegram alerts",
    stack: ["FastAPI", "WebSockets", "Delta Exchange API", "Telegram Bot"],
    gradient: "from-amber-600/10 to-amber-800/5",
    borderHover: "hover:border-amber-500/30",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    dot: "bg-amber-400",
    glowColor: "rgba(251,191,36,0.18)",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".proj-card", { opacity: 0, y: 70, scale: 0.93, filter: "blur(8px)" });
      gsap.set(".proj-line", { scaleX: 0, transformOrigin: "left center" });

      gsap.fromTo(
        ".proj-eyebrow",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proj-header", start: "top 82%" },
        }
      );

      gsap.to(".proj-line", {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".proj-header", start: "top 82%" },
      });

      gsap.fromTo(
        ".proj-heading",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proj-header", start: "top 82%" },
        }
      );

      gsap.fromTo(
        ".proj-subtext",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.28,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proj-header", start: "top 82%" },
        }
      );

      ScrollTrigger.batch(".proj-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          }),
        start: "top 88%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 px-4 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="proj-header mb-16">
          <div className="flex items-center gap-4 mb-5">
            <p className="proj-eyebrow text-xs text-slate-500 font-medium uppercase tracking-[0.25em]">
              Featured Work
            </p>
            <div className="proj-line flex-1 max-w-[120px] h-px bg-white/10" />
          </div>

          <h2 className="proj-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-xl leading-tight">
            Systems we&apos;ve shipped to{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              production
            </span>
          </h2>

          <p className="proj-subtext text-sm text-slate-500 mt-3 max-w-md">
            Real-time trading platforms, enterprise tooling, and automation pipelines — built end-to-end and deployed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`proj-card group flex flex-col p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${p.gradient} ${p.borderHover} transition-colors duration-300 cursor-default`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -6,
                  boxShadow: `0 24px 64px ${p.glowColor}`,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  boxShadow: "0 0 0px rgba(0,0,0,0)",
                  duration: 0.35,
                  ease: "power2.out",
                });
              }}
            >
              {/* Top row: number + status */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-slate-600">{p.num}</span>
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                    p.status === "Live"
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : "text-slate-400 bg-white/5 border-white/10"
                  }`}
                >
                  {p.status === "Live" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  {p.status}
                </span>
              </div>

              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${p.tagColor}`}>
                {p.tag}
              </span>

              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>

              {/* Metric */}
              <div className="flex items-center gap-2.5 mb-6 text-xs">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.dot}`} />
                <span className="text-slate-300 font-medium">{p.metric}</span>
              </div>

              {/* Tech stack chips */}
              <div className="mt-auto flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
