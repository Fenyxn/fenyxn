import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crypto Algo Trading — Trend & Grid Strategies",
  description:
    "The problem with manual crypto trading and how Fenyxn solves it with automated trend-following and grid strategies, built in Python and connected to Delta Exchange.",
  alternates: { canonical: "/crypto-algo/" },
  keywords: [
    "crypto trend following bot",
    "crypto grid trading",
    "automated crypto trading",
    "Delta Exchange automation",
    "algorithmic trading Python",
  ],
  openGraph: {
    title: "Crypto Algo Trading — Trend & Grid Strategies",
    description:
      "How we solve the problems of manual crypto trading with automated trend-following and grid strategies.",
    url: "/crypto-algo/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Fenyxn Crypto Algo Trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Algo Trading — Trend & Grid Strategies",
    description:
      "How we solve the problems of manual crypto trading with automated trend-following and grid strategies.",
    images: ["/opengraph-image.png"],
  },
};

const problems = [
  {
    title: "The market never closes",
    desc: "Crypto trades 24/7. The moves that matter often happen at 3 a.m. — impossible to catch by hand without burning out.",
  },
  {
    title: "Prices move too fast",
    desc: "Sudden pumps and dumps play out in seconds. By the time a human reacts, the entry — or the exit — is already gone.",
  },
  {
    title: "Emotion wrecks the plan",
    desc: "Fear sells the bottom and greed buys the top. Staying disciplined through that volatility, every single time, is nearly impossible manually.",
  },
];

const strategies = [
  {
    label: "Strategy 01",
    title: "Trend-following",
    dot: "bg-amber-400",
    what: "Riding a coin while it's clearly moving in one direction — in on strength, out when the momentum fades.",
    how: [
      "Reads momentum and trend signals to enter once a move is confirmed, not on a guess.",
      "Stays in the trade as long as the trend holds, with a trailing stop to lock in gains.",
      "Cuts losers quickly when the trend breaks, keeping small losses small.",
    ],
  },
  {
    label: "Strategy 02",
    title: "Grid",
    dot: "bg-orange-400",
    what: "Placing a ladder of buy and sell orders across a price range to profit from crypto's constant up-and-down swings.",
    how: [
      "Buys a little lower and sells a little higher, again and again, as the price bounces.",
      "Turns sideways, choppy markets — where trend strategies struggle — into steady, repeatable gains.",
      "Runs fully automatically across the range, with limits that cap risk if price breaks out.",
    ],
  },
];

export default function CryptoAlgoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-4">Crypto Trading</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Trading that never <span className="gradient-text">sleeps</span>,<br />so you can
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crypto runs around the clock and moves in seconds. We build automated systems that trade it for
            you — right now, on trend-following and grid strategies.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">The problem</h2>
          <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Trading crypto by hand means fighting a market that&apos;s always open, always fast, and always
            testing your discipline. Most people can&apos;t win that fight for long.
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
            We turn a strategy into Python code and connect it straight to Delta Exchange over live WebSocket
            feeds — so it trades exactly to plan, tested on real market data first. Today we&apos;re building
            two approaches:
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
        <h2 className="text-2xl font-bold text-white mb-3">Want a bot built around your strategy?</h2>
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
