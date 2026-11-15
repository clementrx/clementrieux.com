import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { ALL_URLS } from "./site-map";

for (const url of [...ALL_URLS, "/404.html"]) {
  test(`${url} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(url);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations
      .filter((v) => v.impact === "serious" || v.impact === "critical")
      .map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
    expect(serious).toEqual([]);
  });

  test(`${url} does not scroll horizontally`, async ({ page }) => {
    await page.goto(url);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
}
