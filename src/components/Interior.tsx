import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const FEATURES = [
  {
    title: "Multi-Function Display",
    desc: "The iconic MFD shows real-time boost pressure, oil temperature, G-forces, and turbo performance — a cockpit built for drivers.",
  },
  {
    title: "Recaro Bucket Seats",
    desc: "High-bolstered Recaro sports seats provide exceptional lateral support during aggressive cornering with lasting comfort.",
  },
  {
    title: "Sparco Steering Wheel",
    desc: "A leather-wrapped Sparco wheel with short hub adapter keeps the driver connected, providing precise steering feel and feedback.",
  },
  {
    title: "Digital Instrument Cluster",
    desc: "A 9,000 RPM tachometer at center, backed by comprehensive gauges monitoring all critical engine and drivetrain systems.",
  },
];

export default function Interior() {
  const { ref, visible } = useReveal(0.08);
  const [active, setActive] = useState(0);

  return (
    <section id="interior" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "var(--color-surface-alt)" }}>
      <div className="divider-center absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text side */}
          <div className={`reveal-left ${visible ? "visible" : ""}`}>
            <div className="section-label mb-5">Cockpit</div>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Driver-<br /><span className="text-nissan">Focused</span><br />Interior
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm md:text-[15px]">
              Every element inside the R34 serves the driver. Stripped of excess, the cabin is a
              purposeful command center where information, control, and connectivity converge
              into a single, seamless experience.
            </p>

            {/* Accordion */}
            <div className="space-y-2">
              {FEATURES.map((f, i) => {
                const isOpen = active === i;
                return (
                  <button
                    key={f.title}
                    className="w-full text-left p-4 border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "rgba(37,99,235,0.45)" : "rgba(255,255,255,0.05)",
                      background: isOpen ? "rgba(37,99,235,0.06)" : "rgba(255,255,255,0.02)",
                    }}
                    onClick={() => setActive(i)}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-sm font-bold tracking-wider uppercase transition-colors"
                        style={{ fontFamily: "var(--font-label)", color: isOpen ? "#fff" : "#666" }}
                      >
                        {f.title}
                      </h3>
                      <span className="text-nissan text-sm">{isOpen ? "−" : "+"}</span>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-400"
                      style={{ maxHeight: isOpen ? "120px" : "0", opacity: isOpen ? 1 : 0, marginTop: isOpen ? 10 : 0 }}
                    >
                      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image side */}
          <div className={`reveal-right ${visible ? "visible" : ""}`}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
              <img src="/images/r34-interior.png" alt="GT-R R34 Interior" className="img-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.35))" }} />
              <div className="accent-corners" />
            </div>

            {/* Info card */}
            <div
              className="mt-6 lg:absolute lg:mt-0 p-5 border border-border-accent max-w-xs"
              style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", bottom: 0, left: 0 }}
            >
              <div className="text-[10px] text-gray-600 tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "var(--font-label)" }}>
                Currently Viewing
              </div>
              <div className="text-base font-bold text-white" style={{ fontFamily: "var(--font-label)" }}>
                {FEATURES[active].title}
              </div>
              <div className="divider-h mt-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
