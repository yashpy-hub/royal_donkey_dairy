// Phase 4 - Research Center.
// Technical content targeting R&D managers, cosmetic chemists, procurement
// and universities. Real, substantive copy - not lorem.
import { CommercialEntry } from "./commercialData";

export const RESEARCH_PAGES: CommercialEntry[] = [
  {
    slug: "amino-acid-profile",
    kind: "research",
    title: "Amino Acid Profile of Donkey Milk Powder",
    intro:
      "The amino acid composition of donkey milk powder and why it matters for cosmetic and nutraceutical applications.",
    sections: [
      {
        heading: "Overview",
        body: "Donkey milk protein is rich in essential amino acids with a profile closer to human milk than cow milk. The dominant proteins are caseins and whey fractions including lysozyme and lactoferrin.",
      },
      {
        heading: "Why It Matters",
        body: "Formulators value the balanced essential amino acid profile for skin-conditioning claims and for gentle nutritional products. Exact values vary by batch and diet - see the COA for lot-specific data.",
      },
      {
        heading: "Methodology",
        body: "Amino acid composition is typically measured by hydrolysis followed by ion-exchange or HPLC analysis. Request batch-specific data before specification sign-off.",
      },
    ],
    specs: [
      { label: "Protein type", value: "Casein + whey" },
      { label: "Notable", value: "Lysozyme, lactoferrin" },
      { label: "Comparison", value: "Closer to human milk" },
    ],
    faqs: [
      {
        q: "Is the profile batch-stable?",
        a: "It is consistent within our process controls; always validate against the lot COA.",
      },
    ],
  },
  {
    slug: "protein-composition",
    kind: "research",
    title: "Protein Composition of Donkey Milk",
    intro:
      "Protein fractions in donkey milk - casein-to-whey ratio, lysozyme content and what it means for buyers.",
    sections: [
      {
        heading: "Composition",
        body: "Donkey milk has a relatively high whey-to-casein ratio compared with cow milk, with notably high lysozyme activity - a naturally occurring antimicrobial enzyme.",
      },
      {
        heading: "Application Relevance",
        body: "High lysozyme and lactoferrin content supports preservation-story claims in cosmetics and gentle nutrition positioning in nutraceuticals.",
      },
    ],
  },
  {
    slug: "lysozyme-concentration",
    kind: "research",
    title: "Lysozyme Concentration in Donkey Milk",
    intro:
      "Why donkey milk's naturally high lysozyme concentration is of interest to formulators and researchers.",
    sections: [
      {
        heading: "What Is Lysozyme",
        body: "Lysozyme is an antimicrobial enzyme naturally abundant in donkey milk - far higher than in cow milk. It contributes to the milk's natural hygiene and is of interest for preservation-supporting claims.",
      },
      {
        heading: "Measurement",
        body: "Lysozyme activity is measured by turbidimetric or spectrophotometric assay. Lot-specific values are provided on request with the COA.",
      },
    ],
  },
  {
    slug: "lactose-comparison",
    kind: "research",
    title: "Lactose Content: Donkey vs Other Milks",
    intro:
      "How donkey milk lactose compares with cow, goat and human milk, and implications for sensitive users.",
    sections: [
      {
        heading: "Comparison",
        body: "Donkey milk lactose content is broadly comparable to other milks and similar in proportion to human milk. It remains a dairy lactose and is not suitable for those avoiding lactose.",
      },
      {
        heading: "Takeaway",
        body: "If a lactose-free claim is required, donkey milk powder does not meet it. Label accurately.",
      },
    ],
  },
  {
    slug: "freeze-drying-methodology",
    kind: "research",
    title: "Freeze-Drying Methodology for Donkey Milk Powder",
    intro:
      "How freeze-drying preserves donkey milk's heat-sensitive components versus spray drying.",
    sections: [
      {
        heading: "Process",
        body: "Freeze-drying (lyophilisation) freezes the milk then sublimates ice under vacuum at low temperature, minimising heat damage to proteins and enzymes.",
      },
      {
        heading: "Versus Spray Drying",
        body: "Spray drying is faster and cheaper but exposes milk to higher temperatures. Freeze-dried powder better retains heat-labile fractions such as lysozyme.",
      },
      {
        heading: "Our Process",
        body: "We monitor residual moisture, solubility and microbial load per batch and supply COA with each lot.",
      },
    ],
  },
  {
    slug: "cosmetic-formulation-compatibility",
    kind: "research",
    title: "Cosmetic Formulation Compatibility of Donkey Milk Powder",
    intro:
      "Compatibility considerations when adding donkey milk powder to creams, serums and emulsions.",
    sections: [
      {
        heading: "Phase Behaviour",
        body: "The powder disperses in the water phase. Pre-hydrate before adding to the emulsion to avoid clumping and ensure even distribution.",
      },
      {
        heading: "Preservation",
        body: "As a dairy-derived ingredient it is nutrient-rich; validate preservative efficacy (challenge testing) in the final formula.",
      },
      {
        heading: "Stability",
        body: "Run accelerated and real-time stability; monitor pH, colour and microbiology.",
      },
    ],
  },
  {
    slug: "heat-stability",
    kind: "research",
    title: "Heat Stability of Donkey Milk Powder",
    intro:
      "How processing and formulation temperatures affect donkey milk powder's functional components.",
    sections: [
      {
        heading: "Heat Sensitivity",
        body: "Heat-labile components (notably lysozyme) degrade with high temperature. Freeze-drying and moderate processing temperatures protect them.",
      },
      {
        heading: "Formulation Guidance",
        body: "Keep soaping and emulsion temperatures moderate; avoid prolonged high-heat exposure of the powder.",
      },
    ],
  },
  {
    slug: "reconstitution-guide",
    kind: "research",
    title: "Reconstitution Guide for Donkey Milk Powder",
    intro:
      "How to reconstitute donkey milk powder for lab testing, samples and production.",
    sections: [
      {
        heading: "Ratio",
        body: "Reconstitute with clean, cool water using a 1:9 to 1:10 powder-to-water ratio for a milk-like liquid, adjusting to your process need.",
      },
      {
        heading: "Method",
        body: "Add powder to water gradually with gentle agitation. Use promptly after reconstitution; do not hold reconstituted milk at ambient temperature.",
      },
    ],
  },
  {
    slug: "particle-size",
    kind: "research",
    title: "Particle Size of Donkey Milk Powder",
    intro:
      "Particle-size characteristics of donkey milk powder and their effect on dissolution and handling.",
    sections: [
      {
        heading: "Characteristics",
        body: "Powder particle size affects flow, dusting and dispersion. We can tune particle size within process limits for OEM partners.",
      },
      {
        heading: "Measurement",
        body: "Measured by laser diffraction; lot-specific values available on request.",
      },
    ],
  },
  {
    slug: "moisture-specification",
    kind: "research",
    title: "Moisture Specification for Donkey Milk Powder",
    intro:
      "Why low residual moisture matters for shelf life and microbial stability of donkey milk powder.",
    sections: [
      {
        heading: "Target",
        body: "We target residual moisture below 4% to maximise shelf life and inhibit microbial growth.",
      },
      {
        heading: "Control",
        body: "Moisture is verified per batch on the COA; store in moisture-barrier packaging away from humidity.",
      },
    ],
    specs: [
      { label: "Residual moisture", value: "< 4%" },
      { label: "Packaging", value: "Moisture-barrier" },
    ],
  },
];
