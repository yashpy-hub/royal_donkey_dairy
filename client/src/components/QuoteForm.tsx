import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "wouter";
import { sendQuoteRequestEmail, sendCustomerConfirmationEmail } from "@/lib/emailService";
import { AnalyticsEvents, trackAdsConversion } from "@/lib/analytics";
import { logToSheet } from "@/lib/sheetLogger";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@shared/business";

type QuoteFormProps = {
  /** Pre-filled product interest, e.g. the current commercial page title. */
  productInterest?: string;
  /** Pre-filled target country, e.g. the current export page. */
  country?: string;
};

const PRODUCTS = [
  "Fresh Donkey Milk",
  "Donkey Milk Powder (spray-dried)",
  "Freeze-Dried Donkey Milk Powder",
  "Private Label Donkey Milk Powder",
  "OEM / Contract Manufacturing",
  "Bulk / Wholesale Supply",
  "Other / Not sure yet",
];

const APPLICATIONS = [
  "Cosmetics / Skincare",
  "Pharmaceutical / Nutraceutical",
  "Research / Lab",
  "Food & Beverage",
  "Soap & Personal Care",
  "Baby / Sensitive Skin",
  "Private Label",
  "Other",
];

const COUNTRIES = [
  "India",
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

export default function QuoteForm({ productInterest, country }: QuoteFormProps) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: country || "",
    companyWebsite: "",
    product: productInterest || "",
    application: "",
    quantity: "",
    timeline: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const set = (k: keyof typeof form, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

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
        product: form.product,
        application: form.application,
        companyWebsite: form.companyWebsite,
        quantity: form.quantity,
        timeline: form.timeline,
        message: form.message,
      });

      if (ok) {
        AnalyticsEvents.quoteSubmit({
          product: form.product || "unspecified",
          country: form.country || "unspecified",
        });
        // Google Ads conversion — fires only on a successful submit.
        trackAdsConversion("AW-11092553327/-BKnCIugo84cEO_cq6kp", {
          product: form.product || "unspecified",
          country: form.country || "unspecified",
        });
        // Store the lead in the master Google Sheet (tab gid 0).
        // Keys match scripts/Code.gs v4 exactly:
        //   name, company, email, phone, product, volume, destination, message, page
        logToSheet("quote", {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          product: form.product,
          volume: form.quantity,
          destination: form.country,
          message: form.message,
          page: "quote",
        });
        // Optional auto-confirmation to the customer (best-effort).
        sendCustomerConfirmationEmail({
          name: form.name,
          email: form.email,
          company: form.company,
          product: form.product,
        });
        toast.success("Quote request sent! We'll reply within 1 business day.");
        setLocation("/thank-you?type=quote");
      } else {
        toast.error("Could not send. Please email us directly or retry.");
      }
    } catch {
      toast.error("Something went wrong. Please retry or email us.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Full Name *
          </label>
          <input
            className={inputCls}
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Company Name *
          </label>
          <input
            className={inputCls}
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder="Your company"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Email *
          </label>
          <input
            type="email"
            className={inputCls}
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            className={inputCls}
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+__ ___ _______"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Country
          </label>
          <select
            className={`${inputCls} appearance-none`}
            value={form.country}
            onChange={(e) => set("country", e.target.value)}
          >
            <option value="">Select market…</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Company Website
          </label>
          <input
            type="url"
            className={inputCls}
            value={form.companyWebsite}
            onChange={(e) => set("companyWebsite", e.target.value)}
            placeholder="https://yourcompany.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Product
          </label>
          <select
            className={`${inputCls} appearance-none`}
            value={form.product}
            onChange={(e) => set("product", e.target.value)}
          >
            <option value="">Select product…</option>
            {PRODUCTS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Application
          </label>
          <select
            className={`${inputCls} appearance-none`}
            value={form.application}
            onChange={(e) => set("application", e.target.value)}
          >
            <option value="">Select application…</option>
            {APPLICATIONS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Quantity Required
          </label>
          <select
            className={`${inputCls} appearance-none`}
            value={form.quantity}
            onChange={(e) => set("quantity", e.target.value)}
          >
            <option value="">Select volume…</option>
            {VOLUMES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
            Timeline
          </label>
          <select
            className={`${inputCls} appearance-none`}
            value={form.timeline}
            onChange={(e) => set("timeline", e.target.value)}
          >
            <option value="">Select timeline…</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
          Message
        </label>
        <textarea
          className={`${inputCls} resize-none`}
          rows={3}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
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
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        We reply within 1 business day. Quotes are confidential.
      </p>
    </form>
  );
}
