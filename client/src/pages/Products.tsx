import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

/**
 * Products Page
 * Premium Artisanal Heritage Design
 * - Impressive product showcase
 * - Detailed product information
 * - Business model integration
 */
export default function Products() {
  const products = [
    {
      name: "Premium Fresh Donkey Milk",
      description:
        "Pure, fresh donkey milk collected daily from our heritage farm",
      benefits: [
        "Rich in proteins and minerals",
        "Natural lactose-free alternative",
        "Hypoallergenic properties",
        "High in immunoglobulins",
      ],
      volume: "500ml - 5L",
      certification: "FSSAI & ISO Certified",
    },
    {
      name: "Artisanal Donkey Milk Yogurt",
      description: "Handcrafted yogurt made from our premium donkey milk",
      benefits: [
        "Probiotic-rich formula",
        "Smooth, creamy texture",
        "Natural fermentation",
        "No artificial additives",
      ],
      volume: "250g - 1kg",
      certification: "FSSAI & ISO Certified",
    },
    {
      name: "Donkey Milk Cheese",
      description: "Specialty cheese crafted using traditional methods",
      benefits: [
        "Unique flavor profile",
        "Long shelf life",
        "Rich in calcium",
        "Artisanal preparation",
      ],
      volume: "200g - 2kg",
      certification: "FSSAI & ISO Certified",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our Premium Products
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              Discover our range of artisanal donkey milk products, each crafted
              with precision and care to deliver exceptional quality.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Product 1 - Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/donkey-milk-product-4DNaauoVNArDWUJ4NrJ55f.webp"
                  alt="Premium Donkey Milk Products"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-display font-bold text-gray-900 mb-3">
                    {products[0].name}
                  </h2>
                  <p className="text-lg text-gray-600 font-serif mb-6">
                    {products[0].description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-bold text-gray-900">
                    Key Benefits:
                  </h3>
                  {products[0].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-serif">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-gray-700 font-sans">
                    <strong>Volume:</strong> {products[0].volume}
                  </p>
                  <p className="text-sm text-green-700 font-sans mt-2">
                    <strong>✓ {products[0].certification}</strong>
                  </p>
                </div>

                <Button
                  asChild
                  className="bg-amber-700 hover:bg-amber-800 text-white font-sans"
                >
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            </div>

            {/* Product 2 - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div>
                  <h2 className="text-4xl font-display font-bold text-gray-900 mb-3">
                    {products[1].name}
                  </h2>
                  <p className="text-lg text-gray-600 font-serif mb-6">
                    {products[1].description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-bold text-gray-900">
                    Key Benefits:
                  </h3>
                  {products[1].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-serif">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-gray-700 font-sans">
                    <strong>Volume:</strong> {products[1].volume}
                  </p>
                  <p className="text-sm text-green-700 font-sans mt-2">
                    <strong>✓ {products[1].certification}</strong>
                  </p>
                </div>

                <Button
                  asChild
                  className="bg-amber-700 hover:bg-amber-800 text-white font-sans"
                >
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-amber-100 to-green-100 p-8 rounded-2xl h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🥛</div>
                    <p className="text-lg font-display font-bold text-gray-900">
                      Artisanal Yogurt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-green-100 to-amber-100 p-8 rounded-2xl h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧀</div>
                    <p className="text-lg font-display font-bold text-gray-900">
                      Specialty Cheese
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-display font-bold text-gray-900 mb-3">
                    {products[2].name}
                  </h2>
                  <p className="text-lg text-gray-600 font-serif mb-6">
                    {products[2].description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-bold text-gray-900">
                    Key Benefits:
                  </h3>
                  {products[2].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-serif">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-gray-700 font-sans">
                    <strong>Volume:</strong> {products[2].volume}
                  </p>
                  <p className="text-sm text-green-700 font-sans mt-2">
                    <strong>✓ {products[2].certification}</strong>
                  </p>
                </div>

                <Button
                  asChild
                  className="bg-amber-700 hover:bg-amber-800 text-white font-sans"
                >
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Tailored Solutions for Every Partner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-amber-200/30">
              <h3 className="text-2xl font-display font-bold mb-4">
                B2B Partnerships
              </h3>
              <p className="font-serif mb-4">
                Bulk supply agreements with competitive pricing for distributors,
                restaurants, and food manufacturers.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Wholesale pricing</li>
                <li>✓ Custom packaging</li>
                <li>✓ Flexible delivery</li>
                <li>✓ Quality guarantees</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-amber-200/30">
              <h3 className="text-2xl font-display font-bold mb-4">
                B2C & Retail
              </h3>
              <p className="font-serif mb-4">
                Direct-to-consumer and retail partnerships for premium health and
                wellness markets.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Individual packaging</li>
                <li>✓ Retail displays</li>
                <li>✓ Marketing support</li>
                <li>✓ Online ordering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
