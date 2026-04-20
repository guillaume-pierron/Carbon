import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Création Sur-Mesure", href: "/services#creation" },
    { label: "Recouvrement Carbone", href: "/services#recouvrement" },
    { label: "Réparation", href: "/services#reparation" },
    { label: "Objets Custom", href: "/services#custom" },
  ],
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Nos Réalisations", href: "/realisations" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Demande de Devis", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-carbon-950 border-t border-carbon-800">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-carbon-900 via-carbon-800 to-carbon-900 border-b border-carbon-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Votre projet en carbone commence ici
            </h3>
            <p className="text-carbon-400 mt-1">
              Devis gratuit et personnalisé sous 48h
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Demander un Devis
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="BB Carbon"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-carbon-400 text-sm leading-relaxed max-w-xs mb-6">
              Fabrication artisanale de pièces en fibre de carbone sur-mesure.
              Intérieur, extérieur, objets uniques — chaque pièce est une œuvre de précision.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-carbon-700 flex items-center justify-center text-carbon-400 hover:text-gold-400 hover:border-gold-500 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-carbon-700 flex items-center justify-center text-carbon-400 hover:text-gold-400 hover:border-gold-500 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-carbon-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-carbon-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-carbon-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@bbcarbon.fr"
                  className="text-sm text-carbon-300 hover:text-white transition-colors duration-200"
                >
                  contact@bbcarbon.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold-500 mt-0.5 shrink-0" />
                <a
                  href="tel:+33600000000"
                  className="text-sm text-carbon-300 hover:text-white transition-colors duration-200"
                >
                  +33 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-carbon-300">France</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              {footerLinks.navigation.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-carbon-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-carbon-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-carbon-500 tracking-wide">
            © {new Date().getFullYear()} BB Carbon. Tous droits réservés.
          </p>
          <p className="text-xs text-carbon-600">
            Fabrication artisanale · Qualité premium · Sur-mesure
          </p>
        </div>
      </div>
    </footer>
  );
}
