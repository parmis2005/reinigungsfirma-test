import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  Leaf,
  HeartHandshake,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Vollversichert",
    desc: "Betriebshaftpflicht bis 5 Mio. € – Ihr Eigentum ist bei uns in sicheren Händen.",
  },
  {
    icon: Clock3,
    title: "Flexible Zeiten",
    desc: "Früh, spät oder am Wochenende – wir reinigen, wenn es für Sie am besten passt.",
  },
  {
    icon: Leaf,
    title: "Öko-Zertifiziert",
    desc: "Wir verwenden nur umweltverträgliche Reinigungsmittel und nachhaltige Verfahren.",
  },
  {
    icon: HeartHandshake,
    title: "Langzeitpartner",
    desc: "Unsere durchschnittliche Kundenbindung beträgt über 8 Jahre – das spricht für sich.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001 Zertifiziert",
    desc: "Unser Qualitätsmanagementsystem garantiert gleichbleibend hohe Standards.",
  },
  {
    icon: Headphones,
    title: "24/7 Erreichbar",
    desc: "Notfall? Unser Bereitschaftsservice ist rund um die Uhr für Sie da.",
  },
];

const testimonials = [
  {
    name: "Sarah Müller",
    role: "Büromanagerin, IT-Firma",
    text: "Seit 4 Jahren arbeiten wir mit CleanPro zusammen. Das Team ist immer pünktlich, gründlich und unglaublich zuverlässig. Wir würden nie wechseln!",
    rating: 5,
    avatar: "/images/avatar-sarah.png",
  },
  {
    name: "Thomas Weber",
    role: "Facility Manager, Klinik",
    text: "Für uns als Gesundheitseinrichtung ist Hygiene oberste Priorität. CleanPro erfüllt alle unsere strengen Anforderungen und übertrifft sie regelmäßig.",
    rating: 5,
    avatar: "/images/avatar-thomas.png",
  },
  {
    name: "Andrea Klein",
    role: "Privatkundin",
    text: "Die Umzugsreinigung war perfekt! Die Wohnung war tadellos sauber, die Kaution habe ich komplett zurückbekommen. Absolute Empfehlung!",
    rating: 5,
    avatar: "/images/avatar-andrea.png",
  },
];

export default function WhyUs() {
  return (
    <section id="vorteile" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Warum CleanPro?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Der Unterschied liegt im Detail
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Was uns von der Konkurrenz abhebt, ist nicht nur Sauberkeit – es
            ist die Kombination aus Vertrauen, Qualität und echtem Service.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon size={22} className="text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Das sagen unsere Kunden
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-accent-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-primary-100">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
