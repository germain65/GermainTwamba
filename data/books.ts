// Fichier : data/books.ts
// Rôle    : Catalogue central des ouvrages de Germain-Junior TWAMBA
// Ajoutez un objet à la liste, déposez le PDF dans public/books/, c'est tout.

export type TocEntry = {
  title: string;
  num?: string;
  page?: string;
  items?: TocEntry[];
};

export type Book = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  description: string;
  summary?: string[];           // paragraphes de présentation longue
  cover?: string;               // ex. '/books/mon-livre.jpg' ; sinon couverture typographique générée
  category: string;
  level?: string;
  language: 'fr' | 'en';
  publicationDate: string;      // AAAA-MM-JJ
  pageCount?: number;
  format: string;
  fileSize?: string;
  downloadUrl?: string;         // ex. '/books/mon-livre.pdf' ou lien GitHub Releases
  license: string;
  isbn?: string;
  doi?: string;
  featured?: boolean;
  tags: string[];
  series?: string;
  volume?: number;
  publisher?: string;
  toc?: TocEntry[];             // sommaire structuré
  preview?: string[];           // chemins vers les images d'aperçu (public/books/*.jpg)
};

// ─── Série ───────────────────────────────────────────────────────────────────
const SERIES = 'Mathématiques pour finalistes très motivés';

