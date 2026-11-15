# Refonte de clementrieux.com — design

Date : 2026-11-15 · Branche : `refonte`

## Objectif

Remplacer le blog Quarto (dernier commit le 2024-12-07) par une vitrine professionnelle trilingue
(anglais, français, espagnol) qui montre ce que Clément Rieux sait faire, à des recruteurs (CDI) comme
à des clients (freelance).

Publics visés, qui doivent tous s'y retrouver : recruteur sans connaissance technique, data
scientist, quant, expert LLM, expert tech, préparateur physique.

## Contraintes

- **Aucun projet personnel montré** (ni code, ni description, ni données).
- **Pas de site « IA »** : ni l'apparence d'un site généré (dégradés, emojis dans les titres,
  formules creuses), ni un positionnement centré sur l'IA. L'IA est une compétence parmi d'autres.
- **Aucune donnée personnelle** : ni téléphone, ni adresse postale, ni date de naissance. Contacts
  publiés : `clement.rieux@yahoo.com`, LinkedIn (`/in/ClementRieux/`), GitHub (`clementrx`).
- **Pas de CV PDF** pour l'instant (les CV seront refaits plus tard).
- Responsive (mobile d'abord) et accessible (WCAG AA).
- Hébergement inchangé : GitHub Pages, domaine `clementrieux.com`.

## Hors périmètre

- Blog : les anciens articles sont supprimés, sans migration.
- Démos (prédiction Bitcoin / S&P 500 / actions volatiles alimentée par le VPS, tutoriel LLM local) :
  conçues plus tard dans leur propre spec. L'architecture leur laisse la place (voir « Évolutions »)
  mais rien n'est créé d'avance.
- Identité visuelle définitive : un style neutre et soigné suffit ; il sera retravaillé plus tard.
- Publication de `prompt-craft` : chantier séparé (voir plus bas), dans son propre dépôt.

## Pages

Chaque page existe en trois langues avec le même slug : anglais à la racine (`/expertise/`),
français sous `/fr/`, espagnol sous `/es/`. Un sélecteur de langue mène à la même page dans l'autre
langue.

| Page | Slug | Contenu |
|---|---|---|
| Accueil | `/` | Nom, titre, accroche en une phrase, photo. CTA « Voir mon parcours » et « Me contacter ». Quatre cartes, une par domaine, vers la section correspondante d'Expertise. |
| Expertise | `/expertise/` | Quatre sections (ci-dessous). Chacune commence par un résumé en langage courant, puis le détail technique. |
| Parcours | `/experience/` | Frise des postes, formation, compétences groupées par domaine. Sert de CV en ligne. |
| Contact | `/contact/` | Email, LinkedIn, GitHub, disponibilité (CDI et missions). Pas de formulaire. |
| 404 | — | Message et liens vers l'accueil, dans les trois langues. |

### Domaines de la page Expertise

1. **Data science & machine learning** — modélisation, scoring, séries temporelles, vision par
   ordinateur (classification, détection, segmentation), géostatistique, NLP ; validation rigoureuse.
   Illustré par les missions EDF et SFR, sans détail confidentiel.
2. **Finance quantitative** — méthode de recherche : backtests sans fuite temporelle, coûts de
   transaction modélisés, pré-enregistrement des hypothèses, échantillon hors-échantillon scellé,
   résultats négatifs publiés. Aucune stratégie ni performance personnelle.
3. **Sport & performance** — athlète de niveau national (javelot) ; la donnée au service de
   l'entraînement : charge, récupération, suivi des progrès.
4. **LLM & agents** — data science avec Claude Code et Codex : spec avant code, garde-fous (tests,
   linters, hooks), causalité temporelle, chiffres mesurés, LLM locaux (Ollama / MLX sur Apple
   Silicon) pour les données confidentielles, évaluation des sorties. Lien vers `prompt-craft` une
   fois public.

### Contenu de Parcours (source : CV 2024, sans données personnelles)

- 2023 – aujourd'hui · **EDF**, Data Scientist (Paris) — analyses statistiques, scoring, séries
  temporelles, classification d'image, détection d'objets, segmentation d'image.
- 2021 – 2023 · **Epsilon France**, consultant Data Scientist chez EDF (Paris) — mêmes domaines.
- 2021 – 2023 · **Epsilon France**, formateur R — usage avancé de R, bonnes pratiques.
- 2019 – 2021 · **Epsilon France**, consultant Data Scientist chez SFR (Paris) — géostatistique,
  données de fréquentation et de déplacement, indicateurs de contrôle automatisés, cartographie.
- 2019 · **Epsilon France**, Data Scientist (Paris) — recherche sur le traitement automatique des
  e-mails (NLP), reporting automatisé, segmentation, parcours clients.
- 2018 · **Toulouse School of Economics**, chargé de TD en macroéconomie.
- Formation : Master 2 Économie appliquée (mention bien), TSE, 2019 ; Licence d'économie et
  gestion, TSE, 2017.
- Compétences : Python, R, SQL, PySpark, PostgreSQL, SAS ; ML (gradient boosting, deep learning
  pour la vision), séries temporelles ; Claude Code, Codex, LLM locaux ; Git, Linux, CI. La liste
  finale est validée par Clément.
- Langues : français (natif), anglais (courant, professionnel), espagnol (intermédiaire).

Les textes sont rédigés par Claude dans les trois langues puis relus par Clément.

## Visuel

- Style neutre et éditorial : une colonne de lecture, de grands espacements, peu d'éléments, aucune
  animation décorative.
- Police sans-serif pour le texte, police monospace pour les accents (étiquettes, chiffres).
- Thème clair ou sombre selon le réglage du système, bouton pour forcer l'un ou l'autre (choix mémorisé en `localStorage`, la page fonctionne sans).
- Couleurs, polices et espacements centralisés en variables CSS (`src/styles/tokens.css`) pour
  pouvoir changer le style sans toucher aux pages.
- Photo actuelle (`clem.jpg`, 1,4 Mo) convertie en WebP (~50 Ko) avec texte alternatif.
- Contraste WCAG AA dans les deux modes, navigation au clavier, focus visible.

## Architecture

**Stack** : Astro 7, TypeScript strict, pnpm, CSS natif (pas de framework CSS). Les versions sont
épinglées sur la dernière version publiée depuis au moins 7 jours. React n'est pas installé tant
qu'aucune page interactive n'existe.

**i18n** : une route dynamique `[...lang]` génère les trois versions de chaque page (anglais à la
racine). Deux helpers (`src/i18n/utils.ts`) remplacent la config `i18n` d'Astro, inutile ici.

```
src/
  i18n/ui.ts               textes d'interface ; typé pour qu'une clé manquante dans une langue
                           casse la compilation
  i18n/utils.ts            langue depuis l'URL, chemin localisé
  content.config.ts        schémas des collections
  content/expertise/{en,fr,es}/{data-science,quant,sport,llm}.md
  content/experience.yaml  une entrée par poste, champs traduits (en/fr/es)
  layouts/Base.astro       <head> : lang, title, description, canonical, hreflang ×3 + x-default,
                           Open Graph, favicon
  components/              Header, LanguageSwitcher, ThemeToggle, Footer, DomainCard, Timeline
  pages/[...lang]/         index, expertise, experience, contact
  pages/404.astro
  styles/tokens.css, global.css
public/
  CNAME, favicon.svg, robots.txt, og-{en,fr,es}.png, clem.webp
  about.html, about-fr.html, about-es.html   redirections (meta refresh + lien + canonical)
                                             vers /experience/, /fr/experience/, /es/experience/
```

`sitemap.xml` est généré par `src/pages/sitemap.xml.ts` avec les alternates de langue
(`@astrojs/sitemap` exigeait un paquet retiré d'Astro 7 ; 12 URL ne justifient pas une dépendance). `site` vaut
`https://clementrieux.com`.

**Fichiers supprimés** : tout l'ancien site Quarto — `_quarto.yml`, `*.qmd`, `posts/`, `_freeze/`,
`_site/`, `docs/` (sauf `docs/superpowers/`), `resume*.pdf`, `blog.Rproj`, `.Rhistory`,
`.nojekyll`, `.DS_Store`, `styles.css`. L'historique Git les conserve. `README.md` est réécrit.

## Déploiement

- Workflow GitHub Actions : build sur chaque push et PR, déploiement sur Pages depuis `main`.
  Actions épinglées par SHA avec commentaire de version, `persist-credentials: false`, permissions
  minimales.
- **Ordre de bascule** : passer la source Pages de `main:/docs` à « GitHub Actions » au moment de la
  fusion de `refonte` dans `main`, pour ne jamais servir `docs/superpowers/` en ligne.
- HTTPS forcé sur Pages.
- Dependabot pour npm et GitHub Actions : délai de 7 jours, mises à jour groupées.
- Action manuelle de Clément : enregistrement DNS `www` CNAME → `clementrx.github.io` chez le
  registrar.

## Qualité et tests

**Hooks `prek`** (avant chaque commit) : `oxfmt`, `oxlint`, `astro check`, `actionlint`, `zizmor`.

**Tests sur le site construit (`dist/`)**, lancés en local et en CI :

1. **i18n** : chaque page existe en `en`, `fr`, `es` ; `<html lang>` correspond ; chaque page porte
   les trois `hreflang` et `x-default` ; le sélecteur pointe vers la même page dans l'autre langue.
2. **Liens** : aucun lien interne cassé ; les trois redirections `about*.html` visent la bonne page.
3. **SEO** : `title`, `meta description`, `canonical` et Open Graph (`og:title`, `og:description`,
   `og:image`, `og:locale`) présents et non vides ; `sitemap.xml` et `robots.txt` présents.
4. **Accessibilité** : axe-core via Playwright sur chaque page, en viewport mobile (375 px) et
   desktop (1280 px), modes clair et sombre ; zéro violation de niveau `serious` ou `critical`.
5. **Données personnelles** : échec si `dist/` contient un numéro de téléphone français, une
   adresse postale (`rue`, code postal suivi d'une ville) ou une date de naissance. Le test est
   vérifié en injectant un faux numéro dans une page et en constatant l'échec.
6. **Pas de débordement horizontal** à 375 px sur chaque page.

Critère de fin : build, `astro check` et tous les tests verts, sans avertissement.

## Chantier séparé : publication de `prompt-craft`

Dans `~/projets/prompt-craft`, son propre dépôt :

1. Audit : aucune donnée personnelle, aucun chemin local absolu, aucun secret (historique Git
   compris).
2. Ajout d'une licence (MIT par défaut, à confirmer) et d'un README en anglais.
3. Passage en public **uniquement après accord explicite de Clément**.
4. Lien ajouté dans la section LLM & agents du site.

## Évolutions prévues (non implémentées)

- **Démos** : collection MDX `demos`, `@astrojs/react` pour les graphiques interactifs, données JSON
  poussées par le VPS dans `src/data/` (chaque push relance le build). Entrée de menu ajoutée avec
  la première démo.
- **CV PDF** : à réintégrer quand les nouveaux CV existeront.
- **Identité visuelle** : à retravailler via `tokens.css`.
