import { useState } from "react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import { DOWNLOADS, getDownload } from "@/data/downloadData";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

function DownloadGate({ slug, title }: { slug: string; title: string }) {
  const t = useT();
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const asset = getDownload(slug);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    // Front-end only: store lead + log. Wire to CRM/ESP on back end.
    try {
      const leads = JSON.parse(localStorage.getItem("rdf_leads") || "[]");
      leads.push({ email, asset: slug, at: new Date().toISOString() });
      localStorage.setItem("rdf_leads", JSON.stringify(leads));
    } catch {}
    console.log("[lead] download requested:", { email, asset: slug });
    setUnlocked(true);
  }

  if (unlocked && asset) {
    // In production, serve the real file. Here we point to the placeholder path.
    return (
      <div className="text-center py-10">
        <p className="text-green-700 dark:text-green-400 font-semibold mb-4">
          {t("dl.thankYou")}
        </p>
        <a
          href={`/downloads/${asset.fileName}`}
          download
          className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700"
        >
          {t("dl.downloadFile", { title: asset.title, format: asset.format })}
        </a>
        <p className="text-xs text-slate-500 mt-3">{t("dl.placeholderNote")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 max-w-md mx-auto"
    >
      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        {t("dl.enterEmail")}
      </p>
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={t("dl.emailPlaceholder")}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-white mb-3"
      />
      <button
        type="submit"
        className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700"
      >
        {t("dl.getFile")}
      </button>
      <p className="text-xs text-slate-400 mt-3">{t("dl.privacyNote")}</p>
    </form>
  );
}

export default function DownloadCenter({ slug }: { slug?: string }) {
  const t = useT();
  const kw = usePageKeywords();
  if (slug) {
    const asset = getDownload(slug);
    if (!asset)
      return (
        <div className="py-20 text-center text-slate-500">
          {t("dl.notFound")}
        </div>
      );
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <Seo
          title={t("dl.seoDetailTitle", { title: asset.title })}
          description={asset.description}
          path={`/downloads/${slug}`}
          keywords={kw}
        />
        <section className="py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {asset.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              {asset.description}
            </p>
            <DownloadGate slug={slug} title={asset.title} />
            <Link
              href="/downloads"
              className="inline-block mt-8 text-orange-600 hover:underline"
            >
              {t("dl.allDownloads")}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title={t("dl.seoTitle")}
        description={t("dl.seoDesc")}
        path="/downloads"
        keywords={kw}
      />
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {t("dl.title")}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-10">
            {t("dl.intro")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {DOWNLOADS.map(d => (
              <Link
                key={d.slug}
                href={`/downloads/${d.slug}`}
                className="block p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:border-orange-400 transition-all"
              >
                <span className="inline-block text-xs px-2 py-1 rounded bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 mb-2">
                  {d.category}
                </span>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {d.title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {d.description}
                </p>
                <p className="text-xs text-slate-400 mt-3">
                  {d.format} · {t("dl.freeDownload")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
