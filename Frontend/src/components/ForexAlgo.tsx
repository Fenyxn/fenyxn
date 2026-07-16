"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const forexVideo = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/forex-trading.mp4`;

const features = [
  {
    title: "Trading rules, written in code",
    desc: "Your buy and sell rules become clear Python code — so trades follow the plan every time, with no emotion and no second-guessing.",
    dot: "bg-blue-400",
  },
  {
    title: "Plugged into MetaTrader 5",
    desc: "We connect the strategy straight to your MetaTrader 5 account, so it can place trades and track positions and balance on its own.",
    dot: "bg-cyan-400",
  },
  {
    title: "Tested first, then live",
    desc: "We replay years of real price history to prove the strategy works, then run the exact same code live — fully automated, around the clock.",
    dot: "bg-emerald-400",
  },
];

export default function ForexAlgo() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.25em]">
              Algorithmic Trading
            </p>
            <div className="flex-1 max-w-[120px] h-px bg-white/10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Forex algorithmic development,{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              automated
            </span>{" "}
            end to end
          </h2>
          <p className="text-sm text-slate-400 mt-4 max-w-xl leading-relaxed">
            We build forex trading bots that follow your strategy automatically. Written in Python and
            connected to MetaTrader 5, they trade for you — tested on real market history before they
            ever go live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: features */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${f.dot}`} />
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </li>
            ))}

            <div className="mt-3">
              <Link href="/forex-algo/" className="metal-btn">
                <span className="metal-btn-outer">
                  <span className="metal-btn-inner">
                    <span>Know more</span>
                  </span>
                </span>
              </Link>
            </div>
          </motion.ul>

          {/* Right: video visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end lg:-translate-y-20"
          >
            <div className="relative w-full max-w-[680px] p-3 rounded-2xl bg-[#030712] border border-cyan-500/10 shadow-2xl">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.06]">
                <video
                  src={forexVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
