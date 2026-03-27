import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Award, Leaf, Heart } from "lucide-react";

/**
 * Home Page - Landing Page
 * Premium Artisanal Heritage Design
 * - Impressive hero section with high-quality imagery
 * - Warm terracotta and forest green color scheme
 * - Serif typography for elegance
 * - Asymmetric layout with generous whitespace
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 pt-12 pb-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1 animate-slide-in-up">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-sans font-medium animate-pulse-glow">
                  🐴 Premium Artisanal Dairy
                </div>
                <h1              className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 leading-tight">
              Pure Donkey Milk Excellence
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif leading-relaxed max-w-lg">                  Discover the heritage of Royal Donkey Dairy—where centuries of
                  tradition meet modern wellness. Our premium donkey milk is
                  crafted with care, certified for quality, and delivered with
                  integrity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-amber-700 hover:bg-amber-800 text-white font-sans text-base h-12 px-8"
                >
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50 font-sans text-base h-12 px-8"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                </div>
                <div className="text-sm text-gray-700 font-sans">
                  <strong>FSSAI • ISO • IEC Certified</strong>
                  <br />
                  Trusted by B2B & Retail Partners
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 animate-fade-scale">
              <div className="relative group">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/hero-donkey-farm-WNeFSXPznUd274CRQkg4zZ.webp"
                  alt="Royal Donkey Dairy Farm"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 rounded-2xl bg-amber-700/0 group-hover:bg-amber-700/5 transition-colors duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Choose Royal Donkey Dairy?
            </h2>
            <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
              We combine heritage farming traditions with modern quality
              standards to deliver the finest donkey milk products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-amber-100 dark:border-amber-900/30 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 hover:scale-105 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Certified Quality
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                FSSAI, ISO, and IEC certified. Every batch meets international
                standards for purity, safety, and nutritional excellence.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-green-100 dark:border-green-900/30 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 dark:from-green-900/20 to-white dark:to-gray-800 hover:scale-105 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Natural & Pure
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                No additives, no preservatives. Our donkeys are raised with care
                on natural pastures, ensuring the purest milk.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-amber-100 dark:border-amber-900/30 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 hover:scale-105 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Heritage & Trust
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                Built on generations of farming expertise. We prioritize animal
                welfare, sustainability, and transparent business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              We Serve All Markets
            </h2>
            <p className="text-lg font-serif max-w-2xl mx-auto text-amber-100">
              From direct consumers to wholesale partners, we deliver premium
              donkey milk across all business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in-up">
            {[
              { title: "B2B Partnerships", icon: "🤝" },
              { title: "B2C Retail", icon: "🛍️" },
              { title: "Wholesale", icon: "📦" },
              { title: "Retailers", icon: "🏪" },
            ].map((model, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              >
                <div className="text-4xl mb-3">{model.icon}</div>
                <h4 className="font-display font-bold text-lg">{model.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-lg text-gray-600 dark:text-amber-100 font-serif mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products, certifications,
            and partnership opportunities.
          </p>
          <Button
            asChild
            className="bg-amber-700 hover:bg-amber-800 text-white font-sans text-base h-12 px-8"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
