import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Zap, Heart, TrendingUp, Users, Globe } from "lucide-react";

/**
 * Who We Are Page - Rudra Dairy & Farm
 * Most Trusted Suppliers Since 2022
 * Advanced animations and responsive design
 */
export default function WhoWeAre() {
  const milestones = [
    { year: "2022", title: "Founded", description: "Rudra Dairy & Farm established as trusted supplier" },
    { year: "2023", title: "Expansion", description: "Expanded product line to include donkey milk powder" },
    { year: "2024", title: "Growth", description: "Serving 100+ B2B and B2C customers across India" },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "Every product meets international standards. FSSAI, ISO, IEC, and HACCP certified.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Care",
      description: "Our donkeys are treated with utmost care and raised on natural pastures.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Dedicated to serving businesses with reliable, consistent supply and support.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "Eco-friendly farming practices that protect the environment for future generations.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously improving our processes and products to meet market demands.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description: "Expanding our reach to serve more businesses and industries globally.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 via-white dark:via-gray-800 to-green-50 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif">
              Rudra Dairy & Farm - Most Trusted Suppliers of Premium Donkey Milk & Powder Since 2022
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-amber-50 mb-8 text-center animate-slide-in-up">
              Our Journey
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-amber-100 font-serif mb-6 leading-relaxed animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                Since 2022, Rudra Dairy & Farm has been committed to providing the highest quality donkey milk and donkey milk powder to businesses across India. We understand that quality is not just a promise—it's a responsibility.
              </p>
              <p className="text-lg text-gray-700 dark:text-amber-100 font-serif mb-6 leading-relaxed animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                Our donkeys are raised with love and care on natural pastures, ensuring that every drop of milk is pure, nutritious, and free from harmful additives. We work closely with our customers to understand their needs and deliver products that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 dark:text-amber-100 font-serif mb-6 leading-relaxed animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                Whether you're a cosmetic manufacturer, pharmaceutical company, nutritional supplement producer, or direct retailer, Rudra Dairy & Farm is your trusted partner for consistent, high-quality donkey milk and powder supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-green-50 dark:from-green-950 to-white dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            Our Milestones
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 animate-slide-in-up"
                  style={{animationDelay: `${idx * 0.2}s`}}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-700 dark:bg-amber-600 text-white font-display font-bold text-lg hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 dark:text-amber-100 font-serif">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-16 animate-slide-in-up">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 border border-amber-100 dark:border-amber-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-scale"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-amber-700 dark:text-amber-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-amber-100 font-serif text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12 animate-slide-in-up">
            Why Choose Rudra Dairy & Farm?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-display font-bold mb-3">Trusted Since 2022</h3>
              <p className="font-serif text-sm">
                Years of experience serving B2B and B2C customers with consistent quality and reliability.
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-display font-bold mb-3">Certified Quality</h3>
              <p className="font-serif text-sm">
                FSSAI, ISO, IEC, and HACCP certified. Every product meets international standards.
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-display font-bold mb-3">Consistent Supply</h3>
              <p className="font-serif text-sm">
                Reliable delivery of donkey milk and powder to support your business operations.
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:bg-white/20 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-display font-bold mb-3">Business Support</h3>
              <p className="font-serif text-sm">
                Dedicated support for B2B partnerships, wholesale, and retail operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-amber-100 font-serif mb-8 max-w-2xl mx-auto">
            Contact Rudra Dairy & Farm today to discuss your donkey milk and powder requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-sans h-12 px-8 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-amber-700 dark:border-amber-600 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 font-sans h-12 px-8 transition-all duration-300"
            >
              <a href="https://wa.me/919112327322" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
