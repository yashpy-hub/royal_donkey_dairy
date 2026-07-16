import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, Linkedin } from "lucide-react";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";
import { BUSINESS } from "@shared/business";

/**
 * About Page - Founder Profile
 * Premium Artisanal Heritage Design
 * - Personal founder story
 * - Display picture and social handles
 * - Business vision and values
 */
export default function About() {
  const t = useT();
  const kw = usePageKeywords();
  return (
    <div className="min-h-screen">
      <Seo
        title={t("abt.seoTitle")}
        description={t("abt.seoDesc")}
        path="/about"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("abt.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("abt.bcFounder"),
              item: "https://rudradairyandfarm.shop/about",
            },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              {t("abt.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              {t("abt.heroSub")}
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to differentiate from /who-we-are */}
      <div className="text-center py-2">
        <Link
          href="/who-we-are"
          className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
        >
          {t("abt.crossLink")}
        </Link>
      </div>

      {/* Founder Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/founder-yash.webp"
                  alt={t("abt.imgAlt")}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-2">
                  Yash Pawar
                </h2>
                <p className="text-lg text-amber-700 font-sans font-semibold">
                  {t("abt.role")}
                </p>
              </div>

              <div className="space-y-6 font-serif text-gray-700 leading-relaxed">
                <p>{t("abt.p1")}</p>

                <p>{t("abt.p2")}</p>

                <p>{t("abt.p3")}</p>
              </div>

              {/* Contact Information */}
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 space-y-4">
                <h3 className="font-display font-bold text-gray-900 text-lg">
                  {t("abt.connect")}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-700" />
                    <a
                      href={BUSINESS.phoneDial}
                      className="text-amber-700 hover:text-amber-800 font-sans"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-amber-700" />
                    <a
                      href="https://www.linkedin.com/in/yash-pawarpy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 font-sans"
                    >
                      linkedin.com/in/yash-pawarpy
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-200">
                  <p className="text-sm text-gray-700 font-sans mb-3">
                    {t("abt.followUs")}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/rudradairyandfarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-amber-100 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-amber-700" />
                      <span className="text-sm font-sans text-gray-700">
                        Instagram
                      </span>
                    </a>
                    <a
                      href="https://facebook.com/rudradairyandfarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-amber-100 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-amber-700" />
                      <span className="text-sm font-sans text-gray-700">
                        Facebook
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-amber-700 hover:bg-amber-800 text-white font-sans w-full"
              >
                <Link href="/contact">{t("abt.discussBtn")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("abt.valuesTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {t("abt.val1Title")}
              </h3>
              <p className="text-gray-700 font-serif">{t("abt.val1Desc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-amber-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {t("abt.val2Title")}
              </h3>
              <p className="text-gray-700 font-serif">{t("abt.val2Desc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {t("abt.val3Title")}
              </h3>
              <p className="text-gray-700 font-serif">{t("abt.val3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t("abt.journeyTitle")}
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {t("abt.j1Title")}
                </h3>
                <p className="text-gray-700 font-serif">{t("abt.j1Desc")}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {t("abt.j2Title")}
                </h3>
                <p className="text-gray-700 font-serif">{t("abt.j2Desc")}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {t("abt.j3Title")}
                </h3>
                <p className="text-gray-700 font-serif">{t("abt.j3Desc")}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {t("abt.j4Title")}
                </h3>
                <p className="text-gray-700 font-serif">{t("abt.j4Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            {t("abt.ctaTitle")}
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            {t("abt.ctaText")}
          </p>
          <Button
            asChild
            className="bg-white text-amber-700 hover:bg-amber-50 font-sans text-base h-12 px-8"
          >
            <Link href="/contact">{t("abt.ctaBtn")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
