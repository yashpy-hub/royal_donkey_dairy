import { Link } from "wouter";
import Seo from "@/components/Seo";
import ConversionBlock from "@/components/ConversionBlock";
import { getEntry, KIND_PATH, KIND_LABEL, CommercialEntry } from "@/data/commercialData";

type Props = { kind: CommercialEntry["kind"]; slug: string };

// Resolve a related slug that may be "kind:slug" (cross-kind) or bare slug (same kind).
function resolveRelated(ref: string): { href: string; label: string } | null {
  const [maybeKind, maybeSlug] = ref.includes(":") ? ref.split(":") : [null, ref];
  if (maybeKind) {
    const e = getEntry(maybeKind as CommercialEntry["kind"], maybeSlug);
    if (!e) return null;
    return { href: `${KIND_PATH[e.kind]}/${e.slug}`, label: e.title };
  }
  // same-kind fallback (best-effort): search all kinds
  const e = getEntry("money", ref) || getEntry("industry", ref) ||
    getEntry("application", ref) || getEntry("country", ref) || getEntry("guide", ref);
  if (!e) return null;
  return { href: `${KIND_PATH[e.kind]}/${e.slug}`, label: e.title };
}

export default function DynamicCommercialPage({ kind, slug }: Props) {
  const entry = getEntry(kind, slug);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <Seo title="Page Not Found (404)" description="The page you are looking for could not be found." path={`${KIND_PATH[kind]}/${slug}`} noindex />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Page not found</h1>
          <Link href="/" className="text-orange-600 hover:underline">Return home</Link>
        </div>
      </div>
    );
  }

  const h1 = entry.h1 ?? entry.title;
  const related = (entry.related ?? [])
    .map(resolveRelated)
    .filter((x): x is { href: string; label: string } => x !== null)
    .slice(0, 6);

  // FAQ JSON-LD (real SEO value for money/guide pages)
  const faqLd = entry.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: entry.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : undefined;

  const parent = entry.parent;
  const breadcrumbLd = parent
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
          { "@type": "ListItem", position: 2, name: KIND_LABEL[parent.kind], item: `https://rudradairyandfarm.shop${KIND_PATH[parent.kind]}` },
          { "@type": "ListItem", position: 3, name: parent.label, item: `https://rudradairyandfarm.shop${KIND_PATH[parent.kind]}/${parent.slug}` },
          { "@type": "ListItem", position: 4, name: entry.title, item: `https://rudradairyandfarm.shop${KIND_PATH[kind]}/${slug}` },
        ],
      }
    : {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
          { "@type": "ListItem", position: 2, name: KIND_LABEL[kind], item: `https://rudradairyandfarm.shop${KIND_PATH[kind]}` },
          { "@type": "ListItem", position: 3, name: entry.title, item: `https://rudradairyandfarm.shop${KIND_PATH[kind]}/${slug}` },
        ],
      };

  const jsonLd = faqLd ? [breadcrumbLd, faqLd] : breadcrumbLd;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo title={entry.title} description={entry.intro} path={`${KIND_PATH[kind]}/${slug}`} jsonLd={jsonLd} />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-6">
        <nav className="text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          {parent ? (
            <>
              <Link href={KIND_PATH[parent.kind]} className="hover:underline">{KIND_LABEL[parent.kind]}</Link>
              <span className="mx-2">/</span>
              <Link href={`${KIND_PATH[parent.kind]}/${parent.slug}`} className="hover:underline">{parent.label}</Link>
              <span className="mx-2">/</span>
            </>
          ) : (
            <>
              <Link href={KIND_PATH[kind]} className="hover:underline">{KIND_LABEL[kind]}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-slate-700 dark:text-slate-200">{entry.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {h1}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {entry.intro}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {entry.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{s.heading}</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spec table */}
      {entry.specs && (
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Specifications</h2>
            <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left">
                <tbody>
                  {entry.specs.map((r, i) => (
                    <tr key={i} className={i % 2 ? "bg-slate-50 dark:bg-slate-800" : "bg-white dark:bg-slate-900"}>
                      <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200 w-1/3">{r.label}</th>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {entry.faqs && entry.faqs.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {entry.faqs.map((f, i) => (
                <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{f.q}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-4 bg-orange-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {entry.ctaLabel ?? "Request Quotation"}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Talk to our export team about volumes, packs, documentation and lead times.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {entry.ctaLabel ?? "Request Quotation"} →
          </Link>
        </div>
      </section>

      {/* Phase 8 - Conversion block */}
      <ConversionBlock ctaLabel={entry.ctaLabel ?? "Request Quotation"} />

      {/* Related */}
      {related.length > 0 && (
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Related</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all hover:border-orange-400"
                >
                  <span className="text-orange-600 dark:text-orange-400 font-medium">{r.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
