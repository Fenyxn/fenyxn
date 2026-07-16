"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cryptoVideo = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/crypto-trading.mp4`;

const features = [
  {
    title: "Trading rules, written in code",
    desc: "Your entry, exit, and stop-loss rules become clear Python code — so the bot trades to plan, day and night, without hesitation.",
    dot: "bg-amber-400",
  },
  {
    title: "Plugged into Delta Exchange",
    desc: "We connect straight to Delta Exchange over live WebSockets — real-time prices and automatic order execution across many coins at once.",
    dot: "bg-orange-400",
  },
  {
    title: "Watched and alerted 24/7",
    desc: "Crypto never sleeps, so neither does the bot. It trades round the clock and pings you on Telegram the moment it enters, exits, or hits a stop.",
    dot: "bg-yellow-400",
  },
];

export default function CryptoAlgo() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Video (left side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[680px] p-3 rounded-2xl bg-[#030712] border border-cyan-500/10 shadow-2xl">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.06]">
              <video
                src={cryptoVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </motion.div>
        <div>
          {/* Header (right side) */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.25em]">
                Crypto Trading
              </p>
              <div className="flex-1 max-w-[120px] h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Crypto algorithmic development,{" "}
              <span className="italic font-normal" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                automated
              </span>{" "}
              end to end
            </h2>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              We build crypto trading bots that run on autopilot. Written in Python and connected to Delta
              Exchange over live WebSocket feeds, they trade 24/7 — tested on real market data, with instant
              Telegram alerts on every move.
            </p>
          </div>

          {/* Features */}
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
              <Link href="/crypto-algo/" className="metal-btn">
                <span className="metal-btn-outer">
                  <span className="metal-btn-inner">
                    <span>Know more</span>
                  </span>
                </span>
              </Link>
            </div>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
