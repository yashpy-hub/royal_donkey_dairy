import { Link } from "wouter";

type ConversionProps = {
  moq?: string;
  leadTime?: string;
  capacity?: string;
  incoterms?: string;
  markets?: string;
  ctaLabel?: string;
};

// Phase 8 - Conversion block. Answers "what should a procurement manager do next?"
export default function ConversionBlock({
  moq = "5 kg (samples from 500 g)",
  leadTime = "15-25 days production",
  capacity = "100+ L fresh milk / 5 days; 1000+ kg powder / 15 days",
  incoterms = "FOB, CIF, DAP",
  markets = "UAE/GCC, EU, South Korea, Japan",
  ctaLabel = "Request Quotation",
}: ConversionProps) {
  const whatsapp = "https://wa.me/917057270238";
  const email = "mailto:info@rudradairyandfarm.shop";
  return (
    <section className="py-10 px-4 bg-orange-50 dark:bg-slate-900 border-t border-orange-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          Procurement at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[
            ["MOQ", moq],
            ["Lead Time", leadTime],
            ["Capacity", capacity],
            ["Incoterms", incoterms],
            ["Export Markets", markets],
            ["Packaging", "1 / 5 / 25 kg, private label from 25 kg"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
            >
              <p className="text-xs uppercase tracking-wide text-orange-600 dark:text-orange-400 font-semibold">
                {k}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                {v}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"
          >
            WhatsApp Us
          </a>
          <a
            href={email}
            className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700"
          >
            Email Sales
          </a>
          <Link
            href="/downloads/technical-data-sheet"
            className="px-5 py-3 rounded-xl bg-white border border-orange-400 text-orange-700 font-semibold hover:bg-orange-50"
          >
            Download TDS
          </Link>
          <Link
            href="/contact"
            className="px-5 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700"
          >
            {ctaLabel}
          </Link>
        </div>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
          Request a sample, COA or meeting scheduler via the contact form.
        </p>
      </div>
    </section>
  );
}
