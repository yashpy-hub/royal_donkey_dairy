import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  FileText,
  TrendingUp,
  Award,
  Download,
  ArrowRight,
} from "lucide-react";
import Seo from "@/components/Seo";
import { Link } from "wouter";

export default function Resources() {
  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Donkey Milk: Composition & Benefits",
      excerpt:
        "Discover the nutritional profile of donkey milk and why it's becoming the preferred ingredient for premium skincare and supplements.",
      date: "June 15, 2024",
      category: "Technical",
      readTime: "12 min",
      image: "📚",
    },
    {
      id: 2,
      title: "Donkey Milk in Cosmetics: Science Behind the Beauty Trend",
      excerpt:
        "Explore the scientific evidence supporting donkey milk's use in cosmetics and skincare formulations.",
      date: "June 10, 2024",
      category: "Industry",
      readTime: "8 min",
      image: "🧴",
    },
    {
      id: 3,
      title: "Sustainable Dairy Farming: Our Production Methods",
      excerpt:
        "Learn about our ethical and sustainable approach to donkey dairy production.",
      date: "June 1, 2024",
      category: "Sustainability",
      readTime: "10 min",
      image: "🌱",
    },
    {
      id: 4,
      title: "Regulatory Compliance: FSSAI, ISO & International Standards",
      excerpt:
        "Complete overview of certifications and compliance requirements for donkey milk products.",
      date: "May 25, 2024",
      category: "Compliance",
      readTime: "15 min",
      image: "✅",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      company: "Premium Skincare Brand (EU)",
      challenge: "Finding a natural, ethical ingredient for luxury skincare line",
      solution: "Partnered with Rudra Dairy for exclusive donkey milk powder supply",
      results: [
        "50% premium pricing achieved",
        "35% sales increase in first year",
        "Expanded to 12 European markets",
      ],
      industry: "Cosmetics",
      roi: "240%",
    },
    {
      id: 2,
      company: "Pharmaceutical Supplement Manufacturer (USA)",
      challenge: "Reducing production costs while maintaining quality",
      solution: "Switched to Rudra Dairy's certified donkey milk powder",
      results: [
        "22% cost reduction",
        "Improved product efficacy",
        "Launched 3 new product lines",
      ],
      industry: "Pharmaceuticals",
      roi: "180%",
    },
    {
      id: 3,
      company: "Natural Soap Artisan (UK)",
      challenge: "Scaling production while maintaining natural ingredient integrity",
      solution: "Bulk supply agreement with Rudra Dairy",
      results: [
        "3x production increase",
        "Maintained premium quality",
        "Entered 50+ retail locations",
      ],
      industry: "Natural Products",
      roi: "320%",
    },
    {
      id: 4,
      company: "Nutraceutical Company (Middle East)",
      challenge: "Meeting Halal certification requirements",
      solution: "Sourced Halal-certified donkey milk from Rudra Dairy",
      results: [
        "Successfully launched Halal line",
        "Captured new market segment",
        "100+ liters monthly supply",
      ],
      industry: "Nutraceuticals",
      roi: "210%",
    },
  ];

  const whitePapers = [
    {
      id: 1,
      title: "Global Donkey Milk Market Analysis 2024",
      description:
        "Comprehensive market research covering market size, growth trends, and future projections for donkey milk products globally.",
      pages: 45,
      format: "PDF",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Donkey Milk vs Cow Milk: Comparative Analysis",
      description:
        "Detailed scientific comparison of nutritional profiles, benefits, and applications in different industries.",
      pages: 32,
      format: "PDF",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Regulatory Framework for Donkey Milk Products",
      description:
        "Complete guide to international regulations, certifications, and compliance requirements across major markets.",
      pages: 58,
      format: "PDF",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Production Efficiency & Sustainability Report",
      description:
        "Our approach to sustainable production, environmental impact, and efficiency metrics.",
      pages: 28,
      format: "PDF",
      downloadUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title="Donkey Milk Guides, Research & Resources"
        description="Expert guides on donkey milk composition, benefits, sustainable farming, and regulatory compliance (FSSAI, ISO). The knowledge hub from Rudra Dairy & Farm."
        path="/resources"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
            { "@type": "ListItem", position: 2, name: "Resources", item: "https://rudradairyandfarm.shop/resources" },
          ],
        }}
      />
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-200">
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Resources & Authority
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Industry insights, case studies, and technical resources for donkey milk products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="cases">Case Studies</TabsTrigger>
              <TabsTrigger value="papers">White Papers</TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Card
                    key={article.id}
                    className="hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4">{article.image}</div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {article.date}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700"
                        >
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="cases" className="space-y-6">
              <div className="space-y-4">
                {caseStudies.map((study) => (
                  <Card key={study.id} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {study.company}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {study.industry}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          ROI Achieved
                        </p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {study.roi}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">
                          Challenge
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">
                          Solution
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-2">
                        Results
                      </p>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2"
                          >
                            <span className="text-green-600 dark:text-green-400">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-600 text-orange-600 hover:bg-orange-50"
                    >
                      Read Full Case Study →
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* White Papers Tab */}
            <TabsContent value="papers" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {whitePapers.map((paper) => (
                  <Card key={paper.id} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <FileText className="w-8 h-8 text-orange-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                          {paper.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {paper.pages} pages • {paper.format}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {paper.description}
                    </p>

                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => alert("Download link would be here")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-4 bg-orange-50 dark:bg-orange-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Subscribe to our newsletter for industry insights, new resources, and market updates.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-orange-200 dark:border-orange-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-lg p-8 text-center text-white">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl font-bold mb-4">
            Industry Leadership Through Knowledge
          </h2>
          <p className="text-lg mb-6 opacity-90">
            We're committed to advancing the donkey milk industry through research, education, and innovation.
          </p>
          <Button variant="secondary" size="lg">
            Contact Our Research Team →
          </Button>
        </div>
      </section>

      {/* Related Pages — internal links */}
      <section className="py-12 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/products" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Products</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Donkey milk &amp; powder for your line</p>
            </Link>
            <Link href="/applications" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Applications</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">How brands use donkey milk</p>
            </Link>
            <Link href="/contact" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Contact Us</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Talk to our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
