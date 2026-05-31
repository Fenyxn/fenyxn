import type { Metadata } from "next";
import FeaturedProjects from "@/components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Production systems we've shipped — real-time trading platforms, market-data pipelines, enterprise management tools, and automation.",
};

export default function Work() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Systems we&apos;ve shipped to <span className="gradient-text">production</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real-time trading platforms, market-data pipelines, enterprise tooling, and automation — built end-to-end and deployed.
          </p>
        </div>
      </section>

      {/* Projects grid (header handled by the page hero above) */}
      <FeaturedProjects showHeader={false} />
    </>
  );
}
