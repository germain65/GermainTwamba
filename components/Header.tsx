// Fichier : components/Header.tsx
// Rôle    : Barre de navigation principale avec logo et liens de navigation complets
// Auteur  : Germain-Junior TWAMBA

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { nav } from '@/data/site';
import { Logo } from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (h: string) => (h === '/' ? path === '/' : path.startsWith(h));

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur-sm transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label="Page d'accueil" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        {/* Navigation principale pour écrans moyens et grands (inclut Accueil) */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-3 text-xs font-medium lg:flex lg:gap-5 lg:text-sm">
          {nav.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'border-b-2 border-accent pb-0.5 text-ink font-semibold'
                    : 'text-mute hover:text-ink transition-colors'
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Bouton pour menu sur mobile */}
        <button
          className="min-h-11 min-w-11 border border-rule px-3 text-sm font-medium lg:hidden hover:bg-tint transition-colors"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>
      </div>

      {/* Menu déroulant sur mobile */}
      {open && (
        <nav id="menu" aria-label="Menu mobile" className="border-t border-rule bg-paper lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`block border-b border-rule px-5 py-4 font-serif text-xl ${
                isActive(n.href) ? 'bg-tint/40 text-accent font-semibold' : 'hover:bg-tint'
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
