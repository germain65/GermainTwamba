// Fichier : app/a-propos/page.tsx
// Rôle    : Page biographique avec portrait, parcours et galerie photos
// Auteur  : Germain-Junior TWAMBA

import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { asset } from '@/data/site';

export const metadata: Metadata = {
  title: 'À propos de l’auteur',
  description:
    'Germain-Junior TWAMBA, auteur scientifique et étudiant à l’École polytechnique de Louvain (UCLouvain).',
  alternates: { canonical: '/a-propos/' },
};

const timeline = [
  { year: 'Déc. 2006', text: 'Naissance à Goma, République Démocratique du Congo.' },
  { year: '2020', text: 'Découverte passionnée des mathématiques pendant le confinement, à l’âge de 13 ans.' },
  { year: '2020–2026', text: 'Formation aux humanités scientifiques à l’Institut Mwanga de Goma.' },
  { year: 'Oct. 2026', text: 'Publication du Tome I : Trigonométrie plane (455 pages).' },
  { year: 'Oct. 2026', text: 'Publication du Tome II : Éléments d’algèbre, d’analyse et de géométrie (465 pages).' },
  { year: '2026–présent', text: 'Études d’ingénieur civil à l’École polytechnique de Louvain (UCLouvain, Belgique).' },
];

const interests = [
  { titre: 'Trigonométrie & Géométrie', desc: 'Des cercles trigonométriques aux lois des cosinus, la rigueur de la géométrie plane et sphérique.' },
  { titre: 'Algèbre & Analyse', desc: 'Nombres complexes, fonctions logarithmiques, structures algébriques : l’art d’extraire les structures profondes.' },
  { titre: 'Pédagogie mathématique', desc: 'Rendre accessibles à la jeunesse africaine des outils pédagogiques au plus haut standard académique.' },
  { titre: 'Informatique & Typographie', desc: 'LaTeX, Asymptote, Python, développement web : allier rigueur mathématique et composition numérique de pointe.' },
];

// Galerie : portraits et lieux
const gallery = [
  { src: '/photos/germain-parc.jpg',            alt: 'L’auteur debout sur une pelouse, devant un grand bâtiment en brique' },
  { src: '/photos/germain-cote.jpg',            alt: 'L’auteur sur un pont au bord de l’eau, avec une falaise et une église en arrière-plan' },
  { src: '/photos/uclouvain-bibliotheque.jpg',  alt: 'La tour d’une bibliothèque universitaire sous un ciel bleu' },
  { src: '/photos/place-belgique.jpg',          alt: 'Rue animée bordée d’immeubles en brique' },
  { src: '/photos/panorama-ville.jpg',          alt: 'Vue sur une ville dans une vallée, depuis un muret de pierre' },
  { src: '/photos/vue-hauteur.jpg',             alt: 'Vue d’en haut sur une ville traversée par une rivière' },
  { src: '/photos/escaliers-pierre.jpg',        alt: 'Long escalier de pierre bordé de murs, qui monte vers le haut' },
  { src: '/photos/sentier-foret.jpg',           alt: 'Chemin couvert de feuilles mortes qui longe un mur de pierre' },
  { src: '/photos/parc-arbres.jpg',             alt: 'Allée d’un parc entre de grands arbres' },
  { src: '/photos/voyage-train.jpg',            alt: 'Champs verts vus à travers la vitre d’un train' },
];

export default function About() {
  return (
    <div className="pt-14 pb-16">
      <h1 className="mb-12 font-serif text-5xl">À propos de l&apos;auteur</h1>

      {/* ── Portrait + Biographie ─────────────────────────── */}
      <section className="grid gap-10 md:grid-cols-[380px_1fr]" aria-labelledby="bio">
        <div>
          <img
            src={asset('/photos/germain-athenes.jpg')}
            alt="Germain-Junior TWAMBA à Athènes"
            className="w-full h-auto border-2 border-ink shadow-md"
          />
          <p className="mt-2 text-center text-xs font-mono text-mute">Germain-Junior TWAMBA &middot; Athènes</p>
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
              méthode, il s&apos;engage à concevoir et diffuser librement des manuels et outils pédagogiques
              répondant aux plus hauts standards académiques.
            </p>
            <p>
              Ce site web constitue le recueil officiel de cette collection, garantissant que chaque élève, enseignant ou curieux puisse y accéder sans barrière financière.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="https://github.com/germain65" target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 border border-rule px-4 hover:bg-tint">
              GitHub &middot; @germain65
            </a>
            <a href="https://www.linkedin.com/in/germain-junior-twamba-697519338/" target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 border border-rule px-4 hover:bg-tint">
              LinkedIn &middot; Germain-Junior Twamba
            </a>
            <a href="mailto:amandotwamba@gmail.com"
              className="inline-flex min-h-10 items-center gap-2 border border-rule px-4 hover:bg-tint">
              amandotwamba@gmail.com
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
