"use client";

import { GlowCard } from "@/components/ui/spotlight-card";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <GlowCard key={s.title} customSize glowColor={s.glow} className="w-full">
            <div className="flex flex-col gap-4 h-full">
              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${s.tag}`}>
                {s.title}
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              <ul className="mt-auto space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="text-slate-600">—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
