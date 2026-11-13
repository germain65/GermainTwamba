// Export statique : compatible GitHub Pages, Cloudflare Pages et Vercel.
// TODO: si le site est servi dans un sous-dossier (https://user.github.io/depot), ajouter basePath: '/depot'.
const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
