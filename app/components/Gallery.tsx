import Image from "next/image";

const images = [
  {
    // Reinigungskraft wischt Büroboden mit Mopp
    src: "/images/gallery-floor-cleaning.png",
    alt: "Mitarbeiter reinigt Büroboden mit professionellem Mopp",
    label: "Unterhaltsreinigung",
    wide: true,
  },
  {
    // Gelber Reinigungseimer mit Mopp – klassisches Reinigungsbild
    src: "/images/equipment.png",
    alt: "Professionelles Reinigungsequipment – Eimer und Mopp",
    label: "Profi-Equipment",
    wide: false,
  },
  {
    // Glasreinigung mit Rakel an Fassade
    src: "/images/glass-cleaning.png",
    alt: "Glasreinigung mit professionellem Rakel an Glasfassade",
    label: "Glasreinigung",
    wide: false,
  },
  {
    // Reinigungssprays und -mittel auf weißem Hintergrund
    src: "/images/hero-cleaning.png",
    alt: "Professionelle Reinigungsmittel und Sprühflaschen",
    label: "Reinigungsmittel",
    wide: false,
  },
  {
    // Desinfektion mit Schutzausrüstung
    src: "/images/disinfection.png",
    alt: "Professionelle Desinfektion mit Schutzausrüstung",
    label: "Desinfektion",
    wide: false,
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Einblicke
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sauberkeit, die man sieht
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Von Büros über Glasfassaden bis hin zur Desinfektion – sehen Sie selbst,
            was professionelle Reinigung bedeutet.
          </p>
        </div>

        {/* Grid: 1 großes Bild links + 4 kleine rechts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Großes Bild – nimmt linke Hälfte ein */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden h-[460px] lg:h-auto group">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              quality={95}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                {images[0].label}
              </span>
            </div>
          </div>

          {/* 4 kleine Bilder */}
          {images.slice(1).map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden h-[218px] group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={95}
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
