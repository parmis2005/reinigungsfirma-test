"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Vorteile", href: "#vorteile" },
  { label: "Standorte", href: "#standorte" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary-700 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Professionelle Gebäudereinigung seit 2003</span>
          <a
            href="tel:+4921519876543"
            className="flex items-center gap-2 font-semibold hover:text-accent-400 transition-colors"
          >
            <Phone size={14} />
            +49 (0) 2151 987 65 43
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleLink("#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div className="leading-tight">
            <div className="font-bold text-primary-800 text-lg">CleanPro</div>
            <div className="text-xs text-gray-500 -mt-1">Gebäudereinigung GmbH</div>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="px-3 py-2 rounded-lg text-gray-700 font-medium text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            handleLink("#kontakt");
          }}
          className="hidden md:inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
        >
          Angebot anfordern
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleLink("#kontakt")}
                className="w-full text-center bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Angebot anfordern
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
