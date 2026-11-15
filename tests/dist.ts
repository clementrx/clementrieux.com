import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse, ELEMENT_NODE, type ElementNode } from "ultrahtml";
import { querySelector, querySelectorAll } from "ultrahtml/selector";

export const DIST = join(import.meta.dirname, "..", "dist");

export function distFile(urlPath: string): string {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0] ?? "");
  return join(DIST, clean.endsWith("/") ? `${clean}index.html` : clean);
}

export function readHtml(urlPath: string): string {
  const file = distFile(urlPath);
  if (!existsSync(file)) throw new Error(`Missing built page for ${urlPath} (${file})`);
  return readFileSync(file, "utf8");
}

export interface Page {
  html: string;
  one(selector: string): ElementNode | undefined;
  all(selector: string): ElementNode[];
}

export function loadPage(urlPath: string): Page {
  const html = readHtml(urlPath);
  const doc = parse(html);
  const isElement = (node: unknown): node is ElementNode =>
    (node as ElementNode | undefined)?.type === ELEMENT_NODE;
  return {
    html,
    one: (selector) => {
      const node: unknown = querySelector(doc, selector);
      return isElement(node) ? node : undefined;
    },
    all: (selector) => querySelectorAll(doc, selector).filter(isElement),
  };
}

export function attr(element: ElementNode | undefined, name: string): string | undefined {
  return element?.attributes[name];
}
