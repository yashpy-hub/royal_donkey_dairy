import { Link } from "wouter";
import Seo from "@/components/Seo";
import { allEntries, KIND_PATH, KIND_LABEL, CommercialEntry } from "@/data/commercialData";

type Props = { kind: CommercialEntry["kind"]; title: string; description: string };

export default function CommercialHub({ kind, title, description }: Props) {
  const items = allEntries().filter((e) => e.kind === kind);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo title={title} description={description} path={KIND_PATH[kind]} jsonLd={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        url: `https://rudradairyandfarm.shop${KIND_PATH[kind]}`,
      }} />
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto text-center animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">{title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">{description}</p>
        </div>
      </section>
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((e) => (
            <Link
              key={e.slug}
              href={`${KIND_PATH[e.kind]}/${e.slug}`}
              className="block p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:border-orange-400 transition-all"
            >
              <p className="font-semibold text-slate-900 dark:text-white mb-1">{e.title}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{e.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
