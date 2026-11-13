// Fichier : data/content.ts
// Rôle    : Publications, réalisations scientifiques, projets et jalons du parcours
// Auteur  : Germain-Junior TWAMBA

export interface Publication {
  title: string;
  venue: string;
  year: string;
  pages?: number;
  href?: string;
  badge?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
}

export interface Milestone {
  year: string;
  text: string;
}

// ─── Publications scientifiques et pédagogiques ──────────────────────────────
export const publications: Publication[] = [
  {
    title: 'Trigonométrie plane — Mathématiques pour finalistes très motivés (Tome I)',
    venue: 'Éditions du Club des Divergents, Goma (RDC)',
    year: '2026',
    pages: 455,
    badge: 'Manuel de référence',
    href: '/bibliotheque/trigonometrie-plane-tome-1/',
  },
  {
    title: 'Éléments d’algèbre, d’analyse et de géométrie — Mathématiques pour finalistes très motivés (Tome II)',
    venue: 'Éditions du Club des Divergents, Goma (RDC)',
    year: '2026',
    pages: 465,
    badge: 'Manuel de référence',
    href: '/bibliotheque/algebre-analyse-geometrie-tome-2/',
  },
  {
    title: 'Formulaire de trigonométrie et méthodes de résolution des triangles pour l’admission aux études d’ingénieur',
    venue: 'Cahiers pédagogiques du Club des Divergents',
    year: '2026',
    badge: 'Fascicule méthodologique',
    href: '/bibliotheque/trigonometrie-plane-tome-1/',
  },
  {
    title: 'Aide-mémoire sur les nombres complexes et les fonctions transcendantes',
    venue: 'Cahiers pédagogiques du Club des Divergents',
    year: '2026',
    badge: 'Fascicule de synthèse',
    href: '/bibliotheque/algebre-analyse-geometrie-tome-2/',
  },
];

// ─── Projets scientifiques, informatiques et éditoriaux ──────────────────────
export const projects: Project[] = [
  {
    title: 'Collection « Mathématiques pour finalistes très motivés »',
    description:
      'Conception éditoriale complète, composition typographique en LaTeX/TikZ et écriture d\'une série de manuels totalisant plus de 920 pages. Chaque chapitre propose une rigueur théorique, des exercices progressifs avec corrigés exhaustifs et des synthèses méthodologiques.',
    tech: ['LaTeX', 'LuaLaTeX', 'TikZ', 'Microtype', 'Pédagogie mathématique'],
    link: '/bibliotheque/',
  },
  {
    title: 'Initiative pédagogique « Le Club des Divergents » (Goma)',
    description:
      'Création et animation à Goma (RDC) d\'un club d\'émulation scientifique et maison d\'édition libre. L\'objectif est de briser les barrières d\'accès aux ressources éducatives d\'excellence en proposant des ouvrages scientifiques gratuits et exigeants pour la jeunesse africaine.',
    tech: ['Édition libre', 'Pédagogie', 'Vulgarisation scientifique', 'RDC'],
    link: '/a-propos/',
  },
  {
    title: 'Modélisation géométrique et figures scientifiques vectorielles',
    description:
      'Développement de scripts graphiques pour tracer avec exactitude mathématique des cercles trigonométriques orientés, des coniques, des courbes cyclométriques et des figures 3D de révolution pour l\'illustration de manuels scientifiques.',
    tech: ['Asymptote', 'Python', 'Sympy', 'Matplotlib', 'Géométrie vectorielle'],
    github: 'https://github.com/germain65',
  },
  {
    title: 'Bibliothèque numérique et site web personnel',
    description:
      'Plateforme web moderne construite en Next.js (App Router), TypeScript et Tailwind CSS. Export statique ultra-performant, recherche instantanée d\'ouvrages, visionneuse d\'aperçu de PDF sans rechargement, fiches bibliographiques détaillées et accessibilité soignée.',
    tech: ['Next.js 15.1.6', 'React', 'TypeScript', 'Tailwind CSS', 'Schema.org SEO'],
    github: 'https://github.com/germain65',
    link: 'https://germain65.github.io',
  },
];

// ─── Jalons du parcours ───────────────────────────────────────────────────────
export const timeline: Milestone[] = [
  { year: 'Déc. 2006', text: 'Naissance à Goma, province du Nord-Kivu, République Démocratique du Congo.' },
  { year: '2020', text: 'Découverte passionnée des mathématiques à l\'âge de 13 ans lors du confinement.' },
  { year: '2020–2026', text: 'Humanités scientifiques à l\'Institut Mwanga de Goma et lauréat d\'études secondaires.' },
  { year: '2026', text: 'Création du Club des Divergents pour l\'édition et la diffusion libre d\'ouvrages de mathématiques.' },
  { year: 'Oct. 2026', text: 'Parution du Tome I (Trigonométrie plane, 455 pages) et du Tome II (Algèbre, analyse et géométrie, 465 pages).' },
  { year: '2026–présent', text: 'Études d\'ingénieur civil à l\'École polytechnique de Louvain (UCLouvain, Belgique).' },
];
