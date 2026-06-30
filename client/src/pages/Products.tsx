import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Droplet,
  Package,
  Truck,
  Zap,
  Shield,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

/**
 * Products Page - Rudra Dairy & Farm
 * Premium Donkey Milk & Powder for Commercial & Industrial Use
 * Bulk sales, wholesale, B2B partnerships
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
    },
  ];

  const bulkPricingTiers = [
    {
      tier: "Retail",
      volume: "Up to 5L / 1kg",
      discount: "Standard Pricing",
      delivery: "3-5 Days",
      moq: "No Minimum",
      color: "from-green-50 dark:from-green-900/20",
      borderColor: "border-green-200 dark:border-green-900/30",
    },
    {
      tier: "Wholesale",
      volume: "5L - 50L / 1kg - 25kg",
      discount: "10-15% Discount",
      delivery: "2-3 Days",
      moq: "Minimum Order Required",
      color: "from-blue-50 dark:from-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-900/30",
    },
    {
      tier: "Commercial",
      volume: "50L - 500L / 25kg - 250kg",
      discount: "20-30% Discount",
      delivery: "1-2 Days",
      moq: "Bulk Order Discount",
      color: "from-purple-50 dark:from-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-900/30",
    },
    {
      tier: "Industrial",
      volume: "500L+ / 250kg+",
      discount: "Custom Pricing",
      delivery: "Customized",
      moq: "Dedicated Supply",
      color: "from-orange-50 dark:from-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-900/30",
    },
  ];

  const businessModels = [
    {
      title: "B2B Partnerships",
      description:
        "Direct supply to businesses, manufacturers, and retailers with dedicated account management.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "B2C Retail",
      description:
        "Premium products available for direct consumer purchase with quality assurance.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Wholesale Distribution",
      description:
        "Bulk quantities for distributors and resellers with competitive wholesale pricing.",
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: "Industrial Supply",
      description:
        "Large-scale supply for manufacturing, cosmetics, pharmaceutical, and food industries.",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              Our Premium Products
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif">
              Donkey Milk & Powder - Available for Commercial, Industrial & Bulk Requirements
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

      {/* Bulk Pricing Tiers */}
      <section className="py-20 bg-gradient-to-br from-green-50 dark:from-green-950 to-white dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-4 animate-slide-in-up">
            Bulk Pricing & Order Tiers
          </h2>
          <p className="text-center text-gray-700 dark:text-amber-100 font-serif mb-16 max-w-2xl mx-auto">
            Flexible pricing for retail, wholesale, commercial, and industrial requirements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {bulkPricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-6 bg-gradient-to-br ${tier.color} border ${tier.borderColor} rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-scale`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-4">
                  {tier.tier}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-sans font-medium text-gray-700 dark:text-amber-100">
                      Volume
                    </p>
                    <p className="text-gray-600 dark:text-amber-200 font-serif">
                      {tier.volume}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-700 dark:text-amber-100">
                      Discount
                    </p>
                    <p className="text-green-700 dark:text-green-400 font-serif font-bold">
                      {tier.discount}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-700 dark:text-amber-100">
                      Delivery
                    </p>
                    <p className="text-gray-600 dark:text-amber-200 font-serif">
                      {tier.delivery}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-700 dark:text-amber-100">
                      MOQ
                    </p>
                    <p className="text-gray-600 dark:text-amber-200 font-serif">
                      {tier.moq}
                    </p>
                  </div>
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
            Contact Rudra Dairy & Farm today for pricing, samples, and bulk order inquiries. We offer flexible terms for commercial and industrial partners.
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
