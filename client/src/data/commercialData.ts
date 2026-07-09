// Central content source for Rudra Dairy & Farm commercial SEO pages.
// Each entry renders via DynamicCommercialPage. Content is real, not lorem.
// To scale the 40x25x15 matrix: add rows here (or extend the generators),
// no new component code required.
import { SUPPORTING_PAGES } from "./siloData";
import { RESEARCH_PAGES } from "./researchData";

export type SpecRow = { label: string; value: string };
export type Section = { heading: string; body: string };
export type Faq = { q: string; a: string };
export type ParentRef = { kind: CommercialEntry["kind"]; slug: string; label: string };

export interface CommercialEntry {
  slug: string;
  kind: "money" | "industry" | "application" | "country" | "guide" | "supporting" | "research";
  title: string; // for <title> + H1
  h1?: string;
  intro: string; // meta description + lede
  sections: Section[];
  specs?: SpecRow[];
  faqs?: Faq[];
  ctaLabel?: string; // default "Request Quotation"
  related?: string[]; // slugs within same kind or cross-kind "kind:slug"
  parent?: ParentRef; // for silo supporting pages -> hub
}

// ---------------------------------------------------------------------------
// MONEY PAGES (commercial intent - highest priority)
// ---------------------------------------------------------------------------
export const MONEY_PAGES: CommercialEntry[] = [
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers",
    kind: "money",
    title: "Donkey Milk Powder for Cosmetic Manufacturers",
    intro:
      "Bulk donkey milk powder for cosmetic manufacturers - cosmetic-grade, freeze-dried, and private-label ready. FSSAI, ISO and HACCP certified supply with COA and full traceability for skincare production.",
    sections: [
      {
        heading: "Cosmetic-Grade Donkey Milk Powder for Scale",
        body: "Rudra Dairy & Farm supplies cosmetic manufacturers with premium spray- and freeze-dried donkey milk powder engineered for creams, lotions, serums and masks. Our powder retains the native proteins, lactose and minerals associated with donkey milk's skin-conditioning properties, and is produced under HACCP and ISO 22000 controls so it integrates cleanly into cosmetic formulations.",
      },
      {
        heading: "Why Manufacturers Choose Our Powder",
        body: "Consistent batch composition, low moisture for shelf stability, and documentation (Certificate of Analysis, specifications, MSDS) that procurement and QA teams require. Available in food-grade and cosmetic-grade specifications with flexible pack sizes from 1 kg to 25 kg.",
      },
      {
        heading: "Formulation Notes",
        body: "Donkey milk powder disperses in the water phase. Typical use levels in finished cosmetics range from 1% to 10% depending on the claim and product format. We recommend a small pilot batch before full-scale production - request a sample to validate compatibility with your preservative system.",
      },
    ],
    specs: [
      { label: "Form", value: "Spray-dried / Freeze-dried powder" },
      { label: "Grade", value: "Cosmetic & Food grade" },
      { label: "Moisture", value: "< 4%" },
      { label: "Pack sizes", value: "1 kg / 5 kg / 25 kg" },
      { label: "MOQ", value: "5 kg (samples from 500 g)" },
      { label: "Certifications", value: "FSSAI, ISO 22000, HACCP, IEC" },
      { label: "Shelf life", value: "24 months sealed, cool & dry" },
    ],
    faqs: [
      { q: "Is the powder suitable for leave-on skincare?", a: "Yes. Our cosmetic-grade powder is produced under hygienic controls and supplied with a COA; validate in your preserved formulation as with any dairy-derived ingredient." },
      { q: "Do you provide private label?", a: "Yes - private label and OEM packing under your brand is available from 25 kg batches. See our private label page." },
      { q: "What documentation ships with an order?", a: "Each batch includes a Certificate of Analysis, specification sheet, MSDS and traceability record." },
    ],
    related: ["private-label-donkey-milk-powder", "oem-donkey-milk-powder-manufacturer", "application:soap", "application:face-cream",
      "supporting:donkey-milk-powder-for-cosmetic-manufacturers--manufacturing-process",
      "supporting:donkey-milk-powder-for-cosmetic-manufacturers--formulation-guide",
      "supporting:donkey-milk-powder-for-cosmetic-manufacturers--shelf-life",
      "supporting:donkey-milk-powder-for-cosmetic-manufacturers--coa-explained",
      "supporting:donkey-milk-powder-for-cosmetic-manufacturers--msds-guide"],
  },
  {
    slug: "donkey-milk-powder-for-soap-manufacturing",
    kind: "money",
    title: "Donkey Milk Powder for Soap Manufacturing",
    intro:
      "Donkey milk powder for soap manufacturing - premium milk powder for cold-process, melt-and-pour and syndet soap. Bulk supply with consistent composition for artisan and industrial soap makers.",
    sections: [
      { heading: "Milk Powder Built for Soap", body: "Donkey milk powder adds a creamy, skin-softening character to soap. Our low-heat dried powder survives the saponification process better than liquid milk and gives reproducible batches for soap manufacturers scaling from workshop to factory." },
      { heading: "Usage in Soap", body: "Typical addition is 2-5% of total batch weight, dispersed in the liquid phase before trace. It pairs well with olive, coconut and shea butters. We supply both standard and freeze-dried grades depending on how much native protein you want retained." },
    ],
    specs: [
      { label: "Form", value: "Spray / Freeze-dried powder" },
      { label: "Use level", value: "2-5% of batch" },
      { label: "Pack sizes", value: "1 / 5 / 25 kg" },
      { label: "MOQ", value: "5 kg" },
      { label: "Certifications", value: "FSSAI, ISO, HACCP" },
    ],
    faqs: [
      { q: "Does donkey milk powder accelerate trace?", a: "It can shorten trace slightly due to proteins; many soap makers account for this by adding at thin trace. Request our soap-making guide for details." },
      { q: "Can we private label donkey milk soap?", a: "Yes - we supply the powder for your soap, or discuss co-manufacturing via our OEM page." },
    ],
    related: ["application:soap", "private-label-donkey-milk-powder", "money:donkey-milk-powder-for-cosmetic-manufacturers"],
  },
  {
    slug: "freeze-dried-donkey-milk-powder-manufacturer",
    kind: "money",
    title: "Freeze-Dried Donkey Milk Powder Manufacturer",
    intro:
      "Freeze-dried donkey milk powder manufacturer - low-temperature processed powder that preserves native protein and bioactive profile. Bulk B2B supply with full documentation and traceability.",
    sections: [
      { heading: "Freeze Drying for Maximum Integrity", body: "Freeze drying (lyophilisation) removes water under vacuum at low temperature, preserving heat-sensitive proteins and the natural composition of donkey milk far better than spray drying. For premium cosmetics, nutraceuticals and research use, this is the preferred form." },
      { heading: "Our Freeze-Drying Process", body: "Fresh milk is cold-stabilised, frozen and sublimated under controlled vacuum. We monitor residual moisture, solubility and microbial load per batch. The result is a highly soluble, near-white powder with minimal denaturation." },
    ],
    specs: [
      { label: "Process", value: "Freeze-dried (lyophilised)" },
      { label: "Solubility", value: "> 95%" },
      { label: "Moisture", value: "< 3%" },
      { label: "Pack sizes", value: "0.5 / 1 / 5 / 25 kg" },
      { label: "MOQ", value: "1 kg" },
    ],
    faqs: [
      { q: "Freeze-dried vs spray-dried - which should I choose?", a: "Choose freeze-dried when you need maximum native protein retention (premium skincare, nutraceuticals, R&D). Spray-dried is more economical for high-volume soap and commodity use." },
      { q: "Is it suitable for nutraceutical capsules?", a: "Yes - see our nutraceutical capsules application page and nutraceutical industry page." },
    ],
    related: ["application:nutraceutical-capsules", "industry:nutraceutical", "money:donkey-milk-powder-exporter"],
  },
  {
    slug: "private-label-donkey-milk-powder",
    kind: "money",
    title: "Private Label Donkey Milk Powder",
    intro:
      "Private label donkey milk powder - launch your own branded donkey milk ingredient with Rudra Dairy & Farm as your certified manufacturer. Low MOQs, custom pack sizes and full documentation.",
    sections: [
      { heading: "Your Brand, Our Certified Facility", body: "Bring your label to market without building a dairy. We manufacture, document and pack donkey milk powder under your brand with FSSAI, ISO and HACCP certification behind it. Ideal for cosmetic brands, supplement companies and distributors entering the donkey-milk category." },
      { heading: "What's Included", body: "Custom pack sizes and labelling, Certificate of Analysis per batch, specification and MSDS, and support with import documentation for your target market. MOQs start at 25 kg for private label." },
    ],
    specs: [
      { label: "Service", value: "Private label / white label" },
      { label: "MOQ", value: "25 kg" },
      { label: "Pack", value: "Custom 100 g - 25 kg" },
      { label: "Labelling", value: "Your brand + our certs" },
      { label: "Lead time", value: "2-3 weeks" },
    ],
    faqs: [
      { q: "Can you label for the EU / UAE / Japan?", a: "We supply the product and core docs; market-specific labelling must meet local rules. Our export pages cover France, Germany, UAE and Japan requirements." },
      { q: "Is there a design minimum?", a: "No separate design MOQ - we work from your artwork. MOQ is on product volume (25 kg)." },
    ],
    related: ["oem-donkey-milk-powder-manufacturer", "money:donkey-milk-powder-for-cosmetic-manufacturers", "country:uae", "country:france"],
  },
  {
    slug: "oem-donkey-milk-powder-manufacturer",
    kind: "money",
    title: "OEM Donkey Milk Powder Manufacturer",
    intro:
      "OEM donkey milk powder manufacturer - full contract manufacturing of donkey milk powder and finished formats. Rudra Dairy & Farm is your B2B OEM partner for cosmetic and nutraceutical lines.",
    sections: [
      { heading: "Contract Manufacturing, End to End", body: "Beyond powder, our OEM service covers formulation support, blending, filling and packing of donkey-milk-based products. Brands get a manufacturing partner with export capacity and certifications, not just a raw-material supplier." },
      { heading: "OEM vs Private Label", body: "Private label uses our standard formula under your label; OEM lets you specify formula, format and pack. Both are built on the same certified facility and quality system." },
    ],
    specs: [
      { label: "Service", value: "OEM / Contract manufacturing" },
      { label: "Capabilities", value: "Powder, blends, filling, packing" },
      { label: "MOQ", value: "Project-based" },
      { label: "Certifications", value: "FSSAI, ISO 22000, HACCP, IEC" },
    ],
    faqs: [
      { q: "Do you formulate finished cosmetics?", a: "We support formulation and can co-develop; final cosmetic compliance remains with the brand owner per market." },
      { q: "What's the typical OEM lead time?", a: "3-6 weeks including sampling and pack sourcing. Contact us with your spec." },
    ],
    related: ["private-label-donkey-milk-powder", "industry:cosmetics", "money:industrial-donkey-milk-supplier"],
  },
  {
    slug: "donkey-milk-powder-exporter",
    kind: "money",
    title: "Donkey Milk Powder Exporter",
    intro:
      "Donkey milk powder exporter - Rudra Dairy & Farm ships certified donkey milk powder worldwide including UAE, GCC, EU, Korea and Japan. Reliable B2B export with documentation and logistics support.",
    sections: [
      { heading: "Built for Export", body: "We export to cosmetic manufacturers, distributors and ingredient importers across the Middle East, Europe and Asia. Each shipment is accompanied by certificates, commercial invoice, packing list and support for destination clearance." },
      { heading: "Destinations We Serve", body: "Active export corridors include UAE, Saudi Arabia, Qatar, France, Italy, Germany, South Korea and Japan. See our country pages for market-specific shipping, regulations and industries." },
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Markets", value: "UAE, GCC, EU, Korea, Japan" },
      { label: "Incoterms", value: "FOB / CIF / DAP" },
      { label: "Docs", value: "COA, Invoice, Packing list, Certs" },
      { label: "Capacity", value: "1000+ kg powder / 15 days" },
    ],
    faqs: [
      { q: "Do you handle halal certification for UAE?", a: "We can support halal documentation on request; discuss at quotation." },
      { q: "What are your lead times for export?", a: "Typically 7-14 days ex-works plus transit. Confirm by destination on the country pages." },
    ],
    related: ["country:uae", "country:france", "country:japan", "country:south-korea", "money:industrial-donkey-milk-supplier"],
  },
  {
    slug: "industrial-donkey-milk-supplier",
    kind: "money",
    title: "Industrial Donkey Milk Supplier",
    intro:
      "Industrial donkey milk supplier - consistent, documented, bulk donkey milk and powder for factories and ingredient brands. Capacity, certification and traceability for industrial buyers.",
    sections: [
      { heading: "Supply at Industrial Scale", body: "Rudra Dairy & Farm operates with the capacity to support industrial buyers: 100+ litres fresh milk in 5 days and 1000+ kg powder in 15 days, with batch-level documentation. We are structured as an ingredient supplier, not a consumer brand." },
      { heading: "For Procurement Teams", body: "Procurement managers get a single point of contact, reproducible specifications, and the technical documents (COA, TDS, MSDS, storage and shelf-life guides) needed for supplier qualification." },
    ],
    specs: [
      { label: "Fresh milk", value: "100+ L / 5 days" },
      { label: "Powder", value: "1000+ kg / 15 days" },
      { label: "Forms", value: "Fresh, spray-dried, freeze-dried" },
      { label: "Quality", value: "Batch COA + traceability" },
    ],
    faqs: [
      { q: "Can you meet recurring monthly volume?", a: "Yes - we set up a production schedule against a framework PO. Talk to us about your annual requirement." },
      { q: "What qualifies you as a supplier?", a: "FSSAI, ISO 22000, HACCP and IEC registration, plus per-batch COA and traceability. See certifications." },
    ],
    related: ["money:donkey-milk-powder-exporter", "guide:quality-control", "guide:coa-guide", "industry:research-laboratory"],
  },
];

