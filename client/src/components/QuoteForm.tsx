import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { sendQuoteRequestEmail } from "@/lib/emailService";
import { AnalyticsEvents } from "@/lib/analytics";
import { logToSheet } from "@/lib/sheetLogger";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@shared/business";

type QuoteFormProps = {
  /** Pre-filled product interest, e.g. the current page title. */
  productInterest?: string;
  /** Pre-filled target country, e.g. the current export page. */
  country?: string;
};

const PRODUCTS = [
  "Donkey Milk Powder (spray-dried)",
  "Freeze-Dried Donkey Milk Powder",
  "Private Label Donkey Milk Powder",
  "OEM / Contract Manufacturing",
  "Bulk / Wholesale Supply",
  "Other / Not sure yet",
];

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Netherlands",
  "Spain",
  "Poland",
  "Germany",
  "France",
  "Italy",
  "Turkey",
  "Saudi Arabia",
  "UAE",
  "Qatar",
  "Kuwait",
  "Singapore",
  "Malaysia",
  "Japan",
  "South Korea",
  "Mexico",
  "India",
  "Other",
];

const VOLUMES = [
  "Sample (0.5 - 5 kg)",
  "5 - 25 kg",
  "25 - 100 kg",
  "100 kg - 1 ton",
  "1+ ton / recurring",
];

const TIMELINES = [
  "ASAP",
  "Within 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "Just researching",
];

const inputCls =
  "w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all";

export default function QuoteForm({
  productInterest,
  country,
}: QuoteFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: country || "",
    productInterest: productInterest || "",
    quantity: "",
    timeline: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form, v: string) =>
    setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.company) {
      toast.error("Please complete name, company, email and phone.");
      return;
    }
    setIsLoading(true);
    try {
      const ok = await sendQuoteRequestEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        country: form.country,
        productInterest: form.productInterest,
        quantity: form.quantity,
        timeline: form.timeline,
        message: form.message,
      });
      if (ok) {
        AnalyticsEvents.quoteSubmit({
          product: form.productInterest || "unspecified",
          country: form.country || "unspecified",
        });
        // Best-effort backup of the lead to the Google Sheet (tab: gid 0).
        logToSheet("quote", {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          country: form.country,
          productInterest: form.productInterest,
          quantity: form.quantity,
          timeline: form.timeline,
          message: form.message,
        });
        setDone(true);
        toast.success("Quote request sent! We'll reply within 1 business day.");
      } else {
        toast.error("Could not send. Please email us directly or retry.");
      }
    } catch {
      toast.error("Something went wrong. Please retry or email us.");
    } finally {
      setIsLoading(false);
    }
  };

  if (done) {
    return (
      <section id="quote" className="py-10 px-4 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-10">
          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Thank you — your request is in.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Our B2B team will respond with pricing and lead time within 1
            business day. For urgent inquiries, reach us on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/917057270238"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"
            >
              WhatsApp Us
            </a>
            <a
              href={`mailto:${BUSINESS.emails.primary}`}
              className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700"
            >
              Email Sales
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-10 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
          Request a Bulk Quote
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm">
          Get a tailored B2B price with lead time and Incoterms. MOQ from 5 kg,
          samples from 500 g.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Full Name *
              </label>
              <input
                className={inputCls}
                value={form.name}
                onChange={e => set("name", e.target.value)}
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Company *
              </label>
              <input
                className={inputCls}
                value={form.company}
                onChange={e => set("company", e.target.value)}
                placeholder="Your company"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Email *
              </label>
              <input
                type="email"
                className={inputCls}
                value={form.email}
                onChange={e => set("email", e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                className={inputCls}
                value={form.phone}
                onChange={e => set("phone", e.target.value)}
                placeholder="+__ ___ _______"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Country / Market
              </label>
              <select
                className={`${inputCls} appearance-none`}
                value={form.country}
                onChange={e => set("country", e.target.value)}
              >
                <option value="">Select market…</option>
                {COUNTRIES.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Product Interest
              </label>
              <select
                className={`${inputCls} appearance-none`}
                value={form.productInterest}
                onChange={e => set("productInterest", e.target.value)}
              >
                <option value="">Select product…</option>
                {PRODUCTS.map(p => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Target Volume
              </label>
              <select
                className={`${inputCls} appearance-none`}
                value={form.quantity}
                onChange={e => set("quantity", e.target.value)}
              >
                <option value="">Select volume…</option>
                {VOLUMES.map(v => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Timeline
              </label>
              <select
                className={`${inputCls} appearance-none`}
                value={form.timeline}
                onChange={e => set("timeline", e.target.value)}
              >
                <option value="">Select timeline…</option>
                {TIMELINES.map(t => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
              Message
            </label>
            <textarea
              className={`${inputCls} resize-none`}
              rows={3}
              value={form.message}
              onChange={e => set("message", e.target.value)}
              placeholder="Tell us about your use case, grade and any docs needed (COA, halal, etc.)"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Get My Quote
              </>
            )}
          </Button>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            We reply within 1 business day. Quotes are confidential.
          </p>
        </form>
      </div>
    </section>
  );
}
