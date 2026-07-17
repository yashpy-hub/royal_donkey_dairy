/**
 * On-demand SSR for long-tail commercial detail pages (~33k URLs) that are
 * NOT prerendered to static files. The prerendered head (hubs + 137 curated
 * pages) is served as static; only detail URLs (e.g. /money/<slug>) fall
 * through to this function, which renders full, crawlable HTML on the fly
 * using the same data source as the SPA. This keeps the Vercel deployment
 * within build-size limits while still exposing every URL to crawlers.
 *
 * Routed via vercel.json: /money/(.+), /industry/(.+), /application/(.+),
 * /export/(.+), /guides/(.+)  ->  /api/render
 *
 * Self-contained on purpose: it imports ONLY client/src/data/commercialData
 * (relative imports only) + react, so it avoids the @/ and @shared path
 * aliases that Vercel's function bundler does not resolve.
 */
import { renderToString } from "react-dom/server";
import { createElement as h } from "react";
import { getEntry, KIND_PATH, KIND_LABEL } from "../client/src/data/commercialData";

const SITE = "https://rudradairyandfarm.shop";

function notFound() {
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" />`,
    `<title>Not Found | Rudra Dairy &amp; Farm</title>`,
    `<meta name="robots" content="noindex" /></head>`,
    `<body><h1>404 — Page not found</h1><p><a href="/">Return home</a></p></body></html>`,
  ].join("\n");
}

function Page({ entry }: { entry: any }) {
  const url = SITE + KIND_PATH[entry.kind] + "/" + entry.slug;
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rudra Dairy & Farm",
    url: SITE,
    email: "rudradairyfarm@gmail.com",
    telephone: "+91965714327",
  };
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: entry.title,
    description: entry.intro,
  };
  return h(
    "div",
    null,
    h("h1", null, entry.title),
    h("p", null, entry.intro),
    ...(entry.sections || []).map((s: any, i: number) =>
      h("section", { key: i }, h("h2", null, s.heading), h("p", null, s.body))
    ),
    entry.specs &&
      h(
        "section",
        null,
        h("h2", null, "Specifications"),
        h(
          "table",
          null,
          ...entry.specs.map((r: any, i: number) =>
            h(
              "tr",
              { key: i },
              h("td", null, r.label),
              h("td", null, r.value)
            )
          )
        )
      ),
    entry.faqs &&
      h(
        "section",
        null,
        h("h2", null, "FAQ"),
        ...entry.faqs.map((f: any, i: number) =>
          h("div", { key: i }, h("strong", null, f.q), h("p", null, f.a))
        )
      ),
    h("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(orgLd) },
    }),
    h("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(productLd) },
    })
  );
}

export default async function handler(req: any, res: any) {
  try {
    const url = new URL(req.url, SITE);
    const pathname = url.pathname;

    let kind: string | undefined;
    let slug: string | undefined;
    for (const [k, base] of Object.entries(KIND_PATH)) {
      if (pathname.startsWith(base + "/")) {
        kind = k;
        slug = pathname.slice(base.length + 1);
        break;
      }
    }
    if (!kind || !slug) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(notFound());
      return;
    }

    const entry = getEntry(kind as any, slug);
    if (!entry) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(notFound());
      return;
    }

    const pageHtml = renderToString(h(Page, { entry }));
    const pageUrl = SITE + KIND_PATH[entry.kind] + "/" + entry.slug;
    const head = [
      `<title>${entry.title} | Rudra Dairy & Farm</title>`,
      `<meta name="description" content="${entry.intro.replace(/"/g, "&quot;")}" />`,
      `<link rel="canonical" href="${pageUrl}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:title" content="${entry.title}" />`,
      `<meta property="og:description" content="${entry.intro.replace(/"/g, "&quot;")}" />`,
      `<meta property="og:url" content="${pageUrl}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="robots" content="index,follow" />`,
    ].join("\n    ");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
${head}
</head>
<body>
<div id="root">${pageHtml}</div>
</body>
</html>`;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "s-maxage=86400, stale-while-revalidate=604800"
    );
    res.end(html);
  } catch (err) {
    console.error("SSR error:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>500 — Server error</h1>");
  }
}
