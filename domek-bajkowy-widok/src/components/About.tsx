import { useReveal } from "@/hooks/useReveal";
import { Users, Home, Bath, Eye } from "lucide-react";

const stats = [
  { icon: Home, value: "90 m²", label: "Powierzchnia" },
  { icon: Users, value: "8", label: "Maksymalnie osób" },
  { icon: Bath, value: "3+2", label: "Sypialnie + łazienki" },
  { icon: Eye, value: "360°", label: "Widoki na góry" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="o-nas"
      className="py-24 lg:py-32 bg-cream overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative grid grid-cols-2 gap-4 h-[520px]">
            <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://domekbajkowywidok.pl/images/frontpage/about.jpg"
                alt="Domek Bajkowy Widok"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://domekbajkowywidok.pl/images/gallery/dbw-wnetrze/wnetrze02.jpg"
                alt="Wnętrze domku"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://domekbajkowywidok.pl/images/gallery/dbw-widoki/dbj-widok-03.jpg"
                alt="Widok z domku"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-forest-700 text-white rounded-2xl p-5 shadow-2xl">
              <div className="font-display text-3xl font-bold">2+</div>
              <div className="text-forest-200 text-xs font-medium mt-0.5">
                lata działalności
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="reveal" style={{ animationDelay: "100ms" }}>
              <span className="text-forest-500 font-semibold text-sm tracking-widest uppercase">
                O naszym domku
              </span>
              <h2 className="section-title mt-2">
                Komfortowe wnętrze
                <br />
                <span className="text-forest-500 italic">
                  nawet dla 8 osób!
                </span>
              </h2>
            </div>

            <p
              className="reveal section-subtitle"
              style={{ animationDelay: "200ms" }}
            >
              Domek Bajkowy Widok to miejsce, które możesz wynająć na wyłączność
              i rozkoszować się cudownym wypoczynkiem w{" "}
              <strong className="text-forest-700">Maniowach</strong>, w
              sąsiedztwie Zalewu Czorsztyńskiego.
            </p>

            <p
              className="reveal text-forest-600 leading-relaxed"
              style={{ animationDelay: "280ms" }}
            >
              Oferujemy wypoczynek w domku o powierzchni{" "}
              <strong className="text-forest-800">90 m²</strong>, z 3 odrębnymi
              sypialniami, 2 łazienkami z prysznicami, cudownym salonem
              połączonym z kuchnią, z którego można wyjść na taras i podziwiać
              prawdziwie Bajkowy Widok na{" "}
              <strong className="text-forest-800">
                Tatry, Pieniny i gorczańskie lasy
              </strong>
              .
            </p>

            <p
              className="reveal text-forest-600 leading-relaxed"
              style={{ animationDelay: "340ms" }}
            >
              W salonie znajdziecie duży telewizor, rozkładaną kanapę, stół
              jadalniany oraz w pełni wyposażoną kuchnię z płytą indukcyjną,
              mikrofalą, piekarnikiem, zmywarką i lodówką. Na wyposażeniu:
              pralka, suszarka, żelazko i suszarka do włosów.
            </p>

            <div
              className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4"
              style={{ animationDelay: "420ms" }}
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="text-center bg-white rounded-2xl p-4 shadow-sm border border-forest-100 hover:border-forest-300 transition-colors"
                >
                  <Icon className="w-6 h-6 text-forest-500 mx-auto mb-2" />
                  <div className="font-display font-bold text-2xl text-forest-800">
                    {value}
                  </div>
                  <div className="text-forest-500 text-xs mt-0.5 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-2" style={{ animationDelay: "500ms" }}>
              <a href="tel:000000000" className="btn-primary">
                Zarezerwuj pobyt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
