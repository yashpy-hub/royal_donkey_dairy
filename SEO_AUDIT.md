# Rudra Dairy & Farm — SEO Audit Report
Generated: 2026-07-08
Scope: rudradairyandfarm.shop (live, Vercel) + local codebase at G:/royal_donkey_dairy

================================================================================
EXECUTIVE SUMMARY
================================================================================
The site is a client-side React SPA (wouter router, Vite). It currently has
NO technical SEO foundation:
  - No per-page <title> / meta description (every route serves the same empty
    index.html; live title is still the OLD brand "Royal Donkey Dairy").
  - No robots.txt (returns SPA fallback HTML).
  - No sitemap.xml (returns SPA fallback HTML).
  - No canonical tags.
  - No structured data (JSON-LD / Schema.org).
  - No Open Graph / Twitter cards.
  - Only 1 H1 per page (good) but no metadata to tell Google what each page is.

VERIFIED LIVE (via curl, 2026-07-08):
  - HTTPS: YES (HTTP/2 200, strict-transport-security header present, Vercel).
  - Live title: "Royal Donkey Dairy"  -> the DEPLOYED build is STALE. It predates
    the brand rename + footer fixes we applied locally. The deployment must be
    rebuilt/redeployed.
  - robots.txt & sitemap.xml: both return the SPA index.html (200 HTML), i.e.
    they DO NOT EXIST as real files.

This is the single biggest issue: even if Google crawls, every page looks
identical (same title, no description) and there is no sitemap to guide crawling.

================================================================================
A. GOOGLE INDEXING
================================================================================
NOTE: Exact indexed-page counts, "Discovered–currently not indexed" status, and
crawl errors can ONLY be read from Google Search Console (GSC). I could not
access GSC. Below is what we can determine from the site itself + what to check.

A.1 How many pages are indexed?
  - Cannot be confirmed without GSC / site:rudradairyandfarm.shop operator.
  - The site has 11 real content routes (see route list in B). If indexed at
    all, expect few or zero clean entries because all routes share one
    title/description and the SPA may be partially rendered.

A.2 Which important pages are not indexed?
  - Likely ALL non-home routes (/products, /who-we-are, /markets, /certifications,
    /applications-detail, /resources, /contact, /trust, /about, /applications)
    are at risk, because they have no unique <title>/meta and no internal
    crawl path that Google can read from static HTML (links are JS-rendered).

A.3 Duplicate pages?
  - Risk of apparent duplication: because every route serves identical
    index.html with no canonical, Google may treat all URLs as near-duplicates
    of the homepage. Fix with per-route canonical + unique title/description.

A.4 Crawl errors / "Discovered – currently not indexed"?
  - Cannot be read without GSC. Set up GSC (see Action Plan) and submit the
    sitemap to get these reports.

RECOMMENDED: Connect GSC + Bing Webmaster Tools immediately.

================================================================================
B. TECHNICAL SEO  (VERIFIED)
================================================================================
B.1 XML Sitemap ............ MISSING. /sitemap.xml returns SPA HTML.
B.2 robots.txt ............. MISSING. /robots.txt returns SPA HTML.
B.3 Canonical tags ......... MISSING on all routes.
B.4 HTTPS .................. OK. HTTP/2, HSTS header present (Vercel).
B.5 Broken links (404) ..... Partial: internal links are JS routes (fine), but
                              the OLD social handles rudradairyandform (typo) were
                              in Footer — now fixed locally to rudradairyandfarm.
                              Live deploy still has the typo.
B.6 Redirect chains ........ Not applicable at origin; verify www vs non-www
                              and http->https are single 301s in Vercel.
B.7 Mobile usability ....... Viewport present but `maximum-scale=1` is set in
                              index.html — this DISABLES pinch-zoom and is a
                              mobile-usability/accessibility negative for Google.
                              Remove maximum-scale=1.
B.8 Core Web Vitals ........ Live HTML is ~368 KB with a single large JS bundle
                              (/assets/index-DWcCKTl2.js). Likely weak LCP/TBT on
                              mobile. Needs: code-splitting per route, image
                              optimization, preconnect already present (good).
                              Measure in GSC / PageSpeed Insights.
B.9 Structured data ........ MISSING. No JSON-LD Organization, Product,
                              BreadcrumbList, or LocalBusiness.

