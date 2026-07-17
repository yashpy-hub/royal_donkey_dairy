/**
 * Build-time static prerendering for the Rudra Dairy & Farm SPA.
 *
 * Why this exists: the site is a client-rendered wouter SPA. Without this
 * step, crawlers fetching a commercial URL receive an empty <div id="root">
 * shell, so the 137 commercial/silo pages never get indexed. This script
 * renders every route to real HTML (head tags collected by components/Seo.tsx
 * into the module-level `ssrHead`, body via react-dom/server) so search
 * engines receive full content.
 *
 * Run AFTER `vite build` (which produces dist/public/index.html with the
 * hashed client bundle). This script reads that template, then writes one
 * static index.html per route.
 *
 * Usage: node scripts/prerender.mjs   (after `vite build`)
 */
import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.resolve(ROOT, "dist/public");

// ---- 1. Static routes present in App.tsx (non-data-driven pages) ----------
const STATIC_ROUTES = [
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
  "/thank-you",
  "/money",
  "/industry",
  "/application",
  "/export",
  "/guides",
  "/research",
  "/why-us",
  "/downloads",
  "/404",
];

// vite config sets root to client/, so module specifiers for ssrLoadModule
// are relative to client/. Do NOT override root here.
const vite = await createServer({
  logLevel: "warn",
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const data = await vite.ssrLoadModule("/src/data/commercialData.ts");
  const { allEntries, KIND_PATH } = data;
  const entries = allEntries();
  const dataRoutes = entries.map((e) => `${KIND_PATH[e.kind]}/${e.slug}`);

  const routes = [...new Set([...STATIC_ROUTES, ...dataRoutes])];

  // ---- 3. Load the server render entry + Seo head collector ----------------
  const server = await vite.ssrLoadModule("/src/entry-server.tsx");
  const { render } = server;
  const seo = await vite.ssrLoadModule("/src/components/Seo.tsx");
  const { resetSsrHead, serializeSsrHead } = seo;

  // ---- 4. Read the built client index.html as our HTML template -----------
  const templatePath = path.join(OUT_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(
      `Missing ${templatePath}. Run \`vite build\` before prerender.`
    );
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  // Remove the generic, non-per-page head tags from the template so the
  // per-route collected head is the only source (avoids duplicate
  // title/description/og/twitter/canonical). We KEEP GTM, gtag, viewport,
  // theme-color, favicon, preconnect and the hero image preload.
  const stripRe =
    /<title>[\s\S]*?<\/title>|\s*<meta\s+name="description"[^>]*>|\s*<link\s+rel="canonical"[^>]*>|\s*<meta\s+property="og:[^"]*"[^>]*>|\s*<meta\s+name="twitter:[^"]*"[^>]*>/g;
  const cleanedTemplate = template.replace(stripRe, "");

  // ---- 5. Render + write each route ----------------------------------------
  let ok = 0;
  let failed = 0;
  for (const route of routes) {
    try {
      resetSsrHead();
      const { html } = render(route);
      const headTags = serializeSsrHead();

      const finalHtml = cleanedTemplate
        .replace("</head>", `${headTags}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      // Map route -> output file path. Root overwrites the built index.html;
      // every other route gets its own directory with an index.html.
      const rel = route === "/" ? "" : route.replace(/^\//, "");
      const outPath = rel
        ? path.join(OUT_DIR, rel, "index.html")
        : path.join(OUT_DIR, "index.html");
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, finalHtml, "utf-8");
      ok++;
    } catch (err) {
      failed++;
      console.error(`  ✗ ${route}:`, err.message);
    }
  }

  console.log(`\nPrerender complete: ${ok} routes OK, ${failed} failed.`);
  if (failed > 0) process.exitCode = 1;
} finally {
  await vite.close();
}
