import { Mail, Phone, MessageCircle, Instagram, Facebook, MapPin, Building2, Clock, CalendarCheck, Handshake, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/emailService";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { Link } from "wouter";
import { BUSINESS } from "@shared/business";

/**
 * Contact Page - Rudra Dairy & Farm
 * Contact information and inquiry form with EmailJS integration
 * All emails sent to: info@rudradairyandfarm.shop
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    businessType: "b2b",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const success = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || `Inquiry - ${formData.businessType.toUpperCase()}`,
        message: formData.message,
        businessType: formData.businessType,
      });

      if (success) {
        toast.success("Thank you! Your inquiry has been sent to info@rudradairyandfarm.shop");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          businessType: "b2b",
          message: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Rudra Dairy & Farm — Bulk Donkey Milk Inquiries"
        description="Contact Rudra Dairy & Farm for bulk donkey milk and powder quotes, private label, and B2B partnerships. Email info@rudradairyandfarm.shop, donkeyfarm79@gmail.com, donkeyfarm79@outlook.com or WhatsApp +91 9112327322."
        path="/contact"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact Rudra Dairy & Farm — Bulk Donkey Milk Inquiries",
            url: "https://rudradairyandfarm.shop/contact",
            isPartOf: { "@id": "https://rudradairyandfarm.shop/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
                { "@type": "ListItem", position: 2, name: "Contact", item: "https://rudradairyandfarm.shop/contact" },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://rudradairyandfarm.shop/#organization",
            name: BUSINESS.name,
            image: "https://rudradairyandfarm.shop/og-image.png",
            url: "https://rudradairyandfarm.shop",
            email: BUSINESS.emails.all,
            telephone: BUSINESS.phone,
            priceRange: BUSINESS.priceRange,
            address: [
              {
                "@type": "PostalAddress",
                "@id": "https://rudradairyandfarm.shop/#office",
                streetAddress: BUSINESS.officeAddress.streetAddress,
                addressLocality: BUSINESS.officeAddress.locality,
                addressRegion: BUSINESS.officeAddress.region,
                postalCode: BUSINESS.officeAddress.postalCode,
                addressCountry: BUSINESS.officeAddress.country,
              },
              {
                "@type": "PostalAddress",
                "@id": "https://rudradairyandfarm.shop/#farm",
                streetAddress: BUSINESS.farmAddress.streetAddress,
                addressLocality: BUSINESS.farmAddress.locality,
                addressRegion: BUSINESS.farmAddress.region,
                postalCode: BUSINESS.farmAddress.postalCode,
                addressCountry: BUSINESS.farmAddress.country,
              },
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.geo.office.latitude,
              longitude: BUSINESS.geo.office.longitude,
            },
            openingHoursSpecification: BUSINESS.openingHoursSpecification,
            areaServed: BUSINESS.areaServed,
            sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
          },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 to-green-50 dark:to-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Contact Rudra Dairy & Farm for donkey milk and powder inquiries, partnerships, and business opportunities.
            </p>
            <div className="mt-8">
              <Link
                href="/appoint-meeting"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold h-12 px-8 rounded-lg transition-colors"
              >
                <CalendarCheck className="w-5 h-5" /> Appoint a Meeting for Business Collaboration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-slide-in-up">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* WhatsApp */}
            <div className="p-8 bg-gradient-to-br from-green-50 dark:from-green-900/20 to-white dark:to-gray-800 border border-green-200 dark:border-green-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              <MessageCircle className="w-12 h-12 text-green-700 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/919112327322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium text-center block"
              >
                +91 9112327322
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Business WhatsApp
              </p>
            </div>

            {/* Email */}
            <div className="p-8 bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-white dark:to-gray-800 border border-orange-200 dark:border-orange-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <Mail className="w-12 h-12 text-orange-700 dark:text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                Email
              </h3>
              <div className="text-center space-y-1">
                <a
                  href="mailto:info@rudradairyandfarm.shop"
                  className="text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium block break-all"
                >
                  info@rudradairyandfarm.shop
                </a>
                <a
                  href="mailto:donkeyfarm79@gmail.com"
                  className="text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium block break-all"
                >
                  donkeyfarm79@gmail.com
                </a>
                <a
                  href="mailto:donkeyfarm79@outlook.com"
                  className="text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium block break-all"
                >
                  donkeyfarm79@outlook.com
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                All mailboxes monitored
              </p>
            </div>

            {/* Phone */}
            <div className="p-8 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-800 border border-blue-200 dark:border-blue-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
              <Phone className="w-12 h-12 text-blue-700 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                Phone
              </h3>
              <a
                href="tel:+919112327322"
                className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-center block"
              >
                +91 9112327322
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Business Hours
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://instagram.com/rudradairyandfarm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full hover:scale-110 transition-transform"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/rudradairyandfarm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Send us a Message
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              {/* Name */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                />
              </div>

              {/* Business Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Business Type
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                >
                  <option value="b2b">B2B Partnership</option>
                  <option value="b2c">B2C Retail</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="industrial">Industrial</option>
                  <option value="pharmaceutical">Pharmaceutical</option>
                  <option value="cosmetic">Cosmetic</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-4">
                All emails will be sent to: <strong>{BUSINESS.emails.all.join(", ")}</strong>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Addresses + PAN India network + trust */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Our Presence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Office */}
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {BUSINESS.officeAddress.label}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex gap-2">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  {BUSINESS.officeAddress.full}
                </p>
              </div>

              {/* Farm */}
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {BUSINESS.farmAddress.label}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex gap-2">
                  <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  {BUSINESS.farmAddress.full}
                </p>
              </div>
            </div>

            {/* PAN India network */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-green-700 dark:text-green-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  PAN India Storage & Logistics Network
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {BUSINESS.panIndiaNetwork.summary}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                {BUSINESS.panIndiaNetwork.facilities.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-term trust statement */}
            <div className="p-8 bg-green-600 dark:bg-green-700 text-white rounded-xl text-center">
              <Handshake className="w-10 h-10 mx-auto mb-3" />
              <p className="text-xl font-semibold">
                {BUSINESS.trustStatement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages — internal links for SEO + conversion */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/products" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Products</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Fresh donkey milk &amp; powder for bulk supply</p>
            </Link>
            <Link href="/markets" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Export Markets</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">UAE, GCC, EU, Korea &amp; worldwide shipping</p>
            </Link>
            <Link href="/certifications" className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center">
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Certifications</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">FSSAI, ISO, IEC &amp; HACCP certified quality</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
