# Refonte clementrieux.com — plan d'implémentation

> Exécuté inline dans la session (demande de l'utilisateur : « fais le plan et implémente »).
> Spec : `docs/superpowers/specs/2026-11-15-refonte-site-design.md`.

**Objectif :** remplacer le site Quarto par une vitrine Astro statique trilingue (en/fr/es).

**Architecture :** Astro 7 en sortie statique. Une route dynamique `[...lang]` par page génère les
trois langues (`lang` vaut `undefined` pour l'anglais, servi à la racine). Les textes d'interface
sont dans `src/i18n/ui.ts`, les domaines d'expertise en Markdown (collection `expertise`), le
parcours en YAML (collection `experience`). Tests de comportement sur `dist/` avec Vitest
(structure, SEO, liens, données personnelles) et Playwright + axe-core (accessibilité, débordement).

**Stack (versions publiées avant le 2026-11-08) :** astro 7.4.7, typescript 6.0.3,
@astrojs/check 0.9.12, prettier 3.9.10, prettier-plugin-astro 1.1.2, vitest 5.1.0,
@playwright/test 1.65.0, @axe-core/playwright 4.14.0, sharp 0.35.5 (conversion de la photo, dev),
pnpm 12.18.0.

**Écarts assumés par rapport à la spec :**
- `sitemap.xml` écrit à la main (`src/pages/sitemap.xml.ts`) au lieu de `@astrojs/sitemap` : la
  version ≥ 7 jours (3.7.4) exige `@astrojs/markdown-remark`, retiré d'Astro 7 ; quatre pages ×
  trois langues ne justifient pas une dépendance.
- Pas de config `i18n` d'Astro : deux helpers maison (`src/i18n/utils.ts`) suffisent pour une
  route `[...lang]` et évitent une configuration inutilisée.

---

### Tâche 1 : nettoyage Quarto
- Supprimer : `_quarto.yml`, `*.qmd`, `posts/`, `_freeze/`, `_site/`, `docs/` sauf
  `docs/superpowers/`, `resume*.pdf`, `blog.Rproj`, `.Rhistory`, `.nojekyll`, `.DS_Store`,
  `styles.css`. Conserver `clem.jpg` jusqu'à sa conversion (tâche 4).
- Commit.

### Tâche 2 : squelette Astro et outillage
- `package.json` (scripts `dev`, `build`, `check`, `test`, `test:a11y`, `format`), versions
  exactes, `packageManager: pnpm@12.18.0`.
- `astro.config.mjs` (`site: "https://clementrieux.com"`, `trailingSlash: "always"`,
  `build.format: "directory"`), `tsconfig.json` (`astro/tsconfigs/strictest`), `.prettierrc`,
  `.gitignore`, `.npmrc`.
- `pnpm install`, `pnpm build` sur une page vide, commit.

### Tâche 3 : tests de comportement d'abord (rouges)
- `tests/site.test.ts` (Vitest, lit `dist/`) :
  1. chaque page (`/`, `/expertise/`, `/experience/`, `/contact/`) existe en en/fr/es ;
  2. `<html lang>` correspond à la langue ;
  3. `hreflang` en/fr/es + `x-default` vers les bonnes URL absolues ;
  4. le sélecteur de langue pointe vers la même page dans les autres langues ;
  5. `title`, `meta description`, `canonical`, `og:title`, `og:description`, `og:image`,
     `og:locale` non vides ;
  6. aucun lien interne cassé (tous les `href`/`src` relatifs résolus dans `dist/`) ;
  7. `about.html`, `about-fr.html`, `about-es.html` redirigent vers le bon parcours ;
  8. `sitemap.xml` liste les 12 URL avec alternates, `robots.txt` le référence ;
  9. `404.html` existe et contient les trois langues ;
  10. aucune donnée personnelle (téléphone FR, adresse postale, date de naissance).
- `tests/pii.ts` : détecteur pur ; `tests/pii.test.ts` vérifie qu'il attrape un faux numéro,
  une adresse et une date de naissance, et ne signale pas l'email public ni des années seules.
- `tests/a11y.spec.ts` (Playwright) : axe-core sur chaque page, 375 px et 1280 px, thèmes clair
  et sombre, zéro violation `serious`/`critical` ; pas de débordement horizontal à 375 px.
- Lancer : les tests de site échouent (pages absentes), ceux du détecteur passent.

### Tâche 4 : fondations
- `src/i18n/ui.ts` : `languages`, type `Lang`, dictionnaire typé (`satisfies Record<Lang, UI>`).
- `src/i18n/utils.ts` : `langFromParam`, `localizedPath(lang, path)`, `langStaticPaths()`.
- `src/styles/tokens.css`, `src/styles/global.css` : variables, thèmes clair/sombre
  (`prefers-color-scheme` + `[data-theme]`), typographie, mise en page.
- `src/layouts/Base.astro` : `<head>` complet, script de thème anti-flash, header, footer.
- `src/components/` : `Header`, `LanguageSwitcher`, `ThemeToggle`, `Footer`.
- Photo : `clem.jpg` → `public/clem.webp` (sharp, 480 px), favicon SVG, images OG 1200×630
  (une par langue, générées une fois par `scripts/make-images.mjs`).

### Tâche 5 : contenu
- `src/content.config.ts` : collections `expertise` (glob `src/content/expertise/**/*.md`,
  schéma `domain`, `order`, `title`, `summary`, `lang`) et `experience` (file
  `src/content/experience.yaml`).
- 12 fichiers Markdown d'expertise (4 domaines × 3 langues), `experience.yaml`.

### Tâche 6 : pages
- `src/pages/[...lang]/index.astro`, `expertise.astro`, `experience.astro`, `contact.astro`,
  `src/pages/404.astro`, `src/pages/sitemap.xml.ts`, `public/robots.txt`, `public/CNAME`,
  `public/about*.html`.
- `pnpm build && pnpm test` : tout vert. `pnpm check` : zéro avertissement.

### Tâche 7 : accessibilité
- `pnpm test:a11y` vert ; corriger contraste/focus/débordements.

### Tâche 8 : CI, hooks, Dependabot, README
- `.github/workflows/deploy.yml` : build + tests + axe sur PR et push ; déploiement Pages sur
  `main` uniquement. Actions épinglées par SHA.
- `.github/dependabot.yml` (npm + github-actions, cooldown 7 jours, groupes).
- `.pre-commit-config.yaml` + `prek install` ; `actionlint`, `zizmor`.
- `README.md` réécrit.

### Tâche 9 : vérification finale et PR
- `pnpm build && pnpm check && pnpm test && pnpm test:a11y`, `prek run --all-files`.
- Push de `refonte`, PR vers `main`. Bascule Pages et HTTPS au moment de la fusion (avec accord).

### Hors de ce plan
- Publication de `prompt-craft` (dépôt séparé, accord explicite requis avant passage en public).
