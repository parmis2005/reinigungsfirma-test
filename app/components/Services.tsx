"use client";

import {
  Building2,
  Wind,
  Layers,
  Droplets,
  Sun,
  Factory,
  Settings,
  Home,
  Biohazard,
  Bug,
  Flame,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Unterhaltsreinigung",
    desc: "Regelmäßige Reinigung von Büros, Praxen und gewerblichen Räumen – diskret und professionell.",
    highlight: true,
  },
  {
    icon: Droplets,
    title: "Glas- & Rahmenpflege",
    desc: "Streifenfreie Reinigung von Fenstern, Glasfassaden und Rahmen für maximale Transparenz.",
    highlight: false,
  },
  {
    icon: Flame,
    title: "Küchenabluft-Reinigung",
    desc: "VDI 2052 konforme Reinigung von Abluftanlagen – Brandschutz durch Professionalität.",
    highlight: false,
  },
  {
    icon: Layers,
    title: "Fassadenreinigung",
    desc: "Schonende Säuberung aller Fassadenarten: Klinker, Putz, WDVS, Naturstein.",
    highlight: false,
  },
  {
    icon: Wind,
    title: "Teppichreinigung",
    desc: "Tiefenreinigung und Fleckentfernung mit modernster Heißwasserextraktionstechnik.",
    highlight: false,
  },
  {
    icon: Settings,
    title: "Facility Management",
    desc: "Komplette Bewirtschaftung Ihrer Liegenschaft aus einer Hand – von Reinigung bis Hausmeister.",
    highlight: false,
  },
  {
    icon: Factory,
    title: "Industriereinigung",
    desc: "Reinigung von Produktionsstätten, Maschinen und Lagerhallen auch unter Hochdruckbedingungen.",
    highlight: false,
  },
  {
    icon: Sun,
    title: "Photovoltaik-Reinigung",
    desc: "Ertragssteigerung durch professionelle Reinigung Ihrer Solar- und PV-Anlagen.",
    highlight: false,
  },
  {
    icon: Biohazard,
    title: "Tatorteinigung",
    desc: "Diskrete und fachgerechte Reinigung nach Schadensereignissen durch geschultes Personal.",
    highlight: false,
  },
  {
    icon: Bug,
    title: "Schädlingsbekämpfung",
    desc: "Professionelle Bekämpfung und Prävention von Schädlingen in Gebäuden und Anlagen.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Desinfektionsreinigung",
    desc: "Keimreduzierende Flächendesinfektion für Kliniken, Praxen und Lebensmittelbetriebe.",
    highlight: false,
  },
  {
    icon: Home,
    title: "Privatkunden",
    desc: "Haushaltsreinigung, Umzugsreinigung und Endreinigung – sauber, schnell, zuverlässig.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professionelle Reinigung für jeden Bedarf
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Von der täglichen Unterhaltsreinigung bis zur spezialisierten
            Industriereinigung – wir haben die passende Lösung für Sie.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, highlight }) => (
            <div
              key={title}
              className={`group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                highlight
                  ? "bg-primary-700 border-primary-600 text-white"
                  : "bg-white border-gray-200 hover:border-primary-300"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  highlight
                    ? "bg-white/20"
                    : "bg-primary-50 group-hover:bg-primary-100"
                }`}
              >
                <Icon
                  size={22}
                  className={highlight ? "text-white" : "text-primary-600"}
                />
              </div>
              <h3
                className={`font-bold text-base mb-2 ${
                  highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  highlight ? "text-primary-100" : "text-gray-500"
                }`}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:scale-105"
          >
            Jetzt Angebot anfragen
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
