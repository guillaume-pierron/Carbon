"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image avec parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-white/80 font-medium">
              Fabrication artisanale · France
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
            <span className="block text-white">L'ART DU</span>
            <span className="block text-white/40">CARBONE</span>
            <span className="block text-white">SUR-MESURE</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
            Pièces en fibre de carbone fabriquées à la main pour sublimer
            votre automobile. Intérieur, extérieur, et objets uniques — chaque
            réalisation est une signature.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Demander un Devis
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-none text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10 active:scale-95"
            >
              Voir les Réalisations
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
