// Fichier : components/Footer.tsx
// Rôle    : Pied de page : identité, ouvrages, navigation, contact, licence
// Auteur  : Germain-Junior TWAMBA

import Link from 'next/link';
import { site, nav, siteUpdatedAt } from '@/data/site';
import { allBooks } from '@/data/books';
import { Mark } from './Logo';

const heading = 'font-serif text-sm font-semibold uppercase tracking-wide text-ink';
const linkClass = 'text-mute underline-offset-4 hover:text-accent hover:underline';
const iconClass = 'h-4 w-4 shrink-0';
// Dans le pied de page, les tomes sont listés dans l'ordre de la collection (tome I, puis II...)
const byVolume = [...allBooks].sort((a, b) => (a.volume ?? 99) - (b.volume ?? 99));

export default function Footer() {
  return (
    <footer className="mt-28 border-t-2 border-ink bg-tint/40 pb-10 pt-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_0.7fr_1.1fr]">
          {/* Identité */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 text-ink hover:text-accent">
              <Mark size={32} />
              <span className="font-serif text-lg font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-mute">
              Bibliothèque numérique d&apos;ouvrages de mathématiques en accès libre, éditée par le{' '}
              <strong className="font-semibold text-ink">Club des Divergents</strong>.
            </p>
          </div>

          {/* Ouvrages */}
          <nav aria-label="Ouvrages">
            <h2 className={heading}>Ouvrages</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {byVolume.map((b) => (
                <li key={b.id}>
                  <Link href={`/bibliotheque/${b.slug}/`} className="group block">
                    <span className="font-medium text-ink underline-offset-4 group-hover:text-accent group-hover:underline">
                      {b.title}
                    </span>
                    <span className="block text-xs text-mute">
                      {b.volume ? `Tome ${b.volume} · ` : ''}{b.pageCount} pages &middot; PDF{b.fileSize ? `, ${b.fileSize}` : ''}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="border-t border-rule/60 pt-3">
                <Link href="/bibliotheque/" className="text-xs font-medium text-accent underline-offset-4 hover:underline">
                  Toute la bibliothèque &rarr;
                </Link>
              </li>
            </ul>
          </nav>

          {/* Navigation */}
          <nav aria-label="Pied de page">
            <h2 className={heading}>Navigation</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={linkClass}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className={heading}>Contact</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className={`inline-flex items-center gap-2 break-all ${linkClass}`}>
                  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/germain65" target="_blank" rel="me noopener noreferrer" className={`inline-flex items-center gap-2 ${linkClass}`}>
                  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub &middot; @germain65</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/germain-junior-twamba-697519338/" target="_blank" rel="me noopener noreferrer" className={`inline-flex items-center gap-2 ${linkClass}`}>
                  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn &middot; Germain-Junior Twamba</span>
                </a>
              </li>
            </ul>
            <p className="mt-4 border-t border-rule/60 pt-3 text-xs leading-relaxed text-mute">
              Une coquille ou une erreur dans un tome ?{' '}
              <Link href="/contact/" className="underline underline-offset-4 hover:text-accent">
                Signalez-la
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Ligne inférieure */}
        <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 text-xs leading-relaxed text-mute lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-2xl">
            &copy; 2026 {site.name}. Ouvrages et contenus sous licence{' '}
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-accent"
            >
              CC BY-NC-ND 4.0
            </a>
            . Téléchargement et partage libres, sans modification ni usage commercial.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/confidentialite/" className="underline underline-offset-4 hover:text-accent">
              Confidentialité
            </Link>
            <span>Mis à jour le {siteUpdatedAt}</span>
            <a
              href="#"
              aria-label="Retourner en haut de la page"
              className="inline-flex min-h-10 items-center border border-rule px-3 font-medium text-ink transition-colors hover:bg-paper"
            >
              &uarr; Haut de page
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
