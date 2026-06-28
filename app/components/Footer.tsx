"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  Leistungen: [
    "Unterhaltsreinigung",
    "Glasreinigung",
    "Fassadenreinigung",
    "Industriereinigung",
    "Küchenabluft-Reinigung",
    "Facility Management",
  ],
  Unternehmen: [
    "Über uns",
    "Team",
    "Karriere",
    "Nachhaltigkeit",
    "Referenzen",
    "News",
  ],
  Service: [
    "Angebot anfordern",
    "Kontakt",
    "FAQ",
    "Notfallservice",
    "Standorte",
  ],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA band */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">
              Bereit für makellose Sauberkeit?
            </h3>
            <p className="text-primary-200 mt-1">
              Fordern Sie jetzt Ihr kostenloses Angebot an.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#kontakt")}
            className="bg-accent-400 hover:bg-accent-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all whitespace-nowrap shadow-lg"
          >
            Kostenlos anfragen
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  CleanPro GmbH
                </div>
                <div className="text-xs text-gray-500">Gebäudereinigung</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Seit 2003 Ihr Partner für professionelle Reinigungsdienstleistungen
              in NRW. Qualität, Verlässlichkeit und Nachhaltigkeit aus einer
              Hand.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Phone, text: "+49 (0) 2151 987 65 43" },
                { icon: Mail, text: "info@cleanpro-gmbh.de" },
                { icon: MapPin, text: "Königsallee 50, 40212 Düsseldorf" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm">
                  <Icon size={15} className="text-primary-400 shrink-0" />
                  <span className="text-gray-400">{text}</span>
                </div>
              ))}
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Social Media"
                >
                  <Icon size={16} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} CleanPro GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-4">
            {["Impressum", "Datenschutz", "AGB", "Cookie-Einstellungen"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
