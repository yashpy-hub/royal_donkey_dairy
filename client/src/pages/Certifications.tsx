import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Award, Shield } from "lucide-react";
import Seo from "@/components/Seo";

/**
 * Certifications Page
 * Premium Artisanal Heritage Design
 * - Display certifications and compliance
 * - Quality standards and credentials
 * - Trust and credibility indicators
 */
export default function Certifications() {
  const certifications = [
    {
      name: "FSSAI Certification",
      description: "Food Safety and Standards Authority of India",
      details:
        "Ensures our products meet all food safety standards and regulations set by the Indian government. Regular audits and compliance checks.",
      icon: "🏛️",
    },
    {
      name: "ISO Certification",
      description: "International Organization for Standardization",
      details:
        "Demonstrates our commitment to quality management systems and international best practices in production and delivery.",
      icon: "⭐",
    },
    {
      name: "IEC Certification",
      description: "Import Export Code - India",
      details:
        "Authorizes us to engage in international trade. Enables us to export our premium donkey milk products globally.",
      icon: "🌍",
    },
    {
      name: "HACCP Compliance",
      description: "Hazard Analysis and Critical Control Points",
      details:
        "Systematic approach to food safety that identifies and controls potential hazards in our production process.",
      icon: "✓",
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="FSSAI, ISO, HACCP Certified Donkey Milk Supplier"
        description="Rudra Dairy & Farm is FSSAI, ISO, IEC, and HACCP certified for donkey milk and powder. Learn about our quality standards, compliance, and international certifications."
        path="/certifications"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
            { "@type": "ListItem", position: 2, name: "Certifications", item: "https://rudradairyandfarm.shop/certifications" },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Quality Certifications
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              Rudra Dairy & Farm is certified and compliant with all major
              international and national quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Badge Display */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Credentials
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              Every certification represents our commitment to excellence and
              your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-amber-700 font-sans font-semibold mb-3">
                  {cert.description}
                </p>
                <p className="text-gray-700 font-serif">{cert.details}</p>
              </div>
            ))}
          </div>

          {/* Certification Badge Image */}
          <div className="flex justify-center mb-16">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/3D4mTBAV8JSrjdMbxwumwS/certifications-badge-K5VPuPCUmYXRn8v3vE2TEc.webp"
              alt="Rudra Dairy & Farm Certifications Badge"
              className="w-full max-w-sm h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Compliance Standards
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 p-8 bg-white rounded-xl border border-green-100">
              <Shield className="w-12 h-12 text-green-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Food Safety Standards
                </h3>
                <p className="text-gray-700 font-serif">
                  Our production facility adheres to all FSSAI guidelines,
                  including proper hygiene, sanitation, and storage protocols.
                  Regular inspections ensure continuous compliance.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-white rounded-xl border border-amber-100">
              <Award className="w-12 h-12 text-amber-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Quality Management
                </h3>
                <p className="text-gray-700 font-serif">
                  ISO certification demonstrates our commitment to consistent
                  quality, continuous improvement, and customer satisfaction
                  across all operations.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-white rounded-xl border border-green-100">
              <CheckCircle className="w-12 h-12 text-green-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Hazard Control
                </h3>
                <p className="text-gray-700 font-serif">
                  HACCP protocols identify and eliminate potential hazards at
                  every stage of production, from collection to packaging,
                  ensuring product safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Testing & Quality Assurance
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  Microbiological Testing
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  Every batch is tested for harmful bacteria and pathogens to
                  ensure absolute safety and purity.
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  Nutritional Analysis
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  Regular analysis confirms the nutritional content and quality
                  of our milk products.
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  Chemical Testing
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  We test for pesticides, heavy metals, and other contaminants
                  to guarantee purity.
                </p>
              </div>

              <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  Sensory Evaluation
                </h3>
                <p className="text-gray-700 font-serif text-sm">
                  Professional tasting and quality assessment ensure consistent
                  taste and texture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Regulatory Compliance
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 font-serif">
            <p>
              Rudra Dairy & Farm operates in full compliance with all Indian
              government regulations and international standards. Our commitment
              to regulatory excellence ensures that every product meets or exceeds
              the highest quality benchmarks.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-amber-200/30">
              <h3 className="font-display font-bold text-lg mb-3">
                Key Regulatory Bodies
              </h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Food Safety and Standards Authority of India (FSSAI)</li>
                <li>✓ Ministry of Commerce & Industry (IEC)</li>
                <li>✓ Bureau of Indian Standards (BIS)</li>
                <li>✓ ISO International Standards Organization</li>
                <li>✓ State Agricultural Department</li>
              </ul>
            </div>

            <p>
              We maintain detailed documentation of all certifications,
              inspection reports, and test results. These records are available
              for review by partners, customers, and regulatory authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Verify Our Certifications
          </h2>

          <div className="max-w-3xl mx-auto bg-amber-50 p-8 rounded-xl border border-amber-200">
            <p className="text-gray-700 font-serif mb-6">
              All our certifications are verifiable and can be confirmed through
              official channels. We encourage customers and partners to verify
              our credentials independently.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-display font-bold text-gray-900 mb-2">
                  FSSAI License Number
                </p>
                <p className="text-gray-600 font-sans font-mono">
                  [License details available upon request]
                </p>
              </div>

              <div>
                <p className="font-display font-bold text-gray-900 mb-2">
                  Import Export Code (IEC)
                </p>
                <p className="text-gray-600 font-sans font-mono">
                  [IEC details available upon request]
                </p>
              </div>

              <div>
                <p className="font-display font-bold text-gray-900 mb-2">
                  ISO Certificate Number
                </p>
                <p className="text-gray-600 font-sans font-mono">
                  [ISO details available upon request]
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-serif mt-6">
              For detailed certification information, please contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Certified Quality You Can Trust
          </h2>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            Our certifications are your guarantee of quality, safety, and
            excellence. Partner with Rudra Dairy & Farm with confidence.
          </p>
          <Button
            asChild
            className="bg-white text-amber-700 hover:bg-amber-50 font-sans text-base h-12 px-8"
          >
            <Link href="/contact">Request Certification Details</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
