import { FileText, MessageCircle, Mail } from "lucide-react";
import Seo from "@/components/Seo";
import { BUSINESS } from "@shared/business";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Request a Bulk Quote
 * Embeds the published Google Form (bulkQuoteFormUrl) directly on the page
 * via a responsive iframe, so buyers fill it in without leaving the site.
 * Submissions are stored by Google in the linked Sheet — no server needed.
 * If the form URL is not configured yet, fall back to WhatsApp + email so
 * the page is never dead.
 */
export default function RequestQuote() {
  const t = useT();
  const kw = usePageKeywords();
  const formUrl = BUSINESS.bulkQuoteFormUrl?.trim();

  // Google Forms embed view — the iframe loads the form in-place.
  const embedUrl = formUrl
    ? formUrl + (formUrl.includes("?") ? "&embedded=true" : "?embedded=true")
    : "";

  return (
    <div className="min-h-screen">
      <Seo
        title={`${t("nav.requestQuote")} — Rudra Dairy & Farm`}
        description={t("products.rq_desc")}
        path="/request-quote"
        keywords={kw}
        noindex
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 to-green-50 dark:to-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("nav.requestQuote")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {t("products.rq_sub")}
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Google Form */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {formUrl ? (
              <>
                <div className="mb-8">
                  <FileText className="w-14 h-14 text-orange-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {t("products.rq_formTitle")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {t("products.rq_formSub")}
                  </p>
                </div>

                {/* Responsive Google Form iframe (scales with container width). */}
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white"
                  style={{ paddingBottom: "145%" }}
                >
                  <iframe
                    src={embedUrl}
                    title={t("products.rq_formTitle")}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-900/20 p-6 text-amber-800 dark:text-amber-200">
                <p className="font-medium">{t("products.rq_pending")}</p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold h-12 px-6 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("products.rq_whatsapp")}
                  </a>
                  <a
                    href="mailto:info@rudradairyandfarm.shop?subject=Bulk%20Quote%20Request"
                    className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold h-12 px-6 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {t("products.rq_email")}
                  </a>
                </div>
              </div>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
              {t("products.rq_note")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
