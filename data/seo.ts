// Fichier : data/seo.ts
// Rôle    : Données de référencement centralisées (titres, descriptions, schema.org)
import { site } from '@/data/site';

export const seo = {
  homeTitle: 'Germain-Junior Twamba : bibliothèque numérique de mathématiques en accès libre',
  homeDescription:
    'Manuels de mathématiques en PDF, gratuits et en accès libre : trigonométrie plane, algèbre, analyse et géométrie, par Germain-Junior Twamba. Série « Mathématiques pour finalistes très motivés ».',
  keywords: [
    'Germain-Junior Twamba',
    'Germain Junior Twamba',
    'mathématiques pour finalistes très motivés',
    'manuel de mathématiques PDF',
    'trigonométrie plane',
    'algèbre analyse géométrie',
    'bibliothèque numérique mathématiques',
    'ouvrages en accès libre',
  ],
};

const personId = `${site.url}/#auteur`;
const websiteId = `${site.url}/#site`;

export const personLd = {
  '@type': 'Person',
  '@id': personId,
  name: 'Germain-Junior Twamba',
  alternateName: ['Germain Junior Twamba', 'Germain-Junior TWAMBA'],
  url: `${site.url}/`,
  description:
    'Auteur de la série de manuels « Mathématiques pour finalistes très motivés », publiés en accès libre.',
  knowsAbout: ['Mathématiques', 'Trigonométrie', 'Algèbre', 'Analyse', 'Géométrie'],
  sameAs: site.links.filter((l) => l.href.startsWith('http')).map((l) => l.href),
};

export const websiteLd = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${site.url}/`,
  name: site.name,
  description: seo.homeDescription,
  inLanguage: 'fr',
  author: { '@id': personId },
  publisher: { '@id': personId },
};

export const siteLd = { '@context': 'https://schema.org', '@graph': [personLd, websiteLd] };

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
