import { useState, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

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
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "", consent: false });
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section
      id="kontakt"
      className="py-24 lg:py-32 bg-cream overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="reveal text-forest-500 font-semibold text-sm tracking-widest uppercase">
            Zarezerwuj pobyt
          </span>
          <h2
            className="reveal section-title mt-2"
            style={{ animationDelay: "100ms" }}
          >
            Kontakt i rezerwacja
          </h2>
          <p
            className="reveal section-subtitle mt-3 max-w-xl mx-auto"
            style={{ animationDelay: "180ms" }}
          >
            Preferujemy kontakt telefoniczny, jednak możesz też napisać przez
            formularz poniżej.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="reveal glass-card p-6"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-800 mb-1">
                    Telefon (preferowany)
                  </h4>
                  <a
                    href="tel:000000000"
                    className="text-forest-600 hover:text-forest-800 font-bold text-xl transition-colors"
                  >
                    +48 000 000 000
                  </a>
                </div>
              </div>
            </div>

            <div
              className="reveal glass-card p-6"
              style={{ animationDelay: "180ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-800 mb-1">Email</h4>
                  <a
                    href="mailto:kontakt@example.com"
                    className="text-forest-600 hover:text-forest-800 transition-colors break-all"
                  >
                    kontakt@example.com
                  </a>
                </div>
              </div>
            </div>

            <div
              className="reveal glass-card p-6"
              style={{ animationDelay: "260ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/80 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-forest-950" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-800 mb-1">Adres</h4>
                  <p className="text-forest-600 leading-relaxed">
                    ul. Przykładowa 00
                    <br />
                    00-000 Miejscowość
                    <br />
                    Małopolska
                  </p>
                </div>
              </div>
            </div>

            <div
              className="reveal bg-forest-50 border border-forest-200 rounded-2xl p-5"
              style={{ animationDelay: "340ms" }}
            >
              <h4 className="font-semibold text-forest-800 mb-2 text-sm">
                Numer konta (zaliczka)
              </h4>
              <p className="text-forest-600 text-xs font-mono break-all leading-relaxed">
                PL00 0000 0000 0000 0000 0000 0000
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-3 reveal"
            style={{ animationDelay: "200ms" }}
          >
            <div className="glass-card p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <CheckCircle className="w-16 h-16 text-forest-500" />
                  <h3 className="font-display text-2xl font-bold text-forest-800">
                    Wiadomość wysłana!
                  </h3>
                  <p className="text-forest-600">
                    Odpowiemy najszybciej jak to możliwe. Możesz też zadzwonić:{" "}
                    <a
                      href="tel:000000000"
                      className="font-bold text-forest-700"
                    >
                      000 000 000
                    </a>
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-forest-700 mb-1.5">
                        Imię i nazwisko *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jan Kowalski"
                        className="w-full border border-forest-200 focus:border-forest-500 focus:ring-4 focus:ring-forest-100 rounded-xl px-4 py-3 text-forest-900 placeholder-forest-300 outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-forest-700 mb-1.5">
                        Telefon *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        placeholder="+48 500 000 000"
                        className="w-full border border-forest-200 focus:border-forest-500 focus:ring-4 focus:ring-forest-100 rounded-xl px-4 py-3 text-forest-900 placeholder-forest-300 outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-700 mb-1.5">
                      Adres email *
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="jan@example.com"
                      className="w-full border border-forest-200 focus:border-forest-500 focus:ring-4 focus:ring-forest-100 rounded-xl px-4 py-3 text-forest-900 placeholder-forest-300 outline-none transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-700 mb-1.5">
                      Wiadomość *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Chciałbym zarezerwować pobyt od... do... dla ... osób."
                      className="w-full border border-forest-200 focus:border-forest-500 focus:ring-4 focus:ring-forest-100 rounded-xl px-4 py-3 text-forest-900 placeholder-forest-300 outline-none transition-all bg-white resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 accent-forest-700 rounded flex-shrink-0"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-forest-600 leading-relaxed"
                    >
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w
                      celu odpowiedzi na wiadomość zgodnie z polityką
                      prywatności. *
                    </label>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Wystąpił błąd. Prosimy zadzwonić: 000 000 000
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Wyślij wiadomość
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