ROUTES DISCOVERED (from App.tsx):
  /                     Home
  /who-we-are           WhoWeAre
  /applications         Applications
  /applications-detail  ApplicationsDetail
  /markets              Markets
  /resources            Resources
  /products             Products
  /about                About
  /trust                Trust
  /certifications       Certifications
  /contact              Contact
  /404                  NotFound  (also used as catch-all fallback)

NOTE: Two near-duplicate routes exist: /about (About.tsx) AND /who-we-are
(WhoWeAre.tsx) appear to cover the same "about the company" topic. Also
/applications vs /applications-detail. This risks keyword cannibalization —
consolidate or differentiate clearly with distinct intent.

================================================================================
C. ON-PAGE SEO  (VERIFIED per file)
================================================================================
Method: parsed each page .tsx for H1/H2/H3 counts, <img> vs alt, and any SEO
component (Helmet/useSEO/document.title). Result:

  Page                 H1  H2  H3  <img>  alt  per-page SEO?
  About.tsx            1   4   8    1      1    NO
  Applications.tsx     1   4   3    0      0    NO
  ApplicationsDetail   1   2   3    0      0    NO
  Certifications.tsx   1   5   9    1      1    NO
  Contact.tsx          1   2   4    0      0    NO
  Home.tsx             1   4   8    3      3    NO
  Markets.tsx          1   2   1    0      0    NO
  NotFound.tsx         1   1   0    0      0    NO
  Products.tsx         1   5   6    0      0    NO
  Resources.tsx        1   2   3    0      0    NO
  Trust.tsx            1   5   7    0      0    NO
  WhoWeAre.tsx         1   5   6    0      0    NO

Strengths:
  - Exactly ONE <h1> per page (good heading hierarchy baseline).
  - Home/About/Certifications have image alt text present.

Gaps (every page):
  - NO unique <title> (all use global "Royal Donkey Dairy"/"Rudra Dairy & Farm").
  - NO meta description anywhere.
  - NO target-keyword optimization per page.
  - NO explicit CTA consistency (CTAs exist in markup but no SEO framing).
  - Many pages have ZERO <img> (Products, Markets, Applications) -> missing
    image alt opportunities / visual content for image SEO.
  - Internal links exist (footer + nav) but are JS-rendered.

REQUIRED PER PAGE (once an SEO component is added):
  - Unique <title> (50-60 chars), e.g. "Donkey Milk Powder Bulk Supplier | Rudra
    Dairy & Farm".
  - Unique meta description (150-160 chars) with target keyword + CTA.
  - One H1 containing the primary keyword.
  - Logical H2/H3 (already present).
  - Canonical URL.
  - OG + Twitter tags for social sharing.

================================================================================
D. COMPETITOR ANALYSIS
================================================================================
HONEST LIMITATION: Live web_search / web_extract were UNAVAILABLE during this
audit (Nous web tool billing error). I therefore cannot pull real traffic
volumes, backlink counts, or country splits. Those REQUIRE a paid tool
(Ahrefs / SEMrush / Similarweb) or GSC. I will NOT fabricate numbers.

What we CAN say from domain knowledge of the niche:

Likely competitor classes for "donkey milk / donkey milk powder B2B":
  1. EU cosmetic-ingredient suppliers (Italy, France, Bulgaria — donkey milk is
     a premium EU cosmetic ingredient; e.g. historic EU donkey-milk cosmetic
     farms).
  2. Indian dairy B2B exporters (buffalo/cow/powder) that may list donkey milk.
  3. Niche donkey-milk farms selling powder to pharma/cosmetics (EU + a few in
     India, Middle East).
  4. Marketplaces / B2B platforms (Alibaba, IndiaMART) where donkey milk powder
     is listed by multiple vendors.

To actually answer D's questions, run (I can help set up):
  - Ahrefs "Competing Domains" + "Top Pages" for rudradairyandfarm.shop.
  - SEMrush "Domain Overview" for top 10-20 donkey-milk / dairy-powder domains.
  - Similarweb for country traffic splits.
  - For backlinks: Ahrefs "Backlinks" + "Referring Domains".

I can execute this for real once web tool billing is restored or you provide an
Ahrefs/SEMrush API key.

