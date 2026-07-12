import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  Award,
  Zap,
  Droplet,
  Package,
  TrendingUp,
  ShieldCheck,
  Handshake,
  MapPin,
  Building2,
  Clock,
  Truck,
  CalendarCheck,
} from "lucide-react";
import Seo from "@/components/Seo";
import { BUSINESS } from "@shared/business";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";
import { AnalyticsEvents } from "@/lib/analytics";

/**
 * Home Page - Landing Page
 * Clean & Attractive Minimalist Design
 * - Simple, professional color scheme
 * - Warm orange accent with green highlights
 */
export default function Home() {
  const t = useT();
  const kw = usePageKeywords();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Seo
        title={t("seo.homeTitle")}
        description={t("seo.homeDesc")}
        path="/"
        keywords={kw}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t("seo.homeTitle"),
            url: "https://rudradairyandfarm.shop/",
            description:
              "Trusted B2B supplier of premium donkey milk and donkey milk powder since 2022.",
            isPartOf: { "@id": "https://rudradairyandfarm.shop/#website" },
            primaryImageOfPage: {
              "@id": "https://rudradairyandfarm.shop/#hero",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: t("nav.home"),
                  item: "https://rudradairyandfarm.shop/",
                },
              ],
            },
          },
        ]}
        faq={[
          {
            question: t("home.faq1Q"),
            answer: t("home.faq1A"),
          },
          {
            question: t("home.faq2Q"),
            answer: t("home.faq2A"),
          },
          {
            question: t("home.faq3Q"),
            answer: t("home.faq3A"),
          },
          {
            question: t("home.faq4Q"),
            answer: t("home.faq4A"),
          },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pt-16 pb-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-semibold">
                  {t("home.heroBadge")}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {t("home.heroTitle")}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  {t("home.heroSubtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold h-12 px-8 rounded-lg transition-colors"
                >
                  <Link href="/products">
                    {t("home.exploreProducts")}{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold h-12 px-8 rounded-lg transition-colors"
                >
                  <Link href="/contact">{t("home.getInTouch")}</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>{t("home.fssaiCertified")}</strong>
                  <br />
                  {t("home.trustedPartners")}
                </div>
              </div>

              {/* Long-term trust commitment */}
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <Handshake className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>{BUSINESS.trustStatement}</strong>
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/hero-donkey-farm-WNeFSXPznUd274CRQkg4zZ.webp"
                alt="Rudra Dairy Farm"
                width={640}
                height={480}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <Droplet className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                100+ Liters
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fresh Milk in 5 Days
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <Package className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                1000+ KG
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Powder in 15 Days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            {t("home.whyTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("home.cardMassiveCap")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("home.cardMassiveCapBody")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("home.cardCertified")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("home.cardCertifiedBody")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("home.cardTrusted")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("home.cardTrustedBody")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase with Images */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            {t("home.productsHeading")}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            {t("home.productsSub")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Product 1 - Fresh Milk */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full flex justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/donkey-milk-bottle-VFN8YocpmkyiCGf879qUCw.webp"
                  alt="Rudra Dairy Fresh Donkey Milk bottle"
                  width={256}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="w-64 h-64 object-contain drop-shadow-lg"
                />
              </div>
              <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow w-full">
                <Droplet className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t("home.showcaseFresh")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("home.showcaseFreshBody")}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ {t("home.purity1")}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ {t("home.purity2")}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ {t("home.purity3")}
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-sm font-semibold">
                  100+ Liters in 5 Days
                </div>
              </div>
            </div>

            {/* Product 2 - Powder */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full flex justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/donkey-milk-powder-package-mHGTc7hCBZiHdFCgWnDp8q.webp"
                  alt="Rudra Dairy Donkey Milk Powder pouch"
                  width={256}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="w-64 h-64 object-contain drop-shadow-lg"
                />
              </div>
              <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow w-full">
                <Package className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t("home.showcasePowder")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("home.showcasePowderBody")}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ {t("home.powderBenefit1")}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ {t("home.powderBenefit2")}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ {t("home.powderBenefit3")}
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm font-semibold">
                  1000+ KG in 15 Days
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            {t("home.serveTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              t("home.b2bPartnerships"),
              t("home.b2cRetail"),
              t("home.wholesaleDist"),
              t("home.industrialSupply"),
            ].map((model, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-orange-600 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {model}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("home.serveDesc")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Trust & Operational Convenience */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-semibold mb-4">
              {t("home.convenienceBadge")}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("home.convenienceTitle")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t("home.convenienceText")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t("home.certifiedCompliant")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("home.certifiedCompliantBody")}
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
              <Truck className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t("home.panIndia")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("home.panIndiaBody")}
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t("home.leadTimes")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("home.leadTimesBody")}
              </p>
            </div>
          </div>

          {/* Presence + meeting CTA */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />{" "}
                {t("home.ourLocations")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 flex gap-2 mb-3">
                <Building2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Office:</strong> {BUSINESS.officeAddress.full}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 flex gap-2">
                <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Farm:</strong> {BUSINESS.farmAddress.full}
                </span>
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl flex flex-col justify-center items-center text-center">
              <CalendarCheck className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">
                {t("home.appointMeetingTitle")}
              </h3>
              <p className="text-sm opacity-90 mb-5">
                {t("home.appointMeetingBody")}
              </p>
              <Button
                asChild
                className="bg-white text-green-700 hover:bg-gray-100 font-semibold h-12 px-8 rounded-lg transition-colors"
              >
                <Link
                  href="/appoint-meeting"
                  onClick={() => AnalyticsEvents.ctaClick("home_book_meeting")}
                >
                  {t("home.bookMeetingCta")}{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Long-term trust statement */}
          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-lg font-semibold text-green-700 dark:text-green-400 flex items-center justify-center gap-2">
              <Handshake className="w-5 h-5" /> {BUSINESS.trustStatement}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — rich-snippet driver */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-semibold mb-4">
              {t("home.faqBadge")}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("home.faqSectionTitle")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t("home.faqSectionSub")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: t("home.faq1Q"),
                a: t("home.faq1A"),
              },
              {
                q: t("home.faq2Q"),
                a: t("home.faq2A"),
              },
              {
                q: t("home.faq3Q"),
                a: t("home.faq3A"),
              },
              {
                q: t("home.faq4Q"),
                a: t("home.faq4A"),
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white list-none">
                  {item.q}
                  <span className="ml-4 text-orange-600 dark:text-orange-400 transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 dark:bg-orange-700 text-white py-20 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("home.ctaReady")}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t("home.ctaReadyText")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold h-12 px-8 rounded-lg transition-colors"
            >
              <Link
                href="/contact"
                onClick={() => AnalyticsEvents.ctaClick("home_request_quote")}
              >
                {t("home.requestQuote")}
              </Link>
            </Button>
            <Button
              asChild
              className="border-2 border-white text-white hover:bg-white/10 font-semibold h-12 px-8 rounded-lg transition-colors"
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
