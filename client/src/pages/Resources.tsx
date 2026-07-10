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
  Lightbulb,
} from "lucide-react";
import Seo from "@/components/Seo";
import { Link } from "wouter";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";
import Reviews from "@/components/Reviews";

export default function Resources() {
  const t = useT();
  const kw = usePageKeywords();
  const articles = [
    {
      id: 1,
      title: t("res.art1Title"),
      excerpt: t("res.art1Excerpt"),
      date: "June 15, 2024",
      category: t("res.art1Cat"),
      readTime: "12 min",
      image: "📚",
    },
    {
      id: 2,
      title: t("res.art2Title"),
      excerpt: t("res.art2Excerpt"),
      date: "June 10, 2024",
      category: t("res.art2Cat"),
      readTime: "8 min",
      image: "🧴",
    },
    {
      id: 3,
      title: t("res.art3Title"),
      excerpt: t("res.art3Excerpt"),
      date: "June 1, 2024",
      category: t("res.art3Cat"),
      readTime: "10 min",
      image: "🌱",
    },
    {
      id: 4,
      title: t("res.art4Title"),
      excerpt: t("res.art4Excerpt"),
      date: "May 25, 2024",
      category: t("res.art4Cat"),
      readTime: "15 min",
      image: "✅",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      company: t("res.cs1Company"),
      challenge: t("res.cs1Challenge"),
      solution: t("res.cs1Solution"),
      results: [t("res.cs1r1"), t("res.cs1r2"), t("res.cs1r3")],
      industry: t("res.cs1Industry"),
      roi: "240%",
    },
    {
      id: 2,
      company: t("res.cs2Company"),
      challenge: t("res.cs2Challenge"),
      solution: t("res.cs2Solution"),
      results: [t("res.cs2r1"), t("res.cs2r2"), t("res.cs2r3")],
      industry: t("res.cs2Industry"),
      roi: "180%",
    },
    {
      id: 3,
      company: t("res.cs3Company"),
      challenge: t("res.cs3Challenge"),
      solution: t("res.cs3Solution"),
      results: [t("res.cs3r1"), t("res.cs3r2"), t("res.cs3r3")],
      industry: t("res.cs3Industry"),
      roi: "320%",
    },
    {
      id: 4,
      company: t("res.cs4Company"),
      challenge: t("res.cs4Challenge"),
      solution: t("res.cs4Solution"),
      results: [t("res.cs4r1"), t("res.cs4r2"), t("res.cs4r3")],
      industry: t("res.cs4Industry"),
      roi: "210%",
    },
  ];

  const whitePapers = [
    {
      id: 1,
      title: t("res.wp1Title"),
      description: t("res.wp1Desc"),
      pages: 45,
      format: "PDF",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: t("res.wp2Title"),
      description: t("res.wp2Desc"),
      pages: 32,
      format: "PDF",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: t("res.wp3Title"),
      description: t("res.wp3Desc"),
      pages: 58,
      format: "PDF",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: t("res.wp4Title"),
      description: t("res.wp4Desc"),
      pages: 28,
      format: "PDF",
      downloadUrl: "#",
    },
  ];

  const buyerGuides = [
    {
      title: "How to Import Donkey Milk Powder (Step by Step)",
      excerpt:
        "The documents, duties and market steps every buyer needs before placing a first order — EU, UAE, Japan, Korea and beyond.",
      readTime: "9 min",
      links: [
        { label: "Import Guide", href: "/guides/import-guide" },
        { label: "COA Explained", href: "/guides/coa-guide" },
      ],
    },
    {
      title: "How to Formulate with Donkey Milk Powder",
      excerpt:
        "Add donkey milk powder to the water phase at 1–10%, validate preservation, and scale from pilot to production across skincare and soap.",
      readTime: "11 min",
      links: [
        { label: "Applications", href: "/applications" },
        {
          label: "Cosmetic Manufacturers",
          href: "/money/donkey-milk-powder-for-cosmetic-manufacturers",
        },
      ],
    },
    {
      title: "Reading a Certificate of Analysis (COA)",
      excerpt:
        "What every line on a donkey milk powder COA means — moisture, solubility, microbial limits and batch traceability — so you can qualify a supplier fast.",
      readTime: "7 min",
      links: [
        { label: "COA Guide", href: "/guides/coa-guide" },
        { label: "Quality Control", href: "/guides/quality-control" },
      ],
    },
    {
      title: "Spray-Dried vs Freeze-Dried Donkey Milk Powder",
      excerpt:
        "When to choose each process for your product — native protein retention, cost and shelf life — with guidance for premium skincare and nutraceuticals.",
      readTime: "8 min",
      links: [
        {
          label: "Freeze-Dried Manufacturer",
          href: "/money/freeze-dried-donkey-milk-powder-manufacturer",
        },
        { label: "Manufacturing Guide", href: "/guides/manufacturing-guide" },
      ],
    },
    {
      title: "Donkey Milk Powder Shelf Life & Storage",
      excerpt:
        "How to store powder to protect composition, what shortens shelf life, and how to read expiry on a batch COA.",
      readTime: "6 min",
      links: [
        { label: "Shelf Life", href: "/guides/shelf-life" },
        { label: "Storage Guide", href: "/guides/storage-guide" },
      ],
    },
    {
      title: "Private Label & OEM: Launch Your Own Line",
      excerpt:
        "From 25 kg MOQ to custom packs and labelling — how brands launch a donkey-milk line under their own name with certified manufacturing.",
      readTime: "10 min",
      links: [
        {
          label: "Private Label",
          href: "/money/private-label-donkey-milk-powder",
        },
        {
          label: "OEM Manufacturer",
          href: "/money/oem-donkey-milk-powder-manufacturer",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Seo
        title={t("res.seoTitle")}
        description={t("res.seoDesc")}
        path="/resources"
        keywords={kw}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("res.bcHome"),
              item: "https://rudradairyandfarm.shop/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("res.bcRes"),
              item: "https://rudradairyandfarm.shop/resources",
            },
          ],
        }}
      />
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-200">
              {t("res.badge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("res.heroTitle")}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t("res.heroSub")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="articles">{t("res.tabArticles")}</TabsTrigger>
              <TabsTrigger value="cases">{t("res.tabCases")}</TabsTrigger>
              <TabsTrigger value="guides">Buyer Guides</TabsTrigger>
              <TabsTrigger value="papers">{t("res.tabPapers")}</TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map(article => (
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
                          {t("res.readMore")}
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
                {caseStudies.map(study => (
                  <Card
                    key={study.id}
                    className="p-6 hover:shadow-lg transition-all"
                  >
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
                          {t("res.roiAchieved")}
                        </p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {study.roi}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">
                          {t("res.challenge")}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">
                          {t("res.solution")}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-2">
                        {t("res.results")}
                      </p>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2"
                          >
                            <span className="text-green-600 dark:text-green-400">
                              ✓
                            </span>
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
                      {t("res.readCase")}
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Buyer Guides Tab */}
            <TabsContent value="guides" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {buyerGuides.map((g, i) => (
                  <Card
                    key={i}
                    className="hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-4 h-4 text-orange-600" />
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {g.readTime} read
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {g.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                        {g.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {g.links.map((l, j) => (
                          <Link
                            key={j}
                            href={l.href}
                            className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors"
                          >
                            {l.label}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* White Papers Tab */}
            <TabsContent value="papers" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {whitePapers.map(paper => (
                  <Card
                    key={paper.id}
                    className="p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <FileText className="w-8 h-8 text-orange-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                          {paper.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {paper.pages} {t("res.pagesLabel")} • {paper.format}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {paper.description}
                    </p>

                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => alert(t("res.downloadAlert"))}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t("res.downloadPdf")}
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
            {t("res.newsTitle")}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {t("res.newsText")}
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder={t("res.newsPlaceholder")}
              className="flex-1 px-4 py-3 rounded-lg border border-orange-200 dark:border-orange-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              {t("res.subscribe")}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-lg p-8 text-center text-white">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl font-bold mb-4">{t("res.ctaTitle")}</h2>
          <p className="text-lg mb-6 opacity-90">{t("res.ctaText")}</p>
          <Button variant="secondary" size="lg">
            {t("res.ctaBtn")}
          </Button>
        </div>
      </section>

      {/* Related Pages — internal links */}
      <section className="py-12 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {t("res.exploreMore")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/products"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("res.relProducts")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("res.relProductsSub")}
              </p>
            </Link>
            <Link
              href="/applications"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("res.relApps")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("res.relAppsSub")}
              </p>
            </Link>
            <Link
              href="/contact"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("res.relContact")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("res.relContactSub")}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
    </div>
  );
}
