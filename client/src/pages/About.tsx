import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, Linkedin } from "lucide-react";
import Seo from "@/components/Seo";

/**
 * About Page - Founder Profile
 * Premium Artisanal Heritage Design
 * - Personal founder story
 * - Display picture and social handles
 * - Business vision and values
 */
export default function About() {
  return (
    <div className="min-h-screen">
      <Seo
        title="Meet Yash Pawar — Co-Founder & Managing Director of Rudra Dairy & Farm"
        description="Meet Yash Pawar, the founder behind Rudra Dairy & Farm — a trusted Indian supplier of premium donkey milk and donkey milk powder for B2B, cosmetic, and pharmaceutical clients since 2022."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
            { "@type": "ListItem", position: 2, name: "Founder", item: "https://rudradairyandfarm.shop/about" },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Meet Yash, Co-Founder &amp; Managing Director
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              The visionary behind Rudra Dairy & Farm
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to differentiate from /who-we-are */}
      <div className="text-center py-2">
        <Link href="/who-we-are" className="text-sm text-orange-600 dark:text-orange-400 hover:underline">
          Prefer the company story? Read Who We Are →
        </Link>
      </div>

      {/* Founder Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/founder-yash.png"
                  alt="Yash Pawar - Co-Founder & Managing Director of Rudra Dairy & Farm"
                  className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-2">
                  Yash Pawar
                </h2>
                <p className="text-lg text-amber-700 font-sans font-semibold">
                  Co-Founder &amp; Managing Director
                </p>
              </div>

              <div className="space-y-6 font-serif text-gray-700 leading-relaxed">
                <p>
                  Yash Pawar founded Rudra Dairy & Farm with a singular vision:
                  to bring the world's finest artisanal donkey milk to discerning
                  consumers and businesses. With deep roots in agricultural
                  heritage and a commitment to quality, Yash has transformed a
                  traditional practice into a modern, certified enterprise.
                </p>

                <p>
                  His journey began with a passion for sustainable farming and
                  animal welfare. Recognizing the exceptional nutritional and
                  therapeutic properties of donkey milk, Yash invested years in
                  perfecting production methods, obtaining international
                  certifications, and building a reputation for uncompromising
                  quality.
                </p>

                <p>
                  Today, Rudra Dairy & Farm stands as a testament to Yash's
                  dedication—a thriving business that serves B2B partners, retail
                  customers, and wholesale distributors across India. Every
                  product bearing the Rudra Dairy & Farm name reflects his
                  commitment to excellence, integrity, and trust.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 space-y-4">
                <h3 className="font-display font-bold text-gray-900 text-lg">
                  Connect with Yash
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-700" />
                    <a
                      href="tel:+91965714327"
                      className="text-amber-700 hover:text-amber-800 font-sans"
                    >
                      +91 965714327
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-amber-700" />
                    <a
                      href="https://www.linkedin.com/in/yash-pawarpy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 font-sans"
                    >
                      linkedin.com/in/yash-pawarpy
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-200">
                  <p className="text-sm text-gray-700 font-sans mb-3">
                    Follow Rudra Dairy & Farm on social media:
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/rudradairyandfarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-amber-100 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-amber-700" />
                      <span className="text-sm font-sans text-gray-700">
                        Instagram
                      </span>
                    </a>
                    <a
                      href="https://facebook.com/rudradairyandfarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-amber-100 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-amber-700" />
                      <span className="text-sm font-sans text-gray-700">
                        Facebook
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-amber-700 hover:bg-amber-800 text-white font-sans w-full"
              >
                <Link href="/contact">Discuss Business Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Yash's Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700 font-serif">
                Committed to ethical farming practices and environmental
                stewardship that benefit both animals and the planet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-amber-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-700 font-serif">
                Every product meets the highest international standards for
                quality, purity, and nutritional value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-700 font-serif">
                Transparent business practices and honest relationships with
                customers, partners, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            The Rudra Dairy & Farm Journey
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Vision & Planning
                </h3>
                <p className="text-gray-700 font-serif">
                  Yash identified the untapped potential of donkey milk and began
                  extensive research into production and certification standards.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Farm Establishment
                </h3>
                <p className="text-gray-700 font-serif">
                  Built a state-of-the-art facility with optimal conditions for
                  donkey welfare and milk production excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Certifications & Quality
                </h3>
                <p className="text-gray-700 font-serif">
                  Obtained FSSAI, ISO, and IEC certifications, establishing Rudra
                  Dairy & Farm as a trusted, certified producer.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-700 text-white font-display font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Market Expansion
                </h3>
                <p className="text-gray-700 font-serif">
                  Expanded to serve B2B, B2C, wholesale, and retail markets,
                  building strong partnerships across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Partner with Rudra Dairy & Farm
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            Yash is always open to discussing new partnerships and opportunities.
            Reach out today to explore how we can work together.
          </p>
          <Button
            asChild
            className="bg-white text-amber-700 hover:bg-amber-50 font-sans text-base h-12 px-8"
          >
            <Link href="/contact">Get in Touch with Yash</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
