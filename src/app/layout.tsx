import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "B&B Carbon — Pièces en Fibre de Carbone Sur-Mesure",
    template: "%s | B&B Carbon",
  },
  description:
    "B&B Carbon fabrique des pièces en fibre de carbone sur-mesure pour l'intérieur et l'extérieur automobile. Création, réparation et recouvrement carbone haut de gamme.",
  keywords: [
    "fibre de carbone",
    "carbone sur-mesure",
    "pièces carbone automobile",
    "habillage carbone voiture",
    "recouvrement carbone",
    "pièces intérieur carbone",
    "extérieur carbone",
    "tuning carbone",
    "B&B Carbon",
    "carbon fiber",
  ],
  authors: [{ name: "B&B Carbon" }],
  creator: "B&B Carbon",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://bbcarbon.fr",
    siteName: "B&B Carbon",
    title: "B&B Carbon — Pièces en Fibre de Carbone Sur-Mesure",
    description:
      "Fabricant de pièces en fibre de carbone sur-mesure pour automobiles. Expertise artisanale, qualité premium.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B&B Carbon — Pièces en Fibre de Carbone Sur-Mesure",
    description:
      "Fabricant de pièces en fibre de carbone sur-mesure pour automobiles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-carbon-950 text-white antialiased">
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
