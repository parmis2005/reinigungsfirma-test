import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    city: "Düsseldorf",
    address: "Königsallee 50, 40212 Düsseldorf",
    phone: "+49 (0) 211 456 78 90",
    email: "duesseldorf@cleanpro-gmbh.de",
    hours: "Mo–Fr: 07:00–18:00 Uhr",
    main: true,
  },
  {
    city: "Köln",
    address: "Hohenzollernring 20, 50672 Köln",
    phone: "+49 (0) 221 345 67 89",
    email: "koeln@cleanpro-gmbh.de",
    hours: "Mo–Fr: 07:00–18:00 Uhr",
    main: false,
  },
  {
    city: "Krefeld",
    address: "Rheinstr. 12, 47799 Krefeld",
    phone: "+49 (0) 2151 987 65 43",
    email: "krefeld@cleanpro-gmbh.de",
    hours: "Mo–Fr: 08:00–17:00 Uhr",
    main: false,
  },
  {
    city: "Mönchengladbach",
    address: "Aachener Str. 5, 41061 Mönchengladbach",
    phone: "+49 (0) 2161 234 56 78",
    email: "mg@cleanpro-gmbh.de",
    hours: "Mo–Fr: 08:00–17:00 Uhr",
    main: false,
  },
];

export default function Locations() {
  return (
    <section id="standorte" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Unsere Standorte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nah bei Ihnen – überall in NRW
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mit 4 Standorten in Nordrhein-Westfalen sind wir immer schnell bei
            Ihnen vor Ort – zuverlässig und ohne lange Wege.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className={`rounded-2xl border p-6 transition-all hover:shadow-lg ${
                loc.main
                  ? "bg-primary-700 border-primary-600 text-white"
                  : "bg-gray-50 border-gray-200 hover:border-primary-300"
              }`}
            >
              {loc.main && (
                <span className="inline-block bg-accent-400 text-white text-xs font-bold px-2 py-0.5 rounded-full mb-3">
                  Hauptsitz
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-4 ${
                  loc.main ? "text-white" : "text-gray-900"
                }`}
              >
                {loc.city}
              </h3>

              <ul className="space-y-3">
                {[
                  { icon: MapPin, text: loc.address },
                  { icon: Phone, text: loc.phone },
                  { icon: Mail, text: loc.email },
                  { icon: Clock, text: loc.hours },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5">
                    <Icon
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        loc.main ? "text-accent-400" : "text-primary-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        loc.main ? "text-primary-100" : "text-gray-600"
                      }`}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <a
                  href={`tel:${loc.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    loc.main
                      ? "text-accent-400 hover:text-accent-500"
                      : "text-primary-600 hover:text-primary-700"
                  }`}
                >
                  <Phone size={14} />
                  Jetzt anrufen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
