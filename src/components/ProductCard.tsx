"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string | null;
  description: string;
  stock: number;
  badge?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="card-surface group flex flex-col overflow-hidden">
      <div className="relative aspect-square bg-carbon-800 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 carbon-weave opacity-40 flex items-center justify-center">
            <div className="w-12 h-12 border border-white/10 rotate-45" />
          </div>
        )}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold-500/10 border border-gold-500/40 px-2 py-1">
            <span className="text-xs tracking-widest uppercase text-gold-400">
              {product.badge}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/60 to-transparent" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-1">
          {product.category}
        </span>
        <h3 className="text-white font-semibold text-sm mb-2">{product.name}</h3>
        <p className="text-carbon-400 text-xs leading-relaxed mb-4 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-black text-gradient-gold">
            {product.price.toLocaleString("fr-FR")} €
          </span>
          <span className="text-xs text-carbon-500">{product.stock} en stock</span>
        </div>
        <button
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
          className="btn-primary w-full justify-center !py-2 !text-xs"
        >
          <ShoppingCart size={14} />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
