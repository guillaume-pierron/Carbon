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
    <footer className="bg-[#0f172a] border-t border-white/10">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Votre projet en carbone commence ici
            </h3>
            <p className="text-white/50 mt-1">
              Devis gratuit et personnalisé sous 48h
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f172a] font-semibold rounded-none text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gray-100 active:scale-95 whitespace-nowrap">
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
                alt="B&B Carbon"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Fabrication artisanale de pièces en fibre de carbone sur-mesure.
              Intérieur, extérieur, objets uniques — chaque pièce est une œuvre de précision.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-white/40 mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@bbcarbon.fr"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  contact@bbcarbon.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-white/40 mt-0.5 shrink-0" />
                <a
                  href="tel:+33600000000"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  +33 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-white/40 mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">France</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              {footerLinks.navigation.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()} B&B Carbon. Tous droits réservés.
          </p>
          <p className="text-xs text-white/30">
            Fabrication artisanale · Qualité premium · Sur-mesure
          </p>
        </div>
      </div>
    </footer>
  );
}
