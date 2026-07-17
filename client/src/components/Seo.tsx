import { useEffect } from "react";
import { BUSINESS } from "@shared/business";
import { LANGUAGES } from "@/i18n/languages";

const SITE = "https://rudradairyandfarm.shop";
const DEFAULT_OG = `${SITE}/og-image.png`;

/**
 * SSR head collector.
 *
 * react-helmet-async v3 disables its server context entirely on React 19
 * (its provider just renders children with no data object), so head tags
 * never reach the prerendered HTML. Instead we collect tags during render in
 * a module-level object that scripts/prerender.mjs reads after each
 * renderToString call. This is React-19 safe and dependency-free.
 */
export interface SsrMeta {
  name?: string;
  property?: string;
  content: string;
}
export interface SsrLink {
  rel: string;
  hrefLang?: string;
  href: string;
}
export const ssrHead = {
  title: "",
  meta: [] as SsrMeta[],
  link: [] as SsrLink[],
  script: [] as string[], // raw JSON-LD strings
};

export function resetSsrHead() {
  ssrHead.title = "";
  ssrHead.meta = [];
  ssrHead.link = [];
  ssrHead.script = [];
}

/** Serialize the collected head into HTML for the prerender step. */
export function serializeSsrHead(): string {
  const out: string[] = [];
  if (ssrHead.title) out.push(`  <title>${escapeHtml(ssrHead.title)}</title>`);
  for (const m of ssrHead.meta) {
    const attr = m.name ? `name="${m.name}"` : `property="${m.property}"`;
    out.push(`  <meta ${attr} content="${escapeHtml(m.content)}" />`);
  }
  for (const l of ssrHead.link) {
    const hl = l.hrefLang ? ` hreflang="${l.hrefLang}"` : "";
    out.push(`  <link rel="${l.rel}"${hl} href="${l.href}" />`);
  }
  for (const s of ssrHead.script) {
    out.push(`  <script type="application/ld+json">${s}</script>`);
  }
  return out.join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
  faq?: FaqItem[];
  noindex?: boolean;
  keywords?: string;
}

/**
 * Per-page head manager.
 *  - On the server (no `window`): pushes tags into `ssrHead` during render so
 *    the prerendered static HTML contains title/canonical/hreflang/og/JSON-LD.
 *  - On the client: applies the same tags to document.head via effect, so SPA
 *    navigation still updates the title/description for users + real crawlers
 *    that execute JS.
 */
