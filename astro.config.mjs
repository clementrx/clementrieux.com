import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://clementrieux.com",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
