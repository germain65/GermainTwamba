// Monogramme « GJT » : un filet horizontal commun relie les trois lettres, comme une ligne de portée d'imprimerie.
export function Mark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Monogramme G J T" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
      <rect x="1.5" y="1.5" width="45" height="45" strokeWidth="1.5" />
      <path d="M17 15.5a6 6 0 1 0 0 9.5v-3.5h-4.5" /><path d="M23 14v13a3 3 0 0 1-5 2" /><path d="M27 14h10M32 14v19" />
      <path d="M8 36h32" strokeWidth="1.2" />
    </svg>
  );
}
export function Logo() {
  return <span className="flex items-center gap-3"><Mark /><span className="font-serif text-lg leading-none tracking-tight">Germain-Junior<br />TWAMBA</span></span>;
}
