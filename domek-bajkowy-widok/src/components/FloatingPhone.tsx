import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function FloatingPhone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="tel:000000000"
      aria-label="Zadzwoń"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-forest-700 hover:bg-gold hover:text-forest-950 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute inset-0 rounded-full border-2 border-forest-500 animate-ping opacity-40" />
    </a>
  );
}
