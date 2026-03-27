import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Handshake, TrendingUp, Users } from "lucide-react";

/**
 * Trust Page - Integrity, Loyalty & Business Model
 * Premium Artisanal Heritage Design
 * - Trust and integrity messaging
 * - Business model transparency
 * - Partnership values
 */
export default function Trust() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Built on Trust & Integrity
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              Royal Donkey Dairy is founded on principles of transparency,
              quality, and honest partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Our Commitment to You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl">
              <Shield className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                Every batch of our donkey milk undergoes rigorous testing and
                quality checks. We maintain FSSAI, ISO, and IEC certifications to
                ensure consistency and safety.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl">
              <Handshake className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Honest Partnerships
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                We believe in transparent communication, fair pricing, and
                long-term relationships. Your success is our success.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl">
              <TrendingUp className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Sustainable Growth
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                We invest in our farm, our animals, and our people. Our growth
                is built on ethical practices and long-term vision.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl">
              <Users className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Community Focus
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                We support local communities, prioritize animal welfare, and
                contribute to sustainable agricultural practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Our Business Model
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl border border-amber-200 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                B2B Partnerships
              </h3>
              <p className="text-gray-700 font-serif mb-4">
                We work directly with distributors, food manufacturers, and
                hospitality businesses. Our B2B model offers:
              </p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>✓ Competitive wholesale pricing</li>
                <li>✓ Bulk supply agreements with flexible terms</li>
                <li>✓ Custom packaging and branding options</li>
                <li>✓ Dedicated account management</li>
                <li>✓ Quality guarantees and certifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-green-200 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                B2C & Retail
              </h3>
              <p className="text-gray-700 font-serif mb-4">
                We serve individual consumers and retail partners through:
              </p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>✓ Premium individual product packaging</li>
                <li>✓ Direct-to-consumer online ordering</li>
                <li>✓ Retail store partnerships and displays</li>
                <li>✓ Marketing and educational support</li>
                <li>✓ Subscription and loyalty programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-amber-200 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Wholesale & Retailers
              </h3>
              <p className="text-gray-700 font-serif mb-4">
                We support independent retailers and wholesale distributors with:
              </p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>✓ Attractive wholesale margins</li>
                <li>✓ Point-of-sale materials and training</li>
                <li>✓ Regular inventory management support</li>
                <li>✓ Co-marketing opportunities</li>
                <li>✓ Seasonal promotions and campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty & Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Why Partners Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-4xl font-display font-bold text-amber-700 mb-2">
                100%
              </div>
              <p className="text-gray-700 font-serif">
                Certified & Compliant
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="text-4xl font-display font-bold text-green-700 mb-2">
                10+
              </div>
              <p className="text-gray-700 font-serif">
                Years of Experience
              </p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-4xl font-display font-bold text-amber-700 mb-2">
                500+
              </div>
              <p className="text-gray-700 font-serif">
                Satisfied Partners
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="text-4xl font-display font-bold text-green-700 mb-2">
                24/7
              </div>
              <p className="text-gray-700 font-serif">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Our Transparency Pledge
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 font-serif">
            <p>
              At Royal Donkey Dairy, we believe transparency is the foundation of
              trust. We openly share information about our production methods,
              certifications, sourcing practices, and business operations.
            </p>

            <p>
              Every customer and partner can verify our certifications, understand
              our quality standards, and trace the origin of our products. We
              maintain detailed records and are always available to answer
              questions about our processes.
            </p>

            <p>
              We commit to honest communication about our products, fair pricing,
              and ethical business practices. If something goes wrong, we take
              responsibility and make it right.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-amber-200/30 mt-8">
              <p className="text-sm">
                <strong>Questions about our practices?</strong> Contact us anytime.
                We're proud of what we do and happy to discuss it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Join Our Community of Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 font-serif mb-8 max-w-2xl mx-auto">
            Experience the Royal Donkey Dairy difference. Quality, integrity, and
            partnership that you can trust.
          </p>
          <Button
            asChild
            className="bg-amber-700 hover:bg-amber-800 text-white font-sans text-base h-12 px-8"
          >
            <Link href="/contact">Start Your Partnership</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