// ---------------------------------------------------------------------------
// INDUSTRY PAGES
// ---------------------------------------------------------------------------
export const INDUSTRY_PAGES: CommercialEntry[] = [
  {
    slug: "cosmetics",
    kind: "industry",
    title: "Donkey Milk for the Cosmetics Industry",
    intro:
      "How the cosmetics industry uses donkey milk powder - from creams and serums to soaps and masks. Bulk cosmetic-grade supply with documentation for skin-care manufacturers.",
    sections: [
      { heading: "Donkey Milk in Modern Cosmetics", body: "Donkey milk's protein and lipid profile makes it a sought-after natural ingredient in premium skincare. Brands use it in creams, lotions, serums, masks, cleansers and soaps for its skin-conditioning and softening properties." },
      { heading: "Sub-applications", body: "Creams, lotions, serums, masks, cleansers, soaps - each has its own formulation note. Explore our application pages for donkey milk powder in soap, face cream, moisturiser, face wash and more." },
    ],
    specs: [
      { label: "Typical use", value: "1-10% in finished product" },
      { label: "Grade", value: "Cosmetic & Food" },
      { label: "Forms", value: "Powder (spray / freeze-dried)" },
    ],
    faqs: [
      { q: "Is donkey milkpowder stable in emulsions?", a: "Yes when added to the water phase with a suitable preservative; validate in a pilot batch." },
    ],
    related: ["application:face-cream", "application:soap", "application:serum", "money:donkey-milk-powder-for-cosmetic-manufacturers"],
  },
  {
    slug: "pharmaceutical",
    kind: "industry",
    title: "Donkey Milk for the Pharmaceutical Industry",
    intro:
      "Donkey milk for pharmaceutical and derma applications - high-purity powder for research and topical formulations, supplied with full documentation and traceability.",
    sections: [
      { heading: "Pharma-Grade Sourcing", body: "Pharmaceutical developers use donkey milk powder in topical and derma formulations and as a research substrate. We supply documented, traceable material suitable for qualification, with COA, MSDS and specification sheets." },
      { heading: "Quality Expectations", body: "Pharma buyers require tight specs and batch consistency. Our freeze-dried grade offers the highest native-protein retention for sensitive work." },
    ],
    specs: [
      { label: "Grade", value: "Pharma-grade on request" },
      { label: "Forms", value: "Freeze-dried preferred" },
      { label: "Docs", value: "COA, MSDS, TDS" },
    ],
    related: ["industry:research-laboratory", "money:freeze-dried-donkey-milk-powder-manufacturer", "guide:coa-guide"],
  },
  {
    slug: "nutraceutical",
    kind: "industry",
    title: "Donkey Milk for the Nutraceutical Industry",
    intro:
      "Donkey milk powder for nutraceuticals - capsules, functional foods and dietary supplements. Bulk food-grade powder with consistent composition for supplement brands.",
    sections: [
      { heading: "Nutraceutical Applications", body: "Donkey milk powder is used in nutraceutical capsules and functional foods. Its gentle, hypoallergenic reputation makes it attractive for premium supplement lines. We supply food-grade powder with the documentation supplement brands need." },
      { heading: "Formats", body: "Powder for encapsulation, blending into functional foods, and as a base for drink mixes. See our nutraceutical capsules and functional food application pages." },
    ],
    specs: [
      { label: "Grade", value: "Food grade" },
      { label: "Forms", value: "Spray / freeze-dried" },
      { label: "Use", value: "Capsules, functional food" },
    ],
    related: ["application:nutraceutical-capsules", "application:functional-food", "money:freeze-dried-donkey-milk-powder-manufacturer"],
  },
  {
    slug: "research-laboratory",
    kind: "industry",
    title: "Donkey Milk for Research Laboratories",
    intro:
      "Donkey milk powder for research laboratories - reproducible, documented material for compositional and formulation studies, with per-batch COA and traceability.",
    sections: [
      { heading: "Research-Grade Material", body: "Universities and R&D labs use donkey milk to study composition, stability and bioactivity. We provide small packs (0.5-1 kg) of freeze-dried powder with full analytical documentation to support reproducible research." },
      { heading: "Documentation for Papers", body: "Each batch ships with COA, specification and traceability - the details methods sections and material-transfer agreements typically require." },
    ],
    specs: [
      { label: "Pack", value: "0.5 / 1 kg" },
      { label: "Grade", value: "Research / freeze-dried" },
      { label: "Docs", value: "COA, TDS, traceability" },
    ],
    related: ["guide:quality-control", "guide:coa-guide", "money:freeze-dried-donkey-milk-powder-manufacturer"],
  },
  {
    slug: "private-label-manufacturers",
    kind: "industry",
    title: "Donkey Milk for Private Label Manufacturers",
    intro:
      "Donkey milk supply for private label manufacturers - launch a donkey-milk line under your brand with certified B2B manufacturing, low MOQs and full documentation.",
    sections: [
      { heading: "A Turnkey Ingredient Partner", body: "Private label manufacturers need a supplier who can deliver consistent product, custom packs and the paperwork to qualify a new SKU fast. That is our private label and OEM service." },
      { heading: "Speed to Shelf", body: "From 25 kg MOQ, custom labelling and 2-3 week lead time, brands can test the donkey-milk category without capital-intensive manufacturing." },
    ],
    specs: [
      { label: "MOQ", value: "25 kg" },
      { label: "Service", value: "Private label + OEM" },
      { label: "Lead time", value: "2-3 weeks" },
    ],
    related: ["private-label-donkey-milk-powder", "oem-donkey-milk-powder-manufacturer", "money:donkey-milk-powder-for-cosmetic-manufacturers"],
  },
];

