// Supporting pages (silo children) for commercial hub pages.
// Each renders via DynamicCommercialPage with kind="supporting".
// parent links the hub for breadcrumb + cross-links.
import { CommercialEntry } from "./commercialData";

export const SUPPORTING_PAGES: CommercialEntry[] = [
  // ===== SILO: Donkey Milk Powder for Cosmetic Manufacturers =====
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--manufacturing-process",
    kind: "supporting",
    title: "Donkey Milk Powder Manufacturing Process for Cosmetics",
    intro:
      "How Rudra Dairy & Farm produces cosmetic-grade donkey milk powder - from raw milk reception to low-moisture powder ready for skincare formulations.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "From Milk to Powder",
        body: "Fresh donkey milk is chilled on collection, filtered and standardised, then dried by spray or freeze-drying under hygienic, controlled conditions. Each step is logged for traceability.",
      },
      {
        heading: "Hygiene Controls",
        body: "Production runs under HACCP and ISO 22000. Equipment is CIP-cleaned between batches and environmental monitoring reduces contamination risk for cosmetic use.",
      },
      {
        heading: "Why It Matters for Formulators",
        body: "Gentle drying preserves the native protein and lactose fractions associated with donkey milk's skin-conditioning properties, giving formulators a consistent, reproducible ingredient.",
      },
    ],
    specs: [
      { label: "Drying", value: "Spray / Freeze-dried" },
      { label: "Inlet temp", value: "Controlled, low" },
      { label: "Moisture", value: "< 4%" },
      { label: "Standards", value: "HACCP, ISO 22000" },
    ],
    faqs: [
      {
        q: "Is the process cosmetic-grade?",
        a: "Yes - produced under hygienic controls with documentation suitable for cosmetic QA.",
      },
      {
        q: "Is it traceable?",
        a: "Each batch is logged from farm to powder with a COA and traceability record.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--formulation-guide",
    kind: "supporting",
    title: "Donkey Milk Powder Formulation Guide for Cosmetics",
    intro:
      "Practical formulation guidance for cosmetic chemists using donkey milk powder in creams, lotions, serums and masks.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "Where It Goes in the Formula",
        body: "Donkey milk powder disperses in the water phase. Pre-dissolve in a portion of water before adding to the emulsion to avoid clumping.",
      },
      {
        heading: "Use Levels",
        body: "Typical use levels in finished cosmetics range from 1% to 10% depending on the claim and format. Start low and increase in pilot batches.",
      },
      {
        heading: "Compatibility",
        body: "Validate compatibility with your preservative system and active ingredients in a small pilot before full-scale production.",
      },
    ],
    faqs: [
      {
        q: "Can it be used in leave-on products?",
        a: "Yes - validate in your preserved formulation like any dairy-derived ingredient.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--recommended-usage",
    kind: "supporting",
    title: "Recommended Usage Rate of Donkey Milk Powder in Cosmetics",
    intro:
      "Recommended usage percentages of donkey milk powder by product type - creams, serums, masks, cleansers and soaps.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "Typical Ranges",
        body: "Creams/lotions 2-5%, serums 1-3%, rinse-off masks 3-8%, cleansers 1-3%, soaps 1-4%. These are starting points - adjust to claim and sensory target.",
      },
      {
        heading: "Claim Substantiation",
        body: "Keep batch records and COAs to support any donkey-milk claim you make on pack.",
      },
    ],
    specs: [
      { label: "Creams / lotions", value: "2-5%" },
      { label: "Serums", value: "1-3%" },
      { label: "Masks (rinse-off)", value: "3-8%" },
      { label: "Cleansers", value: "1-3%" },
      { label: "Soaps", value: "1-4%" },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--stability-testing",
    kind: "supporting",
    title: "Stability Testing of Donkey Milk Powder in Cosmetic Formulas",
    intro:
      "How to stability-test donkey milk powder formulations for shelf life, pH and microbial safety.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "What to Test",
        body: "Accelerated and real-time stability at 25C/40C, pH drift, colour/odour change, and microbial challenge testing per your market's cosmetic rules.",
      },
      {
        heading: "Documentation",
        body: "Keep stability reports with the product information file (PIF) for audit and import purposes.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--shelf-life",
    kind: "supporting",
    title: "Shelf Life of Donkey Milk Powder for Cosmetics",
    intro:
      "Typical shelf life, storage and packaging conditions that keep donkey milk powder stable for cosmetic manufacturing.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "Shelf Life",
        body: "24 months sealed in a cool, dry place away from light. Once opened, use promptly and keep tightly closed.",
      },
      {
        heading: "Packaging",
        body: "Supplied in food-grade laminated pouches or drums with moisture barrier to protect low residual moisture.",
      },
    ],
    specs: [
      { label: "Sealed shelf life", value: "24 months" },
      { label: "Storage", value: "Cool, dry, away from light" },
      { label: "After opening", value: "Use promptly, reseal" },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--packaging-options",
    kind: "supporting",
    title: "Packaging Options for Donkey Milk Powder",
    intro:
      "Pack sizes and packaging formats for donkey milk powder - from samples to 25 kg for manufacturers.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "Available Packs",
        body: "Samples from 500 g, 1 kg, 5 kg and 25 kg. Private-label and OEM packing available under your brand from 25 kg batches.",
      },
      {
        heading: "Barrier",
        body: "Moisture-barrier laminate with desiccant option for long-haul export.",
      },
    ],
    specs: [
      { label: "Samples", value: "from 500 g" },
      { label: "Standard", value: "1 kg / 5 kg / 25 kg" },
      { label: "MOQ", value: "5 kg" },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--storage",
    kind: "supporting",
    title: "Storage Guidelines for Donkey Milk Powder",
    intro:
      "How manufacturers should store donkey milk powder to preserve quality and avoid caking or microbial growth.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "Conditions",
        body: "Store below 25C, relative humidity below 60%, away from strong odours. Avoid temperature cycling that can cause condensation.",
      },
      {
        heading: "Handling",
        body: "Use clean, dry utensils. Reseal immediately after use.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--coa-explained",
    kind: "supporting",
    title: "Certificate of Analysis (COA) Explained for Donkey Milk Powder",
    intro:
      "How to read a donkey milk powder COA - parameters, limits and what cosmetic buyers should check.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "Key Parameters",
        body: "Moisture, protein, fat, lactose, microbial limits (TPC, coliforms, yeast/mould), heavy metals and solubility. Compare against your agreed specification.",
      },
      {
        heading: "Using the COA",
        body: "Keep it with the PIF/import file. Inconsistent COAs across batches are a red flag - request consistency data from suppliers.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--msds-guide",
    kind: "supporting",
    title: "MSDS Guide for Donkey Milk Powder",
    intro:
      "Safety data sheet guidance for handling donkey milk powder in a cosmetic manufacturing facility.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "What the MSDS Covers",
        body: "Identification, composition, first-aid, handling/storage, exposure controls and disposal. Required for incoming-goods and EHS files.",
      },
      {
        heading: "Allergen Note",
        body: "Contains milk (dairy) proteins - label and handle accordingly for staff with dairy sensitivity.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-cosmetic-manufacturers--export-documentation",
    kind: "supporting",
    title: "Export Documentation for Donkey Milk Powder",
    intro:
      "Documents needed to import donkey milk powder - COA, health certificate, commercial invoice, packing list and certificate of origin.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-cosmetic-manufacturers",
      label: "Donkey Milk Powder for Cosmetic Manufacturers",
    },
    sections: [
      {
        heading: "Core Documents",
        body: "Commercial invoice, packing list, COA, MSDS, bill of lading/air waybill, and certificate of origin. Some markets need a health/veterinary certificate.",
      },
      {
        heading: "Incoterms",
        body: "We ship on FOB, CIF or DAP depending on destination - confirm at quotation.",
      },
    ],
  },

  // ===== SILO: Private Label Donkey Milk Powder =====
  {
    slug: "private-label-donkey-milk-powder--how-it-works",
    kind: "supporting",
    title: "How Private Label Donkey Milk Powder Works",
    intro:
      "The private-label process for donkey milk powder - from spec agreement to branded delivery.",
    parent: {
      kind: "money",
      slug: "private-label-donkey-milk-powder",
      label: "Private Label Donkey Milk Powder",
    },
    sections: [
      {
        heading: "Process",
        body: "Agree specification and pack format, approve a sample, then we produce and pack under your brand from 25 kg batches.",
      },
      {
        heading: "Lead Time",
        body: "Sample 7-10 days; production 15-25 days after approval, depending on volume.",
      },
    ],
  },
  {
    slug: "private-label-donkey-milk-powder--moq-pricing",
    kind: "supporting",
    title: "Private Label MOQ and Pricing",
    intro:
      "Minimum order quantities and pricing structure for private-label donkey milk powder.",
    parent: {
      kind: "money",
      slug: "private-label-donkey-milk-powder",
      label: "Private Label Donkey Milk Powder",
    },
    sections: [
      {
        heading: "MOQ",
        body: "Private label starts at 25 kg per batch. Larger volumes unlock better unit pricing.",
      },
      {
        heading: "Pricing",
        body: "Quoted per kg ex-works or delivered, depending on Incoterms and destination.",
      },
    ],
    specs: [
      { label: "MOQ", value: "25 kg" },
      { label: "Pack", value: "Your brand" },
      { label: "Lead time", value: "15-25 days" },
    ],
  },
  {
    slug: "private-label-donkey-milk-powder--packaging-design",
    kind: "supporting",
    title: "Private Label Packaging and Design",
    intro:
      "Packaging and design options for private-label donkey milk powder under your brand.",
    parent: {
      kind: "money",
      slug: "private-label-donkey-milk-powder",
      label: "Private Label Donkey Milk Powder",
    },
    sections: [
      {
        heading: "Formats",
        body: "Pouches, jars, sachets and drums with your artwork. We support print-ready files and can advise on moisture-barrier materials.",
      },
    ],
  },
  {
    slug: "private-label-donkey-milk-powder--compliance",
    kind: "supporting",
    title: "Private Label Compliance and Documentation",
    intro:
      "Compliance documents you receive with private-label donkey milk powder orders.",
    parent: {
      kind: "money",
      slug: "private-label-donkey-milk-powder",
      label: "Private Label Donkey Milk Powder",
    },
    sections: [
      {
        heading: "Documents",
        body: "COA, MSDS, specification sheet and traceability record per batch. You remain responsible for final product registration in your market.",
      },
    ],
  },
  {
    slug: "private-label-donkey-milk-powder--lead-times",
    kind: "supporting",
    title: "Private Label Lead Times",
    intro:
      "Typical lead times from enquiry to delivered private-label donkey milk powder.",
    parent: {
      kind: "money",
      slug: "private-label-donkey-milk-powder",
      label: "Private Label Donkey Milk Powder",
    },
    sections: [
      {
        heading: "Timeline",
        body: "Enquiry to sample: 7-10 days. Sample to production approval: variable. Production: 15-25 days. Shipping adds transit time by mode.",
      },
    ],
  },
  {
    slug: "private-label-donkey-milk-powder--markets",
    kind: "supporting",
    title: "Private Label Export Markets",
    intro:
      "Markets we serve for private-label donkey milk powder - GCC, EU, Korea and Japan.",
    parent: {
      kind: "money",
      slug: "private-label-donkey-milk-powder",
      label: "Private Label Donkey Milk Powder",
    },
    sections: [
      {
        heading: "Where We Ship",
        body: "UAE/GCC (fastest), EU, South Korea and Japan. Documentation support varies by market - confirm at quotation.",
      },
    ],
  },

  // ===== SILO: OEM Donkey Milk Powder Manufacturer =====
  {
    slug: "oem-donkey-milk-powder-manufacturer--capabilities",
    kind: "supporting",
    title: "OEM Donkey Milk Powder Manufacturing Capabilities",
    intro:
      "Our OEM manufacturing capabilities for donkey milk powder - drying, blending and packing.",
    parent: {
      kind: "money",
      slug: "oem-donkey-milk-powder-manufacturer",
      label: "OEM Donkey Milk Powder Manufacturer",
    },
    sections: [
      {
        heading: "Capabilities",
        body: "Spray and freeze-drying, standardisation, blending and contract packing under your specification.",
      },
      {
        heading: "Quality",
        body: "HACCP and ISO 22000 controls with batch-level COA and traceability.",
      },
    ],
  },
  {
    slug: "oem-donkey-milk-powder-manufacturer--spec-customization",
    kind: "supporting",
    title: "OEM Specification Customization",
    intro:
      "How we customize donkey milk powder specifications for OEM partners.",
    parent: {
      kind: "money",
      slug: "oem-donkey-milk-powder-manufacturer",
      label: "OEM Donkey Milk Powder Manufacturer",
    },
    sections: [
      {
        heading: "What We Adjust",
        body: "Moisture, particle size, grade (food/cosmetic) and pack size can be tuned to your formulation needs.",
      },
    ],
  },
  {
    slug: "oem-donkey-milk-powder-manufacturer--blending",
    kind: "supporting",
    title: "OEM Blending and Contract Packing",
    intro:
      "Blending and contract-packing services for OEM donkey milk powder orders.",
    parent: {
      kind: "money",
      slug: "oem-donkey-milk-powder-manufacturer",
      label: "OEM Donkey Milk Powder Manufacturer",
    },
    sections: [
      {
        heading: "Services",
        body: "We blend to your formula and pack in your format, with documentation for incoming QA.",
      },
    ],
  },
  {
    slug: "oem-donkey-milk-powder-manufacturer--quality-control",
    kind: "supporting",
    title: "OEM Quality Control Process",
    intro: "Quality control steps in our OEM donkey milk powder production.",
    parent: {
      kind: "money",
      slug: "oem-donkey-milk-powder-manufacturer",
      label: "OEM Donkey Milk Powder Manufacturer",
    },
    sections: [
      {
        heading: "QC Steps",
        body: "Incoming milk testing, in-process checks, finished-goods COA, and retained samples for traceability.",
      },
    ],
  },
  {
    slug: "oem-donkey-milk-powder-manufacturer--moq",
    kind: "supporting",
    title: "OEM Minimum Order Quantity",
    intro: "Minimum order quantities for OEM donkey milk powder manufacturing.",
    parent: {
      kind: "money",
      slug: "oem-donkey-milk-powder-manufacturer",
      label: "OEM Donkey Milk Powder Manufacturer",
    },
    sections: [
      {
        heading: "MOQ",
        body: "OEM batches start at 25 kg. Volume pricing available for recurring orders.",
      },
    ],
    specs: [{ label: "MOQ", value: "25 kg" }],
  },
  {
    slug: "oem-donkey-milk-powder-manufacturer--documentation",
    kind: "supporting",
    title: "OEM Documentation Package",
    intro:
      "Documents included with OEM donkey milk powder manufacturing orders.",
    parent: {
      kind: "money",
      slug: "oem-donkey-milk-powder-manufacturer",
      label: "OEM Donkey Milk Powder Manufacturer",
    },
    sections: [
      {
        heading: "Included",
        body: "COA, MSDS, specification sheet, traceability record and batch retention for your audit needs.",
      },
    ],
  },

  // ===== SILO: Donkey Milk Powder Exporter =====
  {
    slug: "donkey-milk-powder-exporter--logistics",
    kind: "supporting",
    title: "Donkey Milk Powder Export Logistics",
    intro:
      "Air and sea freight options for exporting donkey milk powder worldwide.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-exporter",
      label: "Donkey Milk Powder Exporter",
    },
    sections: [
      {
        heading: "Modes",
        body: "Air for speed (3-7 days), sea for economy (10-30 days) depending on destination port.",
      },
      { heading: "Incoterms", body: "FOB, CIF or DAP - confirm at quotation." },
    ],
  },
  {
    slug: "donkey-milk-powder-exporter--customs",
    kind: "supporting",
    title: "Export Customs and Documentation",
    intro: "Customs documents needed to export donkey milk powder.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-exporter",
      label: "Donkey Milk Powder Exporter",
    },
    sections: [
      {
        heading: "Documents",
        body: "Commercial invoice, packing list, COA, MSDS, certificate of origin and (where required) health/veterinary certificate.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-exporter--markets",
    kind: "supporting",
    title: "Export Markets We Serve",
    intro:
      "The export markets Rudra Dairy & Farm serves for donkey milk powder.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-exporter",
      label: "Donkey Milk Powder Exporter",
    },
    sections: [
      {
        heading: "Markets",
        body: "UAE/GCC, France, Italy, Germany, South Korea and Japan. Each has different regulations - see our country pages.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-exporter--certifications",
    kind: "supporting",
    title: "Export Certifications for Donkey Milk Powder",
    intro: "Certifications that support donkey milk powder exports.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-exporter",
      label: "Donkey Milk Powder Exporter",
    },
    sections: [
      {
        heading: "Certifications",
        body: "FSSAI, ISO 22000, HACCP, IEC. Health certificates arranged per shipment where the market requires.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-exporter--packaging",
    kind: "supporting",
    title: "Export Packaging for Donkey Milk Powder",
    intro: "Export-grade packaging for long-haul donkey milk powder shipments.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-exporter",
      label: "Donkey Milk Powder Exporter",
    },
    sections: [
      {
        heading: "Packaging",
        body: "Moisture-barrier laminate with desiccant option; palletised and shrink-wrapped for sea/air.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-exporter--lead-times",
    kind: "supporting",
    title: "Export Lead Times",
    intro: "Typical lead times for donkey milk powder export orders.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-exporter",
      label: "Donkey Milk Powder Exporter",
    },
    sections: [
      {
        heading: "Timeline",
        body: "Production 15-25 days; transit 3-30 days by mode and destination.",
      },
    ],
  },

  // ===== SILO: Donkey Milk Powder for Soap Manufacturing =====
  {
    slug: "donkey-milk-powder-for-soap-manufacturing--formulation",
    kind: "supporting",
    title: "Donkey Milk Powder Soap Formulation",
    intro:
      "How to formulate cold-process and melt-and-pour soaps with donkey milk powder.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-soap-manufacturing",
      label: "Donkey Milk Powder for Soap Manufacturing",
    },
    sections: [
      {
        heading: "Usage",
        body: "Add 1-4% donkey milk powder to the water/lye phase or at trace. It contributes proteins and a creamy skin feel.",
      },
      {
        heading: "Tips",
        body: "Keep soaping temperatures moderate to protect heat-sensitive milk components.",
      },
    ],
    specs: [{ label: "Typical use", value: "1-4%" }],
  },
  {
    slug: "donkey-milk-powder-for-soap-manufacturing--benefits",
    kind: "supporting",
    title: "Benefits of Donkey Milk in Soap",
    intro: "Why artisan and commercial soap makers use donkey milk powder.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-soap-manufacturing",
      label: "Donkey Milk Powder for Soap Manufacturing",
    },
    sections: [
      {
        heading: "Benefits",
        body: "Creamy lather, skin-conditioning proteins and a premium 'donkey milk' claim that differentiates bars on shelf.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-soap-manufacturing--moq",
    kind: "supporting",
    title: "Soap Manufacturer MOQ",
    intro:
      "Minimum order quantities of donkey milk powder for soap manufacturers.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-soap-manufacturing",
      label: "Donkey Milk Powder for Soap Manufacturing",
    },
    sections: [
      {
        heading: "MOQ",
        body: "From 5 kg, samples from 500 g. Private-label and OEM available from 25 kg.",
      },
    ],
    specs: [{ label: "MOQ", value: "5 kg" }],
  },
  {
    slug: "donkey-milk-powder-for-soap-manufacturing--packaging",
    kind: "supporting",
    title: "Packaging for Soap Manufacturers",
    intro: "Pack sizes of donkey milk powder suited to soap manufacturers.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-soap-manufacturing",
      label: "Donkey Milk Powder for Soap Manufacturing",
    },
    sections: [
      {
        heading: "Packs",
        body: "1 kg, 5 kg and 25 kg moisture-barrier packs; private label from 25 kg.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-soap-manufacturing--shelf-life",
    kind: "supporting",
    title: "Shelf Life for Soap Production",
    intro:
      "Shelf life and storage of donkey milk powder used in soap manufacturing.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-soap-manufacturing",
      label: "Donkey Milk Powder for Soap Manufacturing",
    },
    sections: [
      {
        heading: "Shelf Life",
        body: "24 months sealed, cool and dry. Store away from moisture to prevent caking.",
      },
    ],
  },
  {
    slug: "donkey-milk-powder-for-soap-manufacturing--export",
    kind: "supporting",
    title: "Export for Soap Manufacturers",
    intro:
      "Exporting donkey milk powder for soap production to GCC, EU and Asia.",
    parent: {
      kind: "money",
      slug: "donkey-milk-powder-for-soap-manufacturing",
      label: "Donkey Milk Powder for Soap Manufacturing",
    },
    sections: [
      {
        heading: "Export",
        body: "We ship to UAE, EU, Korea and Japan with full documentation for soap manufacturers.",
      },
    ],
  },
];
