import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const POINTS = [
  {
    id: "01",
    title: "Iconic Round Taillights",
    desc: "Four circular taillights — the R34's most recognizable signature, visible from any angle.",
    top: "62%",
    left: "91%",
  },
  {
    id: "02",
    title: "Large Rear Wing",
    desc: "Adjustable GT-wing generates downforce at speed for aerodynamic stability.",
    top: "45%",
    left: "88%",
  },
  {
    id: "03",
    title: "Wide Fender Flares",
    desc: "Flared wheel arches house wider track and larger brakes for an imposing stance.",
    top: "70%",
    left: "25%",
  },
  {
    id: "04",
    title: "Functional Aero",
    desc: "Front splitter and vents channel airflow to cool brakes, engine, and intercooler.",
    top: "92%",
    left: "11%",
  },
];

export default function Design() {
  const { ref, visible } = useReveal(0.08);
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="design" ref={ref} className="relative py-28 lg:py-36 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} text-center mb-16`}>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="divider-h w-10" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-nissan" style={{ fontFamily: "var(--font-label)" }}>
              Exterior
            </span>
            <div className="divider-h w-10" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="section-title text-4xl md:text-6xl lg:text-7xl">
            Design
            <br />
            <span className="text-nissan">Philosophy</span>
          </h2>
        </div>

        {/* Interactive image */}
        <div className={`reveal-scale ${visible ? "visible" : ""} relative mb-14`}>
          <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
            <img src="/images/r34-side.png" alt="GT-R R34 Side" className="img-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45))" }} />

            {/* Hotspots */}
            {POINTS.map((p) => (
              <button
                key={p.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: p.top, left: p.left }}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === p.id ? null : p.id)}
              >
                {/* Dot + ring */}
                <span className="relative flex h-4 w-4">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ background: "#2563eb", animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                  />
                  <span
                    className="relative inline-flex h-4 w-4 rounded-full border-2 border-white/70 transition-colors"
                    style={{ background: active === p.id ? "#2563eb" : "rgba(37,99,235,0.5)" }}
                  />
                </span>

                {/* Tooltip */}
                {active === p.id && (
                  <div
                    className="absolute z-30 w-52 p-4 text-left pointer-events-none"
                    style={{
                      background: "rgba(0,0,0,0.95)",
                      border: "1px solid rgba(37,99,235,0.35)",
                      bottom: "calc(100% + 14px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="text-[10px] text-nissan tracking-[0.3em] uppercase mb-1" style={{ fontFamily: "var(--font-label)" }}>
                      {p.id}
                    </div>
                    <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-label)" }}>
                      {p.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">{p.desc}</div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {POINTS.map((p, i) => (
            <div
              key={p.id}
              className={`stagger reveal ${visible ? "visible" : ""} glass p-5 cursor-pointer`}
              style={{ "--i": i + 2 } as React.CSSProperties}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-nissan mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {p.id}
              </div>
              <h3 className="text-sm font-bold text-white mb-2" style={{ fontFamily: "var(--font-label)" }}>
                {p.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
