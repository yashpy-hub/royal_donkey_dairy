import { useEffect } from "react";

/**
 * Seo — dependency-free per-page metadata for the Rudra Dairy & Farm SPA.
 *
 * Because the site is client-rendered, this component writes the document
 * <title>, standard meta tags, Open Graph / Twitter tags, a canonical link,
 * and a JSON-LD script on mount (and cleans up on unmount where relevant).
 *
 * Usage in a page:
 *   <Seo
 *     title="..."
 *     description="..."
 *     path="/products"
 *     type="website"
 *     jsonLd={{ ... }}
 *   />
 */

const SITE_NAME = "Rudra Dairy & Farm";
const SITE_URL = "https://rudradairyandfarm.shop";
const TWITTER = "@rudradairyandfarm";
const OG_IMAGE = "https://rudradairyandfarm.shop/og-image.svg";

type SeoProps = {
  title: string;
  description: string;
  /** Route path including leading slash, e.g. "/products". Home is "/". */
  path?: string;
  type?: "website" | "article";
  image?: string;
  /** JSON-LD object (Organization, Product, BreadcrumbList, etc.). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

function absoluteUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

/** Ensure a <meta> by name or property exists and set its content. */
function upsertMeta(selector: "name" | "property", key: string, content: string) {
  if (!content) return;
  const attr = selector === "name" ? "name" : "property";
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Ensure a <link rel="canonical"> exists and set its href. */
function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Manage a JSON-LD <script> tagged so we can remove it on page change. */
function upsertJsonLd(id: string, data: unknown) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (data == null) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image = OG_IMAGE,
  jsonLd,
  noindex = false,
}: SeoProps) {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    document.title = fullTitle;

    // Canonical
    upsertCanonical(url);

    // Robots
    upsertMeta("name", "robots", noindex ? "noindex,nofollow" : "index,follow");

    // Standard description
    upsertMeta("name", "description", description);

    // Open Graph
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", TWITTER);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    // JSON-LD (scoped id so we can clean up on navigation)
    if (jsonLd) {
      upsertJsonLd("seo-jsonld", jsonLd);
    } else {
      const old = document.getElementById("seo-jsonld");
      if (old) old.remove();
    }

    // Cleanup on unmount so the next page doesn't leak stale JSON-LD
    return () => {
      const old = document.getElementById("seo-jsonld");
      if (old) old.remove();
    };
  }, [fullTitle, description, url, type, image, noindex, jsonLd]);

  return null;
}
