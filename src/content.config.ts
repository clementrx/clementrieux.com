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
    skills: z.array(z.object({ label: z.string(), items: z.array(z.string()).min(1) })).optional(),
    showCertifications: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: file("src/content/experience.yaml"),
  schema: z.object({
    kind: z.enum(["work", "project", "education"]),
    order: z.number().int().positive(),
    start: z.number().int(),
    end: z.number().int().nullable(),
    org: z.string().optional(),
    place: z.string().optional(),
    role: translated,
    summary: translated.optional(),
    highlights: z.array(z.object({ label: translated, text: translated })).optional(),
  }),
});

const certifications = defineCollection({
  loader: file("src/content/certifications.yaml"),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    issued: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM"),
    credentialId: z.string(),
    url: z.url(),
  }),
});

export const collections = { expertise, experience, certifications };
