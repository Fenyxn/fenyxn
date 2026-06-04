"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/spotlight-card";

gsap.registerPlugin(ScrollTrigger);

const expertise = [
  {
    tag: "Fintech",
    title: "Algorithmic Trading & Fintech",
    desc: "High-performance trading systems for the Indian market — backtesting engines, strategy automation, and broker API integrations with NSE, BSE, and SEBI-compliant infrastructure.",
    highlights: ["NSE / BSE Integration", "Strategy Backtesting", "Real-time Signal Engines", "SEBI-compliant Systems"],
    gradient: "from-blue-600/10 to-blue-800/5",
    borderHover: "hover:border-blue-500/30",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-400",
    glowColor: "rgba(96,165,250,0.18)",
    glow: "blue" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    tag: "Management Software",
    title: "Enterprise Management Systems",
    desc: "Robust management platforms — laboratory management systems (LIMS), inventory control, workflow automation, and multi-role dashboards for research and enterprise teams.",
    highlights: ["Laboratory Management (LIMS)", "Inventory & Asset Tracking", "Role-based Dashboards", "Audit & Compliance Trails"],
    gradient: "from-purple-600/10 to-purple-800/5",
    borderHover: "hover:border-purple-500/30",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
    glowColor: "rgba(168,139,250,0.18)",
    glow: "purple" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    tag: "Delta Exchange",
    title: "Delta Exchange Integrations",
    desc: "Trading software on top of Delta Exchange — order management systems, derivatives pricing tools, automated bots, and real-time P&L dashboards via the Delta Exchange API.",
    highlights: ["Delta Exchange API Integration", "Derivatives & Options Tools", "Automated Trading Bots", "Real-time P&L Dashboards"],
    gradient: "from-cyan-600/10 to-cyan-800/5",
    borderHover: "hover:border-cyan-500/30",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    dot: "bg-cyan-400",
    glowColor: "rgba(34,211,238,0.18)",
    glow: "blue" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    tag: "Automation",
    title: "Messaging & Notification Automation",
    desc: "End-to-end automation pipelines across WhatsApp, Telegram, and Email — triggered alerts, scheduled broadcasts, two-way bots, and CRM-integrated notification workflows.",
    highlights: ["WhatsApp Automation", "Telegram Bot Integration", "Email Automation", "CRM-linked Workflows"],
    gradient: "from-emerald-600/10 to-emerald-800/5",
    borderHover: "hover:border-emerald-500/30",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
    glowColor: "rgba(52,211,153,0.18)",
    glow: "green" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide cards before they animate in
      gsap.set(".exp-card", { opacity: 0, y: 70, scale: 0.93, filter: "blur(8px)" });
      gsap.set(".exp-line", { scaleX: 0, transformOrigin: "left center" });

      // Header: eyebrow + line grow + heading
      gsap.fromTo(
        ".exp-eyebrow",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".exp-header", start: "top 82%" },
        }
      );

      gsap.to(".exp-line", {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".exp-header", start: "top 82%" },
      });

      gsap.fromTo(
        ".exp-heading",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".exp-header", start: "top 82%" },
        }
      );

      gsap.fromTo(
        ".exp-subtext",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.28,
          ease: "power3.out",
          scrollTrigger: { trigger: ".exp-header", start: "top 82%" },
        }
      );

      // Cards: batch reveal as each row scrolls in
      ScrollTrigger.batch(".exp-card", {
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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="exp-header mb-16">
          <div className="flex items-center gap-4 mb-5">
            <p className="exp-eyebrow text-xs text-slate-500 font-medium uppercase tracking-[0.25em]">
              Our Expertise
            </p>
            <div className="exp-line flex-1 max-w-[120px] h-px bg-white/10" />
          </div>

          <h2 className="exp-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-xl leading-tight">
            Four domains we&apos;ve gone{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              deep
            </span>{" "}
            in
          </h2>

          <p className="exp-subtext text-sm text-slate-500 mt-3 max-w-md">
            Specialized, not generalist — each domain reflects years of hands-on delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <GlowCard
              key={item.title}
              customSize
              glowColor={item.glow}
              className={`exp-card w-full flex flex-col cursor-default`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -6,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  duration: 0.35,
                  ease: "power2.out",
                });
              }}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${item.tagColor}`}>
                {item.icon}
              </div>

              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${item.tagColor}`}>
                {item.tag}
              </span>

              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>

              <ul className="mt-auto flex flex-col gap-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-xs text-slate-400">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    {h}
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
