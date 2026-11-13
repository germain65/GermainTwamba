// Fichier : components/Gallery.tsx
// Rôle    : Galerie photos responsive avec lightbox au clic et support du basePath
// Auteur  : Germain-Junior TWAMBA

'use client';

import { useState, useRef, useEffect } from 'react';
import { asset } from '@/data/site';

interface Photo {
  src: string;
  alt: string;
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  // Référence sur le conteneur de la lightbox pour y déplacer le focus à l'ouverture
  const lightboxRef = useRef<HTMLDivElement>(null);
  // Élément qui avait le focus avant l'ouverture, pour le lui rendre à la fermeture
  const lastFocused = useRef<HTMLElement | null>(null);

  const go = (d: number) =>
    setOpen((v) => v === null ? null : (v + d + photos.length) % photos.length);

  const openAt = (i: number) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setOpen(i);
  };

  const close = () => {
    setOpen(null);
    // Rend le focus au bouton de la vignette qui a ouvert la lightbox
    requestAnimationFrame(() => lastFocused.current?.focus());
  };

  // Piège de focus : Tab / Maj+Tab restent à l'intérieur de la boîte de dialogue
  const trapTab = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab') return;
    const items = lightboxRef.current?.querySelectorAll<HTMLElement>('button');
    if (!items || items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === lightboxRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  // Déplace le focus sur la lightbox dès qu'elle s'ouvre
  useEffect(() => {
    if (open !== null) {
      lightboxRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      {/* Grille */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {photos.map((p, i) => (
          <button
            key={p.src}
            onClick={() => openAt(i)}
            className="group relative overflow-hidden border border-rule focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Ouvrir : ${p.alt}`}
          >
            <img
              src={asset(p.src)}
              alt={p.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90"
          role="dialog"
          aria-modal="true"
          aria-label={photos[open].alt}
          onClick={close}
          onKeyDown={(e) => {
            trapTab(e);
            if (e.key === 'Escape') close();
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
          </div>

          {/* Fermer */}
          <button
            onClick={close}
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
