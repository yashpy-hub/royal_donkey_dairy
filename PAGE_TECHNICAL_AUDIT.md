# Per-Page Technical SEO Audit — Rudra Dairy & Farm

Generated: 2026-07-08 | Scope: 12 routes in client/src/pages
Method: STATIC SOURCE SCAN of the codebase (real). Live Google crawls (GSC)
not available this session (Nous web tool billing down) — see "Tool-gated" notes.

================================================================================
SUMMARY TABLE (verified from source)
================================================================================

Page H1 H2 H3 H4 Img NoAlt IntLinks Seo meta Status
----------------------------------------------------------------------------

Home 1 4 8 0 3 0 2 Y OK (minor)
WhoWeAre 1 5 6 0 0 0 1 Y OK
About 1 4 8 0 1 0 1 Y OK
Products 1 5 6 3 0 0 1 Y ISSUE: img no alt
Certifications 1 6 9 0 1 0 1 Y OK
Contact 1 2 4 0 0 0 0 Y ISSUE: 0 internal links
Applications 1 4 3 0 0 0 1 Y OK
ApplicationsDetail 1 2 3 0 0 0 0 Y ISSUE: 0 internal links
Markets 1 2 1 0 0 0 0 Y ISSUE: 0 internal links
Resources 1 2 3 0 0 0 0 Y ISSUE: 0 internal links
Trust 1 5 7 0 0 0 1 Y OK
NotFound 1 1 0 0 0 0 0 Y(noindex) OK (correctly noindexed)

Legend: H1 = count of <h1>; IntLinks = internal <Link>/<a href="/..."> found.

================================================================================
PER-PAGE FINDINGS
================================================================================

HOME (/)

- Title/desc/canonical/OG/JSON-LD: present (Organization schema). [FIXED]
- 1 H1, logical H2→H3 hierarchy. 3 images have no alt text (decorative <img>
  without alt=""). Add descriptive alt (e.g. "Donkey on Rudra Dairy & Farm").
- 2 internal links (nav). OK.
- Minor: none blocking.

WHO WE ARE (/who-we-are)

- Metadata present (BreadcrumbList). [FIXED]
- Strong heading structure. No images. OK.

ABOUT (/about) [CONTENT OVERLAP with /who-we-are]

- Metadata present. OK technically.
- RISK: /about (founder bio) and /who-we-are (company story) cover near-
  identical topics → keyword cannibalization. Differentiate or merge.

PRODUCTS (/products) *** TECHNICAL ISSUE ***

- Metadata present (Product schema). [FIXED]
- 3 <img> elements with NO alt attribute. For a product page this is a real
  accessibility + image-SEO miss. Add alt="Premium Fresh Donkey Milk", etc.
- H2/H3/H4 hierarchy good. 1 internal link.

CERTIFICATIONS (/certifications)

- Metadata present (BreadcrumbList). OK. 1 image, has alt. Good.

CONTACT (/contact) *** TECHNICAL ISSUE ***

- Metadata present (LocalBusiness schema). [FIXED]
- 0 internal links. Add links to Products, Markets, Certifications to aid
  crawl discovery + conversion. LocalBusiness JSON-LD present.

APPLICATIONS (/applications) & APPLICATIONS-DETAIL (/applications-detail)

- Both have metadata. OK technically.
- /applications-detail has 0 internal links; add cross-links to Products,
  Markets, Resources.
- RISK: content overlap between the two → consider one canonical page.

MARKETS (/markets) *** TECHNICAL ISSUE ***

- Metadata present. OK structurally.
- 0 internal links. Add links to Products + Contact (quote CTA).

RESOURCES (/resources) *** TECHNICAL ISSUE ***

- Metadata present. OK.
- 0 internal links. Link articles to relevant product/application pages.

TRUST (/trust)

- Metadata present. Good heading structure. OK.

NOT FOUND (/404)

- Correctly set noindex,nofollow. [FIXED] Good.

================================================================================
SITE-LEVEL TECHNICAL ISSUES (all routes)
================================================================================

1. CLIENT-SIDE RENDERING: content is JS-rendered. Google renders it, but
   first-paint HTML is empty → slower indexing + weaker CWV. [Mitigate: the
   Seo component now injects critical <head> tags; consider SSR/SSG later.]
2. BUNDLE SIZE: 509 KB JS (137 KB gzip). LCP/TBT risk. [Fix: code-split routes,
   lazy-load images.] — P2.
3. CANNIBALIZATION: /about↔/who-we-are, /applications↔/applications-detail.
4. INTERNAL LINKING: 6 of 12 pages have 0 internal links → weak site
   architecture for crawl + ranking. [Fix: add contextual internal links.]
5. IMAGE ALT: Products page images lack alt. [Fix: add alt to all <img>.]

================================================================================
TOOL-GATED (cannot verify without external paid tools)
================================================================================

- Real Google crawl errors / "Discovered–currently not indexed" → Google Search
  Console (connect + submit sitemap.xml).
- PageSpeed/Core Web Vitals field data → PageSpeed Insights / CrUX.
- Actual indexed count → site:rudradairyandfarm.shop in GSC.
  These require GSC + Ahrefs/SEMrush access (Nous web tools were billing-blocked
  this session, so no live data was fabricated).
