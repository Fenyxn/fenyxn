"use client";

import { useEffect, useRef, useState } from "react";

const W = 1920, H = 1080;
const CHART_LEFT = 100, CHART_RIGHT = 1820;
const CHART_TOP = 220, CHART_BOTTOM = 740;
const VOL_TOP = 780, VOL_BOTTOM = 950;
const VISIBLE_SLOTS = 34;
const SLOT_W = (CHART_RIGHT - CHART_LEFT) / VISIBLE_SLOTS;

const PANEL_BG = "rgba(255,255,255,0.025)";
const GRID = "rgba(255,255,255,0.07)";
const TEXT_PRIMARY = "#f1f5f9";
const TEXT_MUTED = "#64748b";
const MA_LINE = "#fbbf24";
const UP = "#34d399";
const DOWN = "#f87171";

type Candle = { open: number; close: number; high: number; low: number; vol: number };

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildCandles() {
  const rng = mulberry32(20260723);
  const candles: Candle[] = [];
  let price = 24000;
  const phases = [
    { count: 8, drift: 6, vol: 20 },
    { count: 30, drift: 0, vol: 55 },
    { count: 8, drift: 1, vol: 13 },
    { count: 12, drift: 32, vol: 22,
      mult: [-0.3, 0.1, 0.5, 1.1, 1.8, 2.6, 3.2, 3.6, 3.4, 2.8, 2.0, 1.2] },
  ];
  phases.forEach((phase) => {
    for (let i = 0; i < phase.count; i++) {
      const open = price;
      const m = phase.mult ? phase.mult[i] : 1;
      const chg = (rng() - 0.5) * phase.vol * 2 + phase.drift * m;
      const close = open + chg;
      const high = Math.max(open, close) + rng() * phase.vol * 0.6;
      const low = Math.min(open, close) - rng() * phase.vol * 0.6;
      const vol = 0.3 + rng() * 0.7 + Math.max(0, chg) * 0.05;
      candles.push({ open, close, high, low, vol });
      price = close;
    }
  });
  return candles;
}

const CANDLES = buildCandles();
const START_PRICE = CANDLES[0].open;

// [time, candles revealed] — opening, volatile chop, coil, breakout, hold
const KEYS: [number, number][] = [[0, 0], [2.5, 8], [9.5, 38], [13, 46], [18, CANDLES.length]];
const LOOP = 21;

function revealAt(t: number) {
  for (let i = 1; i < KEYS.length; i++) {
    if (t <= KEYS[i][0]) {
      const [t0, r0] = KEYS[i - 1], [t1, r1] = KEYS[i];
      return r0 + ((t - t0) / (t1 - t0)) * (r1 - r0);
    }
  }
  return CANDLES.length;
}

function easeOutClamp(x: number) {
  const c = Math.max(0, Math.min(1, x));
  return 1 - Math.pow(1 - c, 3);
}

