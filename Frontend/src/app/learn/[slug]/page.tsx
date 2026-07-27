import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, serviceLinks, type Block } from "@/data/articles";

type Params = Promise<{ slug: string }>;

const SITE_URL = "https://fenyxn.in";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.metaTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/learn/${article.slug}/` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.description,
      url: `/learn/${article.slug}/`,
      publishedTime: article.published,
      modifiedTime: article.updated,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
      images: ["/opengraph-image.png"],
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-slate-300 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="flex flex-col gap-3 mb-6">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-300 leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre
          key={i}
          className="mb-6 p-5 rounded-xl border border-white/10 bg-black/40 overflow-x-auto text-sm leading-relaxed"
        >
          <code className="font-mono text-slate-300">{block.code}</code>
        </pre>
      );
    case "note":
      return (
        <aside
          key={i}
          className="my-8 p-5 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] text-sm text-amber-100/80 leading-relaxed"
        >
          {block.text}
        </aside>
      );
  }
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/learn/${article.slug}/`;
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn/` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metaTitle,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
    image: `${SITE_URL}/opengraph-image.png`,
    inLanguage: "en-IN",
  };

  return (
    <article className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <Link
          href="/learn/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          All guides
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {article.tag}
            </span>
            <span className="text-xs text-slate-600">{article.readingMinutes} min read</span>
            <span className="text-xs text-slate-600">
              Updated{" "}
              <time dateTime={article.updated}>
                {new Date(article.updated).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            {article.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">{article.description}</p>
        </header>

        <div className="border-t border-white/5 pt-10">{article.blocks.map(renderBlock)}</div>

        <section className="border-t border-white/5 mt-16 pt-12">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">What we build</h2>
          <div className={`grid grid-cols-1 gap-3 ${article.services.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {article.services.map((key) => {
              const s = serviceLinks[key];
              return (
                <Link
                  key={key}
                  href={s.href}
                  className="group block p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.04] transition-colors"
                >
                  <p className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {s.title}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mt-1.5">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/5 mt-16 pt-12">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Continue reading</h2>
          <div className="flex flex-col gap-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/learn/${a.slug}/`}
                className="group block p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-xs font-semibold text-blue-400">{a.tag}</span>
                <p className="text-base font-bold text-white mt-1.5 group-hover:text-blue-300 transition-colors">
                  {a.title}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mt-1.5">{a.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-white/5 mt-16 pt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want a system built around your strategy?</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            We build and run trading automation in production. Tell us your rules and we will automate, test, and run them.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </article>
  );
}
