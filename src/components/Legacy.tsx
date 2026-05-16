import { useReveal } from "../hooks/useReveal";

const STATS = [
  { value: "11,578", label: "Units Produced" },
  { value: "29", label: "Consecutive Wins" },
  { value: "3", label: "GT-R Generations" },
  { value: "∞", label: "Cultural Legacy" },
];

const TIMELINE = [
  { year: "1969", title: "The First GT-R", desc: "The original Skyline GT-R (PGC10) marks the dawn of an era, sparking a legendary racing heritage that shaped Japanese automotive history." },
  { year: "1989", title: "The Godzilla Emerges", desc: "Returning to the track, the R32 GT-R proved unstoppable in Group A racing with 29 consecutive victories, earning its fearsome 'Godzilla' nickname." },
  { year: "1993", title: "Conquering the Nürburgring", desc: "The R33 evolution pushed boundaries further, breaking the 8-minute barrier at the Nürburgring Nordschleife with a blistering 7:59 lap." },
  { year: "1999", title: "The Ultimate Evolution", desc: "The R34 arrived as the most advanced GT-R yet, combining striking aesthetics, a sophisticated MFD, and the legendary RB26DETT powerplant." },
  { year: "2002", title: "A Grand Finale", desc: "After building exactly 11,578 units, Nissan concluded the R34's production, leaving behind an unparalleled legacy in the sports car world." },
  { year: "2003", title: "A Pop Culture Phenomenon", desc: "The R34 achieved immortal status on the silver screen, famously driven by Brian O'Conner in the 'Fast & Furious' cinematic universe." },
  { year: "Today", title: "An Enduring Masterpiece", desc: "Decades later, the R34's value and prestige continue to soar, revered globally as a pinnacle of JDM engineering and automotive art." },
];

export default function Legacy() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section id="legacy" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "var(--color-surface)" }}>
      <div className="divider-center absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} mb-16`}>
          <div className="section-label mb-5">History</div>
          <h2 className="section-title text-4xl md:text-6xl lg:text-7xl">
            The <span className="text-nissan">Legacy</span>
          </h2>
        </div>

        {/* Stats */}
        <div className={`reveal ${visible ? "visible" : ""} grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-nissan/10 mb-24`}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`stagger reveal ${visible ? "visible" : ""} bg-black p-7 lg:p-8 text-center`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="text-4xl lg:text-5xl font-black text-nissan mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {s.value}
              </div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-gray-600" style={{ fontFamily: "var(--font-label)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block bg-gradient-to-b from-nissan via-nissan/20 to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {TIMELINE.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={t.year}
                  className={`stagger reveal ${visible ? "visible" : ""} relative flex flex-col md:flex-row items-start md:items-center gap-5 ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                  style={{ "--i": i + 2 } as React.CSSProperties}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right md:pr-14" : "md:text-left md:pl-14"}`}>
                    <span
                      className="inline-block px-3 py-1 mb-3 text-[10px] tracking-[0.3em] uppercase text-nissan border border-border-accent"
                      style={{ fontFamily: "var(--font-heading)", background: "rgba(37,99,235,0.06)" }}
                    >
                      {t.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-label)", letterSpacing: "0.04em" }}>
                      {t.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">{t.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-nissan shadow-[0_0_12px_rgba(37,99,235,0.5)]">
                    <span className="m-auto w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className={`reveal ${visible ? "visible" : ""} mt-24 text-center`}>
          <div className="divider-center max-w-xs mx-auto mb-8" />
          <blockquote
            className="text-xl md:text-3xl font-black uppercase max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "rgba(255,255,255,0.08)" }}
          >
            "Not just a car.
            <br />
            <span style={{ color: "rgba(37,99,235,0.35)" }}>A phenomenon."</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
