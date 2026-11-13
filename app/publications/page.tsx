// Fichier : app/publications/page.tsx
// Rôle    : Liste des publications scientifiques, manuels et cahiers pédagogiques
// Auteur  : Germain-Junior TWAMBA

import type { Metadata } from 'next';
import Link from 'next/link';
import { publications } from '@/data/content';
import { asset } from '@/data/site';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Manuels, notes scientifiques et communications rédigés par Germain-Junior TWAMBA.',
  alternates: { canonical: '/publications/' },
};

export default function PublicationsPage() {
  return (
    <div className="pt-14 pb-16">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Bibliographie de l&apos;auteur
        </span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-ink">
          Publications &amp; Ouvrages
        </h1>
        <p className="mt-4 text-base text-mute leading-relaxed">
          Cette bibliographie rassemble les ouvrages de la collection, leurs références de dépôt et un recueil d’exercices signalé sur des plateformes publiques. Le tome II dispose d’une notice Zenodo avec DOI ; les liens distinguent les fiches de la bibliothèque des références externes.
        </p>
      </header>

      {/* Liste des publications */}
      <ul className="max-w-4xl border-t-2 border-ink">
        {publications.map((p, idx) => (
          <li
            key={p.title}
            className="border-b border-rule py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 hover:bg-tint/20 px-2 transition-colors"
          >
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-mute">0{idx + 1}.</span>
                {p.badge && (
                  <span className="border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-mono text-accent">
                    {p.badge}
                  </span>
                )}
                {p.pages && (
                  <span className="text-xs text-mute font-mono">
                    &middot; {p.pages} pages
                  </span>
                )}
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-ink">
                {p.href ? (
                  <Link href={p.href} className="hover:text-accent hover:underline">
                    {p.title}
                  </Link>
                ) : (
                  p.title
                )}
              </h2>

              <p className="text-sm text-mute">
                {p.venue} &middot; <span className="font-mono">{p.year}</span>
              </p>
              {p.citation && <p className="max-w-2xl pt-1 text-sm leading-relaxed text-ink/80">{p.citation}</p>}
              {p.externalHref && (
                <a href={p.externalHref} target="_blank" rel="noopener noreferrer" className="inline-flex pt-1 text-sm font-medium text-accent underline underline-offset-4 hover:text-ink">
                  {p.title === 'Exercices d’algèbre' ? 'Voir la fiche MonBestSeller' : 'Consulter la notice Zenodo'} &nearr;
                </a>
              )}
              {p.title === 'Exercices d’algèbre' && (
                <a href="https://fr.scribd.com/document/896306264/alg-5" target="_blank" rel="noopener noreferrer" className="inline-flex pt-1 text-sm font-medium text-accent underline underline-offset-4 hover:text-ink">
                  Voir le document sur Scribd &nearr;
                </a>
              )}
            </div>

            {p.href && (
              <div className="flex shrink-0 flex-wrap gap-2 self-start sm:self-center">
                <Link
                  href={p.href}
                  className="inline-flex min-h-10 items-center border border-ink px-4 text-xs font-medium hover:bg-ink hover:text-paper transition-colors"
                >
                  Consulter la fiche &rarr;
                </Link>
                {p.downloadHref && (
                  <a href={asset(p.downloadHref)} download className="inline-flex min-h-10 items-center border border-rule px-4 text-xs font-medium hover:bg-tint">
                    Télécharger le PDF ↓
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