export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image = DEFAULT_OG,
  jsonLd,
  faq,
  noindex = false,
  keywords,
}: SeoProps) {
  const url = `${SITE}${path}`;
  const fullTitle = title.includes("Rudra Dairy")
    ? title
    : `${title} | Rudra Dairy & Farm`;
  const urlWithLang = (l: string) =>
    `${SITE}${path}${path.includes("?") ? "&" : "?"}lang=${l}`;

  const scripts: Record<string, any>[] = [];
  if (jsonLd) {
    if (Array.isArray(jsonLd)) scripts.push(...jsonLd);
    else scripts.push(jsonLd);
  }
  if (faq && faq.length) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    });
  }

  // ---- Server: collect into ssrHead (render phase) ----
  if (typeof window === "undefined") {
    ssrHead.title = fullTitle;
    ssrHead.meta.push({ name: "description", content: description });
    if (keywords) ssrHead.meta.push({ name: "keywords", content: keywords });
    ssrHead.meta.push({
      name: "robots",
      content: noindex ? "noindex,nofollow" : "index,follow",
    });
    ssrHead.link.push({ rel: "canonical", href: url });
    for (const L of LANGUAGES) {
      ssrHead.link.push({
        rel: "alternate",
        hrefLang: L.code,
        href: urlWithLang(L.code),
      });
    }
    ssrHead.link.push({ rel: "alternate", hrefLang: "x-default", href: url });
    ssrHead.meta.push({ property: "og:type", content: type });
    ssrHead.meta.push({ property: "og:site_name", content: "Rudra Dairy & Farm" });
    ssrHead.meta.push({ property: "og:title", content: fullTitle });
    ssrHead.meta.push({ property: "og:description", content: description });
    ssrHead.meta.push({ property: "og:url", content: url });
    ssrHead.meta.push({ property: "og:image", content: image });
    ssrHead.meta.push({ name: "twitter:card", content: "summary_large_image" });
    ssrHead.meta.push({ name: "twitter:title", content: fullTitle });
    ssrHead.meta.push({ name: "twitter:description", content: description });
    ssrHead.meta.push({ name: "twitter:image", content: image });
    for (const s of scripts) {
      ssrHead.script.push(
        JSON.stringify(scripts.length === 1 ? scripts[0] : { "@graph": scripts })
      );
    }
  }

  // ---- Client: apply to document.head on mount / prop change ----
  useEffect(() => {
    const fullTitleClient = fullTitle;
    document.title = fullTitleClient;
    upsert("link[rel='canonical']", { rel: "canonical", href: url }, url);
    upsert("meta[name='description']", { name: "description" }, description);
    if (keywords)
      upsert("meta[name='keywords']", { name: "keywords" }, keywords);
    upsert(
      "meta[name='robots']",
      { name: "robots" },
      noindex ? "noindex,nofollow" : "index,follow"
    );
    for (const L of LANGUAGES)
      upsert(
        `link[rel='alternate'][hreflang='${L.code}']`,
        { rel: "alternate", hreflang: L.code },
        urlWithLang(L.code)
      );
    upsert(
      "link[rel='alternate'][hreflang='x-default']",
      { rel: "alternate", hreflang: "x-default" },
      url
    );
    upsert("meta[property='og:title']", { property: "og:title" }, fullTitleClient);
    upsert("meta[property='og:description']", { property: "og:description" }, description);
    upsert("meta[property='og:url']", { property: "og:url" }, url);
    upsert("meta[property='og:image']", { property: "og:image" }, image);
    upsert("meta[name='twitter:title']", { name: "twitter:title" }, fullTitleClient);
    upsert("meta[name='twitter:description']", { name: "twitter:description" }, description);
    upsert("meta[name='twitter:image']", { name: "twitter:image" }, image);

    // JSON-LD (page-specific)
    const prev = document.getElementById("ld-page");
    if (prev) prev.remove();
    if (scripts.length) {
      const node = document.createElement("script");
      node.type = "application/ld+json";
      node.id = "ld-page";
      node.textContent = JSON.stringify(
        scripts.length === 1 ? scripts[0] : { "@graph": scripts }
      );
      document.head.appendChild(node);
    }
  }, [title, description, path, type, image, jsonLd, faq, noindex, keywords]);

  return null;
}

function upsert(
  selector: string,
  attrs: Record<string, string>,
  content: string
) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement(
      selector.startsWith("link") ? "link" : "meta"
    ) as HTMLElement;
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  if (content !== undefined) el.setAttribute("content", content);
}

// ---------------------------------------------------------------------------
// Global entity graph (Organization + WebSite). Emitted once per page.
// ---------------------------------------------------------------------------
const ENTITY_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: BUSINESS.name,
      alternateName: BUSINESS.alternateName,
      url: SITE,
      logo: DEFAULT_OG,
      image: DEFAULT_OG,
      foundingDate: BUSINESS.foundingDate,
      priceRange: BUSINESS.priceRange,
      email: BUSINESS.emails.all,
      telephone: BUSINESS.phone,
      areaServed: BUSINESS.areaServed,
      address: [
        {
          "@type": "PostalAddress",
          "@id": `${SITE}/#office`,
          streetAddress: BUSINESS.officeAddress.streetAddress,
          addressLocality: BUSINESS.officeAddress.locality,
          addressRegion: BUSINESS.officeAddress.region,
          postalCode: BUSINESS.officeAddress.postalCode,
          addressCountry: BUSINESS.officeAddress.country,
        },
        {
          "@type": "PostalAddress",
          "@id": `${SITE}/#farm`,
          streetAddress: BUSINESS.farmAddress.streetAddress,
          addressLocality: BUSINESS.farmAddress.locality,
          addressRegion: BUSINESS.farmAddress.region,
          postalCode: BUSINESS.farmAddress.postalCode,
          addressCountry: BUSINESS.farmAddress.country,
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.office.latitude,
        longitude: BUSINESS.geo.office.longitude,
      },
      sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "sales",
        email: BUSINESS.emails.primary,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: BUSINESS.name,
      publisher: { "@id": `${SITE}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function EntitySeo() {
  if (typeof window === "undefined") {
    ssrHead.script.push(JSON.stringify(ENTITY_LD));
  }
  useEffect(() => {
    if (document.getElementById("ld-entity")) return;
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = "ld-entity";
    node.textContent = JSON.stringify(ENTITY_LD);
    document.head.appendChild(node);
  }, []);
  return null;
}
