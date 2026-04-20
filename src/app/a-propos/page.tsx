import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Target,
  Heart,
  Award,
  Users,
  Hammer,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez l'histoire de B&B Carbon, atelier artisanal spécialisé dans la fabrication de pièces en fibre de carbone sur-mesure pour l'automobile.",
};

const values = [
  {
    icon: Gem,
    title: "Qualité sans compromis",
    desc: "Nous utilisons exclusivement des matériaux premium : tissu carbone véritable, résines epoxy hautes performances, vernis UV durables. Aucun raccourci.",
  },
  {
    icon: Target,
    title: "Précision absolue",
    desc: "Chaque pièce est mesurée, ajustée et vérifiée plusieurs fois avant livraison. La tolérance zéro défaut est notre standard.",
  },
  {
    icon: Heart,
    title: "Passion automobile",
    desc: "Nous sommes avant tout des passionnés. Cette passion se ressent dans chaque pièce fabriquée, chaque finition soignée.",
  },
  {
    icon: Users,
    title: "Relation client directe",
    desc: "Chez B&B Carbon, vous travaillez directement avec l'artisan. Communication transparente, suivi personnalisé, résultat conforme à vos attentes.",
  },
];

const expertise = [
  { label: "Carbone tissé", desc: "2×2, 3K, 12K, Forged Carbon" },
  { label: "Finitions", desc: "Brillant, Mat, Satin, Soft-touch" },
  { label: "Techniques", desc: "Stratification, Recouvrement, Moulage" },
  { label: "Résines", desc: "Epoxy haute performance, vinylester" },
];

export default function AProposPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 carbon-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/60 to-carbon-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4 block">
              Notre Histoire
            </span>
            <h1 className="section-title text-white mb-6">
              L'atelier <span className="text-gradient-gold">B&B Carbon</span>
            </h1>
            <p className="section-subtitle text-carbon-400">
              Né d'une passion pour l'automobile et la fabrication, B&B Carbon
              s'est imposé comme une référence dans la création de pièces
              carbone artisanales.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="space-y-6 text-carbon-300 leading-relaxed">
                <p className="text-lg text-white">
                  B&B Carbon est né d'une double passion : l'automobile haute
                  performance et l'artisanat de précision.
                </p>
                <p>
                  Tout commence par une frustration : l'impossibilité de trouver
                  des pièces carbone vraiment sur-mesure, adaptées à un véhicule
                  spécifique, avec la finition exactement désirée. Face à ce
                  manque, nous avons décidé de maîtriser la technique de A à Z.
                </p>
                <p>
                  Aujourd'hui, notre atelier produit des pièces pour
                  passionnés, préparateurs et collectionneurs qui refusent le
                  compromis. Chaque commande est traitée avec le même niveau
                  d'exigence, qu'il s'agisse d'un simple habillage de volant ou
                  d'un body kit complet.
                </p>
                <p>
                  Notre philosophie est simple : si votre idée peut être
                  réalisée en carbone, nous pouvons le faire. Et si personne
                  d'autre ne l'a encore fait, c'est encore mieux.
                </p>
              </div>

              {/* Stats mini */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { val: "+5 ans", label: "d'expérience" },
                  { val: "200+", label: "projets livrés" },
                  { val: "100%", label: "satisfaction client" },
                  { val: "48h", label: "délai devis" },
                ].map((s) => (
                  <div key={s.label} className="border border-carbon-800 p-4">
                    <div className="text-2xl font-black text-gradient-gold">
                      {s.val}
                    </div>
                    <div className="text-xs text-carbon-500 tracking-wide mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              {/* Visual block */}
              <div className="relative">
                <div className="aspect-square bg-carbon-900 border border-carbon-800 relative overflow-hidden">
                  <div className="absolute inset-0 carbon-weave" />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 70%, #c9a84c 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-16 h-16 border border-gold-500/50 flex items-center justify-center mb-6">
                      <Hammer size={28} className="text-gold-400" />
                    </div>
                    <blockquote className="text-lg font-light text-white leading-relaxed italic">
                      &ldquo;Chaque pièce carbone est une conversation entre le
                      matériau et l'artisan. Notre rôle est de l'écouter pour
                      créer quelque chose d'exceptionnel.&rdquo;
                    </blockquote>
                    <div className="mt-6 text-xs tracking-widest uppercase text-gold-500">
                      — B&B Carbon
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-carbon-950 border border-gold-500/30 p-5">
                  <Award size={24} className="text-gold-400 mb-2" />
                  <div className="text-xs font-bold text-white tracking-wide">
                    Fabrication
                  </div>
                  <div className="text-xs text-carbon-400">Artisanale</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-carbon-900/40 border-y border-carbon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                Nos Valeurs
              </span>
              <h2 className="section-title text-white">
                Ce qui nous <span className="text-gradient-gold">définit</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-carbon-800">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 100}>
                <div className="bg-carbon-950 p-8 h-full group hover:bg-carbon-900 transition-colors">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-400 transition-colors">
                    <val.icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-3">{val.title}</h3>
                  <p className="text-sm text-carbon-400 leading-relaxed">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-3 block">
                Maîtrise Technique
              </span>
              <h2 className="section-title text-white mb-6">
                Une expertise{" "}
                <span className="text-gradient-gold">complète</span>
              </h2>
              <p className="text-carbon-400 leading-relaxed mb-8">
                La fibre de carbone est un matériau exigeant qui ne pardonne
                pas les approximations. Notre maîtrise technique couvre
                l'ensemble du processus, de la préparation des moules à la
                finition finale.
              </p>
              <div className="space-y-4">
                {expertise.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 border-b border-carbon-800 pb-4 last:border-0"
                  >
                    <div className="w-2 h-2 bg-gold-500 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-white mr-2">
                        {item.label} :
                      </span>
                      <span className="text-sm text-carbon-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Stratification", icon: Gem },
                  { label: "Moulage", icon: Target },
                  { label: "Recouvrement", icon: Hammer },
                  { label: "Finition", icon: Award },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-carbon-800 bg-carbon-900 p-6 flex flex-col items-center text-center gap-3 hover:border-carbon-700 transition-colors group"
                  >
                    <item.icon
                      size={24}
                      className="text-gold-500 group-hover:text-gold-300 transition-colors"
                    />
                    <span className="text-sm font-medium text-carbon-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-carbon-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-carbon-400 mb-8">
              Votre projet mérite une attention artisanale. Contactez-nous pour
              discuter de votre idée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Demander un Devis
                <ArrowRight size={16} />
              </Link>
              <Link href="/realisations" className="btn-secondary">
                Voir nos Réalisations
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
