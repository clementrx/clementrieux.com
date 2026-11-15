import { defineConfig } from "@playwright/test";

const viewports = { mobile: { width: 375, height: 812 }, desktop: { width: 1280, height: 800 } };
const schemes = ["light", "dark"] as const;
const PORT = 4399;

export default defineConfig({
  testDir: "tests",
  testMatch: "*.spec.ts",
  forbidOnly: !!process.env["CI"],
  reporter: process.env["CI"] ? "github" : "list",
  use: { baseURL: `http://localhost:${PORT}` },
  projects: Object.entries(viewports).flatMap(([name, viewport]) =>
    schemes.map((colorScheme) => ({
      name: `${name}-${colorScheme}`,
      use: { browserName: "chromium" as const, viewport, colorScheme },
    })),
  ),
  webServer: {
    command: `pnpm exec astro preview --port ${PORT} --ignore-lock`,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: false,
  },
});
