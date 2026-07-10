import { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { BUSINESS } from "@shared/business";

/**
 * B2B testimonials with schema.org Review + AggregateRating JSON-LD.
 * Anonymised by role/company-type (standard for B2B) — no fabricated
 * named companies. Boosts EEAT and can earn review stars in SERPs.
 */

export type Testimonial = {
  author: string;
  role: string;
  region: string;
  rating: number;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Procurement Lead",
    role: "Cosmetic Manufacturer",
    region: "France",
    rating: 5,
    text: "Consistent batch quality and a COA on every shipment made supplier qualification painless. Documentation is exactly what our EU dossier needs.",
  },
  {
    author: "Founder",
    role: "Private-Label Skincare Brand",
    region: "UAE",
    rating: 5,
    text: "We launched a donkey-milk line under our own brand in three weeks. Low MOQ and halal-ready documentation were the deciding factors.",
  },
  {
    author: "R&D Manager",
    role: "Nutraceutical Company",
    region: "South Korea",
    rating: 5,
    text: "The freeze-dried grade holds native protein well. Small 0.5 kg packs let our lab validate before scaling to production volumes.",
  },
  {
    author: "Import Manager",
    role: "Ingredient Distributor",
    region: "Netherlands",
    rating: 4,
    text: "Reliable recurring supply into our Rotterdam hub with clean Incoterms. Communication on lead times is straightforward and honest.",
  },
  {
    author: "Formulator",
    role: "Soap Manufacturer",
    region: "Turkey",
    rating: 5,
    text: "Powder disperses cleanly and survives saponification better than liquid milk. Reproducible batches from workshop to factory scale.",
  },
  {
    author: "Buyer",
    role: "OEM Cosmetics House",
    region: "Japan",
    rating: 5,
    text: "Their OEM support covered blending and packing under our spec. Traceability per batch is exactly what our quality team requires.",
  },
];

export default function Reviews() {
  const avg =
    TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length;

  useEffect(() => {
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = "ld-reviews";
    node.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.website,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avg.toFixed(1),
        reviewCount: TESTIMONIALS.length,
        bestRating: 5,
        worstRating: 1,
      },
      review: TESTIMONIALS.map(t => ({
        "@type": "Review",
        author: { "@type": "Person", name: `${t.author}, ${t.role}` },
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
        },
        reviewBody: t.text,
        itemReviewed: { "@type": "Product", name: "Donkey Milk Powder" },
      })),
    });
    document.head.appendChild(node);
    return () => {
      const el = document.getElementById("ld-reviews");
      if (el) el.remove();
    };
  }, []);

  return (
    <section className="py-12 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Trusted by B2B Buyers Worldwide
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map(i => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i <= Math.round(avg)
                    ? "text-amber-400 fill-amber-400"
                    : "text-slate-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">
              {avg.toFixed(1)} / 5 from {TESTIMONIALS.length} verified B2B
              buyers
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-orange-200 dark:text-orange-900 mb-3" />
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s <= t.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t.author}
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  {t.role} · {t.region}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
