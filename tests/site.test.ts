import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { attr, DIST, distFile, loadPage, readHtml, type Page } from "./dist";
import { findPersonalData, htmlToText } from "./pii";
import { ALL_URLS, LANGS, PAGES, SITE, pageUrl } from "./site-map";

const OG_LOCALES = { en: "en_US", fr: "fr_FR", es: "es_ES" } as const;

const cases = LANGS.flatMap((lang) =>
  PAGES.map((page) => ({ lang, page, url: pageUrl(lang, page) })),
);

describe.each(cases)("page $url", ({ lang, page, url }) => {
  let doc: Page;
  beforeAll(() => {
    doc = loadPage(url);
  });

  it("declares its language on <html>", () => {
    expect(attr(doc.one("html"), "lang")).toBe(lang);
  });

  it("links every language version with hreflang, plus x-default", () => {
    for (const other of LANGS) {
      const link = doc.one(`link[rel="alternate"][hreflang="${other}"]`);
      expect(attr(link, "href")).toBe(`${SITE}${pageUrl(other, page)}`);
    }
    const fallback = doc.one('link[rel="alternate"][hreflang="x-default"]');
    expect(attr(fallback, "href")).toBe(`${SITE}${pageUrl("en", page)}`);
  });

  it("offers a language switcher pointing to the same page in the other languages", () => {
    for (const other of LANGS.filter((l) => l !== lang)) {
      const link = doc.one(`[data-lang-switcher] a[hreflang="${other}"]`);
      expect(attr(link, "href")).toBe(pageUrl(other, page));
    }
  });

  it("has complete SEO and Open Graph metadata", () => {
    expect(doc.one("title")?.children.length).toBeGreaterThan(0);
    expect(attr(doc.one('meta[name="description"]'), "content")?.length).toBeGreaterThan(50);
    expect(attr(doc.one('link[rel="canonical"]'), "href")).toBe(`${SITE}${url}`);
    for (const property of ["og:title", "og:description", "og:image", "og:url"]) {
      expect(attr(doc.one(`meta[property="${property}"]`), "content"), property).toBeTruthy();
    }
    expect(attr(doc.one('meta[property="og:locale"]'), "content")).toBe(OG_LOCALES[lang]);
    expect(attr(doc.one('meta[property="og:image"]'), "content")).toMatch(/^https:\/\//);
  });

  it("has exactly one h1", () => {
    expect(doc.all("h1")).toHaveLength(1);
  });
});

function builtHtmlFiles(dir = DIST): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return builtHtmlFiles(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

describe("whole site", () => {
  let files: string[];
  beforeAll(() => {
    files = builtHtmlFiles();
  });

  it("has no broken internal links or assets", () => {
    const broken: string[] = [];
    for (const file of files) {
      const html = readFileSync(file, "utf8");
      const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1] ?? "");
      for (const ref of refs) {
        if (/^(?:https?:|mailto:|data:|#)/.test(ref)) continue;
        const target = ref.startsWith("/")
          ? distFile(ref)
          : distFile(`/${relative(DIST, join(file, "..", ref))}`);
        if (!existsSync(target)) broken.push(`${relative(DIST, file)} -> ${ref}`);
      }
    }
    expect(broken).toEqual([]);
  });

  it("contains no personal data (phone, postal address, birth date)", () => {
    const findings = files.flatMap((file) =>
      findPersonalData(htmlToText(readFileSync(file, "utf8"))).map(
        (f) => `${relative(DIST, file)}: ${f}`,
      ),
    );
    expect(findings).toEqual([]);
  });

  it.each([
    ["/about.html", "/experience/"],
    ["/about-fr.html", "/fr/experience/"],
    ["/about-es.html", "/es/experience/"],
  ])("redirects the legacy page %s to %s", (legacy, target) => {
    const doc = loadPage(legacy);
    expect(attr(doc.one('meta[http-equiv="refresh"]'), "content")).toBe(`0; url=${target}`);
    expect(attr(doc.one('link[rel="canonical"]'), "href")).toBe(`${SITE}${target}`);
    expect(attr(doc.one(`a[href="${target}"]`), "href")).toBe(target);
  });

  it("publishes a sitemap listing every page with its language alternates", () => {
    const sitemap = readHtml("/sitemap.xml");
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.toSorted()).toEqual(ALL_URLS.map((u) => `${SITE}${u}`).toSorted());
    expect(sitemap.match(/<xhtml:link /g)).toHaveLength(ALL_URLS.length * (LANGS.length + 1));
  });

  it("publishes robots.txt pointing at the sitemap", () => {
    expect(readHtml("/robots.txt")).toContain(`Sitemap: ${SITE}/sitemap.xml`);
  });

  it("keeps the custom domain", () => {
    expect(readHtml("/CNAME").trim()).toBe("clementrieux.com");
  });

  it.each(LANGS)("shows the four expertise domains in %s, linked from the home page", (lang) => {
    const domains = ["data-science", "quant", "sport", "llm"];
    const expertise = loadPage(pageUrl(lang, "expertise/"));
    const home = loadPage(pageUrl(lang, ""));
    for (const id of domains) {
      expect(expertise.one(`section[id="${id}"] h2`), id).toBeDefined();
      const href = `${pageUrl(lang, "expertise/")}#${id}`;
      expect(home.one(`a[href="${href}"]`), href).toBeDefined();
    }
  });

  it("serves a 404 page in all three languages", () => {
    const doc = loadPage("/404.html");
    for (const lang of LANGS) {
      expect(doc.one(`[lang="${lang}"] a[href="${pageUrl(lang, "")}"]`), lang).toBeDefined();
    }
  });
});
