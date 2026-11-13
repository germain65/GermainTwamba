// Fichier : next.config.mjs
// Rôle    : Configuration Next.js avec export statique et sous-dossier GitHub Pages

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/GermainTwamba';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
