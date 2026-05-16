import { useEffect, useState } from "react";

const STATS = [
  { value: "3.9s", label: "0–100 km/h" },
  { value: "300+", label: "Top Speed" },
  { value: "RB26DETT", label: "Engine" },
  { value: "280 PS", label: "Power" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="model" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* BG video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/r34.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/r34-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradients */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.3) 35%, transparent 65%)" }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "linear-gradient(to right, #2563eb, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto px-6 lg:px-10 pt-[140px] pb-20 lg:pb-24">
        <div
          className="transition-all duration-[1200ms] ease-out"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(48px)" }}
        >
          {/* Label */}
          <div className="section-label mb-6">
            <span>1999 — 2002 · BNR34</span>
          </div>

          {/* Title */}
          <h1
            className="section-title text-white mb-5"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7.5rem)", textShadow: "0 0 80px rgba(37,99,235,0.3)" }}
          >
            Skyline
            <br />
            <span className="text-nissan">GT-R</span> R34
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-lg mb-10 text-[15px] md:text-base leading-relaxed">
            The pinnacle of Japanese performance engineering. A legend born on the racetrack,
            destined for immortality on every road in the world.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.value}
                </div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-gray-500" style={{ fontFamily: "var(--font-label)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href="#specs" className="btn-primary">Discover More</a>
            <a href="#gallery" className="btn-outline">View Gallery</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <span
          className="text-[10px] tracking-[0.35em] uppercase text-gray-600"
          style={{ writingMode: "vertical-rl", fontFamily: "var(--font-label)" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
