import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Award, Zap, Droplet, Package, TrendingUp, ShieldCheck, Handshake, MapPin, Building2, Clock, Truck, CalendarCheck } from "lucide-react";
import Seo from "@/components/Seo";
import { BUSINESS } from "@shared/business";

/**
 * Home Page - Landing Page
 * Clean & Attractive Minimalist Design
 * - Simple, professional color scheme
 * - Warm orange accent with green highlights
 * - Minimal animations, maximum clarity
 * - Focus on content and readability
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Seo
        title="Premium Donkey Milk & Powder Supplier in India"
        description="Rudra Dairy & Farm is a trusted B2B supplier of fresh donkey milk and donkey milk powder in India. Bulk capacity: 100+ liters in 5 days, 1000+ kg powder in 15 days. FSSAI, ISO, HACCP certified."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Premium Donkey Milk & Powder Supplier in India",
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
                  name: "Home",
                  item: "https://rudradairyandfarm.shop/",
                },
              ],
            },
          },
        ]}
        faq={[
          {
            question: "What donkey milk products does Rudra Dairy & Farm supply?",
            answer:
              "We supply fresh donkey milk (500ml to bulk tanker) and spray/freeze-dried donkey milk powder (250g to 25kg and bulk bags). Both are FSSAI, ISO, IEC and HACCP certified.",
          },
          {
            question: "What is your bulk production capacity?",
            answer:
              "We can produce 100+ liters of fresh donkey milk in 5 days and 1000+ kg of donkey milk powder in 15 days, with custom production schedules available for large contracts.",
          },
          {
            question: "Do you supply international buyers and exporters?",
            answer:
              "Yes. We serve B2B, private-label, OEM and export partners across the UAE, GCC, EU and South Korea, with full documentation (COA, MSDS, specifications) on every shipment.",
          },
          {
            question: "How do I request a quote or book a meeting?",
            answer:
              "You can use the contact form, email info@rudradairyandfarm.shop / donkeyfarm79@gmail.com / donkeyfarm79@outlook.com, WhatsApp +91 9112327322, or book a business meeting directly through our Appoint a Meeting page.",
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
                  Premium Donkey Dairy Products
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Pure Donkey Milk Excellence
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  Experience premium donkey milk and powder trusted by commercial and industrial partners. Massive production capacity: 100+ liters in 5 days, 1000+ kg powder in 15 days.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold h-12 px-8 rounded-lg transition-colors"
                >
                  <Link href="/products">
                    Explore Products <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold h-12 px-8 rounded-lg transition-colors"
                >
                  <Link href="/contact">Get in Touch</Link>
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
                  <strong>FSSAI • ISO • IEC Certified</strong>
                  <br />
                  Trusted by B2B & Industrial Partners
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100+ Liters</h3>
              <p className="text-gray-600 dark:text-gray-300">Fresh Milk in 5 Days</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <Package className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1000+ KG</h3>
              <p className="text-gray-600 dark:text-gray-300">Powder in 15 Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Why Choose Rudra Dairy & Farm?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Massive Capacity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Handle large-scale bulk orders with our state-of-the-art production facility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Certified Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                FSSAI, ISO, IEC, and HACCP certified for complete peace of mind.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Trusted Partner
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Serving B2B, B2C, wholesale, and industrial clients since 2022.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase with Images */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Our Premium Products
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            100% Pure, Natural, and Certified - Trusted by Commercial & Industrial Partners
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
                  Fresh Donkey Milk
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Pure, fresh milk collected daily from our healthy donkey herd. Available in 500ml bottles to bulk tanker quantities for commercial and industrial use.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300">✓ 100% Pure & Natural</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">✓ FSSAI & ISO Certified</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">✓ Rich in Nutrients</div>
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
                  Donkey Milk Powder
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Premium quality powder with extended shelf life. Perfect for industrial, pharmaceutical, and cosmetic applications. Available in bulk quantities.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300">✓ Long Shelf Life</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">✓ HACCP Certified</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">✓ No Preservatives</div>
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
            How We Serve You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["B2B Partnerships", "B2C Retail", "Wholesale Distribution", "Industrial Supply"].map((model, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-orange-600 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {model}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Customized solutions for your business needs
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
              Built for Buyer Confidence
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trust & Operational Convenience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything we do is structured so B2B buyers can order with confidence,
              on time, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Certified & Compliant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                FSSAI, ISO, IEC & HACCP certified. Full documentation (COA, MSDS,
                specifications) provided with every bulk shipment.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
              <Truck className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                PAN India Fulfilment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Multiple cold storages, warehouses & open shelters across India —
                reliable pan-India delivery with freshness-preserving logistics.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Reliable Lead Times
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                100+ liters fresh milk in 5 days, 1000+ kg powder in 15 days.
                Custom production schedules for large contracts.
              </p>
            </div>
          </div>

          {/* Presence + meeting CTA */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" /> Our Locations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 flex gap-2 mb-3">
                <Building2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Office:</strong> {BUSINESS.officeAddress.full}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 flex gap-2">
                <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Farm:</strong> {BUSINESS.farmAddress.full}</span>
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl flex flex-col justify-center items-center text-center">
              <CalendarCheck className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">Appoint a Meeting</h3>
              <p className="text-sm opacity-90 mb-5">
                Discuss long-term supply, private label, or export partnerships directly with our team.
              </p>
              <Button
                asChild
                className="bg-white text-green-700 hover:bg-gray-100 font-semibold h-12 px-8 rounded-lg transition-colors"
              >
                <Link href="/appoint-meeting">
                  Book a Meeting <ArrowRight className="w-4 h-4 ml-2" />
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
              Buyer Questions
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Quick answers for procurement, capacity, and export partners.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What donkey milk products does Rudra Dairy & Farm supply?",
                a: "We supply fresh donkey milk (500ml to bulk tanker) and spray/freeze-dried donkey milk powder (250g to 25kg and bulk bags). Both are FSSAI, ISO, IEC and HACCP certified.",
              },
              {
                q: "What is your bulk production capacity?",
                a: "We can produce 100+ liters of fresh donkey milk in 5 days and 1000+ kg of donkey milk powder in 15 days, with custom production schedules available for large contracts.",
              },
              {
                q: "Do you supply international buyers and exporters?",
                a: "Yes. We serve B2B, private-label, OEM and export partners across the UAE, GCC, EU and South Korea, with full documentation (COA, MSDS, specifications) on every shipment.",
              },
              {
                q: "How do I request a quote or book a meeting?",
                a: "You can use the contact form, email our three monitored mailboxes, WhatsApp +91 9112327322, or book a business meeting directly through our Appoint a Meeting page.",
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
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact Rudra Dairy & Farm today for bulk orders, custom production schedules, and partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold h-12 px-8 rounded-lg transition-colors"
            >
              <Link href="/contact">Request Quote</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-white text-white hover:bg-white/10 font-semibold h-12 px-8 rounded-lg transition-colors"
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
