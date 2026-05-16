import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specs from "./components/Specs";
import Powertrain from "./components/Powertrain";
import Design from "./components/Design";
import Interior from "./components/Interior";
import Gallery from "./components/Gallery";
import Legacy from "./components/Legacy";
import Footer from "./components/Footer";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar scrolled={scrollY > 60} />
      <Hero />
      <Specs />
      <Powertrain />
      <Design />
      <Interior />
      <Gallery />
      <Legacy />
      <Footer />
    </div>
  );
}
