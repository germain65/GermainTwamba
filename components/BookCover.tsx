import type { Book } from '@/data/books';
export default function BookCover({ book, className = '' }: { book: Book; className?: string }) {
  if (book.cover) return <img src={book.cover} alt={`Couverture de ${book.title}`} loading="lazy" className={`aspect-[3/4] object-cover border border-rule ${className}`} />;
  return (
    <div role="img" aria-label={`Couverture de ${book.title}`} className={`flex aspect-[3/4] flex-col justify-between border border-ink bg-tint p-3 ${className}`}>
      <span className="font-serif text-[0.95em] leading-tight">{book.title}</span>
      <span className="border-t border-ink pt-1 text-[0.6em] text-mute">{book.author}</span>
    </div>
  );
}
