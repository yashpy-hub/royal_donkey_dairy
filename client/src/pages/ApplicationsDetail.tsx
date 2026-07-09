import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  Pill,
  Leaf,
  Droplet,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import Seo from "@/components/Seo";

export default function ApplicationsDetail() {
  const [, setLocation] = useLocation();

  const applications = [
    {
      id: "cosmetics",
      name: "Cosmetics & Beauty",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      description: "Premium skincare and beauty products",
      benefits: [
        "Natural moisturizing properties",
        "Rich in vitamins and minerals",
        "Anti-aging compounds",
        "Hypoallergenic formula",
      ],
      products: [
        "Face creams and serums",
        "Body lotions",
        "Facial masks",
        "Lip balms",
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: "18 months (powder)",
      },
      minOrder: "100 kg",
      pricing: "Premium tier",
      caseStudy: "Leading Korean cosmetics brand increased sales by 35% using our donkey milk powder",
    },
    {
      id: "pharmaceutical",
      name: "Pharmaceuticals",
      icon: Pill,
      color: "from-blue-500 to-cyan-500",
      description: "Drug manufacturing and supplements",
      benefits: [
        "Bioavailable nutrients",
        "Immune system support",
        "Anti-inflammatory properties",
        "GMP certified production",
      ],
      products: [
        "Supplement capsules",
        "Immune boosters",
        "Joint health products",
        "Digestive aids",
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: "24 months (powder)",
      },
      minOrder: "500 kg",
      pricing: "Commercial tier",
      caseStudy: "European pharmaceutical company reduced production costs by 22% with our supply",
    },
    {
      id: "nutraceuticals",
      name: "Nutraceuticals",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      description: "Health supplements and functional foods",
      benefits: [
        "Complete amino acid profile",
        "Natural probiotic support",
        "Bone health enhancement",
        "Muscle recovery support",
      ],
      products: [
        "Protein powders",
        "Health drinks",
        "Functional foods",
        "Sports supplements",
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: "18 months (powder)",
      },
      minOrder: "200 kg",
      pricing: "Standard tier",
      caseStudy: "US supplement brand expanded product line with 40% margin improvement",
    },
    {
      id: "skincare",
      name: "Premium Skincare",
      icon: Droplet,
      color: "from-purple-500 to-pink-500",
      description: "Luxury skincare brands",
      benefits: [
        "Gentle on sensitive skin",
        "Natural hydration",
        "Collagen support",
        "Anti-oxidant rich",
      ],
      products: [
        "Anti-aging creams",
        "Hydrating serums",
        "Night treatments",
        "Eye creams",
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: "20 months (powder)",
      },
      minOrder: "150 kg",
      pricing: "Premium tier",
      caseStudy: "Luxury skincare brand achieved 50% premium pricing with our ingredient",
    },
    {
      id: "soaps",
      name: "Natural Soaps",
      icon: ShoppingCart,
      color: "from-yellow-500 to-orange-500",
      description: "Artisanal and natural soap manufacturing",
      benefits: [
        "Gentle cleansing",
        "Skin nourishing",
        "Natural lather",
        "Eco-friendly",
      ],
      products: [
        "Bar soaps",
        "Liquid soaps",
        "Specialty soaps",
        "Shampoo bars",
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: "24 months (powder)",
      },
      minOrder: "100 kg",
      pricing: "Standard tier",
      caseStudy: "Artisanal soap maker increased production 3x with our supply",
    },
    {
      id: "private-label",
      name: "Private Label Manufacturing",
      icon: TrendingUp,
      color: "from-indigo-500 to-blue-500",
      description: "White-label manufacturing services",
      benefits: [
        "Custom formulations",
        "Flexible packaging",
        "Quality assurance",
        "Scalable production",
      ],
      products: [
        "Custom skincare lines",
        "Branded supplements",
        "Private label products",
        "OEM solutions",
      ],
      specifications: {
        proteinContent: "3.1%",
        fatContent: "1.3%",
        lactoseContent: "4.7%",
        shelf_life: "18-24 months",
      },
      minOrder: "1000 kg",
      pricing: "Industrial tier",
      caseStudy: "Retail chain launched 5 private label products with 60% margin",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title="Donkey Milk in Cosmetics, Pharma & Nutrition"
        description="How leading brands use Rudra Dairy & Farm donkey milk powder in skincare, supplements, and pharmaceuticals — with case studies and industry benefits."
        path="/applications-detail"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
            { "@type": "ListItem", position: 2, name: "Applications", item: "https://rudradairyandfarm.shop/applications-detail" },
          ],
        }}
      />
      {/* Header */}
      <section className="py-12 px-4 animate-fade-in-up">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full mb-6 animate-bounce-in">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-200">
              Industry Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-in-up">
            Application-Focused Solutions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Donkey milk and powder for cosmetics, pharmaceuticals, nutraceuticals, and more
          </p>
        </div>
      </section>

      {/* Cross-link to differentiate from /applications */}
      <div className="text-center py-2">
        <Link href="/applications" className="text-sm text-orange-600 dark:text-orange-400 hover:underline">
          ← Back to Applications &amp; Uses overview
        </Link>
      </div>

      {/* Applications Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="cosmetics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {applications.map((app) => (
                <TabsTrigger key={app.id} value={app.id} className="text-xs md:text-sm">
                  {app.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {applications.map((app) => (
              <TabsContent key={app.id} value={app.id}>
                <div className="space-y-6">
                  {/* Hero Card */}
                  <Card className={`bg-gradient-to-r ${app.color} text-white p-8 rounded-lg`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{app.name}</h2>
                        <p className="text-lg opacity-90">{app.description}</p>
                      </div>
                      <app.icon className="w-12 h-12 opacity-50" />
                    </div>
                  </Card>

                  {/* Benefits & Products */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Benefits */}
                    <Card className="p-6 hover-lift">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {app.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <span className="text-orange-600 dark:text-orange-400 font-bold">
                              ✓
                            </span>
                            <span className="text-slate-700 dark:text-slate-300">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    {/* Products */}
                    <Card className="p-6 hover-lift">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                        Typical Products
                      </h3>
                      <ul className="space-y-3">
                        {app.products.map((product, idx) => (
                          <li key={idx} className="flex items-start gap-3 stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <span className="text-green-600 dark:text-green-400 font-bold">
                              •
                            </span>
                            <span className="text-slate-700 dark:text-slate-300">
                              {product}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Specifications */}
                  <Card className="p-6 hover-glow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Product Specifications
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      {Object.entries(app.specifications).map(([key, value], idx) => (
                        <div key={key} className="bg-orange-50 dark:bg-slate-700 p-4 rounded hover-scale stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">
                            {key.replace(/_/g, " ")}
                          </p>
                          <p className="text-lg font-bold text-slate-900 dark:text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Order Info */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Minimum Order
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {app.minOrder}
                      </p>
                    </Card>
                    <Card className="p-6 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Pricing Tier
                      </p>
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {app.pricing}
                      </p>
                    </Card>
                    <Card className="p-6 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Delivery Time
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        15 Days
                      </p>
                    </Card>
                  </div>

                  {/* Case Study */}
                  <Card className="p-6 bg-blue-50 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-700">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-300 mb-2">
                      Success Story
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 italic">
                      "{app.caseStudy}"
                    </p>
                  </Card>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => setLocation("/contact")}
                  >
                    Request Quotation for {app.name} →
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            We work with businesses across multiple sectors. Contact us for custom solutions tailored to your needs.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setLocation("/contact")}
          >
            Get Custom Solution →
          </Button>
        </div>
      </section>

      {/* Related Pages — internal links */}
      <section className="py-12 px-4 bg-orange-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/products" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Products</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Bulk donkey milk &amp; powder</p>
            </Link>
            <Link href="/applications" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">All Applications</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Industry overview</p>
            </Link>
            <Link href="/markets" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Export Markets</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">UAE, GCC, EU, Korea</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
