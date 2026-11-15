import { DEFAULT_LANG, LANGS, PAGE_PATHS, type Lang, type PageKey } from "@/i18n/ui";

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export function langFromParam(param: string | undefined): Lang {
  if (param === undefined) return DEFAULT_LANG;
  if (isLang(param)) return param;
  throw new Error(`Unknown language segment "${param}". Expected one of: ${LANGS.join(", ")}.`);
}

export function localizedPath(lang: Lang, page: PageKey): string {
  const prefix = lang === DEFAULT_LANG ? "/" : `/${lang}/`;
  return `${prefix}${PAGE_PATHS[page]}`;
}

export function langStaticPaths(): { params: { lang: string | undefined } }[] {
  return LANGS.map((lang) => ({ params: { lang: lang === DEFAULT_LANG ? undefined : lang } }));
}
