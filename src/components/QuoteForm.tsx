"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Upload,
  X,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { clsx } from "clsx";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis (2 caractères min.)"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Sélectionnez un service"),
  vehicle: z.string().optional(),
  partDescription: z
    .string()
    .min(10, "Décrivez votre projet (10 caractères min.)"),
  finish: z.string().min(1, "Sélectionnez une finition"),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  { value: "creation", label: "Création sur-mesure" },
  { value: "recouvrement", label: "Recouvrement carbone" },
  { value: "reparation", label: "Réparation / Restauration" },
  { value: "custom", label: "Objet custom (hors auto)" },
  { value: "autre", label: "Autre / Je ne sais pas encore" },
];

const finishOptions = [
  { value: "brillant", label: "Brillant (Glossy)" },
  { value: "mat", label: "Mat" },
  { value: "satin", label: "Satin" },
  { value: "soft-touch", label: "Soft-touch" },
  { value: "indecis", label: "Indécis / Besoin de conseils" },
];

const budgetOptions = [
  { value: "-100", label: "Moins de 100€" },
  { value: "100-300", label: "100€ – 300€" },
  { value: "300-600", label: "300€ – 600€" },
  { value: "600-1000", label: "600€ – 1 000€" },
  { value: "+1000", label: "Plus de 1 000€" },
  { value: "flexible", label: "Flexible / À discuter" },
];

interface UploadedFile {
  file: File;
  preview: string;
  id: string;
}

