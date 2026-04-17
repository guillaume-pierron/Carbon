"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { clsx } from "clsx";

type Category = "Tous" | "Intérieur" | "Extérieur" | "Custom";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "Tous">;
  description: string;
  tags: string[];
  size: "normal" | "wide" | "tall";
  colors: string;
  accentLine: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Habillage volant BMW M3",
    category: "Intérieur",
    description: "Recouvrement complet en carbone 2×2, finition brillante",
    tags: ["Volant", "BMW", "Brillant"],
    size: "wide",
    colors: "from-zinc-900 via-zinc-800 to-zinc-900",
    accentLine: "from-gold-600 to-gold-400",
  },
  {
    id: 2,
    title: "Diffuseur Audi RS",
    category: "Extérieur",
    description: "Diffuseur arrière sur-mesure, carbone 3K mat",
    tags: ["Diffuseur", "Audi", "Mat"],
    size: "normal",
    colors: "from-stone-900 via-zinc-900 to-stone-900",
    accentLine: "from-zinc-400 to-zinc-600",
  },
  {
    id: 3,
    title: "Manette Xbox Custom",
    category: "Custom",
    description: "Recouvrement carbone et cuir, édition unique",
    tags: ["Gaming", "Custom", "Unique"],
    size: "normal",
    colors: "from-neutral-900 via-zinc-900 to-neutral-900",
    accentLine: "from-gold-500 to-gold-300",
  },
  {
    id: 4,
    title: "Console centrale Porsche",
    category: "Intérieur",
    description: "Console centrale entière habillée carbone",
    tags: ["Console", "Porsche", "Sur-mesure"],
    size: "normal",
    colors: "from-zinc-900 to-zinc-800",
    accentLine: "from-gold-600 to-gold-400",
  },
  {
    id: 5,
    title: "Coques de rétroviseurs",
    category: "Extérieur",
    description: "Rétroviseurs carbone 2×2 brillant, paire complète",
    tags: ["Rétros", "Extérieur", "Brillant"],
    size: "normal",
    colors: "from-zinc-900 to-stone-900",
    accentLine: "from-zinc-300 to-zinc-500",
  },
  {
    id: 6,
    title: "Aileron GT sur-mesure",
    category: "Extérieur",
    description: "Aileron arrière GT conçu et fabriqué de zéro",
    tags: ["Aileron", "Création", "GT"],
    size: "tall",
    colors: "from-zinc-900 via-stone-900 to-zinc-900",
    accentLine: "from-zinc-400 to-zinc-600",
  },
  {
    id: 7,
    title: "Tableau de bord Maserati",
    category: "Intérieur",
    description: "Habillage complet tableau de bord, 12 pièces",
    tags: ["Dashboard", "Maserati", "Complet"],
    size: "wide",
    colors: "from-zinc-900 to-zinc-800",
    accentLine: "from-gold-500 to-gold-300",
  },
  {
    id: 8,
    title: "Casque moto custom",
    category: "Custom",
    description: "Casque intégral recouvert carbone et design personnalisé",
    tags: ["Moto", "Casque", "Custom"],
    size: "normal",
    colors: "from-neutral-900 to-zinc-900",
    accentLine: "from-gold-600 to-gold-400",
  },
  {
    id: 9,
    title: "Prise d'air capot",
    category: "Extérieur",
    description: "Prise d'air bonnet sur-mesure, carbone 3K",
    tags: ["Capot", "Air", "3K"],
    size: "normal",
    colors: "from-stone-900 to-zinc-900",
    accentLine: "from-zinc-300 to-zinc-500",
  },
];

const categories: Category[] = ["Tous", "Intérieur", "Extérieur", "Custom"];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden group cursor-pointer border border-carbon-800 hover:border-carbon-600 transition-all duration-500",
        project.size === "wide" && "col-span-2",
        project.size === "tall" && "row-span-2",
        "bg-carbon-900"
      )}
    >
      {/* Visual placeholder */}
      <div
        className={clsx(
          "relative bg-gradient-to-br",
          project.colors,
          project.size === "wide" ? "aspect-[2/1]" : project.size === "tall" ? "aspect-[1/2]" : "aspect-[4/3]"
        )}
      >
        {/* Carbon weave */}
        <div className="absolute inset-0 carbon-weave opacity-70" />

        {/* Accent gradient on hover */}
        <div
          className={clsx(
            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-15 transition-opacity duration-500",
            project.accentLine
          )}
        />

        {/* Decorative pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 border border-white/10 rotate-45 group-hover:scale-125 group-hover:rotate-[55deg] transition-all duration-700" />
          <div className="absolute w-10 h-10 border border-white/5 rotate-45" />
        </div>

        {/* Top label */}
        <div className="absolute top-4 left-4">
          <span
            className={clsx(
              "text-xs tracking-widest uppercase font-semibold px-3 py-1 border",
              project.category === "Intérieur" &&
                "border-gold-500/30 text-gold-400 bg-carbon-950/60",
              project.category === "Extérieur" &&
                "border-carbon-500/30 text-carbon-300 bg-carbon-950/60",
              project.category === "Custom" &&
                "border-gold-400/30 text-gold-300 bg-carbon-950/60"
            )}
          >
            {project.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-carbon-950/0 group-hover:bg-carbon-950/30 transition-all duration-300" />
      </div>

      {/* Info */}
      <div className="p-5 border-t border-carbon-800">
        <h3 className="font-semibold text-white mb-1 group-hover:text-gold-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-carbon-500 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-carbon-800 text-carbon-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const filtered =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 carbon-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/60 to-carbon-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4 block">
              Portfolio
            </span>
            <h1 className="section-title text-white mb-6">
              Nos <span className="text-gradient-gold">réalisations</span>
            </h1>
            <p className="section-subtitle text-carbon-400">
              Chaque projet est unique. Découvrez quelques exemples de notre
              travail : intérieur, extérieur, et objets custom.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={clsx(
                    "px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-200 border",
                    activeCategory === cat
                      ? "bg-gold-500 text-carbon-950 border-gold-500"
                      : "border-carbon-700 text-carbon-400 hover:border-carbon-500 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {filtered.map((project, i) => (
              <AnimatedSection
                key={project.id}
                delay={i * 60}
                className={clsx(
                  project.size === "wide" && "sm:col-span-2",
                  project.size === "tall" && "row-span-2"
                )}
              >
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-carbon-500">
              Aucun projet dans cette catégorie.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-carbon-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre projet sera le prochain
            </h2>
            <p className="text-carbon-400 mb-8">
              Décrivez-nous votre idée et obtenez un devis gratuit.
            </p>
            <Link href="/contact" className="btn-primary">
              Lancer Mon Projet
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
