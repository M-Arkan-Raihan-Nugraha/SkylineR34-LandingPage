const LINKS: Record<string, string[]> = {
  Model: ["Overview", "Specifications", "Engine", "Design", "Interior"],
  Heritage: ["GT-R History", "Racing Legacy", "R32 Godzilla", "R33 Edition", "R34 Pinnacle"],
  Explore: ["Gallery", "Media", "Community", "Owners Club", "Events"],
};

const SOCIALS = ["X", "IG", "YT", "FB"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      <div className="divider-center absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#model" className="flex items-center gap-3 mb-6">
              <img
                src="/images/nissan-logo.png"
                alt="Nissan"
                className="h-12 w-auto object-contain brightness-200 contrast-125"
              />
              <div>
                <div className="text-[10px] tracking-[0.35em] uppercase text-nissan" style={{ fontFamily: "var(--font-label)" }}>
                  Skyline GT-R R34
                </div>
              </div>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-8">
              The Nissan Skyline GT-R R34 — a timeless icon of performance, precision, and passion.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 flex items-center justify-center text-[10px] font-bold text-gray-600 border border-white/8 hover:border-nissan/40 hover:text-white transition-all duration-200"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-[11px] tracking-[0.35em] uppercase font-bold text-nissan mb-5" style={{ fontFamily: "var(--font-label)" }}>
                {cat}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-white transition-colors duration-200 tracking-wide"
                      style={{ fontFamily: "var(--font-label)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-center my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-700 tracking-wider" style={{ fontFamily: "var(--font-label)" }}>
            © {year} Nissan Skyline GT-R R34 Fan Tribute. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-[11px] text-gray-700 hover:text-gray-500 transition-colors tracking-wider" style={{ fontFamily: "var(--font-label)" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none" style={{ height: "100px" }}>
        <span
          className="font-black uppercase"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            color: "rgba(255,255,255,0.012)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            transform: "translateY(25%)",
          }}
        >
          GT-R R34
        </span>
      </div>
    </footer>
  );
}
