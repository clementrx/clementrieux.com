// Generates the portrait, favicon companion and Open Graph images from assets/clem.jpg.
// Run once after changing the source photo or the roles below: `pnpm images`.
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const SOURCE = "assets/clem.jpg";
const OUT = "public";
const FACE_CROP = { left: 167, top: 60, width: 1000, height: 1000 };
const ROLES = {
  en: ["Data Scientist", "Machine learning, forecasting,", "computer vision"],
  fr: ["Data scientist", "Machine learning, prévision,", "vision par ordinateur"],
  es: ["Data scientist", "Machine learning, previsión,", "visión por computadora"],
};

const escapeXml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function portrait(size) {
  return sharp(SOURCE).extract(FACE_CROP).resize(size, size).grayscale();
}

async function openGraph(lang, lines) {
  const photo = await (await portrait(630)).png().toBuffer();
  const text = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#f7f7f5"/>
      <rect x="64" y="236" width="56" height="6" fill="#1f4fd1"/>
      <text x="64" y="320" font-family="Helvetica, Arial, sans-serif" font-size="64"
            font-weight="700" fill="#16161a">Clément Rieux</text>
      ${lines
        .map(
          (line, i) => `<text x="64" y="${380 + i * 40}" font-family="Helvetica, Arial, sans-serif"
            font-size="28" fill="#45454f">${escapeXml(line)}</text>`,
        )
        .join("")}
      <text x="64" y="560" font-family="Menlo, monospace" font-size="22"
            fill="#1f4fd1">clementrieux.com</text>
    </svg>`;
  await sharp(Buffer.from(text))
    .composite([{ input: photo, left: 570, top: 0 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${OUT}/og-${lang}.jpg`);
}

await mkdir(OUT, { recursive: true });
await (await portrait(480)).webp({ quality: 80 }).toFile(`${OUT}/clem.webp`);
await (await portrait(180)).png().toFile(`${OUT}/apple-touch-icon.png`);
for (const [lang, lines] of Object.entries(ROLES)) await openGraph(lang, lines);
console.log("Images written to public/");
