// Fichier : components/Footer.tsx
// Rôle    : Pied de page complet, éditorial et universitaire
// Auteur  : Germain-Junior TWAMBA

'use client';

import Link from 'next/link';
import { site, nav } from '@/data/site';
import { allBooks } from '@/data/books';
import { Mark } from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-28 border-t-2 border-ink bg-tint/40 pt-14 pb-12 transition-colors">
      <div className="mx-auto max-w-6xl px-5">
        {/* Grille principale à 4 colonnes */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Colonne 1 : Identité & Philosophie */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 text-ink hover:text-accent">
              <Mark size={32} />
              <span className="font-serif text-lg font-semibold tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-mute">
              Site officiel et bibliothèque numérique consacrée au <strong>recueil, à la conservation et au partage libre</strong> des ouvrages scientifiques et mathématiques de l&apos;auteur.
            </p>
            <p className="text-xs leading-relaxed text-mute border-l-2 border-accent pl-3">
              Étudiant en sciences de l&apos;ingénieur à l&apos;<strong>UCLouvain</strong> et fondateur du <em>Club des Divergents</em> à Goma (RDC).
            </p>
          </div>

          {/* Colonne 2 : Ouvrages en libre accès */}
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide text-ink uppercase">
              Ouvrages de l&apos;auteur
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {allBooks.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/bibliotheque/${b.slug}/`}
                    className="group block hover:text-accent"
                  >
                    <span className="font-medium underline-offset-4 group-hover:underline">
                      {b.title}
                    </span>
                    <span className="block text-xs text-mute">
                      Tome {b.volume} &middot; {b.pageCount} pages &middot; Téléchargement direct
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-rule/60">
                <Link
                  href="/bibliotheque/"
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-medium"
                >
                  &rarr; Ouvrir la bibliothèque complète
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Navigation rapide */}
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide text-ink uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-mute hover:text-ink transition-colors hover:underline underline-offset-4"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact, Réseaux & Licence */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold tracking-wide text-ink uppercase">
              Contact & Réseaux
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-mute hover:text-accent break-all"
                  aria-label="Envoyer un e-mail"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/germain65"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex items-center gap-2 text-mute hover:text-accent"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub &middot; @germain65</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/germain-junior-twamba-697519338/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex items-center gap-2 text-mute hover:text-accent"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn &middot; Germain-Junior Twamba</span>
                </a>
              </li>
            </ul>

            <div className="pt-2 text-xs text-mute leading-relaxed border-t border-rule/60">
              <span className="font-semibold text-ink">Licence libre :</span> Ouvrages et contenus diffusés sous licence{' '}
              <a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent"
              >
                CC BY-NC-ND 4.0
              </a>.
            </div>
          </div>

        </div>

        {/* Ligne inférieure de clôture */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-rule pt-6 text-xs text-mute sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Germain-Junior TWAMBA. Tous droits réservés.
          </p>
          <p className="text-center sm:text-right">
            Édité par le <strong>Club des Divergents</strong> &mdash; Goma (RDC) &amp; Louvain-la-Neuve (Belgique)
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-ink hover:text-accent font-medium border border-rule px-3 py-1.5 hover:bg-paper transition-colors"
            aria-label="Retourner en haut de page"
          >
            &uarr; Haut de page
          </button>
        </div>
      </div>
    </footer>
  );
}
