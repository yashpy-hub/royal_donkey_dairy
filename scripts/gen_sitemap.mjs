// Regenerates client/public/sitemap.xml with hreflang xhtml:link alternates
// for every URL x 4 languages (?lang=xx).
//
// URLs are derived from the REAL route table + data files so the sitemap can
// never drift out of sync with what the app actually serves:
//   - static base routes (hardcoded, stable)
//   - every dynamic slug from commercialData / siloData / researchData
//   - every download slug from downloadData
//
// Run: node scripts/gen_sitemap.mjs
import fs from "fs";
import path from "path";

const SITE = "https://rudradairyandfarm.shop";
const LANGS = ["en", "fr", "it", "de"];

// kind -> route path prefix (mirrors client/src/data/commercialData.ts KIND_PATH
// and the <Route> definitions in client/src/App.tsx).
const KIND_PATH = {
  money: "/money",
  industry: "/industry",
  application: "/application",
  country: "/export",
  guide: "/guides",
  supporting: "/silo",
  research: "/research",
};

// ---- 1. static base routes (language-neutral) ----
const STATIC = [
  "/",
  "/products",
  "/who-we-are",
  "/applications",
  "/applications-detail",
  "/markets",
  "/resources",
  "/about",
  "/trust",
  "/certifications",
  "/contact",
  "/appoint-meeting",
  "/why-us",
  "/money",
  "/industry",
  "/application",
  "/export",
  "/guides",
  "/silo",
  "/research",
  "/downloads",
];

// ---- 2. parse (kind, slug) pairs from a data file ----
// Handles both "kind before slug" and "slug before kind" ordering.
function kindSlugPairs(file) {
  const src = fs.readFileSync(file, "utf8");
  const kinds = [...src.matchAll(/kind:\s*"([^"]+)"/g)].map(m => ({
    line: m.index,
    kind: m[1],
  }));
  const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map(m => ({
    line: m.index,
    slug: m[1],
  }));
  const pairs = [];
  for (const s of slugs) {
    let best = null;
    let bestDist = Infinity;
    for (const k of kinds) {
      const d = Math.abs(k.line - s.line);
      if (d < bestDist) {
        bestDist = d;
        best = k;
      }
    }
    if (best && bestDist < 400) pairs.push({ kind: best.kind, slug: s.slug });
  }
  return pairs;
}

// ---- 3. collect all dynamic URLs ----
const urls = new Set(STATIC);
const DATA = "client/src/data";
for (const [file, _] of [
  ["commercialData.ts"],
  ["siloData.ts"],
  ["researchData.ts"],
]) {
  for (const { kind, slug } of kindSlugPairs(path.join(DATA, file))) {
    const prefix = KIND_PATH[kind];
    if (prefix) urls.add(`${prefix}/${slug}`);
  }
}
// downloads live at /downloads/:slug (no "kind" field in downloadData)
const dlSrc = fs.readFileSync(path.join(DATA, "downloadData.ts"), "utf8");
for (const m of dlSrc.matchAll(/slug:\s*"([^"]+)"/g)) {
  urls.add(`/downloads/${m[1]}`);
}

const URLS = [...urls].sort();

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

let out = `<?xml version="1.0" encoding="UTF-8"?>\n`;
out += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

for (const u of URLS) {
  const canonical = `${SITE}${u}`;
  out += `  <url>\n`;
  out += `    <loc>${esc(canonical)}</loc>\n`;
  out += `    <changefreq>weekly</changefreq>\n`;
  out += `    <priority>${u === "/" ? "1.0" : "0.7"}</priority>\n`;
  // x-default + each language alternate
  out += `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(canonical)}" />\n`;
  for (const L of LANGS) {
    out += `    <xhtml:link rel="alternate" hreflang="${L}" href="${esc(canonical + "?lang=" + L)}" />\n`;
  }
  out += `  </url>\n`;
}

out += `</urlset>\n`;

const dest = path.resolve("client/public/sitemap.xml");
fs.writeFileSync(dest, out);
console.log(
  `Wrote ${URLS.length} URLs x ${LANGS.length + 1} hreflang alternates to ${dest}`
);
