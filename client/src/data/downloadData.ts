// Phase 5 - Download Center resources.
// Email-gated downloads. Front-end only: the email is captured in localStorage
// and a lead is logged to console; wire to your CRM/ESP on the back end.
export type DownloadAsset = {
  slug: string;
  title: string;
  description: string;
  format: string; // e.g. "PDF"
  category: "Technical" | "Compliance" | "Guide" | "Sales";
  fileName: string; // placeholder file under /public/downloads/
};

export const DOWNLOADS: DownloadAsset[] = [
  {
    slug: "technical-data-sheet",
    title: "Technical Data Sheet (TDS)",
    description:
      "Full specifications, composition and physical parameters for donkey milk powder.",
    format: "PDF",
    category: "Technical",
    fileName: "tds-donkey-milk-powder.pdf",
  },
  {
    slug: "certificate-of-analysis-sample",
    title: "Certificate of Analysis (Sample)",
    description:
      "An example COA showing the parameters and limits we report per batch.",
    format: "PDF",
    category: "Compliance",
    fileName: "coa-sample-donkey-milk-powder.pdf",
  },
  {
    slug: "msds",
    title: "Material Safety Data Sheet (MSDS)",
    description:
      "Safety handling and composition information for incoming-goods and EHS files.",
    format: "PDF",
    category: "Compliance",
    fileName: "msds-donkey-milk-powder.pdf",
  },
  {
    slug: "product-specification-sheet",
    title: "Product Specification Sheet",
    description:
      "Agreed product specification for procurement and QA qualification.",
    format: "PDF",
    category: "Technical",
    fileName: "spec-donkey-milk-powder.pdf",
  },
  {
    slug: "packaging-guide",
    title: "Packaging Guide",
    description:
      "Pack sizes, barrier materials and export packing recommendations.",
    format: "PDF",
    category: "Guide",
    fileName: "packaging-guide-donkey-milk-powder.pdf",
  },
  {
    slug: "export-guide",
    title: "Export Guide",
    description:
      "Documents, Incoterms and market notes for importing donkey milk powder.",
    format: "PDF",
    category: "Guide",
    fileName: "export-guide-donkey-milk-powder.pdf",
  },
  {
    slug: "storage-guide",
    title: "Storage Guide",
    description:
      "Conditions and handling to preserve powder quality and shelf life.",
    format: "PDF",
    category: "Guide",
    fileName: "storage-guide-donkey-milk-powder.pdf",
  },
  {
    slug: "white-paper",
    title: "White Paper: Donkey Milk Powder for Industry",
    description:
      "Technical overview of donkey milk powder across cosmetic, nutraceutical and research use.",
    format: "PDF",
    category: "Sales",
    fileName: "whitepaper-donkey-milk-powder.pdf",
  },
];

export function getDownload(slug: string): DownloadAsset | undefined {
  return DOWNLOADS.find(d => d.slug === slug);
}
