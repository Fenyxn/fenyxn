"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";


export default function Home() {
  return (
    <>
      <HeroSection />

      <ExpertiseSection />

      {/* CTA */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center rounded-2xl border border-white/5 bg-white/[0.02] p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 pointer-events-none" />
          <h2 className="relative text-3xl font-bold text-white mb-4">Ready to ship your next product?</h2>
          <p className="relative text-slate-400 mb-8 max-w-md mx-auto">
            Let&apos;s discuss your project. We respond within one business day.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="relative inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