================================================================================
E. KEYWORD RESEARCH — MASTER DATABASE (structured seed set)
================================================================================
HONEST LIMITATION: A real 3,000–10,000 keyword list requires a keyword tool
(Ahrefs Keywords Explorer / Google Keyword Planner / Semrush). I cannot scrape
live volumes right now. Below is a STRUCTURED, REAL seed taxonomy covering the
niche's actual search intent — it is the framework you expand with a tool.
Each group is real and rankable; a tool will expand each to hundreds of long-
tail variants (reaching the 3k–10k target via modifiers: country, pack size,
industry, "bulk"/"wholesale"/"supplier"/"price"/"near me").

Categories used:
  [Intent] Commercial (buy/B2B) | Informational (learn) | Navigational
  [Industry] Cosmetics | Pharmaceutical | Nutraceutical | Food&Bev | Infant |
              Wellness | Research | Pet? (no)
  [Country] India | UAE | Saudi | Korea | Japan | EU(IT/FR/DE) | USA | Global
  [Application] Skincare | Supplements | Formula | Soap | Cream | B2B/Bulk
  [Product] Fresh Donkey Milk | Donkey Milk Powder | Frozen | Bulk Tanker

--- E.1 COMMERCIAL / TRANSACTIONAL (high priority) ---
  donkey milk powder supplier
  donkey milk powder manufacturers
  buy donkey milk powder
  donkey milk powder bulk
  donkey milk powder wholesale
  donkey milk powder price
  donkey milk powder 25kg / 1kg / 500g
  fresh donkey milk supplier
  fresh donkey milk bulk
  donkey milk for cosmetics private label
  donkey milk powder for soap manufacturing
  donkey milk powder pharmaceutical grade
  donkey milk B2B India
  donkey milk exporter India
  donkey milk powder OEM

--- E.2 INFORMATIONAL ---
  benefits of donkey milk for skin
  donkey milk vs cow milk
  donkey milk nutrition facts
  donkey milk powder how to use
  is donkey milk good for face
  donkey milk for eczema / acne / psoriasis
  donkey milk price per litre
  donkey milk production process
  donkey milk shelf life powder
  donkey milk FDA / FSSAI compliance

--- E.3 INDUSTRY / APPLICATION ---
  donkey milk in cosmetics
  donkey milk skin care ingredients
  donkey milk in infant formula
  donkey milk nutraceutical supplements
  donkey milk pharmaceutical applications
  donkey milk functional food
  donkey milk anti-aging cream ingredient
  donkey milk probiotics

--- E.4 GEO / COUNTRY MODIFIERS (append to above) ---
  donkey milk powder India / Mumbai / Delhi / Bangalore
  donkey milk powder UAE / Dubai
  donkey milk powder Saudi Arabia / Riyadh
  donkey milk powder Korea / Seoul
  donkey milk powder Japan
  donkey milk powder Europe / Italy / France
  donkey milk powder USA
  donkey milk supplier near me

--- E.5 BRAND / NAVIGATIONAL ---
  Rudra Dairy & Farm
  rudradairyandfarm.shop
  Rudra Dairy donkey milk powder
  (competitor brand terms to monitor once identified)

EXPANSION TO 3k–10k: combine every [Product] x [Industry] x [Country] x
[Modifier: bulk/wholesale/price/private label/oem/near me/benefits/how to use].
Example: "donkey milk powder bulk supplier India Mumbai price 25kg" — a tool
will generate thousands of such long-tails with real volumes.

RECOMMENDED PRIMARY TARGETS (map to your pages):
  /products            -> donkey milk powder supplier / fresh donkey milk bulk
  /applications-detail -> donkey milk in cosmetics / pharma applications
  /markets             -> donkey milk powder exporter India / UAE / Korea
  /certifications      -> FSSAI ISO donkey milk certified supplier
  /who-we-are          -> about donkey milk farm India
  /resources           -> benefits of donkey milk (informational hub)

================================================================================
PRIORITIZED ACTION PLAN
================================================================================
P0 — Blockers (do first):
  1. REDEPLOY: the live site still shows "Royal Donkey Dairy" and old footer.
     Rebuild (pnpm build) and redeploy to Vercel so all local fixes go live.
  2. Add an SEO layer: install a helmet lib (e.g. react-helmet-async) OR a small
     <Seo> component using document.title + meta injection, and call it on every
     page with unique title/description/canonical/OG.
  3. Create public/robots.txt allowing all + pointing to sitemap.
  4. Generate public/sitemap.xml (all 11 routes, weekly) — script or vite plugin.
  5. Remove `maximum-scale=1` from index.html viewport (mobile usability).

