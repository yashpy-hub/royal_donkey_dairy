import { Link } from "wouter";
import Seo from "@/components/Seo";
import ConversionBlock from "@/components/ConversionBlock";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

// Phase 7 - EEAT. Evidence we are a real manufacturer.
const ASSETS = [
  {
    titleKey: "eeatp.asset1Title",
    noteKey: "eeatp.asset1Note",
    img: "/eeat/farm-donkeys.webp",
    alt: "Rudra Dairy donkey herd and milking facility in India",
  },
  {
    titleKey: "eeatp.asset2Title",
    noteKey: "eeatp.asset2Note",
    img: "/eeat/freeze-dried-powder.webp",
    alt: "Rudra Dairy donkey milk powder pouch and packing",
  },
  {
    titleKey: "eeatp.asset3Title",
    noteKey: "eeatp.asset3Note",
    img: "/eeat/laboratory-certs.webp",
    alt: "Rudra Dairy food-safety and quality certifications",
  },
  {
    titleKey: "eeatp.asset4Title",
    noteKey: "eeatp.asset4Note",
    img: "/eeat/packaging-line.webp",
    alt: "Rudra Dairy donkey milk bottle packaging",
  },
];

const CERTS = [
  ["FSSAI", "eeatp.certFssai"],
  ["ISO 22000", "eeatp.certIso"],
  ["HACCP", "eeatp.certHaccp"],
  ["IEC", "eeatp.certIec"],
];

const CAPACITY = ["eeatp.capTitle", "eeatp.capBody"];
const EXPORT = ["eeatp.expTitle", "eeatp.expBody"];
const TEAM = ["eeatp.teamTitle", "eeatp.teamBody"];

export default function Eeat() {
  const t = useT();
  const kw = usePageKeywords();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title={t("eeatp.seoTitle")}
        description={t("eeatp.seoDesc")}
        path="/why-us"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rudra Dairy & Farm",
          url: "https://rudradairyandfarm.shop",
          founder: { "@type": "Person", name: "Yash Pawar" },
        }}
      />
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("eeatp.heroTitle")}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t("eeatp.heroSub")}
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ASSETS.map(a => (
            <div
              key={t(a.titleKey)}
              className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            >
              <img
                src={a.img}
                alt={a.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t(a.titleKey)}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t(a.noteKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {CERTS.map(([c, d]) => (
            <div
              key={c}
              className="text-center p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <p className="font-bold text-orange-600 dark:text-orange-400">
                {c}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t(d)}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-4">
          <Link
            href="/certifications"
            className="text-orange-600 hover:underline"
          >
            {t("eeatp.viewCerts")}
          </Link>
        </p>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[CAPACITY, EXPORT, TEAM].map(([tt, bb]) => (
            <div
              key={t(tt)}
              className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <p className="font-semibold text-slate-900 dark:text-white mb-1">
                {t(tt)}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t(bb)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ConversionBlock />
    </div>
  );
}
