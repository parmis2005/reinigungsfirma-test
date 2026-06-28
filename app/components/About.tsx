"use client";

import Image from "next/image";
import { CheckCircle2, Users, Leaf } from "lucide-react";

const checkpoints = [
  "Familiengeführtes Unternehmen in zweiter Generation",
  "Über 1.200 zufriedene Kunden deutschlandweit",
  "Ausgebildete Fachkräfte mit regelmäßigen Schulungen",
  "Umweltfreundliche Reinigungsmittel & Verfahren",
  "Flexible Einsatzzeiten – auch außerhalb der Bürozeiten",
  "Transparente Preisgestaltung ohne versteckte Kosten",
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo */}
          <div className="relative">
            {/* Hauptbild: Reinigungskraft reinigt Fenster/Glasfront */}
            <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/glass-cleaning.png"
                alt="CleanPro Mitarbeiterin bei der professionellen Glasreinigung"
                fill
                quality={95}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              <div className="absolute bottom-5 left-5 flex gap-3">
                {[
                  { icon: Users, label: "150+ Mitarbeiter" },
                  { icon: Leaf,  label: "Öko-zertifiziert" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow">
                    <Icon size={14} className="text-primary-600" />
                    <span className="text-xs font-semibold text-gray-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inset-Bild: Reinigungsmittel / Profi-Equipment */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/equipment.png"
                alt="Professionelles Reinigungsequipment"
                fill
                quality={95}
                className="object-cover"
                sizes="176px"
              />
            </div>

            {/* Floating quote */}
            <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-4 max-w-[220px] border border-gray-100">
              <div className="text-3xl text-primary-200 font-serif leading-none mb-1">"</div>
              <p className="text-gray-700 text-xs font-medium italic leading-relaxed">
                Nur gut reicht uns nicht – wir streben nach Exzellenz.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-700 font-bold text-xs">M</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">Michael Bauer</div>
                  <div className="text-xs text-gray-400">Geschäftsführer</div>
                </div>
              </div>
            </div>

            {/* Year badge */}
            <div className="absolute top-5 right-5 bg-primary-700 text-white rounded-2xl p-4 text-center shadow-lg">
              <div className="text-3xl font-black leading-none">20+</div>
              <div className="text-xs text-primary-200 mt-0.5">Jahre<br />Erfahrung</div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ihr Partner für saubere Ergebnisse – gestern, heute und morgen
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              CleanPro GmbH wurde 2003 gegründet und hat sich seitdem zu einem
              der führenden Reinigungsunternehmen der Region entwickelt. Unser
              Erfolg basiert auf dem Vertrauen unserer Kunden und dem
              unermüdlichen Einsatz unseres Teams. Wir setzen auf
              umweltschonende Methoden und modernste Technologien, um
              nachhaltige Sauberkeit zu gewährleisten.
            </p>

            <ul className="space-y-3 mb-8">
              {checkpoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
