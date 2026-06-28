"use client";

import Image from "next/image";
import { Shield, Clock, Award, ChevronDown } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Zuverlässigkeit", text: "Pünktlich und gewissenhaft – jedes Mal." },
  { icon: Clock,  title: "Schnelligkeit",   text: "Effiziente Reinigung ohne Qualitätsverlust." },
  { icon: Award,  title: "Gründlichkeit",   text: "Höchste Standards für makellose Ergebnisse." },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-block bg-accent-400/20 text-accent-400 text-sm font-semibold px-3 py-1 rounded-full mb-6 border border-accent-400/30">
              Über 20 Jahre Erfahrung
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ihr vertrauens&shy;würdiger Partner für{" "}
              <span className="text-accent-400">professionelle</span>{" "}
              Gebäude&shy;reinigung
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-xl">
              Wir bieten maßgeschneiderte Reinigungslösungen für Unternehmen und
              Privatkunden – zuverlässig, gründlich und zu fairen Preisen.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white/10 rounded-xl p-3 border border-white/20">
                  <Icon size={20} className="text-accent-400 mb-1.5" />
                  <div className="text-white text-xs font-semibold">{title}</div>
                  <div className="text-primary-200 text-xs mt-0.5 leading-tight hidden sm:block">{text}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#kontakt")}
                className="bg-accent-400 hover:bg-accent-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-accent-400/30"
              >
                Kostenloses Angebot
              </button>
              <button
                onClick={() => scrollTo("#leistungen")}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 transition-all"
              >
                Unsere Leistungen
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { value: "20+",    label: "Jahre Erfahrung" },
                { value: "1.200+", label: "Kunden" },
                { value: "4",      label: "Standorte" },
                { value: "100%",   label: "Zufriedenheit" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-accent-400">{s.value}</div>
                  <div className="text-primary-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero photo – Profi wischt Büroboden */}
          <div className="relative hidden lg:block">
            <div className="relative h-[540px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=95"
                alt="Professionelle Gebäudereinigung – Mitarbeiter reinigt Bürogebäude"
                fill
                quality={95}
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-lg font-bold">CleanPro – Profis für Sauberkeit</div>
                <div className="text-primary-200 text-sm">Täglich im Einsatz für Ihre Räumlichkeiten</div>
              </div>
            </div>

            {/* ISO badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="text-primary-600" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">ISO 9001 Zertifiziert</div>
                <div className="text-gray-500 text-xs">Betriebshaftpflicht 5 Mio. €</div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute -top-4 -right-4 bg-accent-400 rounded-2xl shadow-xl p-4 text-white text-center">
              <div className="text-3xl font-black leading-none">4.9</div>
              <div className="flex justify-center gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-white" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-white/80">Google Bewertung</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#leistungen")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
