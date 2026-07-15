import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forex Algo Trading — Hedging & Swing Strategies",
  description:
    "The problem with manual forex trading and how Fenyxn solves it with automated hedging and swing strategies, built in Python and connected to MetaTrader 5.",
  alternates: { canonical: "/forex-algo/" },
  keywords: [
    "forex hedging strategy",
    "forex swing trading",
    "automated forex trading",
    "MetaTrader 5 automation",
    "algorithmic trading Python",
  ],
  openGraph: {
    title: "Forex Algo Trading — Hedging & Swing Strategies",
    description:
      "How we solve the problems of manual forex trading with automated hedging and swing strategies.",
    url: "/forex-algo/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Fenyxn Forex Algo Trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Algo Trading — Hedging & Swing Strategies",
    description:
      "How we solve the problems of manual forex trading with automated hedging and swing strategies.",
    images: ["/opengraph-image.png"],
  },
};

const problems = [
  {
    title: "Emotion beats the plan",
    desc: "Fear and greed push traders to close winners early and hold losers too long. The strategy on paper rarely survives a live, moving market.",
  },
  {
    title: "You can't watch 24/5",
    desc: "Forex runs around the clock. The best setups often appear while you're asleep or busy — and missed entries mean missed results.",
  },
  {
    title: "One-way bets are fragile",
    desc: "A single position in one direction is fully exposed to sudden reversals and news spikes, with no protection when the market turns.",
  },
];

const strategies = [
  {
    label: "Strategy 01",
    title: "Hedging",
    dot: "bg-cyan-400",
    what: "Holding positions on both sides so a move against you is cushioned instead of catastrophic.",
    how: [
      "Opens balancing positions to cap downside when the market moves against the main trade.",
      "Manages exposure automatically, so no single spike wipes out the account.",
      "Keeps you in the game through volatile news events instead of getting stopped out.",
    ],
  },
  {
    label: "Strategy 02",
    title: "Swing",
    dot: "bg-emerald-400",
    what: "Catching medium-term price moves that play out over hours to days, not seconds.",
    how: [
      "Reads trend and momentum to enter when a move is likely to continue.",
      "Rides the swing with defined targets and stops, locking in gains along the way.",
      "Trades less often but with higher-quality setups — lower noise, clearer edge.",
    ],
  },
];

export default function ForexAlgoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4">Algorithmic Trading</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Trading that runs on <span className="gradient-text">rules</span>,<br />not emotions
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Manual forex trading is hard to do well and even harder to do consistently. We build automated
            systems that trade for you — right now, on hedging and swing strategies.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">The problem</h2>
          <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Most traders lose not because they lack ideas, but because staying disciplined, alert, and protected
            every single hour is nearly impossible by hand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-6">
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we solve it */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">How we solve it</h2>
          <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
            We turn a strategy into Python code and connect it straight to MetaTrader 5, so it trades exactly to
            plan — tested on real market history first. Today we&apos;re building two approaches:
          </p>

          <div className="flex flex-col gap-6">
            {strategies.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-2.5 h-2.5 rounded-full ${s.dot}`} />
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.2em]">{s.label}</p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {s.title}{" "}
                  <span className="italic font-normal text-slate-400" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    strategy
                  </span>
                </h3>
                <p className="text-slate-300 mb-6 max-w-2xl leading-relaxed">{s.what}</p>
                <ul className="flex flex-col gap-3">
                  {s.how.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Want a system built around your strategy?</h2>
        <p className="text-slate-500 mb-8">Tell us your rules — we&apos;ll automate, test, and run them for you.</p>
        <Link
          href="/contact/"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
        >
          Start a Conversation
        </Link>
      </section>
    </>
  );
}
