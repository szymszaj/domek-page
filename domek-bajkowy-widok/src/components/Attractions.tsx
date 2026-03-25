import groups from "@/data/attraction";
import { useReveal } from "@/hooks/useReveal";
import { MapPin } from "lucide-react";

interface AttractionItem {
  name: string;
  distance: string;
}

export interface AttractionGroup {
  icon: React.ElementType;
  title: string;
  color: string;
  bg: string;
  items: AttractionItem[];
}

export default function Attractions() {
  const ref = useReveal();

  return (
    <section
      id="atrakcje"
      className="py-24 lg:py-32 bg-forest-950 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="reveal text-gold font-semibold text-sm tracking-widest uppercase">
              Lokalizacja
            </span>
            <h2
              className="reveal section-title text-white mt-2"
              style={{ animationDelay: "100ms" }}
            >
              Blisko do wszystkiego,
              <br />
              <span className="text-gold italic">z dala od zgiełku</span>
            </h2>
            <p
              className="reveal text-forest-200 text-lg mt-4 mb-8 leading-relaxed"
              style={{ animationDelay: "180ms" }}
            >
              Domek położony jest w Maniowach nad Zalewem Czorsztyńskim, gdzie
              Podhale łączy się z Pieninami. To miejsce dla miłośników aktywnego
              wypoczynku i spokojnego relaksu.
            </p>

            <div className="reveal group" style={{ animationDelay: "260ms" }}>
              <a
                href="https://maps.google.com/?q=ul.+Przyk%C5%82adowa+00+Miejscowosc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gold hover:text-white transition-colors duration-200"
              >
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium underline underline-offset-4">
                  ul. Przykładowa 00, 00-000 Miejscowość
                </span>
              </a>
            </div>

            <div
              className="reveal mt-8 rounded-2xl overflow-hidden shadow-2xl border border-forest-700/40 aspect-video"
              style={{ animationDelay: "340ms" }}
            >
              <iframe
                title="Mapa Domek Bajkowy Widok"
                src="https://maps.google.com/maps?q=ul.+Przyk%C5%82adowa+00+Miejscowosc&output=embed&z=14"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {groups.map(({ icon: Icon, title, color, bg, items }, gi) => (
              <div
                key={title}
                className={`reveal rounded-2xl border p-6 ${bg} backdrop-blur-sm`}
                style={{ animationDelay: `${gi * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${color}`} />
                  <h3 className="font-display font-bold text-lg text-forest-900">
                    {title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {items.map(({ name, distance }) => (
                    <div
                      key={name}
                      className="flex justify-between items-center bg-white/60 rounded-xl px-3 py-2"
                    >
                      <span className="text-forest-700 text-sm font-medium">
                        {name}
                      </span>
                      <span className={`text-xs font-bold ${color}`}>
                        {distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
