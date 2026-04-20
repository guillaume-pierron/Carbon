"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Check } from "lucide-react";
import { clsx } from "clsx";
import { useCart } from "@/context/CartContext";

type Step = "cart" | "form" | "success";

export default function CartSidebar() {
  const { items, isOpen, total, count, removeItem, setQty, clear, close } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  async function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/commande", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer: form, items, total }),
      });
      setStep("success");
      clear();
    } catch {}
    finally {
      setLoading(false);
    }
  }

  function handleClose() {
    close();
    setTimeout(() => setStep("cart"), 300);
  }

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-carbon-950/70 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={handleClose}
      />

      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-full max-w-md bg-carbon-900 z-50 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl border-l border-carbon-800",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-carbon-800">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-gold-400" />
            <span className="text-sm tracking-widest uppercase font-medium text-white">
              {step === "form"
                ? "Coordonnées"
                : step === "success"
                ? "Confirmé"
                : `Panier (${count})`}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1 text-carbon-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {step === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-carbon-500">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-sm tracking-widest uppercase">Panier vide</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b border-carbon-800">
                    <div className="w-20 h-20 bg-carbon-800 flex-shrink-0 overflow-hidden relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 carbon-weave opacity-40" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{item.name}</p>
                      <p className="text-gold-400 font-bold mt-1">
                        {item.price.toLocaleString("fr-FR")} €
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => setQty(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-carbon-700 flex items-center justify-center text-carbon-300 hover:text-white hover:border-carbon-500 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm text-white w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => setQty(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-carbon-700 flex items-center justify-center text-carbon-300 hover:text-white hover:border-carbon-500 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-carbon-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-carbon-800 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase text-carbon-400">Total</span>
                  <span className="text-xl font-black text-gradient-gold">
                    {total.toLocaleString("fr-FR")} €
                  </span>
                </div>
                <p className="text-xs text-carbon-500">
                  Livraison calculée à la commande · Paiement à la livraison ou virement
                </p>
                <button
                  onClick={() => setStep("form")}
                  className="btn-primary w-full justify-center"
                >
                  Commander <ArrowRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {step === "form" && (
          <form onSubmit={handleOrder} className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex-1 px-6 py-4 space-y-4">
              <div>
                <label className="label-field">Nom complet *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-field w-full"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="label-field">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-field w-full"
                  placeholder="jean@exemple.fr"
                />
              </div>
              <div>
                <label className="label-field">Téléphone *</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input-field w-full"
                  placeholder="06 00 00 00 00"
                />
              </div>
              <div>
                <label className="label-field">Adresse de livraison</label>
                <textarea
                  rows={3}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="input-field w-full resize-none"
                  placeholder="12 rue de la Paix, 75001 Paris"
                />
              </div>
              <div className="py-2 border-t border-carbon-800">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm py-1">
                    <span className="text-carbon-400">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-white">
                      {(item.price * item.quantity).toLocaleString("fr-FR")} €
                    </span>
                  </div>
                ))}
                <div className="flex justify-between font-bold mt-2 pt-2 border-t border-carbon-800">
                  <span className="text-carbon-300">Total</span>
                  <span className="text-gradient-gold">{total.toLocaleString("fr-FR")} €</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-5 border-t border-carbon-800 space-y-3">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-50"
              >
                {loading ? "Envoi..." : "Confirmer la commande"}
                {!loading && <ArrowRight size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="btn-ghost w-full justify-center text-xs"
              >
                Retour au panier
              </button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-6">
            <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
              <Check size={28} className="text-gold-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Commande envoyée !</h3>
              <p className="text-carbon-400 text-sm leading-relaxed">
                Nous avons bien reçu votre commande et vous recontacterons très prochainement
                pour confirmer les modalités de livraison et de paiement.
              </p>
            </div>
            <button onClick={handleClose} className="btn-secondary">
              Fermer
            </button>
          </div>
        )}
      </div>
    </>
  );
}
