import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Handshake, TrendingUp, Users } from "lucide-react";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Trust Page - Integrity, Loyalty & Business Model
 * Premium Artisanal Heritage Design
 * - Trust and integrity messaging
 * - Business model transparency
 * - Partnership values
 */
export default function Trust() {
  const t = useT();
  const kw = usePageKeywords();
  return (
    <div className="min-h-screen">
      <Seo
        title={t("trst.seoTitle")}
        description={t("trst.seoDesc")}
        path="/trust"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("trst.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("trst.bcTrust"),
              item: "https://rudradairyandfarm.shop/trust",
            },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              {t("trst.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              {t("trst.heroSub")}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("trst.commitTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl">
              <Shield className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {t("trst.c1Title")}
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                {t("trst.c1Desc")}
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl">
              <Handshake className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {t("trst.c2Title")}
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                {t("trst.c2Desc")}
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl">
              <TrendingUp className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {t("trst.c3Title")}
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                {t("trst.c3Desc")}
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl">
              <Users className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {t("trst.c4Title")}
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                {t("trst.c4Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("trst.modelTitle")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl border border-amber-200 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                {t("trst.b2bTitle")}
              </h3>
              <p className="text-gray-700 font-serif mb-4">
                {t("trst.b2bIntro")}
              </p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>{t("trst.b2b1")}</li>
                <li>{t("trst.b2b2")}</li>
                <li>{t("trst.b2b3")}</li>
                <li>{t("trst.b2b4")}</li>
                <li>{t("trst.b2b5")}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-green-200 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                {t("trst.b2cTitle")}
              </h3>
              <p className="text-gray-700 font-serif mb-4">
                {t("trst.b2cIntro")}
              </p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>{t("trst.b2c1")}</li>
                <li>{t("trst.b2c2")}</li>
                <li>{t("trst.b2c3")}</li>
                <li>{t("trst.b2c4")}</li>
                <li>{t("trst.b2c5")}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-amber-200 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                {t("trst.wholeTitle")}
              </h3>
              <p className="text-gray-700 font-serif mb-4">
                {t("trst.wholeIntro")}
              </p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>{t("trst.whole1")}</li>
                <li>{t("trst.whole2")}</li>
                <li>{t("trst.whole3")}</li>
                <li>{t("trst.whole4")}</li>
                <li>{t("trst.whole5")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty & Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("trst.trustTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-4xl font-display font-bold text-amber-700 mb-2">
                100%
              </div>
              <p className="text-gray-700 font-serif">{t("trst.stat1")}</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="text-4xl font-display font-bold text-green-700 mb-2">
                10+
              </div>
              <p className="text-gray-700 font-serif">{t("trst.stat2")}</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-4xl font-display font-bold text-amber-700 mb-2">
                500+
              </div>
              <p className="text-gray-700 font-serif">{t("trst.stat3")}</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="text-4xl font-display font-bold text-green-700 mb-2">
                24/7
              </div>
              <p className="text-gray-700 font-serif">{t("trst.stat4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            {t("trst.pledgeTitle")}
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 font-serif">
            <p>{t("trst.pledgeP1")}</p>

            <p>{t("trst.pledgeP2")}</p>

            <p>{t("trst.pledgeP3")}</p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-amber-200/30 mt-8">
              <p className="text-sm">{t("trst.pledgeBox")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            {t("trst.ctaTitle")}
          </h2>
          <p className="text-lg text-gray-600 font-serif mb-8 max-w-2xl mx-auto">
            {t("trst.ctaText")}
          </p>
          <Button
            asChild
            className="bg-amber-700 hover:bg-amber-800 text-white font-sans text-base h-12 px-8"
          >
            <Link href="/contact">{t("trst.ctaBtn")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
