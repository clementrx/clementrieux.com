import type { APIRoute } from "astro";
import { LANGS, PAGE_PATHS, type PageKey } from "@/i18n/ui";
import { localizedPath } from "@/i18n/utils";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("`site` must be set in astro.config.mjs to build the sitemap.");
  const absolute = (path: string) => new URL(path, site).href;

  const alternates = (page: PageKey) =>
    [
      ...LANGS.map(
        (lang) =>
          `    <xhtml:link rel="alternate" hreflang="${lang}" href="${absolute(localizedPath(lang, page))}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(localizedPath("en", page))}"/>`,
    ].join("\n");

  const urls = (Object.keys(PAGE_PATHS) as PageKey[]).flatMap((page) =>
    LANGS.map(
      (lang) =>
        `  <url>\n    <loc>${absolute(localizedPath(lang, page))}</loc>\n${alternates(page)}\n  </url>`,
    ),
  );

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
