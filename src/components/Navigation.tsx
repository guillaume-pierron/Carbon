"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { clsx } from "clsx";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Devis" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count, open: openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled
            ? "bg-carbon-950/95 backdrop-blur-sm border-b border-carbon-800"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="BB Carbon"
                width={120}
                height={48}
                className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-xs tracking-widest uppercase font-medium transition-colors duration-200 relative group",
                    pathname === link.href
                      ? "text-gold-400"
                      : "text-carbon-300 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-gold-500 to-transparent transition-all duration-300",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
              <button
                onClick={openCart}
                className="relative p-2 text-carbon-300 hover:text-white transition-colors"
                aria-label="Panier"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-carbon-950 text-[10px] font-black flex items-center justify-center rounded-full">
                    {count}
                  </span>
                )}
              </button>
              <Link href="/contact" className="btn-primary !py-2 !px-6 !text-xs">
                Devis Gratuit
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-carbon-300 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — en dehors de <header> pour éviter que transform brise backdrop-blur */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 backdrop-blur-xl bg-carbon-950/80" />
        <div className="relative flex flex-col p-8 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-2xl font-light tracking-widest uppercase transition-colors duration-200 border-b border-carbon-800 pb-4",
                pathname === link.href
                  ? "text-gold-400"
                  : "text-carbon-200 hover:text-white"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
