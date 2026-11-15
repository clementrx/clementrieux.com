import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const translated = z.object({ en: z.string(), fr: z.string(), es: z.string() });

const expertise = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/expertise" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int().positive(),
  }),
});

const experience = defineCollection({
  loader: file("src/content/experience.yaml"),
  schema: z.object({
    kind: z.enum(["work", "education"]),
    order: z.number().int().positive(),
    start: z.number().int(),
    end: z.number().int().nullable(),
    org: z.string(),
    place: z.string().optional(),
    role: translated,
    summary: translated.optional(),
  }),
});

export const collections = { expertise, experience };
