# Phase 9 — Competitor Gap Analysis (Database Schema + Seed)
Status: SCHEMA READY. Live data requires Ahrefs/SEMrush (billing-blocked this session).

## Why
Identify gaps: e.g. competitor ranks for "goat milk powder", "camel milk powder",
"colostrum powder" — adjacent markets you don't cover. That reveals cross-sell
opportunities.

## Data model (load into Postgres / Airtable / a CSV stack)
competitors(id, name, domain, country, product_range[], certifications[],
             top_landing_pages[], est_backlinks, est_organic_kw)
keywords(id, term, volume, intent, difficulty, competitor_ranking[])
gap_analysis(competitor_id, keyword_id, our_rank, their_rank, opportunity)

## Seed competitors (real, from prior research — NOT fabricated metrics)
| Competitor | Country | Notes |
|------------|---------|-------|
| Eurolactis | CH/IT | industrial donkey milk |
| Golden Donkeys | CY | farm + powder |
| Hellenic Asinus | GR | donkey milk |
| Donna Tina | IT | cosmetic donkey milk |
| Montebaducco | IT | donkey milk |
| Aadvik Foods | IN | camel/goat/donkey milk |
| Dolphin IBA | IN | ingredient supplier |

## Next step (when Ahrefs billing restored)
1. Ahrefs "Site Explorer" each domain → export top pages + backlinks + keywords.
2. Load into the schema above.
3. Run gap query: keywords where competitor_rank<=10 AND our_rank IS NULL.
4. Prioritise by volume × intent (commercial first).

NOTE: Volumes and backlink counts are intentionally left blank — do NOT
fabricate. Pull from Ahrefs/SEMrush and fill the schema with real numbers.
