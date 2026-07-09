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

/**
 * Products Page - Rudra Dairy & Farm
 * Premium Donkey Milk & Powder for Commercial & Industrial Use
 * Massive Production Capacity: 1000+ kg powder in 15 days, 100+ liters milk in 5 days
 */
export default function Products() {
  const mainProducts = [
    {
      id: 1,
      name: "Premium Fresh Donkey Milk",
      icon: <Droplet className="w-12 h-12" />,
      description:
        "Pure, fresh donkey milk collected daily from our heritage farm. Available in various quantities for commercial and industrial use.",
      color: "from-blue-50 dark:from-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-900/30",
      iconColor: "text-blue-700 dark:text-blue-400",
      features: [
        "Rich in proteins and minerals",
        "Natural lactose-free alternative",
        "Hypoallergenic properties",
        "High in immunoglobulins",
        "No additives or preservatives",
        "Daily fresh collection",
      ],
      packaging: ["500ml", "1L", "5L", "10L", "25L", "50L", "Bulk Tanker"],
      applications: [
        "Cosmetics & Skincare",
        "Pharmaceutical Industry",
        "Nutritional Supplements",
        "Food & Beverage",
        "Infant Formula",
        "Health & Wellness",
      ],
      certification: "FSSAI, ISO, IEC, HACCP Certified",
      production: "100+ Liters in 5 Days",
    },
    {
      id: 2,
      name: "Premium Donkey Milk Powder",
      icon: <Package className="w-12 h-12" />,
      description:
        "High-quality donkey milk powder with extended shelf life. Perfect for commercial manufacturing, industrial applications, and bulk orders.",
      color: "from-amber-50 dark:from-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-900/30",
      iconColor: "text-amber-700 dark:text-amber-400",
      features: [
        "Long shelf life (24+ months)",
        "Easy to transport and store",
        "Concentrated nutrients",
        "Consistent quality",
        "Versatile for multiple applications",
        "Cost-effective solution",
      ],
      packaging: ["250g", "500g", "1kg", "5kg", "10kg", "25kg", "Bulk Bags"],
      applications: [
        "Cosmetics Manufacturing",
        "Pharmaceutical Production",
        "Nutritional Supplement Manufacturing",
        "Food Industry",
        "Research & Development",
        "Export Markets",
      ],
      certification: "FSSAI, ISO, IEC, HACCP Certified",
      production: "1000+ KG in 15 Days",
    },
  ];

  const productionCapacity = [
    {
      product: "Fresh Donkey Milk",
      capacity: "100+ Liters",
      timeframe: "5 Days",
      icon: <Droplet className="w-8 h-8" />,
      color: "from-blue-50 dark:from-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-900/30",
      iconColor: "text-blue-700 dark:text-blue-400",
    },
    {
      product: "Donkey Milk Powder",
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
      title: "B2B Partnerships",
      description:
        "Direct supply to businesses, manufacturers, and retailers with dedicated account management and flexible terms.",
      icon: <Lightning className="w-8 h-8" />,
    },
    {
      title: "B2C Retail",
      description:
        "Premium products available for direct consumer purchase with quality assurance and fast delivery.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Wholesale Distribution",
      description:
        "Bulk quantities for distributors and resellers with consistent supply and reliable logistics.",
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: "Industrial Supply",
      description:
        "Large-scale supply for manufacturing, cosmetics, pharmaceutical, and food industries with custom solutions.",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Donkey Milk Powder & Fresh Donkey Milk — Bulk B2B Supplier"
        description="Buy FSSAI & ISO certified donkey milk powder and fresh donkey milk in bulk from Rudra Dairy & Farm. Pack sizes 500ml to bulk tanker. 1000+ kg powder in 15 days. Private label & OEM available."
        path="/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Premium Donkey Milk Powder",
          brand: { "@type": "Brand", name: "Rudra Dairy & Farm" },
          description:
            "High-quality donkey milk powder with extended shelf life for cosmetic, pharmaceutical, and nutritional use.",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "100",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              Our Premium Products
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif mb-4">
              Donkey Milk & Powder - Available for Commercial, Industrial & Bulk Requirements
            </p>
            <div className="inline-block px-6 py-3 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-900/50 rounded-lg">
              <p className="text-orange-800 dark:text-orange-300 font-sans font-bold text-lg">
                🚀 Massive Production Capacity: 100+ L Milk in 5 Days | 1000+ KG Powder in 15 Days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity Highlight */}
      <section className="py-20 bg-gradient-to-br from-orange-50 dark:from-orange-950 to-red-50 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            Our Production Capacity
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
                      Production Capacity
                    </p>
                    <p className="text-3xl font-display font-bold text-orange-700 dark:text-orange-400">
                      {item.capacity}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-sans text-gray-700 dark:text-amber-100">
                      Timeframe
                    </p>
                    <p className="text-xl font-display font-bold text-green-700 dark:text-green-400">
                      {item.timeframe}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white dark:bg-gray-800 border-2 border-orange-400 dark:border-orange-600 rounded-xl text-center max-w-3xl mx-auto animate-slide-in-up" style={{animationDelay: '0.4s'}}>
            <Flame className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
            <p className="text-lg font-serif text-gray-700 dark:text-amber-100">
              With our massive production capacity, we can handle large-scale orders from commercial and industrial partners. Custom production schedules available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            Our Core Products
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {mainProducts.map((product, idx) => (
              <div
                key={product.id}
                className={`p-8 bg-gradient-to-br ${product.color} border ${product.borderColor} rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-scale`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`${product.iconColor} mb-4`}>{product.icon}</div>

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
                    Key Features
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
                    Available Packaging
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
                    Industry Applications
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
            How We Serve You
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
            Quality Assurance & Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-blue-900/30 hover:shadow-lg transition-all duration-300 animate-fade-scale" style={{animationDelay: '0s'}}>
              <Award className="w-12 h-12 text-blue-700 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                Certifications
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-amber-100 font-serif">
                <li>✓ FSSAI Certified</li>
                <li>✓ ISO 22000 Certified</li>
                <li>✓ IEC Certified</li>
                <li>✓ HACCP Compliant</li>
              </ul>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 hover:shadow-lg transition-all duration-300 animate-fade-scale" style={{animationDelay: '0.1s'}}>
              <Shield className="w-12 h-12 text-green-700 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                Testing & Quality
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-amber-100 font-serif">
                <li>✓ Microbiological Testing</li>
                <li>✓ Nutritional Analysis</li>
                <li>✓ Purity Verification</li>
                <li>✓ Batch Certification</li>
              </ul>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-amber-900/30 hover:shadow-lg transition-all duration-300 animate-fade-scale" style={{animationDelay: '0.2s'}}>
              <Truck className="w-12 h-12 text-amber-700 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                Supply Chain
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-amber-100 font-serif">
                <li>✓ Cold Chain Logistics</li>
                <li>✓ Temperature Controlled</li>
                <li>✓ Timely Delivery</li>
                <li>✓ Tracking Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            Contact Rudra Dairy & Farm today for bulk orders, custom production schedules, and partnerships. With our massive production capacity, we can meet any commercial or industrial requirement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-700 hover:bg-amber-50 font-sans h-12 px-8 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">Request Quote</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-white text-white hover:bg-white/10 font-sans h-12 px-8 transition-all duration-300"
            >
              <a href="https://wa.me/919112327322" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 9112327322
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
