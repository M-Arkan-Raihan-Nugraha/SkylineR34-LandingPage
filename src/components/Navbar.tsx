import { useState } from "react";

const NAV_ITEMS = ["Model", "Specs", "Engine", "Design", "Gallery", "Legacy"];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(37,99,235,0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-[72px]">
        {/* Logo */}
        <a href="#model" className="flex items-center gap-3 group">
          <img
            src="/images/nissan-logo.png"
            alt="Nissan"
            className="h-10 w-auto object-contain brightness-200 contrast-125"
          />
          <div className="hidden sm:block">
            <div className="text-[10px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-label)", color: "#2563eb" }}>
              Skyline GT-R R34
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-[11px] tracking-[0.22em] uppercase text-gray-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-nissan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#specs"
            className="hidden lg:block px-5 py-2 text-[11px] tracking-[0.2em] uppercase font-semibold border border-nissan text-nissan hover:bg-nissan hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Configure
          </a>

          <button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-px bg-white transition-all duration-300"
              style={{ transform: open ? "rotate(45deg) translateY(3px)" : "none" }}
            />
            <span
              className="block w-5 h-px bg-white transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-white transition-all duration-300"
              style={{ transform: open ? "rotate(-45deg) translateY(-3px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? "400px" : "0", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-6 pt-2 border-t border-white/5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-sm tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-label)" }}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
