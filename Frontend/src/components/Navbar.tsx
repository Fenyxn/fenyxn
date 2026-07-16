"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-black/5 dark:border-white/5 bg-[#f0f4ff]/80 dark:bg-[#050505]/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-[height] duration-300 ease-out ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <svg viewBox="0 0 100 100" className="w-8 h-8 transition-transform duration-300 ease-out group-hover:scale-110">
            <defs>
              <linearGradient id="navLogoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path d="M50 15 L85 65 L65 65 L50 35 L35 65 L15 65 Z" fill="url(#navLogoGrad)" />
            <polygon points="50,42 58,58 50,74 42,58" fill="#ffffff" />
            <circle cx="50" cy="84" r="3" fill="#a78bfa" />
          </svg>
          <div>
            <p className="text-lg font-bold tracking-widest text-slate-900 dark:text-white leading-none">fenyxn</p>
            <p className="text-[9px] text-slate-400 tracking-[0.2em] font-medium uppercase leading-none mt-0.5">Rising from data</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-purple-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Get in Touch
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-black/5 dark:border-white/5 bg-[#f0f4ff] dark:bg-[#050505]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
