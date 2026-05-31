import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fenyxn is a small, specialized software studio building real-time fintech systems, trading automation, and production-grade enterprise platforms.",
};

const team = [
  { name: "Akanksha Powar", role: "Founder & Lead Engineer", initials: "AP" },
  { name: "Kusum Lohar", role: "Full-Stack Engineer", initials: "KL" },
  { name: "Aniket Chougle", role: "Full-Stack Engineer", initials: "AC" },
];

const values = [
  {
    title: "Production-first",
    desc: "We ship. Every system we build runs in production under real load — not a demo that lives in a slide deck.",
  },
  {
    title: "Performance under pressure",
    desc: "Real-time by default. We design pipelines that hold up — REST APIs at 2+ req/sec and WebSocket feeds processing 10,000+ ticks per second.",
  },
  {
    title: "End-to-end ownership",
    desc: "From data ingestion to the dashboard, we own the full stack — backend, frontend, infrastructure, and deployment.",
  },
  {
    title: "Clean architecture",
    desc: "Fast feedback loops and code that stays maintainable, so the systems we ship keep evolving long after launch.",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            The studio behind <span className="gradient-text">Fenyxn</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A small, specialized software studio building real-time fintech systems, trading automation, and production-grade enterprise platforms.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Fenyxn is a focused engineering studio based in India. We specialize in the systems most teams find hardest to get right — real-time market data pipelines, algorithmic trading automation, and the enterprise tooling that keeps a business running.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We build end-to-end: Python and FastAPI backends, Next.js and React frontends, Redis, InfluxDB and PostgreSQL data layers, all deployed on Docker, GCP, and AWS. Deliberately small and specialized, we&apos;ve shipped five production systems — from a clinical Laboratory Management platform to high-frequency trading engines processing tens of thousands of ticks per second.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 transition-colors">
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-12">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold">
                  {member.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{member.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
