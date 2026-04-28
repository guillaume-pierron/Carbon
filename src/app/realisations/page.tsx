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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Habillage volant BMW M3",
    category: "Intérieur",
    description: "Recouvrement complet en carbone 2×2, finition brillante",
    tags: ["Volant", "BMW", "Brillant"],
    size: "wide",
  },
  {
    id: 2,
    title: "Diffuseur Audi RS",
    category: "Extérieur",
    description: "Diffuseur arrière sur-mesure, carbone 3K mat",
    tags: ["Diffuseur", "Audi", "Mat"],
    size: "normal",
  },
  {
    id: 3,
    title: "Manette Xbox Custom",
    category: "Custom",
    description: "Recouvrement carbone et cuir, édition unique",
    tags: ["Gaming", "Custom", "Unique"],
    size: "normal",
  },
  {
    id: 4,
    title: "Console centrale Porsche",
    category: "Intérieur",
    description: "Console centrale entière habillée carbone",
    tags: ["Console", "Porsche", "Sur-mesure"],
    size: "normal",
  },
  {
    id: 5,
    title: "Coques de rétroviseurs",
    category: "Extérieur",
    description: "Rétroviseurs carbone 2×2 brillant, paire complète",
    tags: ["Rétros", "Extérieur", "Brillant"],
    size: "normal",
  },
  {
    id: 6,
    title: "Aileron GT sur-mesure",
    category: "Extérieur",
    description: "Aileron arrière GT conçu et fabriqué de zéro",
    tags: ["Aileron", "Création", "GT"],
    size: "tall",
  },
  {
    id: 7,
    title: "Tableau de bord Maserati",
    category: "Intérieur",
    description: "Habillage complet tableau de bord, 12 pièces",
    tags: ["Dashboard", "Maserati", "Complet"],
    size: "wide",
  },
  {
    id: 8,
    title: "Casque moto custom",
    category: "Custom",
    description: "Casque intégral recouvert carbone et design personnalisé",
    tags: ["Moto", "Casque", "Custom"],
    size: "normal",
  },
  {
    id: 9,
    title: "Prise d'air capot",
    category: "Extérieur",
    description: "Prise d'air bonnet sur-mesure, carbone 3K",
    tags: ["Capot", "Air", "3K"],
    size: "normal",
  },
];

const categories: Category[] = ["Tous", "Intérieur", "Extérieur", "Custom"];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden group cursor-pointer border border-gray-200 hover:border-gray-400 transition-all duration-500 bg-white",
        project.size === "wide" && "col-span-2",
        project.size === "tall" && "row-span-2"
      )}
    >
      {/* Visual placeholder */}
      <div
        className={clsx(
          "relative bg-gray-100",
          project.size === "wide" ? "aspect-[2/1]" : project.size === "tall" ? "aspect-[1/2]" : "aspect-[4/3]"
        )}
      >
        <div className="absolute inset-0 carbon-weave opacity-50" />

        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 border border-gray-300 rotate-45 group-hover:scale-125 group-hover:rotate-[55deg] transition-all duration-700" />
          <div className="absolute w-10 h-10 border border-gray-200 rotate-45" />
        </div>

        {/* Top label */}
        <div className="absolute top-4 left-4">
          <span
            className={clsx(
              "text-xs tracking-widest uppercase font-semibold px-3 py-1 border bg-white",
              project.category === "Intérieur" && "border-gold-500/40 text-gold-600",
              project.category === "Extérieur" && "border-gray-300 text-gray-600",
              project.category === "Custom" && "border-gold-400/40 text-gold-500"
            )}
          >
            {project.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
      </div>

      {/* Info */}
      <div className="p-5 border-t border-gray-100">
        <h3 className="font-semibold text-zinc-900 mb-1 group-hover:text-gold-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500">
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
      <section className="relative pt-32 pb-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4 block">
              Portfolio
            </span>
            <h1 className="section-title text-zinc-900 mb-6">
              Nos <span className="text-gradient-gold">réalisations</span>
            </h1>
            <p className="section-subtitle">
              Chaque projet est unique. Découvrez quelques exemples de notre
              travail : intérieur, extérieur, et objets custom.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 pb-24 bg-white">
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
                      ? "bg-gold-600 text-white border-gold-600"
                      : "border-gray-300 text-gray-500 hover:border-gray-500 hover:text-zinc-900"
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
            <div className="text-center py-20 text-gray-400">
              Aucun projet dans cette catégorie.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Votre projet sera le prochain
            </h2>
            <p className="text-gray-500 mb-8">
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
