"use client";

import { useState } from "react";
import { Send, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";

const services = [
  "Unterhaltsreinigung",
  "Glasreinigung",
  "Fassadenreinigung",
  "Industriereinigung",
  "Küchenabluft-Reinigung",
  "Teppichreinigung",
  "Facility Management",
  "Photovoltaik-Reinigung",
  "Privatkunden",
  "Sonstiges",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Kontakt & Angebot
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kostenloses Angebot anfordern
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Füllen Sie das Formular aus und wir melden uns innerhalb von 24
            Stunden bei Ihnen – unverbindlich und kostenlos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Phone,
                label: "Telefon",
                value: "+49 (0) 2151 987 65 43",
                sub: "Mo–Fr, 07:00–18:00 Uhr",
                href: "tel:+492151987654",
              },
              {
                icon: Mail,
                label: "E-Mail",
                value: "info@cleanpro-gmbh.de",
                sub: "Antwort innerhalb von 24h",
                href: "mailto:info@cleanpro-gmbh.de",
              },
              {
                icon: MessageSquare,
                label: "Notfall-Hotline",
                value: "+49 (0) 151 234 56 789",
                sub: "24/7 erreichbar",
                href: "tel:+4915123456789",
              },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    {label}
                  </div>
                  <div className="font-semibold text-gray-900 mt-0.5">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500">{sub}</div>
                </div>
              </a>
            ))}

            {/* Guarantees */}
            <div className="bg-primary-700 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">Unser Versprechen</h4>
              <ul className="space-y-2.5">
                {[
                  "Kostenlose & unverbindliche Beratung",
                  "Angebot innerhalb von 24 Stunden",
                  "Keine versteckten Kosten",
                  "Zufriedenheitsgarantie",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle size={16} className="text-accent-400 shrink-0" />
                    <span className="text-primary-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Vielen Dank!
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns
                  innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", service: "", message: "" });
                  }}
                  className="mt-6 text-primary-600 font-semibold hover:underline text-sm"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Max Mustermann"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="max@beispiel.de"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Gewünschte Leistung
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Bitte wählen…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihren Reinigungsbedarf, die Fläche und gewünschten Termine…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <p className="text-xs text-gray-400">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="#" className="underline hover:text-gray-600">
                    Datenschutzerklärung
                  </a>{" "}
                  zu. Pflichtfelder sind mit * markiert.
                </p>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] shadow-md shadow-primary-200"
                >
                  <Send size={18} />
                  Anfrage absenden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
