// Fichier : next.config.mjs
// Rôle    : Configuration Next.js avec export statique et sous-dossier GitHub Pages

// En développement local (npm run dev), on n'utilise pas de préfixe pour accéder à http://localhost:3000/
// En production (sur GitHub Pages), on utilise le préfixe du dépôt : /GermainTwamba
const isDev = process.env.NODE_ENV === 'development';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isDev ? '' : '/GermainTwamba');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
