"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const W = 500;
const H = 160;
const POINTS = 40;

function generatePath() {
  let y = H * 0.55;
  const pts: string[] = [];
  for (let i = 0; i < POINTS; i++) {
    y = Math.max(H * 0.12, Math.min(H * 0.88, y + (Math.random() - 0.46) * 14));
    pts.push(`${i === 0 ? "M" : "L"} ${(i / (POINTS - 1)) * W} ${y}`);
  }
  return pts.join(" ");
}

function generateBars() {
  return Array.from({ length: 20 }, () => Math.random() * 0.8 + 0.1);
}

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [price, setPrice] = useState(42847.35);
  const [isUp, setIsUp] = useState(true);
  const [change, setChange] = useState(2.34);
  const [chartPath, setChartPath] = useState(generatePath);
  const [bars, setBars] = useState(generateBars);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const resize = () => {
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d")!;
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.2 + 0.4,
      o:  Math.random() * 0.4 + 0.1,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34,211,238,${0.07 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.o})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  // Price ticker
  useEffect(() => {
    const t = setInterval(() => {
      const delta = (Math.random() - 0.48) * 60;
      setIsUp(delta > 0);
      setChange(+(Math.random() * 3).toFixed(2));
      setPrice(p => Math.max(39000, p + delta));
    }, 1400);
    return () => clearInterval(t);
  }, []);

  // Chart refresh
  useEffect(() => {
    const t = setInterval(() => {
      setChartPath(generatePath());
      setBars(generateBars());
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#030712] border border-cyan-500/10 shadow-2xl">
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)",
        backgroundSize: "36px 36px",
      }} />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-blue-700/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* ── Main glass card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-3 rounded-xl border border-white/[0.06] overflow-hidden flex flex-col"
        style={{ backdropFilter: "blur(14px)", background: "rgba(5,10,30,0.75)" }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <motion.span
              key={price.toFixed(0)}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              className="text-white text-sm font-bold font-mono"
            >
              ${price.toFixed(2)}
            </motion.span>
            <span className={`text-[11px] font-mono font-semibold ${isUp ? "text-emerald-400" : "text-red-400"}`}>
              {isUp ? "▲" : "▼"} {change}%
            </span>
          </div>
          <div className="flex items-center gap-3">
            {["1H","4H","1D","1W"].map((t, i) => (
              <span key={t} className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${i === 2 ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "text-slate-600"}`}>{t}</span>
            ))}
          </div>
          <div className="flex gap-1 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] text-slate-500 font-mono">LIVE</span>
          </div>
        </div>

        {/* Line chart */}
        <div className="flex-1 px-2 min-h-0">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#22d3ee" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <motion.path
              key={chartPath + "-area"}
              d={`${chartPath} L ${W} ${H} L 0 ${H} Z`}
              fill="url(#areaGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            {/* Line */}
            <motion.path
              key={chartPath}
              d={chartPath}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Volume bars */}
        <div className="flex items-end gap-px px-2 pb-2 h-8 flex-shrink-0">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-cyan-500/20"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: h }}
              transition={{ duration: 0.6, delay: i * 0.02 }}
              style={{ originY: 1, height: "100%" }}
            />
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-4 pb-2 flex-shrink-0">
          <span className="text-[9px] font-mono text-slate-600">BTC / USDT · DELTA EXCHANGE</span>
          <span className="text-[9px] font-mono text-slate-600">VOL 24H: $2.41B</span>
        </div>
      </motion.div>

      {/* ── Floating stat chips ── */}
      <motion.div
        className="absolute top-5 right-5 px-3 py-2 rounded-xl border border-cyan-500/15 text-xs font-mono z-10"
        style={{ backdropFilter: "blur(12px)", background: "rgba(5,10,30,0.85)" }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="text-slate-500 text-[9px] mb-0.5 uppercase tracking-widest">Open P&L</div>
        <div className="text-emerald-400 font-bold">+ $4,821.50</div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-5 px-3 py-2 rounded-xl border border-blue-500/15 text-xs font-mono z-10"
        style={{ backdropFilter: "blur(12px)", background: "rgba(5,10,30,0.85)" }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="text-slate-500 text-[9px] mb-0.5 uppercase tracking-widest">Signals</div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-slate-200 font-bold">12 Active</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-5 px-3 py-2 rounded-xl border border-purple-500/15 text-xs font-mono z-10"
        style={{ backdropFilter: "blur(12px)", background: "rgba(5,10,30,0.85)" }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="text-slate-500 text-[9px] mb-0.5 uppercase tracking-widest">Win Rate</div>
        <div className="text-purple-400 font-bold">73.8%</div>
      </motion.div>

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none z-20"
        style={{ background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.25),transparent)" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
      />
    </div>
  );
}
