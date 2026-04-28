import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Demande de Devis",
  description:
    "Demandez votre devis gratuit pour une pièce en fibre de carbone sur-mesure. Formulaire détaillé avec upload de photos. Réponse sous 48h.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@bbcarbon.fr",
    href: "mailto:contact@bbcarbon.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 00 00 00 00",
    href: "tel:+33600000000",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "France",
    href: null,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun–Ven 9h–18h",
    href: null,
  },
];

const faq = [
  {
    q: "Quel est le délai de fabrication ?",
    a: "Les délais varient selon la complexité : de 5 à 10 jours pour un recouvrement simple, jusqu'à 4–6 semaines pour une création sur-mesure complexe.",
  },
  {
    q: "Livraison possible ?",
    a: "Oui, nous expédions dans toute la France (et Europe sur demande). L'emballage est soigné pour protéger chaque pièce.",
  },
  {
    q: "Je n'ai pas de pièce à envoyer, c'est possible ?",
    a: "Oui ! Pour les créations sur-mesure, nous pouvons travailler à partir de vos mesures, plans ou photos détaillées.",
  },
  {
    q: "Le carbone change-t-il avec le temps ?",
    a: "Nos pièces sont vernies avec des résines UV stables. Avec un entretien basique, elles conservent leur éclat pendant des années.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4 block">
              Devis Gratuit
            </span>
            <h1 className="section-title text-zinc-900 mb-6">
              Démarrons votre{" "}
              <span className="text-gradient-gold">projet</span>
            </h1>
            <p className="section-subtitle">
              Remplissez le formulaire ci-dessous. Plus vous nous donnez de
              détails, plus notre devis sera précis. Réponse garantie sous 48h.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <AnimatedSection direction="left">
                {/* Contact info */}
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5">
                    Nous contacter
                  </h2>
                  <ul className="space-y-4">
                    {contactInfo.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <div className="w-8 h-8 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <item.icon size={14} className="text-gold-500" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-zinc-900 hover:text-gold-600 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-sm text-zinc-900">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why us */}
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5 flex items-center gap-2">
                    <MessageSquare size={12} />
                    Pourquoi nous choisir
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Devis gratuit et sans engagement",
                      "Conseils personnalisés inclus",
                      "Matériaux haut de gamme garantis",
                      "Fabrication 100% artisanale",
                      "Suivi photos pendant la fabrication",
                      "Satisfait ou on reprend",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gold-500 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="bg-white border border-gray-200 p-8 md:p-10">
                  <h2 className="text-lg font-bold text-zinc-900 mb-1">
                    Formulaire de devis
                  </h2>
                  <p className="text-sm text-gray-400 mb-8">
                    Tous les champs marqués * sont obligatoires.
                  </p>
                  <QuoteForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-zinc-900 mb-10 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-px bg-gray-200">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="bg-white p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-zinc-900 mb-2 text-sm">
                    {item.q}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
