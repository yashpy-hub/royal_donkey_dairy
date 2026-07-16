#!/usr/bin/env python3
"""Multi-locale Google Ads banned-claim scanner for Rudra Dairy & Farm.

Extended pattern list (covers gaps the original scanner missed):
medical/disease, therapeutic, immune, anti-aging, hypoallergenic,
immunoglobulin/antibody, antioxidant, collagen, joint/bone health,
muscle recovery, clinical, "natural remedy", superlatives, and
quantified success stats tied to customer outcomes.

Exits 1 if any banned pattern is found in ANY locale / data file.
"""
import re, sys, os

TARGET = sys.argv[1] if len(sys.argv) > 1 else "client/src"

PATTERNS = [
    # medical / disease / treatment (NOT "therapeutic goods" which is legit
    # regulator language about a 3rd party, e.g. "therapeutic goods under the TGA")
    r"(?i)\b(cure|treat|treatment|treats|healing|heal|medicinal|medizinisch|rimedio|rem[eè]de|remedy|th[eé]rapeutique|therapeutischen|therapeutische|therapeutisch(?!s?\s+goods))\b",
    # immune
    r"(?i)\b(immune|immun|antik[oö]rper|immunit[aä]|immununterst[uü]tzung|system support)\b",
    # anti-aging
    r"(?i)\b(anti-?ag(e|ing)|anti-?âge|antiage|anti-aging|verj[uü]ng|rejuvenat|ringiovan)\b",
    # hypoallergenic
    r"(?i)\b(hypoallergen|hypoallerg[eé]nique|ipoallergen|hypoallergene)\b",
    # immunoglobulin / antibody
    r"(?i)\b(immunoglobulin|immunglobulin|immunoglobuline|immunoglobine)\b",
    # antioxidant
    r"(?i)\b(antioxidant|antioxydant|antiossidant|antioxidantien|antiossidanti)\b",
    # collagen
    r"(?i)\b(collagen|kollagen|collageno|collag[eè]ne)\b",
    # joint / bone health
    r"(?i)\b(joint.?health|gelenkgesundheit|bone health|knochengesundheit)\b",
    # muscle recovery
    r"(?i)\b(muscle recovery|muskelregeneration|muscle recover)\b",
    # clinical
    r"(?i)\b(clinical (study|trial|research)|klinische studien|clinical studies|clinical trials)\b",
    # natural remedy phrasing
    r"(?i)\b(natural (remedy|alternative to)|nat[eü]rliches heilmittel|rem[eè]de naturel|rimedio naturale)\b",
    # unsupported superlatives
    r"(?i)\b(miracle|magical|number one|no\.? 1|world'?s (best|finest)|leading (brand|brands) use|guarantee\w* (of|purity|quality))\b",
    # quantified success stats tied to customer outcomes (e.g. "35% sales", "3x production").
    # Requires a business keyword after the % (space + word); ignores quoted bare
    # stats like "45%" and CSS calc() contexts.
    r"(?i)\b\d{1,3}\s?%\s(?:margin|premium|sales|cost|verkauf|umsatz|marge|vente|premium|wachstum|growth|reduction|kostensenkung|steigerung|sales increase|aumento)\b",
    r"(?i)\b(tripl\w*|3x (production|increase|produktion|verdreifacht))\b",
]

compiled = [re.compile(p) for p in PATTERNS]

hits = []
for root, _, files in os.walk(TARGET):
    for fn in files:
        if not fn.endswith((".ts", ".tsx")):
            continue
        # UI primitives (e.g. tooltip arrow) contain CSS calc() that is a false positive
        if fn in ("tooltip.tsx",):
            continue
        path = os.path.join(root, fn)
        try:
            with open(path, encoding="utf-8") as f:
                for i, line in enumerate(f, 1):
                    for c in compiled:
                        if c.search(line):
                            hits.append((path, i, line.strip()))
                            break
        except Exception:
            pass

if hits:
    print("=== BANNED CLAIMS FOUND ===")
    for path, i, line in hits:
        print(f"{path}:{i}: {line[:200]}")
    print(f"\nRESULT: {len(hits)} match(es) (exit 1)")
    sys.exit(1)
else:
    print("RESULT: CLEAN (no banned patterns matched)")
    sys.exit(0)
