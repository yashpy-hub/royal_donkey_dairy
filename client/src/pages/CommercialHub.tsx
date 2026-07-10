import { Link } from "wouter";
import Seo from "@/components/Seo";
import {
  allEntries,
  KIND_PATH,
  KIND_LABEL,
  CommercialEntry,
} from "@/data/commercialData";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

type Props = {
  kind: CommercialEntry["kind"];
  title: string;
  description: string;
};

// Map the commercial "kind" to its comm-namespace keys so titles/descriptions
// switch with the active UI language.
const KIND_KEY: Record<
  CommercialEntry["kind"],
  { title: string; desc: string }
> = {
  research: { title: "comm.researchTitle", desc: "comm.researchDesc" },
  money: { title: "comm.moneyTitle", desc: "comm.moneyDesc" },
  industry: { title: "comm.industryTitle", desc: "comm.industryDesc" },
  application: { title: "comm.applicationTitle", desc: "comm.applicationDesc" },
  country: { title: "comm.countryTitle", desc: "comm.countryDesc" },
  guide: { title: "comm.guideTitle", desc: "comm.guideDesc" },
  supporting: { title: "comm.industryTitle", desc: "comm.industryDesc" },
};

export default function CommercialHub({ kind }: Props) {
  const t = useT();
  const keys = KIND_KEY[kind];
  const pageTitle = t(keys.title);
  const pageDesc = t(keys.desc);
  const items = allEntries().filter(e => e.kind === kind);
  const kw = usePageKeywords();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title={pageTitle}
        description={pageDesc}
        path={KIND_PATH[kind]}
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: pageTitle,
          url: `https://rudradairyandfarm.shop${KIND_PATH[kind]}`,
        }}
      />
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto text-center animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {pageTitle}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {pageDesc}
          </p>
        </div>
      </section>
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(e => (
            <Link
              key={e.slug}
              href={`${KIND_PATH[e.kind]}/${e.slug}`}
              className="block p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:border-orange-400 transition-all"
            >
              <p className="font-semibold text-slate-900 dark:text-white mb-1">
                {e.title}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                {e.intro}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