export default function CandlestickChart({ symbol = "NIFTY 50" }: { symbol?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);

    let prev = performance.now();
    let elapsed = 0;
    let id = requestAnimationFrame(function step(now) {
      if (visible) {
        elapsed = (elapsed + (now - prev) / 1000) % LOOP;
        setT(elapsed);
      }
      prev = now;
      id = requestAnimationFrame(step);
    });
    return () => { cancelAnimationFrame(id); io.disconnect(); };
  }, []);

  const panelOpacity = easeOutClamp(t / 1.375);
  const headerOpacity = easeOutClamp((t - 0.2) / 1.0);
  const badgeOpacity = easeOutClamp((t - 13.75) / 1.75);
  const badgeScale = 0.85 + 0.15 * badgeOpacity;
  const idleJitter = t > 18 ? Math.sin(((t - 18) / 3) * Math.PI) * 1.1 * Math.sin(t * 6) : 0;

  const clampedReveal = Math.min(revealAt(t), CANDLES.length);
  const completed = Math.floor(clampedReveal);
  const frac = Math.max(0, Math.min(1, clampedReveal - completed));
  const hasForming = completed < CANDLES.length;

  type Item = Candle & { i: number; forming: boolean; formProgress?: number };
  const items: Item[] = [];
  for (let i = 0; i < completed; i++) items.push({ i, ...CANDLES[i], forming: false });
  if (hasForming) {
    const c = CANDLES[completed];
    const prevClose = completed > 0 ? CANDLES[completed - 1].close : c.open;
    const close = prevClose + (c.close - prevClose) * frac;
    const growF = Math.max(frac, 0.12);
    const high = Math.max(c.open, close) + (c.high - Math.max(c.open, c.close)) * growF;
    const low = Math.min(c.open, close) - (Math.min(c.open, c.close) - c.low) * growF;
    items.push({ i: completed, open: c.open, close, high, low, vol: c.vol * frac, forming: true, formProgress: frac });
  }
  if (items.length && idleJitter) {
    const last = items[items.length - 1];
    items[items.length - 1] = {
      ...last,
      close: last.close + idleJitter,
      high: last.high + Math.max(idleJitter, 0),
      low: last.low + Math.min(idleJitter, 0),
    };
  }

  const offsetSlots = Math.max(0, clampedReveal - VISIBLE_SLOTS);
  const visItems = items.filter((it) => it.i >= offsetSlots - 1.5 && it.i <= clampedReveal + 0.5);

  let lo = Infinity, hi = -Infinity;
  visItems.forEach((it) => { lo = Math.min(lo, it.low); hi = Math.max(hi, it.high); });
  if (!isFinite(lo)) { lo = CANDLES[0].low; hi = CANDLES[0].high; }
  const padAmt = (hi - lo) * 0.14 || 1;
  lo -= padAmt; hi += padAmt;

  const chartH = CHART_BOTTOM - CHART_TOP;
  const priceToY = (p: number) => CHART_TOP + (1 - (p - lo) / (hi - lo)) * chartH;
  const xFor = (i: number) => CHART_LEFT + (i - offsetSlots) * SLOT_W;
  const bodyW = SLOT_W * 0.58;

  const maPts: string[] = [];
  for (let k = 4; k < items.length; k++) {
    if (items[k].i < offsetSlots - 3) continue;
    let sum = 0;
    for (let j = k - 4; j <= k; j++) sum += items[j].close;
    maPts.push(`${xFor(items[k].i).toFixed(1)},${priceToY(sum / 5).toFixed(1)}`);
  }

  const maxVol = Math.max(...visItems.map((it) => it.vol), 0.001);
  const volToH = (v: number) => (v / maxVol) * (VOL_BOTTOM - VOL_TOP) * 0.92;

  const currentPrice = items.length ? items[items.length - 1].close : START_PRICE;
  const pctChange = ((currentPrice - START_PRICE) / START_PRICE) * 100;
  const pctColor = pctChange >= 0 ? UP : DOWN;

  return (
    <div ref={wrapRef} className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full block">
        <g style={{ opacity: panelOpacity }}>
          <rect x={CHART_LEFT - 44} y={CHART_TOP - 40}
                width={CHART_RIGHT - CHART_LEFT + 88} height={VOL_BOTTOM - CHART_TOP + 80}
                rx="20" fill={PANEL_BG} stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          {[0.2, 0.4, 0.6, 0.8].map((f) => (
            <line key={f} x1={CHART_LEFT} x2={CHART_RIGHT}
                  y1={CHART_TOP + chartH * f} y2={CHART_TOP + chartH * f}
                  stroke={GRID} strokeWidth="1.5" strokeDasharray="3 9" />
          ))}
        </g>

        <g style={{ opacity: headerOpacity }}>
          <text x={CHART_LEFT} y="108" fontSize="46" fontWeight="700" fill={TEXT_PRIMARY}>{symbol}</text>
          <circle cx={CHART_LEFT + symbol.length * 26 + 34} cy="94" r="7" fill={UP}
                  opacity={0.55 + 0.45 * Math.sin(t * 6)} />
          <text x={CHART_LEFT + symbol.length * 26 + 52} y="100" className="font-mono"
                fontSize="20" fontWeight="600" fill={TEXT_MUTED} letterSpacing="2">LIVE</text>
          <text x={CHART_LEFT} y="168" className="font-mono" fontSize="58" fontWeight="600" fill={pctColor}>
            ₹{currentPrice.toFixed(2)}
          </text>
        </g>

        <g>
          {visItems.map((it) => {
            const x = xFor(it.i);
            const color = it.close >= it.open ? UP : DOWN;
            const yO = priceToY(it.open), yC = priceToY(it.close);
            const top = Math.min(yO, yC), bh = Math.max(Math.abs(yO - yC), 2.5);
            return (
              <g key={it.i} style={{ opacity: it.forming ? 0.45 + 0.55 * it.formProgress! : 1 }}>
                <line x1={x} x2={x} y1={priceToY(it.high)} y2={priceToY(it.low)} stroke={color} strokeWidth="2.5" />
                <rect x={x - bodyW / 2} y={top} width={bodyW} height={bh} fill={color} rx="1.5" />
              </g>
            );
          })}
          {maPts.length > 1 && (
            <polyline points={maPts.join(" ")} fill="none" stroke={MA_LINE} strokeWidth="3.5"
                      strokeLinejoin="round" strokeLinecap="round" />
          )}
        </g>

        <g style={{ opacity: panelOpacity }}>
          {visItems.map((it) => {
            const vh = volToH(it.vol);
            return <rect key={"v" + it.i} x={xFor(it.i) - bodyW / 2} y={VOL_BOTTOM - vh}
                         width={bodyW} height={vh} fill={it.close >= it.open ? UP : DOWN} opacity="0.55" rx="1" />;
          })}
        </g>

        <g transform={`translate(${W - 300},48) scale(${badgeScale})`} style={{ opacity: badgeOpacity }}>
          <rect width="260" height="92" rx="14" fill={PANEL_BG} stroke={MA_LINE} strokeWidth="1.5" opacity="0.9" />
          <text x="20" y="34" fontSize="16" fontWeight="600" fill={TEXT_MUTED} letterSpacing="1.5">SESSION CHANGE</text>
          <text x="20" y="72" className="font-mono" fontSize="34" fontWeight="700" fill={pctColor}>
            {pctChange >= 0 ? "+" : ""}{pctChange.toFixed(2)}%
          </text>
        </g>
      </svg>
    </div>
  );
}