P1 — Strong wins:
  6. Add JSON-LD: Organization + LocalBusiness on all pages; Product on
     /products; BreadcrumbList site-wide.
  7. Consolidate/differentiate /about vs /who-we-are and /applications vs
     /applications-detail to avoid cannibalization.
  8. Add image alt text to all <img> (Products/Markets/Applications have none).
  9. Add OG + Twitter cards (social CTR).
 10. Connect Google Search Console + Bing Webmaster; submit sitemap.

P2 — Scale:
 11. Run real keyword tool to expand E into 3k–10k and map to a content plan.
 12. Build informational blog hub (/resources already exists) targeting E.2.
 13. Improve Core Web Vitals: route-level code splitting, lazy images,
     optimize the 368 KB bundle.
 14. Acquire backlinks: B2B directories, industry (cosmetic/pharma) portals,
     IndiaMART/Alibaba listings, PR in agri/dairy trade press.

================================================================================
VERIFICATION STATUS
================================================================================
VERIFIED (real tool output): codebase SEO absence, live title brand mismatch,
HTTPS OK, robots/sitemap absence, heading counts, image-alt gaps, viewport
maximum-scale issue, live deployment staleness.
TOOL-GATED (cannot verify now, need external paid tools): exact indexed counts,
crawl errors, "Discovered-not-indexed", competitor traffic/backlinks/country
splits, real keyword volumes. -> Use GSC + Ahrefs/SEMrush.

================================================================================
P0 FIXES IMPLEMENTED (2026-07-08) — VERIFIED
================================================================================
All P0 technical SEO fixes are now implemented in code and verified on a real
production build:

1. SEO layer added: client/src/components/Seo.tsx (dependency-free; writes
   document.title, meta description, canonical, Open Graph, Twitter, robots,
   and JSON-LD on mount; cleans up on navigation).

2. Per-page metadata on all 12 routes (unique title + description + canonical +
   OG + JSON-LD):
     /                Organization + BreadcrumbList
     /products        Product (donkey milk powder) + BreadcrumbList
     /contact         LocalBusiness + BreadcrumbList
     /who-we-are,/about,/applications,/applications-detail,/markets,
     /resources,/certifications,/trust  -> unique title/desc + BreadcrumbList
     /404             noindex,nofollow

   Verification (browser on production build, route /products):
     title        = "Donkey Milk Powder & Fresh Donkey Milk — Bulk B2B Supplier | Rudra Dairy & Farm"
     canonical    = https://rudradairyandfarm.shop/products
     description  = present (FSSAI/ISO bulk copy)
     og:type      = website ; twitter:card = summary_large_image
     robots       = index,follow
     JSON-LD      = PRESENT

3. robots.txt created at client/public/robots.txt (Allow: / + Sitemap directive).
   Served as real file (HTTP 200) — verified, no longer SPA fallback.

4. sitemap.xml created at client/public/sitemap.xml — 11 URLs, weekly/monthly
   changefreq, priority set. Served as real file (HTTP 200) — verified.

5. maximum-scale=1 removed from client/index.html viewport (mobile usability
   fix). Confirmed absent in built dist/public/index.html.

6. OG image placeholder added at client/public/og-image.svg (referenced by Seo).
   NOTE: replace with a real 1200x630 PNG/JPG design before launch (image
   generation was unavailable due to Nous billing).

Build verification:
   pnpm check  -> passes (tsc --noEmit, no errors)
   pnpm build  -> succeeds; dist/public contains index.html, assets, robots.txt,
                  sitemap.xml, og-image.svg

REMAINING / NOT DONE (from original plan):
   - P1: consolidate /about vs /who-we-are and /applications vs
     /applications-detail (cannibalization risk) — metadata is distinct but
     content overlaps; consider merging or clearer differentiation.
   - P1: add image alt text to Products/Markets/Applications pages (have none).
   - P2: Core Web Vitals — the JS bundle is 509 KB (137 KB gzip); add route
     code-splitting + lazy images to improve LCP/TBT.
   - DEPLOY: the live rudradairyandfarm.shop still serves the OLD build (title
     "Royal Donkey Dairy"). This code must be rebuilt + redeployed to Vercel
     for the fixes to go live. The earlier live-staleness finding still applies
     until redeploy.
   - Connect Google Search Console + Bing Webmaster Tools and submit the
     sitemap to get real indexing/crawl reports (replaces tool-gated section).
