import items from "@/data/items";
import { useReveal } from "@/hooks/useReveal";

export default function Amenities() {
  const ref = useReveal();

  return (
    <section className="py-20 bg-forest-950 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="reveal text-gold font-semibold text-sm tracking-widest uppercase">
            Co znajdziesz u nas
          </span>
          <h2
            className="reveal section-title text-white mt-2"
            style={{ animationDelay: "100ms" }}
          >
            Wszystko, czego potrzebujesz
          </h2>
          <p
            className="reveal text-forest-200 text-lg mt-3 max-w-xl mx-auto"
            style={{ animationDelay: "180ms" }}
          >
            Domek urządzony z myślą o komforcie całej rodziny — od aktywnego
            wypoczynku po leniwą relaksację.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="reveal group flex flex-col items-center gap-3 bg-forest-900/60 hover:bg-forest-700/60 border border-forest-700/40 hover:border-gold/40 rounded-2xl p-5 text-center transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 bg-forest-800 group-hover:bg-gold/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                <Icon className="w-6 h-6 text-forest-300 group-hover:text-gold transition-colors duration-300" />
              </div>
              <span className="text-forest-200 group-hover:text-white text-sm font-medium leading-tight transition-colors duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
