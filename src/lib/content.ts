import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n/ui";

export interface Domain {
  slug: string;
  entry: CollectionEntry<"expertise">;
}

export async function domainsFor(lang: Lang): Promise<Domain[]> {
  const entries = await getCollection("expertise", (entry) => entry.id.startsWith(`${lang}/`));
  if (entries.length === 0) throw new Error(`No expertise entries found for language "${lang}".`);
  return entries
    .toSorted((a, b) => a.data.order - b.data.order)
    .map((entry) => ({ slug: entry.id.slice(lang.length + 1), entry }));
}

export async function experienceOf(kind: "work" | "education") {
  const entries = await getCollection("experience", (entry) => entry.data.kind === kind);
  return entries.toSorted((a, b) => a.data.order - b.data.order);
}