// ─── Sommaire Tome I ─────────────────────────────────────────────────────────
const tocTome1: TocEntry[] = [
  { title: 'Avant-propos', page: 'xi' },
  { title: 'Remerciements', page: 'xv' },
  { title: 'Abréviations et acronymes', page: 'xvii' },
  { title: 'Notations et symboles', page: 'xix' },
  { title: 'Introduction générale', page: '1' },
  {
    title: '1. Fondements de la trigonométrie', page: '17',
    items: [
      { num: '1.1', title: 'Géométrie orientée du plan', page: '18' },
      { num: '1.2', title: 'Mesure des angles', page: '20' },
      { num: '1.3', title: 'Le cercle trigonométrique', page: '22' },
      { num: '1.4', title: 'Définitions fondamentales', page: '24' },
      { num: '1.5', title: 'Sécante et cosécante', page: '26' },
      { num: '1.6', title: 'La relation de Pythagore', page: '28' },
      { num: '1.7', title: 'Valeurs remarquables', page: '30' },
      { num: '1.8', title: 'Angles associés', page: '32' },
      { num: '1.9', title: 'Réduction au premier quadrant', page: '35' },
      { num: '1.10', title: 'Simplification', page: '38' },
      { num: '1.11', title: 'Trigonométrie dans le triangle rectangle', page: '40' },
      { num: '1.12', title: 'Vrai ou Faux ?', page: '45' },
      { num: '1.13', title: 'Exercices', page: '47' },
      { num: '1.14', title: 'Problèmes', page: '55' },
    ],
  },
  {
    title: '2. Trigonométrie analytique', page: '61',
    items: [
      { num: '2.1', title: 'Du cercle trigonométrique aux fonctions', page: '62' },
      { num: '2.2', title: 'Fonction sinus', page: '63' },
      { num: '2.3', title: 'Fonction cosinus', page: '64' },
      { num: '2.4', title: 'Fonction tangente', page: '66' },
      { num: '2.5', title: 'Vue d\'ensemble : sin, cos et tan réunis', page: '69' },
      { num: '2.6', title: 'Cotangente, sécante et cosécante', page: '69' },
      { num: '2.7', title: 'Tableau récapitulatif des six fonctions directes', page: '72' },
      { num: '2.8', title: 'Transformations des courbes trigonométriques', page: '73' },
      { num: '2.9', title: 'Fonctions cyclométriques (fonctions trigonométriques inverses)', page: '76' },
      { num: '2.10', title: 'Tableau récapitulatif des fonctions cyclométriques', page: '83' },
      { num: '2.11', title: 'Vrai ou Faux ?', page: '86' },
      { num: '2.12', title: 'Exercices', page: '88' },
      { num: '2.13', title: 'Problèmes', page: '93' },
    ],
  },
  {
    title: '3. Produit scalaire', page: '95',
    items: [
      { num: '3.1', title: 'Motivation', page: '96' },
      { num: '3.2', title: 'Définition géométrique', page: '97' },
      { num: '3.3', title: 'Propriétés algébriques', page: '98' },
      { num: '3.4', title: 'Projection orthogonale d\'un vecteur', page: '100' },
      { num: '3.5', title: 'Expression analytique', page: '103' },
      { num: '3.6', title: 'Inégalité de Cauchy-Schwarz', page: '104' },
      { num: '3.7', title: 'Vrai ou Faux ?', page: '106' },
      { num: '3.8', title: 'Exercices', page: '107' },
      { num: '3.9', title: 'Problèmes', page: '111' },
    ],
  },
  {
    title: '4. Grandes formules de la trigonométrie', page: '112',
    items: [
      { num: '4.1', title: 'Rôle des formules trigonométriques', page: '113' },
      { num: '4.2', title: 'Identités et symétries de base', page: '114' },
      { num: '4.3', title: 'Formules d\'addition et de soustraction', page: '115' },
      { num: '4.4', title: 'Formules de duplication', page: '117' },
      { num: '4.5', title: 'Formules de triplication', page: '119' },
      { num: '4.6', title: 'Demi-angle et linéarisation', page: '120' },
      { num: '4.7', title: 'Formules somme-produit et produit-somme', page: '122' },
      { num: '4.8', title: 'Paramétrisation de Weierstrass', page: '124' },
      { num: '4.9', title: 'Synthèse méthodologique', page: '125' },
      { num: '4.10', title: 'Vrai ou Faux ?', page: '126' },
      { num: '4.11', title: 'Exercices', page: '127' },
      { num: '4.12', title: 'Problèmes', page: '133' },
    ],
  },
  {
    title: '5. Équations et inéquations trigonométriques', page: '137',
    items: [
      { num: '5.1', title: 'Équations élémentaires', page: '139' },
      { num: '5.2', title: 'Équations du type cos x = cos α et sin x = sin α', page: '140' },
      { num: '5.3', title: 'Équations de la forme a cos x + b sin x = c', page: '141' },
      { num: '5.4', title: 'Substitution universelle t = tan(x/2) (Weierstrass)', page: '144' },
      { num: '5.5', title: 'Équations polynomiales en cos x ou sin x', page: '146' },
      { num: '5.6', title: 'Équations homogènes en sin x et cos x', page: '147' },
      { num: '5.7', title: 'Équations symétriques en sin x et cos x', page: '149' },
      { num: '5.8', title: 'Équations avec angles multiples', page: '153' },
      { num: '5.9', title: 'Équations paramétriques', page: '154' },
      { num: '5.10', title: 'Systèmes d\'équations trigonométriques', page: '157' },
      { num: '5.11', title: 'Inéquations trigonométriques', page: '159' },
      { num: '5.12', title: 'Équations et inéquations avec fonctions trigonométriques inverses', page: '164' },
      { num: '5.13', title: 'Synthèse méthodologique', page: '167' },
      { num: '5.14', title: 'Récapitulatif', page: '168' },
      { num: '5.15', title: 'Vrai ou Faux ?', page: '169' },
      { num: '5.16', title: 'Exercices', page: '170' },
      { num: '5.17', title: 'Problèmes', page: '175' },
    ],
  },
  {
    title: '6. Résolution des triangles', page: '181',
    items: [
      { num: '6.1', title: 'Triangles rectangles', page: '182' },
      { num: '6.2', title: 'Loi des sinus', page: '184' },
      { num: '6.3', title: 'Loi des cosinus (théorème d\'Al-Kashi)', page: '186' },
      { num: '6.4', title: 'Formules de l\'aire et formule de Héron', page: '187' },
      { num: '6.5', title: 'Résolution des triangles quelconques : étude des 6 cas', page: '188' },
      { num: '6.6', title: 'Éléments et points remarquables du triangle', page: '193' },
      { num: '6.7', title: 'Applications en topographie', page: '201' },
      { num: '6.8', title: 'Applications en géométrie', page: '206' },
      { num: '6.9', title: 'Pour aller plus loin', page: '207' },
      { num: '6.10', title: 'Formulaire récapitulatif', page: '212' },
    ],
  },
  {
    title: '7. Applications de la trigonométrie', page: '221',
    items: [
      { num: '7.1', title: 'Coordonnées polaires', page: '225' },
      { num: '7.2', title: 'Rotations et matrices', page: '229' },
      { num: '7.3', title: 'Mesures indirectes et navigation', page: '231' },
      { num: '7.4', title: 'Oscillations, ondes et phase', page: '233' },
      { num: '7.5', title: 'Optique géométrique', page: '241' },
      { num: '7.6', title: 'Géométrie analytique et coniques', page: '243' },
      { num: '7.7', title: 'Séries de Fourier et signaux', page: '245' },
    ],
  },
  {
    title: 'Corrigés des exercices', page: '247',
    items: [
      { title: 'Corrigés du chapitre 1', page: '249' },
      { title: 'Corrigés du chapitre 2', page: '275' },
      { title: 'Corrigés du chapitre 3', page: '294' },
      { title: 'Corrigés du chapitre 4', page: '308' },
      { title: 'Corrigés du chapitre 5', page: '341' },
      { title: 'Corrigés du chapitre 6', page: '368' },
    ],
  },
  {
    title: 'Annexes', page: '389',
    items: [
      { num: 'A', title: 'Rappels d\'algèbre et de géométrie', page: '391' },
      { num: 'B', title: 'Formulaire de trigonométrie', page: '397' },
      { num: 'C', title: 'Tables trigonométriques', page: '407' },
    ],
  },
  { title: 'Bibliographie', page: '413' },
  { title: 'Index alphabétique', page: '417' },
];

