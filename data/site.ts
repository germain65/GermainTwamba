// Fichier : data/site.ts
// Rôle    : Informations d'identité, navigation et gestion du basePath pour GitHub Pages
// Auteur  : Germain-Junior TWAMBA

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/GermainTwamba';
export const siteUpdatedAt = '13 novembre 2026';
export const siteUpdatedAtISO = '2026-11-13'; // même date, format AAAA-MM-JJ (sitemap)

export const site = {
  name: 'Germain-Junior TWAMBA',
  tagline: 'Bibliothèque numérique & recueil d’ouvrages en accès libre',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? `https://germain65.github.io${BASE_PATH}`,
  basePath: BASE_PATH,
  email: 'amandotwamba@gmail.com',
  institution: 'École polytechnique de Louvain (UCLouvain)',
  initiative: 'Club des Divergents, Goma (RDC)',
  links: [
    { label: 'GitHub',   href: 'https://github.com/germain65' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/germain-junior-twamba-697519338/' },
    { label: 'Email',    href: 'mailto:amandotwamba@gmail.com' },
  ],
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '',
  // Code de site GoatCounter (ex. 'germain-twamba' pour germain-twamba.goatcounter.com). Vide = aucune mesure.
  goatcounter: process.env.NEXT_PUBLIC_GOATCOUNTER ?? '',
};

export const nav = [
  { href: '/',                label: 'Accueil' },
  { href: '/bibliotheque/',   label: 'Bibliothèque' },
  { href: '/publications/',   label: 'Publications' },
  { href: '/projets/',        label: 'Projets' },
  { href: '/curiosites/',     label: 'Curiosités' },
  { href: '/a-propos/',      label: 'À propos' },
  { href: '/contact/',       label: 'Contact' },
];

// Helper pour préfixer correctement les chemins statiques (images, PDF, favicons)
export function asset(p?: string): string {
  if (!p) return '';
  if (p.startsWith('http://') || p.startsWith('https://')) return p;
  const clean = p.startsWith('/') ? p : `/${p}`;
  return `${BASE_PATH}${clean}`;
}
