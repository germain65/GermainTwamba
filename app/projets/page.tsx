// Fichier : app/projets/page.tsx
// Rôle    : Page des projets scientifiques, éditoriaux et informatiques
// Auteur  : Germain-Junior TWAMBA

import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Projets & Réalisations',
  description: 'Projets éditoriaux, informatiques et scientifiques menés par Germain-Junior TWAMBA.',
  alternates: { canonical: '/projets/' },
};

export default function ProjectsPage() {
  return (
    <div className="pt-14 pb-16">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Travaux &amp; Réalisations
        </span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-ink">
          Projets scientifiques et numériques
        </h1>
        <p className="mt-4 text-base text-mute leading-relaxed">
          Des manuels de mathématiques aux outils éducatifs et numériques, ces projets relient pédagogie, édition et développement. Les liens ouvrent les dépôts précis ou les notices bibliographiques associées.
        </p>
      </header>

      {/* Grille de projets */}
      <div className="space-y-8 max-w-4xl">
        {projects.map((p, idx) => (
          <article
            key={p.title}
            className="border-2 border-ink bg-paper p-6 sm:p-8 hover:shadow-md transition-shadow relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-rule pb-4">
              <span className="font-mono text-xs text-accent font-bold">PROJET 0{idx + 1}</span>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-rule px-2 py-0.5 text-xs font-mono text-mute bg-tint/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-ink">
              {p.title}
            </h2>

            <p className="mt-3 text-base text-ink/90 leading-relaxed">
              {p.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-rule text-sm">
              {p.link && (p.link.startsWith('http') ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline underline-offset-4">
                  {p.sourceLabel ?? 'Accéder au projet'} &nearr;
                </a>
              ) : (
                <Link href={p.link} className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline underline-offset-4">
                  {p.sourceLabel ?? 'Accéder au projet'} &rarr;
                </Link>
              ))}
              {p.externalHref && (
                <a
                  href={p.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium underline hover:text-accent underline-offset-4"
                >
                  {p.externalLabel ?? 'Consulter la source'} &nearr;
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
