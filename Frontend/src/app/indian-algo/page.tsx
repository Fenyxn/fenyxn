import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian Algo Trading — Intraday & Options Strategies",
  description:
    "The problem with manual trading on Indian markets and how Fenyxn solves it with automated intraday momentum and options strategies — built in Python across Zerodha, Angel One, Dhan, and more.",
  alternates: { canonical: "/indian-algo/" },
  keywords: [
    "algorithmic trading India",
    "Zerodha Kite automation",
    "Angel One SmartAPI bot",
    "Dhan API trading",
    "intraday Supertrend strategy",
    "options selling automation",
  ],
  openGraph: {
    title: "Indian Algo Trading — Intraday & Options Strategies",
    description:
      "How we solve manual trading on Indian markets with automated intraday momentum and options strategies, across any broker.",
    url: "/indian-algo/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Fenyxn Indian Algo Trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Algo Trading — Intraday & Options Strategies",
    description:
      "How we solve manual trading on Indian markets with automated intraday momentum and options strategies, across any broker.",
    images: ["/opengraph-image.png"],
  },
};

const brokers = ["Zerodha", "Angel One", "Dhan", "Upstox", "Fyers", "+ many more"];

const problems = [
  {
    title: "Signals move faster than you",
    desc: "Intraday setups flip in seconds. By the time you spot the signal, place the order, and confirm it, the move has already happened.",
  },
  {
    title: "Too many things to watch",
    desc: "Multiple stocks, strikes, and expiries at once — no human can track every symbol and react correctly to all of them at the same time.",
  },
  {
    title: "Emotion breaks discipline",
    desc: "Fear and greed override the plan — booking profits too early, holding losers too long, and skipping the stop-loss when it matters most.",
  },
];

const strategies = [
  {
    label: "Strategy 01",
    title: "Intraday momentum",
    dot: "bg-orange-400",
    what: "Riding fast intraday trends using Supertrend and ATR signals — in when momentum turns, out before the day closes.",
    how: [
      "Streams live prices and computes Supertrend / ATR on every candle in real time.",
      "Enters automatically on a signal flip and manages the trade with a hard stop-loss.",
      "Squares off open positions before market close — no overnight risk.",
    ],
  },
  {
    label: "Strategy 02",
    title: "Options selling",
    dot: "bg-emerald-400",
    what: "Selling options to collect premium as time decay works in your favour — with strict, automated risk controls.",
    how: [
      "Picks strikes by your rules and places the orders the moment conditions are met.",
      "Watches positions live and adjusts or exits when the market moves against them.",
      "Caps risk with predefined stop-losses, so a single bad move can't blow up the account.",
    ],
  },
  {
    label: "Strategy 03",
    title: "Swing",
    dot: "bg-sky-400",
    what: "Catching bigger moves that play out over days to weeks — fewer trades, higher-quality setups, held through the noise.",
    how: [
      "Scans for trend and momentum on higher timeframes to enter only strong setups.",
      "Holds the position across sessions with a trailing stop that rides the move.",
      "Trades less often but aims for larger gains, cutting the intraday churn.",
    ],
  },
];

export default function IndianAlgoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-medium text-orange-400 uppercase tracking-widest mb-4">Indian Markets</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Indian markets, traded on <span className="gradient-text">autopilot</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Trading NSE stocks and options by hand is fast, noisy, and unforgiving. We build automated systems
            that trade them for you — on intraday momentum, options, and swing strategies.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">The problem</h2>
          <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
            The Indian markets reward speed and discipline — two things that are almost impossible to hold on
            to when you&apos;re trading manually across many symbols.
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
            We turn a strategy into Python code and connect it straight to your broker&apos;s API — live market
            data in, automatic orders out, tested on real history first. Today we&apos;re building three
            approaches:
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

      {/* Any broker */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/8 bg-white/[0.02] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Works with your broker</h2>
          <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed">
            We&apos;re not tied to one platform. If your broker has an API, we can build the strategy on top of
            it — Zerodha, Angel One, Dhan, and many more. Same code, your account.
          </p>
          <div className="flex flex-wrap gap-3">
            {brokers.map((b) => (
              <span
                key={b}
                className="text-sm text-slate-300 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Want a bot built around your strategy?</h2>
        <p className="text-slate-500 mb-8">Tell us your rules and your broker — we&apos;ll automate, test, and run it for you.</p>
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
