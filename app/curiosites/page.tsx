import type { Metadata } from 'next';
import { siteUpdatedAt } from '@/data/site';

export const metadata: Metadata = {
  title: 'Curiosités',
  description: 'Petites curiosités mathématiques, scientifiques et autres.',
  alternates: { canonical: '/curiosites/' },
};

const notes = [
  {
    number: '01',
    theme: 'Identité remarquable',
    date: siteUpdatedAt,
    title: 'Une différence de carrés qui cache quatre facteurs',
    body: 'x⁴ + y⁴ + z⁴ − 2x²y² − 2x²z² − 2y²z² = (x+y+z)(x+y−z)(x−y+z)(x−y−z).',
    detail: 'On peut le voir en regroupant d’abord l’expression comme (x² + y² − z²)² − (2xy)², puis en appliquant deux fois a² − b².',
    source: 'Démonstration algébrique développée dans cette note.',
  },
  {
    number: '02',
    theme: 'Géométrie',
    date: siteUpdatedAt,
    title: 'Le cercle n’a pas besoin de π pour être un cercle',
    body: 'Le nombre π apparaît quand on compare la circonférence d’un cercle à son diamètre : C ÷ d = π, quel que soit le cercle.',
    detail: 'Agrandir le cercle multiplie sa circonférence et son diamètre par le même facteur ; leur rapport reste donc invariant.',
    source: 'Définition du nombre π comme rapport C/d ; justification par similitude des cercles.',
  },
  {
    number: '03',
    theme: 'Petit jeu de nombres',
    date: siteUpdatedAt,
    title: 'Le nombre 9 se reconnaît dans la somme des chiffres',
    body: 'Un entier et la somme de ses chiffres ont le même reste lorsqu’on les divise par 9.',
    detail: 'C’est parce que 10 laisse un reste 1 modulo 9 : 10, 100 et 1 000 valent tous 1 modulo 9. Exemple : 4 827 et 4 + 8 + 2 + 7 = 21 ont le même reste, soit 3.',
    source: 'Démonstration par écriture décimale et congruences, incluse dans cette note.',
  },
];

export default function CuriositesPage() {
  return (
    <div className="pt-14 pb-16">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">Une idée à la fois</span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-ink">Curiosités</h1>
        <p className="mt-4 text-base text-mute leading-relaxed">
          Des petites découvertes de mathématiques, de sciences ou d’ailleurs : une formule étonnante, une question, un fait à garder en tête. Cette page pourra s’enrichir au fil du temps.
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
            <p className="mt-4 border-t border-rule pt-3 text-xs leading-relaxed text-mute"><span className="font-semibold text-ink">Source :</span> {note.source}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-3xl border-t border-rule pt-5 text-sm text-mute">
        Une curiosité en tête ? La page Contact permet de proposer une idée pour une prochaine publication.
      </p>
    </div>
  );
}
