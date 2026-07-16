#!/usr/bin/env bash
# Multi-locale Google Ads banned-claim scanner for Rudra Dairy & Farm.
# Extended pattern list (covers the gaps the original scanner missed):
# medical/disease, therapeutic, immune, anti-aging, hypoallergenic,
# immunoglobulin/antibody, antioxidant, collagen, joint/bone health,
# muscle recovery, clinical, "natural remedy", and quantified success stats.
# Exits 1 if any banned pattern is found in ANY locale / data file.
set -u
TARGET="${1:-client/src}"
[ -d "$TARGET" ] || { echo "usage: $0 <dir>"; exit 2; }

PATTERNS=(
  # medical / disease / treatment
  '(?i)\b(cure|treat|treatment|treats|healing|heal|therapeutic|therapeutischen|th[eé]rapeutique|medicinal|medizinisch|rimedio|rem[eè]de|remedy)\b'
  # immune
  '(?i)\b(immune|immun|antik[oö]rper|immunit[aä]|immununterst[uü]tzung|system support)\b'
  # anti-aging
  '(?i)\b(anti-?ag(e|ing)|anti-?âge|antiage|anti-aging|verj[uü]ng|rejuvenat|ringiovan)\b'
  # hypoallergenic
  '(?i)\b(hypoallergen|hypoallerg[eé]nique|ipoallergen|hypoallergene)\b'
  # immunoglobulin / antibody
  '(?i)\b(immunoglobulin|immunglobulin|immunoglobuline|immunoglobine)\b'
  # antioxidant
  '(?i)\b(antioxidant|antioxydant|antiossidant|antioxidanti|antioxidantien)\b'
  # collagen
  '(?i)\b(collagen|kollagen|collageno|collag[eè]ne)\b'
  # joint / bone health
  '(?i)\b(joint.?health|gelenkgesundheit|bone health|knochengesundheit|knochen)\b'
  # muscle recovery
  '(?i)\b(muscle recovery|muskelregeneration|muscle recover|muskel)\b'
  # clinical
  '(?i)\b(clinical (study|trial|research)|klinische studien|clinical studies|clinical trials)\b'
  # natural remedy phrasing
  '(?i)\b(natural (remedy|alternative to)|nat[eü]rliches heilmittel|rem[eè]de naturel|rimedio naturale)\b'
  # unsupported superlatives in ad copy
  '(?i)\b(miracle|magical|number one|no\.? 1|world'?s (best|finest)|leading (brand|brands) use|guarantee\w* (of|purity|quality))\b'
  # quantified success stats tied to customer outcomes
  '(?i)\b\d{1,3}\s?%(?:\s?(?:margin|premium|sales|cost|verkauf|umsatz|marge|vente|marge|premium|wachstum|growth|reduction|kostensenkung|steigerung))?\b'
  '(?i)\b(tripl\w*|3x (production|increase|produktion|verdreifacht))\b'
)

hit=0
for p in "${PATTERNS[@]}"; do
  # grep -rPn with the pattern; ignore the scanner itself
  out=$(grep -rPn --exclude="scan_banned_claims.sh" "$p" "$TARGET" 2>/dev/null)
  if [ -n "$out" ]; then
    echo "=== HIT: $p ==="
    echo "$out"
    hit=1
  fi
done

if [ "$hit" -eq 1 ]; then
  echo ""
  echo "RESULT: BANNED CLAIMS FOUND (exit 1)"
  exit 1
else
  echo "RESULT: CLEAN (no banned patterns matched)"
  exit 0
fi
