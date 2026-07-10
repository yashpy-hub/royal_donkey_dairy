import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Award, Shield } from "lucide-react";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Certifications Page
 * Premium Artisanal Heritage Design
 * - Display certifications and compliance
 * - Quality standards and credentials
 * - Trust and credibility indicators
 */
export default function Certifications() {
  const t = useT();
  const kw = usePageKeywords();
  const certifications = [
    {
      name: t("cert.fssaiName"),
      description: t("cert.fssaiDesc"),
      details: t("cert.fssaiDetails"),
      icon: "🏛️",
    },
    {
      name: t("cert.isoName"),
      description: t("cert.isoDesc"),
      details: t("cert.isoDetails"),
      icon: "⭐",
    },
    {
      name: t("cert.iecName"),
      description: t("cert.iecDesc"),
      details: t("cert.iecDetails"),
      icon: "🌍",
    },
    {
      name: t("cert.haccpName"),
      description: t("cert.haccpDesc"),
      details: t("cert.haccpDetails"),
      icon: "✓",
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title={t("cert.seoTitle")}
        description={t("cert.seoDesc")}
        path="/certifications"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("cert.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("cert.bcCert"),
              item: "https://rudradairyandfarm.shop/certifications",
            },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              {t("cert.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              {t("cert.heroSub")}
            </p>
          </div>
        </div>
      </section>

      {/* Certification Badge Display */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              {t("cert.credTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              {t("cert.credSub")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-amber-700 font-sans font-semibold mb-3">
                  {cert.description}
                </p>
                <p className="text-gray-700 font-serif">{cert.details}</p>
              </div>
            ))}
          </div>

          {/* Certification Badge Image */}
          <div className="flex justify-center mb-16">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/certifications-badge-K5VPuPCUmYXRn8v3vE2TEc.webp"
              alt={t("cert.badgeAlt")}
              className="w-full max-w-sm h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("cert.complianceTitle")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 p-8 bg-white rounded-xl border border-green-100">
              <Shield className="w-12 h-12 text-green-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {t("cert.cs1Title")}
                </h3>
                <p className="text-gray-700 font-serif">{t("cert.cs1Desc")}</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-white rounded-xl border border-amber-100">
              <Award className="w-12 h-12 text-amber-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {t("cert.cs2Title")}
                </h3>
                <p className="text-gray-700 font-serif">{t("cert.cs2Desc")}</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-white rounded-xl border border-green-100">
              <CheckCircle className="w-12 h-12 text-green-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {t("cert.cs3Title")}
                </h3>
                <p className="text-gray-700 font-serif">{t("cert.cs3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("cert.testingTitle")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {t("cert.t1Title")}
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  {t("cert.t1Desc")}
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {t("cert.t2Title")}
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  {t("cert.t2Desc")}
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {t("cert.t3Title")}
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  {t("cert.t3Desc")}
                </p>
              </div>

              <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {t("cert.t4Title")}
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  {t("cert.t4Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            {t("cert.regTitle")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 font-serif">
            <p>{t("cert.regP1")}</p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-amber-200/30">
              <h3 className="font-display font-bold text-lg mb-3">
                {t("cert.regBoxTitle")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>{t("cert.reg1")}</li>
                <li>{t("cert.reg2")}</li>
                <li>{t("cert.reg3")}</li>
                <li>{t("cert.reg4")}</li>
                <li>{t("cert.reg5")}</li>
              </ul>
            </div>

            <p>{t("cert.regP2")}</p>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("cert.verifyTitle")}
          </h2>

          <div className="max-w-3xl mx-auto bg-amber-50 p-8 rounded-xl border border-amber-200">
            <p className="text-gray-700 font-serif mb-6">
              {t("cert.verifyIntro")}
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-display font-bold text-gray-900 mb-2">
                  {t("cert.verFssai")}
                </p>
                <p className="text-gray-600 font-sans font-mono">
                  {t("cert.verPlaceholder")}
                </p>
              </div>

              <div>
                <p className="font-display font-bold text-gray-900 mb-2">
                  {t("cert.verIec")}
                </p>
                <p className="text-gray-600 font-sans font-mono">
                  {t("cert.verPlaceholder")}
                </p>
              </div>

              <div>
                <p className="font-display font-bold text-gray-900 mb-2">
                  {t("cert.verIso")}
                </p>
                <p className="text-gray-600 font-sans font-mono">
                  {t("cert.verPlaceholder")}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-serif mt-6">
              {t("cert.verNote")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            {t("cert.ctaTitle")}
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            {t("cert.ctaText")}
          </p>
          <Button
            asChild
            className="bg-white text-amber-700 hover:bg-amber-50 font-sans text-base h-12 px-8"
          >
            <Link href="/contact">{t("cert.ctaBtn")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
