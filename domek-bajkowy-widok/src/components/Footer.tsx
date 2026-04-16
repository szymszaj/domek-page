import { navLinks } from "@/data/navLinks";
import {
  Phone,
  Mail,
  MapPin,
  TreePine,
  Facebook,
  Instagram,
} from "lucide-react";

const handleScroll = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-200">
      <div className="bg-forest-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Gotowy na Bajkowy Widok?
            </h3>
            <p className="text-forest-200 mt-1">
              Zarezerwuj swój pobyt już dziś!
            </p>
          </div>
          <div className="flex gap-4">
            <a href="tel:000000000" className="btn-gold">
              <Phone className="w-4 h-4" />
              Zadzwoń teraz
            </a>
            <a
              href="mailto:kontakt@example.com"
              className="btn-outline border-white/40 text-white hover:bg-white hover:text-forest-800"
            >
              <Mail className="w-4 h-4" />
              Napisz do nas
            </a>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-forest-600 rounded-xl flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-display font-bold text-lg leading-tight">
                    Domek Bajkowy Widok
                  </div>
                  <div className="text-gold text-xs tracking-widest uppercase font-medium">
                    Maniowy · Czorsztyn
                  </div>
                </div>
              </div>
              <p className="text-forest-300 leading-relaxed max-w-sm">
                Komfortowy domek na wyłączność w Maniowach nad Zalewem
                Czorsztyńskim. Bajkowy widok na Tatry, Pieniny i gorczańskie
                lasy dla 2–8 osób.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-forest-800 hover:bg-forest-600 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5 text-forest-300" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-forest-800 hover:bg-forest-600 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-forest-300" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
                Nawigacja
              </h4>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleScroll(link.href)}
                      className="text-forest-300 hover:text-gold transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
                Kontakt
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-forest-300">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:000000000"
                    className="hover:text-gold transition-colors"
                  >
                    +48 000 000 000
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:kontakt@example.com"
                    className="hover:text-gold transition-colors break-all"
                  >
                    kontakt@example.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span>
                    ul. Przykładowa 00
                    <br />
                    00-000 Miejscowość
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-forest-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-forest-500">
          <span>
            © {new Date().getFullYear()} Domek Bajkowy Widok — Maniowy,
            Małopolska
          </span>
          <span>Wszelkie prawa zastrzeżone</span>
        </div>
      </div>
    </footer>
  );
}
