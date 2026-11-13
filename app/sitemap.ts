import type { MetadataRoute } from 'next';
import { allBooks } from '@/data/books';
import { nav, site } from '@/data/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav.map((n) => n.href), ...allBooks.map((b) => `/bibliotheque/${b.slug}/`)].map((p) => ({ url: `${site.url}${p}` }));
}
