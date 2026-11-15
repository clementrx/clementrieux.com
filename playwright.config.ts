import { defineConfig } from "@playwright/test";

const viewports = { mobile: { width: 375, height: 812 }, desktop: { width: 1280, height: 800 } };
const schemes = ["light", "dark"] as const;

export default defineConfig({
  testDir: "tests",
  testMatch: "*.spec.ts",
  forbidOnly: !!process.env["CI"],
  reporter: process.env["CI"] ? "github" : "list",
  use: { baseURL: "http://localhost:4321" },
  projects: Object.entries(viewports).flatMap(([name, viewport]) =>
    schemes.map((colorScheme) => ({
      name: `${name}-${colorScheme}`,
      use: { browserName: "chromium" as const, viewport, colorScheme },
    })),
  ),
  webServer: {
    command: "pnpm exec astro preview --port 4321",
    url: "http://localhost:4321/",
    reuseExistingServer: !process.env["CI"],
  },
});
