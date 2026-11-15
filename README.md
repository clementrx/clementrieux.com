# clementrieux.com

Source of [clementrieux.com](https://clementrieux.com): a static site in English, French and
Spanish, built with [Astro](https://astro.build) and published on GitHub Pages.

## Run locally

Requires Node (version in `.nvmrc`) and pnpm (version in `package.json`).

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

## Edit content

| What                                                           | Where                                   |
| -------------------------------------------------------------- | --------------------------------------- |
| Interface texts, page titles and descriptions, skills, contact | `src/i18n/ui.ts`                        |
| Expertise domains (one file per domain and language)           | `src/content/expertise/{en,fr,es}/*.md` |
| Work experience and education                                  | `src/content/experience.yaml`           |
| Colours, fonts, spacing                                        | `src/styles/tokens.css`                 |
| Portrait and Open Graph images                                 | `assets/clem.jpg`, then `pnpm images`   |

A text missing in one language breaks the type check (`ui.ts`) or the tests (Markdown).

## Check

```sh
pnpm format:check && pnpm lint && pnpm check   # formatting, lint, types
pnpm build && pnpm test                       # structure, SEO, links, personal data
pnpm test:a11y                                # axe-core on every page, mobile and desktop
```

The same steps run in CI on every pull request. Pre-commit hooks run through
[prek](https://github.com/j178/prek) (`prek install`).

## Deploy

Every push to `main` builds the site and deploys `dist/` to GitHub Pages
(`.github/workflows/site.yml`).
