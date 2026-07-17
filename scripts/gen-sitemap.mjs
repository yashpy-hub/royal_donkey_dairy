/**
 * Generates a tiered sitemap so Google can discover all ~33k long-tail URLs
 * without one bloated file (sitemaps.org caps a single file at 50k URLs /
 * 50 MB, and a single 33k file would be slow to crawl).
 *
 *   client/public/sitemap.xml        -> HEAD (static + 137 + curated ~400)
 *   client/public/sitemap-tail.xml   -> full long-tail (~33k)
 *   client/public/sitemap-index.xml  -> index pointing to both
 *
 * Run after `vite build` (and after prerender) via `pnpm build`.
 */
import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.resolve(ROOT, "client/public");
const SITE = "https://rudradairyandfarm.shop";

const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const data = await vite.ssrLoadModule("/src/data/commercialData.ts");
  const {
    allEntries,
    longTailSlugs,
    longTailHeadSlugs,
    KIND_PATH,
  } = data;

  const esc = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const urlBlock = (loc, priority = "0.6") =>
    `  <url>\n    <loc>${esc(loc)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  // ---- HEAD: static + 137 existing + curated long-tail head ----
  const staticRoutes = [
    "/",
    "/who-we-are",
    "/applications",
    "/applications-detail",
    "/markets",
    "/resources",
    "/products",
    "/about",
    "/trust",
    "/certifications",
    "/contact",
    "/appoint-meeting",
    "/request-quote",
    "/money",
    "/industry",
    "/application",
    "/export",
    "/guides",
    "/research",
    "/why-us",
    "/downloads",
  ];
  const headUrls = [
    ...staticRoutes.map((r) => urlBlock(SITE + r, r === "/" ? "1.0" : "0.7")),
    ...allEntries().map((e) =>
      urlBlock(SITE + KIND_PATH[e.kind] + "/" + e.slug, "0.8")
    ),
    ...longTailHeadSlugs().map((s) => {
      const [kind, slug] = s.split(":");
      return urlBlock(SITE + KIND_PATH[kind] + "/" + slug, "0.5");
    }),
  ];
  fs.writeFileSync(
    path.join(PUBLIC, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${headUrls.join("\n")}\n</urlset>\n`,
    "utf-8"
  );

  // ---- TAIL: full long-tail (served on-demand), minus anything in the head ----
  const headSet = new Set([
    ...allEntries().map((e) => `${e.kind}:${e.slug}`),
    ...longTailHeadSlugs(),
  ]);
  const tailUrls = longTailSlugs()
    .filter((s) => !headSet.has(s))
    .map((s) => {
      const [kind, slug] = s.split(":");
      return urlBlock(SITE + KIND_PATH[kind] + "/" + slug, "0.3");
    });
  fs.writeFileSync(
    path.join(PUBLIC, "sitemap-tail.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${tailUrls.join("\n")}\n</urlset>\n`,
    "utf-8"
  );

  // ---- INDEX ----
  fs.writeFileSync(
    path.join(PUBLIC, "sitemap-index.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${SITE}/sitemap.xml</loc></sitemap>\n  <sitemap><loc>${SITE}/sitemap-tail.xml</loc></sitemap>\n</sitemapindex>\n`,
    "utf-8"
  );

  console.log(
    `Sitemaps written: head=${headUrls.length}, tail=${tailUrls.length}`
  );
} finally {
  await vite.close();
}
