# Site de Germain-Junior TWAMBA

Next.js (App Router), TypeScript, Tailwind. Export statique : hébergeable sur GitHub Pages, Cloudflare Pages ou Vercel.

## Lancer
    npm install
    cp .env.example .env.local
    npm run dev          # http://localhost:3000
    npm run build        # génère le dossier out/

## Compléter le contenu
Cherchez `TODO` dans le projet (`grep -rn TODO app components data`). Les fichiers à remplir : `data/site.ts` (identité, liens), `data/books.ts` (livres), `data/content.ts` (publications, projets, parcours), et les textes marqués dans `app/page.tsx` et `app/a-propos/page.tsx`.

## Ajouter un livre
1. Copier le PDF dans `public/books/` (et la couverture si elle existe).
2. Ajouter un objet dans `data/books.ts`. Les doublons d'id ou de slug font échouer le build avec un message clair.
Pour les gros PDF, préférez GitHub Releases (lien dans `downloadUrl`) : GitHub Pages limite le dépôt publié à 1 Go environ.

## Formulaire de contact
Créez un formulaire gratuit sur Formspree (offre gratuite limitée), puis mettez son URL dans `NEXT_PUBLIC_FORM_ENDPOINT`. Sans cela, le formulaire affiche une erreur explicite.

## Déployer sur GitHub Pages
Ajouter un workflow GitHub Actions qui lance `npm ci && npm run build` et publie `out/`. Si le site est dans un sous-dossier, définir `basePath` dans `next.config.mjs`.
