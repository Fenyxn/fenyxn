import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fenyxn builds algorithmic trading systems, fintech platforms, enterprise management software, broker integrations, and messaging automation pipelines.",
  alternates: { canonical: "/services/" },
  keywords: [
    "algorithmic trading software India",
    "fintech platform development",
    "Delta Exchange integration",
    "Zerodha Kite API integration",
    "enterprise management software India",
    "WhatsApp automation",
    "Telegram bot development",
    "Gmail automation",
    "cloud DevOps fintech",
  ],
  openGraph: {
    title: "Services — Fenyxn Software Studio",
    description:
      "Algorithmic trading systems, fintech platforms, broker integrations, enterprise management, and messaging automation.",
    url: "/services/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Fenyxn Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Fenyxn Software Studio",
    description:
      "Custom software development, real-time fintech systems, algorithmic trading automation, and enterprise platforms.",
    images: ["/opengraph-image.png"],
  },
};


export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Full-stack <span className="gradient-text">engineering</span>
            <br />from idea to production
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We cover every phase of your product journey with a team that cares about outcomes, not just outputs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Not sure what you need?</h2>
        <p className="text-slate-500 mb-8">Let&apos;s talk — we&apos;ll figure out the right solution together.</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
        >
          Get a Free Consultation
        </Link>
      </section>
    </>
  );
}
