"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ForexAlgo from "@/components/ForexAlgo";
import CryptoAlgo from "@/components/CryptoAlgo";
import IndianAlgo from "@/components/IndianAlgo";


export default function Home() {
  return (
    <>
      <HeroSection />

      <ForexAlgo />

      <CryptoAlgo />

      <IndianAlgo />

      {/* CTA */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center border-t border-white/5 pt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to ship your next product?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Let&apos;s discuss your project. We respond within one business day.
          </p>
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
