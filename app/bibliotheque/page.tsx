import type { Metadata } from 'next';
import Library from '@/components/Library';
import { allBooks } from '@/data/books';
export const metadata: Metadata = { title: 'Bibliothèque numérique', description: 'Ouvrages en téléchargement libre : recherche, filtres et fiches détaillées.', alternates: { canonical: '/bibliotheque/' } };
export default function Page() {
  return <div className="pt-14"><h1 className="mb-8 font-serif text-5xl">Bibliothèque</h1><Library books={allBooks} /></div>;
}
