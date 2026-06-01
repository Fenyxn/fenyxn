import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { visibleProjects, getProject } from "@/data/projects";
import ProjectHeroVideo from "@/components/ProjectHeroVideo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return visibleProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.subtitle,
    keywords: [...project.stack, "Fenyxn", project.tag, "case study", "software project India"],
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      type: "article",
      title: `${project.title} — Fenyxn`,
      description: project.subtitle,
      url: `/projects/${project.slug}/`,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${project.title} — Fenyxn` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Fenyxn`,
      description: project.subtitle,
      images: ["/opengraph-image.png"],
    },
  };
}

const ArrowRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SITE_URL = "https://fenyxn.in";

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work/` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/projects/${project.slug}/` },
    ],
  };

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.subtitle,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    creator: { "@type": "Organization", name: "Fenyxn", url: SITE_URL },
    url: `${SITE_URL}/projects/${project.slug}/`,
  };

  return (
    <article className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }} />
      {/* ── Cinematic video header ── */}
      <header className="relative h-[62vh] min-h-[460px] w-full overflow-hidden">
        <ProjectHeroVideo
          src={project.heroVideo}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* blur-only mask at the bottom */}
        <div className="absolute inset-0 hero-bottom-blur pointer-events-none" />
        {/* blend into page background + lift text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/10 to-transparent pointer-events-none" />
        {/* top scrim so the back button stays legible over bright videos */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />

        {/* Back link */}
        <div className="absolute inset-x-0 top-6 z-10">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/work"
              className="animate-blur-fade-up inline-flex items-center gap-2 text-sm text-white rounded-full px-4 py-2 border border-white/25 bg-black/70 backdrop-blur-md shadow-lg hover:bg-black/85 hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to work
            </Link>
          </div>
        </div>

        {/* Hero content pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 pb-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap items-center gap-3 mb-5 animate-blur-fade-up" style={{ animationDelay: "120ms" }}>
              <span className="font-mono text-sm text-white/60">{project.num}</span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${project.accent.tagColor}`}>
                {project.tag}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                  project.status === "Live"
                    ? "text-emerald-300 bg-emerald-500/15 border-emerald-400/30"
                    : "text-white/80 bg-white/10 border-white/15"
                }`}
              >
                {project.status === "Live" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
                {project.status}
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 animate-blur-fade-up"
              style={{ animationDelay: "220ms" }}
            >
              {project.title}
            </h1>
            <p
              className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl animate-blur-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              {project.subtitle}
            </p>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-7 animate-blur-fade-up" style={{ animationDelay: "420ms" }}>
                {project.links.map((link) =>
                  link.type === "live" ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {link.label}
                    </a>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.06] hover:bg-white/10 hover:border-white/25 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" />
                      </svg>
                      {link.label}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        {/* Metrics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-2 mb-16">
          {project.metrics.map((m, i) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 animate-blur-fade-up"
              style={{ animationDelay: `${500 + i * 80}ms` }}
            >
              <p className="text-[11px] text-white/50 uppercase tracking-wider mb-1.5">{m.label}</p>
              <p className={`text-sm font-semibold ${project.accent.text}`}>{m.value}</p>
            </div>
          ))}
        </section>

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">The Problem</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">The Solution</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">What it does</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {project.featureGroups.map((group) => (
              <div
                key={group.title}
                className={`rounded-2xl border border-white/5 bg-gradient-to-br ${project.accent.gradient} p-7`}
              >
                <h3 className="text-white font-semibold mb-4">{group.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.accent.dot}`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-4">
          <h2 className="text-2xl font-bold text-white mb-6">Tech stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm text-slate-300 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <section className="border-t border-white/5 pt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Want something like this built?</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            Let&apos;s talk about your trading system, internal tooling, or automation pipeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            Start a Conversation
            <ArrowRight />
          </Link>
        </section>
      </div>
    </article>
  );
}
