import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  Wrench,
  Zap,
  Sparkles,
  Shield,
  Clock,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "BB Carbon — Pièces en Fibre de Carbone Sur-Mesure",
  description:
    "BB Carbon fabrique des pièces en fibre de carbone sur-mesure pour l'intérieur et l'extérieur automobile. Création, réparation et recouvrement carbone.",
};

const services = [
  {
    icon: Layers,
    title: "Création Sur-Mesure",
    description:
      "Fabrication de pièces carbone uniques selon vos spécifications exactes. Chaque projet est pensé et réalisé de A à Z.",
  },
  {
    icon: Wrench,
    title: "Réparation & Restauration",
    description:
      "Remise en état de vos pièces carbone existantes. Réparation de fissures, éclats, et défauts de surface.",
  },
  {
    icon: Zap,
    title: "Recouvrement Carbone",
    description:
      "Habillage de vos pièces existantes avec du tissu carbone véritable. Transformation rapide et haute qualité.",
  },
  {
    icon: Sparkles,
    title: "Custom & Objets Uniques",
    description:
      "Au-delà de l'auto : manettes, objets déco, accessoires. Tout ce qui peut être sublimé par le carbone.",
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
    image: "/volant.png", // ← mets le nom de ton fichier ici
  },
  {
    cat: "Extérieur",
    title: "Diffuseur arrière",
    color: "from-zinc-900 to-stone-900",
    accent: "from-zinc-500 to-zinc-300",
    image: null,
  },
  {
    cat: "Custom",
    title: "Manette Xbox",
    color: "from-zinc-900 to-neutral-900",
    accent: "from-gold-500 to-gold-300",
    image: null,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 carbon-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/40 via-carbon-950/20 to-carbon-950" />

        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-48 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/5 px-4 py-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-gold-400 font-medium">
                Fabrication artisanale · France
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
              <span className="block text-white">L'ART DU</span>
              <span className="block text-gradient-gold">CARBONE</span>
              <span className="block text-white">SUR-MESURE</span>
            </h1>

            <p className="text-lg md:text-xl text-carbon-300 max-w-xl leading-relaxed mb-10">
              Pièces en fibre de carbone fabriquées à la main pour sublimer
              votre automobile. Intérieur, extérieur, et objets uniques — chaque
              réalisation est une signature.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un Devis
                <ArrowRight size={16} />
              </Link>
              <Link href="/realisations" className="btn-secondary">
                Voir les Réalisations
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-carbon-500">
            <span className="text-xs tracking-widest uppercase">Découvrir</span>
            <div className="w-px h-12 bg-gradient-to-b from-carbon-500 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-carbon-900 border-y border-carbon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-carbon-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                  Notre Expertise
                </span>
                <h2 className="section-title text-white">
                  Ce que nous
                  <br />
                  <span className="text-gradient-gold">fabriquons</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm tracking-wider uppercase text-carbon-400 hover:text-gold-400 transition-colors flex items-center gap-2 group"
              >
                Tous les services
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-carbon-800">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="bg-carbon-950 p-8 h-full group hover:bg-carbon-900 transition-colors duration-300">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-500/5 transition-all duration-300">
                    <service.icon
                      size={20}
                      className="text-gold-500 group-hover:text-gold-300 transition-colors"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-carbon-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW GALLERY */}
      <section className="py-24 bg-carbon-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                Nos Réalisations
              </span>
              <h2 className="section-title text-white">
                Quelques <span className="text-gradient-gold">projets</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {previews.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 120}>
                <div
                  className={`relative bg-gradient-to-br ${item.color} aspect-[4/3] overflow-hidden group cursor-pointer border border-carbon-800 hover:border-carbon-600 transition-all duration-500`}
                >
                  {/* Image ou placeholder carbone */}
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

                  {/* Accent gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs tracking-widest uppercase text-gold-400 font-medium">
                      {item.cat}
                    </span>
                    <p className="text-white font-semibold mt-1">{item.title}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-carbon-950/0 group-hover:bg-carbon-950/20 transition-all duration-300 flex items-center justify-center">
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
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                  Pourquoi BB Carbon
                </span>
                <h2 className="section-title text-white mb-6">
                  L'excellence
                  <br />
                  <span className="text-gradient-gold">artisanale</span>
                  <br />
                  au service de votre vision
                </h2>
                <p className="text-carbon-400 leading-relaxed mb-8">
                  Chez BB Carbon, chaque projet est abordé comme une œuvre
                  unique. Nous combinons techniques de fabrication professionnelles
                  et attention au détail pour livrer des pièces qui dépassent les
                  attentes.
                </p>
                <Link href="/a-propos" className="btn-ghost">
                  Notre Histoire
                  <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                {values.map((val, i) => (
                  <div
                    key={val.title}
                    className="flex gap-5 p-6 border border-carbon-800 hover:border-carbon-700 bg-carbon-950 hover:bg-carbon-900 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:border-gold-400 transition-colors">
                      <val.icon size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {val.title}
                      </h3>
                      <p className="text-sm text-carbon-400 leading-relaxed">
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 carbon-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/50 to-carbon-950/80" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #c9a84c 0%, transparent 70%)",
          }}
        />

        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4 block">
              Commencez votre projet
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Votre projet,
              <br />
              <span className="text-gradient-gold">notre expertise</span>
            </h2>
            <p className="text-carbon-300 text-lg leading-relaxed mb-10">
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
    </>
  );
}
