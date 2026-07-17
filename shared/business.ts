/**
 * Central business configuration for Rudra Dairy & Farm.
 *
 * Single source of truth for:
 *  - Contact emails (primary + secondary; all kept live)
 *  - Phone / WhatsApp
 *  - Physical office & farm addresses
 *  - PAN India cold-storage / warehouse / open-shelter network
 *  - Long-term trust statement
 *
 * Import anywhere via:  import { BUSINESS } from "@shared/business";
 */

export const BUSINESS = {
  name: "Rudra Dairy & Farm",
  website: "https://rudradairyandfarm.shop",

  /**
   * All active contact emails. The primary inbox is info@rudradairyandfarm.shop;
   * the donkeyfarm79 addresses are additional business mailboxes and are kept
   * alongside the primary (not replaced).
   */
  emails: {
    primary: "info@rudradairyandfarm.shop",
    secondary: ["donkeyfarm79@gmail.com", "donkeyfarm79@outlook.com"],
    /** Every address, comma-joined — ready to drop into an email "To" field. */
    all: [
      "info@rudradairyandfarm.shop",
      "donkeyfarm79@gmail.com",
      "donkeyfarm79@outlook.com",
    ],
  },

  // Telephone / call line (also used in tel: links and schema.org).
  phone: "+91 9112327322",
  // tel: href form — digits only, so mobile "Call" buttons dial correctly.
  phoneDial: "tel:+919112327322",
  // WhatsApp number (digits only) and full wa.me deep link.
  whatsappNumber: "917057270238",
  whatsapp: "https://wa.me/917057270238",

  /** Brand / entity metadata for structured data + knowledge graph. */
  alternateName: "Rudra Dairy and Farms",
  foundingDate: "2022",
  priceRange: "$$",
  areaServed: ["IN", "PAN India", "UAE", "GCC", "EU", "South Korea"],
  geo: {
    office: { latitude: 18.4666, longitude: 73.8552 },
    farm: { latitude: 18.5112, longitude: 73.9518 },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],

  social: {
    instagram: "https://instagram.com/rudradairyandfarm",
    facebook: "https://facebook.com/rudradairyandfarm",
  },

  /** Corporate / registered office. */
  officeAddress: {
    label: "Corporate Office",
    streetAddress: "Rudra Dairy and Milks, Near VIT College",
    locality: "Bibwewadi",
    region: "Pune",
    postalCode: "411037",
    country: "IN",
    full: "Rudra Dairy and Milks, Near VIT College, Bibwewadi, Pune - 411037",
  },

  /** Farm / production site. */
  farmAddress: {
    label: "Farm & Production",
    streetAddress: "Street Road, Jategao Road, PAT Vasti",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "412208",
    country: "IN",
    full: "Street Road, Jategao Road, PAT Vasti, Pune, Maharashtra - 412208",
  },

  /**
   * Nationwide storage & handling network.
   * Multiple cold storages, warehouses, and open shelters across PAN India,
   * enabling reliable pan-India fulfilment and freshness-preserving logistics.
   */
  panIndiaNetwork: {
    summary:
      "Multiple cold storages, warehouses, and open shelters across PAN India.",
    facilities: [
      "Temperature-controlled cold storages",
      "Bulk warehouses for powder & packaging",
      "Open shelters for herd management",
      "Pan-India distribution & logistics",
    ],
  },

  /** Long-term commitment to buyers — used on landing, contact & meeting pages. */
  trustStatement:
    "We are committed to long-term business relationships built on trust and faith.",
} as const;

/** Convenience: all emails as a single comma-separated string. */
export const ALL_CONTACT_EMAILS = BUSINESS.emails.all.join(", ");