// ---------------------------------------------------------------------------
// APPLICATION PAGES
// ---------------------------------------------------------------------------
const APP_SPEC: SpecRow[] = [
  { label: "Form", value: "Spray / freeze-dried powder" },
  { label: "Use level", value: "1-10% finished product" },
  { label: "Pack", value: "1 / 5 / 25 kg" },
  { label: "Certifications", value: "FSSAI, ISO, HACCP" },
];

function appPage(slug: string, product: string, body: string, extraRelated: string[] = []): CommercialEntry {
  return {
    slug,
    kind: "application",
    title: `Donkey Milk Powder for ${product}`,
    intro: `Donkey milk powder for ${product.toLowerCase()} - bulk cosmetic/food-grade powder for manufacturers. Consistent composition, documentation and low MOQ from Rudra Dairy & Farm.`,
    sections: [
      { heading: `Donkey Milk Powder in ${product}`, body },
      { heading: "Formulation Guidance", body: `Add our donkey milk powder to the water phase of your ${product.toLowerCase()} formulation at 1-10% depending on the desired claim. Validate preservation and stability in a pilot batch before scale-up.` },
    ],
    specs: APP_SPEC,
    faqs: [
      { q: `Is donkey milk powder suitable for ${product.toLowerCase()}?`, a: "Yes - it is widely used in premium formulations for its skin-conditioning properties. Request a sample to validate in your base." },
      { q: "What pack sizes are available?", a: "1 kg, 5 kg and 25 kg, with private-label options from 25 kg." },
    ],
    related: ["money:donkey-milk-powder-for-cosmetic-manufacturers", "industry:cosmetics", ...extraRelated],
  };
}

