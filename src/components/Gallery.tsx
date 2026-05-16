import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { src: "/images/r34.png", label: "Front Three-Quarter", cls: "col-span-2 md:col-span-3 aspect-video" },
  { src: "/images/r34-rear.png", label: "Rear View", cls: "col-span-1 row-span-1 aspect-square" },
  { src: "/images/r34-engine.jpg", label: "RB26DETT Engine", cls: "col-span-1 row-span-1 aspect-square" },
  { src: "/images/r34-side.png", label: "Side Profile", cls: "col-span-1 row-span-1 aspect-square" },
  { src: "/images/r34-front.png", label: "Front View", cls: "col-span-1 row-span-1 aspect-square" },
  { src: "/images/r34-interior.png", label: "Driver Cockpit", cls: "col-span-1 row-span-1 aspect-square" },
];

export default function Gallery() {
  const { ref, visible } = useReveal(0.05);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" ref={ref} className="relative py-28 lg:py-36 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} text-center mb-14`}>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="divider-h w-10" />
            <span className="section-label">Visual Journey</span>
            <div className="divider-h w-10" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="section-title text-4xl md:text-6xl lg:text-7xl">Gallery</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`stagger reveal-scale ${visible ? "visible" : ""} ${item.cls} relative overflow-hidden cursor-pointer group`}
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="img-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }}
              >
                <div className="divider-h w-6 mb-2" />
                <span className="text-white text-[11px] tracking-[0.25em] uppercase font-semibold" style={{ fontFamily: "var(--font-label)" }}>
                  {item.label}
                </span>
              </div>
              {/* Zoom badge */}
              <div
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-nissan"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox}
              alt="Gallery"
              className="w-full h-auto max-h-[85vh] object-contain border border-border-accent"
            />
            <button
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-white bg-nissan hover:bg-nissan-light transition-colors"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
