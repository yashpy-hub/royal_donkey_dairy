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

/**
 * Applications Page - Rudra Dairy & Farm
 * Donkey Milk & Powder Uses Across Industries
 * Advanced animations and responsive design
 */
export default function Applications() {
  const applications = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cosmetics & Skincare",
      description:
        "Premium ingredient for creams, lotions, soaps, and anti-aging products. Rich in nutrients that nourish and rejuvenate skin.",
      uses: ["Face creams", "Body lotions", "Soaps", "Serums", "Masks"],
      color: "from-pink-50 dark:from-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-900/30",
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Pharmaceutical & Supplements",
      description:
        "Used in nutritional supplements, health tonics, and medicinal formulations. Supports immune system and overall wellness.",
      uses: ["Capsules", "Tablets", "Powders", "Tonics", "Health drinks"],
      color: "from-blue-50 dark:from-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-900/30",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food & Beverage Industry",
      description:
        "Ingredient for premium dairy products, nutritional drinks, and specialty foods. High in proteins and minerals.",
      uses: ["Milk products", "Yogurt", "Cheese", "Protein drinks", "Desserts"],
      color: "from-amber-50 dark:from-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-900/30",
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Infant Nutrition",
      description:
        "Gentle and nutritious alternative for infant formula. Easier to digest than cow milk with similar nutrient profile.",
      uses: ["Baby formula", "Infant milk", "Toddler drinks", "Nutrition"],
      color: "from-green-50 dark:from-green-900/20",
      borderColor: "border-green-200 dark:border-green-900/30",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description:
        "Natural remedy for allergies, digestive issues, and lactose intolerance. Promotes overall health and vitality.",
      uses: ["Health supplements", "Wellness drinks", "Allergy relief", "Digestion"],
      color: "from-red-50 dark:from-red-900/20",
      borderColor: "border-red-200 dark:border-red-900/30",
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Research & Development",
      description:
        "Used in scientific research, clinical trials, and product development. High-quality ingredient for innovation.",
      uses: ["Clinical studies", "Product testing", "Research", "Innovation"],
      color: "from-purple-50 dark:from-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-900/30",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sports & Fitness",
      description:
        "Premium protein source for athletes and fitness enthusiasts. Supports muscle recovery and performance.",
      uses: ["Protein powder", "Sports drinks", "Recovery shakes", "Fitness"],
      color: "from-orange-50 dark:from-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-900/30",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural & Organic Products",
      description:
        "Perfect for organic and natural product lines. No additives, preservatives, or artificial ingredients.",
      uses: ["Organic products", "Natural cosmetics", "Eco-friendly", "Sustainable"],
      color: "from-green-50 dark:from-green-900/20",
      borderColor: "border-green-200 dark:border-green-900/30",
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Donkey Milk Applications Across Industries"
        description="Discover how donkey milk and donkey milk powder are used in cosmetics, pharmaceuticals, nutraceuticals, food & beverage, infant nutrition, and wellness. Trusted B2B ingredient supplier in India."
        path="/applications"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
            { "@type": "ListItem", position: 2, name: "Applications", item: "https://rudradairyandfarm.shop/applications" },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              Applications & Uses
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif">
              Discover how Rudra Dairy & Farm's donkey milk and powder can enhance your products and business
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to differentiate from /applications-detail */}
      <div className="text-center py-2">
        <Link href="/applications-detail" className="text-sm text-orange-600 dark:text-orange-400 hover:underline">
          Need per-industry detail &amp; specs? See Application-Focused Solutions →
        </Link>
      </div>

      {/* Applications Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className={`p-6 bg-gradient-to-br ${app.color} border ${app.borderColor} rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-scale`}
                style={{animationDelay: `${idx * 0.08}s`}}
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
            Why Donkey Milk & Powder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 hover:shadow-lg transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-4">
                Donkey Milk
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-amber-100 font-serif">
                <li>✓ Rich in proteins and minerals</li>
                <li>✓ Similar to human breast milk</li>
                <li>✓ Easier to digest than cow milk</li>
                <li>✓ Natural antibodies and immune support</li>
                <li>✓ Hypoallergenic properties</li>
                <li>✓ Premium cosmetic ingredient</li>
                <li>✓ No additives or preservatives</li>
              </ul>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-amber-900/30 hover:shadow-lg transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-4">
                Donkey Milk Powder
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-amber-100 font-serif">
                <li>✓ Long shelf life and stability</li>
                <li>✓ Easy to transport and store</li>
                <li>✓ Concentrated nutrients</li>
                <li>✓ Versatile for multiple applications</li>
                <li>✓ Consistent quality and composition</li>
                <li>✓ Ideal for manufacturing</li>
                <li>✓ Cost-effective solution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            Market Demand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 rounded-xl border border-amber-200 dark:border-amber-900/30 hover:scale-105 transition-transform duration-300 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-display font-bold text-amber-700 dark:text-amber-400 mb-2">
                100+
              </div>
              <p className="text-gray-700 dark:text-amber-100 font-serif">
                B2B & B2C Customers Served
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 dark:from-green-900/20 to-white dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 hover:scale-105 transition-transform duration-300 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-display font-bold text-green-700 dark:text-green-400 mb-2">
                8+
              </div>
              <p className="text-gray-700 dark:text-amber-100 font-serif">
                Industry Applications
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-800 rounded-xl border border-blue-200 dark:border-blue-900/30 hover:scale-105 transition-transform duration-300 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-display font-bold text-blue-700 dark:text-blue-400 mb-2">
                24/7
              </div>
              <p className="text-gray-700 dark:text-amber-100 font-serif">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl font-display font-bold mb-6">
            Looking for Donkey Milk or Powder?
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            Rudra Dairy & Farm is your trusted partner for premium donkey milk and powder. Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-700 hover:bg-amber-50 font-sans h-12 px-8 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">Get in Touch</Link>
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
