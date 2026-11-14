// Fichier : app/layout.tsx
// Rôle    : Mise en page globale racine (Header, Main, Footer, Metadonnées SEO et basePath)
// Auteur  : Germain-Junior TWAMBA

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import { site, asset } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.tagline,
  icons: { icon: asset('/favicon.svg') },
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: 'website',
    locale: 'fr_FR',
    // JPG 1200×630 avec paramètre de version pour forcer le rafraîchissement du cache WhatsApp/réseaux
    images: [{ url: '/og.jpg?v=2', width: 1200, height: 630, alt: `${site.name} : ${site.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.tagline,
    images: ['/og.jpg?v=2'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:bg-paper focus:p-3">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="mx-auto max-w-6xl px-5">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
