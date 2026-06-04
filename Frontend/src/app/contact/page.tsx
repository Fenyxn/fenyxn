"use client";

import { useState } from "react";

const BOT_TOKEN = "8721271670:AAEnjcmmQCxsWyuM5S8TWu3Ju-p5bpMmPAs";
const CHAT_ID   = "994811437";

const services = [
  "Algorithmic Trading & Fintech",
  "Enterprise Management System",
  "Broker & Exchange Integration (Delta / Zerodha)",
  "Messaging Automation (WhatsApp / Telegram / Gmail)",
  "Cloud & DevOps",
  "Custom Software Development",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const text =
      `🔔 <b>New Contact from fenyxn.in</b>\n\n` +
      `👤 <b>Name:</b> ${form.name}\n` +
      `📧 <b>Email:</b> ${form.email}\n` +
      `📱 <b>Phone:</b> ${form.phone || "Not provided"}\n` +
      `🎯 <b>Interest:</b> ${form.service || "Not specified"}\n` +
      `💬 <b>Message:</b>\n${form.message}\n\n` +
      `⏰ ${now} IST`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight">
            Let&apos;s build something <span className="gradient-text">together</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Have a project in mind? Send us a message — we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="name">Full Name *</label>
              <input
                id="name" type="text" required value={form.name} onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full border border-slate-200 dark:border-white/8 rounded-lg px-4 py-3 text-sm bg-white dark:bg-white/[0.03] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="email">Email Address *</label>
              <input
                id="email" type="email" required value={form.email} onChange={handleChange}
                placeholder="jane@company.com"
                className="w-full border border-slate-200 dark:border-white/8 rounded-lg px-4 py-3 text-sm bg-white dark:bg-white/[0.03] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="phone">Phone Number</label>
              <input
                id="phone" type="tel" value={form.phone} onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full border border-slate-200 dark:border-white/8 rounded-lg px-4 py-3 text-sm bg-white dark:bg-white/[0.03] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="service">I&apos;m interested in</label>
              <select
                id="service" value={form.service} onChange={handleChange}
                className="w-full border border-slate-200 dark:border-white/8 rounded-lg px-4 py-3 text-sm bg-white dark:bg-white/[0.03] text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors [color-scheme:light] dark:[color-scheme:dark]"
              >
                <option value="" className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-white">Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="message">Message *</label>
              <textarea
                id="message" rows={5} required value={form.message} onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full border border-slate-200 dark:border-white/8 rounded-lg px-4 py-3 text-sm bg-white dark:bg-white/[0.03] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </>
              ) : "Send Message"}
            </button>

            {/* Success / Error */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Message sent! We&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 text-sm">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Something went wrong. Please try again.
              </div>
            )}
          </form>

          {/* Info */}
          <div className="flex flex-col gap-5">

            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02]">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Email</p>
              <p className="text-slate-800 dark:text-white text-sm font-medium">hello@fenyxn.in</p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02]">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Telegram</p>
              <p className="text-slate-800 dark:text-white text-sm font-medium">@Fenyxn_bot</p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02]">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Hours</p>
              <p className="text-slate-800 dark:text-white text-sm font-medium">Mon – Fri, 9am – 6pm IST</p>
            </div>

            <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-blue-400 font-semibold text-sm">We respond fast.</p>
              </div>
              <p className="text-slate-500 text-sm">
                Most enquiries get a reply within a few hours. You&apos;ll hear from us on the same day.
              </p>
            </div>

            {/* What happens next */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] mt-2">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">What happens next</p>
              {["We review your message", "We schedule a discovery call", "We send you a proposal"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 mb-2 last:mb-0">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
