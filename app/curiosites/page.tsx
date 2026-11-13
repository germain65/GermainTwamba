import type { Metadata } from 'next';
import { asset, siteUpdatedAt } from '@/data/site';

export const metadata: Metadata = {
  title: 'Curiosités',
  description: 'Petites curiosités mathématiques, scientifiques et autres.',
  alternates: { canonical: '/curiosites/' },
};

const notes = [
  {
    number: '01',
    theme: 'Géométrie projective',
    date: siteUpdatedAt,
    title: 'Le théorème de Pascal',
    body: 'Six points sur une conique déterminent, par les intersections des côtés opposés de l’hexagone, trois points alignés.',
    detail: 'Énoncé projectif, preuve analytique détaillée sur une conique paramétrée, exemple calculé et pistes pour aller plus loin.',
    source: 'Dossier PDF de 6 pages, composé en LaTeX avec un schéma TikZ.',
    pdf: '01-pascal.pdf',
  },
  {
    number: '02',
    theme: 'Géométrie japonaise',
    date: siteUpdatedAt,
    title: 'Les problèmes japonais de géométrie',
    body: 'Les sangaku sont des tablettes votives sur lesquelles des fidèles gravaient des problèmes et des figures mathématiques.',
    detail: 'Repères historiques et étude complète d’une famille de cercles tangents : construction, preuve par inversion des rayons, exemple numérique et exercices.',
    source: 'Dossier PDF de 6 pages, avec diagrammes TikZ et références historiques.',
    pdf: '02-sangaku.pdf',
  },
  {
    number: '03',
    theme: 'Algèbre linéaire et géométrie',
    date: siteUpdatedAt,
    title: 'Les matrices de Gram',
    body: 'Une matrice de Gram rassemble les produits scalaires d’une famille de vecteurs et encode leurs longueurs, leurs angles et leur dépendance.',
    detail: 'Définition, preuve de positivité, rang, déterminant et volume, moindres carrés, exemples détaillés et exercices.',
    source: 'Dossier PDF de 8 pages composé en LaTeX, avec figures et démonstrations.',
    pdf: '03-matrices-de-gram.pdf',
  },
  {
    number: '04',
    theme: 'Modélisation et dynamique',
    date: siteUpdatedAt,
    title: 'Le modèle de Verhulst',
    body: 'La croissance logistique décrit une population qui croît vite quand elle est rare, puis ralentit à mesure qu’elle approche une capacité limite.',
    detail: 'Équation différentielle, solution, équilibres, point d’inflexion, exemple numérique, estimation des paramètres et limites du modèle.',
    source: 'Dossier PDF de 7 pages composé en LaTeX, avec courbe TikZ et repères historiques.',
    pdf: '04-modele-de-verhulst.pdf',
  },
];

export default function CuriositesPage() {
  return (
    <div className="pt-14 pb-16">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">Une idée à la fois</span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-ink">Curiosités</h1>
        <p className="mt-4 text-base text-mute leading-relaxed">
          Des dossiers détaillés à lire ou à télécharger. Chaque curiosité est publiée en PDF et pourra être complétée au fil du temps.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {notes.map((note) => (
          <article key={note.number} className="border-2 border-ink bg-paper p-6 sm:p-7">
            <div className="flex items-center justify-between border-b border-rule pb-3">
              <span className="font-mono text-xs font-bold text-accent">{note.number} / {note.theme}</span>
              <span aria-hidden="true" className="font-serif text-2xl text-accent">✳</span>
            </div>
            <p className="mt-3 text-xs font-mono text-mute">Publié le {note.date}</p>
            <h2 className="mt-5 font-serif text-2xl font-bold leading-snug text-ink">{note.title}</h2>
            <p className="mt-4 border-l-2 border-accent pl-4 font-serif text-lg leading-relaxed text-ink">{note.body}</p>
            <p className="mt-4 text-sm leading-relaxed text-mute">{note.detail}</p>
            <p className="mt-4 border-t border-rule pt-3 text-xs leading-relaxed text-mute">{note.source}</p>
            <a href={asset(`/curiosites/${note.pdf}`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex border-2 border-ink bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Lire le dossier PDF <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-3xl border-t border-rule pt-5 text-sm text-mute">
        Une curiosité en tête ? La page Contact permet de proposer une idée pour une prochaine publication.
      </p>
    </div>
  );
}
