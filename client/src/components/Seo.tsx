import { useEffect } from "react";
import { BUSINESS } from "@shared/business";
import { LANGUAGES, DEFAULT_LANG } from "@/i18n/languages";

const SITE = "https://rudradairyandfarm.shop";
const DEFAULT_OG = `${SITE}/og-image.png`;

/**
 * Global entity graph (Organization + WebSite with Sitelinks SearchAction).
 * Injected ONCE and left in the DOM across route changes so every page
 * contributes to the same knowledge-graph entity in Google's index.
 */
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

function upsertMeta(
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
  const urlWithLang = (l: string) =>
    `${SITE}${path}${path.includes("?") ? "&" : "?"}lang=${l}`;

  // ---- per-page tags (re-applied on every route change) ----
  useEffect(() => {
    const fullTitle = title.includes("Rudra Dairy")
      ? title
      : `${title} | Rudra Dairy & Farm`;

    document.title = fullTitle;

    // canonical (always the language-neutral URL)
    upsertMeta("link[rel='canonical']", { rel: "canonical", href: url }, url);

    // hreflang alternates — makes each language crawlable at its own URL.
    for (const L of LANGUAGES) {
      upsertMeta(
        `link[rel='alternate'][hreflang='${L.code}']`,
        { rel: "alternate", hreflang: L.code, href: urlWithLang(L.code) },
        urlWithLang(L.code)
      );
    }
    // x-default points to English (neutral URL).
    upsertMeta(
      "link[rel='alternate'][hreflang='x-default']",
      { rel: "alternate", hreflang: "x-default", href: url },
      url
    );

    // og:locale + alternates
    const active =
      new URLSearchParams(window.location.search).get("lang") || DEFAULT_LANG;
    const curLocale =
      LANGUAGES.find(l => l.code === active)?.ogLocale || "en_US";
    upsertMeta(
      "meta[property='og:locale']",
      { property: "og:locale" },
      curLocale
    );
    for (const L of LANGUAGES) {
      if (L.code === active) continue;
      upsertMeta(
        `meta[property='og:locale:alternate'][content='${L.ogLocale}']`,
        { property: "og:locale:alternate", content: L.ogLocale },
        L.ogLocale
      );
    }

    // description
    upsertMeta(
      "meta[name='description']",
      { name: "description" },
      description
    );

    // keywords (long-tail SEO coverage)
    if (keywords) {
      upsertMeta("meta[name='keywords']", { name: "keywords" }, keywords);
    }

    // robots
    upsertMeta(
      "meta[name='robots']",
      { name: "robots" },
      noindex ? "noindex,nofollow" : "index,follow"
    );

    // Open Graph
    upsertMeta("meta[property='og:type']", { property: "og:type" }, type);
    upsertMeta(
      "meta[property='og:site_name']",
      { property: "og:site_name" },
      "Rudra Dairy & Farm"
    );
    upsertMeta(
      "meta[property='og:title']",
      { property: "og:title" },
      fullTitle
    );
    upsertMeta(
      "meta[property='og:description']",
      { property: "og:description" },
      description
    );
    upsertMeta("meta[property='og:url']", { property: "og:url" }, url);
    upsertMeta("meta[property='og:image']", { property: "og:image" }, image);
    upsertMeta(
      "meta[property='og:image:width']",
      { property: "og:image:width" },
      "1200"
    );
    upsertMeta(
      "meta[property='og:image:height']",
      { property: "og:image:height" },
      "630"
    );

    // Twitter
    upsertMeta(
      "meta[name='twitter:card']",
      { name: "twitter:card" },
      "summary_large_image"
    );
    upsertMeta(
      "meta[name='twitter:title']",
      { name: "twitter:title" },
      fullTitle
    );
    upsertMeta(
      "meta[name='twitter:description']",
      { name: "twitter:description" },
      description
    );
    upsertMeta("meta[name='twitter:image']", { name: "twitter:image" }, image);

    // ---- page-specific JSON-LD ----
    const scripts: Record<string, any>[] = [];
    if (jsonLd) {
      if (Array.isArray(jsonLd)) scripts.push(...jsonLd);
      else scripts.push(jsonLd);
    }
    if (faq && faq.length) {
      scripts.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map(q => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      });
    }

    // remove any previous page script
    const prev = document.getElementById("ld-page");
    if (prev) prev.remove();

    if (scripts.length) {
      const node = document.createElement("script");
      node.type = "application/ld+json";
      node.id = "ld-page";
      node.textContent = JSON.stringify(
        scripts.length === 1
          ? scripts[0]
          : { "@context": "https://schema.org", "@graph": scripts }
      );
      document.head.appendChild(node);
    }

    return () => {
      const p = document.getElementById("ld-page");
      if (p) p.remove();
    };
  }, [title, description, path, type, image, jsonLd, faq, noindex]);

  // ---- global entity (injected once, persists across routes) ----
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
