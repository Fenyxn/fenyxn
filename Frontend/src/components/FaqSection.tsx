export type Faq = { q: string; a: string };

export default function FaqSection({ items }: { items: Faq[] }) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Common questions</h2>
        <div className="flex flex-col gap-3">
          {items.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-white/8 bg-white/[0.02] p-5 open:bg-white/[0.04] transition-colors"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-semibold text-white [&::-webkit-details-marker]:hidden">
                {q}
                <svg
                  className="w-4 h-4 mt-1 flex-shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
