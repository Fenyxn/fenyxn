"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Code, FileText, FlaskConical, Link2, Rocket, Zap } from "lucide-react";

type Step = {
  id: number;
  title: string;
  tag: string;
  blurb: string;
  accent: string;
  ring: string;
  icon: React.ElementType;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Planning",
    tag: "Scope",
    blurb:
      "We map your strategy, agree the rules, and pin down exactly what the bot must do — before anything gets built.",
    accent: "text-blue-400",
    ring: "border-blue-400 shadow-blue-500/30",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Design",
    tag: "Architecture",
    blurb:
      "Architecture, data flow and risk controls on paper first, so the build holds up when the market moves.",
    accent: "text-cyan-400",
    ring: "border-cyan-400 shadow-cyan-500/30",
    icon: FileText,
  },
  {
    id: 3,
    title: "Development",
    tag: "Build",
    blurb:
      "Your rules become clean, reviewed Python — wired straight into your broker's API with logging throughout.",
    accent: "text-purple-400",
    ring: "border-purple-400 shadow-purple-500/30",
    icon: Code,
  },
  {
    id: 4,
    title: "Testing",
    tag: "Backtest",
    blurb:
      "We replay years of real price history, then forward-test live in a sandbox — before any real money is at risk.",
    accent: "text-amber-400",
    ring: "border-amber-400 shadow-amber-500/30",
    icon: FlaskConical,
  },
  {
    id: 5,
    title: "Delivery",
    tag: "Go live",
    blurb: "We deploy it live, hand over the code and the docs, and stay on hand while it trades.",
    accent: "text-emerald-400",
    ring: "border-emerald-400 shadow-emerald-500/30",
    icon: Rocket,
  },
];

const relatedTo = (id: number) => steps.filter((s) => Math.abs(s.id - id) === 1).map((s) => s.id);

// Column width drives both the rail spacing and the slide maths.
const COL = 160;

export default function ProcessTimeline() {
  const [active, setActive] = useState(1);
  const [manual, setManual] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (manual || hovered) return;
    const t = setInterval(() => setActive((a) => (a % steps.length) + 1), 3500);
    return () => clearInterval(t);
  }, [manual, hovered]);

  const select = (id: number) => {
    if (manual && active === id) {
      setManual(false);
      return;
    }
    setActive(id);
    setManual(true);
  };

  const current = steps.find((s) => s.id === active) ?? steps[0];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.25em]">How We Work</p>
            <div className="flex-1 max-w-[120px] h-px bg-white/10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            From first call to live trading,{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              step
            </span>{" "}
            by step
          </h2>
          <p className="text-sm text-slate-400 mt-4 max-w-xl leading-relaxed">
            Every build follows the same five stages — so you always know what we are doing, what comes next,
            and what you get at the end. Tap any stage to hold it open.
          </p>
        </div>

        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          {/* Stage rail — slides so the active stage sits centre */}
          <div
            className="relative h-20 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            {/* left-1/2 puts the row's origin at the container centre, so translating by the
                active column's centre lands that column dead centre — no measuring needed. */}
            <div
              className="absolute left-1/2 top-0 flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${(active - 1) * COL + COL / 2}px)` }}
            >
              <div className="absolute top-5 h-px bg-white/10" style={{ left: COL / 2, width: (steps.length - 1) * COL }} />
              <div
                className="absolute top-5 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 transition-all duration-700 ease-out"
                style={{ left: COL / 2, width: (active - 1) * COL }}
              />

              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id === active;
                const isDone = step.id < active;

                return (
                  <button
                    key={step.id}
                    onClick={() => select(step.id)}
                    style={{ width: COL }}
                    className="group relative shrink-0 flex flex-col items-center gap-3 cursor-pointer"
                    aria-label={step.title}
                  >
                    <span
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center border-2 bg-[#050505] transition-all duration-500 ${
                        isActive
                          ? `${step.ring} ${step.accent} scale-125 shadow-lg`
                          : isDone
                            ? `border-white/30 ${step.accent}`
                            : "border-white/15 text-white/40 group-hover:border-white/40 group-hover:text-white/70"
                      }`}
                    >
                      <Icon size={16} />
                      {isActive && !manual && !hovered && (
                        <span className="absolute -inset-1 rounded-full border border-white/20 animate-ping" />
                      )}
                    </span>

                    <span
                      className={`text-[11px] sm:text-xs font-semibold tracking-wider transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage detail */}
          <div className="mt-12 flex justify-center min-h-[230px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full max-w-md rounded-xl bg-[#030712]/95 backdrop-blur-lg border border-white/20 shadow-2xl shadow-white/5 p-5 text-left"
              >
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 rounded-full bg-white text-black text-[10px] font-semibold tracking-wider">
                    STEP {String(current.id).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                    {current.tag}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mt-3">{current.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed mt-2">{current.blurb}</p>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="flex items-center text-white/70">
                      <Zap size={10} className="mr-1" />
                      Stage
                    </span>
                    <span className="font-mono text-white/70">
                      {current.id} / {steps.length}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(current.id / steps.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center mb-2">
                    <Link2 size={10} className="text-white/70 mr-1" />
                    <h4 className="text-[10px] uppercase tracking-wider font-medium text-white/70">
                      Related Stages
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {relatedTo(current.id).map((rid) => {
                      const r = steps.find((s) => s.id === rid);
                      if (!r) return null;
                      return (
                        <button
                          key={rid}
                          onClick={() => select(rid)}
                          className="flex items-center h-6 px-2 text-[11px] rounded-md border border-white/20 hover:bg-white/10 text-white/80 hover:text-white transition-all"
                        >
                          {r.title}
                          <ArrowRight size={8} className="ml-1 text-white/60" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
