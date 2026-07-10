import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, TrendingUp, Award, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

export default function Markets() {
  const t = useT();
  const kw = usePageKeywords();
  const [, setLocation] = useLocation();

  const markets = [
    {
      id: "uae",
      name: t("mkt.m1Name"),
      region: t("mkt.m1Region"),
      flag: "🇦🇪",
      benefits: [t("mkt.m1b1"), t("mkt.m1b2")],
      certifications: "FSSAI, ISO 22000, Halal Certified",
      demand: "100+ liters/month",
      pricing: "Premium tier pricing",
    },
    {
      id: "eu",
      name: t("mkt.m2Name"),
      region: t("mkt.m2Region"),
      flag: "🇪🇺",
      benefits: [t("mkt.m2b1"), t("mkt.m2b2")],
      certifications: "FSSAI, ISO, EU Organic Certified",
      demand: "500+ liters/month",
      pricing: "Standard tier pricing",
    },
    {
      id: "usa",
      name: t("mkt.m3Name"),
      region: t("mkt.m3Region"),
      flag: "🇺🇸",
      benefits: [t("mkt.m3b1"), t("mkt.m3b2")],
      certifications: "FSSAI, ISO, FDA Compliant",
      demand: "300+ liters/month",
      pricing: "Premium tier pricing",
    },
    {
      id: "asia",
      name: t("mkt.m4Name"),
      region: t("mkt.m4Region"),
      flag: "🌏",
      benefits: [t("mkt.m4b1"), t("mkt.m4b2")],
      certifications: "FSSAI, ISO, ASEAN Compliant",
      demand: "200+ liters/month",
      pricing: "Competitive tier pricing",
    },
  ];

  const marketDetails = {
    uae: {
      title: t("mkt.m1Name"),
      description: "Premium market for organic and natural products",
      regulations: "Halal certification, FSSAI compliance, Gulf Standards",
      logistics: "Direct shipping to Dubai, Jebel Ali Port",
      contact: "Regional distributor partnerships available",
      opportunities: [
        "Luxury skincare brands",
        "Pharmaceutical companies",
        "Cosmetics manufacturers",
        "Health supplement brands",
      ],
    },
    eu: {
      title: t("mkt.m2Name"),
      description: "Strict quality standards, premium pricing",
      regulations: "EU Organic Certification, ISO 22000, FSSAI",
      logistics: "Port of Rotterdam, Hamburg",
      contact: "EU distributor network established",
      opportunities: [
        "Organic cosmetics",
        "Pharmaceutical raw materials",
        "Nutraceutical supplements",
        "Premium skincare",
      ],
    },
    usa: {
      title: t("mkt.m3Name"),
      description: "Growing wellness and supplement industry",
      regulations: "FDA Compliance, FSSAI, ISO Standards",
      logistics: "Port of Los Angeles, New York",
      contact: "US distributor partnerships available",
      opportunities: [
        "Supplement manufacturers",
        "Skincare brands",
        "Wellness products",
        "Functional foods",
      ],
    },
    asia: {
      title: t("mkt.m4Name"),
      description: "Emerging markets with growing demand",
      regulations: "ASEAN Standards, FSSAI, ISO Compliance",
      logistics: "Port of Singapore, Bangkok",
      contact: "ASEAN distributor network",
      opportunities: [
        "Cosmetics manufacturers",
        "Health brands",
        "Natural products",
        "Skincare companies",
      ],
    },
  };

  const stats = [
    { icon: Award, label: t("mkt.statMarkets"), value: "4+" },
    { icon: TrendingUp, label: t("mkt.statGrowth"), value: "45%" },
    { icon: Zap, label: t("mkt.statCapacity"), value: "1000+ KG" },
    { icon: Globe, label: t("mkt.statExport"), value: "100%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title={t("mkt.seoTitle")}
        description={t("mkt.seoDesc")}
        path="/markets"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("mkt.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("mkt.bcMarkets"),
              item: "https://rudradairyandfarm.shop/markets",
            },
          ],
        }}
      />
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-200">
              {t("mkt.badge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("mkt.heroTitle")}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t("mkt.heroSub")}
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
            {markets.map((market, idx) => (
              <div
                key={market.id}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className="animate-fade-in-up"
              >
                <Card
                  className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-orange-500 dark:hover:border-orange-400 hover-lift stagger-item"
                  onClick={() => setLocation(`/markets/${market.id}`)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-4xl mb-2">{market.flag}</div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {market.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {market.region}
                      </p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        {t("mkt.keyBenefits")}
                      </p>
                      <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                        {market.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-orange-600">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                        {t("mkt.monthlyDemand")}
                      </p>
                      <p className="text-sm font-bold text-orange-600 dark:text-orange-400">
                        {market.demand}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                    onClick={() => setLocation(`/markets/${market.id}`)}
                  >
                    {t("mkt.exploreMarket")}
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("mkt.statsTitle")}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg bg-orange-50 dark:bg-slate-700"
              >
                <stat.icon className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t("mkt.ctaTitle")}</h2>
          <p className="text-lg mb-6 opacity-90">{t("mkt.ctaText")}</p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setLocation("/contact")}
          >
            {t("mkt.ctaBtn")}
          </Button>
        </div>
      </section>

      {/* Related Pages — internal links */}
      <section className="py-12 px-4 bg-orange-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {t("mkt.exploreMore")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/products"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("mkt.relProducts")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("mkt.relProductsSub")}
              </p>
            </Link>
            <Link
              href="/applications"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("mkt.relApps")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("mkt.relAppsSub")}
              </p>
            </Link>
            <Link
              href="/contact"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("mkt.relQuote")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("mkt.relQuoteSub")}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
