import { Link } from "wouter";
import Seo from "@/components/Seo";
import ConversionBlock from "@/components/ConversionBlock";

// Phase 7 - EEAT. Evidence we are a real manufacturer.
// Photo slots use placeholder divs; swap in real /public images when available.
const ASSETS = [
  { title: "Farm & Donkeys", note: "Our donkey herd and milking facility." },
  { title: "Freeze-Drying Equipment", note: "Spray and freeze-drying lines." },
  { title: "Laboratory", note: "In-house quality testing." },
  { title: "Packaging Line", note: "1 kg to 25 kg packing." },
];

export default function Eeat() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title="Our Facility, Team & Certifications | Rudra Dairy & Farm"
        description="See the real manufacturing behind Rudra Dairy & Farm - farm, freeze-drying equipment, laboratory, certifications, capacity and export history."
        path="/why-us"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rudra Dairy & Farm",
          url: "https://rudradairyandfarm.shop",
          founder: { "@type": "Person", name: "Yash Pawar" },
        }}
      />
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">A Real Donkey Milk Manufacturer</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Experience, Expertise, Authoritativeness and Trust — backed by facilities, certifications and capacity.</p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ASSETS.map((a) => (
            <div key={a.title} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="h-40 bg-gradient-to-br from-orange-100 to-amber-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm">
                [ photo: {a.title} ]
              </div>
              <div className="p-4">
                <p className="font-semibold text-slate-900 dark:text-white">{a.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-4">Photo placeholders — replace with real images in /public to strengthen EEAT.</p>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["FSSAI", "Food safety licence"],
            ["ISO 22000", "Food safety management"],
            ["HACCP", "Hazard analysis"],
            ["IEC", "Export certification"],
          ].map(([c, d]) => (
            <div key={c} className="text-center p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="font-bold text-orange-600 dark:text-orange-400">{c}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-4"><Link href="/certifications" className="text-orange-600 hover:underline">View all certifications →</Link></p>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["Manufacturing Capacity", "100+ L fresh donkey milk in 5 days; 1000+ kg powder in 15 days."],
            ["Export History", "Supplying UAE/GCC, EU, South Korea and Japan with full documentation."],
            ["Team", "Founder-led by Yash Pawar, Co-Founder & Managing Director, with QA and export specialists."],
          ].map(([t, b]) => (
            <div key={t} className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">{t}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <ConversionBlock />
    </div>
  );
}
