import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Zap, Heart, TrendingUp, Users, Globe } from "lucide-react";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Who We Are Page - Rudra Dairy & Farm
 * Most Trusted Suppliers Since 2022
 * Advanced animations and responsive design
 */
export default function WhoWeAre() {
  const t = useT();
  const kw = usePageKeywords();
  const milestones = [
    { year: "2022", title: t("who.ms1Title"), description: t("who.ms1Desc") },
    { year: "2023", title: t("who.ms2Title"), description: t("who.ms2Desc") },
    { year: "2024", title: t("who.ms3Title"), description: t("who.ms3Desc") },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t("who.v1Title"),
      description: t("who.v1Desc"),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("who.v2Title"),
      description: t("who.v2Desc"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("who.v3Title"),
      description: t("who.v3Desc"),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("who.v4Title"),
      description: t("who.v4Desc"),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("who.v5Title"),
      description: t("who.v5Desc"),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("who.v6Title"),
      description: t("who.v6Desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title={t("who.seoTitle")}
        description={t("who.seoDesc")}
        path="/who-we-are"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("who.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("who.bcWho"),
              item: "https://rudradairyandfarm.shop/who-we-are",
            },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              {t("who.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif">
              {t("who.heroSub")}
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to differentiate from /about */}
      <div className="text-center py-2">
        <Link
          href="/about"
          className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
        >
          {t("who.crossLink")}
        </Link>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-amber-50 mb-8 text-center animate-slide-in-up">
              {t("who.journeyTitle")}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p
                className="text-lg text-gray-700 dark:text-amber-100 font-serif mb-6 leading-relaxed animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                {t("who.journeyP1")}
              </p>
              <p
                className="text-lg text-gray-700 dark:text-amber-100 font-serif mb-6 leading-relaxed animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {t("who.journeyP2")}
              </p>
              <p
                className="text-lg text-gray-700 dark:text-amber-100 font-serif mb-6 leading-relaxed animate-slide-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                {t("who.journeyP3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-green-50 dark:from-green-950 to-white dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("who.milestonesTitle")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-700 dark:bg-amber-600 text-white font-display font-bold text-lg hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 dark:text-amber-100 font-serif">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("who.valuesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 border border-amber-100 dark:border-amber-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-scale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-amber-700 dark:text-amber-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-amber-100 font-serif text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12 animate-slide-in-up">
            {t("who.whyTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-xl font-display font-bold mb-3">
                {t("who.why1Title")}
              </h3>
              <p className="font-serif text-sm">{t("who.why1Body")}</p>
            </div>
            <div
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl font-display font-bold mb-3">
                {t("who.why2Title")}
              </h3>
              <p className="font-serif text-sm">{t("who.why2Body")}</p>
            </div>
            <div
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-xl font-display font-bold mb-3">
                {t("who.why3Title")}
              </h3>
              <p className="font-serif text-sm">{t("who.why3Body")}</p>
            </div>
            <div
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-xl font-display font-bold mb-3">
                {t("who.why4Title")}
              </h3>
              <p className="font-serif text-sm">{t("who.why4Body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
            {t("who.ctaTitle")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-amber-100 font-serif mb-8 max-w-2xl mx-auto">
            {t("who.ctaText")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-sans h-12 px-8 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">{t("who.getInTouch")}</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-amber-700 dark:border-amber-600 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 font-sans h-12 px-8 transition-all duration-300"
            >
              <a
                href="https://wa.me/917057270238"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("who.whatsappUs")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
