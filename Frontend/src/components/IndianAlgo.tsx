"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CandlestickChart from "./CandlestickChart";

const features = [
  {
    title: "Trading rules, written in code",
    desc: "Your entry, exit, and stop-loss rules become clear Python code — so trades follow the plan on every candle, with no hesitation.",
    dot: "bg-orange-400",
  },
  {
    title: "Plugged into Zerodha Kite",
    desc: "We connect straight to your Zerodha account through the Kite API — live KiteTicker price feeds and automatic order execution across many symbols.",
    dot: "bg-emerald-400",
  },
  {
    title: "Logs in and trades on its own",
    desc: "Automated daily login, live signal calculation like Supertrend, and hands-free order placement — with a forward-test mode before you risk real money.",
    dot: "bg-amber-400",
  },
];

export default function IndianAlgo() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.25em]">
              Indian Markets
            </p>
            <div className="flex-1 max-w-[120px] h-px bg-white/10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Indian algorithmic trading,{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              automated
            </span>{" "}
            end to end
          </h2>
          <p className="text-sm text-slate-400 mt-4 max-w-xl leading-relaxed">
            We build trading bots for Indian stocks and options. Written in Python and connected to Zerodha
            Kite, they place orders on the NSE for you — with live market data and automated daily login.
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
              <Link href="/indian-algo/" className="metal-btn">
                <span className="metal-btn-outer">
                  <span className="metal-btn-inner">
                    <span>Know more</span>
                  </span>
                </span>
              </Link>
            </div>
          </motion.ul>

          {/* Right: live chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[680px]">
              <CandlestickChart />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
