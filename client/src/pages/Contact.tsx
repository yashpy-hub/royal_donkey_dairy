import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Page - Rudra Dairy & Farm
 * Contact information and inquiry form
 * Advanced animations and dark mode support
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
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 to-green-50 dark:to-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 dark:text-amber-100 font-serif">
              Contact Rudra Dairy & Farm for donkey milk and powder inquiries, partnerships, and business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-12 animate-slide-in-up">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* WhatsApp */}
            <div className="p-8 bg-gradient-to-br from-green-50 dark:from-green-900/20 to-white dark:to-gray-800 border border-green-200 dark:border-green-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              <MessageCircle className="w-12 h-12 text-green-700 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/919112327322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-sans font-medium"
              >
                +91 9112327322
              </a>
              <p className="text-sm text-gray-600 dark:text-amber-200 font-serif mt-2">
                Business WhatsApp - Quick Response
              </p>
            </div>

            {/* Email 1 */}
            <div className="p-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-white dark:to-gray-800 border border-amber-200 dark:border-amber-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <Mail className="w-12 h-12 text-amber-700 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                Email
              </h3>
              <a
                href="mailto:donkeyfarm79@gmail.com"
                className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 font-sans font-medium break-all text-sm"
              >
                donkeyfarm79@gmail.com
              </a>
            </div>

            {/* Email 2 */}
            <div className="p-8 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-800 border border-blue-200 dark:border-blue-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
              <Mail className="w-12 h-12 text-blue-700 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-amber-50 mb-2">
                Email
              </h3>
              <a
                href="mailto:donkeyfarm79@outlook.com"
                className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-sans font-medium break-all text-sm"
              >
                donkeyfarm79@outlook.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-amber-50 mb-6 animate-slide-in-up">
              Follow Us on Social Media
            </h3>
            <div className="flex justify-center gap-6 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <a
                href="https://instagram.com/rudradairyandform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-pink-50 dark:from-pink-900/20 to-orange-50 dark:to-orange-900/20 border border-orange-200 dark:border-orange-900/30 rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <span className="font-sans font-medium text-gray-900 dark:text-amber-50">
                  Instagram
                </span>
              </a>
              <a
                href="https://facebook.com/rudradairyandform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-blue-100 dark:to-blue-900/20 border border-blue-200 dark:border-blue-900/30 rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="font-sans font-medium text-gray-900 dark:text-amber-50">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-green-50 dark:from-green-950 to-amber-50 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-amber-50 mb-12 animate-slide-in-up">
            Send Us a Message
          </h2>

          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl border border-amber-200 dark:border-amber-900/30 shadow-sm animate-fade-scale">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-amber-100 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-700 dark:focus:ring-amber-600 focus:border-transparent font-sans transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-amber-100 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-700 dark:focus:ring-amber-600 focus:border-transparent font-sans transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-amber-100 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-700 dark:focus:ring-amber-600 focus:border-transparent font-sans transition-all duration-200"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-amber-100 mb-2">
                  I'm interested in
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-700 dark:focus:ring-amber-600 focus:border-transparent font-sans transition-all duration-200"
                >
                  <option value="b2b">B2B Partnership</option>
                  <option value="b2c">B2C / Retail</option>
                  <option value="wholesale">Wholesale Distribution</option>
                  <option value="cosmetics">Cosmetics Industry</option>
                  <option value="pharmaceutical">Pharmaceutical</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-amber-100 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-700 dark:focus:ring-amber-600 focus:border-transparent font-sans transition-all duration-200"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-sans font-medium h-12 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-gradient-to-br from-amber-700 dark:from-amber-900 to-green-800 dark:to-green-900 text-white transition-colors duration-300">
        <div className="container mx-auto px-4 text-center animate-slide-in-up">
          <h2 className="text-3xl font-display font-bold mb-4">
            We're Here to Help
          </h2>
          <p className="text-lg font-serif mb-6 max-w-2xl mx-auto">
            Rudra Dairy & Farm is committed to providing quick and professional support for all your donkey milk and powder requirements.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-amber-200/30 max-w-2xl mx-auto">
            <p className="font-sans font-medium">
              WhatsApp Response: Immediate
              <br />
              Email Response: Within 24 hours
              <br />
              Business Hours: 9 AM - 6 PM IST (Monday - Saturday)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
