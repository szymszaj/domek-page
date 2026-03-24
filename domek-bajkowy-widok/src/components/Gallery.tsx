import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type TabKey = "wszystko" | "widoki" | "otoczenie" | "wnetrze";

interface GalleryImage {
  src: string;
  alt: string;
  tab: Exclude<TabKey, "wszystko">;
}

const widoki: GalleryImage[] = Array.from({ length: 15 }, (_, i) => ({
  src: `https://picsum.photos/seed/widok-${String(i + 1).padStart(2, "0")}/800/600`,
  alt: `Widok ${i + 1}`,
  tab: "widoki",
}));

const otoczenie: GalleryImage[] = Array.from({ length: 18 }, (_, i) => ({
  src: `https://picsum.photos/seed/otoczenie-${String(i + 1).padStart(2, "0")}/800/600`,
  alt: `Otoczenie ${i + 1}`,
  tab: "otoczenie",
}));

const wnetrze: GalleryImage[] = Array.from({ length: 24 }, (_, i) => ({
  src: `https://picsum.photos/seed/wnetrze-${String(i + 1).padStart(2, "0")}/800/600`,
  alt: `Wnętrze ${i + 1}`,
  tab: "wnetrze",
}));

const allImages: GalleryImage[] = [...widoki, ...otoczenie, ...wnetrze];

const tabs: { key: TabKey; label: string; count?: number }[] = [
  { key: "wszystko", label: "Wszystko" },
  { key: "widoki", label: "Widoki", count: widoki.length },
  { key: "otoczenie", label: "Otoczenie", count: otoczenie.length },
  { key: "wnetrze", label: "Wnętrze", count: wnetrze.length },
];

export default function Gallery() {
  const ref = useReveal();
  const [activeTab, setActiveTab] = useState<TabKey>("wszystko");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered =
    activeTab === "wszystko"
      ? allImages
      : allImages.filter((img) => img.tab === activeTab);

  const openLightbox = (i: number) => {
    setLightboxIdx(i);
    document.body.classList.add("lightbox-open");
  };
  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
    document.body.classList.remove("lightbox-open");
  }, []);
  const prev = useCallback(
    () =>
      setLightboxIdx((i) =>
        i !== null ? (i - 1 + filtered.length) % filtered.length : null,
      ),
    [filtered.length],
  );
  const next = useCallback(
    () =>
      setLightboxIdx((i) => (i !== null ? (i + 1) % filtered.length : null)),
    [filtered.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, closeLightbox, prev, next]);

  return (
    <section
      id="galeria"
      className="py-24 lg:py-32 bg-cream overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="reveal text-forest-500 font-semibold text-sm tracking-widest uppercase">
            Zajrzyj do środka
          </span>
          <h2
            className="reveal section-title mt-2"
            style={{ animationDelay: "100ms" }}
          >
            Galeria zdjęć
          </h2>
          <p
            className="reveal section-subtitle mt-3 max-w-xl mx-auto"
            style={{ animationDelay: "180ms" }}
          >
            Odkryj bajkowe widoki, piękne otoczenie i komfortowe wnętrza naszego
            domku.
          </p>
        </div>

        <div
          className="reveal flex flex-wrap justify-center gap-2 mb-10"
          style={{ animationDelay: "260ms" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab.key
                  ? "bg-forest-700 text-white border-forest-700 shadow-lg"
                  : "bg-white text-forest-600 border-forest-200 hover:border-forest-400 hover:text-forest-800"
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`ml-2 text-xs font-normal ${activeTab === tab.key ? "text-forest-200" : "text-forest-400"}`}
                >
                  ({tab.count})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.slice(0, 32).map((img, i) => (
            <div
              key={img.src}
              className="reveal break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl shadow-md"
              style={{ animationDelay: `${(i % 16) * 40}ms` }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-xl" />
              </div>
            </div>
          ))}
        </div>

        {filtered.length > 32 && (
          <div className="text-center mt-8 text-forest-500 text-sm">
            Wyświetlono 32 z {filtered.length} zdjęć
          </div>
        )}
      </div>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-3 md:left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <img
            src={filtered[lightboxIdx].src}
            alt={filtered[lightboxIdx].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-3 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/40 rounded-full px-4 py-1.5">
            {lightboxIdx + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}