export const APPLICATION_PAGES: CommercialEntry[] = [
  appPage("soap", "Soap", "Donkey milk powder gives soap a creamy, skin-softening finish and is easy to scale versus liquid milk. Ideal for cold-process, melt-and-pour and syndet bars."),
  appPage("face-cream", "Face Cream", "A hero ingredient in premium face creams, donkey milk powder supports a soft, conditioned skin feel and pairs with ceramides and hyaluronic acid."),
  appPage("moisturizer", "Moisturizer", "Donkey milk powder adds a lightly nourishing, non-greasy emollience to body and face moisturisers."),
  appPage("face-wash", "Face Wash", "In gentle cleansers and face washes, donkey milk powder contributes a mild, soothing character suitable for sensitive skin lines."),
  appPage("shampoo", "Shampoo", "Donkey milk powder is used in premium shampoos for a soft,conditioned after-feel; add in the cool-down phase to protect proteins."),
  appPage("conditioner", "Conditioner", "In conditioners, donkey milk powder supports a smooth, detangled finish in salon-grade and natural formulations."),
  appPage("baby-products", "Baby Products", "Donkey milk's gentle reputation makes it attractive for premium baby care; we supply documented, traceable material and recommend paediatric formulation review.", ["industry:nutraceutical"]),
  appPage("nutraceutical-capsules", "Nutraceutical Capsules", "Food-grade donkey milk powder for encapsulation and supplement blends, with the documentation nutraceutical brands require.", ["industry:nutraceutical", "application:functional-food"]),
  appPage("functional-food", "Functional Food", "Donkey milk powder as a base for functional foods and drink mixes, supplied food-grade with full traceability.", ["industry:nutraceutical", "application:nutraceutical-capsules"]),
  // a couple extra sub-apps referenced by industry page
  appPage("serum", "Serum", "High-active serums use freeze-dried donkey milk powder for maximum native-protein retention and a light, fast-absorbing feel."),
  appPage("mask", "Mask", "Donkey milk powder features in wash-off and leave-on masks for its softening, conditioning effect."),
  appPage("cleanser", "Cleanser", "Gentle cleansers use donkey milk powder for a mild, soothing wash experience in sensitive-skin lines."),
];

