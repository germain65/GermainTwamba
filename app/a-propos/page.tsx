// Fichier : app/a-propos/page.tsx
// Rôle    : Page biographique avec portrait, parcours et galerie photos
// Auteur  : Germain-Junior TWAMBA

import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { asset } from '@/data/site';

export const metadata: Metadata = {
  title: 'À propos de l’auteur',
  description:
    'Germain-Junior TWAMBA — auteur scientifique, étudiant à l’École polytechnique de Louvain (UCLouvain) et fondateur du Club des Divergents à Goma (RDC).',
  alternates: { canonical: '/a-propos/' },
};

const timeline = [
  { year: 'Déc. 2006', text: 'Naissance à Goma, République Démocratique du Congo.' },
  { year: '2020', text: 'Découverte passionnée des mathématiques pendant le confinement, à l’âge de 13 ans.' },
  { year: '2020–2026', text: 'Formation aux humanités scientifiques à l’Institut Mwanga de Goma.' },
  { year: '2026', text: 'Fondation du Club des Divergents à Goma — initiative d’émulation et maison d’édition libre.' },
  { year: 'Oct. 2026', text: 'Publication du Tome I : Trigonométrie plane (455 pages).' },
  { year: 'Oct. 2026', text: 'Publication du Tome II : Éléments d’algèbre, d’analyse et de géométrie (465 pages).' },
  { year: '2026–présent', text: 'Études d’ingénieur civil à l’École polytechnique de Louvain — UCLouvain, Belgique.' },
];

const interests = [
  { titre: 'Trigonométrie & Géométrie', desc: 'Des cercles trigonométriques aux lois des cosinus, la rigueur de la géométrie plane et sphérique.' },
  { titre: 'Algèbre & Analyse', desc: 'Nombres complexes, fonctions logarithmiques, structures algébriques — l’art d’extraire les structures profondes.' },
  { titre: 'Pédagogie mathématique', desc: 'Rendre accessibles à la jeunesse africaine des outils pédagogiques au plus haut standard académique.' },
  { titre: 'Informatique & Typographie', desc: 'LaTeX, Asymptote, Python, développement web — allier rigueur mathématique et composition numérique de pointe.' },
];

// Galerie : portraits et lieux
const gallery = [
  { src: '/photos/germain-portrait.jpg',        alt: 'Germain-Junior TWAMBA — portrait officiel', label: 'Germain-Junior TWAMBA' },
  { src: '/photos/germain-parc.jpg',            alt: 'Germain-Junior TWAMBA — parc en Belgique', label: 'Belgique, 2026' },
  { src: '/photos/germain-cote.jpg',            alt: 'Germain-Junior TWAMBA — côte irlandaise',  label: 'Irlande, 2026' },
  { src: '/photos/uclouvain-bibliotheque.jpg',  alt: 'Bibliothèque de l’UCLouvain',             label: 'UCLouvain — Louvain-la-Neuve' },
  { src: '/photos/place-belgique.jpg',          alt: 'Place en Belgique',                         label: 'Belgique' },
  { src: '/photos/panorama-ville.jpg',          alt: 'Panorama sur une ville',                    label: 'Vue panoramique' },
  { src: '/photos/vue-hauteur.jpg',             alt: 'Vue sur une ville depuis une hauteur',      label: 'Vue en hauteur' },
  { src: '/photos/escaliers-pierre.jpg',        alt: 'Escaliers en pierre',                       label: 'Architecture' },
  { src: '/photos/sentier-foret.jpg',           alt: 'Sentier en forêt',                          label: 'Forêt' },
  { src: '/photos/parc-arbres.jpg',             alt: 'Parc arboré',                              label: 'Parc' },
  { src: '/photos/voyage-train.jpg',            alt: 'Paysage depuis un train',                   label: 'En route' },
];

export default function About() {
  return (
    <div className="pt-14 pb-16">
      <h1 className="mb-12 font-serif text-5xl">À propos de l&apos;auteur</h1>

      {/* ── Portrait + Biographie ─────────────────────────── */}
      <section className="grid gap-10 md:grid-cols-[300px_1fr]" aria-labelledby="bio">
        <div>
          <img
            src={asset('/photos/germain-portrait.jpg')}
            alt="Germain-Junior TWAMBA"
            className="w-full border-2 border-ink object-cover shadow-md"
          />
          <p className="mt-2 text-center text-xs font-mono text-mute">Germain-Junior TWAMBA</p>
        </div>
        <div>
          <h2 id="bio" className="mb-4 font-serif text-3xl">Biographie</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Né en décembre 2006 à Goma, dans l&apos;est de la République démocratique du Congo,
              Germain-Junior Twamba découvre les mathématiques à l&apos;adolescence et ne les a plus
              quittées. En 2020, à 13 ans, le confinement devient paradoxalement le point de départ
              d&apos;une passion : guidé par la seule curiosité, il passe des heures entières à explorer
              des problèmes pour la beauté de l&apos;effort de raisonnement qu&apos;ils demandent.
            </p>
            <p>
              Il se forme à l&apos;Institut Mwanga de Goma, puis rejoint l&apos;École polytechnique de Louvain
              (UCLouvain) en Belgique pour y poursuivre des études d&apos;ingénieur. Convaincu que la réussite
              dans les études supérieures ne dépend pas d&apos;une facilité innée mais de la rigueur de la
              méthode, il fonde à Goma le <strong>Club des Divergents</strong> &mdash; une forme de maison
              d&apos;édition libre dont l&apos;objectif est de mettre à la disposition de la jeunesse africaine
              des outils pédagogiques au plus haut standard académique.
            </p>
            <p>
              Ce site web constitue le recueil officiel de cette collection, garantissant que chaque élève, enseignant ou curieux puisse y accéder sans barrière financière.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="https://github.com/germain65" target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 border border-rule px-4 hover:bg-tint">
              GitHub &mdash; @germain65
            </a>
            <a href="https://www.linkedin.com/in/germain-junior-twamba-697519338/" target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 border border-rule px-4 hover:bg-tint">
              LinkedIn &mdash; Germain-Junior Twamba
            </a>
            <a href="mailto:junior.twambasengi@student.uclouvain.be"
              className="inline-flex min-h-10 items-center gap-2 border border-rule px-4 hover:bg-tint">
              junior.twambasengi@student.uclouvain.be
            </a>
          </div>
        </div>
      </section>

      {/* ── Parcours ─────────────────────────────────────── */}
      <section className="mt-16" aria-labelledby="parcours">
        <h2 id="parcours" className="mb-6 font-serif text-3xl">Parcours</h2>
        <ol className="max-w-2xl border-l-2 border-ink pl-6">
          {timeline.map((t) => (
            <li key={t.year} className="mb-6 relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-paper" />
              <span className="block text-sm font-mono text-mute">{t.year}</span>
              <span className="font-serif text-lg leading-snug">{t.text}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Centres d'intérêt ────────────────────────────── */}
      <section className="mt-16" aria-labelledby="interets">
        <h2 id="interets" className="mb-6 font-serif text-3xl">Centres d&apos;intérêt scientifiques</h2>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {interests.map((item) => (
            <div key={item.titre} className="border border-rule p-5 hover:bg-tint">
              <h3 className="font-serif text-xl">{item.titre}</h3>
              <p className="mt-1 text-sm text-mute leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Galerie photos ───────────────────────────────── */}
      <section className="mt-16" aria-labelledby="galerie">
        <h2 id="galerie" className="mb-6 font-serif text-3xl">Galerie</h2>
        <Gallery photos={gallery} />
      </section>
    </div>
  );
}
