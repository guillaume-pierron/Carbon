import { Metadata } from "next";
import ProductCard, { type Product } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Pièces en fibre de carbone disponibles en stock. Habillages, coques, objets sur-mesure — livraison rapide.",
};

const products: Product[] = [
  {
    id: "volant-001",
    name: "Habillage de Volant",
    category: "Intérieur",
    price: 350,
    image: "/volant.png",
    description:
      "Recouvrement carbone pour volant. Finition brillante, compatible de nombreux véhicules.",
    stock: 1,
    badge: "Dernière pièce",
  },
  {
    id: "xbox-001",
    name: "Manette Xbox Carbonée",
    category: "Custom",
    price: 185,
    image: "/xbox.png",
    description:
      "Coque complète en fibre de carbone pour manette Xbox Series. Légère et résistante.",
    stock: 2,
  },
  {
    id: "boite-001",
    name: "Boîte Carbone Sur-Mesure",
    category: "Custom",
    price: 290,
    image: "/boite.png",
    description:
      "Boîte en fibre de carbone fabriquée à la main. Idéale pour rangement de luxe.",
    stock: 1,
    badge: "Dernière pièce",
  },
  {
    id: "board-001",
    name: "Tableau de Bord",
    category: "Intérieur",
    price: 850,
    image: "/board.png",
    description:
      "Habillage complet de tableau de bord en carbone. Finition satin, qualité premium.",
    stock: 1,
    badge: "Pièce unique",
  },
];

export default function BoutiquePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/5 px-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">
              Stock disponible
            </span>
          </div>
          <h1 className="section-title text-zinc-900 mb-4">
            La <span className="text-gradient-gold">Boutique</span>
          </h1>
          <p className="section-subtitle">
            Pièces fabriquées, disponibles immédiatement. Chaque article est unique — commandez
            avant rupture de stock.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Livraison soignée",
                desc: "Chaque pièce emballée avec soin pour une livraison sans dommage.",
              },
              {
                title: "Paiement flexible",
                desc: "Virement bancaire ou paiement à la livraison selon accord.",
              },
              {
                title: "Pièces uniques",
                desc: "Chaque article est fabriqué à la main en exemplaire limité.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-sm tracking-widest uppercase text-gold-500 font-medium">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
