import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanPro GmbH – Professionelle Gebäudereinigung",
  description:
    "Ihr zuverlässiger Partner für professionelle Gebäudereinigung, Unterhaltsreinigung, Glasreinigung und mehr. Über 20 Jahre Erfahrung. Jetzt kostenloses Angebot anfordern!",
  keywords:
    "Gebäudereinigung, Unterhaltsreinigung, Glasreinigung, Industriereinigung, Reinigungsfirma, professionell",
  openGraph: {
    title: "CleanPro GmbH – Professionelle Gebäudereinigung",
    description: "Zuverlässige und professionelle Reinigungsdienstleistungen seit 2003.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
