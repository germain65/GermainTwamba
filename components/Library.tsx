'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Book } from '@/data/books';
import BookCover from './BookCover';
const sel = 'min-h-11 border border-rule bg-paper px-3 text-sm';
export default function Library({ books }: { books: Book[] }) {
  const [q, setQ] = useState(''); const [cat, setCat] = useState(''); const [lang, setLang] = useState(''); const [sort, setSort] = useState('date');
  const cats = useMemo(() => [...new Set(books.map((b) => b.category))].sort(), [books]);
  const langs = useMemo(() => [...new Set(books.map((b) => b.language))], [books]);
  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    return books.filter((b) => (!cat || b.category === cat) && (!lang || b.language === lang) &&
      (!n || [b.title, b.subtitle, b.author, ...b.tags].join(' ').toLowerCase().includes(n)))
      .sort((a, b) => sort === 'az' ? a.title.localeCompare(b.title, 'fr') : b.publicationDate.localeCompare(a.publicationDate));
  }, [books, q, cat, lang, sort]);
  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <label className="sm:col-span-2 lg:col-span-1"><span className="sr-only">Rechercher par titre ou auteur</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Titre, auteur, mot-clé" className={`${sel} w-full`} /></label>
        <label><span className="sr-only">Discipline</span><select className={`${sel} w-full`} value={cat} onChange={(e) => setCat(e.target.value)}><option value="">Toutes les disciplines</option>{cats.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label><span className="sr-only">Langue</span><select className={`${sel} w-full`} value={lang} onChange={(e) => setLang(e.target.value)}><option value="">Toutes les langues</option>{langs.map((l) => <option key={l} value={l}>{l === 'fr' ? 'Français' : 'English'}</option>)}</select></label>
        <label><span className="sr-only">Tri</span><select className={`${sel} w-full`} value={sort} onChange={(e) => setSort(e.target.value)}><option value="date">Plus récents</option><option value="az">Ordre alphabétique</option></select></label>
      </form>
      <p className="mt-4 text-sm text-mute" aria-live="polite">{list.length} ouvrage{list.length > 1 ? 's' : ''}</p>
      {list.length === 0 ? <p className="mt-8 font-serif text-xl">Aucun ouvrage ne correspond. Effacez un filtre ou modifiez la recherche.</p> :
        <ul className="mt-4 border-t border-ink">
          {list.map((b) => (
            <li key={b.id} className="grid grid-cols-[84px_1fr] gap-4 border-b border-rule py-5 sm:grid-cols-[110px_1fr_auto]">
              <BookCover book={b} className="w-full text-sm" />
              <div>
                <h2 className="font-serif text-2xl leading-tight"><Link href={`/bibliotheque/${b.slug}/`} className="hover:underline">{b.title}</Link></h2>
                {b.subtitle && <p className="font-serif text-mute">{b.subtitle}</p>}
                <p className="mt-2 text-sm text-mute">{b.author}, {b.publicationDate.slice(0, 4)}, {b.category}, {b.language === 'fr' ? 'français' : 'English'}</p>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:self-center">
                {b.downloadUrl ? <a href={b.downloadUrl} download className="inline-flex min-h-11 items-center bg-ink px-4 text-sm text-paper">Télécharger ({b.format})</a>
                  : <span className="text-sm text-mute">Fichier bientôt disponible</span>}
              </div>
            </li>))}
        </ul>}
    </div>
  );
}
