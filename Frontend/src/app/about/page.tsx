import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Fenyx",
  description: "Learn about Fenyx, our mission, values, and the team behind our software solutions.",
};

const team = [
  { name: "Alex Rivera", role: "CEO & Co-founder", initials: "AR" },
  { name: "Priya Nair", role: "CTO & Co-founder", initials: "PN" },
  { name: "James Lin", role: "Head of Design", initials: "JL" },
  { name: "Sara Müller", role: "Engineering Lead", initials: "SM" },
];

const values = [
  { title: "Transparency", desc: "We communicate openly with clients and each other — no surprises, ever." },
  { title: "Quality First", desc: "We'd rather ship right than ship fast. Every line of code is crafted with care." },
  { title: "Client Success", desc: "Your success is our success. We measure our work by the impact it creates." },
  { title: "Continuous Growth", desc: "We invest in learning, improve our craft, and stay ahead of the curve." },
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
            The team behind <span className="gradient-text">Fenyx</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Engineers, designers, and strategists passionate about building software that makes a real difference.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Fenyx was founded in 2014 with a simple belief: great software should be accessible to every business, not just the Fortune 500. What started as a two-person consultancy has grown into a full-service technology partner trusted by companies across the globe.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Today, we work with startups, scale-ups, and enterprise teams to design, build, and evolve digital products. Our cross-functional teams bring together engineering excellence, thoughtful design, and strategic thinking to solve complex problems.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">Our Values</h2>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
