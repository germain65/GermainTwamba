# Site de Germain-Junior TWAMBA

> Bibliothèque numérique officielle et recueil de tous les ouvrages mathématiques de Germain-Junior TWAMBA.
> Construit avec **Next.js 15 (App Router)**, **TypeScript** et **Tailwind CSS**.
> Hébergé sur **GitHub Pages** à l'adresse : https://germain65.github.io/GermainTwamba/

---

## Table des matières

1. [Lancer le site en local](#1-lancer-le-site-en-local)
2. [Structure du projet](#2-structure-du-projet)
3. [Ajouter un nouveau livre](#3-ajouter-un-nouveau-livre)
4. [Ajouter ou remplacer des photos](#4-ajouter-ou-remplacer-des-photos)
5. [Annoncer un tome à paraître](#5-annoncer-un-tome-à-paraître)
6. [Modifier les publications et projets](#6-modifier-les-publications-et-projets)
7. [Déployer sur GitHub Pages](#7-déployer-sur-github-pages)
8. [Formulaire de contact](#8-formulaire-de-contact)
9. [Règles de nommage des fichiers](#9-règles-de-nommage-des-fichiers)
10. [Questions fréquentes](#10-questions-fréquentes)

---

## 1. Lancer le site en local

```bash
# Installer les dépendances (une seule fois)
npm install

# Copier le fichier d'environnement (une seule fois)
cp .env.example .env.local

# Démarrer le serveur de développement
npm run dev
# → Ouvrir http://localhost:3000/GermainTwamba dans le navigateur

# Vérifier qu'il n'y a pas d'erreurs TypeScript
npx tsc --noEmit

# Générer la version finale (dossier out/)
npm run build
```

---

## 2. Structure du projet

```
site/
├── app/                    ← Pages du site (Next.js App Router)
│   ├── page.tsx            ← Page d'accueil
│   ├── bibliotheque/       ← Liste des livres + fiches individuelles
│   ├── a-propos/           ← Biographie et photo principale
│   ├── publications/       ← Liste des publications
│   ├── projets/            ← Projets et réalisations
│   ├── curiosites/         ← Notes courtes, datées et sourcées
│   ├── confidentialite/    ← Informations sur les données et l'hébergement
│   └── contact/            ← Formulaire de contact
│
├── components/             ← Composants réutilisables (Header, Footer, BookCover…)
│
├── data/                   ← 📌 C'EST ICI QUE VOUS MODIFIEZ LE CONTENU
│   ├── books.ts            ← Catalogue des livres (ajouter un tome ici)
│   ├── content.ts          ← Publications et projets
│   └── site.ts             ← Infos générales (nom, liens réseaux sociaux…)
│
├── public/                 ← Fichiers accessibles publiquement
│   ├── books/              ← PDF, couvertures et aperçus des livres
│   │   ├── tome-1-trigonometrie.pdf
│   │   ├── tome-1-cover.jpg
│   │   ├── tome-1-preview-00.jpg … tome-1-preview-09.jpg
│   │   ├── tome-2-algebre-analyse.pdf
│   │   ├── tome-2-cover.jpg
│   │   └── tome-2-preview-00.jpg … tome-2-preview-09.jpg
│   │
│   └── photos/             ← Photos pour la galerie et la page À propos
│       ├── germain-portrait.jpg   ← Photo principale (accueil + À propos)
│       ├── germain-cote.jpg
│       ├── germain-parc.jpg
│       └── …
│
└── .github/workflows/
    └── deploy.yml          ← Déploiement automatique sur GitHub Pages
```

---

## 3. Ajouter un nouveau livre

Voici les **4 étapes** à suivre à chaque nouveau tome ou fascicule.

### Étape 1 : Déposer les fichiers dans `public/books/`

| Fichier | Nom recommandé | Obligatoire ? |
|---|---|---|
| Le PDF du livre | `tome-3-mon-titre.pdf` | ✅ Oui |
| Image de couverture | `tome-3-cover.jpg` | Recommandé |
| Aperçus de pages (10 max) | `tome-3-preview-00.jpg` … `tome-3-preview-09.jpg` | Facultatif |

> **Format des images** : JPEG, environ 800–1200 px de large, moins de 500 Ko par image.
> **Format du PDF** : Pas de limite stricte, mais en dessous de 50 Mo de préférence.
> Si votre PDF dépasse 50 Mo, utilisez un lien GitHub Releases à la place (voir [§10](#10-questions-fréquentes)).

### Étape 2 : Ajouter une entrée dans `data/books.ts`

Ouvrez le fichier [`data/books.ts`](data/books.ts) et copiez-collez ce modèle **avant** la ligne `// ─── Prochains ouvrages` :

```typescript
{
  id: 'gjt-t3-2027',                         // identifiant unique (jamais réutilisé)
  slug: 'mon-titre-tome-3',                  // utilisé dans l'URL : /bibliotheque/mon-titre-tome-3/
  title: 'Mon titre complet',
  subtitle: 'Mathématiques pour finalistes très motivés, Tome III',
  author: 'Germain-Junior TWAMBA',
  publisher: 'Club des Divergents (Goma, RDC)',
  series: 'Mathématiques pour finalistes très motivés',
  volume: 3,
  description: 'Une phrase courte décrivant le livre (affichée dans les listes).',
  summary: [
    'Premier paragraphe de présentation longue…',
    'Deuxième paragraphe…',
  ],
  cover: '/books/tome-3-cover.jpg',          // supprimer cette ligne si pas de couverture
  preview: [
    '/books/tome-3-preview-00.jpg',
    '/books/tome-3-preview-01.jpg',
    // … jusqu'à tome-3-preview-09.jpg
  ],
  toc: [],                                   // laisser [] ou remplir comme tocTome1 / tocTome2
  category: 'Mathématiques',
  level: 'Fin de secondaire, début d\'université',
  language: 'fr',
  publicationDate: '2027-01-01',             // format obligatoire : AAAA-MM-JJ
  pageCount: 300,
  format: 'PDF',
  fileSize: '15 Mo',
  downloadUrl: '/books/tome-3-mon-titre.pdf',
  license: 'CC BY-NC-ND 4.0',
  featured: true,                            // true = mis en avant sur la page d'accueil
  tags: ['algèbre', 'finalistes', 'RDC', 'Goma'],
},
```

> ⚠️ **L'`id` et le `slug` doivent être uniques.** Si vous dupliquez l'un ou l'autre, le build échouera avec un message d'erreur clair.

### Étape 3 : Vérifier en local

```bash
npm run dev
# Ouvrir http://localhost:3000/GermainTwamba/bibliotheque/
```

Le nouveau livre doit apparaître dans la liste. Cliquez dessus pour vérifier la fiche détaillée.

### Étape 4 : Publier

```bash
git add .
git commit -m "Ajout du Tome III : Mon titre"
git push
```

Le site se met à jour automatiquement en moins de 2 minutes. ✅

---

## 4. Ajouter ou remplacer des photos

Les photos sont utilisées à deux endroits : la **galerie** (page À propos) et la **photo principale** (accueil + À propos).

### Remplacer la photo principale (portrait)

1. Préparez votre nouvelle photo : JPEG, portrait ou carré, au moins 400 × 400 px.
2. Renommez-la `germain-portrait.jpg`.
3. Copiez-la dans `public/photos/` en écrasant l'ancienne.
4. Committez et poussez :

```bash
git add public/photos/germain-portrait.jpg
git commit -m "Mise à jour du portrait principal"
git push
```

### Ajouter une photo à la galerie

1. Préparez votre photo : JPEG, paysage ou carré, au moins 800 px de large.
2. Nommez-la de façon descriptive, en minuscules, sans espace ni accent :
   - ✅ `goma-lac-kivu.jpg`
   - ❌ `Photo de Goma (Lac Kivu).JPG`
3. Copiez-la dans `public/photos/`.
4. Ouvrez [`data/content.ts`](data/content.ts) et ajoutez votre photo dans le tableau `gallery` (ou créez-le s'il n'existe pas encore) :

```typescript
export const gallery = [
  { src: '/photos/germain-portrait.jpg',  alt: 'Portrait officiel' },
  { src: '/photos/goma-lac-kivu.jpg',     alt: 'Vue sur le lac Kivu depuis Goma' },
  // … ajoutez vos lignes ici
];
```

5. Committez et poussez :

```bash
git add public/photos/goma-lac-kivu.jpg data/content.ts
git commit -m "Ajout photo : lac Kivu"
git push
```

> **Poids recommandé** : moins de 300 Ko par photo pour garder le site rapide.
> Utilisez un outil comme [Squoosh](https://squoosh.app/) pour compresser sans perdre en qualité.

### Photos actuellement dans la galerie

| Fichier | Description |
|---|---|
| `germain-portrait.jpg` | Portrait principal (stade olympique) |
| `germain-cote.jpg` | Photo de profil |
| `germain-parc.jpg` | Photo dans un parc |
| `uclouvain-bibliotheque.jpg` | Bibliothèque UCLouvain |
| `place-belgique.jpg` | Place en Belgique |
| `panorama-ville.jpg` | Panorama urbain |
| `vue-hauteur.jpg` | Vue de hauteur |
| `voyage-train.jpg` | Voyage en train |
| `sentier-foret.jpg` | Sentier en forêt |
| `escaliers-pierre.jpg` | Escaliers en pierre |
| `parc-arbres.jpg` | Parc arboré |

---

## 5. Annoncer un tome à paraître

Dans [`data/books.ts`](data/books.ts), remplissez le tableau `upcoming` pour afficher une annonce sur le site :

```typescript
export const upcoming: { title: string; note?: string }[] = [
  {
    title: 'Tome III : Probabilités et statistiques',
    note: 'Parution prévue en 2027',
  },
  {
    title: 'Tome IV : Calcul différentiel et intégral',
    note: 'En cours de rédaction',
  },
];
```

---

## 6. Modifier les publications et projets

Ouvrez [`data/content.ts`](data/content.ts) pour modifier :

- **`publications`** : vos articles, manuels, fascicules publiés (affichés sur `/publications/`)
- **`projects`** : vos réalisations et initiatives (affichés sur `/projets/`)
- **`siteUpdatedAt`** (dans `data/site.ts`, avec `siteUpdatedAtISO` pour le sitemap) : date affichée dans le pied de page et la note de confidentialité ; mettez-la à jour avec le contenu.
- **`app/curiosites/page.tsx`** : ajoutez à chaque curiosité sa propre date de publication (écrite en dur, elle ne change pas avec `siteUpdatedAt`) et une source ou une démonstration.
- **`app/a-propos/page.tsx`** : le tableau `timeline` contient les grandes étapes de votre parcours.

Chaque tableau est documenté directement dans le fichier avec des commentaires en français.

---

## 7. Déployer sur GitHub Pages

Le déploiement est **entièrement automatique** grâce au fichier [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Comment ça fonctionne

```
Vous faites git push
      ↓
GitHub Actions détecte le changement
      ↓
Compile le site (npm ci && npm run build)
      ↓
Publie le dossier out/ sur GitHub Pages
      ↓
Le site est mis à jour en < 2 minutes ✅
```

### Vérifier l'état d'un déploiement

```bash
gh run list --repo germain65/GermainTwamba --limit 5
```

### Forcer un redéploiement manuel (sans modification)

```bash
gh workflow run deploy.yml --repo germain65/GermainTwamba
```

---

## 8. Formulaire de contact

Le formulaire n'est pas connecté par défaut. Dans cette version, la page Contact propose un lien `mailto` pour écrire directement. Le site ne transmet ni ne stocke alors le message.

Pour activer un prestataire de formulaire, choisissez-le, vérifiez ses règles de confidentialité et ajoutez son URL publique dans une variable de dépôt :

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://votre-prestataire.example/votre-formulaire
```

Dans GitHub, configurez-la dans **Settings → Secrets and variables → Actions → Variables**. Le workflow de publication la transmet au build. Comme `NEXT_PUBLIC_FORM_ENDPOINT` est intégrée aux fichiers du site, cette adresse sera publique. Complétez la note de confidentialité avec le nom du prestataire et ses informations avant d'activer l'envoi.

---

## 9. Règles de nommage des fichiers

Respectez ces conventions pour éviter les erreurs :

| ✅ Correct | ❌ Incorrect | Raison |
|---|---|---|
| `tome-3-cover.jpg` | `Tome 3 Cover.jpg` | Pas de majuscules ni d'espaces |
| `goma-lac-kivu.jpg` | `photo (1).jpg` | Pas de parenthèses ni de chiffres seuls |
| `2027-01-15` | `15/01/2027` | Format de date : AAAA-MM-JJ obligatoire |
| `gjt-t3-2027` | `gjt-t2-2026` (déjà pris) | Identifiant unique |

---

## 10. Questions fréquentes

**Mon PDF est trop lourd (> 50 Mo), que faire ?**
Utilisez GitHub Releases : allez sur https://github.com/germain65/GermainTwamba/releases, créez une nouvelle release et attachez votre PDF. Copiez ensuite le lien direct dans le champ `downloadUrl` de `data/books.ts`.

**Le build a échoué, que regarder ?**
```bash
npm run build 2>&1 | Select-String "Error|error"
```
Les erreurs les plus fréquentes : identifiant ou slug dupliqué dans `books.ts`, date mal formatée, image référencée dans `books.ts` mais absente de `public/books/`.

**Comment tester le site exactement comme en production ?**
```bash
npm run build && npx serve out -p 3001
# → http://localhost:3001/GermainTwamba/
```

**Comment voir les logs du dernier déploiement ?**
```bash
gh run view --repo germain65/GermainTwamba
```

**Puis-je ajouter un tome en anglais ?**
Oui. Mettez `language: 'en'` dans l'entrée `books.ts`. La fiche s'affichera normalement.

---

*Dernière mise à jour : novembre 2026 · Germain-Junior TWAMBA / Club des Divergents, Goma (RDC)*
