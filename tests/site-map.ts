export const LANGS = ["en", "fr", "es"] as const;
export type TestLang = (typeof LANGS)[number];

export const PAGES = ["", "expertise/", "experience/", "contact/"] as const;
export type TestPage = (typeof PAGES)[number];

export const SITE = "https://clementrieux.com";

export function pageUrl(lang: TestLang, page: TestPage): string {
  return lang === "en" ? `/${page}` : `/${lang}/${page}`;
}

export const ALL_URLS: string[] = LANGS.flatMap((lang) => PAGES.map((page) => pageUrl(lang, page)));
