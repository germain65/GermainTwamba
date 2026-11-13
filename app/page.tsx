// Fichier : app/page.tsx
// Rôle    : Page d'accueil officielle du site de Germain-Junior TWAMBA
// Vocation: Recueillir, centraliser et diffuser librement l'ensemble des livres de l'auteur
// Auteur  : Germain-Junior TWAMBA

import Link from 'next/link';
import { allBooks } from '@/data/books';
import { site, asset } from '@/data/site';
import BookCover from '@/components/BookCover';

export default function Home() {
  const [tome1, tome2] = allBooks;

  return (
    <>
      {/* ── Section Héros : Vocation centrale du site et portrait ──── */}
      <section className="rise grid items-center gap-10 pb-16 pt-12 md:grid-cols-[1.3fr_0.9fr] md:pt-20">
        <div>
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent border border-accent/40 px-2.5 py-1 mb-4 font-semibold">
            Bibliothèque numérique officielle &middot; Recueil des ouvrages
          </span>

          <h1 className="font-serif text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[1.02] tracking-tight text-ink">
            {site.name}
          </h1>

          <p className="mt-4 font-serif text-xl text-mute md:text-2xl leading-snug max-w-[38ch]">
            Ce site est la bibliothèque officielle destinée à <strong>recueillir, centraliser et offrir en libre accès</strong> l&apos;ensemble de mes ouvrages mathématiques et scientifiques.
          </p>

          <p className="mt-6 font-serif text-base md:text-lg leading-relaxed text-ink/90 max-w-[56ch]">
            Fondateur du <em>Club des Divergents</em> à Goma (RDC) et étudiant en sciences de l&apos;ingénieur à l&apos;<strong>École polytechnique de Louvain (UCLouvain)</strong> en Belgique, j&apos;ai créé cette plateforme comme le point d&apos;ancrage unique où tous mes livres &mdash; actuels et futurs &mdash; sont mis à disposition gratuitement, téléchargeables au format PDF pour les élèves, les enseignants et les passionnés de sciences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/bibliotheque/"
              className="inline-flex min-h-12 items-center bg-accent px-6 text-sm font-medium text-paper dark:text-ink hover:opacity-90 transition-opacity shadow-sm"
            >
              Accéder au recueil des livres &rarr;
            </Link>
            <Link
              href="/a-propos/"
              className="inline-flex min-h-12 items-center border border-rule px-5 text-sm font-medium hover:bg-tint transition-colors"
            >
              À propos de l&apos;auteur
            </Link>
          </div>
        </div>

        {/* Photo d'accueil de Germain-Junior TWAMBA */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative overflow-hidden border-2 border-ink bg-tint shadow-xl">
            <img
              src={asset('/photos/germain-accueil.jpg')}
              alt="Germain-Junior TWAMBA devant un panorama urbain et des ruines antiques"
              className="aspect-[4/3] w-full object-cover object-center"
            />
            <div className="border-t border-ink bg-paper p-3 text-center">
              <span className="block font-serif text-sm font-bold text-ink">
                Germain-Junior TWAMBA
              </span>
              <span className="block text-xs text-mute">
                Auteur &middot; Fondateur du Club des Divergents &middot; UCLouvain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Citation inspirante ───────────────────────────────────────── */}
      <section className="my-8 border-y-2 border-ink bg-tint/30 py-8 px-6 text-center">
        <blockquote className="mx-auto max-w-3xl">
          <p className="font-serif text-lg md:text-xl italic text-ink leading-relaxed">
            &laquo; La mathématique est l’art de donner le même nom à des choses différentes. &raquo;
          </p>
          <footer className="mt-2 text-sm font-mono text-mute">
            &mdash; Henri Poincar&eacute; &middot; En exergue de la collection
          </footer>
        </blockquote>
      </section>

      {/* ── Vitrine des livres recueillis ─────────────────────────────── */}
      <section className="py-12" aria-labelledby="recueil-titre">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-mute font-bold">
              Collection Mathématiques pour finalistes très motivés
            </span>
            <h2 id="recueil-titre" className="mt-1 font-serif text-3xl md:text-4xl text-ink">
              Les ouvrages actuellement disponibles
            </h2>
          </div>
          <Link
            href="/bibliotheque/"
            className="text-sm font-medium underline hover:text-accent shrink-0"
          >
            Consulter toute la bibliothèque &rarr;
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Tome 1 */}
          {tome1 && (
            <article className="flex flex-col justify-between border-2 border-ink bg-paper p-6 hover:shadow-md transition-shadow">
              <div>
                <div className="flex gap-5">
                  <div className="w-28 shrink-0">
                    <BookCover book={tome1} className="w-full shadow-sm" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-mono text-accent font-semibold uppercase">
                      Tome {tome1.volume} &middot; {tome1.pageCount} pages
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-bold leading-tight">
                      <Link href={`/bibliotheque/${tome1.slug}/`} className="hover:underline">
                        {tome1.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-mute font-mono">
                      {tome1.publisher}
                    </p>
                    <p className="mt-3 text-sm text-ink/85 line-clamp-3 leading-relaxed">
                      {tome1.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-rule pt-4 text-xs">
                  {tome1.tags.slice(0, 4).map((t) => (
                    <span key={t} className="border border-rule px-2 py-0.5 text-mute">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-rule pt-4">
                <Link
                  href={`/bibliotheque/${tome1.slug}/`}
                  className="inline-flex min-h-10 items-center bg-ink px-4 text-xs font-medium text-paper hover:bg-accent transition-colors"
                >
                  Fiche &amp; aperçu interactif &rarr;
                </Link>
                {tome1.downloadUrl && (
                  <a
                    href={asset(tome1.downloadUrl)}
                    download
                    className="inline-flex min-h-10 items-center border border-ink px-4 text-xs font-medium hover:bg-tint transition-colors"
                  >
                    &darr; Télécharger le PDF ({tome1.fileSize})
                  </a>
                )}
              </div>
            </article>
          )}

          {/* Tome 2 */}
          {tome2 && (
            <article className="flex flex-col justify-between border-2 border-ink bg-paper p-6 hover:shadow-md transition-shadow">
              <div>
                <div className="flex gap-5">
                  <div className="w-28 shrink-0">
                    <BookCover book={tome2} className="w-full shadow-sm" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-mono text-accent font-semibold uppercase">
                      Tome {tome2.volume} &middot; {tome2.pageCount} pages
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-bold leading-tight">
                      <Link href={`/bibliotheque/${tome2.slug}/`} className="hover:underline">
                        {tome2.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-mute font-mono">
                      {tome2.publisher}
                    </p>
                    <p className="mt-3 text-sm text-ink/85 line-clamp-3 leading-relaxed">
                      {tome2.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-rule pt-4 text-xs">
                  {tome2.tags.slice(0, 4).map((t) => (
                    <span key={t} className="border border-rule px-2 py-0.5 text-mute">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-rule pt-4">
                <Link
                  href={`/bibliotheque/${tome2.slug}/`}
                  className="inline-flex min-h-10 items-center bg-ink px-4 text-xs font-medium text-paper hover:bg-accent transition-colors"
                >
                  Fiche &amp; aperçu interactif &rarr;
                </Link>
                {tome2.downloadUrl && (
                  <a
                    href={asset(tome2.downloadUrl)}
                    download
                    className="inline-flex min-h-10 items-center border border-ink px-4 text-xs font-medium hover:bg-tint transition-colors"
                  >
                    &darr; Télécharger le PDF ({tome2.fileSize})
                  </a>
                )}
              </div>
            </article>
          )}
        </div>
      </section>

      {/* ── Raison d'être de ce recueil en accès libre ─────────────────── */}
      <section className="my-12 border-t-2 border-ink pt-12">
        <h2 className="font-serif text-3xl text-ink">
          La mission du recueil : Partager l&apos;exigence mathématique
        </h2>
        <p className="mt-3 max-w-3xl text-base text-mute leading-relaxed">
          Cette bibliothèque a été conçue pour centraliser et préserver une production mathématique exigeante, née de l&apos;émulation scientifique à Goma et poursuivie à l&apos;UCLouvain.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="border border-rule p-5 bg-tint/20">
            <span className="font-mono text-2xl font-bold text-accent">01.</span>
            <h3 className="mt-2 font-serif text-xl font-semibold">Recueil permanent</h3>
            <p className="mt-2 text-sm text-mute leading-relaxed">
              Un lieu unique et pérenne où chaque tome publié est archivé, mis à jour avec ses éventuels errata et accessible d&apos;un simple clic.
            </p>
          </div>
          <div className="border border-rule p-5 bg-tint/20">
            <span className="font-mono text-2xl font-bold text-accent">02.</span>
            <h3 className="mt-2 font-serif text-xl font-semibold">Téléchargement libre</h3>
            <p className="mt-2 text-sm text-mute leading-relaxed">
              Aucun abonnement, aucune barrière financière : tous les manuels sont diffusés au format PDF sous licence libre Creative Commons.
            </p>
          </div>
          <div className="border border-rule p-5 bg-tint/20">
            <span className="font-mono text-2xl font-bold text-accent">03.</span>
            <h3 className="mt-2 font-serif text-xl font-semibold">Nouveaux tomes à venir</h3>
            <p className="mt-2 text-sm text-mute leading-relaxed">
              La collection s&apos;enrichit continuellement : les prochains tomes d&apos;analyse, d&apos;algèbre et de physique mathématique y seront ajoutés directement.
            </p>
          </div>
        </div>
      </section>

      {/* ── Navigation vers les autres rubriques ─────────────────────── */}
      <section className="my-12 grid gap-px border-y border-rule bg-rule sm:grid-cols-3">
        {[
          ['Bibliothèque', '/bibliotheque/', 'Consulter l’ensemble des tomes, fiches et aperçus.'],
          ['Publications', '/publications/', 'Manuels, fascicules et synthèses méthodologiques.'],
          ['À propos', '/a-propos/', 'Parcours, photos, Institut Mwanga et UCLouvain.'],
        ].map(([t, h, d]) => (
          <Link
            key={h}
            href={h}
            className="group bg-paper p-6 hover:bg-tint transition-colors"
          >
            <span className="font-serif text-2xl group-hover:text-accent transition-colors flex items-center justify-between">
              {t}
              <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </span>
            <span className="mt-2 block text-xs text-mute leading-relaxed">{d}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
