import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Fenyxn's software development, fintech, automation, and consulting services.",
};

const services = [
  {
    title: "Custom Software Development",
    desc: "End-to-end development of web apps, APIs, and backend systems tailored to your exact needs.",
    features: ["React / Next.js frontends", "Node.js & Python backends", "REST & GraphQL APIs", "Database design"],
    accent: "from-blue-600/20 to-blue-600/5",
    border: "border-blue-500/20",
    tag: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "Cloud & DevOps",
    desc: "Infrastructure setup, CI/CD pipelines, and cloud-native architectures on AWS, GCP, or Azure.",
    features: ["Cloud migration", "Kubernetes & Docker", "CI/CD automation", "Monitoring & alerting"],
    accent: "from-cyan-600/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    tag: "bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps built with React Native for fast, native-quality experiences.",
    features: ["React Native", "iOS & Android", "Offline support", "App Store deployment"],
    accent: "from-violet-600/20 to-violet-600/5",
    border: "border-violet-500/20",
    tag: "bg-violet-500/10 text-violet-400",
  },
  {
    title: "Technical Consulting",
    desc: "Architecture reviews, tech-stack decisions, and engineering leadership for growing teams.",
    features: ["Architecture audits", "Tech-stack selection", "Code reviews", "Team enablement"],
    accent: "from-amber-600/20 to-amber-600/5",
    border: "border-amber-500/20",
    tag: "bg-amber-500/10 text-amber-400",
  },
  {
    title: "Product Design",
    desc: "User research, UX design, and design systems that make products intuitive and delightful.",
    features: ["UX / UI design", "Prototyping", "Design systems", "Usability testing"],
    accent: "from-pink-600/20 to-pink-600/5",
    border: "border-pink-500/20",
    tag: "bg-pink-500/10 text-pink-400",
  },
  {
    title: "Security & Compliance",
    desc: "Security audits, penetration testing, and compliance guidance for GDPR, SOC 2, and more.",
    features: ["Security audits", "Penetration testing", "GDPR / SOC 2", "Secure code review"],
    accent: "from-emerald-600/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    tag: "bg-emerald-500/10 text-emerald-400",
  },
];

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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.accent} p-8 flex flex-col gap-5 hover:scale-[1.01] transition-transform`}
            >
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${s.tag} mb-4`}>
                  {s.title}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <ul className="space-y-2 mt-auto">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="text-slate-600">—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

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
