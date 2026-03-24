import { useState, useEffect } from "react";
import { ChevronDown, Phone, CalendarCheck } from "lucide-react";

const slides = [
  {
    img: "https://picsum.photos/seed/tatry-hero/1920/1080",
    label: "Bajkowy widok na Tatry",
  },
  {
    img: "https://picsum.photos/seed/gorska-przyroda/1920/1080",
    label: "Prawdziwa góralska przyroda",
  },
  {
    img: "https://picsum.photos/seed/domek-wnetrze/1920/1080",
    label: "Komfortowe wnętrza dla 8 osób",
  },
  {
    img: "https://picsum.photos/seed/zalew-czorsztyn/1920/1080",
    label: "Nad Zalewem Czorsztyńskim",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
      }, 600);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
    }, 400);
  };

  const scrollToAbout = () => {
    const el = document.querySelector("#o-nas");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current && !fading ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.label}
            className="w-full h-full object-cover animate-ken-burns"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/40 to-forest-950/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/50 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 backdrop-blur-sm text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Maniowy · Zalew Czorsztynski
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
            Domek Bajkowy
            <br />
            <span className="text-gold italic">Widok</span>
          </h1>

          <p className="text-white/85 text-xl md:text-2xl font-light leading-relaxed mb-4 max-w-2xl">
            Trzy sypialnie, dwie łazienki i&nbsp;salon z&nbsp;kuchnią — dla
            nawet&nbsp;8&nbsp;osób. Niesamowity widok na Tatry, Pieniny
            i&nbsp;gorczańskie lasy.
          </p>

          <p className="text-gold/90 text-sm font-medium italic mb-10 opacity-80">
            {slides[current].label}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="tel:000000000" className="btn-gold text-base">
              <Phone className="w-5 h-5" />
              Zadzwoń: 501&nbsp;875&nbsp;160
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#oferta");
                if (el) {
                  const t =
                    el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top: t, behavior: "smooth" });
                }
              }}
              className="btn-outline border-white/60 text-white hover:bg-white hover:text-forest-800 text-base"
            >
              <CalendarCheck className="w-5 h-5" />
              Zobacz ofertę
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-8 z-20 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 rounded-full transition-all duration-300 ${
              i === current
                ? "h-8 bg-gold"
                : "h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors group"
        aria-label="Przewiń w dół"
      >
        <span className="text-xs tracking-widest uppercase font-medium">
          Odkryj
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
