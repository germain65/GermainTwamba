// Fichier : components/PdfPreview.tsx
// Rôle    : Visionneuse d'aperçu PDF interactive (navigation entre pages, vignettes)

'use client';

import { useState } from 'react';

interface PdfPreviewProps {
  pages: string[];
  title: string;
  pdfUrl?: string;
}

export default function PdfPreview({ pages, title, pdfUrl }: PdfPreviewProps) {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) =>
    setCurrent(Math.min(pages.length - 1, Math.max(0, index)));

  const btnClass =
    'min-h-11 min-w-11 border border-rule px-3 text-sm hover:bg-tint disabled:opacity-40 disabled:cursor-not-allowed';

  return (
    <section
      aria-label={`Aperçu de ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') goTo(current + 1);
        if (e.key === 'ArrowLeft') goTo(current - 1);
      }}
    >
      {/* Barre de navigation */}
      <div className="flex items-center justify-between gap-3 pb-3">
        <p className="text-sm text-mute" aria-live="polite">
          Page {current + 1} sur {pages.length} de l&apos;extrait
        </p>
        <div className="flex gap-2">
          <button
            className={btnClass}
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Page précédente"
          >
            ← Précédente
          </button>
          <button
            className={btnClass}
            onClick={() => goTo(current + 1)}
            disabled={current === pages.length - 1}
            aria-label="Page suivante"
          >
            Suivante →
          </button>
        </div>
      </div>

      {/* Page principale */}
      <div className="border border-rule bg-tint p-2 sm:p-4">
        <img
          src={pages[current]}
          alt={`${title}, page ${current + 1} de l'aperçu`}
          className="mx-auto h-auto max-h-[85vh] w-auto max-w-full shadow-sm"
        />
      </div>

      {/* Vignettes */}
      <ul className="mt-3 flex gap-2 overflow-x-auto pb-2" aria-label="Vignettes de navigation">
        {pages.map((page, k) => (
          <li key={page} className="shrink-0">
            <button
              onClick={() => setCurrent(k)}
              aria-label={`Aller à la page ${k + 1}`}
              aria-current={k === current ? 'true' : undefined}
              className={`block w-16 border-2 transition-colors ${
                k === current ? 'border-accent' : 'border-transparent hover:border-rule'
              }`}
            >
              <img src={page} alt="" loading="lazy" className="w-full" />
            </button>
          </li>
        ))}
      </ul>

      {/* Lien PDF complet */}
      {pdfUrl && (
        <p className="mt-3 text-sm">
          <a
            className="underline hover:text-accent"
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ouvrir le PDF complet dans un nouvel onglet ↗
          </a>
        </p>
      )}
    </section>
  );
}
