import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Wrench,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez tous les services B&B Carbon : création sur-mesure, recouvrement carbone, réparation de pièces et objets custom. Expertise artisanale pour votre automobile.",
};

const services = [
  {
    id: "creation",
    icon: Layers,
    label: "01",
    title: "Création Sur-Mesure",
    subtitle: "De l'idée à la pièce finale",
    description:
      "Fabrication de pièces en fibre de carbone entièrement personnalisées. Nous concevons et réalisons chaque pièce selon vos spécifications, que ce soit un simple habillage ou une pièce structurelle complexe.",
    features: [
      "Conception à partir de vos mesures",
      "Tissu carbone 2×2, 3K, 12K au choix",
      "Finition brillante, mate ou satin",
      "Prototypage possible avant fabrication finale",
      "Pièces d'intérieur et d'extérieur",
      "Moulage sur pièce existante",
    ],
    examples: ["Tablette de bord", "Coques de rétroviseurs", "Spoilers", "Diffuseurs", "Montants A/B/C"],
    accent: "or",
  },
  {
    id: "recouvrement",
    icon: Zap,
    label: "02",
    title: "Recouvrement Carbone",
    subtitle: "Transformez vos pièces existantes",
    description:
      "Recouvrement de vos pièces d'origine avec du tissu carbone véritable. Technique professionnelle pour un rendu impeccable, identique à une pièce carbone massif.",
    features: [
      "Recouvrement fidèle aux formes d'origine",
      "Tissu carbone véritable (pas de film)",
      "Résine epoxy haute performance",
      "Finition vernissée UV",
      "Adapté à toutes surfaces rigides",
      "Délai rapide : 5–10 jours ouvrés",
    ],
    examples: ["Volants de direction", "Leviers de vitesse", "Planche de bord", "Accoudoirs", "Garnitures de portière"],
    accent: "argent",
  },
  {
    id: "reparation",
    icon: Wrench,
    label: "03",
    title: "Réparation & Restauration",
    subtitle: "Redonnez vie à vos pièces carbone",
    description:
      "Réparation professionnelle de pièces en carbone endommagées. Fissures, éclats, délaminage — nous remettons vos pièces à neuf avec des techniques spécialisées.",
    features: [
      "Diagnostic précis des dégâts",
      "Réparation structurelle et esthétique",
      "Remplacement de toile carbone localisé",
      "Re-vernissage et re-polish",
      "Réparation invisible sur pièces mates et brillantes",
      "Garantie sur les travaux réalisés",
    ],
    examples: ["Carrosserie carbone", "Aileron endommagé", "Pièces fissurées", "Éclats de vernis", "Bulles sous vernis"],
    accent: "or",
  },
  {
    id: "custom",
    icon: Sparkles,
    label: "04",
    title: "Objets Custom",
    subtitle: "Le carbone au-delà de l'automobile",
    description:
      "B&B Carbon ne se limite pas à l'automobile. Nous réalisons des recouvrements et créations carbone sur tous types d'objets — manettes, accessoires hi-tech, objets décoratifs et plus encore.",
    features: [
      "Manettes de gaming (Xbox, PS5...)",
      "Casques et équipements moto",
      "Objets décoratifs et design",
      "Accessoires uniques sur commande",
      "Petites séries possibles",
      "Idéal pour cadeaux personnalisés",
    ],
    examples: ["Manette Xbox", "Casque moto", "Boîtier de montre", "Télécommandes", "Éléments de design intérieur"],
    accent: "argent",
  },
];

const process = [
  {
    step: "01",
    title: "Prise de contact",
    desc: "Envoyez-nous votre idée, des photos et le maximum de détails via le formulaire de devis.",
  },
  {
    step: "02",
    title: "Devis personnalisé",
    desc: "Nous analysons votre projet et vous envoyons un devis détaillé sous 48h.",
  },
  {
    step: "03",
    title: "Fabrication",
    desc: "Après validation, nous fabriquons votre pièce avec soin dans notre atelier.",
  },
  {
    step: "04",
    title: "Livraison",
    desc: "Votre pièce est soigneusement emballée et expédiée ou disponible en remise en main propre.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 carbon-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/60 to-carbon-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4 block">
              Nos Services
            </span>
            <h1 className="section-title text-white mb-6">
              Expertise carbone
              <br />
              <span className="text-gradient-gold">complète</span>
            </h1>
            <p className="section-subtitle text-carbon-400">
              De la création pure à la réparation, en passant par le recouvrement
              et le custom — B&B Carbon couvre tous vos besoins en fibre de carbone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 80}>
              <div
                id={service.id}
                className="bg-carbon-900 border border-carbon-800 hover:border-carbon-700 transition-all duration-300 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: Info */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs font-black text-gold-500/50 tracking-widest">
                        {service.label}
                      </span>
                      <div className="h-px w-12 bg-carbon-700" />
                      <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                        <service.icon size={18} className="text-gold-500" />
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {service.title}
                    </h2>
                    <p className="text-sm text-gold-500 tracking-wide mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-carbon-400 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <Link href="/contact" className="btn-primary !py-3 !px-6">
                      Demander un Devis
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Right: Features + Examples */}
                  <div className="p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-carbon-800 bg-carbon-950/50">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-carbon-400 mb-5">
                      Ce que comprend le service
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <CheckCircle2
                            size={14}
                            className="text-gold-500 shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-carbon-300">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xs font-semibold tracking-widest uppercase text-carbon-400 mb-4">
                      Exemples de pièces
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((ex) => (
                        <span
                          key={ex}
                          className="text-xs px-3 py-1 border border-carbon-700 text-carbon-400"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                Comment ça marche
              </span>
              <h2 className="section-title text-white">
                Le processus en{" "}
                <span className="text-gradient-gold">4 étapes</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-carbon-800">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div className="bg-carbon-950 p-8 h-full hover:bg-carbon-900 transition-colors group">
                  <div className="text-5xl font-black text-carbon-800 group-hover:text-carbon-700 transition-colors mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-carbon-400 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-carbon-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à démarrer ?
            </h2>
            <p className="text-carbon-400 mb-8">
              Envoyez-nous votre projet et obtenez un devis gratuit sous 48h.
            </p>
            <Link href="/contact" className="btn-primary">
              Obtenir Mon Devis Gratuit
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
