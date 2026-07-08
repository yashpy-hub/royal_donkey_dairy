import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, TrendingUp, Award, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function Markets() {
  const [, setLocation] = useLocation();

  const markets = [
    {
      id: "uae",
      name: "Middle East & GCC",
      region: "UAE, Saudi Arabia, Qatar",
      flag: "🇦🇪",
      benefits: [
        "Premium market positioning",
        "High demand for organic products",
        "Growing cosmetics industry",
        "Halal certification available",
      ],
      certifications: "FSSAI, ISO 22000, Halal Certified",
      demand: "100+ liters/month",
      pricing: "Premium tier pricing",
    },
    {
      id: "eu",
      name: "European Union",
      region: "Germany, France, UK, Netherlands",
      flag: "🇪🇺",
      benefits: [
        "Organic & natural product demand",
        "Premium skincare market",
        "Pharmaceutical applications",
        "Regulatory compliance ready",
      ],
      certifications: "FSSAI, ISO, EU Organic Certified",
      demand: "500+ liters/month",
      pricing: "Standard tier pricing",
    },
    {
      id: "usa",
      name: "North America",
      region: "USA, Canada",
      flag: "🇺🇸",
      benefits: [
        "Growing wellness market",
        "Supplement industry demand",
        "Premium skincare brands",
        "Nutraceutical applications",
      ],
      certifications: "FSSAI, ISO, FDA Compliant",
      demand: "300+ liters/month",
      pricing: "Premium tier pricing",
    },
    {
      id: "asia",
      name: "Southeast Asia",
      region: "Singapore, Malaysia, Thailand, Indonesia",
      flag: "🌏",
      benefits: [
        "Growing middle class",
        "Cosmetics industry boom",
        "Natural product preference",
        "Competitive pricing advantage",
      ],
      certifications: "FSSAI, ISO, ASEAN Compliant",
      demand: "200+ liters/month",
      pricing: "Competitive tier pricing",
    },
  ];

  const marketDetails = {
    uae: {
      title: "Middle East & GCC Markets",
      description: "Premium market for organic and natural products",
      regulations: "Halal certification, FSSAI compliance, Gulf Standards",
      logistics: "Direct shipping to Dubai, Jebel Ali Port",
      contact: "Regional distributor partnerships available",
      opportunities: [
        "Luxury skincare brands",
        "Pharmaceutical companies",
        "Cosmetics manufacturers",
        "Health supplement brands",
      ],
    },
    eu: {
      title: "European Union Market",
      description: "Strict quality standards, premium pricing",
      regulations: "EU Organic Certification, ISO 22000, FSSAI",
      logistics: "Port of Rotterdam, Hamburg",
      contact: "EU distributor network established",
      opportunities: [
        "Organic cosmetics",
        "Pharmaceutical raw materials",
        "Nutraceutical supplements",
        "Premium skincare",
      ],
    },
    usa: {
      title: "North American Market",
      description: "Growing wellness and supplement industry",
      regulations: "FDA Compliance, FSSAI, ISO Standards",
      logistics: "Port of Los Angeles, New York",
      contact: "US distributor partnerships available",
      opportunities: [
        "Supplement manufacturers",
        "Skincare brands",
        "Wellness products",
        "Functional foods",
      ],
    },
    asia: {
      title: "Southeast Asian Markets",
      description: "Emerging markets with growing demand",
      regulations: "ASEAN Standards, FSSAI, ISO Compliance",
      logistics: "Port of Singapore, Bangkok",
      contact: "ASEAN distributor network",
      opportunities: [
        "Cosmetics manufacturers",
        "Health brands",
        "Natural products",
        "Skincare companies",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-200">
              Global Markets
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            International Expansion
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Rudra Dairy & Farm serves premium markets worldwide with certified donkey milk and powder products
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {markets.map((market) => (
              <Card
                key={market.id}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-orange-500 dark:hover:border-orange-400"
                onClick={() => setLocation(`/markets/${market.id}`)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-2">{market.flag}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {market.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {market.region}
                    </p>
                  </div>
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                      Key Benefits
                    </p>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      {market.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-orange-600">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                      Monthly Demand
                    </p>
                    <p className="text-sm font-bold text-orange-600 dark:text-orange-400">
                      {market.demand}
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                  onClick={() => setLocation(`/markets/${market.id}`)}
                >
                  Explore Market →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Global Reach & Capabilities
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Markets Served", value: "4+" },
              { icon: TrendingUp, label: "Annual Growth", value: "45%" },
              { icon: Zap, label: "Production Capacity", value: "1000+ KG" },
              { icon: Globe, label: "Export Ready", value: "100%" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg bg-orange-50 dark:bg-slate-700"
              >
                <stat.icon className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Expand to New Markets?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Contact our international sales team for market-specific pricing, certifications, and logistics support.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setLocation("/contact")}
          >
            Get in Touch →
          </Button>
        </div>
      </section>
    </div>
  );
}
