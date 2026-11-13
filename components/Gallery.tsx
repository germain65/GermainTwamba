// Fichier : components/Gallery.tsx
// Rôle    : Galerie photos responsive avec lightbox au clic et support du basePath
// Auteur  : Germain-Junior TWAMBA

'use client';

import { useState } from 'react';
import { asset } from '@/data/site';

interface Photo {
  src: string;
  alt: string;
  label?: string;
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const go = (d: number) =>
    setOpen((v) => v === null ? null : (v + d + photos.length) % photos.length);

  return (
    <>
      {/* Grille */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {photos.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden border border-rule focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Ouvrir : ${p.alt}`}
          >
            <img
              src={asset(p.src)}
              alt={p.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {p.label && (
              <span className="absolute bottom-0 left-0 right-0 bg-ink/60 px-2 py-1 text-xs text-paper opacity-0 transition-opacity group-hover:opacity-100">
                {p.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90"
          role="dialog"
          aria-modal="true"
          aria-label={photos[open].alt}
          onClick={() => setOpen(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(null);
            if (e.key === 'ArrowRight') go(1);
            if (e.key === 'ArrowLeft') go(-1);
          }}
          tabIndex={0}
        >
          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={asset(photos[open].src)}
              alt={photos[open].alt}
              className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl"
            />
            {photos[open].label && (
              <p className="mt-2 text-center text-sm text-paper/80">{photos[open].label}</p>
            )}
          </div>

          {/* Fermer */}
          <button
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 min-h-11 min-w-11 text-2xl text-paper hover:text-accent"
            aria-label="Fermer"
          >
            ✕
          </button>

          {/* Précédent */}
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 min-h-11 min-w-11 text-2xl text-paper hover:text-accent"
            aria-label="Photo précédente"
          >
            ‹
          </button>

          {/* Suivant */}
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 min-h-11 min-w-11 text-2xl text-paper hover:text-accent"
            aria-label="Photo suivante"
          >
            ›
          </button>

          {/* Compteur */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-paper/60">
            {open + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
