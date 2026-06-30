import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Award, Zap, Droplet, Package, TrendingUp } from "lucide-react";

/**
 * Home Page - Landing Page
 * Modern Interactive Design
 * - Vibrant color scheme: Orange, Cyan, Yellow, Purple
 * - Dynamic gradients and interactive elements
 * - High-impact hero section
 * - Strong CTAs and visual hierarchy
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-slate-900 dark:to-blue-950 pt-12 pb-20 transition-colors duration-300">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1 animate-slide-in-up">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-sans font-bold animate-pulse-glow shadow-lg">
                  🚀 Premium Donkey Dairy Products
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                  Pure Donkey <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">Milk Excellence</span>
                </h1>
                <p className="text-xl text-gray-100 font-serif leading-relaxed max-w-lg">
                  Experience premium donkey milk and powder trusted by commercial and industrial partners. Massive production capacity: 100+ liters in 5 days, 1000+ kg powder in 15 days.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-sans text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/products">
                    Explore Products <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 font-sans text-base h-12 px-8 transition-all duration-300"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white flex items-center justify-center text-sm font-bold text-white">
                    ✓
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-white flex items-center justify-center text-sm font-bold text-white">
                    ✓
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white flex items-center justify-center text-sm font-bold text-white">
                    ✓
                  </div>
                </div>
                <div className="text-sm text-gray-200 font-sans">
                  <strong>FSSAI • ISO • IEC Certified</strong>
                  <br />
                  Trusted by B2B & Industrial Partners
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 animate-fade-scale">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/hero-donkey-farm-WNeFSXPznUd274CRQkg4zZ.webp"
                  alt="Rudra Dairy Farm"
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity Highlight */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 dark:from-orange-600 dark:via-yellow-500 dark:to-orange-600 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white animate-slide-in-up">
              <Droplet className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-3xl font-display font-bold mb-2">100+ Liters</h3>
              <p className="text-lg font-sans">Fresh Milk in 5 Days</p>
            </div>
            <div className="text-center text-white animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              <Package className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-3xl font-display font-bold mb-2">1000+ KG</h3>
              <p className="text-lg font-sans">Powder in 15 Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-900 dark:text-white mb-16 animate-slide-in-up">
            Why Choose <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Rudra Dairy & Farm</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-cyan-50 dark:to-cyan-900/20 border-2 border-cyan-200 dark:border-cyan-800 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-scale">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                Massive Capacity
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-serif">
                Handle large-scale bulk orders with our state-of-the-art production facility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-red-50 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-scale" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                Certified Quality
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-serif">
                FSSAI, ISO, IEC, and HACCP certified for complete peace of mind.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-pink-50 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-scale" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                Trusted Partner
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-serif">
                Serving B2B, B2C, wholesale, and industrial clients since 2022.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-900 dark:from-slate-950 via-blue-900 dark:via-slate-900 to-slate-900 dark:to-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-4 animate-slide-in-up">
            Our Core Products
          </h2>
          <p className="text-center text-gray-300 font-serif text-lg mb-16 max-w-2xl mx-auto">
            Premium donkey milk and powder available for commercial and industrial applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product 1 */}
            <div className="group p-8 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-scale border border-cyan-400/50">
              <Droplet className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Fresh Donkey Milk
              </h3>
              <p className="text-blue-100 font-serif mb-4">
                Pure, fresh milk collected daily. Available in 500ml to bulk tanker quantities.
              </p>
              <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-sans font-bold">
                100+ Liters in 5 Days
              </div>
            </div>

            {/* Product 2 */}
            <div className="group p-8 bg-gradient-to-br from-orange-600 to-yellow-600 dark:from-orange-700 dark:to-yellow-700 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-scale border border-yellow-400/50" style={{ animationDelay: "0.1s" }}>
              <Package className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Donkey Milk Powder
              </h3>
              <p className="text-orange-100 font-serif mb-4">
                Long shelf life powder for industrial and commercial use.
              </p>
              <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-sans font-bold">
                1000+ KG in 15 Days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-900 dark:text-white mb-16 animate-slide-in-up">
            How We Serve You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["B2B Partnerships", "B2C Retail", "Wholesale Distribution", "Industrial Supply"].map((model, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-50 dark:from-gray-800 to-gray-100 dark:to-gray-700 border-l-4 border-gradient-to-b from-orange-500 to-cyan-500 rounded-lg hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s`, borderLeftColor: ["#FF6B35", "#00D9FF", "#F7B801", "#9D4EDD"][idx] }}
              >
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                  {model}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-serif">
                  Customized solutions for your business needs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 dark:from-blue-950 dark:via-purple-950 dark:to-blue-950 text-white transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl font-serif mb-8 max-w-2xl mx-auto text-gray-200">
            Contact Rudra Dairy & Farm today for bulk orders, custom production schedules, and partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-sans h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Request Quote</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 font-sans h-12 px-8 transition-all duration-300"
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
