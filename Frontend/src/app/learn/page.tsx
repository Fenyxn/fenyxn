import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";

const SITE_URL = "https://fenyxn.in";

export const metadata: Metadata = {
  title: "Learn Algorithmic Trading",
  description:
    "Practical guides to algorithmic trading for Indian markets — how trading algorithms work, SEBI's retail framework, honest backtesting, broker API integration, and strategy design.",
  alternates: { canonical: "/learn/" },
  keywords: [
    "learn algorithmic trading",
    "algo trading guide India",
    "algorithmic trading tutorial",
    "SEBI algo trading rules",
    "backtesting guide",
    "broker API automation India",
  ],
  openGraph: {
    title: "Learn Algorithmic Trading — Fenyxn",
    description:
      "Practical guides to algorithmic trading for Indian markets, written by engineers who build and run these systems in production.",
    url: "/learn/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Learn Algorithmic Trading with Fenyxn" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Algorithmic Trading — Fenyxn",
    description:
      "Practical guides to algorithmic trading for Indian markets, written by engineers who build and run these systems in production.",
    images: ["/opengraph-image.png"],
  },
};

const listLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Algorithmic Trading Guides",
  itemListElement: articles.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/learn/${a.slug}/`,
    name: a.title,
  })),
};

export default function Learn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }} />

      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4">Learn</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Algorithmic trading, <span className="gradient-text">explained properly</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Guides written from the experience of building and running these systems in production — what actually works, what quietly fails, and why.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/learn/${a.slug}/`}
              className="group block p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {a.tag}
                </span>
                <span className="text-xs text-slate-600">{a.readingMinutes} min read</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {a.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{a.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Want this built for your strategy?</h2>
        <p className="text-slate-500 mb-8">We build and run these systems for a living. Tell us your rules.</p>
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
