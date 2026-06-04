import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public/opengraph-image.png");

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#080c18"/>
      <stop offset="50%"  stop-color="#0a0f1e"/>
      <stop offset="100%" stop-color="#080b16"/>
    </linearGradient>
    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0"  y2="80" stroke="#ffffff" stroke-opacity="0.025" stroke-width="1"/>
      <line x1="0" y1="0" x2="80" y2="0"  stroke="#ffffff" stroke-opacity="0.025" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow1" cx="0" cy="0" r="275" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#2563eb" stop-opacity="0.22"/>
      <stop offset="50%"  stop-color="#2563eb" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="1200" cy="630" r="325" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#6366f1" stop-opacity="0.18"/>
      <stop offset="50%"  stop-color="#6366f1" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Glows -->
  <circle cx="0" cy="0" r="275" fill="url(#glow1)"/>
  <circle cx="1200" cy="630" r="325" fill="url(#glow2)"/>

  <!-- Status pill -->
  <rect x="72" y="76" width="358" height="36" rx="18"
        fill="#2563eb" fill-opacity="0.12"
        stroke="#2563eb" stroke-opacity="0.3" stroke-width="1"/>
  <circle cx="96" cy="94" r="4" fill="#34d399"/>
  <text x="112" y="99"
        font-family="Arial, Helvetica, sans-serif"
        font-size="11" font-weight="bold" fill="#93c5fd"
        letter-spacing="1.8">PRODUCTION-GRADE SOFTWARE STUDIO</text>

  <!-- Company name -->
  <text x="72" y="218"
        font-family="Arial, Helvetica, sans-serif"
        font-size="96" font-weight="bold" fill="#ffffff"
        letter-spacing="-3">Fenyxn</text>

  <!-- Tagline -->
  <text x="72" y="263"
        font-family="Arial, Helvetica, sans-serif"
        font-size="24" fill="#94a3b8" fill-opacity="0.8"
        letter-spacing="-0.3">Real-time Fintech &amp; Software Studio</text>

  <!-- Capability chips -->
  <rect x="72"  y="292" width="184" height="34" rx="8"
        fill="#ffffff" fill-opacity="0.04"
        stroke="#ffffff" stroke-opacity="0.09" stroke-width="1"/>
  <text x="90"  y="314" font-family="Arial, Helvetica, sans-serif"
        font-size="13" font-weight="500" fill="#94a3b8" fill-opacity="0.75">Trading Automation</text>

  <rect x="266" y="292" width="186" height="34" rx="8"
        fill="#ffffff" fill-opacity="0.04"
        stroke="#ffffff" stroke-opacity="0.09" stroke-width="1"/>
  <text x="284" y="314" font-family="Arial, Helvetica, sans-serif"
        font-size="13" font-weight="500" fill="#94a3b8" fill-opacity="0.75">Enterprise Platforms</text>

  <rect x="462" y="292" width="168" height="34" rx="8"
        fill="#ffffff" fill-opacity="0.04"
        stroke="#ffffff" stroke-opacity="0.09" stroke-width="1"/>
  <text x="480" y="314" font-family="Arial, Helvetica, sans-serif"
        font-size="13" font-weight="500" fill="#94a3b8" fill-opacity="0.75">Real-time Systems</text>

  <!-- Domain -->
  <text x="72" y="380"
        font-family="Arial, Helvetica, sans-serif"
        font-size="15" font-weight="500" fill="#64748b" fill-opacity="0.6"
        letter-spacing="0.5">fenyxn.in</text>

  <!-- Metric card 1 — API Throughput -->
  <rect x="852" y="128" width="278" height="90" rx="16"
        fill="#ffffff" fill-opacity="0.025"
        stroke="#ffffff" stroke-opacity="0.07" stroke-width="1"/>
  <text x="878" y="160" font-family="Arial, Helvetica, sans-serif"
        font-size="10" font-weight="bold" fill="#64748b" fill-opacity="0.65"
        letter-spacing="2">API THROUGHPUT</text>
  <text x="878" y="197" font-family="Arial, Helvetica, sans-serif"
        font-size="26" font-weight="bold" fill="#60a5fa"
        letter-spacing="-0.5">2+ req/s</text>

  <!-- Metric card 2 — WS Ticks -->
  <rect x="852" y="234" width="278" height="90" rx="16"
        fill="#ffffff" fill-opacity="0.025"
        stroke="#ffffff" stroke-opacity="0.07" stroke-width="1"/>
  <text x="878" y="266" font-family="Arial, Helvetica, sans-serif"
        font-size="10" font-weight="bold" fill="#64748b" fill-opacity="0.65"
        letter-spacing="2">WS TICKS/SEC</text>
  <text x="878" y="303" font-family="Arial, Helvetica, sans-serif"
        font-size="26" font-weight="bold" fill="#60a5fa"
        letter-spacing="-0.5">10,000+</text>

  <!-- Metric card 3 — Status -->
  <rect x="852" y="340" width="278" height="90" rx="16"
        fill="#ffffff" fill-opacity="0.025"
        stroke="#ffffff" stroke-opacity="0.07" stroke-width="1"/>
  <text x="878" y="372" font-family="Arial, Helvetica, sans-serif"
        font-size="10" font-weight="bold" fill="#64748b" fill-opacity="0.65"
        letter-spacing="2">STATUS</text>
  <text x="878" y="409" font-family="Arial, Helvetica, sans-serif"
        font-size="26" font-weight="bold" fill="#60a5fa"
        letter-spacing="-0.5">Production</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(OUT);

console.log(`Generated: ${OUT}`);
