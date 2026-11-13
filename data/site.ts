// Fichier : data/site.ts
// Rôle    : Informations d'identité, coordonnées et navigation principale du site
// Auteur  : Germain-Junior TWAMBA

export const site = {
  name: 'Germain-Junior TWAMBA',
  tagline: 'Bibliothèque numérique & recueils d’ouvrages libres',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://germain65.github.io',
  email: 'junior.twambasengi@student.uclouvain.be',
  institution: 'École polytechnique de Louvain (UCLouvain)',
  initiative: 'Club des Divergents — Goma (RDC)',
  links: [
    { label: 'GitHub',   href: 'https://github.com/germain65' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/germain-junior-twamba-697519338/' },
    { label: 'Email',    href: 'mailto:junior.twambasengi@student.uclouvain.be' },
  ],
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '',
};

export const nav = [
  { href: '/',                label: 'Accueil' },
  { href: '/bibliotheque/',   label: 'Bibliothèque' },
  { href: '/publications/',   label: 'Publications' },
  { href: '/projets/',        label: 'Projets' },
  { href: '/a-propos/',      label: 'À propos' },
  { href: '/contact/',       label: 'Contact' },
];
