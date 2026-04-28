import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "B&B Carbon — Pièces en Fibre de Carbone Sur-Mesure",
  description:
    "B&B Carbon fabrique des pièces en fibre de carbone sur-mesure pour l'intérieur et l'extérieur automobile. Création, réparation et recouvrement carbone.",
};

const services = [
  {
    num: "01",
    title: "Création Sur-Mesure",
    description: "Fabrication de pièces carbone uniques selon vos spécifications exactes. Chaque projet est pensé et réalisé de A à Z.",
    image: "/volant_large.png",
    href: "/services#creation",
  },
  {
    num: "02",
    title: "Réparation & Restauration",
    description: "Remise en état de vos pièces carbone existantes. Réparation de fissures, éclats, et défauts de surface.",
    image: "/board.png",
    href: "/services#reparation",
  },
  {
    num: "03",
    title: "Recouvrement Carbone",
    description: "Habillage de vos pièces existantes avec du tissu carbone véritable. Transformation rapide et haute qualité.",
    image: "/volant.png",
    href: "/services#recouvrement",
  },
  {
    num: "04",
    title: "Custom & Objets Uniques",
    description: "Au-delà de l'auto : manettes, objets déco, accessoires. Tout ce qui peut être sublimé par le carbone.",
    image: "/xbox.png",
    href: "/services#custom",
  },
];

const stats = [
  { value: "100%", label: "Sur-Mesure" },
  { value: "+5 ans", label: "D'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "48h", label: "Réponse Devis" },
];

const values = [
  {
    icon: Shield,
    title: "Qualité Artisanale",
    desc: "Chaque pièce est fabriquée à la main avec des matériaux haut de gamme sélectionnés avec soin.",
  },
  {
    icon: Sparkles,
    title: "Sur-Mesure Total",
    desc: "Aucune pièce identique. Votre projet est unique, notre approche l'est aussi.",
  },
  {
    icon: Clock,
    title: "Suivi Personnalisé",
    desc: "Communication directe du début à la livraison. Vous êtes informé à chaque étape.",
  },
];

const previews = [
  {
    cat: "Intérieur",
    title: "Habillage de volant",
    color: "from-zinc-900 to-zinc-800",
    accent: "from-gold-600 to-gold-400",
    image: "/volant.png",
  },
  {
    cat: "Extérieur",
    title: "Tableau de bord",
    color: "from-zinc-900 to-stone-900",
    accent: "from-zinc-500 to-zinc-300",
    image: "/board.png",
  },
  {
    cat: "Custom",
    title: "Manette Xbox",
    color: "from-zinc-900 to-neutral-900",
    accent: "from-gold-500 to-gold-300",
    image: "/xbox.png",
  },
  {
    cat: "Custom",
    title: "Boîte sur-mesure",
    color: "from-zinc-900 to-zinc-800",
    accent: "from-gold-600 to-gold-400",
    image: "/boite.png",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900">
      {/* HERO */}
      <HeroSection />

      {/* STATS */}
      <section className="bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Logo décoratif en fond */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <Image
            src="/logo_noir.svg"
            alt=""
            width={1200}
            height={480}
            className="w-full max-w-6xl px-8 opacity-[0.04] object-contain"
            aria-hidden="true"
          />
        </div>
        {/* Ligne décorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                  Notre Expertise
                </span>
                <h2 className="section-title text-zinc-900">
                  Ce que nous
                  <br />
                  <span className="text-gradient-gold">fabriquons</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm tracking-wider uppercase text-gray-500 hover:text-gold-500 transition-colors flex items-center gap-2 group"
              >
                Tous les services
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <Link href={service.href} className="block group bg-white border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Texte */}
                  <div className="p-6">
                    <span className="text-xs font-black text-gray-300 tracking-widest block mb-3">
                      {service.num}
                    </span>
                    <h3 className="font-bold text-zinc-900 mb-2 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 group-hover:text-zinc-900 transition-colors duration-300">
                      En savoir plus
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW GALLERY */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                Nos Réalisations
              </span>
              <h2 className="section-title text-zinc-900">
                Quelques <span className="text-gradient-gold">projets</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {previews.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 120}>
                <div
                  className={`relative bg-gradient-to-br ${item.color} aspect-[4/3] overflow-hidden group cursor-pointer border border-gray-300 hover:border-gray-400 transition-all duration-500`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 carbon-weave opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border border-white/10 rotate-45 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border border-white/5 rotate-45" />
                      </div>
                    </>
                  )}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs tracking-widest uppercase text-gold-400 font-medium">
                      {item.cat}
                    </span>
                    <p className="text-white font-semibold mt-1">{item.title}</p>
                  </div>

                  <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20 px-4 py-2">
                      <span className="text-xs tracking-widest uppercase text-white">
                        Voir
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Link href="/realisations" className="btn-secondary">
                Voir Toutes les Réalisations
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                  Pourquoi B&B Carbon
                </span>
                <h2 className="section-title text-zinc-900 mb-6">
                  L'excellence
                  <br />
                  <span className="text-gradient-gold">artisanale</span>
                  <br />
                  au service de votre vision
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Chez B&B Carbon, chaque projet est abordé comme une œuvre
                  unique. Nous combinons techniques de fabrication professionnelles
                  et attention au détail pour livrer des pièces qui dépassent les
                  attentes.
                </p>
                <Link href="/a-propos" className="btn-ghost-light">
                  Notre Histoire
                  <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                {values.map((val) => (
                  <div
                    key={val.title}
                    className="flex gap-5 p-6 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center shrink-0 group-hover:border-gold-400 transition-colors">
                      <val.icon size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">
                        {val.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-gray-100">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "radial-gradient(ellipse at center, #0f172a 0%, transparent 70%)",
          }}
        />

        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4 block">
              Commencez votre projet
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Votre projet,
              <br />
              <span className="text-gradient-gold">notre expertise</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Décrivez-nous votre idée. Véhicule, pièce, style — nous vous
              proposons une solution sur-mesure et un devis gratuit sous 48h.
            </p>
            <Link href="/contact" className="btn-primary text-base">
              Démarrer Mon Projet
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
