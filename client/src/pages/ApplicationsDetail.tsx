import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  Pill,
  Leaf,
  Droplet,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

export default function ApplicationsDetail() {
  const t = useT();
  const kw = usePageKeywords();
  const [, setLocation] = useLocation();

  const apps = [
    {
      id: "cosmetics",
      name: t("appd.c1Name"),
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      description: t("appd.c1Desc"),
      benefits: [
        t("appd.c1b1"),
        t("appd.c1b2"),
        t("appd.c1b3"),
        t("appd.c1b4"),
      ],
      products: [
        t("appd.c1p1"),
        t("appd.c1p2"),
        t("appd.c1p3"),
        t("appd.c1p4"),
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: t("appd.shelf18"),
      },
      minOrder: "100 kg",
      pricing: t("appd.tierPremium"),
      caseStudy: t("appd.c1case"),
    },
    {
      id: "pharmaceutical",
      name: t("appd.c2Name"),
      icon: Pill,
      color: "from-blue-500 to-cyan-500",
      description: t("appd.c2Desc"),
      benefits: [
        t("appd.c2b1"),
        t("appd.c2b2"),
        t("appd.c2b3"),
        t("appd.c2b4"),
      ],
      products: [
        t("appd.c2p1"),
        t("appd.c2p2"),
        t("appd.c2p3"),
        t("appd.c2p4"),
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: t("appd.shelf24"),
      },
      minOrder: "500 kg",
      pricing: t("appd.tierCommercial"),
      caseStudy: t("appd.c2case"),
    },
    {
      id: "nutraceuticals",
      name: t("appd.c3Name"),
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      description: t("appd.c3Desc"),
      benefits: [
        t("appd.c3b1"),
        t("appd.c3b2"),
        t("appd.c3b3"),
        t("appd.c3b4"),
      ],
      products: [
        t("appd.c3p1"),
        t("appd.c3p2"),
        t("appd.c3p3"),
        t("appd.c3p4"),
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: t("appd.shelf18"),
      },
      minOrder: "200 kg",
      pricing: t("appd.tierStandard"),
      caseStudy: t("appd.c3case"),
    },
    {
      id: "skincare",
      name: t("appd.c4Name"),
      icon: Droplet,
      color: "from-purple-500 to-pink-500",
      description: t("appd.c4Desc"),
      benefits: [
        t("appd.c4b1"),
        t("appd.c4b2"),
        t("appd.c4b3"),
        t("appd.c4b4"),
      ],
      products: [
        t("appd.c4p1"),
        t("appd.c4p2"),
        t("appd.c4p3"),
        t("appd.c4p4"),
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: t("appd.shelf20"),
      },
      minOrder: "150 kg",
      pricing: t("appd.tierPremium"),
      caseStudy: t("appd.c4case"),
    },
    {
      id: "soaps",
      name: t("appd.c5Name"),
      icon: ShoppingCart,
      color: "from-yellow-500 to-orange-500",
      description: t("appd.c5Desc"),
      benefits: [
        t("appd.c5b1"),
        t("appd.c5b2"),
        t("appd.c5b3"),
        t("appd.c5b4"),
      ],
      products: [
        t("appd.c5p1"),
        t("appd.c5p2"),
        t("appd.c5p3"),
        t("appd.c5p4"),
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: t("appd.shelf24"),
      },
      minOrder: "100 kg",
      pricing: t("appd.tierStandard"),
      caseStudy: t("appd.c5case"),
    },
    {
      id: "private-label",
      name: t("appd.c6Name"),
      icon: TrendingUp,
      color: "from-indigo-500 to-blue-500",
      description: t("appd.c6Desc"),
      benefits: [
        t("appd.c6b1"),
        t("appd.c6b2"),
        t("appd.c6b3"),
        t("appd.c6b4"),
      ],
      products: [
        t("appd.c6p1"),
        t("appd.c6p2"),
        t("appd.c6p3"),
        t("appd.c6p4"),
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: t("appd.shelf1824"),
      },
      minOrder: "1000 kg",
      pricing: t("appd.tierIndustrial"),
      caseStudy: t("appd.c6case"),
    },
  ];

  const specLabels: Record<string, string> = {
    proteinContent: t("appd.specProtein"),
    fatContent: t("appd.specFat"),
    lactoseContent: t("appd.specLactose"),
    shelf_life: t("appd.specShelf"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title={t("appd.seoTitle")}
        description={t("appd.seoDesc")}
        path="/applications-detail"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("appd.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("appd.bcApps"),
              item: "https://rudradairyandfarm.shop/applications-detail",
            },
          ],
        }}
      />
      {/* Header */}
      <section className="py-12 px-4 animate-fade-in-up">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full mb-6 animate-bounce-in">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-200">
              {t("appd.badge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-in-up">
            {t("appd.heroTitle")}
          </h1>
          <p
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("appd.heroSub")}
          </p>
        </div>
      </section>

      {/* Cross-link to differentiate from /applications */}
      <div className="text-center py-2">
        <Link
          href="/applications"
          className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
        >
          {t("appd.crossLink")}
        </Link>
      </div>

      {/* Applications Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="cosmetics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {apps.map(app => (
                <TabsTrigger
                  key={app.id}
                  value={app.id}
                  className="text-xs md:text-sm"
                >
                  {app.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {apps.map(app => (
              <TabsContent key={app.id} value={app.id}>
                <div className="space-y-6">
                  {/* Hero Card */}
                  <Card
                    className={`bg-gradient-to-r ${app.color} text-white p-8 rounded-lg`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{app.name}</h2>
                        <p className="text-lg opacity-90">{app.description}</p>
                      </div>
                      <app.icon className="w-12 h-12 opacity-50" />
                    </div>
                  </Card>

                  {/* Benefits & Products */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Benefits */}
                    <Card className="p-6 hover-lift">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                        {t("appd.keyBenefits")}
                      </h3>
                      <ul className="space-y-3">
                        {app.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 stagger-item"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <span className="text-orange-600 dark:text-orange-400 font-bold">
                              ✓
                            </span>
                            <span className="text-slate-700 dark:text-slate-300">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    {/* Products */}
                    <Card className="p-6 hover-lift">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                        {t("appd.typicalProducts")}
                      </h3>
                      <ul className="space-y-3">
                        {app.products.map((product, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 stagger-item"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <span className="text-green-600 dark:text-green-400 font-bold">
                              •
                            </span>
                            <span className="text-slate-700 dark:text-slate-300">
                              {product}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Specifications */}
                  <Card className="p-6 hover-glow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      {t("appd.specTitle")}
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      {Object.entries(app.specifications).map(
                        ([key, value], idx) => (
                          <div
                            key={key}
                            className="bg-orange-50 dark:bg-slate-700 p-4 rounded hover-scale stagger-item"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">
                              {specLabels[key] ?? key}
                            </p>
                            <p className="text-lg font-bold text-slate-900 dark:text-white">
                              {value}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </Card>

                  {/* Order Info */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {t("appd.minOrder")}
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {app.minOrder}
                      </p>
                    </Card>
                    <Card className="p-6 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {t("appd.pricingTier")}
                      </p>
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {app.pricing}
                      </p>
                    </Card>
                    <Card className="p-6 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {t("appd.deliveryTime")}
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {t("appd.days15")}
                      </p>
                    </Card>
                  </div>

                  {/* Case Study */}
                  <Card className="p-6 bg-blue-50 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-700">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-300 mb-2">
                      {t("appd.successStory")}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 italic">
                      "{app.caseStudy}"
                    </p>
                  </Card>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => setLocation("/contact")}
                  >
                    {t("appd.requestQuote", { name: app.name })}
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t("appd.bottomTitle")}</h2>
          <p className="text-lg mb-6 opacity-90">{t("appd.bottomText")}</p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setLocation("/contact")}
          >
            {t("appd.bottomBtn")}
          </Button>
        </div>
      </section>

      {/* Related Pages — internal links */}
      <section className="py-12 px-4 bg-orange-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {t("appd.exploreMore")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/products"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("appd.relProducts")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("appd.relProductsSub")}
              </p>
            </Link>
            <Link
              href="/applications"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("appd.relApps")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("appd.relAppsSub")}
              </p>
            </Link>
            <Link
              href="/markets"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("appd.relMarkets")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("appd.relMarketsSub")}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
