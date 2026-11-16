import type { MetadataRoute } from 'next';
import { allBooks } from '@/data/books';
import { nav, site, siteUpdatedAtISO } from '@/data/site';

export const dynamic = 'force-static';

const CURIOSITES = ['01-pascal.pdf', '02-sangaku.pdf', '03-matrices-de-gram.pdf', '04-modele-de-verhulst.pdf'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [...nav.map((n) => n.href), '/confidentialite/'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: siteUpdatedAtISO,
    changeFrequency: p === '/' || p === '/bibliotheque/' || p === '/curiosites/' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1 : p === '/bibliotheque/' ? 0.9 : p === '/confidentialite/' ? 0.2 : 0.7,
  }));
  const books: MetadataRoute.Sitemap = allBooks.map((b) => ({
    url: `${site.url}/bibliotheque/${b.slug}/`,
    lastModified: b.publicationDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));
  const pdfs: MetadataRoute.Sitemap = [
    ...allBooks.filter((b) => b.downloadUrl && !b.downloadUrl.startsWith('http')).map((b) => ({
      url: `${site.url}${b.downloadUrl}`,
      lastModified: b.publicationDate,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...CURIOSITES.map((f) => ({
      url: `${site.url}/curiosites/${f}`,
      lastModified: '2026-11-14',
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
  return [...pages, ...books, ...pdfs];
}
