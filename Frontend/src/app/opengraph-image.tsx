import { ImageResponse } from "next/og";

export const alt = "Fenyxn — Real-time Fintech & Software Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #080c18 0%, #0a0f1e 50%, #080b16 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Blue glow — top left */}
        <div
          style={{
            position: "absolute",
            top: -150,
            left: -80,
            width: 550,
            height: 550,
            background:
              "radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.05) 50%, transparent 75%)",
            borderRadius: "50%",
          }}
        />

        {/* Indigo glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -80,
            width: 650,
            height: 550,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.04) 50%, transparent 75%)",
            borderRadius: "50%",
          }}
        />

        {/* Left — main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "72px 80px",
            gap: 28,
            zIndex: 10,
            flex: 1,
          }}
        >
          {/* Status pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(37,99,235,0.3)",
              borderRadius: 999,
              padding: "7px 16px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                background: "#34d399",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                color: "#93c5fd",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              PRODUCTION-GRADE SOFTWARE STUDIO
            </span>
          </div>

          {/* Company name + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                fontSize: 96,
                fontWeight: 800,
                color: "white",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              Fenyxn
            </span>
            <span
              style={{
                fontSize: 26,
                fontWeight: 400,
                color: "rgba(148,163,184,0.8)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                marginTop: 4,
              }}
            >
              Real-time Fintech & Software Studio
            </span>
          </div>

          {/* Capability chips */}
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            {["Trading Automation", "Enterprise Platforms", "Real-time Systems"].map((cap) => (
              <div
                key={cap}
                style={{
                  display: "flex",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 8,
                  padding: "7px 14px",
                  color: "rgba(148,163,184,0.75)",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {cap}
              </div>
            ))}
          </div>

          {/* Domain */}
          <span
            style={{
              fontSize: 16,
              color: "rgba(100,116,139,0.6)",
              fontWeight: 500,
              letterSpacing: "0.03em",
              marginTop: 4,
            }}
          >
            fenyxn.in
          </span>
        </div>

        {/* Right — metric cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: "72px 80px",
            gap: 14,
            zIndex: 10,
          }}
        >
          {[
            { label: "API Throughput", value: "2+ req/s" },
            { label: "WS Ticks/sec", value: "10,000+" },
            { label: "Status", value: "Production" },
          ].map((m) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "18px 26px",
                minWidth: 180,
                gap: 6,
              }}
            >
              <span
                style={{
                  color: "rgba(100,116,139,0.65)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {m.label}
              </span>
              <span
                style={{
                  color: "#60a5fa",
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
