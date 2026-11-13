import type { MetadataRoute } from 'next';
import { allBooks } from '@/data/books';
import { nav, site, siteUpdatedAtISO } from '@/data/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...nav.map((n) => n.href), '/confidentialite/'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: siteUpdatedAtISO,
  }));
  const books = allBooks.map((b) => ({
    url: `${site.url}/bibliotheque/${b.slug}/`,
    lastModified: b.publicationDate,
  }));
  return [...pages, ...books];
}
