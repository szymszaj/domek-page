import { useState, useEffect } from "react";
import { Menu, X, Phone, TreePine } from "lucide-react";
import { navLinks } from "@/data/navLinks";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-forest-950/95 backdrop-blur-md shadow-2xl py-3"
            : "bg-gradient-to-b from-black/50 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 bg-forest-500 rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
              <TreePine className="w-5 h-5 text-white" />
            </div>
            <div className="leading-none">
              <div className="text-white font-display font-bold text-base leading-tight">
                Domek Bajkowy
              </div>
              <div className="text-gold text-xs font-medium tracking-widest uppercase">
                Widok
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-white/90 hover:text-gold font-medium text-sm tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full pb-0.5"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:000000000"
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-forest-950 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              000 000 000
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-forest-950/95 backdrop-blur-lg"
          onClick={() => setOpen(false)}
        />
        <nav className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`text-white font-display font-semibold text-3xl hover:text-gold transition-all duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:000000000"
            className="mt-4 flex items-center gap-2 bg-gold text-forest-950 font-bold text-lg px-8 py-4 rounded-full"
          >
            <Phone className="w-5 h-5" />
            000 000 000
          </a>
        </nav>
      </div>
    </>
  );
}
