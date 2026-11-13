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
  externalHref?: string;
  citation?: string;
  downloadHref?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  externalHref?: string;
  link?: string;
  externalLabel?: string;
  sourceLabel?: string;
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
    downloadHref: '/books/tome-1-trigonometrie.pdf',
  },
  {
    title: 'Mathématiques pour finalistes très motivés — Tome II',
    venue: 'Club des Divergents — Goma · Version 1.0 publiée sur Zenodo',
    year: '2026',
    pages: 465,
    badge: 'Livre · accès ouvert',
    href: '/bibliotheque/algebre-analyse-geometrie-tome-2/',
    downloadHref: '/books/tome-2-algebre-analyse.pdf',
    externalHref: 'https://doi.org/10.5281/zenodo.23840933',
    citation: 'Notice Zenodo v1.0 publiée le 31 octobre 2026 · DOI 10.5281/zenodo.23840933 · DOI de toutes les versions 10.5281/zenodo.23840932 · licence CC BY-NC-ND 4.0 · PDF de 20,7 Mo.',
  },
  {
    title: 'Exercices d’algèbre',
    venue: 'Document pédagogique attribué à Germain-Junior TWAMBA · également référencé sur MonBestSeller',
    year: '2025',
    pages: 22,
    badge: 'Recueil d’exercices',
    externalHref: 'https://questionnaire.monbestseller.com/auteur/liste/autres?page=2',
    citation: 'Le profil MonBestSeller répertorie ce titre sous le nom « Germain Junior TWAMBA ». Le document consultable sur Scribd compte 22 pages.',
  },
];

// ─── Projets scientifiques, informatiques et éditoriaux ──────────────────────
export const projects: Project[] = [
  {
    title: 'Mathématiques pour finalistes très motivés — deux tomes',
    description:
      'Une collection de manuels de mathématiques pour le secondaire scientifique et le début de l’université. Le tome II, publié en version 1.0 sur Zenodo le 31 octobre 2026, aborde les nombres complexes, l’analyse des fonctions réelles et la géométrie ; il propose exposés théoriques, méthodes et exercices corrigés. La notice fournit un DOI pérenne et une licence CC BY-NC-ND 4.0.',
    tech: ['Trigonométrie', 'Algèbre', 'Analyse', 'Géométrie', 'Pédagogie'],
    link: '/bibliotheque/',
    externalHref: 'https://doi.org/10.5281/zenodo.23840933',
    externalLabel: 'Notice et DOI Zenodo',
    sourceLabel: 'Voir les livres',
  },
  {
    title: 'L’Os d’Ishango — concours mathématique',
    description:
      'Projet de site pour le concours de mathématiques L’Os d’Ishango. Le dépôt public associé à ce projet permet de consulter son code source et son évolution.',
    tech: ['TypeScript', 'Concours de mathématiques', 'RDC'],
    externalHref: 'https://github.com/germain65/L-os-d-ishango',
    externalLabel: 'Code source GitHub',
  },
  {
    title: 'Livre de mathématiques pour l’Examen d’État',
    description:
      'Le dépôt projet_exetat est présenté par son auteur comme un livre de mathématiques destiné aux finalistes congolais. Il prolonge le travail pédagogique de la collection publiée sur ce site.',
    tech: ['Mathématiques', 'Examen d’État', 'RDC'],
    externalHref: 'https://github.com/germain65/projet_exetat',
    externalLabel: 'Dépôt GitHub',
    link: '/bibliotheque/',
    sourceLabel: 'Voir la collection',
  },
  {
    title: 'Bibliothèque numérique Germain-Junior TWAMBA',
    description:
      'Le site officiel rassemble les ouvrages mathématiques, leurs fiches bibliographiques et leurs aperçus. Son code source et son historique sont consultables dans le dépôt du site.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'GitHub Pages'],
    externalHref: 'https://github.com/germain65/GermainTwamba',
    externalLabel: 'Code source GitHub',
    link: 'https://germain65.github.io/GermainTwamba/',
    sourceLabel: 'Voir le site publié',
  },
  {
    title: 'Génies en Herbe — Institut Mwanga',
    description:
      'Site consacré au championnat interclasses de Génies en Herbe de l’Institut Mwanga, à Goma.',
    tech: ['HTML', 'Éducation', 'Goma'],
    externalHref: 'https://github.com/germain65/Genie_en_herbe_mwanga',
    externalLabel: 'Code source GitHub',
  },
];