// ─── Sommaire Tome II ────────────────────────────────────────────────────────
const tocTome2: TocEntry[] = [
  { title: 'Avant-propos', page: 'xi' },
  { title: 'Remerciements', page: 'xv' },
  { title: 'Abréviations et acronymes', page: 'xvii' },
  { title: 'Notations et symboles', page: 'xix' },
  {
    title: 'Partie I — Algèbre et Analyse', page: '1',
    items: [
      {
        num: '1', title: 'Les Nombres Complexes', page: '3',
        items: [
          { num: '1.1', title: 'Introduction', page: '4' },
          { num: '1.2', title: 'Aide-mémoire', page: '10' },
          { num: '1.3', title: 'Exercices', page: '29' },
          { num: '1.4', title: 'Problèmes', page: '57' },
        ],
      },
      {
        num: '2', title: 'Fonctions Logarithmiques et Exponentielles', page: '67',
        items: [
          { num: '2.1', title: 'Contexte historique', page: '68' },
          { num: '2.2', title: 'Rappel sur les généralités des fonctions numériques', page: '78' },
          { num: '2.3', title: 'Fonctions usuelles', page: '96' },
          { num: '2.4', title: 'Exercices', page: '116' },
          { num: '2.5', title: 'Problèmes', page: '149' },
        ],
      },
    ],
  },
  {
    title: 'Partie II — Géométrie', page: '165',
    items: [
      { num: '3', title: 'Questions de géométrie', page: '167' },
    ],
  },
  {
    title: 'Partie III — Corrigés', page: '177',
    items: [
      { title: 'Corrigés du chapitre 1', page: '179' },
      { title: 'Corrigés du chapitre 2', page: '249' },
      { title: 'Corrigés de géométrie', page: '377' },
    ],
  },
  {
    title: 'Partie IV — Annexes et Références', page: '409',
    items: [
      { num: 'A', title: 'Formulaire de mathématiques', page: '411' },
      { title: 'Bibliographie', page: '429' },
    ],
  },
  {
    title: 'Partie V — Index Alphabétique', page: '433',
    items: [
      { title: 'Index alphabétique', page: '435' },
      { title: 'À propos de l\'auteur', page: '441' },
    ],
  },
];

