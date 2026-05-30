"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Hls from "hls.js";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const roles = ["Software", "Fintech", "Trading", "Automation"];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  // Role cycling
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          delay: 0.3,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="hero-blur-in text-xs text-white/50 uppercase tracking-[0.3em] mb-8">
          FENYXN // 2026
        </p>

        <h1
          className="hero-name-reveal text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
        >
          Fenyxn
        </h1>

        <p className="hero-blur-in text-base md:text-lg text-white/70 mb-4">
          A{" "}
          <span
            key={roleIndex}
            className="text-white inline-block animate-role-fade-in"
            style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
          >
            {roles[roleIndex]}
          </span>{" "}
          studio based in India.
        </p>

        <p className="hero-blur-in text-sm md:text-base text-white/50 max-w-md mx-auto mb-12">
          Building high-performance software, trading systems, and automation
          pipelines for ambitious businesses.
        </p>

        <div className="hero-blur-in inline-flex gap-4 flex-wrap justify-center">
          <a
            href="#work"
            className="rounded-full text-sm px-7 py-3.5 bg-white text-black font-medium hover:scale-105 transition-transform"
          >
            See Our Work
          </a>
          <a
            href="/contact"
            className="rounded-full text-sm px-7 py-3.5 border-2 border-white/25 text-white font-medium hover:scale-105 hover:border-white/50 transition-all"
          >
            Reach out ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-white/10 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full bg-white/60 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
