import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Page
 * Premium Artisanal Heritage Design
 * - Contact information (email, phone, social)
 * - Contact form for inquiries
 * - Business model specific contact options
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "b2b",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessType: "b2b",
      message: "",
    });
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 font-serif">
              Have questions about our products or partnership opportunities?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* Email */}
            <div className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Mail className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                Email
              </h3>
              <a
                href="mailto:yashpawar.py@gmail.com"
                className="text-amber-700 hover:text-amber-800 font-sans font-medium break-all"
              >
                yashpawar.py@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                Phone
              </h3>
              <a
                href="tel:+919657142020"
                className="text-green-700 hover:text-green-800 font-sans font-medium"
              >
                +91 96571 42020
              </a>
              <p className="text-sm text-gray-600 font-serif mt-2">
                Available 9 AM - 6 PM IST
              </p>
            </div>

            {/* Location */}
            <div className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                Location
              </h3>
              <p className="text-gray-700 font-serif text-sm">
                Royal Donkey Dairy Farm
                <br />
                India
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Follow Us on Social Media
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com/royaldonkeydairy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-pink-50 to-orange-50 border border-orange-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Instagram className="w-6 h-6 text-orange-600" />
                <span className="font-sans font-medium text-gray-900">
                  Instagram
                </span>
              </a>
              <a
                href="https://facebook.com/royaldonkeydairy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="font-sans font-medium text-gray-900">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Send Us a Message
          </h2>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-amber-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent font-sans"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent font-sans"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent font-sans"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">
                  I'm interested in
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent font-sans"
                >
                  <option value="b2b">B2B Partnership</option>
                  <option value="b2c">B2C / Retail</option>
                  <option value="wholesale">Wholesale Distribution</option>
                  <option value="retail">Retail Store Partnership</option>
                  <option value="inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent font-sans"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-sans font-medium h-12"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Business Model Specific Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Partnership Inquiries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                B2B & Wholesale
              </h3>
              <p className="text-gray-700 font-serif mb-6">
                For bulk orders, distribution agreements, and wholesale
                partnerships, contact us with details about your business needs.
              </p>
              <Button
                asChild
                className="w-full bg-green-700 hover:bg-green-800 text-white font-sans"
              >
                <a href="mailto:yashpawar.py@gmail.com?subject=B2B%20Partnership%20Inquiry">
                  B2B Inquiry
                </a>
              </Button>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                B2C & Retail
              </h3>
              <p className="text-gray-700 font-serif mb-6">
                For individual purchases, retail store partnerships, and online
                ordering, reach out with your requirements.
              </p>
              <Button
                asChild
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-sans"
              >
                <a href="mailto:yashpawar.py@gmail.com?subject=B2C%20Retail%20Inquiry">
                  Retail Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            We're Here to Help
          </h2>
          <p className="text-lg font-serif mb-6 max-w-2xl mx-auto">
            We typically respond to inquiries within 24 hours. For urgent matters,
            please call us directly.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-amber-200/30 max-w-2xl mx-auto">
            <p className="font-sans font-medium">
              Response Time: 24 hours
              <br />
              Phone Support: 9 AM - 6 PM IST
              <br />
              Email: Always monitored
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