// ---------------------------------------------------------------------------
// COUNTRY / EXPORT PAGES
// ---------------------------------------------------------------------------
export const COUNTRY_PAGES: CommercialEntry[] = [
  {
    slug: "france",
    kind: "country",
    title: "Donkey Milk Powder Exporter to France",
    intro:
      "Export donkey milk powder to France - shipping, cosmetic regulation (EU 1223/2009), industries served and how Rudra Dairy & Farm supports French cosmetic and ingredient buyers.",
    sections: [
      { heading: "Shipping to France", body: "We ship to France via air or sea freight to major hubs (Paris, Lyon, Marseille). Incoterms FOB/CIF/DAP available. Transit from India is typically 10-18 days by sea, 3-5 days by air." },
      { heading: "Regulations (typical)", body: "Cosmetics placed on the French/EU market must comply with EU Regulation 1223/2009 - responsible person, CPNP notification, label in French, and a Product Information File. We supply COA, specification and MSDS to support your dossier. Confirm exact requirements with your regulatory advisor; this is guidance, not legal advice." },
      { heading: "Industries We Serve", body: "Cosmetic manufacturers, private-label skincare brands, ingredient distributors and R&D labs across France's mature cosmetics sector." },
    ],
    specs: [
      { label: "Transit", value: "Air 3-5d / Sea 10-18d" },
      { label: "Framework", value: "EU 1223/2009 cosmetics" },
      { label: "Label", value: "French required" },
      { label: "Industries", value: "Cosmetics, private label, R&D" },
    ],
    faqs: [
      { q: "Do you help with CPNP notification?", a: "We provide the ingredient documentation; the responsible person handles CPNP. We can point you to brokers." },
      { q: "Can you supply halal or kosher?", a: "Discuss at quotation; we support documentation where available." },
    ],
    ctaLabel: "Get France Quote",
    related: ["donkey-milk-powder-exporter", "industry:cosmetics", "germany", "italy"],
  },
  {
    slug: "italy",
    kind: "country",
    title: "Donkey Milk Powder Exporter to Italy",
    intro:
      "Export donkey milk powder to Italy - logistics, EU cosmetic compliance, industries served and B2B supply from Rudra Dairy & Farm for Italian buyers.",
    sections: [
      { heading: "Shipping to Italy", body: "Air and sea freight to Milan, Rome and Genoa. DAP/CIFor FOB terms. Sea transit ~10-18 days, air 3-5 days." },
      { heading: "Regulations (typical)", body: "Same EU 1223/2009 framework as France: responsible person, CPNP, Italian labelling, PIF. We supply the technical dossier components (COA, MSDS, TDS)." },
      { heading: "Industries We Serve", body: "Italy has a strong natural-cosmetics and derma sector; we serve cosmetic manufacturers, soap makers and private-label brands." },
    ],
    specs: [
      { label: "Transit", value: "Air 3-5d / Sea 10-18d" },
      { label: "Framework", value: "EU 1223/2009" },
      { label: "Label", value: "Italian required" },
      { label: "Industries", value: "Cosmetics, soap, private label" },
    ],
    faqs: [
      { q: "Do you ship small R&D quantities to Italy?", a: "Yes - freeze-dried packs from 0.5 kg for labs and formulators." },
    ],
    ctaLabel: "Get Italy Quote",
    related: ["donkey-milk-powder-exporter", "industry:cosmetics", "france", "germany"],
  },
  {
    slug: "germany",
    kind: "country",
    title: "Donkey Milk Powder Exporter to Germany",
    intro:
      "Export donkey milk powder to Germany - shipping, EU compliance, natural-cosmetics industries and B2B supply for German buyers from Rudra Dairy & Farm.",
    sections: [
      { heading: "Shipping to Germany", body: "Freight to Hamburg, Frankfurt, Munich. Sea ~12-20 days, air 3-5 days. DAP/FOB/CIF." },
      { heading: "Regulations (typical)", body: "EU 1223/2009 with German labelling; Germany also values natural/clean-label claims - ensure substantiation. We supply COA, MSDS, TDS." },
      { heading: "Industries We Serve", body: "Germany's large natural-cosmetics and contract-manufacturing base: OEM skincare, private label, nutraceutical and R&D." },
    ],
    specs: [
      { label: "Transit", value: "Air 3-5d / Sea 12-20d" },
      { label: "Framework", value: "EU 1223/2009" },
      { label: "Label", value: "German required" },
      { label: "Industries", value: "Natural cosmetics, OEM, nutraceutical" },
    ],
    faqs: [
      { q: "Can you support natural cosmetics claims?", a: "We provide composition data; claim substantiation remains with the brand per EU rules." },
    ],
    ctaLabel: "Get Germany Quote",
    related: ["donkey-milk-powder-exporter", "industry:nutraceutical", "france", "italy"],
  },
  {
    slug: "uae",
    kind: "country",
    title: "Donkey Milk Powder Exporter to UAE",
    intro:
      "Export donkey milk powder to the UAE - Dubai/Sharjah shipping, municipality/halal requirements, industries served and B2B supply for UAE buyers from Rudra Dairy & Farm.",
    sections: [
      { heading: "Shipping to UAE", body: "Fast air freight to Dubai and Abu Dhabi (3-5 days) and sea to Jebel Ali (~10-14 days). UAE is our nearest major export market." },
      { heading: "Regulations (typical)", body: "Cosmetics are regulated by local municipality (e.g. Dubai Municipality) and ESMA standards; halal documentation is often expected. We support halal and certification paperwork on request. Confirm with your importer." },
      { heading: "Industries We Serve", body: "Luxury skincare brands, private-label manufacturers, soap makers and distributors serving the GCC." },
    ],
    specs: [
      { label: "Transit", value: "Air 3-5d / Sea 10-14d" },
      { label: "Framework", value: "Municipality / ESMA" },
      { label: "Note", value: "Halal docs often expected" },
      { label: "Industries", value: "Luxury skincare, private label, GCC" },
    ],
    faqs: [
      { q: "Do you provide halal certification?", a: "We can support halal documentation on request - discuss at quotation." },
      { q: "Is UAE your fastest market?", a: "Yes - geographic proximity makes it our quickest export corridor." },
    ],
    ctaLabel: "Get UAE Quote",
    related: ["donkey-milk-powder-exporter", "industry:cosmetics", "japan", "south-korea"],
  },
  {
    slug: "japan",
    kind: "country",
    title: "Donkey Milk Powder Exporter to Japan",
    intro:
      "Export donkey milk powder to Japan - shipping, PMDA/import requirements, documentation expectations and B2B supply for Japanese buyers from Rudra Dairy & Farm.",
    sections: [
      { heading: "Shipping to Japan", body: "Air to Tokyo/Osaka (4-6 days), sea to Yokohama (~18-25 days). Japanese buyers expect precise documentation and consistent quality." },
      { heading: "Regulations (typical)", body: "Cosmetics are regulated under the Pharmaceutical and Medical Device Act (PMDA); importers handle notification. Japanese buyers typically require COA, specifications, traceability and sometimes allergen/test data. We supply full batch documentation." },
      { heading: "Industries We Serve", body: "Luxury cosmetics, functional foods, research laboratories and premium ingredient distributors." },
    ],
    specs: [
      { label: "Transit", value: "Air 4-6d / Sea 18-25d" },
      { label: "Framework", value: "PMDA (cosmetics)" },
      { label: "Docs", value: "COA, specs, traceability" },
      { label: "Industries", value: "Luxury cosmetics, F&B, R&D" },
    ],
    faqs: [
      { q: "What docs do Japanese buyers want?", a: "COA, specification sheet, traceability and MSDS as a baseline; some request additional testing - we can advise." },
    ],
    ctaLabel: "Get Japan Quote",
    related: ["donkey-milk-powder-exporter", "industry:nutraceutical", "uae", "south-korea"],
  },
  {
    slug: "south-korea",
    kind: "country",
    title: "Donkey Milk Powder Exporter to South Korea",
    intro:
      "Export donkey milk powder to South Korea - shipping, MFDS requirements, K-beauty OEM/ingredient buyers and B2B supply from Rudra Dairy & Farm.",
    sections: [
      { heading: "Shipping to Korea", body: "Air to Incheon (4-6 days), sea (~16-22 days). Korea's advanced cosmetics industry sources specialty ingredients globally." },
      { heading: "Regulations (typical)", body: "Cosmetics are regulated by MFDS; OEM/contract manufacturers handle notification. We provide COA, MSDS and specification to support import. Confirm with your Korean importer." },
      { heading: "Industries We Serve", body: "K-beauty brands, OEM cosmetic manufacturers, ingredient importers and contract manufacturers." },
    ],
    specs: [
      { label: "Transit", value: "Air 4-6d / Sea 16-22d" },
      { label: "Framework", value: "MFDS (Korea)" },
      { label: "Buyers", value: "K-beauty, OEM, importers" },
      { label: "Industries", value: "Cosmetics, OEM" },
    ],
    faqs: [
      { q: "Do you work with Korean OEM manufacturers?", a: "Yes - our OEM and private-label service supports K-beauty contract manufacturing." },
    ],
    ctaLabel: "Get Korea Quote",
    related: ["donkey-milk-powder-exporter", "oem-donkey-milk-powder-manufacturer", "uae", "japan"],
  },
];

