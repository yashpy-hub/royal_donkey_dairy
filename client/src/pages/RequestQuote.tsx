import { FileText, MessageCircle, Mail } from "lucide-react";
import Seo from "@/components/Seo";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@shared/business";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Request a Bulk Quote — native on-site form (no Google Form iframe).
 *
 * On submit the lead is: delivered to all business inboxes (EmailJS), stored
 * in the master Google Sheet (Apps Script, tab gid 0), a Google Ads conversion
 * is fired, an optional auto-confirmation is sent to the customer, then the
 * visitor is redirected to /thank-you. See client/src/components/QuoteForm.tsx.
 */
export default function RequestQuote() {
  const t = useT();
  const kw = usePageKeywords();

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

      {/* Native quote form */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <FileText className="w-14 h-14 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {t("products.rq_formTitle")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {t("products.rq_formSub")}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8">
              <QuoteForm />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center">
              {t("products.rq_note")}
            </p>

            {/* Fallback contact if the visitor prefers not to use the form. */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
        </div>
      </section>
    </div>
  );
}
