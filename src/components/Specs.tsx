import { useReveal } from "../hooks/useReveal";

const SPECS = [
  { label: "Displacement", value: "2,568 cc", note: "" },
  { label: "Max Power", value: "280", note: "PS @ 6,800 rpm" },
  { label: "Max Torque", value: "392", note: "N·m @ 4,400 rpm" },
  { label: "0–100 km/h", value: "3.9s", note: "" },
  { label: "Top Speed", value: "300+", note: "km/h" },
  { label: "Drivetrain", value: "ATTESA", note: "E-TS Pro AWD" },
  { label: "Transmission", value: "6-Speed", note: "Close-Ratio MT" },
  { label: "Curb Weight", value: "1,560", note: "kg" },
];

export default function Specs() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="specs" ref={ref} className="relative py-28 lg:py-36 bg-black overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} mb-16`}>
          <div className="section-label mb-5">Technical Data</div>
          <h2 className="section-title text-4xl md:text-6xl lg:text-7xl">Specifications</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-nissan/10">
          {SPECS.map((s, i) => (
            <div
              key={s.label}
              className={`stagger reveal ${visible ? "visible" : ""} bg-black p-7 lg:p-8 group`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div
                className="text-[11px] tracking-[0.3em] uppercase text-gray-600 group-hover:text-nissan transition-colors mb-3"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {s.label}
              </div>
              <div className="text-3xl lg:text-4xl font-black mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {s.value}
              </div>
              {s.note && <div className="text-xs text-gray-600 tracking-wide">{s.note}</div>}
              <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 bg-nissan" />
            </div>
          ))}
        </div>

        <p className={`reveal ${visible ? "visible" : ""} mt-6 text-[11px] text-gray-700 tracking-wide`} style={{ fontFamily: "var(--font-label)" }}>
          * Specifications for Nissan Skyline GT-R V·Spec II (BNR34) — 1999–2002.
        </p>
      </div>
    </section>
  );
}
