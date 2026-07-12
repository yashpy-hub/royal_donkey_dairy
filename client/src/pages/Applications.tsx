import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Beaker,
  Pill,
  Sparkles,
  Utensils,
  Baby,
  Heart,
  Zap,
  Leaf,
} from "lucide-react";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Applications Page - Rudra Dairy & Farm
 * Donkey Milk & Powder Uses Across Industries
 * Advanced animations and responsive design
 */
export default function Applications() {
  const t = useT();
  const kw = usePageKeywords();
  const applications = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t("apps.a1Title"),
      description: t("apps.a1Desc"),
      uses: [
        t("apps.a1u1"),
        t("apps.a1u2"),
        t("apps.a1u3"),
        t("apps.a1u4"),
        t("apps.a1u5"),
      ],
      color: "from-pink-50 dark:from-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-900/30",
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: t("apps.a2Title"),
      description: t("apps.a2Desc"),
      uses: [
        t("apps.a2u1"),
        t("apps.a2u2"),
        t("apps.a2u3"),
        t("apps.a2u4"),
        t("apps.a2u5"),
      ],
      color: "from-blue-50 dark:from-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-900/30",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: t("apps.a3Title"),
      description: t("apps.a3Desc"),
      uses: [
        t("apps.a3u1"),
        t("apps.a3u2"),
        t("apps.a3u3"),
        t("apps.a3u4"),
        t("apps.a3u5"),
      ],
      color: "from-amber-50 dark:from-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-900/30",
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: t("apps.a4Title"),
      description: t("apps.a4Desc"),
      uses: [t("apps.a4u1"), t("apps.a4u2"), t("apps.a4u3"), t("apps.a4u4")],
      color: "from-green-50 dark:from-green-900/20",
      borderColor: "border-green-200 dark:border-green-900/30",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("apps.a5Title"),
      description: t("apps.a5Desc"),
      uses: [t("apps.a5u1"), t("apps.a5u2"), t("apps.a5u3"), t("apps.a5u4")],
      color: "from-red-50 dark:from-red-900/20",
      borderColor: "border-red-200 dark:border-red-900/30",
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: t("apps.a6Title"),
      description: t("apps.a6Desc"),
      uses: [t("apps.a6u1"), t("apps.a6u2"), t("apps.a6u3"), t("apps.a6u4")],
      color: "from-purple-50 dark:from-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-900/30",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("apps.a7Title"),
      description: t("apps.a7Desc"),
      uses: [t("apps.a7u1"), t("apps.a7u2"), t("apps.a7u3"), t("apps.a7u4")],
      color: "from-orange-50 dark:from-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-900/30",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t("apps.a8Title"),
      description: t("apps.a8Desc"),
      uses: [t("apps.a8u1"), t("apps.a8u2"), t("apps.a8u3"), t("apps.a8u4")],
      color: "from-green-50 dark:from-green-900/20",
      borderColor: "border-green-200 dark:border-green-900/30",
    },
  ];

  const milkBenefits = [
    t("apps.milk1"),
    t("apps.milk2"),
    t("apps.milk3"),
    t("apps.milk4"),
    t("apps.milk5"),
    t("apps.milk6"),
    t("apps.milk7"),
  ];
  const powderBenefits = [
    t("apps.powder1"),
    t("apps.powder2"),
    t("apps.powder3"),
    t("apps.powder4"),
    t("apps.powder5"),
    t("apps.powder6"),
    t("apps.powder7"),
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title={t("apps.seoTitle")}
        description={t("apps.seoDesc")}
        path="/applications"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("apps.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("apps.bcApps"),
              item: "https://rudradairyandfarm.shop/applications",
            },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              {t("apps.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif">
              {t("apps.heroSub")}
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to differentiate from /applications-detail */}
      <div className="text-center py-2">
        <Link
          href="/applications-detail"
          className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
        >
          {t("apps.crossLink")}
        </Link>
      </div>

      {/* Applications Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("apps.gridTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className={`p-6 bg-gradient-to-br ${app.color} border ${app.borderColor} rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-scale`}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="text-amber-700 dark:text-amber-400 mb-3">
                  {app.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-amber-100 font-serif mb-4">
                  {app.description}
                </p>
                <div className="space-y-1">
                  {app.uses.map((use, useIdx) => (
                    <p
                      key={useIdx}
                      className="text-xs text-gray-600 dark:text-amber-200 font-sans"
                    >
                      • {use}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20 bg-gradient-to-br from-green-50 dark:from-green-950 to-white dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("apps.benefitsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-4">
                {t("apps.milkTitle")}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-amber-100 font-serif">
                {milkBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-amber-900/30 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-4">
                {t("apps.powderTitle")}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-amber-100 font-serif">
                {powderBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("apps.demandTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className="text-center p-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 rounded-xl border border-amber-200 dark:border-amber-900/30 hover:scale-105 transition-transform duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-4xl font-display font-bold text-amber-700 dark:text-amber-400 mb-2">
                100+
              </div>
              <p className="text-gray-700 dark:text-amber-100 font-serif">
                {t("apps.demand1")}
              </p>
            </div>

            <div
              className="text-center p-8 bg-gradient-to-br from-green-50 dark:from-green-900/20 to-white dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 hover:scale-105 transition-transform duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-4xl font-display font-bold text-green-700 dark:text-green-400 mb-2">
                8+
              </div>
              <p className="text-gray-700 dark:text-amber-100 font-serif">
                {t("apps.demand2")}
              </p>
            </div>

            <div
              className="text-center p-8 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-800 rounded-xl border border-blue-200 dark:border-blue-900/30 hover:scale-105 transition-transform duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl font-display font-bold text-blue-700 dark:text-blue-400 mb-2">
                24/7
              </div>
              <p className="text-gray-700 dark:text-amber-100 font-serif">
                {t("apps.demand3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl font-display font-bold mb-6">
            {t("apps.ctaTitle")}
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            {t("apps.ctaText")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-700 hover:bg-amber-50 font-sans h-12 px-8 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">{t("apps.getInTouch")}</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-white text-white hover:bg-white/10 font-sans h-12 px-8 transition-all duration-300"
            >
              <a
                href="https://wa.me/917057270238"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 70572 70238
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
