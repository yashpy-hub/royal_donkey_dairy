# Content & Page Architecture — Rudra Dairy & Farm

Generated: 2026-07-08

================================================================================
PHASE 0 — EXISTING PAGES (already improved this session)
================================================================================

All 12 existing routes now have: unique SEO metadata + JSON-LD (P0), internal
"Explore More" link blocks (Contact/Markets/Resources/ApplicationsDetail), and
cross-links resolving the /about↔/who-we-are and /applications↔/applications-detail
cannibalization pairs. No new large content should ship until the site is
redeployed (live build still shows old brand).

================================================================================

1. TARGET INFORMATION ARCHITECTURE (URL MAP)
   \================================================================================
   PILLAR PAGES (authority hubs — comprehensive, link out to clusters)
   / Home
   /products Pillar: all products
   /applications Pillar: all industries/uses
   /markets Pillar: export/geography
   /resources Pillar: knowledge hub

CLUSTER / SUPPORT PAGES (to be created — map each to keyword clusters in
KEYWORD_MASTER.csv). Suggested new routes:

Commercial / B2B (highest priority — low competition, high conversion):
/bulk-supply "donkey milk powder bulk supplier India", "bulk donkey milk"
/private-label "donkey milk powder private label", "donkey milk OEM"
/export-uae "donkey milk powder supplier UAE", "donkey milk exporter Dubai"
/export-eu "donkey milk powder manufacturer Germany", "EU export"
/export-korea "donkey milk powder Korea", "K-beauty ingredient"
/certifications (exists) → add ISO/HACCP detail sub-anchors

Application clusters (top-of-funnel content, map to /applications):
/applications/cosmetics "donkey milk powder for cosmetics", "donkey milk soap base"
/applications/pharma "donkey milk pharmaceutical", "donkey milk nutraceutical"
/applications/skincare "donkey milk for eczema", "donkey milk for acne"
/applications/infant "donkey milk infant formula"

Product detail clusters (map to /products):
/products/donkey-milk-powder spec + pack sizes + quote CTA
/products/fresh-donkey-milk
/products/donkey-colostrum
/products/freeze-dried-powder

Geo landing pages (capture "supplier <geo>" navigational + commercial):
/donkey-milk-supplier-india
/donkey-milk-supplier-uae
/donkey-milk-supplier-usa
(one per top-15 geo from keyword master)

Blog / Resources articles (informational intent):
/blog/benefits-of-donkey-milk
/blog/donkey-milk-vs-goat-milk
/blog/donkey-milk-for-eczema
/blog/how-to-make-donkey-milk-soap
/blog/donkey-milk-in-cosmetics
(≈ 1–2 per week, sourced from KEYWORD_MASTER informational bucket)

Total new URLs target: ~30–40 (pillars stay thin, clusters capture long-tail).

================================================================================ 2. INTERNAL LINKING MODEL (enforced)
================================================================================

- Every cluster page links UP to its pillar (e.g. /bulk-supply → /products,
  /export-uae → /markets, /applications/cosmetics → /applications).
- Every pillar links DOWN to its clusters ("Explore: Bulk Supply · Private
  Label · Export UAE").
- Contextual in-content links (not just footer): e.g. blog "donkey milk for
  eczema" links to /products/donkey-milk-powder and /applications/skincare.
- Homepage links to all 5 pillars in nav (already done).
- Contact CTA present on every commercial/cluster page.
- Use descriptive anchor text (target keyword), not "click here".

================================================================================ 3. CONTENT PRODUCTION CADENCE (scale plan)
================================================================================

Post-redeploy, publish in this order (fix-first, then scale):
Month 1: 6 commercial cluster pages (bulk/private-label/export-uae/export-eu/
export-korea + 1 geo). These target the highest-value, lowest-
competition keywords (Gap 1 & 2 from competitor analysis).
Month 2: 4 application clusters + 4 product detail pages. Interlink to pillars.
Month 3+: 2 blog posts/week from informational bucket; 1 geo page/week until
top-15 geos covered. Repurpose into LinkedIn/articles for links.
Quality bar per page: ≥600 words, 1 H1 + 2–4 H2 + H3s, unique title/desc
(via Seo component), 1 image with alt, 2+ internal links, 1 CTA.

================================================================================ 4. CONTENT TEMPLATES (reuse for speed/consistency)
================================================================================

Commercial cluster page template:
H1: <Product/Service> <Geo/Use> | Rudra Dairy & Farm
Intro (100w): what + why Rudra (capacity/certs)
H2: Specifications / Pack Sizes
H2: Certifications & Quality
H2: How to Order (CTA → /contact)
H2: Related (internal links)
Blog template:
H1: question-style title; Intro; H2 sections; FAQ; CTA; internal links.

================================================================================ 5. MEASUREMENT
================================================================================

- Connect GSC + Bing; submit sitemap.xml.
- Track per-URL impressions/clicks/position (GSC).
- Quarterly content audit: prune/merge underperforming clusters; expand
  winners. Re-run keyword master volumes via Ahrefs/SEMrush when billing restores.
