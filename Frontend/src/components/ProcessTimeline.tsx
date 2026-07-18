"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Check, Code, FileText, FlaskConical, Rocket, Zap } from "lucide-react";
import planningPhoto from "@/assets/process-planning.jpeg";

type Step = {
  id: number;
  title: string;
  tag: string;
  blurb: string;
  deliverables: string[];
  accent: string;
  ring: string;
  icon: React.ElementType;
  photo?: StaticImageData;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Planning",
    tag: "Scope",
    blurb:
      "We map your strategy, agree the rules, and pin down exactly what the bot must do — before anything gets built.",
    deliverables: ["Signed scope document", "Agreed entry, exit and stop rules", "Fixed quote and timeline"],
    accent: "text-blue-400",
    ring: "border-blue-400 shadow-blue-500/30",
    icon: Calendar,
    photo: planningPhoto,
  },
  {
    id: 2,
    title: "Design",
    tag: "Architecture",
    blurb:
      "Architecture, data flow and risk controls on paper first, so the build holds up when the market moves.",
    deliverables: ["System architecture diagram", "Position sizing and risk rules", "Data and execution flow spec"],
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
    deliverables: ["Reviewed Python source", "Live broker API integration", "Full trade and error logging"],
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
    deliverables: ["Multi-year backtest report", "Sandbox forward-test results", "Edge case and failure checks"],
    accent: "text-amber-400",
    ring: "border-amber-400 shadow-amber-500/30",
    icon: FlaskConical,
  },
  {
    id: 5,
    title: "Delivery",
    tag: "Go live",
    blurb: "We deploy it live, hand over the code and the docs, and stay on hand while it trades.",
    deliverables: ["Bot deployed and running live", "Full source code and documentation", "Handover call and support window"],
    accent: "text-emerald-400",
    ring: "border-emerald-400 shadow-emerald-500/30",
    icon: Rocket,
  },
];

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
  const fill = ((active - 1) / (steps.length - 1)) * 100;

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

        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="relative flex flex-col gap-8 sm:grid sm:grid-cols-5 sm:gap-0">
            {/* Rails run icon-centre to icon-centre; the inner div is the progress fill. */}
            <div className="sm:hidden absolute left-6 top-6 bottom-6 w-px bg-white/10">
              <div
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-400 transition-all duration-700 ease-out"
                style={{ height: `${fill}%` }}
              />
            </div>
            <div className="hidden sm:block absolute top-6 left-[10%] right-[10%] h-px bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 transition-all duration-700 ease-out"
                style={{ width: `${fill}%` }}
              />
            </div>

            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === active;
              const isDone = step.id < active;

              return (
                <button
                  key={step.id}
                  onClick={() => select(step.id)}
                  aria-current={isActive}
                  className="group relative flex items-center gap-4 text-left sm:flex-col sm:gap-3 sm:text-center cursor-pointer"
                >
                  <span
                    className={`relative w-12 h-12 shrink-0 rounded-full flex items-center justify-center border-2 bg-[#050505] transition-all duration-500 ${
                      isActive
                        ? `${step.ring} ${step.accent} scale-110 shadow-lg`
                        : isDone
                          ? `border-white/30 ${step.accent}`
                          : "border-white/15 text-white/40 group-hover:border-white/40 group-hover:text-white/70"
                    }`}
                  >
                    <Icon size={18} />
                    {isActive && !manual && !hovered && (
                      <span className="absolute -inset-1 rounded-full border border-white/20 animate-ping" />
                    )}
                  </span>

                  <span className="sm:contents">
                    <span
                      className={`block text-sm font-semibold tracking-wide transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-white/35">
                      {step.tag}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stage detail — the photo sits proud of the card, which acts as a backing panel */}
          <div className="mt-16 md:pl-10">
            <div className="relative rounded-2xl bg-[#030712]/95 backdrop-blur-lg border border-white/15 shadow-2xl shadow-black/40 p-6 sm:p-8 md:grid md:grid-cols-2 md:gap-10 md:items-center">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/70 -mt-12 md:mt-0 md:-ml-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    {current.photo ? (
                      <motion.div
                        animate={{ scale: [1.05, 1.12, 1.05], x: [0, -10, 0] }}
                        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
                        className="absolute inset-0"
                      >
                        <Image src={current.photo} alt={current.title} fill sizes="520px" className="object-cover" />
                      </motion.div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/[0.07] to-transparent">
                        <current.icon size={44} className={`${current.accent} opacity-40`} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 md:mt-0 min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 rounded-full bg-white text-black text-[10px] font-semibold tracking-wider">
                        STEP {String(current.id).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                        {current.tag}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-semibold mt-4 ${current.accent}`}>{current.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mt-3">{current.blurb}</p>

                    <ul className="mt-5 space-y-2">
                      {current.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-white/60">
                          <Check size={13} className={`mt-px shrink-0 ${current.accent}`} />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="flex items-center text-white/70">
                          <Zap size={11} className="mr-1.5" />
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
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