// ---------------------------------------------------------------------------
// GUIDE PAGES (for procurement managers - real, useful content)
// ---------------------------------------------------------------------------
export const GUIDE_PAGES: CommercialEntry[] = [
  {
    slug: "manufacturing-guide",
    kind: "guide",
    title: "Donkey Milk Powder Manufacturing Guide",
    intro:
      "How donkey milk powder is made - from fresh milk reception to spray and freeze drying. A manufacturing guide for procurement managers qualifying a supplier.",
    sections: [
      { heading: "From Farm to Powder", body: "Fresh donkey milk is chilled on collection, standardised and either spray-dried (cost-effective, heat-exposed) or freeze-dried (low-temperature, maximum protein retention). Each step is controlled for hygiene, moisture and microbial load." },
      { heading: "What to Ask a Supplier", body: "Request the process type, residual moisture, solubility, microbial limits and per-batch COA. Reproducibility matters more than a single hero spec." },
    ],
    faqs: [
      { q: "Spray vs freeze dried - which for my use?", a: "Freeze-dried for premium skincare/nutraceuticals/R&D; spray-dried for high-volume soap and commodity use." },
    ],
    related: ["freeze-drying-process", "quality-control", "coa-guide"],
  },
  {
    slug: "storage-guide",
    kind: "guide",
    title: "Donkey Milk Powder Storage Guide",
    intro:
      "How to store donkey milk powder - temperature, humidity, light and handling guidance to protect composition and shelf life.",
    sections: [
      { heading: "Storage Conditions", body: "Store sealed in a cool, dry place below 25°C, away from direct light and strong odours. Once opened, reseal tightly and use within the period stated on the COA. Avoid humidity to prevent caking." },
      { heading: "Handling", body: "Use clean, dry utensils. Avoid temperature cycling. Keep away from contaminants." },
    ],
    faqs: [
      { q: "Does it need refrigeration?", a: "Not if sealed and cool/dry, but refrigeration after opening extends quality. Follow the COA." },
    ],
    related: ["shelf-life", "packaging-guide", "quality-control"],
  },
  {
    slug: "shelf-life",
    kind: "guide",
    title: "Donkey Milk Powder Shelf Life",
    intro:
      "Typical shelf life of donkey milk powder, factors that affect it, and how to read a COA for expiry and storage guidance.",
    sections: [
      { heading: "Typical Shelf Life", body: "Sealed donkey milk powder stores 18-24 months at cool, dry conditions. Freeze-dried grades often hold native quality longer. Actual life is set per batch on the COA." },
      { heading: "What Shortens It", body: "Moisture, heat, light and oxygen. Proper packaging (foil, low AW) and cool storage protect it." },
    ],
    faqs: [
      { q: "How do I know the expiry?", a: "Read the batch COA - it states manufacture date, recommended use-by and storage." },
    ],
    related: ["storage-guide", "packaging-guide", "coa-guide"],
  },
  {
    slug: "import-guide",
    kind: "guide",
    title: "Donkey Milk Powder Import Guide",
    intro:
      "Importing donkey milk powder - documents, duties and market steps for buyers in the EU, UAE, Japan and Korea. A practical guide for procurement.",
    sections: [
      { heading: "Core Documents", body: "Commercial invoice, packing list, certificate of analysis, specification sheet, MSDS, certificate of origin and any halal/health certificates your market requires." },
      { heading: "By Market", body: "EU: CE/cosmetics 1223/2009 + CPNP. UAE: municipality + halal. Japan: PMDA. Korea: MFDS. See our country pages for detail. A licensed customs broker avoids delays." },
    ],
    faqs: [
      { q: "Who handles customs clearance?", a: "Your importer/broker; we supply the shipment documents they need." },
    ],
    related: ["coa-guide", "msds-guide", "country:france", "country:uae"],
  },
  {
    slug: "coa-guide",
    kind: "guide",
    title: "Certificate of Analysis (COA) Guide",
    intro:
      "How to read a donkey milk powder COA - parameters, limits and what procurement should check before qualifying a supplier.",
    sections: [
      { heading: "Key COA Parameters", body: "Moisture, protein, fat, lactose, microbial limits (TPC, coliforms, yeast/mould), heavy metals and solubility. Compare against your spec sheet." },
      { heading: "Using the COA", body: "The COA is your batch-level proof of quality. Keep it with the PIF/import file. Inconsistent COAs across batches are a red flag." },
    ],
    faqs: [
      { q: "Is a COA the same as a specification?", a: "No - the spec is the agreed standard; the COA is the measured result for a specific batch." },
    ],
    related: ["quality-control", "import-guide", "msds-guide"],
  },
  {
    slug: "msds-guide",
    kind: "guide",
    title: "MSDS Guide for Donkey Milk Powder",
    intro:
      "Material Safety Data Sheet (MSDS/SDS) for donkey milk powder - what it covers, why procurement and EHS teams need it, and how we supply it.",
    sections: [
      { heading: "What the MSDS Covers", body: "Identification, composition, first-aid, handling/storage, exposure controls, stability and regulatory info. Required for workplace safety and many imports." },
      { heading: "Getting Ours", body: "We issue an SDS with every shipment and on request for qualification." },
    ],
    faqs: [
      { q: "Is MSDS needed for food-grade powder?", a: "Yes - EHS and import authorities commonly require it regardless of grade." },
    ],
    related: ["coa-guide", "import-guide", "packaging-guide"],
  },
  {
    slug: "packaging-guide",
    kind: "guide",
    title: "Donkey Milk Powder Packaging Guide",
    intro:
      "Packaging options for donkey milk powder - pack sizes, materials and labelling for B2B and private-label supply.",
    sections: [
      { heading: "Pack Sizes", body: "Standard 1 kg, 5 kg and 25 kg foil-sealed packs; private label from 100 g to 25 kg with your artwork. Foil/laminated material protects from moisture and light." },
      { heading: "Labelling", body: "Bulk packs carry batch, net weight and storage. Private-label packs follow your market's labelling rules (see country pages)." },
    ],
    faqs: [
      { q: "Can you pack under our brand?", a: "Yes - private label from 25 kg, custom sizes and artwork." },
    ],
    related: ["private-label-donkey-milk-powder", "storage-guide", "msds-guide"],
  },
  {
    slug: "freeze-drying-process",
    kind: "guide",
    title: "Freeze Drying Process for Donkey Milk",
    intro:
      "The freeze-drying (lyophilisation) process for donkey milk - how low-temperature sublimation preserves native proteins and bioactives.",
    sections: [
      { heading: "The Process", body: "Milk is frozen, then placed under vacuum so ice sublimates directly to vapour. Because liquid water never forms at elevated temperature, heat-sensitive proteins survive far better than in spray drying." },
      { heading: "Why It Matters", body: "For premium skincare, nutraceuticals and research, retained native composition translates to a more effective, reproducible ingredient." },
    ],
    faqs: [
      { q: "Is freeze-dried powder more expensive?", a: "Yes - the process is slower and energy-intensive, but yields higher integrity. Choose by application." },
    ],
    related: ["manufacturing-guide", "quality-control", "money:freeze-dried-donkey-milk-powder-manufacturer"],
  },
  {
    slug: "quality-control",
    kind: "guide",
    title: "Donkey Milk Powder Quality Control",
    intro:
      "Quality control for donkey milk powder - the checks, documentation and systems procurement managers should verify when qualifying a supplier.",
    sections: [
      { heading: "QC Across the Line", body: "Incoming milk testing, in-process moisture/protein monitoring, finished-product microbial and compositional analysis, and batch COA issuance. Systems should follow HACCP and ISO 22000." },
      { heading: "What to Verify", body: "Certifications (FSSAI, ISO, HACCP), per-batch COA, traceability to source, and consistency across shipments. Ask for a sample COA during qualification." },
    ],
    faqs: [
      { q: "Which certifications matter?", a: "FSSAI (India food safety), ISO 22000 (food safety system), HACCP (hazard control), IEC (export). We hold these." },
    ],
    related: ["coa-guide", "manufacturing-guide", "money:industrial-donkey-milk-supplier"],
  },
];

// ---------------------------------------------------------------------------
// LOOKUP
// ---------------------------------------------------------------------------
const ALL: CommercialEntry[] = [
  ...MONEY_PAGES,
  ...INDUSTRY_PAGES,
  ...APPLICATION_PAGES,
  ...COUNTRY_PAGES,
  ...GUIDE_PAGES,
  ...SUPPORTING_PAGES,
  ...RESEARCH_PAGES,
];

export function getEntry(kind: CommercialEntry["kind"], slug: string): CommercialEntry | undefined {
  return ALL.find((e) => e.kind === kind && e.slug === slug);
}

export function allEntries(): CommercialEntry[] {
  return ALL;
}

export const KIND_PATH: Record<CommercialEntry["kind"], string> = {
  money: "/money",
  industry: "/industry",
  application: "/application",
  country: "/export",
  guide: "/guides",
  supporting: "/silo",
  research: "/research",
};

export const KIND_LABEL: Record<CommercialEntry["kind"], string> = {
  money: "Commercial",
  industry: "Industry",
  application: "Application",
  country: "Export",
  guide: "Guide",
  supporting: "Guide",
  research: "Research",
};
