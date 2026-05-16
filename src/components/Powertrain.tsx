import { useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const FEATURES = [
  {
    icon: "⚙",
    title: "RB26DETT Engine",
    desc: "A 2.6L inline-6 twin-turbo, hand-assembled at Nissan's Omori Factory. Renowned for extreme tuning headroom and bulletproof reliability.",
  },
  {
    icon: "◈",
    title: "ATTESA E-TS Pro AWD",
    desc: "Electronically controlled AWD with G-sensor dynamically allocates up to 100% torque to rear wheels for surgical precision in all conditions.",
  },
  {
    icon: "⚡",
    title: "Active LSD",
    desc: "Multi-plate active rear limited-slip differential maximizes traction under acceleration while maintaining neutral handling balance through corners.",
  },
  {
    icon: "◎",
    title: "SUPER-HICAS",
    desc: "Four-wheel active steering adjusts rear wheel angle in real-time, enhancing cornering stability, response, and high-speed confidence.",
  },
];

export default function Powertrain() {
  const { ref, visible } = useReveal(0.08);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const toggleMute1 = () => {
    if (videoRef1.current) {
      videoRef1.current.muted = !videoRef1.current.muted;
      setIsMuted1(videoRef1.current.muted);
    }
  };
  
  const toggleMute2 = () => {
    if (videoRef2.current) {
      videoRef2.current.muted = !videoRef2.current.muted;
      setIsMuted2(videoRef2.current.muted);
    }
  };

  return (
    <section id="engine" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "var(--color-surface-alt)" }}>
      <div className="divider-center absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image side */}
          <div className={`reveal-left ${visible ? "visible" : ""} flex flex-col gap-6`}>
            {/* Main Video */}
            <div className="relative overflow-hidden group w-full" style={{ aspectRatio: "1 / 1" }}>
              <video
                ref={videoRef1}
                autoPlay
                loop
                muted={isMuted1}
                playsInline
                poster="/images/r34-engine.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/videos/r34-drive.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.15), transparent 60%)" }} />
              <div className="accent-corners z-10" />
              
              <button 
                onClick={toggleMute1}
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:bg-black/80 transition-all z-20 opacity-0 group-hover:opacity-100"
              >
                {isMuted1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                )}
              </button>
            </div>

            {/* Second Video */}
            <div className="relative overflow-hidden group w-full" style={{ aspectRatio: "1 / 1" }}>
              <video
                ref={videoRef2}
                autoPlay
                loop
                muted={isMuted2}
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/r34-backfire.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.15), transparent 60%)" }} />
              <div className="accent-corners z-10" />
              
              <button 
                onClick={toggleMute2}
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:bg-black/80 transition-all z-20 opacity-0 group-hover:opacity-100"
              >
                {isMuted2 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                )}
              </button>
            </div>
          </div>

          {/* Text side */}
          <div className={`reveal-right ${visible ? "visible" : ""}`}>
            <div className="section-label mb-5">Powertrain</div>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mb-6">
              The Heart
              <br />
              <span className="text-nissan">of a Legend</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm md:text-[15px]">
              The RB26DETT is one of the most celebrated engines in motorsport history.
              Originally rated at 280 PS for road use, this engine reliably produces
              600–1000+ PS with modifications — a testament to its extraordinary engineering.
            </p>

            <div className="space-y-3">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  className={`stagger reveal ${visible ? "visible" : ""} glass flex gap-4 p-4`}
                  style={{ "--i": i + 2 } as React.CSSProperties}
                >
                  <div className="text-xl mt-0.5 opacity-70 shrink-0 w-6 text-center">{f.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider uppercase mb-1 text-white" style={{ fontFamily: "var(--font-label)" }}>
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
