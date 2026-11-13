// Fichier : app/bibliotheque/[slug]/page.tsx
// Rôle    : Page dédiée à chaque livre (fiche complète, sommaire, aperçu PDF)

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allBooks, frDate, getBook } from '@/data/books';
import type { TocEntry } from '@/data/books';
import { site, asset } from '@/data/site';
import BookCover from '@/components/BookCover';
import PdfPreview from '@/components/PdfPreview';

type P = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return allBooks.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const b = getBook((await params).slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.description,
    alternates: { canonical: `/bibliotheque/${b.slug}/` },
    openGraph: {
      title: b.title,
      description: b.description,
      type: 'book',
      images: [asset(b.cover ?? '/logo.svg')],
    },
  };
}

// Composant : sommaire interactif avec sections dépliables
function Toc({ items }: { items: TocEntry[] }) {
  return (
    <ul className="max-w-3xl border-t border-ink">
      {items.map((e, k) => (
        <li key={k} className="border-b border-rule">
          {e.items && e.items.length > 0 ? (
            <details className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-baseline justify-between gap-4 py-2 font-serif text-lg hover:text-accent">
                <span>{e.num && <span className="mr-2 text-mute">{e.num}.</span>}{e.title}</span>
                <span className="shrink-0 text-sm text-mute">{e.page}</span>
              </summary>
              <ul className="mb-3 ml-4 border-l border-rule pl-4 text-sm">
                {e.items.map((s, j) => (
                  <li key={j} className="flex justify-between gap-4 py-1">
                    <span>
                      {s.num && <span className="mr-2 text-mute">{s.num}</span>}
                      {s.title}
                      {s.items && s.items.length > 0 && (
                        <ul className="mt-1 ml-3 text-xs text-mute">
                          {s.items.map((ss, m) => (
                            <li key={m} className="py-0.5">{ss.num && <span className="mr-1">{ss.num}</span>}{ss.title}</li>
                          ))}
                        </ul>
                      )}
                    </span>
                    <span className="shrink-0 text-mute">{s.page}</span>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <div className="flex min-h-11 items-baseline justify-between gap-4 py-2 font-serif text-lg">
              <span>{e.title}</span>
              <span className="shrink-0 text-sm text-mute">{e.page}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default async function BookPage({ params }: P) {
  const b = getBook((await params).slug);
  if (!b) notFound();

  const meta: [string, string | undefined][] = [
    ['Auteur',      b.author],
    ['Éditeur',     b.publisher],
    ['Collection',  b.series ? `${b.series}, tome ${b.volume}` : undefined],
    ['Publication', frDate(b.publicationDate)],
    ['Discipline',  b.category],
    ['Niveau',      b.level],
    ['Langue',      b.language === 'fr' ? 'Français' : 'English'],
    ['Pages',       b.pageCount?.toString()],
    ['Format',      b.format],
    ['Taille',      b.fileSize],
    ['Licence',     b.license],
    ['ISBN',        b.isbn],
    ['DOI',         b.doi],
    ['Version',     b.version],
    ['DOI toutes versions', b.conceptDoi],
    ['Fichier',     b.fileName],
    ['Empreinte',   b.checksum],
  ];

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: b.title,
    author: { '@type': 'Person', name: b.author },
    inLanguage: b.language,
    datePublished: b.publicationDate,
    license: b.license,
    ...(b.isbn && { isbn: b.isbn }),
    url: `${site.url}/bibliotheque/${b.slug}/`,
  };

  return (
    <article className="pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <Link href="/bibliotheque/" className="text-sm underline">
        ← Retour à la bibliothèque
      </Link>

      {/* En-tête : couverture + infos principales */}
      <div className="mt-6 grid gap-10 md:grid-cols-[260px_1fr]">
        <BookCover book={b} className="w-48 text-base md:w-full" />

        <div>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">{b.title}</h1>
          {b.subtitle && (
            <p className="mt-2 font-serif text-xl text-mute">{b.subtitle}</p>
          )}

          {/* Résumé long (plusieurs paragraphes) ou court */}
          <div className="mt-6 space-y-3 text-base leading-relaxed">
            {(b.summary ?? [b.description]).map((para, k) => (
              <p key={k}>{para}</p>
            ))}
          </div>

          {/* Bouton de téléchargement */}
          <div className="mt-8">
            {b.downloadUrl ? (
              <a
                href={asset(b.downloadUrl)}
                download
                className="inline-flex min-h-11 items-center bg-ink px-6 font-sans text-sm text-paper hover:opacity-80"
              >
                ↓ Télécharger ({b.format}{b.fileSize ? `, ${b.fileSize}` : ''})
              </a>
            ) : (
              <p className="text-mute">Fichier bientôt disponible.</p>
            )}
          </div>

          {/* Fiche bibliographique */}
          <dl className="mt-10 grid max-w-xl grid-cols-[9rem_1fr] border-t border-ink text-sm">
            {meta
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="border-b border-rule py-2 text-mute">{k}</dt>
                  <dd className="break-words border-b border-rule py-2">
                    {(k === 'DOI' || k === 'DOI toutes versions') ? (
                      <a href={`https://doi.org/${v}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">{v} &nearr;</a>
                    ) : v}
                  </dd>
                </div>
              ))}
          </dl>
          {b.doi && <p className="mt-3 max-w-xl text-xs leading-relaxed text-mute">Notice et citation complètes sur <a href={`https://doi.org/${b.doi}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">Zenodo</a>.</p>}
        </div>
      </div>

      {/* Sommaire */}
      {b.toc && b.toc.length > 0 && (
        <section className="mt-16" aria-labelledby="sommaire">
          <h2 id="sommaire" className="mb-4 font-serif text-3xl">Sommaire</h2>
          <Toc items={b.toc} />
          <p className="mt-3 text-sm text-mute">
            Les numéros de page sont ceux de la pagination imprimée de l&apos;ouvrage.
          </p>
        </section>
      )}

      {/* Aperçu PDF */}
      {b.preview && b.preview.length > 0 && (
        <section className="mt-16" aria-labelledby="apercu">
          <h2 id="apercu" className="mb-4 font-serif text-3xl">Aperçu</h2>
          <PdfPreview pages={b.preview} title={b.title} pdfUrl={b.downloadUrl} />
        </section>
      )}
    </article>
  );
}
