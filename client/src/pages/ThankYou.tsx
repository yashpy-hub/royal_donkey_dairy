import { CheckCircle2, MessageCircle, Mail, Home } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import { BUSINESS } from "@shared/business";
import { useT } from "@/i18n";

/**
 * Post-submission confirmation page. All lead forms (quote, contact, meeting)
 * redirect here on success so we get a clean, trackable "thank-you" URL that
 * Google Ads can use as a conversion page, plus a reassuring confirmation for
 * the visitor. Rendered client-side after a redirect, but safe under SSR.
 */
export default function ThankYou() {
  const t = useT();

  // Read ?type= query safely (client redirect path).
  let type = "contact";
  try {
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const q = params.get("type");
    if (q === "quote" || q === "meeting" || q === "contact") type = q;
  } catch {
    /* non-browser env — fall back to default */
  }

  const copyMap = {
    quote: {
      title: "Thank you — your quote request is in.",
      body: "Our B2B team will reply with pricing, lead time and Incoterms within 1 business day. For urgent volumes, reach us on WhatsApp.",
    },
    meeting: {
      title: "Thank you — your meeting request is received.",
      body: "We'll confirm your preferred slot shortly. If it's urgent, message us on WhatsApp and we'll prioritise it.",
    },
    contact: {
      title: "Thank you — we've received your message.",
      body: "A Rudra Dairy & Farm specialist will get back to you within 1 business day. For immediate help, use WhatsApp.",
    },
  };
  const copy = copyMap[type as keyof typeof copyMap] ?? copyMap.contact;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Seo
        title="Thank You — Rudra Dairy & Farm"
        description="Your request has been received. Our B2B team will respond within 1 business day."
        path="/thank-you"
        noindex={true}
      />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {copy.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
            {copy.body}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <a
              href={`mailto:${BUSINESS.emails.primary}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-5 h-5" /> Email Sales
            </a>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:underline"
          >
            <Home className="w-4 h-4" /> Back to home
          </Link>

          <p className="mt-12 text-sm text-slate-500 dark:text-slate-400">
            {BUSINESS.trustStatement}
          </p>
        </div>
      </div>
    </div>
  );
}