export default function QuoteForm() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploadError, setUploadError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    setUploadError("");

    const newFiles: UploadedFile[] = [];
    const remaining = MAX_FILES - uploadedFiles.length;

    Array.from(files)
      .slice(0, remaining)
      .forEach((file) => {
        if (!file.type.startsWith("image/")) {
          setUploadError("Seules les images sont acceptées.");
          return;
        }
        if (file.size > MAX_FILE_SIZE) {
          setUploadError("Chaque image doit faire moins de 10 Mo.");
          return;
        }
        newFiles.push({
          file,
          preview: URL.createObjectURL(file),
          id: Math.random().toString(36).slice(2),
        });
      });

    if (uploadedFiles.length + newFiles.length > MAX_FILES) {
      setUploadError(`Maximum ${MAX_FILES} images.`);
    }

    setUploadedFiles((prev) => [...prev, ...newFiles].slice(0, MAX_FILES));
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => {
      const removed = prev.find((f) => f.id === id);
      if (removed) URL.revokeObjectURL(removed.preview);
      return prev.filter((f) => f.id !== id);
    });
  };

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => v && formData.append(k, v));
      uploadedFiles.forEach((f) => formData.append("images", f.file));

      const res = await fetch("/api/devis", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Erreur serveur");
      setStatus("success");
      reset();
      setUploadedFiles([]);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 border border-gold-500/50 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-gold-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Demande envoyée !
        </h3>
        <p className="text-carbon-400 max-w-sm mb-8">
          Merci pour votre demande. Nous vous répondrons sous 48h avec un devis
          personnalisé.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary !text-xs"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Identity */}
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-carbon-400 mb-5 flex items-center gap-3">
          <span className="text-gold-500">01</span>
          <span>Vos coordonnées</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label-field">Prénom *</label>
            <input
              {...register("firstName")}
              placeholder="Jean"
              className={clsx("input-field", errors.firstName && "border-red-500/50")}
            />
            {errors.firstName && (
              <p className="text-xs text-red-400 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="label-field">Nom *</label>
            <input
              {...register("lastName")}
              placeholder="Dupont"
              className={clsx("input-field", errors.lastName && "border-red-500/50")}
            />
            {errors.lastName && (
              <p className="text-xs text-red-400 mt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label className="label-field">Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="jean@exemple.fr"
              className={clsx("input-field", errors.email && "border-red-500/50")}
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="label-field">Téléphone</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+33 6 00 00 00 00"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Project */}
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-carbon-400 mb-5 flex items-center gap-3">
          <span className="text-gold-500">02</span>
          <span>Votre projet</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label-field">Type de service *</label>
            <select
              {...register("serviceType")}
              className={clsx("input-field", errors.serviceType && "border-red-500/50")}
            >
              <option value="">Sélectionner...</option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="text-xs text-red-400 mt-1">{errors.serviceType.message}</p>
            )}
          </div>
          <div>
            <label className="label-field">Finition souhaitée *</label>
            <select
              {...register("finish")}
              className={clsx("input-field", errors.finish && "border-red-500/50")}
            >
              <option value="">Sélectionner...</option>
              {finishOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {errors.finish && (
              <p className="text-xs text-red-400 mt-1">{errors.finish.message}</p>
            )}
          </div>
          <div>
            <label className="label-field">Véhicule / Objet concerné</label>
            <input
              {...register("vehicle")}
              placeholder="Ex: BMW M3 E92, Manette Xbox..."
              className="input-field"
            />
          </div>
          <div>
            <label className="label-field">Budget estimé</label>
            <select {...register("budget")} className="input-field">
              <option value="">Sélectionner...</option>
              {budgetOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="label-field">Description de la pièce *</label>
            <textarea
              {...register("partDescription")}
              placeholder="Décrivez précisément la pièce ou les pièces souhaitées, les dimensions si connues, l'emplacement sur le véhicule..."
              rows={4}
              className={clsx(
                "input-field resize-y min-h-[100px]",
                errors.partDescription && "border-red-500/50"
              )}
            />
            {errors.partDescription && (
              <p className="text-xs text-red-400 mt-1">{errors.partDescription.message}</p>
            )}
          </div>
          <div>
            <label className="label-field">Délai souhaité</label>
            <input
              {...register("deadline")}
              placeholder="Ex: Dans 3 semaines, pour le 15 juin..."
              className="input-field"
            />
          </div>
          <div>
            <label className="label-field">Message complémentaire</label>
            <textarea
              {...register("message")}
              placeholder="Tout autre détail utile..."
              rows={3}
              className="input-field resize-y"
            />
          </div>
        </div>
      </div>

      {/* Images */}
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-carbon-400 mb-5 flex items-center gap-3">
          <span className="text-gold-500">03</span>
          <span>Photos de référence</span>
          <span className="text-carbon-600 normal-case tracking-normal font-normal">
            (optionnel — max. {MAX_FILES} images, 10Mo chacune)
          </span>
        </h3>

        {/* Drop zone */}
        <div
          className={clsx(
            "border-2 border-dashed border-carbon-700 p-8 text-center cursor-pointer hover:border-gold-500/50 transition-colors duration-200",
            uploadedFiles.length >= MAX_FILES && "opacity-50 pointer-events-none"
          )}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
          }}
        >
          <Upload size={28} className="text-carbon-500 mx-auto mb-3" />
          <p className="text-sm text-carbon-400">
            Glissez vos images ici ou{" "}
            <span className="text-gold-400 underline">cliquez pour parcourir</span>
          </p>
          <p className="text-xs text-carbon-600 mt-1">
            JPG, PNG, WEBP — max. 10Mo par image
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {uploadError && (
          <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
            <AlertCircle size={12} />
            {uploadError}
          </p>
        )}

        {/* Previews */}
        {uploadedFiles.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
            {uploadedFiles.map((f) => (
              <div key={f.id} className="relative group aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.preview}
                  alt={f.file.name}
                  className="w-full h-full object-cover border border-carbon-700"
                />
                <button
                  type="button"
                  onClick={() => removeFile(f.id)}
                  className="absolute top-1 right-1 w-5 h-5 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Supprimer"
                >
                  <X size={10} className="text-white" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-carbon-950/60 px-1 py-0.5">
                  <p className="text-[9px] text-carbon-400 truncate">{f.file.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="flex items-center gap-3 border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} />
          Une erreur est survenue. Veuillez réessayer ou nous contacter par email.
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma Demande de Devis
              <ArrowRight size={16} />
            </>
          )}
        </button>
        <p className="text-xs text-carbon-500">
          Réponse garantie sous 48h ouvrés
        </p>
      </div>
    </form>
  );
}
