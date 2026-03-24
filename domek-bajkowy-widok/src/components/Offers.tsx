import { useState, useRef, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  CalendarDays,
  Users,
  Moon,
  X,
  Send,
  CheckCircle,
  Phone,
} from "lucide-react";
import offers from "@/data/offers";

interface PriceItem {
  name: string;
  price: string;
  period: string;
  nights: string;
}

export interface OfferCard {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  accentColor: string;
  headerBg: string;
  items: PriceItem[];
}

type ModalStatus = "idle" | "sending" | "success";

function BookingModal({
  offer,
  onClose,
}: {
  offer: OfferCard;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<ModalStatus>("idle");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: replace with real EmailJS / backend call
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-forest-950/75 backdrop-blur-sm" />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-up">
        <div
          className={`relative h-28 bg-gradient-to-br ${offer.accentColor} overflow-hidden`}
        >
          <img
            src={offer.img}
            alt={offer.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative p-6 flex items-end justify-between h-full">
            <div>
              <div className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-0.5">
                Zapytaj o termin
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {offer.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="w-14 h-14 text-forest-500" />
              <h4 className="font-display text-xl font-bold text-forest-800">
                Wiadomość wysłana!
              </h4>
              <p className="text-forest-600 text-sm">
                Odpowiemy najszybciej jak to możliwe. Możesz też zadzwonić:{" "}
                <a
                  href="tel:000000000"
                  className="font-bold text-forest-700 hover:underline"
                >
                  000 000 000
                </a>
              </p>
              <button
                onClick={onClose}
                className="mt-2 btn-primary text-sm px-6 py-2.5"
              >
                Zamknij
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-700 mb-1">
                    Imię i nazwisko *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jan Kowalski"
                    className="w-full border border-forest-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 rounded-xl px-3 py-2.5 text-sm text-forest-900 placeholder-forest-300 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-forest-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder="+48 500 000 000"
                    className="w-full border border-forest-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 rounded-xl px-3 py-2.5 text-sm text-forest-900 placeholder-forest-300 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-forest-700 mb-1">
                  Email *
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="jan@example.com"
                  className="w-full border border-forest-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 rounded-xl px-3 py-2.5 text-sm text-forest-900 placeholder-forest-300 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-forest-700 mb-1">
                  Wiadomość *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder={`Chciałbym zarezerwować "${offer.title}" dla ... osób, od ... do ...`}
                  className="w-full border border-forest-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-100 rounded-xl px-3 py-2.5 text-sm text-forest-900 placeholder-forest-300 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="modal-consent"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-4 h-4 accent-forest-700 flex-shrink-0"
                />
                <label
                  htmlFor="modal-consent"
                  className="text-xs text-forest-500 leading-relaxed"
                >
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                  odpowiedzi na zapytanie. *
                </label>
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border border-forest-200 text-forest-600 hover:bg-forest-50 font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex-1 flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Wyślij zapytanie
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 pt-1 border-t border-forest-100">
                <span className="text-xs text-forest-400">
                  Albo zadzwoń bezpośrednio:
                </span>
                <a
                  href="tel:000000000"
                  className="flex items-center gap-1.5 text-forest-700 hover:text-forest-500 font-bold text-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  000 000 000
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function OfferCard({
  offer,
  delay,
  onBook,
}: {
  offer: OfferCard;
  delay: number;
  onBook: (offer: OfferCard) => void;
}) {
  return (
    <div
      className="reveal group flex flex-col rounded-3xl overflow-hidden shadow-2xl hover:shadow-forest-800/30 hover:-translate-y-2 transition-all duration-500 bg-white"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={offer.img}
          alt={offer.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${offer.accentColor} opacity-70`}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-2xl font-bold text-white">
            {offer.title}
          </h3>
          <p className="text-white/80 text-sm mt-0.5">{offer.subtitle}</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        {offer.items.map((item) => (
          <div
            key={item.name}
            className="flex items-start justify-between gap-3 pb-4 border-b border-forest-100 last:border-0 last:pb-0"
          >
            <div>
              <div className="font-semibold text-forest-800 text-base">
                {item.name}
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-forest-500 text-xs">
                  <CalendarDays className="w-3 h-3" />
                  {item.period}
                </span>
              </div>
              <div className="flex items-center gap-1 text-forest-500 text-xs mt-0.5">
                <Moon className="w-3 h-3" />
                {item.nights}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="font-display font-bold text-xl text-forest-800">
                {item.price}
              </div>
              <div className="flex items-center gap-1 text-forest-500 text-xs justify-end">
                <Users className="w-3 h-3" />6 osób
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pb-6">
        <button
          onClick={() => onBook(offer)}
          className="w-full text-center bg-forest-700 hover:bg-forest-600 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-300"
        >
          Zapytaj o termin
        </button>
      </div>
    </div>
  );
}

export default function Offers() {
  const ref = useReveal();
  const [activeOffer, setActiveOffer] = useState<OfferCard | null>(null);

  return (
    <section
      id="oferta"
      className="py-24 lg:py-32 bg-cream-dark overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="reveal text-forest-500 font-semibold text-sm tracking-widest uppercase">
            Cennik 2025/2026
          </span>
          <h2
            className="reveal section-title mt-2"
            style={{ animationDelay: "100ms" }}
          >
            Znajdź idealny termin
          </h2>
          <p
            className="reveal section-subtitle mt-3 max-w-xl mx-auto"
            style={{ animationDelay: "180ms" }}
          >
            Ceny podane dla 6 osób. Przy 7 osobach cena wzrasta o 10%, a przy 8
            osobach o 20%. Domek można wynająć już dla 2 osób.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              delay={i * 120}
              onBook={setActiveOffer}
            />
          ))}
        </div>

        <div
          className="reveal mt-12 text-center"
          style={{ animationDelay: "500ms" }}
        >
          <div className="inline-flex items-center gap-3 bg-white border border-forest-200 rounded-2xl px-6 py-4 shadow-sm">
            <Users className="w-5 h-5 text-forest-500 flex-shrink-0" />
            <p className="text-forest-600 text-sm">
              <strong className="text-forest-800">
                Rezerwacja telefoniczna:
              </strong>{" "}
              <a
                href="tel:000000000"
                className="text-forest-700 hover:text-forest-500 font-bold underline underline-offset-2"
              >
                000 000 000
              </a>{" "}
              lub{" "}
              <a
                href="mailto:kontakt@example.com"
                className="text-forest-700 hover:text-forest-500 underline underline-offset-2"
              >
                kontakt@example.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {activeOffer && (
        <BookingModal
          offer={activeOffer}
          onClose={() => setActiveOffer(null)}
        />
      )}
    </section>
  );
}