// ─── Catalogue ────────────────────────────────────────────────────────────────
const books: Book[] = [
  {
    id: 'gjt-t1-2026',
    slug: 'trigonometrie-plane-tome-1',
    title: 'Trigonométrie plane',
    subtitle: 'Mathématiques pour finalistes très motivés — Tome I',
    author: 'Germain-Junior TWAMBA',
    publisher: 'Club des Divergents — Goma, RDC',
    series: SERIES,
    volume: 1,
    description:
      'Premier tome d\'une collection destinée aux élèves passionnés de fin de secondaire : du cercle trigonométrique aux séries de Fourier, avec exercices, problèmes et corrigés détaillés.',
    summary: [
      'Ce premier tome ouvre la collection par la trigonométrie plane. Il part de la géométrie orientée et du cercle trigonométrique, établit les définitions fondamentales, puis explore les fonctions circulaires (sinus, cosinus, tangente, cotangente, sécante, cosécante) et les fonctions cyclométriques.',
      'Il traite ensuite le produit scalaire, les grandes formules trigonométriques (addition, duplication, triplication, Weierstrass), les équations et inéquations trigonométriques sous toutes leurs formes, et la résolution complète des triangles (lois des sinus et des cosinus, formule de Héron, topographie).',
      'Le tome se conclut par des applications : coordonnées polaires, rotations et matrices, oscillations et ondes, optique, coniques, séries de Fourier. Chaque chapitre propose des questions Vrai ou Faux, des exercices et des problèmes. Les corrigés détaillés, un formulaire complet en trois annexes et des tables trigonométriques complètent l\'ouvrage.',
    ],
    cover: '/books/tome-1-cover.jpg',
    preview: [
      '/books/tome-1-preview-00.jpg',
      '/books/tome-1-preview-01.jpg',
      '/books/tome-1-preview-02.jpg',
      '/books/tome-1-preview-03.jpg',
      '/books/tome-1-preview-04.jpg',
      '/books/tome-1-preview-05.jpg',
      '/books/tome-1-preview-06.jpg',
      '/books/tome-1-preview-07.jpg',
      '/books/tome-1-preview-08.jpg',
      '/books/tome-1-preview-09.jpg',
    ],
    toc: tocTome1,
    category: 'Mathématiques',
    level: 'Fin de secondaire — début d\'université',
    language: 'fr',
    publicationDate: '2026-10-24',
    pageCount: 455,
    format: 'PDF',
    fileSize: '34 Mo',
    downloadUrl: '/books/tome-1-trigonometrie.pdf',
    license: 'CC BY-NC-ND 4.0',
    featured: true,
    tags: ['trigonométrie', 'finalistes', 'RDC', 'Goma', 'exercices corrigés', 'Club des Divergents'],
  },
  {
    id: 'gjt-t2-2026',
    slug: 'algebre-analyse-geometrie-tome-2',
    title: 'Éléments d\'algèbre, d\'analyse et de géométrie',
    subtitle: 'Mathématiques pour finalistes très motivés — Tome II',
    author: 'Germain-Junior TWAMBA',
    publisher: 'Club des Divergents — Goma, RDC',
    series: SERIES,
    volume: 2,
    description:
      'Deuxième tome de la collection : nombres complexes, fonctions logarithmiques et exponentielles, questions de géométrie, avec corrigés complets et formulaire de mathématiques.',
    summary: [
      'Ce volume marque l\'entrée dans les mathématiques fondamentales : algèbre, analyse réelle et géométrie. Il accompagne le passage du calcul technique du secondaire à la pensée abstraite de l\'université, en tissant des liens permanents entre représentations géométriques et rigueur analytique.',
      'La première partie couvre les nombres complexes (formes algébrique, trigonométrique et exponentielle, formule de Moivre, racines n-ièmes) puis les fonctions logarithmiques et exponentielles, avec un riche contexte historique et un rappel sur les généralités des fonctions numériques. La deuxième partie est consacrée aux questions de géométrie synthétique.',
      'Une partie entière de corrigés détaillés, un formulaire de mathématiques, une bibliographie et un index alphabétique complètent l\'ouvrage. La collection est née au sein du Club des Divergents, initiative d\'émulation scientifique fondée à Goma pour mettre à la disposition de la jeunesse des outils pédagogiques au plus haut standard académique.',
    ],
    cover: '/books/tome-2-cover.jpg',
    preview: [
      '/books/tome-2-preview-00.jpg',
      '/books/tome-2-preview-01.jpg',
      '/books/tome-2-preview-02.jpg',
      '/books/tome-2-preview-03.jpg',
      '/books/tome-2-preview-04.jpg',
      '/books/tome-2-preview-05.jpg',
      '/books/tome-2-preview-06.jpg',
      '/books/tome-2-preview-07.jpg',
      '/books/tome-2-preview-08.jpg',
      '/books/tome-2-preview-09.jpg',
    ],
    toc: tocTome2,
    category: 'Mathématiques',
    level: 'Fin de secondaire — début d\'université',
    language: 'fr',
    publicationDate: '2026-10-31',
    pageCount: 465,
    format: 'PDF',
    fileSize: '20 Mo',
    downloadUrl: '/books/tome-2-algebre-analyse.pdf',
    license: 'CC BY-NC-ND 4.0',
    featured: true,
    tags: ['algèbre', 'analyse', 'géométrie', 'nombres complexes', 'logarithmes', 'finalistes', 'RDC'],
  },
];

// ─── Prochains ouvrages ───────────────────────────────────────────────────────
// TODO: décommentez et complétez pour annoncer un tome à paraître :
// { title: 'Tome III : …', note: 'Parution prévue en …' }
export const upcoming: { title: string; note?: string }[] = [];

// ─── Validation ───────────────────────────────────────────────────────────────
// Une erreur claire est levée au build si un identifiant ou un slug est dupliqué.
const seen = new Set<string>();
for (const b of books) {
  for (const k of [b.id, b.slug]) {
    if (seen.has(k)) throw new Error(`Catalogue : identifiant dupliqué « ${k} »`);
    seen.add(k);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.publicationDate))
    throw new Error(`Catalogue : date invalide pour « ${b.id} »`);
}

export const allBooks = [...books].sort((a, b) => b.publicationDate.localeCompare(a.publicationDate));
export const getBook = (slug: string) => allBooks.find((b) => b.slug === slug);
export const frDate = (d: string) =>
  new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
