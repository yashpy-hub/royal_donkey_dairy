import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Droplet,
  Package,
  Truck,
  Zap,
  Shield,
  Award,
  Zap as Lightning,
  CheckCircle,
  Flame,
} from "lucide-react";
import Seo from "@/components/Seo";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Products Page - Rudra Dairy & Farm
 * Premium Donkey Milk & Powder for Commercial & Industrial Use
 * Massive Production Capacity: 1000+ kg powder in 15 days, 100+ liters milk in 5 days
 */
export default function Products() {
  const t = useT();
  const kw = usePageKeywords();

  const mainProducts = [
    {
      id: 1,
      name: t("products.freshName"),
      icon: <Droplet className="w-12 h-12" />,
      description: t("products.freshDesc"),
      color: "from-blue-50 dark:from-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-900/30",
      iconColor: "text-blue-700 dark:text-blue-400",
      features: [
        t("products.freshFeat1"),
        t("products.freshFeat2"),
        t("products.freshFeat3"),
        t("products.freshFeat4"),
        t("products.freshFeat5"),
        t("products.freshFeat6"),
      ],
      packaging: ["500ml", "1L", "5L", "10L", "25L", "50L", "Bulk Tanker"],
      applications: [
        t("products.freshApp1"),
        t("products.freshApp2"),
        t("products.freshApp3"),
        t("products.freshApp4"),
        t("products.freshApp5"),
        t("products.freshApp6"),
      ],
      certification: t("products.freshCert"),
      production: t("products.freshProd"),
    },
    {
      id: 2,
      name: t("products.powderName"),
      icon: <Package className="w-12 h-12" />,
      description: t("products.powderDesc"),
      color: "from-amber-50 dark:from-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-900/30",
      iconColor: "text-amber-700 dark:text-amber-400",
      features: [
        t("products.powderFeat1"),
        t("products.powderFeat2"),
        t("products.powderFeat3"),
        t("products.powderFeat4"),
        t("products.powderFeat5"),
        t("products.powderFeat6"),
      ],
      packaging: ["250g", "500g", "1kg", "5kg", "10kg", "25kg", "Bulk Bags"],
      applications: [
        t("products.powderApp1"),
        t("products.powderApp2"),
        t("products.powderApp3"),
        t("products.powderApp4"),
        t("products.powderApp5"),
        t("products.powderApp6"),
      ],
      certification: t("products.powderCert"),
      production: t("products.powderProd"),
    },
  ];

  const productionCapacity = [
    {
      product: t("products.freshName"),
      capacity: "100+ Liters",
      timeframe: "5 Days",
      icon: <Droplet className="w-8 h-8" />,
      color: "from-blue-50 dark:from-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-900/30",
      iconColor: "text-blue-700 dark:text-blue-400",
    },
    {
      product: t("products.powderName"),
      capacity: "1000+ KG",
      timeframe: "15 Days",
      icon: <Package className="w-8 h-8" />,
      color: "from-amber-50 dark:from-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-900/30",
      iconColor: "text-amber-700 dark:text-amber-400",
    },
  ];

  const businessModels = [
    {
      title: t("products.b2bPartnerships"),
      description: t("products.b2bDesc"),
      icon: <Lightning className="w-8 h-8" />,
    },
    {
      title: t("products.b2cRetail"),
      description: t("products.b2cDesc"),
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: t("products.wholesaleDist"),
      description: t("products.wholesaleDesc"),
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: t("products.industrialSupply"),
      description: t("products.industrialDesc"),
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const qualityCerts = [
    t("products.qCert1"),
    t("products.qCert2"),
    t("products.qCert3"),
    t("products.qCert4"),
  ];
  const qualityTests = [
    t("products.qTest1"),
    t("products.qTest2"),
    t("products.qTest3"),
    t("products.qTest4"),
  ];
  const qualitySupply = [
    t("products.qSupply1"),
    t("products.qSupply2"),
    t("products.qSupply3"),
    t("products.qSupply4"),
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title={t("products.title")}
        description={t("products.desc")}
        path="/products"
        keywords={kw}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t("products.title"),
            url: "https://rudradairyandfarm.shop/products",
            isPartOf: { "@id": "https://rudradairyandfarm.shop/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: t("nav.home"),
                  item: "https://rudradairyandfarm.shop/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: t("nav.products"),
                  item: "https://rudradairyandfarm.shop/products",
                },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: t("products.powderName"),
            image: "https://rudradairyandfarm.shop/og-image.png",
            description: t("products.powderDesc"),
            brand: { "@type": "Brand", name: "Rudra Dairy & Farm" },
            category: "Food & Beverage > Dairy > Milk Powder",
            sku: "RDF-DMP-001",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              seller: { "@id": "https://rudradairyandfarm.shop/#organization" },
              url: "https://rudradairyandfarm.shop/products",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Shelf life",
                value: "24+ months",
              },
              {
                "@type": "PropertyValue",
                name: "Lead time",
                value: "1000+ kg in 15 days",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: t("products.freshName"),
            image: "https://rudradairyandfarm.shop/og-image.png",
            description: t("products.freshDesc"),
            brand: { "@type": "Brand", name: "Rudra Dairy & Farm" },
            category: "Food & Beverage > Dairy > Milk",
            sku: "RDF-DMM-001",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              seller: { "@id": "https://rudradairyandfarm.shop/#organization" },
              url: "https://rudradairyandfarm.shop/products",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Lead time",
                value: "100+ liters in 5 days",
              },
            ],
          },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              {t("products.heroHeading")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif mb-4">
              {t("products.heroSub")}
            </p>
            <div className="inline-block px-6 py-3 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-900/50 rounded-lg">
              <p className="text-orange-800 dark:text-orange-300 font-sans font-bold text-lg">
                🚀 {t("products.capacityBadge")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity Highlight */}
      <section className="py-20 bg-gradient-to-br from-orange-50 dark:from-orange-950 to-red-50 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("products.capacityHeading")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {productionCapacity.map((item, idx) => (
              <div
                key={idx}
                className={`p-8 bg-gradient-to-br ${item.color} border ${item.borderColor} rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-scale`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className={`${item.iconColor} mb-4`}>{item.icon}</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                  {item.product}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-sans text-gray-700 dark:text-amber-100">
                      {t("products.prodCapLabel")}
                    </p>
                    <p className="text-3xl font-display font-bold text-orange-700 dark:text-orange-400">
                      {item.capacity}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-sans text-gray-700 dark:text-amber-100">
                      {t("products.timeframeLabel")}
                    </p>
                    <p className="text-xl font-display font-bold text-green-700 dark:text-green-400">
                      {item.timeframe}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 bg-white dark:bg-gray-800 border-2 border-orange-400 dark:border-orange-600 rounded-xl text-center max-w-3xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Flame className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
            <p className="text-lg font-serif text-gray-700 dark:text-amber-100">
              {t("products.capacityNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("products.coreHeading")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {mainProducts.map((product, idx) => (
              <div
                key={product.id}
                className={`p-8 bg-gradient-to-br ${product.color} border ${product.borderColor} rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-scale`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`${product.iconColor} mb-4`}>
                  {product.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                  {product.name}
                </h3>

                {/* Production Badge */}
                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full text-sm font-sans font-bold text-green-700 dark:text-green-400 mb-4">
                  ⚡ {product.production}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-amber-100 font-serif text-sm mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                    {t("products.keyFeatures")}
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-amber-100"
                      >
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packaging */}
                <div className="mb-6">
                  <h4 className="font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                    {t("products.availPackaging")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((pkg, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-sans text-gray-700 dark:text-amber-100"
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                    {t("products.industryApps")}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.applications.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-xs text-gray-700 dark:text-amber-100 font-sans"
                      >
                        ✓ {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certification */}
                <div className="p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-300 dark:border-gray-600">
                  <p className="text-xs font-sans font-medium text-gray-900 dark:text-amber-50">
                    <Shield className="w-4 h-4 inline mr-2" />
                    {product.certification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("products.serveHeading")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessModels.map((model, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 border border-amber-200 dark:border-amber-900/30 rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="text-amber-700 dark:text-amber-400 mb-4">
                  {model.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-700 dark:text-amber-100 font-serif text-sm">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-br from-blue-50 dark:from-blue-950 to-green-50 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            {t("products.qualityHeading")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-blue-900/30 hover:shadow-lg transition-all duration-300 animate-fade-scale"
              style={{ animationDelay: "0s" }}
            >
              <Award className="w-12 h-12 text-blue-700 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                {t("products.certTitle")}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-amber-100 font-serif">
                {qualityCerts.map((c, i) => (
                  <li key={i}>✓ {c}</li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 hover:shadow-lg transition-all duration-300 animate-fade-scale"
              style={{ animationDelay: "0.1s" }}
            >
              <Shield className="w-12 h-12 text-green-700 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                {t("products.testingTitle")}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-amber-100 font-serif">
                {qualityTests.map((c, i) => (
                  <li key={i}>✓ {c}</li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-amber-900/30 hover:shadow-lg transition-all duration-300 animate-fade-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <Truck className="w-12 h-12 text-amber-700 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                {t("products.supplyTitle")}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-amber-100 font-serif">
                {qualitySupply.map((c, i) => (
                  <li key={i}>✓ {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl font-display font-bold mb-6">
            {t("products.ctaHeading")}
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            {t("products.ctaText")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-700 hover:bg-amber-50 font-sans h-12 px-8 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">{t("products.requestQuote")}</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-white text-white hover:bg-white/10 font-sans h-12 px-8 transition-all duration-300"
            >
              <a
                href="https://wa.me/919112327322"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 9112327322
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
