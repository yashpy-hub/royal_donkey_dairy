import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import ConversionBlock from "@/components/ConversionBlock";
import QuoteForm from "@/components/QuoteForm";
import StickyQuoteBar from "@/components/StickyQuoteBar";
import { AnalyticsEvents } from "@/lib/analytics";
import {
  getEntry,
  KIND_PATH,
  KIND_LABEL,
  CommercialEntry,
} from "@/data/commercialData";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

type Props = {
  kind: CommercialEntry["kind"];
  slug: string;
};

const RELATED_KIND: Record<string, CommercialEntry["kind"]> = {
  money: "industry",
  industry: "money",
  application: "money",
  guide: "research",
  research: "guide",
  country: "money",
  supporting: "industry",
};

export default function DynamicCommercialPage({ kind, slug }: Props) {
  const t = useT();
  const kw = usePageKeywords();
  const entry = getEntry(kind, slug);
  if (!entry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 text-center px-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {t("dyncomm.notFoundTitle")}
        </h1>
        <Link href="/" className="text-orange-600 hover:underline">
          {t("dyncomm.notFoundLink")}
        </Link>
      </div>
    );
  }

  const relatedKind = RELATED_KIND[kind] ?? kind;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title={entry.title}
        description={entry.intro}
        path={`${KIND_PATH[kind]}/${slug}`}
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: entry.title,
          description: entry.intro,
        }}
      />

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            <Link href="/" className="hover:underline">
              {t("dyncomm.home")}
            </Link>
            <span className="mx-2">/</span>
            <Link href={KIND_PATH[kind]} className="hover:underline">
              {KIND_LABEL[kind]}
            </Link>
          </nav>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {entry.h1 ?? entry.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-300">{entry.intro}</p>
        </div>
      </section>

      <QuoteForm
        productInterest={entry.title}
        country={
          kind === "country"
            ? entry.title.replace("Donkey Milk Powder Exporter to ", "")
            : undefined
        }
      />

      {entry.sections.map((s, i) => (
        <section key={i} className="py-6 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              {s.heading}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {s.body}
            </p>
          </div>
        </section>
      ))}

      {entry.specs && (
        <section className="py-6 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              {t("dyncomm.specifications")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {entry.specs.map((r, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-slate-200 dark:border-slate-700 py-2"
                >
                  <span className="text-slate-500 dark:text-slate-400">
                    {r.label}
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {entry.faqs && (
        <section className="py-6 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              {t("dyncomm.faqTitle")}
            </h2>
            <div className="space-y-3">
              {entry.faqs.map((f, i) => (
                <details
                  key={i}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg p-4"
                >
                  <summary className="font-medium text-slate-900 dark:text-white cursor-pointer">
                    {f.q}
                  </summary>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {entry.faqs && (
        <section className="py-6 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              {t("dyncomm.faqTitle")}
            </h2>
            <div className="space-y-3">
              {entry.faqs.map((f, i) => (
                <details
                  key={i}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg p-4"
                >
                  <summary className="font-medium text-slate-900 dark:text-white cursor-pointer">
                    {f.q}
                  </summary>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center bg-orange-50 dark:bg-slate-800 rounded-2xl p-8">
          <p className="text-slate-700 dark:text-slate-300 mb-5">
            {t("dyncomm.ctaText")}
          </p>
          <Button
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white"
            onClick={() =>
              AnalyticsEvents.ctaClick("request_quotation", {
                page: `${KIND_PATH[kind]}/${slug}`,
              })
            }
          >
            <Link href="/appoint-meeting">
              {entry.ctaLabel ?? "Request Quotation"}
            </Link>
          </Button>
        </div>
      </section>

      <ConversionBlock />

      <StickyQuoteBar label={entry.ctaLabel ?? "Get a Bulk Quote"} />

      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
            {t("dyncomm.related")}
          </h2>
          <Link
            href={KIND_PATH[relatedKind]}
            className="text-orange-600 hover:underline"
          >
            {KIND_LABEL[relatedKind]} →
          </Link>
        </div>
      </section>
    </div>
  );
}
