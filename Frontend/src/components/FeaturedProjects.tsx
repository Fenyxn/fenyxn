"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { visibleProjects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects({ showHeader = true }: { showHeader?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".proj-card", { opacity: 0, y: 70, scale: 0.93, filter: "blur(8px)" });

      if (showHeader) {
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
      }

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
  }, [showHeader]);

  return (
    <section id="work" ref={sectionRef} className="py-24 px-4 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {showHeader && (
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
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={`proj-card group flex flex-col p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${p.accent.gradient} ${p.accent.borderHover} transition-colors duration-300`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -6,
                  boxShadow: `0 24px 64px ${p.accent.glowColor}`,
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

              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${p.accent.tagColor}`}>
                {p.tag}
              </span>

              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.summary}</p>

              {/* Metric */}
              <div className="flex items-center gap-2.5 mb-6 text-xs">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.accent.dot}`} />
                <span className="text-slate-300 font-medium">{p.metric}</span>
              </div>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View detail affordance */}
              <span className={`mt-6 inline-flex items-center gap-1.5 text-xs font-medium ${p.accent.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                View case study
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
